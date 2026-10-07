// Layered export of the idle pose: one SVG per body part, same 400x400 canvas, stacking back to the full character.
import fs from 'node:fs';
import path from 'node:path';
import { chromium, rigPage, ASSETS, here, write } from './lib/pw.mjs';

const b = await chromium.launch();
const page = await rigPage(b, { width: 500, height: 500 });
await page.addScriptTag({ path: path.join(here, 'svgclean.js') });
await page.addScriptTag({ path: path.join(here, 'pose.js') });
await page.addStyleTag({ content: '#host{width:400px;height:400px;position:absolute;left:0;top:0}#host svg{width:100%;height:100%}' });

await page.evaluate(() => {
  /* node lookup by rig structure (see 01-pip.js build order) */
  window.nodes = svg => {
    const main = svg.children[1], root = main.children[2], rc = [...root.children], body = rc[5], bc = [...body.children];
    const eye = i => { const e = bc[11 + i], ec = [...e.children], inner = ec[1], ic = [...inner.children]; return { sclera: [ec[0], ic[0]], iris: [ic[1]], rim: [ic[3], ec[2]], lids: [ec[3], ec[4], ec[5]], eg: e }; };
    const arm = k => { const a = root.children[13].children[k]; const armEl = k === 0 ? a : a.children[0]; return armEl; };
    const armL = arm(0), armR = arm(1);
    const eL = eye(0), eR = eye(1);
    return {
      main, root, shadow: main.children[0],
      keyring: [rc[1]], nub: [rc[2]], blade: [rc[3]],
      footL: [rc[4].children[0], rc[4].children[1]], footR: [rc[4].children[2], rc[4].children[3]],
      body: bc.slice(0, 8), belt: [bc[8]], cheeks: [bc[9], bc[10]],
      eL, eR, browL: [bc[13]], browR: [bc[14]], mouth: [bc[15]], domeShade: [bc[16]], pin: [rc[6]],
      armL: [...armL.children].slice(0, 4), armR: [...armR.children].slice(0, 4),
      handL: [armL.children[4]], handR: [armR.children[4]], armLel: armL, armRel: armR,
    };
  };
  /* canvas coordinates of a local point of an element */
  window.canvasPt = (svg, el, x, y) => { const m = el.getCTM(); return [+(m.a * x + m.c * y + m.e).toFixed(1), +(m.b * x + m.d * y + m.f).toFixed(1)]; };
  window.bboxOf = els => { let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; els.forEach(el => { const l = el.matches('g') ? [...el.querySelectorAll('*')].filter(e => !e.children.length && !e.closest('defs')) : [el]; l.forEach(e => { let h = false; for (let p = e; p && p.localName !== 'svg'; p = p.parentNode) if (p.style && p.style.display === 'none') h = true; if (h) return; const r = e.getBoundingClientRect(); if (r.width || r.height) { x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom); } }); }); return x1 < x0 ? null : [x0, y0, x1 - x0, y1 - y0].map(v => +v.toFixed(1)); };
  window.layerSvg = (theme, keepList, name, o = {}) => {
    const { m } = mountPose(theme, 'idle', 3.0, 3.0);
    const N = nodes(m.svg), svg = m.svg;
    const keep = new Set(keepList(N));
    const bbox = o.all ? null : bboxOf([...keep]);
    const pivots = o.pivots ? o.pivots(N, svg) : null;
    const walk = e => {
      if (e.localName === 'defs') return;
      if (keep.has(e)) return;
      let has = false; for (const k of keep) if (e !== k && e.contains(k)) { has = true; break; }
      if (!has) { e.style.display = 'none'; return; }
      [...e.children].forEach(walk);
    };
    if (!o.all) [...svg.children].forEach(walk);
    if (o.outline) N.shadow.style.display = 'none';
    const d = PIPX.clean(svg, { prefix: `pip-${theme}-${name}` });
    if (o.outline) PIPX.addOutline(d, `pip-${theme}-${name}-ol`, true);
    return { svg: PIPX.finish(d, `Pip Prime ${theme} layer ${name}`), bbox, pivots };
  };
});

/* layer table: file, label, how to find the nodes, pivot(s) in canvas coordinates */
const LAYERS = [
  { id: '00-shadow', label: 'Ground shadow', sel: N => [N.shadow], pivot: N => [200, 350] },
  { id: '05-outline', label: 'Warm outline (light theme only)', sel: null, lightOnly: true, pivot: () => [200, 345] },
  { id: '10-keyring', label: 'Keyring tail', sel: N => N.keyring, pivot: (N, s) => canvasPt(s, N.keyring[0], 286, 284) },
  { id: '20-opener-nub', label: 'Opener nub', sel: N => N.nub, pivot: (N, s) => canvasPt(s, N.nub[0], 0, 0) },
  { id: '30-blade-quiff', label: 'Blade quiff (tool on the dome)', sel: N => N.blade, pivot: (N, s) => canvasPt(s, N.blade[0], 0, 0) },
  { id: '40-foot-left', label: 'Foot, left', sel: N => N.footL, pivot: () => [172, 332] },
  { id: '41-foot-right', label: 'Foot, right', sel: N => N.footR, pivot: () => [228, 332] },
  { id: '50-body', label: 'Body capsule (gradients, bevel, highlights)', sel: N => N.body, pivot: (N, s) => canvasPt(s, N.root, 200, 345) },
  { id: '52-belt', label: 'Steel belt with rivets', sel: N => N.belt, pivot: () => [200, 279] },
  { id: '54-cheeks', label: 'Cheek blush', sel: N => N.cheeks, pivot: () => [200, 236] },
  { id: '60-eye-left-sclera', label: 'Left eye: white and socket shadow', sel: N => N.eL.sclera, pivot: (N, s) => canvasPt(s, N.eL.eg, 0, 0) },
  { id: '61-eye-left-iris', label: 'Left eye: iris, pupil, glints', sel: N => N.eL.iris, pivot: (N, s) => canvasPt(s, N.eL.eg, 0, 0) },
  { id: '62-eye-left-rim', label: 'Left eye: rim and shade', sel: N => N.eL.rim, pivot: (N, s) => canvasPt(s, N.eL.eg, 0, 0) },
  { id: '63-eye-left-lids', label: 'Left eye: lids and lashes', sel: N => N.eL.lids, pivot: (N, s) => canvasPt(s, N.eL.eg, 0, 0) },
  { id: '64-eye-right-sclera', label: 'Right eye: white and socket shadow', sel: N => N.eR.sclera, pivot: (N, s) => canvasPt(s, N.eR.eg, 0, 0) },
  { id: '65-eye-right-iris', label: 'Right eye: iris, pupil, glints', sel: N => N.eR.iris, pivot: (N, s) => canvasPt(s, N.eR.eg, 0, 0) },
  { id: '66-eye-right-rim', label: 'Right eye: rim and shade', sel: N => N.eR.rim, pivot: (N, s) => canvasPt(s, N.eR.eg, 0, 0) },
  { id: '67-eye-right-lids', label: 'Right eye: lids and lashes', sel: N => N.eR.lids, pivot: (N, s) => canvasPt(s, N.eR.eg, 0, 0) },
  { id: '70-brow-left', label: 'Eyebrow, left', sel: N => N.browL, pivot: (N, s) => canvasPt(s, N.browL[0], 0, 0) },
  { id: '71-brow-right', label: 'Eyebrow, right', sel: N => N.browR, pivot: (N, s) => canvasPt(s, N.browR[0], 0, 0) },
  { id: '80-mouth', label: 'Mouth', sel: N => N.mouth, pivot: (N, s) => canvasPt(s, N.mouth[0], 0, 0) },
  { id: '85-dome-shade', label: 'Soft shadow where the blade meets the dome', sel: N => N.domeShade, pivot: () => [208, 149] },
  { id: '90-pivot-pin', label: 'Steel pivot pin and strap on the dome', sel: N => N.pin, pivot: () => [212, 140] },
  { id: '92-arm-left', label: 'Arm, left (segment)', sel: N => N.armL.slice(0, 2), pivot: (N, s) => canvasPt(s, N.armLel, 0, 0) },
  { id: '93-arm-right', label: 'Arm, right (segment)', sel: N => N.armR.slice(0, 2), pivot: (N, s) => canvasPt(s, N.armRel, 0, 0) },
  { id: '94-shoulder-rivet-left', label: 'Shoulder rivet, left (the side knob the app calls the ear rivet)', sel: N => N.armL.slice(2, 4), pivot: (N, s) => canvasPt(s, N.armLel, 0, 0), parent: '92-arm-left', parentPivot: (N, s) => canvasPt(s, N.armLel, 0, 0) },
  { id: '95-shoulder-rivet-right', label: 'Shoulder rivet, right (the side knob the app calls the ear rivet)', sel: N => N.armR.slice(2, 4), pivot: (N, s) => canvasPt(s, N.armRel, 0, 0), parent: '93-arm-right', parentPivot: (N, s) => canvasPt(s, N.armRel, 0, 0) },
  { id: '96-hand-left', label: 'Hand, left (open mitt)', sel: N => N.handL, pivot: (N, s) => canvasPt(s, N.armLel, 0, 34), parent: '92-arm-left', parentPivot: (N, s) => canvasPt(s, N.armLel, 0, 0) },
  { id: '97-hand-right', label: 'Hand, right (open mitt)', sel: N => N.handR, pivot: (N, s) => canvasPt(s, N.armRel, 0, 34), parent: '93-arm-right', parentPivot: (N, s) => canvasPt(s, N.armRel, 0, 0) },
];

const out = {};
for (const theme of ['dark', 'light']) {
  const dir = path.join(ASSETS, 'character', 'layers', theme);
  fs.rmSync(dir, { recursive: true, force: true });
  const entries = [];
  let z = 0;
  for (const L of LAYERS) {
    if (L.lightOnly && theme !== 'light') continue;
    const name = L.id;
    const r = L.sel
      ? await page.evaluate(([th, id, selSrc, pivSrc, parSrc]) => {
          const sel = eval(selSrc), piv = eval(pivSrc), par = parSrc ? eval(parSrc) : null;
          let pivots = null;
          const res = layerSvg(th, sel, id, { pivots: (N, s) => ({ pivot: piv(N, s), parentPivot: par ? par(N, s) : null }) });
          return res;
        }, [theme, name, L.sel.toString(), L.pivot.toString(), L.parentPivot ? L.parentPivot.toString() : null])
      : await page.evaluate(([th, id]) => layerSvg(th, N => [], id, { all: true, outline: true }), [theme, name]);
    write(path.join(dir, `${name}.svg`), r.svg);
    entries.push({ order: z++, id: name, file: `${name}.svg`, label: L.label, bbox: r.bbox || [0, 0, 400, 400], pivot: r.pivots ? r.pivots.pivot : [200, 345], parentLayer: L.parent || null, parentPivot: r.pivots ? r.pivots.parentPivot : null });
  }
  out[theme] = entries;
  write(path.join(dir, 'index.json'), (o => '{\n' + Object.entries(o).map(([k, v]) => k === 'layers' ? ' "layers": [\n' + v.map(e => '  ' + JSON.stringify(e)).join(',\n') + '\n ]' : ' ' + JSON.stringify(k) + ': ' + JSON.stringify(v)).join(',\n') + '\n}\n')({
    theme, canvas: [400, 400], pose: 'idle (t = 3.0 s), looking straight ahead',
    rigNotes: 'Pip has no ears and no legs in the current rig. The catalogue zone called ear rivets maps to the two shoulder rivets on the arms; the legs and feet zone maps to the two foot ovals (there is no leg). The tail is the keyring.',
    note: 'Layers are listed back to front. Stack them at the same position and size (0,0 to 400,400) to rebuild the character. pivot = point to rotate or scale the layer around, in canvas pixels. parentLayer = move/rotate this layer together with its parent (hand follows arm; rotate the hand around its own pivot first, then the arm around parentPivot).',
    layers: entries,
  }));
}
fs.writeFileSync(path.join(here, '..', '_layers.json'), JSON.stringify(out));
console.log(page.errs.length ? 'ERRORS ' + page.errs.join('\n') : 'no console errors', Object.values(out)[0].length, 'layers');
await b.close();

// Captures Pip from the live rig into standalone SVGs, PNGs and layered SVGs.
import fs from 'node:fs';
import path from 'node:path';
import { chromium, rigPage, render, ASSETS, here, write, mkdir } from './lib/pw.mjs';

const THEMES = ['dark', 'light'];
const SIZES = [256, 512, 1024];
/* Freeze frames: t = global clock, mt = seconds since the mood started. */
export const POSES = {
  idle:       { t: 3.0,  mt: 3.0 },
  happy:      { t: 4.0,  mt: 0.2856 },
  wink:       { t: 4.0,  mt: 0.6 },
  surprised:  { t: 4.0,  mt: 0.5 },
  thinking:   { t: 4.0,  mt: 2.0 },
  working:    { t: 4.0,  mt: 1.7017 },
  celebrate:  { t: 4.0,  mt: 0.9 * 3 + 0.9 * 0.3 },
  sleepy:     { t: 3.571, mt: 3.571 },
  levelup:    { t: 4.0,  mt: 0.9 },
  signature:  { t: 4.0,  mt: 1.22 },
};
/* extras: same rig, other tools out on the quiff, a mouth-open frame */
export const EXTRA = {
  'mouth-open':      { mood: 'happy', t: 4.0, mt: 0.2856 + 0.0 },
  'tool-scissors':   { mood: 'signature', t: 4.0, mt: 0.36 },
  'tool-lens':       { mood: 'signature', t: 4.0, mt: 0.66 },
  'tool-crop':       { mood: 'signature', t: 4.0, mt: 0.96 },
  'tool-clapper':    { mood: 'signature', t: 4.0, mt: 1.22 },
};
const only = process.argv.slice(2);

export function stateFor(mood, t, mt) {
  return { t, mood, mt, prev: mood, blend: 1, look: { x: 0, y: 0 }, poke: 99, pokes: 0, hover: false, small: false };
}

const b = await chromium.launch();
const page = await rigPage(b, { width: 500, height: 500 });
await page.addScriptTag({ path: path.join(here, 'svgclean.js') });
await page.addStyleTag({ content: '#host{width:400px;height:400px;position:absolute;left:0;top:0}#host svg{width:100%;height:100%}' });

/* ---- in-page helpers ---- */
await page.evaluate(() => {
  window.mountPose = (theme, mood, t, mt, o = {}) => {
    const host = document.getElementById('host'); host.innerHTML = '';
    const m = CAST.mount(CAST.chars.find(c => c.id === 'pip-' + theme), host);
    // find a t with no blink in progress, near the requested one
    let tt = t; if (!o.keepT) for (let k = 0; k < 400 && CAST.life(tt, 11).blink > 0; k++) tt += 0.01;
    window.__fb = o.forceBlink ?? undefined;
    const N = 18, dtStep = 1 / 60;
    for (let i = N; i >= 0; i--) {
      const d = -i * dtStep, mm = mt + d; if (mm < 0) continue;
      m.update({ t: tt + d, mood, mt: mm, prev: mood, blend: 1, look: { x: 0, y: 0 }, poke: 99, pokes: 0, hover: false, small: false });
    }
    return { m, t: tt };
  };
  window.findBlink = () => { let best = [0, 0]; for (let t = 0; t < 60; t += 0.002) { const q = t % 7, r = (t + 3.5) % 9; if (q < 1.3 || r < 1.7) continue; const b = CAST.life(t, 11).blink; if (b > best[1]) best = [t, b]; } return best; };
  window.fullSvg = (theme, mood, t, mt, name, o = {}) => {
    const { m } = window.mountPose(theme, mood, t, mt, o);
    const d = PIPX.clean(m.svg, { prefix: `pip-${theme}-${name}` });
    if (theme === 'light') PIPX.addOutline(d, `pip-light-${name}-outline`, false);
    return PIPX.finish(d, `Pip Prime, ${theme === 'dark' ? 'Turkish blue' : 'creamy white'}, ${name.replace(/-/g, ' ')}`);
  };
  window.extent = () => { // union bbox of visible non-shadow art
    const svg = document.querySelector('#host svg'); const main = svg.children[1];
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    [main.children[2]].forEach(g => g.querySelectorAll('*').forEach(e => {
      if (e === g.children[0]) return;
      if (e.closest('defs') || e.children.length || e.style.display === 'none' || e.parentNode === g && e === g.children[0]) return;
      if (g.children[0].contains(e)) return;
      let h = false; for (let p = e; p && p !== svg; p = p.parentNode) if (p.style && p.style.display === 'none') h = true; if (h) return;
      const r = e.getBoundingClientRect(); if (!r.width && !r.height) return;
      x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom);
    }));
    return [x0, y0, x1, y1].map(v => +v.toFixed(1));
  };
});

await page.evaluate(() => {
  window.fitMt = (theme, mood, t, mt0, margin = 3) => {
    for (let k = 0; k <= 40; k++) for (const sgn of (k ? [1, -1] : [1])) {
      const mt = +(mt0 + sgn * k * 0.01).toFixed(4); if (mt < 0) continue;
      mountPose(theme, mood, t, mt); const [x0, y0, x1, y1] = extent();
      if (x0 >= margin && y0 >= margin && x1 <= 400 - margin && y1 <= 400 - margin) return mt;
    }
    return mt0;
  };
});
const [blinkT] = await page.evaluate(() => findBlink());
console.log('blink frame t =', blinkT);

const svgRoot = path.join(ASSETS, 'character', 'svg');
const pngRoot = path.join(ASSETS, 'character', 'png');
const rpage = await b.newPage();
const written = [];
const extents = {};
for (const theme of THEMES) {
  const jobs = [];
  for (const [mood, p] of Object.entries(POSES)) jobs.push({ name: mood, mood, ...p });
  jobs.push({ name: 'idle-eyes-closed', mood: 'idle', t: 3.0, mt: 3.0, blinkT: 1 });
  for (const [n, p] of Object.entries(EXTRA)) jobs.push({ name: n, ...p });
  for (const j of jobs) {
    if (only.length && !only.includes(j.name)) continue;
    if (!j.blinkT && !j.noFit) { const m2 = await page.evaluate(([th, j]) => fitMt(th, j.mood, j.t, j.mt), [theme, j]); if (m2 !== j.mt) console.log('fit', theme, j.name, j.mt, '->', m2); j.mt = m2; }
    const svg = await page.evaluate(([th, j]) => fullSvg(th, j.mood, j.t, j.mt, j.name, j.blinkT != null ? { forceBlink: 1, keepT: true } : {}), [theme, j]);
    extents[`${theme}/${j.name}`] = await page.evaluate(() => extent());
    const f = path.join(svgRoot, theme, `pip-${j.name}.svg`); write(f, svg); written.push(f);
    for (const s of SIZES) {
      const buf = await render(rpage, svg, s);
      const pf = path.join(pngRoot, theme, `pip-${j.name}-${s}.png`); write(pf, buf);
    }
  }
}
fs.writeFileSync(path.join(here, '..', '_extents.json'), JSON.stringify(extents, null, 1));
console.log(page.errs.length ? 'ERRORS ' + page.errs.join('\n') : 'no console errors');
await b.close();

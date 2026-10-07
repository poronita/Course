/* Alpi: a young alpine ibex whose horns are two brushed-steel folding blades. */
CAST.register({
  id: 'alpi', order: 7, name: 'Alpi',
  tagline: 'Sure-footed. Sharp. Always on top.',
  concept: 'Alpi is a young alpine ibex. It nods to the Swiss in the name without a flag. Its horns are two steel folding blades with ridges, a pivot and a nail nick. It climbs any task and lands on its feet.',
  signature: 'Two swept-back blade horns make the shape. The move: a hop onto an invisible ledge, a head toss that flashes the steel, then a playful head-butt toward you.',
  why: ['Two blade horns read as a knife and an ibex at once.', 'Red knife-handle scales and a big red scarf carry the brand colour on every frame.', 'Cream brows on chestnut fur give big, clear acting.'],
  risks: ['A goat can feel rural or rough if the steel is not kept crisp.', 'Four legs and a scarf add detail that drops out below 48 px.'],
  voice: 'Up we go. Your photo is ready.',
  scores: { memorable: 4, stylish: 4, expressive: 4, small: 5, fit: 5 },
  palette: ['#E5322B', '#9C6542', '#EFE4CF', '#C3CBD3', '#F2B829'],
  bg: '#2C4256', iconBg: '#1F3044', icon: { viewBox: '68 38 264 264' },
  build(g, A) {
    const { lerp, clamp, seg, ease, wobble } = A;
    const PI = Math.PI, sin = Math.sin, cos = Math.cos, exp = Math.exp;
    const FUR = '#8E5A3A', FUR_D = '#5C3A26', CREAM = '#EFE4CF', INK = '#24160F', RED = '#E5322B';

    /* ---------- gradients ---------- */
    A.grad('fur', [[0, '#D39A68'], [0.5, '#A36A44'], [1, '#62402A']], { radial: true, cx: 0.36, cy: 0.26, r: 0.85 });
    A.grad('furB', [[0, '#C08657'], [0.55, '#93603D'], [1, '#583824']], { radial: true, cx: 0.3, cy: 0.2, r: 0.95 });
    A.grad('furD', [[0, '#73492F'], [1, '#3E271A']]);
    A.grad('sock', [[0, '#4E3122'], [1, '#2C1B12']]);
    A.grad('cream', [[0, '#FAF3E6'], [1, '#DCCCB0']]);
    A.grad('red', [[0, '#FF5A4A'], [0.5, '#E5322B'], [1, '#A81B16']]);
    A.grad('redT', [[0, '#E5322B'], [1, '#B21F19']], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('steel', [[0, '#5D6873'], [0.18, '#C7CFD7'], [0.34, '#F7FAFC'], [0.5, '#9AA5B0'], [0.66, '#D9E0E6'], [0.82, '#7E8A96'], [1, '#B8C2CC']], { units: 'userSpaceOnUse', x1: 60, y1: 140, x2: 190, y2: 30 });
    A.grad('bevel', [[0, '#FFFFFF'], [0.5, '#DDE4EA'], [1, '#A9B4BE']], { units: 'userSpaceOnUse', x1: 90, y1: 60, x2: 170, y2: 130 });
    A.grad('rivet', [[0, '#FFFFFF'], [0.45, '#BCC5CE'], [1, '#5C6670']], { radial: true, cx: 0.35, cy: 0.35, r: 0.7 });
    A.grad('glint', [[0, '#fff', 0], [0.5, '#fff', 0.95], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('iris', [[0, '#F3C46A'], [0.45, '#C7812C'], [0.85, '#6A3A12'], [1, '#2A170A']], { radial: true, cx: 0.5, cy: 0.55, r: 0.5 });
    A.grad('sclera', [[0, '#E7E2DA'], [0.35, '#FFFFFF'], [1, '#FBF8F2']]);
    A.grad('gold', [[0, '#FFF2B0'], [0.45, '#F7C843'], [0.8, '#D99A1A'], [1, '#9C6510']], { radial: true, cx: 0.38, cy: 0.32, r: 0.75 });
    A.grad('goldRim', [[0, '#FFE58A'], [1, '#B47A12']]);
    A.grad('shadow', [[0, '#000', 0.42], [1, '#000', 0]], { radial: true });

    /* ---------- horn geometry (left horn; the right one is mirrored) ---------- */
    const P0 = [181, 146], P1 = [177, 96], P2 = [148, 50], P3 = [76, 50], HW = 44;
    const bz = u => { const a = (1 - u) ** 3, b = 3 * (1 - u) ** 2 * u, c = 3 * (1 - u) * u * u, d = u ** 3; return [a * P0[0] + b * P1[0] + c * P2[0] + d * P3[0], a * P0[1] + b * P1[1] + c * P2[1] + d * P3[1]]; };
    const bzd = u => { const a = -3 * (1 - u) ** 2, b = 3 * (1 - u) ** 2 - 6 * (1 - u) * u, c = 6 * (1 - u) * u - 3 * u * u, d = 3 * u * u; return [a * P0[0] + b * P1[0] + c * P2[0] + d * P3[0], a * P0[1] + b * P1[1] + c * P2[1] + d * P3[1]]; };
    const frame = u => { const p = bz(u), d = bzd(u), l = Math.hypot(d[0], d[1]) || 1; return { p, t: [d[0] / l, d[1] / l], n: [d[1] / l, -d[0] / l] }; };
    const width = u => HW * Math.pow(1 - u, 0.72) * (u > 0.9 ? 1 : 1);
    /* side +n is the outer (convex) spine with knobby ridges; side -n is the cutting edge. */
    const at = (u, k) => { const f = frame(u), w = width(u); return [f.p[0] + f.n[0] * w * k, f.p[1] + f.n[1] * w * k]; };
    const ridgeAmp = u => (u < 0.38 || u > 0.84 ? 0 : 3.6 * (1 - u) * Math.pow(Math.abs(sin(u * PI * 11)), 0.6));
    const fmt = p => p[0].toFixed(1) + ' ' + p[1].toFixed(1);
    const N = 64;
    let spine = [], edge = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N, f = frame(u), w = width(u), r = ridgeAmp(u);
      spine.push([f.p[0] + f.n[0] * (w * 0.5 + r), f.p[1] + f.n[1] * (w * 0.5 + r)]);
      edge.push([f.p[0] - f.n[0] * w * 0.5, f.p[1] - f.n[1] * w * 0.5]);
    }
    const tipX = P3[0] - 4, tipY = P3[1] + 1;
    const hornD = 'M' + fmt(edge[0]) + ' L' + spine.map(fmt).join(' L') + ` L${tipX} ${tipY} L` + edge.slice().reverse().map(fmt).join(' L') + ' Z';
    const grind = []; for (let i = 6; i <= N - 2; i++) grind.push(at(i / N, -0.5 + 0.36 * (1 - i / N * 0.4)));
    const bevelD = 'M' + edge.slice(6, N - 1).map(fmt).join(' L') + ' L' + grind.slice().reverse().map(fmt).join(' L') + ' Z';
    const grindD = 'M' + grind.map(fmt).join(' L');
    const edgeD = 'M' + edge.slice(8, N).map(fmt).join(' L');
    const brush = k => { const pts = []; for (let i = 10; i <= N - 6; i++) pts.push(at(i / N, k)); return 'M' + pts.map(fmt).join(' L'); };
    let ridgesD = '', ridgesL = '';
    for (let k = 4; k <= 9; k++) {
      const u = (k + 0.5) / 11; if (u > 0.82) break;
      const a = at(u, 0.5), b = at(u, 0.24), a2 = at(u + 0.012, 0.48), b2 = at(u + 0.012, 0.27);
      ridgesD += `M${fmt(a)} L${fmt(b)} `; ridgesL += `M${fmt(a2)} L${fmt(b2)} `;
    }
    const rivetP = at(0.22, 0.04), nickU = 0.46, nf = frame(nickU), nc = at(nickU, 0.12);
    const nickD = `M${fmt([nc[0] - nf.t[0] * 7 + nf.n[0] * 2, nc[1] - nf.t[1] * 7 + nf.n[1] * 2])} Q${fmt([nc[0] - nf.n[0] * 4, nc[1] - nf.n[1] * 4])} ${fmt([nc[0] + nf.t[0] * 7 + nf.n[0] * 2, nc[1] + nf.t[1] * 7 + nf.n[1] * 2])}`;
    /* red knife-handle scale at the horn root, ending in a steel bolster */
    const hU0 = 0.04, hU1 = 0.33, hs = [], he = [];
    for (let i = 0; i <= 12; i++) { const u = lerp(hU0, hU1, i / 12); hs.push(at(u, 0.8)); he.push(at(u, -0.8)); }
    const handleD = 'M' + hs.map(fmt).join(' L') + ' L' + he.reverse().map(fmt).join(' L') + ' Z';
    const bolsterD = `M${fmt(at(hU1, 0.62))} L${fmt(at(hU1, -0.56))}`;
    const handleHiD = (() => { const q = []; for (let i = 1; i <= 11; i++) q.push(at(lerp(hU0, hU1, i / 12) - 0.012, 0.3)); return 'M' + q.map(fmt).join(' L'); })();
    const hornClip = A.el('clipPath', { id: A.id('hornClip') }, A.defs);
    A.el('path', { d: hornD }, hornClip);

    /* ---------- helpers ---------- */
    const star = (r, k = 0.28) => { let d = ''; for (let i = 0; i < 8; i++) { const a = i * PI / 4 - PI / 2, rr = i % 2 ? r * k : r; d += (i ? 'L' : 'M') + (cos(a) * rr).toFixed(2) + ' ' + (sin(a) * rr).toFixed(2); } return d + 'Z'; };

    /* ---------- stage and ground ---------- */
    const shadow = A.el('ellipse', { cx: 236, cy: 343, rx: 92, ry: 11, fill: A.url('shadow') }, g);
    const ledgeLine = A.el('path', { d: 'M120 0 L340 0', stroke: '#DCEBFA', 'stroke-width': 2.5, 'stroke-linecap': 'round', opacity: 0 }, g);
    const dust = A.el('g', { opacity: 0 }, g);
    const dustP = [-1, 1, -0.5, 0.6].map((d, i) => A.el('circle', { cx: 0, cy: 0, r: 6, fill: '#E9EEF2', opacity: 0.7 }, dust));

    /* ---------- working prop: an image file ---------- */
    const card = A.el('g', {}, g);
    A.el('path', { d: 'M-34 -30 L20 -30 L34 -16 L34 30 L-34 30 Z', fill: '#F7F4EE', stroke: '#C9C1B4', 'stroke-width': 2, 'stroke-linejoin': 'round' }, card);
    A.el('path', { d: 'M20 -30 L20 -16 L34 -16', fill: '#E3DCD0', stroke: '#C9C1B4', 'stroke-width': 2, 'stroke-linejoin': 'round' }, card);
    A.el('rect', { x: -26, y: -20, width: 50, height: 38, rx: 4, fill: '#BFDDF2' }, card);
    A.el('circle', { cx: 12, cy: -9, r: 5, fill: '#F7C843' }, card);
    A.el('path', { d: 'M-26 18 L-10 -2 L0 8 L8 0 L24 18 Z', fill: RED }, card);
    A.el('path', { d: 'M-10 -2 L-5 4 L-14 4 Z', fill: '#fff', opacity: 0.85 }, card);
    const cardBar = A.el('rect', { x: -26, y: 22, width: 0, height: 3, rx: 1.5, fill: RED }, card);
    A.el('path', { d: 'M-34 -24 L34 -24', stroke: RED, 'stroke-width': 1.6, 'stroke-dasharray': '4 3', opacity: 0.9 }, card);
    const strip = A.el('rect', { x: -32, y: -3, width: 64, height: 6, rx: 1, fill: '#F7F4EE', stroke: '#C9C1B4', 'stroke-width': 1.2, opacity: 0 }, g);

    /* ---------- character ---------- */
    const root = A.el('g', {}, g);

    const mkLeg = (parent, x, y, dark, hind) => {
      const lg = A.el('g', {}, parent), thigh = A.el('g', {}, lg);
      const fill = dark ? A.url('furD') : A.url('furB');
      A.el('path', { d: hind ? 'M-12 -12 C-14 4 -10 16 -6 25 L6 25 C10 14 13 0 11 -12 Z' : 'M-8 -8 C-9 6 -7 16 -6 25 L6 25 C7 16 9 6 8 -8 Z', fill }, thigh);
      const shin = A.el('g', {}, thigh);
      A.el('path', { d: 'M-6.5 21 C-6.5 31 -5.5 35 -5.5 39 L5.5 39 C5.5 35 6.5 31 6.5 21 Z', fill: dark ? '#2E1D14' : A.url('sock') }, shin);
      if (!dark) A.el('path', { d: 'M3.5 24 L3 36', stroke: '#8A5E44', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: 0.7 }, shin);
      A.el('path', { d: 'M-6.5 37 L6.5 37 L8 46 Q0 47.5 -8 46 Z', fill: dark ? '#14100D' : '#1E1612' }, shin);
      A.el('path', { d: 'M0 40 L0 46.5', stroke: dark ? '#3a3531' : '#5A4E46', 'stroke-width': 1.4 }, shin);
      return { g: lg, thigh, shin, x, y };
    };
    const setLeg = (L, a, b) => { A.tf(L.g, L.x, L.y); A.tf(L.thigh, 0, 0, a); A.tf(L.shin, 0, 0, b, 1, 1, 0, 24); };

    const tail = A.el('g', {}, root);
    A.el('path', { d: 'M-3 2 C0 -10 8 -18 16 -21 C14 -12 10 -3 5 5 Z', fill: FUR_D }, tail);
    A.el('path', { d: 'M8 -12 C11 -16 14 -19 16 -21 C15 -16 13 -12 11 -9 Z', fill: INK, opacity: 0.6 }, tail);
    const legHF = mkLeg(root, 266, 300, true, true);
    const legFF = mkLeg(root, 214, 297, true, false);
    // torso
    A.el('path', { d: 'M172 272 C172 252 196 246 222 250 C256 254 296 254 306 278 C312 300 294 318 264 320 C236 322 200 322 184 314 C170 306 170 290 172 272 Z', fill: A.url('furB') }, root);
    A.el('path', { d: 'M186 315 C210 321 244 322 270 317 C254 326 212 327 190 321 Z', fill: CREAM, opacity: 0.85 }, root);
    A.el('path', { d: 'M226 252 C258 253 290 257 302 270 C292 262 262 259 226 258 Z', fill: '#4A2E1F', opacity: 0.85 }, root);
    A.el('path', { d: 'M236 251 C264 252 292 256 304 270', stroke: '#A8D0F0', 'stroke-width': 2.4, fill: 'none', 'stroke-linecap': 'round', opacity: 0.55 }, root);
    A.el('path', { d: 'M307 284 C306 302 292 316 266 319', stroke: '#A8D0F0', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round', opacity: 0.4 }, root);
    A.el('ellipse', { cx: 202, cy: 292, rx: 19, ry: 22, fill: A.url('cream') }, root);
    const legHN = mkLeg(root, 288, 300, false, true);
    // scarf tails (behind band, in front of torso)
    const scarfT = A.el('g', {}, root);
    const tailA = A.el('g', {}, scarfT), tailB = A.el('g', {}, scarfT);
    const TA = 'M-6 -4 C10 6 24 26 31 56 L22 51 L16 62 C11 40 2 20 -14 6 Z', TB = 'M-4 -2 C4 10 8 26 7 44 L0 39 L-7 48 C-5 30 -8 14 -14 4 Z';
    const mkTail = (grp, d, fill, stripes) => {
      A.el('path', { d, fill, stroke: '#8A1410', 'stroke-width': 1.2, 'stroke-linejoin': 'round' }, grp);
      const cid = A.id('st' + stripes); const cp = A.el('clipPath', { id: cid }, A.defs); A.el('path', { d }, cp);
      const sg = A.el('g', { 'clip-path': `url(#${cid})` }, grp);
      if (stripes === 1) { A.el('path', { d: 'M4 40 L34 30 M6 46 L36 36', stroke: CREAM, 'stroke-width': 2.6, opacity: 0.9 }, sg); A.el('path', { d: 'M2 6 C10 14 18 28 22 44', stroke: '#FF8A7C', 'stroke-width': 2, fill: 'none', opacity: 0.55 }, sg); }
      else { A.el('path', { d: 'M-14 28 L14 24 M-14 34 L14 30', stroke: CREAM, 'stroke-width': 2.6, opacity: 0.9 }, sg); }
    };
    mkTail(tailA, TA, A.url('redT'), 1); mkTail(tailB, TB, A.url('red'), 2);
    const legFN = mkLeg(root, 190, 297, false, false);
    // scarf band
    const scarf = A.el('g', {}, root);
    A.el('path', { d: 'M150 238 C174 262 228 262 252 238 L258 264 C232 296 170 296 144 264 Z', fill: A.url('red'), stroke: '#8A1410', 'stroke-width': 1.4, 'stroke-linejoin': 'round' }, scarf);
    A.el('path', { d: 'M148 252 C174 278 228 278 255 252', stroke: '#9E1813', 'stroke-width': 2, fill: 'none', opacity: 0.55 }, scarf);
    A.el('path', { d: 'M152 241 C176 264 226 264 250 241', stroke: '#FF8A7C', 'stroke-width': 2, fill: 'none', opacity: 0.7 }, scarf);
    if (!A.small) for (let i = 0; i < 9; i++) { const x = 160 + i * 10.5, y0 = 254 + 0.012 * (x - 201) ** 2 * 0.9, y1 = y0 + 22 - 0.004 * (x - 201) ** 2; A.el('path', { d: `M${x} ${(y0 - 8).toFixed(1)} L${x - 1} ${(y1 - 8).toFixed(1)}`, stroke: '#A81B16', 'stroke-width': 1.4, opacity: 0.35, 'stroke-linecap': 'round' }, scarf); }
    A.el('path', { d: 'M222 262 C226 248 246 246 254 258 C260 270 250 286 236 284 C224 282 218 272 222 262 Z', fill: A.url('red'), stroke: '#8A1410', 'stroke-width': 1.4 }, scarf);
    A.el('path', { d: 'M228 259 C232 253 242 252 247 257', stroke: '#FFB0A6', 'stroke-width': 2, fill: 'none', 'stroke-linecap': 'round' }, scarf);
    const legFNfront = legFN; // drawn after tails, before head

    /* ---------- head ---------- */
    const head = A.el('g', {}, root);
    const hornsL = A.el('g', {}, head);
    const mir = A.el('g', { transform: 'translate(400 0) scale(-1 1)' }, head);
    const hornsR = A.el('g', {}, mir);
    const mkHorn = parent => {
      const hg = A.el('g', {}, parent);
      A.el('path', { d: hornD, fill: A.url('steel'), stroke: '#36404A', 'stroke-width': 2.4, 'stroke-linejoin': 'round' }, hg);
      A.el('path', { d: bevelD, fill: A.url('bevel'), opacity: 0.9 }, hg);
      A.el('path', { d: grindD, stroke: '#6F7B87', 'stroke-width': 1.3, fill: 'none', opacity: 0.8 }, hg);
      A.el('path', { d: edgeD, stroke: '#FFFFFF', 'stroke-width': 1.4, fill: 'none', opacity: 0.9, 'stroke-linecap': 'round' }, hg);
      if (!A.small) {
        A.el('path', { d: brush(0.28), stroke: '#fff', 'stroke-width': 1, fill: 'none', opacity: 0.35 }, hg);
        A.el('path', { d: brush(0.1), stroke: '#5B6670', 'stroke-width': 0.8, fill: 'none', opacity: 0.3 }, hg);
      }
      A.el('path', { d: ridgesD, stroke: '#4D5760', 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round' }, hg);
      A.el('path', { d: ridgesL, stroke: '#FFFFFF', 'stroke-width': 1.1, fill: 'none', 'stroke-linecap': 'round', opacity: 0.7 }, hg);
      A.el('path', { d: nickD, stroke: '#4D5760', 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' }, hg);
      const hcl = A.el('g', { 'clip-path': A.url('hornClip') }, hg);
      A.el('path', { d: handleD, fill: A.url('red') }, hcl);
      if (!A.small) A.el('path', { d: handleHiD, stroke: '#FFB3A8', 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', opacity: 0.6 }, hcl);
      A.el('path', { d: bolsterD, stroke: '#5A6570', 'stroke-width': 6, 'stroke-linecap': 'round' }, hcl);
      A.el('path', { d: bolsterD, stroke: '#E6ECF1', 'stroke-width': 2.6, 'stroke-linecap': 'round' }, hcl);
      A.el('path', { d: hornD, stroke: '#36404A', 'stroke-width': 2.4, fill: 'none', 'stroke-linejoin': 'round' }, hg);
      A.el('circle', { cx: rivetP[0], cy: rivetP[1], r: 6.2, fill: A.url('rivet'), stroke: '#3E4852', 'stroke-width': 1.6 }, hg);
      A.el('circle', { cx: rivetP[0], cy: rivetP[1], r: 2.2, fill: '#56616B' }, hg);
      const gl = A.el('g', { 'clip-path': A.url('hornClip') }, hg);
      const band = A.el('rect', { x: -14, y: -160, width: 28, height: 320, fill: A.url('glint'), opacity: 0 }, gl);
      const tip = A.el('path', { d: star(13), fill: '#fff', opacity: 0 }, hg);
      return { hg, band, tip };
    };
    const HL = mkHorn(hornsL), HR = mkHorn(hornsR);

    const mkEar = parent => {
      const eg = A.el('g', {}, parent);
      A.el('path', { d: 'M4 -9 C-14 -17 -36 -12 -48 2 C-36 13 -14 12 4 8 Z', fill: A.url('furB'), stroke: '#2f2b28', 'stroke-width': 1, 'stroke-opacity': 0.4 }, eg);
      A.el('path', { d: 'M-4 -4 C-15 -9 -30 -7 -40 1 C-30 6 -15 7 -4 4 Z', fill: '#F0A493' }, eg);
      return eg;
    };
    const earL = mkEar(head), earR = mkEar(mir);
    // move right ear after horns: fine, mirrored group holds hornsR then earR.

    const HEAD_D = 'M200 118 C234 118 258 138 262 166 C265 190 250 208 240 224 C230 242 216 252 200 252 C184 252 170 242 160 224 C150 208 135 190 138 166 C142 138 166 118 200 118 Z';
    const headClip = A.el('clipPath', { id: A.id('headClip') }, A.defs); A.el('path', { d: HEAD_D }, headClip);
    // cheek fluff
    A.el('path', { d: 'M142 182 L128 190 L144 192 L132 203 L150 200 Z', fill: '#7A4C31' }, head);
    A.el('path', { d: 'M258 182 L272 190 L256 192 L268 203 L250 200 Z', fill: '#6A4029' }, head);
    A.el('path', { d: HEAD_D, fill: A.url('fur') }, head);
    const hc = A.el('g', { 'clip-path': A.url('headClip') }, head);
    A.el('path', { d: 'M186 118 C190 150 192 176 189 200 L211 200 C208 176 210 150 214 118 Z', fill: '#5A3725', opacity: 0.32 }, hc);
    A.el('ellipse', { cx: 178, cy: 140, rx: 26, ry: 14, fill: '#F2C08E', opacity: 0.28 }, hc);
    A.el('path', { d: 'M200 194 C226 194 246 210 246 232 C246 252 224 260 200 260 C176 260 154 252 154 232 C154 210 174 194 200 194 Z', fill: A.url('cream') }, hc);
    A.el('ellipse', { cx: 174, cy: 196, rx: 20, ry: 8, fill: '#6A3A22', opacity: 0.16 }, hc);
    A.el('ellipse', { cx: 226, cy: 196, rx: 20, ry: 8, fill: '#6A3A22', opacity: 0.16 }, hc);
    A.el('path', { d: 'M141 168 C142 142 164 121 200 120', stroke: '#FFD6AA', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.55 }, head);
    A.el('path', { d: 'M260 170 C258 150 248 134 230 125', stroke: '#A8D0F0', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.7 }, head);

    // eyes
    const mkEye = (cx, cy) => {
      const eg = A.el('g', {}, head);
      A.el('ellipse', { cx, cy, rx: 18.5, ry: 21.5, fill: '#231E1B' }, eg);
      const clipId = A.id('eye' + cx);
      const cp = A.el('clipPath', { id: clipId }, A.defs);
      A.el('ellipse', { cx, cy, rx: 16.5, ry: 19.5 }, cp);
      const inner = A.el('g', { 'clip-path': `url(#${clipId})` }, eg);
      A.el('ellipse', { cx, cy, rx: 16.5, ry: 19.5, fill: A.url('sclera') }, inner);
      const iris = A.el('g', {}, inner);
      A.el('circle', { cx, cy, r: 12.5, fill: A.url('iris') }, iris);
      const pupil = A.el('ellipse', { cx, cy, rx: 6.8, ry: 5.6, fill: '#120E0C' }, iris);
      A.el('circle', { cx: cx - 4.5, cy: cy - 5.5, r: 4.2, fill: '#fff' }, iris);
      A.el('circle', { cx: cx + 4.5, cy: cy + 4.5, r: 1.8, fill: '#fff', opacity: 0.85 }, iris);
      const lid = A.el('path', { fill: '#9A6440' }, inner);
      const lash = A.el('path', { stroke: INK, 'stroke-width': 3.6, fill: 'none', 'stroke-linecap': 'round' }, inner);
      const low = A.el('path', { fill: '#A86E47' }, inner);
      const arc = A.el('path', { stroke: INK, 'stroke-width': 4.2, fill: 'none', 'stroke-linecap': 'round' }, head);
      return { eg, inner, iris, pupil, lid, lash, low, arc, cx, cy };
    };
    const eyeL = mkEye(174, 170), eyeR = mkEye(226, 170);
    const BROW_D = 'M-14 3 Q-3 -6 12 -2 Q16 1 12 5 Q0 1 -14 3 Z';
    const browL = A.el('path', { d: BROW_D, fill: '#EDE2CC' }, head);
    const browR = A.el('path', { d: BROW_D, fill: '#EDE2CC' }, head);

    // nose and mouth
    A.el('path', { d: 'M187 206 Q200 200 213 206 Q215 213 205 218 Q200 220.5 195 218 Q185 213 187 206 Z', fill: '#2E2622' }, head);
    A.el('ellipse', { cx: 196, cy: 205.5, rx: 5, ry: 1.8, fill: '#fff', opacity: 0.35 }, head);
    A.el('path', { d: 'M200 219 L200 227', stroke: '#8A7666', 'stroke-width': 2, 'stroke-linecap': 'round' }, head);
    const mouthClip = A.el('clipPath', { id: A.id('mouthClip') }, A.defs);
    const mouthClipP = A.el('path', { d: 'M190 230 Z' }, mouthClip);
    const mouth = A.el('path', { fill: '#3A1E1A', stroke: '#2A1A16', 'stroke-width': 2.6, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, head);
    const tongue = A.el('ellipse', { cx: 200, cy: 246, rx: 8, ry: 6, fill: '#E06A6A', 'clip-path': A.url('mouthClip') }, head);

    // beard and forelock
    const beard = A.el('g', {}, head);
    A.el('path', { d: 'M190 250 Q191 260 196 267 L200 272 L204 267 Q209 260 210 250 Z', fill: '#4E3020' }, beard);
    A.el('path', { d: 'M197 254 Q198 263 200 269', stroke: '#9A6A4A', 'stroke-width': 1.5, fill: 'none', opacity: 0.8 }, beard);
    const lock = A.el('g', {}, head);
    A.el('path', { d: 'M186 128 Q190 112 196 104 Q197 114 200 118 Q204 106 212 102 Q210 116 214 128 Z', fill: '#5A3725' }, lock);

    // level-up medal (inside head so it follows the mouth)
    const medal = A.el('g', {}, head);
    const medalSw = A.el('g', {}, medal);
    A.el('path', { d: 'M196 232 L184 276 L194 278 L201 248 Z', fill: '#C8241E' }, medalSw);
    A.el('path', { d: 'M204 232 L216 276 L206 278 L199 248 Z', fill: RED }, medalSw);
    const medBody = A.el('g', {}, medalSw);
    const mClipId = A.id('medal'); const mcp = A.el('clipPath', { id: mClipId }, A.defs); A.el('circle', { cx: 200, cy: 296, r: 24 }, mcp);
    A.el('circle', { cx: 200, cy: 296, r: 25.5, fill: A.url('goldRim'), stroke: '#8A5A0C', 'stroke-width': 1.5 }, medBody);
    A.el('circle', { cx: 200, cy: 296, r: 19.5, fill: A.url('gold'), stroke: '#B57E14', 'stroke-width': 1.2 }, medBody);
    A.el('text', { x: 200, y: 289, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 800, 'font-size': 8.5, 'letter-spacing': 1, fill: '#7A4B06', text: 'LV' }, medBody);
    A.el('text', { x: 200, y: 309, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#7A4B06', text: '8' }, medBody);
    const mShineG = A.el('g', { 'clip-path': `url(#${mClipId})` }, medBody);
    const mShine = A.el('rect', { x: -9, y: 250, width: 18, height: 100, fill: A.url('glint') }, mShineG);
    A.el('circle', { cx: 192, cy: 286, r: 3, fill: '#fff', opacity: 0.7 }, medBody);
    // ribbon bite: little teeth hold
    A.el('rect', { x: 193, y: 230, width: 14, height: 5, rx: 2.5, fill: '#B81F19' }, medalSw);

    /* ---------- front FX ---------- */
    const fx = A.el('g', {}, g);
    const impact = A.el('g', { opacity: 0 }, fx);
    for (let i = 0; i < 7; i++) { const a = -PI / 2 + (i - 3) * 0.38; A.el('path', { d: `M${(cos(a) * 14).toFixed(1)} ${(sin(a) * 14).toFixed(1)} L${(cos(a) * 30).toFixed(1)} ${(sin(a) * 30).toFixed(1)}`, stroke: '#FFE58A', 'stroke-width': 4, 'stroke-linecap': 'round' }, impact); }
    A.el('path', { d: star(12, 0.35), fill: '#fff' }, impact);
    const sparks = [[110, 120, 10], [300, 112, 8], [322, 200, 7], [86, 220, 7], [260, 70, 6]].map(([x, y, r]) => ({ el: A.el('path', { d: star(r), fill: '#FFF3C2', opacity: 0 }, fx), x, y }));
    const ting = A.el('path', { d: star(9), fill: '#FFF3C2', opacity: 0 }, fx);
    const snip = A.el('path', { d: star(14, 0.22), fill: '#fff', opacity: 0 }, fx);
    const bang = A.el('g', { opacity: 0 }, fx);
    A.el('path', { d: 'M-5 -30 L5 -30 L3 -6 L-3 -6 Z', fill: RED, stroke: '#fff', 'stroke-width': 2.5, 'stroke-linejoin': 'round', 'paint-order': 'stroke' }, bang);
    A.el('circle', { cx: 0, cy: 3, r: 4.2, fill: RED, stroke: '#fff', 'stroke-width': 2.5, 'paint-order': 'stroke' }, bang);
    const conf = [];
    if (!A.small) {
      const R = A.rng(77), cols = [RED, '#F7C843', CREAM, '#C3CBD3', '#FF8A7C'];
      for (let i = 0; i < 18; i++) conf.push({ el: A.el('rect', { x: -4, y: -2.5, width: 8, height: 5, rx: 1, fill: cols[i % cols.length], opacity: 0 }, fx), x: 40 + R() * 320, sp: 0.55 + R() * 0.5, ph: R(), rs: 200 + R() * 400, dr: 10 + R() * 20 });
    }
    const zz = [0, 1, 2].map(i => A.el('text', { x: 0, y: 0, 'font-family': 'system-ui, sans-serif', 'font-weight': 800, 'font-size': 22 - i * 4, fill: '#DCE8F5', opacity: 0, text: 'z' }, fx));
    const think = A.el('g', { opacity: 0 }, fx);
    const tdots = [[262, 130, 4], [276, 108, 6.5], [298, 82, 13]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#EEF4FA', opacity: 0.9 }, think));
    const tq = A.el('path', { d: 'M293 79 Q293 74 298 74 Q303 74 303 79 Q303 82 298 84 L298 87', stroke: RED, 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' }, think);
    A.el('circle', { cx: 298, cy: 91.5, r: 1.6, fill: RED }, think);
    const steam = A.el('g', { opacity: 0 }, fx);
    const steamP = [0, 1, 2, 3].map(i => A.el('path', { d: 'M-7 3 C-11 3 -11 -3 -7 -3 C-7 -8 0 -9 2 -5 C5 -9 11 -6 9 -1 C12 0 11 5 7 5 Z', fill: '#FFFFFF', stroke: '#8FA6BC', 'stroke-width': 1.4, 'stroke-linejoin': 'round' }, steam));

    /* ---------- poses ---------- */
    const base = () => ({ x: 0, y: 0, rot: 0, sx: 1, sy: 1, hx: 0, hy: 0, hr: 0, hsy: 1,
      lidL: 0.14, lidR: 0.14, lowL: 0, lowR: 0, hapL: 0, hapR: 0, pup: 1, lx: 0, ly: 0, lw: 1,
      bY: 0, bR: 0, bL: 0, bRt: 0, sm: 0.35, op: 0, mw: 11, skew: 0, earL: 0, earR: 0,
      fnT: 0, fnS: 0, ffT: 0, ffS: 0, hnT: 0, hnS: 0, hfT: 0, hfS: 0, tail: 0, flick: 0, beard: 1,
      glint: 0, glintA: 0, tipStar: 0, ledge: 0, ledgeA: 0, card: 0, cardX: 0, cardP: 0, medal: 0, medSw: 0, shine: 0, snip: 0, strip: -1, bang: 0,
      conf: 0, spark: 0, ting: 0, zz: 0, think: 0, dust: 0, dustX: 0, impact: 0, impX: 0, impY: 0, steam: 0 });

    function pose(mood, m, t, look) {
      const p = base(), L = A.life(t, 7);
      p.hr = L.sway * 2.2; p.hx = L.drift * 1.5; p.tail = sin(t * 1.4) * 8;
      p.sy = 1 + L.breathe * 0.012; p.sx = 1 - L.breathe * 0.006; p.hy = -L.breathe * 0.8;
      const dir = (look && look.x < 0) ? -1 : 1;
      switch (mood) {
        case 'idle': {
          const f = t % 6.4;
          p.earR += -26 * wobble(f - 2.6, 24, 6);
          if (f > 4.2 && f < 5.4) { const k = sin(PI * seg(f, 4.2, 5.4)); p.hr += 7 * k; p.lx = 0.5; p.lw = 1 - 0.6 * k; }
          if (f > 0.4 && f < 1.3) { p.glint = seg(f, 0.4, 1.3); p.glintA = 0.65; }
          p.tail += 18 * wobble(f - 3.6, 30, 5);
          break;
        }
        case 'happy': {
          const b = Math.abs(sin(m * 5.4)), sq = Math.pow(1 - b, 6) * 0.07;
          p.y = -b * 13; p.sy += b * 0.03 - sq; p.sx += sq;
          p.sm = 1; p.op = 0.45; p.mw = 13; p.lidL = p.lidR = 0.06; p.lowL = p.lowR = 0.45; p.bY = -6;
          p.earL = p.earR = 14 + sin(m * 5.4 + 1) * 6; p.hr += sin(m * 5.4) * 4; p.tail = sin(m * 16) * 22;
          break;
        }
        case 'wink': {
          const e = ease.outBack(seg(m, 0, 0.4));
          p.hr += 9 * e; p.hx += -3 * e; p.hapL = e; p.lidL = lerp(0.14, 1, e); p.lowR = 0.25 * e;
          p.bL = 5 * e; p.bRt = -7 * e; p.sm = 0.9; p.op = 0.12; p.mw = 12; p.skew = 5 * e;
          p.earL = 6; p.earR = 16 * e; p.tail = sin(m * 14) * 16;
          p.ting = seg(m, 0.15, 0.3) * (1 - seg(m, 0.6, 0.9));
          break;
        }
        case 'surprised': {
          const j = sin(PI * seg(m, 0, 0.42)), b = ease.out(seg(m, 0, 0.4));
          p.y = -j * 24; p.x = 14 * b; p.rot = -3 * j; p.sy += 0.08 * j - 0.05 * Math.max(0, 1 - Math.abs(m - 0.47) / 0.08); p.sx -= 0.04 * j;
          p.hy -= 5; p.lidL = p.lidR = 0; p.pup = 0.6; p.bY = -11; p.sm = -0.1; p.op = 0.9; p.mw = 7;
          p.earL = p.earR = 24 + 5 * wobble(m, 30, 4); p.tail = 34; p.beard = 1.18; p.lw = 0.4;
          p.hnT = -14 * j; p.hnS = 28 * j; p.hfT = -14 * j; p.hfS = 28 * j; p.fnT = 18 * j; p.ffT = 18 * j;
          if (m > 0.6) p.hx += sin(t * 40) * 0.6;
          break;
        }
        case 'thinking': {
          const e = ease.inOut(seg(m, 0, 0.5));
          p.hr += -9 * e; p.hx -= 2 * e; p.lidL = p.lidR = 0.24; p.lx = 0.7; p.ly = -0.9; p.lw = 1 - 0.85 * e;
          p.bL = -7 * e; p.bRt = 2 * e; p.bR = 3; p.sm = 0; p.op = 0; p.mw = 8; p.skew = -3 * e;
          p.earL = 6; p.earR = -8; p.tail = sin(t * 1) * 6;
          p.fnT = 122 * e; p.fnS = 100 * e + sin(m * 6) * 4 * e;
          p.think = seg(m, 0.3, 0.7);
          break;
        }
        case 'working': {
          const c = (m * 1.15) % 1;
          const hrW = c < 0.55 ? lerp(-12, -1, ease.inOut(c / 0.55)) : c < 0.64 ? lerp(-1, -16, ease.in(seg(c, 0.55, 0.64))) : lerp(-16, -12, ease.out(seg(c, 0.64, 1)));
          const hit = c > 0.63 ? 1 - seg(c, 0.64, 0.9) : 0, wind = c < 0.55 ? sin(PI * c / 0.55) : 0;
          p.rot = -2 + 1.5 * hit; p.x = -4; p.hy = 6 - 4 * wind + 3 * hit; p.hr = hrW; p.hx = -4;
          p.sy -= 0.035 * hit; p.sx += 0.02 * hit;
          p.lidL = p.lidR = 0.36; p.bR = 13; p.bY = 3; p.sm = -0.1; p.op = 0.05 + 0.3 * hit; p.mw = 7 + 2 * hit; p.lx = -0.9; p.ly = -0.55; p.lw = 0.15;
          p.fnT = -10 - 4 * hit; p.ffT = 8; p.hnT = 4; p.hfT = 6;
          p.earL = -6 - 14 * hit; p.earR = -6 - 14 * hit; p.tail = -6 + 16 * hit;
          p.card = 1; p.cardX = -3 * hit; p.cardP = (m * 0.18) % 1;
          p.snip = hit > 0 ? sin(PI * seg(c, 0.62, 0.8)) : 0; p.strip = c > 0.64 ? seg(c, 0.64, 1) : -1;
          p.glint = seg(c, 0.55, 0.68); p.glintA = c > 0.55 && c < 0.7 ? 0.9 : 0;
          break;
        }
        case 'celebrate': {
          const c = (m % 0.95) / 0.95, h = sin(PI * seg(c, 0.15, 0.78)), cr = c < 0.15 ? sin(PI * c / 0.15) : 0, ld = c > 0.8 ? sin(PI * seg(c, 0.8, 1)) : 0;
          p.y = -h * 40; p.rot = 10 * h; p.sy += 0.07 * h - 0.1 * (cr + ld); p.sx += 0.06 * (cr + ld);
          p.fnT = 150 * h + 20 * (1 - h); p.fnS = -30 * h; p.ffT = 135 * h; p.ffS = -20 * h; p.hnT = -10 * h; p.hnS = 30 * h; p.hfT = -10 * h; p.hfS = 30 * h;
          p.hapL = p.hapR = 1; p.lidL = p.lidR = 1; p.sm = 1; p.op = 0.85; p.mw = 13; p.bY = -9;
          p.earL = p.earR = 18 + 10 * h; p.tail = sin(m * 18) * 26; p.hr += -6 * h;
          p.conf = 1; p.spark = 1; p.tipStar = 0.5 + 0.5 * sin(m * 7);
          break;
        }
        case 'sleepy': {
          const n = sin(t * 0.9), drop = Math.pow(Math.max(0, sin(t * 0.45)), 8);
          p.hy = 6 + n * 3 + drop * 8; p.hr = -6 + n * 3 - drop * 4; p.rot = n * 1.2;
          p.lidL = p.lidR = 0.8 + 0.08 * n + 0.12 * drop; p.bY = 2; p.bR = -9; p.sm = 0.1; p.op = 0.15 + 0.12 * sin(t * 1.8); p.mw = 5;
          p.earL = p.earR = -26 - 6 * drop; p.lw = 0.25; p.ly = 0.5; p.tail = -6; p.zz = 1;
          break;
        }
        case 'levelup': {
          const e = ease.outBack(seg(m, 0.25, 0.7)), dip = sin(PI * seg(m, 0, 0.3));
          p.y = 8 * dip - 6 * e; p.sy -= 0.06 * dip; p.hy = -7 * e; p.hr += -3 * e;
          p.lidL = p.lidR = 0.3; p.lowL = p.lowR = 0.38; p.sm = 0.75; p.op = 0; p.mw = 7; p.bY = -5;
          p.fnT = 72 * e; p.fnS = -88 * e; p.earL = p.earR = 12; p.tail = sin(m * 12) * 18;
          p.medal = seg(m, 0.3, 0.55); p.medSw = 16 * wobble(m - 0.5, 6, 1.4) + 3 * sin(t * 2.2);
          p.shine = seg((m + 1.0) % 1.8, 0, 0.6); p.spark = seg(m, 0.5, 0.8);
          break;
        }
        case 'signature': {
          const k = m % 3.8, LEDGE = -40;
          const cr = sin(PI * seg(k, 0, 0.24)) * (k < 0.24 ? 1 : 0);
          const up = seg(k, 0.24, 0.62), down = seg(k, 2.8, 3.2);
          let y = 0;
          if (k < 0.24) y = 0; else if (k < 0.62) y = lerp(0, LEDGE, up) - sin(PI * up) * 42; else if (k < 2.8) y = LEDGE; else if (k < 3.2) y = lerp(LEDGE, 0, down) - sin(PI * down) * 18; else y = 0;
          const land1 = k > 0.62 && k < 0.85 ? sin(PI * seg(k, 0.62, 0.85)) : 0, land2 = k > 3.2 && k < 3.42 ? sin(PI * seg(k, 3.2, 3.42)) : 0;
          const air = (k >= 0.24 && k < 0.62) ? sin(PI * up) : (k >= 2.8 && k < 3.2) ? sin(PI * down) : 0;
          p.y = y; p.sy += -0.12 * cr - 0.1 * land1 - 0.08 * land2 + 0.08 * air; p.sx += 0.08 * cr + 0.07 * land1 + 0.05 * land2;
          p.rot = 8 * air * (k < 1 ? 1 : -0.6);
          p.fnT = -30 * air; p.fnS = 70 * air; p.ffT = -30 * air; p.ffS = 70 * air; p.hnT = 30 * air; p.hnS = -40 * air; p.hfT = 30 * air; p.hfS = -40 * air;
          p.ledge = k > 0.6 && k < 3.1 ? 1 : 0; p.ledgeA = seg(k, 0.6, 0.7) * (1 - seg(k, 1.2, 1.9)) * 0.5;
          p.dust = k > 0.6 && k < 1.1 ? 1 - seg(k, 0.62, 1.1) : 0; p.dustX = seg(k, 0.62, 1.1);
          // head toss
          const wind = sin(PI * seg(k, 0.8, 1.02)), toss = k > 1.02 && k < 1.7 ? 1 : 0;
          const tossA = toss ? -24 * ease.spring(seg(k, 1.02, 1.7)) * (1 - seg(k, 1.4, 1.7)) : 0;
          p.hr += 7 * wind + tossA; p.hy += 6 * wind - (toss ? 10 * sin(PI * seg(k, 1.02, 1.6)) : 0);
          p.flick = k > 1.0 && k < 1.6 ? -16 * wobble(k - 1.02, 18, 5) : 0;
          p.glint = seg(k, 1.06, 1.5); p.glintA = k > 1.04 && k < 1.55 ? 1 : 0;
          p.tipStar = k > 1.25 && k < 1.75 ? sin(PI * seg(k, 1.25, 1.75)) : 0;
          // confident face
          p.lidL = p.lidR = 0.3; p.bL = -5; p.bRt = 2; p.sm = 0.8; p.op = 0.1; p.mw = 11; p.skew = 4;
          // head-butt toward the pointer
          const back = sin(PI * seg(k, 1.75, 2.05)) * (k < 2.05 ? 1 : 0), lunge = k >= 2.02 && k < 2.6 ? (1 - ease.out(seg(k, 2.18, 2.6))) * ease.out(seg(k, 2.02, 2.14)) : 0;
          p.x += -dir * 10 * back + dir * 18 * lunge; p.rot += -dir * 5 * back + dir * 5 * lunge;
          p.hr += -dir * 6 * back + dir * 10 * lunge; p.hy += 14 * lunge; p.hsy = 1 - 0.05 * lunge;
          if (k > 1.75 && k < 2.6) { p.bR = 12; p.bL = 0; p.bRt = 0; p.lidL = p.lidR = 0.36; p.op = 0.25; p.sm = 0.7; p.skew = 0; p.lx = dir * 0.9; p.lw = 0.2; }
          p.impact = k > 2.08 && k < 2.45 ? 1 - seg(k, 2.08, 2.45) : 0; p.impX = dir; p.impY = 0;
          p.earL = p.earR = 6 - 20 * air + 10 * wind; p.tail = 20 * air + sin(t * 10) * 8;
          break;
        }
      }
      return p;
    }
    const KEYS = Object.keys(base());
    function fullPose(s, d) {
      const cur = pose(s.mood, Math.max(0, s.mt - d), s.t - d, s.look);
      if (s.blend >= 1 || !s.prev || s.prev === s.mood) return cur;
      const pv = pose(s.prev, s.mt + 2.4 - d, s.t - d, s.look), b = s.blend, o = {};
      for (const k of KEYS) o[k] = lerp(pv[k], cur[k], b);
      return o;
    }

    const lidPath = (cx, cy, k) => { const e = cy - 21 + 42 * k; return [`M${cx - 24} ${cy - 30} L${cx + 24} ${cy - 30} L${cx + 24} ${e} Q${cx} ${e + 7} ${cx - 24} ${e} Z`, `M${cx - 19} ${e + 1.5} Q${cx} ${e + 8.5} ${cx + 19} ${e + 1.5}`]; };
    const lowPath = (cx, cy, k) => { const e = cy + 21 - 34 * k; return `M${cx - 24} ${cy + 30} L${cx + 24} ${cy + 30} L${cx + 24} ${e} Q${cx} ${e - 9} ${cx - 24} ${e} Z`; };

    function setEye(E, lid, low, hap, px, py, pup) {
      const closed = hap > 0.5;
      A.op(E.inner, closed ? 0 : 1); A.op(E.arc, closed ? 1 : 0); A.op(E.eg, 1);
      const [ld, ls] = lidPath(E.cx, E.cy, clamp(lid, 0, 1));
      A.attr(E.lid, { d: ld }); A.attr(E.lash, { d: ls, opacity: lid > 0.04 ? 1 : 0 });
      A.attr(E.low, { d: lowPath(E.cx, E.cy, clamp(low, 0, 0.9)) });
      A.tf(E.iris, px, py);
      A.attr(E.pupil, { rx: 6.8 * pup, ry: 5.6 * pup });
      A.attr(E.arc, { d: `M${E.cx - 15} ${E.cy + 4} Q${E.cx} ${E.cy - 12} ${E.cx + 15} ${E.cy + 4}` });
      A.show(E.eg.firstChild, !closed);
    }

    return {
      update(s) {
        const P = fullPose(s, 0), Q = fullPose(s, 0.08);
        const vy = (P.y - Q.y) / 0.08, vx = (P.x - Q.x) / 0.08, vhr = (P.hr - Q.hr) / 0.08;
        const t = s.t, L = A.life(t, 7);

        /* pointer and poke overlays */
        const lw = P.lw;
        P.hx += s.look.x * 6 * lw; P.hr += s.look.x * 3 * lw; P.hy += s.look.y * 3 * lw;
        let wob = 0;
        if (s.poke < 3) {
          wob = wobble(s.poke, 17, 5.5); const e = exp(-s.poke * 3.2);
          P.sy *= 1 - 0.11 * wob; P.sx *= 1 + 0.08 * wob; P.rot += 4 * wob;
          if (s.pokes >= 3) {
            const gq = clamp(1.4 * exp(-s.poke * 0.7));
            P.bR = lerp(P.bR, 20, gq); P.bY = lerp(P.bY, 4, gq); P.bL = lerp(P.bL, 0, gq); P.bRt = lerp(P.bRt, 0, gq);
            P.lidL = lerp(P.lidL, 0.5, gq); P.lidR = lerp(P.lidR, 0.5, gq); P.hapL = P.hapR = lerp(P.hapL, 0, gq);
            P.lowL = P.lowR = lerp(P.lowL, 0.2, gq); P.sm = lerp(P.sm, -0.8, gq); P.op = lerp(P.op, 0.05, gq); P.mw = lerp(P.mw, 9, gq); P.skew = 0;
            const gd = s.look.x >= 0 ? 1 : -1;
            P.hy += 16 * gq; P.hr += gd * 9 * gq + 2 * sin(s.poke * 26) * exp(-s.poke * 2); P.rot += gd * 2 * gq; P.y += 3 * gq; P.earL = lerp(P.earL, -18, gq); P.earR = lerp(P.earR, -18, gq);
            P.fnT = lerp(P.fnT, 22 + 18 * sin(s.poke * 13), gq); P.fnS = lerp(P.fnS, 30 + 20 * sin(s.poke * 13), gq);
            P.steam = gq; P.lx = gd * 0.3; P.ly = -0.7; P.lw = 0.2; P.lowL = P.lowR = lerp(P.lowL, 0.3, gq); P.dust = Math.max(P.dust, gq * Math.max(0, sin(s.poke * 13))); P.dustX = 0.5;
          } else {
            const hop = s.poke < 0.42 ? sin(PI * s.poke / 0.42) : 0;
            P.y -= 18 * hop; P.x += 6 * hop; P.rot -= 5 * hop; P.hr += -8 * wobble(s.poke, 14, 4.5);
            P.fnT += 30 * hop; P.ffT += 30 * hop; P.fnS += 40 * hop; P.ffS += 40 * hop; P.hnT -= 16 * hop; P.hfT -= 16 * hop;
            P.tipStar = Math.max(P.tipStar, s.poke < 0.6 ? sin(PI * s.poke / 0.6) : 0);
            if (s.poke < 0.5) { P.glint = seg(s.poke, 0, 0.5); P.glintA = 1; }
            P.bang = s.poke < 0.9 ? clamp(s.poke / 0.06) * (1 - seg(s.poke, 0.6, 0.9)) : 0;
            P.lidL = lerp(P.lidL, 0, e); P.lidR = lerp(P.lidR, 0, e); P.hapL = lerp(P.hapL, 0, e); P.hapR = lerp(P.hapR, 0, e);
            P.lowL = lerp(P.lowL, 0, e); P.lowR = lerp(P.lowR, 0, e); P.pup = lerp(P.pup, 0.62, e); P.bY -= 10 * e;
            P.op = Math.max(P.op, 0.75 * e); P.sm = lerp(P.sm, -0.1, e); P.mw = lerp(P.mw, 7, e); P.earL += 24 * e; P.earR += 24 * e;
            P.hy -= 5 * e; P.beard += 0.15 * e; P.tail += 30 * e;
          }
        }
        if (s.hover && !s.small) { P.earL += 5; P.earR += 5; }
        // blink (not when already closed)
        const bl = L.blink;
        if (P.hapL < 0.5) P.lidL = Math.max(P.lidL, bl);
        if (P.hapR < 0.5) P.lidR = Math.max(P.lidR, bl);

        /* body */
        A.tf(root, P.x, P.y, P.rot, P.sx, P.sy, 232, 342);
        const airH = Math.max(0, -(P.y - P.ledge * -40));
        A.attr(shadow, { cy: 343 - 40 * P.ledge, rx: 92 * (1 - clamp(airH / 160, 0, 0.5)), opacity: 1 - clamp(airH / 120, 0, 0.6) });
        A.tf(shadow, P.x * 0.9, 0, 0, 1, 1, 236, 343);
        A.attr(ledgeLine, { opacity: P.ledgeA, transform: `translate(0 ${302})` });
        setLeg(legFN, P.fnT, P.fnS); setLeg(legFF, P.ffT, P.ffS); setLeg(legHN, P.hnT, P.hnS); setLeg(legHF, P.hfT, P.hfS);
        A.tf(tail, 304, 272, P.tail - clamp(vy * 0.1, -30, 30) + 8 * wob);
        const sw = clamp(-vy * 0.12 - vx * 0.25, -38, 38) + sin(t * 2.6) * 3 + 12 * wob;
        A.tf(tailA, 238, 272, sw * 0.9 + clamp(P.rot, -10, 10)); A.tf(tailB, 234, 276, sw * 1.2 + 8 + sin(t * 3.1 + 1) * 3);

        /* head */
        A.tf(head, P.hx, P.hy, P.hr, 1, P.hsy, 200, 252);
        A.tf(hornsL, 0, 0, P.flick, 1, 1, rivetP[0], rivetP[1]);
        A.tf(hornsR, 0, 0, P.flick, 1, 1, rivetP[0], rivetP[1]);
        const earLag = clamp(vy * 0.07 + vhr * 0.04, -24, 24);
        A.tf(earL, 146, 168, -6 + P.earL + earLag);
        A.tf(earR, 146, 168, -6 + P.earR + clamp(vy * 0.07 - vhr * 0.04, -24, 24));
        for (const H of [HL, HR]) {
          const gp = P.glint, ga = P.glintA * (gp > 0 && gp < 1 ? 1 : 0);
          A.attr(H.band, { opacity: A.small ? 0 : ga });
          A.tf(H.band, lerp(196, 60, gp), lerp(160, 30, gp), 38);
          A.attr(H.tip, { opacity: P.tipStar });
          A.tf(H.tip, P3[0] - 2, P3[1], t * 90 % 360, 0.5 + P.tipStar * 0.7);
        }
        const gx = lerp(P.lx, s.look.x, lw), gy = lerp(P.ly, s.look.y, lw);
        setEye(eyeL, P.lidL, P.lowL, P.hapL, gx * 5.5, gy * 6.5, P.pup);
        setEye(eyeR, P.lidR, P.lowR, P.hapR, gx * 5.5, gy * 6.5, P.pup);
        A.tf(browL, 174, 142 + P.bY + P.bL + P.lidL * 3, P.bR);
        A.tf(browR, 226, 142 + P.bY + P.bRt + P.lidR * 3, -P.bR, -1, 1);

        // mouth
        const my = 233, w = P.mw, cL = my - P.sm * 5 + P.skew * -0.6, cR = my - P.sm * 5 - P.skew, mid = my + P.sm * 5;
        const open = P.op * 18;
        const d = `M${200 - w} ${cL.toFixed(1)} Q200 ${(mid - 1 - P.op * 2).toFixed(1)} ${200 + w} ${cR.toFixed(1)} Q200 ${(mid + open + 2 * P.op).toFixed(1)} ${200 - w} ${cL.toFixed(1)} Z`;
        A.attr(mouth, { d }); A.attr(mouthClipP, { d });
        A.attr(tongue, { cy: mid + open * 0.9, rx: w * 0.55, opacity: P.op > 0.2 ? 1 : 0 });
        A.tf(beard, 0, 0, clamp(-vhr * 0.06 - vx * 0.04, -18, 18) + 5 * wob, 1, P.beard, 200, 248);
        A.tf(lock, 0, 0, clamp(-vhr * 0.05, -14, 14) + sin(t * 2) * 2, 1, 1, 200, 126);

        // medal
        A.op(medal, P.medal > 0.01 ? 1 : 0);
        A.tf(medal, 0, (1 - ease.outBack(P.medal)) * 16, 0, P.medal, P.medal, 200, 232);
        A.tf(medalSw, 0, 0, P.medSw - P.hr * 0.8, 1, 1, 200, 232);
        A.attr(mShine, { x: lerp(160, 226, P.shine) });
        A.op(mShineG, P.shine > 0 && P.shine < 1 ? 1 : 0);

        /* props and FX */
        A.op(card, P.card); A.show(card, P.card > 0.02);
        A.tf(card, 80 - P.cardX + P.x * 0.6, 140 - P.cardX, -8);
        A.attr(cardBar, { width: 50 * P.cardP });
        A.op(strip, P.strip >= 0 ? P.card * (1 - P.strip) : 0);
        A.tf(strip, 80 - 10 * P.strip + P.x * 0.6, 112 + 170 * P.strip * P.strip, -8 - 80 * P.strip);
        A.op(snip, P.snip); A.tf(snip, 92 + P.x, 112, t * 200, 0.5 + P.snip * 0.8);
        A.op(bang, P.bang); A.tf(bang, 270 + P.x + P.hx, 120 + P.y + P.hy, 12 + 8 * wob, 0.6 + 0.4 * ease.outBack(clamp(P.bang * 1.2)));
        A.op(dust, P.dust);
        dustP.forEach((c, i) => {
          const side = i % 2 ? 1 : -1, sp = P.dustX;
          const bx = P.ledge ? 232 + side * (40 + 40 * sp) : 300 + 14 * sp + i * 6, by = P.ledge ? 300 - 4 * sp - (i > 1 ? 6 : 0) : 338 - 10 * sp - i * 3;
          A.attr(c, { cx: bx + P.x, cy: by, r: 4 + 6 * sp + i });
        });
        A.op(impact, P.impact); A.tf(impact, 200 + P.x + P.impX * 122, 116, P.impX * 90, 0.6 + (1 - P.impact) * 0.6);
        sparks.forEach((sp, i) => { const k = P.spark * (0.5 + 0.5 * sin(t * 6 + i * 1.7)); A.op(sp.el, k); A.tf(sp.el, sp.x, sp.y, t * 40 + i * 30, 0.4 + k * 0.8); });
        A.op(ting, P.ting); A.tf(ting, 146 + P.hx, 140 + P.hy, t * 120, 0.6 + P.ting * 0.6);
        conf.forEach(c => {
          if (!P.conf) { A.op(c.el, 0); return; }
          const ph = (s.mt * c.sp + c.ph) % 1, y = lerp(20, 360, ph);
          A.op(c.el, P.conf * (ph < 0.85 ? 1 : (1 - ph) / 0.15)); A.tf(c.el, c.x + sin(s.mt * 3 + c.ph * 9) * c.dr, y, s.mt * c.rs + c.ph * 360, 1, 0.6 + 0.4 * sin(s.mt * 9 + c.ph * 7));
        });
        zz.forEach((z, i) => { const ph = ((t * 0.35) + i / 3) % 1; A.op(z, P.zz * sin(PI * ph)); A.attr(z, { x: 262 + ph * 40 + sin(ph * 6) * 6, y: 140 - ph * 90 }); });
        A.op(think, P.think); tdots.forEach((d0, i) => A.op(d0, clamp(P.think * 3 - i) * (0.75 + 0.25 * sin(t * 3 + i))));
        A.op(steam, P.steam);
        steamP.forEach((c, i) => { const ph = (t * 1.8 + (i >> 1) * 0.5) % 1, sd = i % 2 ? 1 : -1; A.tf(c, 200 + P.hx + sd * (16 + ph * 50), 216 + P.hy + ph * 12, sd * ph * 30, 0.5 + ph * 0.9); A.op(c, 0.95 * (1 - ph * ph)); });
      },
    };
  },
});

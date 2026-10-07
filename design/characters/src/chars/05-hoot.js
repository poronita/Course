/* Hoot: a sharp owl with steel lens-eyes and folded-blade ear tufts. */
CAST.register({
  id: 'hoot', order: 5, name: 'Hoot', tagline: 'Sharp eyes. Sharp tools.',
  concept: 'Hoot is a calm, clever owl who checks every pixel. Its eyes are two steel camera lenses. Its ear tufts are two folded blades. It feels like a good tool: quick, exact and quietly proud.',
  signature: 'Two steel lens-eyes with aperture pupils, and ear tufts shaped like folded blades. Its move: a fast full head swivel, a lens zoom with a glint, then a sharp "found it" point.',
  why: ['Two blades and two lenses read at any size.', 'Owls mean smart and watchful, which suits a careful tool.', 'The lens eyes act out every mood: they dilate, focus and zoom.'],
  risks: ['Owl mascots are common, so the blades and lenses must stay bold.', 'The face has many parts, so the irises blur at tiny sizes.'],
  voice: 'Found it. Your photo is sharp now.',
  scores: { memorable: 4, stylish: 4, expressive: 4, small: 4, fit: 5 },
  palette: ['#E5322B', '#2A2D34', '#C9CED6', '#F3E9DE', '#F2A93B'],
  bg: '#3d2124', iconBg: '#24272d', icon: { viewBox: '76 14 248 248' },
  build(g, A) {
    const { lerp, clamp, seg, ease } = A;
    const SM = A.small;
    /* ---------- gradients ---------- */
    A.grad('red', [[0, '#ff7262'], [0.42, '#e5322b'], [1, '#93150f']], { radial: true, cx: 0.36, cy: 0.26, r: 0.85 });
    A.grad('redB', [[0, '#ff6a5a'], [0.45, '#e0302a'], [1, '#86130e']], { radial: true, cx: 0.34, cy: 0.22, r: 0.9 });
    A.grad('graph', [[0, '#545964'], [0.55, '#2b2e35'], [1, '#15171b']], { radial: true, cx: 0.4, cy: 0.2, r: 0.9 });
    A.grad('wing', [[0, '#4a4f59'], [0.5, '#2a2d34'], [1, '#141619']], { x1: 0, y1: 0, x2: 0.6, y2: 1 });
    A.grad('steel', [[0, '#ffffff'], [0.3, '#a9b0ba'], [0.5, '#eef1f4'], [0.72, '#6f7782'], [1, '#d3d8de']], { x1: 0.15, y1: 0, x2: 0.85, y2: 1 });
    A.grad('lens', [[0, '#2b303a'], [0.7, '#0e1015'], [1, '#050608']], { radial: true, cx: 0.45, cy: 0.4, r: 0.6 });
    A.grad('iris', [[0, '#ffe7a0'], [0.4, '#f6b13c'], [0.85, '#d9661c'], [1, '#9c3a10']], { radial: true });
    A.grad('lid', [[0, '#3d414a'], [1, '#22252b']]);
    A.grad('belly', [[0, '#fffbf5'], [0.6, '#f3e9de'], [1, '#d8c5b2']], { radial: true, cx: 0.45, cy: 0.28, r: 0.8 });
    A.grad('blade', [[0, '#7d848e'], [0.38, '#f4f6f8'], [0.55, '#c6ccd3'], [1, '#6c737d']], { x1: 0, y1: 0, x2: 1, y2: 0.15 });
    A.grad('gold', [[0, '#fff2b8'], [0.45, '#f6bb42'], [1, '#b06c14']], { radial: true, cx: 0.38, cy: 0.3, r: 0.8 });
    A.grad('beak', [[0, '#ffd77a'], [0.6, '#f2a93b'], [1, '#b36a12']], { x1: 0, y1: 0, x2: 0.3, y2: 1 });
    A.grad('rim', [[0, '#ffffff', 0], [0.62, '#ffffff', 0], [1, '#ffd2c6', 0.85]], { x1: 0, y1: 0.2, x2: 1, y2: 0.8 });
    A.grad('occl', [[0, '#3a0705', 0.55], [1, '#3a0705', 0]], { x1: 0, y1: 0, x2: 0, y2: 1 });
    A.grad('glow', [[0, '#ffe6a6', 0.9], [1, '#ffe6a6', 0]], { radial: true });

    const P2 = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('') + 'Z';
    const hex = (cx, cy, r, rot) => P2([0, 1, 2, 3, 4, 5].map(k => { const a = (k * 60 + rot) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }));
    const star = (r) => `M0 ${-r}Q${r * 0.14} ${-r * 0.14} ${r} 0Q${r * 0.14} ${r * 0.14} 0 ${r}Q${-r * 0.14} ${r * 0.14} ${-r} 0Q${-r * 0.14} ${-r * 0.14} 0 ${-r}Z`;

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 346, rx: 86, ry: 11, fill: '#000', opacity: 0.32 }, g);
    const arcs = A.el('g', { opacity: 0 }, g);       // speed blur behind
    const root = A.el('g', {}, g);
    const fx = A.el('g', {}, g);

    /* feet */
    const feet = A.el('g', {}, root);
    for (const fxp of [176, 224]) for (const d of [-9, 0, 9]) A.el('ellipse', { cx: fxp + d, cy: 340, rx: 6, ry: 8, fill: A.url('beak'), stroke: '#8a4c0c', 'stroke-width': 1 }, feet);

    /* body */
    const BODY = 'M200 168C264 168 294 234 294 280C294 320 256 344 200 344C144 344 106 320 106 280C106 234 136 168 200 168Z';
    const body = A.el('g', {}, root);
    A.el('path', { d: BODY, fill: A.url('redB') }, body);
    const bclip = A.id('bclip'); const bc = A.el('clipPath', { id: bclip }, A.defs); A.el('path', { d: BODY }, bc);
    const bodyIn = A.el('g', { 'clip-path': `url(#${bclip})` }, body);
    const BELLY = 'M200 218C240 218 262 254 262 288C262 320 236 338 200 338C164 338 138 320 138 288C138 254 160 218 200 218Z';
    A.el('path', { d: BELLY, fill: A.url('belly') }, bodyIn);
    if (!SM) {
      const sc = A.el('g', { fill: 'none', stroke: '#c9ad97', 'stroke-width': 1.8, 'stroke-linecap': 'round', opacity: 0.75 }, bodyIn);
      const rows = [[246, [184, 200, 216]], [264, [168, 184, 200, 216, 232]], [282, [160, 176, 192, 208, 224, 240]], [300, [168, 184, 200, 216, 232]], [318, [184, 200, 216]]];
      for (const [y, xs] of rows) for (const x of xs) A.el('path', { d: `M${x - 6} ${y}Q${x} ${y + 6} ${x + 6} ${y}` }, sc);
    }
    A.el('rect', { x: 100, y: 200, width: 200, height: 46, fill: A.url('occl') }, bodyIn);
    A.el('path', { d: BODY, fill: 'none', stroke: A.url('rim'), 'stroke-width': 4 }, body);

    /* head */
    const head = A.el('g', {}, root);
    const tufts = A.el('g', {}, head);
    const mkTuft = () => {
      const t = A.el('g', {}, tufts);
      A.el('path', { d: 'M-12 26L-12 -46L-5 -80Q16 -52 14 -12L14 26Z', fill: A.url('blade'), stroke: '#40454d', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, t);
      A.el('path', { d: 'M-5 -80Q16 -52 14 -12L14 4L8 4L8 -14Q8 -48 -4 -74Z', fill: '#ffffff', opacity: 0.55 }, t);
      A.el('path', { d: 'M-12 -46L-12 20', stroke: '#ffffff', 'stroke-width': 1.5, opacity: 0.7 }, t);
      if (!SM) A.el('ellipse', { cx: -4, cy: -30, rx: 2.4, ry: 6, fill: '#4b515a', opacity: 0.8 }, t);
      return t;
    };
    const tuftL = mkTuft(), tuftR = mkTuft();
    const HEAD = 'M200 66C270 66 306 106 306 156C306 206 264 234 200 234C136 234 94 206 94 156C94 106 130 66 200 66Z';
    A.el('path', { d: HEAD, fill: A.url('red') }, head);
    if (!SM) A.el('path', { d: 'M150 84Q200 70 250 84', fill: 'none', stroke: '#ffffff', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.18 }, head);
    A.el('path', { d: HEAD, fill: 'none', stroke: A.url('rim'), 'stroke-width': 4 }, head);
    /* back of head (seen mid-swivel) */
    const back = A.el('g', {}, head);
    A.el('path', { d: 'M160 112Q200 136 240 112M168 140Q200 162 232 140M176 168Q200 186 224 168', fill: 'none', stroke: '#7d1310', 'stroke-width': 5, 'stroke-linecap': 'round' }, back);
    /* face */
    const face = A.el('g', {}, head);
    A.el('path', { d: 'M200 116C188 100 164 100 146 103C116 108 102 132 104 160C106 192 128 212 158 212C176 212 190 206 200 200C210 206 224 212 242 212C272 212 294 192 296 160C298 132 284 108 254 103C236 100 212 100 200 116Z', fill: A.url('graph') }, face);
    if (!SM) A.el('path', { d: 'M200 116C188 100 164 100 146 103C116 108 102 132 104 160', fill: 'none', stroke: '#ffffff', 'stroke-width': 1.6, opacity: 0.18 }, face);

    const eye = (cx, cy) => {
      const E = { cx, cy };
      E.g = A.el('g', {}, face);
      A.el('circle', { cx, cy: cy + 3, r: 45, fill: '#000', opacity: 0.35 }, E.g);
      A.el('circle', { cx, cy, r: 43, fill: A.url('steel') }, E.g);
      E.knurl = A.el('circle', { cx, cy, r: 39.5, fill: 'none', stroke: '#4d545e', 'stroke-width': 3, 'stroke-dasharray': SM ? '0' : '1.4 2.4', opacity: SM ? 0 : 0.55 }, E.g);
      A.el('circle', { cx, cy, r: 36.2, fill: 'none', stroke: '#2a2e35', 'stroke-width': 2.4 }, E.g);
      const cid = A.id('lens' + cx); const cp = A.el('clipPath', { id: cid }, A.defs); A.el('circle', { cx, cy, r: 35 }, cp);
      const inner = A.el('g', { 'clip-path': `url(#${cid})` }, E.g);
      A.el('circle', { cx, cy, r: 35, fill: A.url('lens') }, inner);
      E.iris = A.el('g', {}, inner);
      A.el('circle', { cx, cy, r: 25, fill: A.url('iris') }, E.iris);
      if (!SM) {
        const st = A.el('g', { stroke: '#a8460f', 'stroke-width': 1, opacity: 0.45 }, E.iris);
        for (let k = 0; k < 18; k++) { const a = k * 20 * Math.PI / 180; A.el('line', { x1: cx + Math.cos(a) * 12, y1: cy + Math.sin(a) * 12, x2: cx + Math.cos(a) * 23, y2: cy + Math.sin(a) * 23 }, st); }
      }
      A.el('circle', { cx, cy, r: 25, fill: 'none', stroke: '#5a1d06', 'stroke-width': 1.6, opacity: 0.7 }, E.iris);
      E.pupil = A.el('path', { d: hex(cx, cy, 11, 0), fill: '#07080a', stroke: '#2a1206', 'stroke-width': 1 }, E.iris);
      E.glint = A.el('g', {}, inner);
      A.el('ellipse', { cx: cx - 11, cy: cy - 13, rx: 8, ry: 5, fill: '#fff', opacity: 0.92, transform: `rotate(-38 ${cx - 11} ${cy - 13})` }, E.glint);
      A.el('circle', { cx: cx + 10, cy: cy + 11, r: 2.6, fill: '#fff', opacity: 0.6 }, E.glint);
      if (!SM) A.el('path', { d: `M${cx - 30} ${cy + 8}A31 31 0 0 0 ${cx + 6} ${cy + 30}`, fill: 'none', stroke: '#9fd0ff', 'stroke-width': 2, opacity: 0.25, 'stroke-linecap': 'round' }, inner);
      E.lidB = A.el('path', { fill: A.url('lid'), stroke: '#f3e9de', 'stroke-width': 2.4 }, inner);
      E.lidT = A.el('path', { fill: A.url('lid'), stroke: '#f3e9de', 'stroke-width': 2.4 }, inner);
      E.shim = A.el('circle', { cx, cy, r: 41, fill: 'none', stroke: '#ffffff', 'stroke-width': 3.2, 'stroke-dasharray': '26 232', 'stroke-linecap': 'round', opacity: 0 }, E.g);
      E.flash = A.el('path', { d: star(16), fill: '#fff', opacity: 0 }, E.g);
      return E;
    };
    const eL = eye(158, 158), eR = eye(242, 158);
    /* beak */
    const beakG = A.el('g', {}, face);
    const mouth = A.el('ellipse', { cx: 200, cy: 206, rx: 7, ry: 0, fill: '#3a0d08' }, beakG);
    const beakLo = A.el('path', { d: 'M193 204Q200 216 207 204Q203 210 200 211Q197 210 193 204Z', fill: '#c47d18' }, beakG);
    A.el('path', { d: 'M188 186Q200 178 212 186Q210 202 200 218Q190 202 188 186Z', fill: A.url('beak'), stroke: '#8a4c0c', 'stroke-width': 1.2 }, beakG);
    A.el('path', { d: 'M193 187Q200 183 206 187', fill: 'none', stroke: '#fff', 'stroke-width': 1.8, opacity: 0.6, 'stroke-linecap': 'round' }, beakG);
    /* brows */
    const BROW = 'M-44 -2Q-10 -18 30 -6Q38 -2 34 6Q0 -4 -44 -2Z';
    const browL = A.el('path', { d: BROW, fill: '#f3e9de' }, face);
    const browR = A.el('path', { d: BROW, fill: '#f3e9de' }, face);

    /* wings */
    const WING = 'M116 208C94 218 82 252 86 288C88 306 96 320 106 330L110 316L117 327L120 312L126 318C136 290 138 244 116 208Z';
    const mkWing = (mir) => {
      const w = A.el('g', {}, root);
      const inner = A.el('g', mir ? { transform: 'translate(400 0) scale(-1 1)' } : {}, w);
      A.el('path', { d: WING, fill: A.url('wing'), stroke: '#121316', 'stroke-width': 1.2 }, inner);
      A.el('path', { d: 'M112 230C100 254 98 282 104 306M121 236C115 262 114 290 116 310', fill: 'none', stroke: '#8a919c', 'stroke-width': 1.4, opacity: 0.45 }, inner);
      A.el('path', { d: 'M116 208C98 218 88 240 87 262', fill: 'none', stroke: '#ff6b5c', 'stroke-width': 2.2, opacity: 0.55, 'stroke-linecap': 'round' }, inner);
      return w;
    };
    const wingL = mkWing(false), wingR = mkWing(true);

    /* medal (level up) */
    const medal = A.el('g', {}, root);
    A.el('path', { d: 'M-12 0L-20 34L-6 30L0 40Z', fill: '#b51d17' }, medal);
    A.el('path', { d: 'M12 0L20 34L6 30L0 40Z', fill: '#e5322b' }, medal);
    A.el('path', { d: 'M-12 0L12 0L6 18L-6 18Z', fill: '#ff5a4c' }, medal);
    A.el('circle', { cx: 0, cy: 66, r: 32, fill: A.url('gold'), stroke: '#8f5510', 'stroke-width': 2 }, medal);
    A.el('circle', { cx: 0, cy: 66, r: 25, fill: 'none', stroke: '#fff3c4', 'stroke-width': 1.6, opacity: 0.8 }, medal);
    A.el('text', { x: 0, y: 74, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#7a3f06', text: 'LV 8' }, medal);
    const mcid = A.id('medal'); const mcp = A.el('clipPath', { id: mcid }, A.defs); A.el('circle', { cx: 0, cy: 66, r: 32 }, mcp);
    const shineG = A.el('g', { 'clip-path': `url(#${mcid})` }, medal);
    const shine = A.el('rect', { x: -10, y: 20, width: 14, height: 100, fill: '#fff', opacity: 0.75 }, shineG);
    const medalTip = A.el('ellipse', { cx: 0, cy: -2, rx: 9, ry: 7, fill: '#2a2d34' }, medal); // wing tip grip

    /* fx: speed arcs */
    for (const [r, a0, a1, w] of [[122, -150, -40, 6], [134, -130, -60, 4], [112, 200, 300, 4]]) {
      const p0 = [200 + r * Math.cos(a0 * Math.PI / 180), 150 + r * Math.sin(a0 * Math.PI / 180)], p1 = [200 + r * Math.cos(a1 * Math.PI / 180), 150 + r * Math.sin(a1 * Math.PI / 180)];
      A.el('path', { d: `M${p0[0]} ${p0[1]}A${r} ${r} 0 0 1 ${p1[0]} ${p1[1]}`, fill: 'none', stroke: '#ffe9e2', 'stroke-width': w, 'stroke-linecap': 'round', opacity: 0.55 }, arcs);
    }
    /* location pin */
    const pin = A.el('g', {}, fx);
    const ping = [0, 1].map(() => A.el('ellipse', { cx: 0, cy: 0, rx: 10, ry: 3.5, fill: 'none', stroke: '#f6bb42', 'stroke-width': 2 }, pin));
    const pinBody = A.el('g', {}, pin);
    A.el('path', { d: 'M0 0C-6 -12 -16 -20 -16 -32A16 16 0 0 1 16 -32C16 -20 6 -12 0 0Z', fill: A.url('gold'), stroke: '#8f5510', 'stroke-width': 1.6 }, pinBody);
    A.el('circle', { cx: 0, cy: -32, r: 6, fill: '#2a2d34' }, pinBody);
    /* sparkles */
    const sparks = [[0, 0], [0, 0], [0, 0], [0, 0]].map(() => A.el('path', { d: star(9), fill: '#fff4cf' }, fx));
    /* confetti */
    const cr = A.rng(55), conf = [];
    const cc = ['#e5322b', '#f6bb42', '#d3d8de', '#f3e9de', '#ff7262'];
    if (true) for (let i = 0; i < (SM ? 8 : 22); i++) conf.push({ el: A.el('rect', { x: -4, y: -2.2, width: 8, height: 4.4, rx: 1, fill: cc[i % 5] }, fx), vx: (cr() - 0.5) * 300, vy: -(200 + cr() * 170), sp: (cr() - 0.5) * 1400, off: cr() * 1.4 });
    /* zzz */
    const zs = [0, 1, 2].map(() => A.el('text', { x: 0, y: 0, 'font-family': 'system-ui, sans-serif', 'font-weight': 900, 'font-size': 22, fill: '#f3e9de', text: 'z' }, fx));
    /* thought dots */
    const dots = [[300, 92, 5], [318, 70, 8], [342, 44, 12]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#f3e9de' }, fx));
    /* dizzy / grumble stars */
    const dstars = [0, 1, 2].map(() => A.el('path', { d: star(8), fill: '#f6bb42' }, fx));
    /* loose feathers on poke */
    const feathers = [0, 1, 2].map(i => A.el('path', { d: 'M0 -9Q6 -2 0 9Q-6 -2 0 -9Z', fill: i === 1 ? '#2a2d34' : '#e5322b' }, fx));

    /* ---------- mood parameters ---------- */
    const D = { lTL: 0.1, lTR: 0.1, lBL: 0.04, lBR: 0.04, bAL: 7, bAR: 7, bYL: 0, bYR: 0, pup: 1, lzL: 1, lzR: 1, tfL: 0, tfR: 0, beak: 0, wL: 4, wR: 4, tilt: 0, hx: 0, hy: 0, y: 0, sx: 1, sy: 1, gx: 0, gy: 0, gw: 1, spin: 0, shim: 0, knurl: 0 };
    const SIG = 3.9;
    function params(m, mt, t) {
      const p = Object.assign({}, D);
      if (m === 'idle') {
        const f = (t % 6.4), fid = seg(f, 4.6, 4.8) * (1 - seg(f, 5.5, 5.9));
        p.tilt = fid * 7; p.tfR = fid * 0.7 + A.wobble(f - 4.8, 18, 5) * 0.3 * (f > 4.8 ? 1 : 0); p.bAR = 7 - fid * 12; p.bYR = -fid * 4;
      } else if (m === 'happy') {
        const b = Math.abs(Math.sin(mt * 5.2));
        Object.assign(p, { lTL: 0.02, lTR: 0.02, lBL: 0.5, lBR: 0.5, bAL: -10, bAR: -10, bYL: -5, bYR: -5, pup: 1.18, tfL: 0.45 + Math.sin(mt * 10.4) * 0.15, tfR: 0.45 - Math.sin(mt * 10.4) * 0.15, beak: 0.3, wL: 22 + b * 16, wR: 22 + b * 16, y: -b * 13, sy: 1 + (b - 0.5) * 0.04, sx: 1 - (b - 0.5) * 0.03, tilt: Math.sin(mt * 2.6) * 4 });
      } else if (m === 'wink') {
        const k = ease.outBack(seg(mt, 0, 0.3));
        Object.assign(p, { lTL: lerp(0.1, 1, k), lBL: 0.25, lTR: 0.04, lBR: 0.32, bAL: 12, bYL: 5, bAR: -16, bYR: -9, tilt: 7 * k, tfL: -0.45 * k, tfR: 0.6 * k, beak: 0.15, pup: 1.12, gx: 0.15, gw: 0.5, wR: 4 + 26 * k, hx: 3 });
      } else if (m === 'surprised') {
        const j = seg(mt, 0, 0.5), hop = Math.sin(j * Math.PI), w = A.wobble(mt, 16, 4);
        Object.assign(p, { lTL: 0, lTR: 0, lBL: 0, lBR: 0, bAL: -18, bAR: -18, bYL: -13, bYR: -13, pup: 0.5, lzL: 1.12, lzR: 1.12, tfL: 1 + w * 0.4, tfR: 1 + w * 0.4, beak: 0.75, wL: 44 + w * 10, wR: 44 + w * 10, y: -16 * hop, hy: -4 * hop, sy: 1 + 0.07 * hop - 0.05 * Math.max(0, w), sx: 1 - 0.05 * hop, gw: 0.2 });
      } else if (m === 'thinking') {
        const k = ease.out(seg(mt, 0, 0.5)), tap = Math.max(0, Math.sin(mt * 7)) * seg(mt, 0.6, 0.8);
        Object.assign(p, { gx: 0.75, gy: -0.85, gw: 0.15, lTL: 0.22, lTR: 0.22, bAL: -12, bYL: -9, bAR: 12, bYR: 2, tilt: 6 * k, tfL: -0.15, tfR: 0.75, wL: lerp(4, -100, k) + tap * 6, pup: 1.05, hx: 2 });
      } else if (m === 'working') {
        const sc = Math.sin(mt * 2.4), foc = 0.5 + 0.5 * Math.cos(mt * 4.8);
        Object.assign(p, { gx: sc * 0.95, gy: 0.12, gw: 0.15, lTL: 0.3, lTR: 0.3, lBL: 0.12, lBR: 0.12, bAL: 13, bAR: 13, bYL: 3, bYR: 3, pup: 0.7 + 0.35 * foc, lzL: 1 + 0.04 * foc, lzR: 1 + 0.04 * foc, hx: sc * 6, tilt: sc * 3, tfL: 0.35 + Math.max(0, Math.sin(mt * 9)) * 0.15, tfR: 0.35, shim: 1, knurl: mt * 90, wL: 10, wR: 10 });
      } else if (m === 'celebrate') {
        const ph = (mt % 1.0) / 1.0, air = Math.sin(ph * Math.PI), land = A.wobble(ph < 0.5 ? 9 : ph - 0.0, 14, 7);
        Object.assign(p, { lTL: 0.02, lTR: 0.02, lBL: 0.5, lBR: 0.5, bAL: -12, bAR: -12, bYL: -7, bYR: -7, pup: 1.2, beak: 0.85, tfL: 1 - air * 0.5, tfR: 1 - air * 0.5, wL: 130 + Math.sin(mt * 18) * 14, wR: 130 + Math.sin(mt * 18) * 14, y: -48 * air, sy: 1 + 0.08 * air - (ph < 0.12 ? 0.07 * (1 - ph / 0.12) : 0), sx: 1 - 0.05 * air + (ph < 0.12 ? 0.05 * (1 - ph / 0.12) : 0), hy: -3 * air });
      } else if (m === 'sleepy') {
        const sw = Math.sin(t * 0.9), nod = Math.max(0, Math.sin(t * 0.9 - 1));
        Object.assign(p, { lTL: 0.74 + nod * 0.2, lTR: 0.78 + nod * 0.2, lBL: 0.12, lBR: 0.12, bAL: -8, bAR: -8, bYL: 5, bYR: 5, pup: 1.25, tfL: -0.95, tfR: -0.85, tilt: sw * 8, hy: nod * 5, gw: 0.1, gy: 0.3, beak: Math.max(0, Math.sin(t * 0.45)) * 0.35, sx: 1 + Math.sin(t * 1.4) * 0.012, sy: 1 - Math.sin(t * 1.4) * 0.012, wL: -4, wR: -4 });
      } else if (m === 'levelup') {
        const k = ease.outBack(seg(mt, 0, 0.55));
        Object.assign(p, { lTL: 0.03, lTR: 0.03, lBL: 0.38, lBR: 0.38, bAL: -6, bAR: -10, bYL: -3, bYR: -6, pup: 1.15, tfL: 0.9, tfR: 0.9, beak: 0.3, wR: lerp(4, 152, k), wL: 18, tilt: -4 * k, gx: 0.5, gy: -0.15, gw: 0.3, sx: 1 + 0.03 * k, sy: 1 + 0.02 * k, y: -6 * k });
      } else if (m === 'signature') {
        const T = mt % SIG;
        const ant = seg(T, 0, 0.18) * (1 - seg(T, 0.18, 0.3));
        const sp = ease.inOut(seg(T, 0.18, 0.8));
        const wob = T > 0.8 ? A.wobble(T - 0.8, 15, 6) : 0;
        const z = ease.outBack(seg(T, 0.92, 1.22)) * (1 - ease.inOut(seg(T, 3.4, 3.8)));
        const f = ease.outBack(seg(T, 1.55, 1.85)) * (1 - ease.inOut(seg(T, 3.3, 3.7)));
        const spinning = sp > 0 && sp < 1 ? 1 : 0;
        Object.assign(p, {
          spin: sp * 360, sy: 1 - 0.06 * ant + 0.03 * Math.sin(sp * Math.PI), sx: 1 + 0.05 * ant, y: -12 * Math.sin(sp * Math.PI),
          tfL: -0.6 * ant - 0.7 * spinning * Math.sin(sp * Math.PI) + wob * 0.6 + 0.4 * z + 0.4 * f, tfR: -0.6 * ant - 0.7 * spinning * Math.sin(sp * Math.PI) + wob * 0.6 + 0.4 * z + 0.6 * f,
          tilt: wob * 7 + 7 * f, lTL: 0.3 * ant + 0.42 * f, lTR: 0.3 * ant, lBL: 0.18 * f,
          lzL: 1 + 0.16 * z - 0.06 * f, lzR: 1 + 0.16 * z + 0.08 * f,
          pup: 1 - 0.45 * seg(T, 0.95, 1.15) * (1 - seg(T, 1.25, 1.5)) - 0.15 * f,
          bAL: 7 + 9 * f, bYL: 3 * f, bAR: 7 - 22 * f, bYR: -9 * f,
          wR: lerp(4, 150, f), wL: 4 + 14 * f, gx: 0.85 * f, gy: -0.55 * f, gw: 1 - f, beak: 0.25 * f, knurl: z * 160,
        });
      }
      return p;
    }

    const mw = (s, m) => (s.mood === m ? s.blend : 0) + (s.prev === m && s.mood !== m ? 1 - s.blend : 0);
    const lidPaths = (E, top, bot, kT, kB) => {
      const { cx, cy } = E;
      const e = lerp(cy - 38, cy + 3, top), eb0 = lerp(cy + 38, cy + 3, bot);
      const eb = Math.min(eb0, e + 1000), kb = kB;
      A.attr(E.lidT, { d: `M${cx - 46} ${cy - 52}L${cx + 46} ${cy - 52}L${cx + 46} ${e.toFixed(1)}Q${cx} ${(e + 2 * kT).toFixed(1)} ${cx - 46} ${e.toFixed(1)}Z` });
      // when the top lid closes, tuck the lower lid under it so one clean lash line shows
      const ebt = top > 0.85 ? Math.max(eb, e + 2 * kT * 0.5 + 6) : eb;
      A.attr(E.lidB, { d: `M${cx - 46} ${cy + 52}L${cx + 46} ${cy + 52}L${cx + 46} ${ebt.toFixed(1)}Q${cx} ${(ebt - 2 * kb).toFixed(1)} ${cx - 46} ${ebt.toFixed(1)}Z` });
    };

    return {
      update(s) {
        const L = A.life(s.t, 5);
        const P = params(s.mood, s.mt, s.t);
        if (s.prev && s.prev !== s.mood && s.blend < 1) {
          const Q = params(s.prev, 2, s.t), b = s.blend;
          if (s.prev === 'signature') Q.spin = 0;
          for (const k in P) P[k] = lerp(Q[k], P[k], b);
        }
        /* poke */
        const pk = s.poke < 4 ? s.poke : 99;
        const st = pk < 3 ? Math.exp(-pk * 3.4) : 0;
        const wb = A.wobble(pk, 17, 4.5);
        const shy = s.pokes >= 3 && pk < 2.5 ? clamp((2.5 - pk) / 0.3) * clamp(pk / 0.15 + 0.3) : 0;
        if (st > 0.001) {
          P.lTL = lerp(P.lTL, 0, st); P.lTR = lerp(P.lTR, 0, st); P.lBL = lerp(P.lBL, 0, st); P.lBR = lerp(P.lBR, 0, st);
          P.pup = lerp(P.pup, 0.5, st); P.lzL += 0.1 * st; P.lzR += 0.1 * st;
          P.tfL += 1.3 * st + wb * 0.5; P.tfR += 1.3 * st - wb * 0.5;
          P.bYL -= 10 * st; P.bYR -= 10 * st; P.bAL -= 18 * st; P.bAR -= 18 * st;
          P.beak = Math.max(P.beak, 0.7 * st); P.wL += 34 * st; P.wR += 34 * st;
          P.sx += 0.1 * wb; P.sy -= 0.1 * wb; P.y -= 6 * st; P.tilt += wb * 6;
        }
        let peek = 0;
        if (shy > 0) { /* triple poke: hide behind wings, peek, grumble */
          peek = Math.max(0, Math.sin(s.t * 3.2)) ** 3;
          P.wL = lerp(P.wL, -140 + peek * 34, shy); P.wR = lerp(P.wR, -140, shy);
          P.tfL = lerp(P.tfL, -1, shy); P.tfR = lerp(P.tfR, -1, shy);
          P.bAL = lerp(P.bAL, 20, shy); P.bAR = lerp(P.bAR, 20, shy); P.lTL = lerp(P.lTL, 0.45, shy);
          P.gx = lerp(P.gx, -0.9, shy); P.gw = lerp(P.gw, 0, shy); P.tilt = lerp(P.tilt, -6 + Math.sin(s.t * 9) * 2, shy);
          P.sy = lerp(P.sy, 0.95, shy); P.sx = lerp(P.sx, 1.04, shy);
        }
        if (s.hover && s.mood === 'idle') { P.tfL += 0.25; P.tfR += 0.25; P.pup += 0.1; }

        /* body */
        const br = L.breathe;
        A.tf(root, 0, P.y, 0, P.sx * (1 - br * 0.008), P.sy * (1 + br * 0.012), 200, 344);
        const lift = clamp(-P.y / 120);
        A.attr(shadow, { rx: 86 * (1 - lift * 0.5) * P.sx, opacity: 0.32 * (1 - lift * 0.6) });

        /* head */
        const lx = clamp(s.look.x, -1, 1), ly = clamp(s.look.y, -1, 1);
        const gw = P.gw;
        A.tf(head, P.hx + lx * 5 * gw, P.hy + ly * 4 * gw + br * 1.2, P.tilt + lx * 3 * gw, 1, 1, 200, 230);
        /* swivel */
        const ph = P.spin * Math.PI / 180, cs = Math.cos(ph), sn = Math.sin(ph);
        A.show(face, cs > 0); A.show(back, cs < 0);
        if (cs > 0) A.tf(face, sn * 72, 0, 0, Math.max(0.04, cs), 1, 200, 160); else A.attr(face, { transform: '' });
        if (cs < 0) A.tf(back, -sn * 72, 0, 0, Math.max(0.04, -cs), 1, 200, 150);
        const spinOn = P.spin > 1 && P.spin < 359 ? Math.sin(P.spin / 360 * Math.PI) : 0;
        A.op(arcs, spinOn * 1.2); A.tf(arcs, 0, P.y + P.hy, P.spin * 0.25, 1, 1, 200, 150);
        /* tufts */
        const tAng = u => (u >= 0 ? -22 + Math.min(u, 1.4) * 15 : -22 + Math.max(u, -1.2) * 56);
        A.tf(tufts, 0, 0, 0, Math.abs(cs) < 0.2 ? 0.2 * Math.sign(cs || 1) : cs, 1, 200, 0);
        A.tf(tuftL, 140, 92, tAng(P.tfL), 1, 1, 0, 0);
        A.attr(tuftR, { transform: `translate(260 92) rotate(${(-tAng(P.tfR)).toFixed(2)}) scale(-1 1)` });

        /* eyes */
        let gx = clamp(lx * gw + P.gx, -1, 1), gy = clamp(ly * gw + P.gy, -1, 1);
        const blink = shy > 0.5 ? 0 : L.blink;
        [[eL, P.lTL, P.lBL, P.lzL, P.bAL, P.bYL, -1], [eR, P.lTR, P.lBR, P.lzR, P.bAR, P.bYR, 1]].forEach(([E, lt, lb, lz, ba, by, side], i) => {
          let ox = gx * 9, oy = gy * 8;
          if (i === 0 && shy > 0) { ox = lerp(ox, -6, shy); }
          A.tf(E.g, 0, 0, 0, lz, lz, E.cx, E.cy);
          A.attr(E.iris, { transform: `translate(${ox.toFixed(2)} ${oy.toFixed(2)})` });
          A.attr(E.glint, { transform: `translate(${(ox * 0.2).toFixed(2)} ${(oy * 0.2).toFixed(2)})` });
          A.attr(E.pupil, { d: hex(E.cx, E.cy, 11 * clamp(P.pup, 0.35, 1.5), 30 + P.pup * 40 + (P.knurl * 0.2)) });
          const top = clamp(Math.max(lt, blink)), bot = clamp(lb);
          lidPaths(E, top, bot, top > 0.85 ? 7 : 5 + 4 * top, 9 + 4 * bot);
          A.tf(E.knurl, 0, 0, P.knurl * side, 1, 1, E.cx, E.cy);
          A.op(E.shim, P.shim * (0.55 + 0.35 * Math.sin(s.t * 6 + i)));
          A.tf(E.shim, 0, 0, s.t * 260 * side + i * 90, 1, 1, E.cx, E.cy);
          /* brows */
          const bx = E.cx + (side < 0 ? -2 : 2), byy = 108 + by;
          if (side < 0) A.tf(i === 0 ? browL : browR, bx, byy, ba, 1, 1, 0, 0);
          else A.attr(browR, { transform: `translate(${bx} ${byy.toFixed(2)}) rotate(${(-ba).toFixed(2)}) scale(-1 1)` });
        });
        /* focus glint flash (signature zoom + level up) */
        const sigW = mw(s, 'signature');
        const T = s.mt % SIG;
        const fl = s.mood === 'signature' ? Math.sin(seg(T, 1.1, 1.45) * Math.PI) : 0;
        [eL, eR].forEach((E, i) => { A.op(E.flash, fl); A.tf(E.flash, E.cx + 26, E.cy - 26, T * 200 + i * 40, 0.4 + fl, 0.4 + fl, 0, 0); });
        /* beak */
        A.attr(mouth, { ry: (P.beak * 9).toFixed(2), cy: 206 + P.beak * 3 });
        A.attr(beakLo, { transform: `translate(0 ${(P.beak * 10).toFixed(2)})` });

        /* wings: positive = raised outward */
        const flapL = wb * 10 * (st > 0.01 ? 1 : 0), flapR = -flapL;
        A.tf(wingL, 0, 0, P.wL + flapL + L.breathe * 1.5, 1, 1, 116, 214);
        A.tf(wingR, 0, 0, -(P.wR + flapR + L.breathe * 1.5), 1, 1, 284, 214);

        /* medal on the right wing tip */
        const lvW = mw(s, 'levelup');
        A.show(medal, lvW > 0.02);
        if (lvW > 0.02) {
          const th = -(P.wR) * Math.PI / 180, vx = 10, vy = 110;
          const tx = 284 + vx * Math.cos(th) - vy * Math.sin(th), ty = 214 + vx * Math.sin(th) + vy * Math.cos(th);
          const swing = (s.mood === 'levelup' ? A.wobble(s.mt - 0.35, 6, 1.8) * 22 : 0) + Math.sin(s.t * 2.2) * 3;
          A.tf(medal, tx, ty, swing, lvW, lvW, 0, 0);
          const sw = (s.mt % 1.8) / 1.8;
          A.attr(shine, { transform: `translate(${lerp(-60, 60, ease.inOut(clamp(sw * 1.6)))} 0) rotate(25 0 66)` });
        }
        /* sparkles around medal / celebration */
        const celW = mw(s, 'celebrate');
        sparks.forEach((e, i) => {
          const tw = Math.max(0, Math.sin(s.t * 4 + i * 1.7));
          if (lvW > 0.02) { const pos = [[372, 92], [300, 120], [376, 196], [312, 52]][i]; A.op(e, lvW * tw); A.tf(e, pos[0], pos[1] + P.y, s.t * 60, 0.5 + tw * 0.7); }
          else if (celW > 0.02) { const pos = [[86, 84], [318, 70], [60, 190], [344, 180]][i]; A.op(e, celW * tw); A.tf(e, pos[0], pos[1], s.t * 90, 0.5 + tw * 0.8); }
          else A.op(e, 0);
        });
        /* confetti */
        conf.forEach(c => {
          if (celW < 0.02) { A.op(c.el, 0); return; }
          const tt = (s.mt + c.off) % 1.5;
          const x = 200 + c.vx * tt, y = 130 + c.vy * tt + 320 * tt * tt;
          A.op(c.el, celW * (1 - seg(tt, 1.1, 1.5)));
          A.tf(c.el, x, y, c.sp * tt, 1, Math.cos(tt * 9 + c.off * 5), 0, 0);
        });
        /* location pin (signature found-it) */
        const pinS = s.mood === 'signature' ? ease.outBack(seg(T, 1.7, 2.0)) * (1 - seg(T, 3.3, 3.6)) * s.blend : 0;
        A.show(pin, pinS > 0.01);
        if (pinS > 0.01) {
          const bob = Math.sin(s.t * 5) * 3;
          A.tf(pin, 352, 104, 0, 1, 1, 0, 0);
          A.tf(pinBody, 0, -6 * pinS + bob - 4, 0, pinS, pinS, 0, 0);
          ping.forEach((e, i) => { const q = ((T - 1.8) * 1.2 + i * 0.5) % 1; const qq = q < 0 ? 0 : q; A.tf(e, 0, 0, 0, 0.6 + qq * 1.8, 0.6 + qq * 1.8, 0, 0); A.op(e, pinS * (1 - qq)); });
        }
        /* zzz */
        const slW = mw(s, 'sleepy');
        zs.forEach((z, i) => {
          const q = (s.t * 0.42 + i / 3) % 1;
          A.op(z, slW * Math.sin(q * Math.PI));
          A.tf(z, 268 + q * 46 + Math.sin(q * 6) * 6, 96 - q * 70, -10, 0.6 + q * 0.8, 0.6 + q * 0.8, 0, 0);
        });
        /* thought dots */
        const thW = mw(s, 'thinking');
        dots.forEach((d, i) => { const k = s.mood === 'thinking' ? seg(s.mt, 0.3 + i * 0.18, 0.5 + i * 0.18) : 1; A.op(d, thW * k * (0.75 + 0.25 * Math.sin(s.t * 3 - i))); A.tf(d, 0, Math.sin(s.t * 2 + i) * 2, 0, 1, 1, 0, 0); });
        /* grumble stars when hiding */
        dstars.forEach((e, i) => {
          const a = s.t * 4 + i * 2.094;
          A.op(e, shy * (0.6 + 0.4 * Math.sin(s.t * 8 + i)));
          A.tf(e, 200 + Math.cos(a) * 92, 46 + Math.sin(a) * 14 + P.y, s.t * 200, 0.9, 0.9, 0, 0);
        });
        /* loose feathers after a poke */
        feathers.forEach((f, i) => {
          const q = pk < 1.4 ? pk / 1.4 : 1;
          const dir = [-1, 1, -0.4][i];
          A.op(f, q < 1 ? (1 - q) * clamp(pk * 20) : 0);
          A.tf(f, 200 + dir * (70 + q * 60), 200 - 30 * Math.sin(q * 2) + q * 110 + i * 8, Math.sin(q * 10 + i) * 50, 1, 1, 0, 0);
        });
      },
    };
  },
});

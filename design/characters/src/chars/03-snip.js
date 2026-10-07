/* Snip: a sleek pocket-knife crab whose claws are polished steel scissors. */
CAST.register({
  id: 'snip', order: 3, name: 'Snip',
  tagline: 'Two steel claws. One clean cut.',
  concept: 'Snip is a sleek crab built like a pocket knife. Its red shell is the knife handle, with steel bolsters and two rivets. Its claws are real scissors. It crops, trims and frames your photos with one quick snip.',
  signature: 'Polished scissor claws that open, clack and snip. Its move: a sideways shuffle, a snip-snip that cuts a 4:5 frame out of the air, and the frame drops as a sticker.',
  why: ['A wide red shell with two raised scissor claws reads as one bold shape.', 'The claws are the crop tool, so the product idea lives in the body.', 'The snip-snip and the claw frame are gestures it can own.'],
  risks: ['A crab can slide into seafood cartoon if the polish slips.', 'Thin blades lose detail at the smallest sizes.'],
  voice: 'Snip snip. Your crop is ready.',
  scores: { memorable: 4, stylish: 4, expressive: 4, small: 4, fit: 5 },
  palette: ['#E5322B', '#8E1610', '#D7DEE6', '#2B3038', '#F5C542'],
  bg: '#2a3a46', iconBg: '#fdeee6', icon: { viewBox: '38 60 324 324' },

  build(g, A) {
    const S = A.small, L = A.lerp, C = A.clamp, E = A.ease, seg = A.seg;
    const TAU = Math.PI * 2, D2R = Math.PI / 180;
    const bump = (t, c, w) => Math.max(0, 1 - Math.abs(t - c) / w);

    /* ---------- gradients ---------- */
    A.grad('shell', [[0, '#ff7b63'], [0.3, '#f03e30'], [0.72, '#cf2219'], [1, '#86110b']]);
    A.grad('shellRim', [[0, '#ffc4b8', 0], [0.66, '#ffc4b8', 0], [1, '#ffe0d8', 0.95]], { x1: 0, y1: 0, x2: 1, y2: 0.35 });
    A.grad('gloss', [[0, '#ffffff', 0.9], [1, '#ffffff', 0]]);
    A.grad('bevel', [[0, '#ffd8cf', 0.95], [0.45, '#ff9a88', 0.15], [1, '#4d0704', 0.5]]);
    A.grad('lid', [[0, '#ff5d4a'], [1, '#c01d14']]);
    A.grad('cuff', [[0, '#ff7560'], [0.45, '#e2311f'], [1, '#8a120c']], { x1: 0, y1: 0, x2: 1, y2: 0.25 });
    A.grad('steelV', [[0, '#ffffff'], [0.28, '#d8dfe7'], [0.55, '#8995a3'], [0.8, '#c9d2dc'], [1, '#67727f']]);
    A.grad('bladeA', [[0, '#7b8794'], [0.42, '#dfe6ed'], [0.74, '#ffffff'], [1, '#bcc6d1']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('bladeB', [[0, '#e9eef3'], [0.3, '#b9c3ce'], [0.72, '#8792a0'], [1, '#5c6774']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('screw', [[0, '#ffffff'], [0.45, '#cdd5dd'], [1, '#55606d']], { radial: true, cx: 0.4, cy: 0.35, r: 0.6 });
    A.grad('sclera', [[0, '#ffffff'], [0.7, '#f2f4f7'], [1, '#c3cbd5']], { radial: true, cx: 0.42, cy: 0.36, r: 0.64 });
    A.grad('shadow', [[0, '#000', 0.5], [1, '#000', 0]], { radial: true });
    A.grad('gold', [[0, '#fff7cc'], [0.38, '#f8cc4c'], [0.8, '#d8961a'], [1, '#a2650a']], { radial: true, cx: 0.38, cy: 0.32, r: 0.72 });
    A.grad('goldRim', [[0, '#fff0b0'], [0.5, '#e6aa2a'], [1, '#8f5806']]);
    A.grad('glow', [[0, '#ffd36b', 0.6], [1, '#ffd36b', 0]], { radial: true });
    A.grad('photo', [[0, '#ffd889'], [0.5, '#ff8a5c'], [1, '#e0392d']]);
    A.grad('ribbon', [[0, '#ff5a48'], [1, '#a5140e']], { x1: 0, y1: 0, x2: 1, y2: 0 });

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 342, rx: 124, ry: 13, fill: A.url('shadow') }, g);
    const backFx = A.el('g', {}, g);
    const root = A.el('g', {}, g);
    const fxOut = A.el('g', {}, g);

    /* level-up glow and rays (behind the body) */
    const glowG = A.el('g', {}, backFx);
    A.el('circle', { cx: 0, cy: 0, r: 96, fill: A.url('glow') }, glowG);
    const rays = A.el('g', {}, glowG);
    for (let i = 0; i < 12; i++) A.el('path', { d: 'M -5 -40 L 0 -130 L 5 -40 Z', fill: '#ffe08a', opacity: 0.35, transform: `rotate(${i * 30})` }, rays);

    /* legs: tapered gunmetal segments, drawn as filled quads every frame */
    A.grad('leg', [[0, '#5d6672'], [0.5, '#323943'], [1, '#191c22']], { x1: 0, y1: 0, x2: 0, y2: 1 });
    A.grad('limb', [[0, '#ff6a55'], [0.5, '#e0291e'], [1, '#9c150e']]);
    A.grad('belly', [[0, '#4a525d'], [0.6, '#2a2f37'], [1, '#15181d']]);
    A.grad('palm', [[0, '#ff8a72'], [0.35, '#f03a2c'], [0.75, '#c11f16'], [1, '#7c0e09']], { radial: true, cx: 0.36, cy: 0.3, r: 0.8 });
    A.grad('iris', [[0, '#5b6f86'], [0.55, '#2b3747'], [1, '#0e1218']], { radial: true, cx: 0.45, cy: 0.62, r: 0.6 });
    A.grad('spec', [[0, '#ffffff', 0.85], [1, '#ffffff', 0]], { radial: true });
    const legsG = A.el('g', {}, root);
    const HIPS = [[166, 296], [144, 292], [124, 284]];
    const KNEES = [[132, 302], [100, 294], [72, 280]];
    const FEET = [[128, 344], [94, 342], [62, 336]];
    const legs = [];
    for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
      const sh = A.el('path', { fill: A.url('leg'), stroke: '#121418', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, legsG);
      const th = A.el('path', { fill: A.url('leg'), stroke: '#121418', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, legsG);
      const hl = S ? null : A.el('path', { fill: 'none', stroke: '#8d97a3', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: 0.75 }, legsG);
      const kn = A.el('circle', { r: 5, fill: A.url('screw'), stroke: '#121418', 'stroke-width': 1.4 }, legsG);
      legs.push({ sh, th, hl, kn, side, i });
    }
    const quad = (ax, ay, bx, by, w0, w1) => {
      const dx = bx - ax, dy = by - ay, l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l;
      const f = v => v.toFixed(1);
      return `M${f(ax + nx * w0)} ${f(ay + ny * w0)} L${f(bx + nx * w1)} ${f(by + ny * w1)} L${f(bx - nx * w1)} ${f(by - ny * w1)} L${f(ax - nx * w0)} ${f(ay - ny * w0)} Z`;
    };

    /* arms: red tubes with a dark outline (behind the shell) */
    const arms = [0, 1].map(() => ({
      o: A.el('path', { fill: 'none', stroke: '#330705', 'stroke-width': 16, 'stroke-linecap': 'round' }, root),
      a: A.el('path', { fill: 'none', stroke: '#d8281d', 'stroke-width': 11, 'stroke-linecap': 'round' }, root),
      h: S ? null : A.el('path', { fill: 'none', stroke: '#ff9a86', 'stroke-width': 2.6, 'stroke-linecap': 'round', opacity: 0.8, transform: 'translate(-1.5 -2.5)' }, root),
    }));

    /* eye stalks: red tubes */
    const stalks = [0, 1].map(() => ({
      o: A.el('path', { fill: 'none', stroke: '#330705', 'stroke-width': 11, 'stroke-linecap': 'round' }, root),
      a: A.el('path', { fill: 'none', stroke: '#d8281d', 'stroke-width': 6.5, 'stroke-linecap': 'round' }, root),
      h: S ? null : A.el('path', { fill: 'none', stroke: '#ff9f8c', 'stroke-width': 1.8, 'stroke-linecap': 'round', opacity: 0.85, transform: 'translate(-1.6 0)' }, root),
    }));

    /* shell: a domed carapace cut like a pocket-knife scale, on a gunmetal under-lip */
    const shellG = A.el('g', {}, root);
    const SHELL = 'M 200 194 C 252 194 293 203 313 224 C 320 232 318 246 309 258 C 293 283 256 302 200 302 C 144 302 107 283 91 258 C 82 246 80 232 87 224 C 107 203 148 194 200 194 Z';
    A.el('path', { d: SHELL, fill: A.url('belly'), stroke: '#121418', 'stroke-width': 2.4, transform: 'translate(200 304) scale(0.9 1) translate(-200 -295)' }, shellG);
    if (!S) A.el('path', { d: 'M 146 304 C 170 310 230 310 254 304', fill: 'none', stroke: '#8d97a3', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: 0.55 }, shellG);
    const scId = A.id('shellclip');
    A.el('path', { d: SHELL }, A.el('clipPath', { id: scId }, A.defs));
    A.el('path', { d: SHELL, fill: A.url('shell') }, shellG);
    const sIn = A.el('g', { 'clip-path': `url(#${scId})` }, shellG);
    // steel bolsters on the shoulder points
    const BOL_L = 'M 60 180 L 112 180 C 104 214 104 252 118 320 L 60 320 Z';
    A.el('path', { d: BOL_L, fill: A.url('steelV') }, sIn);
    A.el('path', { d: BOL_L, fill: A.url('steelV'), transform: 'translate(400 0) scale(-1 1)' }, sIn);
    A.el('path', { d: 'M 112 180 C 104 214 104 252 118 320 M 288 180 C 296 214 296 252 282 320', fill: 'none', stroke: '#3f0906', 'stroke-width': 2.4, opacity: 0.75 }, sIn);
    if (!S) A.el('path', { d: 'M 115 182 C 107 214 107 252 121 320 M 285 182 C 293 214 293 252 279 320', fill: 'none', stroke: '#ffb3a6', 'stroke-width': 1.4, opacity: 0.55 }, sIn);
    // ambient occlusion low, a dome sheen high, and a crisp specular
    A.el('ellipse', { cx: 200, cy: 318, rx: 140, ry: 34, fill: '#3e0604', opacity: 0.3 }, sIn);
    A.el('path', { d: 'M 120 214 C 160 201 240 201 280 214 C 268 228 240 233 200 233 C 160 233 132 228 120 214 Z', fill: A.url('gloss'), opacity: 0.62 }, sIn);
    if (!S) {
      A.el('ellipse', { cx: 160, cy: 210, rx: 18, ry: 4.2, fill: '#fff', opacity: 0.85, transform: 'rotate(-8 160 210)' }, sIn);
      A.el('circle', { cx: 186, cy: 206, r: 2.2, fill: '#fff', opacity: 0.8 }, sIn);
      A.el('path', { d: SHELL, fill: 'none', stroke: A.url('bevel'), 'stroke-width': 2.2, opacity: 0.8, transform: 'translate(200 250) scale(0.9 0.84) translate(-200 -250)' }, sIn);
    }
    A.el('path', { d: SHELL, fill: 'none', stroke: A.url('shellRim'), 'stroke-width': 7 }, sIn);
    A.el('path', { d: SHELL, fill: 'none', stroke: '#330705', 'stroke-width': 2.6 }, shellG);
    for (const x of [138, 262]) {
      A.el('circle', { cx: x, cy: 252, r: 7, fill: A.url('screw'), stroke: '#560a07', 'stroke-width': 1.8 }, shellG);
      if (!S) A.el('circle', { cx: x - 2.2, cy: 249.8, r: 1.9, fill: '#fff', opacity: 0.9 }, shellG);
    }
    const blush = [160, 240].map(x => A.el('ellipse', { cx: x, cy: 274, rx: 12, ry: 5.5, fill: '#ff9a8a', opacity: 0 }, shellG));

    /* mouth with clipped tongue */
    const mouthG = A.el('g', {}, shellG);
    const mcId = A.id('mouthclip');
    const mouthClip = A.el('path', { d: 'M0 0' }, A.el('clipPath', { id: mcId }, A.defs));
    const mouth = A.el('path', { d: 'M0 0', fill: '#3d0907', stroke: '#2c0504', 'stroke-width': 3.4, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, mouthG);
    const tongue = A.el('ellipse', { cx: 0, cy: 10, rx: 7, ry: 5, fill: '#ff6f6a', 'clip-path': `url(#${mcId})` }, mouthG);

    /* level-up medal (behind eyes and claws) */
    const medalG = A.el('g', {}, root);
    A.el('path', { d: 'M -8 4 L -30 64 L -20 58 L -14 70 L 6 10 Z', fill: A.url('ribbon'), stroke: '#5e0a06', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, medalG);
    A.el('path', { d: 'M 8 4 L 30 64 L 20 58 L 14 70 L -6 10 Z', fill: A.url('ribbon'), stroke: '#5e0a06', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, medalG);
    A.el('circle', { cx: 0, cy: 0, r: 37, fill: A.url('gold'), stroke: '#7d4c05', 'stroke-width': 2.4 }, medalG);
    A.el('circle', { cx: 0, cy: 0, r: 29, fill: 'none', stroke: A.url('goldRim'), 'stroke-width': 3 }, medalG);
    A.el('circle', { cx: 0, cy: 0, r: 29, fill: 'none', stroke: '#8f5806', 'stroke-width': 1, opacity: 0.6, transform: 'translate(0.8 1)' }, medalG);
    A.el('text', { x: 0, y: 7.5, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#5e3302', 'letter-spacing': 0.5, text: 'LV 8' }, medalG);
    A.el('text', { x: -0.6, y: 6.3, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#fff4c8', opacity: 0.55, 'letter-spacing': 0.5, text: 'LV 8' }, medalG);
    const mdId = A.id('medalclip');
    A.el('circle', { cx: 0, cy: 0, r: 37 }, A.el('clipPath', { id: mdId }, A.defs));
    const shineWrap = A.el('g', { 'clip-path': `url(#${mdId})` }, medalG);
    const shine = A.el('rect', { x: -7, y: -60, width: 13, height: 120, fill: '#fff', opacity: 0.75 }, shineWrap);

    /* eyes on stalks */
    const ER = 22;
    const eyes = [0, 1].map(k => {
      const eg = A.el('g', {}, root);
      A.el('circle', { cx: 0, cy: 1.5, r: ER + 2.5, fill: '#330705' }, eg);
      A.el('circle', { cx: 0, cy: 0, r: ER, fill: A.url('sclera') }, eg);
      const pupil = A.el('g', {}, eg);
      A.el('circle', { cx: 0, cy: 0, r: 12.5, fill: A.url('iris') }, pupil);
      A.el('circle', { cx: 0, cy: 0, r: 7, fill: '#0b0d10' }, pupil);
      if (!S) A.el('circle', { cx: 0, cy: 0, r: 11.8, fill: 'none', stroke: '#0b0d10', 'stroke-width': 1.4, opacity: 0.8 }, pupil);
      A.el('ellipse', { cx: -4.6, cy: -4.8, rx: 4.4, ry: 3.8, fill: '#fff' }, pupil);
      if (!S) A.el('circle', { cx: 4.4, cy: 4.6, r: 1.7, fill: '#fff', opacity: 0.85 }, pupil);
      const cid = A.id('eyeclip' + k);
      A.el('circle', { cx: 0, cy: 0, r: ER + 0.3 }, A.el('clipPath', { id: cid }, A.defs));
      const lidWrap = A.el('g', { 'clip-path': `url(#${cid})` }, eg);
      if (!S) A.el('path', { d: 'M -24 -24 A 30 30 0 0 1 24 -24 L 24 -16 A 30 22 0 0 0 -24 -16 Z', fill: '#000', opacity: 0.08 }, lidWrap);
      const up = A.el('g', {}, lidWrap);
      A.el('rect', { x: -30, y: -58, width: 60, height: 58, fill: A.url('lid') }, up);
      A.el('path', { d: 'M -30 0 H 30', stroke: '#4a0805', 'stroke-width': 3.2 }, up);
      if (!S) A.el('path', { d: 'M -14 -5 H 10', stroke: '#ffb0a2', 'stroke-width': 1.6, 'stroke-linecap': 'round', opacity: 0.7 }, up);
      const low = A.el('circle', { cx: 0, cy: 60, r: 30, fill: '#d42a1f', stroke: '#4a0805', 'stroke-width': 3 }, lidWrap);
      if (!S) A.el('path', { d: 'M 8 -18 A 20 20 0 0 1 19 -4', fill: 'none', stroke: '#fff', 'stroke-width': 2.2, 'stroke-linecap': 'round', opacity: 0.55 }, eg);
      const brow = A.el('path', { d: 'M -14 3.5 Q 0 -6.5 14 3.5 Q 0 -1 -14 3.5 Z', fill: '#1f2328', stroke: '#1f2328', 'stroke-width': 4.2, 'stroke-linejoin': 'round' }, eg);
      return { eg, pupil, up, low, brow };
    });

    /* anger mark for the grumpy reaction */
    const anger = A.el('g', { opacity: 0 }, root);
    for (let i = 0; i < 4; i++) A.el('path', { d: 'M 3 -12 Q 3 -3 12 -3', fill: 'none', stroke: '#fff', 'stroke-width': 7, 'stroke-linecap': 'round', transform: `rotate(${i * 90})` }, anger);
    for (let i = 0; i < 4; i++) A.el('path', { d: 'M 3 -12 Q 3 -3 12 -3', fill: 'none', stroke: '#e5322b', 'stroke-width': 3.6, 'stroke-linecap': 'round', transform: `rotate(${i * 90})` }, anger);

    const STAR4 = 'M0 -10 C 1 -2 2 -1 10 0 C 2 1 1 2 0 10 C -1 2 -2 1 -10 0 C -2 -1 -1 -2 0 -10 Z';
    /* scissor claws: a glossy red palm, a steel ferrule and two bevelled blades on a pivot screw */
    const BLADE_A = 'M 1.5 10 C -9.5 10 -16 1 -16 -16 C -16 -44 -9 -68 1.5 -94 Z';
    const BLADE_B = 'M -1.5 10 C 9.5 10 16 1 16 -16 C 16 -44 9 -68 -1.5 -94 Z';
    const claws = [0, 1].map(() => {
      const cg = A.el('g', {}, root);
      A.el('path', { d: 'M -10 50 C -25 42 -30 16 -21 0 C -14 -11 14 -11 21 0 C 30 16 25 42 10 50 Z', fill: A.url('palm'), stroke: '#330705', 'stroke-width': 2.4 }, cg);
      if (!S) {
        A.el('path', { d: 'M -16 8 C -19 18 -17 30 -11 38', fill: 'none', stroke: '#fff', 'stroke-width': 3, opacity: 0.55, 'stroke-linecap': 'round' }, cg);
        A.el('path', { d: 'M 22 10 C 24 22 20 36 11 45', fill: 'none', stroke: '#ffc2b5', 'stroke-width': 2, opacity: 0.6, 'stroke-linecap': 'round' }, cg);
      }
      A.el('rect', { x: -11, y: 44, width: 22, height: 9, rx: 3.5, fill: A.url('steelV'), stroke: '#2b313a', 'stroke-width': 1.5 }, cg);
      const bW = A.el('g', S ? { transform: 'scale(1.45 1.05)' } : {}, cg);
      const bB = A.el('g', {}, bW);
      A.el('path', { d: BLADE_B, fill: A.url('bladeB'), stroke: '#20252d', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, bB);
      if (!S) A.el('path', { d: 'M -1.5 4 L -1.5 -88 C 2 -70 5 -42 5 -16 C 5 -6 3 0 -1.5 4 Z', fill: '#e9eef3', opacity: 0.45 }, bB);
      const bA = A.el('g', {}, bW);
      A.el('path', { d: BLADE_A, fill: A.url('bladeA'), stroke: '#20252d', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, bA);
      if (!S) {
        A.el('path', { d: 'M 1.5 4 L 1.5 -88 C -2 -70 -5 -42 -5 -16 C -5 -6 -3 0 1.5 4 Z', fill: '#ffffff', opacity: 0.55 }, bA);
        A.el('path', { d: 'M -12 -14 C -12 -38 -7.5 -60 -2.5 -78', fill: 'none', stroke: '#fff', 'stroke-width': 1.8, opacity: 0.6, 'stroke-linecap': 'round' }, bA);
      }
      const glint = S ? null : A.el('path', { d: STAR4, fill: '#fff', opacity: 0 }, bA);
      A.el('circle', { cx: 0, cy: 0, r: 7.2, fill: A.url('screw'), stroke: '#20252d', 'stroke-width': 1.6 }, cg);
      const slot = A.el('path', { d: 'M -4 0 H 4', stroke: '#4a5361', 'stroke-width': 1.7, 'stroke-linecap': 'round' }, cg);
      return { cg, bA, bB, slot, glint };
    });

    /* in-body effects: the cut frame, thought bubble, sparkles */
    const fxIn = A.el('g', {}, root);
    const frameG = A.el('g', {}, fxIn);
    const frameGlow = A.el('path', { d: 'M0 0', fill: 'none', stroke: '#fff', 'stroke-width': 8, opacity: 0.18, 'stroke-linecap': 'round' }, frameG);
    const frameLine = A.el('path', { d: 'M0 0', fill: 'none', stroke: '#fff', 'stroke-width': 3, 'stroke-dasharray': '9 6', 'stroke-linecap': 'round' }, frameG);
    const corners = A.el('path', { d: 'M142 74 V55 H161 M239 55 H258 V74', fill: 'none', stroke: '#fff', 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, frameG);
    const tagG = A.el('g', {}, frameG);
    A.el('rect', { x: -22, y: -12, width: 44, height: 24, rx: 12, fill: '#e5322b', stroke: '#fff', 'stroke-width': 2.5 }, tagG);
    A.el('text', { x: 0, y: 5.5, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 800, 'font-size': 15, fill: '#fff', text: '4:5' }, tagG);

    const thinkG = A.el('g', {}, fxIn);
    const tDots = [[262, 120, 4], [279, 101, 6]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#fff' }, thinkG));
    const tBub = A.el('g', {}, thinkG);
    A.el('circle', { cx: 0, cy: 0, r: 24, fill: '#fff' }, tBub);
    A.el('path', { d: 'M -10 -3 V -10 H -3 M 3 10 H 10 V 3', fill: 'none', stroke: '#e5322b', 'stroke-width': 3.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, tBub);
    A.el('rect', { x: -5, y: -5, width: 10, height: 10, rx: 1.5, fill: '#2b3038', opacity: 0.85 }, tBub);

    const STAR = 'M0 -10 C 1 -2 2 -1 10 0 C 2 1 1 2 0 10 C -1 2 -2 1 -10 0 C -2 -1 -1 -2 0 -10 Z';
    const sparks = [];
    for (let i = 0; i < 10; i++) sparks.push(A.el('path', { d: STAR, fill: '#fff', opacity: 0 }, fxIn));
    const chips = [];
    const CHIP_COL = ['#ffd889', '#ff8a5c', '#7fc6e8', '#ffffff', '#ff8a5c', '#ffd889'];
    for (let i = 0; i < 6; i++) chips.push(A.el('path', { d: 'M -5 -3 L 6 -4 L 1 5 Z', fill: CHIP_COL[i], opacity: 0 }, fxIn));
    const zs = [0, 1, 2].map(() => A.el('text', { x: 0, y: 0, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 20, fill: '#e8eef5', opacity: 0, text: 'z' }, fxIn));

    /* world effects: confetti and the dropped sticker */
    const conf = [];
    const CONF_COL = ['#e5322b', '#f5c542', '#d7dee6', '#ffffff', '#ff8a5c', '#7fc6e8'];
    const rr = A.rng(31);
    for (let i = 0; i < (S ? 0 : 18); i++) conf.push({ el: A.el('rect', { x: -3.5, y: -6, width: 7, height: 12, rx: 1.5, fill: CONF_COL[i % 6], opacity: 0 }, fxOut), x: 30 + rr() * 340, sp: 0.55 + rr() * 0.5, ph: rr(), sw: rr() * TAU, spin: 200 + rr() * 400 });
    const sticker = A.el('g', {}, fxOut);
    A.el('rect', { x: -54, y: -66, width: 116, height: 145, rx: 13, fill: '#000', opacity: 0.22 }, sticker);
    A.el('rect', { x: -58, y: -72.5, width: 116, height: 145, rx: 13, fill: '#fff', stroke: '#d5dbe2', 'stroke-width': 1.5 }, sticker);
    A.el('rect', { x: -50, y: -64.5, width: 100, height: 129, rx: 7, fill: A.url('photo') }, sticker);
    A.el('circle', { cx: 16, cy: -28, r: 15, fill: '#fff6d2' }, sticker);
    A.el('path', { d: 'M -50 34 L -22 2 L -4 22 L 20 -8 L 50 28 L 50 57.5 Q 50 64.5 43 64.5 L -43 64.5 Q -50 64.5 -50 57.5 Z', fill: '#2b3038' }, sticker);
    A.el('rect', { x: -44, y: 40, width: 36, height: 18, rx: 9, fill: '#e5322b' }, sticker);
    A.el('text', { x: -26, y: 53.5, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 800, 'font-size': 13, fill: '#fff', text: '4:5' }, sticker);
    A.el('path', { d: 'M 58 52 L 58 59.5 Q 58 72.5 45 72.5 L 38 72.5 Z', fill: '#e3e7ec', stroke: '#c2c9d2', 'stroke-width': 1 }, sticker);

    /* ---------- poses ---------- */
    const REST = { lx: 74, ly: 190, lr: -16, lo: 16, rx: 326, ry: 190, rr: 16, ro: 16 };
    const BASE = {
      x: 0, y: 0, r: 0, sx: 1, sy: 1, walk: 0,
      ext: 0, lean: 0, etilt: 0,
      uL: 0.14, uR: 0.14, tilt: 0, lL: 0.04, lR: 0.04,
      bLy: 0, bRy: 0, bLr: 0, bRr: 0,
      gx: 0, gy: 0, gw: 1, ps: 1,
      mw: 12.5, mc: 6.5, mo: 0, mx: 0, mr: 0, blush: 0.25,
      ...REST,
    };
    // Frame corners for the crop pose.
    const FX0 = 142, FX1 = 258, FY0 = 55, FY1 = 200;

    function pose(m, mt, t) {
      const p = { ...BASE };
      switch (m) {
        case 'idle': {
          const f = t % 5.3; // fidget: a quick double clack, then a glance at the claw
          if (f < 0.7) { p.ro = 16 + 30 * Math.abs(Math.sin(f / 0.35 * Math.PI)); p.rr = 16 + 10 * Math.sin(f / 0.7 * Math.PI); p.ry = 190 - 10 * Math.sin(f / 0.7 * Math.PI); }
          const gl = bump(f, 0.5, 0.5); p.gx = 0.8 * gl; p.gy = -0.3 * gl; p.gw = 1 - gl * 0.7;
          break;
        }
        case 'happy': {
          const b = Math.abs(Math.sin(mt * 6));
          p.y = -10 * b; p.sy = 1 + 0.03 * b; p.sx = 1 - 0.02 * b;
          p.mw = 15; p.mc = 12; p.mo = 7; p.lL = p.lR = 0.64; p.uL = p.uR = 0.02; p.bLy = p.bRy = -5; p.bLr = p.bRr = -4; p.blush = 0.75;
          p.lr = -26 - 6 * b; p.rr = 26 + 6 * b; p.lo = p.ro = 26 + 22 * b; p.ly = p.ry = 182; p.ext = 4 + 4 * b;
          break;
        }
        case 'wink': {
          const sn = bump(mt, 0.3, 0.14);
          p.r = 4; p.x = 2; p.uR = 0.55; p.lR = 0.62; p.uL = 0.06; p.lL = 0.3; p.bLy = -7; p.bLr = -6; p.bRy = 4; p.bRr = 8;
          p.mw = 13; p.mc = 9; p.mo = 3; p.mr = -9; p.mx = 4; p.blush = 0.6; p.lean = 3;
          p.rx = 312; p.ry = 156; p.rr = 30 + 4 * Math.sin(mt * 3); p.ro = 44 * (1 - sn) + 6; p.gx = 0.15; p.gw = 0.5;
          break;
        }
        case 'surprised': {
          const j = Math.sin(seg(mt, 0, 0.42) * Math.PI);
          p.y = -24 * j; p.x = -8 * E.out(seg(mt, 0, 0.3)); p.sy = 1 + 0.08 * j; p.sx = 1 - 0.05 * j; p.r = -3;
          p.ext = 16; p.uL = p.uR = -0.06; p.lL = p.lR = 0; p.ps = 0.7; p.bLy = p.bRy = -10; p.bLr = p.bRr = -12;
          p.mw = 8; p.mc = 0; p.mo = 12; p.gw = 0.3;
          p.lx = 66; p.rx = 334; p.ly = p.ry = 170; p.lr = -34; p.rr = 34; p.lo = p.ro = 72;
          break;
        }
        case 'thinking': {
          p.r = -3; p.gx = 0.7; p.gy = -0.85; p.gw = 0.25; p.ext = 4; p.lean = 4; p.etilt = 6;
          p.uL = 0.28; p.uR = 0.12; p.bRy = -8; p.bRr = -10; p.bLy = 2; p.bLr = 8;
          p.mw = 7; p.mc = -1; p.mo = 0; p.mx = 7; p.mr = 10;
          const scr = Math.sin(mt * 16) * (Math.sin(mt * 1.3) > -0.2 ? 1 : 0); p.lx = 104; p.ly = 210; p.lr = 33 + 4 * scr; p.lo = 6 + 4 * Math.abs(scr); p.rr = 22; p.ro = 22 + 6 * Math.sin(mt * 2);
          break;
        }
        case 'working': {
          const W = 0.42, ph = (mt / W) % 1, ph2 = (mt / W + 0.5) % 1;
          p.lo = 8 + 44 * (0.5 + 0.5 * Math.cos(ph * TAU)); p.ro = 8 + 44 * (0.5 + 0.5 * Math.cos(ph2 * TAU));
          p.lx = 76; p.rx = 324; p.ly = p.ry = 204; p.lr = -48 - 6 * Math.sin(ph * TAU); p.rr = 48 + 6 * Math.sin(ph2 * TAU);
          p.bLr = p.bRr = 14; p.bLy = p.bRy = 4; p.uL = p.uR = 0.34; p.tilt = 5; p.lL = p.lR = 0.18;
          p.mw = 6; p.mc = 1; p.mo = 2.5; p.mx = -3; p.mr = -6;
          p.gx = 0.75 * Math.sin(mt / W * Math.PI); p.gy = 0.15; p.gw = 0.15;
          p.y = -2 * Math.abs(Math.sin(mt / W * Math.PI * 2)); p.walk = 0.15;
          break;
        }
        case 'celebrate': {
          const ph = (mt % 0.9) / 0.9, h = Math.sin(ph * Math.PI);
          const land = ph < 0.12 ? 1 - ph / 0.12 : 0;
          p.y = -40 * h; p.sy = 1 + 0.1 * h - 0.1 * land; p.sx = 1 - 0.06 * h + 0.08 * land;
          p.mw = 16; p.mc = 14; p.mo = 12; p.lL = p.lR = 0.62; p.uL = p.uR = 0.04; p.bLy = p.bRy = -8; p.bLr = p.bRr = -6; p.blush = 0.85; p.ext = 8 * h;
          p.lx = 70; p.rx = 330; p.ly = p.ry = 172 - 6 * h; p.lr = -30 - 10 * h; p.rr = 30 + 10 * h; p.lo = p.ro = 55 + 20 * Math.sin(mt * 14);
          p.walk = 0.3 * h; p.gw = 0.3;
          break;
        }
        case 'sleepy': {
          const sw = Math.sin(t * 1.1);
          p.uL = 0.66; p.uR = 0.72; p.lL = p.lR = 0.12; p.tilt = -9; p.bLy = p.bRy = 5; p.bLr = p.bRr = -7;
          p.mw = 6; p.mc = 0; p.mo = 3 + 1.5 * Math.sin(t * 1.6); p.ext = -10; p.lean = 6 * sw; p.etilt = 10 * sw; p.r = 2.5 * sw;
          p.sy = 0.98; p.sx = 1.02; p.gw = 0.15; p.gy = 0.4;
          p.lx = 76; p.ly = 258; p.lr = -156; p.lo = 4; p.rx = 324; p.ry = 258; p.rr = 156; p.ro = 4;
          break;
        }
        case 'levelup': {
          const up = E.outBack(seg(mt, 0, 0.5));
          p.y = -3 * Math.sin(mt * 4); p.sy = 1.02;
          p.mw = 15; p.mc = 13; p.mo = 9; p.lL = p.lR = 0.5; p.uL = p.uR = 0.04; p.bLy = p.bRy = -6; p.bLr = p.bRr = -5; p.blush = 0.65;
          const look = seg(mt, 0.2, 0.8); p.gy = L(-0.9, 0, look); p.gw = L(0, 0.4, look);
          p.lx = L(74, 118, up); p.ly = L(190, 172, up); p.lr = L(-16, 26, up); p.lo = L(16, 22, up);
          p.rx = L(326, 282, up); p.ry = L(190, 172, up); p.rr = L(16, -26, up); p.ro = L(16, 22, up);
          break;
        }
        case 'signature': {
          const T = mt % 3.2;
          const sh = seg(T, 0, 0.72);
          const moving = T < 0.72 ? 1 : 0;
          p.x = 30 * Math.sin(sh * TAU) * moving;
          p.r = 3.5 * Math.cos(sh * TAU) * moving;
          p.y = -5 * Math.abs(Math.sin(sh * TAU * 3)) * moving;
          p.walk = moving;
          p.gx = 0.6 * Math.cos(sh * TAU) * moving; p.gw = 0.3;
          p.mc = 9; p.mo = 3; p.mw = 12;
          const clack = 14 + 28 * Math.abs(Math.sin(T * 13));
          // crop pose: claws become the bottom corners of a 4:5 frame
          const k = E.inOut(seg(T, 0.72, 0.92)) * (1 - E.inOut(seg(T, 1.7, 1.98)));
          const snips = Math.max(bump(T, 1.0, 0.09), bump(T, 1.22, 0.09));
          const cOpen = 90 * (1 - 0.92 * snips);
          p.lx = L(74, FX0, k); p.ly = L(186, FY1, k); p.lr = L(-16, -12, k); p.lo = L(clack, cOpen, k);
          p.rx = L(326, FX1, k); p.ry = L(186, FY1, k); p.rr = L(16, 12, k); p.ro = L(clack, cOpen, k);
          p.y += -6 * k; p.ext = 6 * k;
          p.bLy = p.bRy = -5 * k; p.mc = L(9, 11, k); p.mo = L(3, 5, k); p.gw = L(p.gw, 0, k); p.gx = L(p.gx, 0, k);
          const wk = Math.min(seg(T, 1.36, 1.44), 1 - seg(T, 1.62, 1.7));
          p.uR = L(p.uR, 0.55, wk); p.lR = L(p.lR, 0.62, wk); p.mr = -8 * wk; p.bRy += 4 * wk; p.bLy -= 3 * wk;
          // after the drop: admire the sticker
          const ad = seg(T, 1.95, 2.2) * (1 - seg(T, 2.95, 3.2));
          p.gx = L(p.gx, 0.85, ad); p.gy = L(p.gy, 0.75, ad); p.gw = L(p.gw, 0.1, ad);
          p.mc = L(p.mc, 13, ad); p.mo = L(p.mo, 8, ad); p.mw = L(p.mw, 15, ad); p.lL = L(p.lL, 0.4, ad); p.lR = L(p.lR, 0.4, ad); p.blush = L(0.25, 0.7, ad);
          p.etilt = 8 * ad; p.lean = 5 * ad; p.r += 3 * ad;
          const cl = bump(T, 2.55, 0.1); p.ro = L(p.ro, 4, cl); p.rr += 0; p.ry -= 8 * Math.sin(seg(T, 2.35, 2.8) * Math.PI);
          break;
        }
      }
      return p;
    }

    const lerpPose = (a, b, k) => { const o = {}; for (const key in b) o[key] = L(a[key], b[key], k); return o; };
    const star = (el, x, y, sz, o, rot = 0, col = '#fff') => { A.tf(el, x, y, rot, sz, sz); A.op(el, o); if (col) el.setAttribute('fill', col); };
    const tipOf = (px, py, r, d = 82) => [px + d * Math.sin(r * D2R), py - d * Math.cos(r * D2R)];

    return {
      update(s) {
        const t = s.t, mt = s.mt, Lf = A.life(t, 3);
        const look = s.look || { x: 0, y: 0 };
        let P = pose(s.mood, mt, t);
        const P0x = P.x, P0y = P.y, P0r = P.r;
        if (s.prev && s.prev !== s.mood && s.blend < 1) P = lerpPose(pose(s.prev, mt + 3, t), P, E.inOut(s.blend));

        /* life */
        P.sy *= 1 + Lf.breathe * 0.012; P.sx *= 1 - Lf.breathe * 0.008; P.ext += Lf.breathe * 1.5;
        P.lr += Lf.sway * 2; P.rr -= Lf.sway * 2; P.ly += Lf.breathe * 1.5; P.ry += Lf.breathe * 1.5;
        if (s.hover) { P.ext += 3; P.lo += 6; P.ro += 6; }

        /* poke */
        const pk = s.poke;
        if (pk < 2) {
          const w = A.wobble(pk, 17, 5.5);
          P.sx += w * 0.09; P.sy -= w * 0.09; P.r += w * 5;
          if (s.pokes < 3) {
            const st = Math.exp(-pk * 2.6) * C(pk / 0.04);
            P.uL = L(P.uL, -0.08, st); P.uR = L(P.uR, -0.08, st); P.lL = L(P.lL, 0, st); P.lR = L(P.lR, 0, st);
            P.bLy -= 9 * st; P.bRy -= 9 * st; P.bLr = L(P.bLr, -12, st); P.bRr = L(P.bRr, -12, st);
            P.mo = L(P.mo, 11, st); P.mw = L(P.mw, 8, st); P.mc = L(P.mc, 0, st); P.mr = L(P.mr, 0, st);
            // eyes duck into the shell on impact, then pop up and quiver
            P.ext += pk < 0.07 ? -22 * (pk / 0.07) : L(-22, 18, E.outBack(C((pk - 0.07) / 0.18))) * Math.exp(-(pk - 0.07) * 1.6);
            P.ps = L(P.ps, 0.62, st); P.gw = L(P.gw, 0.2, st);
            const snap = pk < 0.1 ? 0 : 1;
            P.lo = L(P.lo, 80 * snap, st); P.ro = L(P.ro, 80 * snap, st);
            P.lr = L(P.lr, -34, st); P.rr = L(P.rr, 34, st); P.ly -= 22 * st; P.ry -= 22 * st; P.lx -= 8 * st; P.rx += 8 * st;
            P.y -= 14 * Math.sin(C((pk - 0.06) / 0.4) * Math.PI);
          }
        }
        let grump = 0;
        if (s.pokes >= 3 && pk < 2.5) {
          grump = C((2.5 - pk) / 0.6);
          const gk = grump;
          P.bLr = L(P.bLr, 22, gk); P.bRr = L(P.bRr, 22, gk); P.bLy = L(P.bLy, 5, gk); P.bRy = L(P.bRy, 5, gk);
          P.uL = L(P.uL, 0.4, gk); P.uR = L(P.uR, 0.4, gk); P.tilt = L(P.tilt, 16, gk); P.lL = L(P.lL, 0.22, gk); P.lR = L(P.lR, 0.22, gk);
          P.mw = L(P.mw, 10, gk); P.mc = L(P.mc, -7, gk); P.mo = L(P.mo, 1.5, gk); P.mr = L(P.mr, 0, gk); P.blush = L(P.blush, 1, gk);
          P.lo = L(P.lo, 10 + 40 * Math.abs(Math.sin(t * 19)), gk); P.ro = L(P.ro, 10 + 40 * Math.abs(Math.sin(t * 19 + 1.2)), gk);
          P.lr = L(P.lr, -28, gk); P.rr = L(P.rr, 28, gk); P.ly = L(P.ly, 176, gk); P.ry = L(P.ry, 176, gk);
          P.x += Math.sin(t * 46) * 2.2 * gk; P.walk = Math.max(P.walk, 0.7 * gk); P.y -= 3 * Math.abs(Math.sin(t * 19)) * gk; P.ext -= 6 * gk; P.gw = L(P.gw, 0.1, gk); P.gx = L(P.gx, 0, gk); P.gy = L(P.gy, 0, gk);
        }

        /* body */
        P.x += look.x * 3; P.r += look.x * 1.5;
        A.tf(root, P.x, P.y, P.r, P.sx, P.sy, 200, 340);
        const air = C(-P.y / 60);
        A.attr(shadow, { rx: 124 * (1 - 0.35 * air), cx: 200 + P.x, opacity: 1 - 0.45 * air });

        /* legs */
        const wph = t * 19, splay = C(P.sx - 1, -0.1, 0.2) * 60;
        for (const lg of legs) {
          const sd = lg.side, mx = v => (sd < 0 ? v : 400 - v);
          const [hx0, hy] = HIPS[lg.i], [kx0, ky0] = KNEES[lg.i], [fx0, fy0] = FEET[lg.i];
          const ph = wph + lg.i * 2.1 + (sd > 0 ? Math.PI : 0);
          const lift = P.walk * 9 * Math.max(0, Math.cos(ph));
          const fx = mx(fx0 - splay * (1 + lg.i * 0.3)) + P.walk * 8 * Math.sin(ph), fy = fy0 - lift + air * 4;
          const kx = mx(kx0 - splay * 0.6), ky = ky0 - lift * 0.7 - air * 6 + (P.sy - 1) * 30;
          const hx = mx(hx0);
          lg.th.setAttribute('d', quad(hx, hy, kx, ky, 6.5, 5));
          lg.sh.setAttribute('d', quad(kx, ky, fx, fy, 5, 1.4));
          A.attr(lg.kn, { cx: kx, cy: ky });
          if (lg.hl) lg.hl.setAttribute('d', `M${(kx - sd * 1.5).toFixed(1)} ${(ky + 4).toFixed(1)} L${L(kx, fx, 0.7).toFixed(1)} ${L(ky, fy, 0.7).toFixed(1)}`);
        }

        /* claws and arms */
        const CL = [[P.lx, P.ly, P.lr, P.lo, 1], [P.rx, P.ry, P.rr, P.ro, -1]];
        CL.forEach(([px, py, r, o, m], k) => {
          const c = claws[k];
          A.tf(c.cg, px, py, r, m, 1);
          A.tf(c.bA, 0, 0, -C(o, -4, 120) / 2); A.tf(c.bB, 0, 0, C(o, -4, 120) / 2);
          A.tf(c.slot, 0, 0, 30 + o * 0.6);
          const wx = px - 50 * Math.sin(r * D2R), wy = py + 50 * Math.cos(r * D2R);
          const sx = k === 0 ? 112 : 288, sy = 258, dir = k === 0 ? -1 : 1;
          const cx = (sx + wx) / 2 + dir * 16, cy = (sy + wy) / 2 + 14;
          const d = `M${sx} ${sy} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${wx.toFixed(1)} ${wy.toFixed(1)}`;
          arms[k].o.setAttribute('d', d); arms[k].a.setAttribute('d', d); if (arms[k].h) arms[k].h.setAttribute('d', d);
          if (c.glint) {
            const gp = ((t * 0.55 + k * 0.37) % 2.6) / 0.6;
            A.tf(c.glint, -6, L(-12, -80, C(gp)), gp * 120, 0.9 * Math.sin(C(gp) * Math.PI));
            A.op(c.glint, gp < 1 ? 0.95 : 0);
          }
        });

        /* eyes (stalks lag behind the body, and spring after a poke) */
        const Pp = pose(s.mood, mt - 0.1, t - 0.1);
        let lagX = C((Pp.x - P0x) * 0.7 + (Pp.r - P0r) * 1.4, -12, 12), lagY = C((Pp.y - P0y) * 0.5, -10, 10);
        if (pk < 2) { const w2 = A.wobble(pk - 0.05, 13, 4.2); lagX += w2 * 10; lagY += Math.abs(w2) * 5; }
        if (grump > 0) lagX += Math.sin(t * 46 + 1) * 1.5 * grump;
        A.op(anger, grump * (S ? 0 : 1));
        const gx = C(look.x * P.gw + P.gx, -1, 1), gy = C(look.y * P.gw + P.gy, -1, 1);
        [[172, 186, 0], [228, 214, 1]].forEach(([ex0, bx, k]) => {
          const e = eyes[k], side = k === 0 ? -1 : 1;
          const ex = ex0 + P.lean + look.x * 5 * P.gw + side * Math.max(0, P.ext) * 0.15, ey = 156 - P.ext + look.y * 3 * P.gw;
          const by = 214;
          const ex2 = ex + lagX, ey2 = ey + lagY;
          const sdp = `M${bx} ${by} Q${((bx + ex) / 2 + side * 2).toFixed(1)} ${((by + ey) / 2 + 6).toFixed(1)} ${ex2.toFixed(1)} ${ey2.toFixed(1)}`;
          stalks[k].o.setAttribute('d', sdp); stalks[k].a.setAttribute('d', sdp);
          if (stalks[k].h) stalks[k].h.setAttribute('d', sdp);
          A.tf(e.eg, ex2, ey2, P.etilt + side * 2 + lagX * 1.2);
          if (k === 1) A.tf(anger, ex2 + 26, ey2 - 30, 10 * Math.sin(t * 9), 0.8 + 0.25 * Math.abs(Math.sin(t * 9)));
          A.tf(e.pupil, gx * 8, gy * 7, 0, P.ps, P.ps);
          const l = C(k === 0 ? P.lL : P.lR, 0, 1);
          let u = k === 0 ? P.uL : P.uR;
          const uMeet = (42 - 30 * l) / 42 + 0.03;
          if (!(s.mood === 'signature' && k === 1 && u > 0.5)) u = L(u, uMeet, Lf.blink * (grump > 0.5 ? 0 : 1));
          u = Math.min(u, uMeet);
          A.tf(e.up, 0, -21 + 42 * u, k === 0 ? P.tilt : -P.tilt);
          A.attr(e.low, { cy: 21 - 30 * l + 30 });
          const brY = (k === 0 ? P.bLy : P.bRy), brR = (k === 0 ? P.bLr : P.bRr);
          A.tf(e.brow, 0, -31 + brY, k === 0 ? brR : -brR);
        });

        /* mouth */
        const w = Math.max(3, P.mw), c = P.mc, o = Math.max(0, P.mo);
        const md = `M${-w} 0 Q0 ${(c - o * 0.6).toFixed(2)} ${w} 0 Q0 ${(c + o * 1.7).toFixed(2)} ${-w} 0 Z`;
        mouth.setAttribute('d', md); mouthClip.setAttribute('d', md);
        A.attr(tongue, { cy: c * 0.5 + o * 0.95, rx: w * 0.55, ry: Math.max(0.1, o * 0.45) });
        A.tf(mouthG, 200 + P.mx, 271, P.mr);
        blush.forEach(b => A.op(b, P.blush * 0.7));

        /* ---------- effects ---------- */
        const md0 = s.mood, bl = s.blend;
        let sp = 0;
        const spark = (x, y, sz, op, rot, col) => { if (sp < sparks.length) star(sparks[sp++], x, y, sz, op, rot, col); };

        // glow + medal
        const isLv = md0 === 'levelup';
        const lvIn = isLv ? E.outBack(seg(mt, 0, 0.5)) : 0;
        A.show(medalG, isLv); A.show(glowG, isLv);
        if (isLv) {
          const my = L(240, 88, lvIn) + 3 * Math.sin(mt * 4);
          A.tf(medalG, 200, my, 6 * Math.sin(mt * 2.2), 0.4 + 0.6 * lvIn);
          A.tf(glowG, 200 + P.x, my + P.y, 0, 0.3 + 0.7 * lvIn);
          A.op(glowG, bl * (0.8 + 0.2 * Math.sin(mt * 5)));
          A.tf(rays, 0, 0, mt * 20);
          const sw = ((mt - 0.4) % 1.5) / 1.5;
          A.tf(shine, L(-60, 60, E.inOut(C(sw * 1.4))), 0, 25);
          if (!S) for (let i = 0; i < 4; i++) {
            const a = i * 1.57 + mt * 1.2, ph = (mt * 1.4 + i * 0.25) % 1;
            spark(200 + Math.cos(a) * 58, my + Math.sin(a) * 50, 0.5 + 0.6 * Math.sin(ph * Math.PI), Math.sin(ph * Math.PI) * lvIn, mt * 90, i % 2 ? '#fff' : '#ffe08a');
          }
        }

        // signature: the cut frame and the sticker
        const isSig = md0 === 'signature';
        const T = mt % 3.2;
        A.show(frameG, isSig); A.show(sticker, isSig);
        if (isSig) {
          const pr = E.inOut(seg(T, 0.86, 1.3));
          const fade = 1 - seg(T, 1.68, 1.8);
          // two half-frames, drawn from each bottom corner up and across to the top centre
          const half = (x0, dirx) => {
            const H = FY1 - FY0, Wd = (FX1 - FX0) / 2, tot = H + Wd, d = pr * tot;
            if (d <= 0) return '';
            const yUp = Math.min(d, H);
            let s2 = `M${x0} ${FY1} V${(FY1 - yUp).toFixed(1)}`;
            if (d > H) s2 += ` H${(x0 + dirx * (d - H)).toFixed(1)}`;
            return s2;
          };
          const base = pr > 0 ? `M${FX0} ${FY1} H${L(FX0, FX1, pr).toFixed(1)}` : '';
          const fd = (half(FX0, 1) + ' ' + half(FX1, -1) + ' ' + base).trim() || 'M0 0';
          frameLine.setAttribute('d', fd); frameGlow.setAttribute('d', fd);
          A.op(frameG, fade * bl);
          A.op(corners, seg(T, 1.18, 1.3));
          const tp = E.outBack(seg(T, 1.26, 1.42));
          A.tf(tagG, 200, FY0 - 2, 0, Math.max(0.01, tp));
          // snip sparks at the claw tips
          for (const [c0, side] of [[1.0, 0], [1.22, 1]]) {
            const a = C(1 - Math.abs(T - c0) / 0.16);
            if (a > 0) {
              const px = side === 0 ? P.lx : P.rx, py = side === 0 ? P.ly : P.ry, r = side === 0 ? P.lr : P.rr;
              const [tx, ty] = tipOf(px, py, r, 46);
              spark(tx, ty, 0.6 + 1.1 * a, a, T * 200);
              spark(side === 0 ? FX0 : FX1, FY0 + 20, 0.5 + 0.8 * a, a * 0.9, -T * 150, '#ffe08a');
            }
          }
          // the frame fills in, then drops as a sticker
          const fill = seg(T, 1.62, 1.78), fall = seg(T, 1.78, 2.22), out = 1 - seg(T, 2.85, 3.15);
          const land = seg(T, 2.22, 2.5), hop = Math.sin(land * Math.PI) * (1 - land) * 10;
          const fe = E.in(fall);
          const sx2 = L(200 + P.x, 312, E.out(fall)), sy2 = L(127.5 + P.y, 304, fe) - hop;
          const sc = L(1, 0.4, E.out(fall)) * (1 + 0.06 * Math.sin(fill * Math.PI));
          A.tf(sticker, sx2, sy2, L(0, 14, E.out(fall)) + 4 * Math.sin(land * Math.PI * 2) * (1 - land), sc, sc);
          A.op(sticker, Math.min(fill * 1.5, out) * bl);
          if (fill > 0 && fall < 0.3) for (let i = 0; i < 4; i++) {
            const a = 1 - seg(T, 1.62 + i * 0.03, 1.95);
            spark(200 + [-62, 60, -60, 62][i], [60, 64, 196, 192][i], 0.6 + 0.6 * a, a * (fill > 0 ? 1 : 0), i * 40);
          }
          if (land > 0 && land < 1) { const a = 1 - land; spark(352, 330, 0.7 * a + 0.3, a, 20); spark(272, 334, 0.5 * a + 0.3, a, 60, '#ffe08a'); }
          const cl = C(1 - Math.abs(T - 2.55) / 0.14);
          if (cl > 0) { const [tx, ty] = tipOf(P.rx, P.ry, P.rr, 76); spark(tx, ty, 0.5 + 0.8 * cl, cl, 30); }
        }

        // working: snip sparks and falling trims
        const isW = md0 === 'working';
        chips.forEach(ch => A.show(ch, isW));
        if (isW) {
          const Wp = 0.42;
          [[P.lx, P.ly, P.lr, 0], [P.rx, P.ry, P.rr, 0.5]].forEach(([px, py, r, off], side) => {
            const age = (((mt / Wp) + 0.5 + off) % 1) * Wp; // time since this claw last closed
            const [tx, ty] = tipOf(px, py, r, 60);
            const a = C(1 - age / 0.16);
            spark(tx, ty, 0.5 + 0.9 * a, a * bl, age * 300);
            for (let j = 0; j < 3; j++) {
              const ch = chips[side * 3 + j], ag = age + j * Wp;
              const cx = tx + (side ? 1 : -1) * (10 + 26 * ag) + j * 3, cy = ty + 30 * ag + 160 * ag * ag;
              A.tf(ch, cx, cy, (side ? 1 : -1) * ag * 500 + j * 60, 1.1);
              A.op(ch, bl * C(1 - ag / (Wp * 3)) * C(ag / 0.04));
            }
          });
        }

        // grumpy snaps
        if (grump > 0.2 && !S) {
          const sn = Math.abs(Math.sin(t * 19));
          if (sn < 0.3) { const [tx, ty] = tipOf(P.lx, P.ly, P.lr, 70); spark(tx, ty, 0.8, grump * (1 - sn / 0.3), t * 300, '#ffe08a'); }
          const sn2 = Math.abs(Math.sin(t * 19 + 1.2));
          if (sn2 < 0.3) { const [tx, ty] = tipOf(P.rx, P.ry, P.rr, 70); spark(tx, ty, 0.8, grump * (1 - sn2 / 0.3), t * 300, '#ffe08a'); }
        }

        // wink: a little snap spark
        if (md0 === 'wink') {
          const a = C(1 - Math.abs(mt - 0.32) / 0.2);
          if (a > 0) { const [tx, ty] = tipOf(P.rx, P.ry, P.rr, 80); spark(tx, ty, 0.6 + a, a * bl, mt * 200); spark(tx + 16, ty - 10, 0.5 * a + 0.2, a * bl, 30, '#ffe08a'); }
        }

        // celebrate: sparkles and confetti
        const isC = md0 === 'celebrate';
        conf.forEach(cf => A.show(cf.el, isC));
        if (isC) {
          conf.forEach(cf => {
            const ph = (t * cf.sp * 0.6 + cf.ph) % 1;
            A.tf(cf.el, cf.x + 18 * Math.sin(t * 2 + cf.sw), -20 + ph * 380, t * cf.spin, 1, Math.cos(t * 6 + cf.sw));
            A.op(cf.el, bl * C(ph * 6) * C((1 - ph) * 5));
          });
          if (!S) for (let i = 0; i < 5; i++) {
            const ph = (mt * 1.1 + i * 0.2) % 1;
            const x = [78, 322, 120, 280, 200][i], y = [72, 66, 40, 34, 22][i];
            spark(x, y, 0.4 + 0.8 * Math.sin(ph * Math.PI), Math.sin(ph * Math.PI) * bl, ph * 180, i % 2 ? '#ffe08a' : '#fff');
          }
        }

        // thinking bubble
        const isT = md0 === 'thinking';
        A.show(thinkG, isT);
        if (isT) {
          A.op(tDots[0], seg(mt, 0.1, 0.25)); A.op(tDots[1], seg(mt, 0.25, 0.4));
          const bp = E.outBack(seg(mt, 0.4, 0.65));
          A.tf(tBub, 306, 76 + 3 * Math.sin(mt * 2.5), 0, Math.max(0.01, bp));
          A.op(thinkG, bl);
        }

        // sleepy z's
        zs.forEach((z, i) => {
          const on = md0 === 'sleepy';
          A.show(z, on);
          if (!on) return;
          const ph = (t * 0.42 + i / 3) % 1;
          A.tf(z, 262 + ph * 46 + 6 * Math.sin(ph * 6), 126 - ph * 84, -12 + ph * 20, 0.6 + ph * 0.9);
          A.op(z, Math.sin(ph * Math.PI) * bl);
        });

        for (; sp < sparks.length; sp++) A.op(sparks[sp], 0);
      },
    };
  },
});

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
  bg: '#2a3a46', iconBg: '#fdeee6', icon: { viewBox: '36 60 328 328' },

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

    /* legs */
    const legsG = A.el('g', {}, root);
    const HIPS = [[156, 292], [138, 288], [121, 280]];
    const FEET = [[140, 342], [112, 340], [88, 334]];
    const legs = [];
    for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
      const p = A.el('path', { fill: 'none', stroke: '#252a31', 'stroke-width': 8 - i * 0.7, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, legsG);
      const h = S ? null : A.el('path', { fill: 'none', stroke: '#626b77', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: 0.7, transform: 'translate(-1 -1.6)' }, legsG);
      legs.push({ p, h, side, i });
    }

    /* arms (behind shell) */
    const arms = [0, 1].map(() => ({
      a: A.el('path', { fill: 'none', stroke: '#252a31', 'stroke-width': 13, 'stroke-linecap': 'round' }, root),
      h: S ? null : A.el('path', { fill: 'none', stroke: '#646d79', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.75, transform: 'translate(-1.5 -2.5)' }, root),
    }));

    /* eye stalks */
    const stalks = [0, 1].map(() => ({
      a: A.el('path', { fill: 'none', stroke: '#252a31', 'stroke-width': 9, 'stroke-linecap': 'round' }, root),
      h: S ? null : A.el('path', { fill: 'none', stroke: '#6a7380', 'stroke-width': 2.4, 'stroke-linecap': 'round', opacity: 0.8, transform: 'translate(-2 0)' }, root),
    }));

    /* shell: a pocket-knife handle */
    const shellG = A.el('g', {}, root);
    const SHELL = 'M 122 207 C 160 198 240 198 278 207 C 300 212 309 231 309 254 C 309 280 296 299 274 299 L 126 299 C 104 299 91 280 91 254 C 91 231 100 212 122 207 Z';
    const scId = A.id('shellclip');
    A.el('path', { d: SHELL }, A.el('clipPath', { id: scId }, A.defs));
    A.el('path', { d: SHELL, fill: A.url('shell') }, shellG);
    const sIn = A.el('g', { 'clip-path': `url(#${scId})` }, shellG);
    A.el('rect', { x: 86, y: 195, width: 33, height: 112, fill: A.url('steelV') }, sIn);
    A.el('rect', { x: 281, y: 195, width: 33, height: 112, fill: A.url('steelV') }, sIn);
    A.el('path', { d: 'M119 198 V306 M281 198 V306', stroke: '#3f0906', 'stroke-width': 2.4, opacity: 0.7 }, sIn);
    A.el('ellipse', { cx: 200, cy: 310, rx: 132, ry: 24, fill: '#3e0604', opacity: 0.28 }, sIn);
    A.el('path', { d: 'M126 217 C 166 206 234 206 274 217 C 264 228 238 231 200 231 C 162 231 136 228 126 217 Z', fill: A.url('gloss'), opacity: 0.8 }, sIn);
    if (!S) A.el('path', { d: SHELL, fill: 'none', stroke: A.url('bevel'), 'stroke-width': 2.4, transform: 'translate(200 253) scale(0.9 0.82) translate(-200 -253)' }, sIn);
    A.el('path', { d: SHELL, fill: 'none', stroke: A.url('shellRim'), 'stroke-width': 6 }, sIn);
    A.el('path', { d: SHELL, fill: 'none', stroke: '#330705', 'stroke-width': 2.6 }, shellG);
    for (const x of [136, 264]) {
      A.el('circle', { cx: x, cy: 255, r: 7.5, fill: A.url('screw'), stroke: '#560a07', 'stroke-width': 1.8 }, shellG);
      if (!S) A.el('circle', { cx: x - 2.2, cy: 252.8, r: 2, fill: '#fff', opacity: 0.9 }, shellG);
    }
    const blush = [164, 236].map(x => A.el('ellipse', { cx: x, cy: 276, rx: 11, ry: 5.5, fill: '#ff9a8a', opacity: 0 }, shellG));

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
    A.el('text', { x: 0, y: 7.5, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#7a4304', 'letter-spacing': 0.5, text: 'LV 8' }, medalG);
    A.el('text', { x: -0.6, y: 6.3, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 21, fill: '#fff4c8', opacity: 0.55, 'letter-spacing': 0.5, text: 'LV 8' }, medalG);
    const mdId = A.id('medalclip');
    A.el('circle', { cx: 0, cy: 0, r: 37 }, A.el('clipPath', { id: mdId }, A.defs));
    const shineWrap = A.el('g', { 'clip-path': `url(#${mdId})` }, medalG);
    const shine = A.el('rect', { x: -7, y: -60, width: 13, height: 120, fill: '#fff', opacity: 0.75 }, shineWrap);

    /* eyes on stalks */
    const eyes = [0, 1].map(k => {
      const eg = A.el('g', {}, root);
      A.el('circle', { cx: 0, cy: 0, r: 21, fill: A.url('sclera') }, eg);
      const pupil = A.el('g', {}, eg);
      A.el('circle', { cx: 0, cy: 0, r: 12, fill: '#16181d' }, pupil);
      if (!S) A.el('circle', { cx: 0, cy: 0, r: 9.5, fill: 'none', stroke: '#33404f', 'stroke-width': 2 }, pupil);
      A.el('circle', { cx: -4.2, cy: -4.4, r: 4, fill: '#fff' }, pupil);
      if (!S) A.el('circle', { cx: 4, cy: 4.2, r: 1.8, fill: '#fff', opacity: 0.85 }, pupil);
      const cid = A.id('eyeclip' + k);
      A.el('circle', { cx: 0, cy: 0, r: 21.3 }, A.el('clipPath', { id: cid }, A.defs));
      const lidWrap = A.el('g', { 'clip-path': `url(#${cid})` }, eg);
      const up = A.el('g', {}, lidWrap);
      A.el('rect', { x: -28, y: -56, width: 56, height: 56, fill: A.url('lid') }, up);
      A.el('path', { d: 'M -28 0 H 28', stroke: '#4a0805', 'stroke-width': 3 }, up);
      const low = A.el('circle', { cx: 0, cy: 60, r: 30, fill: '#d42a1f', stroke: '#4a0805', 'stroke-width': 3 }, lidWrap);
      A.el('circle', { cx: 0, cy: 0, r: 21, fill: 'none', stroke: '#26110f', 'stroke-width': 2.6 }, eg);
      const brow = A.el('path', { d: 'M -12 2.5 Q 0 -4.5 12 2.5', fill: 'none', stroke: '#1f2328', 'stroke-width': 7, 'stroke-linecap': 'round' }, eg);
      return { eg, pupil, up, low, brow };
    });

    /* scissor claws */
    const BLADE_A = 'M 1.5 12 C -8 12 -14 3 -14 -15 C -14 -43 -8 -67 1.5 -92 Z';
    const BLADE_B = 'M -1.5 12 C 8 12 14 3 14 -15 C 14 -43 8 -67 -1.5 -92 Z';
    const claws = [0, 1].map(() => {
      const cg = A.el('g', {}, root);
      A.el('path', { d: 'M -14 6 C -17 22 -14 36 -11 47 L 11 47 C 14 36 17 22 14 6 C 6 0 -6 0 -14 6 Z', fill: A.url('cuff'), stroke: '#330705', 'stroke-width': 2.2 }, cg);
      if (!S) A.el('path', { d: 'M -8.5 11 C -10.5 20 -10 29 -8 36', fill: 'none', stroke: '#fff', 'stroke-width': 2.6, opacity: 0.5, 'stroke-linecap': 'round' }, cg);
      A.el('rect', { x: -12, y: 40, width: 24, height: 9, rx: 3, fill: A.url('steelV'), stroke: '#2b313a', 'stroke-width': 1.5 }, cg);
      const bB = A.el('g', {}, cg);
      A.el('path', { d: BLADE_B, fill: A.url('bladeB'), stroke: '#262c35', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, bB);
      const bA = A.el('g', {}, cg);
      A.el('path', { d: BLADE_A, fill: A.url('bladeA'), stroke: '#262c35', 'stroke-width': 1.8, 'stroke-linejoin': 'round' }, bA);
      if (!S) A.el('path', { d: 'M -1.6 6 L -1.6 -80', stroke: '#fff', 'stroke-width': 1.3, opacity: 0.9 }, bA);
      if (!S) A.el('path', { d: 'M -10.5 -12 C -10.5 -36 -6.5 -58 -2 -76', fill: 'none', stroke: '#fff', 'stroke-width': 1.6, opacity: 0.55, 'stroke-linecap': 'round' }, bA);
      A.el('circle', { cx: 0, cy: 0, r: 7, fill: A.url('screw'), stroke: '#262c35', 'stroke-width': 1.6 }, cg);
      const slot = A.el('path', { d: 'M -4 0 H 4', stroke: '#4a5361', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, cg);
      return { cg, bA, bB, slot };
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
      uL: 0.16, uR: 0.16, tilt: 0, lL: 0.1, lR: 0.1,
      bLy: 0, bRy: 0, bLr: 0, bRr: 0,
      gx: 0, gy: 0, gw: 1, ps: 1,
      mw: 11, mc: 6, mo: 0, mx: 0, mr: 0, blush: 0.25,
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
          p.mw = 15; p.mc = 12; p.mo = 7; p.lL = p.lR = 0.48; p.uL = p.uR = 0.05; p.bLy = p.bRy = -5; p.bLr = p.bRr = -4; p.blush = 0.75;
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
          const tap = Math.sin(mt * 7) * (Math.sin(mt * 1.3) > -0.2 ? 1 : 0);
          p.r = -3; p.gx = 0.7; p.gy = -0.85; p.gw = 0.25; p.ext = 4; p.lean = 4; p.etilt = 6;
          p.uL = 0.28; p.uR = 0.12; p.bRy = -8; p.bRr = -10; p.bLy = 2; p.bLr = 8;
          p.mw = 7; p.mc = -1; p.mo = 0; p.mx = 7; p.mr = 10;
          p.lx = 108; p.ly = 304; p.lr = 70 + 4 * tap; p.lo = 6;
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
          p.y = -48 * h; p.sy = 1 + 0.1 * h - 0.1 * land; p.sx = 1 - 0.06 * h + 0.08 * land;
          p.mw = 16; p.mc = 14; p.mo = 12; p.lL = p.lR = 0.5; p.uL = p.uR = 0.04; p.bLy = p.bRy = -8; p.bLr = p.bRr = -6; p.blush = 0.85; p.ext = 8 * h;
          p.lx = 70; p.rx = 330; p.ly = p.ry = 160 - 10 * h; p.lr = -30 - 10 * h; p.rr = 30 + 10 * h; p.lo = p.ro = 55 + 20 * Math.sin(mt * 14);
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
          p.mw = 15; p.mc = 13; p.mo = 9; p.lL = p.lR = 0.36; p.uL = p.uR = 0.04; p.bLy = p.bRy = -6; p.bLr = p.bRr = -5; p.blush = 0.65;
          const look = seg(mt, 0.2, 0.8); p.gy = L(-0.9, 0, look); p.gw = L(0, 0.4, look);
          p.lx = L(74, 124, up); p.ly = L(190, 170, up); p.lr = L(-16, 37, up); p.lo = 12;
          p.rx = L(326, 276, up); p.ry = L(190, 170, up); p.rr = L(16, -37, up); p.ro = 12;
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
          p.lx = L(74, FX0, k); p.ly = L(186, FY1, k); p.lr = L(-16, 45, k); p.lo = L(clack, cOpen, k);
          p.rx = L(326, FX1, k); p.ry = L(186, FY1, k); p.rr = L(16, -45, k); p.ro = L(clack, cOpen, k);
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
            P.ext += 14 * st; P.ps = L(P.ps, 0.68, st); P.gw = L(P.gw, 0.2, st);
            const snap = pk < 0.12 ? 0 : 1;
            P.lo = L(P.lo, 75 * snap, st); P.ro = L(P.ro, 75 * snap, st);
            P.y -= 10 * Math.sin(C(pk / 0.35) * Math.PI);
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
          P.x += Math.sin(t * 46) * 2.2 * gk; P.gw = L(P.gw, 0.1, gk); P.gx = L(P.gx, 0, gk); P.gy = L(P.gy, 0, gk);
        }

        /* body */
        P.x += look.x * 3; P.r += look.x * 1.5;
        A.tf(root, P.x, P.y, P.r, P.sx, P.sy, 200, 340);
        const air = C(-P.y / 60);
        A.attr(shadow, { rx: 124 * (1 - 0.35 * air), cx: 200 + P.x, opacity: 1 - 0.45 * air });

        /* legs */
        const wph = t * 19;
        for (const lg of legs) {
          const [hx0, hy] = HIPS[lg.i], [fx0, fy0] = FEET[lg.i];
          const hx = lg.side < 0 ? hx0 : 400 - hx0, fxb = lg.side < 0 ? fx0 : 400 - fx0;
          const ph = wph + lg.i * 2.1 + (lg.side > 0 ? Math.PI : 0);
          const fx = fxb + P.walk * 8 * Math.sin(ph), fy = fy0 - P.walk * 8 * Math.max(0, Math.cos(ph)) + air * 6;
          const kx = L(hx, fx, 0.62) + lg.side * 9, ky = Math.min(hy, fy) - 10 - lg.i * 2;
          const d = `M${hx.toFixed(1)} ${hy} L${kx.toFixed(1)} ${ky.toFixed(1)} L${fx.toFixed(1)} ${fy.toFixed(1)}`;
          lg.p.setAttribute('d', d); if (lg.h) lg.h.setAttribute('d', d);
        }

        /* claws and arms */
        const CL = [[P.lx, P.ly, P.lr, P.lo, 1], [P.rx, P.ry, P.rr, P.ro, -1]];
        CL.forEach(([px, py, r, o, m], k) => {
          const c = claws[k];
          A.tf(c.cg, px, py, r, m, 1);
          A.tf(c.bA, 0, 0, -C(o, -4, 120) / 2); A.tf(c.bB, 0, 0, C(o, -4, 120) / 2);
          A.tf(c.slot, 0, 0, 30 + o * 0.6);
          const wx = px - 46 * Math.sin(r * D2R), wy = py + 46 * Math.cos(r * D2R);
          const sx = k === 0 ? 112 : 288, sy = 262, dir = k === 0 ? -1 : 1;
          const cx = (sx + wx) / 2 + dir * 16, cy = (sy + wy) / 2 + 14;
          const d = `M${sx} ${sy} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${wx.toFixed(1)} ${wy.toFixed(1)}`;
          arms[k].a.setAttribute('d', d); if (arms[k].h) arms[k].h.setAttribute('d', d);
        });

        /* eyes */
        const gx = C(look.x * P.gw + P.gx, -1, 1), gy = C(look.y * P.gw + P.gy, -1, 1);
        [[172, 186, 0], [228, 214, 1]].forEach(([ex0, bx, k]) => {
          const e = eyes[k], side = k === 0 ? -1 : 1;
          const ex = ex0 + P.lean + look.x * 5 * P.gw + side * Math.max(0, P.ext) * 0.15, ey = 156 - P.ext + look.y * 3 * P.gw;
          const by = 212;
          stalks[k].a.setAttribute('d', `M${bx} ${by} Q${(bx + ex) / 2 + side * 2} ${((by + ey) / 2 + 6).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
          if (stalks[k].h) stalks[k].h.setAttribute('d', stalks[k].a.getAttribute('d'));
          A.tf(e.eg, ex, ey, P.etilt + side * 2);
          A.tf(e.pupil, gx * 7.5, gy * 6.5, 0, P.ps, P.ps);
          const l = C(k === 0 ? P.lL : P.lR, 0, 1);
          let u = k === 0 ? P.uL : P.uR;
          const uMeet = (42 - 30 * l) / 42 + 0.03;
          if (!(s.mood === 'signature' && k === 1 && u > 0.5)) u = L(u, uMeet, Lf.blink * (grump > 0.5 ? 0 : 1));
          u = Math.min(u, uMeet);
          A.tf(e.up, 0, -21 + 42 * u, k === 0 ? P.tilt : -P.tilt);
          A.attr(e.low, { cy: 21 - 30 * l + 30 });
          const brY = (k === 0 ? P.bLy : P.bRy), brR = (k === 0 ? P.bLr : P.bRr);
          A.tf(e.brow, 0, -33 + brY, k === 0 ? brR : -brR);
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
          const my = L(240, 96, lvIn) + 3 * Math.sin(mt * 4);
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

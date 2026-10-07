/* Dot: the app icon, alive. A glossy signal-red squircle with a steel blade
   corner. Its body morphs into tools: crop corners, a 4:5 frame, a film strip. */
CAST.register({
  id: 'dot', order: 6, name: 'Dot',
  tagline: 'The logo that comes alive.',
  concept: 'Dot is the app icon itself: a glossy red squircle with a steel blade set into one corner. It has two tall eyes and a tiny mouth. Its body turns into the tool you need. It shrinks, splits into crop corners, stretches to 4:5 and stacks into a film strip.',
  signature: 'Feature: one steel blade corner on a red squircle. Move: a fast morph from squircle to crop corners, to a 4:5 frame, to a film strip and back, then a wink as the blade flicks open.',
  why: ['The mascot and the app icon are the same shape, so every sighting builds the brand.', 'The steel blade corner is a mark no other app has.', 'It acts with its whole body. Its shape changes say what the tool does.'],
  risks: ['A plain red squircle is close to many app icons. The blade corner must carry the difference.', 'Morph motion is its main charm. Still images show less of it.'],
  voice: 'Crop? Done. Want it 4:5 too?',
  scores: { memorable: 4, stylish: 5, expressive: 4, small: 5, fit: 5 },
  palette: ['#E5322B', '#B81C16', '#FF6B57', '#D3D8DE', '#1A0B0D', '#F5C83F'],
  bg: '#4a1d1b',
  iconBg: '#1e1416',
  icon: { viewBox: '82 108 236 236' },

  build(g, A) {
    const SM = A.small, PI = Math.PI;
    const { lerp, clamp, seg, ease } = A;
    const f = v => Math.round(v * 10) / 10;

    /* ---------- gradients ---------- */
    A.grad('body', [[0, '#ff6d58'], [0.42, '#ec3a2e'], [1, '#b81c16']]);
    A.grad('bev', [[0, '#ffffff', 0.75], [0.16, '#ffffff', 0], [0.75, '#5e0a07', 0], [1, '#5e0a07', 0.55]]);
    A.grad('rim', [[0, '#ffc2b5', 0.7], [0.22, '#ffc2b5', 0], [1, '#ffc2b5', 0]], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('gloss', [[0, '#ffffff', 0.62], [0.55, '#ffffff', 0.12], [1, '#ffffff', 0]]);
    A.grad('steel', [[0, '#ffffff'], [0.4, '#dfe3e8'], [0.75, '#aab2bb'], [1, '#7c8590']], { x1: 1, y1: 0, x2: 0.2, y2: 1 });
    A.grad('eye', [[0, '#3b1d22'], [1, '#12070a']]);
    A.grad('lid', [[0, '#f24432'], [1, '#dc3428']], { units: 'userSpaceOnUse', x1: 0, y1: -30, x2: 0, y2: 30 });
    A.grad('shadow', [[0, '#000', 0.5], [0.6, '#000', 0.22], [1, '#000', 0]], { radial: true });
    A.grad('gold', [[0, '#fff6c4'], [0.45, '#f5c83f'], [1, '#a86f10']], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('gold2', [[0, '#c98d1c'], [0.6, '#f2c13d'], [1, '#ffe48a']], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('glove', [[0, '#ffffff'], [0.7, '#f1f2f5'], [1, '#c9ced7']], { radial: true, cx: 0.38, cy: 0.32, r: 0.75 });
    A.grad('ribbon', [[0, '#ff5a48'], [1, '#a5140f']], { x1: 0, y1: 0, x2: 1, y2: 0 });

    /* Squircle-ish rounded rect: corners with a long, soft (continuous) curve. */
    const RR = (x, y, w, h, r) => {
      w = Math.max(w, 1); h = Math.max(h, 1);
      const R = Math.max(0, Math.min(r * 1.3, w / 2, h / 2)), a = R * 0.24, X = x + w, Y = y + h;
      return `M${f(x + R)} ${f(y)}H${f(X - R)}C${f(X - a)} ${f(y)} ${f(X)} ${f(y + a)} ${f(X)} ${f(y + R)}V${f(Y - R)}C${f(X)} ${f(Y - a)} ${f(X - a)} ${f(Y)} ${f(X - R)} ${f(Y)}H${f(x + R)}C${f(x + a)} ${f(Y)} ${f(x)} ${f(Y - a)} ${f(x)} ${f(Y - R)}V${f(y + R)}C${f(x)} ${f(y + a)} ${f(x + a)} ${f(y)} ${f(x + R)} ${f(y)}Z`;
    };
    const STAR = 'M0 -10Q1.6 -1.6 10 0Q1.6 1.6 0 10Q-1.6 1.6 -10 0Q-1.6 -1.6 0 -10Z';

    /* ---------- shapes: 4 rounded rects that morph ---------- */
    const four = r => [r, r, r, r];
    const SHP = {
      SQ: { p: four([90, 118, 220, 220, 55]), n: 1, face: [200, 222, 1], holes: 0 },
      SAG: { p: four([80, 146, 240, 192, 60]), n: 1, face: [200, 246, 0.98], holes: 0 },
      SQZ: { p: four([128, 196, 144, 142, 36]), n: 1, face: [200, 262, 0.68], holes: 0 },
      SMALL: { p: four([150, 238, 100, 100, 26]), n: 0.6, face: [200, 286, 0.46], holes: 0 },
      CROP: { p: [[76, 100, 128, 40, 14], [76, 100, 40, 128, 14], [196, 298, 128, 40, 14], [284, 210, 40, 128, 14]], n: 0, face: [200, 219, 0.8], holes: 0 },
      F45: { p: four([110, 112, 180, 226, 30]), n: 0, face: [200, 222, 0.92], holes: 0 },
      FILM: { p: [[156, 60, 88, 88, 16], [156, 156, 88, 88, 16], [156, 250, 88, 88, 16], [156, 250, 88, 88, 16]], n: 0, face: [200, 200, 0.5], holes: 1 },
    };
    const lerpShape = (a, b, p) => ({
      p: a.p.map((r, i) => r.map((v, j) => lerp(v, b.p[i][j], p))),
      n: lerp(a.n, b.n, p), holes: lerp(a.holes, b.holes, p),
      face: a.face.map((v, j) => lerp(v, b.face[j], p)),
    });

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 341, rx: 100, ry: 11, fill: A.url('shadow') }, g);
    const behind = A.el('g', {}, g);
    const root = A.el('g', {}, g);
    const medal = A.el('g', {}, root);
    const sq = A.el('g', {}, root);
    const pieces = [0, 1, 2, 3].map(() => A.el('path', { fill: A.url('body') }, sq));
    const rims = SM ? [] : [0, 1, 2, 3].map(() => A.el('path', { fill: 'none', stroke: A.url('rim'), 'stroke-width': 3 }, sq));
    const bevs = [0, 1, 2, 3].map(() => A.el('path', { fill: 'none', stroke: A.url('bev'), 'stroke-width': SM ? 5 : 3.5 }, sq));
    const gloss = [0, 1, 2, 3].map(() => A.el('path', { fill: A.url('gloss') }, sq));
    const holesG = A.el('g', { fill: '#2a0b0b', opacity: 0 }, sq);
    const holes = [];
    for (let i = 0; i < 12; i++) holes.push(A.el('rect', { width: 7, height: 10, rx: 2.5 }, holesG));

    /* Steel blade corner. Local origin = top-right corner of the squircle. */
    const bladeG = A.el('g', {}, sq);
    A.el('path', { d: 'M-79 0L-71.5 0C-17.2 0 0 17.2 0 71.5L0 79Q-47 48 -79 0Z', fill: '#24090a' }, bladeG);
    const bladeR = A.el('g', {}, bladeG);
    const BLADE = 'M-72 -2L-8.5 -2Q2 -2 2 8.5L2 72Q-42 43 -72 -2Z';
    A.el('path', { d: BLADE, fill: A.url('steel') }, bladeR);
    A.el('path', { d: 'M-72 -2Q-42 43 2 72L2 62Q-34.5 36 -61 -2Z', fill: '#ffffff', opacity: 0.55 }, bladeR);
    A.el('path', { d: 'M-61 -2Q-34.5 36 2 62', fill: 'none', stroke: '#8d96a1', 'stroke-width': 1.2, opacity: 0.7 }, bladeR);
    A.el('path', { d: 'M-8.5 -2Q2 -2 2 8.5', fill: 'none', stroke: '#ffffff', 'stroke-width': 2, opacity: 0.9 }, bladeR);
    A.el('circle', { cx: -15, cy: 15, r: 4.2, fill: '#87909b', stroke: '#eef1f4', 'stroke-width': 1.2 }, bladeR);
    const bclip = A.id('bclip');
    A.el('path', { d: BLADE }, A.el('clipPath', { id: bclip }, A.defs));
    const bshineG = A.el('g', { 'clip-path': `url(#${bclip})` }, bladeR);
    const bshine = A.el('rect', { x: -10, y: -60, width: 14, height: 200, fill: '#ffffff', opacity: 0.85 }, bshineG);
    const bglint = A.el('path', { d: STAR, fill: '#ffffff' }, bladeR);

    /* Face */
    const face = A.el('g', {}, sq);
    const blush = [-1, 1].map(sd => A.el('ellipse', { cx: sd * 52, cy: 30, rx: 12, ry: 6.5, fill: '#ff9a8a', opacity: 0 }, face));
    const EW = 12.5, EH = 28;
    const eyes = [-1, 1].map(side => {
      const holder = A.el('g', {}, face);
      const cid = A.id('eye' + side);
      A.el('rect', { x: -EW, y: -EH, width: EW * 2, height: EH * 2, rx: EW }, A.el('clipPath', { id: cid }, A.defs));
      const open = A.el('g', { 'clip-path': `url(#${cid})` }, holder);
      A.el('rect', { x: -EW, y: -EH, width: EW * 2, height: EH * 2, rx: EW, fill: A.url('eye') }, open);
      A.el('ellipse', { cx: -4, cy: -13, rx: 4.4, ry: 7, fill: '#ffffff' }, open);
      A.el('circle', { cx: 4.5, cy: 11, r: 2.4, fill: '#ffffff', opacity: 0.55 }, open);
      const lidB = A.el('ellipse', { cx: 0, cy: 60, rx: 30, ry: 22, fill: A.url('lid') }, open);
      const lidT = A.el('path', { fill: A.url('lid') }, open);
      const lidL = A.el('path', { fill: 'none', stroke: '#8e1510', 'stroke-width': 2.4, 'stroke-linecap': 'round' }, open);
      const closed = A.el('path', { fill: 'none', stroke: '#1a0b0d', 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, holder);
      let sp = 'M0 0';
      for (let a = 0.3; a < 4.2 * PI; a += 0.3) sp += `L${f(Math.cos(a) * a * 1.0)} ${f(Math.sin(a) * a * 1.0)}`;
      const spiral = A.el('path', { d: sp, fill: 'none', stroke: '#1a0b0d', 'stroke-width': 3.6, 'stroke-linecap': 'round' }, holder);
      const brow = A.el('path', { d: 'M-12 2Q0 -4 12 2', fill: 'none', stroke: '#5c0d0a', 'stroke-width': 5.5, 'stroke-linecap': 'round' }, face);
      return { side, holder, open, lidT, lidB, lidL, closed, spiral, brow };
    });
    const mouth = A.el('path', { fill: '#2a0a0c', stroke: '#2a0a0c', 'stroke-width': 4.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, face);

    /* Gloves */
    const mkHand = () => {
      const h = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 4, rx: 14, ry: 5, fill: '#000', opacity: 0.12 }, h);
      A.el('circle', { cx: -12, cy: -7, r: 7, fill: A.url('glove'), stroke: '#b8bec8', 'stroke-width': 1.2 }, h);
      A.el('circle', { cx: 0, cy: 0, r: 15, fill: A.url('glove'), stroke: '#b8bec8', 'stroke-width': 1.2 }, h);
      A.el('path', { d: 'M-3 -12Q4 -11 8 -6M3 -14Q10 -12 13 -5', fill: 'none', stroke: '#c4c9d2', 'stroke-width': 1.4, 'stroke-linecap': 'round' }, h);
      return h;
    };
    const hands = [mkHand(), mkHand()];

    /* Medal (level up) */
    const ribbon = A.el('g', {}, medal);
    A.el('path', { d: 'M-10 -30L-38 -78L-16 -82L8 -34Z', fill: A.url('ribbon') }, ribbon);
    A.el('path', { d: 'M10 -30L38 -78L16 -82L-8 -34Z', fill: A.url('ribbon') }, ribbon);
    A.el('path', { d: 'M-38 -78L-16 -82L-26 -72Z M38 -78L16 -82L26 -72Z', fill: '#ffd25a' }, ribbon);
    A.el('circle', { r: 39, fill: A.url('gold'), stroke: '#8a5a0a', 'stroke-width': 1.5 }, medal);
    A.el('circle', { r: 30, fill: A.url('gold2') }, medal);
    A.el('circle', { r: 30, fill: 'none', stroke: '#fff3b8', 'stroke-width': 1.4, opacity: 0.8 }, medal);
    A.el('text', { x: 0, y: -6, 'text-anchor': 'middle', 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 800, 'font-size': 12, 'letter-spacing': 1.5, fill: '#7a4705', text: 'LV' }, medal);
    A.el('text', { x: 0, y: 21, 'text-anchor': 'middle', 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 900, 'font-size': 30, fill: '#6e3f03', text: '8' }, medal);
    const mclip = A.id('mclip');
    A.el('circle', { r: 39 }, A.el('clipPath', { id: mclip }, A.defs));
    const mshine = A.el('rect', { x: -9, y: -70, width: 16, height: 140, fill: '#ffffff', opacity: 0.75 }, A.el('g', { 'clip-path': `url(#${mclip})` }, medal));

    /* World effects */
    const fx = A.el('g', {}, g);
    const COLS = ['#E5322B', '#f5c83f', '#ffffff', '#d3d8de', '#ff6d58'];
    const rnd = A.rng(66);
    const confetti = [];
    for (let i = 0; i < (SM ? 10 : 24); i++) {
      const w = 6 + rnd() * 6;
      confetti.push({ e: A.el('rect', { x: -w / 2, y: -w / 2, width: w, height: w, rx: w * 0.28, fill: COLS[i % 5] }, fx), vx: (rnd() * 2 - 1), vy: 0.9 + rnd() * 0.7, sp: (rnd() * 2 - 1) * 700, ph: rnd() });
    }
    const sparks = [];
    for (let i = 0; i < 6; i++) sparks.push(A.el('path', { d: STAR, fill: i % 2 ? '#ffffff' : '#ffd25a' }, fx));
    const dizzy = [0, 1, 2].map(() => A.el('path', { d: STAR, fill: '#ffd25a' }, fx));
    const zs = [0, 1, 2].map(() => A.el('text', { 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 900, fill: '#ffffff', text: 'z' }, fx));
    const thinks = [0, 1, 2].map(() => A.el('rect', { fill: '#ffffff' }, fx));
    const bits = [];
    for (let i = 0; i < 6; i++) bits.push(A.el('rect', { x: -4, y: -4, width: 8, height: 8, rx: 2, fill: ['#ff6d58', '#ffffff', '#ffd25a'][i % 3] }, behind));

    /* ---------- signature timeline ---------- */
    const SIG = 4.6;
    const SEGS = [
      [0, 0.22, 'SQ', 'SQ', ease.out],
      [0.22, 0.52, 'SQ', 'CROP', ease.outBack],
      [0.52, 1.0, 'CROP', 'CROP', ease.out],
      [1.0, 1.3, 'CROP', 'F45', ease.outBack],
      [1.3, 1.65, 'F45', 'F45', ease.out],
      [1.65, 1.95, 'F45', 'FILM', ease.outBack],
      [1.95, 2.4, 'FILM', 'FILM', ease.out],
      [2.4, 2.6, 'FILM', 'SMALL', ease.in],
      [2.6, 3.05, 'SMALL', 'SQ', ease.spring],
      [3.05, 99, 'SQ', 'SQ', ease.out],
    ];
    const HITS = [0.22, 1.0, 1.65, 2.4, 2.6];
    const sigShape = T => {
      for (const [a, b, s0, s1, e] of SEGS) if (T < b) {
        let sh = lerpShape(SHP[s0], SHP[s1], e(seg(T, a, b)));
        if (s0 === 'CROP' && s1 === 'CROP') { // crop handles drag in and out
          const k = Math.sin(seg(T, a, b) * PI) * 16;
          sh.p = sh.p.map((r, i) => { const d = i < 2 ? k : -k; return [r[0] + d, r[1] + d, r[2], r[3], r[4]]; });
        }
        if (s0 === 'FILM' && s1 === 'FILM') { const k = Math.sin(seg(T, a, b) * PI * 2) * 5; sh.p = sh.p.map(r => [r[0], r[1] + k, r[2], r[3], r[4]]); }
        return sh;
      }
      return SHP.SQ;
    };
    const workPhase = mt => { const p = (mt % 1.3) / 1.3; return ease.inOut(seg(p, 0.05, 0.45)) * (1 - ease.outBack(seg(p, 0.55, 0.85))); };

    const shapeFor = (m, s) => {
      if (m === 'signature') return sigShape(s.mt % SIG);
      if (m === 'sleepy') return SHP.SAG;
      if (m === 'working') return lerpShape(SHP.SQ, SHP.SQZ, workPhase(s.mt));
      return SHP.SQ;
    };

    /* ---------- body per mood ---------- */
    const H0 = [[60, 280, 0, 0], [340, 280, 0, 0]];
    const bodyFor = (m, s, L) => {
      const t = s.t, mt = s.mt;
      const b = { dx: 0, dy: 0, rot: L.sway * 1.2, sx: 1 - L.breathe * 0.008, sy: 1 + L.breathe * 0.014, hands: H0, medal: 0 };
      if (m === 'idle') {
        const ph = (t + 2) % 6.5;
        const hop = ph < 0.45 ? Math.sin(ph / 0.45 * PI) : 0;
        b.dy = -hop * 12; b.sy += hop * 0.05 - A.wobble(ph - 0.45, 20, 7) * 0.06; b.sx -= hop * 0.03 - A.wobble(ph - 0.45, 20, 7) * 0.05;
      } else if (m === 'happy') {
        const p = (mt * 2.2) % 1, air = Math.sin(p * PI);
        b.dy = -air * 18; b.sy = 1 + air * 0.04 - Math.pow(1 - air, 10) * 0.08; b.sx = 2 - b.sy; b.rot = Math.sin(mt * 2.2 * PI) * 3;
      } else if (m === 'wink') {
        const e = ease.outBack(seg(mt, 0, 0.35));
        b.rot = -7 * e; b.dx = -4 * e; b.dy = -3 * e + Math.sin(mt * 3) * 1.5;
        b.hands = [H0[0], [330, 214 + Math.sin(mt * 6) * 3, -30, ease.outBack(seg(mt, 0.1, 0.4))]];
      } else if (m === 'surprised') {
        const j = seg(mt, 0, 0.5), e = ease.out(seg(mt, 0, 0.3));
        b.dy = -Math.sin(j * PI) * 30; b.dx = -12 * e; b.rot = -7 * e + A.wobble(mt - 0.5, 12, 4) * 2;
        b.sy = 1 + Math.sin(j * PI) * 0.08 - A.wobble(mt - 0.5, 18, 6) * 0.06; b.sx = 2 - b.sy;
        const hp = ease.outBack(seg(mt, 0.05, 0.3));
        b.hands = [[64, 170 + Math.sin(t * 30) * 1.5, 30, hp], [336, 170 + Math.sin(t * 30 + 1) * 1.5, -30, hp]];
      } else if (m === 'thinking') {
        b.rot = 3 + Math.sin(t * 0.9) * 1.2;
        b.hands = [H0[0], [238, 296 + Math.abs(Math.sin(t * 4)) * -4, -20, ease.outBack(seg(mt, 0.05, 0.4))]];
      } else if (m === 'working') {
        const pr = workPhase(mt), sh = shapeFor('working', s), r = sh.p[0];
        b.dx = Math.sin(t * 70) * 1.2 * pr; b.rot = 0;
        const hp = ease.outBack(seg(mt, 0, 0.3));
        b.hands = [[r[0] - 13, r[1] + r[3] * 0.5, 90, hp], [r[0] + r[2] + 13, r[1] + r[3] * 0.5, -90, hp]];
      } else if (m === 'celebrate') {
        const p = (mt * 1.1) % 1, air = Math.sin(p * PI);
        b.dy = -air * 60; b.sy = 1 + 0.08 * Math.abs(Math.cos(p * PI)) - Math.pow(1 - air, 10) * 0.18; b.sx = 2 - b.sy; b.rot = Math.sin(p * 2 * PI) * 4;
        const hp = ease.outBack(seg(mt, 0, 0.3));
        b.hands = [[86 + Math.sin(t * 13) * 5, 112, 150, hp], [314 + Math.sin(t * 13 + 2) * 5, 112, -150, hp]];
      } else if (m === 'sleepy') {
        b.rot = Math.sin(t * 0.9) * 3; b.dx = Math.sin(t * 0.9) * 3; b.sy = 1 + Math.sin(t * 1.5) * 0.025; b.sx = 1 - Math.sin(t * 1.5) * 0.012;
      } else if (m === 'levelup') {
        const up = seg(mt, 0.1, 0.55);
        b.dy = -Math.sin(seg(mt, 0.1, 0.6) * PI) * 16 + Math.sin(t * 3) * 1.5;
        b.sy = 1 - 0.08 * Math.sin(seg(mt, 0, 0.12) * PI) + 0.06 * Math.sin(seg(mt, 0.12, 0.6) * PI) + 0.02; b.sx = 2 - b.sy;
        b.rot = Math.sin(t * 1.4) * 1.5;
        b.medal = ease.outBack(up);
        const my = lerp(250, 66, b.medal);
        b.hands = [[154, my + 10, 70, ease.outBack(seg(mt, 0.05, 0.3))], [246, my + 10, -70, ease.outBack(seg(mt, 0.05, 0.3))]];
      } else if (m === 'signature') {
        const T = mt % SIG;
        let imp = 0; for (const h of HITS) imp += A.wobble(T - h, 22, 7);
        b.sx = 1 + imp * 0.09; b.sy = 1 - imp * 0.09; b.rot = imp * 3;
        b.dy = T > 2.6 && T < 3.05 ? -Math.sin(seg(T, 2.6, 3.05) * PI) * 22 : 0;
        const w = seg(T, 3.0, 3.25) * (1 - seg(T, 4.1, 4.4));
        b.rot += -6 * ease.out(w);
        b.hands = [H0[0], [334, 226, -30, ease.outBack(w)]];
      }
      return b;
    };

    /* ---------- face per mood ---------- */
    const faceFor = (m, s) => {
      const t = s.t, mt = s.mt;
      const F = { lt: 0.1, tilt: 0, lb: 0, sx: 1, sy: 1, mw: 8, sm: 3, op: 0, mx: 0, mr: 0, br: 0, by: 0, bt: 0, bra: 0, blush: 0, gx: 0, gy: 0, gw: 0, wink: 0 };
      const set = o => Object.assign(F, o);
      if (m === 'idle') {
        const ph = t % 7.5, g2 = seg(ph, 3.2, 3.45) * (1 - seg(ph, 4.4, 4.65));
        set({ gw: g2, gx: 0.85, gy: 0.15 });
      } else if (m === 'happy') set({ lt: 0.02, lb: 0.36, mw: 13, sm: 6, op: 7, blush: 1 });
      else if (m === 'wink') set({ lt: 0.02, lb: 0.26, mw: 11, sm: 6, op: 2.5, mx: 3, mr: -9, blush: 0.9, wink: ease.out(seg(mt, 0.08, 0.2)) * (1 - seg(mt % 3, 2.5, 2.62) * (mt > 2 ? 1 : 0)) });
      else if (m === 'surprised') set({ lt: 0, sy: 1.2, sx: 1.06, mw: 7, sm: 0, op: 13, br: 1, by: -10 });
      else if (m === 'thinking') set({ lt: 0.26, lb: 0.08, gw: 1, gx: -0.75, gy: -0.9, mw: 6, sm: -1.5, mx: 7, mr: 10, br: 1, bt: -6, bra: -7 });
      else if (m === 'working') {
        const pr = workPhase(mt);
        set({ lt: 0.38 + pr * 0.18, tilt: 7, lb: 0.1 + pr * 0.1, mw: 7 - pr * 2, sm: -1, op: pr * 4, br: 1, bt: 12, by: 6, gw: 0.6, gx: 0, gy: 0.35 });
      } else if (m === 'celebrate') set({ lt: 0, lb: 0.38, mw: 15, sm: 8, op: 13, blush: 1, sy: 1.04 });
      else if (m === 'sleepy') set({ lt: 0.72 + Math.sin(t * 1.3) * 0.14, tilt: -5, lb: 0.06, mw: 5, sm: 0.5, op: 2.5 + Math.sin(t * 1.5) * 1.5, gw: 0.6, gy: 0.5 });
      else if (m === 'levelup') {
        const up = seg(mt, 0.3, 0.5) * (1 - seg(mt, 1.5, 1.8));
        set({ lt: 0, lb: 0.3, mw: 14, sm: 7, op: 10, blush: 1, gw: up, gx: 0, gy: -1, br: up, by: -6 });
      } else if (m === 'signature') {
        const T = mt % SIG, mor = seg(T, 0.15, 0.3) * (1 - seg(T, 2.85, 3.0)), w = seg(T, 3.0, 3.12) * (1 - seg(T, 3.95, 4.05));
        set({ lt: lerp(0.08, 0, mor), sy: 1 + mor * 0.1, mw: lerp(8, 7, mor), sm: lerp(3, 1, mor), op: mor * 9, br: mor, by: -6 });
        if (w > 0) set({ wink: w, mw: lerp(8, 12, w), sm: lerp(3, 6, w), op: 2.5 * w, mx: 3 * w, mr: -9 * w, lb: 0.26 * w, blush: w });
      }
      return F;
    };
    const mixObj = (a, b, p) => { const o = {}; for (const k in b) o[k] = lerp(a[k], b[k], p); return o; };

    const eyeX = 34, eyeY = -4, mouthY = 44;

    return {
      update(s) {
        const t = s.t, L = A.life(t, 6), mood = s.mood, prev = s.prev || mood, bl = s.blend == null ? 1 : s.blend;
        const sh = lerpShape(shapeFor(prev, s), shapeFor(mood, s), bl);
        const b0 = bodyFor(prev, s, L), b1 = bodyFor(mood, s, L);
        const b = { dx: lerp(b0.dx, b1.dx, bl), dy: lerp(b0.dy, b1.dy, bl), rot: lerp(b0.rot, b1.rot, bl), sx: lerp(b0.sx, b1.sx, bl), sy: lerp(b0.sy, b1.sy, bl), medal: lerp(b0.medal, b1.medal, bl) };
        const fc = mixObj(faceFor(prev, s), faceFor(mood, s), bl);

        /* poke, dizzy, hover */
        const pk = s.poke;
        const dz = s.pokes >= 3 && pk < 2.4 ? 1 - seg(pk, 1.9, 2.4) : 0;
        if (pk < 3) {
          const im = Math.exp(-6 * pk) * Math.cos(pk * 20);
          b.sx *= 1 + im * 0.15; b.sy *= 1 - im * 0.15; b.rot += A.wobble(pk, 13, 4.5) * 7;
          b.dy -= Math.max(0, Math.sin(seg(pk, 0.06, 0.4) * PI)) * 10;
        }
        b.rot += dz * Math.sin(t * 9) * 7;
        const squeeze = pk < 0.3 && !dz ? 1 : 0;
        if (pk < 0.9 && !squeeze && !dz) { const k = 1 - seg(pk, 0.5, 0.9); fc.sy = lerp(fc.sy, 1.18, k); fc.lt = lerp(fc.lt, 0, k); fc.op = lerp(fc.op, 10, k); fc.mw = lerp(fc.mw, 7, k); fc.sm = lerp(fc.sm, 0, k); fc.br = lerp(fc.br, 1, k); fc.by = lerp(fc.by, -10, k); fc.wink *= 1 - k; }
        if (squeeze) { fc.mw = 10; fc.sm = -2; fc.op = 4; fc.br = 1; fc.bt = 14; fc.by = 4; }
        if (s.hover && !SM) { b.sy *= 1.015; fc.lt = Math.max(0, fc.lt - 0.05); }

        /* root transforms */
        const gx = lerp(s.look.x, fc.gx, fc.gw), gy = lerp(s.look.y, fc.gy, fc.gw);
        A.tf(root, b.dx + gx * 3, b.dy, b.rot + gx * 1.5, 1, 1, 200, 338);
        A.tf(sq, 0, 0, 0, b.sx, b.sy, 200, 338);

        /* body pieces */
        const P = sh.p;
        let minX = 1e9, maxX = -1e9;
        P.forEach((r, i) => {
          const [x, y, w, h, rr] = r;
          A.attr(pieces[i], { d: RR(x, y, w, h, rr) });
          let dmin = 99;
          for (let j = 0; j < i; j++) dmin = Math.min(dmin, Math.abs(P[j][0] - x) + Math.abs(P[j][1] - y) + Math.abs(P[j][2] - w) + Math.abs(P[j][3] - h));
          const o = i === 0 ? 1 : clamp(dmin / 10);
          A.show(bevs[i], o > 0.01); A.show(gloss[i], o > 0.01);
          if (rims[i]) A.show(rims[i], o > 0.01);
          if (o > 0.01) {
            A.attr(bevs[i], { d: RR(x + 4, y + 4, w - 8, h - 8, rr - 3), opacity: o });
            if (rims[i]) A.attr(rims[i], { d: RR(x + 1.5, y + 1.5, w - 3, h - 3, rr - 1), opacity: o });
            A.attr(gloss[i], { d: RR(x + w * 0.1, y + h * 0.045, w * 0.8, h * 0.3, rr * 0.75), opacity: o * 0.9 });
          }
          if (y + h > 300) { minX = Math.min(minX, x); maxX = Math.max(maxX, x + w); }
        });
        if (minX > maxX) { minX = 150; maxX = 250; }
        /* film holes */
        A.op(holesG, sh.holes * 0.8); A.show(holesG, sh.holes > 0.02);
        if (sh.holes > 0.02) for (let i = 0; i < 3; i++) {
          const [x, y, w, h] = P[i];
          for (let k = 0; k < 4; k++) A.attr(holes[i * 4 + k], { x: k < 2 ? x + 6 : x + w - 13, y: y + h * (k % 2 ? 0.62 : 0.22) });
        }
        /* blade */
        const p0 = P[0], kb = Math.min(p0[2], p0[3]) / 220, n = clamp(sh.n);
        A.show(bladeG, n > 0.02);
        if (n > 0.02) {
          bladeG.setAttribute('transform', `translate(${f(p0[0] + p0[2])} ${f(p0[1])}) scale(${(kb * (0.5 + 0.5 * n)).toFixed(3)})`);
          A.op(bladeG, n);
          let flick = pk < 3 ? Math.max(0, Math.exp(-4 * pk) * Math.cos(pk * 12)) * 28 : 0;
          let glint = 0;
          const T = mood === 'signature' ? s.mt % SIG : -1;
          if (T >= 0) { flick += Math.sin(seg(T, 3.0, 3.6) * PI) * 24; glint = Math.sin(seg(T, 3.1, 3.6) * PI); }
          if (mood === 'wink') glint = Math.max(glint, Math.sin(seg(s.mt, 0.15, 0.6) * PI));
          if (mood === 'idle') glint = Math.max(glint, Math.sin(seg((t + 2) % 6.5, 0.6, 1.1) * PI));
          if (mood === 'levelup') glint = Math.max(glint, Math.sin(seg(s.mt % 2.2, 1.0, 1.5) * PI));
          flick += dz * 10 * (0.5 + 0.5 * Math.sin(t * 9));
          A.tf(bladeR, 0, 0, flick * bl, 1, 1, 0, 72);
          A.attr(bshine, { transform: `translate(${f(lerp(-90, 30, glint > 0 ? 1 - glint * 0.5 - (glint < 1 ? 0 : 0) : 0))} 0) rotate(-45 0 40)` });
          A.op(bshine, glint > 0.02 ? 0.85 : 0);
          A.tf(bglint, -22, 6, t * 90, glint * 1.3, glint * 1.3);
          A.op(bglint, glint);
        }

        /* face */
        const [fx0, fy0, fs] = sh.face;
        A.tf(face, fx0 + gx * 9, fy0 + gy * 7, 0, fs, fs, 0, 0);
        const blink = mood === 'sleepy' ? 0 : L.blink;
        for (const E of eyes) {
          const sd = E.side;
          A.tf(E.holder, sd * eyeX + gx * 6, eyeY + gy * 6, 0, fc.sx, fc.sy, 0, 0);
          let lt = clamp(fc.lt);
          const wk = sd > 0 ? clamp(fc.wink) : 0;
          lt = lerp(lt, 1, wk); lt = lt + (1 - lt) * blink;
          const shut = squeeze || lt > 0.9;
          A.show(E.open, !shut && !dz); A.show(E.closed, shut && !dz); A.show(E.spiral, !!dz);
          if (dz) A.tf(E.spiral, 0, 0, t * 500 * sd, 1, 1 / fc.sy, 0, 0);
          if (shut) {
            const d = squeeze ? (sd < 0 ? 'M-9 -10L8 0L-9 10' : 'M9 -10L-8 0L9 10')
              : wk > 0.5 ? 'M-12 4Q0 -12 12 4' : 'M-12 2Q0 9 12 2';
            A.attr(E.closed, { d, transform: `scale(${(1 / fc.sx).toFixed(3)} ${(1 / fc.sy).toFixed(3)})` });
          } else {
            const y0 = -EH - 2 + (2 * EH + 2) * lt, tl = fc.tilt;
            const yl = y0 + tl * sd, yr = y0 - tl * sd;
            A.attr(E.lidT, { d: `M-16 -40H16V${f(yr)}L-16 ${f(yl)}Z` });
            A.attr(E.lidL, { d: `M-16 ${f(yl)}L16 ${f(yr)}`, opacity: lt > 0.03 || Math.abs(tl) > 1 ? 0.8 : 0 });
            A.attr(E.lidB, { cy: EH - 2 * EH * clamp(fc.lb) + 22 });
          }
          A.tf(E.brow, sd * eyeX + gx * 5, eyeY - EH * fc.sy - 12 + fc.by + (sd < 0 ? fc.bra : 0) + gy * 4, fc.bt * -sd, 1, 1, 0, 0);
          A.op(E.brow, fc.br);
        }
        blush.forEach(e => A.op(e, fc.blush * 0.5));
        if (dz) A.attr(mouth, { d: 'M-12 2Q-6 -5 0 2Q6 9 12 2', fill: 'none', transform: `translate(0 ${mouthY})` });
        else {
          const top = fc.sm - fc.op * 0.5, bot = fc.sm + fc.op, w = fc.mw;
          A.attr(mouth, { d: `M${f(-w)} 0Q0 ${f(top * 2)} ${f(w)} 0Q0 ${f(bot * 2)} ${f(-w)} 0Z`, fill: '#2a0a0c', transform: `translate(${f(fc.mx)} ${mouthY}) rotate(${f(fc.mr)})` });
        }

        /* hands */
        for (let i = 0; i < 2; i++) {
          const h0 = b0.hands[i], h1 = b1.hands[i];
          const hx = lerp(h0[0], h1[0], bl), hy = lerp(h0[1], h1[1], bl), hr = lerp(h0[2], h1[2], bl), hs = lerp(h0[3], h1[3], bl);
          A.show(hands[i], hs > 0.02);
          if (hs > 0.02) A.tf(hands[i], hx - 200, hy - 338, hr, hs * (i ? -1 : 1), hs, 200, 338);
        }

        /* medal */
        A.show(medal, b.medal > 0.01);
        if (b.medal > 0.01) {
          const my = lerp(250, 66, b.medal);
          A.tf(medal, 200 - 200, my - 338, Math.sin(t * 2) * 3, clamp(b.medal * 1.2, 0, 1.2), clamp(b.medal * 1.2, 0, 1.2), 200, 338);
          const sw = seg(s.mt % 2.2, 0.6, 1.2);
          A.attr(mshine, { transform: `rotate(25) translate(${f(lerp(-60, 60, sw))} 0)` });
          A.op(mshine, sw > 0 && sw < 1 ? 0.75 : 0);
        }
        shadow.setAttribute('cx', f(200 + b.dx));
        const lift = clamp(-b.dy / 80);
        A.attr(shadow, { rx: ((maxX - minX) / 2 + 6) * b.sx * (1 - lift * 0.35), ry: 11 * (1 - lift * 0.3), opacity: 1 - lift * 0.55 });

        /* world effects */
        const wOf = m => (mood === m ? bl : prev === m ? 1 - bl : 0);
        const cel = wOf('celebrate');
        confetti.forEach((c, i) => {
          const on = cel > 0.01 && s.mt > c.ph * 0.5;
          A.show(c.e, on);
          if (!on) return;
          const q = (s.mt * 0.85 + c.ph) % 1;
          const x = 200 + c.vx * q * 190, y = 150 - c.vy * 330 * q + 380 * q * q;
          A.tf(c.e, x, y, c.sp * q, 1, 0.4 + Math.abs(Math.cos(q * 9 + i)) * 0.6);
          A.op(c.e, cel * (q < 0.85 ? 1 : (1 - q) / 0.15));
        });
        const lv = wOf('levelup');
        const SP = [[120, 60], [282, 52], [102, 150], [300, 140], [150, 22], [252, 112]];
        sparks.forEach((e, i) => {
          const k = Math.max(lv, cel), tw = Math.max(0, Math.sin(t * 4 + i * 1.9));
          A.show(e, k > 0.01 && tw > 0.02);
          if (k > 0.01) A.tf(e, SP[i][0], SP[i][1] + (cel > lv ? -30 : 0), t * 40, tw * k * (0.8 + (i % 3) * 0.25), tw * k * (0.8 + (i % 3) * 0.25));
        });
        dizzy.forEach((e, i) => {
          A.show(e, dz > 0.01);
          if (dz > 0.01) { const a = t * 5 + i * 2.09; A.tf(e, 200 + b.dx + Math.cos(a) * 92, 104 + b.dy + Math.sin(a) * 14, t * 200, 0.7 * dz, 0.7 * dz); }
        });
        const zz = wOf('sleepy');
        zs.forEach((e, i) => {
          const q = (t * 0.35 + i / 3) % 1;
          A.show(e, zz > 0.01);
          if (zz > 0.01) { A.attr(e, { x: f(262 + q * 40 + Math.sin(q * 6) * 6), y: f(150 - q * 100), 'font-size': f(16 + q * 18) }); A.op(e, zz * Math.sin(q * PI)); }
        });
        const th = wOf('thinking');
        thinks.forEach((e, i) => {
          const a = ease.outBack(seg(s.mt, 0.25 + i * 0.22, 0.5 + i * 0.22)), sz = [9, 13, 19][i];
          A.show(e, th > 0.01 && a > 0.01);
          if (th > 0.01) { A.attr(e, { x: f([284, 304, 330][i] - sz / 2), y: f([110, 82, 46][i] - sz / 2 + Math.sin(t * 2 + i) * 2), width: f(sz * a), height: f(sz * a), rx: f(sz * a * 0.3) }); A.op(e, th * 0.92); }
        });
        const wk = wOf('working');
        bits.forEach((e, i) => {
          const p = (s.mt % 1.3) / 1.3, q = seg(p, 0.12 + (i % 3) * 0.04, 0.6 + (i % 3) * 0.04), dir = i % 2 ? 1 : -1;
          A.show(e, wk > 0.01 && q > 0 && q < 1);
          if (wk > 0.01) { A.tf(e, 200 + dir * (30 + q * (70 + (i % 3) * 25)), 230 - q * (90 + (i % 3) * 20) + q * q * 70, q * 300 * dir, 1 - q * 0.4, 1 - q * 0.4); A.op(e, wk * Math.sin(q * PI)); }
        });
      },
    };
  },
});

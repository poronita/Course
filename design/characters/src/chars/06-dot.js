/* Dot: the app icon, alive. A glossy signal-red squircle with three soft
   corners and one steel blade corner. Its body morphs into tools: crop
   brackets, a 4:5 frame, a film strip. */
CAST.register({
  id: 'dot', order: 6, name: 'Dot',
  tagline: 'The logo that comes alive.',
  concept: 'Dot is the app icon itself: a glossy red squircle with three soft corners and one steel blade corner. It has two tall eyes and a mouth that does a lot of talking. Its body turns into the tool you need. It splits into crop brackets, stretches to 4:5 and slices into a film strip.',
  signature: 'Feature: three soft corners and one sharp steel blade corner. Move: a snap from squircle to crop brackets, to a 4:5 frame, to a film strip its face hops across, and back, then the blade flicks open with a wink.',
  why: ['The mascot and the app icon are the same shape, so every sighting builds the brand.', 'One sharp steel corner on a soft red square is a mark no other app has.', 'It acts with its whole body. Its shape changes say what the tool does.'],
  risks: ['A red rounded square is close to many app icons. The steel corner must carry the difference.', 'Morph motion is its main charm. Still images show less of it.'],
  voice: 'Crop? Done. Want it 4:5 too?',
  scores: { memorable: 4, stylish: 5, expressive: 5, small: 5, fit: 5 },
  palette: ['#E5322B', '#B81C16', '#FF6B57', '#D3D8DE', '#1A0B0D', '#F5C83F'],
  bg: '#4a1d1b',
  iconBg: '#1e1416',
  icon: { viewBox: '82 106 236 236' },

  build(g, A) {
    const SM = A.small, PI = Math.PI;
    const { lerp, clamp, seg, ease } = A;
    const f = v => Math.round(v * 10) / 10;

    /* ---------- gradients ---------- */
    A.grad('body', [[0, '#ff6f5a'], [0.38, '#ee3b2e'], [1, '#b51a14']], { x1: 0.25, y1: 0, x2: 0.7, y2: 1 });
    A.grad('bev', [[0, '#ffffff', 0.6], [0.14, '#ffffff', 0], [0.8, '#5e0a07', 0], [1, '#5e0a07', 0.42]]);
    A.grad('rim', [[0, '#ffd0c4', 0.55], [0.12, '#ffd0c4', 0], [1, '#ffd0c4', 0]], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('gloss', [[0, '#ffffff', 0.42], [0.5, '#ffffff', 0.07], [1, '#ffffff', 0]]);
    A.grad('steel', [[0, '#f7f9fb'], [0.3, '#cfd5dc'], [0.62, '#8f99a4'], [1, '#5f6873']], { x1: 1, y1: 0, x2: 0.15, y2: 0.85 });
    A.grad('edge', [[0, '#ffffff', 0], [0.55, '#ffffff', 0.75], [1, '#ffffff', 0.2]], { x1: 1, y1: 0, x2: 0, y2: 1 });
    A.grad('eye', [[0, '#40202a'], [1, '#12070a']]);
    A.grad('lid', [[0, '#f1432f'], [1, '#e7392c']], { units: 'userSpaceOnUse', x1: 0, y1: -30, x2: 0, y2: 30 });
    A.grad('tongue', [[0, '#ff7f73'], [1, '#d8433d']]);
    A.grad('shadow', [[0, '#000', 0.5], [0.6, '#000', 0.22], [1, '#000', 0]], { radial: true });
    A.grad('gold', [[0, '#fff6c4'], [0.45, '#f5c83f'], [1, '#a86f10']], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('gold2', [[0, '#c98d1c'], [0.6, '#f2c13d'], [1, '#ffe48a']], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('glove', [[0, '#ffffff'], [0.7, '#f1f2f5'], [1, '#c9ced7']], { radial: true, cx: 0.38, cy: 0.32, r: 0.75 });
    A.grad('ribbon', [[0, '#ff5a48'], [1, '#a5140f']], { x1: 0, y1: 0, x2: 1, y2: 0 });

    /* Continuous-corner rounded rect. n (0..1) swaps the top-right corner for
       a quarter-circle bite of radius c, the slot the blade sits in. */
    const RR = (x, y, w, h, r, n = 0) => {
      w = Math.max(w, 1); h = Math.max(h, 1);
      const R = Math.max(0, Math.min(r * 1.3, w / 2, h / 2)), a = R * 0.24, X = x + w, Y = y + h;
      const c = Math.min(w, h) * 0.36, k = 0.552 * c;
      const sx = lerp(X - R, X - c, n), c1x = lerp(X - a, X - c, n), c1y = lerp(y, y + k, n), c2x = lerp(X, X - k, n), c2y = lerp(y + a, y + c, n), ey = lerp(y + R, y + c, n);
      return `M${f(x + R)} ${f(y)}H${f(sx)}C${f(c1x)} ${f(c1y)} ${f(c2x)} ${f(c2y)} ${f(X)} ${f(ey)}V${f(Y - R)}C${f(X)} ${f(Y - a)} ${f(X - a)} ${f(Y)} ${f(X - R)} ${f(Y)}H${f(x + R)}C${f(x + a)} ${f(Y)} ${f(x)} ${f(Y - a)} ${f(x)} ${f(Y - R)}V${f(y + R)}C${f(x)} ${f(y + a)} ${f(x + a)} ${f(y)} ${f(x + R)} ${f(y)}Z`;
    };
    const STAR = 'M0 -10Q1.6 -1.6 10 0Q1.6 1.6 0 10Q-1.6 1.6 -10 0Q-1.6 -1.6 0 -10Z';

    /* ---------- shapes: 5 rounded rects (0 = core with face and blade) ---------- */
    const all = r => [r, r, r, r, r];
    const SHP = {
      SQ: { p: all([90, 118, 220, 220, 55]), n: 1, face: [200, 222, 1], holes: 0 },
      SAG: { p: all([78, 152, 244, 188, 62]), n: 1, face: [200, 252, 0.98], holes: 0 },
      SQZ: { p: all([126, 200, 148, 138, 36]), n: 1, face: [200, 266, 0.68], holes: 0 },
      TALL: { p: all([104, 92, 192, 246, 50]), n: 1, face: [200, 206, 1], holes: 0 },
      SMALL: { p: all([150, 240, 100, 100, 26]), n: 0.6, face: [200, 286, 0.46], holes: 0 },
      CROP: { p: [[128, 162, 144, 144, 30], [72, 98, 98, 26, 11], [72, 98, 26, 98, 11], [230, 316, 98, 26, 11], [302, 244, 26, 98, 11]], n: 0, face: [200, 230, 0.66], holes: 0 },
      F45: { p: all([112, 114, 176, 224, 30]), n: 0, face: [200, 220, 0.9], holes: 0 },
      FILM: { p: [[158, 232, 84, 106, 13], [64, 232, 84, 106, 13], [64, 232, 84, 106, 13], [252, 232, 84, 106, 13], [252, 232, 84, 106, 13]], n: 0, face: [200, 283, 0.44], holes: 1 },
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
    const sq = A.el('g', {}, root);
    const medal = A.el('g', {}, root);
    const order = [1, 2, 3, 4, 0];
    const pcs = [];
    order.forEach(i => {
      const pg = A.el('g', {}, sq);
      pcs[i] = {
        g: pg,
        fill: A.el('path', { fill: A.url('body') }, pg),
        rim: SM ? null : A.el('path', { fill: 'none', stroke: A.url('rim'), 'stroke-width': 3 }, pg),
        bev: A.el('path', { fill: 'none', stroke: A.url('bev'), 'stroke-width': SM ? 4 : 2.6 }, pg),
        gloss: A.el('path', { fill: A.url('gloss') }, pg),
        spec: SM ? null : A.el('path', { fill: 'none', stroke: '#ffffff', 'stroke-width': 3.2, 'stroke-linecap': 'round', opacity: 0.75 }, pg),
      };
    });
    const holesG = A.el('g', { fill: '#2a0b0b', opacity: 0 }, sq);
    const holes = [];
    for (let i = 0; i < 24; i++) holes.push(A.el('rect', { width: 8, height: 6, rx: 2 }, holesG));
    const snap = A.el('path', { fill: 'none', stroke: '#ffffff', 'stroke-width': 3, opacity: 0 }, sq);

    /* Steel blade: a quarter disc whose sharp point is the icon's fourth corner.
       Local origin = the corner, radius 69 at full size. */
    const bladeG = A.el('g', {}, sq);
    const bladeR = A.el('g', {}, bladeG);
    const BR_ = 69;
    const BLADE = `M-5 0H-${BR_}A${BR_} ${BR_} 0 0 0 0 ${BR_}V5Q0 0 -5 0Z`;
    A.el('path', { d: BLADE, fill: '#000', opacity: 0.18, transform: 'translate(-2 4)' }, bladeR);
    A.el('path', { d: BLADE, fill: A.url('steel') }, bladeR);
    A.el('path', { d: `M-${BR_} 0A${BR_} ${BR_} 0 0 0 0 ${BR_}V${BR_ - 13}A${BR_ - 13} ${BR_ - 13} 0 0 1 -${BR_ - 13} 0Z`, fill: A.url('edge') }, bladeR);
    A.el('path', { d: `M-${BR_ - 13} 0A${BR_ - 13} ${BR_ - 13} 0 0 0 0 ${BR_ - 13}`, fill: 'none', stroke: '#7d8691', 'stroke-width': 1.1, opacity: 0.8 }, bladeR);
    A.el('path', { d: `M-${BR_} 0A${BR_} ${BR_} 0 0 0 0 ${BR_}`, fill: 'none', stroke: '#ffffff', 'stroke-width': 1.4, opacity: 0.95 }, bladeR);
    A.el('path', { d: 'M-40 0H-6Q0 0 0 6V40', fill: 'none', stroke: '#ffffff', 'stroke-width': 2, opacity: 0.9, 'stroke-linecap': 'round' }, bladeR);
    A.el('circle', { cx: -17, cy: 17, r: 4.6, fill: '#8b949f', stroke: '#f2f4f6', 'stroke-width': 1.3 }, bladeR);
    const bclip = A.id('bclip');
    A.el('path', { d: BLADE }, A.el('clipPath', { id: bclip }, A.defs));
    const bshineG = A.el('g', { 'clip-path': `url(#${bclip})` }, bladeR);
    const bshine = A.el('rect', { x: -7, y: -100, width: 14, height: 200, fill: '#ffffff', opacity: 0 }, bshineG);
    const bglint = A.el('path', { d: STAR, fill: '#ffffff' }, bladeR);

    /* Face */
    const face = A.el('g', {}, sq);
    const blush = [-1, 1].map(sd => A.el('ellipse', { cx: sd * 54, cy: 32, rx: 12, ry: 6.5, fill: '#ff9a8a', opacity: 0 }, face));
    const puff = [-1, 1].map(sd => A.el('ellipse', { cx: sd * 56, cy: 34, rx: 14, ry: 9, fill: '#a3120d', opacity: 0 }, face));
    const EW = 12.5, EH = 28;
    const eyes = [-1, 1].map(side => {
      const holder = A.el('g', {}, face);
      const cid = A.id('eye' + side);
      A.el('rect', { x: -EW, y: -EH, width: EW * 2, height: EH * 2, rx: EW }, A.el('clipPath', { id: cid }, A.defs));
      const open = A.el('g', {}, holder);
      const ball = A.el('g', { 'clip-path': `url(#${cid})` }, open);
      A.el('rect', { x: -EW, y: -EH, width: EW * 2, height: EH * 2, rx: EW, fill: A.url('eye') }, ball);
      const hl = A.el('g', {}, ball);
      A.el('ellipse', { cx: -3.5, cy: -12, rx: 4.6, ry: 7.2, fill: '#ffffff' }, hl);
      A.el('circle', { cx: 4.5, cy: 10, r: 2.4, fill: '#ffffff', opacity: 0.55 }, hl);
      const cid2 = A.id('lids' + side);
      A.el('rect', { x: -EW - 1.4, y: -EH - 1.4, width: EW * 2 + 2.8, height: EH * 2 + 2.8, rx: EW + 1.4 }, A.el('clipPath', { id: cid2 }, A.defs));
      const lids = A.el('g', { 'clip-path': `url(#${cid2})` }, open);
      const lidB = A.el('path', { fill: A.url('lid') }, lids);
      const lidT = A.el('path', { fill: A.url('lid') }, lids);
      const lidL = A.el('path', { fill: 'none', stroke: '#7e100c', 'stroke-width': 2.6, 'stroke-linecap': 'round' }, A.el('g', { 'clip-path': `url(#${cid})` }, open));
      const closed = A.el('path', { fill: 'none', stroke: '#1a0b0d', 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, holder);
      return { side, holder, open, hl, lidT, lidB, lidL, closed };
    });
    /* Mouth: shape + clipped tongue and teeth, plus a tongue that pokes out. */
    const mouthG = A.el('g', {}, face);
    const tOut = A.el('path', { d: 'M-6 0C-6 9 -3 14 1 14C5 14 7 9 7 0Z', fill: A.url('tongue'), stroke: '#2a0a0c', 'stroke-width': 2.4 }, mouthG);
    const mclipId = A.id('mclip');
    const mclip = A.el('path', {}, A.el('clipPath', { id: mclipId }, A.defs));
    const mouth = A.el('path', { fill: '#2a0a0c', stroke: '#2a0a0c', 'stroke-width': 4.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, mouthG);
    const mIn = A.el('g', { 'clip-path': `url(#${mclipId})` }, mouthG);
    const tongue = A.el('ellipse', { cx: 0, cy: 14, rx: 10, ry: 7, fill: A.url('tongue') }, mIn);
    const teeth = A.el('rect', { x: -30, y: -30, width: 60, height: 30, fill: '#fff4f0' }, mIn);

    /* Anger mark (3+ pokes) */
    const anger = A.el('g', { fill: 'none', stroke: '#ffd9d2', 'stroke-width': 4, 'stroke-linecap': 'round' }, sq);
    A.el('path', { d: 'M-12 -4Q-4 -4 -4 -12M4 -12Q4 -4 12 -4M12 4Q4 4 4 12M-4 12Q-4 4 -12 4' }, anger);

    /* Gloves */
    const mkHand = () => {
      const h = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 6, rx: 14, ry: 5, fill: '#000', opacity: 0.12 }, h);
      A.el('circle', { cx: -12, cy: -7, r: 7, fill: A.url('glove'), stroke: '#b8bec8', 'stroke-width': 1.2 }, h);
      A.el('circle', { cx: 0, cy: 0, r: 15, fill: A.url('glove'), stroke: '#b8bec8', 'stroke-width': 1.2 }, h);
      A.el('path', { d: 'M-3 -12Q4 -11 8 -6M3 -14Q10 -12 13 -5', fill: 'none', stroke: '#c4c9d2', 'stroke-width': 1.4, 'stroke-linecap': 'round' }, h);
      return h;
    };
    const hands = [mkHand(), mkHand()];

    /* Medal (level up), centred on its local origin */
    const ribbon = A.el('g', {}, medal);
    A.el('path', { d: 'M-16 20L-30 70L-19 62L-10 74L2 24Z', fill: A.url('ribbon') }, ribbon);
    A.el('path', { d: 'M16 20L30 70L19 62L10 74L-2 24Z', fill: A.url('ribbon') }, ribbon);
    A.el('circle', { r: 39, fill: A.url('gold'), stroke: '#8a5a0a', 'stroke-width': 1.5 }, medal);
    A.el('circle', { r: 30, fill: A.url('gold2') }, medal);
    A.el('circle', { r: 30, fill: 'none', stroke: '#fff3b8', 'stroke-width': 1.4, opacity: 0.8 }, medal);
    A.el('text', { x: 0, y: -7, 'text-anchor': 'middle', 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 800, 'font-size': 11, 'letter-spacing': 1.5, fill: '#7a4705', text: 'LV' }, medal);
    A.el('text', { x: 0, y: 21, 'text-anchor': 'middle', 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 900, 'font-size': 30, fill: '#6e3f03', text: '8' }, medal);
    const mclip2 = A.id('mclip2');
    A.el('circle', { r: 39 }, A.el('clipPath', { id: mclip2 }, A.defs));
    const mshine = A.el('rect', { x: -9, y: -70, width: 16, height: 140, fill: '#ffffff', opacity: 0 }, A.el('g', { 'clip-path': `url(#${mclip2})` }, medal));

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
    const zs = [0, 1, 2].map(() => A.el('text', { 'font-family': 'Inter, Helvetica, Arial, sans-serif', 'font-weight': 900, fill: '#ffffff', text: 'z' }, fx));
    const thinks = [0, 1, 2].map(() => A.el('rect', { fill: '#ffffff' }, fx));
    const bits = [];
    for (let i = 0; i < 6; i++) bits.push(A.el('rect', { x: -4, y: -4, width: 8, height: 8, rx: 2, fill: ['#ff6d58', '#ffffff', '#ffd25a'][i % 3] }, behind));

    /* ---------- signature timeline ---------- */
    const SIG = 4.6;
    const SEGS = [
      [0, 0.28, 'SQ', 'SQ', ease.out],
      [0.28, 0.46, 'SQ', 'CROP', ease.outBack],
      [0.46, 1.05, 'CROP', 'CROP', ease.out],
      [1.05, 1.23, 'CROP', 'F45', ease.outBack],
      [1.23, 1.75, 'F45', 'F45', ease.out],
      [1.75, 1.93, 'F45', 'FILM', ease.outBack],
      [1.93, 2.56, 'FILM', 'FILM', ease.out],
      [2.56, 2.72, 'FILM', 'SMALL', ease.in],
      [2.72, 3.15, 'SMALL', 'SQ', ease.spring],
      [3.15, 99, 'SQ', 'SQ', ease.out],
    ];
    const HITS = [0.28, 1.05, 1.75, 2.72];
    const sigShape = T => {
      for (const [a, b, s0, s1, e] of SEGS) if (T < b) {
        const sh = lerpShape(SHP[s0], SHP[s1], e(seg(T, a, b)));
        if (s0 === 'SQ' && s1 === 'SQ' && T < 0.28) { const k = Math.sin(seg(T, 0, 0.28) * PI * 0.5) * 8; sh.p = sh.p.map(r => [r[0] - k, r[1] + k * 1.6, r[2] + 2 * k, r[3] - k * 1.6, r[4]]); }
        if (s0 === 'CROP' && s1 === 'CROP') { // crop handles drag in and out
          const q = seg(T, a, b), k = Math.sin(q * PI * 2) * 12;
          sh.p = sh.p.map((r, i) => { if (!i) return r; const d = i < 3 ? k : -k; return [r[0] + d, r[1] + d, r[2], r[3], r[4]]; });
        }
        if (s0 === 'F45' && s1 === 'F45') { const k = Math.sin(seg(T, a, b) * PI) * 6; sh.p = sh.p.map(r => [r[0] + k, r[1] - k * 1.25, r[2] - 2 * k, r[3] + k * 1.25, r[4]]); }
        if (s0 === 'FILM' && s1 === 'FILM') { // face hops frame to frame like a GIF
          const q = seg(T, a, b), st = Math.min(2, Math.floor(q * 3)), lp = ease.outBack(seg(q * 3 - st, 0, 0.4));
          const X = [-92, 92, 0], from = st === 0 ? 0 : X[st - 1];
          sh.face = [200 + lerp(from, X[st], lp), 283 - Math.sin(seg(q * 3 - st, 0, 0.4) * PI) * 16, 0.44];
        }
        return sh;
      }
      return SHP.SQ;
    };
    const workPhase = mt => { const p = (mt % 1.3) / 1.3; return ease.inOut(seg(p, 0.05, 0.45)) * (1 - ease.outBack(seg(p, 0.55, 0.85))); };

    const shapeFor = (m, s) => {
      if (m === 'signature') return sigShape(s.mt % SIG);
      if (m === 'sleepy') return SHP.SAG;
      if (m === 'working') return lerpShape(SHP.SQ, SHP.SQZ, workPhase(s.mt));
      if (m === 'levelup') return lerpShape(SHP.SQ, SHP.TALL, Math.sin(seg(s.mt, 0.05, 0.6) * PI * 0.5) * 0.35);
      return SHP.SQ;
    };

    /* ---------- body per mood ---------- */
    const H0 = [[70, 300, 0, 0], [330, 300, 0, 0]];
    const bodyFor = (m, s, L) => {
      const t = s.t, mt = s.mt;
      const b = { dx: 0, dy: 0, rot: L.sway * 1.2, sx: 1 - L.breathe * 0.008, sy: 1 + L.breathe * 0.014, hands: H0, medal: 0 };
      if (m === 'idle') {
        const ph = (t + 2) % 6.5;
        const pre = ph < 0.12 ? Math.sin(ph / 0.12 * PI) : 0, hop = ph > 0.12 && ph < 0.52 ? Math.sin((ph - 0.12) / 0.4 * PI) : 0, land = A.wobble(ph - 0.52, 20, 7);
        b.dy = -hop * 12; b.sy += -pre * 0.06 + hop * 0.05 - land * 0.07; b.sx += pre * 0.05 - hop * 0.03 + land * 0.06;
      } else if (m === 'happy') {
        const p = (mt * 2.2) % 1, air = Math.sin(p * PI);
        b.dy = -air * 18; b.sy = 1 + air * 0.05 - Math.pow(1 - air, 10) * 0.1; b.sx = 2 - b.sy; b.rot = Math.sin(mt * 2.2 * PI) * 3;
      } else if (m === 'wink') {
        const e = ease.outBack(seg(mt, 0, 0.35));
        b.rot = -7 * e; b.dx = -4 * e; b.dy = -3 * e + Math.sin(mt * 3) * 1.5;
        b.sy += A.wobble(mt - 0.08, 16, 6) * 0.05; b.sx -= A.wobble(mt - 0.08, 16, 6) * 0.04;
        b.hands = [H0[0], [324, 208 + Math.sin(mt * 6) * 3, -30, ease.outBack(seg(mt, 0.1, 0.4))]];
      } else if (m === 'surprised') {
        const pre = seg(mt, 0, 0.08), j = seg(mt, 0.08, 0.5), e = ease.out(seg(mt, 0.08, 0.3));
        b.dy = -Math.sin(j * PI) * 30; b.dx = -12 * e; b.rot = -7 * e + A.wobble(mt - 0.5, 12, 4) * 2;
        b.sy = 1 - Math.sin(pre * PI) * 0.1 + Math.sin(j * PI) * 0.12 - A.wobble(mt - 0.5, 18, 6) * 0.08; b.sx = 2 - b.sy;
        const hp = ease.outBack(seg(mt, 0.05, 0.3));
        b.hands = [[68, 178 + Math.sin(t * 30) * 1.5, 30, hp], [332, 178 + Math.sin(t * 30 + 1) * 1.5, -30, hp]];
      } else if (m === 'thinking') {
        b.rot = 4 + Math.sin(t * 0.9) * 1.2;
        const tap = Math.abs(Math.sin(t * 4)) * -3;
        b.hands = [H0[0], [240, 290 + tap, -35, ease.outBack(seg(mt, 0.05, 0.4))]];
      } else if (m === 'working') {
        const pr = workPhase(mt), sh = shapeFor('working', s), r = sh.p[0];
        b.dx = Math.sin(t * 70) * 1.2 * pr; b.rot = 0;
        const hp = ease.outBack(seg(mt, 0, 0.3));
        b.hands = [[r[0] - 13, r[1] + r[3] * 0.5, 90, hp], [r[0] + r[2] + 13, r[1] + r[3] * 0.5, -90, hp]];
      } else if (m === 'celebrate') {
        const p = (mt * 1.1) % 1, air = Math.sin(p * PI);
        b.dy = -air * 60; b.sy = 1 + 0.1 * Math.abs(Math.cos(p * PI)) * air - Math.pow(1 - air, 10) * 0.2; b.sx = 2 - b.sy; b.rot = Math.sin(p * 2 * PI) * 4;
        const hp = ease.outBack(seg(mt, 0, 0.3));
        b.hands = [[78 + Math.sin(t * 13) * 5, 126, 150, hp], [322 + Math.sin(t * 13 + 2) * 5, 126, -150, hp]];
      } else if (m === 'sleepy') {
        b.rot = Math.sin(t * 0.9) * 3; b.dx = Math.sin(t * 0.9) * 3; b.sy = 1 + Math.sin(t * 1.5) * 0.025; b.sx = 1 - Math.sin(t * 1.5) * 0.012;
      } else if (m === 'levelup') {
        b.dy = -Math.sin(seg(mt, 0.1, 0.6) * PI) * 14 + Math.sin(t * 3) * 1.5;
        b.sy = 1 - 0.08 * Math.sin(seg(mt, 0, 0.12) * PI) + A.wobble(mt - 0.6, 14, 5) * 0.04;
        b.sx = 2 - b.sy;
        b.rot = Math.sin(t * 1.4) * 1.5;
        b.medal = ease.outBack(seg(mt, 0.12, 0.55));
        const my = lerp(240, 62, b.medal), hp = ease.outBack(seg(mt, 0.05, 0.3));
        b.hands = [[146, my + 10, 70, hp], [254, my + 10, -70, hp]];
      } else if (m === 'signature') {
        const T = mt % SIG;
        let imp = 0; for (const h of HITS) imp += A.wobble(T - h, 22, 7);
        b.sx = 1 + imp * 0.09; b.sy = 1 - imp * 0.09; b.rot = imp * 3;
        b.dy = T > 2.72 && T < 3.15 ? -Math.sin(seg(T, 2.72, 3.15) * PI) * 26 : 0;
        const w = seg(T, 3.15, 3.35) * (1 - seg(T, 4.15, 4.4));
        b.rot += -6 * ease.out(w);
        b.hands = [H0[0], [326, 222, -30, ease.outBack(w)]];
      }
      return b;
    };

    /* ---------- face per mood ----------
       lt top lid 0..1, tilt (+ = inner corners low, a frown), bend (+ = heavy lid),
       lb/lbb bottom lid and its upward bulge, hc happy-closed eyes,
       mouth: mw half width, up/lo lip controls, cl/cr corner heights, tg tongue, th teeth, to tongue out. */
    const F0 = { lt: 0.12, tilt: 0, bend: 0, asym: 0, lb: 0, lbb: 0, sx: 1, sy: 1, hc: 0, mw: 8, up: 2, lo: 6, cl: -1, cr: -1, mx: 0, mr: 0, tg: 0, th: 0, to: 0, blush: 0, puff: 0, gx: 0, gy: 0, gw: 0, wink: 0, fy: 0 };
    const faceFor = (m, s) => {
      const t = s.t, mt = s.mt;
      const F = Object.assign({}, F0);
      const set = o => Object.assign(F, o);
      if (m === 'idle') {
        const ph = t % 7.5, g2 = seg(ph, 3.2, 3.4) * (1 - seg(ph, 4.4, 4.6));
        set({ gw: g2, gx: 0.9, gy: 0.1, mx: g2 * 3, cr: -1 - g2 * 3, asym: g2 * 0.12 });
      } else if (m === 'happy') set({ lt: 0, lb: 0.4, lbb: 9, sy: 1.03, mw: 15, up: -1, lo: 17, cl: -6, cr: -6, tg: 1, blush: 1 });
      else if (m === 'wink') set({ lt: 0.04, tilt: -2, lb: 0.3, lbb: 7, mw: 12, up: -2, lo: 9, cl: 0, cr: -9, mx: 3, mr: -6, to: ease.outBack(seg(mt, 0.2, 0.45)), blush: 1, wink: ease.out(seg(mt, 0.06, 0.16)) * (1 - seg(mt % 3, 2.5, 2.62) * (mt > 2 ? 1 : 0)) });
      else if (m === 'surprised') set({ lt: 0, sx: 0.92, sy: 1.26, bend: -7, mw: 7, up: -10, lo: 12, cl: 0, cr: 0, tg: 0.4, fy: -5 });
      else if (m === 'thinking') set({ lt: 0.3, tilt: -3, bend: 2, asym: 0.2, lb: 0.1, gw: 1, gx: -0.8, gy: -0.95, mw: 6, up: 1, lo: 3, cl: 2, cr: -3, mx: 8, mr: 12 });
      else if (m === 'working') {
        const pr = workPhase(mt);
        set({ lt: 0.36 + pr * 0.14, tilt: 8, bend: 1, lb: 0.12 + pr * 0.14, lbb: 2, mw: 8 - pr * 2, up: 0, lo: 2 + pr * 2, cl: 1, cr: -2, mx: 2, to: 1, gw: 0.6, gx: 0, gy: 0.35 });
      } else if (m === 'celebrate') set({ hc: 1, mw: 16, up: -2, lo: 21, cl: -6, cr: -6, tg: 1, blush: 1, sy: 1.04 });
      else if (m === 'sleepy') set({ lt: 0.8 + Math.sin(t * 1.3) * 0.1, tilt: -2, bend: 4, lb: 0.06, mw: 5, up: -2 - Math.sin(t * 1.5) * 2, lo: 3 + Math.sin(t * 1.5) * 2.5, cl: 1, cr: 1, gw: 0.6, gy: 0.5 });
      else if (m === 'levelup') {
        const up = seg(mt, 0.3, 0.5) * (1 - seg(mt, 1.4, 1.7));
        set({ lt: 0, lb: lerp(0.32, 0.1, up), lbb: lerp(7, 0, up), sy: 1 + up * 0.08, bend: -3 * up, mw: 15, up: -2, lo: 15, cl: -6, cr: -6, th: 1, tg: 0.6, blush: 1, gw: up, gx: 0, gy: -1 });
      } else if (m === 'signature') {
        const T = mt % SIG;
        const prep = seg(T, 0, 0.12) * (1 - seg(T, 0.26, 0.3));
        const mor = seg(T, 0.26, 0.34) * (1 - seg(T, 2.95, 3.1));
        let hitSq = 0; for (const h of HITS) if (T > h - 0.02 && T < h + 0.08) hitSq = 1;
        const w = seg(T, 3.15, 3.27) * (1 - seg(T, 4.05, 4.15));
        set({ lt: lerp(lerp(0.12, 0.42, prep), 0, mor), tilt: 9 * prep, lb: 0.15 * prep, sy: 1 + mor * 0.1, mw: lerp(lerp(8, 6, prep), 9, mor), up: lerp(2, -6, mor), lo: lerp(lerp(6, 2, prep), 13, mor), cl: lerp(-1, -3, mor), cr: lerp(-1, -3, mor), tg: mor * 0.6 });
        if (hitSq) set({ hc: 1, lo: 15, tg: 0.8 });
        if (w > 0) set({ wink: w, lt: 0.04, lb: 0.3 * w, lbb: 7 * w, mw: lerp(F.mw, 12, w), up: lerp(F.up, -2, w), lo: lerp(F.lo, 9, w), cl: 0, cr: -9 * w, mx: 3 * w, mr: -6 * w, blush: w, to: 0, tg: 0, sy: 1 });
      }
      return F;
    };
    const mixObj = (a, b, p) => { const o = {}; for (const k in b) o[k] = lerp(a[k], b[k], p); return o; };

    const eyeX = 35, eyeY = -4, mouthY = 44;
    /* Lids take the exact body colour under them (body gradient sampled in its bounding box). */
    const STOPS = [[0, [255, 111, 90]], [0.38, [238, 59, 46]], [1, [181, 26, 20]]];
    const bodyCol = (r, px, py) => {
      const u = (px - r[0]) / r[2] - 0.25, v = (py - r[1]) / r[3], k = clamp((u * 0.45 + v) / (0.45 * 0.45 + 1));
      let i = 0; while (i < STOPS.length - 2 && k > STOPS[i + 1][0]) i++;
      const [a, ca] = STOPS[i], [b2, cb] = STOPS[i + 1], q = clamp((k - a) / (b2 - a));
      return `rgb(${ca.map((c, j) => Math.round(lerp(c, cb[j], q))).join(',')})`;
    };

    return {
      update(s) {
        const t = s.t, L = A.life(t, 6), mood = s.mood, prev = s.prev || mood, bl = s.blend == null ? 1 : s.blend;
        const sh = lerpShape(shapeFor(prev, s), shapeFor(mood, s), bl);
        const b0 = bodyFor(prev, s, L), b1 = bodyFor(mood, s, L);
        const b = { dx: lerp(b0.dx, b1.dx, bl), dy: lerp(b0.dy, b1.dy, bl), rot: lerp(b0.rot, b1.rot, bl), sx: lerp(b0.sx, b1.sx, bl), sy: lerp(b0.sy, b1.sy, bl), medal: lerp(b0.medal, b1.medal, bl) };
        const fc = mixObj(faceFor(prev, s), faceFor(mood, s), bl);

        /* poke, grumpy (3+ pokes), hover */
        const pk = s.poke;
        const gr = s.pokes >= 3 && pk < 2.6 ? ease.out(seg(pk, 0, 0.12)) * (1 - seg(pk, 2.1, 2.6)) : 0;
        let pop = 0;
        if (pk < 3) {
          const im = Math.exp(-5.5 * pk) * Math.cos(pk * 19);
          b.sx *= 1 + im * 0.16; b.sy *= 1 - im * 0.16; b.rot += A.wobble(pk, 13, 4.5) * 7 * (1 - gr);
          b.dy -= Math.max(0, Math.sin(seg(pk, 0.08, 0.42) * PI)) * 14 * (1 - gr);
          pop = Math.max(0, Math.exp(-4 * pk) * Math.cos(pk * 11));
        }
        const squeeze = pk < 0.16 ? 1 : 0;
        if (gr > 0) {
          b.dx += Math.sin(t * 55) * 1.6 * gr; b.sx *= 1 + 0.04 * gr; b.sy *= 1 - 0.03 * gr; b.rot = lerp(b.rot, Math.sin(t * 3) * 2, gr);
          Object.assign(fc, mixObj(fc, Object.assign({}, F0, { lt: 0.4, tilt: 13, bend: -2, lb: 0.16, mw: 9, up: -3 + Math.sin(t * 20) * 1, lo: -1, cl: 5, cr: 5, mx: 0, puff: 1, gw: 0, wink: 0, hc: 0 }), gr));
        } else if (pk < 1.0 && !squeeze) {
          const k = 1 - seg(pk, 0.6, 1.0);
          Object.assign(fc, mixObj(fc, Object.assign({}, F0, { lt: 0, sx: 0.92, sy: 1.24, bend: -7, mw: 7, up: -9, lo: 11, cl: 0, cr: 0, fy: -4, gw: 0 }), k));
        }
        if (squeeze && !gr) Object.assign(fc, { mw: 11, up: 3, lo: -3, cl: 2, cr: 2, tg: 0, th: 0.9, to: 0, puff: 0 });
        if (s.hover && !SM) { b.sy *= 1.015; fc.lt = Math.max(0, fc.lt - 0.05); }

        /* root transforms */
        const gx = lerp(s.look.x, fc.gx, fc.gw), gy = lerp(s.look.y, fc.gy, fc.gw);
        A.tf(root, b.dx + gx * 3, b.dy, b.rot + gx * 1.5, 1, 1, 200, 338);
        A.tf(sq, 0, 0, 0, b.sx, b.sy, 200, 338);

        /* body pieces */
        const P = sh.p, n = clamp(sh.n);
        let minX = 1e9, maxX = -1e9;
        P.forEach((r, i) => {
          const [x, y, w, h, rr] = r, pc = pcs[i];
          let dmin = 99;
          if (i) { dmin = Math.abs(P[0][0] - x) + Math.abs(P[0][1] - y) + Math.abs(P[0][2] - w) + Math.abs(P[0][3] - h); for (let j = 1; j < i; j++) dmin = Math.min(dmin, Math.abs(P[j][0] - x) + Math.abs(P[j][1] - y) + Math.abs(P[j][2] - w) + Math.abs(P[j][3] - h)); }
          const o = i === 0 ? 1 : clamp(dmin / 6);
          A.show(pc.g, o > 0.01);
          if (o <= 0.01) return;
          const nn = i === 0 ? n : 0;
          A.attr(pc.fill, { d: RR(x, y, w, h, rr, nn) });
          A.attr(pc.bev, { d: RR(x + 2.5, y + 2.5, w - 5, h - 5, rr - 2, nn), opacity: o });
          if (pc.rim) A.attr(pc.rim, { d: RR(x + 1.5, y + 1.5, w - 3, h - 3, rr - 1, nn), opacity: o });
          const gw = i === 0 ? w * (0.8 - 0.26 * nn) : w * 0.8;
          A.attr(pc.gloss, { d: RR(x + w * 0.09, y + h * 0.04, gw, h * 0.26, rr * 0.7), opacity: o * 0.85 });
          if (pc.spec) { const R = Math.min(rr * 1.3, w / 2, h / 2); A.attr(pc.spec, { d: `M${f(x + 7)} ${f(y + R * 0.95)}Q${f(x + 8)} ${f(y + 8)} ${f(x + R * 0.95)} ${f(y + 7)}`, opacity: o * 0.7 }); }
          if (y + h > 300) { minX = Math.min(minX, x); maxX = Math.max(maxX, x + w); }
        });
        if (minX > maxX) { minX = 150; maxX = 250; }
        /* film sprocket holes */
        A.op(holesG, sh.holes * 0.85); A.show(holesG, sh.holes > 0.02);
        if (sh.holes > 0.02) {
          const fr = [P[1], P[0], P[3]];
          fr.forEach((r, i) => { const [x, y, w, h] = r; for (let k = 0; k < 8; k++) A.attr(holes[i * 8 + k], { x: f(x + w * (0.2 + (k % 4) * 0.2) - 4), y: f(k < 4 ? y + 5 : y + h - 11) }); });
        }
        /* snap ring on each morph hit */
        const T = mood === 'signature' ? s.mt % SIG : -1;
        let sq0 = 0; if (T >= 0) for (const h of HITS) if (T >= h && T < h + 0.24) sq0 = seg(T, h, h + 0.24);
        A.op(snap, sq0 > 0 ? Math.pow(1 - sq0, 2) * 0.9 * bl : 0);
        if (sq0 > 0) { const [x, y, w, h, rr] = P[0], e = 6 + sq0 * 22; A.attr(snap, { d: RR(x - e, y - e, w + 2 * e, h + 2 * e, rr + e * 0.6), 'stroke-width': 3 * (1 - sq0) + 0.5 }); }

        /* blade */
        const p0 = P[0], kb = Math.min(p0[2], p0[3]) / 220;
        A.show(bladeG, n > 0.02);
        if (n > 0.02) {
          bladeG.setAttribute('transform', `translate(${f(p0[0] + p0[2] + 2 * kb)} ${f(p0[1] - 2 * kb)}) scale(${(kb * (0.4 + 0.6 * n)).toFixed(3)})`);
          A.op(bladeG, clamp(n * 1.5));
          let open = pop * 30, out = pop * 7, gp = 0;
          const G = q => { if (q > 0 && q < 1 && (gp <= 0 || gp >= 1)) gp = q; };
          if (T >= 0) { const fl = seg(T, 3.2, 3.75); open += Math.sin(fl * PI) * 62 * (fl < 0.5 ? 1 : 1 + A.wobble(fl - 0.5, 20, 6) * 0.3); G(seg(T, 3.3, 3.8)); G(seg(T, 0.02, 0.26)); }
          if (mood === 'wink') G(seg(s.mt, 0.15, 0.6));
          if (mood === 'idle') G(seg((t + 2) % 6.5, 0.7, 1.2));
          if (mood === 'levelup') G(seg(s.mt % 2.2, 1.0, 1.5));
          if (mood === 'working') open += workPhase(s.mt) * 10;
          open += gr * (34 + Math.sin(t * 38) * 5);
          const glint = gp > 0 && gp < 1 ? Math.sin(gp * PI) : 0;
          A.tf(bladeR, out, -out, -open, 1, 1, -62, 6);
          A.attr(bshine, { transform: `translate(-35 35) rotate(-45) translate(${f(lerp(-55, 55, gp))} 0)` });
          A.op(bshine, glint * 0.8);
          A.tf(bglint, -20, 8, t * 90, glint * 1.4, glint * 1.4);
          A.op(bglint, glint);
        }

        /* face */
        const [fx0, fy0, fs] = sh.face;
        A.tf(face, fx0 + gx * 9, fy0 + gy * 7 + fc.fy, 0, fs, fs, 0, 0);
        const blink = mood === 'sleepy' || gr > 0.5 || pk < 1 ? 0 : L.blink;
        for (const E of eyes) {
          const sd = E.side, ex = fx0 + gx * 9 + fs * (sd * eyeX + gx * 6), ey = fy0 + gy * 7 + fc.fy + fs * (eyeY + gy * 6);
          A.tf(E.holder, sd * eyeX + gx * 6, eyeY + gy * 6, 0, fc.sx, fc.sy, 0, 0);
          let lt = clamp(fc.lt + (sd < 0 ? fc.asym : 0));
          const wk = sd > 0 ? clamp(fc.wink) : 0;
          lt = lerp(lt, 1, wk); lt = lt + (1 - lt) * blink;
          const happyShut = fc.hc > 0.5 || wk > 0.5;
          const shut = squeeze || lt > 0.92 || happyShut;
          A.show(E.open, !shut); A.show(E.closed, shut);
          if (shut) {
            const d = squeeze ? (sd < 0 ? 'M-10 -11L8 0L-10 11' : 'M10 -11L-8 0L10 11')
              : happyShut ? 'M-13 7Q0 -14 13 7' : 'M-12 0Q0 9 12 0';
            A.attr(E.closed, { d, transform: `scale(${(1 / fc.sx).toFixed(3)} ${(1 / fc.sy).toFixed(3)})` });
          } else {
            A.attr(E.hl, { transform: `translate(${f(gx * 2.5)} ${f(gy * 3)})` });
            const y0 = -EH - 3 + (2 * EH + 3) * lt, tl = fc.tilt * (lt > 0.02 || fc.tilt > 0 ? 1 : 0.5);
            const yl = y0 + tl * sd * 1.1, yr = y0 - tl * sd * 1.1, yc = y0 + fc.bend * 2;
            A.attr(E.lidT, { d: `M-18 -50H18V${f(yr)}Q0 ${f(yc)} -18 ${f(yl)}Z`, fill: bodyCol(P[0], ex, ey - fs * fc.sy * 14) });
            A.attr(E.lidL, { d: `M-18 ${f(yl)}Q0 ${f(yc)} 18 ${f(yr)}`, opacity: lt > 0.04 || Math.abs(tl) > 1.5 ? 0.85 : 0 });
            const yb = EH + 2 - (2 * EH) * clamp(fc.lb);
            A.attr(E.lidB, { d: `M-18 50H18V${f(yb)}Q0 ${f(yb - fc.lbb * 2)} -18 ${f(yb)}Z`, fill: bodyCol(P[0], ex, ey + fs * fc.sy * 18) });
          }
        }
        blush.forEach(e => A.op(e, fc.blush * 0.5));
        puff.forEach(e => A.op(e, fc.puff * 0.35));
        A.show(anger, gr > 0.01);
        if (gr > 0.01) { const ap = 1 + Math.sin(t * 14) * 0.12; A.tf(anger, 126 + sh.p[0][0] - 90, 146, 0, gr * ap, gr * ap); }

        /* mouth */
        const w = fc.mw, cm = (fc.cl + fc.cr) * 0.5, U = (fc.up * 2 - cm) * 0.5 / 0.75 + cm * 0.5 / 0.75 - cm * 0.25 / 0.75, D = (fc.lo * 2 - cm) * 0.5 / 0.75 + cm * 0.5 / 0.75 - cm * 0.25 / 0.75, kx = w * 0.62;
        const d = `M${f(-w)} ${f(fc.cl)}C${f(-kx)} ${f(U)} ${f(kx)} ${f(U)} ${f(w)} ${f(fc.cr)}C${f(kx)} ${f(D)} ${f(-kx)} ${f(D)} ${f(-w)} ${f(fc.cl)}Z`;
        A.attr(mouthG, { transform: `translate(${f(fc.mx)} ${mouthY}) rotate(${f(fc.mr)})` });
        A.attr(mouth, { d }); A.attr(mclip, { d });
        const openH = fc.lo - fc.up;
        A.show(mIn, openH > 4);
        if (openH > 4) {
          A.attr(tongue, { cy: f(fc.lo * 0.9 + 2), rx: f(w * 0.62), ry: f(Math.max(3, openH * 0.4)) }); A.op(tongue, fc.tg);
          A.attr(teeth, { y: f(fc.up * 0.9 - 30 + Math.min(6, openH * 0.22)) }); A.op(teeth, fc.th);
        }
        A.show(tOut, fc.to > 0.02);
        if (fc.to > 0.02) A.tf(tOut, w * 0.45, fc.cr * 0.5 + 1, -8, 1, fc.to, 0, 0);

        /* hands */
        for (let i = 0; i < 2; i++) {
          const h0 = b0.hands[i], h1 = b1.hands[i];
          const hx = lerp(h0[0], h1[0], bl), hy = lerp(h0[1], h1[1], bl), hr = lerp(h0[2], h1[2], bl), hs = lerp(h0[3], h1[3], bl);
          A.show(hands[i], hs > 0.02);
          if (hs > 0.02) A.tf(hands[i], hx, hy, hr, hs * (i ? -1 : 1), hs, 0, 0);
        }

        /* medal */
        A.show(medal, b.medal > 0.01);
        if (b.medal > 0.01) {
          const my = lerp(240, 62, b.medal), ms = clamp(b.medal * 1.25, 0, 1.4);
          A.tf(medal, 200, my, Math.sin(t * 2) * 3, ms, ms, 0, 0);
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
        const SPK = [[120, 60], [282, 52], [102, 150], [300, 140], [150, 22], [252, 112]];
        sparks.forEach((e, i) => {
          const k = Math.max(lv, cel), tw = Math.max(0, Math.sin(t * 4 + i * 1.9));
          A.show(e, k > 0.01 && tw > 0.02);
          if (k > 0.01) A.tf(e, SPK[i][0], SPK[i][1] + (cel > lv ? -30 : 0), t * 40, tw * k * (0.8 + (i % 3) * 0.25), tw * k * (0.8 + (i % 3) * 0.25));
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
          if (th > 0.01) { A.attr(e, { x: f([92, 74, 50][i] - sz / 2), y: f([104, 78, 46][i] - sz / 2 + Math.sin(t * 2 + i) * 2), width: f(sz * a), height: f(sz * a), rx: f(sz * a * 0.3) }); A.op(e, th * 0.92); }
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

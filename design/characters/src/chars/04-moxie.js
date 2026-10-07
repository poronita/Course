/* Moxie: a sleek signal-red cat whose tail is a pocket multi-tool. */
CAST.register({
  id: 'moxie', order: 4, name: 'Moxie',
  tagline: 'A sharp cat with a tool for a tail.',
  concept: 'Moxie is a sleek red cat with a cream muzzle and sharp teal eyes. Her tail ends in a steel tip. It opens like a pocket knife into five image tools. She is calm, quick and a little proud of it.',
  signature: 'The tail fans out into a blade, scissors, a lens, a crop corner and a film strip, like a peacock. She strikes a pose, then the tools snap back one by one with a click.',
  why: ['Cat ears plus a fan of tools is a shape nobody else owns.', 'The tail is the product: every tool in the app lives on it.', 'Cats act with ears, eyes and tail, so every mood reads at a glance.'],
  risks: ['A red cat can look like other cat mascots if the tail is folded.', 'Five small tools need care to stay crisp at icon size.'],
  voice: 'Pick a tool. I have five.',
  scores: { memorable: 5, stylish: 4, expressive: 5, small: 4, fit: 5 },
  palette: ['#E5322B', '#FFF3E4', '#2A2C33', '#C9D2DB', '#2EC4B6', '#F4BE3E'],
  bg: '#5b1c22',
  iconBg: '#FFF1E2',
  icon: { viewBox: '92 36 300 300' },

  build(g, A) {
    const { lerp, clamp, seg, ease } = A;
    const RED = '#E5322B', RED_D = '#A21C16', RED_DD = '#7E140F', CREAM = '#FFF4E6', GRA = '#2A2C33';
    const TAU = Math.PI * 2, rad = d => d * Math.PI / 180;

    /* ---------- gradients ---------- */
    A.grad('fur', [[0, '#FF5A47'], [0.45, RED], [1, '#B3211A']], { x1: 0.15, y1: 0, x2: 0.85, y2: 1 });
    A.grad('head', [[0, '#FF6A55'], [0.5, '#E8352D'], [1, '#B0201A']], { radial: true, cx: 0.4, cy: 0.32, r: 0.75 });
    A.grad('rim', [[0, '#ffffff', 0], [0.65, '#ffffff', 0], [1, '#FFB7A3', 0.95]], { x1: 0, y1: 0.2, x2: 1, y2: 0.6 });
    A.grad('cream', [[0, '#FFFBF4'], [1, '#EFDCC4']], { x1: 0, y1: 0, x2: 0.3, y2: 1 });
    A.grad('earIn', [[0, '#4C505A'], [1, '#202227']], { x1: 0.2, y1: 0, x2: 0.6, y2: 1 });
    A.grad('sclera', [[0, '#CFC3B2'], [0.45, '#FFFDF6'], [1, '#F3ECE0']]);
    A.grad('iris', [[0, '#C9FFF4'], [0.35, '#5FE0D0'], [0.75, '#1C9C93'], [1, '#0B4A50']], { radial: true, cx: 0.5, cy: 0.62, r: 0.6 });
    A.grad('irisGold', [[0, '#FFD56A', 1], [0.55, '#F4A93A', 0.85], [1, '#F4A93A', 0]], { radial: true });
    A.grad('lid', [[0, '#C9281F'], [1, '#E5352C']]);
    A.grad('nose', [[0, '#4D4650'], [1, '#1E1C22']]);
    A.grad('steel', [[0, '#FBFDFF'], [0.42, '#D5DDE5'], [0.58, '#9AA6B2'], [1, '#5A6572']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('steelV', [[0, '#F4F7FA'], [1, '#7E8996']], { x1: 0, y1: 0, x2: 0.4, y2: 1 });
    A.grad('glass', [[0, '#E9FFFB', 0.9], [0.6, '#7FE6DA', 0.45], [1, '#2EC4B6', 0.55]], { radial: true, cx: 0.35, cy: 0.35, r: 0.7 });
    A.grad('gold', [[0, '#FFF1B8'], [0.35, '#F8CB4E'], [0.75, '#E09F22'], [1, '#A86A0E']], { x1: 0.1, y1: 0, x2: 0.8, y2: 1 });
    A.grad('gold2', [[0, '#D99A1E'], [1, '#FFE08A']], { x1: 0.2, y1: 0, x2: 0.7, y2: 1 });
    A.grad('shadow', [[0, '#000', 0.5], [1, '#000', 0]], { radial: true });
    A.grad('halo', [[0, '#FFD9B8', 0.55], [0.5, '#FF7A5C', 0.18], [1, '#FF7A5C', 0]], { radial: true });
    A.grad('sky', [[0, '#7FE6DA'], [1, '#E8FFF9']]);
    A.grad('film', [[0, '#3A3D45'], [1, '#1D1F24']], { x1: 0, y1: 0, x2: 1, y2: 0 });

    /* ---------- path helpers ---------- */
    const sym = (y0, segs) => {
      let d = `M0 ${y0}`;
      segs.forEach(s => { d += ` C${s[0]} ${s[1]} ${s[2]} ${s[3]} ${s[4]} ${s[5]}`; });
      for (let k = segs.length - 1; k >= 0; k--) {
        const s = segs[k], p = k ? [segs[k - 1][4], segs[k - 1][5]] : [0, y0];
        d += ` C${-s[2]} ${s[3]} ${-s[0]} ${s[1]} ${-p[0]} ${p[1]}`;
      }
      return d + ' Z';
    };
    const star = r => `M0 ${-r} Q0 0 ${r} 0 Q0 0 0 ${r} Q0 0 ${-r} 0 Q0 0 0 ${-r} Z`;
    const f = n => +n.toFixed(2);

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 212, cy: 343, rx: 112, ry: 12, fill: A.url('shadow') }, g);
    const halo = A.el('circle', { cx: 300, cy: 180, r: 120, fill: A.url('halo') }, g);
    const root = A.el('g', {}, g);
    const tailG = A.el('g', {}, root);
    const bodyG = A.el('g', {}, root);
    const headO = A.el('g', {}, root);
    const medalG = A.el('g', {}, root);
    const armsG = A.el('g', {}, root);
    const fxG = A.el('g', {}, g);
    if (A.small) A.show(shadow, false);

    /* ---------- tail ---------- */
    const tailShade = A.el('path', { fill: 'none', stroke: RED_DD, 'stroke-width': 21, 'stroke-linecap': 'round' }, tailG);
    const tailMain = A.el('path', { fill: 'none', stroke: RED, 'stroke-width': 16, 'stroke-linecap': 'round' }, tailG);
    const tailHi = A.el('path', { fill: 'none', stroke: '#FF7B66', 'stroke-width': 4, 'stroke-linecap': 'round', opacity: 0.7 }, tailG);

    /* the photo card the blade cuts (working mood) */
    const card = A.el('g', {}, tailG);
    A.el('rect', { x: -34, y: -40, width: 68, height: 80, rx: 4, fill: '#FFF8EE', stroke: '#E6D6C0', 'stroke-width': 1.5 }, card);
    A.el('rect', { x: -28, y: -34, width: 56, height: 56, rx: 2, fill: A.url('sky') }, card);
    A.el('circle', { cx: 12, cy: -18, r: 7, fill: '#F4BE3E' }, card);
    A.el('path', { d: 'M-28 22 L-10 -6 L4 10 L14 0 L28 16 L28 22 Z', fill: RED }, card);
    A.el('path', { d: 'M-28 22 L-10 -6 L-2 6 L-14 22 Z', fill: RED_D }, card);
    const slit = A.el('path', { d: 'M0 -40 L0 -40', stroke: GRA, 'stroke-width': 2.6, 'stroke-linecap': 'round' }, card);
    const chips = [0, 1, 2, 3].map(k => A.el('path', { d: 'M-2.5 -2 L3 -1 L0 3 Z', fill: k % 2 ? '#FFF8EE' : '#7FE6DA' }, card));

    /* tools: drawn pointing up from the pivot at (0,0) */
    const tools = [];
    const mkTool = (kind) => {
      const tg = A.el('g', {}, tailG);
      const inner = A.el('g', {}, tg);
      const o = { g: tg, inner, kind };
      A.el('rect', { x: -4, y: -18, width: 8, height: 18, rx: 2, fill: A.url('steelV') }, inner);
      if (kind === 'blade') {
        A.el('path', { d: 'M-6 -14 L-6.5 -60 Q-5 -76 3 -82 Q9 -60 9 -36 Q9 -20 6 -14 Z', fill: A.url('steel'), stroke: '#4F5965', 'stroke-width': 1.2 }, inner);
        A.el('path', { d: 'M5 -18 Q7 -40 4 -66', stroke: '#ffffff', 'stroke-width': 1.4, fill: 'none', opacity: 0.75 }, inner);
        A.el('path', { d: 'M-6 -46 Q-1 -44 -6 -40', stroke: '#5A6572', 'stroke-width': 1.4, fill: 'none' }, inner);
      } else if (kind === 'scissors') {
        const bA = A.el('g', {}, inner), bB = A.el('g', {}, inner);
        A.el('path', { d: 'M-1 -16 L-4.5 -42 L-6 -72 Q-3 -74 -1.5 -70 L2.5 -42 L3 -16 Z', fill: A.url('steel'), stroke: '#4F5965', 'stroke-width': 1 }, bA);
        A.el('path', { d: 'M1 -16 L4.5 -42 L6 -72 Q3 -74 1.5 -70 L-2.5 -42 L-3 -16 Z', fill: A.url('steel'), stroke: '#4F5965', 'stroke-width': 1 }, bB);
        A.el('circle', { cx: 0, cy: -42, r: 3.2, fill: '#F4BE3E', stroke: '#8A5A10', 'stroke-width': 1 }, inner);
        o.bA = bA; o.bB = bB;
      } else if (kind === 'lens') {
        A.el('rect', { x: -3, y: -48, width: 6, height: 34, rx: 2, fill: A.url('steel') }, inner);
        A.el('circle', { cx: 0, cy: -63, r: 15, fill: A.url('glass'), stroke: A.url('steelV'), 'stroke-width': 5 }, inner);
        A.el('circle', { cx: 0, cy: -63, r: 17.4, fill: 'none', stroke: '#4F5965', 'stroke-width': 1 }, inner);
        A.el('path', { d: 'M-8 -68 Q-6 -74 0 -75', stroke: '#fff', 'stroke-width': 2.4, fill: 'none', 'stroke-linecap': 'round' }, inner);
      } else if (kind === 'crop') {
        A.el('rect', { x: -3, y: -46, width: 6, height: 32, rx: 2, fill: A.url('steel') }, inner);
        A.el('path', { d: 'M-15 -42 L-15 -72 L13 -72', fill: 'none', stroke: '#E9EEF3', 'stroke-width': 7, 'stroke-linejoin': 'miter' }, inner);
        A.el('path', { d: 'M-15 -42 L-15 -72 L13 -72', fill: 'none', stroke: '#5A6572', 'stroke-width': 1.2, transform: 'translate(3.5 3.5)' }, inner);
        A.el('path', { d: 'M15 -66 L15 -46 L-7 -46', fill: 'none', stroke: RED, 'stroke-width': 5, 'stroke-linejoin': 'miter' }, inner);
      } else if (kind === 'film') {
        A.el('rect', { x: -3, y: -34, width: 6, height: 20, rx: 2, fill: A.url('steel') }, inner);
        A.el('rect', { x: -11, y: -80, width: 22, height: 50, rx: 3, fill: A.url('film'), stroke: '#9AA6B2', 'stroke-width': 1 }, inner);
        for (let k = 0; k < 3; k++) A.el('rect', { x: -5.5, y: -76 + k * 15.5, width: 11, height: 12, rx: 1.5, fill: k === 1 ? '#FF6B57' : '#E5322B', opacity: 0.95 }, inner);
        for (let k = 0; k < 6; k++) {
          A.el('rect', { x: -9.6, y: -78 + k * 8, width: 2.4, height: 3.6, rx: 0.6, fill: CREAM }, inner);
          A.el('rect', { x: 7.2, y: -78 + k * 8, width: 2.4, height: 3.6, rx: 0.6, fill: CREAM }, inner);
        }
      }
      const glint = A.el('path', { d: star(7), fill: '#fff', opacity: 0 }, inner);
      o.glint = glint;
      tools.push(o);
      return o;
    };
    // index: 0 lens, 1 scissors, 2 crop, 3 film, 4 blade (drawn last, it is the folded tip)
    ['lens', 'scissors', 'crop', 'film', 'blade'].forEach(mkTool);
    const FAN = [-56, -24, 40, 72, 8];
    const TIPY = [-78, -72, -74, -80, -82];

    const hub = A.el('g', {}, tailG);
    A.el('rect', { x: -12, y: -3, width: 24, height: 13, rx: 5, fill: A.url('steelV'), stroke: '#4F5965', 'stroke-width': 1.2 }, hub);
    A.el('rect', { x: -12, y: 6, width: 24, height: 2, fill: '#5A6572', opacity: 0.6 }, hub);
    A.el('circle', { cx: 0, cy: 0, r: 5.5, fill: A.url('gold'), stroke: '#8A5A10', 'stroke-width': 1 }, hub);
    A.el('circle', { cx: -1.4, cy: -1.4, r: 1.5, fill: '#FFF6D0' }, hub);

    const clickG = A.el('g', {}, tailG);
    const clickStar = A.el('path', { d: star(13), fill: '#FFF6D0' }, clickG);
    const clickRing = A.el('circle', { r: 10, fill: 'none', stroke: '#FFF6D0', 'stroke-width': 2 }, clickG);

    /* ---------- body ---------- */
    A.el('ellipse', { cx: 236, cy: 312, rx: 38, ry: 34, fill: '#C3251D' }, bodyG);
    A.el('ellipse', { cx: 124, cy: 318, rx: 26, ry: 26, fill: '#C9271F' }, bodyG);
    A.el('path', { d: 'M146 206 C122 236 108 284 112 326 C114 342 130 345 150 345 L226 345 C256 345 268 332 264 300 C258 258 240 226 214 206 Z', fill: A.url('fur') }, bodyG);
    A.el('path', { d: 'M150 220 C128 250 118 290 120 326', stroke: '#FF8A72', 'stroke-width': 3, fill: 'none', opacity: 0.45, 'stroke-linecap': 'round' }, bodyG);
    A.el('path', { d: 'M178 214 C204 216 214 246 208 278 C204 298 194 306 186 318 L182 310 L178 322 L174 310 L170 318 C162 306 152 298 148 278 C142 246 152 216 178 214 Z', fill: A.url('cream') }, bodyG);
    A.el('ellipse', { cx: 254, cy: 340, rx: 18, ry: 7.5, fill: A.url('cream') }, bodyG);
    A.el('ellipse', { cx: 112, cy: 341, rx: 15, ry: 6.5, fill: A.url('cream') }, bodyG);
    A.el('ellipse', { cx: 180, cy: 218, rx: 54, ry: 12, fill: RED_DD, opacity: 0.35 }, bodyG);

    /* ---------- head ---------- */
    const head = A.el('g', {}, headO);
    const headIn = A.el('g', { transform: 'translate(178 156)' }, head);
    const mkEar = side => {
      const o = A.el('g', {}, headIn), i = A.el('g', { transform: side > 0 ? 'scale(-1 1)' : '' }, o);
      A.el('path', { d: 'M-78 -16 C-86 -52 -84 -92 -72 -116 C-56 -100 -36 -78 -22 -56 Z', fill: A.url('head'), stroke: RED_D, 'stroke-width': 1.2 }, i);
      A.el('path', { d: 'M-69 -30 C-74 -56 -74 -84 -68 -102 C-57 -88 -45 -72 -34 -54 Z', fill: A.url('earIn') }, i);
      A.el('path', { d: 'M-62 -34 Q-64 -54 -60 -70 M-54 -36 Q-54 -50 -50 -60', stroke: CREAM, 'stroke-width': 1.6, fill: 'none', opacity: 0.8, 'stroke-linecap': 'round' }, i);
      return o;
    };
    const earL = mkEar(-1), earR = mkEar(1);
    const headD = sym(-60, [[40, -60, 66, -46, 72, -16], [75, -2, 80, 12, 94, 22], [84, 25, 82, 28, 88, 38], [66, 58, 32, 67, 0, 67]]);
    const hClip = A.el('clipPath', { id: A.id('hclip') }, A.defs);
    A.el('path', { d: headD }, hClip);
    A.el('path', { d: headD, fill: A.url('head') }, headIn);
    const hInside = A.el('g', { 'clip-path': A.url('hclip') }, headIn);
    const face = A.el('g', {}, hInside);
    A.el('path', { d: sym(-26, [[5, -15, 7, -1, 16, 8], [28, 12, 48, 14, 62, 28], [74, 34, 82, 30, 88, 38], [66, 58, 32, 67, 0, 67]]), fill: A.url('cream') }, face);
    A.el('path', { d: 'M-8 -52 Q-6 -40 -4 -34 M0 -56 L0 -36 M8 -52 Q6 -40 4 -34', stroke: '#B8231C', 'stroke-width': 3.2, fill: 'none', 'stroke-linecap': 'round', opacity: 0.8 }, face);
    A.el('path', { d: headD, fill: 'none', stroke: A.url('rim'), 'stroke-width': 7 }, hInside);

    /* eyes */
    const EW = 24, EH = 16;
    const almond = `M${-EW} -1 C${-EW * 0.5} ${-EH * 1.33} ${EW * 0.45} ${-EH * 1.33} ${EW} 2 C${EW * 0.45} ${EH * 1.33} ${-EW * 0.5} ${EH * 1.33} ${-EW} -1 Z`;
    const eClip = A.el('clipPath', { id: A.id('eclip') }, A.defs);
    A.el('path', { d: almond }, eClip);
    const mkEye = side => {
      const o = A.el('g', {}, face);
      const m = A.el('g', { transform: `scale(${side} 1) rotate(9)` }, o);
      const sc = A.el('g', {}, m);
      const cl = A.el('g', { 'clip-path': A.url('eclip') }, sc);
      A.el('path', { d: almond, fill: A.url('sclera') }, cl);
      const iris = A.el('g', {}, cl);
      A.el('circle', { r: 14.5, fill: A.url('iris') }, iris);
      A.el('circle', { r: 9.5, fill: A.url('irisGold') }, iris);
      const fib = [];
      for (let k = 0; k < 10; k++) { const a = k * TAU / 10; fib.push(`M${f(Math.cos(a) * 6)} ${f(Math.sin(a) * 6)} L${f(Math.cos(a) * 12.5)} ${f(Math.sin(a) * 12.5)}`); }
      A.el('path', { d: fib.join(' '), stroke: '#0B4A50', 'stroke-width': 0.8, opacity: 0.35 }, iris);
      A.el('circle', { r: 14.5, fill: 'none', stroke: '#083A40', 'stroke-width': 2 }, iris);
      const pupil = A.el('ellipse', { rx: 4, ry: 11.5, fill: '#0E0D12' }, iris);
      const hl = A.el('g', {}, cl);
      A.el('ellipse', { cx: 5, cy: -6, rx: 4.2, ry: 3.4, fill: '#fff' }, hl);
      A.el('circle', { cx: -6, cy: 6, r: 1.8, fill: '#fff', opacity: 0.85 }, hl);
      A.el('path', { d: `M${-EW} ${-EH} L${EW} ${-EH} L${EW} -4 Q0 -10 ${-EW} -4 Z`, fill: '#3A0A08', opacity: 0.18 }, cl);
      const lidU = A.el('path', { fill: A.url('lid') }, cl);
      const lidD = A.el('path', { fill: '#D22D25' }, cl);
      const lash = A.el('path', { fill: 'none', stroke: GRA, 'stroke-width': 3.4, 'stroke-linecap': 'round' }, m);
      const lowLn = A.el('path', { fill: 'none', stroke: GRA, 'stroke-width': 1.3, opacity: 0.45 }, m);
      A.el('path', { d: `M${-EW + 5} -4.5 L${-EW - 9} -9.5 L${-EW + 3} 1.5 Z`, fill: GRA }, m);
      return { o, sc, iris, pupil, hl, lidU, lidD, lash, lowLn, side };
    };
    const eyeL = mkEye(1), eyeR = mkEye(-1);
    const eyeLX = -36, eyeRX = 36, eyeY = -4;
    const setEye = (E, o, low, cls, pupil, gx, gy, sc) => {
      const c = lerp(EH * 0.3, -EH * 0.6, cls);
      const oo = clamp(o, 0, 1);
      const up = lerp(c, -EH * 1.02, oo);
      const lowOpen = lerp(EH * 1.02, c, clamp(low));
      const lo = lerp(c, lowOpen, oo);
      const k = 1.33;
      const upE = `M${-EW} -1 C${-EW * 0.5} ${f(up * k)} ${EW * 0.45} ${f(up * k)} ${EW} 2`;
      const loE = `M${-EW} -1 C${-EW * 0.5} ${f(lo * k)} ${EW * 0.45} ${f(lo * k)} ${EW} 2`;
      A.attr(E.lidU, { d: `M${-EW - 8} ${-EH - 16} L${EW + 8} ${-EH - 16} L${EW + 8} 2 L${EW} 2 C${EW * 0.45} ${f(up * k)} ${-EW * 0.5} ${f(up * k)} ${-EW} -1 L${-EW - 8} -1 Z` });
      A.attr(E.lidD, { d: `M${-EW - 8} -1 L${-EW} -1 C${-EW * 0.5} ${f(lo * k)} ${EW * 0.45} ${f(lo * k)} ${EW} 2 L${EW + 8} 2 L${EW + 8} ${EH + 16} L${-EW - 8} ${EH + 16} Z` });
      A.attr(E.lash, { d: upE });
      A.attr(E.lowLn, { d: loE });
      A.op(E.lowLn, 0.45 * oo);
      const ix = gx * E.side;
      A.tf(E.iris, ix * 7, gy * 5 + 1);
      A.tf(E.hl, ix * 3, gy * 2);
      A.attr(E.pupil, { rx: lerp(2.6, 9.5, clamp(pupil)), ry: lerp(11.5, 10.5, clamp(pupil)) });
      A.tf(E.sc, 0, 0, 0, sc, sc, 0, 0);
    };

    /* brows (darker fur marks) */
    const browL = A.el('path', { d: 'M-15 3 Q-2 -6 15 -1 Q0 -1 -15 3 Z', fill: RED_DD, opacity: 0.85 }, face);
    const browR = A.el('path', { d: 'M15 3 Q2 -6 -15 -1 Q0 -1 15 3 Z', fill: RED_DD, opacity: 0.85 }, face);

    /* nose, mouth, whisker pads */
    const mClip = A.el('clipPath', { id: A.id('mclip') }, A.defs);
    const mClipP = A.el('path', { d: 'M0 0' }, mClip);
    const mouthG = A.el('g', {}, face);
    const mouthFill = A.el('path', { fill: '#3B1216' }, mouthG);
    const mouthIn = A.el('g', { 'clip-path': A.url('mclip') }, mouthG);
    const tongue = A.el('ellipse', { cx: 0, cy: 48, rx: 10, ry: 8, fill: '#F07A86' }, mouthIn);
    const fangs = A.el('path', { fill: '#fff', d: 'M-8 30 L-5.5 36 L-3.5 30 Z M8 30 L5.5 36 L3.5 30 Z' }, mouthIn);
    const tongueTip = A.el('path', { d: 'M0 0 Q-5 0 -4 6 Q0 10 4 6 Q5 0 0 0 Z', fill: '#F07A86', stroke: '#C4525E', 'stroke-width': 0.8 }, face);
    const mouthLine = A.el('path', { fill: 'none', stroke: GRA, 'stroke-width': 2.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, face);
    A.el('path', { d: 'M0 19 L0 27', stroke: GRA, 'stroke-width': 2.2, 'stroke-linecap': 'round' }, face);
    A.el('path', { d: 'M-8 11 Q0 8 8 11 Q8 16 0 21 Q-8 16 -8 11 Z', fill: A.url('nose') }, face);
    A.el('ellipse', { cx: -2.5, cy: 12, rx: 2.6, ry: 1.3, fill: '#fff', opacity: 0.55 }, face);
    [[-17, 25], [-23, 21], [-22, 29], [17, 25], [23, 21], [22, 29]].forEach(p => A.el('circle', { cx: p[0], cy: p[1], r: 1.3, fill: '#8E7A68', opacity: 0.55 }, face));

    /* whiskers sit outside the head clip so they cross the outline */
    const whG = A.el('g', {}, headIn);
    const mkWh = side => {
      const o = A.el('g', {}, whG);
      A.el('path', { d: `M${side * 22} 22 Q${side * 58} 10 ${side * 104} 6 M${side * 22} 26 Q${side * 60} 24 ${side * 108} 28 M${side * 22} 30 Q${side * 56} 36 ${side * 98} 48`, stroke: '#FFF8EE', 'stroke-width': 1.7, fill: 'none', 'stroke-linecap': 'round', opacity: 0.92 }, o);
      return o;
    };
    const whL = mkWh(-1), whR = mkWh(1);

    /* ---------- medal ---------- */
    const medalIn = A.el('g', {}, medalG);
    A.el('path', { d: 'M-16 -18 L-30 -62 L-14 -64 L2 -22 Z', fill: RED, stroke: RED_DD, 'stroke-width': 1 }, medalIn);
    A.el('path', { d: 'M16 -18 L30 -62 L14 -64 L-2 -22 Z', fill: '#C9281F', stroke: RED_DD, 'stroke-width': 1 }, medalIn);
    A.el('path', { d: 'M-26 -60 L-12 -22 M26 -60 L12 -22', stroke: '#F4BE3E', 'stroke-width': 2 }, medalIn);
    A.el('circle', { r: 30, fill: A.url('gold'), stroke: '#8A5A10', 'stroke-width': 1.4 }, medalIn);
    A.el('circle', { r: 23, fill: A.url('gold2'), stroke: '#FFF1B8', 'stroke-width': 1.5 }, medalIn);
    A.el('text', { x: 0, y: -5, 'text-anchor': 'middle', 'font-family': 'Arial Black, Arial, Helvetica, sans-serif', 'font-weight': 900, 'font-size': 10, 'letter-spacing': 1, fill: '#6B4108', text: 'LV' }, medalIn);
    A.el('text', { x: 0, y: 17, 'text-anchor': 'middle', 'font-family': 'Arial Black, Arial, Helvetica, sans-serif', 'font-weight': 900, 'font-size': 24, fill: '#6B4108', text: '8' }, medalIn);
    const shClip = A.el('clipPath', { id: A.id('shclip') }, A.defs);
    A.el('circle', { r: 30 }, shClip);
    const shineG = A.el('g', { 'clip-path': A.url('shclip') }, medalIn);
    const shine = A.el('rect', { x: -8, y: -40, width: 12, height: 80, fill: '#fff', opacity: 0.7, transform: 'skewX(-20)' }, shineG);
    const medalSp = [0, 1, 2].map(() => A.el('path', { d: star(7), fill: '#FFF1B8' }, medalG));

    /* ---------- arms ---------- */
    const mkArm = () => {
      const o = A.el('g', {}, armsG);
      const sh = A.el('path', { fill: 'none', stroke: '#9B1B15', 'stroke-width': 23, 'stroke-linecap': 'round' }, o);
      const mn = A.el('path', { fill: 'none', stroke: '#DB2F27', 'stroke-width': 18, 'stroke-linecap': 'round' }, o);
      const hi = A.el('path', { fill: 'none', stroke: '#FF7A64', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.55 }, o);
      const paw = A.el('g', {}, o);
      A.el('ellipse', { cx: 0, cy: 0, rx: 14, ry: 10.5, fill: A.url('cream'), stroke: '#D9C2A6', 'stroke-width': 1 }, paw);
      const toes = A.el('path', { d: 'M-4.5 3 L-4.5 9 M4.5 3 L4.5 9', stroke: '#D2BCA0', 'stroke-width': 1.2 }, paw);
      const pads = A.el('g', {}, paw);
      A.el('ellipse', { cx: 0, cy: 2.5, rx: 5.2, ry: 4.2, fill: GRA }, pads);
      [[-7, -4], [-2.4, -7], [2.4, -7], [7, -4]].forEach(p => A.el('circle', { cx: p[0], cy: p[1], r: 2, fill: GRA }, pads));
      return { sh, mn, hi, paw, toes, pads };
    };
    const armL = mkArm(), armR = mkArm();
    const SHL = [160, 248], SHR = [198, 248];
    const setArm = (R, S, px, py, bend, pad) => {
      const mx = (S[0] + px) / 2, my = (S[1] + py) / 2, dx = px - S[0], dy = py - S[1], L = Math.hypot(dx, dy) || 1;
      const cx = mx - dy / L * bend, cy = my + dx / L * bend;
      const d = `M${f(S[0])} ${f(S[1])} Q${f(cx)} ${f(cy)} ${f(px)} ${f(py)}`;
      A.attr(R.sh, { d }); A.attr(R.mn, { d });
      A.attr(R.hi, { d: `M${f(S[0] - 5)} ${f(S[1] + 4)} Q${f(cx - 5)} ${f(cy)} ${f(px - 5)} ${f(py - 4)}` });
      const ang = Math.atan2(py - cy, px - cx) * 180 / Math.PI - 90;
      A.tf(R.paw, px, py, pad > 0.5 ? ang + 180 : ang, 1, 1, 0, 0);
      A.op(R.pads, pad); A.op(R.toes, 1 - pad);
    };

    /* ---------- fx ---------- */
    const CONF = ['#E5322B', '#FFF4E6', '#F4BE3E', '#2EC4B6', '#FF8A72'];
    const rnd = A.rng(44);
    const conf = Array.from({ length: 26 }, (_, k) => ({ el: A.el('rect', { x: -3.5, y: -2, width: 7, height: 4, rx: 1, fill: CONF[k % 5] }, fxG), x: 20 + rnd() * 360, ph: rnd(), sp: 0.7 + rnd() * 0.6, rs: (rnd() - 0.5) * 900 }));
    const sparks = Array.from({ length: 5 }, (_, k) => A.el('path', { d: star(k % 2 ? 7 : 11), fill: k % 2 ? '#FFF4E6' : '#F4BE3E' }, fxG));
    const zs = [0, 1, 2].map(k => A.el('text', { 'font-family': 'Georgia, serif', 'font-style': 'italic', 'font-weight': 700, 'font-size': 18 + k * 6, fill: '#FFF4E6', text: 'z' }, fxG));
    const dots = [0, 1, 2].map(k => A.el('circle', { r: 4 + k * 2.5, fill: '#FFF4E6' }, fxG));
    const puff = A.el('path', { d: 'M0 0 Q-6 -10 2 -16 M8 -2 Q10 -12 18 -14 M-6 6 Q-16 2 -18 -6', stroke: '#FFF4E6', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, fxG);
    const winkSp = A.el('path', { d: star(9), fill: '#FFF1B8' }, fxG);

    /* ---------- poses ---------- */
    const BASE = {
      y: 0, sx: 1, sy: 1, rot: 0, hx: 0, hy: 0, hr: 0, earL: 0, earR: 0,
      lidL: 1, lidR: 1, lowL: 0.08, lowR: 0.08, clsL: 0.25, clsR: 0.25, pupil: 0.4, eyeS: 1, gx: 0, gy: 0, gw: 0,
      browY: 0, browR: 0, browA: 0, sm: 0.3, op: 0, wd: 11, mx: 0, tongue: 0, tip: 0, whisk: 0,
      pLx: 152, pLy: 334, pRx: 206, pRy: 334, bL: 6, bR: -6, padL: 0, padR: 0,
      hubX: 304, hubY: 188, hubA: 18, fan: [0, 0, 0, 0, 0], spread: 1, fanRot: 0, tsc: 1,
      tAng: [0, 0, 0, 0, 0], tW: [0, 0, 0, 0, 0], slide: [0, 0, 0, 0, 0], snip: 0, halo: 0, card: 0, medal: 0,
    };
    const pose = (m, mt, t) => {
      const p = Object.assign({}, BASE, { fan: BASE.fan.slice(), tAng: BASE.tAng.slice(), tW: BASE.tW.slice(), slide: BASE.slide.slice() });
      if (A.small) { p.fan = [0.8, 0.8, 0.8, 0.8, 0.8]; }
      if (m === 'happy') {
        const b = Math.abs(Math.sin(mt * 5.2));
        Object.assign(p, { y: b * 9, sy: 1 + b * 0.02, sx: 1 - b * 0.01, hr: Math.sin(mt * 2.6) * 4, lowL: 0.55, lowR: 0.55, clsL: 1, clsR: 1, pupil: 0.65, sm: 1, op: 0.35, wd: 13, browY: -3, earL: -4, earR: -4, whisk: -6, hubA: 18 + Math.sin(mt * 5) * 12, hubX: 304 + Math.sin(mt * 5) * 6 });
      } else if (m === 'wink') {
        const e = ease.outBack(seg(mt, 0, 0.35));
        Object.assign(p, { hr: -7 * e, hx: -2, lidR: 1 - e, clsR: 1, lowR: 0.4 * e, lowL: 0.25, pupil: 0.55, sm: 0.8, op: 0.12, mx: 4, wd: 12, browA: -6 * e, browY: -2, earR: 8 * e, whisk: -4, hubA: 30 * e + 10, gx: 0.15, gw: 0.3 });
      } else if (m === 'surprised') {
        const j = ease.outBack(seg(mt, 0, 0.3)), land = seg(mt, 0.3, 0.6);
        Object.assign(p, { y: 22 * Math.sin(Math.min(1, mt / 0.6) * Math.PI), rot: -5 * j, hx: -6 * j, hr: -5 * j, sy: 1 + 0.06 * j - 0.05 * Math.sin(land * Math.PI), lidL: 1.2, lidR: 1.2, lowL: 0, lowR: 0, eyeS: 1.13, pupil: 1, browY: -12, browR: 10, sm: 0, op: 0.75, wd: 6, earL: -10, earR: -10, whisk: -14, pLx: 142, pLy: 300, pRx: 216, pRy: 300, bL: 14, bR: -14, padL: 0, padR: 0 });
        const pop = Math.min(1, ease.outBack(seg(mt, 0.02, 0.28)));
        p.fan = [pop, pop, pop, pop, pop]; p.spread = 0.85; p.tsc = 0.9; p.hubY = 176;
      } else if (m === 'thinking') {
        const tap = Math.sin(mt * 6) * 0.5 + 0.5;
        Object.assign(p, { hr: 7, hx: 3, gx: -0.8, gy: -0.85, gw: 1, lidL: 0.88, lidR: 0.88, lowL: 0.18, lowR: 0.18, browA: 10, browY: -2, sm: -0.15, mx: -5, wd: 8, earL: -6, earR: 14, pRx: 190, pRy: 218, bR: -18, padR: 1, whisk: 4 });
        p.fan[0] = 1; p.tW[0] = 1; p.tAng[0] = -28 + tap * 6; p.hubX = 300; p.hubY = 182 + tap * 3; p.hubA = 6;
      } else if (m === 'working') {
        const saw = Math.sin(mt * TAU * 2.1);
        Object.assign(p, { hr: 6, hx: 6, gx: 0.85, gy: 0.75, gw: 1, lidL: 0.68, lidR: 0.68, lowL: 0.25, lowR: 0.25, pupil: 0.15, browR: -9, browY: 3, sm: 0, wd: 8, mx: 7, tip: 1, earL: -5, earR: -8, card: 1, rot: 2 });
        p.fan[4] = 1; p.tW[4] = 1; p.tAng[4] = 182 + saw * 3; p.slide[4] = -10 + saw * 8;
        p.hubX = 318 + saw * 2; p.hubY = 212 + saw * 3; p.hubA = 40;
      } else if (m === 'celebrate') {
        const ph = (mt % 0.9) / 0.9, air = Math.sin(ph * Math.PI);
        const crouch = ph < 0.12 ? Math.sin(ph / 0.12 * Math.PI) : 0;
        Object.assign(p, { y: air * 42, sy: 1 + air * 0.07 - crouch * 0.1, sx: 1 - air * 0.04 + crouch * 0.08, hr: Math.sin(mt * 7) * 4, lowL: 0.6, lowR: 0.6, clsL: 1, clsR: 1, sm: 1, op: 0.85, wd: 15, browY: -6, earL: -8, earR: -8, whisk: -10, pLx: 116, pLy: 176 - air * 6, pRx: 242, pRy: 176 - air * 6, bL: 18, bR: -18, padL: 1, padR: 1, halo: 0.6 });
        const fl = Math.sin(mt * 9);
        p.fan = [1, 1, 1, 1, 1]; p.fanRot = fl * 6; p.spread = 1.05; p.hubY = 182 - air * 6; p.hubA = 14;
      } else if (m === 'sleepy') {
        const sw = Math.sin(mt * 1.3), nod = Math.max(0, Math.sin(mt * 0.9));
        Object.assign(p, { hr: 8 + sw * 4, hy: 6 + nod * 5, hx: 3, rot: sw * 1.5, sy: 0.98, lidL: 0.12 + (1 - nod) * 0.12, lidR: 0.08 + (1 - nod) * 0.1, clsL: 0, clsR: 0, lowL: 0.1, lowR: 0.1, pupil: 0.5, browY: 4, browR: 8, sm: 0.05, wd: 7, op: 0.08, earL: 22, earR: 26, whisk: 10 });
        p.hubX = 312; p.hubY = 250; p.hubA = 70 + sw * 6;
      } else if (m === 'levelup') {
        const up = ease.outBack(seg(mt, 0, 0.5));
        Object.assign(p, { hr: -5 * up, hy: -3 * up, rot: -2 * up, sy: 1 + 0.02 * up, lidL: 0.82, lidR: 0.82, lowL: 0.35, lowR: 0.35, clsL: 0.8, clsR: 0.8, pupil: 0.6, sm: 0.95, op: 0.3, wd: 13, browY: -4, browA: -3, earL: -6, earR: -6, whisk: -8, medal: up, halo: 0.35 * up });
        p.pLx = lerp(152, 98, up); p.pLy = lerp(334, 196, up); p.bL = lerp(6, 26, up); p.padL = 0;
        p.pRx = 200; p.pRy = 290; p.bR = -14;
        const fanUp = ease.out(seg(mt, 0.2, 0.7)) * 0.75;
        p.fan = [fanUp, fanUp, fanUp, fanUp, fanUp]; p.spread = 0.9; p.hubY = 180;
      } else if (m === 'signature') {
        const T = mt % 3.8;
        const ant = seg(T, 0, 0.35), go = ease.out(seg(T, 0.35, 0.6)), rel = ease.inOut(seg(T, 2.9, 3.4));
        const pose = go * (1 - rel);
        p.sy = 1 - 0.07 * Math.sin(ant * Math.PI) * (1 - go) + 0.03 * pose;
        p.sx = 1 + 0.05 * Math.sin(ant * Math.PI) * (1 - go) - 0.01 * pose;
        p.y = 10 * Math.sin(seg(T, 0.35, 0.75) * Math.PI);
        p.rot = -4 * pose; p.hr = lerp(4 * ant, -8, pose); p.hy = -2 * pose; p.hx = -3 * pose;
        p.lidL = lerp(0.7, 0.78, pose); p.lidR = lerp(0.7, 0.78, pose); p.lowL = 0.32; p.lowR = 0.32; p.clsL = 0.6; p.clsR = 0.6; p.pupil = 0.35;
        p.gx = 0.3; p.gy = 0.05; p.gw = 0.6 * pose; p.browA = -4 * pose; p.browY = 2 * (1 - pose);
        p.sm = lerp(0.35, 0.9, pose); p.mx = 4 * pose; p.wd = 12;
        p.earL = -6 * pose; p.earR = -6 * pose; p.whisk = -8 * pose;
        p.pRx = lerp(206, 196, pose); p.pRy = lerp(334, 262, pose); p.bR = lerp(-6, -20, pose); p.padR = 0;
        p.halo = 0.9 * pose;
        p.hubY = lerp(196 + 12 * ant, 160, go) + 22 * rel * 0; p.hubX = lerp(304, 300, go); p.hubA = lerp(30, 4, go);
        p.spread = 1.18; p.tsc = 1.14;
        const order = [4, 1, 0, 2, 3]; // fan-out order: centre first, then outward
        const foldOrder = [3, 2, 1, 0, 4];
        for (let k = 0; k < 5; k++) {
          const i = order[k];
          const o = ease.outBack(seg(T, 0.42 + k * 0.08, 0.42 + k * 0.08 + 0.34));
          const fk = foldOrder.indexOf(i), fs = 2.25 + fk * 0.17;
          const c = ease.in(seg(T, fs, fs + 0.13));
          p.fan[i] = o * (1 - c);
        }
        p.snip = seg(T, 1.1, 2.1);
      }
      return p;
    };
    const mix = (a, b, k) => {
      const o = {};
      for (const key in b) o[key] = Array.isArray(b[key]) ? b[key].map((v, i) => lerp(a[key][i], v, k)) : lerp(a[key], b[key], k);
      return o;
    };
    const tailPath = (H, a, curl) => {
      const B = [236, 326], dir = [Math.sin(rad(a)), -Math.cos(rad(a))];
      const M1 = [(B[0] + H[0]) / 2 + 40 + curl, (B[1] + H[1]) / 2 + 12];
      const P1 = [B[0] + 56, B[1] + 22], P2 = [M1[0] + 4, M1[1] + 44];
      const P3 = [M1[0] - 4, M1[1] - 40], P4 = [H[0] - dir[0] * 30, H[1] - dir[1] * 30];
      return `M${B[0]} ${B[1]} C${f(P1[0])} ${f(P1[1])} ${f(P2[0])} ${f(P2[1])} ${f(M1[0])} ${f(M1[1])} C${f(P3[0])} ${f(P3[1])} ${f(P4[0])} ${f(P4[1])} ${f(H[0])} ${f(H[1])}`;
    };
    const fxOp = (s, m) => (s.mood === m ? s.blend : s.prev === m ? 1 - s.blend : 0);

    return {
      update(s) {
        const t = s.t, L = A.life(t, 4);
        const cur = pose(s.mood, s.mt, t);
        const P = s.blend < 1 && s.prev && s.prev !== s.mood ? mix(pose(s.prev, s.mt + 4, t), cur, s.blend) : cur;

        /* poke and grumpy overlays */
        const pk = s.poke < 3 ? s.poke : 99;
        const wob = A.wobble(pk, 15, 5), st = pk < 3 ? Math.exp(-pk * 3.2) : 0;
        const grump = s.pokes >= 3 ? clamp((3.2 - pk) / 0.7) : 0;
        const startle = st * (1 - grump);
        P.sx += wob * 0.07; P.sy -= wob * 0.08; P.rot += wob * 3;
        P.lidL = lerp(P.lidL, 1.2, startle); P.lidR = lerp(P.lidR, 1.2, startle); P.lowL *= 1 - startle; P.lowR *= 1 - startle;
        P.pupil = lerp(P.pupil, 1, startle); P.eyeS += 0.1 * startle; P.browY -= 10 * startle; P.op = Math.max(P.op, 0.5 * startle); P.wd = lerp(P.wd, 7, startle); P.sm = lerp(P.sm, 0, startle);
        P.earL += 24 * startle; P.earR += 24 * startle; P.whisk -= 12 * startle;
        const flare = st * 0.75;
        P.fan = P.fan.map(v => Math.max(v, flare));
        if (grump > 0) {
          const lash = Math.sin(t * 8);
          P.lidL = lerp(P.lidL, 0.5, grump); P.lidR = lerp(P.lidR, 0.5, grump); P.clsL = lerp(P.clsL, 0.1, grump); P.clsR = lerp(P.clsR, 0.1, grump);
          P.lowL = lerp(P.lowL, 0.2, grump); P.lowR = lerp(P.lowR, 0.2, grump); P.pupil = lerp(P.pupil, 0.1, grump);
          P.browR = lerp(P.browR, -20, grump); P.browY = lerp(P.browY, 5, grump); P.sm = lerp(P.sm, -0.8, grump); P.op = lerp(P.op, 0, grump); P.mx = lerp(P.mx, -4, grump); P.wd = lerp(P.wd, 8, grump);
          P.earL = lerp(P.earL, 38, grump); P.earR = lerp(P.earR, 38, grump); P.hr = lerp(P.hr, -6, grump); P.gw = lerp(P.gw, 1, grump); P.gx = lerp(P.gx, -0.5, grump); P.gy = lerp(P.gy, 0.1, grump);
          P.hubA = lerp(P.hubA, 18 + lash * 26, grump); P.hubX = lerp(P.hubX, 304 + lash * 14, grump);
          P.fan = P.fan.map((v, i) => lerp(v, i === 4 ? 1 : 0, grump)); P.tW[4] = lerp(P.tW[4], 1, grump); P.tAng[4] = lerp(P.tAng[4], 20 + lash * 20, grump);
        }

        /* idle life: breath, blink, fidget, hover */
        const idleW = s.mood === 'idle' ? 1 : 0.4;
        const fid = (t + 1.3) % 5.4, fidE = fid < 0.7 ? A.wobble(fid, 22, 6) : 0;
        const fid2 = (t + 3.6) % 7.1, tailFlick = fid2 < 0.9 ? A.wobble(fid2, 12, 4) : 0;
        P.earR += fidE * 16 * idleW; P.hubA += tailFlick * 18 * idleW;
        P.hubA += L.sway * 6; P.hubX += L.sway * 4;
        if (s.hover) { P.earL -= 4; P.earR -= 4; P.pupil += 0.12; }
        const blink = s.mood === 'sleepy' ? 0 : L.blink;
        const lk = s.look;
        const gx = lerp(lk.x, P.gx, P.gw), gy = lerp(lk.y, P.gy, P.gw);

        /* root */
        A.tf(root, 0, -P.y, P.rot, P.sx + L.breathe * 0.006, P.sy - L.breathe * 0.006 + 0.004, 190, 344);
        const shk = 1 - clamp(P.y / 80) * 0.5;
        A.tf(shadow, 0, 0, 0, shk, shk, 212, 343); A.op(shadow, shk);
        A.op(halo, P.halo);

        /* head */
        A.tf(head, P.hx + lk.x * 4, P.hy + lk.y * 3 + L.breathe * 1.2, P.hr + lk.x * 3 + L.sway * 1.2, 1, 1, 178, 214);
        A.tf(face, lk.x * 3.5, lk.y * 2.2);
        A.tf(earL, lk.x * 2, 0, -P.earL - lk.x * 2 + Math.sin(t * 1.7) * 1.2, 1, 1, -50, -40);
        A.tf(earR, lk.x * 2, 0, P.earR - lk.x * 2 + Math.sin(t * 1.9 + 1) * 1.2, 1, 1, 50, -40);
        A.tf(eyeL.o, eyeLX, eyeY); A.tf(eyeR.o, eyeRX, eyeY);
        setEye(eyeL, P.lidL * (1 - blink), P.lowL, P.clsL, P.pupil, gx, gy, P.eyeS);
        setEye(eyeR, P.lidR * (1 - blink), P.lowR, P.clsR, P.pupil, gx, gy, P.eyeS);
        A.tf(browL, -37, -30 + P.browY - P.browA * 0.3, P.browR + P.browA * 0.2, 1, 1, 0, 0);
        A.tf(browR, 37, -30 + P.browY + P.browA, -P.browR - P.browA * 0.6, 1, 1, 0, 0);
        A.tf(whL, 0, 0, P.whisk + Math.sin(t * 2.3) * 1.5, 1, 1, -22, 26);
        A.tf(whR, 0, 0, -P.whisk - Math.sin(t * 2.3 + 0.6) * 1.5, 1, 1, 22, 26);

        /* mouth */
        const mx = P.mx, wd = P.wd, sm = P.sm, my = 28, op = clamp(P.op);
        const lc = [mx - wd, my - sm * 5], rc = [mx + wd, my - sm * 5 - (mx ? mx * 0.25 : 0)];
        const mid = [mx * 0.3, my];
        const top = `M${f(lc[0])} ${f(lc[1])} Q${f(mx - wd * 0.5)} ${f(my + 4 + sm * 2)} ${f(mid[0])} ${f(mid[1])} Q${f(mx + wd * 0.5)} ${f(my + 4 + sm * 2)} ${f(rc[0])} ${f(rc[1])}`;
        A.attr(mouthLine, { d: top });
        const depth = op * 22;
        const md = `${top} Q${f(mx)} ${f(my + 4 + depth * 1.6 + sm * 2)} ${f(lc[0])} ${f(lc[1])} Z`;
        A.attr(mouthFill, { d: md }); A.attr(mClipP, { d: md });
        A.op(mouthFill, op > 0.02 ? 1 : 0);
        A.attr(tongue, { cx: mx, cy: my + 6 + depth * 0.9, rx: wd * 0.7 });
        A.op(fangs, clamp((op - 0.25) * 3));
        A.op(tongueTip, P.tip); A.tf(tongueTip, rc[0] - 4, rc[1] - 0.5, 10, 0.8, 0.8, 0, 0);

        /* arms */
        setArm(armL, SHL, P.pLx, P.pLy, P.bL, P.padL);
        setArm(armR, SHR, P.pRx, P.pRy, P.bR, P.padR);

        /* medal */
        A.op(medalG, clamp(P.medal * 3)); A.show(medalG, P.medal > 0.01);
        if (P.medal > 0.01) {
          const ms = P.medal;
          A.tf(medalIn, P.pLx + 2, P.pLy - 30 + Math.sin(t * 3) * 1.5, Math.sin(t * 2.2) * 4 - 6, ms, ms, 0, 0);
          const sh = ((s.mt + 0.1) % 1.6) / 1.6;
          A.tf(shine, lerp(-56, 56, ease.inOut(clamp(sh * 1.6))), 0);
          medalSp.forEach((e, k) => {
            const ph = (s.mt * 0.9 + k / 3) % 1;
            A.tf(e, P.pLx + 2 + Math.cos(k * 2.1 + 0.5) * 46, P.pLy - 30 + Math.sin(k * 2.1 + 0.5) * 42, ph * 90, Math.sin(ph * Math.PI) * ms, Math.sin(ph * Math.PI) * ms, 0, 0);
          });
        }

        /* tail and tools */
        const H = [P.hubX, P.hubY - L.breathe * 1.5];
        const a = P.hubA;
        const td = tailPath(H, a, 0);
        A.attr(tailShade, { d: td }); A.attr(tailMain, { d: td }); A.attr(tailHi, { d: td, transform: 'translate(-3 -2)' });
        A.tf(hub, H[0], H[1], a, 1, 1, 0, 0);
        const ripple = s.mood === 'signature' ? seg(s.mt % 3.8, 0.9, 1.2) * (1 - seg(s.mt % 3.8, 2.1, 2.3)) : s.mood === 'celebrate' ? 0.6 : 0.15;
        tools.forEach((T, i) => {
          const o = clamp(P.fan[i], 0, 1.3);
          const fanA = FAN[i] * P.spread + P.fanRot + Math.sin(t * 7 - i * 1.1) * 5 * ripple;
          let ang = lerp(a, fanA, Math.min(1, o));
          if (o > 1) ang = fanA + (o - 1) * (FAN[i] - 8) * 0.6;
          ang = lerp(ang, P.tAng[i], P.tW[i] * clamp(o * 1.5));
          const sc = lerp(0.36, P.tsc, Math.min(1, o));
          const sl = P.slide[i];
          A.tf(T.g, H[0] + Math.sin(rad(ang)) * -sl, H[1] - Math.cos(rad(ang)) * -sl, ang, sc, sc, 0, 0);
          A.op(T.g, i === 4 ? 1 : clamp(o * 5));
          if (T.bA) { const sn = Math.max(0, Math.sin(P.snip * Math.PI * 6)) * 12 * (P.snip > 0 && P.snip < 1 ? 1 : 0) + 3 * o; A.tf(T.bA, 0, 0, -sn * 0.5, 1, 1, 0, -42); A.tf(T.bB, 0, 0, sn * 0.5, 1, 1, 0, -42); }
          const gl = s.mood === 'signature' ? seg(s.mt % 3.8, 0.95 + i * 0.12, 1.35 + i * 0.12) : 0;
          A.op(T.glint, Math.sin(gl * Math.PI) * clamp(o)); A.tf(T.glint, 0, TIPY[i] + 6, gl * 90, 1, 1, 0, 0);
        });

        /* click sparks while the tools fold back */
        let ck = 0;
        if (s.mood === 'signature') { const T = s.mt % 3.8; for (let k = 0; k < 5; k++) { const d = T - (2.38 + k * 0.17); if (d >= 0 && d < 0.16) ck = 1 - d / 0.16; } }
        A.op(clickG, ck); A.tf(clickG, H[0], H[1], ck * 40, 0.4 + (1 - ck) * 0.8, 0.4 + (1 - ck) * 0.8, 0, 0);
        A.attr(clickRing, { r: 8 + (1 - ck) * 12 });

        /* working card */
        A.op(card, clamp(P.card)); A.show(card, P.card > 0.01);
        if (P.card > 0.01) {
          A.tf(card, 336, 300, 4, 1, 1, 0, 0);
          const cut = ((s.mt % 2.4) / 2.4);
          A.attr(slit, { d: `M0 -40 L0 ${f(-40 + cut * 66)}` });
          chips.forEach((c, k) => {
            const ph = (s.mt * 2.2 + k / 4) % 1;
            A.tf(c, (k % 2 ? 1 : -1) * (4 + ph * 22), -40 + cut * 66 - ph * 30 + ph * ph * 40, ph * 400, 1, 1, 0, 0);
            A.op(c, 1 - ph);
          });
        }

        /* fx */
        const oc = fxOp(s, 'celebrate');
        conf.forEach((c, k) => {
          const y = ((c.ph + s.mt * 0.45 * c.sp) % 1) * 430 - 30;
          A.op(c.el, oc);
          if (oc > 0) A.tf(c.el, c.x + Math.sin(s.mt * 3 + k) * 12, y, c.rs * s.mt * 0.3 + k * 40, 1, Math.abs(Math.cos(s.mt * 5 + k)) * 0.9 + 0.1, 0, 0);
        });
        const osp = Math.max(oc, fxOp(s, 'signature') * clamp(P.halo));
        sparks.forEach((e, k) => {
          const ph = (s.mt * 0.8 + k / 5) % 1, sc = Math.sin(ph * Math.PI);
          const cx = s.mood === 'signature' ? 300 + Math.cos(k * 1.3 - 2.6) * 110 : 70 + k * 65;
          const cy = s.mood === 'signature' ? 160 + Math.sin(k * 1.3 - 2.6) * 100 : 70 + (k % 2) * 40;
          A.tf(e, cx, cy - P.y * 0.3, ph * 120, sc, sc, 0, 0); A.op(e, osp);
        });
        const oz = fxOp(s, 'sleepy');
        zs.forEach((z, k) => {
          const ph = (s.mt * 0.4 + k / 3) % 1;
          A.attr(z, { x: 258 + ph * 40 + Math.sin(ph * 6) * 5, y: 96 - ph * 70 });
          A.op(z, oz * Math.sin(ph * Math.PI));
        });
        const ot = fxOp(s, 'thinking');
        dots.forEach((d, k) => {
          const ph = clamp((s.mt - k * 0.22) / 0.3);
          A.attr(d, { cx: 108 - k * 16, cy: 78 - k * 18 + Math.sin(t * 2 + k) * 2 });
          A.op(d, ot * ph * 0.95);
        });
        A.op(puff, grump * (0.6 + 0.4 * Math.sin(t * 10)));
        A.tf(puff, 92, 72 + Math.sin(t * 5) * 2, 0, 1, 1, 0, 0);
        const ow = fxOp(s, 'wink');
        const wp = seg(s.mt, 0.25, 0.9);
        A.op(winkSp, ow * Math.sin(wp * Math.PI)); A.tf(winkSp, 236, 128, wp * 180, 0.6 + wp, 0.6 + wp, 0, 0);
      },
    };
  },
});

/* Nib: a compact hedgehog whose spines are tiny tools. Curls into a spiky ball that spins (the loader). */
CAST.register({
  id: 'nib', order: 8, name: 'Nib',
  tagline: 'A pocket of tools that rolls into a ball.',
  concept: 'Nib is a small hedgehog. Its spines are tiny steel and red blades, with scissors, a pen nib and a lens hidden in the crown. The spines bristle with every feeling. When work starts, Nib curls up and spins.',
  signature: 'A dome of steel and red blades. Nib curls into a spiky ball, spins with a speed trail, bounces and pops open into a star.',
  why: ['The blade crown reads as one bold shape, even at icon size.', 'The spinning ball is the loader, so people see it every day.', 'The hidden scissors, nib and lens reward a second look.'],
  risks: ['Many spines can look busy in very small sizes.', 'Sharp spikes may feel cold to some users.'],
  voice: 'Hold tight. I am rolling through your photos.',
  scores: { memorable: 5, stylish: 4, expressive: 4, small: 4, fit: 5 },
  palette: ['#E5322B', '#C9D0D8', '#2C2730', '#F7EAD3', '#F2B92E'],
  bg: '#3b2025', iconBg: '#FBE3D6', icon: { viewBox: '84 62 232 232' },

  build(g, A) {
    const CX = 200, CY = 240, lerp = A.lerp, seg = A.seg, E = A.ease;
    const D2R = Math.PI / 180;

    /* ---------- gradients ---------- */
    A.grad('red', [[0, '#FF9184'], [0.3, '#F2483D'], [0.68, '#E5322B'], [1, '#93120C']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('steel', [[0, '#FFFFFF'], [0.3, '#E4E9EF'], [0.68, '#AAB3BF'], [1, '#5B6470']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('gold', [[0, '#FFF2B8'], [0.45, '#F4C64A'], [1, '#B07A0E']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('fur', [[0, '#625A69'], [0.55, '#38313D'], [1, '#1C1820']], { radial: true, cx: 0.4, cy: 0.3, r: 0.78 });
    A.grad('mask', [[0, '#FFF9EF'], [0.65, '#F7E8CF'], [1, '#E2C7A0']], { radial: true, cx: 0.48, cy: 0.38, r: 0.72 });
    A.grad('lid', [[0, '#F3E2C6'], [1, '#E6CFAB']], {});
    A.grad('eye', [[0, '#6A3B3C'], [0.5, '#24161A'], [1, '#0A0608']], { radial: true, cx: 0.5, cy: 0.78, r: 0.7 });
    A.grad('paw', [[0, '#F6E2C8'], [1, '#C79B74']], { radial: true, cx: 0.4, cy: 0.35, r: 0.75 });
    A.grad('medal', [[0, '#FFF6C8'], [0.45, '#F7C948'], [0.82, '#D8951A'], [1, '#93600A']], { radial: true, cx: 0.36, cy: 0.3, r: 0.8 });
    A.grad('glass', [[0, '#FFFFFF', 0.95], [0.5, '#CDEBFF', 0.6], [1, '#7AB6E8', 0.45]], { radial: true, cx: 0.35, cy: 0.3, r: 0.8 });
    A.grad('shadow', [[0, '#000', 0.5], [1, '#000', 0]], { radial: true });
    A.grad('nose', [[0, '#5A4045'], [1, '#160E10']], { radial: true, cx: 0.4, cy: 0.3, r: 0.8 });

    /* ---------- spine makers (drawn pointing up, base at 0,0) ---------- */
    function blade(parent, w, L, kind) {
      const e = A.el('g', {}, parent);
      A.el('path', { d: `M${-w / 2} 0 L${-w * 0.06} ${-L} Q${w * 0.68} ${-L * 0.42} ${w / 2} 0Z`, fill: A.url(kind), stroke: kind === 'red' ? '#6E0B07' : '#454D58', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, e);
      A.el('path', { d: `M${-w * 0.05} -3 L${-w * 0.06} ${-L + 7}`, stroke: kind === 'red' ? '#A9180F' : '#7F8894', 'stroke-width': 1.1, opacity: 0.7 }, e);
      const hl = A.el('path', { d: `M${-w * 0.42} -3 L${-w * 0.1} ${-L + 6} L${-w * 0.2} -3Z`, fill: '#fff', opacity: 0.45 }, e);
      return { g: e, hl };
    }
    function scissors(parent, L) {
      const e = A.el('g', {}, parent), py = -L * 0.3, Lb = L + py, parts = [];
      for (const side of [1, -1]) {
        const bg = A.el('g', {}, e), inner = A.el('g', { transform: `scale(${side} 1)` }, bg);
        A.el('path', { d: `M5 18 L1.5 4`, stroke: '#3A333F', 'stroke-width': 3.2, 'stroke-linecap': 'round' }, inner);
        A.el('circle', { cx: 6.5, cy: 23, r: 5.6, fill: 'none', stroke: '#E5322B', 'stroke-width': 3.6 }, inner);
        A.el('path', { d: `M-3.4 3 L-0.8 ${-Lb} Q5.2 ${-Lb * 0.42} 3.6 2Z`, fill: A.url('steel'), stroke: '#454D58', 'stroke-width': 1.2, 'stroke-linejoin': 'round' }, inner);
        parts.push(bg);
      }
      A.el('circle', { cx: 0, cy: py, r: 2.6, fill: '#F4C64A', stroke: '#7A4B05', 'stroke-width': 0.8 }, e);
      return { g: e, hl: null, blades: parts, py };
    }
    function penNib(parent, w, L) {
      const e = A.el('g', {}, parent);
      A.el('path', { d: `M0 ${-L} C${w * 0.16} ${-L * 0.76} ${w * 0.54} ${-L * 0.52} ${w * 0.48} ${-L * 0.22} L${w * 0.36} 0 L${-w * 0.36} 0 L${-w * 0.48} ${-L * 0.22} C${-w * 0.54} ${-L * 0.52} ${-w * 0.16} ${-L * 0.76} 0 ${-L}Z`, fill: A.url('gold'), stroke: '#6E4404', 'stroke-width': 1.4, 'stroke-linejoin': 'round' }, e);
      A.el('path', { d: `M0 ${-L + 3} L0 ${-L * 0.42}`, stroke: '#5A3703', 'stroke-width': 1.4 }, e);
      A.el('circle', { cx: 0, cy: -L * 0.38, r: 2.8, fill: '#3A2405' }, e);
      A.el('path', { d: `M${-w * 0.4} ${-L * 0.16} L${w * 0.4} ${-L * 0.16}`, stroke: '#8A5806', 'stroke-width': 1.3 }, e);
      const hl = A.el('path', { d: `M${-w * 0.3} ${-L * 0.24} C${-w * 0.36} ${-L * 0.5} ${-w * 0.12} ${-L * 0.7} ${-w * 0.03} ${-L + 6}`, stroke: '#fff', 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round', opacity: 0.6 }, e);
      return { g: e, hl };
    }
    function lens(parent, L) {
      const e = A.el('g', {}, parent), r = 11, cy = -L + r + 1;
      A.el('path', { d: `M0 0 L0 ${cy + r}`, stroke: '#3A333F', 'stroke-width': 5.5, 'stroke-linecap': 'round' }, e);
      A.el('path', { d: `M0 -2 L0 ${-L * 0.22}`, stroke: '#E5322B', 'stroke-width': 7, 'stroke-linecap': 'round' }, e);
      A.el('circle', { cx: 0, cy, r, fill: A.url('glass'), stroke: '#D9DFE6', 'stroke-width': 4.6 }, e);
      A.el('circle', { cx: 0, cy, r: r + 2.3, fill: 'none', stroke: '#4B535E', 'stroke-width': 1 }, e);
      const hl = A.el('path', { d: `M${-6} ${cy - 2} A7 7 0 0 1 ${-1} ${cy - 7}`, stroke: '#fff', 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', opacity: 0.9 }, e);
      return { g: e, hl };
    }

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 342, rx: 88, ry: 13, fill: A.url('shadow') }, g);
    const fxBack = A.el('g', {}, g);
    const popRing = A.el('circle', { cx: 200, cy: 240, r: 60, fill: 'none', stroke: '#FFD36B', 'stroke-width': 6 }, fxBack);
    const root = A.el('g', {}, g);
    const backG = A.el('g', {}, root);
    const feet = [178, 222].map(x => {
      const f = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 0, rx: 15, ry: 8.5, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1.2 }, f);
      A.el('path', { d: 'M-4 3 L-4 7 M3 3 L3 7', stroke: '#8E6646', 'stroke-width': 1.2, 'stroke-linecap': 'round' }, f);
      return { f, x };
    });
    A.el('ellipse', { cx: CX, cy: CY, rx: 93, ry: 93, fill: A.url('fur') }, root);
    A.el('path', { d: 'M276 186 A93 93 0 0 1 258 314', stroke: '#FF8C7C', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.55 }, root);
    const frontG = A.el('g', {}, root);
    const ears = [[152, -1], [248, 1]].map(([x, sd]) => {
      const e = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 0, rx: 12.5, ry: 14, fill: A.url('fur'), stroke: '#18141B', 'stroke-width': 1 }, e);
      A.el('ellipse', { cx: 0, cy: 1.5, rx: 6.5, ry: 8, fill: '#E39B8F' }, e);
      return { e, x, sd };
    });

    /* spines: back row red (long), front row steel (short) with hidden tools */
    const spines = [];
    for (let i = 0; i < 14; i++) {
      const th = -104 + 16 * i, L = 88 - 0.25 * Math.abs(th);
      const b = blade(backG, 31, L, 'red');
      spines.push(Object.assign(b, { th, R: 80, flip: th > 0 ? -1 : 1, i, tool: false }));
    }
    let scissorsSp = null;
    for (let i = 0; i < 11; i++) {
      const th = -80 + 16 * i, L = 62 - 0.15 * Math.abs(th);
      let b, tool = true;
      if (th === -48) { b = scissors(frontG, L + 4); scissorsSp = b; }
      else if (th === 16) b = penNib(frontG, 22, L);
      else if (th === 64) b = lens(frontG, L + 4);
      else { b = blade(frontG, 24, L, 'steel'); tool = false; }
      spines.push(Object.assign(b, { th, R: 72, flip: tool ? 1 : (th > 0 ? -1 : 1), i: i + 20, tool }));
    }

    /* face */
    const face = A.el('g', {}, root);
    A.el('path', { d: 'M200 196 C188 178 162 170 142 182 C122 194 112 226 118 258 C124 294 158 320 200 321 C242 320 276 294 282 258 C288 226 278 194 258 182 C238 170 212 178 200 196Z', fill: A.url('mask'), stroke: '#C9A87C', 'stroke-width': 1 }, face);
    A.el('ellipse', { cx: 200, cy: 274, rx: 26, ry: 18, fill: '#FFFBF3', opacity: 0.85 }, face);
    const blush = [154, 246].map(x => A.el('ellipse', { cx: x, cy: 268, rx: 11, ry: 6, fill: '#FF6F62', opacity: 0.35 }, face));
    const eyes = [176, 224].map(cx => {
      const eg = A.el('g', {}, face);
      const cid = A.id('eye' + cx), cp = A.el('clipPath', { id: cid }, A.defs);
      A.el('ellipse', { cx, cy: 236, rx: 14, ry: 18 }, cp);
      const inner = A.el('g', { 'clip-path': `url(#${cid})` }, eg);
      A.el('ellipse', { cx, cy: 236, rx: 14, ry: 18, fill: A.url('eye') }, inner);
      const pupil = A.el('g', {}, inner);
      A.el('ellipse', { cx, cy: 239, rx: 9, ry: 11.5, fill: '#120A0D' }, pupil);
      A.el('ellipse', { cx: cx - 4.5, cy: 229, rx: 5.2, ry: 6.2, fill: '#fff' }, pupil);
      A.el('circle', { cx: cx + 5, cy: 244, r: 2.3, fill: '#fff', opacity: 0.85 }, pupil);
      A.el('path', { d: `M${cx - 8} 248 Q${cx} 254 ${cx + 8} 248`, stroke: '#B0585A', 'stroke-width': 1.6, fill: 'none', opacity: 0.6 }, pupil);
      const lidU = A.el('path', { fill: A.url('lid') }, inner);
      const lidL = A.el('path', { fill: A.url('lid') }, inner);
      const lash = A.el('path', { stroke: '#1A1014', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, eg);
      const arc = A.el('path', { d: `M${cx - 11} 240 Q${cx} 226 ${cx + 11} 240`, stroke: '#1A1014', 'stroke-width': 4.2, fill: 'none', 'stroke-linecap': 'round' }, face);
      return { cx, eg, inner, pupil, lidU, lidL, lash, arc };
    });
    const brows = [176, 224].map(() => A.el('path', { d: 'M-10 2 Q0 -4 10 1', stroke: '#2A2230', 'stroke-width': 4.6, fill: 'none', 'stroke-linecap': 'round' }, face));
    A.el('path', { d: 'M192 260 Q200 256 208 260 Q207 268 200 270 Q193 268 192 260Z', fill: A.url('nose') }, face);
    A.el('ellipse', { cx: 197, cy: 261, rx: 2.6, ry: 1.5, fill: '#fff', opacity: 0.7 }, face);
    const mcid = A.id('mouth'), mclip = A.el('clipPath', { id: mcid }, A.defs);
    const mouthClip = A.el('path', { d: '' }, mclip);
    const mouth = A.el('path', { fill: '#3B1A1C', stroke: '#2A1215', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, face);
    const tongue = A.el('ellipse', { cx: 200, cy: 290, rx: 6, ry: 4, fill: '#F0786E', 'clip-path': `url(#${mcid})` }, face);

    /* medal (held in the right hand) */
    const medal = A.el('g', {}, root);
    const medalIn = A.el('g', {}, medal);
    A.el('path', { d: 'M-12 18 L-20 56 L-12 50 L-6 58 L-2 20Z', fill: '#C61E17', stroke: '#7E0C08', 'stroke-width': 1 }, medalIn);
    A.el('path', { d: 'M12 18 L20 56 L12 50 L6 58 L2 20Z', fill: '#E5322B', stroke: '#7E0C08', 'stroke-width': 1 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 30, fill: A.url('medal'), stroke: '#7A4B05', 'stroke-width': 1.6 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 23, fill: 'none', stroke: '#B57A12', 'stroke-width': 2 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 25.5, fill: 'none', stroke: '#FFF3C4', 'stroke-width': 1, opacity: 0.8 }, medalIn);
    A.el('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-family': 'Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif', 'font-weight': 900, 'font-size': 17, 'letter-spacing': 0.5, fill: '#6B3F02', text: 'LV 8' }, medalIn);
    const shcid = A.id('shine'), shclip = A.el('clipPath', { id: shcid }, A.defs);
    A.el('circle', { cx: 0, cy: 0, r: 30 }, shclip);
    const shineG = A.el('g', { 'clip-path': `url(#${shcid})` }, medalIn);
    const shine = A.el('rect', { x: -8, y: -45, width: 12, height: 90, fill: '#fff', opacity: 0.75 }, shineG);

    /* arms */
    const arms = [140, 260].map(sx => {
      const a = A.el('path', { stroke: '#2C2730', 'stroke-width': 12, fill: 'none', 'stroke-linecap': 'round' }, root);
      const h = A.el('circle', { r: 8.5, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1.2 }, root);
      return { a, h, sx, sy: 276 };
    });

    /* ---------- the ball ---------- */
    const ballG = A.el('g', {}, g);
    const trails = [[118, '#E5322B', 7, 210, 0.7], [118, '#FFFFFF', 3, 150, 0.7], [128, '#E5322B', 4, 120, 0.45]].map(([r, c, w, len, o], i) => ({
      el: A.el('circle', { cx: 200, cy: 240, r, fill: 'none', stroke: c, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-dasharray': `${len} 2000` }, ballG), o, i,
    }));
    const ballSpin = A.el('g', {}, ballG);
    const ballSp = [];
    for (let i = 0; i < 22; i++) {
      const a = i * 360 / 22, long = i % 2 === 0;
      let b;
      if (i === 3) b = scissors(ballSpin, 42);
      else if (i === 11) b = penNib(ballSpin, 20, 40);
      else if (i === 17) b = lens(ballSpin, 42);
      else b = blade(ballSpin, long ? 27 : 22, long ? 48 : 36, long ? 'red' : 'steel');
      ballSp.push(Object.assign(b, { a }));
      A.attr(b.g, { transform: `translate(${(200 + 54 * Math.sin(a * D2R)).toFixed(2)} ${(240 - 54 * Math.cos(a * D2R)).toFixed(2)}) rotate(${a})` });
    }
    const blurRing = A.el('circle', { cx: 200, cy: 240, r: 80, fill: 'none', stroke: '#E5322B', 'stroke-width': 34, opacity: 0 }, ballG);
    const blurRing2 = A.el('circle', { cx: 200, cy: 240, r: 82, fill: 'none', stroke: '#DDE3EA', 'stroke-width': 14, opacity: 0, 'stroke-dasharray': '18 22' }, ballG);
    A.el('circle', { cx: 200, cy: 240, r: 64, fill: A.url('fur') }, ballG);
    A.el('circle', { cx: 200, cy: 240, r: 64, fill: 'none', stroke: '#FF8C7C', 'stroke-width': 2.5, opacity: 0.5, 'stroke-dasharray': '90 400', transform: 'rotate(-20 200 240)' }, ballG);
    A.el('circle', { cx: 200, cy: 247, r: 40, fill: A.url('mask'), stroke: '#C9A87C', 'stroke-width': 1 }, ballG);
    const bEyes = [186, 214].map(cx => A.el('ellipse', { cx, cy: 242, rx: 5.5, ry: 7.5, fill: '#140B0E' }, ballG));
    const bGlints = [186, 214].map(cx => A.el('circle', { cx: cx - 1.8, cy: 239, r: 1.9, fill: '#fff' }, ballG));
    const bSq = A.el('path', { d: 'M180 235 L190 241 L180 247 M220 235 L210 241 L220 247', stroke: '#140B0E', 'stroke-width': 3.6, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, ballG);
    const bBrows = [186, 214].map(() => A.el('path', { d: 'M-8 0 L8 0', stroke: '#2A2230', 'stroke-width': 4, 'stroke-linecap': 'round' }, ballG));
    A.el('path', { d: 'M195 254 Q200 251 205 254 Q204 259 200 260 Q196 259 195 254Z', fill: A.url('nose') }, ballG);
    const bMouth = A.el('path', { d: 'M195 265 L205 265', stroke: '#2A1215', 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' }, ballG);
    [189, 211].forEach(x => A.el('circle', { cx: x, cy: 279, r: 6.5, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1 }, ballG));

    /* ---------- front effects ---------- */
    const fx = A.el('g', {}, g);
    const STAR = 'M0 -10 Q1.4 -1.4 10 0 Q1.4 1.4 0 10 Q-1.4 1.4 -10 0 Q-1.4 -1.4 0 -10Z';
    const sparks = Array.from({ length: 10 }, (_, i) => A.el('path', { d: STAR, fill: i % 3 === 0 ? '#FFD36B' : '#FFFFFF' }, fx));
    const r0 = A.rng(808);
    const confetti = Array.from({ length: 18 }, (_, i) => ({
      el: A.el('rect', { x: -4, y: -2.5, width: 8, height: 5, rx: 1, fill: ['#E5322B', '#F4C64A', '#DDE3EA', '#F7EAD3', '#FF8C7C'][i % 5] }, fx),
      x: 40 + r0() * 320, v: 0.55 + r0() * 0.5, o: r0(), sp: (r0() - 0.5) * 900, sw: r0() * 6,
    }));
    const zs = [0, 1, 2].map(i => A.el('text', { x: 0, y: 0, 'font-family': 'Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif', 'font-weight': 800, 'font-size': 18 + i * 5, fill: '#DDE3EA', text: 'z' }, fx));
    const dots = [[272, 142, 4], [290, 118, 6.5], [316, 88, 10]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#F7EAD3' }, fx));

    /* ---------- poses ---------- */
    const BASE = {
      x: 0, y: 0, rot: 0, sx: 1, sy: 1, spread: 0.86, slen: 1, trem: 0, lean: 0, rip: 0, ripA: 0, snip: 0,
      lidU: 0, lidL: 0, eyeS: 1, lidTilt: 0, arcL: 0, arcR: 0, browY: 0, browD: 0, browT: 0,
      mW: 9, mC: 2.5, mO: 0, mSk: 0, blush: 0.35, ear: 0, gx: 0, gy: 0, gw: 0,
      hLx: 131, hLy: 302, hRx: 269, hRy: 302, foot: 0,
      ball: 0, spin: 0, speed: 0, trail: 0, by: 0, bsq: 0, bfS: 0, bfG: 0, bslen: 1,
      medal: 0, mpop: 0, zz: 0, think: 0, conf: 0, pop: 0,
    };
    const KEYS = Object.keys(BASE);
    const mix = (a, b, k) => { const o = {}; for (const key of KEYS) o[key] = a[key] + (b[key] - a[key]) * k; return o; };
    const spinAt = tau => (tau < 1.4 ? 200 * tau + 450 * tau * tau : 200 * 1.4 + 450 * 1.96 + 1460 * (tau - 1.4));

    function pose(m, t, mt) {
      const p = Object.assign({}, BASE), L = A.life(t, 8);
      p.sy = 1 + L.breathe * 0.016; p.sx = 1 - L.breathe * 0.01; p.slen = 1 + L.breathe * 0.02;
      switch (m) {
        case 'idle': {
          p.rot = L.sway * 1.5;
          const f = t % 6.4; p.rip = f / 1.3; p.ripA = f < 1.3 ? Math.sin(Math.PI * f / 1.3) : 0;
          const sn = t % 9.1; p.snip = sn < 0.7 ? Math.max(0, Math.sin(sn / 0.7 * Math.PI * 2)) : 0;
          break;
        }
        case 'happy': {
          const b = Math.abs(Math.sin(mt * 5.2)), land = Math.max(0, 1 - b / 0.22);
          p.y = -b * 13; p.sy += 0.03 * b - 0.09 * land; p.sx += 0.07 * land;
          p.mW = 12; p.mC = 6; p.mO = 7; p.lidL = 0.4; p.browY = 4; p.blush = 0.65; p.ear = 0.5;
          p.slen = 1.08 + 0.05 * Math.sin(mt * 10.4); p.spread = 0.9;
          p.hLx = 124; p.hLy = 290 - b * 8; p.hRx = 276; p.hRy = 290 - b * 8;
          break;
        }
        case 'wink': {
          const w = E.out(seg(mt, 0, 0.16));
          p.arcR = w; p.mW = 11; p.mC = 6; p.mSk = 3.5; p.mO = 2.5; p.browD = 6; p.browY = 2; p.rot = -5 * w; p.blush = 0.6;
          p.hRx = 288; p.hRy = 262; p.lean = -6; p.spread = 0.9; p.lidL = 0.25;
          break;
        }
        case 'surprised': {
          const jy = mt < 0.42 ? -28 * Math.sin(Math.PI * mt / 0.42) : 0;
          p.y = jy - 4; p.sx = 0.92; p.sy = 1.02 - (mt < 0.06 ? 0.08 : 0);
          p.spread = 1.0; p.slen = 1.34 + 0.08 * A.wobble(mt, 22, 4); p.trem = 0.5 + 1.2 * Math.exp(-3 * mt);
          p.eyeS = 1.2; p.browY = 11; p.mW = 6; p.mC = -1; p.mO = 11; p.ear = 1; p.blush = 0.2;
          p.hLx = 150; p.hLy = 258; p.hRx = 250; p.hRy = 258;
          break;
        }
        case 'thinking': {
          p.rot = 5; p.gx = 0.8; p.gy = -0.9; p.gw = 0.85; p.browD = -8; p.browY = 1;
          p.mW = 6; p.mC = -1.5; p.mSk = -2.5; p.lidU = 0.15;
          p.hLx = 184; p.hLy = 306; p.think = 1; p.lean = 7 + 3 * Math.sin(t * 1.5); p.spread = 0.84;
          break;
        }
        case 'working': {
          p.ball = 1; p.spin = t * 480; p.speed = 0.55; p.trail = 0.85;
          p.by = Math.sin(t * 9) * 2; p.bsq = 0.025 * Math.sin(t * 18);
          p.lidU = 0.3; p.browT = -6;
          break;
        }
        case 'celebrate': {
          const per = 0.85, ph = (mt % per) / per, h = Math.sin(Math.PI * ph), v = Math.abs(Math.cos(Math.PI * ph));
          const land = Math.max(0, 1 - Math.min(ph, 1 - ph) / 0.09);
          p.y = -50 * h; p.sy = 1 + 0.1 * v * (1 - land) - 0.16 * land; p.sx = 1 - 0.05 * v * (1 - land) + 0.13 * land;
          const wv = Math.sin(mt * 14) * 6;
          p.hLx = 110; p.hLy = 218 + 8 * land + wv; p.hRx = 290; p.hRy = 218 + 8 * land - wv;
          p.arcL = 1; p.arcR = 1; p.mW = 14; p.mC = 7; p.mO = 14; p.browY = 8; p.blush = 0.75;
          p.spread = 0.97; p.slen = 1.22 + 0.06 * Math.sin(mt * 20); p.ear = 1; p.foot = 6 * h; p.conf = 1;
          break;
        }
        case 'sleepy': {
          const nod = Math.sin(t * 0.9);
          p.rot = nod * 4; p.y = 2; p.lidU = 0.74 + 0.14 * Math.max(0, Math.sin(t * 0.45)); p.lidTilt = 4;
          p.browY = -3; p.browT = 5; p.mW = 4; p.mC = 0; p.mO = 3 + 1.5 * Math.sin(t * 1.6);
          p.spread = 1.13; p.slen = 0.82; p.ear = -0.8; p.zz = 1; p.gw = 1; p.gx = 0; p.gy = 0.4;
          p.hLx = 186; p.hLy = 314; p.hRx = 214; p.hRy = 314; p.sy = 1 + Math.sin(t * 1.6) * 0.02;
          break;
        }
        case 'levelup': {
          const pop = E.outBack(seg(mt, 0.05, 0.5)), cyc = mt % 4;
          p.medal = 1; p.mpop = pop;
          p.hRx = 290; p.hRy = 236 - 6 * Math.sin(mt * 3); p.hLx = 124; p.hLy = 292;
          p.gx = 0.75; p.gy = -0.55; p.gw = 0.9 * (seg(cyc, 0.1, 0.3) - seg(cyc, 1.4, 1.7));
          p.mW = 12; p.mC = 6; p.mO = 7; p.lidL = 0.32; p.browY = 6; p.blush = 0.6;
          p.spread = 0.95; p.slen = 1.18; p.sy *= 1.03; p.ear = 0.8; p.rot = -3; p.y = -5 * Math.abs(Math.sin(mt * 3));
          break;
        }
        case 'signature': {
          const u = mt % 4.2;
          const crouch = E.out(seg(u, 0, 0.28)) * (1 - seg(u, 0.4, 0.5));
          p.sy -= 0.15 * crouch; p.sx += 0.1 * crouch; p.spread -= 0.24 * crouch; p.slen -= 0.24 * crouch;
          p.lidU = 0.65 * crouch; p.browT = -8 * crouch; p.mW = 7; p.mC = 1;
          p.hLx = lerp(131, 156, crouch); p.hRx = lerp(269, 244, crouch); p.hLy = p.hRy = lerp(302, 296, crouch);
          const curl = E.inOut(seg(u, 0.26, 0.5)), open = seg(u, 2.85, 2.97);
          p.ball = curl * (1 - open);
          const tau = Math.max(0, u - 0.4);
          p.spin = spinAt(tau);
          p.speed = Math.min(1, (200 + 900 * Math.min(tau, 1.4)) / 1460) * (1 - 0.35 * seg(u, 2.0, 2.85));
          p.trail = seg(u, 0.5, 0.9) * (1 - 0.5 * seg(u, 2.1, 2.85));
          let by = 0;
          if (u >= 1.9 && u < 2.4) { const q = (u - 1.9) / 0.5; by = -95 * 4 * q * (1 - q); }
          else if (u >= 2.4 && u < 2.85) { const q = (u - 2.4) / 0.45; by = -42 * 4 * q * (1 - q); }
          else if (u > 0.6 && u < 1.9) by = -4 * Math.sin((u - 0.6) * 12);
          p.by = by;
          const hit = c => Math.exp(-Math.pow((u - c) / 0.04, 2));
          p.bsq = 0.2 * hit(1.9) + 0.18 * hit(2.4) + 0.12 * hit(2.85);
          p.bfS = 1; p.bslen = 1 + 0.15 * p.speed;
          if (u >= 2.85) {
            const st = E.outBack(seg(u, 2.85, 3.1)), k = 1 - E.inOut(seg(u, 3.7, 4.2)), w = A.wobble(u - 2.9, 16, 4);
            const S = Object.assign({}, p, {
              spread: 1.05, slen: 1.42 + 0.14 * w, hLx: 102, hLy: 222, hRx: 298, hRy: 222, foot: 12,
              arcL: u < 3.4 ? 1 : 0, arcR: u < 3.4 ? 1 : 0, mO: 13, mC: 7, mW: 14, browY: 9, blush: 0.75, ear: 1,
              y: -40 * (1 - E.out(seg(u, 2.85, 3.3))), sy: 1.06 - 0.06 * seg(u, 2.85, 3.3), sx: 1, lidU: 0, browT: 0, rot: w * 4,
            });
            for (const key of KEYS) if (key !== 'ball' && key !== 'spin' && key !== 'speed' && key !== 'trail') p[key] = lerp(BASE[key], S[key], st) * k + BASE[key] * (1 - k) * 0 + (1 - k) * BASE[key] * 1 - (1 - k) * 0;
            for (const key of KEYS) if (key !== 'ball' && key !== 'spin' && key !== 'speed' && key !== 'trail') p[key] = lerp(BASE[key], lerp(BASE[key], S[key], st), k);
            p.pop = seg(u, 2.85, 3.35);
          }
          break;
        }
      }
      return p;
    }

    /* ---------- per-frame ---------- */
    let lastT = null, grumpW = 0;
    function placeSpark(el, x, y, sc, o, r) {
      if (o <= 0.01 || sc <= 0.01) { A.show(el, false); return; }
      A.show(el, true); A.tf(el, x, y, r, sc, sc); A.op(el, o);
    }

    return {
      update(s) {
        const t = s.t, dt = lastT == null ? 0 : Math.min(0.1, Math.max(0, t - lastT)); lastT = t;
        const cur = pose(s.mood, t, s.mt);
        const p = s.blend < 1 && s.prev && s.prev !== s.mood ? mix(pose(s.prev, t, 100), cur, s.blend) : cur;
        const L = A.life(t, 8);

        /* poke */
        const pk = s.poke, imp = pk < 4 ? Math.exp(-6 * pk) : 0, wob = A.wobble(pk, 15, 5);
        if (imp > 0.001 || Math.abs(wob) > 0.001) {
          p.sy *= 1 - 0.13 * imp + 0.04 * wob; p.sx *= 1 + 0.1 * imp - 0.03 * wob; p.rot += wob * 7;
          p.slen += 0.42 * imp; p.spread += (1 - p.spread) * imp; p.trem += 1.6 * imp;
          p.eyeS += 0.25 * imp; p.browY += 9 * imp; p.mO += 8 * imp; p.mW = lerp(p.mW, 6, imp); p.mC = lerp(p.mC, -1, imp);
          p.lidU *= 1 - imp; p.lidL *= 1 - imp; p.arcL *= 1 - imp; p.arcR *= 1 - imp; p.ear += imp;
          p.bslen += 0.3 * imp;
        }
        const gt = s.pokes >= 3 ? 1 : 0;
        grumpW = dt === 0 ? gt : grumpW + (gt - grumpW) * Math.min(1, dt * 12);
        if (grumpW > 0.001) {
          p.ball = lerp(p.ball, 1, grumpW); p.bfG = grumpW; p.bfS *= 1 - grumpW; p.bslen += 0.25 * grumpW;
          p.trem += grumpW; p.spin = lerp(p.spin, Math.sin(t * 50) * 4, grumpW); p.trail *= 1 - grumpW; p.speed *= 1 - grumpW;
        }
        if (s.hover) { p.ear += 0.3; p.slen += 0.04; }

        const blink = L.blink;
        const lidU = Math.max(p.lidU, blink);
        const lk = s.look || { x: 0, y: 0 };
        const gzx = lerp(lk.x, p.gx, p.gw), gzy = lerp(lk.y, p.gy, p.gw);

        /* root */
        const bw = p.ball, rootOp = 1 - E.inOut(seg(bw, 0.3, 0.7)), ballOp = seg(bw, 0.3, 0.7), shrink = 1 - 0.32 * bw;
        A.show(root, rootOp > 0.01); A.op(root, rootOp);
        A.tf(root, p.x + lk.x * 3, p.y, p.rot, p.sx * shrink, p.sy * shrink, 200, 340);

        /* spines */
        const glint = ((t * 0.32) % 1.6) - 0.3;
        for (const sp of spines) {
          let dir = sp.th * p.spread + p.lean * (sp.R === 72 ? 1.2 : 1) - lk.x * 2;
          let len = p.slen;
          if (p.ripA > 0.01) { const q = (sp.th + 110) / 220, d = q - (p.rip * 1.4 - 0.2), b = p.ripA * Math.exp(-d * d / 0.012); len += b * 0.3; dir += b * 8 * (sp.th >= 0 ? 1 : -1); }
          if (p.trem > 0.01) dir += p.trem * Math.sin(t * 48 + sp.i * 2.3) * 2.4;
          const bx = CX + sp.R * Math.sin(sp.th * D2R), by = CY - sp.R * Math.cos(sp.th * D2R);
          const sxx = sp.tool ? 0.65 + 0.35 * len : 1;
          A.tf(sp.g, bx, by, dir, sp.flip * sxx, len, 0, 0);
          if (sp.hl) { const q = (sp.th + 110) / 220, d = q - glint; A.op(sp.hl, 0.4 + 0.55 * Math.exp(-d * d / 0.004)); }
        }
        if (scissorsSp) { const a = 5 + p.snip * 16; A.tf(scissorsSp.blades[0], 0, scissorsSp.py, -a, 1, 1); A.tf(scissorsSp.blades[1], 0, scissorsSp.py, a, 1, 1); }

        /* ears, feet */
        for (const e of ears) A.tf(e.e, e.x + e.sd * p.ear * 1.5, 188 - p.ear * 4, e.sd * (16 + p.ear * 10), 1, 1 + p.ear * 0.08, 0, 6);
        feet.forEach((f, i) => A.tf(f.f, f.x + (i ? 1 : -1) * p.foot, 337 + (p.foot > 0 ? 0 : 0), 0, 1, 1));

        /* face */
        A.tf(face, gzx * 6, gzy * 4);
        eyes.forEach((e, i) => {
          const cx = e.cx, side = i ? 1 : -1, arc = i ? p.arcR : p.arcL;
          A.tf(e.eg, 0, 0, 0, p.eyeS, p.eyeS, cx, 236);
          A.op(e.eg, 1 - arc); A.op(e.arc, arc); A.show(e.arc, arc > 0.01);
          A.tf(e.pupil, gzx * 4.5, gzy * 4.5);
          const u = Math.min(1, lidU), y0 = 218, ye = y0 + 36 * u, tl = p.lidTilt * side;
          A.attr(e.lidU, { d: `M${cx - 18} ${y0 - 6} L${cx + 18} ${y0 - 6} L${cx + 18} ${ye + tl} Q${cx} ${ye + 5 * u + 2} ${cx - 18} ${ye - tl}Z` });
          A.attr(e.lash, { d: `M${cx - 14} ${ye - tl * 0.8 + (u < 0.05 ? 7 : 0)} Q${cx} ${ye + 5 * u + 2 - (u < 0.05 ? 3 : 0)} ${cx + 14} ${ye + tl * 0.8 + (u < 0.05 ? 7 : 0)}` });
          const yl = 254 - 36 * p.lidL;
          A.attr(e.lidL, { d: `M${cx - 18} 262 L${cx + 18} 262 L${cx + 18} ${yl + 2} Q${cx} ${yl - 8 * p.lidL} ${cx - 18} ${yl + 2}Z` });
        });
        brows.forEach((b, i) => {
          const side = i ? 1 : -1, by = 208 - p.browY - side * p.browD / 2 - (p.eyeS - 1) * 18;
          A.tf(b, (i ? 226 : 174) + gzx * 1.5, by, side * p.browT, 1, 1);
        });
        const my = 284, w = p.mW, c = p.mC, o = Math.max(0, p.mO), sk = p.mSk;
        const md = `M${200 - w} ${my - c + sk} Q200 ${my + c} ${200 + w} ${my - c - sk} Q200 ${my + c + 2 * o} ${200 - w} ${my - c + sk}Z`;
        A.attr(mouth, { d: md }); A.attr(mouthClip, { d: md });
        A.show(tongue, o > 3); A.attr(tongue, { cy: my + o * 0.9 + c * 0.3, rx: w * 0.5, ry: o * 0.45 });
        blush.forEach(b => A.op(b, p.blush));

        /* arms */
        arms.forEach((a, i) => {
          const hx = i ? p.hRx : p.hLx, hy = i ? p.hRy : p.hLy;
          A.attr(a.a, { d: `M${a.sx} ${a.sy} L${hx} ${hy}` }); A.attr(a.h, { cx: hx, cy: hy });
        });

        /* medal */
        A.show(medal, p.medal > 0.01);
        if (p.medal > 0.01) {
          const ms = Math.max(0.01, p.mpop) * p.medal;
          A.tf(medal, p.hRx + 4, p.hRy - 36, Math.sin(t * 2.3) * 5, ms, ms, 0, 36);
          const ph = (s.mt % 1.8) / 1.8; A.tf(shine, lerp(-55, 55, E.inOut(seg(ph, 0, 0.4))), 0, 22, 1, 1);
        }

        /* ball */
        A.show(ballG, ballOp > 0.01); A.op(ballG, ballOp);
        if (ballOp > 0.01) {
          const bs = 0.72 + 0.28 * bw, shk = grumpW * Math.sin(t * 60) * 2.5;
          A.tf(ballG, shk, p.by, 0, bs * (1 + p.bsq), bs * (1 - p.bsq), 200, 340);
          A.tf(ballSpin, 0, 0, p.spin, 1, 1, 200, 240);
          const strobe = p.speed > 0.7 ? 0.25 * Math.sin(t * 90) : 0;
          ballSp.forEach((b, i) => {
            const world = b.a + p.spin, dd = Math.cos((world + 40) * D2R);
            if (b.hl) A.op(b.hl, 0.3 + 0.7 * Math.pow(Math.max(0, dd), 6) + strobe);
            if (p.trem > 0.01 || p.bslen !== 1) {
              const len = p.bslen * (1 + (p.trem > 0.01 ? 0.05 * Math.sin(t * 50 + i) : 0));
              A.attr(b.g, { transform: `translate(${(200 + 54 * Math.sin(b.a * D2R)).toFixed(2)} ${(240 - 54 * Math.cos(b.a * D2R)).toFixed(2)}) rotate(${b.a}) scale(1 ${len.toFixed(3)})` });
            }
          });
          A.op(blurRing, p.speed * 0.32); A.op(blurRing2, p.speed * 0.35);
          A.tf(blurRing2, 0, 0, p.spin * 0.5, 1, 1, 200, 240);
          trails.forEach(tr => { A.op(tr.el, p.trail * tr.o); A.tf(tr.el, 0, 0, p.spin * 0.92 + tr.i * 140 - 150, 1, 1, 200, 240); });
          const sq = p.bfS;
          bEyes.forEach((e, i) => { A.op(e, 1 - sq); A.attr(e, { ry: 7.5 - 2 * p.bfG }); A.op(bGlints[i], 1 - sq); });
          A.op(bSq, sq);
          bBrows.forEach((b, i) => { const side = i ? 1 : -1, ang = side * -(14 + 14 * p.bfG) * (1 - sq * 0.6); A.tf(b, i ? 214 : 186, 232 + 2 * p.bfG - sq * 3, ang, 0.9, 1); });
          A.attr(bMouth, { d: p.bfG > 0.5 ? 'M193 267 Q200 261 207 267' : sq > 0.5 ? 'M192 263 Q200 271 208 263' : 'M195 265 L205 265' });
        }

        /* shadow */
        const lift = Math.max(-p.y, -p.by * bw);
        const shs = Math.max(0.45, 1 - lift / 140) * (bw > 0.5 ? 0.85 : 1);
        A.tf(shadow, 0, 0, 0, shs, shs, 200, 342); A.op(shadow, 0.5 + 0.5 * shs);

        /* pop ring */
        A.show(popRing, p.pop > 0.01 && p.pop < 0.99);
        if (p.pop > 0.01) { A.attr(popRing, { r: 60 + 130 * E.out(p.pop), 'stroke-width': 9 * (1 - p.pop) }); A.op(popRing, 1 - p.pop); }

        /* sparkles */
        const mood = s.mood, mt = s.mt, wB = s.blend;
        for (let i = 0; i < sparks.length; i++) {
          const el = sparks[i];
          if (mood === 'celebrate') {
            const a = i * 36 + 10, r = 150 + (i % 2) * 18, tw = Math.abs(Math.sin(t * 4 + i * 1.3));
            placeSpark(el, 200 + r * Math.cos(a * D2R), 220 + r * 0.8 * Math.sin(a * D2R), 0.6 + 0.7 * tw, wB * tw, t * 90 + i * 20);
          } else if (mood === 'levelup' && i < 5) {
            const tw = Math.abs(Math.sin(t * 3.2 + i * 1.7)), mx = p.hRx + 4, my2 = p.hRy - 72;
            const pts = [[-46, -22], [44, -30], [50, 22], [-40, 30], [6, -52]];
            placeSpark(el, mx + pts[i][0], my2 + pts[i][1], 0.5 + 0.7 * tw, wB * tw * p.mpop, t * 60);
          } else if (mood === 'signature') {
            const u = mt % 4.2, k = seg(u, 2.85, 3.5), a = i * 36 + 18;
            const r = 70 + 150 * E.out(k);
            placeSpark(el, 200 + r * Math.cos(a * D2R), 230 + r * Math.sin(a * D2R), 1.3 * (1 - k * 0.6), k > 0 ? 1 - k : 0, k * 180);
          } else if (mood === 'wink' && i === 0) {
            const k = (mt % 2) / 2, tw = Math.sin(Math.PI * seg(k, 0.05, 0.45));
            placeSpark(el, 252, 206, 0.4 + 0.9 * tw, tw * wB, k * 120);
          } else A.show(el, false);
        }
        /* confetti */
        confetti.forEach((c, i) => {
          if (p.conf < 0.01) { A.show(c.el, false); return; }
          const ph = (mt * c.v * 0.6 + c.o) % 1;
          A.show(c.el, true); A.op(c.el, p.conf * Math.min(1, (1 - ph) * 4));
          A.tf(c.el, c.x + Math.sin(t * 3 + i) * 14 * c.sw / 6, -10 + ph * 380, t * c.sp + i * 30, 1, Math.cos(t * 6 + i));
        });
        /* zzz */
        zs.forEach((z, i) => {
          if (p.zz < 0.01) { A.show(z, false); return; }
          const ph = (t * 0.45 + i / 3) % 1;
          A.show(z, true); A.op(z, p.zz * Math.sin(Math.PI * ph));
          A.tf(z, 262 + ph * 46 + Math.sin(ph * 6) * 6, 158 - ph * 96, -12, 1, 1);
        });
        /* thought dots */
        dots.forEach((d, i) => {
          const k = p.think * seg(mt, 0.2 + i * 0.25, 0.45 + i * 0.25), pul = 1 + 0.08 * Math.sin(t * 3 + i);
          A.show(d, k > 0.01); A.op(d, k * 0.9); A.tf(d, 0, Math.sin(t * 2 + i) * 2, 0, k * pul, k * pul, +d.getAttribute('cx'), +d.getAttribute('cy'));
        });
      },
    };
  },
});

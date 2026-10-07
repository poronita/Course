/* Nib: a compact hedgehog with a crown of faceted blades and tools hidden inside. Curls into a spiky ball that spins (the loader). */
CAST.register({
  id: 'nib', order: 8, name: 'Nib',
  tagline: 'A pocket of tools that rolls into a ball.',
  concept: 'Nib is a small hedgehog. Its back is a bold crown of red and steel blades, and a pair of scissors, a pen nib and a lens hide underneath. The blades bristle with every feeling. When work starts, Nib curls up and spins.',
  signature: 'A crown of seven red blades. Nib curls into a spiky ball, spins with a speed trail, bounces and pops open into a star with its hidden tools out.',
  why: ['The blade crown is one bold shape, even at icon size.', 'The spinning ball is the loader, so people see it every day.', 'The hidden tools pop out when Nib is startled or proud.'],
  risks: ['Hedgehogs are a familiar mascot animal.', 'Sharp blades may feel cold to some users.'],
  voice: 'Hold tight. I am rolling through your photos.',
  scores: { memorable: 5, stylish: 4, expressive: 5, small: 4, fit: 5 },
  palette: ['#E5322B', '#C9D0D8', '#2C2730', '#F7EAD3', '#F2B92E'],
  bg: '#3b2025', iconBg: '#FBE3D6', icon: { viewBox: '62 64 276 276' },

  build(g, A) {
    const CX = 200, CY = 248, lerp = A.lerp, seg = A.seg, E = A.ease;
    const D2R = Math.PI / 180;

    /* ---------- gradients ---------- */
    A.grad('redL', [[0, '#FF8A7C'], [0.45, '#F2443A'], [1, '#D8261F']], {});
    A.grad('redD', [[0, '#D02A22'], [1, '#86100B']], {});
    A.grad('steelL', [[0, '#FFFFFF'], [0.5, '#E3E8EE'], [1, '#B7C0CB']], {});
    A.grad('steelD', [[0, '#B4BDC8'], [1, '#6B7480']], {});
    A.grad('steel', [[0, '#FFFFFF'], [0.3, '#E4E9EF'], [0.68, '#AAB3BF'], [1, '#5B6470']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('gold', [[0, '#FFF2B8'], [0.45, '#F4C64A'], [1, '#B07A0E']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('fur', [[0, '#5E5665'], [0.55, '#36303B'], [1, '#1A161D']], { radial: true, cx: 0.38, cy: 0.3, r: 0.8 });
    A.grad('mask', [[0, '#FFFAF1'], [0.62, '#F7E8CF'], [1, '#DDBF95']], { radial: true, cx: 0.46, cy: 0.36, r: 0.74 });
    A.grad('lid', [[0, '#F5E6CC'], [1, '#E8D2AF']], {});
    A.grad('eye', [[0, '#6E3C3E'], [0.5, '#25161A'], [1, '#0A0608']], { radial: true, cx: 0.5, cy: 0.8, r: 0.72 });
    A.grad('paw', [[0, '#F8E6CD'], [1, '#C79B74']], { radial: true, cx: 0.4, cy: 0.35, r: 0.75 });
    A.grad('medal', [[0, '#FFF6C8'], [0.45, '#F7C948'], [0.82, '#D8951A'], [1, '#93600A']], { radial: true, cx: 0.36, cy: 0.3, r: 0.8 });
    A.grad('glass', [[0, '#FFFFFF', 0.95], [0.5, '#CDEBFF', 0.6], [1, '#7AB6E8', 0.45]], { radial: true, cx: 0.35, cy: 0.3, r: 0.8 });
    A.grad('shadow', [[0, '#000', 0.55], [1, '#000', 0]], { radial: true });
    A.grad('nose', [[0, '#5A4045'], [1, '#160E10']], { radial: true, cx: 0.4, cy: 0.3, r: 0.8 });
    A.grad('disc', [[0, '#E5322B', 0], [0.62, '#E5322B', 0], [0.8, '#E5322B', 0.32], [0.93, '#F4F6F9', 0.22], [1, '#F4F6F9', 0]], { radial: true });

    /* ---------- spine makers (drawn pointing up, base at 0,0) ---------- */
    /* A faceted blade: light left facet, dark right facet, a crisp ridge and a glint along the edge. */
    function blade(parent, w, L, kind) {
      const e = A.el('g', {}, parent), red = kind === 'red';
      const out = `M${-w / 2} 0 C${-w * 0.52} ${-L * 0.38} ${-w * 0.2} ${-L * 0.78} 0 ${-L} C${w * 0.2} ${-L * 0.78} ${w * 0.52} ${-L * 0.38} ${w / 2} 0Z`;
      A.el('path', { d: out, fill: A.url(red ? 'redL' : 'steelL') }, e);
      A.el('path', { d: `M0 ${-L} C${w * 0.2} ${-L * 0.78} ${w * 0.52} ${-L * 0.38} ${w / 2} 0 L${w * 0.06} 0Z`, fill: A.url(red ? 'redD' : 'steelD') }, e);
      A.el('path', { d: out, fill: 'none', stroke: red ? '#5A0805' : '#3B424D', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, e);
      const hl = A.el('path', { d: `M${-w * 0.36} ${-L * 0.22} C${-w * 0.33} ${-L * 0.52} ${-w * 0.16} ${-L * 0.8} ${-w * 0.03} ${-L * 0.94}`, stroke: '#fff', 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round', opacity: 0.5 }, e);
      return { g: e, hl };
    }
    function scissors(parent, L) {
      const e = A.el('g', {}, parent), py = -L * 0.32, Lb = L + py, parts = [];
      for (const side of [1, -1]) {
        const bg = A.el('g', {}, e), inner = A.el('g', { transform: `scale(${side} 1)` }, bg);
        A.el('path', { d: 'M5 16 L1.5 3', stroke: '#3A333F', 'stroke-width': 3.4, 'stroke-linecap': 'round' }, inner);
        A.el('circle', { cx: 7, cy: 22, r: 6.4, fill: 'none', stroke: '#E5322B', 'stroke-width': 4.2 }, inner);
        A.el('path', { d: `M-3.6 3 L-0.6 ${-Lb} Q6 ${-Lb * 0.42} 4 2Z`, fill: A.url('steel'), stroke: '#3B424D', 'stroke-width': 1.3, 'stroke-linejoin': 'round' }, inner);
        parts.push(bg);
      }
      A.el('circle', { cx: 0, cy: py, r: 2.8, fill: '#F4C64A', stroke: '#7A4B05', 'stroke-width': 0.8 }, e);
      return { g: e, blades: parts, py };
    }
    function penNib(parent, w, L) {
      const e = A.el('g', {}, parent);
      A.el('path', { d: `M0 ${-L} C${w * 0.16} ${-L * 0.76} ${w * 0.54} ${-L * 0.52} ${w * 0.48} ${-L * 0.22} L${w * 0.36} 0 L${-w * 0.36} 0 L${-w * 0.48} ${-L * 0.22} C${-w * 0.54} ${-L * 0.52} ${-w * 0.16} ${-L * 0.76} 0 ${-L}Z`, fill: A.url('gold'), stroke: '#6E4404', 'stroke-width': 1.4, 'stroke-linejoin': 'round' }, e);
      A.el('path', { d: `M0 ${-L + 3} L0 ${-L * 0.42}`, stroke: '#5A3703', 'stroke-width': 1.4 }, e);
      A.el('circle', { cx: 0, cy: -L * 0.38, r: 3, fill: '#3A2405' }, e);
      A.el('path', { d: `M${-w * 0.3} ${-L * 0.24} C${-w * 0.36} ${-L * 0.5} ${-w * 0.12} ${-L * 0.7} ${-w * 0.03} ${-L + 6}`, stroke: '#fff', 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round', opacity: 0.6 }, e);
      return { g: e };
    }
    function lens(parent, L) {
      const e = A.el('g', {}, parent), r = 13, cy = -L + r + 1;
      A.el('path', { d: `M0 0 L0 ${cy + r}`, stroke: '#3A333F', 'stroke-width': 6, 'stroke-linecap': 'round' }, e);
      A.el('circle', { cx: 0, cy, r, fill: A.url('glass'), stroke: '#D9DFE6', 'stroke-width': 5 }, e);
      A.el('circle', { cx: 0, cy, r: r + 2.5, fill: 'none', stroke: '#3B424D', 'stroke-width': 1.2 }, e);
      A.el('path', { d: `M-7 ${cy - 2} A8 8 0 0 1 -1 ${cy - 8}`, stroke: '#fff', 'stroke-width': 2.4, fill: 'none', 'stroke-linecap': 'round', opacity: 0.9 }, e);
      return { g: e };
    }

    /* ---------- layers ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 342, rx: 86, ry: 12, fill: A.url('shadow') }, g);
    const fxBack = A.el('g', {}, g);
    const popRing = A.el('circle', { cx: 200, cy: 230, r: 60, fill: 'none', stroke: '#FFD36B', 'stroke-width': 6 }, fxBack);
    const puffs = [-1, 1].map(sd => { const pg = A.el('g', {}, fxBack); [[0, 0, 9], [sd * 12, 3, 6], [-sd * 10, 4, 5]].forEach(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#EADCC6' }, pg)); return pg; });
    const root = A.el('g', {}, g);
    const toolG = A.el('g', {}, root);
    const backG = A.el('g', {}, root);
    const feet = [176, 224].map(x => {
      const f = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 0, rx: 16, ry: 9, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1.2 }, f);
      A.el('path', { d: 'M-4 3.5 L-4 7.5 M3 3.5 L3 7.5', stroke: '#8E6646', 'stroke-width': 1.2, 'stroke-linecap': 'round' }, f);
      return { f, x };
    });
    A.el('ellipse', { cx: CX, cy: CY, rx: 88, ry: 85, fill: A.url('fur') }, root);
    A.el('path', { d: `M274 ${CY - 52} A88 85 0 0 1 262 ${CY + 62}`, stroke: '#FF8C7C', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', opacity: 0.6 }, root);
    const frontG = A.el('g', {}, root);
    const ears = [[150, -1], [250, 1]].map(([x, sd]) => {
      const e = A.el('g', {}, root);
      A.el('ellipse', { cx: 0, cy: 0, rx: 12, ry: 13.5, fill: '#4A4150', stroke: '#18141B', 'stroke-width': 1.2 }, e);
      A.el('ellipse', { cx: 0, cy: 1.5, rx: 7.5, ry: 9, fill: '#EFA497' }, e);
      return { e, x, sd };
    });

    /* spines: a crown of 7 red blades behind, 6 steel blades in front, 3 tools hidden underneath */
    const spines = [];
    for (let i = 0; i < 7; i++) {
      const th = -84 + 28 * i, L = 102 - 0.38 * Math.abs(th);
      spines.push(Object.assign(blade(backG, 46, L, 'red'), { th, R: 64, i, front: false }));
    }
    for (let i = 0; i < 6; i++) {
      const th = -70 + 28 * i, L = 66 - 0.2 * Math.abs(th);
      spines.push(Object.assign(blade(frontG, 30, L, 'steel'), { th, R: 62, i: i + 10, front: true }));
    }
    const sc = scissors(toolG, 70), tools = [
      Object.assign(sc, { th: -42, L: 70, k: 1 }),
      Object.assign(penNib(toolG, 26, 62), { th: 14, L: 62, k: 0.75 }),
      Object.assign(lens(toolG, 70), { th: 42, L: 70, k: 0.9 }),
    ];

    /* face */
    const face = A.el('g', {}, root);
    A.el('path', { d: 'M200 206 C190 190 168 185 151 194 C134 204 127 232 131 260 C137 292 165 318 200 319 C235 318 263 292 269 260 C273 232 266 204 249 194 C232 185 210 190 200 206Z', fill: A.url('mask') }, face);
    A.el('ellipse', { cx: 200, cy: 278, rx: 25, ry: 17, fill: '#FFFBF3', opacity: 0.9 }, face);
    const blush = [156, 244].map(x => A.el('ellipse', { cx: x, cy: 271, rx: 11, ry: 6, fill: '#FF6F62', opacity: 0.35 }, face));
    const EY = 240;
    const eyes = [176, 224].map(cx => {
      const eg = A.el('g', {}, face);
      const cid = A.id('eye' + cx), cp = A.el('clipPath', { id: cid }, A.defs);
      A.el('ellipse', { cx, cy: EY, rx: 14, ry: 18 }, cp);
      const inner = A.el('g', { 'clip-path': `url(#${cid})` }, eg);
      A.el('ellipse', { cx, cy: EY, rx: 14, ry: 18, fill: A.url('eye') }, inner);
      const pupil = A.el('g', {}, inner);
      A.el('ellipse', { cx, cy: EY + 3, rx: 9, ry: 11.5, fill: '#120A0D' }, pupil);
      A.el('ellipse', { cx: cx - 4.5, cy: EY - 7, rx: 5.2, ry: 6.2, fill: '#fff' }, pupil);
      A.el('circle', { cx: cx + 5, cy: EY + 8, r: 2.3, fill: '#fff', opacity: 0.85 }, pupil);
      const lidU = A.el('path', { fill: A.url('lid') }, inner);
      const lidL = A.el('path', { fill: A.url('lid') }, inner);
      const lash = A.el('path', { stroke: '#1A1014', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round' }, eg);
      const arc = A.el('path', { d: `M${cx - 11} ${EY + 4} Q${cx} ${EY - 10} ${cx + 11} ${EY + 4}`, stroke: '#1A1014', 'stroke-width': 4.4, fill: 'none', 'stroke-linecap': 'round' }, face);
      const xs = A.el('path', { d: `M${cx - 8} ${EY - 8} L${cx + 8} ${EY + 8} M${cx + 8} ${EY - 8} L${cx - 8} ${EY + 8}`, stroke: '#1A1014', 'stroke-width': 4, 'stroke-linecap': 'round' }, face);
      return { cx, eg, inner, pupil, lidU, lidL, lash, arc, xs };
    });
    const brows = [176, 224].map(() => A.el('path', { d: 'M-10 2 Q0 -4 10 1', stroke: '#2A2230', 'stroke-width': 4.6, fill: 'none', 'stroke-linecap': 'round' }, face));
    A.el('path', { d: 'M192 264 Q200 260 208 264 Q207 272 200 274 Q193 272 192 264Z', fill: A.url('nose') }, face);
    A.el('ellipse', { cx: 197, cy: 265, rx: 2.6, ry: 1.5, fill: '#fff', opacity: 0.7 }, face);
    const mcid = A.id('mouth'), mclip = A.el('clipPath', { id: mcid }, A.defs);
    const mouthClip = A.el('path', { d: '' }, mclip);
    const mouth = A.el('path', { fill: '#3B1A1C', stroke: '#2A1215', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, face);
    const tongue = A.el('ellipse', { cx: 200, cy: 294, rx: 6, ry: 4, fill: '#F0786E', 'clip-path': `url(#${mcid})` }, face);

    /* medal (held in the right hand) */
    const medal = A.el('g', {}, root);
    const medalIn = A.el('g', {}, medal);
    A.el('path', { d: 'M-13 20 L-22 62 L-13 55 L-6 64 L-2 22Z', fill: '#C61E17', stroke: '#7E0C08', 'stroke-width': 1 }, medalIn);
    A.el('path', { d: 'M13 20 L22 62 L13 55 L6 64 L2 22Z', fill: '#E5322B', stroke: '#7E0C08', 'stroke-width': 1 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 34, fill: A.url('medal'), stroke: '#7A4B05', 'stroke-width': 1.8 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 26, fill: 'none', stroke: '#B57A12', 'stroke-width': 2.2 }, medalIn);
    A.el('circle', { cx: 0, cy: 0, r: 29, fill: 'none', stroke: '#FFF3C4', 'stroke-width': 1, opacity: 0.8 }, medalIn);
    A.el('text', { x: 0, y: 7, 'text-anchor': 'middle', 'font-family': 'Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif', 'font-weight': 900, 'font-size': 19, 'letter-spacing': 0.5, fill: '#6B3F02', text: 'LV 8' }, medalIn);
    const shcid = A.id('shine'), shclip = A.el('clipPath', { id: shcid }, A.defs);
    A.el('circle', { cx: 0, cy: 0, r: 34 }, shclip);
    const shineG = A.el('g', { 'clip-path': `url(#${shcid})` }, medalIn);
    const shine = A.el('rect', { x: -8, y: -50, width: 13, height: 100, fill: '#fff', opacity: 0.75 }, shineG);

    /* arms (shoulders sit on the fur rim, outside the face) */
    const arms = [134, 266].map(sx => {
      const a = A.el('path', { stroke: '#2C2730', 'stroke-width': 12, fill: 'none', 'stroke-linecap': 'round' }, root);
      const h = A.el('circle', { r: 9, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1.2 }, root);
      return { a, h, sx, sy: 282 };
    });

    /* ---------- the ball ---------- */
    const BY = 262;
    const ballG = A.el('g', {}, g);
    const disc = A.el('circle', { cx: 200, cy: BY, r: 116, fill: A.url('disc'), opacity: 0 }, ballG);
    const trails = [[112, '#E5322B', 7, 200, 0.85], [112, '#FFFFFF', 3, 140, 0.8], [124, '#E5322B', 4, 110, 0.5]].map(([r, c, w, len, o], i) => ({
      el: A.el('circle', { cx: 200, cy: BY, r, fill: 'none', stroke: c, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-dasharray': `${len} 2000` }, ballG), o, i,
    }));
    const ballSpin = A.el('g', {}, ballG);
    const ballSp = [];
    for (let i = 0; i < 16; i++) {
      const a = i * 360 / 16, red = i % 2 === 0;
      const b = blade(ballSpin, red ? 34 : 26, red ? 50 : 36, red ? 'red' : 'steel');
      ballSp.push(Object.assign(b, { a, red }));
    }
    const placeBallSp = len => ballSp.forEach(b => A.attr(b.g, { transform: `translate(${(200 + 50 * Math.sin(b.a * D2R)).toFixed(2)} ${(BY - 50 * Math.cos(b.a * D2R)).toFixed(2)}) rotate(${b.a}) scale(1 ${len.toFixed(3)})` }));
    placeBallSp(1);
    A.el('circle', { cx: 200, cy: BY, r: 62, fill: A.url('fur') }, ballG);
    A.el('circle', { cx: 200, cy: BY, r: 62, fill: 'none', stroke: '#FF8C7C', 'stroke-width': 2.5, opacity: 0.55, 'stroke-dasharray': '86 400', transform: `rotate(-24 200 ${BY})` }, ballG);
    A.el('circle', { cx: 200, cy: BY + 6, r: 38, fill: A.url('mask') }, ballG);
    const bFace = A.el('g', {}, ballG);
    const bEyes = [187, 213].map(cx => A.el('ellipse', { cx, cy: BY + 1, rx: 5.5, ry: 7.5, fill: '#140B0E' }, bFace));
    const bGlints = [187, 213].map(cx => A.el('circle', { cx: cx - 1.8, cy: BY - 2, r: 1.9, fill: '#fff' }, bFace));
    const bSq = A.el('path', { d: `M181 ${BY - 6} L191 ${BY} L181 ${BY + 6} M219 ${BY - 6} L209 ${BY} L219 ${BY + 6}`, stroke: '#140B0E', 'stroke-width': 3.6, fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, bFace);
    const bBrows = [187, 213].map(() => A.el('path', { d: 'M-8 0 L8 0', stroke: '#2A2230', 'stroke-width': 4, 'stroke-linecap': 'round' }, bFace));
    A.el('path', { d: `M195 ${BY + 13} Q200 ${BY + 10} 205 ${BY + 13} Q204 ${BY + 18} 200 ${BY + 19} Q196 ${BY + 18} 195 ${BY + 13}Z`, fill: A.url('nose') }, bFace);
    const bMouth = A.el('path', { d: '', stroke: '#2A1215', 'stroke-width': 2.6, fill: 'none', 'stroke-linecap': 'round' }, bFace);
    [189, 211].forEach(x => A.el('circle', { cx: x, cy: BY + 36, r: 6.5, fill: A.url('paw'), stroke: '#8E6646', 'stroke-width': 1 }, ballG));
    /* grumpy mark */
    const anger = A.el('g', {}, ballG);
    const AM = 'M-11 -4 Q-4 -4 -4 -11 M4 -11 Q4 -4 11 -4 M11 4 Q4 4 4 11 M-4 11 Q-4 4 -11 4';
    A.el('path', { d: AM, stroke: '#1A1014', 'stroke-width': 8, fill: 'none', 'stroke-linecap': 'round' }, anger);
    A.el('path', { d: AM, stroke: '#FF5A4A', 'stroke-width': 4, fill: 'none', 'stroke-linecap': 'round' }, anger);

    /* ---------- front effects ---------- */
    const fx = A.el('g', {}, g);
    const steam = [0, 1].map(() => A.el('path', { d: 'M-8 4 Q-12 -4 -4 -6 Q-2 -13 5 -9 Q12 -9 10 -1 Q14 5 6 7 L-6 7Z', fill: '#F2F4F7' }, fx));
    const STAR = 'M0 -10 Q1.4 -1.4 10 0 Q1.4 1.4 0 10 Q-1.4 1.4 -10 0 Q-1.4 -1.4 0 -10Z';
    const sparks = Array.from({ length: 10 }, (_, i) => A.el('path', { d: STAR, fill: i % 3 === 0 ? '#FFD36B' : '#FFFFFF' }, fx));
    const r0 = A.rng(808);
    const confetti = Array.from({ length: 18 }, (_, i) => ({
      el: A.el('rect', { x: -4, y: -2.5, width: 8, height: 5, rx: 1, fill: ['#E5322B', '#F4C64A', '#DDE3EA', '#F7EAD3', '#FF8C7C'][i % 5] }, fx),
      x: 40 + r0() * 320, v: 0.55 + r0() * 0.5, o: r0(), sp: (r0() - 0.5) * 900, sw: r0() * 6,
    }));
    const zs = [0, 1, 2].map(i => A.el('text', { x: 0, y: 0, 'font-family': 'Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif', 'font-weight': 800, 'font-size': 18 + i * 6, fill: '#DDE3EA', text: 'z' }, fx));
    const dots = [[300, 104, 4.5], [318, 80, 7], [342, 50, 11]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#F7EAD3' }, fx));
    const startle = A.el('g', {}, fx);
    [[-26, -6], [0, -12], [26, -6]].forEach(([x, y], i) => A.el('path', { d: `M${x * 0.55} ${y * 0.55 - 6} L${x} ${y - 14}`, stroke: '#FFD36B', 'stroke-width': 4, 'stroke-linecap': 'round' }, startle));

    /* ---------- poses ---------- */
    const BASE = {
      x: 0, y: 0, rot: 0, sx: 1, sy: 1, spread: 0.9, slen: 1, trem: 0, lean: 0, rip: 0, ripA: 0, snip: 0, tools: 0,
      lidU: 0, lidL: 0, eyeS: 1, lidTilt: 0, arcL: 0, arcR: 0, xx: 0, browY: 0, browD: 0, browT: 0,
      mW: 9, mC: 2.5, mO: 0, mSk: 0, blush: 0.35, ear: 0, gx: 0, gy: 0, gw: 0,
      hLx: 126, hLy: 304, hRx: 274, hRy: 304, foot: 0,
      ball: 0, spin: 0, speed: 0, trail: 0, by: 0, bsq: 0, bfS: 0, bfG: 0, bslen: 1,
      medal: 0, mpop: 0, zz: 0, think: 0, conf: 0, pop: 0, puff: 0,
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
          const sn = t % 9.1; p.tools = sn < 1.3 ? 0.55 * Math.sin(Math.PI * sn / 1.3) : 0;
          p.snip = sn > 0.3 && sn < 1.0 ? Math.max(0, Math.sin((sn - 0.3) / 0.35 * Math.PI)) : 0;
          break;
        }
        case 'happy': {
          const b = Math.abs(Math.sin(mt * 5.2)), land = Math.max(0, 1 - b / 0.22);
          p.y = -b * 14; p.sy += 0.04 * b - 0.09 * land; p.sx += 0.07 * land;
          p.arcL = 1; p.arcR = 1; p.mW = 13; p.mC = 6; p.mO = 8; p.browY = 5; p.blush = 0.7; p.ear = 0.5;
          p.slen = 1.06 + 0.05 * Math.sin(mt * 10.4); p.spread = 0.94; p.rot = 4 * Math.sin(mt * 2.6);
          p.hLx = 118; p.hLy = 290 - b * 10; p.hRx = 282; p.hRy = 290 - b * 10;
          break;
        }
        case 'wink': {
          const w = E.out(seg(mt, 0, 0.16));
          p.arcR = w; p.mW = 11; p.mC = 6; p.mSk = 4; p.mO = 2.5; p.browD = 7; p.browY = 3; p.rot = -6 * w; p.blush = 0.6;
          p.hRx = 296; p.hRy = 262; p.lean = -7; p.spread = 0.92; p.lidL = 0.3; p.gx = 0.35; p.gy = 0.1; p.gw = 0.6;
          break;
        }
        case 'surprised': {
          const jy = mt < 0.42 ? -30 * Math.sin(Math.PI * mt / 0.42) : 0;
          p.y = jy - 4; p.x = -8 * E.out(seg(mt, 0, 0.3)); p.rot = -4; p.sx = 0.93; p.sy = 1.04 - (mt < 0.06 ? 0.1 : 0);
          p.spread = 1.02; p.slen = 1.3 + 0.08 * A.wobble(mt, 22, 4); p.trem = 0.4 + 1.2 * Math.exp(-3 * mt); p.tools = 0.75;
          p.eyeS = 1.2; p.browY = 12; p.mW = 6; p.mC = -1; p.mO = 12; p.ear = 1; p.blush = 0.2;
          p.hLx = 150; p.hLy = 262; p.hRx = 250; p.hRy = 262;
          break;
        }
        case 'thinking': {
          p.rot = 6; p.gx = 0.85; p.gy = -0.95; p.gw = 0.9; p.browD = -9; p.browY = 2;
          p.mW = 6; p.mC = -1.5; p.mSk = -3; p.lidU = 0.18;
          p.hLx = 190; p.hLy = 308; p.think = 1; p.lean = 8 + 3 * Math.sin(t * 1.5); p.spread = 0.88;
          break;
        }
        case 'working': {
          p.ball = 1; p.spin = t * 480; p.speed = 0.6; p.trail = 0.9;
          p.by = -Math.abs(Math.sin(t * 6)) * 5; p.bsq = 0.03 * Math.sin(t * 12);
          p.browT = -6;
          break;
        }
        case 'celebrate': {
          const per = 0.85, ph = (mt % per) / per, h = Math.sin(Math.PI * ph), v = Math.abs(Math.cos(Math.PI * ph));
          const land = Math.max(0, 1 - Math.min(ph, 1 - ph) / 0.09);
          p.y = -50 * h; p.sy = 1 + 0.1 * v * (1 - land) - 0.16 * land; p.sx = 1 - 0.05 * v * (1 - land) + 0.13 * land;
          const wv = Math.sin(mt * 14) * 6;
          p.hLx = 104; p.hLy = 214 + 8 * land + wv; p.hRx = 296; p.hRy = 214 + 8 * land - wv;
          p.arcL = 1; p.arcR = 1; p.mW = 14; p.mC = 7; p.mO = 14; p.browY = 8; p.blush = 0.75; p.tools = 1;
          p.spread = 1.0; p.slen = 1.2 + 0.06 * Math.sin(mt * 20); p.ear = 1; p.foot = 6 * h; p.conf = 1;
          break;
        }
        case 'sleepy': {
          const nod = Math.sin(t * 0.9);
          p.rot = nod * 5; p.y = 3; p.lidU = 0.78 + 0.14 * Math.max(0, Math.sin(t * 0.45)); p.lidTilt = 4;
          p.browY = -3; p.browT = 6; p.mW = 4; p.mC = 0; p.mO = 3 + 1.5 * Math.sin(t * 1.6);
          p.spread = 1.08; p.slen = 0.78; p.ear = -0.8; p.zz = 1; p.gw = 1; p.gx = 0; p.gy = 0.4; p.blush = 0.5;
          p.hLx = 186; p.hLy = 312; p.hRx = 214; p.hRy = 312; p.sy = 0.98 + Math.sin(t * 1.6) * 0.02;
          break;
        }
        case 'levelup': {
          const pop = E.outBack(seg(mt, 0.05, 0.5)), cyc = mt % 4;
          p.medal = 1; p.mpop = pop;
          p.hRx = 286; p.hRy = 226 - 6 * Math.sin(mt * 3); p.hLx = 118; p.hLy = 292;
          p.gx = 0.8; p.gy = -0.6; p.gw = 0.9 * (seg(cyc, 0.1, 0.3) - seg(cyc, 1.4, 1.7));
          p.mW = 12; p.mC = 6; p.mO = 7; p.lidL = 0.32; p.browY = 6; p.blush = 0.6; p.tools = 0.6;
          p.spread = 0.96; p.slen = 1.14; p.sy *= 1.03; p.ear = 0.8; p.rot = -3; p.y = -5 * Math.abs(Math.sin(mt * 3));
          break;
        }
        case 'signature': {
          const u = mt % 4.2;
          const crouch = E.out(seg(u, 0, 0.28)) * (1 - seg(u, 0.4, 0.5));
          p.sy -= 0.15 * crouch; p.sx += 0.1 * crouch; p.spread -= 0.24 * crouch; p.slen -= 0.24 * crouch;
          p.lidU = 0.65 * crouch; p.browT = -8 * crouch; p.mW = 7; p.mC = 1;
          p.hLx = lerp(126, 156, crouch); p.hRx = lerp(274, 244, crouch); p.hLy = p.hRy = lerp(304, 296, crouch);
          const curl = E.inOut(seg(u, 0.26, 0.5)), open = seg(u, 2.85, 2.97);
          p.ball = curl * (1 - open);
          const tau = Math.max(0, u - 0.4);
          p.spin = spinAt(tau);
          p.speed = Math.min(1, (200 + 900 * Math.min(tau, 1.4)) / 1460) * (1 - 0.35 * seg(u, 2.0, 2.85));
          p.trail = seg(u, 0.5, 0.9) * (1 - 0.5 * seg(u, 2.1, 2.85));
          let by = 0;
          if (u >= 1.9 && u < 2.4) { const q = (u - 1.9) / 0.5; by = -95 * 4 * q * (1 - q); }
          else if (u >= 2.4 && u < 2.85) { const q = (u - 2.4) / 0.45; by = -42 * 4 * q * (1 - q); }
          else if (u > 0.6 && u < 1.9) by = -4 * Math.abs(Math.sin((u - 0.6) * 9));
          p.by = by;
          const hit = c => Math.exp(-Math.pow((u - c) / 0.04, 2));
          p.bsq = 0.2 * hit(1.9) + 0.18 * hit(2.4) + 0.12 * hit(2.85);
          p.puff = Math.max(seg(u, 1.88, 2.3) * (u < 2.3 ? 1 : 0), seg(u, 2.38, 2.75) * (u < 2.75 ? 1 : 0));
          p.bfS = 1; p.bslen = 1 + 0.15 * p.speed;
          if (u >= 2.85) {
            const st = E.outBack(seg(u, 2.85, 3.1)), k = 1 - E.inOut(seg(u, 3.7, 4.2)), w = A.wobble(u - 2.9, 16, 4);
            const S = Object.assign({}, p, {
              spread: 1.06, slen: 1.36 + 0.14 * w, hLx: 98, hLy: 218, hRx: 302, hRy: 218, foot: 12, tools: 1,
              arcL: u < 3.4 ? 1 : 0, arcR: u < 3.4 ? 1 : 0, mO: 13, mC: 7, mW: 14, browY: 9, blush: 0.75, ear: 1,
              y: -40 * (1 - E.out(seg(u, 2.85, 3.3))), sy: 1.06 - 0.06 * seg(u, 2.85, 3.3), sx: 1, lidU: 0, browT: 0, rot: w * 4,
            });
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

        /* poke: squash, hop, blades bristle, tools spring out, startled face, wobble settles */
        const pk = s.poke, imp = pk < 4 ? Math.exp(-7 * pk) : 0, wob = A.wobble(pk, 15, 4.5);
        const hop = pk < 0.45 ? Math.sin(Math.PI * seg(pk, 0.05, 0.45)) : 0, out = pk < 1.2 ? Math.sin(Math.PI * seg(pk, 0, 1.2)) : 0;
        if (pk < 4) {
          const sq = pk < 0.07 ? 1 - pk / 0.07 : 0;
          p.sy *= 1 - 0.16 * sq + 0.05 * hop + 0.035 * wob; p.sx *= 1 + 0.12 * sq - 0.03 * hop - 0.03 * wob;
          p.y -= 18 * hop; p.rot += wob * 8;
          p.slen += 0.4 * out; p.spread += (1.04 - p.spread) * out; p.trem += 1.4 * imp + 0.6 * out;
          p.tools = Math.max(p.tools, 0.9 * out);
          p.eyeS += 0.25 * Math.max(imp, hop * 0.6); p.browY += 11 * out; p.mO += 10 * out; p.mW = lerp(p.mW, 6, out); p.mC = lerp(p.mC, -1, out);
          p.lidU *= 1 - out; p.lidL *= 1 - out; p.arcL *= 1 - out; p.arcR *= 1 - out; p.ear += out;
          p.bslen += 0.3 * imp;
        }
        const gt = s.pokes >= 3 ? 1 : 0;
        grumpW = dt === 0 ? gt : grumpW + (gt - grumpW) * Math.min(1, dt * 10);
        if (grumpW > 0.001) {
          p.ball = lerp(p.ball, 1, grumpW); p.bfG = grumpW; p.bfS *= 1 - grumpW; p.bslen += 0.3 * grumpW;
          p.trem += grumpW; p.spin = lerp(p.spin, Math.sin(t * 40) * 5, grumpW); p.trail *= 1 - grumpW; p.speed *= 1 - grumpW;
          p.by = lerp(p.by, 0, grumpW);
        }
        if (s.hover) { p.ear += 0.3; p.slen += 0.04; }

        const blink = L.blink;
        const lidU = Math.max(p.lidU, blink);
        const lk = s.look || { x: 0, y: 0 };
        const gzx = lerp(lk.x, p.gx, p.gw), gzy = lerp(lk.y, p.gy, p.gw);

        /* root: a little head turn toward the pointer */
        const bw = p.ball, rootOp = 1 - E.inOut(seg(bw, 0.3, 0.7)), ballOp = seg(bw, 0.3, 0.7), shrink = 1 - 0.32 * bw;
        A.show(root, rootOp > 0.01); A.op(root, rootOp);
        A.tf(root, p.x + gzx * 4, p.y, p.rot + gzx * 2.5, p.sx * shrink, p.sy * shrink, 200, 340);

        /* spines */
        const glint = ((t * 0.32) % 1.6) - 0.3;
        for (const sp of spines) {
          let dir = sp.th * p.spread + p.lean * (sp.front ? 1.2 : 1) - gzx * 3;
          let len = p.slen;
          if (p.ripA > 0.01) { const q = (sp.th + 110) / 220, d = q - (p.rip * 1.4 - 0.2), b = p.ripA * Math.exp(-d * d / 0.012); len += b * 0.25; dir += b * 7 * (sp.th >= 0 ? 1 : -1); }
          if (p.trem > 0.01) dir += p.trem * Math.sin(t * 48 + sp.i * 2.3) * 2.2;
          const bx = CX + sp.R * Math.sin(sp.th * D2R), by = CY - sp.R * Math.cos(sp.th * D2R);
          A.tf(sp.g, bx, by, dir, 1, len, 0, 0);
          if (sp.hl) { const q = (sp.th + 110) / 220, d = q - glint; A.op(sp.hl, 0.35 + 0.65 * Math.exp(-d * d / 0.004)); }
        }
        /* hidden tools slide out along their angle */
        for (const tl of tools) {
          const k = A.clamp(p.tools * (0.85 + 0.15 * tl.k)), th = tl.th * p.spread + p.lean - gzx * 3 + (p.trem > 0.01 ? p.trem * Math.sin(t * 40 + tl.th) * 2 : 0);
          const R = lerp(-6, 82, E.out(k)) + 6 * (p.slen - 1);
          A.show(tl.g, k > 0.02);
          A.tf(tl.g, CX + R * Math.sin(th * D2R), CY - R * Math.cos(th * D2R), th, 1, 1, 0, 0);
        }
        { const a = 4 + p.snip * 18; A.tf(sc.blades[0], 0, sc.py, -a, 1, 1); A.tf(sc.blades[1], 0, sc.py, a, 1, 1); }

        /* ears, feet */
        for (const e of ears) A.tf(e.e, e.x + e.sd * p.ear * 1.5 + gzx * 2, 200 - p.ear * 4, e.sd * (22 + p.ear * 10), 1, 1 + p.ear * 0.08, 0, 6);
        feet.forEach((f, i) => A.tf(f.f, f.x + (i ? 1 : -1) * p.foot, 336, 0, 1, 1));

        /* face follows the gaze */
        A.tf(face, gzx * 8, gzy * 5);
        eyes.forEach((e, i) => {
          const cx = e.cx, side = i ? 1 : -1, arc = i ? p.arcR : p.arcL, xx = p.xx;
          A.tf(e.eg, 0, 0, 0, p.eyeS, p.eyeS, cx, EY);
          A.op(e.eg, 1 - Math.max(arc, xx)); A.op(e.arc, arc * (1 - xx)); A.show(e.arc, arc > 0.01 && xx < 0.99);
          A.show(e.xs, xx > 0.01); A.op(e.xs, xx);
          A.tf(e.pupil, gzx * 5.5, gzy * 6);
          const u = Math.min(1, lidU), y0 = EY - 18, ye = y0 + 36 * u, tl = p.lidTilt * side;
          A.attr(e.lidU, { d: `M${cx - 18} ${y0 - 6} L${cx + 18} ${y0 - 6} L${cx + 18} ${ye + tl} Q${cx} ${ye + 5 * u + 2} ${cx - 18} ${ye - tl}Z` });
          A.attr(e.lash, { d: `M${cx - 14} ${ye - tl * 0.8 + (u < 0.05 ? 7 : 0)} Q${cx} ${ye + 5 * u + 2 - (u < 0.05 ? 3 : 0)} ${cx + 14} ${ye + tl * 0.8 + (u < 0.05 ? 7 : 0)}` });
          const yl = EY + 18 - 36 * p.lidL;
          A.attr(e.lidL, { d: `M${cx - 18} ${EY + 26} L${cx + 18} ${EY + 26} L${cx + 18} ${yl + 2} Q${cx} ${yl - 8 * p.lidL} ${cx - 18} ${yl + 2}Z` });
        });
        brows.forEach((b, i) => {
          const side = i ? 1 : -1, by = EY - 28 - p.browY - side * p.browD / 2 - (p.eyeS - 1) * 18;
          A.tf(b, (i ? 226 : 174) + gzx * 1.5, by, side * p.browT, 1, 1);
        });
        const my = 288, w = p.mW, c = p.mC, o = Math.max(0, p.mO), sk = p.mSk;
        const md = `M${200 - w} ${my - c + sk} Q200 ${my + c} ${200 + w} ${my - c - sk} Q200 ${my + c + 2 * o} ${200 - w} ${my - c + sk}Z`;
        A.attr(mouth, { d: md }); A.attr(mouthClip, { d: md });
        A.show(tongue, o > 3); A.attr(tongue, { cy: my + o * 0.9 + c * 0.3, rx: w * 0.5, ry: o * 0.45 });
        blush.forEach(b => A.op(b, p.blush));

        /* arms */
        arms.forEach((a, i) => {
          const hx = i ? p.hRx : p.hLx, hy = i ? p.hRy : p.hLy;
          A.attr(a.a, { d: `M${a.sx} ${a.sy} Q${(a.sx + hx) / 2 + (i ? 6 : -6)} ${(a.sy + hy) / 2 + 4} ${hx} ${hy}` }); A.attr(a.h, { cx: hx, cy: hy });
        });

        /* medal */
        A.show(medal, p.medal > 0.01);
        if (p.medal > 0.01) {
          const ms = Math.max(0.01, p.mpop) * p.medal;
          A.tf(medal, p.hRx + 2, p.hRy - 40, Math.sin(t * 2.3) * 5, ms, ms, 0, 40);
          const ph = (s.mt % 1.8) / 1.8; A.tf(shine, lerp(-60, 60, E.inOut(seg(ph, 0, 0.4))), 0, 22, 1, 1);
        }

        /* ball */
        A.show(ballG, ballOp > 0.01); A.op(ballG, ballOp);
        if (ballOp > 0.01) {
          const bs = 0.72 + 0.28 * bw, shk = grumpW * Math.sin(t * 60) * 2.5;
          A.tf(ballG, shk, p.by, 0, bs * (1 + p.bsq), bs * (1 - p.bsq), 200, 340);
          A.tf(ballSpin, 0, 0, p.spin, 1, 1, 200, BY);
          const strobe = p.speed > 0.7 ? 0.2 * Math.sin(t * 90) : 0;
          ballSp.forEach(b => {
            const world = b.a + p.spin, dd = Math.cos((world + 40) * D2R);
            A.op(b.hl, 0.3 + 0.7 * Math.pow(Math.max(0, dd), 6) + strobe);
          });
          placeBallSp(p.bslen * (1 + (p.trem > 0.01 ? 0.05 * Math.sin(t * 50) : 0)));
          A.op(disc, p.speed * 0.9);
          trails.forEach(tr => { A.op(tr.el, p.trail * tr.o); A.tf(tr.el, 0, 0, p.spin * 0.92 + tr.i * 140 - 150, 1, 1, 200, BY); });
          const sq = p.bfS, gr = p.bfG;
          A.tf(bFace, 0, 0, 0, 1, 1);
          bEyes.forEach((e, i) => { A.op(e, 1 - sq); A.attr(e, { ry: 7.5 - 2.5 * gr }); A.op(bGlints[i], 1 - sq); });
          A.op(bSq, sq);
          bBrows.forEach((b, i) => { const side = i ? 1 : -1, ang = side * -(10 + 22 * gr) * (1 - sq * 0.6) + (1 - gr) * (1 - sq) * side * 6; A.tf(b, i ? 213 : 187, BY - 10 + 3 * gr - sq * 3, ang, 1, 1); });
          A.attr(bMouth, { d: gr > 0.5 ? `M193 ${BY + 27} Q200 ${BY + 21} 207 ${BY + 27}` : sq > 0.5 ? `M192 ${BY + 24} Q200 ${BY + 32} 208 ${BY + 24}` : `M195 ${BY + 25} Q200 ${BY + 27} 205 ${BY + 25}` });
          A.show(anger, gr > 0.05); A.op(anger, gr);
          if (gr > 0.05) {
            const pu = 1 + 0.18 * Math.max(0, Math.sin(t * 9)); A.tf(anger, 232, BY - 34, 0, pu, pu);
            steam.forEach((st, i) => { const ph = (t * 1.3 + i * 0.5) % 1, sd = i ? 1 : -1; A.show(st, true); A.op(st, gr * 0.85 * (1 - ph)); A.tf(st, 200 + shk + sd * (50 + 26 * ph), BY - 52 + p.by - 50 * ph, 0, 0.8 + 1.1 * ph, 0.8 + 1.1 * ph); });
          } else steam.forEach(st => A.show(st, false));
        }

        if (!(ballOp > 0.01 && p.bfG > 0.05)) steam.forEach(st => A.show(st, false));
        /* bounce dust */
        puffs.forEach((pf, i) => {
          if (p.puff < 0.01 || p.puff > 0.99) { A.show(pf, false); return; }
          const k = E.out(p.puff), sd = i ? 1 : -1; A.show(pf, true);
          A.tf(pf, 200 + sd * (58 + 40 * k), 334 - 10 * k, 0, 0.5 + 0.7 * k, 0.5 + 0.7 * k); A.op(pf, 0.55 * (1 - p.puff));
        });

        /* shadow */
        const lift = Math.max(-p.y, -p.by * bw);
        const shs = Math.max(0.45, 1 - lift / 140) * (bw > 0.5 ? 0.85 : 1);
        A.tf(shadow, 0, 0, 0, shs, shs, 200, 342); A.op(shadow, 0.5 + 0.5 * shs);

        /* pop ring */
        A.show(popRing, p.pop > 0.01 && p.pop < 0.99);
        if (p.pop > 0.01) { A.attr(popRing, { r: 60 + 140 * E.out(p.pop), 'stroke-width': 9 * (1 - p.pop) }); A.op(popRing, 1 - p.pop); }

        /* startle marks on a poke */
        const stk = pk < 0.7 && s.pokes < 3 ? Math.sin(Math.PI * seg(pk, 0, 0.7)) : 0;
        A.show(startle, stk > 0.01);
        if (stk > 0.01) { A.tf(startle, 200 + p.x, 44 + p.y - 6 * stk, 0, 0.7 + 0.4 * stk, 0.7 + 0.4 * stk); A.op(startle, stk); }

        /* sparkles */
        const mood = s.mood, mt = s.mt, wB = s.blend;
        for (let i = 0; i < sparks.length; i++) {
          const el = sparks[i];
          if (mood === 'celebrate') {
            const a = i * 36 + 10, r = 150 + (i % 2) * 18, tw = Math.abs(Math.sin(t * 4 + i * 1.3));
            placeSpark(el, 200 + r * Math.cos(a * D2R), 210 + r * 0.8 * Math.sin(a * D2R), 0.6 + 0.7 * tw, wB * tw, t * 90 + i * 20);
          } else if (mood === 'levelup' && i < 5) {
            const tw = Math.abs(Math.sin(t * 3.2 + i * 1.7)), mx = p.hRx + 2, my2 = p.hRy - 40;
            const pts = [[-50, -24], [48, -32], [52, 24], [-44, 32], [6, -56]];
            placeSpark(el, mx + pts[i][0], my2 + pts[i][1], 0.5 + 0.7 * tw, wB * tw * p.mpop, t * 60);
          } else if (mood === 'signature') {
            const u = mt % 4.2, k = seg(u, 2.85, 3.5), a = i * 36 + 18;
            const r = 70 + 150 * E.out(k);
            placeSpark(el, 200 + r * Math.cos(a * D2R), 220 + r * Math.sin(a * D2R), 1.3 * (1 - k * 0.6), k > 0 ? 1 - k : 0, k * 180);
          } else if (mood === 'wink' && i === 0) {
            const k = (mt % 2) / 2, tw = Math.sin(Math.PI * seg(k, 0.05, 0.45));
            placeSpark(el, 252, 212, 0.4 + 0.9 * tw, tw * wB, k * 120);
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
          A.tf(z, 286 + ph * 40 + Math.sin(ph * 6) * 6, 150 - ph * 100, -12, 1, 1);
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

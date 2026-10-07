/* Pip Prime: the evolution of Pip. A glossy red knife-handle body with a steel blade quiff
   that flips out to other tools. */
CAST.register({
  id: 'pip', order: 1, name: 'Pip Prime', tagline: 'The pocket knife that grew a face.',
  concept: 'Pip Prime is a red knife handle with a steel belt and a blade for a quiff. Each tool in the app lives in that quiff. It flips one out for every job, then puts it away.',
  signature: 'The steel blade quiff. In the signature move it flips through scissors, a magnifier, a crop corner and a clapper, then spins the blade back and winks.',
  why: ['A red capsule with a blade on top reads as a pocket knife at any size.', 'The tool flip is a move nobody else has.', 'It grows straight out of the Pip people already know.'],
  risks: ['A blade on the head may feel sharp to some parents.', 'The capsule body is simple, so the face does most of the acting.'],
  voice: 'Pick a tool. I have a few.',
  scores: { memorable: 5, stylish: 4, expressive: 5, small: 5, fit: 5 },
  palette: ['#E5322B', '#B3181B', '#D5DAE2', '#1E2036', '#F5B83D', '#F6F1EA'],
  bg: '#3A1618', iconBg: '#1E2036', icon: { viewBox: '86 24 228 228' },
  build(g, A) {
    const { lerp, clamp, seg, ease, wobble } = A;
    const RED = '#E5322B', DEEP = '#7A1216', INK = '#1E2036', STEELO = '#4E5668';
    const PX = 212, PY = 140;               // tool pivot on the dome
    const EYES = [[171, 201], [229, 201]], ERX = 22, ERY = 26;

    /* ---------- gradients ---------- */
    A.grad('body', [[0, '#FF6B5C'], [0.45, '#E5322B'], [1, '#A9151A']], { x1: 0.15, y1: 0, x2: 0.7, y2: 1 });
    A.grad('shade', [[0, '#000', 0], [0.72, '#000', 0], [1, '#4A0508', 0.45]], { radial: true, cx: 0.38, cy: 0.32, r: 0.78 });
    A.grad('bevel', [[0, '#fff', 0.7], [0.45, '#fff', 0.08], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 0.8, y2: 0.9 });
    A.grad('rim', [[0, '#FFD2C4', 0], [0.78, '#FFD2C4', 0], [1, '#FFE6DC', 0.95]], { x1: 0, y1: 0.3, x2: 1, y2: 0.5 });
    A.grad('spec', [[0, '#fff', 0.85], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 0.9, y2: 1 });
    A.grad('arm', [[0, '#FF5E50'], [1, '#B8191C']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('steel', [[0, '#FBFCFE'], [0.35, '#C9CFD8'], [0.55, '#E9ECF1'], [0.8, '#9AA2B0'], [1, '#C7CDD6']]);
    A.grad('steelX', [[0, '#8C95A4'], [0.3, '#F3F5F8'], [0.5, '#C2C8D2'], [0.72, '#EEF1F5'], [1, '#7E8797']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('grind', [[0, '#FFFFFF'], [1, '#C8CED8']], { x1: 0, y1: 0, x2: 1, y2: 0.2 });
    A.grad('rivet', [[0, '#FFFFFF'], [0.45, '#C9CFD8'], [1, '#6F7889']], { radial: true, cx: 0.35, cy: 0.3, r: 0.75 });
    A.grad('sclera', [[0, '#FFFFFF'], [0.75, '#F3F1F4'], [1, '#D9D3DC']], { radial: true, cx: 0.45, cy: 0.38, r: 0.7 });
    A.grad('iris', [[0, '#7FD7FF'], [0.45, '#2F7BD0'], [0.85, '#1B2E73'], [1, '#121A45']], { radial: true, cx: 0.5, cy: 0.62, r: 0.6 });
    A.grad('mitt', [[0, '#FFFFFF'], [1, '#E3D9CF']], { x1: 0.2, y1: 0, x2: 0.8, y2: 1 });
    A.grad('feet', [[0, '#3A3E58'], [1, '#14162A']]);
    A.grad('shadow', [[0, '#000', 0.5], [1, '#000', 0]], { radial: true });
    A.grad('gold', [[0, '#FFF3B8'], [0.45, '#FFC94A'], [1, '#C7810E']], { radial: true, cx: 0.38, cy: 0.32, r: 0.8 });
    A.grad('goldRim', [[0, '#FFE9A0'], [1, '#B06E07']]);
    A.grad('rays', [[0, '#FFE08A', 0.75], [1, '#FFE08A', 0]], { radial: true });
    A.grad('glass', [[0, '#F2FBFF', 0.95], [0.6, '#BFE6FB', 0.85], [1, '#7FC2EC', 0.85]], { radial: true, cx: 0.35, cy: 0.3, r: 0.8 });
    A.grad('photo', [[0, '#7FC8F8'], [1, '#FFE0B5']]);
    A.grad('swoosh', [[0, '#fff', 0], [1, '#fff', 0.7]], { x1: 0, y1: 0, x2: 1, y2: 0 });

    const BODY = 'M122 208A78 78 0 0 1 278 208V288Q278 336 232 336H168Q122 336 122 288Z';
    const BLADE = 'M14 10V-50Q16 -92 -18 -122Q-27 -84 -17 -44L-17 10Z';

    /* ---------- rig ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 350, rx: 92, ry: 13, fill: A.url('shadow') }, g);
    const root = A.el('g', {}, g);
    const swoosh = A.el('path', { fill: 'none', stroke: '#FFE6DC', 'stroke-width': 16, 'stroke-linecap': 'round', opacity: 0 }, root);

    /* tools: behind the body, pivoting on the dome */
    const toolG = A.el('g', {}, root);
    const T = {};
    // blade
    T.blade = A.el('g', {}, toolG);
    const bladeClip = A.id('bladeClip');
    A.el('path', { d: BLADE }, A.el('clipPath', { id: bladeClip }, A.defs));
    A.el('path', { d: BLADE, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 3, 'stroke-linejoin': 'round' }, T.blade);
    A.el('path', { d: 'M-17 10L-17 -44Q-27 -84 -18 -122Q-12 -88 -5 -50L-5 10Z', fill: A.url('grind'), opacity: 0.9 }, T.blade);
    A.el('path', { d: 'M-5 6V-50Q-10 -88 -17 -120', fill: 'none', stroke: '#8D96A6', 'stroke-width': 1.4, opacity: 0.8 }, T.blade);
    A.el('path', { d: 'M7 -30Q9 -40 7 -50', fill: 'none', stroke: '#6A7385', 'stroke-width': 3.2, 'stroke-linecap': 'round', opacity: 0.6 }, T.blade);
    A.el('path', { d: 'M9 4V-50Q10 -82 -8 -106', fill: 'none', stroke: '#fff', 'stroke-width': 2, 'stroke-linecap': 'round', opacity: 0.85 }, T.blade);
    const gleamG = A.el('g', { 'clip-path': `url(#${bladeClip})` }, T.blade);
    const gleam = A.el('rect', { x: -30, y: -10, width: 60, height: 14, fill: '#fff', opacity: 0.85, transform: 'rotate(-30)' }, gleamG);
    // scissors
    T.scissors = A.el('g', {}, toolG);
    const sciA = A.el('g', {}, T.scissors), sciB = A.el('g', {}, T.scissors);
    const SB = 'M-4 -46L-12 -26L-6 -24L4 -46Q9 -84 4 -124Q-9 -92 -4 -46Z';
    for (const [G, f] of [[sciA, 1], [sciB, -1]]) {
      const h = A.el('g', { transform: `scale(${f} 1)` }, G);
      A.el('path', { d: SB, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2.6, 'stroke-linejoin': 'round' }, h);
      A.el('path', { d: 'M1 -54Q4 -86 2 -112', stroke: '#fff', 'stroke-width': 1.6, fill: 'none', opacity: 0.8 }, h);
      A.el('circle', { cx: -15, cy: -18, r: 9.5, fill: 'none', stroke: '#0C0D18', 'stroke-width': 8.5 }, h);
      A.el('circle', { cx: -15, cy: -18, r: 9.5, fill: 'none', stroke: RED, 'stroke-width': 5 }, h);
      A.el('path', { d: 'M-22 -24A9 9 0 0 1 -14 -27', fill: 'none', stroke: '#FFB1A6', 'stroke-width': 1.8, 'stroke-linecap': 'round' }, h);
    }
    A.el('circle', { cx: 0, cy: -46, r: 4.5, fill: A.url('rivet'), stroke: STEELO, 'stroke-width': 1.5 }, T.scissors);
    // magnifier
    T.lens = A.el('g', {}, toolG);
    A.el('rect', { x: -6, y: -50, width: 12, height: 54, rx: 6, fill: INK }, T.lens);
    A.el('rect', { x: -7, y: -54, width: 14, height: 10, rx: 3, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 1.5 }, T.lens);
    A.el('circle', { cx: 0, cy: -84, r: 30, fill: A.url('glass'), stroke: STEELO, 'stroke-width': 12 }, T.lens);
    A.el('circle', { cx: 0, cy: -84, r: 30, fill: 'none', stroke: A.url('steelX'), 'stroke-width': 7 }, T.lens);
    A.el('path', { d: 'M-17 -90A18 18 0 0 1 -6 -102', stroke: '#fff', 'stroke-width': 4.5, 'stroke-linecap': 'round', fill: 'none', opacity: 0.9 }, T.lens);
    // crop corner
    T.crop = A.el('g', {}, toolG);
    A.el('rect', { x: -5, y: -24, width: 10, height: 28, rx: 4, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2 }, T.crop);
    const CROP = 'M-20 -112V-34H40M-40 -92H20V-14';
    A.el('path', { d: CROP, fill: 'none', stroke: STEELO, 'stroke-width': 15, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, T.crop);
    A.el('path', { d: CROP, fill: 'none', stroke: A.url('steel'), 'stroke-width': 9, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, T.crop);
    A.el('path', { d: 'M-20 -112V-34H40', fill: 'none', stroke: RED, 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, T.crop);
    // clapper
    T.clap = A.el('g', {}, toolG);
    A.el('rect', { x: -5, y: -26, width: 10, height: 30, rx: 4, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2 }, T.clap);
    A.el('rect', { x: -34, y: -70, width: 68, height: 46, rx: 5, fill: INK, stroke: '#0C0D18', 'stroke-width': 2.5 }, T.clap);
    A.el('path', { d: 'M-26 -54H26M-26 -43H10M-26 -32H18', stroke: '#fff', 'stroke-opacity': 0.55, 'stroke-width': 2.4, 'stroke-linecap': 'round' }, T.clap);
    const clapBar = A.el('g', {}, T.clap);
    A.el('rect', { x: -34, y: -84, width: 68, height: 13, rx: 3, fill: '#F4F4F6', stroke: '#0C0D18', 'stroke-width': 2.5 }, clapBar);
    A.el('path', { d: 'M-24 -84L-16 -71H-8L-16 -84ZM-4 -84L4 -71H12L4 -84ZM16 -84L24 -71H32L24 -84Z', fill: INK }, clapBar);
    const TOOLS = ['blade', 'scissors', 'lens', 'crop', 'clap'];

    /* feet */
    const feet = A.el('g', {}, root);
    for (const x of [172, 228]) {
      A.el('ellipse', { cx: x, cy: 339, rx: 22, ry: 10, fill: A.url('feet') }, feet);
      A.el('ellipse', { cx: x - 4, cy: 335, rx: 10, ry: 3, fill: '#fff', opacity: 0.18 }, feet);
    }

    /* body */
    const bodyG = A.el('g', {}, root);
    A.el('path', { d: BODY, fill: A.url('body') }, bodyG);
    A.el('path', { d: BODY, fill: A.url('shade') }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: A.url('bevel'), 'stroke-width': 5, transform: 'translate(200 232) scale(.94) translate(-200 -232)' }, bodyG);
    A.el('path', { d: 'M270 288Q270 326 232 328', fill: 'none', stroke: '#5E0A0E', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.28 }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: A.url('rim'), 'stroke-width': 4 }, bodyG);
    A.el('path', { d: 'M136 196Q140 156 176 140Q156 162 150 198Q146 208 136 196Z', fill: A.url('spec'), opacity: 0.75 }, bodyG);
    A.el('ellipse', { cx: 186, cy: 140, rx: 5, ry: 3.2, fill: '#fff', opacity: 0.8, transform: 'rotate(-14 186 140)' }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: DEEP, 'stroke-width': 3.2 }, bodyG);

    // bolster belt
    const belt = A.el('g', {}, bodyG);
    A.el('rect', { x: 118, y: 266, width: 164, height: 25, rx: 8, fill: A.url('steel'), stroke: STEELO, 'stroke-width': 2.6 }, belt);
    A.el('path', { d: 'M126 274H274M124 279H276M126 284H274', stroke: '#6F7889', 'stroke-opacity': 0.22, 'stroke-width': 0.9 }, belt);
    A.el('rect', { x: 124, y: 268.5, width: 152, height: 4, rx: 2, fill: '#fff', opacity: 0.75 }, belt);
    A.el('path', { d: 'M124 293H276', stroke: '#5E0A0E', 'stroke-width': 3, opacity: 0.3 }, belt);
    for (const x of [140, 260]) {
      A.el('circle', { cx: x, cy: 279, r: 6.5, fill: A.url('rivet'), stroke: STEELO, 'stroke-width': 1.6 }, belt);
      A.el('circle', { cx: x - 2, cy: 277, r: 1.6, fill: '#fff' }, belt);
    }
    // engraved mark: tiny folded knife
    A.el('rect', { x: 186, y: 276, width: 22, height: 7, rx: 3.5, fill: 'none', stroke: '#6F7889', 'stroke-width': 1.6, opacity: 0.8 }, belt);
    A.el('path', { d: 'M204 276L212 268.5Q213.5 267.5 213.5 269L209 276', fill: 'none', stroke: '#6F7889', 'stroke-width': 1.6, opacity: 0.8, 'stroke-linejoin': 'round' }, belt);

    // cheeks
    const cheeks = [[150, 236], [250, 236]].map(([x, y]) => A.el('ellipse', { cx: x, cy: y, rx: 12, ry: 6.5, fill: '#FF8E7A', opacity: 0.4 }, bodyG));

    // eyes
    const eyes = EYES.map(([ex, ey], i) => {
      const eg = A.el('g', {}, bodyG);
      const cid = A.id('eye' + i);
      A.el('ellipse', { rx: ERX, ry: ERY }, A.el('clipPath', { id: cid }, A.defs));
      A.el('ellipse', { rx: ERX + 3.5, ry: ERY + 3.5, fill: '#5E0A0E', opacity: 0.35, cy: 1.5 }, eg);
      const inner = A.el('g', { 'clip-path': `url(#${cid})` }, eg);
      A.el('rect', { x: -26, y: -30, width: 52, height: 60, fill: A.url('sclera') }, inner);
      const iris = A.el('g', {}, inner);
      const irisS = A.el('g', {}, iris);
      A.el('circle', { r: 14.5, fill: A.url('iris') }, irisS);
      A.el('circle', { r: 14.5, fill: 'none', stroke: '#0E1338', 'stroke-width': 2.2 }, irisS);
      const pupil = A.el('circle', { r: 7, fill: '#070A1E' }, irisS);
      A.el('path', { d: 'M-9 6A11 11 0 0 0 9 6', stroke: '#9DE6FF', 'stroke-width': 2, fill: 'none', opacity: 0.6, 'stroke-linecap': 'round' }, irisS);
      A.el('ellipse', { cx: -5, cy: -6, rx: 5, ry: 5.8, fill: '#fff' }, iris);
      A.el('circle', { cx: 5.5, cy: 5, r: 2.2, fill: '#fff', opacity: 0.9 }, iris);
      const spiral = A.el('path', { fill: 'none', stroke: INK, 'stroke-width': 3, 'stroke-linecap': 'round' }, inner);
      let d = ''; for (let k = 0; k <= 60; k++) { const th = k / 60 * Math.PI * 4.4, r = 1 + th * 1.35; d += (k ? 'L' : 'M') + (Math.cos(th) * r).toFixed(1) + ' ' + (Math.sin(th) * r).toFixed(1); }
      A.attr(spiral, { d });
      A.el('ellipse', { cy: -ERY + 4, rx: ERX, ry: 8, fill: '#3A0A10', opacity: 0.12 }, inner);
      const lidT = A.el('path', { fill: '#E53A30' }, inner);
      const lidB = A.el('path', { fill: '#E2362D' }, inner);
      const lashT = A.el('path', { fill: 'none', stroke: '#2A0A10', 'stroke-width': 3.2, 'stroke-linecap': 'round' }, eg);
      const lashB = A.el('path', { fill: 'none', stroke: '#5E0A0E', 'stroke-width': 2, 'stroke-linecap': 'round', opacity: 0.6 }, eg);
      A.el('ellipse', { rx: ERX, ry: ERY, fill: 'none', stroke: '#2A0A10', 'stroke-width': 2.6 }, eg);
      return { eg, iris, irisS, pupil, spiral, lidT, lidB, lashT, lashB, ex, ey };
    });
    // brows
    const brows = EYES.map(([ex], i) => A.el('path', { d: i ? 'M-15 2Q2 -7 15 4' : 'M-15 4Q-2 -7 15 2', fill: 'none', stroke: INK, 'stroke-width': 7.5, 'stroke-linecap': 'round' }, bodyG));
    // mouth
    const mouthG = A.el('g', {}, bodyG);
    const mcid = A.id('mouth');
    const mClip = A.el('path', {}, A.el('clipPath', { id: mcid }, A.defs));
    const mouth = A.el('path', { fill: '#3B0A10', stroke: '#2A070C', 'stroke-width': 4.2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, mouthG);
    const mIn = A.el('g', { 'clip-path': `url(#${mcid})` }, mouthG);
    const teeth = A.el('rect', { x: -30, width: 60, height: 5, fill: '#fff' }, mIn);
    const tongue = A.el('ellipse', { fill: '#FF7A86' }, mIn);
    const tip = A.el('path', { d: 'M0 0Q2 9 8 8Q12 5 7 -1Z', fill: '#FF7A86', stroke: '#2A070C', 'stroke-width': 2.4, 'stroke-linejoin': 'round' }, mouthG);
    // pivot pin on the dome (in front of the body)
    const pin = A.el('g', {}, root);
    A.el('path', { d: 'M150 150A76 76 0 0 1 250 150', fill: 'none', stroke: STEELO, 'stroke-width': 8, 'stroke-linecap': 'round' }, pin);
    A.el('path', { d: 'M150 150A76 76 0 0 1 250 150', fill: 'none', stroke: A.url('steel'), 'stroke-width': 4.5, 'stroke-linecap': 'round' }, pin);
    A.el('circle', { cx: PX, cy: PY, r: 12, fill: STEELO }, pin);
    A.el('circle', { cx: PX, cy: PY, r: 8.5, fill: A.url('rivet'), stroke: STEELO, 'stroke-width': 2 }, pin);
    A.el('circle', { cx: PX - 2.5, cy: PY - 2.5, r: 2.2, fill: '#fff' }, pin);

    /* working prop: a photo being cropped */
    const card = A.el('g', {}, root);
    A.el('rect', { x: -50, y: -30, width: 100, height: 62, rx: 7, fill: '#fff', stroke: '#C9CFD8', 'stroke-width': 2 }, card);
    A.el('rect', { x: -44, y: -24, width: 88, height: 50, rx: 4, fill: A.url('photo') }, card);
    A.el('circle', { cx: 22, cy: -10, r: 7, fill: '#FFD45A' }, card);
    A.el('path', { d: 'M-44 26L-18 -4L0 12L14 0L44 26Z', fill: '#2F6F5E' }, card);
    const cropMarks = A.el('path', { fill: 'none', stroke: INK, 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, card);
    const bits = Array.from({ length: 5 }, (_, i) => A.el('rect', { width: 5, height: 3, rx: 1, fill: i % 2 ? '#7FC8F8' : '#2F6F5E' }, root));

    /* arms */
    const mkArm = (parent, side) => {
      const arm = A.el('g', {}, parent);
      const seg_ = A.el('rect', { x: -8.5, y: -8, width: 17, height: 44, rx: 8.5, fill: A.url('arm'), stroke: DEEP, 'stroke-width': 2.6 }, arm);
      A.el('path', { d: 'M-3.5 -2V22', stroke: '#fff', 'stroke-opacity': 0.35, 'stroke-width': 3, 'stroke-linecap': 'round' }, arm);
      const hand = A.el('g', {}, arm);
      const medal = side === 0 ? A.el('g', {}, hand) : null;
      const P = {};
      P.open = A.el('g', {}, hand);
      A.el('ellipse', { cx: -10.5, cy: 3, rx: 5, ry: 8, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2, transform: 'rotate(28 -10.5 3)' }, P.open);
      A.el('path', { d: 'M-11 6Q-12 22 0 23Q12 22 11 6Q11 -6 0 -6Q-11 -6 -11 6Z', fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.open);
      A.el('path', { d: 'M-4 1Q-6 10 -3 16', stroke: '#fff', 'stroke-width': 2.4, fill: 'none', 'stroke-linecap': 'round', opacity: 0.9 }, P.open);
      P.fist = A.el('g', {}, hand);
      A.el('circle', { cx: 0, cy: 8, r: 11.5, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.fist);
      A.el('path', { d: 'M-6 4Q-2 8 4 6', stroke: '#B79E93', 'stroke-width': 1.8, fill: 'none', 'stroke-linecap': 'round' }, P.fist);
      P.thumb = A.el('g', {}, hand);
      A.el('circle', { cx: 0, cy: 8, r: 11.5, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.thumb);
      A.el('rect', { x: -25, y: -1, width: 20, height: 10, rx: 5, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.thumb);
      A.el('path', { d: 'M-3 6Q2 10 8 6M-3 12Q2 16 8 12', stroke: '#B79E93', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, P.thumb);
      P.point = A.el('g', {}, hand);
      A.el('rect', { x: -4.5, y: 6, width: 9, height: 26, rx: 4.5, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.point);
      A.el('circle', { cx: 0, cy: 6, r: 11, fill: A.url('mitt'), stroke: '#8E6F66', 'stroke-width': 2 }, P.point);
      return { arm, hand, P, medal, seg: seg_ };
    };
    const armsG = A.el('g', {}, root);
    const armL = mkArm(armsG, 0);
    const armR = mkArm(A.el('g', { transform: 'matrix(-1 0 0 1 400 0)' }, armsG), 1);

    /* medal (lives in the left hand, kept upright) */
    const medal = armL.medal;
    const medalIn = A.el('g', {}, medal);
    const raysG = A.el('g', {}, medalIn);
    for (let k = 0; k < 10; k++) A.el('path', { d: 'M0 0L-14 -74Q0 -80 14 -74Z', fill: A.url('rays'), transform: `rotate(${k * 30})` }, raysG);
    A.el('path', { d: 'M-6 0L-22 44L-12 40L-6 52L4 6Z', fill: '#C81F22', stroke: '#7A1216', 'stroke-width': 2, 'stroke-linejoin': 'round' }, medalIn);
    A.el('path', { d: 'M6 0L22 44L12 40L6 52L-4 6Z', fill: '#E5322B', stroke: '#7A1216', 'stroke-width': 2, 'stroke-linejoin': 'round' }, medalIn);
    A.el('circle', { r: 33, fill: A.url('goldRim'), stroke: '#8A5406', 'stroke-width': 2.5 }, medalIn);
    A.el('circle', { r: 26, fill: A.url('gold'), stroke: '#B67809', 'stroke-width': 1.6 }, medalIn);
    A.el('text', { x: 0, y: -6, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 11, 'letter-spacing': 1.5, fill: '#8A4B05', text: 'LV' }, medalIn);
    A.el('text', { x: 0, y: 19, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 28, fill: '#7A3F03', text: '8' }, medalIn);
    const shineId = A.id('medalClip');
    A.el('circle', { r: 33 }, A.el('clipPath', { id: shineId }, A.defs));
    const shine = A.el('rect', { x: -9, y: -50, width: 14, height: 100, fill: '#fff', opacity: 0.75 }, A.el('g', { 'clip-path': `url(#${shineId})` }, medalIn));

    /* effects */
    const fx = A.el('g', {}, g);
    const STAR = r => `M0 ${-r}Q0 0 ${r} 0Q0 0 0 ${r}Q0 0 ${-r} 0Q0 0 0 ${-r}Z`;
    const sparks = Array.from({ length: 8 }, (_, i) => A.el('path', { d: STAR(9 + (i % 3) * 3), fill: i % 2 ? '#FFE08A' : '#fff' }, fx));
    const CONF = ['#E5322B', '#F5B83D', '#FFFFFF', '#7FC8F8', '#D5DAE2'];
    const R = A.rng(41);
    const confetti = Array.from({ length: 18 }, (_, i) => ({ e: A.el('rect', { x: -4, y: -2.5, width: 8, height: 5, rx: 1.2, fill: CONF[i % 5] }, fx), x: 60 + R() * 280, sp: 80 + R() * 70, ph: R(), rot: R() * 720 - 360, sw: R() * 6 }));
    const zs = [0, 1, 2].map(i => A.el('text', { 'font-family': 'system-ui, sans-serif', 'font-weight': 900, 'font-size': 18 + i * 6, fill: '#F6F1EA', text: 'z' }, fx));
    const dots = [[272, 150, 5], [288, 128, 7.5], [310, 102, 11]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#F6F1EA' }, fx));
    const shock = A.el('path', { d: 'M110 140L96 128M104 168L86 166M118 116L110 98M290 140L304 128M296 168L314 166M282 116L290 98', stroke: '#FFE08A', 'stroke-width': 5, 'stroke-linecap': 'round' }, fx);
    const glint = A.el('path', { d: STAR(12), fill: '#fff' }, fx);

    /* ---------- poses ---------- */
    // face: lt/lb lids [L,R], by/ba brows [L,R], mouth w c o a, ck cheek, ps pupil, gz gaze override [w,x,y]
    const F = {
      idle: { lt: [0.12, 0.12], lb: [0.04, 0.04], by: [0, 0], ba: [0, 0], mw: 13, mc: 4, mo: 0, ma: 0, ck: 0.4, ps: 1, gz: [0, 0, 0] },
      happy: { lt: [0.08, 0.08], lb: [0.32, 0.32], by: [-7, -7], ba: [3, 3], mw: 17, mc: 9, mo: 9, ma: 0, ck: 0.75, ps: 1, gz: [0, 0, 0] },
      wink: { lt: [0.1, 0.5], lb: [0.22, 0.5], by: [-9, 4], ba: [-2, -6], mw: 15, mc: 7, mo: 3, ma: 4, ck: 0.7, ps: 1, gz: [0.6, 0.2, 0.1] },
      surprised: { lt: [0, 0], lb: [0, 0], by: [-16, -16], ba: [6, 6], mw: 7, mc: 0, mo: 15, ma: 0, ck: 0.3, ps: 0.72, gz: [0.8, 0, -0.1] },
      thinking: { lt: [0.1, 0.1], lb: [0.1, 0.1], by: [3, -11], ba: [-4, 6], mw: 9, mc: -1, mo: 0, ma: -3, ck: 0.3, ps: 1, gz: [1, 0.75, -0.85] },
      working: { lt: [0.24, 0.24], lb: [0.26, 0.26], by: [3, 3], ba: [-8, -8], mw: 7, mc: 2, mo: 0, ma: 2, ck: 0.35, ps: 1, gz: [1, 0, 0.75] },
      celebrate: { lt: [0.05, 0.05], lb: [0.45, 0.45], by: [-13, -13], ba: [4, 4], mw: 20, mc: 10, mo: 16, ma: 0, ck: 0.85, ps: 1, gz: [0.7, 0, -0.3] },
      sleepy: { lt: [0.74, 0.74], lb: [0.12, 0.12], by: [4, 4], ba: [7, 7], mw: 5, mc: 0, mo: 5, ma: 0, ck: 0.5, ps: 1, gz: [1, 0, 0.4] },
      levelup: { lt: [0.04, 0.04], lb: [0.28, 0.28], by: [-11, -9], ba: [-3, -3], mw: 18, mc: 9, mo: 8, ma: 2, ck: 0.85, ps: 1, gz: [1, -0.75, -0.55] },
      signature: { lt: [0.04, 0.04], lb: [0.05, 0.05], by: [-12, -12], ba: [3, 3], mw: 9, mc: 2, mo: 9, ma: 0, ck: 0.6, ps: 0.9, gz: [1, 0.15, -1] },
    };
    // arms: la/ra angle (outward +), lh/rh hand rot, lp/rp pose
    const ARM = {
      idle: [10, 0, 'open', 10, 0, 'open'], happy: [38, -10, 'open', 38, -10, 'open'], wink: [14, 0, 'open', 82, 0, 'thumb'],
      surprised: [128, 20, 'open', 128, 20, 'open'], thinking: [14, 0, 'open', -60, 40, 'fist'], working: [-22, -20, 'fist', -22, -20, 'fist'],
      celebrate: [158, 0, 'open', 158, 0, 'open'], sleepy: [4, 0, 'open', 4, 0, 'open'], levelup: [162, 0, 'fist', 84, 0, 'thumb'], signature: [60, -20, 'open', 60, -20, 'open'],
    };
    const TOOL = { idle: 'blade', happy: 'blade', wink: 'blade', surprised: 'blade', thinking: 'lens', working: 'scissors', celebrate: 'blade', sleepy: 'blade', levelup: 'blade', signature: 'blade' };
    const BASE = { blade: -20, scissors: -6, lens: 16, crop: -6, clap: -4 };

    // tool angle for a mood (no swap)
    const toolAng = (m, mt, t) => {
      const b = BASE[TOOL[m]];
      switch (m) {
        case 'idle': { const p = t % 7; return b + 2.5 * Math.sin(t * 1.3) + (p < 1.2 ? -34 * wobble(p, 15, 4.5) : 0); }
        case 'happy': return b + 9 * Math.sin(mt * 11);
        case 'wink': return b - 6 + 12 * wobble(mt, 14, 5);
        case 'surprised': return lerp(b, 4, ease.out(seg(mt, 0, 0.12))) + 26 * wobble(mt, 20, 4);
        case 'thinking': return b + 5 * Math.sin(t * 1.4);
        case 'working': return b + 3 * Math.sin(mt * 9);
        case 'celebrate': { const ph = (mt % 0.9) / 0.9; return b - 360 * ease.inOut(seg(ph, 0.08, 0.62)); }
        case 'sleepy': return lerp(b, -96, ease.inOut(seg(mt, 0, 1.2))) + 5 * Math.sin(t * 1.1);
        case 'levelup': return -4 + 18 * wobble(mt, 14, 4);
        default: return b;
      }
    };
    const SLOTS = [['scissors', 0.15, 0.45], ['lens', 0.45, 0.75], ['crop', 0.75, 1.05], ['clap', 1.05, 1.5]];
    const SIGP = 3.6;
    // returns [tool, angle, extra]
    const toolPose = (m, mt, t, pv) => {
      if (m === 'signature') {
        const u = mt % SIGP;
        if (u < 0.15) return ['blade', lerp(BASE.blade, -190, ease.in(seg(u, 0, 0.15))), 0];
        for (const [n, a, b] of SLOTS) if (u < b) {
          const tilt = BASE[n];
          if (u < a + 0.1) return [n, lerp(175, tilt, ease.outBack(seg(u, a, a + 0.1))), u - a];
          if (u < b - 0.06) return [n, tilt + 6 * wobble(u - a - 0.1, 22, 7), u - a];
          return [n, lerp(tilt, -190, ease.in(seg(u, b - 0.06, b))), u - a];
        }
        if (u < 2.05) return ['blade', lerp(BASE.blade + 540, BASE.blade, ease.out(seg(u, 1.5, 2.05))), 0];
        return ['blade', BASE.blade + 16 * wobble(u - 2.05, 14, 4.5), 0];
      }
      const nt = TOOL[m], pt = pv === 'signature' ? 'blade' : TOOL[pv] || 'blade';
      if (pt !== nt && mt < 0.5) {
        if (mt < 0.14) return [pt, lerp(toolAng(pv, 9, t), -190, ease.in(seg(mt, 0, 0.14))), 0];
        return [nt, lerp(175, toolAng(m, mt, t), ease.outBack(seg(mt, 0.14, 0.5))), 0];
      }
      return [nt, toolAng(m, mt, t), 0];
    };

    const mixF = (a, b, p) => {
      const o = {};
      for (const k in a) o[k] = Array.isArray(a[k]) ? a[k].map((v, i) => lerp(v, b[k][i], p)) : lerp(a[k], b[k], p);
      return o;
    };
    const mouthD = (w, c, o, a) => {
      const yL = -c + a, yR = -c - a, up = c - o * 0.45, lo = c + o * 2;
      return { d: `M${-w} ${yL}Q0 ${up} ${w} ${yR}Q0 ${lo} ${-w} ${yL}Z`, top: (yL + yR) / 4 + up / 2, bot: (yL + yR) / 4 + lo / 2 };
    };
    const setArm = (A_, ang, hr, pose, shoulder, medalOn, len = 34) => {
      if (pose === 'thumb') hr = 90 - ang;
      A.tf(A_.arm, shoulder[0], shoulder[1], ang);
      A.attr(A_.seg, { height: len + 10 });
      A.tf(A_.hand, 0, len, hr);
      for (const k in A_.P) A.show(A_.P[k], k === pose);
      if (A_.medal) { A.show(A_.medal, medalOn > 0.01); if (medalOn > 0.01) A.tf(A_.medal, 0, 8, -(ang + hr), medalOn, medalOn); }
    };

    return {
      update(s) {
        const { t, mt } = s, m = s.mood, pv = s.prev || 'idle', bl = s.blend;
        const L = A.life(t, 11);
        let f = mixF(F[pv] || F.idle, F[m], bl);
        const ap = ARM[pv] || ARM.idle, an = ARM[m];
        let la = lerp(ap[0], an[0], bl), lh = lerp(ap[1], an[1], bl), lp = bl > 0.5 ? an[2] : ap[2];
        let ra = lerp(ap[3], an[3], bl), rh = lerp(ap[4], an[4], bl), rp = bl > 0.5 ? an[5] : ap[5];
        let lL = 34, rL = 34;
        let bx = 0, by = 0, rot = L.sway * 0.8, sx = 1 - L.breathe * 0.008, sy = 1 + L.breathe * 0.014;
        let medalOn = 0, cardOn = 0, sparkOn = 0, confOn = 0, zOn = 0, dotOn = 0, shockOn = 0, glintOn = 0;
        let blinkAllowed = true, dizzy = false, gleamP = ((t * 0.45) % 1);
        let [tool, tang] = toolPose(m, mt, t, pv);
        let clapOpen = 0, sciOpen = 0.5;

        /* mood acting */
        if (m === 'idle') {
          const p = t % 7;
          if (p < 1.2) { ra = lerp(ra, 30, Math.sin(Math.PI * seg(p, 0, 1.2))); f.by[1] -= 4 * Math.sin(Math.PI * seg(p, 0, 1.2)); }
          const q = (t + 3.5) % 9;
          if (q < 1.6) { const k = Math.sin(Math.PI * seg(q, 0, 1.6)); f.gz = [k, -0.8, 0.3]; f.ma = 2 * k; }
        } else if (m === 'happy') {
          const b = Math.abs(Math.sin(mt * 5.5)); by = -12 * b; sy *= 1 + 0.05 * b - 0.05 * (1 - b) * (1 - b); sx *= 1 - 0.03 * b + 0.04 * (1 - b) * (1 - b);
          la += 10 * Math.sin(mt * 11); ra += 10 * Math.sin(mt * 11 + 1);
        } else if (m === 'wink') {
          rot += 4 * ease.out(seg(mt, 0, 0.3)); glintOn = seg(mt, 0.2, 0.35) * (1 - seg(mt, 0.9, 1.2)); blinkAllowed = false;
          ra += 8 * wobble(mt, 14, 5);
        } else if (m === 'surprised') {
          const j = Math.sin(Math.PI * seg(mt, 0, 0.42));
          by = -24 * j; bx = 8 * ease.out(seg(mt, 0, 0.3)); rot -= 6 * ease.out(seg(mt, 0, 0.3));
          sy *= 1 + 0.1 * j - 0.08 * wobble(mt - 0.42, 18, 6); sx *= 1 - 0.06 * j + 0.06 * wobble(mt - 0.42, 18, 6);
          shockOn = seg(mt, 0.02, 0.1) * (1 - seg(mt, 0.8, 1.1)); blinkAllowed = mt > 1.5;
          la += 8 * wobble(mt, 12, 4); ra += 8 * wobble(mt, 12, 4);
        } else if (m === 'thinking') {
          rot += 4 * ease.inOut(seg(mt, 0, 0.6)); dotOn = 1; rL = lerp(34, 50, bl);
          f.ma += Math.sin(t * 2.2) * 1.5;
        } else if (m === 'working') {
          cardOn = ease.out(seg(mt, 0, 0.3)); sciOpen = 0.5 + 0.5 * Math.sin(mt * 12);
          by = -2 * Math.abs(Math.sin(mt * 6)); la += 3 * Math.sin(mt * 12); ra -= 3 * Math.sin(mt * 12);
        } else if (m === 'celebrate') {
          const ph = (mt % 0.9) / 0.9, air = Math.sin(Math.PI * seg(ph, 0.1, 0.8)), land = seg(ph, 0.8, 1) * (1 - seg(ph, 0.92, 1)) + (ph < 0.1 ? 1 - ph / 0.1 : 0);
          by = -46 * air; sy *= 1 + 0.08 * air - 0.12 * land; sx *= 1 - 0.05 * air + 0.1 * land;
          la += 14 * Math.sin(mt * 14); ra += 14 * Math.sin(mt * 14 + 2); sparkOn = 1; confOn = 1;
        } else if (m === 'sleepy') {
          rot = 5 * Math.sin(t * 0.9); by = 2 * Math.sin(t * 1.8); zOn = 1; blinkAllowed = false;
          f.mo = 4 + 2 * Math.sin(t * 1.8);
        } else if (m === 'levelup') {
          const up = ease.outBack(seg(mt, 0, 0.45));
          medalOn = up; la = lerp(10, 162, up); lp = 'fist';
          by = -16 * Math.sin(Math.PI * seg(mt, 0, 0.4)); sparkOn = seg(mt, 0.3, 0.5);
          rot += -3 * up;
        } else if (m === 'signature') {
          const u = mt % SIGP;
          if (u < 0.15) { const k = ease.out(seg(u, 0, 0.15)); sy *= 1 - 0.08 * k; sx *= 1 + 0.06 * k; f.lt = [0.3, 0.3]; }
          else if (u < 1.5) {
            const sl = SLOTS.findIndex(x => u < x[2]), a0 = SLOTS[sl][1], k = seg(u, a0, a0 + 0.1);
            by = -6 * Math.sin(Math.PI * k); rot += [-4, 4, -4, 3][sl] * ease.out(k);
            f.gz = [1, [0.3, 0.1, 0.3, 0.2][sl], -1];
            la = 60 + 10 * Math.sin(u * 20); ra = 60 + 10 * Math.sin(u * 20 + 1.4);
            if (SLOTS[sl][0] === 'clap') clapOpen = u < 1.24 ? ease.out(seg(u, 1.08, 1.2)) : 1 - ease.in(seg(u, 1.24, 1.29));
            if (SLOTS[sl][0] === 'scissors') sciOpen = 0.5 + 0.5 * Math.sin(u * 40);
          } else if (u < 2.05) {
            const air = Math.sin(Math.PI * seg(u, 1.5, 1.88)), land = Math.sin(Math.PI * seg(u, 1.88, 2.05));
            by = -34 * air; sy *= 1 + 0.08 * air - 0.12 * land; sx *= 1 - 0.05 * air + 0.1 * land;
            la = 150; ra = 150; lh = 0; rh = 0; f.gz = [1, 0, -0.6]; f.mo = 14; f.mw = 9;
            sparkOn = seg(u, 1.95, 2.05);
          } else {
            const k = ease.outBack(seg(u, 2.05, 2.35));
            sparkOn = 1 - seg(u, 2.3, 2.7);
            rot += 5 * k; bx = -4 * k;
            la = lerp(150, -18, k); lh = 0; lp = 'fist';
            ra = lerp(150, 84, k); rh = 0; rp = 'thumb';
            const w = ease.out(seg(u, 2.15, 2.3)) * (1 - seg(u, 3.3, 3.5));
            f = mixF(f, Object.assign({}, F.wink, { gz: [1, 0.2, 0.15] }), ease.out(seg(u, 2.05, 2.25)));
            f.lt[1] = lerp(f.lt[1], 0.5, w); f.lb[1] = lerp(f.lb[1], 0.5, w);
            glintOn = seg(u, 2.2, 2.32) * (1 - seg(u, 2.8, 3.1)); blinkAllowed = false;
          }
        }

        /* pointer */
        const lx = s.look.x, ly = s.look.y;
        const gw = f.gz[0], gx = lerp(lx, f.gz[1], gw), gy = lerp(ly, f.gz[2], gw);
        bx += lx * 3; rot += lx * 2;
        if (s.hover && !s.small) { tang -= 6; f.lt = f.lt.map(v => v * 0.6); }

        /* poke */
        const pk = s.poke, pkW = pk < 1.2 ? Math.exp(-3 * pk) : 0;
        if (pk < 1.2) {
          const w = wobble(pk, 16, 5);
          sx *= 1 + 0.1 * w; sy *= 1 - 0.1 * w; rot += 6 * wobble(pk, 11, 4);
          tang += 40 * wobble(pk, 18, 4);
          if (s.pokes >= 3) dizzy = true;
          else {
            const k = clamp(pkW * 1.6);
            f = mixF(f, F.surprised, k); f.mw = lerp(f.mw, 6, k);
            la += 30 * k; ra += 30 * k;
          }
        }
        if (s.pokes >= 3 && pk < 2) {
          dizzy = true; tool = 'blade'; tang = BASE.blade + pk * 900 * Math.exp(-pk * 0.6);
          rot += 7 * Math.sin(pk * 9); f.mw = 10; f.mc = -2; f.mo = 3; f.ma = 4 * Math.sin(pk * 12);
          f.by = [-8 + 4 * Math.sin(pk * 7), -4 - 4 * Math.sin(pk * 7)]; f.ba = [6, -4];
          la = 40 + 20 * Math.sin(pk * 10); ra = 40 - 20 * Math.sin(pk * 10);
        }

        /* body */
        A.tf(root, bx, by, rot, sx, sy, 200, 345);
        const air = clamp(-by / 50);
        A.attr(shadow, { rx: 92 * (1 - 0.35 * air), opacity: 1 - 0.5 * air });
        A.tf(shadow, 0, 0, 0, 1, 1, 200, 350);
        A.tf(bodyG, lx * 1.5, ly * 1.2);

        /* face */
        const blink = blinkAllowed && !dizzy ? L.blink : 0;
        eyes.forEach((E, i) => {
          let lt = f.lt[i], lb = f.lb[i];
          if (dizzy) { lt = 0; lb = 0; }
          lt = lt + (1 - lt - lb) * blink;
          const sc = 1 + (f.ps < 0.9 ? 0.06 : 0);
          A.tf(E.eg, E.ex + gx * 2, E.ey + gy * 1.5, 0, sc, sc);
          A.tf(E.iris, gx * 7, gy * 7.5);
          A.tf(E.irisS, 0, 0, 0, 1, 1);
          A.attr(E.pupil, { r: 7 * f.ps });
          A.show(E.iris, !dizzy); A.show(E.spiral, dizzy);
          if (dizzy) A.tf(E.spiral, 0, 0, (i ? -1 : 1) * s.poke * 600);
          const y1 = -ERY + 2 * ERY * clamp(lt), y2 = ERY - 2 * ERY * clamp(lb);
          const meet = y1 >= y2 - 0.5;
          const sag = 7 * (1 - clamp(lt) * 0.4), arch = 8;
          const yT = meet ? (y1 + y2) / 2 : y1, yB = meet ? (y1 + y2) / 2 : y2;
          A.attr(E.lidT, { d: `M-30 -32H30V${yT - 2}Q0 ${yT + sag} -30 ${yT - 2}Z` });
          A.attr(E.lidB, { d: `M-30 32H30V${yB + 2}Q0 ${yB - arch} -30 ${yB + 2}Z` });
          const lidOn = lt > 0.05 || meet;
          A.op(E.lashT, lidOn ? 1 : 0);
          const xw = Math.sqrt(Math.max(0, 1 - (yT / ERY) ** 2)) * ERX;
          A.attr(E.lashT, { d: meet ? `M${-ERX + 1} ${yT - 2}Q0 ${yT + sag + 3} ${ERX - 1} ${yT - 2}` : `M${-xw} ${yT - 1}Q0 ${yT + sag + 1} ${xw} ${yT - 1}` });
          const xb = Math.sqrt(Math.max(0, 1 - (yB / ERY) ** 2)) * ERX;
          A.op(E.lashB, lb > 0.08 && !meet ? 0.6 : 0);
          A.attr(E.lashB, { d: `M${-xb} ${yB + 1}Q0 ${yB - arch - 1} ${xb} ${yB + 1}` });
        });
        brows.forEach((B, i) => {
          const ex = EYES[i][0] + gx * 2.5, a = f.ba[i] * (i ? 1 : -1);
          A.tf(B, ex + (i ? 2 : -2), 164 + f.by[i] + gy * 2, a);
        });
        const M = mouthD(f.mw, f.mc, f.mo, f.ma);
        A.attr(mouth, { d: M.d }); A.attr(mClip, { d: M.d });
        A.tf(mouthG, 200 + gx * 3, 246 + gy * 2);
        A.attr(teeth, { y: M.top - 3, x: -f.mw }); A.op(teeth, clamp((f.mo - 5) / 4) * (f.mc > 4 ? 1 : 0));
        A.attr(tongue, { cx: 0, cy: M.bot + 1, rx: Math.max(2, f.mw * 0.55), ry: 5 }); A.op(tongue, clamp(f.mo / 6));
        cheeks.forEach(c => A.op(c, f.ck * 0.6));
        A.show(tip, m === 'working' && bl > 0.5 && !dizzy && pk > 1.2);
        A.tf(tip, f.mw - 3, -f.mc - f.ma + 1, 10 * Math.sin(mt * 6));

        /* tool */
        TOOLS.forEach(n => A.show(T[n], n === tool));
        A.tf(toolG, PX, PY, tang);
        A.attr(gleam, { y: lerp(20, -130, ease.inOut(seg(gleamP, 0, 0.35))) });
        A.tf(sciA, 0, 0, -11 * sciOpen, 1, 1, 0, -46); A.tf(sciB, 0, 0, 11 * sciOpen, 1, 1, 0, -46);
        A.tf(clapBar, 0, 0, -28 * clapOpen, 1, 1, -34, -71);
        // swoosh from angular speed
        const [, tPrev] = toolPose(m, Math.max(0, mt - 0.04), t - 0.04, pv);
        const dA = tang - tPrev;
        const sw = !s.small && Math.abs(dA) > 12 && Math.abs(dA) < 200 && !dizzy;
        A.op(swoosh, sw ? clamp((Math.abs(dA) - 12) / 30) * 0.55 : 0);
        if (sw) {
          const r = 96, a1 = (tPrev - 90) * Math.PI / 180, a2 = (tang - 90) * Math.PI / 180;
          A.attr(swoosh, { d: `M${PX + r * Math.cos(a1)} ${PY + r * Math.sin(a1)}A${r} ${r} 0 0 ${dA > 0 ? 1 : 0} ${PX + r * Math.cos(a2)} ${PY + r * Math.sin(a2)}` });
        }

        /* arms */
        setArm(armL, la, lh, lp, [131, 240], medalOn, lL);
        setArm(armR, ra, rh, rp, [131, 240], 0, rL);
        if (medalOn > 0.01) {
          A.tf(raysG, 0, 0, t * 25, 1, 1);
          A.tf(medalIn, -16, -44);
          const sp = (mt % 2.2) / 2.2;
          A.attr(shine, { x: lerp(-60, 50, ease.inOut(seg(sp, 0.05, 0.45))), transform: 'skewX(-20)' });
        }

        /* card */
        A.show(card, cardOn > 0.01);
        if (cardOn > 0.01) {
          A.tf(card, 200, 290 + (1 - cardOn) * 20, 0, cardOn, cardOn);
          const k = 0.5 + 0.5 * Math.sin(mt * 3), cw = lerp(42, 28, k), ch = lerp(24, 16, k), c = 8;
          A.attr(cropMarks, { d: `M${-cw} ${-ch + c}V${-ch}H${-cw + c}M${cw - c} ${-ch}H${cw}V${-ch + c}M${cw} ${ch - c}V${ch}H${cw - c}M${-cw + c} ${ch}H${-cw}V${ch - c}` });
        }
        bits.forEach((b, i) => {
          if (!cardOn) return A.show(b, false);
          const p = ((mt * 1.3 + i / 5) % 1);
          A.show(b, true);
          A.attr(b, { x: 230 + i * 6 + p * 40, y: 120 + p * p * 120, opacity: 1 - p });
          b.setAttribute('transform', `rotate(${p * 400 + i * 60} ${232 + i * 6 + p * 40} ${121 + p * p * 120})`);
        });

        /* fx */
        const SP = [[96, 120], [312, 96], [84, 230], [322, 210], [140, 70], [270, 52], [110, 300], [300, 300]];
        sparks.forEach((e, i) => {
          if (!sparkOn || s.small) return A.show(e, false);
          A.show(e, true);
          const tw = 0.5 + 0.5 * Math.sin(t * 7 + i * 1.7), sc = sparkOn * (0.4 + 0.8 * tw);
          A.tf(e, SP[i][0], SP[i][1], t * 60 + i * 20, sc, sc);
          A.op(e, sparkOn * (0.4 + 0.6 * tw));
        });
        confetti.forEach((c, i) => {
          if (!confOn || s.small) return A.show(c.e, false);
          A.show(c.e, true);
          const p = (mt * c.sp / 400 + c.ph) % 1;
          A.tf(c.e, c.x + Math.sin(mt * 3 + i) * 14, -10 + p * 380, c.rot * mt + i * 40, 1, 0.6 + 0.4 * Math.sin(mt * 9 + i));
          A.op(c.e, 1 - seg(p, 0.85, 1));
        });
        zs.forEach((z, i) => {
          if (!zOn) return A.show(z, false);
          A.show(z, true);
          const p = ((t * 0.35 + i / 3) % 1);
          A.attr(z, { x: 270 + p * 40 + Math.sin(p * 6) * 6, y: 150 - p * 90 });
          A.op(z, Math.sin(Math.PI * p));
        });
        dots.forEach((d, i) => { A.show(d, dotOn > 0); if (dotOn) A.op(d, clamp(Math.sin(t * 3 - i * 0.7) * 0.4 + 0.6) * seg(mt, 0.2 + i * 0.15, 0.4 + i * 0.15)); });
        A.show(shock, shockOn > 0.01); A.op(shock, shockOn);
        A.show(glint, glintOn > 0.01);
        if (glintOn > 0.01) { A.tf(glint, 262, 170, t * 90, glintOn, glintOn); A.op(glint, glintOn); }
      },
    };
  },
});

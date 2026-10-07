/* Blink: a camera-lens cyclops. One huge lens is its eye. A seven-blade aperture
   blinks, squints and opens wide. The barrel zooms out to frame the shot. */
CAST.register({
  id: 'blink', order: 2, name: 'Blink', tagline: 'One eye. Always in focus.',
  concept: 'Blink is a small red camera with one huge lens for an eye. The aperture blades are its pupil, so it blinks like a real shutter. It frames, focuses and snaps every image you edit.',
  signature: 'The aperture blink: seven steel blades sweep shut and open. In the signature move it zooms its barrel out at you, locks focus, snaps a photo with a flash and holds the print up with pride.',
  why: ['A red body with one giant lens reads as a camera at any size.', 'A real shutter blink is a move no other mascot has.', 'The lens is the tool: it frames, crops and focuses.'],
  risks: ['One eye with no pupil can feel cold if the brows and lids do not act.', 'A camera can hint at a photo app more than a full toolkit.'],
  voice: 'Hold still. Got it.',
  scores: { memorable: 5, stylish: 5, expressive: 4, small: 5, fit: 4 },
  palette: ['#E5322B', '#8E1418', '#D5DAE2', '#1A1D2E', '#2ED3C6', '#F5B83D'],
  bg: '#16303A', iconBg: '#1A1D2E', icon: { viewBox: '94 84 212 212' },
  build(g, A) {
    const { lerp, clamp, seg, ease, wobble } = A;
    const INK = '#1A1D2E', DEEP = '#7E1216', STEELO = '#4C5466', TEAL = '#2ED3C6';
    const CX = 200, CY = 220, RO = 82, RG = 58, RB = 46;   // lens centre, barrel, glass, blade zone
    const SX = 134, SY = 286;                             // left shoulder (right is mirrored)
    const NB = 7, ALPHA = Math.PI * 2 / NB;
    const small = A.small;

    /* ---------- gradients ---------- */
    A.grad('body', [[0, '#FF6E5E'], [0.42, '#E5322B'], [1, '#A3141A']], { x1: 0.15, y1: 0, x2: 0.75, y2: 1 });
    A.grad('shade', [[0, '#000', 0], [0.7, '#000', 0], [1, '#46050A', 0.5]], { radial: true, cx: 0.4, cy: 0.3, r: 0.8 });
    A.grad('bevel', [[0, '#fff', 0.7], [0.4, '#fff', 0.06], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 0.8, y2: 0.9 });
    A.grad('rim', [[0, '#FFD2C4', 0], [0.8, '#FFD2C4', 0], [1, '#FFE6DC', 0.95]], { x1: 0, y1: 0.3, x2: 1, y2: 0.5 });
    A.grad('spec', [[0, '#fff', 0.85], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 0.9, y2: 1 });
    A.grad('arm', [[0, '#FF5E50'], [1, '#B8191C']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('steel', [[0, '#FBFCFE'], [0.3, '#C3C9D3'], [0.52, '#EEF1F5'], [0.78, '#8D96A6'], [1, '#C9CED7']], { x1: 0.1, y1: 0, x2: 0.5, y2: 1 });
    A.grad('steelX', [[0, '#8C95A4'], [0.3, '#F3F5F8'], [0.5, '#C2C8D2'], [0.72, '#EEF1F5'], [1, '#7E8797']], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('mount', [[0, '#4A5263'], [1, '#1D212C']]);
    A.grad('tube', [[0, '#5B6476'], [0.5, '#2A2F3C'], [1, '#141720']], { radial: true, cx: 0.4, cy: 0.35, r: 0.7 });
    A.grad('bezel', [[0, '#2A2F3E'], [1, '#07080D']], { x1: 0.2, y1: 0, x2: 0.8, y2: 1 });
    A.grad('glass', [[0, '#1F3570'], [0.6, '#0D1636'], [1, '#05070F']], { radial: true, cx: 0.45, cy: 0.4, r: 0.6 });
    A.grad('iris', [[0, '#0A3F4C'], [0.78, '#0A3F4C'], [0.84, '#1E9FA6'], [0.93, '#45F0DF'], [1, '#1B8C99']], { radial: true });
    A.grad('pupil', [[0, '#26245E'], [0.5, '#0B0F2A'], [1, '#04050C']], { radial: true, cx: 0.5, cy: 0.5, r: 0.5 });
    A.grad('coat', [[0, '#B66CFF', 0], [0.55, '#B66CFF', 0.0], [0.75, '#9B5CFF', 0.55], [0.9, '#3DE0B8', 0.35], [1, '#3DE0B8', 0]], { radial: true });
    A.grad('refl', [[0, '#fff', 0.85], [1, '#fff', 0.1]], { x1: 0, y1: 0, x2: 1, y2: 1 });
    A.grad('lid', [[0, '#C21D1F'], [0.75, '#E5322B'], [1, '#FF6A5A']]);
    A.grad('lidB', [[0, '#FF6A5A'], [0.25, '#E5322B'], [1, '#B3181B']]);
    A.grad('mitt', [[0, '#FFFFFF'], [0.6, '#DCE1E8'], [1, '#A9B1BE']], { x1: 0.2, y1: 0, x2: 0.8, y2: 1 });
    A.grad('feet', [[0, '#3A3E58'], [1, '#12142A']]);
    A.grad('shadow', [[0, '#000', 0.55], [1, '#000', 0]], { radial: true });
    A.grad('flashW', [[0, '#FFFFFF'], [1, '#C9D6E2']]);
    A.grad('gold', [[0, '#FFF3B8'], [0.45, '#FFC94A'], [1, '#C7810E']], { radial: true, cx: 0.38, cy: 0.32, r: 0.8 });
    A.grad('goldRim', [[0, '#FFE9A0'], [1, '#B06E07']]);
    A.grad('rays', [[0, '#FFE08A', 0.75], [1, '#FFE08A', 0]], { radial: true });
    A.grad('glow', [[0, '#FFFFFF', 1], [0.25, '#FFFFFF', 0.85], [0.55, '#DFF7FF', 0.35], [1, '#DFF7FF', 0]], { radial: true });
    A.grad('shimmer', [[0, '#fff', 0], [0.45, '#CFFFF8', 0.55], [0.5, '#fff', 0.85], [0.55, '#FFD6F2', 0.5], [1, '#fff', 0]], { x1: 0, y1: 0, x2: 1, y2: 0 });
    A.grad('sky', [[0, '#5FD7E8'], [1, '#FFE2B8']]);

    const BODY = 'M128 166Q128 122 168 122L178 99Q180 94 186 94H214Q220 94 222 99L232 122Q272 122 272 166V292Q272 332 232 332H168Q128 332 128 292Z';

    /* ---------- rig ---------- */
    const shadow = A.el('ellipse', { cx: 200, cy: 348, rx: 96, ry: 13, fill: A.url('shadow') }, g);
    const root = A.el('g', {}, g);
    const photoBack = A.el('g', {}, root);

    /* legs and feet */
    const feet = A.el('g', {}, root);
    const legs = [176, 224].map(x => {
      const lg = A.el('g', {}, feet);
      A.el('rect', { x: x - 8, y: 318, width: 16, height: 22, rx: 6, fill: INK }, lg);
      A.el('ellipse', { cx: x + (x < 200 ? -4 : 4), cy: 342, rx: 21, ry: 9.5, fill: A.url('feet') }, lg);
      A.el('ellipse', { cx: x + (x < 200 ? -8 : 0), cy: 338, rx: 9, ry: 2.6, fill: '#fff', opacity: 0.2 }, lg);
      return lg;
    });

    /* top controls: mode dial (left) and shutter button (right) */
    const dial = A.el('g', {}, root);
    A.el('rect', { x: -13, y: -9, width: 26, height: 12, rx: 3, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2 }, dial);
    const dialLines = A.el('path', { fill: 'none', stroke: '#5E6678', 'stroke-width': 1.4 }, dial);
    A.el('rect', { x: -11, y: -8, width: 22, height: 2.4, rx: 1.2, fill: '#fff', opacity: 0.7 }, dial);
    const shutter = A.el('g', {}, root);
    A.el('rect', { x: -7, y: -8, width: 14, height: 11, rx: 3, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2 }, shutter);
    const shCap = A.el('g', {}, shutter);
    A.el('ellipse', { cx: 0, cy: -9, rx: 10, ry: 5, fill: '#E5322B', stroke: DEEP, 'stroke-width': 2 }, shCap);
    A.el('ellipse', { cx: -3, cy: -10.5, rx: 4, ry: 1.5, fill: '#fff', opacity: 0.7 }, shCap);

    /* body */
    const bodyG = A.el('g', {}, root);
    A.el('path', { d: BODY, fill: A.url('body') }, bodyG);
    A.el('path', { d: BODY, fill: A.url('shade') }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: A.url('bevel'), 'stroke-width': 5, transform: 'translate(200 226) scale(.95) translate(-200 -226)' }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: A.url('rim'), 'stroke-width': 4 }, bodyG);
    A.el('path', { d: 'M138 168Q140 136 166 130Q150 146 148 172Q144 180 138 168Z', fill: A.url('spec'), opacity: 0.8 }, bodyG);
    A.el('path', { d: 'M264 296Q264 324 234 326', fill: 'none', stroke: '#5E0A0E', 'stroke-width': 5, 'stroke-linecap': 'round', opacity: 0.3 }, bodyG);
    A.el('path', { d: BODY, fill: 'none', stroke: DEEP, 'stroke-width': 3.2 }, bodyG);
    // hump: hot shoe and flash window
    A.el('rect', { x: 186, y: 87, width: 28, height: 8, rx: 2, fill: A.url('steelX'), stroke: STEELO, 'stroke-width': 2 }, bodyG);
    A.el('path', { d: 'M184 101H216', stroke: '#fff', 'stroke-width': 2, opacity: 0.55, 'stroke-linecap': 'round' }, bodyG);
    const flashWin = A.el('rect', { x: 185, y: 104, width: 30, height: 13, rx: 3.5, fill: A.url('flashW'), stroke: DEEP, 'stroke-width': 2 }, bodyG);
    A.el('path', { d: 'M191 107V114M197 107V114M203 107V114M209 107V114', stroke: '#9FB0C2', 'stroke-width': 1, opacity: 0.8 }, bodyG);
    const flashLit = A.el('rect', { x: 185, y: 104, width: 30, height: 13, rx: 3.5, fill: '#FFFDF0', opacity: 0 }, bodyG);
    // cheeks
    const cheeks = [[150, 306], [250, 306]].map(([x, y]) => A.el('ellipse', { cx: x, cy: y, rx: 11, ry: 6, fill: '#FF8E7A', opacity: 0.4 }, bodyG));
    // mouth
    const mouthG = A.el('g', {}, bodyG);
    const mcid = A.id('mouthClip');
    const mClip = A.el('path', {}, A.el('clipPath', { id: mcid }, A.defs));
    const mouth = A.el('path', { fill: '#3B0A10', stroke: '#2A070C', 'stroke-width': 3.6, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, mouthG);
    const mIn = A.el('g', { 'clip-path': `url(#${mcid})` }, mouthG);
    const teeth = A.el('rect', { x: -30, width: 60, height: 4.5, fill: '#fff' }, mIn);
    const tongue = A.el('ellipse', { fill: '#FF7A86' }, mIn);

    /* ---------- the lens ---------- */
    const rear = A.el('g', {}, root);
    A.el('circle', { r: RO + 4, fill: A.url('mount') }, rear);
    A.el('circle', { r: RO + 4, fill: 'none', stroke: '#0E1016', 'stroke-width': 2 }, rear);
    const tubes = [0, 1, 2].map(k => A.el('circle', { r: RO, fill: A.url('tube'), stroke: k === 1 ? '#8C95A4' : '#0E1016', 'stroke-width': k === 1 ? 3 : 2 }, root));
    const front = A.el('g', {}, root);
    // knurled steel focus ring
    A.el('circle', { r: RO, fill: A.url('steel'), stroke: '#3A4152', 'stroke-width': 2.5 }, front);
    const knurl = A.el('g', {}, front);
    let kd = '';
    for (let k = 0; k < 64; k++) { const a = k / 64 * Math.PI * 2, c = Math.cos(a), s_ = Math.sin(a); kd += `M${(c * 72.5).toFixed(1)} ${(s_ * 72.5).toFixed(1)}L${(c * 80).toFixed(1)} ${(s_ * 80).toFixed(1)}`; }
    A.el('path', { d: kd, stroke: '#5A6273', 'stroke-width': 2.2, opacity: 0.55 }, knurl);
    A.el('path', { d: 'M-50 -61A79 79 0 0 1 20 -77', fill: 'none', stroke: '#fff', 'stroke-width': 2.4, opacity: 0.7, 'stroke-linecap': 'round' }, front);
    // scale ring (rotates with focus)
    A.el('circle', { r: 71.5, fill: '#14161F' }, front);
    const scale = A.el('g', {}, front);
    let sd = '';
    for (let k = -9; k <= 9; k++) { const a = (k * 7 - 90) * Math.PI / 180, r2 = k % 3 ? 68.5 : 66.8; sd += `M${(Math.cos(a) * 70.5).toFixed(1)} ${(Math.sin(a) * 70.5).toFixed(1)}L${(Math.cos(a) * r2).toFixed(1)} ${(Math.sin(a) * r2).toFixed(1)}`; }
    A.el('path', { d: sd, stroke: '#E9EDF3', 'stroke-width': 1.3, opacity: 0.85 }, scale);
    A.el('circle', { cx: 0, cy: -68.5, r: 2.2, fill: TEAL }, scale);
    A.el('path', { d: 'M48 46A66 66 0 0 1 30 59', stroke: '#E9EDF3', 'stroke-width': 1.3, fill: 'none', opacity: 0.5 }, scale);
    A.el('circle', { r: 66, fill: 'none', stroke: '#E5322B', 'stroke-width': 1.8 }, front);
    A.el('circle', { r: 64.5, fill: A.url('bezel') }, front);
    // glass (clipped)
    const gcid = A.id('glassClip');
    A.el('circle', { r: RG }, A.el('clipPath', { id: gcid }, A.defs));
    const glass = A.el('g', { 'clip-path': `url(#${gcid})` }, front);
    A.el('circle', { r: RG, fill: A.url('glass') }, glass);
    const irisG = A.el('g', {}, glass);
    A.el('circle', { r: RG + 4, fill: A.url('iris') }, irisG);
    let fd = '';
    for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2 + (k % 2) * 0.05, c = Math.cos(a), s_ = Math.sin(a), r1 = 48.5, r2 = 55 + (k % 3); fd += `M${(c * r1).toFixed(1)} ${(s_ * r1).toFixed(1)}L${(c * r2).toFixed(1)} ${(s_ * r2).toFixed(1)}`; }
    A.el('path', { d: fd, stroke: '#0C5560', 'stroke-width': 1.3, opacity: 0.6 }, irisG);
    A.el('circle', { r: RB + 0.8, fill: 'none', stroke: '#04161C', 'stroke-width': 2.4 }, irisG);
    // aperture zone
    const acid = A.id('apClip');
    A.el('circle', { r: RB }, A.el('clipPath', { id: acid }, A.defs));
    const apG = A.el('g', { 'clip-path': `url(#${acid})` }, glass);
    A.el('circle', { r: RB, fill: '#05060C' }, apG);
    const pupil = A.el('g', {}, apG);
    A.el('circle', { r: 30, fill: A.url('pupil') }, pupil);
    A.el('circle', { r: 22, fill: A.url('coat') }, pupil);
    A.el('circle', { r: 9, fill: '#3B2A8C', opacity: 0.55 }, pupil);
    const swirl = A.el('path', { fill: 'none', stroke: TEAL, 'stroke-width': 2.6, 'stroke-linecap': 'round', opacity: 0.9 }, pupil);
    let wd = ''; for (let k = 0; k <= 50; k++) { const th = k / 50 * Math.PI * 4.2, r = 1 + th * 1.5; wd += (k ? 'L' : 'M') + (Math.cos(th) * r).toFixed(1) + ' ' + (Math.sin(th) * r).toFixed(1); }
    A.attr(swirl, { d: wd });
    const blades = Array.from({ length: NB }, () => A.el('path', { stroke: '#07080D', 'stroke-width': 1.3, 'stroke-linejoin': 'round' }, apG));
    const bladeHi = A.el('path', { fill: 'none', stroke: '#9AA5BA', 'stroke-width': 1.1, opacity: 0.45 }, apG);
    const bladeRim = A.el('path', { fill: 'none', stroke: '#7FF5E6', 'stroke-width': 1.4, opacity: 0.55, 'stroke-linejoin': 'round' }, apG);
    // reflections and focus shimmer
    const refl = A.el('g', {}, glass);
    A.el('path', { d: 'M-50 -8A50 50 0 0 1 -10 -50L-12 -40A40 40 0 0 0 -41 -10Z', fill: A.url('refl'), opacity: 0.6 }, refl);
    A.el('ellipse', { cx: -24, cy: -27, rx: 7.5, ry: 5.5, fill: '#fff', opacity: 0.95, transform: 'rotate(-40 -24 -27)' }, refl);
    A.el('circle', { cx: -9, cy: -39, r: 2.4, fill: '#fff', opacity: 0.9 }, refl);
    A.el('path', { d: 'M44 18A48 48 0 0 1 22 43', fill: 'none', stroke: '#7FF5E6', 'stroke-width': 3, 'stroke-linecap': 'round', opacity: 0.45 }, refl);
    A.el('path', { d: 'M30 -38A48 48 0 0 1 42 -24', fill: 'none', stroke: '#D29CFF', 'stroke-width': 2.2, 'stroke-linecap': 'round', opacity: 0.45 }, refl);
    const shim = A.el('rect', { x: -22, y: -80, width: 44, height: 160, fill: A.url('shimmer') }, glass);
    const ripples = [0, 1].map(() => A.el('circle', { fill: 'none', stroke: '#BFFFF6', 'stroke-width': 2 }, glass));
    // lids (lens hoods)
    const lidT = A.el('path', { fill: A.url('lid') }, glass);
    const lidB = A.el('path', { fill: A.url('lidB') }, glass);
    const lashT = A.el('path', { fill: 'none', stroke: '#2A0A10', 'stroke-width': 3.4, 'stroke-linecap': 'round' }, glass);
    const lashB = A.el('path', { fill: 'none', stroke: '#5E0A0E', 'stroke-width': 2.2, 'stroke-linecap': 'round' }, glass);
    A.el('circle', { r: RG, fill: 'none', stroke: '#000', 'stroke-width': 2.5, opacity: 0.6 }, front);

    /* AF brackets */
    const af = A.el('g', {}, root);
    const afP = A.el('path', { fill: 'none', 'stroke-width': 4, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, af);
    const afDot = A.el('circle', { r: 3.5 }, af);

    /* floating brows */
    const BROW = 'M-24 7Q-6 -12 24 -2Q27 5 20 7Q-1 -1 -18 12Q-26 13 -24 7Z';
    const brows = [0, 1].map(i => { const b = A.el('g', {}, root); const inner = A.el('g', { transform: i ? 'scale(-1 1)' : '' }, b); A.el('path', { d: BROW, fill: INK, stroke: '#0A0B14', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, inner); A.el('path', { d: 'M-14 2Q-3 -6 12 -2', fill: 'none', stroke: '#5C6280', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, inner); return b; });

    /* arms */
    const mkArm = (parent, side) => {
      const arm = A.el('g', {}, parent);
      const seg_ = A.el('rect', { x: -7.5, y: -8, width: 15, height: 40, rx: 7.5, fill: A.url('arm'), stroke: DEEP, 'stroke-width': 2.4 }, arm);
      A.el('path', { d: 'M-3 -2V18', stroke: '#fff', 'stroke-opacity': 0.35, 'stroke-width': 2.6, 'stroke-linecap': 'round' }, arm);
      const hand = A.el('g', {}, arm);
      const medal = side === 0 ? A.el('g', {}, hand) : null;
      const P = {};
      P.open = A.el('g', {}, hand);
      A.el('ellipse', { cx: -10, cy: 3, rx: 4.6, ry: 7.5, fill: A.url('mitt'), stroke: '#5A6273', 'stroke-width': 2, transform: 'rotate(28 -10 3)' }, P.open);
      A.el('path', { d: 'M-10 6Q-11 21 0 22Q11 21 10 6Q10 -5 0 -5Q-10 -5 -10 6Z', fill: A.url('mitt'), stroke: '#5A6273', 'stroke-width': 2 }, P.open);
      A.el('path', { d: 'M-4 1Q-6 10 -3 15', stroke: '#fff', 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', opacity: 0.9 }, P.open);
      P.fist = A.el('g', {}, hand);
      A.el('circle', { cx: 0, cy: 7, r: 10.5, fill: A.url('mitt'), stroke: '#5A6273', 'stroke-width': 2 }, P.fist);
      A.el('path', { d: 'M-5 3Q-1 7 4 5', stroke: '#8C95A4', 'stroke-width': 1.6, fill: 'none', 'stroke-linecap': 'round' }, P.fist);
      P.thumb = A.el('g', {}, hand);
      A.el('circle', { cx: 0, cy: 7, r: 10.5, fill: A.url('mitt'), stroke: '#5A6273', 'stroke-width': 2 }, P.thumb);
      A.el('rect', { x: -23, y: -1, width: 18, height: 9, rx: 4.5, fill: A.url('mitt'), stroke: '#5A6273', 'stroke-width': 2 }, P.thumb);
      A.el('path', { d: 'M-3 5Q2 9 7 5M-3 11Q2 15 7 11', stroke: '#8C95A4', 'stroke-width': 1.5, fill: 'none', 'stroke-linecap': 'round' }, P.thumb);
      return { arm, hand, P, medal, seg: seg_ };
    };
    const armsG = A.el('g', {}, root);
    const armL = mkArm(armsG, 0);
    const armR = mkArm(A.el('g', { transform: 'matrix(-1 0 0 1 400 0)' }, armsG), 1);
    const photoFront = A.el('g', {}, root);

    /* medal */
    const medalIn = A.el('g', {}, armL.medal);
    const raysG = A.el('g', {}, medalIn);
    for (let k = 0; k < 12; k++) A.el('path', { d: 'M0 0L-12 -72Q0 -78 12 -72Z', fill: A.url('rays'), transform: `rotate(${k * 30})` }, raysG);
    A.el('path', { d: 'M-6 0L-20 46L-11 41L-5 54L5 6Z', fill: '#C81F22', stroke: '#7A1216', 'stroke-width': 2, 'stroke-linejoin': 'round' }, medalIn);
    A.el('path', { d: 'M6 0L20 46L11 41L5 54L-5 6Z', fill: '#E5322B', stroke: '#7A1216', 'stroke-width': 2, 'stroke-linejoin': 'round' }, medalIn);
    A.el('circle', { r: 32, fill: A.url('goldRim'), stroke: '#8A5406', 'stroke-width': 2.5 }, medalIn);
    let md = ''; for (let k = 0; k < 36; k++) { const a = k / 36 * Math.PI * 2; md += `M${(Math.cos(a) * 29).toFixed(1)} ${(Math.sin(a) * 29).toFixed(1)}L${(Math.cos(a) * 31).toFixed(1)} ${(Math.sin(a) * 31).toFixed(1)}`; }
    A.el('path', { d: md, stroke: '#8A5406', 'stroke-width': 1.4, opacity: 0.6 }, medalIn);
    A.el('circle', { r: 25, fill: A.url('gold'), stroke: '#B67809', 'stroke-width': 1.6 }, medalIn);
    A.el('text', { x: 0, y: -6, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 10.5, 'letter-spacing': 1.5, fill: '#8A4B05', text: 'LV' }, medalIn);
    A.el('text', { x: 0, y: 18, 'text-anchor': 'middle', 'font-family': 'system-ui, -apple-system, Segoe UI, sans-serif', 'font-weight': 900, 'font-size': 27, fill: '#7A3F03', text: '8' }, medalIn);
    const shineId = A.id('medalClip');
    A.el('circle', { r: 32 }, A.el('clipPath', { id: shineId }, A.defs));
    const shine = A.el('rect', { x: -9, y: -50, width: 14, height: 100, fill: '#fff', opacity: 0.75 }, A.el('g', { 'clip-path': `url(#${shineId})` }, medalIn));

    /* photo print */
    const photo = A.el('g', {}, photoBack);
    A.el('rect', { x: -22, y: -26, width: 44, height: 52, rx: 3, fill: '#FBFAF7', stroke: '#B9C0CC', 'stroke-width': 1.6 }, photo);
    const pcid = A.id('picClip');
    A.el('rect', { x: -18, y: -22, width: 36, height: 34, rx: 1.5 }, A.el('clipPath', { id: pcid }, A.defs));
    const pic = A.el('g', { 'clip-path': `url(#${pcid})` }, photo);
    A.el('rect', { x: -18, y: -22, width: 36, height: 34, fill: A.url('sky') }, pic);
    A.el('circle', { cx: 7, cy: -10, r: 6, fill: '#F5B83D' }, pic);
    A.el('path', { d: 'M-18 12L-6 -2L2 6L10 0L18 12Z', fill: '#E5322B' }, pic);
    A.el('path', { d: 'M-18 12L-10 6L-2 12Z', fill: '#1A1D2E', opacity: 0.6 }, pic);
    const picDev = A.el('rect', { x: -18, y: -22, width: 36, height: 34, fill: '#2A2F3E' }, pic);
    let photoParent = photoBack;

    /* effects */
    const fx = A.el('g', {}, g);
    const flashG = A.el('g', {}, root);
    const flashGlow = A.el('circle', { cx: 200, cy: 110, r: 60, fill: A.url('glow') }, flashG);
    const flashRays = A.el('path', { d: Array.from({ length: 8 }, (_, k) => { const a = k / 8 * Math.PI * 2 + 0.2, L = k % 2 ? 70 : 110, w = 0.07; return `M${200} ${110}L${(200 + Math.cos(a - w) * 14).toFixed(1)} ${(110 + Math.sin(a - w) * 14).toFixed(1)}L${(200 + Math.cos(a) * L).toFixed(1)} ${(110 + Math.sin(a) * L).toFixed(1)}L${(200 + Math.cos(a + w) * 14).toFixed(1)} ${(110 + Math.sin(a + w) * 14).toFixed(1)}Z`; }).join(''), fill: '#fff' }, flashG);
    const whiteout = A.el('circle', { cx: 200, cy: 190, r: 180, fill: A.url('glow'), opacity: 0 }, g);
    const STAR = r => `M0 ${-r}Q0 0 ${r} 0Q0 0 0 ${r}Q0 0 ${-r} 0Q0 0 0 ${-r}Z`;
    const sparks = Array.from({ length: 8 }, (_, i) => A.el('path', { d: STAR(9 + (i % 3) * 3), fill: i % 2 ? '#FFE08A' : '#fff' }, fx));
    const CONF = ['#E5322B', '#F5B83D', '#FFFFFF', TEAL, '#D5DAE2'];
    const R = A.rng(23);
    const confetti = Array.from({ length: 18 }, (_, i) => ({ e: A.el(i % 3 ? 'rect' : 'circle', i % 3 ? { x: -4, y: -2.5, width: 8, height: 5, rx: 1.2, fill: CONF[i % 5] } : { r: 3.5, fill: CONF[i % 5] }, fx), x: 50 + R() * 300, sp: 80 + R() * 70, ph: R(), rot: R() * 720 - 360 }));
    const zs = [0, 1, 2].map(i => A.el('text', { 'font-family': 'system-ui, sans-serif', 'font-weight': 900, 'font-size': 18 + i * 6, fill: '#EAF6F6', text: 'z' }, fx));
    const dots = [[284, 128, 5], [300, 106, 7.5], [322, 80, 11]].map(([x, y, r]) => A.el('circle', { cx: x, cy: y, r, fill: '#EAF6F6' }, fx));
    const shock = A.el('path', { d: 'M104 132L90 120M98 160L80 158M114 108L106 90M296 132L310 120M302 160L320 158M286 108L294 90', stroke: '#FFE08A', 'stroke-width': 5, 'stroke-linecap': 'round' }, fx);
    const glint = A.el('path', { d: STAR(12), fill: '#fff' }, fx);
    const dizzyStars = [0, 1, 2].map(i => A.el('path', { d: STAR(8), fill: i === 1 ? TEAL : '#FFE08A' }, fx));

    /* ---------- poses ---------- */
    // ap aperture radius, lt/lb lids, by/ba brows [L,R], mouth w c o a, ck cheeks, gz gaze override [w,x,y], z zoom
    const F = {
      idle: { ap: 22, lt: 0.03, lb: 0.04, by: [-4, -4], ba: [3, 3], mw: 10, mc: 4, mo: 0, ma: 0, ck: 0.35, gz: [0, 0, 0], z: 0 },
      happy: { ap: 28, lt: 0.02, lb: 0.22, by: [-8, -8], ba: [4, 4], mw: 14, mc: 6, mo: 8, ma: 0, ck: 0.8, gz: [0, 0, 0], z: 0.08 },
      wink: { ap: 0, lt: 0.16, lb: 0.26, by: [-10, 6], ba: [-4, -10], mw: 12, mc: 5, mo: 3, ma: 4, ck: 0.75, gz: [0.6, 0.3, 0.1], z: 0 },
      surprised: { ap: 44, lt: 0, lb: 0, by: [-20, -20], ba: [8, 8], mw: 6, mc: 0, mo: 9, ma: 0, ck: 0.3, gz: [0.8, 0, -0.1], z: 0.3 },
      thinking: { ap: 16, lt: 0.14, lb: 0.1, by: [4, -14], ba: [-6, 8], mw: 7, mc: -1, mo: 0, ma: -3, ck: 0.3, gz: [1, 0.85, -0.8], z: 0 },
      working: { ap: 14, lt: 0.2, lb: 0.14, by: [5, 5], ba: [-9, -9], mw: 6, mc: 1, mo: 0, ma: 2, ck: 0.3, gz: [1, 0, 0.1], z: 0.42 },
      celebrate: { ap: 34, lt: 0, lb: 0.26, by: [-14, -14], ba: [5, 5], mw: 16, mc: 8, mo: 13, ma: 0, ck: 0.85, gz: [0.7, 0, -0.3], z: 0.15 },
      sleepy: { ap: 10, lt: 0.62, lb: 0.1, by: [5, 5], ba: [8, 8], mw: 5, mc: 0, mo: 4, ma: 0, ck: 0.5, gz: [1, 0, 0.4], z: 0 },
      levelup: { ap: 30, lt: 0.02, lb: 0.22, by: [-12, -10], ba: [-3, -3], mw: 15, mc: 7, mo: 8, ma: 2, ck: 0.85, gz: [1, -0.6, -0.5], z: 0.1 },
      signature: { ap: 20, lt: 0.08, lb: 0.06, by: [-4, -4], ba: [-4, -4], mw: 8, mc: 2, mo: 0, ma: 0, ck: 0.5, gz: [0, 0, 0], z: 0 },
    };
    // la/ra arm angle (outward +), lh/rh hand rot, lp/rp pose
    const ARM = {
      idle: [8, 0, 'open', 8, 0, 'open'], happy: [46, -12, 'open', 46, -12, 'open'], wink: [12, 0, 'open', 96, 0, 'thumb'],
      surprised: [122, 20, 'open', 122, 20, 'open'], thinking: [12, 0, 'open', -58, 30, 'fist'], working: [-26, 10, 'fist', -26, 10, 'fist'],
      celebrate: [150, 0, 'open', 150, 0, 'open'], sleepy: [2, 0, 'open', 2, 0, 'open'], levelup: [146, 0, 'fist', 96, 0, 'thumb'], signature: [10, 0, 'open', 10, 0, 'open'],
    };
    const LEN = { idle: 30, happy: 32, wink: 34, surprised: 40, thinking: 40, working: 36, celebrate: 46, sleepy: 28, levelup: 46, signature: 30 };

    const mixF = (a, b, p) => { const o = {}; for (const k in a) o[k] = Array.isArray(a[k]) ? a[k].map((v, i) => lerp(v, b[k][i], p)) : lerp(a[k], b[k], p); return o; };
    const mouthD = (w, c, o, a) => {
      const yL = -c + a, yR = -c - a, up = c - o * 0.45, lo = c + o * 1.7;
      return { d: `M${-w} ${yL}Q0 ${up} ${w} ${yR}Q0 ${lo} ${-w} ${yL}Z`, top: (yL + yR) / 4 + up / 2, bot: (yL + yR) / 4 + lo / 2 };
    };
    const setArm = (A_, ang, hr, pose, len, medalOn) => {
      if (pose === 'thumb') hr = 90 - ang;
      A.tf(A_.arm, SX, SY, ang);
      A.attr(A_.seg, { height: len + 8 });
      A.tf(A_.hand, 0, len, hr);
      for (const k in A_.P) A.show(A_.P[k], k === pose);
      if (A_.medal) { A.show(A_.medal, medalOn > 0.01); if (medalOn > 0.01) A.tf(A_.medal, 0, 6, -(ang + hr), medalOn, medalOn); }
    };
    const handPos = (side, ang, len) => { const r = ang * Math.PI / 180; return side ? [400 - SX + len * Math.sin(r), SY + len * Math.cos(r)] : [SX - len * Math.sin(r), SY + len * Math.cos(r)]; };
    const f1 = v => v.toFixed(1);
    // aperture: opening inradius r, centre (cx, cy), rotation phi
    const setAperture = (r, cx, cy, phi) => {
      const rv = Math.max(0, r) / Math.cos(ALPHA / 2), V = [], N = [], Fp = [], Q = [];
      for (let i = 0; i < NB; i++) { const a = phi + i * ALPHA; V.push([cx + rv * Math.cos(a), cy + rv * Math.sin(a)]); N.push(a + ALPHA / 2); }
      for (let i = 0; i < NB; i++) {
        const n = N[i], dx = Math.cos(n + Math.PI / 2), dy = Math.sin(n + Math.PI / 2), v = V[(i + 1) % NB], L = 100, bend = 22;
        Fp.push([v[0] + dx * L, v[1] + dy * L]);
        Q.push([v[0] + dx * L * 0.42 + Math.cos(n) * bend, v[1] + dy * L * 0.42 + Math.sin(n) * bend]);
      }
      let hi = '', rim = '';
      for (let i = 0; i < NB; i++) {
        const j = (i + NB - 1) % NB, v0 = V[i], v1 = V[(i + 1) % NB];
        blades[i].setAttribute('d', `M${f1(v0[0])} ${f1(v0[1])}L${f1(v1[0])} ${f1(v1[1])}Q${f1(Q[i][0])} ${f1(Q[i][1])} ${f1(Fp[i][0])} ${f1(Fp[i][1])}L${f1(Fp[j][0])} ${f1(Fp[j][1])}Q${f1(Q[j][0])} ${f1(Q[j][1])} ${f1(v0[0])} ${f1(v0[1])}Z`);
        const light = 0.5 + 0.5 * Math.cos(N[i] - 3.6);
        const c = [lerp(22, 74, light), lerp(25, 82, light), lerp(36, 100, light)].map(Math.round);
        blades[i].setAttribute('fill', `rgb(${c})`);
        hi += `M${f1(v1[0])} ${f1(v1[1])}Q${f1(Q[i][0])} ${f1(Q[i][1])} ${f1(Fp[i][0])} ${f1(Fp[i][1])}`;
        rim += `${i ? 'L' : 'M'}${f1(v0[0])} ${f1(v0[1])}`;
      }
      bladeHi.setAttribute('d', hi);
      bladeRim.setAttribute('d', rim + 'Z');
    };

    return {
      update(s) {
        const { t, mt } = s, m = s.mood, pv = s.prev || 'idle', bl = s.blend;
        const L = A.life(t, 5);
        let f = mixF(F[pv] || F.idle, F[m], bl);
        const ap = ARM[pv] || ARM.idle, an = ARM[m];
        let la = lerp(ap[0], an[0], bl), lh = lerp(ap[1], an[1], bl), lp = bl > 0.5 ? an[2] : ap[2];
        let ra = lerp(ap[3], an[3], bl), rh = lerp(ap[4], an[4], bl), rp = bl > 0.5 ? an[5] : ap[5];
        let lL = lerp(LEN[pv] || 30, LEN[m], bl), rL = lL;
        let bx = 0, by = 0, rot = L.sway * 0.8, sx = 1 - L.breathe * 0.008, sy = 1 + L.breathe * 0.014;
        let medalOn = 0, sparkOn = 0, confOn = 0, zOn = 0, dotOn = 0, shockOn = 0, glintOn = 0, glintXY = [258, 160];
        let blinkAllowed = true, dizzy = false;
        let focus = L.drift * 6, apRot = 0, afOn = 0, afLock = 0, shimP = -1, flash = 0, white = 0, shPress = 0, photoOn = 0, photoXY = [200, 60], photoRot = 0, photoFrontOn = false, dev = 1;
        let zDir = [s.look.x, s.look.y], dialRot = 0, flashPop = 0;

        /* mood acting */
        if (m === 'idle') {
          const p = t % 7;
          if (p < 1.6) { const k = Math.sin(Math.PI * seg(p, 0, 1.6)); focus += 70 * ease.inOut(seg(p, 0, 1.6)); f.z += 0.14 * k; f.ap -= 8 * k; f.by[0] += 3 * k; f.by[1] -= 4 * k; }
          const q = (t + 3.5) % 9;
          if (q < 1.6) { const k = Math.sin(Math.PI * seg(q, 0, 1.6)); f.gz = [k, -0.85, 0.25]; f.ma = 2 * k; }
        } else if (m === 'happy') {
          const b = Math.abs(Math.sin(mt * 5.5)); by = -12 * b; sy *= 1 + 0.05 * b - 0.05 * (1 - b) * (1 - b); sx *= 1 - 0.03 * b + 0.04 * (1 - b) * (1 - b);
          la += 10 * Math.sin(mt * 11); ra += 10 * Math.sin(mt * 11 + 1); f.by[0] -= 2 * b; f.by[1] -= 2 * b;
        } else if (m === 'wink') {
          rot += 5 * ease.out(seg(mt, 0, 0.3)); blinkAllowed = false;
          const w = ease.out(seg(mt, 0.05, 0.2));
          f.ap = lerp(22, 0, w); apRot = 30 * w;
          glintOn = seg(mt, 0.2, 0.35) * (1 - seg(mt, 0.9, 1.2)); glintXY = [276, 150];
          ra += 8 * wobble(mt, 14, 5);
        } else if (m === 'surprised') {
          const j = Math.sin(Math.PI * seg(mt, 0, 0.42));
          by = -22 * j; bx = 8 * ease.out(seg(mt, 0, 0.3)); rot -= 6 * ease.out(seg(mt, 0, 0.3));
          sy *= 1 + 0.1 * j - 0.08 * wobble(mt - 0.42, 18, 6); sx *= 1 - 0.06 * j + 0.06 * wobble(mt - 0.42, 18, 6);
          f.z += 0.25 * wobble(mt, 14, 4); f.ap += 4 * wobble(mt, 16, 4);
          shockOn = seg(mt, 0.02, 0.1) * (1 - seg(mt, 0.8, 1.1)); blinkAllowed = mt > 1.5;
          la += 8 * wobble(mt, 12, 4); ra += 8 * wobble(mt, 12, 4);
        } else if (m === 'thinking') {
          rot += 4 * ease.inOut(seg(mt, 0, 0.6)); dotOn = 1;
          focus += 18 * Math.sin(t * 1.3); f.ap += 3 * Math.sin(t * 1.3); f.ma += Math.sin(t * 2.2) * 1.5;
        } else if (m === 'working') {
          const sc = Math.sin(mt * 2.2);
          zDir = [sc * 0.9, 0.25]; f.gz = [1, sc * 0.9, 0.15];
          focus += mt * 160; afOn = ease.out(seg(mt, 0, 0.3)); afLock = Math.sin(mt * 4.4) > 0.6 ? 1 : 0;
          f.ap = 14 + 8 * Math.sin(mt * 4.4); shimP = (mt * 0.7) % 1;
          by = -2 * Math.abs(Math.sin(mt * 6)); la += 6 * Math.sin(mt * 8); ra -= 6 * Math.sin(mt * 8); rot += 2 * sc;
        } else if (m === 'celebrate') {
          const ph = (mt % 0.9) / 0.9, air = Math.sin(Math.PI * seg(ph, 0.1, 0.8)), land = seg(ph, 0.8, 1) * (1 - seg(ph, 0.92, 1)) + (ph < 0.1 ? 1 - ph / 0.1 : 0);
          by = -46 * air; sy *= 1 + 0.08 * air - 0.12 * land; sx *= 1 - 0.05 * air + 0.1 * land;
          la += 14 * Math.sin(mt * 14); ra += 14 * Math.sin(mt * 14 + 2); sparkOn = 1; confOn = 1;
          flashPop = Math.max(0, 1 - Math.abs(ph - 0.45) / 0.08); f.z += 0.1 * air;
          f.by[0] -= 4 * air; f.by[1] -= 4 * air;
        } else if (m === 'sleepy') {
          rot = 5 * Math.sin(t * 0.9); by = 2 * Math.sin(t * 1.8); zOn = 1; blinkAllowed = false;
          f.mo = 4 + 2 * Math.sin(t * 1.8); f.lt += 0.06 * Math.sin(t * 0.9);
        } else if (m === 'levelup') {
          const up = ease.outBack(seg(mt, 0, 0.45));
          medalOn = up; la = lerp(10, 146, up); lp = 'fist'; lL = lerp(30, 50, up);
          by = -16 * Math.sin(Math.PI * seg(mt, 0, 0.4)); sparkOn = seg(mt, 0.3, 0.5);
          rot += -3 * up; focus += 40 * ease.out(seg(mt, 0, 0.6));
        } else if (m === 'signature') {
          const u = mt % 4.4;
          const d0 = Math.hypot(s.look.x, s.look.y) > 0.2 ? [s.look.x, s.look.y] : [0.45, -0.15];
          zDir = d0; f.gz = [0, 0, 0];
          // 0 - 0.35 anticipation, 0.35 - 1.05 zoom and focus, 1.05 lock, 1.18 shutter, 1.22 flash, 1.4 - 1.8 retract,
          // 1.7 - 2.4 print ejects and flies to hand, 2.4 - 4.2 proud pose
          const ant = ease.out(seg(u, 0, 0.3));
          const zo = ease.outBack(seg(u, 0.35, 0.85)) * (1 - ease.inOut(seg(u, 1.45, 1.85)));
          f.z = zo;
          sy *= 1 - 0.05 * ant * (1 - seg(u, 0.35, 0.5)); sx *= 1 + 0.04 * ant * (1 - seg(u, 0.35, 0.5));
          bx += d0[0] * 6 * zo; rot += d0[0] * 4 * zo;
          f.by = [lerp(0, 6, ant), lerp(0, 6, ant)]; f.ba = [-10 * ant, -10 * ant];
          f.ap = lerp(22, 12, ant);
          if (u > 0.35) { focus += 260 * ease.inOut(seg(u, 0.35, 1.05)); f.ap = 12 + 18 * Math.sin(Math.PI * seg(u, 0.4, 0.8)) - 4 * seg(u, 0.8, 1.05); shimP = seg(u, 0.45, 1.05); }
          afOn = ease.out(seg(u, 0.3, 0.6)) * (1 - seg(u, 1.4, 1.6)); afLock = u > 1.0 && u < 1.6 ? 1 : 0;
          shPress = seg(u, 1.1, 1.16) * (1 - seg(u, 1.3, 1.4));
          if (u > 1.14 && u < 1.6) { const c = u < 1.22 ? ease.in(seg(u, 1.14, 1.2)) : 1 - ease.outBack(seg(u, 1.28, 1.55)); f.ap = lerp(f.ap, 0, clamp(c)); apRot = 40 * clamp(c); blinkAllowed = false; }
          flash = seg(u, 1.2, 1.24) * (1 - ease.out(seg(u, 1.26, 1.7)));
          white = 0.55 * seg(u, 1.2, 1.23) * (1 - ease.out(seg(u, 1.24, 1.5)));
          if (u > 1.2 && u < 1.6) { const k = wobble(u - 1.2, 18, 6); sy *= 1 - 0.06 * k; sx *= 1 + 0.05 * k; f.by = [-12, -12]; f.ba = [6, 6]; f.mo = 8; f.mw = 7; f.mc = 0; }
          if (u > 1.6) { const k = ease.out(seg(u, 1.6, 2.0)); f.by = [lerp(-12, -14, k), lerp(-12, -8, k)]; f.ba = [4, 4]; f.mw = lerp(7, 15, k); f.mc = lerp(0, 7, k); f.mo = lerp(8, 8, k); f.ck = 0.85; f.lb = 0.22 * ease.out(seg(u, 2.3, 2.6)); f.ap = lerp(30, 28, k); }
          // print
          if (u > 1.7) {
            photoOn = 1 - seg(u, 4.15, 4.35);
            const e = ease.out(seg(u, 1.7, 2.05)), fl = ease.inOut(seg(u, 2.05, 2.45));
            const raise = ease.outBack(seg(u, 1.95, 2.4));
            ra = lerp(10, 128, raise); rL = lerp(30, 48, raise); rp = 'fist'; rh = 0;
            const hp = handPos(1, ra, rL);
            photoXY = [lerp(200, hp[0] + 8, fl), lerp(lerp(120, 56, e), hp[1] - 36, fl)];
            photoRot = lerp(4 * Math.sin(u * 20) * (1 - e), 12, fl) + 6 * wobble(u - 2.45, 10, 4);
            photoFrontOn = u > 2.05;
            dev = 1 - ease.inOut(seg(u, 2.1, 2.8));
            if (u > 2.4) {
              const k = ease.outBack(seg(u, 2.4, 2.75));
              la = lerp(10, -22, k); lp = 'fist'; rot -= 4 * k; by -= 6 * k; sy *= 1 + 0.03 * k;
              glintOn = seg(u, 2.75, 2.9) * (1 - seg(u, 3.5, 3.8)); glintXY = [hp[0] + 22, hp[1] - 56];
              sparkOn = seg(u, 2.5, 2.7) * (1 - seg(u, 3.6, 4.0));
            }
            if (u > 4.0) { const k = ease.inOut(seg(u, 4.0, 4.4)); ra = lerp(ra, 10, k); rL = lerp(rL, 30, k); la = lerp(la, 10, k); }
          }
        }

        /* pointer */
        const lx = s.look.x, ly = s.look.y;
        const gw = f.gz[0], gx = lerp(lx, f.gz[1], gw), gy = lerp(ly, f.gz[2], gw);
        bx += lx * 3; rot += lx * 2;
        if (s.hover && !s.small && m !== 'sleepy') { f.ap += 4; f.by = f.by.map(v => v - 3); }

        /* poke */
        const pk = s.poke;
        if (pk < 1.2) {
          const w = wobble(pk, 16, 5);
          sx *= 1 + 0.1 * w; sy *= 1 - 0.1 * w; rot += 6 * wobble(pk, 11, 4);
          if (s.pokes < 3) {
            const k = clamp(Math.exp(-3 * pk) * 1.6);
            f = mixF(f, F.surprised, k); f.mw = lerp(f.mw, 6, k);
            const snap = pk < 0.12 ? 1 : 1 - ease.outBack(seg(pk, 0.12, 0.4));
            f.ap = lerp(f.ap, 0, clamp(snap)); apRot += 30 * clamp(snap);
            la += 30 * k; ra += 30 * k; blinkAllowed = false;
          }
        }
        if (s.pokes >= 3 && pk < 2.2) {
          dizzy = true; blinkAllowed = false;
          rot += 7 * Math.sin(pk * 9); f.mw = 10; f.mc = -2; f.mo = 3; f.ma = 4 * Math.sin(pk * 12);
          f.by = [-8 + 5 * Math.sin(pk * 7), -4 - 5 * Math.sin(pk * 7)]; f.ba = [8, -6];
          f.ap = 30; apRot = pk * 900 * Math.exp(-pk * 0.5); f.lt = 0.1; f.lb = 0.1;
          la = 40 + 20 * Math.sin(pk * 10); ra = 40 - 20 * Math.sin(pk * 10);
        }

        /* body */
        A.tf(root, bx, by, rot, sx, sy, 200, 345);
        const air = clamp(-by / 50);
        A.attr(shadow, { rx: 96 * (1 - 0.35 * air), opacity: 1 - 0.5 * air });
        const legK = clamp(air * 2);
        legs.forEach((lg, i) => A.tf(lg, 0, -4 * legK, (i ? -1 : 1) * 8 * legK, 1, 1, i ? 224 : 176, 320));
        A.tf(mouthG, 200 + gx * 3, 316 + gy * 1.5);
        A.tf(dial, 150, 124, -6 + Math.sin(focus * 0.02) * 0, 1, 1);
        let dl = ''; const dp = (focus * 0.12) % 4; for (let x = -11 + dp; x < 12; x += 4) dl += `M${x.toFixed(1)} -5V2`;
        A.attr(dialLines, { d: dl });
        const shW = wobble(pk, 20, 5) * 14 + (m === 'celebrate' ? 6 * Math.sin(mt * 14) : 0);
        A.tf(shutter, 252, 125, 12 + shW, 1, 1);
        A.tf(shCap, 0, 4 * shPress, 0, 1, 1);

        /* face */
        const M = mouthD(f.mw, f.mc, f.mo, f.ma);
        A.attr(mouth, { d: M.d }); A.attr(mClip, { d: M.d });
        A.attr(teeth, { y: M.top - 3, x: -f.mw }); A.op(teeth, clamp((f.mo - 5) / 4) * (f.mc > 4 ? 1 : 0));
        A.attr(tongue, { cx: 0, cy: M.bot + 1, rx: Math.max(2, f.mw * 0.55), ry: 4.5 }); A.op(tongue, clamp(f.mo / 6));
        cheeks.forEach(c => A.op(c, f.ck * 0.6));

        /* lens */
        const z = Math.max(-0.1, f.z);
        const hx = gx * 4, hy = gy * 3;
        const dn = Math.hypot(zDir[0], zDir[1]) || 1, dz = clamp(dn * 1.6, 0.35, 1);
        const ox = hx + (zDir[0] / dn) * dz * 24 * z, oy = hy + (zDir[1] / dn) * dz * 14 * z + 12 * z;
        const sz = 1 + 0.3 * z;
        A.tf(rear, CX + hx * 0.4, CY + hy * 0.4);
        tubes.forEach((tb, k) => {
          const p = (k + 1) / 4;
          A.show(tb, z > 0.03);
          A.attr(tb, { cx: CX + lerp(hx * 0.4, ox, p), cy: CY + lerp(hy * 0.4, oy, p), r: lerp(RO + 3, RO * sz - 2, p) });
        });
        A.tf(front, CX + ox, CY + oy, 0, sz, sz);
        A.tf(knurl, 0, 0, focus); A.tf(scale, 0, 0, focus * 0.6);
        A.tf(irisG, gx * 2.5, gy * 2.5);
        A.tf(refl, -gx * 3, -gy * 3);

        // aperture
        const blink = blinkAllowed ? L.blink : 0;
        let r = Math.max(0, f.ap) * (1 - blink);
        if (blink > 0) apRot += 30 * blink;
        r = clamp(r, 0, RB - 1);
        const off = Math.max(0, RB - 2 - r) * 0.5, acx = clamp(gx * 10, -off, off), acy = clamp(gy * 10, -off, off);
        setAperture(r, acx + gx * 2.5, acy + gy * 2.5, -Math.PI / 2 + (apRot - r * 1.2) * Math.PI / 180);
        A.tf(pupil, acx + gx * 2.5, acy + gy * 2.5, 0, clamp(0.5 + r / 40, 0.5, 1.2));
        A.show(swirl, dizzy); if (dizzy) A.tf(swirl, 0, 0, -pk * 500);

        // lids
        let lt = f.lt, lb = f.lb;
        const y1 = -RG + 2 * RG * clamp(lt), y2 = RG - 2 * RG * clamp(lb);
        const meet = y1 >= y2 - 0.5;
        const sag = 12 * (1 - clamp(lt) * 0.4), arch = 10 + 40 * clamp(lb);
        const yT = meet ? (y1 + y2) / 2 : y1, yB = meet ? (y1 + y2) / 2 : y2;
        A.attr(lidT, { d: `M-64 -64H64V${yT - 4}Q0 ${yT + sag} -64 ${yT - 4}Z` });
        A.attr(lidB, { d: `M-64 64H64V${yB + 4}Q0 ${yB - arch} -64 ${yB + 4}Z` });
        A.show(lidT, lt > 0.01 || meet); A.show(lidB, lb > 0.01 || meet);
        A.op(lashT, lt > 0.04 || meet ? 1 : 0);
        A.attr(lashT, { d: `M-64 ${yT - 4}Q0 ${yT + sag + (meet ? 2 : 0)} 64 ${yT - 4}` });
        A.op(lashB, lb > 0.06 && !meet ? 0.7 : 0);
        A.attr(lashB, { d: `M-64 ${yB + 4}Q0 ${yB - arch} 64 ${yB + 4}` });

        // shimmer and ripples
        A.show(shim, shimP >= 0 && !small);
        if (shimP >= 0) A.attr(shim, { transform: `rotate(28) translate(${lerp(-110, 110, shimP)} 0)` });
        ripples.forEach((rp_, i) => {
          const on = shimP >= 0 && !small; A.show(rp_, on);
          if (on) { const p = (shimP * 2 + i * 0.5) % 1; A.attr(rp_, { r: 8 + p * 50 }); A.op(rp_, 0.5 * Math.sin(Math.PI * p)); }
        });

        // AF brackets
        A.show(af, afOn > 0.01);
        if (afOn > 0.01) {
          const e = (RO + 16) * sz * lerp(1.35, 1, afOn) + (afLock ? -3 : 0), c = 16;
          const col = afLock ? TEAL : '#FFFFFF';
          A.attr(afP, { stroke: col, d: `M${-e} ${-e + c}V${-e}H${-e + c}M${e - c} ${-e}H${e}V${-e + c}M${e} ${e - c}V${e}H${e - c}M${-e + c} ${e}H${-e}V${e - c}` });
          A.attr(afDot, { fill: col }); A.op(af, afOn * (afLock ? 1 : 0.7));
          A.tf(af, CX + ox, CY + oy);
        }

        // brows (float above the lens rim)
        brows.forEach((B, i) => {
          const a = f.ba[i] * (i ? 1 : -1);
          const bw = wobble(pk, 13, 4) * 5;
          A.tf(B, CX + (i ? 40 : -40) + gx * 3 + ox * 0.5, CY - RO - 12 + f.by[i] + gy * 2 + oy * 0.4 - 10 * Math.max(0, z) - bw, a);
        });

        /* arms */
        setArm(armL, la, lh, lp, lL, medalOn);
        setArm(armR, ra, rh, rp, rL, 0);
        if (medalOn > 0.01) {
          A.tf(raysG, 0, 0, t * 25, 1, 1);
          A.tf(medalIn, -6, -48);
          const sp = (mt % 2.2) / 2.2;
          A.attr(shine, { x: lerp(-60, 50, ease.inOut(seg(sp, 0.05, 0.45))), transform: 'skewX(-20)' });
        }

        /* print */
        A.show(photo, photoOn > 0.01);
        if (photoOn > 0.01) {
          const want = photoFrontOn ? photoFront : photoBack;
          if (photoParent !== want) { want.appendChild(photo); photoParent = want; }
          const ps = photoOn * (photoFrontOn ? 1.18 : 1); A.tf(photo, photoXY[0], photoXY[1], photoRot, ps, ps);
          A.op(picDev, dev);
        }

        /* flash */
        const fl = Math.max(flash, flashPop * 0.6);
        A.show(flashG, fl > 0.01);
        if (fl > 0.01) {
          A.tf(flashGlow, 0, 0, 0, 0.4 + 1.6 * fl, 0.4 + 1.6 * fl, 200, 110);
          A.op(flashGlow, fl); A.op(flashRays, fl * (small ? 0 : 0.9));
          A.tf(flashRays, 0, 0, t * 40, 0.5 + 0.7 * fl, 0.5 + 0.7 * fl, 200, 110);
        }
        A.op(flashLit, fl);
        A.op(whiteout, small ? 0 : white);

        /* fx */
        const SP = [[90, 120], [312, 92], [80, 236], [322, 216], [140, 64], [268, 50], [104, 300], [300, 300]];
        sparks.forEach((e, i) => {
          if (!sparkOn || small) return A.show(e, false);
          A.show(e, true);
          const tw = 0.5 + 0.5 * Math.sin(t * 7 + i * 1.7), sc = sparkOn * (0.4 + 0.8 * tw);
          A.tf(e, SP[i][0], SP[i][1], t * 60 + i * 20, sc, sc);
          A.op(e, sparkOn * (0.4 + 0.6 * tw));
        });
        confetti.forEach((c, i) => {
          if (!confOn || small) return A.show(c.e, false);
          A.show(c.e, true);
          const p = (mt * c.sp / 400 + c.ph) % 1;
          A.tf(c.e, c.x + Math.sin(mt * 3 + i) * 14, -10 + p * 380, c.rot * mt + i * 40, 1, 0.6 + 0.4 * Math.sin(mt * 9 + i));
          A.op(c.e, 1 - seg(p, 0.85, 1));
        });
        zs.forEach((zz, i) => {
          if (!zOn) return A.show(zz, false);
          A.show(zz, true);
          const p = ((t * 0.35 + i / 3) % 1);
          A.attr(zz, { x: 282 + p * 40 + Math.sin(p * 6) * 6, y: 140 - p * 90 });
          A.op(zz, Math.sin(Math.PI * p));
        });
        dots.forEach((d, i) => { A.show(d, dotOn > 0); if (dotOn) A.op(d, clamp(Math.sin(t * 3 - i * 0.7) * 0.4 + 0.6) * seg(mt, 0.2 + i * 0.15, 0.4 + i * 0.15)); });
        A.show(shock, shockOn > 0.01); A.op(shock, shockOn);
        A.show(glint, glintOn > 0.01);
        if (glintOn > 0.01) { A.tf(glint, glintXY[0], glintXY[1], t * 90, glintOn, glintOn); A.op(glint, glintOn); }
        dizzyStars.forEach((st, i) => {
          A.show(st, dizzy);
          if (dizzy) { const a = pk * 5 + i * 2.1; A.tf(st, 200 + bx + Math.cos(a) * 62, 82 + by + Math.sin(a) * 14, a * 40, 1, 1); A.op(st, 0.6 + 0.4 * Math.sin(a)); }
        });
      },
    };
  },
});

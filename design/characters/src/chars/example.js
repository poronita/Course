/* Minimal example of the character contract. Not included in the build (no leading digit). */
CAST.register({
  id: 'example', order: 99, name: 'Example', tagline: 'Contract demo', concept: 'A plain blob.',
  signature: 'Bounces.', why: ['Simple.'], risks: ['Boring.'], voice: 'Hi!',
  scores: { memorable: 1, stylish: 1, expressive: 1, small: 3, fit: 1 },
  palette: ['#e2382c', '#ffffff'], bg: '#5a2a2a', iconBg: '#ffe2dc', icon: { viewBox: '80 80 240 240' },
  build(g, A) {
    A.grad('body', [[0, '#ff6a5c'], [1, '#c41f16']]);
    const root = A.el('g', {}, g);
    A.el('ellipse', { cx: 200, cy: 340, rx: 90, ry: 14, fill: '#000', opacity: 0.25 }, g);
    const body = A.el('ellipse', { cx: 200, cy: 230, rx: 100, ry: 105, fill: A.url('body') }, root);
    const eyes = A.el('g', {}, root);
    const eL = A.el('ellipse', { cx: 165, cy: 215, rx: 12, ry: 18, fill: '#1a1a1a' }, eyes);
    const eR = A.el('ellipse', { cx: 235, cy: 215, rx: 12, ry: 18, fill: '#1a1a1a' }, eyes);
    const mouth = A.el('path', { d: 'M180 265 Q200 280 220 265', stroke: '#1a1a1a', 'stroke-width': 6, fill: 'none', 'stroke-linecap': 'round' }, root);
    return {
      update(s) {
        const L = A.life(s.t, 3);
        const hop = s.mood === 'celebrate' ? Math.abs(Math.sin(s.mt * 6)) * 30 : 0;
        const pk = A.wobble(s.poke, 14, 5);
        A.tf(root, 0, -hop, pk * 8, 1 + L.breathe * 0.02 + pk * 0.08, 1 - L.breathe * 0.02 - pk * 0.08, 200, 330);
        A.tf(eyes, s.look.x * 14, s.look.y * 10);
        const open = s.mood === 'sleepy' ? 0.15 : 1 - L.blink;
        A.attr(eL, { ry: 18 * open }); A.attr(eR, { ry: (s.mood === 'wink' ? 0.1 : 1) * 18 * open });
        A.attr(mouth, { d: s.mood === 'surprised' ? 'M190 268 Q200 290 210 268 Q200 250 190 268' : 'M180 265 Q200 285 220 265' });
      },
    };
  },
});

/* in-page pose helpers shared by the capture scripts */
(() => {
  window.mountPose = (theme, mood, t, mt, o = {}) => {
    const host = document.getElementById('host'); host.innerHTML = '';
    const m = CAST.mount(CAST.chars.find(c => c.id === 'pip-' + theme), host);
    // find a t with no blink in progress, near the requested one
    let tt = t; if (!o.keepT) for (let k = 0; k < 400 && CAST.life(tt, 11).blink > 0; k++) tt += 0.01;
    window.__fb = o.forceBlink ?? undefined;
    const N = 18, dtStep = 1 / 60;
    for (let i = N; i >= 0; i--) {
      const d = -i * dtStep, mm = mt + d; if (mm < 0) continue;
      m.update({ t: tt + d, mood, mt: mm, prev: mood, blend: 1, look: { x: 0, y: 0 }, poke: 99, pokes: 0, hover: false, small: false });
    }
    m.svg.children[1].children[2].children[0].style.display = 'none'; // motion-blur swoosh: looks like a stray crescent when frozen
    return { m, t: tt };
  };
  window.findBlink = () => { let best = [0, 0]; for (let t = 0; t < 60; t += 0.002) { const q = t % 7, r = (t + 3.5) % 9; if (q < 1.3 || r < 1.7) continue; const b = CAST.life(t, 11).blink; if (b > best[1]) best = [t, b]; } return best; };
  window.fullSvg = (theme, mood, t, mt, name, o = {}) => {
    const { m } = window.mountPose(theme, mood, t, mt, o);
    const d = PIPX.clean(m.svg, { prefix: `pip-${theme}-${name}` });
    if (theme === 'light') PIPX.addOutline(d, `pip-light-${name}-outline`, false);
    return PIPX.finish(d, `Pip Prime, ${theme === 'dark' ? 'Turkish blue' : 'creamy white'}, ${name.replace(/-/g, ' ')}`);
  };
  window.extent = () => { // union bbox of visible non-shadow art
    const svg = document.querySelector('#host svg'); const main = svg.children[1];
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    [main.children[2]].forEach(g => g.querySelectorAll('*').forEach(e => {
      if (e === g.children[0]) return;
      if (e.closest('defs') || e.children.length || e.style.display === 'none' || e.parentNode === g && e === g.children[0]) return;
      if (g.children[0].contains(e)) return;
      let h = false; for (let p = e; p && p !== svg; p = p.parentNode) if (p.style && p.style.display === 'none') h = true; if (h) return;
      const r = e.getBoundingClientRect(); if (!r.width && !r.height) return;
      x0 = Math.min(x0, r.left); y0 = Math.min(y0, r.top); x1 = Math.max(x1, r.right); y1 = Math.max(y1, r.bottom);
    }));
    return [x0, y0, x1, y1].map(v => +v.toFixed(1));
  };
  window.fitMt = (theme, mood, t, mt0, margin = 3) => {
    for (let k = 0; k <= 40; k++) for (const sgn of (k ? [1, -1] : [1])) {
      const mt = +(mt0 + sgn * k * 0.01).toFixed(4); if (mt < 0) continue;
      mountPose(theme, mood, t, mt); const [x0, y0, x1, y1] = extent();
      if (x0 >= margin && y0 >= margin && x1 <= 400 - margin && y1 <= 400 - margin) return mt;
    }
    return mt0;
  };
})();

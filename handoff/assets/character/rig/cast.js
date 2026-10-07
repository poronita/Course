/* =========================================================================
   Mascot Casting Room engine. Each character is an SVG rig in a 400 x 400
   viewBox, driven every frame by a state object (see CONTRACT.md).
   ========================================================================= */
const CAST = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  const MOODS = [
    ['idle', 'Idle'], ['happy', 'Happy'], ['wink', 'Wink'], ['surprised', 'Surprised'], ['thinking', 'Thinking'],
    ['working', 'Working'], ['celebrate', 'Celebrate'], ['sleepy', 'Sleepy'], ['levelup', 'Level up'], ['signature', 'Signature move'],
  ];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  const seg = (t, a, b) => (b <= a ? (t >= a ? 1 : 0) : clamp((t - a) / (b - a)));
  const ease = {
    out: p => 1 - Math.pow(1 - p, 3), in: p => p * p * p,
    inOut: p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
    outBack: p => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); },
    outElastic: p => (p <= 0 ? 0 : p >= 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * (2 * Math.PI) / 3) + 1),
    spring: p => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.exp(-6 * p) * Math.cos(11 * p)),
  };
  const rng = seed => () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
  /* Damped wobble after an impulse at time 0: returns -1..1 that settles. */
  const wobble = (dt, freq = 9, decay = 5) => (dt < 0 ? 0 : Math.exp(-decay * dt) * Math.sin(dt * freq));
  /* Idle life: blink 0 open .. 1 closed, plus slow oscillators in -1..1. */
  const lifeCache = new Map();
  const life = (t, seed = 1) => {
    let L = lifeCache.get(seed);
    if (!L) { const r = rng(seed * 101 + 7), b = []; let x = 0.8 + r(); while (x < 4000) { b.push(x); if (r() < 0.22) b.push(x + 0.26); x += 2.1 + r() * 2.9; } L = b; lifeCache.set(seed, L); }
    const tt = t % 3600; let blink = 0;
    for (const bt of L) { if (bt > tt + 0.2) break; const d = tt - bt; if (d >= 0 && d < 0.16) { blink = 1 - Math.abs(d - 0.08) / 0.08; break; } }
    return { blink, breathe: Math.sin(t * 2.1 + seed), sway: Math.sin(t * 0.8 + seed * 1.7), bob: Math.sin(t * 3 + seed * 0.4), drift: Math.sin(t * 0.37 + seed) };
  };

  let uidN = 0;
  const chars = [];
  const register = def => { chars.push(def); chars.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)); };

  /* Mount one instance of a character into host. Returns { svg, update(state) }. */
  function mount(def, host, opts = {}) {
    const pre = `c${++uidN}-`;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 400 400');
    svg.setAttribute('class', 'cast-svg');
    svg.setAttribute('aria-hidden', 'true');
    host.appendChild(svg);
    const defs = document.createElementNS(NS, 'defs'); svg.appendChild(defs);
    const g = document.createElementNS(NS, 'g'); svg.appendChild(g);
    const A = {
      NS, svg, defs, small: !!opts.small, clamp, lerp, seg, ease, rng, wobble, life,
      /* Create an SVG element. attrs may include `text` for text content. */
      el(tag, attrs = {}, parent = g) { const e = document.createElementNS(NS, tag); for (const k in attrs) { if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); } parent.appendChild(e); return e; },
      attr(e, attrs) { for (const k in attrs) e.setAttribute(k, typeof attrs[k] === 'number' ? +attrs[k].toFixed(3) : attrs[k]); },
      /* Unique id per instance (gradients, clip paths, filters). */
      id: name => pre + name,
      url: name => `url(#${pre}${name})`,
      /* Transform about a pivot: translate(x,y) then rotate r (deg) and scale sx,sy around (ox,oy). */
      tf(e, x = 0, y = 0, r = 0, sx = 1, sy = sx, ox = 0, oy = 0) {
        e.setAttribute('transform', `translate(${(x + ox).toFixed(2)} ${(y + oy).toFixed(2)}) rotate(${r.toFixed(2)}) scale(${sx.toFixed(4)} ${sy.toFixed(4)}) translate(${-ox} ${-oy})`);
      },
      show(e, on) { e.style.display = on ? '' : 'none'; },
      op(e, o) { e.setAttribute('opacity', clamp(o).toFixed(3)); },
    };
    A.grad = (name, stops, o = {}) => {
      const lin = !o.radial, gr = A.el(lin ? 'linearGradient' : 'radialGradient', Object.assign({ id: pre + name }, lin ? { x1: o.x1 ?? 0, y1: o.y1 ?? 0, x2: o.x2 ?? 0, y2: o.y2 ?? 1 } : { cx: o.cx ?? 0.5, cy: o.cy ?? 0.5, r: o.r ?? 0.5, fx: o.fx ?? o.cx ?? 0.5, fy: o.fy ?? o.cy ?? 0.5 }, o.units ? { gradientUnits: o.units } : {}), defs);
      stops.forEach(s => A.el('stop', { offset: s[0], 'stop-color': s[1], 'stop-opacity': s[2] ?? 1 }, gr));
      return gr;
    };
    let inst = {};
    try { inst = def.build(g, A) || {}; } catch (e) { console.error(def.id, e); }
    return { svg, def, update(s) { try { inst.update && inst.update(s); } catch (e) { console.error(def.id, e); } } };
  }

  return { NS, MOODS, chars, register, mount, clamp, lerp, seg, ease, life };
})();

/* Runs inside the page. Turns a mounted rig <svg> into a clean standalone SVG string.
   window.PIPX = { clean(svg, opts), serialize(node) } */
window.PIPX = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  /* monoline stand-ins for the three text strings the rig uses (so no font is needed) */
  function glyphPath(txt, a) {
    const fs = +a['font-size'], x = +(a.x || 0), y = +(a.y || 0), mid = a['text-anchor'] === 'middle';
    const f = k => +(k * fs).toFixed(2);
    if (txt === 'z') {
      const x0 = x, p = `M${x0 + f(.06)} ${y - f(.5)}H${x0 + f(.44)}L${x0 + f(.06)} ${y - f(.04)}H${x0 + f(.46)}`;
      return { d: p, w: f(.17), join: 'miter' };
    }
    if (txt === 'LV') {
      const tw = f(1.28) + 1.5, x0 = mid ? x - tw / 2 : x, x1 = x0 + f(.5) + 1.5;
      return { d: `M${x0 + f(.08)} ${y - f(.72)}V${y - f(.07)}H${x0 + f(.52)}M${x1 + f(.03)} ${y - f(.7)}L${x1 + f(.35)} ${y - f(.07)}L${x1 + f(.68)} ${y - f(.7)}`, w: f(.17), join: 'round' };
    }
    if (txt === '8') {
      const cx = x, ty = y - f(.5), by = y - f(.2), rt = [f(.15), f(.13)], rb = [f(.19), f(.17)];
      const el = (cx_, cy, rx, ry) => `M${cx_ - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0z`;
      return { d: el(cx, ty, rt[0], rt[1]) + el(cx, by, rb[0], rb[1]), w: f(.14), join: 'round' };
    }
    return null;
  }

  function clean(svg, o = {}) {
    const c = svg.cloneNode(true);
    // 1. drop hidden elements
    const kill = [];
    c.querySelectorAll('*').forEach(e => { if (e.style && e.style.display === 'none') kill.push(e); });
    kill.forEach(e => e.remove());
    // 2. text -> monoline paths
    c.querySelectorAll('text').forEach(t => {
      const a = {}; [...t.attributes].forEach(at => a[at.name] = at.value);
      const g = glyphPath(t.textContent, a);
      if (!g) { t.remove(); return; }
      const p = document.createElementNS(NS, 'path');
      p.setAttribute('d', g.d); p.setAttribute('fill', 'none'); p.setAttribute('stroke', a.fill || '#000');
      p.setAttribute('stroke-width', g.w); p.setAttribute('stroke-linejoin', g.join); p.setAttribute('stroke-linecap', 'butt');
      if (a.opacity != null) p.setAttribute('opacity', a.opacity);
      t.replaceWith(p);
    });
    // 3. strip empty style attrs / rig-only attrs
    c.querySelectorAll('[style]').forEach(e => { if (!e.getAttribute('style').trim()) e.removeAttribute('style'); });
    c.removeAttribute('class'); c.removeAttribute('aria-hidden');
    // 4. rename ids
    let s = new XMLSerializer().serializeToString(c);
    const pre = o.prefix;
    s = s.replace(/id="c\d+-/g, `id="${pre}-`).replace(/url\(#c\d+-/g, `url(#${pre}-`).replace(/href="#c\d+-/g, `href="#${pre}-`);
    const d = new DOMParser().parseFromString(s, 'image/svg+xml').documentElement;
    // 5. prune unreferenced defs entries (iterate: gradients can reference others, clip paths nothing)
    const defs = d.querySelector('defs');
    const refs = () => { const t = serialize(d, true); const set = new Set(); for (const m of t.matchAll(/url\(#([^)]+)\)|href="#([^"]+)"/g)) set.add(m[1] || m[2]); return set; };
    for (let k = 0; k < 3; k++) { const used = refs(); [...defs.children].forEach(e => { if (!used.has(e.id)) e.remove(); }); }
    return d;
  }

  const SELF = new Set(['stop', 'path', 'circle', 'rect', 'ellipse', 'line', 'feOffset', 'feFlood', 'feMergeNode', 'feMorphology', 'feGaussianBlur', 'feComposite']);
  function serialize(n, skipDefs, depth = 0) {
    const ind = '  '.repeat(depth);
    let a = ''; [...n.attributes].forEach(at => { if (at.name === 'xmlns' && depth) return; a += ` ${at.name}="${esc(at.value)}"`; });
    const name = n.localName;
    if (!n.children.length) return `${ind}<${name}${a}/>\n`;
    if (skipDefs && name === 'defs') return '';
    return `${ind}<${name}${a}>\n` + [...n.children].map(ch => serialize(ch, skipDefs, depth + 1)).join('') + `${ind}</${name}>\n`;
  }

  /* light-theme outline (matches the prototype's 4x 1.5px drop-shadow ring), 8 directions */
  function outlineFilter(id, r, color, outlineOnly) {
    const dirs = [...Array(8)].map((_, i) => { const a = i * Math.PI / 4; return [+(Math.cos(a) * r).toFixed(2), +(Math.sin(a) * r).toFixed(2)]; });
    let f = `<filter xmlns="${NS}" id="${id}" filterUnits="userSpaceOnUse" x="-20" y="-20" width="440" height="440" color-interpolation-filters="sRGB">`;
    dirs.forEach((d, i) => f += `<feOffset in="SourceAlpha" dx="${d[0]}" dy="${d[1]}" result="o${i}"/>`);
    f += '<feMerge result="ring">' + dirs.map((_, i) => `<feMergeNode in="o${i}"/>`).join('') + '</feMerge>';
    f += `<feFlood flood-color="${color}" result="fc"/><feComposite in="fc" in2="ring" operator="in" result="line"/>`;
    f += outlineOnly ? '' : '<feMerge><feMergeNode in="line"/><feMergeNode in="SourceGraphic"/></feMerge>';
    return new DOMParser().parseFromString(f + '</filter>', 'image/svg+xml').documentElement;
  }

  /* Apply outline: wrap everything except the ground shadow (first child of the main group) in a filtered group. */
  function addOutline(d, id, outlineOnly) {
    const main = [...d.children].find(e => e.localName === 'g');
    const kids = [...main.children];
    const wrap = document.createElementNS(NS, 'g'); wrap.setAttribute('filter', `url(#${id})`);
    kids.slice(1).forEach(k => wrap.appendChild(k));
    main.appendChild(wrap);
    d.querySelector('defs').appendChild(outlineFilter(id, 1.6, '#7b6443', outlineOnly));
  }

  function finish(d, title) {
    d.setAttribute('xmlns', NS); d.setAttribute('width', 400); d.setAttribute('height', 400);
    const t = document.createElementNS(NS, 'title'); t.textContent = title; d.insertBefore(t, d.firstChild);
    d.setAttribute('role', 'img');
    return '<?xml version="1.0" encoding="UTF-8"?>\n' + serialize(d, false);
  }
  return { clean, serialize, addOutline, finish, glyphPath };
})();

/* ==========================================================================
   Image Swiss Knife — Style Lab engine
   Deterministic timeline: every style renders a pure function of time t
   (0..40 s), so pausing and scrubbing are exact. See design/CONTRACT.md.
   ========================================================================== */
const ISK = (() => {
  const DUR = 40;

  /* The shared 40-second story. Every style tells the same story so the
     eight directions can be compared moment by moment. */
  const SCENES = [
    { t: 0,  id: 'intro',   label: 'Open the app' },
    { t: 4,  id: 'pick',    label: 'Pick a photo' },
    { t: 9,  id: 'shrink',  label: 'Shrink to 200 KB' },
    { t: 17, id: 'crop',    label: 'Crop for Instagram' },
    { t: 24, id: 'privacy', label: 'Where was it taken?' },
    { t: 30, id: 'gif',     label: 'Video to GIF' },
    { t: 36, id: 'done',    label: 'Save & share' },
  ];

  /* Story facts. Use these exact values so every style shows the same data. */
  const DATA = {
    portrait: { file: 'IMG_2041.HEIC', bytes: 5033165, size: '4.8 MB', dims: '4032 × 3024' },
    shrink: {
      target: 'Exam form', rule: 'JPG · under 200 KB', px: '350 × 450 px',
      bytes: 200704, size: '196 KB', format: 'JPG',
      options: [
        { label: 'For WhatsApp', hint: 'about 500 KB' },
        { label: 'For exam or job form', hint: 'under 200 KB' },
        { label: 'For email', hint: 'under 1 MB' },
        { label: 'Type my own size', hint: 'KB or MB' },
      ],
    },
    crop: {
      preset: 'Instagram post', ratio: '4:5', w: 4, h: 5, px: '1080 × 1350',
      presets: [
        { label: 'Instagram post', ratio: '4:5', px: '1080 × 1350', w: 4, h: 5 },
        { label: 'Instagram story', ratio: '9:16', px: '1080 × 1920', w: 9, h: 16 },
        { label: 'Square', ratio: '1:1', px: '1080 × 1080', w: 1, h: 1 },
        { label: 'Facebook cover', ratio: '851:315', px: '851 × 315', w: 851, h: 315 },
        { label: 'LinkedIn banner', ratio: '4:1', px: '1584 × 396', w: 4, h: 1 },
        { label: 'YouTube thumbnail', ratio: '16:9', px: '1280 × 720', w: 16, h: 9 },
        { label: 'WhatsApp profile', ratio: '1:1', px: '640 × 640', w: 1, h: 1 },
        { label: 'Passport photo', ratio: '35:45', px: '35 × 45 mm', w: 35, h: 45 },
      ],
    },
    place: {
      city: 'Pune', region: 'Maharashtra', country: 'India',
      lat: '18.52° N', lon: '73.86° E', when: '12 Aug 2026 · 6:42 PM', device: 'Pixel 8',
      file: 'IMG_1877.JPG',
    },
    video: { file: 'beach-trip.mp4', len: '0:12', clip: '3.0 s', from: '0:04', to: '0:07', fps: 12, size: '2.1 MB', frames: 36 },
    done: { count: 4, saved: '4.6 MB saved' },
    promise: 'Done on your phone. Nothing uploaded.',
    promiseWeb: 'Done in your browser. Nothing uploaded.',
  };

  /* ---------------------------------------------------------------- math */
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, p) => a + (b - a) * p;
  const seg = (t, a, b) => (b <= a ? (t >= a ? 1 : 0) : clamp((t - a) / (b - a)));
  const ease = {
    lin: p => p,
    in: p => p * p * p,
    out: p => 1 - Math.pow(1 - p, 3),
    inOut: p => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
    outQuart: p => 1 - Math.pow(1 - p, 4),
    outBack: p => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); },
    outElastic: p => (p <= 0 ? 0 : p >= 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * (2 * Math.PI) / 3) + 1),
    spring: p => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.exp(-6 * p) * Math.cos(11 * p)),
  };
  /* 0 before a, fades in over fi, holds, fades out over fo so it is 0 at b. */
  const win = (t, a, b, fi = 0.35, fo = 0.35) => Math.min(seg(t, a, a + fi), 1 - seg(t, b - fo, b));
  /* Tween a number between a and b. */
  const count = (t, a, b, from, to, fn = ease.out) => lerp(from, to, fn(seg(t, a, b)));
  const typed = (t, a, text, cps = 22) => text.slice(0, Math.max(0, Math.floor((t - a) * cps)));
  const fmtBytes = n => (n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB');
  const rng = seed => () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
  const sceneAt = t => { let s = SCENES[0]; for (const x of SCENES) if (t >= x.t) s = x; return s; };

  /* ----------------------------------------------------------------- DOM */
  const el = (tag, cls, parent, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    if (parent) parent.appendChild(e);
    return e;
  };
  /* set(e, {x, y, s, sx, sy, r, o}) — transform + opacity in one call.
     Opacity 0 also hides the element so it cannot be "pointed at". */
  const set = (e, o) => {
    if (!e) return;
    let tr = '';
    if (o.x != null || o.y != null) tr += `translate(${(o.x || 0).toFixed(2)}px,${(o.y || 0).toFixed(2)}px) `;
    if (o.r) tr += `rotate(${o.r.toFixed(2)}deg) `;
    if (o.s != null) tr += `scale(${o.s.toFixed(4)}) `;
    if (o.sx != null || o.sy != null) tr += `scale(${(o.sx ?? 1).toFixed(4)},${(o.sy ?? 1).toFixed(4)}) `;
    if (o.x != null || o.y != null || o.r != null || o.s != null || o.sx != null || o.sy != null) e.style.transform = tr || 'none';
    if (o.o != null) { e.style.opacity = o.o.toFixed(3); e.style.visibility = o.o <= 0.002 ? 'hidden' : 'visible'; }
  };
  const txt = (e, s) => { if (e && e.textContent !== s) e.textContent = s; };
  const html = (e, s) => { if (e && e._h !== s) { e._h = s; e.innerHTML = s; } };
  const cls = (e, name, on) => { if (e) e.classList.toggle(name, !!on); };

  /* --------------------------------------------------------------- icons */
  const ICONS = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    shrink: '<path d="M4 4l6 6M10 5v5H5M20 20l-6-6M14 19v-5h5"/>',
    crop: '<path d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    convert: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
    grid: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
    share: '<path d="M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    save: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    next: '<path d="M9 5l7 7-7 7"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5L5 20"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
    upload: '<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    eyeoff: '<path d="M3 3l18 18M10.6 6.1A9 9 0 0 1 12 6c6 0 9.5 6 9.5 6a16 16 0 0 1-3 3.6M6.3 7.6C3.9 9.3 2.5 12 2.5 12S6 18 12 18a9 9 0 0 0 4.3-1.1"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    wand: '<path d="M4 20L15 9M14 4v3M19 9h-3M17.5 5.5l-2 2"/>',
    ruler: '<rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M6.5 8v3M10.5 8v4M14.5 8v3M18.5 8v4"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2s-1-1.6-1-2.6 .8-1.4 2-1.4h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7" r="1.2"/>',
  };
  const icon = (name, size = 24, stroke = 2) =>
    `<svg class="isk-ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* -------------------------------------------------------------- photos */
  /* Procedural "photos" as SVG data URIs. photo(name, opts) returns a CSS
     url(...) string for background-image (use background-size: cover). */
  const pcache = new Map();
  /* Single quotes so the value can sit inside a style="…" attribute. */
  const svgURL = s => `url('data:image/svg+xml;charset=utf-8,${encodeURIComponent(s).replace(/'/g, '%27')}')`;
  const PHOTO = {
    mountain(o) {
      const sx = 820 + (o.sun ?? 0) * 120, sy = 300 + (o.sun ?? 0) * 60;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26285f"/><stop offset=".42" stop-color="#b9507a"/><stop offset=".72" stop-color="#f39a5a"/><stop offset="1" stop-color="#ffd99a"/></linearGradient>
<linearGradient id="w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9906b"/><stop offset="1" stop-color="#3b2b5c"/></linearGradient>
<radialGradient id="g" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#ffd27a" stop-opacity=".55"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="900" fill="url(#s)"/>
<circle cx="${sx}" cy="${sy}" r="210" fill="url(#g)"/><circle cx="${sx}" cy="${sy}" r="64" fill="#fff0c2"/>
<path d="M0 560L170 372 300 470 470 268 640 470 760 392 900 500 1040 350 1200 462V900H0z" fill="#6a3f73"/>
<path d="M470 268l-52 62 30-8 22 22 24-26 38 12zM1040 350l-40 44 26-6 16 14 18-18 30 10z" fill="#f6dbe6"/>
<path d="M0 640L210 468 380 588 560 446 720 598 880 516 1060 618 1200 556V900H0z" fill="#3f2955"/>
<rect y="684" width="1200" height="216" fill="url(#w)"/>
<path d="M0 684h1200" stroke="#ffd7a1" stroke-width="3" opacity=".6"/>
<path d="M${sx - 70} 720h140M${sx - 46} 748h92M${sx - 24} 776h48" stroke="#ffe7b8" stroke-width="6" stroke-linecap="round" opacity=".55"/>
<path d="M0 900V700l40-60 20 40 30-90 30 90 20-30 30 50v200zM1200 900V690l-30-50-20 30-30-100-30 100-20-40-30 70v200z" fill="#1d1431"/></svg>`;
    },
    portrait() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcebf7"/><stop offset="1" stop-color="#a9c6e3"/></linearGradient></defs>
<rect width="600" height="800" fill="url(#b)"/>
<path d="M90 800c10-150 90-220 210-220s200 70 210 220z" fill="#2f4b7c"/>
<path d="M250 600l50 70 50-70z" fill="#f4f6fb"/>
<rect x="262" y="470" width="76" height="120" rx="30" fill="#b9805b"/>
<path d="M190 330c0-100 50-170 110-170s110 70 110 170c0 110-50 190-110 190s-110-80-110-190z" fill="#d39b74"/>
<path d="M180 340c-10-120 40-210 125-210 80 0 135 70 125 190-20-60-55-100-120-108-60-8-105 40-130 128z" fill="#2a1b16"/>
<ellipse cx="258" cy="352" rx="11" ry="13" fill="#2a1b16"/><ellipse cx="342" cy="352" rx="11" ry="13" fill="#2a1b16"/>
<path d="M232 318q26-14 52 0M316 318q26-14 52 0" stroke="#2a1b16" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M300 362v44l-14 8" stroke="#a96f4f" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M262 440q38 26 76 0" stroke="#8c3f37" stroke-width="8" fill="none" stroke-linecap="round"/>
<circle cx="240" cy="404" r="16" fill="#e38b7a" opacity=".35"/><circle cx="360" cy="404" r="16" fill="#e38b7a" opacity=".35"/></svg>`;
    },
    city() {
      const r = rng(7); let b = '', w = '';
      let x = -10;
      while (x < 1200) {
        const bw = 60 + Math.floor(r() * 90), bh = 180 + Math.floor(r() * 380), y = 760 - bh;
        const c = ['#1c2140', '#232a52', '#2a2350', '#1a1d36'][Math.floor(r() * 4)];
        b += `<rect x="${x}" y="${y}" width="${bw}" height="${bh + 140}" fill="${c}"/>`;
        for (let wy = y + 18; wy < 740; wy += 30) for (let wx = x + 10; wx < x + bw - 14; wx += 22) if (r() > 0.55) w += `<rect x="${wx}" y="${wy}" width="10" height="14" fill="${r() > 0.3 ? '#ffd27a' : '#ff9f68'}" opacity="${(0.55 + r() * 0.45).toFixed(2)}"/>`;
        x += bw + 6;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16204a"/><stop offset=".55" stop-color="#7b3f7a"/><stop offset="1" stop-color="#f08a5d"/></linearGradient></defs>
<rect width="1200" height="900" fill="url(#s)"/><circle cx="930" cy="190" r="46" fill="#ffe9c9" opacity=".9"/>
${b}${w}<rect y="760" width="1200" height="140" fill="#11132a"/><path d="M0 800h1200" stroke="#f6b26b" stroke-width="4" stroke-dasharray="40 30" opacity=".5"/></svg>`;
    },
    beach(o) {
      const k = o.k ?? 0; // 0..1 animation phase (for video frames)
      const kx = 300 + k * 600, ky = 210 + Math.sin(k * Math.PI * 2) * 60;
      const wv = Math.sin(k * Math.PI * 2) * 16;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb7f0"/><stop offset="1" stop-color="#d9f2ff"/></linearGradient>
<linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f8fd6"/><stop offset="1" stop-color="#2fc0d8"/></linearGradient></defs>
<rect width="1200" height="900" fill="url(#s)"/><circle cx="1010" cy="150" r="58" fill="#fff6c9"/>
<path d="M120 170q40-26 80 0q40-26 80 0" stroke="#ffffff" stroke-width="22" fill="none" stroke-linecap="round" opacity=".85"/>
<rect y="470" width="1200" height="260" fill="url(#m)"/>
<path d="M0 ${560 + wv}q150 -30 300 0t300 0 300 0 300 0" stroke="#ffffff" stroke-width="8" fill="none" opacity=".6"/>
<path d="M0 ${650 - wv}q150 -24 300 0t300 0 300 0 300 0V740H0z" fill="#8fe0ea" opacity=".75"/>
<path d="M0 700q300-40 600-10t600 0V900H0z" fill="#f5d8a3"/>
<path d="M${kx} ${ky}l46 56-46 56-46-56z" fill="#ff5a5f"/><path d="M${kx} ${ky}v112M${kx - 46} ${ky + 56}h92" stroke="#fff" stroke-width="4"/>
<path d="M${kx} ${ky + 112}q-60 ${120 + wv * 3} -${120 + k * 180} ${320}" stroke="#40485a" stroke-width="3" fill="none"/>
<circle cx="${280 + k * 360}" cy="${700 - Math.abs(Math.sin(k * Math.PI * 3)) * 140}" r="26" fill="#ffcf3f"/><path d="M${254 + k * 360} ${700 - Math.abs(Math.sin(k * Math.PI * 3)) * 140}h52" stroke="#ff7a3d" stroke-width="7"/></svg>`;
    },
    abstract(o) {
      const r = rng((o.seed ?? 1) * 97 + 3);
      const pal = [['#ffd1a9', '#ff7e6b', '#7a4fff'], ['#b6f0d9', '#2bb3a3', '#24577a'], ['#ffe9a3', '#ffb23f', '#e0563f'], ['#d9d4ff', '#8f7bff', '#2e2a6b'], ['#c8f3ff', '#59b8ff', '#1f4fbf'], ['#ffd6e7', '#ff6fa8', '#7b2a63']][Math.floor(r() * 6)];
      let blobs = '';
      for (let i = 0; i < 4; i++) blobs += `<circle cx="${Math.floor(r() * 1200)}" cy="${Math.floor(r() * 900)}" r="${200 + Math.floor(r() * 300)}" fill="${pal[i % 3]}" opacity=".75"/>`;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice"><defs><filter id="f"><feGaussianBlur stdDeviation="70"/></filter></defs><rect width="1200" height="900" fill="${pal[0]}"/><g filter="url(#f)">${blobs}</g></svg>`;
    },
  };
  const photo = (name, opts = {}) => {
    const key = name + JSON.stringify(opts, (k, v) => (typeof v === 'number' ? Math.round(v * 100) / 100 : v));
    let u = pcache.get(key);
    if (!u) { u = svgURL(PHOTO[name] ? PHOTO[name](opts) : PHOTO.abstract(opts)); pcache.set(key, u); }
    return u;
  };
  /* Animated video frame i of n (beach clip). */
  const frame = (i, n = 12) => photo('beach', { k: (i % n) / n });

  /* --------------------------------------------------------- confetti etc */
  function makeConfetti(parent, opt = {}) {
    const n = opt.count ?? 60, colors = opt.colors ?? ['#ff5a5f', '#ffcf3f', '#2bc48a', '#3d8bff', '#b36bff'];
    const ox = opt.x ?? 0, oy = opt.y ?? 0, dur = opt.dur ?? 2.6, g = opt.gravity ?? 900;
    const r = rng(opt.seed ?? 11);
    const box = el('div', 'isk-confetti', parent);
    const parts = [];
    for (let i = 0; i < n; i++) {
      const p = el('i', '', box);
      p.style.background = colors[i % colors.length];
      const a = (opt.spread ?? Math.PI * 0.9) * (r() - 0.5) - Math.PI / 2, v = (opt.power ?? 650) * (0.45 + r() * 0.75);
      const shape = r();
      p.style.width = (shape > 0.5 ? 8 : 6) + 'px';
      p.style.height = (shape > 0.5 ? 12 : 6) + 'px';
      if (shape < 0.25) p.style.borderRadius = '50%';
      parts.push({ p, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vr: (r() - 0.5) * 900 });
    }
    return {
      el: box,
      /* dt = seconds since burst. Hidden before 0 and after dur. */
      update(dt) {
        const on = dt >= 0 && dt <= dur;
        box.style.display = on ? '' : 'none';
        if (!on) return;
        const fade = 1 - seg(dt, dur * 0.65, dur);
        for (const q of parts) {
          const x = ox + q.vx * dt, y = oy + q.vy * dt + 0.5 * g * dt * dt;
          q.p.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${(q.vr * dt).toFixed(0)}deg)`;
          q.p.style.opacity = fade.toFixed(2);
        }
      },
    };
  }

  /* --------------------------------------------------------------- pointer
     keys: [{ t, at, ax, ay, dx, dy, tap, hold, drag, move }]
       at   element | selector (inside screen) | {x,y} | () => {x,y}
       ax/ay anchor inside the element (0..1, default .5)
       tap  show a press + ripple at t
       hold seconds to stay pressed after t
       drag pressed while travelling from the previous key to this one
       move travel time in seconds into this key (default .75)            */
  function makePointer(ctx, keys) {
    keys = keys.slice().sort((a, b) => a.t - b.t);
    const finger = ctx.mode === 'app';
    const p = el('div', 'isk-ptr ' + (finger ? 'is-finger' : 'is-cursor'), ctx.screen);
    p.innerHTML = '<i class="isk-ripple"></i>' + (finger ? '<b class="isk-dot"></b>' :
      '<svg class="isk-arrow" width="26" height="26" viewBox="0 0 26 26"><path d="M3 2l18 10.5-7.6 1.6 4.4 8.2-3.6 1.8-4.3-8.2L4.3 21z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>');
    const rip = p.firstChild;
    const cache = new Map();
    const resolve = (k, i) => {
      let pos = null;
      const tgt = typeof k.at === 'string' ? ctx.screen.querySelector(k.at) : k.at;
      if (typeof tgt === 'function') pos = tgt();
      else if (tgt && tgt.getBoundingClientRect) {
        const r = tgt.getBoundingClientRect(), s = ctx.screen.getBoundingClientRect(), sc = s.width / ctx.W || 1;
        if (r.width > 0 || r.height > 0) pos = { x: (r.left - s.left + r.width * (k.ax ?? 0.5)) / sc, y: (r.top - s.top + r.height * (k.ay ?? 0.5)) / sc };
      } else if (tgt && tgt.x != null) pos = { x: tgt.x, y: tgt.y };
      if (pos) { pos = { x: pos.x + (k.dx || 0), y: pos.y + (k.dy || 0) }; cache.set(i, pos); }
      return pos || cache.get(i) || { x: ctx.W / 2, y: ctx.H * 0.7 };
    };
    return {
      update(t) {
        if (!keys.length) return;
        const first = keys[0], last = keys[keys.length - 1];
        const vis = win(t, first.t - 0.7, last.t + (last.hold || 0) + 0.9, 0.3, 0.4);
        p.style.opacity = vis.toFixed(3);
        p.style.display = vis <= 0.001 ? 'none' : '';
        if (vis <= 0.001) return;
        let pos, pressed = false;
        if (t <= first.t) {
          const a = resolve(first, 0);
          const q = ease.out(seg(t, first.t - 0.7, first.t - 0.1));
          pos = { x: a.x + (1 - q) * 40, y: a.y + (1 - q) * 70 };
        } else {
          let i = 0;
          while (i < keys.length - 1 && t >= keys[i + 1].t) i++;
          if (i >= keys.length - 1) pos = resolve(last, keys.length - 1);
          else {
            const a = keys[i], b = keys[i + 1];
            const depart = a.t + (a.hold || 0) + 0.12;
            const st = Math.max(depart, b.t - (b.move ?? 0.75));
            if (b.t - depart > 2.2 && !b.drag) {
              /* Long idle gap: lift the finger away, then bring it back near the next target. */
              const out = seg(t, depart + 0.25, depart + 0.55), back = seg(t, b.t - 0.75, b.t - 0.45);
              const fade = Math.max(1 - out, back);
              p.style.opacity = (vis * fade).toFixed(3);
              if (t < b.t - 0.75) { pos = resolve(a, i); }
              else {
                const B = resolve(b, i + 1), q = ease.out(seg(t, b.t - 0.75, b.t - 0.1));
                pos = { x: B.x + (1 - q) * 40, y: B.y + (1 - q) * 70 };
              }
            } else {
              const q = ease.inOut(seg(t, st, b.t));
              const A = resolve(a, i), B = resolve(b, i + 1);
              pos = { x: lerp(A.x, B.x, q), y: lerp(A.y, B.y, q) };
              if (b.drag && t >= st - 0.08) pressed = true;
            }
          }
        }
        let ripQ = -1;
        keys.forEach(k => {
          if ((k.tap || k.hold || k.drag) && t >= k.t - 0.08 && t <= k.t + Math.max(0.16, k.hold || 0)) pressed = true;
          if (k.tap && t >= k.t && t <= k.t + 0.55) ripQ = seg(t, k.t, k.t + 0.55);
        });
        p.style.transform = `translate(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px)`;
        p.classList.toggle('is-down', pressed);
        if (ripQ >= 0) { rip.style.opacity = (1 - ripQ).toFixed(2); rip.style.transform = `translate(-50%,-50%) scale(${(0.3 + ripQ * 1.7).toFixed(2)})`; }
        else rip.style.opacity = '0';
      },
    };
  }

  /* -------------------------------------------------------------- registry */
  const styles = [];
  const register = def => { styles.push(def); styles.sort((a, b) => (a.order ?? 99) - (b.order ?? 99)); };

  /* Build a style into a host element. Returns { update(t), screen, def }. */
  function mount(def, mode, host) {
    host.innerHTML = '';
    const W = mode === 'app' ? 390 : 1280, H = mode === 'app' ? 844 : 756;
    const screen = el('div', `isk-screen st-${def.id} m-${mode}`, host);
    screen.style.width = W + 'px';
    screen.style.height = H + 'px';
    const ptrs = [], hooks = [];
    const api = {
      DUR, SCENES, DATA, mode, W, H, screen, app: mode === 'app', web: mode === 'web',
      clamp, lerp, seg, ease, win, count, typed, fmtBytes, rng, sceneAt,
      el, set, txt, html, cls, icon, photo, frame,
      pointer(keys) { const x = makePointer(api, keys); ptrs.push(x); return x; },
      /* Centre of an element (or a point inside it) in screen pixels. */
      center(e, ax = 0.5, ay = 0.5) {
        if (typeof e === 'string') e = screen.querySelector(e);
        if (!e) return { x: W / 2, y: H / 2 };
        const r = e.getBoundingClientRect(), s = screen.getBoundingClientRect(), sc = s.width / W || 1;
        return { x: (r.left - s.left + r.width * ax) / sc, y: (r.top - s.top + r.height * ay) / sc };
      },
      /* Toggle class `on` while t is inside a short window around a tap at tapT (button press look). */
      press(e, t, tapT, name = 'is-pressed') { if (e) e.classList.toggle(name, t >= tapT - 0.06 && t <= tapT + 0.2); },
      confetti(parent, opt) { return makeConfetti(parent, opt); },
      /* Run fn(t) after the style's update (for anything that reads layout). */
      after(fn) { hooks.push(fn); },
    };
    let inst;
    try { inst = def.build(screen, api) || {}; }
    catch (e) { console.error(e); screen.innerHTML = `<pre class="isk-err">${String(e && e.stack || e)}</pre>`; inst = {}; }
    return {
      def, screen, mode,
      update(t) {
        try { inst.update && inst.update(t); } catch (e) { console.error(e); }
        hooks.forEach(f => f(t));
        ptrs.forEach(p => p.update(t));
      },
      statusBar(t) { const s = def.statusBar; return typeof s === 'function' ? s(t, mode) : (s || 'dark'); },
    };
  }

  return { DUR, SCENES, DATA, styles, register, mount, sceneAt, icon, photo, clamp, seg, ease };
})();

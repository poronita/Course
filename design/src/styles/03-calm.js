/* Style 3 — Big & Calm. Reference implementation of the style contract. */
ISK.register({
  id: 'calm',
  order: 3,
  name: 'Big & Calm',
  tagline: 'One question per screen, in plain words.',
  concept: 'Built for the grandfather test. Every screen asks one question in everyday words, with three or four huge answers. Buttons say what they do. There are no hidden gestures, and nothing moves unless the user touches it. The same calm path works for every tool.',
  wins: [
    'Anyone can finish a task on the first try: no icons-only buttons, no jargon like "quality 80" or "EXIF".',
    'Questions such as "Where will you use it?" replace settings, so the app picks KB, pixels and format for the user.',
    'Cheapest to build and to keep accessible: large text, high contrast, works with screen readers.',
  ],
  risks: [
    'Can feel plain next to flashy rivals; it needs warmth in the copy and small delights.',
    'Power users want shortcuts, so add an "All tools" screen and a remembered last choice.',
  ],
  scores: { simple: 5, fun: 2, wow: 2, effort: 1 },
  palette: ['#F3F5F9', '#10213F', '#FFC531', '#1E8E5A', '#FFF4D6', '#CBD3E1'],
  type: 'Atkinson Hyperlegible, a typeface designed for low-vision readers, at 19 to 32 px.',
  motion: 'Gentle side slides between steps, buttons that press down, a check mark that draws itself. One change at a time.',
  notes: {
    intro: 'Splash promises privacy first, then home asks "What do you want to do?" with six big tiles.',
    pick: 'Step 1 of 3. A plain photo grid on the phone; on the web, a big drop area for files.',
    shrink: 'The user answers "Where will you use it?" and picks "exam form". The app works out JPG and 200 KB on its own.',
    crop: 'Social sizes are listed by name, each with a small shape of the frame. One-finger drag to fit.',
    privacy: 'Plain answer first: "Pune, India". A yellow note explains the risk, then one button removes the place.',
    gif: 'Big yellow handles to choose 3 seconds. A progress line with words, not a spinner.',
    done: 'A checklist of what was made, the privacy promise, and the only ad placement, kept below the results.',
  },
  statusBar: 'dark',
  css: `
.st-calm{--bg:#F3F5F9;--card:#fff;--ink:#10213F;--muted:#4A5A78;--line:#CBD3E1;--yel:#FFC531;--yel-d:#D99B00;--grn:#1E8E5A;--grn-l:#E3F4EA;--amb:#FFF4D6;--amb-b:#E8B23A;background:var(--bg);color:var(--ink);font-family:"Atkinson Hyperlegible",system-ui,sans-serif;font-size:18px;line-height:1.35}
.st-calm .pg{position:absolute;inset:0;padding:58px 20px 30px;display:flex;flex-direction:column;gap:16px}
.st-calm.m-web .pg{left:300px;padding:34px 64px 36px}
.st-calm .bar{display:flex;justify-content:space-between;align-items:center;min-height:50px}
.st-calm .backb{display:flex;align-items:center;gap:2px;font-size:19px;font-weight:700;padding:9px 16px 9px 8px;border:2px solid var(--line);border-radius:14px;background:var(--card)}
.st-calm .step{font-size:17px;color:var(--muted);font-weight:700;display:flex;align-items:center;gap:10px}
.st-calm .dots{display:flex;gap:6px}.st-calm .dots i{width:12px;height:12px;border-radius:50%;background:var(--line)}.st-calm .dots i.on{background:var(--ink)}
.st-calm .q{font-size:30px;line-height:1.12;font-weight:700;margin:0;letter-spacing:-.01em}
.st-calm.m-web .q{font-size:40px}
.st-calm .sub{font-size:19px;color:var(--muted);margin:-6px 0 0}
.st-calm .big{height:66px;border-radius:18px;background:var(--yel);color:var(--ink);font-size:22px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 5px 0 var(--yel-d);transition:background .2s}
.st-calm .big.off{background:#E3E7EE;box-shadow:0 5px 0 #C9CFDA;color:#8090A8}
.st-calm .big.sec{background:var(--card);border:2px solid var(--line);box-shadow:0 5px 0 var(--line)}
.st-calm .is-pressed{transform:translateY(4px) !important;box-shadow:0 1px 0 var(--yel-d) !important}
.st-calm .foot{margin-top:auto;display:flex;flex-direction:column;gap:14px}
.st-calm.m-web .foot{flex-direction:row;max-width:620px}.st-calm.m-web .wfoot{margin-top:8px}.st-calm.m-web .foot .big{flex:1}
.st-calm .tiles{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.st-calm.m-web .tiles{grid-template-columns:repeat(3,1fr);gap:18px;max-width:900px}
.st-calm .tile{background:var(--card);border:2px solid var(--line);border-radius:22px;padding:16px;min-height:148px;display:flex;flex-direction:column;justify-content:space-between;gap:10px}
.st-calm.m-web .tile{min-height:180px;padding:22px}
.st-calm .tile b{font-size:21px;line-height:1.15}
.st-calm .tile.is-pressed{transform:scale(.97) !important;border-color:var(--ink);box-shadow:none !important}
.st-calm .ic{width:56px;height:56px;border-radius:16px;display:grid;place-items:center;color:var(--ink)}
.st-calm .c1{background:var(--yel)}.st-calm .c2{background:#DCE8FF}.st-calm .c3{background:#FFE1DA}.st-calm .c4{background:#DDF1E4}.st-calm .c5{background:#ECE3FF}.st-calm .c6{background:#E6EAF1}
.st-calm .safe{display:flex;gap:10px;align-items:center;font-size:17px;color:var(--grn);font-weight:700;background:var(--grn-l);padding:12px 14px;border-radius:14px}
.st-calm.m-web .safe{max-width:620px}
.st-calm .hello{font-size:20px;color:var(--muted);margin:0 0 -8px;font-weight:700}
.st-calm .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-calm .th{aspect-ratio:1;border-radius:14px;background-size:cover;background-position:center;position:relative}
.st-calm .th.sel{box-shadow:inset 0 0 0 6px var(--yel)}
.st-calm .ck{position:absolute;right:8px;top:8px;width:36px;height:36px;border-radius:50%;background:var(--yel);display:grid;place-items:center;color:var(--ink);box-shadow:0 2px 6px rgba(0,0,0,.25)}
.st-calm .gal-l{font-size:17px;font-weight:700;color:var(--muted);margin:0}
.st-calm .drop{position:relative;border:3px dashed var(--line);border-radius:26px;background:var(--card);height:330px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;max-width:820px}
.st-calm .drop.hot{border-color:var(--yel-d);background:#FFF8E1}
.st-calm .drop b{font-size:28px}.st-calm .drop span{font-size:19px;color:var(--muted)}
.st-calm .drop .ic{width:72px;height:72px;border-radius:20px}
.st-calm .fcard{position:absolute;left:50%;top:50%;width:200px;margin:-75px 0 0 -100px;background:var(--card);border-radius:16px;box-shadow:0 18px 40px rgba(16,33,63,.25);padding:10px;display:flex;flex-direction:column;gap:8px;z-index:3}
.st-calm .fcard i{height:110px;border-radius:10px;background-size:cover;background-position:center}
.st-calm .fcard span{font-size:15px;font-weight:700}
.st-calm .dropped{position:absolute;inset:18px;border-radius:18px;background-size:cover;background-position:center 30%;display:flex;align-items:flex-end;justify-content:center;padding:14px}
.st-calm .dropped span{background:var(--card);border-radius:12px;padding:8px 14px;font-size:18px;font-weight:700}
.st-calm .pchip{display:flex;align-items:center;gap:12px;font-size:18px;color:var(--muted)}
.st-calm .pchip i{width:54px;height:54px;border-radius:12px;background-size:cover;background-position:center}
.st-calm .pchip b{color:var(--ink)}
.st-calm .opts{display:flex;flex-direction:column;gap:12px}
.st-calm.m-web .opts{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:900px}
.st-calm .opt{display:flex;align-items:center;gap:14px;background:var(--card);border:2px solid var(--line);border-radius:18px;padding:14px 16px;min-height:78px}
.st-calm .opt b{font-size:21px;display:block;line-height:1.15}
.st-calm .opt span{font-size:17px;color:var(--muted)}
.st-calm .radio{margin-left:auto;width:30px;height:30px;border-radius:50%;border:3px solid var(--line);flex:none}
.st-calm .opt.on{border-color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.st-calm .opt.on .radio{border-color:var(--ink);background:radial-gradient(var(--ink) 0 42%,transparent 47%)}
.st-calm .ratio{width:46px;height:46px;display:grid;place-items:center;flex:none}
.st-calm .ratio i{display:block;border:3px solid var(--ink);border-radius:4px;background:#DCE8FF}
.st-calm .work{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;text-align:center}
.st-calm .wph{width:190px;height:240px;border-radius:20px;background-size:cover;background-position:center;box-shadow:0 14px 30px rgba(16,33,63,.18)}
.st-calm .bign{font-size:58px;font-weight:700;font-variant-numeric:tabular-nums;line-height:1}
.st-calm .meter{width:100%;max-width:520px;height:18px;border-radius:9px;background:#E3E7EE;overflow:hidden}
.st-calm .meter i{display:block;height:100%;background:var(--grn);border-radius:9px}
.st-calm .wtxt{font-size:20px;color:var(--muted);font-weight:700}
.st-calm .row2{display:flex;flex-direction:column;gap:16px}
.st-calm.m-web .row2{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:40px;align-items:start;max-width:1000px}
.st-calm .col{display:flex;flex-direction:column;gap:16px}
.st-calm .okc{width:96px;height:96px;border-radius:50%;background:var(--grn);display:grid;place-items:center;color:#fff;flex:none}
.st-calm .okc path{stroke-dasharray:24;stroke-dashoffset:24}
.st-calm .donehead{display:flex;align-items:center;gap:18px}
.st-calm .donehead .q{font-size:34px}
.st-calm .cmp{display:grid;grid-template-columns:auto 1fr auto;gap:10px 12px;align-items:center;font-size:18px;background:var(--card);border:2px solid var(--line);border-radius:18px;padding:16px}
.st-calm .cmp .b{height:16px;border-radius:8px;background:#C9D1DE}
.st-calm .cmp .b.g{background:var(--grn)}
.st-calm .cmp b{font-variant-numeric:tabular-nums}
.st-calm .dph{height:200px;border-radius:18px;background-size:cover;background-position:center 30%}
.st-calm.m-web .dph{height:420px}
.st-calm .toast{position:absolute;left:20px;right:20px;bottom:120px;background:var(--ink);color:#fff;border-radius:16px;padding:16px 18px;font-size:19px;font-weight:700;display:flex;align-items:center;gap:12px;z-index:20}
.st-calm.m-web .toast{left:auto;right:40px;bottom:40px;width:380px}
.st-calm .cropbox{position:relative;height:430px;border-radius:20px;overflow:hidden;background:#141a29}
.st-calm.m-web .cropbox{height:440px}
.st-calm .cimg{position:absolute;left:50%;top:50%;width:520px;height:390px;margin:-195px 0 0 -260px;background-size:cover;background-position:center}
.st-calm.m-web .cimg{width:600px;height:450px;margin:-225px 0 0 -300px}
.st-calm .cframe{position:absolute;left:50%;top:50%;width:280px;height:350px;margin:-175px 0 0 -140px;border:3px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(9,13,24,.62);background:linear-gradient(#fff6,#fff6) 33.3% 0/2px 100% no-repeat,linear-gradient(#fff6,#fff6) 66.6% 0/2px 100% no-repeat,linear-gradient(#fff6,#fff6) 0 33.3%/100% 2px no-repeat,linear-gradient(#fff6,#fff6) 0 66.6%/100% 2px no-repeat}
.st-calm.m-web .cframe{width:330px;height:412px;margin:-206px 0 0 -165px}
.st-calm .ctag{position:absolute;left:12px;bottom:12px;background:#fffffff0;border-radius:12px;padding:8px 12px;font-size:16px;font-weight:700}
.st-calm .hint{display:flex;align-items:center;gap:10px;font-size:18px;color:var(--muted);font-weight:700}
.st-calm .pph{height:130px;border-radius:18px;background-size:cover;background-position:center}
.st-calm.m-web .pph{height:250px}
.st-calm .map{position:relative;height:130px;border-radius:18px;overflow:hidden;background:#E4ECF5;border:2px solid var(--line)}
.st-calm.m-web .map{height:230px}
.st-calm .map svg{position:absolute;inset:0;width:100%;height:100%}
.st-calm .mpin{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-44px 0 0 -22px;color:#D93B2B}
.st-calm .mpin svg{position:static;width:44px;height:44px}
.st-calm .place b{font-size:26px;display:block;line-height:1.1}
.st-calm .place span{font-size:18px;color:var(--muted)}
.st-calm .warn{background:var(--amb);border:2px solid var(--amb-b);border-radius:16px;padding:12px 14px;font-size:18px;display:flex;gap:10px;align-items:flex-start}
.st-calm .okbox{background:var(--grn-l);border:2px solid var(--grn);color:#0F5A39;border-radius:16px;padding:12px 14px;font-size:19px;font-weight:700;display:flex;gap:10px;align-items:center}
.st-calm .vid{position:relative;height:220px;border-radius:18px;background-size:cover;background-position:center;overflow:hidden}
.st-calm.m-web .vid{height:380px}
.st-calm .vbadge{position:absolute;left:12px;top:12px;background:#10213Fcc;color:#fff;border-radius:10px;padding:6px 10px;font-size:15px;font-weight:700}
.st-calm .strip{position:relative;display:flex;height:66px;border-radius:12px;margin:6px 0}
.st-calm .strip i{flex:1;background-size:cover;background-position:center}
.st-calm .strip i:first-child{border-radius:12px 0 0 12px}.st-calm .strip i:last-child{border-radius:0 12px 12px 0}
.st-calm .selw{position:absolute;top:-6px;bottom:-6px;border:5px solid var(--yel);border-radius:12px;box-shadow:0 0 0 999px rgba(243,245,249,.55)}
.st-calm .strip-clip{position:relative;overflow:hidden;border-radius:12px;padding:6px 0;margin:-6px 0}
.st-calm .hd{position:absolute;top:50%;width:26px;height:58px;margin-top:-29px;border-radius:8px;background:var(--yel);box-shadow:0 2px 6px rgba(0,0,0,.25)}
.st-calm .hd::after{content:"";position:absolute;left:11px;top:16px;width:4px;height:26px;border-radius:2px;background:var(--ink);opacity:.6}
.st-calm .secs{font-size:22px;font-weight:700}
.st-calm .secs span{font-size:18px;color:var(--muted);font-weight:400}
.st-calm .list{display:flex;flex-direction:column;gap:10px}
.st-calm .li{display:flex;align-items:center;gap:14px;background:var(--card);border:2px solid var(--line);border-radius:16px;padding:10px 12px}
.st-calm .li i{width:52px;height:52px;border-radius:10px;background-size:cover;background-position:center;flex:none}
.st-calm .li b{font-size:19px;display:block;line-height:1.15}.st-calm .li span{font-size:16px;color:var(--muted)}
.st-calm .li em{margin-left:auto;width:34px;height:34px;border-radius:50%;background:var(--grn);color:#fff;display:grid;place-items:center;flex:none}
.st-calm .ad{display:flex;gap:12px;align-items:center;border:2px dashed var(--line);border-radius:16px;padding:10px 12px;background:#fff8}
.st-calm .ad i{width:46px;height:46px;border-radius:10px;background:#E6EAF1;flex:none}
.st-calm .ad small{font-size:12px;font-weight:700;letter-spacing:.06em;border:1.5px solid var(--muted);color:var(--muted);border-radius:6px;padding:1px 6px;margin-right:6px}
.st-calm .ad span{font-size:16px;color:var(--muted)}
.st-calm .splash{align-items:center;justify-content:center;text-align:center;gap:18px}
.st-calm .logo{width:112px;height:112px;border-radius:30px;background:var(--ink);display:grid;place-items:center;box-shadow:0 18px 40px rgba(16,33,63,.3)}
.st-calm .splash h1{font-size:34px;margin:0}
.st-calm .splash p{font-size:20px;color:var(--grn);font-weight:700;margin:0;display:flex;gap:8px;align-items:center}
.st-calm .side{position:absolute;left:0;top:0;bottom:0;width:300px;background:var(--card);border-right:2px solid var(--line);padding:26px 18px;display:flex;flex-direction:column;gap:6px;z-index:5}
.st-calm .brandrow{display:flex;align-items:center;gap:12px;font-size:21px;font-weight:700;margin-bottom:18px}
.st-calm .brandrow .logo{width:46px;height:46px;border-radius:13px;box-shadow:none}
.st-calm .nav{display:flex;align-items:center;gap:12px;font-size:19px;font-weight:700;padding:12px 14px;border-radius:14px;color:var(--ink)}
.st-calm .nav.on{background:var(--yel)}
.st-calm .side .safe{margin-top:auto;font-size:15px}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web;
    const logo = (s = 64) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><rect x="8" y="30" width="48" height="16" rx="8" fill="#FFC531"/><path d="M15 30L47 15l4 5-28 10z" fill="#fff"/><circle cx="17" cy="38" r="3.2" fill="#10213F"/></svg>`;
    const bar = (step) => `<div class="bar"><div class="backb">${I('back', 24, 2.6)}Back</div><div class="step">Step ${step} of 3<span class="dots">${[1, 2, 3].map(i => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</span></div></div>`;
    const tiles = [
      ['shrink', 'Make photo smaller', 'c1'], ['crop', 'Crop for social media', 'c2'], ['pin', 'Where was it taken?', 'c3'],
      ['film', 'Video to GIF', 'c4'], ['convert', 'Change format', 'c5'], ['grid', 'All tools', 'c6'],
    ];

    if (web) {
      A.el('div', 'side', S, `<div class="brandrow"><div class="logo">${logo(34)}</div>Image Swiss Knife</div>
        ${tiles.map((x, i) => `<div class="nav n${i + 1}">${I(x[0], 26, 2.2)}${x[1]}</div>`).join('')}
        <div class="safe">${I('lock', 20, 2.4)}Your photos never leave this computer.</div>`);
    }

    const pg = (cls, inner) => A.el('div', 'pg ' + cls, S, inner);

    const splash = pg('splash', `<div class="logo">${logo(72)}</div><h1>Image Swiss Knife</h1><p>${I('lock', 22, 2.4)}Your photos stay on this ${web ? 'computer' : 'phone'}</p>`);

    const home = pg('home', `<p class="hello">Hello!</p><h2 class="q">What do you want to do?</h2>
      <div class="tiles">${tiles.map((x, i) => `<div class="tile t${i + 1}"><div class="ic ${x[2]}">${I(x[0], 30, 2.4)}</div><b>${x[1]}</b></div>`).join('')}</div>
      ${web ? '' : `<div class="foot"><div class="safe">${I('lock', 22, 2.4)}Your photos never leave this phone.</div></div>`}`);

    const thumbs = [A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    const pick = pg('pick', `${bar(1)}<h2 class="q">Choose a photo</h2><p class="sub">${web ? 'Drop it in the box, or choose it from your computer.' : 'Tap one photo.'}</p>
      ${web ? `<div class="drop"><div class="ic c1">${I('upload', 38, 2.4)}</div><b>Drop your photo here</b><span>or click to choose a file</span>
          <div class="dropped" style="background-image:${thumbs[0]}"><span>${D.portrait.file} · ${D.portrait.size}</span></div>
          <div class="fcard"><i style="background-image:${thumbs[0]}"></i><span>${D.portrait.file}</span></div></div>`
        : `<p class="gal-l">Recent photos</p><div class="gal">${thumbs.map((b, i) => `<div class="th p${i}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 22, 3)}</div>` : ''}</div>`).join('')}</div>`}
      <div class="foot"><div class="big next off">Next ${I('next', 26, 2.6)}</div></div>`);

    const shrinkQ = pg('shrinkq', `${bar(2)}<h2 class="q">Where will you use it?</h2>
      <div class="pchip"><i style="background-image:${thumbs[0]}"></i><span><b>${D.portrait.file}</b><br>${D.portrait.size} · ${D.portrait.dims}</span></div>
      <div class="opts">${D.shrink.options.map((o, i) => `<div class="opt o${i}"><div><b>${o.label}</b><span>${o.hint}</span></div><div class="radio"></div></div>`).join('')}</div>`);

    const work = pg('workp', `${bar(3)}<div class="work"><div class="wph" style="background-image:${thumbs[0]}"></div>
      <div class="bign">4.8 MB</div><div class="meter"><i></i></div><div class="wtxt">Keeping it sharp…</div></div>`);

    const done1 = pg('done1', `${bar(3)}<div class="row2"><div class="dph" style="background-image:${thumbs[0]}"></div><div class="col">
      <div class="donehead"><div class="okc">${I('check', 54, 3.4)}</div><div><h2 class="q">Done! ${D.shrink.size}</h2><p class="sub" style="margin:4px 0 0">Ready for your exam form</p></div></div>
      <div class="cmp"><span>Before</span><div class="b bb"></div><b>${D.portrait.size}</b><span>After</span><div class="b g ba"></div><b>${D.shrink.size}</b></div>
      <p class="sub" style="margin:0">${D.shrink.format} · ${D.shrink.px} · Looks the same</p></div></div>
      <div class="foot"><div class="big save">${I('save', 26, 2.6)}Save photo</div><div class="big sec">${I('share', 24, 2.4)}Share</div></div>
      <div class="toast t1">${I('check', 24, 3)}Saved to your ${web ? 'Downloads' : 'Gallery'}</div>`);

    const presets = D.crop.presets.filter((p, i) => [0, 1, 3, 4, 6].includes(i));
    const ratioBox = p => { const m = 34, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(9, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const cropQ = pg('cropq', `${bar(2)}<h2 class="q">Where will you post it?</h2>
      <div class="pchip"><i style="background-image:${thumbs[1]}"></i><span><b>IMG_1650.JPG</b><br>Mountain photo · 4000 × 3000</span></div>
      <div class="opts crops">${presets.map((p, i) => `<div class="opt c${i}">${ratioBox(p)}<div><b>${p.label}</b><span>${p.px}</span></div><div class="radio"></div></div>`).join('')}</div>`);

    const cropE = pg('crope', `${bar(3)}<h2 class="q">Move the photo to fit</h2>
      <div class="row2"><div class="cropbox"><div class="cimg" style="background-image:${thumbs[1]}"></div><div class="cframe"></div><div class="ctag">${D.crop.preset} · ${D.crop.px}</div></div>
      <div class="col"><div class="hint">${I('crop', 26, 2.4)}Drag the photo with one finger.</div>${web ? `<p class="sub" style="margin:0">The white box is exactly what Instagram will show. The dark part will be cut off.</p><div class="foot wfoot"></div>` : ''}</div></div>
      <div class="foot"><div class="big cdone">${I('check', 26, 3)}Done</div></div>
      <div class="toast t2">${I('check', 24, 3)}Saved. Ready for Instagram.</div>`);

    if (web) { const f = cropE.querySelector('.wfoot'); f.appendChild(cropE.querySelector('.foot .big')); cropE.querySelector('.foot:not(.wfoot)').remove(); }
    const mapSVG = `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="#E4ECF5"/><path d="M-10 140C80 120 120 160 200 130S330 70 410 90" stroke="#9CC3EA" stroke-width="16" fill="none"/><path d="M0 60h400M60 0v200M150 0l40 200M260 0v200M0 170h400M320 0l-60 200" stroke="#fff" stroke-width="8"/><path d="M0 100h400" stroke="#FFD98A" stroke-width="10"/><rect x="70" y="20" width="60" height="30" rx="4" fill="#D3E6D3"/><rect x="280" y="120" width="70" height="40" rx="4" fill="#D3E6D3"/></svg>`;
    const priv = pg('priv', `${bar(2)}<h2 class="q">Where was this taken?</h2>
      <div class="row2"><div class="col"><div class="pph" style="background-image:${A.photo('city')}"></div><div class="map">${mapSVG}<div class="mpin">${I('pin', 44, 2.4)}</div></div></div>
      <div class="col"><div class="place"><b>${D.place.city}, ${D.place.country}</b><span>${D.place.region} · ${D.place.when}</span></div>
      <div class="warn wv">${I('eye', 26, 2.2)}<span>If you share this photo, people can see this place.</span></div>
      <div class="okbox okv">${I('shield', 28, 2.4)}<span>Place removed. Safe to share.</span></div>
      ${web ? '<div class="foot wfoot"></div>' : ''}</div></div>
      <div class="foot"><div class="big rm">${I('trash', 24, 2.4)}<span class="rml">Remove the place</span></div></div>`);
    if (web) { const f = priv.querySelector('.wfoot'); f.appendChild(priv.querySelector('.foot .big')); priv.querySelector('.foot:not(.wfoot)').remove(); }

    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(i * 1.5 | 0)}"></i>`).join('');
    const gif = pg('gifp', `${bar(2)}<h2 class="q">Make a GIF</h2>
      <div class="row2"><div class="col"><div class="vid"><span class="vbadge">${D.video.file}</span></div>
      <div class="strip-clip"><div class="strip">${strip}<div class="selw"><div class="hd hL" style="left:-16px"></div><div class="hd hR" style="right:-16px"></div></div></div></div></div>
      <div class="col"><div class="secs"><span class="sl">Pick the part you like</span><br><span class="sv">From 0:03 to 0:08</span></div><div class="meter gm"><i></i></div><div class="wtxt gt"></div>${web ? '<div class="foot wfoot"></div>' : ''}</div></div>
      <div class="foot"><div class="big mk">${I('film', 26, 2.4)}<span class="mkl">Make GIF</span></div></div>`);
    if (web) { const f = gif.querySelector('.wfoot'); f.appendChild(gif.querySelector('.foot .big')); gif.querySelector('.foot:not(.wfoot)').remove(); }

    const items = [[thumbs[0], 'Exam photo', `${D.shrink.size} · JPG`], [thumbs[1], 'Instagram post', D.crop.px], [A.photo('city'), 'City photo', 'Place removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const done = pg('done', `<h2 class="q" style="margin-top:6px">All done!</h2><p class="sub">${web ? D.promiseWeb : D.promise}</p>
      <div class="row2"><div class="list">${items.map((x, i) => `<div class="li l${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><span>${x[2]}</span></div><em>${I('check', 20, 3.2)}</em></div>`).join('')}</div>
      <div class="col"><div class="foot" style="margin-top:0"><div class="big saveall">${I('save', 26, 2.6)}Save all 4</div><div class="big sec">${I('share', 24, 2.4)}Share</div></div>
      <div class="ad"><i></i><div><small>Ad</small><span>Sponsored message shows here, only after the work is done.</span></div></div></div></div>
      <div class="toast t3">${I('check', 24, 3)}4 files saved</div>`);

    const q = s => S.querySelector(s);
    const show = (p, t, ranges) => {
      let o = 0, x = 0;
      for (const [a, b] of ranges) {
        if (t < a || t > b) continue;
        const e = A.ease.out(A.seg(t, a, a + 0.45)), l = A.ease.in(A.seg(t, b - 0.4, b));
        o = Math.min(e, 1 - l); x = (1 - e) * 56 - l * 56;
      }
      A.set(p, { x, o });
    };

    // Web: file dragged in from the right edge of the window.
    const FX = 470, FY = -40, dropT0 = 5.7, dropT1 = 6.8;
    const keys = [
      { t: 4.9, at: '.home .t1', tap: true },
      ...(web
        ? [{ t: dropT0, at: () => { const c = A.center('.pick .drop'); return { x: c.x + FX, y: c.y + FY }; }, hold: 0.2 },
           { t: dropT1, at: '.pick .drop', drag: true, move: 0.9 }]
        : [{ t: 6.6, at: '.pick .p0', tap: true }]),
      { t: 8.2, at: '.pick .next', tap: true },
      { t: 10.0, at: '.shrinkq .o1', tap: true },
      { t: 15.6, at: '.done1 .save', tap: true },
      { t: 17.8, at: '.home .t2', tap: true },
      { t: 18.9, at: '.cropq .c0', tap: true },
      { t: 20.1, at: '.crope .cimg', hold: 0.15 },
      { t: 21.4, at: '.crope .cimg', drag: true, move: 1.0 },
      { t: 22.6, at: '.crope .cdone', tap: true },
      { t: 24.8, at: '.home .t3', tap: true },
      { t: 27.6, at: '.priv .rm', tap: true },
      { t: 30.6, at: '.home .t4', tap: true },
      { t: 31.4, at: '.gifp .hR', hold: 0.1 },
      { t: 32.4, at: '.gifp .hR', drag: true, move: 0.9 },
      { t: 33.0, at: '.gifp .mk', tap: true },
      { t: 35.2, at: '.gifp .mk', tap: true },
      { t: 38.2, at: '.done .saveall', tap: true },
    ];
    A.pointer(keys);

    const navs = web ? [...S.querySelectorAll('.nav')] : [];
    const el = {
      next: q('.pick .next'), o1: q('.shrinkq .o1'), bign: q('.work .bign'), meter: q('.work .meter i'), wtxt: q('.work .wtxt'), wph: q('.work .wph'),
      okc: q('.done1 .okc path'), bb: q('.done1 .bb'), ba: q('.done1 .ba'), save: q('.done1 .save'), t1: q('.done1 .toast'),
      c0: q('.cropq .c0'), cimg: q('.crope .cimg'), cdone: q('.crope .cdone'), t2: q('.crope .toast'),
      pin: q('.priv .mpin'), map: q('.priv .map'), wv: q('.priv .wv'), okv: q('.priv .okv'), rm: q('.priv .rm'), rml: q('.priv .rml'),
      vid: q('.gifp .vid'), selw: q('.gifp .selw'), sv: q('.gifp .sv'), sl: q('.gifp .sl'), gm: q('.gifp .gm'), gmi: q('.gifp .gm i'), gt: q('.gifp .gt'), mk: q('.gifp .mk'), mkl: q('.gifp .mkl'), vb: q('.gifp .vbadge'),
      lis: [...S.querySelectorAll('.done .li')], t3: q('.done .toast'), saveall: q('.done .saveall'),
      th0: q('.pick .p0'), ck: q('.pick .ck'), fcard: q('.pick .fcard'), drop: q('.pick .drop'), dropped: q('.pick .dropped'),
      tiles: [...S.querySelectorAll('.home .tile')],
    };

    return {
      update(t) {
        const { seg, ease, set, cls, txt } = A;
        show(splash, t, [[-1, 2.6]]);
        if (t < 2.6) {
          const lg = splash.querySelector('.logo');
          set(lg, { s: 0.6 + 0.4 * ease.outBack(seg(t, 0.1, 0.9)), o: seg(t, 0.05, 0.4) });
          set(splash.querySelector('h1'), { y: 16 * (1 - ease.out(seg(t, 0.5, 1.1))), o: seg(t, 0.5, 1.0) });
          set(splash.querySelector('p'), { y: 12 * (1 - ease.out(seg(t, 1.0, 1.6))), o: seg(t, 1.0, 1.5) });
        }
        show(home, t, [[2.3, 5.4], [16.9, 18.3], [23.9, 25.3], [29.9, 31.1]]);
        // tiles arrive one by one the first time only
        el.tiles.forEach((tl, i) => { const p = ease.out(seg(t, 2.5 + i * 0.08, 3.0 + i * 0.08)); if (t < 4) set(tl, { y: (1 - p) * 24, o: p }); else set(tl, { y: 0, o: 1 }); });
        [4.9, 17.8, 24.8, 30.6].forEach((tt, i) => A.press(el.tiles[i], t, tt));

        show(pick, t, [[5.0, 9.0]]);
        if (web) {
          const st = Math.max(dropT0 + 0.2 + 0.12, dropT1 - 0.9);
          const qd = ease.inOut(seg(t, st, dropT1));
          const land = seg(t, dropT1, dropT1 + 0.3);
          set(el.fcard, { x: (1 - qd) * FX, y: (1 - qd) * FY, r: (1 - qd) * 6, o: (t < 5.3 ? 0 : 1) * (1 - land) * seg(t, 5.3, 5.6) });
          cls(el.drop, 'hot', t > st + 0.4 && t < dropT1 + 0.2);
          set(el.dropped, { s: 0.94 + 0.06 * ease.outBack(seg(t, dropT1, dropT1 + 0.45)), o: seg(t, dropT1, dropT1 + 0.25) });
          cls(el.next, 'off', t < dropT1 + 0.3);
        } else {
          const sel = t >= 6.6;
          cls(el.th0, 'sel', sel);
          set(el.ck, { s: ease.outBack(seg(t, 6.6, 6.95)), o: sel ? 1 : 0 });
          cls(el.next, 'off', !sel);
        }
        A.press(el.next, t, 8.2);

        show(shrinkQ, t, [[8.6, 10.9]]);
        cls(el.o1, 'on', t >= 10.0);
        A.press(el.o1, t, 10.0);

        show(work, t, [[10.6, 13.6]]);
        const wq = seg(t, 10.9, 13.0);
        txt(el.bign, A.fmtBytes(A.count(t, 10.9, 13.0, D.portrait.bytes, D.shrink.bytes, ease.inOut)));
        el.meter.style.width = (wq * 100).toFixed(1) + '%';
        txt(el.wtxt, t < 11.6 ? 'Keeping it sharp…' : t < 12.5 ? 'Trying smaller sizes…' : 'Checking: under 200 KB');
        set(el.wph, { s: 1 - 0.12 * ease.inOut(wq) });

        show(done1, t, [[13.2, 17.3]]);
        el.okc.style.strokeDashoffset = (24 * (1 - ease.out(seg(t, 13.6, 14.2)))).toFixed(2);
        el.bb.style.width = '100%';
        el.ba.style.width = (100 - 96 * ease.inOut(seg(t, 14.0, 14.9))).toFixed(1) + '%';
        A.press(el.save, t, 15.6);
        const t1 = A.win(t, 15.75, 16.9, 0.2, 0.25);
        set(el.t1, { y: (1 - ease.out(Math.min(1, t1))) * 20, o: t1 });

        show(cropQ, t, [[17.8, 19.9]]);
        cls(el.c0, 'on', t >= 18.9); A.press(el.c0, t, 18.9);
        show(cropE, t, [[19.4, 24.2]]);
        const cq = ease.inOut(seg(t, 20.37, 21.4));
        set(el.cimg, { x: -70 * cq });
        A.press(el.cdone, t, 22.6);
        const t2 = A.win(t, 22.75, 24.0, 0.2, 0.25);
        set(el.t2, { y: (1 - ease.out(Math.min(1, t2))) * 20, o: t2 });

        show(priv, t, [[24.9, 30.2]]);
        const pinDrop = ease.outBack(seg(t, 25.6, 26.1));
        const removed = seg(t, 27.8, 28.3);
        set(el.pin, { y: -40 * (1 - pinDrop), o: seg(t, 25.6, 25.8) * (1 - removed) });
        el.map.style.filter = `grayscale(${removed}) opacity(${1 - 0.5 * removed})`;
        set(el.wv, { o: 1 - removed });
        el.wv.style.display = removed >= 1 ? 'none' : '';
        el.okv.style.display = removed > 0 ? '' : 'none';
        set(el.okv, { s: 0.9 + 0.1 * ease.outBack(removed), o: removed });
        A.press(el.rm, t, 27.6);
        txt(el.rml, t < 27.8 ? 'Remove the place' : 'Save safe copy');

        show(gif, t, [[30.7, 36.2]]);
        const made = t >= 34.3;
        const fi = Math.floor(t * 12) % 12;
        el.vid.style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 12) % 5) : fi);
        // selection window: 3/12 .. 8/12 of the strip, right handle dragged to 7/12
        const hq = ease.inOut(seg(t, 31.62, 32.4));
        const L = 3 / 12 * 100, R = (8 - hq) / 12 * 100;
        el.selw.style.left = L + '%'; el.selw.style.width = (R - L) + '%';
        txt(el.sl, made ? 'Your GIF' : 'Pick the part you like');
        txt(el.sv, made ? `${D.video.size} · ${D.video.clip} · plays on loop` : hq > 0.5 ? `From ${D.video.from} to ${D.video.to} · ${D.video.clip}` : 'From 0:04 to 0:08 · 4.0 s');
        const mp = seg(t, 33.15, 34.2);
        set(el.gm, { o: t > 33.1 && t < 34.4 ? 1 : 0 });
        el.gm.style.display = t > 33.1 && t < 34.4 ? '' : 'none';
        el.gmi.style.width = (mp * 100).toFixed(1) + '%';
        txt(el.gt, t > 33.1 && t < 34.4 ? `Making GIF… ${Math.round(mp * D.video.frames)} of ${D.video.frames} pictures` : '');
        txt(el.mkl, made ? 'Save GIF' : 'Make GIF');
        txt(el.vb, made ? `GIF · ${D.video.size}` : D.video.file);
        cls(el.mk, 'off', t > 33.1 && t < 34.3);
        A.press(el.mk, t, 33.0); A.press(el.mk, t, 35.2);

        show(done, t, [[35.9, 40.5]]);
        el.lis.forEach((li, i) => { const p = ease.outBack(seg(t, 36.3 + i * 0.25, 36.75 + i * 0.25)); set(li, { x: (1 - p) * 30, o: seg(t, 36.3 + i * 0.25, 36.6 + i * 0.25) }); });
        A.press(el.saveall, t, 38.2);
        const t3 = A.win(t, 38.35, 40.5, 0.2, 0.01);
        set(el.t3, { y: (1 - ease.out(Math.min(1, t3))) * 20, o: t3 });

        if (web) {
          const which = t < 9 ? 0 : t < 17.3 ? 0 : t < 24 ? 1 : t < 30 ? 2 : t < 36 ? 3 : -1;
          const onHome = (t > 2.5 && t < 4.9) || (t > 17.1 && t < 17.8) || (t > 24.1 && t < 24.8) || (t > 30.1 && t < 30.6);
          navs.forEach((n, i) => cls(n, 'on', !onHome && i === which && t > 4.9));
          set(S.querySelector('.side'), { o: A.seg(t, 2.2, 2.7) });
        }
      },
    };
  },
});

/* Style 11 — Lumi Deep. A bioluminescent jellyfish spirit, a deep-ocean night, and a pearl for every job. */
ISK.register({
  id: 'lumi',
  order: 11,
  round: 2,
  name: 'Lumi Deep',
  tagline: 'Dive with Lumi, a glowing jellyfish, and earn a pearl for every job.',
  concept: 'Lumi is a bioluminescent jellyfish spirit who lives in a deep ocean at night. She floats beside your photo, glows faster as the work nears the end, and drops a pearl into your necklace when a job is done. Depth ranks (Shallows, Reef, Abyss), a chain of lights for the streak and a rare violet pearl for privacy make small tasks feel like a calm collection game.',
  wins: [
    'A premium, quiet look with a real character. Lumi reacts to every touch and every job, so the app feels alive without being loud.',
    'Waiting is the best moment: plankton streams flow into the bar, the photo floats in a bubble and Lumi glows faster as the size drops.',
    'Pearls, depth ranks and a streak chain reward people without blocking the flow. A tap on Lumi opens every tool in one gesture.',
  ],
  risks: [
    'Dark glow needs care for contrast and for older phones. A lite mode should drop the caustics and plankton.',
    'The jellyfish costs time to animate and tune. Tentacle physics and mood blending must be checked on real devices.',
  ],
  scores: { simple: 3, fun: 4, wow: 5, pro: 5, game: 4, effort: 4 },
  palette: ['#040B1A', '#0A1F3A', '#4AE3F0', '#7CF5C8', '#8A7BFF', '#FFD27A', '#E6F7FF'],
  type: 'Outfit for all UI and numbers: clean, geometric and clear at 12 to 16 px. Fraunces for a few large headings, for a touch of warmth.',
  motion: 'Water-drop iris ripples and caustic wipes between steps. Plankton streams flow into the progress bar while Lumi swirls faster as the file shrinks.',
  notes: {
    intro: 'Lumi wakes in the deep, yawns, pops a bubble and winks. A soft pulse on her says "tap me".',
    pick: 'Phone: tap a photo and Lumi gasps, then smiles. Web: drag the file in and it is absorbed into a bubble.',
    shrink: 'One tap on "For exam or job form" lifts the photo into a bubble. Plankton streams into the bar, Lumi swirls faster, and 4.8 MB counts to 196 KB.',
    crop: 'Tap Lumi, her tentacles part and five glowing bubbles rise. Tap Crop, pick 4:5, slide the photo, tap Done.',
    privacy: 'Lumi offers "This photo knows where it was taken". Pune, India drops onto a night map, one tap clears it, and a rare violet pearl appears.',
    gif: 'Lumi offers the GIF. Trim 0:04 to 0:07, tap Make GIF and 36 frames stream into a bar. A gold pearl follows.',
    done: 'Four pearls on a necklace, XP, a rank-up from Shallows to Reef, a lit streak chain, a taps receipt and one Ad slot.',
  },
  statusBar: 'light',
  extras: [
    ['Character', 'Lumi, a glass jellyfish with spring tentacles and glowing organs. Eight moods: calm, happy, curious, surprised, working, proud, guard and sleepy. Eyes follow the pointer. Tap her to open a five-bubble arc.'],
    ['Game system', 'A pearl per job (a violet rare pearl for privacy), depth ranks Shallows, Reef and Abyss with XP, a chain-of-lights streak and a daily dive goal of 4 pearls.'],
    ['Progress bars', 'Four different bars chosen by Shuffle bars, recoloured cyan, mint, violet and gold. Plankton streams converge on each bar head.'],
    ['Screen changes', 'Water-drop iris ripple, caustic-shimmer wipe and zoom for in-tool steps. Every tap sends a ripple.'],
    ['Finish effect', 'Bubbles burst upward, petals of light spark, a pearl drops into the necklace and rings out.'],
    ['Taps to finish', 'Shrink 3 · Crop 4 · Place 2 · GIF 2 · plus Save all (the receipt counts them live on the final screen)'],
  ],
  css: `
.st-lumi{--cy:#4AE3F0;--mi:#7CF5C8;--vi:#8A7BFF;--go:#FFD27A;--tx:#E6F7FF;--mu:#7FA3BD;background:#040B1A;color:var(--tx);font-family:Outfit,system-ui,sans-serif;font-size:14px;line-height:1.3}
.st-lumi b{font-weight:600}.st-lumi em{font-style:normal}
.st-lumi .pg{position:absolute;inset:0;z-index:1;overflow:hidden;background:linear-gradient(180deg,#040B1A 0%,#061427 48%,#0A1F3A 100%)}
.st-lumi .pg>*,.st-lumi .pgi>*{position:absolute}
.st-lumi .fxc{position:absolute;left:0;top:0;z-index:2;pointer-events:none;mix-blend-mode:screen}
.st-lumi .t1{margin:0;font-family:Fraunces,Georgia,serif;font-weight:500;letter-spacing:-.015em;line-height:1.08}
.st-lumi .t2{color:var(--mu);font-size:14px;line-height:1.35}
.st-lumi.m-web .t2{font-size:16px}
.st-lumi .lk{display:flex;align-items:center;gap:8px}
.st-lumi .gl{border-radius:18px;background:linear-gradient(160deg,rgba(60,130,180,.26),rgba(10,34,66,.64));box-shadow:inset 0 0 0 1px rgba(124,245,200,.2),inset 0 1px 0 rgba(255,255,255,.12),0 10px 26px rgba(0,0,0,.28)}
.st-lumi .pov,.st-lumi .gpov,.st-lumi .mini{background:linear-gradient(160deg,rgba(14,50,92,.97),rgba(7,26,52,.98))}
.st-lumi .btn{display:flex;align-items:center;justify-content:center;gap:9px;height:50px;border-radius:25px;font-weight:600;font-size:16px;color:#04202F;background:linear-gradient(100deg,#4AE3F0,#7CF5C8);box-shadow:0 0 24px rgba(74,227,240,.38),inset 0 1px 0 rgba(255,255,255,.55);white-space:nowrap}
.st-lumi .btn.g{color:var(--tx);background:linear-gradient(160deg,rgba(60,130,180,.3),rgba(10,34,66,.62));box-shadow:inset 0 0 0 1px rgba(124,245,200,.3)}
.st-lumi .btn.go{background:linear-gradient(100deg,#FFD27A,#FFE9B0);box-shadow:0 0 24px rgba(255,210,122,.4),inset 0 1px 0 rgba(255,255,255,.6)}
.st-lumi .is-pressed{transform:scale(.95) !important;filter:brightness(1.25)}
.st-lumi kbd{font:600 11px Outfit,sans-serif;padding:2px 6px;border-radius:6px;background:rgba(230,247,255,.12);box-shadow:inset 0 0 0 1px rgba(230,247,255,.22);color:var(--tx)}
.st-lumi .btn kbd{background:rgba(4,32,47,.14);box-shadow:none;color:#04202F}
.st-lumi .btn.g kbd{background:rgba(230,247,255,.12);color:var(--tx)}
.st-lumi .ico{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;flex:none;color:var(--cy);background:radial-gradient(circle at 35% 28%,rgba(255,255,255,.3),rgba(74,227,240,.14) 60%,rgba(74,227,240,.05));box-shadow:inset 0 0 0 1px rgba(74,227,240,.45)}
.st-lumi .tl{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;font-size:12px;font-weight:500}
.st-lumi .tl .ico{width:36px;height:36px}
.st-lumi .thm{border-radius:16px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(124,245,200,.25)}
.st-lumi .thm.sel{box-shadow:inset 0 0 0 2px var(--mi),0 0 22px rgba(124,245,200,.5)}
.st-lumi .ck{position:absolute;right:7px;top:7px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;color:#04202F;background:radial-gradient(circle at 35% 30%,#fff,var(--mi) 60%);box-shadow:0 0 14px rgba(124,245,200,.8)}
.st-lumi .opt{display:flex;align-items:center;gap:12px;padding:0 14px;border-radius:18px}
.st-lumi .opt b{display:block;font-size:16px;line-height:1.15}.st-lumi .opt span{font-size:13px;color:var(--mu)}
.st-lumi .opt .rd{margin-left:auto;width:22px;height:22px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(127,163,189,.5);flex:none}
.st-lumi .opt kbd{margin-left:auto;margin-right:10px}.st-lumi .opt kbd+.rd{margin-left:0}
.st-lumi .opt.on{box-shadow:inset 0 0 0 1.5px var(--cy),0 0 26px rgba(74,227,240,.3)}
.st-lumi .opt.on .rd{background:radial-gradient(circle,#04202F 0 26%,var(--cy) 32%);box-shadow:0 0 12px rgba(74,227,240,.7)}
.st-lumi .ratio{width:36px;height:36px;display:grid;place-items:center;flex:none}
.st-lumi .ratio u{display:block;border-radius:4px;background:rgba(138,123,255,.25);box-shadow:inset 0 0 0 2px var(--vi)}
.st-lumi .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:99px;font-size:12px;font-weight:600;color:var(--tx);background:rgba(74,227,240,.1);box-shadow:inset 0 0 0 1px rgba(74,227,240,.4);white-space:nowrap}
.st-lumi .chip.go{color:var(--go);background:rgba(255,210,122,.1);box-shadow:inset 0 0 0 1px rgba(255,210,122,.5)}
.st-lumi .chip.mi{color:var(--mi);background:rgba(124,245,200,.1);box-shadow:inset 0 0 0 1px rgba(124,245,200,.45)}
.st-lumi .chip.vi{color:#B9B0FF;background:rgba(138,123,255,.14);box-shadow:inset 0 0 0 1px rgba(138,123,255,.55)}
.st-lumi .pbub{border-radius:50%;background:radial-gradient(circle,rgba(74,227,240,.03) 56%,rgba(74,227,240,.3) 82%,rgba(230,247,255,.55) 100%);box-shadow:inset 0 0 0 1.5px rgba(230,247,255,.4),inset -10px -14px 26px rgba(138,123,255,.28),inset 8px 10px 22px rgba(124,245,200,.25),0 0 34px rgba(74,227,240,.3)}
.st-lumi .pbub .ph{position:absolute;inset:8%;border-radius:50%;background-size:cover;background-position:center 28%}
.st-lumi .pbub .s1{position:absolute;left:14%;top:7%;width:36%;height:16%;border-radius:50%;background:linear-gradient(180deg,rgba(255,255,255,.75),rgba(255,255,255,.05));transform:rotate(-30deg)}
.st-lumi .pbub .s2{position:absolute;right:12%;bottom:11%;width:11%;height:11%;border-radius:50%;background:rgba(255,255,255,.6)}
.st-lumi .pbub{position:absolute}
.st-lumi .lumi{position:absolute;left:0;top:0;width:260px;height:400px;z-index:3;transform-origin:130px 130px;pointer-events:none}
.st-lumi .lumi svg{position:absolute;left:0;top:0;overflow:visible}
.st-lumi .lumi .hit{position:absolute;left:78px;top:72px;width:104px;height:96px;border-radius:50%}
.st-lumi .say{position:absolute;left:0;top:0;z-index:4;padding:10px 14px;border-radius:18px;font-size:14px;font-weight:500;line-height:1.28;background:linear-gradient(160deg,rgba(24,70,120,.94),rgba(10,34,66,.95));box-shadow:inset 0 0 0 1px rgba(124,245,200,.4),0 0 26px rgba(74,227,240,.2),0 8px 22px rgba(0,0,0,.35)}
.st-lumi .say .tail{position:absolute;width:14px;height:14px;background:#0F3560;transform:rotate(45deg);border-radius:3px}
.st-lumi .say .tx{position:relative;display:block}
.st-lumi .say u{text-decoration:none;display:inline-flex;margin-top:8px;padding:6px 14px;border-radius:99px;font-weight:600;font-size:13px;color:#04202F;background:linear-gradient(100deg,#4AE3F0,#7CF5C8);box-shadow:0 0 16px rgba(74,227,240,.45);position:relative}
.st-lumi .qb{position:absolute;left:0;top:0;z-index:4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:50%;font-size:11px;font-weight:600;color:var(--tx);background:radial-gradient(circle at 34% 26%,rgba(255,255,255,.42),rgba(40,120,170,.34) 46%,rgba(8,30,60,.72) 100%);box-shadow:inset 0 0 0 1.5px var(--qc,#4AE3F0),0 0 22px var(--qg,rgba(74,227,240,.45))}
.st-lumi .qb .isk-ic{color:var(--qc,#4AE3F0)}
.st-lumi .qb kbd{position:absolute;right:-2px;top:-4px;font-size:10px;padding:1px 5px}
.st-lumi .pearl{position:absolute;left:0;top:0;z-index:6;border-radius:50%;pointer-events:none}
.st-lumi .rng{position:absolute;left:0;top:0;z-index:7;border-radius:50%;pointer-events:none;border:2px solid #7CF5C8}
.st-lumi .xpf{position:absolute;left:0;top:0;z-index:7;font-weight:700;font-size:16px;color:var(--go);text-shadow:0 0 12px rgba(255,210,122,.7);white-space:nowrap;pointer-events:none}
.st-lumi .hud{position:absolute;z-index:5}
.st-lumi .hud>*{position:absolute}
.st-lumi .orb{width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 34% 28%,#fff,var(--go) 36%,#9a6a1c 100%);box-shadow:0 0 16px rgba(255,210,122,.55)}
.st-lumi .rn{font-size:15px;font-weight:600;line-height:1.1}
.st-lumi .xb{height:5px;border-radius:3px;background:rgba(74,227,240,.16);overflow:hidden}
.st-lumi .xb i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,var(--cy),var(--mi))}
.st-lumi .xn,.st-lumi .cn{font-size:11px;color:var(--mu);white-space:nowrap}
.st-lumi .chain{display:flex;gap:6px;align-items:center}
.st-lumi .cd{width:10px;height:10px;border-radius:50%;background:rgba(127,163,189,.3);flex:none}
.st-lumi .cd.lit{background:radial-gradient(circle at 35% 30%,#fff,var(--go) 55%);box-shadow:0 0 10px rgba(255,210,122,.9)}
.st-lumi .tray{position:absolute;left:0;top:0;z-index:5;pointer-events:none}
.st-lumi .slot{position:absolute;border-radius:50%;box-shadow:inset 0 0 0 1.5px rgba(127,163,189,.4)}
.st-lumi .dock{position:absolute;left:0;top:0;bottom:0;width:80px;z-index:5;background:linear-gradient(180deg,rgba(16,50,90,.6),rgba(5,18,38,.72));box-shadow:inset -1px 0 0 rgba(124,245,200,.2)}
.st-lumi .dock>*{position:absolute}
.st-lumi .dk{left:10px;width:60px;height:62px;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:11px;font-weight:500;color:var(--mu)}
.st-lumi .dk.on{color:var(--tx);background:rgba(74,227,240,.14);box-shadow:inset 0 0 0 1px rgba(74,227,240,.55),0 0 18px rgba(74,227,240,.25)}
.st-lumi .dk.on .isk-ic{color:var(--cy)}
.st-lumi .panel{position:absolute;left:936px;top:16px;width:328px;bottom:16px;z-index:5;border-radius:22px}
.st-lumi .panel>*{position:absolute}
.st-lumi .row{display:flex;align-items:center;gap:10px;padding:0 12px;border-radius:14px;background:rgba(74,227,240,.06);box-shadow:inset 0 0 0 1px rgba(124,245,200,.16)}
.st-lumi .row b{display:block;font-size:14px}.st-lumi .row span{font-size:12px;color:var(--mu)}
.st-lumi .row em{margin-left:auto;font-weight:700;color:var(--go);font-size:13px}
.st-lumi .row i{width:12px;height:12px;border-radius:50%;flex:none}
.st-lumi .dz{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;border-radius:28px;border:2px dashed rgba(124,245,200,.4);background:rgba(14,44,82,.22);text-align:center}
.st-lumi .dz b{font-size:22px}.st-lumi .dz span{font-size:14px;color:var(--mu)}
.st-lumi .dz .ico{width:56px;height:56px}
.st-lumi .chips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.st-lumi .wn{font-weight:600;font-variant-numeric:tabular-nums;text-align:center;line-height:1;text-shadow:0 0 28px rgba(74,227,240,.55)}
.st-lumi .bz{overflow:visible;position:absolute}
.st-lumi .bz canvas{position:absolute;left:50%;top:50%}
.st-lumi .ptag{display:flex;align-items:center;justify-content:space-between;font-size:14px;font-weight:500;color:var(--mu)}
.st-lumi .ptag b{color:var(--cy)}
.st-lumi .tag{display:inline-flex}
.st-lumi .cvw{border-radius:24px;overflow:hidden;background:#02070f;box-shadow:inset 0 0 0 1px rgba(124,245,200,.25)}
.st-lumi .cvw>*{position:absolute}
.st-lumi .cfr{border:2px solid var(--mi);border-radius:6px;box-shadow:0 0 0 999px rgba(4,11,26,.7),0 0 26px rgba(124,245,200,.5),inset 0 0 18px rgba(124,245,200,.18);background:linear-gradient(rgba(230,247,255,.4),rgba(230,247,255,.4)) 33.3% 0/1px 100% no-repeat,linear-gradient(rgba(230,247,255,.4),rgba(230,247,255,.4)) 66.6% 0/1px 100% no-repeat,linear-gradient(rgba(230,247,255,.4),rgba(230,247,255,.4)) 0 33.3%/100% 1px no-repeat,linear-gradient(rgba(230,247,255,.4),rgba(230,247,255,.4)) 0 66.6%/100% 1px no-repeat}
.st-lumi .vph{border-radius:22px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(124,245,200,.35),0 0 30px rgba(74,227,240,.2);overflow:hidden}
.st-lumi .vph>*{position:absolute}
.st-lumi .strip{display:flex;border-radius:12px}
.st-lumi .strip i{flex:1;background-size:cover;background-position:center}
.st-lumi .strip i:first-child{border-radius:12px 0 0 12px}.st-lumi .strip i:last-child{border-radius:0 12px 12px 0}
.st-lumi .selw{position:absolute;top:-5px;bottom:-5px;border-radius:12px;border:3px solid var(--go);box-shadow:0 0 0 999px rgba(4,11,26,.6),0 0 18px rgba(255,210,122,.5)}
.st-lumi .hd{position:absolute;top:50%;width:20px;height:56px;margin:-28px 0 0 -10px;border-radius:9px;background:linear-gradient(180deg,#FFE9B0,#FFD27A);box-shadow:0 0 16px rgba(255,210,122,.7)}
.st-lumi .hd::after{content:"";position:absolute;left:8px;top:18px;width:4px;height:20px;border-radius:2px;background:#5a3b05;opacity:.55}
.st-lumi .scl{position:relative;overflow:hidden;border-radius:12px;padding:6px 0;margin:-6px 0}
.st-lumi .ad{display:flex;gap:12px;align-items:center;border-radius:16px;padding:10px 12px;background:rgba(230,247,255,.04);box-shadow:inset 0 0 0 1px rgba(127,163,189,.35);border:1px dashed rgba(127,163,189,.3)}
.st-lumi .ad i{width:44px;height:44px;border-radius:10px;background:rgba(127,163,189,.18);flex:none}
.st-lumi .ad small{font-size:11px;font-weight:700;letter-spacing:.06em;border:1px solid var(--mu);color:var(--mu);border-radius:5px;padding:0 6px;margin-right:6px}
.st-lumi .ad span{font-size:13px;color:var(--mu)}
.st-lumi .toast{display:flex;align-items:center;gap:10px;padding:0 16px;border-radius:99px;font-weight:600;font-size:14px;z-index:8}
.st-lumi .toast .isk-ic{color:var(--mi)}
.st-lumi .bandw{position:absolute;top:0;bottom:0;width:140px;z-index:9;pointer-events:none;mix-blend-mode:screen;background:linear-gradient(90deg,transparent,rgba(124,245,200,.28) 42%,rgba(230,247,255,.5) 50%,rgba(124,245,200,.28) 58%,transparent)}
.st-lumi .irisr{position:absolute;z-index:9;border-radius:50%;pointer-events:none;border:2px solid rgba(124,245,200,.7);box-shadow:0 0 22px rgba(74,227,240,.55),inset 0 0 22px rgba(74,227,240,.3)}
.st-lumi .tapr{position:absolute;left:0;top:0;width:76px;height:76px;margin:-38px 0 0 -38px;z-index:9;border-radius:50%;pointer-events:none;border:2px solid #7CF5C8;box-shadow:0 0 14px rgba(124,245,200,.6)}
.st-lumi .hint{position:absolute;z-index:3;border-radius:50%;pointer-events:none;border:2px solid #4AE3F0;box-shadow:0 0 22px rgba(74,227,240,.6)}
.st-lumi .shield{display:grid;place-items:center;border-radius:50%;color:#04202F;background:radial-gradient(circle at 35% 28%,#fff,#B9B0FF 40%,#8A7BFF 100%);box-shadow:0 0 36px rgba(138,123,255,.8)}
.st-lumi .mpin{width:36px;height:46px;margin:-46px 0 0 -18px;transform-origin:50% 100%}
.st-lumi .kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:13px;padding:12px 14px;border-radius:16px}
.st-lumi .kv span{color:var(--mu)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, E = A.ease, app = A.app, W = A.W, H = A.H, seg = A.seg, lerp = A.lerp, clamp = A.clamp;
    const u = (a, w) => (app ? a : w);
    const C = { cy: '#4AE3F0', mi: '#7CF5C8', vi: '#8A7BFF', go: '#FFD27A', tx: '#E6F7FF', mu: '#7FA3BD' };
    const uid = app ? 'a' : 'w';
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const mk = (parent, cls, st, html) => { const e = A.el('div', cls, parent, html); if (st) e.style.cssText = st; return e; };
    const attr = (e, k, v) => { const c = e._a || (e._a = {}); if (c[k] !== v) { c[k] = v; e.setAttribute(k, v); } };
    const hexRGB = h => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
    const mix = (a, b, k) => { const x = hexRGB(a), y = hexRGB(b); return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * k).toString(16).padStart(2, '0')).join(''); };
    const qz = (P, f) => { const a = (1 - f) * (1 - f), b = 2 * (1 - f) * f, c = f * f; return { x: a * P[0][0] + b * P[1][0] + c * P[2][0], y: a * P[0][1] + b * P[1][1] + c * P[2][1] }; };
    const P4 = (x, y, w, h) => `left:${x}px;top:${y}px;` + (w != null ? `width:${w}px;` : '') + (h != null ? `height:${h}px;` : '');
    const thumbs = [A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    const pbH = ph => `<i class="ph" style="background-image:${ph}"></i><b class="s1"></b><b class="s2"></b>`;
    const tools = [['shrink', 'Shrink', C.cy], ['crop', 'Crop', C.mi], ['pin', 'Place', C.vi], ['film', 'GIF', C.go], ['convert', 'Convert', '#9FE8FF']];

    /* ---------- story data ---------- */
    const PRL = [
      { c: C.cy, n: 'Exam photo', d: `${D.shrink.size} · JPG`, xp: 40, lab: D.shrink.size },
      { c: C.mi, n: 'Instagram post', sn: 'Instagram', d: D.crop.px, xp: 30, lab: D.crop.ratio + ' crop' },
      { c: C.vi, n: 'City photo', d: 'Location removed', xp: 40, lab: 'Place hidden' },
      { c: C.go, n: 'Beach GIF', d: `${D.video.size} · ${D.video.fps} fps`, xp: 40, lab: D.video.size },
    ];
    const PT = [14.45, 23.85, 28.85, 35.4];
    const AW = [[14.45, 40], [23.85, 30], [28.85, 40], [35.4, 40], [36.85, 50]];
    const xpAt = t => 20 + AW.reduce((s, [ta, v]) => s + v * E.out(seg(t, ta, ta + 0.7)), 0);
    const PROC = [{ a: 10.9, b: 14.3 }, { a: 22.95, b: 23.75 }, { a: 27.1, b: 28.6 }, { a: 33.1, b: 35.2 }];

    /* ---------- necklace geometry ---------- */
    const NK = app ? [[38, 758], [195, 832], [352, 758]] : [[966, 228], [1100, 336], [1234, 228]];
    const NS = 7, slot = i => qz(NK, (i + 1) / (NS + 1));
    const PS = app ? 22 : 28, BPS = app ? 46 : 66;
    const BN = app ? [[40, 196], [195, 316], [350, 196]] : [[150, 214], [500, 420], [850, 214]];
    const bslot = i => qz(BN, 0.14 + i * 0.24);

    /* ---------- Lumi: position keys (bell centre, scale) ---------- */
    const LK = app ? [
      [0, 195, 940, 1.3], [1.6, 195, 390, 1.35], [2.7, 195, 238, 1.15], [4.0, 195, 238, 1.15],
      [4.7, 310, 148, 0.6], [10.1, 310, 148, 0.6], [10.9, 195, 190, 1.0], [14.3, 195, 190, 1.0], [15.0, 195, 452, 0.95], [17.0, 195, 452, 0.95],
      [17.7, 195, 572, 1.0], [19.5, 195, 572, 1.0], [20.2, 322, 140, 0.55], [23.9, 322, 140, 0.55],
      [24.6, 195, 588, 1.0], [25.1, 195, 588, 1.0], [25.8, 195, 650, 0.8], [30.0, 195, 650, 0.8],
      [30.5, 195, 588, 1.0], [31.0, 195, 588, 1.0], [31.7, 195, 650, 0.8], [36.0, 195, 650, 0.8],
      [36.7, 62, 568, 0.58],
    ] : [
      [0, 640, 950, 1.5], [1.6, 640, 270, 1.7], [2.7, 745, 345, 1.35], [4.0, 745, 345, 1.35],
      [4.7, 760, 270, 1.15], [8.5, 760, 270, 1.15], [9.2, 770, 600, 1.0], [10.1, 770, 600, 1.0], [10.9, 745, 150, 1.05], [14.3, 745, 150, 1.05],
      [15.0, 700, 560, 1.1], [17.0, 700, 560, 1.1], [17.7, 690, 450, 1.3], [19.5, 690, 450, 1.3], [20.2, 730, 610, 0.95], [20.8, 730, 610, 0.95],
      [21.4, 790, 190, 0.85], [23.9, 790, 190, 0.85], [24.6, 700, 430, 1.2], [25.1, 700, 430, 1.2], [25.8, 690, 630, 1.0], [30.0, 690, 630, 1.0],
      [30.5, 700, 430, 1.2], [31.0, 700, 430, 1.2], [31.7, 690, 630, 1.0], [36.0, 690, 630, 1.0], [36.7, 830, 125, 0.7],
    ];
    const lumiAt = (K, t) => {
      if (t <= K[0][0]) return { x: K[0][1], y: K[0][2], s: K[0][3] };
      let i = 0; while (i < K.length - 2 && t >= K[i + 1][0]) i++;
      const a = K[i], b = K[i + 1], k = E.inOut(seg(t, a[0], b[0]));
      return { x: lerp(a[1], b[1], k), y: lerp(a[2], b[2], k), s: lerp(a[3], b[3], k) };
    };
    const lumiPos = t => { const p = lumiAt(LK, t); return { x: p.x + Math.sin(t * 0.7) * 3, y: p.y + Math.sin(t * 1.15) * 5, s: p.s }; };

    /* ======================================================================
       PAGES
       ====================================================================== */
    const pg = id => mk(S, 'pg ' + id);
    const sp = pg('sp'), home = pg('home'), pick = pg('pick'), pur = pg('pur'), work = pg('work'), res = pg('res'), ws = pg('ws'), crp = pg('crp'), ced = pg('ced'), prv = pg('prv'), gif = pg('gif'), done = pg('done');
    const kinds = A.bars(4, A.BAR_KINDS, 11);
    const bars = [], zones = [];
    const BCOL = [[C.cy, C.mi, C.vi, '#050E20'], [C.mi, C.cy, C.go, '#050E20'], [C.vi, C.cy, C.mi, '#0A1230'], [C.go, C.cy, C.vi, '#050E20']];
    /* zone: absolute box in its parent; bar sized for its kind. abs = {cx, cy} in screen px. */
    const zone = (slot, parent, x, y, w, h, abs) => {
      const z = mk(parent, 'bz', P4(x, y, w, h)), kd = kinds[slot], mini = slot === 1, big = slot === 3;
      const hs = { comet: mini ? 34 : u(44, 60), streams: mini ? 48 : u(72, 100), liquid: mini ? 24 : u(30, 40), tiles: mini ? 40 : u(64, 90), warp: mini ? 70 : u(112, 170) };
      let bw = w - 8, bh = hs[kd] || 60;
      if (big && kd !== 'orbit') bh = Math.min(h, Math.round(bh * 1.15));
      if (kd === 'orbit') { bw = bh = Math.min(h, w, mini ? 84 : big ? u(150, 230) : u(128, 190)); }
      const b = A.bar(z, kd, { w: bw, h: bh, colors: BCOL[slot], track: 'rgba(74,227,240,.14)', seed: 4 + slot * 3 });
      b.el.style.marginLeft = (-bw / 2) + 'px'; b.el.style.marginTop = (-bh / 2) + 'px';
      bars[slot] = b; zones[slot] = z;
      Object.assign(PROC[slot], { kind: kd, cx: abs.cx, cy: abs.cy, bw });
      return z;
    };

    /* --- splash --- */
    mk(sp, 't1', `left:0;right:0;text-align:center;top:${u(650, 570)}px;font-size:${u(36, 62)}px`, 'Image Swiss Knife');
    mk(sp, 't2 lk', `left:0;right:0;justify-content:center;top:${u(706, 656)}px`, `${I('lock', 16, 2)}Your photos stay ${app ? 'on this phone' : 'in this browser'}`);

    /* --- home --- */
    if (app) {
      mk(home, 't2', 'left:0;right:0;text-align:center;top:412px;font-size:12px;letter-spacing:.16em;text-transform:uppercase', 'Good evening');
      mk(home, 't1', 'left:0;right:0;text-align:center;top:434px;font-size:29px', 'What shall we dive into?');
      tools.forEach((x, i) => mk(home, 'gl tl', P4(16 + i * 73.5, 500, 64, 84), `<i class="ico" style="color:${x[2]}">${I(x[0], 20, 2)}</i><span>${x[1]}</span>`));
      mk(home, 'btn k-pick', P4(16, 606, 358, 50), `${I('image', 20, 2)}Choose a photo`);
      mk(home, 'gl', P4(16, 672, 358, 48) + 'border-radius:24px', `<span style="position:absolute;left:20px;top:14px;font-size:14px;font-weight:500">Daily dive</span>${[0, 1, 2, 3].map(i => `<i class="slot" style="left:${122 + i * 36}px;top:13px;width:22px;height:22px"></i>`).join('')}<b style="position:absolute;right:20px;top:13px;font-size:15px;color:var(--go)">0 / 4</b>`);
    } else {
      mk(home, 't2', 'left:128px;top:104px;font-size:13px;letter-spacing:.16em;text-transform:uppercase', 'Good evening');
      mk(home, 't1', 'left:128px;top:128px;white-space:nowrap;font-size:52px', 'What shall we dive into?');
      mk(home, 't2', 'left:128px;top:210px;width:520px', 'Drop a photo anywhere. Lumi picks the right tool.');
      mk(home, 'dz', P4(128, 290, 470, 230), `<i class="ico">${I('upload', 26, 1.8)}</i><b>Drop a photo here</b><span>or press <kbd>Ctrl</kbd> <kbd>O</kbd> to browse</span>`);
      mk(home, 'chips', P4(128, 548, 470) + 'justify-content:flex-start', tools.map((x, i) => `<span class="chip"><kbd>${i + 1}</kbd>${x[1]}</span>`).join(''));
    }

    /* --- pick --- */
    if (app) {
      mk(pick, 't1', 'left:16px;top:102px;font-size:26px', 'Pick a photo');
      mk(pick, 't2', 'left:16px;top:190px;font-size:13px', 'Recent photos');
      thumbs.forEach((b, i) => mk(pick, 'thm k-g' + i, P4(16 + (i % 3) * 122, 214 + Math.floor(i / 3) * 122, 114, 114) + `background-image:${b}`, i === 0 ? `<b class="ck">${I('check', 15, 3.2)}</b>` : ''));
      mk(pick, 'gl fc', P4(16, 606, 358, 78), `<div class="pbub" style="left:14px;top:13px;width:52px;height:52px">${pbH(thumbs[0])}</div><b style="position:absolute;left:80px;top:14px;font-size:16px">${D.portrait.file}</b><span class="t2" style="position:absolute;left:80px;top:38px;font-size:13px;white-space:nowrap">${D.portrait.size} · ${D.portrait.dims}</span>`);
    } else {
      mk(pick, 't1', 'left:128px;top:92px;font-size:38px', 'Drop your photo');
      mk(pick, 't2', 'left:128px;top:146px', 'Drag it from your desktop onto the ocean.');
      mk(pick, 'dz k-dz', P4(128, 196, 470, 360), `<i class="ico">${I('upload', 26, 1.8)}</i><b>Drop a photo here</b><span>or press <kbd>Ctrl</kbd> <kbd>O</kbd></span>`);
      mk(pick, 'pbub k-pb', P4(258, 226, 210, 210), pbH(thumbs[0]));
      mk(pick, 'fcw', P4(128, 458, 470) + 'text-align:center', `<b style="font-size:20px">${D.portrait.file}</b><div class="chips" style="margin-top:10px"><span class="chip">${D.portrait.size}</span><span class="chip">${D.portrait.dims}</span><span class="chip mi">On this computer</span></div>`);
      mk(pick, 'gh k-gh', P4(0, 0, 150, 190) + 'border-radius:16px;z-index:5', `<i style="position:absolute;inset:8px 8px 34px;border-radius:10px;background:${thumbs[0]} center/cover"></i><span style="position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:11px;font-weight:600">${D.portrait.file}</span>`);
      pick.lastChild.className = 'gl gh k-gh'; pick.lastChild.style.position = 'absolute';
    }

    /* --- purpose (shrink question) --- */
    const optIc = ['share', 'layers', 'upload', 'ruler'];
    if (app) {
      mk(pur, 't1', 'left:16px;top:102px;font-size:24px', 'Where will you use it?');
      mk(pur, 'gl', P4(16, 160, 258, 56) + 'border-radius:28px', `<div class="pbub" style="left:8px;top:8px;width:40px;height:40px">${pbH(thumbs[0])}</div><b style="position:absolute;left:58px;top:9px;font-size:14px">${D.portrait.file}</b><span class="t2" style="position:absolute;left:58px;top:29px;font-size:12px">${D.portrait.size}</span>`);
      D.shrink.options.forEach((o, i) => mk(pur, 'gl opt k-o' + i, P4(16, 238 + i * 78, 358, 68), `<i class="ico">${I(optIc[i], 20, 2)}</i><div><b>${o.label}</b><span>${o.hint}</span></div><i class="rd"></i>`));
      mk(pur, 't2', 'left:0;right:0;text-align:center;top:564px', 'Tap one and Lumi starts at once.');
    } else {
      mk(pur, 't1', 'left:128px;top:92px;font-size:38px', 'Where will you use it?');
      mk(pur, 't2', 'left:128px;top:146px', 'Click one and Lumi starts at once.');
      mk(pur, 'pbub', P4(135, 225, 210, 210), pbH(thumbs[0]));
      mk(pur, 'fcw', P4(120, 452, 240) + 'text-align:center', `<b style="font-size:18px">${D.portrait.file}</b><div class="t2" style="margin-top:4px">${D.portrait.size} · ${D.portrait.dims}</div>`);
      D.shrink.options.forEach((o, i) => mk(pur, 'gl opt k-o' + i, P4(440, 200 + i * 88, 440, 76), `<i class="ico">${I(optIc[i], 20, 2)}</i><div><b>${o.label}</b><span>${o.hint}</span></div><kbd>${i + 1}</kbd><i class="rd"></i>`));
    }

    /* --- shrink work --- */
    const wbC = u([195, 392], [270, 306]), wbD = u(150, 230);
    if (!app) mk(work, 't1', 'left:128px;top:92px;font-size:38px', 'Making it smaller');
    mk(work, 'pbub wb', P4(wbC[0] - wbD / 2, wbC[1] - wbD / 2, wbD, wbD), pbH(thumbs[0]));
    mk(work, 'wn', P4(u(0, 90), u(478, 436), u(390, 360)) + `font-size:${u(46, 64)}px;height:${u(52, 70)}px`, D.portrait.size);
    mk(work, 't2', P4(u(0, 90), u(534, 514), u(390, 360)) + 'text-align:center', `Goal: ${D.shrink.rule}`);
    mk(work, 'ptag', P4(u(16, 470), u(556, 250), u(358, 410)), '<b class="st0">Gathering light</b><span class="pc0">0%</span>');
    const Z0 = app ? [16, 580, 358, 128, 195, 644] : [470, 290, 410, 210, 675, 395];
    zone(0, work, Z0[0], Z0[1], Z0[2], Z0[3], { cx: Z0[4], cy: Z0[5] });

    /* --- shrink result --- */
    if (app) {
      mk(res, 'vph k-rph', P4(26, 118, 150, 198) + `background-image:${thumbs[0]};background-position:center 25%`);
      mk(res, 'chips', P4(192, 122, 182) + 'justify-content:flex-start', `<span class="chip mi">${D.shrink.format}</span><span class="chip">${D.shrink.px}</span>`);
      mk(res, 'wn', P4(192, 160, 182) + `font-size:54px;height:56px;text-align:left;color:var(--go);text-shadow:0 0 24px rgba(255,210,122,.5)`, D.shrink.size);
      mk(res, 't2', P4(192, 222, 182) + 'font-size:15px', `was <s>${D.portrait.size}</s>`);
      mk(res, 'chips', P4(192, 254, 182) + 'justify-content:flex-start', `<span class="chip mi">96% smaller</span><span class="chip go">+${PRL[0].xp} XP</span>`);
      mk(res, 'btn go k-save', P4(16, 622, 236, 50), `${I('save', 20, 2.2)}Save`);
      mk(res, 'btn g', P4(264, 622, 110, 50), `${I('share', 18, 2)}Share`);
      mk(res, 'gl toast k-t1', P4(70, 560, 250, 44), `${I('check', 20, 3)}Saved to your Gallery`);
    } else {
      mk(res, 't1', 'left:128px;top:92px;font-size:38px', 'Small and sharp');
      mk(res, 'vph k-rph', P4(128, 170, 220, 290) + `background-image:${thumbs[0]};background-position:center 25%`);
      mk(res, 'chips', P4(392, 176, 480) + 'justify-content:flex-start', `<span class="chip mi">${D.shrink.format}</span><span class="chip">${D.shrink.px}</span><span class="chip">Exam form</span>`);
      mk(res, 'wn', P4(392, 222, 440) + 'font-size:92px;height:96px;text-align:left;color:var(--go);text-shadow:0 0 34px rgba(255,210,122,.5)', D.shrink.size);
      mk(res, 't2', P4(392, 330, 440) + 'font-size:18px', `was <s>${D.portrait.size}</s> · 96% smaller · <b style="color:var(--go)">+${PRL[0].xp} XP</b>`);
      mk(res, 'btn go k-save', P4(392, 392, 220, 54), `${I('save', 20, 2.2)}Save <kbd>Ctrl S</kbd>`);
      mk(res, 'btn g', P4(628, 392, 150, 54), `${I('share', 18, 2)}Share`);
      mk(res, 'gl toast k-t1', P4(392, 520, 230, 44), `${I('check', 20, 3)}Saved to Downloads`);
    }

    /* --- crop: workspace + presets + editor --- */
    mk(ws, 't1', P4(u(16, 128), u(102, 92)) + `font-size:${u(24, 38)}px`, 'Mountain photo');
    mk(ws, 'vph', P4(u(40, 128), u(152, 160), u(310, 330), u(215, 244)) + `background-image:${thumbs[1]}`, `<span class="chip" style="left:12px;bottom:12px;background:rgba(4,11,26,.7)">IMG_1650.JPG</span>`);
    mk(ws, 't2', P4(u(40, 128), u(376, 436)), '<b style="color:var(--tx)">Mountain</b> · 4000 × 3000');
    mk(crp, 't1', P4(u(16, 128), u(102, 92)) + `font-size:${u(24, 38)}px`, 'Where will you post it?');
    const cps = D.crop.presets.slice(0, 6);
    const rbox = (p, m) => { const w = p.w >= p.h ? m : Math.max(8, Math.round(m * p.w / p.h)), h = p.h >= p.w ? m : Math.max(8, Math.round(m * p.h / p.w)); return `<i class="ratio"><u style="width:${w}px;height:${h}px"></u></i>`; };
    cps.forEach((p, i) => mk(crp, 'gl opt k-c' + i, app ? P4(16, 156 + i * 80, 358, 66) : P4(128 + (i % 2) * 392, 190 + Math.floor(i / 2) * 92, 372, 78), `${rbox(p, 28)}<div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div><i class="rd"></i>`));
    const cv = app ? [16, 150, 358, 440] : [128, 100, 520, 520];
    const fw = app ? 280 : 320, fh = fw * 5 / 4, imgW = app ? 620 : 800, imgH = imgW * 0.75;
    if (app) mk(ced, 't1', 'left:16px;top:102px;font-size:24px', 'Crop for Instagram');
    const cvw = mk(ced, 'cvw', P4(...cv));
    mk(cvw, 'k-img', P4(cv[2] / 2 - imgW / 2, cv[3] / 2 - imgH / 2, imgW, imgH) + `background:${thumbs[1]} center/cover`);
    mk(cvw, 'cfr', P4(cv[2] / 2 - fw / 2, cv[3] / 2 - fh / 2, fw, fh));
    mk(cvw, 'chip', P4(0, 12) + `left:50%;margin-left:-72px;width:144px;justify-content:center;background:rgba(4,11,26,.8)`, `${D.crop.preset} · ${D.crop.ratio}`);
    if (app) {
      mk(ced, 't2', 'left:16px;top:602px;font-size:13px', `${D.crop.px} · Drag the photo to fit`);
      mk(ced, 'btn k-done', P4(16, 636, 358, 50), `${I('check', 20, 3)}Done`);
    } else {
      mk(ced, 'gl', P4(692, 340, 188, 96), `<b style="position:absolute;left:16px;top:14px;font-size:15px">${D.crop.preset}</b><span class="t2" style="position:absolute;left:16px;top:38px;font-size:13px">${D.crop.ratio} · ${D.crop.px}</span><span class="t2" style="position:absolute;left:16px;top:62px;font-size:12px">Drag the photo to fit</span>`);
      mk(ced, 'btn k-done', P4(692, 540, 188, 52), `${I('check', 20, 3)}Done <kbd>Enter</kbd>`);
    }
    const mini = mk(ced, 'gl mini', app ? P4(45, 300, 300, 150) : P4(268, 270, 240, 170), '<span class="t2" style="position:absolute;left:0;right:0;top:12px;text-align:center;font-size:13px"><b class="st1" style="color:var(--mi)">Cropping 1080 × 1350</b></span>');
    zone(1, mini, 20, app ? 36 : 40, app ? 260 : 200, app ? 100 : 120, { cx: u(195, 388), cy: u(386, 410) });
    mk(ced, 'gl toast k-t2', P4(u(70, 392), u(648, 640), 250, 44) + (app ? '' : 'left:692px;top:612px;width:188px;padding:0 12px;font-size:13px'), `${I('check', 20, 3)}Saved ${D.crop.px}`);
    ced.lastChild.style.display = 'none';

    /* --- privacy --- */
    const pA = mk(prv, 'pgi', 'left:0;top:0;width:100%;height:100%'), pB = mk(prv, 'pgi', 'left:0;top:0;width:100%;height:100%');
    mk(pA, 'pbub', P4(u(85, 175), u(190, 200), u(220, 250), u(220, 250)), pbH(thumbs[2]));
    mk(pA, 't2', P4(u(0, 128), u(412, 470), u(390, 450)) + (app ? 'text-align:center;font-size:12px;display:none' : 'text-align:center'), `${D.place.file} · City photo`);
    const mapSVG = '<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><rect width="400" height="200" fill="#0A2342"/><path d="M-10 150C80 128 120 172 200 140S330 80 410 100" stroke="#14507A" stroke-width="16" fill="none"/><path d="M0 60h400M70 0v200M160 0l40 200M290 0v200M0 176h400M340 0l-60 200" stroke="#17406b" stroke-width="5"/><path d="M0 104h400" stroke="#1d5a8a" stroke-width="8"/><rect x="84" y="14" width="62" height="34" rx="8" fill="#0E3A55"/><rect x="300" y="118" width="70" height="44" rx="8" fill="#12304f"/></svg>';
    const pinSVG = `<svg viewBox="0 0 36 46" width="36" height="46"><path d="M18 45S3 28 3 17a15 15 0 0 1 30 0c0 11-15 28-15 28z" fill="#8A7BFF"/><path d="M10 13a9 9 0 0 1 6-6" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6" fill="none"/><circle cx="18" cy="17" r="6" fill="#E6F7FF"/></svg>`;
    if (app) {
      mk(pB, 'pbub k-cp', P4(16, 106, 62, 62), pbH(thumbs[2]));
      mk(pB, 't1 k-pl', 'left:92px;top:108px;font-size:28px;white-space:nowrap', `${D.place.city}, ${D.place.country}`);
      mk(pB, 't2', 'left:92px;top:146px;font-size:13px', `${D.place.file} · ${D.place.region}`);
      mk(pB, 'gl k-map', P4(16, 184, 358, 170) + 'overflow:hidden', `${mapSVG}<div class="mpin" style="position:absolute;left:62%;top:60%">${pinSVG}</div><span class="chip" style="position:absolute;left:10px;bottom:10px;background:rgba(4,11,26,.75)">${D.place.lat} · ${D.place.lon}</span>`);
      mk(pB, 'gl k-warn', P4(16, 368, 358, 62) + 'border-radius:16px;box-shadow:inset 0 0 0 1px rgba(255,210,122,.55),0 0 20px rgba(255,210,122,.15)', `<span style="position:absolute;left:14px;top:19px;color:var(--go)">${I('eye', 24, 2)}</span><span style="position:absolute;left:50px;right:12px;top:10px;font-size:14px;line-height:1.3">If you share this photo, people can see this place.</span>`);
      mk(pB, 'chips k-det', P4(16, 442, 358) + 'justify-content:flex-start', `<span class="chip">${D.place.when}</span><span class="chip">${D.place.device}</span>`);
      mk(pB, 'btn k-rm', P4(16, 486, 358, 50), `${I('trash', 18, 2)}<span class="rml">Remove location</span>`);
    } else {
      mk(pB, 'pbub k-cp', P4(128, 100, 70, 70), pbH(thumbs[2]));
      mk(pB, 't1 k-pl', 'left:214px;top:100px;font-size:42px;white-space:nowrap', `${D.place.city}, ${D.place.country}`);
      mk(pB, 't2', 'left:214px;top:150px', `${D.place.file} · ${D.place.region}`);
      mk(pB, 'gl k-map', P4(128, 200, 450, 330) + 'overflow:hidden', `${mapSVG}<div class="mpin" style="position:absolute;left:60%;top:58%;transform:scale(1.3)">${pinSVG}</div><span class="chip" style="position:absolute;left:14px;bottom:14px;background:rgba(4,11,26,.75)">${D.place.lat} · ${D.place.lon}</span>`);
      mk(pB, 'gl kv k-det', P4(604, 200, 276, 128), `<span>Region</span><b>${D.place.region}</b><span>Taken</span><b>${D.place.when}</b><span>Camera</span><b>${D.place.device}</b><span>GPS</span><b>${D.place.lat}</b>`);
      mk(pB, 'gl k-warn', P4(604, 344, 276, 82) + 'border-radius:16px;box-shadow:inset 0 0 0 1px rgba(255,210,122,.55),0 0 20px rgba(255,210,122,.15)', `<span style="position:absolute;left:14px;top:16px;color:var(--go)">${I('eye', 22, 2)}</span><span style="position:absolute;left:48px;right:12px;top:12px;font-size:14px;line-height:1.3">If you share this photo, people can see this place.</span>`);
      mk(pB, 'btn k-rm', P4(604, 446, 276, 54), `${I('trash', 18, 2)}<span class="rml">Remove location</span> <kbd>Del</kbd>`);
    }
    const pov = mk(prv, 'gl pov', app ? P4(16, 366, 358, 176) : P4(128, 200, 752, 330), '<span class="ptag" style="position:absolute;left:18px;right:18px;top:14px"><b class="st2">Clearing location</b><span class="pc2">0%</span></span>');
    mk(pov, 'pbub k-pbub', app ? P4(14, 52, 84, 84) : P4(50, 90, 170, 170), pbH(thumbs[2]));
    zone(2, pov, app ? 108 : 260, app ? 38 : 50, app ? 250 : 470, app ? 134 : 270, { cx: u(249, 623), cy: u(471, 385) });
    mk(prv, 'shield k-sh', P4(u(153, 464), u(398, 346), u(84, 96), u(84, 96)), I('shield', u(44, 52), 2));
    mk(prv, 'chip vi k-rare', P4(u(75, 345), u(496, 548), u(240, 300)) + 'justify-content:center;font-size:13px;gap:8px', `${I('sparkle', 14, 2.2)}Rare violet pearl: Privacy`);

    /* --- gif --- */
    const gA = mk(gif, 'pgi', 'left:0;top:0;width:100%;height:100%'), gB = mk(gif, 'pgi', 'left:0;top:0;width:100%;height:100%');
    mk(gA, 'pbub k-vb', P4(u(85, 175), u(190, 200), u(220, 250), u(220, 250)), pbH(A.frame(2)));
    mk(gA, 't2', P4(u(0, 128), u(416, 470), u(390, 450)) + 'text-align:center', `${D.video.file} · ${D.video.len}`);
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame((i * 1.5) | 0)}"></i>`).join('');
    const SG = app ? [24, 372, 342, 58] : [128, 436, 752, 62];
    mk(gB, 't1', P4(u(16, 128), u(102, 92)) + `font-size:${u(24, 38)}px`, 'Video to GIF');
    const vgB = app ? [16, 146, 358, 200] : [128, 160, 440, 250];
    mk(gB, 'vph k-vid', P4(...vgB), `<span class="chip k-vbd" style="left:12px;top:12px;background:rgba(4,11,26,.7)">${D.video.file} · ${D.video.len}</span>`);
    mk(gB, 'strip-w', P4(SG[0], SG[1], SG[2], SG[3]), `<div class="scl"><div class="strip" style="height:${SG[3]}px;position:relative">${strip}<div class="selw"><div class="hd hL" style="left:0"></div><div class="hd hR k-hR" style="left:100%"></div></div></div></div>`);
    mk(gB, 'k-gi', P4(u(16, 128), u(444, 516), u(358, 752)), `<b class="gv" style="font-size:${u(16, 18)}px">From 0:04 to 0:08 · 4.0 s</b><div class="t2 gs" style="margin-top:4px;font-size:13px">Drag the gold handles to trim</div>`);
    if (!app) mk(gB, 'gl', P4(604, 160, 276, 110), `<b style="position:absolute;left:16px;top:14px;font-size:15px">${D.video.file}</b><span class="t2" style="position:absolute;left:16px;top:38px;font-size:13px">Video · ${D.video.len} · 24 fps source</span><span class="t2" style="position:absolute;left:16px;top:62px;font-size:13px">Output: 12 fps loop</span>`);
    mk(gB, 'btn k-mk', P4(u(16, 604), u(486, 300), u(358, 276), 50), `${I('film', 20, 2)}<span class="mkl">Make GIF</span>${app ? '' : ' <kbd>Enter</kbd>'}`);
    const gpov = mk(gif, 'gl gpov', app ? P4(16, 360, 358, 190) : P4(128, 150, 752, 360), '<span class="ptag" style="position:absolute;left:18px;right:18px;top:14px"><b class="st3">Collecting frames</b><span class="pc3">0 of 36</span></span>');
    mk(gpov, 'pbub k-gbub', app ? P4(14, 56, 84, 84) : P4(50, 100, 170, 170), pbH(A.frame(0)));
    zone(3, gpov, app ? 108 : 260, app ? 40 : 52, app ? 250 : 470, app ? 148 : 300, { cx: u(249, 623), cy: u(474, 352) });

    /* --- done --- */
    mk(done, 't1', P4(u(16, 128), u(104, 92)) + `font-size:${u(30, 44)}px`, 'Dive complete');
    mk(done, 't2', P4(u(16, 128), u(146, 150)), '4 pearls on your necklace');
    mk(done, 'svg-nk', 'left:0;top:0;width:100%;height:100%', `<svg width="${W}" height="${H}" style="position:absolute;left:0;top:0"><path d="M${BN[0][0]} ${BN[0][1]} Q${BN[1][0]} ${BN[1][1]} ${BN[2][0]} ${BN[2][1]}" stroke="rgba(124,245,200,.4)" stroke-width="1.6" fill="none"/></svg>`);
    PRL.forEach((p, i) => {
      const b = bslot(i);
      mk(done, 'pearl bpl bp' + i, P4(b.x - BPS / 2, b.y - BPS / 2, BPS, BPS) + 'position:absolute;z-index:1;' + pearlCss(p.c, true));
      mk(done, 'bpt bt' + i, P4(b.x - 40, b.y + BPS / 2 + 6, 80) + 'text-align:center;font-size:12px;color:var(--mu)', `<b style="color:var(--tx);display:block;font-size:13px">${p.sn || p.n}</b>${p.lab}`);
    });
    function pearlCss(c, big) { return `background:radial-gradient(circle at 34% 28%,#fff 0,#fff 9%,${mix(c, '#ffffff', 0.35)} 24%,${c} 55%,${mix(c, '#04101F', 0.55)} 100%);box-shadow:0 0 ${big ? 24 : 14}px ${c}aa,inset -3px -4px 7px rgba(0,0,0,.28)`; }
    if (app) {
      mk(done, 'gl rk', P4(16, 326, 358, 92), '<b class="dn fr" style="position:absolute;left:18px;top:12px;font-size:22px;font-family:Fraunces,Georgia,serif;font-weight:500">Shallows</b><b class="dx" style="position:absolute;right:18px;top:14px;font-size:19px;color:var(--go)">+0 XP</b><div class="xb" style="position:absolute;left:18px;right:18px;top:50px;height:8px"><i></i></div><span class="t2 dsub" style="position:absolute;left:18px;top:64px;font-size:12px">Daily dive goal done: +50 XP</span>');
      mk(done, 'gl', P4(16, 430, 226, 74), `<span class="t2" style="position:absolute;left:14px;top:9px;font-size:12px"><b class="dst" style="color:var(--tx)">3-day streak</b></span><div class="chain" style="position:absolute;left:14px;top:40px">${Array.from({ length: 7 }, (_, i) => `<i class="cd ${i < 3 ? 'lit' : ''}" style="width:14px;height:14px"></i>`).join('')}</div>`);
      mk(done, 'gl', P4(254, 430, 120, 74), '<b class="tp" style="position:absolute;left:14px;top:8px;font-size:26px;color:var(--mi)">0 taps</b><span class="t2" style="position:absolute;left:14px;top:44px;font-size:12px">for 4 tasks</span>');
      mk(done, 't2 lk', P4(120, 530, 254) + 'color:var(--mi);font-size:14px;line-height:1.3;align-items:flex-start', `<span style="margin-top:2px">${I('lock', 16, 2.2)}</span><span>${D.promise}</span>`);
      mk(done, 'btn go k-all', P4(16, 626, 358, 50), `${I('save', 20, 2.2)}<span class="sal">Save all 4</span>`);
      mk(done, 'ad', P4(16, 688, 358, 62), '<i></i><div><small>Ad</small><span>Sponsored message, shown only after your work is done.</span></div>');
    } else {
      mk(done, 'gl', P4(128, 470, 244, 74), `<span class="t2" style="position:absolute;left:16px;top:10px;font-size:13px"><b class="dst" style="color:var(--tx)">3-day streak</b></span><div class="chain" style="position:absolute;left:16px;top:42px">${Array.from({ length: 7 }, (_, i) => `<i class="cd ${i < 3 ? 'lit' : ''}" style="width:14px;height:14px"></i>`).join('')}</div>`);
      mk(done, 'gl', P4(386, 470, 190, 74), '<b class="tp" style="position:absolute;left:16px;top:8px;font-size:28px;color:var(--mi)">0 taps</b><span class="t2" style="position:absolute;left:16px;top:46px;font-size:13px">for 4 tasks</span>');
      mk(done, 't2 lk', P4(128, 566, 480) + 'color:var(--mi);font-size:16px', `${I('lock', 18, 2.2)}<span>${D.promiseWeb}</span>`);
      mk(done, 'btn go k-all', P4(128, 604, 260, 54), `${I('save', 20, 2.2)}<span class="sal">Save all 4</span> <kbd>Ctrl S</kbd>`);
      mk(done, 'ad', P4(640, 560, 250, 100), '<i></i><div><small>Ad</small><span>Sponsored message, shown only after your work is done.</span></div>');
    }

    /* ======================================================================
       PERSISTENT CHROME: HUD (phone) / dock + panel (web), necklace, pearls
       ====================================================================== */
    const chainH = (n, sz) => `<div class="chain">${Array.from({ length: 7 }, (_, i) => `<i class="cd ${i < n ? 'lit' : ''}" ${sz ? `style="width:${sz}px;height:${sz}px"` : ''}></i>`).join('')}</div>`;
    let chrome;
    if (app) {
      chrome = mk(S, 'hud', P4(16, 52, 358, 40), `<i class="orb" style="left:0;top:3px;width:30px;height:30px"></i><b class="rn" style="left:40px;top:0">Shallows</b><div class="xb" style="left:40px;top:25px;width:96px"><i></i></div><span class="xn" style="left:144px;top:19px">20 / 200 XP</span><div style="left:244px;top:4px">${chainH(3)}</div><span class="cn" style="left:244px;top:21px">3-day streak</span>`);
      const tr = mk(S, 'tray', P4(0, 0, W, H), `<svg width="${W}" height="${H}" style="position:absolute;left:0;top:0"><path d="M${NK[0][0]} ${NK[0][1]} Q${NK[1][0]} ${NK[1][1]} ${NK[2][0]} ${NK[2][1]}" stroke="rgba(124,245,200,.4)" stroke-width="1.5" fill="none"/></svg>`);
      for (let i = 0; i < NS; i++) { const s = slot(i); mk(tr, i < 3 ? 'pearl old' : 'slot', P4(s.x - PS / 2, s.y - PS / 2, PS, PS) + (i < 3 ? 'z-index:1;opacity:.85;' + pearlCss([C.cy, C.cy, C.mi][i], false) : '')); }
    } else {
      mk(S, 'dock', '', `<div style="left:14px;top:18px;width:52px;height:52px"><svg width="52" height="52" viewBox="0 0 52 52"><circle cx="26" cy="22" r="15" fill="rgba(74,227,240,.2)" stroke="#4AE3F0" stroke-width="1.5"/><path d="M14 30q4 14 6 18M22 34q1 10 3 14M30 34q-1 10 0 14M38 30q-4 14-6 18" stroke="#4AE3F0" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="20" cy="22" r="2.6" fill="#E6F7FF"/><circle cx="32" cy="22" r="2.6" fill="#E6F7FF"/></svg></div>${tools.map((x, i) => `<div class="dk k${i}" style="top:${100 + i * 74}px">${I(x[0], 22, 2)}<span>${x[1]}</span></div>`).join('')}<div class="lk" style="left:0;right:0;bottom:20px;flex-direction:column;justify-content:center;font-size:10px;color:var(--mu)">${I('lock', 18, 2)}On device</div>`);
      chrome = mk(S, 'panel gl', '', `<b class="fr" style="left:22px;top:18px;font-size:21px;font-family:Fraunces,Georgia,serif;font-weight:500">Dive log</b><span class="chip mi" style="right:18px;top:20px">${I('lock', 12, 2.4)}On device</span>
        <i class="orb" style="left:22px;top:72px;width:44px;height:44px"></i><b class="rn fr" style="left:78px;top:72px;font-size:23px;font-family:Fraunces,Georgia,serif;font-weight:500">Shallows</b><span class="xn" style="left:78px;top:100px;font-size:12px">20 / 200 XP</span><div class="xb" style="left:22px;right:22px;top:128px;height:6px"><i></i></div>
        <span class="t2" style="left:22px;top:156px;font-size:13px">Pearl necklace</span>`);
      const tr = mk(S, 'tray', P4(0, 0, W, H), `<svg width="${W}" height="${H}" style="position:absolute;left:0;top:0"><path d="M${NK[0][0]} ${NK[0][1]} Q${NK[1][0]} ${NK[1][1]} ${NK[2][0]} ${NK[2][1]}" stroke="rgba(124,245,200,.4)" stroke-width="1.5" fill="none"/></svg>`);
      for (let i = 0; i < NS; i++) { const s = slot(i); mk(tr, i < 3 ? 'pearl old' : 'slot', P4(s.x - PS / 2, s.y - PS / 2, PS, PS) + (i < 3 ? 'z-index:1;opacity:.85;' + pearlCss([C.cy, C.cy, C.mi][i], false) : '')); }
      PRL.forEach((p, i) => mk(chrome, 'row k-r' + i, P4(14, 350 + i * 58, 300, 50), `<i style="background:${p.c};box-shadow:0 0 10px ${p.c}"></i><div><b>${p.n}</b><span>${p.d}</span></div><em>+${p.xp}</em>`));
      mk(chrome, 't2', 'left:22px;top:332px;font-size:13px', 'Today');
      mk(chrome, 't2 empt', 'left:22px;top:362px;right:30px;font-size:13px', 'Finish a job and Lumi drops a pearl here.');
      mk(chrome, 'cs', 'left:22px;top:600px;right:22px;height:110px;position:absolute', `<span class="t2" style="position:absolute;left:0;top:0;font-size:13px"><b class="dst2" style="color:var(--tx)">3-day streak</b></span><div style="position:absolute;left:0;top:26px">${chainH(3, 14)}</div><span class="t2" style="position:absolute;left:0;top:56px;font-size:13px">Daily dive</span><b class="dv" style="position:absolute;right:0;top:56px;color:var(--go);font-size:14px">0 / 4</b><div class="xb" style="position:absolute;left:0;right:0;top:82px;height:7px"><i class="dvb" style="background:linear-gradient(90deg,#FFD27A,#FFE9B0)"></i></div>`);
      chrome.querySelector('.cs').style.position = 'absolute';
    }
    const pearls = PRL.map((p, i) => mk(S, 'pearl', 'width:44px;height:44px;margin:-22px 0 0 -22px;' + pearlCss(p.c, true)));
    const rings = PRL.flatMap((p, i) => [0, 1].map(() => mk(S, 'rng', 'width:60px;height:60px;margin:-30px 0 0 -30px;border-color:' + p.c)));
    const xpf = PRL.map((p, i) => mk(S, 'xpf', '', `+${p.xp} XP`));
    const rareStar = null;
    const iris = [mk(S, 'irisr'), mk(S, 'irisr')], band = mk(S, 'bandw'), irisDefs = [
      { a: 8.45, d: 0.6, cx: u(73, 240), cy: u(271, 330) }, { a: 24.0, d: 0.6, ...(() => { const p = lumiPos(24.0); return { cx: p.x, cy: p.y }; })() }, { a: 36.0, d: 0.6, cx: u(195, 1100), cy: u(794, 272) },
    ];
    const wipeDefs = [{ a: 4.0, d: 0.55, dir: 'l' }, { a: 17.0, d: 0.6, dir: 'l' }, { a: 30.0, d: 0.55, dir: 'r' }];

    /* ======================================================================
       LUMI
       ====================================================================== */
    const eyeSVG = s => `<g class="ey" transform="translate(${s * 19.5} -9)"><g class="eo"><ellipse rx="12.8" ry="15.4" fill="#06182E"/><ellipse class="eb" rx="12.8" ry="15.4" fill="none" stroke="#4AE3F0" stroke-opacity=".75" stroke-width="1.4"/><g class="ei"><ellipse rx="9.8" ry="12.2" fill="url(#ir${uid})"/><ellipse class="pu" rx="4.9" ry="6.6" fill="#02101C"/><circle cx="-3.9" cy="-5.2" r="3.9" fill="#fff"/><circle cx="3.8" cy="4.8" r="1.9" fill="#fff" opacity=".85"/></g></g><path class="eh" d="M-10.5 4.5Q0 -10 10.5 4.5" stroke="#E6F7FF" stroke-width="3.6" fill="none" stroke-linecap="round" opacity="0"/></g>`;
    const BELL = 'M-52 22C-54 -30 -32 -58 0 -58C32 -58 54 -30 52 22C46 30 38 26 30 34C22 28 14 36 0 32C-14 36 -22 28 -30 34C-38 26 -46 30 -52 22Z';
    const TN = [-40, -24, -8, 8, 24, 40].map((x, k) => ({ x, L: [88, 108, 96, 102, 112, 92][k], ph: k * 1.3 }));
    const AR = [-15, 0, 15].map((x, k) => ({ x, L: 60 + (k % 2) * 12, ph: k * 2.1 + 0.5 }));
    const lsvg = `<svg width="260" height="400" viewBox="-130 -130 260 400">
<defs>
<radialGradient id="ha${uid}"><stop class="g1" offset="0" stop-color="#4AE3F0" stop-opacity=".5"/><stop class="g1" offset=".55" stop-color="#4AE3F0" stop-opacity=".13"/><stop class="g1" offset="1" stop-color="#4AE3F0" stop-opacity="0"/></radialGradient>
<radialGradient id="bd${uid}" cx=".5" cy=".28" r=".85"><stop offset="0" stop-color="#F2FCFF" stop-opacity=".66"/><stop class="g1" offset=".45" stop-color="#4AE3F0" stop-opacity=".36"/><stop class="g2" offset="1" stop-color="#8A7BFF" stop-opacity=".3"/></radialGradient>
<radialGradient id="in${uid}"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop class="g1" offset=".35" stop-color="#4AE3F0" stop-opacity=".7"/><stop class="g1" offset="1" stop-color="#4AE3F0" stop-opacity="0"/></radialGradient>
<radialGradient id="ir${uid}" cx=".5" cy=".55" r=".62"><stop class="g1" offset="0" stop-color="#4AE3F0"/><stop class="g3" offset="1" stop-color="#0C4A66"/></radialGradient>
<linearGradient id="sk${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset=".4" stop-color="#8A7BFF" stop-opacity="0"/><stop class="g2" offset="1" stop-color="#8A7BFF" stop-opacity=".6"/></linearGradient>
</defs>
<ellipse class="halo" cx="0" cy="-4" rx="125" ry="118" fill="url(#ha${uid})"/>
<g class="tn">${TN.map(() => '<path class="tw" fill="none" stroke-width="5.5" stroke-linecap="round" stroke-opacity=".16"/><path class="tt" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-opacity=".85"/><circle class="tp" r="2.6" fill="#fff"/>').join('')}</g>
<g class="ar">${AR.map(() => '<path class="aw" fill="none" stroke-width="9" stroke-linecap="round" stroke-opacity=".3"/><path class="at" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-opacity=".5"/>').join('')}</g>
<g class="bell">
<path d="${BELL}" fill="url(#bd${uid})" class="bs" stroke="#4AE3F0" stroke-opacity=".55" stroke-width="1.4"/>
<path d="${BELL}" fill="url(#sk${uid})"/>
<g class="can" stroke="#E6F7FF" stroke-opacity=".16" stroke-width="1" fill="none"><path d="M0 -48Q-20 -30 -40 20M0 -48Q-10 -26 -22 26M0 -48Q0 -20 0 26M0 -48Q10 -26 22 26M0 -48Q20 -30 40 20"/></g>
<ellipse class="bulb" cx="0" cy="-18" rx="34" ry="27" fill="url(#in${uid})"/>
<g class="org"><circle cx="-7" cy="-45" r="5.4" fill="url(#in${uid})" stroke="#4AE3F0" stroke-opacity=".7"/><circle cx="7" cy="-45" r="5.4" fill="url(#in${uid})" stroke="#4AE3F0" stroke-opacity=".7"/><circle cx="-7" cy="-34" r="5.4" fill="url(#in${uid})" stroke="#4AE3F0" stroke-opacity=".7"/><circle cx="7" cy="-34" r="5.4" fill="url(#in${uid})" stroke="#4AE3F0" stroke-opacity=".7"/></g>
<g class="swl"><ellipse cx="0" cy="-16" rx="45" ry="35" fill="none" stroke="#E6F7FF" stroke-opacity=".18" stroke-width="1.2"/>${Array.from({ length: 16 }, () => '<circle fill="#fff"/>').join('')}</g>
<g class="face"><ellipse class="bl" cx="-35" cy="9" rx="9" ry="5" fill="#FFB48A"/><ellipse class="bl" cx="35" cy="9" rx="9" ry="5" fill="#FFB48A"/>${eyeSVG(-1)}${eyeSVG(1)}
<g transform="translate(0 18)"><path class="m-smile" d="M-6.5 0Q0 6.5 6.5 0" stroke="#E6F7FF" stroke-width="2.2" fill="none" stroke-linecap="round"/><path class="m-grin" d="M-8 -1Q0 12 8 -1Z" fill="#02101C" stroke="#E6F7FF" stroke-width="1.6" stroke-linejoin="round"/><ellipse class="m-o" rx="3.4" ry="4.4" fill="#02101C" stroke="#E6F7FF" stroke-width="1.5"/><path class="m-flat" d="M-5 1.5Q0 3.2 5 1.5" stroke="#E6F7FF" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse class="m-z" cy="2" rx="2.6" ry="1.9" fill="#02101C" stroke="#E6F7FF" stroke-width="1.3"/></g></g>
<path d="M-48 8C-52 -26 -34 -53 -4 -56" stroke="#fff" stroke-opacity=".7" stroke-width="2.4" fill="none" stroke-linecap="round"/><path class="rl2" d="M16 -55C34 -50 48 -30 50 -8" stroke="#4AE3F0" stroke-opacity=".55" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="-24" cy="-38" rx="11" ry="5" transform="rotate(-38 -24 -38)" fill="#fff" fill-opacity=".36"/>
</g>
<g class="zz" fill="#E6F7FF" font-family="Outfit,sans-serif" font-weight="600"><text class="z1" x="44" y="-58" font-size="15">z</text><text class="z2" x="58" y="-76" font-size="20">Z</text></g>
</svg><div class="hit"></div>`;
    const lumi = mk(S, 'lumi', '', lsvg);
    const L = {
      g1: [...lumi.querySelectorAll('.g1')], g2: [...lumi.querySelectorAll('.g2')], g3: [...lumi.querySelectorAll('.g3')], halo: lumi.querySelector('.halo'),
      tw: [...lumi.querySelectorAll('.tw')], tt: [...lumi.querySelectorAll('.tt')], tp: [...lumi.querySelectorAll('.tp')], aw: [...lumi.querySelectorAll('.aw')], at: [...lumi.querySelectorAll('.at')],
      bell: lumi.querySelector('.bell'), bs: lumi.querySelector('.bs'), bulb: lumi.querySelector('.bulb'), org: lumi.querySelector('.org'), swl: [...lumi.querySelectorAll('.swl circle')], swg: lumi.querySelector('.swl'),
      face: lumi.querySelector('.face'), bl: [...lumi.querySelectorAll('.bl')], eo: [...lumi.querySelectorAll('.eo')], ei: [...lumi.querySelectorAll('.ei')], eh: [...lumi.querySelectorAll('.eh')], pu: [...lumi.querySelectorAll('.pu')], eb: [...lumi.querySelectorAll('.eb')],
      ms: lumi.querySelector('.m-smile'), mg: lumi.querySelector('.m-grin'), mo: lumi.querySelector('.m-o'), mf: lumi.querySelector('.m-flat'), mz: lumi.querySelector('.m-z'), zz: lumi.querySelector('.zz'), z1: lumi.querySelector('.z1'), z2: lumi.querySelector('.z2'), rl2: lumi.querySelector('.rl2'), can: lumi.querySelector('.can'),
    };
    const MO = {
      calm: { c: C.cy, c2: C.vi, open: 1, happy: 0, pup: 1, bl: 0.3, puff: 0, tilt: 0, sw: 0, dim: 0, m: { smile: 1 } },
      happy: { c: C.go, c2: C.mi, open: 1, happy: 1, pup: 1, bl: 0.95, puff: 0.2, tilt: 0, sw: 0, dim: 0, m: { grin: 1 } },
      curious: { c: C.mi, c2: C.cy, open: 1.08, happy: 0, pup: 1.2, bl: 0.3, puff: 0, tilt: -8, sw: 0, dim: 0, m: { o: 0.85 } },
      surprised: { c: '#B6F6FF', c2: C.cy, open: 1.16, happy: 0, pup: 0.6, bl: 0.1, puff: 1, tilt: 0, sw: 0, dim: 0, m: { o: 1 } },
      working: { c: C.cy, c2: C.vi, open: 0.74, happy: 0, pup: 1, bl: 0.15, puff: 0, tilt: 0, sw: 1, dim: 0, m: { flat: 1 } },
      proud: { c: C.go, c2: '#FFE7B0', open: 0.5, happy: 0.9, pup: 1, bl: 1, puff: 0.35, tilt: 5, sw: 0, dim: 0, m: { smile: 1 } },
      guard: { c: C.vi, c2: C.cy, open: 0.9, happy: 0.35, pup: 1, bl: 0.5, puff: 0.4, tilt: 0, sw: 0, dim: 0, m: { smile: 1 } },
      sleepy: { c: '#7A6BE8', c2: C.cy, open: 0.3, happy: 0, pup: 0.9, bl: 0.3, puff: -0.5, tilt: 6, sw: 0, dim: 0.55, m: { z: 1 } },
    };
    const MT = [[0, 'sleepy'], [1.25, 'surprised'], [1.85, 'happy'], [3.3, 'calm'], [4.1, 'curious'], [6.2, 'surprised'], [6.6, 'happy'], [8.7, 'calm'], [10.1, 'working'], [14.35, 'proud'], [17.1, 'calm'], [18.0, 'happy'], [19.7, 'calm'], [20.6, 'curious'], [22.8, 'working'], [23.7, 'happy'],
      [24.3, 'curious'], [25.1, 'surprised'], [25.6, 'curious'], [27.05, 'working'], [28.7, 'guard'], [30.0, 'calm'], [30.25, 'curious'], [31.0, 'calm'], [33.0, 'working'], [35.2, 'proud'], [39.3, 'happy']];
    const mixM = (a, b, k) => {
      const o = { c: mix(a.c, b.c, k), c2: mix(a.c2, b.c2, k), m: {} };
      ['open', 'happy', 'pup', 'bl', 'puff', 'tilt', 'sw', 'dim'].forEach(n => { o[n] = lerp(a[n], b[n], k); });
      ['smile', 'grin', 'o', 'flat', 'z'].forEach(n => { o.m[n] = lerp(a.m[n] || 0, b.m[n] || 0, k); });
      return o;
    };
    const moodAt = t => { let i = 0; while (i < MT.length - 1 && t >= MT[i + 1][0]) i++; const cur = MO[MT[i][1]], prev = MO[MT[Math.max(0, i - 1)][1]]; return mixM(prev, cur, E.inOut(seg(t, MT[i][0], MT[i][0] + 0.4))); };
    const WINKS = [[2.0, 2.35, 1], [18.1, 18.6, 1], [19.3, 19.8, 1], [34.9, 35.2, 1]];
    const path = pts => { let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`; for (let j = 1; j < pts.length - 1; j++) d += `Q${pts[j][0].toFixed(1)} ${pts[j][1].toFixed(1)} ${((pts[j][0] + pts[j + 1][0]) / 2).toFixed(1)} ${((pts[j][1] + pts[j + 1][1]) / 2).toFixed(1)}`; const l = pts[pts.length - 1]; return d + `L${l[0].toFixed(1)} ${l[1].toFixed(1)}`; };
    const NSEG = 9;
    const swirlAng = t => { for (const p of PROC) if (t >= p.a - 0.2 && t <= p.b + 0.3) { const d = t - p.a, pp = seg(t, p.a, p.b); return d * 2.2 + 11 * pp * d; } return t * 0.9; };
    const swirlBase = t => { let s = 0; for (const p of PROC) { const d = clamp(t - p.a, 0, p.b - p.a), pp = seg(t, p.a, p.b); s += d * 2.2 + 11 * Math.min(1, pp) * d; } return s + t * 0.9; };
    let menuOpen = 0, menuPart = 0;
    function drawLumi(t) {
      const P = lumiPos(t), mo = moodAt(t), lf = A.life(t, 11);
      const pt = A.pointerAt(t);
      /* colours */
      const c = mo.c, c2 = mo.c2, dark = mix(c, '#04101F', 0.62);
      L.g1.forEach(e => attr(e, 'stop-color', c)); L.g2.forEach(e => attr(e, 'stop-color', c2)); L.g3.forEach(e => attr(e, 'stop-color', dark));
      L.tt.forEach(e => attr(e, 'stroke', c)); L.tw.forEach(e => attr(e, 'stroke', c)); L.aw.forEach(e => attr(e, 'stroke', c2)); L.bs.setAttribute('stroke', c); L.rl2.setAttribute('stroke', c);
      L.eb.forEach(e => attr(e, 'stroke', c));
      const beat = Math.sin(t * 2.6), dimK = 1 - mo.dim;
      /* tentacles with trailing physics */
      const hist = []; for (let j = 0; j <= NSEG; j++) { const qq = lumiPos(t - j * 0.055); hist.push({ dx: clamp((qq.x - P.x) / P.s, -70, 70), dy: clamp((qq.y - P.y) / P.s, -50, 50) }); }
      const part = menuPart, puls = beat * 0.5 + 0.5;
      TN.forEach((T, k) => {
        const pts = [];
        for (let j = 0; j <= NSEG; j++) {
          const f = j / NSEG, sw = Math.sin(t * 1.9 - j * 0.62 + T.ph) * (1.5 + 11 * Math.pow(f, 1.3)), h = hist[j];
          const px = T.x * (1 + 0.14 * f * puls) + sw + h.dx * f * 1.15 + Math.sign(T.x) * part * 46 * f;
          const py = 28 + f * T.L * (1 - 0.07 * puls * f) + h.dy * f * 0.85 - Math.abs(part) * 8 * f;
          pts.push([px, py]);
        }
        const d = path(pts); attr(L.tw[k], 'd', d); attr(L.tt[k], 'd', d);
        const e = pts[NSEG]; attr(L.tp[k], 'cx', e[0].toFixed(1)); attr(L.tp[k], 'cy', e[1].toFixed(1)); attr(L.tp[k], 'fill', c);
        L.tp[k].setAttribute('opacity', (0.55 + 0.45 * Math.sin(t * 3 + k)).toFixed(2));
      });
      AR.forEach((T, k) => {
        const pts = [];
        for (let j = 0; j <= 6; j++) { const f = j / 6, sw = Math.sin(t * 1.5 - j * 0.8 + T.ph) * (3 + 13 * f); pts.push([T.x * 0.8 + sw + hist[j].dx * f * 0.9, 26 + f * T.L + hist[j].dy * f * 0.7 * 0.8]); }
        const d = path(pts); attr(L.aw[k], 'd', d); attr(L.at[k], 'd', d);
      });
      /* bell pulse */
      const pu = Math.sin(t * 2.6), sx = 1 + 0.035 * pu + mo.puff * 0.05, sy = 1 - 0.05 * pu + mo.puff * 0.04;
      attr(L.bell, 'transform', `translate(0 -58) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(0 58)`);
      L.halo.style.opacity = ((0.72 + 0.22 * beat) * dimK * (1 + mo.sw * 0.3)).toFixed(3);
      L.bulb.style.opacity = ((0.55 + 0.3 * Math.sin(t * 3.2)) * dimK + mo.sw * 0.25).toFixed(3);
      /* organs pulse, swirl */
      attr(L.org, 'transform', `translate(0 -40) scale(${(1 + 0.12 * Math.sin(t * 5.2)).toFixed(3)}) translate(0 40)`);
      const sw = mo.sw;
      L.swg.style.display = sw > 0.02 ? '' : 'none';
      if (sw > 0.02) {
        const ang = swirlBase(t);
        for (let i = 0; i < 16; i++) {
          const cm = i >> 3, k = i & 7, a = ang * (cm ? -1.2 : 1) + cm * 3.1 - k * 0.22, rx = 45 - cm * 7, ry = 35 - cm * 6;
          const e = L.swl[i]; attr(e, 'cx', (Math.cos(a) * rx).toFixed(1)); attr(e, 'cy', (-16 + Math.sin(a) * ry).toFixed(1));
          attr(e, 'r', (6.4 - k * 0.7).toFixed(2)); e.setAttribute('opacity', ((1 - k / 8) * 0.9 * sw).toFixed(2)); attr(e, 'fill', cm ? c2 : '#fff');
        }
      }
      /* face */
      const w = clamp(pt.vis * 1.7, 0, 1), dx = pt.x - P.x, dy = pt.y - P.y, dist = Math.hypot(dx, dy) || 1, mag = Math.min(1, dist / 150);
      const lx = (dx / dist) * mag * 4.8 * w + lf.look * 2.4 * (1 - w), ly = (dy / dist) * mag * 3.8 * w + Math.sin(t * 0.43) * 0.9 * (1 - w);
      attr(L.face, 'transform', `translate(${(lx * 0.5).toFixed(2)} ${(ly * 0.45).toFixed(2)})`);
      let wk = 0; WINKS.forEach(([a, b]) => { if (t > a && t < b) wk = Math.sin(Math.PI * seg(t, a, b)); });
      const bl = lf.blink * (mo.dim > 0.2 ? 0.4 : 1);
      L.eo.forEach((e, i) => { const wink = i === 1 ? wk : 0, op = clamp(mo.open * (1 - bl) * (1 - wink), 0.06, 1.2) * (1 - mo.happy * 0.9); attr(e, 'transform', `scale(1 ${Math.max(0.05, op).toFixed(3)})`); e.style.opacity = (1 - Math.min(1, mo.happy * 1.2)).toFixed(2); });
      L.eh.forEach((e, i) => { const wink = i === 1 ? wk : 0; e.style.opacity = clamp(mo.happy * 1.1 + wink, 0, 1).toFixed(2); });
      L.ei.forEach(e => attr(e, 'transform', `translate(${lx.toFixed(2)} ${ly.toFixed(2)})`));
      L.pu.forEach(e => attr(e, 'transform', `scale(${mo.pup.toFixed(2)})`));
      L.bl.forEach(e => { e.style.opacity = clamp(mo.bl, 0, 1).toFixed(2); });
      L.ms.style.opacity = mo.m.smile.toFixed(2); L.mg.style.opacity = mo.m.grin.toFixed(2); L.mo.style.opacity = mo.m.o.toFixed(2); L.mf.style.opacity = mo.m.flat.toFixed(2); L.mz.style.opacity = mo.m.z.toFixed(2);
      attr(L.mo, 'transform', `scale(${(0.8 + 0.4 * mo.puff).toFixed(2)})`);
      L.zz.style.opacity = clamp(mo.m.z, 0, 1).toFixed(2);
      attr(L.z1, 'transform', `translate(${(Math.sin(t * 1.3) * 2).toFixed(1)} ${(-((t * 8) % 14)).toFixed(1)})`); attr(L.z2, 'transform', `translate(${(Math.sin(t * 1.1 + 1) * 2).toFixed(1)} ${(-((t * 8 + 7) % 14)).toFixed(1)})`);
      A.set(lumi, { x: P.x - 130, y: P.y - 130, s: P.s, r: mo.tilt + Math.sin(t * 0.8) * 1.5 + clamp(hist[2].dx * 0.12, -5, 5), o: 1 });
      lumi._P = P;
    }

    /* ======================================================================
       SPEECH BUBBLE (Lumi's suggestions), QUICK MENU
       ====================================================================== */
    const say = mk(S, 'say', '', '<i class="tail"></i><span class="tx"></span><u></u>');
    const sTx = say.querySelector('.tx'), sU = say.querySelector('u'), sTail = say.querySelector('.tail');
    const SAYS = app ? [
      [1.9, 'Hi, I am Lumi.', 95, 116, 200, 'b', 100], [3.0, 'Tap me any time.', 95, 116, 200, 'b', 100], [4.0, null],
      [4.7, 'Pick a photo. I will help.', 16, 152, 246, 'r', 18], [6.5, 'Great pick!', 16, 152, 130, 'r', 18], [8.5, null],
      [14.55, 'Light and still sharp!', 85, 326, 220, 'b', 110], [16.4, null],
      [17.3, 'Tap me for tools.', 100, 462, 190, 'b', 95], [17.95, null],
      [24.4, 'This photo knows where it was taken. Check?', 30, 392, 330, 'b', 165, 'Check'], [25.1, null],
      [28.85, 'Safe to share!', 100, 560, 190, 'b', 95], [29.9, null],
      [30.15, 'Make a GIF from beach-trip.mp4?', 30, 392, 330, 'b', 165, 'Make GIF'], [31.0, null],
      [35.45, 'Four pearls today!', 100, 560, 190, 'b', 95], [36.0, null],
    ] : [
      [1.9, 'Hi, I am Lumi.', 540, 128, 200, 'b', 100], [3.0, 'Tap me any time.', 646, 214, 200, 'b', 100], [4.0, null],
      [4.7, 'Drop a photo on the ocean.', 650, 134, 250, 'b', 110], [6.95, 'Got it! What a nice shot.', 650, 134, 250, 'b', 110], [8.5, null],
      [14.55, 'Light and still sharp!', 650, 458, 220, 'b', 110], [16.4, null],
      [17.3, 'Click me for tools.', 590, 318, 200, 'b', 100], [17.95, null],
      [24.4, 'This photo knows where it was taken. Check?', 500, 220, 330, 'b', 200, 'Check'], [25.1, null],
      [28.85, 'Safe to share!', 590, 540, 190, 'b', 100], [29.9, null],
      [30.15, 'Make a GIF from beach-trip.mp4?', 500, 220, 330, 'b', 200, 'Make GIF'], [31.0, null],
      [35.45, 'Four pearls today!', 590, 540, 200, 'b', 100], [36.0, null],
    ];
    const MENU = [['shrink', 'Shrink', C.cy], ['crop', 'Crop', C.mi], ['pin', 'Place', C.vi], ['film', 'GIF', C.go], ['convert', 'Convert', '#9FE8FF']];
    const qbs = MENU.map((m, i) => mk(S, 'qb k-q' + i, `width:${u(68, 80)}px;height:${u(68, 80)}px;--qc:${m[2]};--qg:${A.hexA(m[2], 0.45)}`, `${I(m[0], u(22, 26), 2)}<span>${m[1]}</span>${app ? '' : `<kbd>${i + 1}</kbd>`}`));
    const MR = u(128, 172), MA = [-158, -124, -90, -56, -22];
    const MENU_T = { open: 18.0, pick: 19.25, close: 19.3 };

    /* ======================================================================
       BACKGROUND LIGHT CANVAS: shafts, caustics, plankton, bubbles, converging streams
       ====================================================================== */
    const fxc = A.el('canvas', 'fxc', S); fxc.width = W; fxc.height = H; fxc.style.width = W + 'px'; fxc.style.height = H + 'px';
    const g = fxc.getContext('2d');
    const rr = A.rng(5);
    const PLK = Array.from({ length: app ? 44 : 84 }, () => ({ x: rr(), y: rr(), s: 0.4 + rr() * 0.9, ph: rr() * 6.28, r: 0.8 + rr() * 1.6, c: [C.cy, C.mi, C.vi][Math.floor(rr() * 3)] }));
    const CAU = Array.from({ length: app ? 9 : 15 }, () => ({ x: rr(), y: rr() * 0.5, r: 36 + rr() * 60, ph: rr() * 6.28, sp: 0.25 + rr() * 0.3 }));
    const BUB = Array.from({ length: 8 }, (_, i) => ({ o: i / 8, sp: 0.1 + rr() * 0.08, ph: rr() * 6.28, r: 2 + rr() * 3.5, dx: (rr() - 0.5) * 60 }));
    const CON = Array.from({ length: 46 }, () => ({ a: rr() * 6.28, d: 0.75 + rr() * 0.45, sp: 0.5 + rr() * 0.6, off: rr(), c: [C.cy, C.mi, C.vi, '#fff'][Math.floor(rr() * 4)] }));
    const boostAt = t => { let b = 0; wipeDefs.forEach(w => { b = Math.max(b, Math.sin(Math.PI * seg(t, w.a, w.a + w.d + 0.3))); }); irisDefs.forEach(w => { b = Math.max(b, Math.sin(Math.PI * seg(t, w.a, w.a + w.d + 0.3))); }); return b; };
    function drawFx(t) {
      g.clearRect(0, 0, W, H);
      const bo = boostAt(t), main = app ? W : W - 0;
      /* light shafts */
      for (let i = 0; i < 5; i++) {
        const x0 = W * (0.06 + 0.22 * i) + Math.sin(t * 0.17 + i * 2) * 40, w0 = (app ? 60 : 110) + 26 * Math.sin(t * 0.3 + i), sk = 120 + 30 * Math.sin(t * 0.11 + i);
        const gr = g.createLinearGradient(0, 0, 0, H * 0.85); gr.addColorStop(0, `rgba(124,245,200,${(0.07 + 0.06 * bo).toFixed(3)})`); gr.addColorStop(1, 'rgba(74,227,240,0)');
        g.fillStyle = gr; g.beginPath(); g.moveTo(x0, 0); g.lineTo(x0 + w0, 0); g.lineTo(x0 + w0 + sk, H * 0.85); g.lineTo(x0 + sk * 0.7, H * 0.85); g.closePath(); g.fill();
      }
      /* caustics */
      CAU.forEach(k => {
        const x = (k.x * W + Math.sin(t * k.sp + k.ph) * 40 + W) % W, y = k.y * H * 0.8 + Math.cos(t * k.sp * 1.3 + k.ph) * 30, r = k.r * (1 + 0.25 * Math.sin(t * 0.9 + k.ph));
        const gr = g.createRadialGradient(x, y, 0, x, y, r); const a = 0.05 + 0.1 * bo + 0.025 * Math.sin(t * 1.1 + k.ph);
        gr.addColorStop(0, `rgba(124,245,200,${a.toFixed(3)})`); gr.addColorStop(1, 'rgba(124,245,200,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
      });
      /* plankton */
      PLK.forEach(p => {
        const x = (p.x * W + Math.sin(t * 0.25 * p.s + p.ph) * 24 + W) % W, y = ((p.y * H - t * 6 * p.s) % H + H) % H, a = 0.25 + 0.4 * (0.5 + 0.5 * Math.sin(t * 1.6 * p.s + p.ph));
        g.globalAlpha = a; g.fillStyle = p.c; g.beginPath(); g.arc(x, y, p.r, 0, 6.283); g.fill();
      });
      g.globalAlpha = 1;
      /* drifting bubbles around Lumi */
      const lp = lumiPos(t);
      BUB.forEach(b => {
        const uu = (t * b.sp + b.o) % 1, x = lp.x + b.dx * lp.s + Math.sin(t * 0.9 + b.ph) * 10, y = lp.y - 50 * lp.s - uu * 150 * lp.s;
        g.globalAlpha = Math.sin(Math.PI * uu) * 0.8; g.strokeStyle = '#E6F7FF'; g.lineWidth = 1.2; g.beginPath(); g.arc(x, y, b.r * lp.s, 0, 6.283); g.stroke();
        g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(x - b.r * 0.3 * lp.s, y - b.r * 0.3 * lp.s, Math.max(0.6, b.r * 0.22), 0, 6.283); g.fill();
      });
      g.globalAlpha = 1;
      /* plankton streams converge into the bar head */
      PROC.forEach(p => {
        if (t < p.a - 0.2 || t > p.b + 0.4) return;
        const pr = seg(t, p.a, p.b), st = Math.min(seg(t, p.a - 0.2, p.a + 0.3), 1 - seg(t, p.b, p.b + 0.4));
        const tx = (p.kind === 'orbit' || p.kind === 'warp') ? p.cx : p.cx - p.bw / 2 + 4 + A.rush(pr) * (p.bw - 8), ty = p.cy;
        const n = Math.round(CON.length * (0.55 + 0.45 * pr)), R = Math.min(W, H) * (p.b - p.a < 1 ? 0.35 : 0.6);
        g.lineCap = 'round';
        for (let i = 0; i < n; i++) {
          const c = CON[i], uu = (t * c.sp * 0.9 + c.off) % 1, e = uu * uu * (3 - 2 * uu);
          const sx = p.cx + Math.cos(c.a) * R * c.d * (app ? 0.75 : 1.2), sy = p.cy + Math.sin(c.a) * R * c.d * 0.9;
          const bend = Math.sin(uu * 3.14159) * 38 * (i % 2 ? 1 : -1);
          const x = lerp(sx, tx, e) + Math.sin(c.a) * bend, y = lerp(sy, ty, e) - Math.cos(c.a) * bend;
          const e0 = Math.max(0, uu - 0.07) , ee = e0 * e0 * (3 - 2 * e0), xo = lerp(sx, tx, ee) + Math.sin(c.a) * Math.sin(e0 * 3.14159) * 38 * (i % 2 ? 1 : -1), yo = lerp(sy, ty, ee) - Math.cos(c.a) * Math.sin(e0 * 3.14159) * 38 * (i % 2 ? 1 : -1);
          g.globalAlpha = Math.sin(Math.PI * uu) * 0.85 * st; g.strokeStyle = c.c; g.lineWidth = 1.2 + (1 - uu) * 1.6;
          g.beginPath(); g.moveTo(xo, yo); g.lineTo(x, y); g.stroke();
        }
        g.globalAlpha = 1;
      });
    }

    /* ======================================================================
       POINTER STORY
       ====================================================================== */
    const hitSel = '.lumi .hit';
    const KEYS = app ? [
      { t: 3.75, at: '.k-pick', tap: true }, { t: 6.2, at: '.k-g0', tap: true }, { t: 10.0, at: '.k-o1', tap: true }, { t: 15.7, at: '.k-save', tap: true },
      { t: 18.0, at: hitSel, tap: true }, { t: 19.25, at: '.k-q1', tap: true }, { t: 20.5, at: '.k-c0', tap: true },
      { t: 21.3, at: '.k-img', hold: 0.15, dy: 40 }, { t: 22.4, at: '.k-img', drag: true, move: 1.0, dy: 40 }, { t: 22.9, at: '.k-done', tap: true },
      { t: 25.0, at: '.say', tap: true }, { t: 27.0, at: '.k-rm', tap: true },
      { t: 30.9, at: '.say', tap: true }, { t: 31.5, at: '.k-hR', hold: 0.1 }, { t: 32.4, at: '.k-hR', drag: true, move: 0.9 }, { t: 33.0, at: '.k-mk', tap: true },
      { t: 38.2, at: '.k-all', tap: true },
    ] : [
      { t: 5.75, at: { x: 1150, y: 640 }, hold: 0.2 }, { t: 6.8, at: '.k-dz', drag: true, move: 1.0 }, { t: 10.0, at: '.k-o1', tap: true }, { t: 15.7, at: '.k-save', tap: true },
      { t: 18.0, at: hitSel, tap: true }, { t: 19.25, at: '.k-q1', tap: true }, { t: 20.5, at: '.k-c0', tap: true },
      { t: 21.4, at: '.k-img', hold: 0.15 }, { t: 22.4, at: '.k-img', drag: true, move: 1.0, dx: -90 }, { t: 22.9, at: '.k-done', tap: true },
      { t: 25.0, at: '.say', tap: true }, { t: 27.0, at: '.k-rm', tap: true },
      { t: 30.9, at: '.say', tap: true }, { t: 31.5, at: '.k-hR', hold: 0.1 }, { t: 32.4, at: '.k-hR', drag: true, move: 0.9 }, { t: 33.0, at: '.k-mk', tap: true },
      { t: 38.2, at: '.k-all', tap: true },
    ];
    A.pointer(KEYS);
    const TAPS = KEYS.filter(k => k.tap), tapRings = TAPS.map(() => mk(S, 'tapr'));
    const nTaps = TAPS.length - 1;

    /* ======================================================================
       EFFECTS: completion bursts
       ====================================================================== */
    const wl = lumiPos(1.3), wake = { t0: 1.25, bub: A.confetti(S, { x: wl.x, y: wl.y - 40, count: app ? 18 : 26, shape: 'ring', colors: [C.cy, C.mi, '#E6F7FF'], power: 420, spread: Math.PI * 1.1, gravity: -220, dur: 1.8, seed: 7 }), spk: A.confetti(S, { x: wl.x, y: wl.y - 20, count: 12, shape: 'spark', colors: [C.cy, '#fff'], power: 380, spread: Math.PI * 2, gravity: 160, dur: 1.0, seed: 8 }) };
    const bursts = PT.map((tt, i) => {
      const o = lumiPos(tt), c = PRL[i].c, ox = o.x, oy = o.y - 10;
      return {
        t0: tt - 0.1,
        bub: A.confetti(S, { x: ox, y: oy, count: app ? 22 : 30, shape: 'ring', colors: [C.cy, C.mi, '#E6F7FF'], power: 380, spread: Math.PI * 0.9, gravity: -240, dur: 1.9, seed: 20 + i }),
        pet: A.confetti(S, { x: ox, y: oy, count: app ? 20 : 26, shape: 'petal', colors: [c, '#fff', C.go], power: 300, spread: Math.PI * 2, gravity: 140, dur: 1.5, seed: 40 + i }),
        spk: A.confetti(S, { x: ox, y: oy, count: 14, shape: 'spark', colors: [c, '#fff'], power: 460, spread: Math.PI * 2, gravity: 200, dur: 1.1, seed: 60 + i }),
      };
    });

    /* ======================================================================
       UPDATE
       ====================================================================== */
    const showPg = (e, t, a, b, kind, d, o, kOut, dOut) => {
      if (t < a || t >= b) { e.style.visibility = 'hidden'; e.style.opacity = '0'; return; }
      if (kOut && t > b - dOut) { A.reveal(e, kOut, 1 - seg(t, b - dOut, b)); return; }
      A.reveal(e, kind, seg(t, a, a + d), o);
    };
    const grp = (e, o, y = 0, s = 1) => { A.set(e, { x: 0, y, s, o }); };
    const E_ = e => q(e);
    const R = {
      home: { ph: qa('.home .tl'), btn: q('.k-pick') }, pick: { th: qa('.pick .thm'), g0: q('.k-g0'), ck: q('.k-g0 .ck'), fc: q('.fc') || q('.fcw'), pb: q('.k-pb'), dz: q('.k-dz'), gh: q('.k-gh') },
      opts: qa('.pur .opt'), wb: q('.wb'), wph: q('.wb .ph'), wn: q('.work .wn'), st0: q('.st0'), pc0: q('.pc0'),
      rph: q('.k-rph'), save: q('.k-save'), t1: q('.k-t1'), img: q('.k-img'), cfr: q('.cfr'), done: q('.k-done'), mini: q('.mini'), st1: q('.st1'), t2: q('.k-t2'),
      pA: pA, pB: pB, cp: q('.k-cp'), map: q('.k-map'), pin: q('.k-map .mpin'), warn: q('.k-warn'), det: q('.k-det'), rm: q('.k-rm'), rml: q('.rml'), pl: q('.k-pl'), pov: q('.pov'), st2: q('.st2'), pc2: q('.pc2'), sh: q('.k-sh'), rare: q('.k-rare'),
      gA: gA, gB: gB, vb: q('.k-vb'), vid: q('.k-vid'), vbd: q('.k-vbd'), selw: q('.selw'), hL: q('.hL'), hR: q('.k-hR'), gv: q('.gv'), gs: q('.gs'), mk: q('.k-mk'), mkl: q('.mkl'), gpov: q('.gpov'), st3: q('.st3'), pc3: q('.pc3'), gi: q('.k-gi'),
      all: q('.k-all'), sal: q('.sal'), pbub: q('.k-pbub'), gph: q('.k-gbub .ph'), gbub: q('.k-gbub'), empt: q('.empt'),
    };
    const hintEls = [mk(S, 'hint'), mk(S, 'hint')];
    const SW = SG[2];
    const hq = t => E.inOut(seg(t, 31.62, 32.4));
    const MAXR = Math.sqrt((W * W + H * H) / 2) * 1.5;
    const dockI = qa('.dk'), rnS = qa('.rn'), xbS = qa('.xb:not(.dxb) i'), xnS = qa('.xn'), chains = qa('.hud .chain, .panel .chain, .done .chain'), allCd = qa('.cd');
    const trayPearls = qa('.tray .pearl');

    return {
      update(t) {
        /* ---------- page visibility and transitions ---------- */
        showPg(sp, t, 0, 2.75, 'fade', 0.01, null, 'fade', 0.55);
        showPg(home, t, 2.2, 4.6, 'fade', 0.5);
        showPg(pick, t, 4.0, 9.1, 'wipe', 0.55, { dir: 'l' });
        showPg(pur, t, 8.45, 10.5, 'iris', 0.6, { cx: irisDefs[0].cx, cy: irisDefs[0].cy }, 'zoom', 0.38);
        showPg(work, t, 10.12, 14.75, 'zoom', 0.38, null, 'zoom', 0.35);
        showPg(res, t, 14.4, 17.65, 'zoom', 0.35);
        showPg(ws, t, 17.0, 19.95, 'wipe', 0.6, { dir: 'l' }, 'zoom', 0.4);
        showPg(crp, t, 19.55, 21.3, 'zoom', 0.4, null, 'zoom', 0.4);
        showPg(ced, t, 20.9, 24.65, 'zoom', 0.4);
        showPg(prv, t, 24.0, 30.6, 'iris', 0.6, { cx: irisDefs[1].cx, cy: irisDefs[1].cy });
        showPg(gif, t, 30.0, 36.65, 'wipe', 0.55, { dir: 'r' });
        showPg(done, t, 36.0, 40.5, 'iris', 0.6, { cx: irisDefs[2].cx, cy: irisDefs[2].cy });
        /* iris rings (water drop) */
        let ir = null; irisDefs.forEach(d => { if (t >= d.a && t <= d.a + d.d + 0.5) ir = d; });
        iris.forEach((e, i) => {
          if (!ir) { e.style.display = 'none'; return; }
          const p = seg(t, ir.a - 0.0, ir.a + ir.d), r = E.inOut(p) * MAXR * (i ? 0.9 : 1) * (1 - i * 0.04) - i * 26, op = (1 - seg(t, ir.a + ir.d - 0.1, ir.a + ir.d + 0.45)) * (i ? 0.5 : 0.9);
          if (r < 4 || op <= 0.01) { e.style.display = 'none'; return; }
          e.style.display = ''; e.style.left = (ir.cx - r) + 'px'; e.style.top = (ir.cy - r) + 'px'; e.style.width = e.style.height = (2 * r) + 'px'; e.style.opacity = op.toFixed(2);
        });
        let wp = null; wipeDefs.forEach(d => { if (t >= d.a && t <= d.a + d.d + 0.15) wp = d; });
        if (wp) { const p = E.inOut(seg(t, wp.a, wp.a + wp.d)), ex = wp.dir === 'l' ? p * W : W - p * W; band.style.display = ''; band.style.left = (ex - 70) + 'px'; band.style.opacity = Math.sin(Math.PI * clamp(seg(t, wp.a, wp.a + wp.d + 0.1))).toFixed(2); } else band.style.display = 'none';

        /* ---------- splash and home ---------- */
        grp(sp.children[0], 14 * (1 - E.out(seg(t, 1.7, 2.4))), 0, 1); A.set(sp.children[0], { y: 14 * (1 - E.out(seg(t, 0.9, 1.6))), o: seg(t, 0.9, 1.5) });
        A.set(sp.children[1], { y: 10 * (1 - E.out(seg(t, 1.3, 1.9))), o: seg(t, 1.3, 1.8) });
        R.home.ph.forEach((e, i) => { const p = E.outBack(seg(t, 2.7 + i * 0.07, 3.2 + i * 0.07)); A.set(e, { y: (1 - p) * 20, o: seg(t, 2.7 + i * 0.07, 3.0 + i * 0.07) }); });
        A.press(R.home.btn, t, 3.75);
        /* intro pulse hint (once) */
        hintEls.forEach((e, k) => {
          const pp = seg(t, 3.0 + k * 0.5, 3.9 + k * 0.5), P = lumiPos(t);
          if (pp <= 0 || pp >= 1) { e.style.display = 'none'; return; }
          const r = (46 + 40 * E.out(pp)) * P.s; e.style.display = ''; e.style.left = (P.x - r) + 'px'; e.style.top = (P.y - 10 * P.s - r) + 'px'; e.style.width = e.style.height = (2 * r) + 'px'; e.style.opacity = ((1 - pp) * 0.85).toFixed(2);
        });

        /* ---------- pick ---------- */
        const sel = t >= 6.2;
        if (app) {
          R.pick.th.forEach((e, i) => A.cls(e, 'sel', i === 0 && sel));
          A.set(R.pick.ck, { s: E.outBack(seg(t, 6.2, 6.6)), o: sel ? 1 : 0 });
          A.set(R.pick.fc, { y: 14 * (1 - E.out(seg(t, 6.45, 6.95))), o: seg(t, 6.45, 6.8) });
        } else {
          const ga = seg(t, 5.7, 5.9) * (1 - seg(t, 6.85, 7.0)), pp = A.pointerAt(t);
          A.set(R.pick.gh, { x: pp.x - 40, y: pp.y - 30, r: -4, s: 1 - 0.15 * seg(t, 6.6, 6.85), o: ga });
          A.cls(R.pick.dz, 'hot', t > 6.1 && t < 6.9);
          R.pick.dz.style.boxShadow = t > 6.1 && t < 6.9 ? '0 0 40px rgba(124,245,200,.45), inset 0 0 40px rgba(124,245,200,.18)' : '';
          R.pick.dz.style.opacity = (1 - 0.8 * seg(t, 6.85, 7.2)).toFixed(2);
          const pb = E.outBack(seg(t, 6.85, 7.5)); A.set(R.pick.pb, { s: 0.3 + 0.7 * pb, y: Math.sin(t * 1.6) * 4, o: seg(t, 6.85, 7.05) });
          A.set(R.pick.fc, { y: 12 * (1 - E.out(seg(t, 7.2, 7.7))), o: seg(t, 7.2, 7.6) });
        }

        /* ---------- purpose / shrink work / result ---------- */
        R.opts.forEach((e, i) => { A.cls(e, 'on', i === 1 && t >= 10.0); });
        A.press(R.opts[1], t, 10.0);
        const wq = seg(t, PROC[0].a, PROC[0].b), wr = A.rush(wq);
        const pop = seg(t, 14.3, 14.5), lift = E.outBack(seg(t, 10.2, 10.9));
        A.set(R.wb, { sx: lift * (1 + 0.03 * Math.sin(t * 3.1)) * (1 + 0.25 * pop), sy: lift * (1 - 0.03 * Math.sin(t * 3.1)) * (1 + 0.25 * pop), y: Math.sin(t * 1.7) * 5 + (1 - E.out(seg(t, 10.2, 10.9))) * 18, o: (1 - pop) * seg(t, 10.2, 10.35) });
        A.set(R.wph, { s: 1 - 0.2 * wr });
        A.txt(R.wn, A.fmtBytes(lerp(D.portrait.bytes, D.shrink.bytes, wr)));
        A.txt(R.st0, wq < 0.28 ? 'Gathering light' : wq < 0.6 ? 'Smoothing pixels' : wq < 0.9 ? `Fitting under 200 KB` : 'Polishing the pearl');
        A.txt(R.pc0, Math.round(wr * 100) + '%');
        A.set(zones[0], { o: seg(t, 10.7, 11.0) * (1 - seg(t, 14.3, 14.5)) }); bars[0].update(wq, t);
        A.set(R.rph, { s: 0.85 + 0.15 * E.outBack(seg(t, 14.5, 15.1)), o: seg(t, 14.5, 14.7) });
        A.press(R.save, t, 15.7);
        const t1 = A.win(t, 15.85, 17.1, 0.25, 0.25); A.set(R.t1, { y: (1 - E.out(Math.min(1, t1))) * 16, o: t1 });

        /* ---------- crop ---------- */
        A.set(R.img, { x: (app ? -60 : -80) * E.inOut(seg(t, 21.35, 22.4)) });
        const fr = E.outBack(seg(t, 20.95, 21.5)); A.set(R.cfr, { s: 0.7 + 0.3 * fr, o: seg(t, 20.95, 21.2) });
        A.cls(qa('.crp .opt')[0], 'on', t >= 20.5);
        A.press(R.done, t, 22.9);
        const mq = seg(t, PROC[1].a, PROC[1].b), mini = A.win(t, 22.95, 23.75, 0.18, 0.12);
        A.set(R.mini, { s: 0.92 + 0.08 * Math.min(1, mini), o: mini }); bars[1].update(mq, t); A.set(zones[1], { o: 1 });
        const t2 = A.win(t, 23.75, 24.6, 0.18, 0.2); R.t2.parentNode && (R.t2.style.display = t2 > 0 ? '' : 'none'); A.set(R.t2, { y: (1 - E.out(Math.min(1, t2))) * 14, o: t2 });
        A.set(R.done, { o: 1 - seg(t, 22.95, 23.1) });

        /* ---------- privacy ---------- */
        const phB = seg(t, 25.0, 25.4);
        A.set(R.pA, { s: 1 - 0.1 * phB, o: (1 - phB) * seg(t, 24.15, 24.5) }); R.pA.style.pointerEvents = 'none';
        const pbA = pA.firstChild; A.set(pbA, { s: 0.95 + 0.05 * Math.sin(t * 2), y: Math.sin(t * 1.5) * 4 });
        A.set(R.pB, { y: 18 * (1 - E.out(phB)), o: phB });
        const found = seg(t, 25.45, 25.8), removed = seg(t, 28.7, 29.2), pinDrop = E.outBack(seg(t, 25.45, 26.0));
        A.set(R.pin, { y: -60 * (1 - pinDrop), s: 1 - 0.9 * removed, o: seg(t, 25.45, 25.6) * (1 - removed) });
        A.txt(R.pl, t < 25.6 ? 'Looking…' : `${D.place.city}, ${D.place.country}`);
        R.map.style.filter = `saturate(${1 - 0.8 * removed}) brightness(${1 - 0.35 * removed})`;
        const procOn = A.win(t, 27.05, 28.75, 0.2, 0.2);
        A.set(R.warn, { o: found * (1 - seg(t, 27.0, 27.2)) * (1 - 0) }); A.set(R.det, { o: found * (1 - seg(t, 27.0, 27.2)) });
        if (!app) { A.set(R.det.previousSibling && R.det, {}); }
        R.rm.style.opacity = (seg(t, 25.8, 26.1) * (1 - seg(t, 27.1, 27.25))).toFixed(2); R.rm.style.visibility = (t < 25.8 || t > 27.25) ? 'hidden' : 'visible';
        A.press(R.rm, t, 27.0);
        A.set(R.pov, { s: 0.94 + 0.06 * Math.min(1, procOn), o: procOn }); const pq = seg(t, PROC[2].a, PROC[2].b); bars[2].update(pq, t);
        A.txt(R.st2, pq < 0.35 ? 'Clearing location' : pq < 0.75 ? 'Wiping GPS tags' : 'Sealing the photo'); A.txt(R.pc2, Math.round(A.rush(pq) * 100) + '%');
        const shq = E.outBack(seg(t, 28.7, 29.25)), shO = Math.min(seg(t, 28.7, 28.85), 1 - seg(t, 29.6, 29.95));
        A.set(R.sh, { s: 0.3 + 0.7 * shq, o: shO });
        A.set(R.rare, { y: (1 - E.out(seg(t, 28.95, 29.4))) * 12, o: Math.min(seg(t, 28.95, 29.25), 1 - seg(t, 29.7, 30.0)) });

        /* ---------- gif ---------- */
        const phG = seg(t, 30.9, 31.3);
        A.set(R.gA, { s: 1 - 0.12 * phG, o: (1 - phG) * seg(t, 30.1, 30.4) });
        A.set(R.vb, { s: 0.95 + 0.05 * Math.sin(t * 2), y: Math.sin(t * 1.5) * 4 });
        A.set(R.gB, { y: 16 * (1 - E.out(phG)), o: phG * (app ? 1 : 1 - 0.99 * Math.min(1, A.win(t, 33.05, 35.3, 0.25, 0.2))) });
        if (app) { const hid = 1 - Math.min(1, A.win(t, 33.05, 35.3, 0.25, 0.2)); [q('.strip-w'), R.gi].forEach(e => A.set(e, { o: hid })); }
        const made = t >= 35.2, making = t > 33.0 && t < 35.2, gq = seg(t, PROC[3].a, PROC[3].b), hh = hq(t);
        R.vid.style.backgroundImage = A.frame(made ? Math.floor(t * 12) % 12 : Math.floor(t * 12) % 12);
        const Lp = 4 / 12, Rp = lerp(8, 7, hh) / 12;
        R.selw.style.left = (Lp * 100) + '%'; R.selw.style.width = ((Rp - Lp) * 100) + '%';
        A.txt(R.gv, made ? `${D.video.size} · ${D.video.fps} fps · ${D.video.frames} frames` : hh > 0.5 ? `From ${D.video.from} to ${D.video.to} · ${D.video.clip}` : 'From 0:04 to 0:08 · 4.0 s');
        A.txt(R.gs, made ? 'Plays on a loop' : 'Drag the gold handles to trim');
        A.txt(R.vbd, made ? `GIF · ${D.video.size} · loops` : `${D.video.file} · ${D.video.len}`);
        A.txt(R.mkl, made ? (t > 35.45 ? 'GIF saved' : 'Make GIF') : 'Make GIF');
        A.press(R.mk, t, 33.0);
        const gpo = A.win(t, 33.05, 35.3, 0.25, 0.2); A.set(R.gpov, { s: 0.94 + 0.06 * Math.min(1, gpo), o: gpo }); bars[3].update(gq, t);
        A.txt(R.st3, gq < 0.3 ? 'Collecting frames' : gq < 0.75 ? 'Stringing 36 frames' : 'Looping at 12 fps'); A.txt(R.pc3, `${Math.round(A.rush(gq) * D.video.frames)} of ${D.video.frames}`);
        A.set(R.mk, { o: making ? 0 : 1 }); R.gph.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        A.set(R.gbub, { y: Math.sin(t * 1.8) * 3 }); A.set(R.pbub, { y: Math.sin(t * 1.8) * 3 });
        R.gB.style.display = '';

        /* ---------- done ---------- */
        PRL.forEach((p, i) => {
          const a = 36.3 + i * 0.18, k = E.outBack(seg(t, a, a + 0.5));
          A.set(q('.bp' + i), { s: 0.2 + 0.8 * k, o: seg(t, a, a + 0.15) }); A.set(q('.bt' + i), { y: 8 * (1 - E.out(seg(t, a + 0.15, a + 0.5))), o: seg(t, a + 0.2, a + 0.5) });
        });
        const xp = xpAt(t), lvl = xp >= 200 ? 1 : 0, within = lvl ? xp - 200 : xp, span = lvl ? 300 : 200;
        const dxv = q('.dx'); if (dxv) A.txt(dxv, `+${Math.round(xp - 20)} XP`);
        const dn = q('.dn'); if (dn) A.txt(dn, lvl ? 'Reef' : 'Shallows');
        const dsub = q('.dsub'); if (dsub) A.txt(dsub, lvl ? 'You reached the Reef!' : 'Daily dive goal done: +50 XP');
        const dxb = q('.done .xb i'); if (dxb) dxb.style.width = (clamp(within / span) * 100).toFixed(1) + '%';
        const four = t >= 36.7;
        qa('.dst, .dst2').forEach(e => A.txt(e, four ? '4-day streak' : '3-day streak'));
        A.txt(q('.tp'), `${nTaps} taps`);
        A.press(R.all, t, 38.2); A.txt(R.sal, t < 38.35 ? 'Save all 4' : app ? '4 files saved' : 'All 4 saved');
        const adq = seg(t, 37.4, 37.9); qa('.ad').forEach(e => A.set(e, { y: 12 * (1 - E.out(adq)), o: adq }));

        /* ---------- chrome: HUD / panel ---------- */
        const tn = seg(t, 2.3, 2.8), chromeO = tn;
        A.set(chrome, { o: chromeO }); if (!app) A.set(q('.dock'), { o: chromeO }); const trayEl = q('.tray'); A.set(trayEl, { o: chromeO });
        rnS.forEach(e => A.txt(e, lvl ? 'Reef' : 'Shallows'));
        xnS.forEach(e => A.txt(e, `${Math.round(within)} / ${span} XP`));
        xbS.forEach(e => { e.style.width = (clamp(within / span) * 100).toFixed(1) + '%'; });
        const rk = E.out(seg(t, 36.85 + 0.35, 37.6)); qa('.orb').forEach(e => A.set(e, { s: 1 + 0.4 * Math.sin(Math.PI * seg(t, 37.15, 37.9)) * (1 - 0) }));
        allCd.forEach((e, i) => { const k = i % 7; A.cls(e, 'lit', k < 3 || (k === 3 && four)); });
        qa('.cn').forEach(e => A.txt(e, four ? '4-day streak' : '3-day streak'));
        qa('.chain').forEach(ch => { const d4 = ch.children[3]; if (d4) A.set(d4, { s: four ? 1 + 0.9 * Math.exp(-6 * (t - 36.7)) * Math.cos(13 * (t - 36.7)) * (t > 36.7 && t < 37.5 ? 1 : 0) : 1 }); });
        const gotN = PT.filter(x => t >= x + 0.8).length;
        qa('.dv').forEach(e => A.txt(e, `${gotN} / 4`));
        const dvb = q('.dvb'); if (dvb) dvb.style.width = (gotN / 4 * 100) + '%';
        if (!app) {
          const which = t < 9 ? -1 : t < 17 ? 0 : t < 19.3 ? 1 : t < 24 ? 1 : t < 30 ? 2 : t < 36 ? 3 : -1;
          dockI.forEach((e, i) => A.cls(e, 'on', i === which && t > 9.5));
          A.set(R.empt, { o: 1 - seg(t, PT[0] + 0.6, PT[0] + 0.9) });
          PRL.forEach((p, i) => { const e = q('.k-r' + i), k = E.out(seg(t, PT[i] + 0.8, PT[i] + 1.3)); A.set(e, { x: (1 - k) * 18, o: k }); });
        }

        /* ---------- pearls, rings, xp floaters ---------- */
        PRL.forEach((p, i) => {
          const T0 = PT[i], d = t - T0, s = slot(3 + i), o = lumiPos(T0), ox = o.x, oy = o.y - 6;
          const big = 40, pa = E.outBack(seg(d, 0, 0.35)), k = seg(d, 0.4, 1.2), kk = E.inOut(k);
          let x = lerp(ox, s.x, kk), y = lerp(oy, s.y, E.in(k) * 0.55 + kk * 0.45) - Math.sin(Math.PI * k) * 26, size = lerp(big, PS, kk);
          let sq = 1;
          if (d >= 1.2) { x = s.x; y = s.y; size = PS; const dd = d - 1.2; sq = 1 + 0.18 * Math.exp(-7 * dd) * Math.cos(20 * dd); }
          const vis = d > -0.02 && !(i === 3 && false);
          const glow = 0.8 + 0.2 * Math.sin(t * 3 + i);
          A.set(pearls[i], { x, y, sx: (size / 44) * pa * sq, sy: (size / 44) * pa / sq, o: vis ? (d < 1.2 ? 1 : glow) : 0 });
          for (let r = 0; r < 2; r++) {
            const e = rings[i * 2 + r], rd = d - 1.15 - r * 0.22, rp = seg(rd, 0, 0.95);
            A.set(e, { x: s.x, y: s.y, s: 0.3 + rp * (app ? 2.4 : 2.8), o: rd > 0 && rd < 0.95 ? (1 - rp) * 0.9 : 0 });
          }
          const fd = t - (T0 + 0.9);
          A.set(xpf[i], { x: s.x - 28, y: s.y - 34 - E.out(seg(fd, 0, 1.0)) * 36, o: Math.min(seg(fd, 0, 0.2), 1 - seg(fd, 0.6, 1.0)) });
        });
        /* water-drop ripples on every tap */
        TAPS.forEach((k, i) => {
          const dt = t - k.t, e = tapRings[i];
          if (dt < 0 || dt > 0.8) { e.style.display = 'none'; return; }
          const pp = A.pointerAt(k.t), p = seg(dt, 0, 0.8);
          e.style.display = ''; e.style.left = pp.x + 'px'; e.style.top = pp.y + 'px'; e.style.transform = `scale(${(0.3 + E.out(p) * 1.9).toFixed(2)})`; e.style.opacity = ((1 - p) * 0.9).toFixed(2);
        });
        wake.bub.update(t - wake.t0); wake.spk.update(t - wake.t0);
        bursts.forEach(b => { const d = t - b.t0; b.bub.update(d); b.pet.update(d); b.spk.update(d); });

        /* ---------- quick menu ---------- */
        const lp = lumiPos(t);
        const open = t >= MENU_T.open && t < MENU_T.close + 0.55;
        menuPart = 0;
        qbs.forEach((e, i) => {
          if (!open) { e.style.display = 'none'; return; }
          e.style.display = '';
          const oi = E.outBack(seg(t, MENU_T.open + i * 0.05, MENU_T.open + 0.34 + i * 0.05)), picked = t >= MENU_T.pick;
          let sc = oi, op = Math.min(1, seg(t, MENU_T.open + i * 0.05, MENU_T.open + 0.15 + i * 0.05)), rad = MR * oi;
          if (picked) {
            const cq = seg(t, MENU_T.pick, MENU_T.pick + 0.5);
            if (i === 1) { sc = 1 + 3.2 * E.out(cq); op = 1 - E.in(cq); } else { sc = 1 - E.in(seg(t, MENU_T.pick, MENU_T.pick + 0.3)); rad = MR * (1 - 0.6 * E.in(seg(t, MENU_T.pick, MENU_T.pick + 0.3))); op = 1 - seg(t, MENU_T.pick, MENU_T.pick + 0.3); }
          }
          const a = MA[i] * Math.PI / 180, wob = Math.sin(t * 2.2 + i * 1.3) * 3;
          A.set(e, { x: lp.x + Math.cos(a) * rad - (app ? 34 : 40), y: lp.y + Math.sin(a) * rad + wob - (app ? 34 : 40), s: Math.max(0.01, sc * (1 + 0.025 * Math.sin(t * 2.6 + i))), o: op });
        });
        menuPart = open ? Math.min(E.out(seg(t, MENU_T.open, MENU_T.open + 0.35)), 1 - E.inOut(seg(t, MENU_T.pick + 0.05, MENU_T.pick + 0.5))) : 0;

        /* ---------- speech bubble ---------- */
        let cur = null; for (const l of SAYS) if (t >= l[0]) cur = l;
        if (!cur || cur[1] == null) A.set(say, { o: 0 });
        else {
          A.txt(sTx, cur[1]); sU.style.display = cur[7] ? '' : 'none'; if (cur[7]) A.txt(sU, cur[7]);
          const [, , x, y, w, side, off] = cur; say.style.left = x + 'px'; say.style.top = y + 'px'; say.style.width = w + 'px';
          const ts = sTail.style; ts.left = ts.top = ts.right = ts.bottom = '';
          if (side === 'b') { ts.bottom = '-6px'; ts.left = (off - 7) + 'px'; say.style.transformOrigin = `${off}px 100%`; }
          if (side === 'r') { ts.right = '-6px'; ts.top = (off - 7) + 'px'; say.style.transformOrigin = `100% ${off}px`; }
          const k = E.outBack(seg(t, cur[0], cur[0] + 0.35));
          A.set(say, { s: 0.7 + 0.3 * k, o: Math.min(1, seg(t, cur[0], cur[0] + 0.15)) });
          if (cur[7]) A.press(say, t, cur === SAYS.find(l => l[7] && l[7] === 'Check') ? 25.0 : 30.9);
        }

        /* ---------- Lumi, light ---------- */
        drawLumi(t);
        drawFx(t);
      },
    };
  },
});

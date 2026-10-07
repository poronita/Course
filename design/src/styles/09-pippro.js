/* Style 9, Pip Pro. Round 2. The Clay Buddy mascot, redrawn with premium lighting, levels, quests and a tap-to-open tool fan. */
ISK.register({
  id: 'pippro',
  order: 9,
  round: 2,
  name: 'Pip Pro',
  tagline: 'Pip, polished: tap him for a fan of tools and level up as you work.',
  concept: 'Pip is the red pocket-knife buddy from Clay Buddy, now drawn with real lighting: soft gradients, a rim light, glossy eyes, a brushed-steel band and little tools folded on his back. He lives in the corner of every screen. Tap him and five round tool buttons spring out in an arc. Each job plays a short show while a bar runs (Pip squeezes, hammers or pedals), and every win adds XP, ticks a daily quest and moves a level ring.',
  wins: [
    'Keeps the character the owner loved, but calm colours, thin borders and soft shadows make it feel grown-up.',
    'One tap on Pip reaches any tool, so nobody hunts through menus. Pip also suggests the next step in a bubble.',
    'XP, quests, a streak and badges bring people back, and every reward floats in without blocking the work.',
  ],
  risks: [
    'The layered character costs real illustration and animation time, and needs a "hide Pip" switch for people who want a plain tool.',
    'Game bits can feel noisy to some users, so XP and quests must stay small and optional.',
  ],
  scores: { simple: 4, fun: 5, wow: 4, pro: 4, game: 5, effort: 4 },
  palette: ['#EEF1FF', '#1D2140', '#F2483F', '#FF8A6B', '#19B58A', '#F5B83D'],
  type: 'Plus Jakarta Sans for all UI text. Baloo 2 only for numbers and level badges, so figures feel like a game HUD.',
  motion: 'Spring pops from Pip, an iris that opens from his position, squash and stretch on every landing, and a gold burst with a filling level ring at each win.',
  notes: {
    intro: 'Pip drops in, yawns and stretches, winks and waves. The home iris opens from him, he hops to the dock and a hint ring pulses once.',
    pick: 'One tap on a photo (or a file dragged from the desktop). Pip gasps, gives a thumbs-up and winks at his pick: Exam form.',
    shrink: 'One tap on Exam form starts it. Pip squeezes the photo in a steel press while a bar runs and 4.8 MB counts to 196 KB. Gold burst, +20 XP, quest ticks.',
    crop: 'Tap Pip and five tools spring out in an arc. He winks and points at Crop, then holds a frame prop. A short bar runs and the crop finishes.',
    privacy: 'Pip raises a magnifier and offers the check in a bubble. One tap shows Pune, India, then he hammers the pin away and a shield glows.',
    gif: 'Pip offers the GIF, snaps a film clapper, then pedals a tiny generator while 36 frames count up and a film strip rolls out.',
    done: 'Four results, +130 XP, the ring fills and Level 8 pops. Privacy Pro badge, a 6-day streak, a taps receipt and one Ad.',
  },
  extras: [
    ['Character', 'Pip: layered SVG with rim light, glossy eyes, steel band, chest emblem, antenna, two jointed arms with hand shapes (point, wave, thumb, fist), folded tool props. 10 moods: neutral, happy, wink, surprised, thinking, effort, celebrate, sleepy, yawn, proud. Eyes follow the pointer. Tap Pip for the quick-tool arc.'],
    ['Game system', 'XP ring around Pip\'s avatar, Level 7 to 8, 3 daily quests that tick, a streak flame, the Privacy Pro badge, floating +XP chips.'],
    ['Progress bars', 'Four different bars from the library (streams, liquid, orbit, tiles, comet or warp), recoloured to the palette, with Pip squeezing, hammering or pedalling beside them and stage labels with a counting number.'],
    ['Screen changes', 'Iris that opens from Pip, push and zoom inside a tool.'],
    ['Finish effect', 'Star, coin and spark bursts from Pip, a glowing level ring, and a short squash and stretch.'],
    ['Taps to finish', 'Counted live on the Done screen. Phone: Shrink 4 · Crop 4 · Place 2 · GIF 3 · Save all 1. Web: the file is dragged in, so Shrink 2.'],
  ],
  statusBar: 'dark',
  css: `
§{--ink:#1D2140;--mut:#5D6390;--line:#E1E5F5;--red:#F2483F;--cor:#FF8A6B;--mint:#19B58A;--gold:#F5B83D;--peri:#6573F0;--sh:0 1px 2px rgba(29,33,64,.06),0 10px 24px -10px rgba(29,33,64,.2);
 background:radial-gradient(110% 55% at 0 0,rgba(124,140,255,.22),transparent 62%),radial-gradient(90% 45% at 100% 100%,rgba(255,138,107,.12),transparent 60%),linear-gradient(180deg,#EEF1FF,#fff);
 color:var(--ink);font:500 14px/1.3 "Plus Jakarta Sans",system-ui,sans-serif}
§ b{font-weight:800}§ i,§ em,§ s,§ u,§ small{font-style:normal;text-decoration:none}
§ h2,§ h3,§ p{margin:0}
§ .num{font-family:"Baloo 2","Plus Jakarta Sans",sans-serif;font-weight:700;font-variant-numeric:tabular-nums;line-height:1}
§ .card{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:var(--sh)}
§ .main{position:absolute;inset:0;background:inherit;z-index:2}
§ .splash{position:absolute;inset:0;z-index:1;text-align:center}
§ .splash .lk{position:absolute;left:0;right:0;top:118px;display:flex;flex-direction:column;align-items:center;gap:10px}
§ .splash h1{margin:0;font-size:26px;font-weight:800;letter-spacing:-.02em}
§ .splash .spc{display:flex;gap:6px;align-items:center;font-size:13px;font-weight:700;color:var(--mint);background:#E2F6EF;padding:6px 12px;border-radius:99px}
§ .splash .gl{position:absolute;left:50%;top:44%;width:420px;height:420px;margin:-210px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(124,140,255,.12) 70%,transparent)}
§.m-web .splash .lk{top:84px}§.m-web .splash h1{font-size:36px}
/* header */
§ .hdr{position:absolute;left:16px;right:16px;top:52px;height:46px;display:flex;align-items:center;gap:10px;z-index:30}
§.m-web .hdr{left:auto;right:24px;top:9px;width:470px;height:46px}
§ .av{position:relative;width:46px;height:46px;flex:none;border-radius:50%}
§ .ring{position:absolute;left:0;top:0;overflow:visible}
§ .av .face{position:absolute;left:7px;top:7px;width:32px;height:32px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 1px 3px rgba(29,33,64,.2)}
§ .lv{display:flex;flex-direction:column;gap:3px;min-width:96px}
§ .lvb{display:inline-flex;align-items:center;height:22px;padding:0 9px;border-radius:11px;background:linear-gradient(180deg,#FFD97E,#F5B83D);color:#5A3B00;font:700 14px/1 "Baloo 2",sans-serif;width:fit-content;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 1px 2px rgba(150,100,0,.3)}
§ .xpt{font-size:11.5px;color:var(--mut);font-weight:700;font-variant-numeric:tabular-nums}
§ .qd{margin-left:auto;display:flex;gap:5px}
§ .qp,§ .qc{width:24px;height:24px;border-radius:50%;border:1.5px solid #CDD2EC;display:grid;place-items:center;color:#7C84B2;background:#fff;flex:none}
§ .qp.ok,§ .qi.ok .qc{background:var(--mint);border-color:var(--mint);color:#fff}
§ .fl{height:34px;display:flex;align-items:center;gap:4px;padding:0 11px 0 8px;border-radius:17px;font:700 17px/1 "Baloo 2",sans-serif;background:#fff;border:1px solid var(--line);box-shadow:var(--sh)}
§ .qt{position:absolute;left:54px;right:50px;top:5px;height:36px;border-radius:18px;background:var(--mint);color:#fff;display:flex;align-items:center;gap:8px;padding:0 14px;font-weight:800;font-size:13px;z-index:2;box-shadow:0 6px 14px -6px rgba(25,181,138,.7);white-space:nowrap}
§ .qt.gold{background:linear-gradient(180deg,#FFD97E,#F5B83D);color:#5A3B00;box-shadow:0 6px 14px -6px rgba(150,100,0,.7)}
§ .pls{position:absolute;inset:-2px;border-radius:50%;border:3px solid var(--gold);pointer-events:none;opacity:0}
§ .crumb{position:absolute;left:108px;top:0;height:64px;display:flex;align-items:center;gap:10px;font-size:14px;color:var(--mut);font-weight:700;z-index:3}
§ .crumb b{color:var(--ink);font-size:16px}
/* pages */
§ .pg{position:absolute;inset:0;padding:110px 16px 204px;display:flex;flex-direction:column;gap:10px;background:inherit}
§ .l,§ .r{display:flex;flex-direction:column;gap:10px;min-width:0}
§.m-web .cv{position:absolute;left:108px;top:72px;width:820px;height:624px;border-radius:22px;overflow:hidden;background:#fff;border:1px solid var(--line);box-shadow:var(--sh);z-index:3}
§.m-web .pg{padding:22px;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);grid-template-rows:minmax(0,1fr);gap:22px;background:#fff}
§.m-web .pg-home,§.m-web .pg-dn{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}§.m-web .pg-home{grid-template-columns:minmax(0,1fr)}
§ .act{position:absolute;left:104px;right:16px;bottom:48px;display:flex;gap:8px}
§.m-web .act{position:static;margin-top:auto}
§ .btn{height:44px;border-radius:14px;flex:1;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:800;font-size:15px;color:#fff;background:linear-gradient(180deg,#FF6A5E,#EC3F36);box-shadow:0 8px 16px -8px rgba(242,72,63,.7),inset 0 1px 0 rgba(255,255,255,.35);white-space:nowrap}
§ .btn.sec{flex:none;width:44px;background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:var(--sh)}
§.m-web .btn.sec{width:auto;padding:0 18px}
§ .btn.ok{background:linear-gradient(180deg,#34D3A7,#19B58A);box-shadow:0 8px 16px -8px rgba(25,181,138,.7),inset 0 1px 0 rgba(255,255,255,.35)}
§ .btn kbd{font:700 11px "Plus Jakarta Sans";background:rgba(255,255,255,.22);padding:2px 6px;border-radius:6px}
§ .is-pressed{transform:scale(.96)}
§ small.eb{font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--red)}
§ h2.t{font-size:21px;font-weight:800;letter-spacing:-.02em;line-height:1.15}§.m-web h2.t{font-size:26px}
§ h3.t{font-size:15px;font-weight:800}§.m-web h3.t{font-size:18px}
/* home */
§ .hero{display:flex;align-items:center;gap:12px;padding:12px 14px;background:linear-gradient(135deg,#1D2140,#34397A);color:#fff;border:0;position:relative}
§ .hero .ic{width:44px;height:44px;border-radius:14px;background:linear-gradient(180deg,#FF6A5E,#EC3F36);display:grid;place-items:center;flex:none}
§ .hero div{flex:1;display:flex;flex-direction:column;gap:2px}§ .hero small{font-size:10.5px;font-weight:800;letter-spacing:.08em;color:#FFC9BF;text-transform:uppercase}
§ .hero b{font-size:16px}§ .hero span{font-size:12.5px;color:#C9CFF5}
§ .tools{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}§.m-web .tools{grid-template-columns:repeat(5,1fr);gap:12px}
§ .tl{height:62px;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-weight:700;font-size:12.5px;background:#fff;border:1px solid var(--line);box-shadow:var(--sh)}
§.m-web .tl{height:80px;font-size:14px}
§ .tl svg{color:var(--c)}
§ .qs{padding:10px 12px;display:flex;flex-direction:column;gap:6px}
§ .qh{display:flex;justify-content:space-between;align-items:center;font-size:13px}§ .qh .num{font-size:16px;color:var(--mint)}
§ .qi{display:flex;align-items:center;gap:10px;font-weight:700;font-size:13.5px;height:34px}
§ .qi em{margin-left:auto;font-size:12px;color:#B07A0A;font-weight:800;background:#FFF1CF;padding:3px 8px;border-radius:99px}
§ .qc u{display:none}§ .qi.ok .qc u{display:block}§ .qi.ok .qc s{display:none}§ .qi.ok span{color:var(--mut);text-decoration:line-through}
§ .dz{height:190px;border:2px dashed #BFC6EE;border-radius:20px;background:#F6F7FF;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;position:relative}
§ .dz.hot{border-color:var(--red);background:#FFF1EE}
§ .dz .ic{width:46px;height:46px;border-radius:15px;background:#fff;border:1px solid var(--line);display:grid;place-items:center;color:var(--peri);box-shadow:var(--sh)}
§ .dz b{font-size:17px}§ .dz span{font-size:13px;color:var(--mut)}
§ .fcard{position:absolute;left:0;top:0;width:158px;padding:7px;display:flex;align-items:center;gap:8px;z-index:70;font-size:12px;font-weight:800}
§ .fcard i{width:34px;height:42px;border-radius:7px;background-size:cover;background-position:center;flex:none}
§ .fcard small{display:block;font-weight:600;color:var(--mut);font-size:11px}
/* pick */
§ .gh{display:flex;justify-content:space-between;align-items:baseline}§ .gh span{font-size:12.5px;color:var(--mut);font-weight:700}
§ .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
§ .th{aspect-ratio:1;border-radius:14px;background-size:cover;background-position:center;position:relative;border:1px solid var(--line)}
§ .th.sel{box-shadow:0 0 0 3px var(--red)}
§ .th .ck{position:absolute;right:6px;top:6px;width:24px;height:24px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center}
§ .file{display:flex;gap:12px;padding:10px;align-items:center}
§ .file i{width:78px;height:98px;border-radius:12px;background-size:cover;background-position:center;flex:none;border:1px solid var(--line)}
§ .file div{display:flex;flex-direction:column;gap:3px;min-width:0}§ .file b{font-size:15px}§ .file span{font-size:12.5px;color:var(--mut);font-weight:600}
§ .file em,§ .chip{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;font-weight:800;color:#0E7A5C;background:#E2F6EF;padding:3px 9px;border-radius:99px;width:fit-content}
§.m-web .file{flex-direction:column;align-items:stretch;padding:12px}§.m-web .file i{width:auto;height:330px}
§ .opts{display:flex;flex-direction:column;gap:8px}
§ .opt{display:flex;align-items:center;gap:12px;min-height:64px;padding:8px 12px;border-radius:16px;background:#fff;border:1px solid var(--line);box-shadow:var(--sh);position:relative}
§ .opt .oi{width:34px;height:34px;border-radius:11px;background:#EEF1FF;display:grid;place-items:center;color:var(--peri);flex:none}
§ .opt div{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}§ .opt b{font-size:14.5px}§ .opt span{font-size:12px;color:var(--mut);font-weight:600}
§ .opt .rd{width:20px;height:20px;border-radius:50%;border:2px solid #CDD2EC;flex:none;display:grid;place-items:center;color:#fff}
§ .opt.on{border-color:var(--red);background:#FFF5F3;box-shadow:0 0 0 1px var(--red),var(--sh)}§ .opt.on .rd{background:var(--red);border-color:var(--red)}
§ .opt .pk{position:absolute;right:42px;top:-9px;font-size:10.5px;font-weight:800;color:#6B4600;background:linear-gradient(180deg,#FFD97E,#F5B83D);padding:2px 8px;border-radius:99px;display:flex;gap:3px;align-items:center}
§ .ratio{width:34px;height:34px;display:grid;place-items:center;flex:none}§ .ratio i{display:block;border:2px solid var(--ink);border-radius:3px;background:#EEF1FF}
/* process */
§ .stage{position:relative;height:222px;border-radius:20px;overflow:hidden;background:linear-gradient(180deg,#F8F9FF,#E8EBFF);border:1px solid var(--line);box-shadow:var(--sh);flex:none}
§.m-web .stage{height:268px}§.m-web .shw{grid-template-rows:auto minmax(0,1fr)}§.m-web .shw .l{display:contents}§.m-web .shw .stage{grid-column:1/-1}§.m-web .shw .facts{align-self:start}§.m-web .well{height:100px}§.m-web .pc .big{font-size:34px}
§ .dio{position:absolute;left:50%;top:50%;width:358px;height:196px;margin:-90px 0 0 -179px;transform:scale(var(--ds,1))}
§ .dio>*{position:absolute}
§ .floor{left:14px;right:14px;top:150px;height:28px;border-radius:50%;background:radial-gradient(closest-side,rgba(29,33,64,.16),transparent)}
§ .steel{background:linear-gradient(90deg,#8791AA,#F3F5FA 28%,#C2C9DA 52%,#EEF1F8 74%,#8D97B0);border-radius:6px;box-shadow:0 4px 8px -3px rgba(29,33,64,.4)}
§ .phs{background-size:cover;background-position:center 20%;border-radius:8px;box-shadow:0 6px 12px -4px rgba(29,33,64,.4),0 0 0 3px #fff;transform-origin:0 100%}
§ .fk{width:7px;height:7px;border-radius:2px;left:0;top:0}
§ .pc{padding:12px 14px;display:flex;flex-direction:column;gap:6px}
§ .pc .hd{display:flex;align-items:center;justify-content:space-between;gap:10px;height:32px}
§ .pc .stl{font-weight:800;font-size:13.5px;display:flex;align-items:center;gap:8px}
§ .pc .stl::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--red);box-shadow:0 0 0 4px rgba(242,72,63,.18)}
§ .pc .big{font-size:30px;color:var(--ink)}
§ .well{height:96px;display:flex;align-items:center;justify-content:center}
§ .well canvas{display:block}
§ .cap{font-size:12px;color:var(--mut);font-weight:700;text-align:center}
§ .pc .okc{display:none;align-items:center;gap:10px;font-weight:800;color:#0E7A5C;background:#E2F6EF;border-radius:14px;padding:12px}
§ .stps{display:flex;gap:6px;margin-top:4px}
§ .sp{flex:1;display:flex;align-items:center;gap:6px;font-size:11.5px;font-weight:800;color:var(--mut);padding:7px 8px;border-radius:11px;background:#F1F3FF;line-height:1.15}
§ .sp i{width:18px;height:18px;border-radius:50%;border:2px solid #CDD2EC;display:grid;place-items:center;color:#fff;flex:none}§ .sp i svg{display:none}
§ .sp.on{background:#FFF1EE;color:var(--ink)}§ .sp.on i{border-color:var(--red)}
§ .sp.ok{background:#E2F6EF;color:#0E7A5C}§ .sp.ok i{background:var(--mint);border-color:var(--mint)}§ .sp.ok i svg{display:block}
§ .facts.wf{display:none}§.m-web .facts.wf{display:flex}
§ .gifc{border-radius:12px;background-size:cover;background-position:center;box-shadow:0 10px 18px -6px rgba(29,33,64,.5),0 0 0 4px #fff}
§ .gifc em{position:absolute;left:8px;bottom:8px;font:700 14px/1 "Baloo 2";background:var(--ink);color:#fff;padding:4px 8px;border-radius:9px}
§ .wfx{display:none}§.m-web .wfx{display:block}§ .wfx>b{font-size:14px}
§ .rec{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:8px}§ .rcf{display:flex;flex-direction:column;gap:1px;font-size:12px}
§ .rcf i{height:78px;border-radius:12px;background-size:cover;background-position:center;border:1px solid var(--line);margin-bottom:5px}§ .rcf b{font-size:12.5px}§ .rcf span{color:var(--mut);font-weight:600}
§ .facts>b.ft{font-size:13px;margin-bottom:2px}§ .facts .row kbd{font:800 11px "Plus Jakarta Sans";background:var(--ink);color:#fff;padding:2px 7px;border-radius:6px;margin-right:6px}
§ .zoomr{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:700}§ .zoomr i{flex:1;height:6px;border-radius:3px;background:#DDE1F5;position:relative}§ .zoomr i::after{content:"";position:absolute;left:34%;top:-5px;width:16px;height:16px;border-radius:50%;background:#fff;border:1px solid var(--line);box-shadow:var(--sh)}
§ .stat3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}§ .stat3 div{padding:8px 6px;text-align:center;font-size:11px;font-weight:700;color:var(--mut);display:flex;flex-direction:column;gap:3px}§ .stat3 .num{font-size:19px;color:var(--ink)}
§ .bdg.lock{opacity:.6;filter:grayscale(1)}
§ .tipc{display:flex;gap:8px;align-items:center;margin-top:4px;padding:8px 10px;border-radius:12px;background:#F6F7FF;font-size:12.5px;font-weight:700;color:var(--mut);min-height:38px;line-height:1.25}§ .tipc svg{color:var(--peri);flex:none}
§ .lvc b .lv3{font-size:inherit;color:inherit}
§.m-web .rg{gap:12px}§.m-web .rc{flex-direction:column;align-items:stretch;height:auto;padding:8px;position:relative;gap:6px}§.m-web .rc i{width:auto;height:96px;border-radius:12px}§.m-web .rc em{position:absolute;right:14px;top:14px}§.m-web .rc div{font-size:13.5px}
/* result */
§ .rph{position:relative;width:150px;height:190px;flex:none;overflow:hidden}§ .rph i{position:absolute;inset:6px;border-radius:13px;background-size:cover;background-position:center}
§ .rph .kb{position:absolute;left:10px;bottom:10px;background:var(--ink);color:#fff;font-size:16px;padding:5px 9px;border-radius:10px}
§ .rl{flex-direction:row}§.m-web .rl{flex-direction:column}
§.m-web .rph{width:auto;height:340px}
§ .rb{display:flex;flex-direction:column;gap:4px;justify-content:center;min-width:0}
§ .rb .num{font-size:48px;color:var(--ink)}§ .rb s{color:var(--mut);font-weight:700;font-size:13px;text-decoration:line-through}
§ .tags{display:flex;flex-wrap:wrap;gap:6px}§ .tags span{font-size:11.5px;font-weight:800;color:var(--peri);background:#EAEDFF;padding:4px 9px;border-radius:99px}
§ .cmp{padding:12px 14px;display:grid;grid-template-columns:auto 1fr auto;gap:8px 12px;align-items:center;font-size:13px;font-weight:700}
§ .cmp .b{height:12px;border-radius:6px;background:#C9CEEA}§ .cmp .b.g{background:linear-gradient(90deg,var(--mint),#5ED6B3)}
§ .cmp .num{font-size:17px}
§ .qa{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:700;color:var(--mut)}§ .qa div{display:flex;gap:8px;align-items:center}§ .qa svg{color:var(--mint)}
/* arrive */
§ .pv{position:relative;height:300px;border-radius:20px;background-size:cover;background-position:center;border:1px solid var(--line);box-shadow:var(--sh);overflow:hidden}
§.m-web .pv{height:430px}
§ .pv .fn{position:absolute;left:10px;top:10px;font-size:12px;font-weight:800;background:rgba(255,255,255,.92);padding:5px 10px;border-radius:99px}
§ .pv .pl{position:absolute;left:50%;top:50%;width:56px;height:56px;margin:-28px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center;color:var(--ink);padding-left:3px}
§ .facts{padding:12px 14px;display:flex;flex-direction:column;gap:8px}
§ .facts .row{display:flex;justify-content:space-between;gap:12px;font-size:13px}§ .facts .row span{color:var(--mut);font-weight:600}§ .facts .row b{font-size:13px;text-align:right}
§ .tip{display:flex;gap:10px;align-items:center;font-size:13px;font-weight:700;color:var(--mut)}§ .tip svg{color:var(--peri);flex:none}
/* crop */
§ .cbox{position:relative;height:372px;border-radius:20px;overflow:hidden;background:#232748;border:1px solid var(--line);flex:none}§.m-web .cbox{height:480px}
§ .cimg{position:absolute;left:50%;top:50%;width:500px;height:375px;margin:-187px 0 0 -250px;background-size:cover;background-position:center}
§.m-web .cimg{width:760px;height:570px;margin:-285px 0 0 -380px}
§ .cfr{position:absolute;left:50%;top:50%;width:232px;height:290px;margin:-135px 0 0 -116px;border:2px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(29,33,64,.58);background:linear-gradient(#fff6,#fff6) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff6,#fff6) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff6,#fff6) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff6,#fff6) 0 66.6%/100% 1px no-repeat}
§.m-web .cfr{width:312px;height:390px;margin:-195px 0 0 -156px}
§ .cfr s{position:absolute;left:50%;top:-34px;transform:translateX(-50%);white-space:nowrap;font-size:12px;font-weight:800;background:#fff;color:var(--ink);padding:4px 10px;border-radius:99px}
§ .cfr b{position:absolute;width:18px;height:18px;border:4px solid var(--gold)}
§ .cfr b:nth-child(1){left:-5px;top:-5px;border-right:0;border-bottom:0;border-radius:5px 0 0 0}§ .cfr b:nth-child(2){right:-5px;top:-5px;border-left:0;border-bottom:0;border-radius:0 5px 0 0}
§ .cfr b:nth-child(3){left:-5px;bottom:-5px;border-right:0;border-top:0;border-radius:0 0 0 5px}§ .cfr b:nth-child(4){right:-5px;bottom:-5px;border-left:0;border-top:0;border-radius:0 0 5px 0}
§ .swap{position:relative;height:100px;flex:none}§ .swap>.card{width:100%;height:100%}
§ .info{padding:10px 12px;display:flex;align-items:center;gap:12px}§ .info b{font-size:14px;display:block}§ .info span{font-size:12px;color:var(--mut);font-weight:600}
§ .mini{position:absolute;left:0;top:0;padding:8px 12px;display:flex;flex-direction:column;gap:2px}
§ .mini .hd{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:12.5px}§ .mini .num{font-size:20px}
§ .mini .well{height:50px}
/* privacy */
§ .mapc{position:relative;height:250px;overflow:hidden;background:#E8F3EE;flex:none}§.m-web .mapc{height:400px}
§ .mapc svg.mp{position:absolute;inset:0;width:100%;height:100%}
§ .pin{position:absolute;width:34px;height:44px;margin:-44px 0 0 -17px;transform-origin:50% 100%}
§ .mph{position:absolute;left:10px;top:10px;width:64px;height:64px;border-radius:12px;background-size:cover;background-position:center;border:2px solid #fff;box-shadow:0 6px 12px -4px rgba(29,33,64,.4)}
§ .coord{position:absolute;right:10px;bottom:10px;font-size:11.5px;font-weight:800;background:rgba(255,255,255,.92);padding:4px 9px;border-radius:99px}
§ .place h2{font-size:27px;font-weight:800;letter-spacing:-.02em}§ .place span{font-size:13px;color:var(--mut);font-weight:600}
§ .warn{padding:10px 12px;display:flex;gap:10px;align-items:center;background:#FFF6E0;border-color:#F3D48A;font-size:13px;font-weight:700;color:#6B4600}§ .warn svg{flex:none;color:#C98A0B}
§ .shl{display:flex;flex-direction:column;align-items:center;justify-content:center}
/* gif */
§ .vidc{position:relative;height:236px;border-radius:20px;background-size:cover;background-position:center;border:1px solid var(--line);box-shadow:var(--sh);overflow:hidden;flex:none}§.m-web .vidc{height:300px}
§ .vidc .fn{position:absolute;left:10px;top:10px;font-size:12px;font-weight:800;background:rgba(255,255,255,.92);padding:5px 10px;border-radius:99px}
§ .strip-c{position:relative;padding:6px 14px 0}
§ .strip{position:relative;display:flex;height:50px;border-radius:10px}
§ .strip i{flex:1;background-size:cover;background-position:center}§ .strip i:first-child{border-radius:10px 0 0 10px}§ .strip i:last-child{border-radius:0 10px 10px 0}
§ .selw{position:absolute;top:-4px;bottom:-4px;border:3px solid var(--gold);border-radius:10px;box-shadow:0 0 0 999px rgba(238,241,255,.66)}
§ .hdl{position:absolute;top:50%;width:18px;height:58px;margin-top:-29px;border-radius:7px;background:var(--gold);box-shadow:0 2px 6px rgba(29,33,64,.3)}§ .hdl::after{content:"";position:absolute;left:7px;top:19px;width:3px;height:20px;border-radius:2px;background:#6B4600;opacity:.6}
§ .strip-w{overflow:hidden;border-radius:12px;padding:6px 0;margin:-6px 0}
§ .tm{display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:var(--mut);padding:6px 14px 0}
§ .tinfo{padding:12px 14px;display:flex;flex-direction:column;gap:6px}§ .tinfo .num{font-size:34px}§ .tinfo span{font-size:13px;color:var(--mut);font-weight:700}
§ .loopb{position:absolute;right:10px;top:10px;font-size:12px;font-weight:800;background:var(--ink);color:#fff;padding:5px 10px;border-radius:99px}
/* done */
§ .rg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
§ .rc{display:flex;align-items:center;gap:8px;padding:8px;height:62px}§ .rc i{width:42px;height:46px;border-radius:9px;background-size:cover;background-position:center;flex:none}
§ .rc div{min-width:0;font-size:12.5px;line-height:1.25}§ .rc b{display:block;font-size:13px}§ .rc span{color:var(--mut);font-weight:600;font-size:11.5px}
§ .rc em{margin-left:auto;width:20px;height:20px;border-radius:50%;background:var(--mint);color:#fff;display:grid;place-items:center;flex:none}
§ .lvc{display:flex;align-items:center;gap:12px;padding:10px 14px;background:linear-gradient(135deg,#1D2140,#343A7C);color:#fff;border:0}
§ .lvc .big{position:relative;width:54px;height:54px;flex:none}§ .lvc .big .ring{left:0;top:0}
§ .lvc .big .num{position:absolute;inset:0;display:grid;place-items:center;font-size:21px}
§ .lvc div.t{display:flex;flex-direction:column;gap:3px}§ .lvc b{font-size:15px}§ .lvc span{font-size:12px;color:#C9CFF5;font-weight:600}
§ .lvc .gain{margin-left:auto;font-size:22px;color:var(--gold)}
§ .two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
§ .bdg{display:flex;align-items:center;gap:9px;padding:8px 10px;height:54px;font-size:12px;line-height:1.2}§ .bdg b{display:block;font-size:13px}§ .bdg span{color:var(--mut);font-weight:600}
§ .bdg svg.hx{flex:none}
§ .rcp{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:var(--mut)}§ .rcp svg{color:var(--mint);flex:none}§ .rcp b{color:var(--ink)}
§ .ad{display:flex;gap:10px;align-items:center;border:1px dashed #C2C8E6;border-radius:14px;padding:8px 10px;background:rgba(255,255,255,.6);height:50px}
§ .ad i{width:34px;height:34px;border-radius:8px;background:#E4E7F6;flex:none}§ .ad small{font-size:10.5px;font-weight:800;border:1px solid var(--mut);color:var(--mut);border-radius:5px;padding:0 5px;margin-right:6px}§ .ad span{font-size:12px;color:var(--mut)}
/* pip layer */
§ .pip{position:absolute;left:0;top:0;width:160px;height:200px;transform-origin:80px 190px;z-index:50;pointer-events:none}
§ .pipsvg{overflow:visible;display:block}
§ .bub{position:absolute;z-index:55;padding:9px 12px;border-radius:16px;background:#fff;border:1px solid var(--line);box-shadow:var(--sh);font-weight:700;font-size:13.5px;line-height:1.3;display:flex;align-items:center;gap:8px;width:max-content;max-width:284px;left:98px;bottom:116px}
§.m-web .bub{left:108px;bottom:12px;max-width:620px}
§ .bub .tail{position:absolute;width:12px;height:12px;background:#fff;border-left:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg);left:-6px;bottom:16px}
§ .bub.up .tail{left:50%;margin-left:-6px;bottom:-6px;border-left:0;border-bottom:1px solid var(--line);border-right:1px solid var(--line)}
§ .pill{flex:none;height:28px;padding:0 12px;border-radius:14px;background:var(--red);color:#fff;font-weight:800;font-size:12.5px;display:flex;align-items:center;box-shadow:0 4px 8px -4px rgba(242,72,63,.8)}
§ .xpc{position:absolute;left:0;top:0;z-index:56;height:26px;padding:0 10px 0 7px;border-radius:13px;background:linear-gradient(180deg,#FFD97E,#F5B83D);color:#5A3B00;font:700 15px/26px "Baloo 2",sans-serif;display:flex;align-items:center;gap:4px;box-shadow:0 4px 10px -3px rgba(150,100,0,.5),inset 0 1px 0 rgba(255,255,255,.7);white-space:nowrap;pointer-events:none}
§ .hint{position:absolute;left:0;top:0;width:90px;height:90px;margin:-45px;border-radius:50%;border:3px solid var(--red);z-index:49;pointer-events:none}
§ .qm{position:absolute;inset:0;z-index:60;pointer-events:none}
§ .scrim{position:absolute;inset:0;z-index:47;pointer-events:none;background:radial-gradient(circle at var(--qx) var(--qy),rgba(238,241,255,.2) 0,rgba(29,33,64,.3) 100%)}
§ .qarc{position:absolute;left:0;top:0;width:0;height:0}
§ .qb{position:absolute;left:0;top:0;width:56px;height:56px;margin:-28px 0 0 -28px;border-radius:50%;background:#fff;border:1px solid var(--line);box-shadow:0 2px 4px rgba(29,33,64,.1),0 14px 26px -8px rgba(29,33,64,.45);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;font-weight:800;font-size:10.5px;color:var(--ink)}
§ .qb svg{color:var(--c)}
§ .qb.hot{background:var(--ink);color:#fff}§ .qb.hot svg{color:#fff}
§ .qb kbd{position:absolute;right:-4px;top:-4px;font:800 10px "Plus Jakarta Sans";background:var(--ink);color:#fff;border-radius:6px;padding:2px 5px}
§.m-web .qb{width:62px;height:62px;margin:-31px 0 0 -31px;font-size:11.5px}
/* rail + side (web) */
§ .rail{position:absolute;left:0;top:0;bottom:0;width:92px;background:#fff;border-right:1px solid var(--line);z-index:4;display:flex;flex-direction:column;align-items:center;gap:6px;padding-top:14px}
§ .rail .lg{width:42px;height:42px;border-radius:13px;background:linear-gradient(180deg,#FF6A5E,#EC3F36);display:grid;place-items:center;margin-bottom:12px;box-shadow:0 6px 12px -5px rgba(242,72,63,.7)}
§ .rt{width:72px;height:56px;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;font-size:11px;font-weight:800;color:var(--mut)}§ .rt svg{color:var(--c)}
§ .rt.on{background:#EEF1FF;color:var(--ink)}
§ .side{position:absolute;left:944px;top:72px;width:320px;bottom:8px;display:flex;flex-direction:column;gap:12px;z-index:3}
§ .side .qs{padding:12px 14px}§ .res{padding:12px 14px;display:flex;flex-direction:column;gap:8px}
§ .rr{display:flex;align-items:center;gap:10px;height:46px;border-radius:12px;border:1px dashed #CBD0EE;padding:0 8px;font-size:12.5px}
§ .rr i{width:30px;height:34px;border-radius:7px;background-size:cover;background-position:center;flex:none}§ .rr b{display:block;font-size:12.5px}§ .rr span{font-size:11.5px;color:var(--mut);font-weight:600}
§ .rr em{margin-left:auto;width:18px;height:18px;border-radius:50%;background:var(--mint);color:#fff;display:grid;place-items:center}
§ .wk{display:flex;gap:6px;justify-content:space-between}§ .wk div{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:800;color:var(--mut)}
§ .wk i{width:30px;height:30px;border-radius:50%;background:#EEF1FF;display:grid;place-items:center;color:#B9BFE6}§ .wk i.on{background:#FFF1CF;color:#F2831F}§ .wk i.now{background:linear-gradient(180deg,#FFB35C,#F2483F);color:#fff}
`.replace(/§/g, '.st-pippro'),
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, E = A.ease, W = A.W, H = A.H;
    const { seg, lerp, clamp, set, txt, cls } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const u = web ? 'pw' : 'pa', dev = web ? 'browser' : 'phone';
    const at = (e, k, v) => { if (e && e['_' + k] !== v) { e['_' + k] = v; e.setAttribute(k, v); } };
    const f1 = v => (+v).toFixed(1);
    const th = { p: A.photo('portrait'), m: A.photo('mountain'), c: A.photo('city') };

    /* ================= pointer story (defined first so the receipt can count taps) ================= */
    const keys = web ? [
      { t: 4.5, at: { x: 1170, y: 600 }, hold: 0.1 }, { t: 5.4, at: '.dz', drag: true, move: 0.95 },
      { t: 9.3, at: '.o1', tap: true }, { t: 15.6, at: '.shr .save', tap: true },
      { t: 17.7, at: () => A.center('.pip', 0.5, 0.58), tap: true }, { t: 19.0, at: '.qb1', tap: true }, { t: 19.9, at: '.c0', tap: true },
      { t: 20.4, at: '.cimg', hold: 0.1, dy: -40 }, { t: 21.4, at: '.cimg', drag: true, move: 1.0, dy: -40 }, { t: 22.6, at: '.edn', tap: true },
      { t: 25.3, at: '.bub .pill', tap: true }, { t: 26.7, at: '.rm', tap: true },
      { t: 30.7, at: '.bub .pill', tap: true }, { t: 31.4, at: '.thR', hold: 0.1 }, { t: 32.2, at: '.thR', drag: true, move: 0.8 }, { t: 32.7, at: '.mk', tap: true },
      { t: 35.7, at: '.gsv', tap: true }, { t: 38.4, at: '.sall', tap: true },
    ] : [
      { t: 3.75, at: '.hero', tap: true }, { t: 5.4, at: '.g0', tap: true }, { t: 9.3, at: '.o1', tap: true }, { t: 15.6, at: '.shr .save', tap: true },
      { t: 17.7, at: () => A.center('.pip', 0.5, 0.58), tap: true }, { t: 19.0, at: '.qb1', tap: true }, { t: 19.9, at: '.c0', tap: true },
      { t: 20.4, at: '.cimg', hold: 0.1, dy: -40 }, { t: 21.4, at: '.cimg', drag: true, move: 1.0, dy: -40 }, { t: 22.6, at: '.edn', tap: true },
      { t: 25.3, at: '.bub .pill', tap: true }, { t: 26.7, at: '.rm', tap: true },
      { t: 30.7, at: '.bub .pill', tap: true }, { t: 31.4, at: '.thR', hold: 0.1 }, { t: 32.2, at: '.thR', drag: true, move: 0.8 }, { t: 32.7, at: '.mk', tap: true },
      { t: 35.7, at: '.gsv', tap: true }, { t: 38.4, at: '.sall', tap: true },
    ];
    const nTap = keys.filter(k => k.tap).length, nDrag = keys.filter(k => k.drag).length;

    /* ================= Pip ================= */
    const pipSVG = `<svg class="pipsvg" viewBox="0 0 160 200" width="160" height="200" aria-hidden="true">
<defs>
<linearGradient id="${u}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7569"/><stop offset=".5" stop-color="#F2483F"/><stop offset="1" stop-color="#C42B27"/></linearGradient>
<linearGradient id="${u}s" x1="0" y1="0" x2="1" y2="0"><stop offset=".5" stop-color="#7A1512" stop-opacity="0"/><stop offset="1" stop-color="#7A1512" stop-opacity=".4"/></linearGradient>
<linearGradient id="${u}r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="${u}t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7E88A4"/><stop offset=".2" stop-color="#F7F9FC"/><stop offset=".42" stop-color="#BDC5D8"/><stop offset=".66" stop-color="#EFF2F9"/><stop offset=".88" stop-color="#9AA3BC"/><stop offset="1" stop-color="#6F7992"/></linearGradient>
<radialGradient id="${u}i" cx=".5" cy=".36" r=".72"><stop offset="0" stop-color="#9BA9FF"/><stop offset=".55" stop-color="#4A57C3"/><stop offset="1" stop-color="#222971"/></radialGradient>
<linearGradient id="${u}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DFE3F6"/><stop offset=".3" stop-color="#fff"/><stop offset="1" stop-color="#E4E8F8"/></linearGradient>
<radialGradient id="${u}h" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#FFD0C6"/></radialGradient>
<radialGradient id="${u}g" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#FFF4C4"/><stop offset=".5" stop-color="#F5B83D"/><stop offset="1" stop-color="#CF8A15"/></radialGradient>
<clipPath id="${u}e"><ellipse rx="12.5" ry="14.5"/></clipPath>
<clipPath id="${u}m"><path class="mc"/></clipPath>
</defs>
<ellipse class="ps" cx="80" cy="189" rx="42" ry="6.5" fill="#1D2140" opacity=".2"/>
<g class="bd">
 <g class="stubs" transform="translate(80 108)">
  <g class="st0" style="transform:rotate(-37deg)"><path d="M-6 0V-60Q-6 -72 1 -80Q8 -72 8 -60V0Z" fill="url(#${u}t)" stroke="#8C95AD" stroke-width=".8"/><path d="M-3 -10V-62Q-3 -68 0 -72" stroke="#fff" stroke-width="1.4" fill="none" opacity=".8"/></g>
  <g class="st1" style="transform:rotate(26deg)"><path d="M-6 0V-70H-2V-76H4V-70H8V0Z" fill="url(#${u}t)" stroke="#8C95AD" stroke-width=".8"/></g>
  <g class="st2" style="transform:rotate(41deg)"><path d="M-5 0V-66Q-5 -76 1 -76Q7 -76 7 -66V0Z" fill="url(#${u}t)" stroke="#8C95AD" stroke-width=".8"/><circle cy="-66" r="2.2" fill="#6F7992"/></g>
 </g>
 <g class="ft fL"><ellipse cx="56" cy="183" rx="18" ry="8.5" fill="#262C63"/><ellipse cx="53" cy="180" rx="9" ry="3" fill="#fff" opacity=".18"/><path d="M39 186Q56 192 73 186" stroke="#E9ECFA" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
 <g class="ft fR"><ellipse cx="104" cy="183" rx="18" ry="8.5" fill="#262C63"/><ellipse cx="101" cy="180" rx="9" ry="3" fill="#fff" opacity=".18"/><path d="M87 186Q104 192 121 186" stroke="#E9ECFA" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
 <g class="an"><path class="as" d="M80 47Q80 36 80 22" stroke="#9AA3BC" stroke-width="3" fill="none" stroke-linecap="round"/><g class="ab"><circle class="ag" r="12" fill="#F5B83D" opacity=".3"/><circle r="5.6" fill="url(#${u}g)"/><circle cx="-1.8" cy="-2" r="1.6" fill="#fff" opacity=".9"/></g></g>
 <path d="M32 98C32 62 50 44 80 44S128 62 128 98V148C128 170 112 181 80 181S32 170 32 148Z" fill="url(#${u}b)"/>
 <path d="M32 98C32 62 50 44 80 44S128 62 128 98V148C128 170 112 181 80 181S32 170 32 148Z" fill="url(#${u}s)"/>
 <ellipse cx="60" cy="68" rx="22" ry="12" fill="#fff" opacity=".13" transform="rotate(-24 60 68)"/>
 <path d="M44 92C44 70 56 58 74 55" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".3"/>
 <path d="M36 150C40 170 60 177 80 177" stroke="#8E1F1B" stroke-width="4" opacity=".16" fill="none" stroke-linecap="round"/>
 <path d="M32 98C32 62 50 44 80 44S128 62 128 98V148" fill="none" stroke="url(#${u}r)" stroke-width="2.2"/>
 <g transform="translate(80 161)"><circle r="13.5" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/><g fill="#fff" opacity=".9"><rect x="-9" y="-1.5" width="14" height="6.5" rx="3.2"/><path d="M2 -1.5L8.5 -9.5Q10 -11 10.6 -9L7.2 -1.5Z"/><circle cx="-3.5" cy="1.7" r="1.2" fill="#F2483F"/></g></g>
 <g><rect x="27" y="122" width="106" height="17" rx="6" fill="url(#${u}t)"/><rect x="27" y="122" width="106" height="5" rx="3" fill="#fff" opacity=".55"/><path d="M32 130.5H128M30 133.5H130" stroke="#6F7992" stroke-opacity=".28" stroke-width=".7"/><path d="M33 139H127V143Q80 148 33 143Z" fill="#7A1512" opacity=".2"/><circle cx="38" cy="130.5" r="2.7" fill="#7E88A4"/><circle cx="37.4" cy="129.9" r="1" fill="#fff"/><circle cx="122" cy="130.5" r="2.7" fill="#7E88A4"/><circle cx="121.4" cy="129.9" r="1" fill="#fff"/></g>
 <ellipse class="chL" cx="43" cy="103" rx="8.5" ry="5.2" fill="#FF8A6B"/><ellipse class="chR" cx="117" cy="103" rx="8.5" ry="5.2" fill="#FF8A6B"/>
 ${[58, 102].map((x, i) => `<g class="eye e${i}" transform="translate(${x} 82)"><g clip-path="url(#${u}e)"><rect x="-14" y="-16" width="28" height="32" fill="url(#${u}w)"/><g class="ir"><circle r="8.8" fill="url(#${u}i)"/><circle r="4.7" fill="#0F1230"/><circle cx="-2.7" cy="-3.1" r="2.7" fill="#fff"/><circle cx="2.9" cy="2.7" r="1.2" fill="#fff" opacity=".85"/></g><ellipse cy="-13" rx="14" ry="6" fill="#1D2140" opacity=".1"/><path class="lt" fill="#F5584E"/><path class="lb" fill="#F5584E"/><path class="lu" stroke="#7A1512" stroke-opacity=".55" stroke-width="1.5" fill="none" stroke-linecap="round"/><path class="ld" stroke="#7A1512" stroke-opacity=".5" stroke-width="1.4" fill="none" stroke-linecap="round"/></g><ellipse class="er" rx="12.8" ry="14.8" fill="none" stroke="#7A1512" stroke-opacity=".2" stroke-width="1.6"/></g>`).join('')}
 <rect class="brL" x="-8" y="-2.2" width="16" height="4.4" rx="2.2" fill="#8E1F1B" opacity=".85"/><rect class="brR" x="-8" y="-2.2" width="16" height="4.4" rx="2.2" fill="#8E1F1B" opacity=".85"/>
 <g class="mg"><path class="ms" stroke="#6E1620" stroke-width="3.2" fill="none" stroke-linecap="round"/><g clip-path="url(#${u}m)"><path class="mo" fill="#6E1620"/><ellipse class="tg" fill="#FF8FA0"/></g></g>
 <path class="sw" d="M122 62q4 7 0 10q-4-3 0-10z" fill="#8FD3FF" opacity="0"/>
 <g class="limbs"><path class="aL" fill="none" stroke="#E5443B" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round"/><path class="aLh" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path class="aR" fill="none" stroke="#E5443B" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round"/><path class="aRh" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>
 <g class="props">
  <g class="pcrop"><rect x="-24" y="-20" width="48" height="40" rx="4" fill="#fff" fill-opacity=".4"/><path d="M-24 -9V-20H-12M12 -20H24V-9M24 9V20H12M-12 20H-24V9" stroke="#1D2140" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M-8 -20V20M8 -20V20M-24 -7H24M-24 7H24" stroke="#1D2140" stroke-opacity=".22" stroke-width="1"/></g>
  <g class="plens"><path class="plh" stroke="#1D2140" stroke-width="5" stroke-linecap="round"/><circle r="15" fill="#B9C3FF" fill-opacity=".4" stroke="#1D2140" stroke-width="4"/><path d="M-9 -4A10 10 0 0 1 -2 -10" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/></g>
  <g class="pclap"><rect x="-24" y="-12" width="48" height="30" rx="3.5" fill="#1D2140"/><path d="M-17 -3H17M-17 4H9" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/><g class="cl" transform="translate(-24 -12)"><rect y="-11" width="48" height="11" rx="2.5" fill="#fff" stroke="#1D2140" stroke-width="2"/><path d="M8 -11L14 0M21 -11L27 0M34 -11L40 0" stroke="#1D2140" stroke-width="3.6"/></g></g>
  <g class="pmal"><g class="mh"><rect x="-3" y="-34" width="6" height="34" rx="3" fill="#B47A45"/><rect x="-14" y="-52" width="30" height="20" rx="5" fill="url(#${u}t)" stroke="#8C95AD" stroke-width="1"/><rect x="-14" y="-45" width="30" height="5" fill="#F2483F" opacity=".9"/></g></g>
 </g>
 ${['phL', 'phR'].map(c => `<g class="hd ${c}"><g class="hrot"><g class="go"><rect x="-6.6" y="3" width="3.2" height="9" rx="1.6" fill="url(#${u}h)"/><rect x="-2.6" y="3" width="3.2" height="11" rx="1.6" fill="url(#${u}h)"/><rect x="1.4" y="3" width="3.2" height="11" rx="1.6" fill="url(#${u}h)"/><rect x="5" y="3" width="3.2" height="9" rx="1.6" fill="url(#${u}h)"/></g><g class="gp"><rect x="-2" y="2" width="4.2" height="14" rx="2.1" fill="url(#${u}h)" stroke="#B64A40" stroke-opacity=".3" stroke-width=".8"/></g><circle r="7.6" fill="url(#${u}h)" stroke="#B64A40" stroke-opacity=".3" stroke-width=".9"/><path d="M-4 3.5Q0 6 4 3.5" stroke="#B64A40" stroke-opacity=".3" stroke-width="1" fill="none"/></g><g class="gt"><rect x="-3.8" y="-19" width="7.6" height="15" rx="3.8" fill="url(#${u}h)" stroke="#B64A40" stroke-opacity=".3" stroke-width=".8"/></g></g>`).join('')}
</g></svg>`;
    const pipEl = A.el('div', 'pip', S, pipSVG);
    const g = c => pipEl.querySelector('.' + c);
    const P = {};
    ['ps', 'bd', 'an', 'as', 'ab', 'ag', 'chL', 'chR', 'lt', 'lb', 'lu', 'ld', 'brL', 'brR', 'ms', 'mo', 'mc', 'tg', 'mg', 'sw', 'aL', 'aLh', 'aR', 'aRh', 'phL', 'phR', 'fL', 'fR', 'pcrop', 'plens', 'plh', 'pclap', 'pmal', 'mh', 'cl', 'st0', 'st1', 'st2'].forEach(c => { P[c] = g(c); });
    P.ir = [...pipEl.querySelectorAll('.ir')]; P.eye = [...pipEl.querySelectorAll('.eye')]; P.lt2 = [...pipEl.querySelectorAll('.lt')]; P.lb2 = [...pipEl.querySelectorAll('.lb')]; P.lu2 = [...pipEl.querySelectorAll('.lu')]; P.ld2 = [...pipEl.querySelectorAll('.ld')]; P.rg2 = [...pipEl.querySelectorAll('.er')];
    const hp = e => ({ rt: e.querySelector('.hrot'), go: e.querySelector('.go'), gp: e.querySelector('.gp'), gt: e.querySelector('.gt') });
    const HP = { L: hp(P.phL), R: hp(P.phR) };

    /* Moods. lt/lb upper/lower lid, bl/bR brow heights, bt brow tilt, ch cheeks, w/c/o/r/u mouth, an antenna angle, aw wiggle, gl glow, tl head tilt, es eye scale, wk right-eye wink. */
    const MOOD = {
      neutral:   { lt: .14, lb: 0,   bl: 0,  bR: 0,  bt: 0,   ch: .3,  w: 9,  c: 3,  o: 0,   r: 0,   u: 0, an: 6,  aw: 3,  gl: .3, tl: 0,  es: 1,    wk: 0 },
      happy:     { lt: .08, lb: .4,  bl: -3, bR: -3, bt: -6,  ch: .75, w: 13, c: 6,  o: .5,  r: 0,   u: 0, an: 0,  aw: 10, gl: .6, tl: -2, es: 1,    wk: 0 },
      wink:      { lt: .08, lb: .35, bl: -4, bR: 2,  bt: -4,  ch: .8,  w: 11, c: 5,  o: 0,   r: 0,   u: 3, an: 12, aw: 8,  gl: .6, tl: 3,  es: 1,    wk: 1 },
      surprised: { lt: 0,   lb: 0,   bl: -9, bR: -9, bt: -7,  ch: .15, w: 5.5,c: 0,  o: .62, r: 1,   u: 0, an: 0,  aw: 2,  gl: .9, tl: 0,  es: 1.12, wk: 0 },
      thinking:  { lt: .22, lb: .05, bl: -7, bR: 1,  bt: 4,   ch: .15, w: 7,  c: -1, o: 0,   r: 0,   u: 2, an: 26, aw: 2,  gl: .2, tl: 5,  es: 1,    wk: 0 },
      effort:    { lt: .34, lb: .24, bl: 2,  bR: 2,  bt: 15,  ch: .55, w: 12, c: -1, o: .3,  r: 0,   u: 0, an: 4,  aw: 14, gl: .1, tl: 0,  es: 1,    wk: 0 },
      celebrate: { lt: .04, lb: .5,  bl: -5, bR: -5, bt: -9,  ch: .9,  w: 15, c: 6,  o: .95, r: 0,   u: 0, an: 0,  aw: 16, gl: 1,  tl: 0,  es: 1,    wk: 0 },
      sleepy:    { lt: .62, lb: .1,  bl: 3,  bR: 3,  bt: -10, ch: .45, w: 7,  c: 1,  o: 0,   r: 0,   u: 0, an: -72,aw: 2,  gl: 0,  tl: 4,  es: 1,    wk: 0 },
      yawn:      { lt: .86, lb: .2,  bl: -3, bR: -3, bt: -8,  ch: .5,  w: 9,  c: 0,  o: 1,   r: .75, u: 0, an: -40,aw: 2,  gl: 0,  tl: -3, es: 1,    wk: 0 },
      proud:     { lt: .2,  lb: .25, bl: -3, bR: -3, bt: -4,  ch: .65, w: 11, c: 5,  o: 0,   r: 0,   u: 0, an: 0,  aw: 4,  gl: .85,tl: -3, es: 1,    wk: 0 },
    };
    /* Arm poses [upper, forearm] in degrees from "hanging down", plus hand shape: f fist, o open, p point, t thumb. */
    const GEST = {
      rest:    { L: [15, 8], R: [15, 8], hl: 'f', hr: 'f' },
      wave:    { L: [15, 8], R: [134, 24], hl: 'f', hr: 'o' },
      point:   { L: [15, 8], R: [130, 26], hl: 'f', hr: 'p' },
      thumb:   { L: [15, 8], R: [66, 98], hl: 'f', hr: 't' },
      cheer:   { L: [150, 16], R: [150, 16], hl: 'o', hr: 'o' },
      stretch: { L: [172, 4], R: [172, 4], hl: 'o', hr: 'o' },
      hold:    { L: [-41, 0], R: [-41, 0], hl: 'f', hr: 'f' },
      lens:    { L: [15, 8], R: [58, 62], hl: 'f', hr: 'f' },
      push:    { L: [38, 62], R: [86, 4], hl: 'f', hr: 'f' },
      hammer:  { L: [30, 40], R: [120, 20], hl: 'f', hr: 'f' },
      pedal:   { L: [42, 44], R: [42, 44], hl: 'f', hr: 'f' },
    };
    /* Beats: when Pip changes mood, gesture, prop, or looks somewhere (lk = [x,y] -1..1). */
    const B = [
      [0, 'neutral', 'rest'], [0.88, 'surprised', 'rest'], [1.15, 'sleepy', 'rest'], [1.4, 'yawn', 'stretch'], [2.0, 'wink', 'wave'], [2.45, 'happy', 'rest'], [3.2, 'happy', 'point'], [3.9, 'neutral', 'rest'],
      [5.4, 'surprised', 'rest'], [5.95, 'happy', 'thumb'], [7.0, 'thinking', 'rest', null, [0.8, -0.7]], [7.9, 'wink', 'point'], [9.4, 'proud', 'thumb'], [10.1, 'neutral', 'rest'],
      [10.8, 'effort', 'push'], [14.3, 'celebrate', 'cheer'], [14.95, 'proud', 'thumb'], [16.3, 'happy', 'rest'],
      [17.55, 'surprised', 'rest'], [17.75, 'wink', 'point'], [19.1, 'happy', 'hold', 'pcrop'], [20.5, 'neutral', 'hold', 'pcrop'], [22.65, 'happy', 'hold', 'pcrop'], [23.3, 'celebrate', 'cheer'], [23.95, 'proud', 'rest'],
      [24.15, 'surprised', 'rest'], [24.5, 'thinking', 'lens', 'plens', [0.2, 0.5]], [25.4, 'surprised', 'lens', 'plens'], [26.2, 'neutral', 'lens', 'plens'], [26.75, 'effort', 'hammer', 'pmal'], [28.5, 'celebrate', 'cheer'], [29.2, 'proud', 'thumb'], [29.9, 'happy', 'rest'],
      [30.2, 'wink', 'point'], [31.0, 'neutral', 'rest'], [32.6, 'happy', 'hold', 'pclap'], [33.0, 'effort', 'pedal'], [35.2, 'celebrate', 'cheer'], [36.0, 'happy', 'cheer'], [37.4, 'proud', 'thumb'], [38.6, 'happy', 'wave'],
    ].map(b => ({ t: b[0], m: b[1], g: b[2], p: b[3] || null, lk: b[4] || null }));
    const beatAt = t => { let i = 0; while (i < B.length - 1 && t >= B[i + 1].t) i++; return [B[Math.max(0, i - 1)], B[i]]; };
    const blendM = (a, b, k) => { const o = {}; for (const f in b) o[f] = lerp(a[f], b[f], k); return o; };
    const armP = (s, a1, a2) => {
      const Sx = s < 0 ? 36 : 124, Sy = 113, r1 = a1 * Math.PI / 180, r2 = (a1 + a2) * Math.PI / 180;
      const Ex = Sx + s * 17 * Math.sin(r1), Ey = Sy + 17 * Math.cos(r1);
      return { Sx, Sy, Ex, Ey, Hx: Ex + s * 15 * Math.sin(r2), Hy: Ey + 15 * Math.cos(r2), th: -s * (a1 + a2) };
    };

    /* ================= layout constants ================= */
    const DOCK = web ? { x: 50, y: 742, s: 0.72 } : { x: 54, y: 804, s: 0.72 };
    const HEAD = (p, k = 1) => ({ x: p.x, y: p.y - 150 * p.s * k });
    const MC = web ? { x: 52, y: 690, r: 188, a0: 86, da: 20 } : { x: 54, y: 756, r: 160, a0: 88, da: 21 };
    const lay = { ready: false };
    const pos = e => { let x = 0, y = 0; for (let n = e; n && n !== S; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; } return { x, y }; };
    const initLay = () => {
      lay.ready = true;
      lay.st = ['.sw-st', '.pv-st', '.gw-st'].map(sel => {
        const e = q(sel), p = pos(e), w = e.offsetWidth, h = e.offsetHeight, ds = Math.min(1.25, w / 358);
        e.style.setProperty('--ds', ds.toFixed(3));
        return { cx: p.x + w / 2, cy: p.y + h / 2, ds };
      });
    };
    const dS = (k, x, y) => { const L = lay.st[k]; return { x: L.cx + (x - 179) * L.ds, y: L.cy + (y - 98) * L.ds }; };

    /* Pip's route: [landTime, x, y, scale, hopSeconds]. Stage spots depend on layout. */
    let SPOTS = null;
    const buildSpots = () => {
      const c = web ? { x: 640, y: 610, s: 1.6 } : { x: 195, y: 610, s: 1.55 };
      const sw = dS(0, 77, 164), pv = dS(1, 84, 164), gw = dS(2, 118, 166), sc = web ? 0.9 : 0.86;
      SPOTS = [
        [0.88, c.x, c.y, c.s, 0.3], [3.0, DOCK.x, DOCK.y, DOCK.s, 0.55],
        [10.75, sw.x, sw.y, sc * lay.st[0].ds, 0.55], [15.45, DOCK.x, DOCK.y, DOCK.s, 0.6],
        [27.3, pv.x, pv.y, sc * lay.st[1].ds, 0.5], [29.45, DOCK.x, DOCK.y, DOCK.s, 0.55],
        [33.3, gw.x, gw.y, sc * lay.st[2].ds, 0.5], [36.0, DOCK.x, DOCK.y, DOCK.s, 0.45],
      ];
    };
    const posAt = t => {
      let i = 0; while (i < SPOTS.length - 1 && t >= SPOTS[i + 1][0]) i++;
      const a = SPOTS[i], b = SPOTS[i + 1];
      let x = a[1], y = a[2], s = a[3], air = 0, sx = 1, sy = 1;
      if (b) {
        const hd = b[4], q1 = seg(t, b[0] - hd, b[0]);
        if (q1 > 0) {
          const e = E.inOut(q1);
          x = lerp(a[1], b[1], e); y = lerp(a[2], b[2], e); s = lerp(a[3], b[3], e);
          air = Math.sin(Math.PI * q1) * (50 + Math.abs(b[1] - a[1]) * 0.12);
          sy = 1 + 0.14 * Math.sin(Math.PI * q1); sx = 1 - 0.09 * Math.sin(Math.PI * q1);
        } else { const k = Math.sin(Math.PI * seg(t, b[0] - hd - 0.16, b[0] - hd)); sy -= 0.13 * k; sx += 0.09 * k; }
      }
      const d = t - a[0];
      if (i > 0 && d >= 0 && d < 0.9) { const dec = Math.exp(-6 * d) * Math.cos(15 * d); sy -= 0.2 * dec; sx += 0.15 * dec; }
      if (t < 0.9) { const f = E.in(seg(t, 0.1, 0.88)); air = (1 - f) * 760; sy = 1.1; sx = 0.93; }
      if (i === 0 && t >= 0.88) { const d0 = t - 0.88, dec = Math.exp(-6 * d0) * Math.cos(15 * d0); sy -= 0.22 * dec; sx += 0.16 * dec; }
      return { x, y, s, air, sx, sy };
    };
    /* completion squash-and-stretch: hop, squash, spring */
    const WIN = [14.3, 23.3, 28.5, 35.2, 36.9];
    const winKick = t => { let k = 0, sq = 0; WIN.forEach(w => { const d = t - w; if (d > 0 && d < 0.6) { k = Math.max(k, Math.sin(Math.PI * seg(d, 0, 0.42)) * 30); } if (d >= 0.42 && d < 1.1) { const e = d - 0.42; sq = Math.max(sq, Math.exp(-7 * e) * Math.cos(16 * e)); } }); return { k, sq }; };

    /* ================= DOM: shared builders ================= */
    const ring = (sz, sw) => { const r = sz / 2 - sw / 2 - 0.5, c = 2 * Math.PI * r; return `<svg class="ring" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}"><circle cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="#E1E5F5" stroke-width="${sw}"/><circle class="rgp" cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="url(#${u}gr)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${c.toFixed(2)}" transform="rotate(-90 ${sz / 2} ${sz / 2})" data-c="${c.toFixed(2)}"/></svg>`; };
    const flameSVG = `<svg width="18" height="22" viewBox="0 0 20 24"><path d="M10 1c1 5 7 7 7 14a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 2.5 4C9 8 8 5 10 1z" fill="#FF8A3D"/><path d="M10 12c1 2 3.5 3 3.5 6a3.5 3.5 0 0 1-7 0c0-2 1.5-3 2-4 .4 1 .8 1.5 1.5 1.5z" fill="#FFD84D"/></svg>`;
    const miniFace = `<svg width="30" height="30" viewBox="0 0 30 30"><defs><linearGradient id="${u}mf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF7569"/><stop offset="1" stop-color="#D9362F"/></linearGradient></defs><rect x="4" y="5" width="22" height="22" rx="10" fill="url(#${u}mf)"/><path d="M17 6c0-3 2-4 5-4.5-1 1.5-2 3-2 4.5z" fill="#C3CADB"/><circle cx="11.5" cy="15" r="3.4" fill="#fff"/><circle cx="18.5" cy="15" r="3.4" fill="#fff"/><circle cx="12" cy="15.5" r="1.8" fill="#2B3170"/><circle cx="19" cy="15.5" r="1.8" fill="#2B3170"/><path d="M12 21q3 2.4 6 0" stroke="#7A1512" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;
    const TL = [['shrink', 'Shrink', '#F2483F', 1], ['crop', 'Crop', '#6573F0', 2], ['pin', 'Place', '#19B58A', 3], ['film', 'GIF', '#D08A0A', 4], ['convert', 'Convert', '#F2704E', 5]];
    const QS = [['shrink', 'Shrink a photo'], ['crop', 'Crop for social'], ['pin', 'Check a location']];
    const questsH = `<div class="card qs"><div class="qh"><b>Daily quests</b><span class="num qn">0/3</span></div>${QS.map(x => `<div class="qi"><i class="qc"><s>${I(x[0], 14, 2.4)}</s><u>${I('check', 14, 3.2)}</u></i><span>${x[1]}</span><em>+20 XP</em></div>`).join('')}</div>`;
    const dash = `<div class="hdr"><div class="av">${ring(46, 4)}<div class="face">${miniFace}</div></div><div class="lv"><span class="lvb">Lv&nbsp;<i class="lvn">7</i></span><span class="xpt">90 / 200 XP</span></div>
      <div class="qd">${QS.map((x, i) => `<i class="qp qp${i}">${I(x[0], 13, 2.4)}</i>`).join('')}</div><div class="fl">${flameSVG}<span class="fln">5</span></div><div class="qt"><span class="qtt">Quest done</span></div></div>`;
    const ratioBox = (p, m = 26) => { const w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const mapSVG = `<svg class="mp" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="#E8F3EE"/><path d="M-10 150C80 128 120 172 200 140S330 80 410 100" stroke="#BFE0F5" stroke-width="20" fill="none"/><path d="M0 60h400M70 0v200M160 0l40 200M290 0v200M0 176h400M340 0l-60 200" stroke="#fff" stroke-width="9"/><path d="M0 104h400" stroke="#FFE6A8" stroke-width="11"/><rect x="84" y="14" width="62" height="34" rx="9" fill="#CDEBD9"/><rect x="300" y="118" width="70" height="44" rx="10" fill="#D9E0FF"/><circle cx="240" cy="30" r="16" fill="#CDEBD9"/></svg>`;
    const pinSVG = `<svg viewBox="0 0 34 44" width="34" height="44"><path d="M17 43S3 27 3 16a14 14 0 0 1 28 0c0 11-14 27-14 27z" fill="#F2483F"/><path d="M9 12a9 9 0 0 1 6-6" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6" fill="none"/><circle cx="17" cy="16" r="5.5" fill="#fff"/></svg>`;
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(i * 1.5 | 0)}"></i>`).join('');
    const results = [[th.p, 'Exam photo', `${D.shrink.size} · JPG`], [th.m, 'Instagram post', D.crop.px], [th.c, 'City photo', 'Place removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const hexBadge = `<svg class="hx" width="34" height="38" viewBox="0 0 34 38"><defs><linearGradient id="${u}hx" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD97E"/><stop offset="1" stop-color="#E5A21F"/></linearGradient></defs><path d="M17 1l14 8v20L17 37 3 29V9z" fill="url(#${u}hx)" stroke="#C98A0B" stroke-width="1.5"/><path d="M17 9l8 3v7c0 5-3.5 8-8 10-4.5-2-8-5-8-10v-7z" fill="#fff" fill-opacity=".92"/><path d="M13.5 19l2.8 2.8 5-5.6" stroke="#19B58A" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const pg = (cls, inner, parent) => A.el('div', 'pg ' + cls, parent, inner);
    const diorama = k => ['<div class="dio"><i class="floor"></i><b class="steel wall" style="left:292px;top:40px;width:20px;height:126px"></b><b class="steel plate" style="top:48px;width:16px;height:114px"></b><i class="phs" style="top:52px;height:110px;background-image:' + th.p + '"></i>' + Array.from({ length: 8 }, (_, i) => `<i class="fk" style="background:${['#F2483F', '#F5B83D', '#6573F0', '#19B58A'][i % 4]}"></i>`).join('') + '</div>',
      `<div class="dio"><i class="floor"></i><b class="steel anvil" style="left:128px;top:138px;width:130px;height:26px"></b><div class="pin" style="left:193px;top:140px">${pinSVG}</div><svg class="shd" style="left:164px;top:76px" width="62" height="72" viewBox="0 0 62 72"><path d="M31 3l24 9v18c0 17-10 31-24 38C17 61 7 47 7 30V12z" fill="#19B58A" stroke="#fff" stroke-width="3"/><path d="M20 35l8 8 15-17" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>${Array.from({ length: 7 }, (_, i) => `<i class="fk" style="background:${['#F2483F', '#FF8A6B', '#F5B83D'][i % 3]}"></i>`).join('')}</div>`,
      `<div class="dio"><i class="floor"></i><svg class="gear" style="left:88px;top:118px" width="64" height="64" viewBox="-32 -32 64 64"><circle r="26" fill="#fff" stroke="#8791AA" stroke-width="5"/><circle r="26" fill="none" stroke="#C2C9DA" stroke-width="2" stroke-dasharray="4 5"/><path d="M0 -22V22M-22 0H22M-16 -16L16 16M16 -16L-16 16" stroke="#C2C9DA" stroke-width="3"/><circle r="6" fill="#F5B83D"/></svg><b class="steel belt" style="left:196px;top:120px;width:160px;height:8px;border-radius:4px"></b><div class="film" style="left:196px;top:96px;width:160px;height:50px;overflow:hidden;border-radius:8px;background:#1D2140"><div class="reel" style="position:absolute;left:0;top:6px;display:flex;gap:6px">${Array.from({ length: 8 }, (_, i) => `<i style="width:42px;height:38px;border-radius:5px;flex:none;background:center/cover ${A.frame(i * 2)}"></i>`).join('')}</div></div><b class="num fcnt" style="left:206px;top:60px;font-size:24px;color:#1D2140;width:150px;text-align:right">0 / 36</b><div class="gifc" style="left:196px;top:34px;width:150px;height:116px"><em>2.1 MB</em></div></div>`][k];

    const stepsH = a => `<div class="stps">${a.map(l => `<div class="sp"><i>${I('check', 11, 3.8)}</i>${l}</div>`).join('')}</div>`;
    const factsH = (rows, title, wf = true) => `<div class="card facts${wf ? ' wf' : ''}">${title ? `<b class="ft">${title}</b>` : ''}${rows.map(r => `<div class="row"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}</div>`;
    const tipH = () => `<div class="tipc">${I('sparkle', 16, 2.2)}<span class="tp"></span></div>`;
    const TIPS = [[`Exam sites often reject photos over 200 KB.`, `Faces stay sharp. I only trim the extras.`, `Nothing leaves your ${dev} while I work.`], [`GPS tags can show your home to strangers.`, `I wipe the time and camera name too.`, `Your original stays safe on your ${dev}.`], [`12 frames a second keeps a GIF light.`, `A 3 second loop is about 2 MB.`, `A GIF repeats forever. No sound, no fuss.`]];
    const bkinds = A.bars(4, A.BAR_KINDS, 7);
    const SZ = { streams: [322, 64], liquid: [322, 30], orbit: [96, 96], tiles: [322, 60], comet: [322, 44], warp: [322, 100] };
    const SZM = { streams: [322, 44], liquid: [322, 24], orbit: [48, 48], tiles: [322, 40], comet: [322, 34], warp: [322, 48] };
    const BCOL = [['#F2483F', '#FF8A6B', '#F5B83D', '#1D2140'], ['#6573F0', '#A8B2FF', '#19B58A', '#1D2140'], ['#19B58A', '#5ED6B3', '#6573F0', '#1D2140'], ['#FF8A6B', '#F5B83D', '#F2483F', '#1D2140']];
    const mkBar = (i, mini, well) => { const k = bkinds[i], [w, h] = (mini ? SZM : SZ)[k]; return A.bar(well, k, { w, h, colors: BCOL[i], track: 'rgba(29,33,64,.09)', seed: 5 + i }); };

    /* ================= pages ================= */
    const main = A.el('div', 'main', S);
    const splash = A.el('div', 'splash', S, `<div class="gl"></div><div class="lk"><svg width="56" height="56" viewBox="0 0 56 56"><rect x="2" y="2" width="52" height="52" rx="16" fill="#F2483F"/><rect x="12" y="29" width="26" height="12" rx="6" fill="#fff"/><path d="M30 29L42 14q1.5-2 2.5 0L38 29z" fill="#fff"/><circle cx="19" cy="35" r="2.2" fill="#F2483F"/></svg><h1>Image Swiss Knife</h1><span class="spc">${I('lock', 14, 2.6)}Everything stays on your ${dev}</span></div>`);
    if (web) {
      A.el('div', 'rail', main, `<div class="lg"><svg width="26" height="26" viewBox="0 0 56 56"><rect x="8" y="29" width="26" height="12" rx="6" fill="#fff"/><path d="M26 29L38 12q1.5-2 2.5 0L34 29z" fill="#fff"/></svg></div>${TL.map((x, i) => `<div class="rt r${i}" style="--c:${x[2]}">${I(x[0], 20, 2.2)}${x[1]}</div>`).join('')}`);
      A.el('div', 'crumb', main, `<b>Image Swiss Knife</b><span class="crt">Home</span>`);
    }
    main.insertAdjacentHTML('beforeend', `<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="${u}gr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC94D"/><stop offset="1" stop-color="#FF8A3D"/></linearGradient></defs></svg>`);
    const cv = web ? A.el('div', 'cv', main) : main;
    const pages = {};
    const mk = (id, cls, inner) => { pages[id] = pg(cls, inner, cv); return pages[id]; };

    mk('home', 'pg-home', `<div class="l"><div><small class="eb">Good evening</small><h2 class="t" style="margin-top:2px">What shall we make today?</h2></div>
      <div class="hero card"><div class="ic">${I('shrink', 22, 2.4)}</div><div><small>Pip's pick</small><b>Shrink a photo</b><span>Exam forms want under 200 KB</span></div>${I('next', 18, 2.6)}</div>
      ${web ? `<div class="dz"><div class="ic">${I('upload', 22, 2.2)}</div><b>Drop a photo or video here</b><span>or press Ctrl O to choose a file · stays in your browser</span></div>` : ''}
      <div class="tools">${TL.map(x => `<div class="tl" style="--c:${x[2]}">${I(x[0], 22, 2.2)}${x[1]}</div>`).join('')}${web ? '' : `<div class="tl" style="--c:#5D6390">${I('grid', 22, 2.2)}More</div>`}</div>
      <div class="wfx"><b>Recent files</b><div class="rec">${[[3, 'Holiday-02.jpg', '2.4 MB'], [4, 'Poster.png', '890 KB'], [6, 'Receipt.jpg', '1.1 MB'], [8, 'Team.heic', '3.9 MB']].map(r => `<div class="rcf"><i style="background-image:${A.photo('abstract', { seed: r[0] })}"></i><b>${r[1]}</b><span>${r[2]}</span></div>`).join('')}</div></div>
      ${web ? '' : questsH}</div>`);
    if (!web) mk('gal', 'pg-gal', `<div class="l"><div class="gh"><h2 class="t">Choose a photo</h2><span>Recent</span></div><div class="gal">${[th.p, th.m, th.c, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)].map((b, i) => `<div class="th g${i}${i === 0 ? ' sel0' : ''}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 14, 3.4)}</div>` : ''}</div>`).join('')}</div></div>`);
    mk('p2', 'pg-p2', `<div class="l"><div class="file card"><i style="background-image:${th.p}"></i><div><b>${D.portrait.file}</b><span>${D.portrait.size} · ${D.portrait.dims}</span><em>${I('lock', 12, 2.8)}Stays on this ${dev}</em></div></div></div>
      <div class="r"><h3 class="t">Where will you use it?</h3><div class="opts">${[['WhatsApp', 'about 500 KB', 'share'], [D.shrink.target, D.shrink.rule, 'check'], ['Email', 'under 1 MB', 'save'], ['My own size', 'Type KB or MB', 'ruler']].map((o, i) => `<div class="opt o${i}"><i class="oi">${I(o[2], 17, 2.3)}</i><div><b>${o[0]}</b><span>${o[1]}</span></div>${i === 1 ? `<em class="pk">${I('sparkle', 11, 2.6)}Pip's pick</em>` : ''}<i class="rd">${I('check', 12, 3.6)}</i></div>`).join('')}</div>${factsH([['Convert', 'HEIC to JPG'], ['Resize to', D.shrink.px], ['Keep it', 'under 200 KB']], 'What Pip will do')}</div>`);
    mk('sw', 'shw', `<div class="l"><div class="stage sw-st">${diorama(0)}</div>${factsH([['File', D.portrait.file], ['Dimensions', D.portrait.dims], ['Output', D.shrink.rule]])}</div><div class="r"><div class="card pc"><div class="hd"><span class="stl">Squeezing pixels</span><b class="num big">4.8 MB</b></div><div class="well"></div><div class="cap">Goal: ${D.shrink.rule} · ${D.shrink.px}</div>${stepsH(['Read photo', 'Shrink to 200 KB', 'Check quality'])}${tipH()}</div></div>`);
    mk('shr', 'shr', `<div class="l rl"><div class="rph card"><i style="background-image:${th.p}"></i><b class="kb num">${D.shrink.size}</b></div><div class="rb"><small class="eb">Exam form ready</small><b class="num">${D.shrink.size}</b><s>was ${D.portrait.size}</s><div class="tags"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span>${D.shrink.target}</span></div></div></div>
      <div class="r"><div class="card cmp"><span>Before</span><div class="b"></div><b class="num">${D.portrait.size}</b><span>After</span><div class="b g ba"></div><b class="num">${D.shrink.size}</b></div><div class="qa"><div>${I('check', 15, 3)}Face stays sharp</div><div>${I('check', 15, 3)}Under 200 KB, ${D.shrink.format}</div></div>
      <div class="act"><div class="btn save">${I('save', 18, 2.6)}<span class="svl">Save</span>${web ? ' <kbd>Ctrl S</kbd>' : ''}</div><div class="btn sec">${I('share', 18, 2.4)}${web ? 'Share' : ''}</div></div></div>`);
    const arr = (id, cls, bg, fn, chips, rows, play, extra = '') => mk(id, 'pg-ar ' + cls, `<div class="l"><div class="pv" style="background-image:${bg}"><span class="fn">${fn}</span>${play ? `<i class="pl">${I('play', 24, 2)}</i>` : ''}</div></div><div class="r"><div class="card facts">${rows.map(r => `<div class="row"><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')}</div><div class="tip">${I('sparkle', 18, 2.2)}<span>${chips}</span></div>${extra}</div>`);
    arr('ac', 'arc', th.m, 'IMG_1650.JPG', web ? 'Click Pip, or press Space, for the tool fan.' : 'Tap Pip for the tool fan.', [['Size', '4000 × 3000'], ['Added', 'just now']], false, factsH([['1', 'Shrink'], ['2', 'Crop'], ['3', 'Place'], ['4', 'GIF'], ['5', 'Convert']], 'Quick keys').replace(/<span>(\d)<\/span>/g, '<span><kbd>$1</kbd></span>'));
    mk('pr', 'pg-pr', `<div class="l"><h3 class="t">Crop for…</h3><div class="file card"><i style="background-image:${th.m}"></i><div><b>IMG_1650.JPG</b><span>Mountain · 4000 × 3000</span></div></div></div>
      <div class="r"><div class="opts">${[0, 1, 2, 5, 7].map((k, i) => { const p = D.crop.presets[k]; return `<div class="opt c${i}">${ratioBox(p)}<div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div>${i === 0 ? `<em class="pk">${I('sparkle', 11, 2.6)}Pip's pick</em>` : ''}<i class="rd">${I('check', 12, 3.6)}</i></div>`; }).join('')}</div></div>`);
    mk('ed', 'pg-ed', `<div class="l"><div class="cbox"><div class="cimg" style="background-image:${th.m}"></div><div class="cfr"><b></b><b></b><b></b><b></b><s>${D.crop.ratio} · ${D.crop.px}</s></div></div></div>
      <div class="r"><div class="swap"><div class="card info"><div class="ratio">${'<i style="width:22px;height:27px"></i>'}</div><div><b>${D.crop.preset}</b><span>${D.crop.ratio} · ${D.crop.px}</span></div></div>
      <div class="card mini"><div class="hd"><span class="stl2">Cutting to size</span><b class="num cpx">0 px</b></div><div class="well"></div></div></div><div class="tip">${I('crop', 18, 2.2)}<span>Drag the photo to fit the frame.</span></div><div class="card facts wf"><b class="ft">Frame</b><div class="zoomr">Zoom<i></i>100%</div><div class="row"><span>Output</span><b>${D.crop.px}</b></div><div class="row"><span>Format</span><b>JPG</b></div></div>
      <div class="act"><div class="btn edn">${I('check', 18, 3)}Done${web ? ' <kbd>Enter</kbd>' : ''}</div></div></div>`);
    arr('ap', 'arp', th.c, D.place.file, 'Pip spotted something in this photo.', [['Taken', D.place.when], ['Camera', D.place.device]], false, factsH([['Format', 'JPG'], ['Tags found', 'GPS, time, camera'], ['Risk', 'Shows where you were']], 'Metadata'));
    mk('lo', 'pg-lo', `<div class="l"><div class="mapc card">${mapSVG}<div class="pin" style="left:${web ? 52 : 56}%;top:58%">${pinSVG}</div><i class="mph" style="background-image:${th.c}"></i><span class="coord">${D.place.lat}, ${D.place.lon}</span></div></div>
      <div class="r"><div class="place"><h2>${D.place.city}, ${D.place.country}</h2><span>${D.place.region} · ${D.place.when} · ${D.place.device}</span></div><div class="card warn">${I('eye', 20, 2.3)}<span>Anyone you share this with can see where you were.</span></div>${factsH([['Coordinates', D.place.lat + ', ' + D.place.lon], ['Taken', D.place.when], ['Camera', D.place.device]], 'Found in the file', false)}
      <div class="act"><div class="btn rm">${I('shield', 18, 2.4)}Remove location</div></div></div>`);
    mk('pw', 'shw', `<div class="l"><div class="stage pv-st">${diorama(1)}</div>${factsH([['File', D.place.file], ['Found', 'GPS, time, camera'], ['Place', D.place.city + ', ' + D.place.country]])}</div><div class="r"><div class="card pc"><div class="run"><div class="hd"><span class="stl">Reading tags</span><b class="num big">6 tags</b></div><div class="well"></div><div class="cap">Wiping GPS, time and camera notes</div>${stepsH(['Read tags', 'Wipe GPS', 'Seal file'])}${tipH()}</div><div class="okc">${I('shield', 24, 2.4)}<span>Location removed. Safe to share.</span></div></div></div>`);
    arr('ag', 'arg', A.frame(2), D.video.file, 'A video. Pip can make it a GIF.', [['Length', D.video.len], ['Size', '18.4 MB']], true, factsH([['Format', 'MP4'], ['Frame rate', '30 fps'], ['GIF at', D.video.fps + ' fps']], 'About this video'));
    mk('tr', 'pg-tr', `<div class="l"><div class="vidc"><span class="fn">${D.video.file}</span></div><div class="strip-c"><div class="strip-w"><div class="strip">${strip}<div class="selw"><b class="hdl thL" style="left:-12px"></b><b class="hdl thR" style="right:-12px"></b></div></div></div><div class="tm"><span>0:00</span><span>0:12</span></div></div></div>
      <div class="r"><div class="card tinfo"><b class="num tv">4.0 s</b><span class="tsub">0:04 to 0:08</span><div class="tags"><span>${D.video.fps} fps</span><span>about 2 MB</span><span>Loops</span></div></div>${factsH([['Source', D.video.file], ['Source length', D.video.len], ['Loop', 'Forever']], 'Details')}<div class="act"><div class="btn mk">${I('film', 18, 2.4)}Make GIF${web ? ' <kbd>Enter</kbd>' : ''}</div></div></div>`);
    mk('gw', 'shw', `<div class="l"><div class="stage gw-st">${diorama(2)}</div>${factsH([['File', D.video.file], ['Clip', D.video.from + ' to ' + D.video.to + ' · ' + D.video.clip], ['Output', D.video.frames + ' frames · ' + D.video.fps + ' fps']])}</div><div class="r"><div class="card pc"><div class="run"><div class="hd"><span class="stl">Cutting 0:04 to 0:07</span><b class="num big">0 frames</b></div><div class="well"></div><div class="cap">${D.video.clip} · ${D.video.fps} fps · ${D.video.frames} frames</div>${stepsH(['Trim 3.0 s', 'Make 36 frames', 'Pack the GIF'])}${tipH()}</div><div class="okc">${I('check', 24, 3)}<span>GIF ready: ${D.video.size}, ${D.video.frames} frames, loops forever.</span></div></div><div class="act"><div class="btn gsv">${I('save', 18, 2.6)}<span class="gsl">Save GIF</span></div></div></div>`);
    mk('dn', 'pg-dn', `<div class="l"><div><small class="eb">Done on your ${dev}</small><h2 class="t">All done. Nice work!</h2></div><div class="rg">${results.map((r, i) => `<div class="card rc r${i}"><i style="background-image:${r[0]}"></i><div><b>${r[1]}</b><span>${r[2]}</span></div><em>${I('check', 12, 3.6)}</em></div>`).join('')}</div>
      <div class="stat3"><div class="card"><b class="num">4.6 MB</b>saved</div><div class="card"><b class="num">0</b>uploads</div><div class="card"><b class="num">4</b>jobs done</div></div>
      <div class="rcp">${I('shield', 16, 2.4)}<span><b>${web ? D.promiseWeb : D.promise}</b></span></div>
      <div class="rcp">${I('check', 16, 3)}<span><b>${nTap} taps</b> and <b>${nDrag} drag${nDrag > 1 ? 's' : ''}</b> for 4 jobs</span></div></div>
      <div class="r"><div class="card lvc"><div class="big">${ring(54, 5)}<span class="num lv2">7</span><i class="pls"></i></div><div class="t"><b>Level <span class="lv3">7</span></b><span class="xp2">90 / 200 XP</span></div><b class="num gain">+130 XP</b></div>
      <div class="two"><div class="card bdg bd1 lock">${hexBadge}<div><b>Privacy Pro</b><span class="bds">Locked</span></div></div><div class="card bdg">${flameSVG}<div><b class="fl2">6-day streak</b><span>Keep it going</span></div></div></div>
      ${factsH([['Shrink a photo', '+20 XP'], ['Crop for social', '+20 XP'], ['Check a location', '+20 XP'], ['Video to GIF', '+30 XP'], ['Daily quest bonus', '+40 XP']], 'How you earned it')}<div class="ad"><i></i><div><small>Ad</small><span>A quiet sponsor message shows here, only after the work.</span></div></div>
      <div class="act"><div class="btn sall">${I('save', 18, 2.6)}<span class="sal">Save all 4</span>${web ? ' <kbd>Ctrl S</kbd>' : ''}</div>${web ? `<div class="btn sec">${I('share', 18, 2.4)}Share</div>` : ''}</div></div>`);
    if (!web) pages.home.querySelector('.qs').style.marginTop = '0';
    main.insertAdjacentHTML('beforeend', dash);
    const dash2 = q('.hdr');
    if (web) {
      A.el('div', 'side', main, `${questsH}<div class="card res"><div class="qh"><b>Results</b><span class="num rn">0/4</span></div>${results.map((r, i) => `<div class="rr s${i}"><i style="background-image:${r[0]}"></i><div><b>${r[1]}</b><span>${r[2]}</span></div><em>${I('check', 11, 3.6)}</em></div>`).join('')}</div>
        <div class="card res"><div class="qh"><b>Streak</b><span class="num" style="color:#F2831F">5 days</span></div><div class="wk">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `<div>${d}<i class="${i < 4 ? 'on' : i === 4 ? 'now' : ''}">${i < 5 ? flameSVG.replace('width="18" height="22"', 'width="12" height="15"') : ''}</i></div>`).join('')}</div></div>
        <div class="card res"><div class="tip">${I('sparkle', 18, 2.2)}<span>Press <b>Space</b> or click Pip to open his tool fan.</span></div></div>`);
    }

    /* wells, bars */
    const wells = pages.sw.querySelector('.well'), wellP = pages.pw.querySelector('.well'), wellG = pages.gw.querySelector('.well'), wellC = pages.ed.querySelector('.well');
    const bars = [mkBar(0, false, wells), mkBar(1, true, wellC), mkBar(2, false, wellP), mkBar(3, false, wellG)];

    /* quick menu */
    const scrim = A.el('div', 'scrim', S); scrim.style.setProperty('--qx', MC.x + 'px'); scrim.style.setProperty('--qy', MC.y + 'px');
    const qm = A.el('div', 'qm', S, TL.map((x, i) => `<div class="qb qb${i}" style="--c:${x[2]}">${I(x[0], 20, 2.2)}${x[1]}${web ? `<kbd>${x[3]}</kbd>` : ''}</div>`).join(''));
    const qbs = qa('.qb');
    const qbPos = i => { const a = (MC.a0 - i * MC.da) * Math.PI / 180; return { x: MC.x + MC.r * Math.cos(a), y: MC.y - MC.r * Math.sin(a) }; };
    const hint = A.el('div', 'hint', S);
    /* bubble */
    const bub = A.el('div', 'bub', S, '<span class="bt"></span><b class="pill"></b><i class="tail"></i>');
    const bt = bub.querySelector('.bt'), pill = bub.querySelector('.pill');
    const LINES = (web ? [
      [2.0, 'Hi, I am Pip!', null, 'up'], [2.45, null], [3.05, 'Tap me any time for quick tools.'], [3.9, 'Drop a photo on the canvas.'], [5.45, 'Whoa, nice shot!'], [6.1, 'Where will you use it?'], [7.4, 'Looks like a form photo. Exam form?'], [9.35, null],
    ] : [
      [2.0, 'Hi, I am Pip!', null, 'up'], [2.45, null], [3.05, 'Tap me any time for quick tools.'], [3.9, 'Pick the photo. I do the rest.'], [5.45, 'Whoa, nice shot!'], [6.1, 'Where will you use it?'], [7.4, 'Looks like a form photo. Exam form?'], [9.35, null],
    ]).concat([
      [10.0, null], [15.45, '196 KB. Fits the form! Save it.'], [15.75, 'Saved! Now something new.'], [17.1, 'A mountain! Tap me for tools.'], [17.68, null], [19.2, 'Pick a size. I hold the frame.'], [20.5, 'Drag the photo to fit.'], [22.7, null], [23.5, 'Cropped to 1080 × 1350.'],
      [24.1, 'This photo knows its location. Check?', 'Check'], [25.4, 'Found it: Pune, India.'], [26.2, 'Remove it before you share.'], [26.8, null], [29.5, 'Location gone. Safe to share!'],
      [30.1, 'A video! Make it a GIF?', 'Make a GIF'], [30.75, 'Trim 3 seconds. Drag the handle.'], [32.35, 'Perfect. Hit Make GIF!'], [32.85, null], [36.1, 'All four done. Level up!'], [37.9, 'Privacy Pro unlocked!'],
    ]);
    const xpc = [[14.45, '+20 XP'], [23.45, '+20 XP'], [28.6, '+20 XP'], [35.4, '+30 XP'], [36.95, '+40 XP']].map(x => ({ t: x[0], e: A.el('div', 'xpc', S, `${I('star', 14, 2.4).replace('fill="none"', 'fill="#fff" fill-opacity=".5"')}${x[1]}`) }));
    /* finish bursts */
    const burst = (tt, seed) => ({ t: tt, c: ['star', 'coin', 'spark'].map((sh, i) => A.confetti(S, { shape: sh, x: 0, y: 0, count: [12, 8, 16][i], colors: [['#F5B83D', '#FF8A6B', '#F2483F'], ['#F5B83D', '#FFD97E'], ['#FFD97E', '#fff', '#FF8A6B']][i], seed: seed + i, power: 520 + i * 40, spread: Math.PI * 1.25, gravity: 900, dur: 1.5 })) });
    const BURSTS = WIN.map((w, i) => burst(w + 0.05, 20 + i * 4));
    BURSTS.forEach(b => b.c.forEach(c => { c.el.style.zIndex = 52; }));
    const fcard = web ? A.el('div', 'fcard card', S, `<i style="background-image:${th.p}"></i><div>${D.portrait.file}<small>${D.portrait.size}</small></div>`) : null;
    A.pointer(keys);

    /* ================= timeline ================= */
    const PGS = web ? ['home', 'p2', 'sw', 'shr', 'ac', 'pr', 'ed', 'ap', 'lo', 'pw', 'ag', 'tr', 'gw', 'dn'] : ['home', 'gal', 'p2', 'sw', 'shr', 'ac', 'pr', 'ed', 'ap', 'lo', 'pw', 'ag', 'tr', 'gw', 'dn'];
    const TM = { home: [-9, 'fade', 0.01], gal: [4.0, 'push', 0.45], p2: [5.95, 'push', 0.45], sw: [9.5, 'iris', 0.7], shr: [14.9, 'zoom', 0.45], ac: [17.0, 'iris', 0.7], pr: [19.15, 'push', 0.4], ed: [20.35, 'zoom', 0.45], ap: [24.0, 'iris', 0.7], lo: [25.45, 'push', 0.4], pw: [26.85, 'zoom', 0.4], ag: [30.0, 'iris', 0.7], tr: [30.8, 'push', 0.4], gw: [32.85, 'zoom', 0.4], dn: [36.0, 'iris', 0.7] };
    const irisAt = web ? { cx: DOCK.x - 108, cy: DOCK.y - 72 - 55 } : { cx: DOCK.x, cy: DOCK.y - 60 };
    const R = {
      rgs: qa('.rgp'), lvn: [q('.lvn'), q('.lv2'), q('.lv3')], xpt: [q('.xpt'), q('.xp2')], qps: qa('.qp'), qis: qa('.qi'), qns: qa('.qn'), fl: q('.fln'), fl2: q('.fl2'), qt: q('.qt'), qtt: q('.qtt'),
      opts: qa('.o0,.o1,.o2,.o3'), cs: qa('.c0,.c1,.c2,.c3,.c4'), gal0: q('.g0'),
    };
    const steps = (pg, p, cuts) => [...pg.querySelectorAll('.sp')].forEach((e, i) => { const ok = p >= cuts[i], on = !ok && (i === 0 || p >= cuts[i - 1] - 0.0001) && p > 0; cls(e, 'ok', ok); cls(e, 'on', on); });
    const stageEls = { sw: pages.sw.querySelector('.dio'), pw: pages.pw.querySelector('.dio'), gw: pages.gw.querySelector('.dio') };
    const dEl = k => { const d = stageEls[k]; return { film: d.querySelector('.film'), belt: d.querySelector('.belt'), plate: d.querySelector('.plate'), phs: d.querySelector('.phs'), fk: [...d.querySelectorAll('.fk')], pin: d.querySelector('.pin'), shd: d.querySelector('.shd'), gear: d.querySelector('.gear'), reel: d.querySelector('.reel'), fcnt: d.querySelector('.fcnt') }; };
    const DE = { sw: dEl('sw'), pw: dEl('pw'), gw: dEl('gw') };
    const XPS = [[14.45, 20], [23.45, 20], [28.6, 20], [35.35, 30], [36.9, 40]];
    const xpTotal = t => 90 + XPS.reduce((a, x) => a + x[1] * E.out(seg(t, x[0], x[0] + 0.7)), 0);
    const QT = [14.6, 23.55, 28.7];
    const crumbT = t => t < 4 ? 'Home' : t < 5.9 ? 'Choose a file' : t < 14.4 ? 'Shrink · ' + D.portrait.file : t < 17 ? 'Shrink · Done' : t < 24 ? 'Crop · IMG_1650.JPG' : t < 30 ? 'Place · ' + D.place.file : t < 36 ? 'GIF · ' + D.video.file : 'Summary';
    const railOn = t => t < 9.5 ? -1 : t < 17 ? 0 : t < 24 ? 1 : t < 30 ? 2 : t < 36 ? 3 : -1;

    return {
      update(t) {
        if (!lay.ready) { initLay(); buildSpots(); }
        /* chrome in */
        const ci = seg(t, 2.35, 3.05);
        A.reveal(main, 'iris', ci, { cx: web ? 640 : 195, cy: web ? 410 : 460 });
        set(splash, { o: 1 - seg(t, 3.0, 3.1) });
        set(q('.splash .lk'), { y: -6 * seg(t, 0.2, 1), o: seg(t, 0.15, 0.8) });
        set(q('.splash .gl'), { s: 0.7 + 0.3 * E.out(seg(t, 0, 1.2)), o: seg(t, 0, 1) });

        /* pages */
        PGS.forEach((id, i) => {
          const e = pages[id], [t0, kind, dur] = TM[id], nxt = PGS[i + 1] ? TM[PGS[i + 1]] : null;
          e.style.zIndex = 5 + i;
          const covered = nxt && t >= nxt[0] + nxt[2] + 0.02;
          if (covered || (i > 0 && t < t0)) { e.style.visibility = 'hidden'; e.style.opacity = '0'; return; }
          A.reveal(e, kind, i === 0 ? 1 : (kind === 'iris' ? seg(t, t0, t0 + dur) : E.out(seg(t, t0, t0 + dur))), { cx: irisAt.cx, cy: irisAt.cy, dir: 'r' });
          if (nxt && PGS[i + 1] && TM[PGS[i + 1]][1] !== 'iris' && t >= nxt[0]) e.style.opacity = (1 - 0.92 * E.out(seg(t, nxt[0], nxt[0] + nxt[2] * 0.7))).toFixed(3);
        });
        if (dash2) { set(dash2, { o: ci }); }
        if (web) {
          qa('.rail,.side,.crumb').forEach(e => set(e, { o: ci }));
          txt(q('.crt'), crumbT(t));
          const ro = railOn(t); qa('.rt').forEach((e, i) => cls(e, 'on', i === ro));
        }

        /* ----- game state ----- */
        const tot = xpTotal(t), lvlUp = tot >= 200, xp = lvlUp ? tot - 200 : tot, frac = clamp(xp / 200);
        R.rgs.forEach(r => { const c = +r.dataset.c; r.style.strokeDashoffset = (c * (1 - frac)).toFixed(2); });
        const lvGlow = Math.max(A.win(t, 36.9, 38.2, 0.12, 0.8), ...XPS.slice(0, 4).map(x => 0.6 * A.win(t, x[0] + 0.3, x[0] + 1.3, 0.1, 0.8)));
        qa('.av').forEach(a => { a.style.filter = lvGlow > 0.02 ? `drop-shadow(0 0 ${(6 * lvGlow).toFixed(1)}px rgba(245,184,61,${lvGlow.toFixed(2)}))` : ''; });
        const lvl = lvlUp && t >= 37.05 ? 8 : 7;
        R.lvn.forEach(e => txt(e, String(lvl)));
        R.xpt.forEach(e => txt(e, `${Math.round(xp)} / 200 XP`));
        qa('.lvb').forEach(e => { const d = t - 37.05; e.style.transform = d > 0 && d < 0.7 ? `scale(${(1 + 0.3 * Math.exp(-5 * d) * Math.cos(14 * d)).toFixed(3)})` : ''; });
        QT.forEach((qt, i) => { const on = t >= qt; cls(R.qps[i], 'ok', on); cls(R.qis[i], 'ok', on); });
        const nq = QT.filter(x => t >= x).length;
        R.qns.forEach(e => txt(e, nq + '/3'));
        const fl6 = t >= 37.4;
        txt(R.fl, fl6 ? '6' : '5'); txt(R.fl2, fl6 ? '6-day streak' : '5-day streak');
        qa('.fl').forEach(f => { const d = t - 37.4; f.style.transform = d > 0 && d < 0.8 ? `scale(${(1 + 0.25 * Math.exp(-5 * d) * Math.cos(14 * d)).toFixed(3)})` : ''; });
        /* header toast */
        let toast = null, tw = 0;
        QT.forEach((qt, i) => { const w = A.win(t, qt - 0.1, qt + 1.6, 0.2, 0.25); if (w > 0) { toast = `Quest done: ${QS[i][1]}`; tw = w; } });
        const wb = A.win(t, 36.9, 38.8, 0.2, 0.25); if (wb > 0) { toast = t < 37.45 ? 'All quests: +40 XP bonus' : 'Level up! Welcome to Level 8'; tw = wb; }
        cls(R.qt, 'gold', toast && t >= 37.45 && t < 38.9);
        if (toast) A.html(R.qt, `${I('check', 15, 3.2)}${toast}`);
        set(R.qt, { o: tw, x: (1 - tw) * 14 });
        qa('.lv,.qd').forEach(e => set(e, { o: 1 - Math.min(1, tw * 1.4) }));
        /* web results panel */
        if (web) { const done = [14.9, 23.6, 28.7, 35.4]; qa('.rr').forEach((r, i) => { r.style.borderStyle = t >= done[i] ? 'solid' : 'dashed'; r.style.borderColor = t >= done[i] ? '#BDEBDD' : ''; set(r, { o: t >= done[i] ? 1 : 0.55 }); r.querySelector('em').style.display = t >= done[i] ? '' : 'none'; }); txt(q('.rn'), done.filter(x => t >= x).length + '/4'); }
        txt(q('.sal'), t < 38.5 ? 'Save all 4' : web ? 'All 4 saved' : '4 files saved');

        /* ----- pick ----- */
        if (!web) {
          const sel = t >= 5.4; cls(R.gal0, 'sel', sel); set(q('.g0 .ck'), { s: E.outBack(seg(t, 5.4, 5.75)), o: sel ? 1 : 0 });
          A.press(R.gal0, t, 5.4);
          A.press(q('.hero'), t, 3.75);
        } else {
          const p = A.pointerAt(t);
          const fo = A.win(t, 4.45, 5.65, 0.15, 0.25);
          set(fcard, { x: p.x + 10, y: p.y + 12, r: 3, s: 1 - 0.3 * seg(t, 5.4, 5.65), o: fo * (p.vis > 0.05 ? 1 : 0) });
          cls(q('.dz'), 'hot', t > 4.9 && t < 5.5);
          set(q('.dz .ic'), { y: -3 * Math.sin(t * 3) });
        }
        const on1 = t >= 9.3; cls(R.opts[1], 'on', on1); A.press(R.opts[1], t, 9.3);
        R.opts.forEach((o, i) => { if (i !== 1) set(o, { o: 1 - 0.4 * seg(t, 9.3, 9.45) }); });
        const pr0 = t >= 19.9; cls(R.cs[0], 'on', pr0); A.press(R.cs[0], t, 19.9);
        R.cs.forEach((o, i) => { if (i) set(o, { o: 1 - 0.45 * seg(t, 19.9, 20.05) }); });
        A.press(q('.save'), t, 15.6); txt(q('.svl'), t >= 15.6 ? 'Saved' : 'Save'); cls(q('.save'), 'ok', t >= 15.6); txt(q('.gsl'), t >= 35.7 ? 'Saved' : 'Save GIF'); cls(q('.gsv'), 'ok', t >= 35.7); A.press(q('.edn'), t, 22.6); A.press(q('.rm'), t, 26.7); A.press(q('.mk'), t, 32.7); A.press(q('.gsv'), t, 35.7); A.press(q('.sall'), t, 38.4);

        /* ----- shrink process ----- */
        const D0 = DE.sw, sp = seg(t, 10.9, 14.3), sf = A.rush(sp);
        const pulse = Math.abs(Math.sin(t * 7.2)), plateX = lerp(150, 212, sf) - 7 * pulse * (sp > 0 && sp < 1 ? 1 : 0);
        set(D0.plate, { x: plateX, y: 0 });
        D0.plate.style.left = '0px';
        Object.assign(D0.phs.style, { left: (plateX + 16 + 0) + 'px', width: (292 - plateX - 16) + 'px' });
        set(D0.phs, { sy: 1 + 0.05 * pulse * (sp > 0 && sp < 1 ? 1 : 0) });
        D0.fk.forEach((k, i) => { const ph = (t * 1.5 + i * 0.37) % 1, on = sp > 0.02 && sp < 0.98; set(k, { x: plateX + 30 + i * 11 + ph * 20, y: 52 - ph * 46, r: ph * 260, o: on ? Math.sin(ph * Math.PI) : 0 }); });
        const bytes = lerp(D.portrait.bytes, D.shrink.bytes, sf);
        txt(pages.sw.querySelector('.big'), A.fmtBytes(bytes));
        steps(pages.sw, sp, [0.12, 0.85, 1]); txt(pages.sw.querySelector('.tp'), TIPS[0][Math.min(2, Math.floor(sp * 3))]);
        txt(pages.sw.querySelector('.stl'), sp < 0.3 ? 'Squeezing pixels' : sp < 0.6 ? 'Packing colours' : sp < 0.97 ? 'Checking: under 200 KB' : 'Fits the exam form');
        if (t > 10 && t < 15) bars[0].update(sp, t);
        /* ----- crop mini process ----- */
        const cp = seg(t, 22.65, 23.45);
        const sw1 = pages.ed.querySelector('.info'), mini = pages.ed.querySelector('.mini');
        const mw = A.win(t, 22.62, 23.85, 0.12, 0.14);
        set(sw1, { o: 1 - clamp(mw * 3) }); set(mini, { o: mw });
        txt(pages.ed.querySelector('.cpx'), Math.round(1080 * A.rush(cp)) + ' px');
        if (t > 22 && t < 24) bars[1].update(cp, t);
        const cq = E.inOut(seg(t, 20.5, 21.5)), cimg = pages.ed.querySelector('.cimg');
        set(cimg, { x: lerp(web ? 110 : 80, web ? -40 : -28, cq) });
        const frm = pages.ed.querySelector('.cfr'); set(frm, { s: 0.9 + 0.1 * E.spring(seg(t, 20.4, 21.0)), o: seg(t, 20.4, 20.55) });
        /* ----- privacy ----- */
        const pp = seg(t, 27.0, 28.5), pf = A.rush(pp), D1 = DE.pw;
        const pinE = pages.lo.querySelector('.pin');
        set(pinE, { y: -50 * (1 - E.outBack(seg(t, 25.5, 26.0))), o: seg(t, 25.5, 25.65) * (1 - seg(t, 26.85, 27.0)) });
        const hits = [27.55, 27.85, 28.15], hc = hits.filter(h => t >= h).length, hd = hits.length ? t - (hc ? hits[hc - 1] : 0) : 9;
        const pinSq = hc < 3 ? 1 - 0.22 * hc - 0.2 * Math.exp(-14 * hd) * (hc ? 1 : 0) : 0;
        set(D1.pin, { sy: Math.max(0.05, pinSq), sx: 1 + 0.2 * (1 - pinSq), o: (t < 26.85 ? 0 : 1) * (1 - seg(t, 28.15, 28.22)) });
        D1.fk.forEach((k, i) => { const d = t - 28.15, a = i / 7 * 6.28; set(k, { x: 210 + Math.cos(a) * 60 * E.out(clamp(d)), y: 130 + Math.sin(a) * 54 * E.out(clamp(d)) + 120 * d * d, o: d > 0 && d < 0.7 ? 1 - d / 0.7 : 0 }); });
        const shq = E.outBack(seg(t, 28.3, 28.75)); set(D1.shd, { s: 0.3 + 0.7 * shq, o: seg(t, 28.3, 28.4) });
        pages.pw.querySelector('.run').style.display = t >= 28.55 ? 'none' : '';
        pages.pw.querySelector('.okc').style.display = t >= 28.55 ? 'flex' : 'none';
        txt(pages.pw.querySelector('.stl'), pp < 0.35 ? 'Reading tags' : pp < 0.75 ? 'Wiping GPS' : 'Sealing the file');
        txt(pages.pw.querySelector('.big'), (n => n + (n === 1 ? ' tag' : ' tags'))(Math.round(6 * (1 - pf))));
        steps(pages.pw, pp, [0.2, 0.7, 1]); txt(pages.pw.querySelector('.tp'), TIPS[1][Math.min(2, Math.floor(pp * 3))]);
        if (t > 26.5 && t < 28.8) bars[2].update(pp, t);
        /* ----- GIF ----- */
        const gp = seg(t, 33.0, 35.2), D2 = DE.gw, made = t >= 35.2;
        const vid = pages.tr.querySelector('.vidc'); vid.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        pages.ag.querySelector('.pv').style.backgroundImage = A.frame(Math.floor(t * 8) % 12);
        const hq = E.inOut(seg(t, 31.5, 32.3)), L0 = 4 / 12, R0 = (8 - hq) / 12;
        const selw = pages.tr.querySelector('.selw'); selw.style.left = (L0 * 100) + '%'; selw.style.width = ((R0 - L0) * 100) + '%';
        txt(pages.tr.querySelector('.tv'), hq > 0.99 ? '3.0 s' : (4 - hq).toFixed(1) + ' s');
        txt(pages.tr.querySelector('.tsub'), `${D.video.from} to ${hq > 0.5 ? D.video.to : '0:08'}`);
        const gs = gp * 36, rot = (t - 33) * 300;
        at(D2.gear, 'style', `left:88px;top:118px;transform:rotate(${(gp > 0 && gp < 1 ? rot : 0).toFixed(1)}deg)`);
        set(D2.reel, { x: -((t * 70) % 96) });
        txt(D2.fcnt, `${Math.round(gs)} / 36`);
        txt(pages.gw.querySelector('.stl'), gp < 0.45 ? 'Cutting 0:04 to 0:07' : gp < 0.85 ? 'Making 36 frames' : 'Packing at 12 fps');
        txt(pages.gw.querySelector('.big'), `${Math.round(gs)} frames`);
        steps(pages.gw, gp, [0.2, 0.7, 1]); txt(pages.gw.querySelector('.tp'), TIPS[2][Math.min(2, Math.floor(gp * 3))]);
        const gifc = pages.gw.querySelector('.gifc'); gifc.style.backgroundImage = A.frame(4 + (Math.floor(t * 12) % 7));
        set(gifc, { s: 0.6 + 0.4 * E.outBack(seg(t, 35.2, 35.6)), o: seg(t, 35.2, 35.35) });
        [D2.gear, D2.film, D2.belt, D2.fcnt].forEach(e => set(e, { o: 1 - seg(t, 35.1, 35.28) }));
        pages.gw.querySelector('.run').style.display = made ? 'none' : '';
        pages.gw.querySelector('.okc').style.display = made ? 'flex' : 'none';
        set(pages.gw.querySelector('.act'), { o: seg(t, 35.2, 35.4) });
        if (t > 32.5 && t < 35.4) bars[3].update(gp, t);

        /* ----- done ----- */
        qa('.rc').forEach((c, i) => { const p = E.outBack(seg(t, 36.5 + i * 0.16, 37.0 + i * 0.16)); set(c, { y: (1 - p) * 20, o: seg(t, 36.5 + i * 0.16, 36.75 + i * 0.16) }); });
        const bd = pages.dn.querySelector('.bd1'); const bq = E.outBack(seg(t, 37.9, 38.4)); set(bd, { s: t < 37.9 ? 1 : 0.8 + 0.2 * bq });
        { const pl = pages.dn.querySelector('.pls'), d = seg(t, 37.05, 37.8); set(pl, { s: 1 + 0.9 * E.out(d), o: d > 0 && d < 1 ? 0.9 * (1 - d) : 0 }); }
        const ap = pages.dn.querySelector('.ad'); set(ap, { o: seg(t, 37.5, 37.9) });
        cls(bd, 'lock', t < 37.9); txt(pages.dn.querySelector('.bds'), t < 37.9 ? 'Locked' : 'Badge unlocked');

        /* ================= PIP ================= */
        let ln = null; for (const l of LINES) if (t >= l[0]) ln = l;
        const talk = ln && ln[1] ? 1 - seg(t, ln[0] + 0.25, ln[0] + 0.95) : 0;
        const p0 = posAt(t), kick = winKick(t), L = A.life(t, 3);
        const [pb, cb] = beatAt(t), bk = E.out(seg(t, cb.t, cb.t + 0.24));
        const M = Object.assign({}, t === cb.t ? MOOD[cb.m] : blendM(MOOD[pb.m], MOOD[cb.m], bk));
        const gk = E.out(seg(t, cb.t, cb.t + 0.32)), G0 = GEST[pb.g], G1 = GEST[cb.g];
        let aL = [lerp(G0.L[0], G1.L[0], gk), lerp(G0.L[1], G1.L[1], gk)], aR = [lerp(G0.R[0], G1.R[0], gk), lerp(G0.R[1], G1.R[1], gk)];
        const hl = gk > 0.4 ? G1.hl : G0.hl, hr = gk > 0.4 ? G1.hr : G0.hr;
        const st = { x: p0.x, y: p0.y, s: p0.s, air: p0.air + kick.k * p0.s, sx: p0.sx + 0.14 * kick.sq, sy: p0.sy - 0.18 * kick.sq, tl: M.tl + L.sway * 1.6, ox: 0, dx: 0, dy: 0 };
        let fL = [0, 0], fR = [0, 0], bob = 0, clapA = -8, swing = 0, sweat = 0;
        const br = L.breathe; st.sy += 0.012 * br; st.sx -= 0.006 * br;
        /* --- process choreography --- */
        if (cb.g === 'cheer' && t > 14.3 && t < 15 || cb.g === 'cheer') { const w = Math.sin(t * 10); aL[0] += w * 8; aR[0] -= w * 8; }
        if (cb.g === 'wave') aR[1] += Math.sin(t * 13) * 16 * gk;
        if (cb.g === 'stretch') { aL[0] += Math.sin(t * 26) * 2; aR[0] -= Math.sin(t * 26) * 2; }
        if (t >= 10.8 && t < 14.3) {
          const ex = 6 * pulse; aR[0] = 82 + ex * 0.4; aR[1] = 8; st.ox = (plateX - 150) * lerp(1, 1, 1) * 0 + 0; st.tl = 5 + 4 * pulse; bob = 2 * pulse; sweat = 1;
          const hx = lay.st ? dS(0, plateX - 8, 100).x : 0; st.x = hx - (156 - 80) * st.s;
        }
        if (cb.g === 'hammer' || (t >= 26.75 && t < 28.5)) {
          const k = hits.reduce((a, h) => { const d = t - h; return d > -0.3 && d < 0.1 ? Math.max(a, d < 0 ? -d / 0.3 : 1 - d / 0.1) : a; }, 0);
          swing = lerp(100, 22, 1 - k); aR[0] = lerp(120, 70, 1 - k); aR[1] = 20; sweat = 1; st.tl = -3 + 6 * (1 - k); bob = 5 * (1 - k);
          if (t < 27.3) { swing = 100; aR[0] = 120; }
        }
        if (t >= 33.0 && t < 35.2) {
          const th2 = (t - 33) * 9; fL = [Math.cos(th2) * 9, Math.sin(th2) * 7]; fR = [-Math.cos(th2) * 9, -Math.sin(th2) * 7]; bob = 1.5 * Math.sin(th2 * 2); sweat = 1; st.tl = 2 * Math.sin(th2);
          aL[0] = 40 + 6 * Math.sin(th2); aR[0] = 40 - 6 * Math.sin(th2);
        }
        if (cb.p === 'pclap' || (pb.p === 'pclap')) { clapA = t < 32.55 ? -12 : t < 32.9 ? -12 - 28 * seg(t, 32.55, 32.9) : -2 + 22 * seg(t, 32.9, 33.0); }
        if (t >= 14.3 && t < 15) st.tl = 3 * Math.sin(t * 14);
        st.air += bob;
        /* eyes */
        const ptr = A.pointerAt(t), eyeX = st.x, eyeY = st.y - 108 * st.s;
        let lx = L.look * 0.6, ly = Math.sin(t * 0.4) * 0.3;
        if (ptr.vis > 0.05) { const dx = ptr.x - eyeX, dy = ptr.y - eyeY, d = Math.hypot(dx, dy) || 1, m = Math.min(1, d / 160); lx = lerp(lx, dx / d * m, ptr.vis); ly = lerp(ly, dy / d * m, ptr.vis); }
        const lk = cb.lk; if (lk) { lx = lerp(lx, lk[0], gk); ly = lerp(ly, lk[1], gk); }
        if (t >= 11 && t < 14.3) { lx = 0.7; ly = 0.1; }
        if (t >= 27.5 && t < 28.4) { lx = 0.8; ly = 0.2; }
        if (t >= 33 && t < 35.2) { lx = 0.6; ly = -0.1; }
        /* ----- draw ----- */
        A.set(pipEl, { x: st.x - 80, y: st.y - 190, s: st.s, o: t < 0.12 ? 0 : 1 });
        P.bd.style.transform = `translate(0px,${(-st.air / st.s).toFixed(1)}px) translate(80px,186px) rotate(${st.tl.toFixed(2)}deg) scale(${st.sx.toFixed(4)},${st.sy.toFixed(4)}) translate(-80px,-186px)`;
        const shs = 1 - Math.min(0.5, st.air / 150); at(P.ps, 'transform', `translate(${80 * (1 - shs)} 0) scale(${shs.toFixed(3)} 1)`);
        /* antenna */
        const wig = Math.sin(t * (M.aw > 8 ? 16 : 5)) * M.aw, an = (M.an + wig) * Math.PI / 180, ax = 80 + 26 * Math.sin(an), ay = 46 - 26 * Math.cos(an);
        at(P.as, 'd', `M80 47Q${(80 + 8 * Math.sin(an * 0.4) - 4).toFixed(1)} ${(46 - 14).toFixed(1)} ${ax.toFixed(1)} ${ay.toFixed(1)}`);
        at(P.ab, 'transform', `translate(${ax.toFixed(1)} ${ay.toFixed(1)}) scale(${(1 + (M.es - 1) * 1.5).toFixed(2)})`); at(P.ag, 'opacity', M.gl.toFixed(2));
        /* eyes */
        const blink = L.blink * (M.lt > 0.5 ? 0.3 : 1);
        P.eye.forEach((e, i) => {
          const wk = i === 1 ? M.wk : 0, lt = clamp(Math.max(M.lt, wk) + (1 - Math.max(M.lt, wk)) * blink), lb = M.lb;
          at(e, 'transform', `translate(${i ? 102 : 58} 82) scale(${M.es.toFixed(3)})`);
          const yb = -17 + 33 * lt, yt = 17 - 33 * lb, cvb = 3 + 2 * lt;
          at(P.lt2[i], 'd', `M-14 -18H14V${f1(yb)}Q0 ${f1(yb + 2 * cvb)} -14 ${f1(yb)}Z`);
          at(P.lu2[i], 'd', lt > 0.03 ? `M-13 ${f1(yb)}Q0 ${f1(yb + 2 * cvb)} 13 ${f1(yb)}` : '');
          at(P.lb2[i], 'd', lb > 0.02 ? `M-14 18H14V${f1(yt)}Q0 ${f1(yt - 6)} -14 ${f1(yt)}Z` : '');
          at(P.ld2[i], 'd', lb > 0.02 ? `M-13 ${f1(yt)}Q0 ${f1(yt - 6)} 13 ${f1(yt)}` : '');
          at(P.rg2[i], 'opacity', clamp(1 - lt * 1.6).toFixed(2));
          at(P.ir[i], 'transform', `translate(${(lx * 3.8).toFixed(2)} ${(ly * 3.2).toFixed(2)})`);
        });
        at(P.brL, 'transform', `translate(58 ${(63 + M.bl).toFixed(1)}) rotate(${M.bt.toFixed(1)})`); at(P.brR, 'transform', `translate(102 ${(63 + M.bR).toFixed(1)}) rotate(${(-M.bt).toFixed(1)})`);
        at(P.chL, 'opacity', M.ch.toFixed(2)); at(P.chR, 'opacity', M.ch.toFixed(2));
        /* mouth */
        if (talk > 0 && M.r < 0.3 && M.o < 0.7 && cb.m !== 'effort') { M.o = lerp(M.o, 0.18 + 0.4 * Math.abs(Math.sin(t * 17)), talk * 0.9); M.w = Math.max(M.w, 9); }
        M.gl = Math.max(M.gl, lvGlow);
        const d = M.o * 17, w = M.w, my = 104 + d * M.r * 0.55;
        at(P.mg, 'transform', `translate(80 ${my.toFixed(1)})`);
        at(P.ms, 'd', `M${-w} ${-M.u} Q0 ${f1(2 * M.c)} ${w} ${M.u}`); at(P.ms, 'opacity', (1 - seg(M.o, 0.05, 0.22)).toFixed(2));
        const od = `M${-w} 0Q0 ${f1(-2 * d * M.r)} ${w} 0Q0 ${f1(2 * d)} ${-w} 0Z`; at(P.mo, 'd', od); at(P.mc, 'd', od); at(P.mo, 'opacity', seg(M.o, 0.05, 0.22).toFixed(2));
        at(P.tg, 'cx', 0); at(P.tg, 'cy', f1(d * 0.8)); at(P.tg, 'rx', f1(w * 0.5)); at(P.tg, 'ry', f1(Math.max(0.1, d * 0.3)));
        at(P.sw, 'opacity', (sweat * (0.5 + 0.5 * Math.sin(t * 6))).toFixed(2)); at(P.sw, 'transform', `translate(0 ${(Math.sin(t * 6) * 3).toFixed(1)})`);
        /* arms and hands */
        const Ar = armP(1, aR[0], aR[1]), Al = armP(-1, aL[0], aL[1]);
        const limb = a => `M${f1(a.Sx)} ${f1(a.Sy)}L${f1(a.Ex)} ${f1(a.Ey)}L${f1(a.Hx)} ${f1(a.Hy)}`;
        at(P.aR, 'd', limb(Ar)); at(P.aRh, 'd', limb(Ar)); at(P.aL, 'd', limb(Al)); at(P.aLh, 'd', limb(Al));
        at(P.aRh, 'transform', 'translate(-1.4 -1.6)'); at(P.aLh, 'transform', 'translate(1.4 -1.6)');
        [['R', Ar, hr], ['L', Al, hl]].forEach(([k, a, h]) => {
          const e = P['ph' + k], H2 = HP[k];
          at(e, 'transform', `translate(${f1(a.Hx)} ${f1(a.Hy)})`); at(H2.rt, 'transform', `rotate(${f1(a.th)})`);
          at(H2.go, 'opacity', h === 'o' ? 1 : 0); at(H2.gp, 'opacity', h === 'p' ? 1 : 0); at(H2.gt, 'opacity', h === 't' ? 1 : 0);
        });
        at(P.fL, 'transform', `translate(${f1(fL[0])} ${f1(fL[1])})`); at(P.fR, 'transform', `translate(${f1(fR[0])} ${f1(fR[1])})`);
        /* props pop from the tool stubs on his back */
        const pk = n => (cb.p === n ? (pb.p === n ? 1 : E.outBack(seg(t, cb.t, cb.t + 0.34))) : pb.p === n ? 1 - E.in(seg(t, cb.t, cb.t + 0.22)) : 0);
        const PT = { pcrop: [80, 139], pclap: [80, 139], plens: [106, 80], pmal: [Ar.Hx, Ar.Hy] };
        Object.keys(PT).forEach(n => {
          const k = clamp(pk(n), 0, 1.2), e = P[n], kk = clamp(k);
          if (k < 0.01) { at(e, 'opacity', '0'); return; }
          const x = lerp(80, PT[n][0], kk), y = lerp(40, PT[n][1], kk);
          at(e, 'opacity', Math.min(1, kk * 2.2).toFixed(2)); at(e, 'transform', `translate(${f1(x)} ${f1(y)}) scale(${(0.3 + 0.7 * k).toFixed(3)})`);
        });
        { const dx = Ar.Hx - 106, dy = Ar.Hy - 80, dl = Math.hypot(dx, dy) || 1; at(P.plh, 'd', `M${f1(dx / dl * 14)} ${f1(dy / dl * 14)}L${f1(dx)} ${f1(dy)}`); }
        at(P.cl, 'transform', `translate(-24 -12) rotate(${clapA.toFixed(1)})`);
        at(P.mh, 'transform', `rotate(${swing.toFixed(1)})`);
        [['st0', -37, 'plens'], ['st1', 26, 'pcrop'], ['st2', 41, 'pclap']].forEach(([n, a, pn]) => { const k = clamp(pk(pn)); P[n].style.transform = `rotate(${a}deg) scale(1,${(1 - 0.92 * k).toFixed(3)})`; });

        /* ----- quick menu ----- */
        const qo = t < 20 ? A.win(t, 17.7, 19.45, 0.05, 0.3) : 0;
        qm.style.visibility = qo > 0.001 ? 'visible' : 'hidden';
        scrim.style.visibility = qo > 0.001 ? 'visible' : 'hidden'; scrim.style.opacity = (qo * 0.9).toFixed(3);
        qbs.forEach((b, i) => {
          const o = seg(t, 17.72 + i * 0.045, 17.72 + i * 0.045 + 0.32), pq = E.outBack(o), tp = qbPos(i), hot = i === 1 && t > 18.55;
          const pick = i === 1 ? seg(t, 19.0, 19.3) : 0, fade = 1 - seg(t, 19.0, 19.35);
          set(b, { x: lerp(MC.x, tp.x, pq), y: lerp(MC.y, tp.y, pq), s: (0.35 + 0.65 * pq) * (1 + 0.25 * E.out(pick) * (i === 1 ? 1 : 0)) * (i === 1 || fade > 0.5 ? 1 : 0.9 + 0.1 * fade), o: Math.min(1, o * 3) * (i === 1 ? 1 - seg(t, 19.25, 19.4) : fade) });
          cls(b, 'hot', hot);
        });
        /* hint ring (once, intro) */
        const hr0 = seg(t, 3.1, 4.0), hph = (hr0 * 2) % 1;
        set(hint, { x: DOCK.x, y: DOCK.y - 70 * DOCK.s * (web ? 1.2 : 1.1), s: 0.6 + hph * 0.9, o: t > 3.1 && t < 4.0 ? (1 - hph) * 0.85 : 0 });
        /* ----- bubble ----- */
        if (!ln || !ln[1]) set(bub, { o: 0 });
        else {
          txt(bt, ln[1]); txt(pill, ln[2] || ''); pill.style.display = ln[2] ? '' : 'none';
          const up = ln[3] === 'up'; cls(bub, 'up', up);
          const k = E.outBack(seg(t, ln[0], ln[0] + 0.32));
          if (up) { const hd = HEAD(p0, 1.18), bw = bub.offsetWidth || 150; bub.style.left = (clamp(p0.x - bw / 2, 12, W - bw - 12)).toFixed(0) + 'px'; bub.style.bottom = (H - hd.y + 10).toFixed(0) + 'px'; bub.style.transformOrigin = '50% 100%'; }
          else { bub.style.left = ''; bub.style.bottom = ''; bub.style.transformOrigin = '0 100%'; }
          set(bub, { s: 0.6 + 0.4 * k, o: Math.min(1, seg(t, ln[0], ln[0] + 0.12)) * (t >= 36.0 && ln[0] >= 36 ? 1 : 1) });
          A.press(pill, t, 25.3); A.press(pill, t, 30.7);
        }
        /* ----- XP chips + bursts ----- */
        xpc.forEach(x => { const d = t - x.t, w = A.win(t, x.t, x.t + 1.25, 0.18, 0.4), h = HEAD(posAt(x.t + 0.1), 1.2); set(x.e, { x: h.x + 14, y: h.y - 30 * E.out(clamp(d / 1.1)) - 8, s: 0.7 + 0.3 * E.outBack(clamp(d / 0.3)), o: w }); });
        BURSTS.forEach((b, i) => { const h = HEAD(posAt(b.t), 0.75); b.c.forEach(c => { c.el.style.transform = `translate(${h.x.toFixed(0)}px,${h.y.toFixed(0)}px)`; c.update(t - b.t); }); });
      },
    };
  },
});

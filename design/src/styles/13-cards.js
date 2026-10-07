/* Style 13 — Mochi Cards. A lucky-cat dealer turns every result into a collectible card. */
ISK.register({
  id: 'cards',
  order: 13,
  round: 2,
  name: 'Mochi Cards',
  tagline: 'Every result is a collectible card, dealt by a lucky cat.',
  concept: 'Mochi, a sleek white lucky cat, deals your photo tools like a hand of cards. Each finished job is sealed in a foil pack, opened with a burst, and kept as a card with a rarity, a number and stats. Cards fill sets in your album, so a small task feels like a small win.',
  wins: [
    'A result you can collect is a reason to come back, and a card is easy to screenshot and share.',
    'Waiting becomes a show: the pack shakes, cards riffle, foil glints sweep, and the number counts down.',
    'Tapping Mochi fans five tools in one gesture, so any tool is one tap away.',
  ],
  risks: [
    'The plum table and foil can feel like a game; a calm mode with fewer effects should exist.',
    'Rarity must stay honest (based on real savings) or people will stop trusting it.',
  ],
  scores: { simple: 3, fun: 5, wow: 5, pro: 4, game: 5, effort: 4 },
  palette: ['#1B1030', '#2A1745', '#FF3D9A', '#7C5CFF', '#FFC857', '#3DE0FF', '#F6F1FF'],
  type: 'Sora for the interface and numbers, Fraunces for card titles, so cards read like printed collectibles.',
  motion: 'Card flips between screens, a foil dissolve for big changes, a shaking pack that glows until it bursts, and a holo sheen that follows the pointer.',
  notes: {
    intro: 'A foil card back slaps down and flips, then Mochi rises behind the table and waves while a beckoning pulse invites a tap.',
    pick: 'Pick one thumbnail (or drag the file onto the table) and it is dealt as a card with its facts. Mochi gasps, then smiles.',
    shrink: 'One tap on "For exam or job form" seals the photo in a pack. It shakes and glows while cards riffle round it, then it bursts into a Holo card.',
    crop: 'Tap Mochi and her paw fans five tool cards. Crop slides onto the table, then one tap on Instagram post 4:5 and a drag fits the photo.',
    privacy: 'Mochi asks "Check?" and opens the map card. Remove location dissolves the pin in foil and stamps a shield card.',
    gif: 'A suggestion chip opens GIF. Mochi deals 36 frame cards from one pile to another until the looping GIF card appears.',
    done: 'Four cards spread out, XP fills past 600 for a level up, the streak ticks to 4, sets advance, and one labelled Ad waits below.',
  },
  statusBar: 'light',
  extras: [
    ['Character', 'Mochi the lucky cat: neutral, happy, wink, surprised, thinking, working, celebrate and sleepy. Eyes follow the pointer. Tap her and her raised paw fans five tool cards.'],
    ['Game system', 'Cards with Common, Rare and Holo rarity from real savings, card numbers, stats, album sets with progress bars, XP and levels, streak, daily free pack, duplicates convert to XP.'],
    ['Progress bars', 'Four engine kinds in foil colours (shuffle button swaps them) plus a shaking pack, an orbiting card riffle and a 36-frame deal between two piles.'],
    ['Screen changes', 'Card flip and foil pixel dissolve, with push as a card slide and a diagonal foil sweep on every change.'],
    ['Finish effect', 'Pack bursts with rays and a flash, star, coin and spark confetti, and the holo card rises with a light sweep and tilts toward the pointer.'],
    ['Taps to finish', 'Pick 2 · Shrink 2 · Crop 5 · Place 2 · GIF 3 · Save all 1 = 15 taps (14 on web, where one drag replaces two taps). Counted live on the finish screen.'],
  ],
  css: `
.st-cards{--mag:#FF3D9A;--vio:#7C5CFF;--gold:#FFC857;--cy:#3DE0FF;--ink:#F6F1FF;--mut:#B8A8DC;--fa:0deg;--tw:78px;--th:108px;background:radial-gradient(130% 70% at 50% -5%,#3C2368 0,#2A1745 38%,#1B1030 100%);color:var(--ink);font-family:Sora,system-ui,sans-serif;font-size:13px;line-height:1.3;overflow:hidden}
.st-cards.m-web{--tw:104px;--th:144px;background:radial-gradient(80% 90% at 36% 32%,#3C2368 0,#2A1745 44%,#1B1030 100%)}
.st-cards *{box-sizing:border-box}
.st-cards .felt{position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.02) 0 2px,transparent 2px 4px),repeating-linear-gradient(-45deg,rgba(0,0,0,.07) 0 2px,transparent 2px 4px);pointer-events:none}
.st-cards .sheen{position:absolute;left:50%;top:50%;width:1500px;height:1500px;margin:-750px 0 0 -750px;background:conic-gradient(from 0deg,transparent 0 6%,rgba(255,61,154,.1) 11%,transparent 17%,rgba(61,224,255,.08) 38%,transparent 45%,rgba(255,200,87,.09) 68%,transparent 75%,rgba(124,92,255,.1) 90%,transparent);pointer-events:none}
.st-cards .rail{position:absolute;left:22px;top:66px;width:906px;height:676px;border-radius:46px;border:1px solid rgba(255,200,87,.22);box-shadow:inset 0 0 90px rgba(0,0,0,.4);pointer-events:none}
.st-cards .pg{position:absolute;inset:0}
.st-cards .ab{position:absolute;left:0;top:0}
.st-cards .fr{font-family:Fraunces,Georgia,serif}
.st-cards .gl{background:linear-gradient(160deg,rgba(124,92,255,.2),rgba(255,255,255,.04));border:1px solid rgba(246,241,255,.14);border-radius:16px;box-shadow:0 12px 28px -14px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.1)}
.st-cards .btn{height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;font-size:15px;color:#fff;background:linear-gradient(135deg,#FF3D9A,#B13DFF 70%,#7C5CFF);box-shadow:0 10px 24px -8px rgba(255,61,154,.7),inset 0 1px 0 rgba(255,255,255,.4)}
.st-cards .btn.sec{background:rgba(246,241,255,.1);box-shadow:inset 0 0 0 1px rgba(246,241,255,.24);color:var(--ink)}
.st-cards .btn.gd{background:linear-gradient(135deg,#FFE08A,#FFC857 60%,#E8A93A);color:#2A1745;box-shadow:0 10px 24px -8px rgba(255,200,87,.6),inset 0 1px 0 rgba(255,255,255,.6)}
.st-cards .btn kbd{font:600 11px Sora,sans-serif;padding:2px 6px;border-radius:6px;background:rgba(255,255,255,.18)}
.st-cards .is-pressed{filter:brightness(1.25)}.st-cards .btn.is-pressed{transform:scale(.96) !important}
.st-cards .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:999px;font-size:12px;font-weight:600;background:rgba(246,241,255,.1);border:1px solid rgba(246,241,255,.18);white-space:nowrap}
.st-cards .chip.g{color:var(--gold);border-color:rgba(255,200,87,.45);background:rgba(255,200,87,.1)}
.st-cards .chip.m{color:#FF8FC4;border-color:rgba(255,61,154,.5);background:rgba(255,61,154,.12)}
.st-cards .chip.c{color:var(--cy);border-color:rgba(61,224,255,.45);background:rgba(61,224,255,.1)}
.st-cards .lab{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--mut)}
/* collectible card */
.st-cards .cw{position:absolute;left:0;top:0;width:220px;height:300px}
.st-cards .cd{position:absolute;inset:0;border-radius:18px;box-shadow:0 22px 40px -14px rgba(0,0,0,.8)}
.st-cards .cb{position:absolute;inset:0;border-radius:18px;overflow:hidden}
.st-cards .fo{position:absolute;left:50%;top:50%;width:520px;height:520px;margin:-260px 0 0 -260px;transform:rotate(var(--fa));background:conic-gradient(#ff3d9a,#ffc857,#3de0ff,#7c5cff,#ff3d9a,#ffc857,#3de0ff,#7c5cff,#ff3d9a)}
.st-cards .rare .fo{background:conic-gradient(#3de0ff,#7c5cff,#e0d8ff,#3de0ff,#7c5cff,#e0d8ff,#3de0ff)}
.st-cards .com .fo{background:conic-gradient(#eee9fa,#8c82ab,#cfc8e6,#8c82ab,#eee9fa)}
.st-cards .cn{position:absolute;inset:4px;border-radius:14px;background:linear-gradient(170deg,#36215F,#1E1038);padding:9px 9px 8px;display:flex;flex-direction:column;gap:6px;overflow:hidden}
.st-cards .ch{display:flex;align-items:baseline;justify-content:space-between;gap:6px}
.st-cards .ch b{font:700 16px/1.1 Fraunces,Georgia,serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st-cards .ch em{font-style:normal;font-size:10.5px;color:var(--mut);white-space:nowrap}
.st-cards .ca{position:relative;height:158px;border-radius:9px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)}
.st-cards .rp{position:absolute;left:7px;bottom:7px;padding:2px 8px;border-radius:99px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1B1030;background:linear-gradient(90deg,#FFE08A,#FFC857)}
.st-cards .rare .rp{background:linear-gradient(90deg,#9BEFFF,#3DE0FF)}
.st-cards .com .rp{background:linear-gradient(90deg,#F2EEFB,#C9C0E2)}
.st-cards .cs2{font-size:11px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st-cards .cst{display:grid;grid-template-columns:.85fr 1.5fr .65fr;gap:4px;margin-top:auto}
.st-cards .cst span{display:flex;flex-direction:column;gap:1px;padding:3px 6px;border-radius:7px;background:rgba(255,255,255,.07);min-width:0}
.st-cards .cst small{font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);white-space:nowrap}
.st-cards .cst b{font-size:11px;white-space:nowrap}
.st-cards .shn{position:absolute;inset:0;border-radius:14px;pointer-events:none;background:linear-gradient(115deg,transparent 34%,rgba(255,255,255,.34) 46%,rgba(255,61,154,.24) 51%,rgba(61,224,255,.26) 56%,transparent 68%);background-size:320% 100%;background-position:var(--bp,200%) 0;mix-blend-mode:screen}
.st-cards .stp{position:absolute;right:-16px;top:178px;padding:5px 12px;border-radius:8px;font:italic 800 15px Fraunces,Georgia,serif;color:#2A1745;background:linear-gradient(135deg,#FFE9A8,#FFC857);box-shadow:0 8px 16px -6px rgba(0,0,0,.6);transform:rotate(7deg);white-space:nowrap}
/* tool card */
.st-cards .tc{position:absolute;left:0;top:0;width:var(--tw);height:var(--th);border-radius:12px;box-shadow:0 10px 20px -8px rgba(0,0,0,.7)}
.st-cards .tc .fw{position:absolute;inset:0;border-radius:12px;overflow:hidden}
.st-cards .tc .tn{position:absolute;inset:2.5px;border-radius:10px;background:linear-gradient(170deg,#42297A,#22123E);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(var(--th)*.08);color:var(--tc)}
.st-cards .tc .tn svg{width:calc(var(--tw)*.4);height:calc(var(--tw)*.4)}
.st-cards .tc .tn b{font-family:Fraunces,Georgia,serif;font-weight:700;font-size:max(11px,calc(var(--tw)*.17));line-height:1;color:var(--ink)}
.st-cards .tc kbd{position:absolute;left:7px;top:6px;font:600 10.5px Sora,sans-serif;color:var(--mut)}
.st-cards .tc.sm{--tw:40px;--th:56px}.st-cards.m-web .tc.sm{--tw:46px;--th:64px}
.st-cards .tc.sm .tn b{display:none}
.st-cards .tc.mini{--tw:58px;--th:82px}
/* mini card */
.st-cards .mc{position:absolute;left:0;top:0;width:var(--mw,82px);height:var(--mh,114px);border-radius:11px;box-shadow:0 12px 20px -10px rgba(0,0,0,.8)}
.st-cards .mc .cb{border-radius:11px}
.st-cards .mn{position:absolute;inset:2.5px;border-radius:9px;background:linear-gradient(170deg,#36215F,#1E1038);padding:4px;display:flex;flex-direction:column;gap:3px;overflow:hidden}
.st-cards .ma{flex:1;border-radius:6px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.2)}
.st-cards .mn b{font:700 11px/1.1 Fraunces,Georgia,serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st-cards .mn span{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--gold)}
.st-cards .rare .mn span{color:var(--cy)}.st-cards .com .mn span{color:#D8D0EE}
/* hud */
.st-cards .hud{position:absolute;left:14px;top:50px;width:362px;height:28px;display:flex;align-items:center;gap:8px;z-index:32}
.st-cards .lv{font:700 12px Sora,sans-serif;padding:4px 10px;border-radius:99px;background:linear-gradient(135deg,#FFE08A,#FFC857);color:#2A1745;white-space:nowrap}
.st-cards .xpb{flex:1;height:8px;border-radius:99px;background:rgba(246,241,255,.14);overflow:hidden;box-shadow:inset 0 1px 2px rgba(0,0,0,.4)}
.st-cards .xpb i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#7C5CFF,#FF3D9A,#FFC857)}
.st-cards .fl,.st-cards .cc{display:flex;align-items:center;gap:4px;font-weight:700;font-size:13px;white-space:nowrap}
.st-cards .cc{color:var(--cy)}
.st-cards .tbar{position:absolute;left:0;right:0;top:0;height:56px;display:flex;align-items:center;gap:14px;padding:0 24px;z-index:32;background:linear-gradient(180deg,rgba(20,10,38,.7),rgba(20,10,38,0))}
.st-cards .tbar .brand{display:flex;align-items:center;gap:10px;font:700 18px Fraunces,Georgia,serif;margin-right:auto}
.st-cards .tbar .xpb{flex:none;width:150px}
.st-cards .tbar .xpt{font-size:12px;color:var(--mut);white-space:nowrap}
.st-cards .tbar .chip svg{flex:none}
/* mochi */
.st-cards .mochi{position:absolute;left:0;top:0;width:240px;height:270px;transform-origin:120px 262px;z-index:40;pointer-events:none}
.st-cards .mochi svg{display:block;overflow:visible}
.st-cards .bub{position:absolute;left:0;top:0;z-index:45;padding:10px 13px;border-radius:14px;font-size:13px;font-weight:600;line-height:1.38;background:linear-gradient(160deg,#4B3088,#2D1A54);border:1px solid rgba(255,255,255,.22);box-shadow:0 14px 28px -10px rgba(0,0,0,.75)}
.st-cards .bub i{position:absolute;width:13px;height:13px;background:#3D2674;transform:rotate(45deg);border:1px solid rgba(255,255,255,.22)}
.st-cards .sug{position:absolute;left:0;top:0;z-index:46;height:34px;padding:0 14px;border-radius:99px;display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#2A1745;background:linear-gradient(135deg,#FFE08A,#FFC857);box-shadow:0 10px 20px -8px rgba(255,200,87,.7)}
.st-cards .pulse{position:absolute;left:0;top:0;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;border:3px solid var(--gold);z-index:41;pointer-events:none}
.st-cards .tapme{position:absolute;left:0;top:0;z-index:41;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:700;background:var(--gold);color:#2A1745;white-space:nowrap}
/* title row */
.st-cards .tt{position:absolute;z-index:20}
.st-cards .tt b{display:block;font:700 22px/1.1 Fraunces,Georgia,serif}
.st-cards .tt span{display:block;font-size:12px;color:var(--mut);margin-top:3px}
.st-cards .slotw{position:absolute;z-index:20}
/* fan */
.st-cards .dim{position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 50%,rgba(14,6,28,.55),rgba(14,6,28,.8));z-index:34}
.st-cards .fk{z-index:48}
.st-cards .fanl{position:absolute;left:0;top:0;z-index:49;font:700 15px Fraunces,Georgia,serif;white-space:nowrap}
/* generic blocks */
.st-cards .zone{position:absolute}
.st-cards .zone>div{position:absolute;inset:0}
.st-cards .opt{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px}
.st-cards .opt b{display:block;font-size:13px;line-height:1.2}
.st-cards .opt span{font-size:11.5px;color:var(--mut)}
.st-cards .opt.on{background:linear-gradient(135deg,rgba(255,61,154,.35),rgba(124,92,255,.3));border-color:var(--mag);box-shadow:0 0 0 2px rgba(255,61,154,.5),0 12px 24px -10px rgba(255,61,154,.6)}
.st-cards .opt{position:relative}.st-cards .opt .sg{position:absolute;right:8px;top:-9px;font-size:10.5px;font-weight:700;color:#2A1745;background:var(--gold);padding:1px 8px;border-radius:99px;white-space:nowrap}.st-cards .opt.sol{background:linear-gradient(160deg,#352060,#271648)}
.st-cards .opt svg{flex:none;color:var(--gold)}
.st-cards .cnt{font:700 42px/1 Sora,sans-serif;font-variant-numeric:tabular-nums;letter-spacing:-.02em;text-align:center}
.st-cards .wtx{text-align:center;font-size:13px;color:var(--mut);font-weight:600}
.st-cards .barh{display:flex;align-items:center;justify-content:center;height:100px}
.st-cards .bhost{position:absolute;display:flex;align-items:center;justify-content:center}
.st-cards .pk{position:absolute;left:0;top:0;width:150px;height:210px}
.st-cards .pkh{position:absolute;inset:0;border-radius:12px;overflow:hidden;box-shadow:0 20px 34px -12px rgba(0,0,0,.8)}
.st-cards .pkh.pt{clip-path:inset(0 0 52% 0)}.st-cards .pkh.pb{clip-path:inset(48% 0 0 0)}
.st-cards .pkh .pki{position:absolute;inset:7px;border-radius:8px;background:linear-gradient(170deg,#2E1B55,#170B30);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}
.st-cards .pkh::before,.st-cards .pkh::after{content:"";position:absolute;left:0;right:0;height:14px;z-index:2;background:repeating-linear-gradient(90deg,rgba(0,0,0,.35) 0 2px,rgba(255,255,255,.35) 2px 4px)}
.st-cards .pkh::before{top:0}.st-cards .pkh::after{bottom:0}
.st-cards .pki b{font:700 15px Fraunces,Georgia,serif;letter-spacing:.14em;text-transform:uppercase}
.st-cards .pki em{font-style:normal;font-size:10.5px;color:var(--gold);letter-spacing:.14em;text-transform:uppercase;font-weight:700}
.st-cards .glow{position:absolute;left:0;top:0;width:340px;height:340px;margin:-170px 0 0 -170px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,61,154,.7),rgba(124,92,255,.35) 55%,transparent);pointer-events:none}
.st-cards .rays{position:absolute;left:0;top:0;width:520px;height:520px;margin:-260px 0 0 -260px;border-radius:50%;background:repeating-conic-gradient(rgba(255,230,160,.55) 0 5deg,transparent 5deg 18deg);-webkit-mask:radial-gradient(closest-side,#000 10%,transparent);mask:radial-gradient(closest-side,#000 10%,transparent);pointer-events:none}
.st-cards .flash{position:absolute;left:0;top:0;width:200px;height:200px;margin:-100px 0 0 -100px;border-radius:50%;background:radial-gradient(closest-side,#fff,rgba(255,240,200,.6) 50%,transparent);pointer-events:none}
.st-cards .rc{position:absolute;left:0;top:0;width:26px;height:38px;margin:-19px 0 0 -13px;border-radius:5px;background:linear-gradient(150deg,#FF3D9A,#7C5CFF);border:1.5px solid #FFE9A8;box-shadow:0 4px 8px rgba(0,0,0,.5)}
.st-cards .rc::after{content:"";position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;background:#FFC857;transform:rotate(45deg)}
.st-cards .dz{position:absolute;border-radius:24px;border:2px dashed rgba(255,200,87,.5);background:radial-gradient(70% 90% at 50% 50%,rgba(124,92,255,.22),rgba(255,255,255,.02));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center}
.st-cards .dz b{font:700 20px Fraunces,Georgia,serif}
.st-cards .dz span{font-size:12.5px;color:var(--mut)}
.st-cards kbd{font:600 11px Sora,sans-serif;padding:1px 6px;border-radius:6px;background:rgba(255,255,255,.14);color:var(--ink)}
.st-cards .file{position:absolute;left:0;top:0;width:150px;padding:8px;border-radius:12px;z-index:55;background:#F6F1FF;color:#2A1745;box-shadow:0 20px 30px -8px rgba(0,0,0,.7);display:flex;flex-direction:column;gap:5px}
.st-cards .file i{height:84px;border-radius:7px;background-size:cover;background-position:center}
.st-cards .file span{font-size:11.5px;font-weight:700}
.st-cards .kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;padding:12px 14px;font-size:12.5px}
.st-cards .kv span{color:var(--mut)}.st-cards .kv b{text-align:right}
.st-cards .gal{position:absolute;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.st-cards .gc{aspect-ratio:1;border-radius:12px;background-size:cover;background-position:center;box-shadow:0 0 0 1px rgba(255,255,255,.18),0 10px 16px -10px rgba(0,0,0,.8)}
.st-cards .cv{position:absolute;border-radius:16px;overflow:hidden;background:#150A28;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),0 14px 28px -14px #000}
.st-cards .cvimg{position:absolute;left:50%;top:50%;background-size:cover;background-position:center}
.st-cards .cvfr{position:absolute;left:50%;top:50%;border-radius:6px;border:2px solid var(--gold);box-shadow:0 0 0 999px rgba(20,8,38,.68),0 0 20px rgba(255,200,87,.5);background:linear-gradient(#FFC85766,#FFC85766) 33.3% 0/1px 100% no-repeat,linear-gradient(#FFC85766,#FFC85766) 66.6% 0/1px 100% no-repeat,linear-gradient(#FFC85766,#FFC85766) 0 33.3%/100% 1px no-repeat,linear-gradient(#FFC85766,#FFC85766) 0 66.6%/100% 1px no-repeat}
.st-cards .cvtag{position:absolute;left:50%;bottom:10px;transform:translateX(-50%)}
.st-cards .map{position:relative;overflow:hidden;border-radius:14px;background:#2A1D4A;border:1px solid rgba(246,241,255,.16)}
.st-cards .map>svg{position:absolute;inset:0;width:100%;height:100%}
.st-cards .mpin{position:absolute;width:40px;height:52px;margin:-52px 0 0 -20px}
.st-cards .mpin svg{position:static;width:40px;height:52px}
.st-cards .ptag{font:700 26px/1.1 Fraunces,Georgia,serif}
.st-cards .warn{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:14px;font-size:12.5px;line-height:1.35;background:rgba(255,200,87,.12);border:1px solid rgba(255,200,87,.45)}
.st-cards .warn svg{flex:none;color:var(--gold)}
.st-cards .warn.ok{background:rgba(61,224,255,.12);border-color:rgba(61,224,255,.5)}
.st-cards .warn.ok svg{color:var(--cy)}
.st-cards .vid{position:absolute;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 0 0 1px rgba(255,255,255,.2),0 14px 26px -12px #000;overflow:hidden}
.st-cards .vb{position:absolute;left:8px;top:8px;background:rgba(20,8,38,.72);color:var(--ink)}
.st-cards .srow{display:grid;grid-template-columns:78px 1fr 30px;align-items:center;gap:10px;font-size:12px}.st-cards .srow b{font:700 13px Fraunces,Georgia,serif}.st-cards .srow span{text-align:right;color:var(--mut)}
.st-cards .strip{position:absolute;display:flex;height:50px;border-radius:9px}
.st-cards .strip .sclip{position:absolute;inset:0;display:flex;border-radius:9px;overflow:hidden}
.st-cards .strip .sclip i{flex:1;background-size:cover;background-position:center}
.st-cards .strip .sclip .selw{position:absolute}
.st-cards .selw{top:0;bottom:0;border:3px solid var(--gold);border-radius:9px;box-shadow:0 0 0 999px rgba(20,8,38,.6)}
.st-cards .hd{position:absolute;top:50%;width:20px;height:58px;margin-top:-29px;border-radius:7px;background:linear-gradient(135deg,#FFE08A,#FFC857);box-shadow:0 4px 8px rgba(0,0,0,.5)}
.st-cards .hd::after{content:"";position:absolute;left:8px;top:16px;width:3px;height:26px;border-radius:2px;background:#2A1745;opacity:.6}
.st-cards .pile{position:absolute;width:64px;height:90px}
.st-cards .pile i{position:absolute;inset:0;border-radius:7px;border:1.5px solid #FFE9A8;background:linear-gradient(150deg,#FF3D9A,#7C5CFF);box-shadow:0 3px 6px rgba(0,0,0,.5)}
.st-cards .fly{position:absolute;left:0;top:0;width:76px;height:54px;margin:-27px 0 0 -38px;border-radius:7px;background-size:cover;background-position:center;border:2px solid #FFE9A8;box-shadow:0 6px 12px rgba(0,0,0,.6)}
.st-cards .sbar{height:7px;border-radius:99px;background:rgba(246,241,255,.14);overflow:hidden}
.st-cards .sbar i{display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#7C5CFF,#FF3D9A)}
.st-cards .setr{display:flex;flex-direction:column;gap:5px}
.st-cards .setr .h{display:flex;justify-content:space-between;align-items:baseline;font-size:12px}
.st-cards .setr .h b{font:700 13.5px Fraunces,Georgia,serif}
.st-cards .ad{display:flex;gap:10px;align-items:center;border:1.5px dashed rgba(246,241,255,.3);border-radius:12px;padding:8px 10px;background:rgba(246,241,255,.05);font-size:12px;color:var(--mut)}
.st-cards .ad small{font-size:10.5px;font-weight:700;letter-spacing:.06em;border:1.5px solid var(--mut);border-radius:5px;padding:0 5px;margin-right:6px;color:var(--mut)}
.st-cards .ad i{width:30px;height:30px;border-radius:8px;background:rgba(246,241,255,.12);flex:none}
.st-cards .sweep{position:absolute;top:-10%;bottom:-10%;width:34%;z-index:58;pointer-events:none;background:linear-gradient(100deg,transparent,rgba(255,255,255,.18) 40%,rgba(255,61,154,.3) 48%,rgba(61,224,255,.3) 54%,transparent);transform:skewX(-14deg)}
.st-cards .toast{position:absolute;z-index:50;display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:14px;font-size:13px;font-weight:700;background:linear-gradient(135deg,#3D2674,#2A1745);border:1px solid rgba(61,224,255,.5);box-shadow:0 14px 26px -10px #000;white-space:nowrap}
.st-cards .toast svg{color:var(--cy)}
.st-cards .xpf{position:absolute;left:0;top:0;z-index:52;font:800 20px Sora,sans-serif;color:var(--gold);text-shadow:0 2px 10px rgba(255,200,87,.6),0 2px 4px #000;white-space:nowrap}
.st-cards .fx{position:absolute;inset:0;pointer-events:none;z-index:56;overflow:hidden}
.st-cards .alb{position:absolute;left:948px;top:68px;width:316px;height:672px;border-radius:20px}
.st-cards .alb .as{position:absolute;width:66px;height:90px;border-radius:9px;border:1.5px dashed rgba(246,241,255,.28);display:grid;place-items:center;color:rgba(246,241,255,.35);font:700 18px Fraunces,serif;overflow:hidden}
.st-cards .alb .as.on{border:2px solid var(--gold);background-size:cover;background-position:center;color:transparent}
.st-cards .alb .as.rare{border-color:var(--cy)}.st-cards .alb .as.com{border-color:#CFC8E6}
.st-cards .alb .as.holo{box-shadow:0 0 14px rgba(255,61,154,.7)}
.st-cards .hand{position:absolute;left:0;top:0;width:1px;height:1px;z-index:30}
.st-cards .lvl{font:800 22px Fraunces,Georgia,serif}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, E = A.ease, web = A.web, app = A.app, seg = A.seg, set = A.set, lerp = A.lerp, cl = A.clamp, txt = A.txt, cls = A.cls;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = web ? 'w' : 'a';
    const attr = (e, k, v) => { if (e && e._a !== v) { e._a = v; e.setAttribute(k, v); } };
    const mk = (c, p, h) => A.el('div', c, p || S, h);
    const pgE = (c, h) => mk('pg ' + c, S, h);
    const C = { mag: '#FF3D9A', vio: '#7C5CFF', gold: '#FFC857', cy: '#3DE0FF' };

    /* ------------------------------------------------------------ geometry */
    const G = app
      ? { stage: { x: 18, y: 292, w: 354, h: 504 }, slot: { x: 18, y: 224 }, card: { x: 195, y: 432, s: 0.88 }, ov: { x: 195, y: 430 }, zone: { x: 18, y: 574, w: 354, h: 222 }, bw: 330, orb: [118, 30], fan: { cx: 195, cy: 478, gap: 64, arc: 12, rot: 11, s: 1 }, alb: { x: 354, y: 66 }, cs: 0.88, slotS: 0.52, tw: 78, th: 108 }
      : { stage: { x: 40, y: 284, w: 852, h: 312 }, slot: { x: 40, y: 216 }, card: { x: 290, y: 440, s: 0.95 }, ov: { x: 466, y: 440 }, zone: { x: 500, y: 292, w: 376, h: 296 }, bw: 352, orb: [150, 38], fan: { cx: 466, cy: 420, gap: 98, arc: 14, rot: 9, s: 1 }, alb: { x: 1000, y: 120 }, cs: 0.95, slotS: 0.45, tw: 104, th: 144 };
    const albSlot = (si, i) => ({ x: 948 + 14 + 33 + i * 74, y: 198 + 152 * si + 87 });

    /* -------------------------------------------------------------- content */
    const TOOLS = [['shrink', 'Shrink', '#FF7AB8'], ['crop', 'Crop', '#B3A6FF'], ['pin', 'Place', '#3DE0FF'], ['film', 'GIF', '#FFC857'], ['convert', 'Convert', '#F6F1FF']];
    const RN = { holo: 'Holo', rare: 'Rare', com: 'Common' };
    const CARDS = [
      { rar: 'holo', title: 'Exam photo', no: '041', art: A.photo('portrait'), sub: 'Shrink · JPG · Exam set', st: [['Saved', '4.6 MB'], ['Pixels', D.shrink.px], ['Shield', 'On']] },
      { rar: 'rare', title: 'Instagram post', no: '087', art: A.photo('mountain'), sub: 'Crop · 4:5 · Social set', st: [['Fewer', '88%'], ['Pixels', D.crop.px], ['Shield', 'On']] },
      { rar: 'rare', title: 'City photo', no: '112', art: A.photo('city'), sub: 'Place removed · Travel set', st: [['Place', 'None'], ['EXIF', 'Clean'], ['Shield', 'On']] },
      { rar: 'com', title: 'Beach GIF', no: '023', art: A.frame(3), sub: 'GIF · 12 fps · Travel set', st: [['Size', D.video.size], ['Frames', String(D.video.frames)], ['Shield', 'On']] },
    ];
    const RAW = { rar: 'com', rn: 'Raw', title: D.portrait.file, no: '041', art: A.photo('portrait'), sub: 'Camera photo · not opened yet', st: [['Size', D.portrait.size], ['Pixels', D.portrait.dims], ['Shield', 'On']] };
    const SETS = [
      { n: 'Exam set', s: [{ a: A.photo('abstract', { seed: 2 }), r: 'com', at: -1 }, { a: A.photo('portrait'), r: 'holo', at: 16.85 }, { at: 999 }, { at: 999 }] },
      { n: 'Social set', s: [{ a: A.photo('abstract', { seed: 9 }), r: 'com', at: -1 }, { a: A.photo('mountain'), r: 'rare', at: 23.95 }, { at: 999 }, { at: 999 }] },
      { n: 'Travel set', s: [{ a: A.photo('mountain', { sun: 0.8 }), r: 'rare', at: -1 }, { a: A.photo('city'), r: 'rare', at: 30.05 }, { a: A.frame(3), r: 'com', at: 36.7 }, { at: 999 }] },
    ];
    const setN = (i, t) => SETS[i].s.filter(x => t >= x.at).length;

    const cardH = c => `<div class="cd ${c.rar}"><div class="cb"><i class="fo"></i></div><div class="cn"><div class="ch"><b>${c.title}</b><em>No. ${c.no}</em></div><div class="ca" style="background-image:${c.art}"><span class="rp">${c.rn || RN[c.rar]}</span></div><div class="cs2">${c.sub}</div><div class="cst">${c.st.map(s => `<span><small>${s[0]}</small><b>${s[1]}</b></span>`).join('')}</div><i class="shn"></i></div></div>`;
    const miniH = c => `<div class="mc ${c.rar}"><div class="cb"><i class="fo"></i></div><div class="mn"><div class="ma" style="background-image:${c.art}"></div><b>${c.title}</b><span>${RN[c.rar]}</span></div></div>`;
    const toolH = (i, cx = '') => `<div class="tc ${cx}" style="--tc:${TOOLS[i][2]}"><div class="fw"><i class="fo"></i></div><div class="tn">${I(TOOLS[i][0], 28, 2)}<b>${TOOLS[i][1]}</b></div>${web && !/sm|mini/.test(cx) ? `<kbd>${i + 1}</kbd>` : ''}</div>`;
    const flame = `<svg width="16" height="19" viewBox="0 0 20 24"><path d="M10 1c1 5 7 7 7 14a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 2.5 4C9 8 8 5 10 1z" fill="#FF8A3D"/><path d="M10 12c1 2 3.5 3 3.5 6a3.5 3.5 0 0 1-7 0c0-2 1.5-3 2-4 .4 1 .8 1.5 1.5 1.5z" fill="#FFD84D"/></svg>`;

    /* --------------------------------------------------------------- Mochi */
    const mochiSVG = `<svg viewBox="0 0 240 270" width="240" height="270">
<defs>
<radialGradient id="bg${uid}" cx=".36" cy=".26" r=".9"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#F2EDFC"/><stop offset=".85" stop-color="#D5CBEF"/><stop offset="1" stop-color="#BBAFE0"/></radialGradient>
<linearGradient id="gd${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF0B8"/><stop offset=".5" stop-color="#FFC857"/><stop offset="1" stop-color="#CF8E25"/></linearGradient>
<linearGradient id="gr${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5E5878"/><stop offset="1" stop-color="#1D1A2B"/></linearGradient>
<radialGradient id="ir${uid}" cx=".5" cy=".64" r=".62"><stop offset="0" stop-color="#A48DFF"/><stop offset=".55" stop-color="#4E36B6"/><stop offset="1" stop-color="#1A1040"/></radialGradient>
<linearGradient id="ei${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC4DE"/><stop offset="1" stop-color="#FF86B7"/></linearGradient>
<linearGradient id="rm${uid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3DE0FF" stop-opacity="0"/><stop offset="1" stop-color="#3DE0FF" stop-opacity=".8"/></linearGradient>
<radialGradient id="sd${uid}"><stop offset="0" stop-color="#000" stop-opacity=".5"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<clipPath id="ec${uid}"><ellipse rx="14.5" ry="17.5"/></clipPath>
</defs>
<ellipse cx="120" cy="252" rx="96" ry="12" fill="url(#sd${uid})"/>
<g class="tail"><path d="M172 238C214 244 232 204 212 176C202 160 218 152 228 164" fill="none" stroke="#C3B7E4" stroke-width="17" stroke-linecap="round"/><path d="M172 238C214 244 232 204 212 176C202 160 218 152 228 164" fill="none" stroke="url(#bg${uid})" stroke-width="12.5" stroke-linecap="round"/></g>
<g class="body"><path d="M60 246C42 246 44 190 58 170C70 154 92 148 120 148C148 148 170 154 182 170C196 190 198 246 180 246Z" fill="url(#bg${uid})"/>
<ellipse cx="120" cy="212" rx="30" ry="30" fill="#fff" opacity=".55"/>
<path d="M182 170C196 190 198 246 180 246" fill="none" stroke="url(#rm${uid})" stroke-width="3"/>
<path d="M58 172C45 192 44 232 60 246" fill="none" stroke="#FF3D9A" stroke-opacity=".3" stroke-width="2.4"/></g>
<ellipse cx="88" cy="246" rx="23" ry="10.5" fill="url(#bg${uid})"/><ellipse cx="152" cy="246" rx="23" ry="10.5" fill="url(#bg${uid})"/>
<path d="M80 249v-5M88 250v-6M96 249v-5M144 249v-5M152 250v-6M160 249v-5" stroke="#BCB0DF" stroke-width="1.6" stroke-linecap="round"/>
<path d="M72 154Q120 178 168 154" fill="none" stroke="url(#gd${uid})" stroke-width="9" stroke-linecap="round"/>
<path d="M76 151Q120 173 164 151" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>
<g class="bow"><path d="M120 169L94 156Q86 169 94 183Z" fill="url(#gr${uid})"/><path d="M120 169L146 156Q154 169 146 183Z" fill="url(#gr${uid})"/><rect x="113" y="162" width="14" height="14" rx="4" fill="url(#gr${uid})"/><path d="M98 161L115 168M142 161L125 168" stroke="#fff" stroke-opacity=".2" stroke-width="1.5"/></g>
<g class="bell"><path d="M120 176V181" stroke="#B87A1B" stroke-width="2"/><circle cx="120" cy="190" r="9" fill="url(#gd${uid})"/><path d="M111.5 192H128.5" stroke="#9A6A14" stroke-width="1.6"/><circle cx="120" cy="196" r="1.8" fill="#7A4F0C"/><circle cx="116" cy="186" r="2.6" fill="#fff" opacity=".75"/></g>
<g class="head">
<g class="earL"><path d="M46 88C40 58 44 32 56 16C60 14 64 15 68 18C84 27 98 38 106 50Z" fill="url(#bg${uid})" stroke="#C3B7E4" stroke-width="1.2"/><path d="M57 78C54 58 56 42 62 30C74 37 85 46 92 56Z" fill="url(#ei${uid})"/></g>
<g transform="translate(240 0) scale(-1 1)"><g class="earR"><path d="M46 88C40 58 44 32 56 16C60 14 64 15 68 18C84 27 98 38 106 50Z" fill="url(#bg${uid})" stroke="#C3B7E4" stroke-width="1.2"/><path d="M57 78C54 58 56 42 62 30C74 37 85 46 92 56Z" fill="url(#ei${uid})"/></g></g>
<path d="M120 40C62 40 40 74 40 104C40 140 76 162 120 162C164 162 200 140 200 104C200 74 178 40 120 40Z" fill="url(#bg${uid})"/>
<path d="M186 62C198 78 202 100 197 124" fill="none" stroke="url(#rm${uid})" stroke-width="3"/>
<path d="M52 66C42 84 40 104 46 126" fill="none" stroke="#FF3D9A" stroke-opacity=".38" stroke-width="2.4"/>
<ellipse cx="92" cy="64" rx="26" ry="8" fill="#fff" opacity=".55" transform="rotate(-18 92 64)"/>
<path d="M120 49l4.5 6.5-4.5 6.5-4.5-6.5z" fill="url(#gd${uid})"/>
<path d="M64 118L20 108M62 124L16 127M64 130L22 145M176 118L220 108M178 124L224 127M176 130L218 145" stroke="#DCD2F7" stroke-opacity=".8" stroke-width="1.5" stroke-linecap="round"/>
<ellipse class="blL" cx="64" cy="124" rx="13" ry="6.5" fill="#FF6FA9"/><ellipse class="blR" cx="176" cy="124" rx="13" ry="6.5" fill="#FF6FA9"/>
${[80, 160].map((x, k) => { const d = k ? 1 : -1; const lash = `<path d="M${13 * d} -10l${5.5 * d} -5M${14.4 * d} -5l${7 * d} -3.5M${15 * d} 0l${7 * d} 1" fill="none" stroke="#241A3A" stroke-width="2.2" stroke-linecap="round"/>`; const lashC = `<path d="M${13 * d} -1l${5.5 * d} 3M${14 * d} 2l${6 * d} 4" fill="none" stroke="#241A3A" stroke-width="2.2" stroke-linecap="round"/>`; return `<g class="brow b${k}" transform="translate(${x} 72)"><path d="M-10 1Q0 -4 10 1" fill="none" stroke="#4A3A6E" stroke-width="2.6" stroke-linecap="round" opacity=".6"/></g>
<g class="eye e${k}" transform="translate(${x} 100)"><g class="eo"><g clip-path="url(#ec${uid})"><ellipse rx="14.5" ry="17.5" fill="#FBF9FF"/><g class="iris"><circle r="12.5" fill="url(#ir${uid})"/><circle r="5.8" fill="#0F0A1E"/><circle cx="-3.8" cy="-5.4" r="3.6" fill="#fff"/><circle cx="4.4" cy="4.4" r="1.7" fill="#fff" opacity=".8"/></g><path d="M-16 -10Q0 -24 16 -10L16 -22L-16 -22Z" fill="#241A3A" opacity=".16"/></g><path d="M-15.5 -2Q-13 -19 0 -19Q13 -19 15.5 -2" fill="none" stroke="#241A3A" stroke-width="3.4" stroke-linecap="round"/>${lash}</g>
<g class="ea"><path d="M-14 4Q0 -16 14 4" fill="none" stroke="#241A3A" stroke-width="3.6" stroke-linecap="round"/><path d="M${13 * d} 1l${6 * d} -3M${12 * d} -3l${6 * d} -5.5" fill="none" stroke="#241A3A" stroke-width="2.2" stroke-linecap="round"/></g>
<g class="ec"><path d="M-14 -3Q0 7 14 -3" fill="none" stroke="#241A3A" stroke-width="3.4" stroke-linecap="round"/>${lashC}</g></g>`; }).join('')}
<path d="M113.5 112Q120 108 126.5 112Q123.5 119 120 120Q116.5 119 113.5 112Z" fill="#FF8FBA"/>
<g class="mw"><path d="M120 120V125M120 125Q113 132 105 126M120 125Q127 132 135 126" fill="none" stroke="#6B5189" stroke-width="2.2" stroke-linecap="round"/></g>
<g class="ms"><path d="M104 124Q120 146 136 124Q120 130 104 124Z" fill="#3A1F4D" stroke="#3A1F4D" stroke-width="2" stroke-linejoin="round"/><path d="M112 134Q120 128 128 134Q120 141 112 134Z" fill="#FF7FB0"/></g>
<g class="mo"><ellipse cx="120" cy="130" rx="5.5" ry="7.5" fill="#3A1F4D"/><ellipse cx="120" cy="134" rx="3.4" ry="3" fill="#FF7FB0"/></g>
<g class="mp"><path d="M100 122Q120 158 140 122Q120 129 100 122Z" fill="#3A1F4D" stroke="#3A1F4D" stroke-width="2" stroke-linejoin="round"/><path d="M110 138Q120 129 130 138Q120 148 110 138Z" fill="#FF7FB0"/></g>
<g class="mt"><path d="M120 120V124M120 124Q114 129 108 125M120 124Q127 127 134 123" fill="none" stroke="#6B5189" stroke-width="2.2" stroke-linecap="round"/></g>
<g class="mf"><path d="M120 120V124M111 128Q120 132 129 128" fill="none" stroke="#6B5189" stroke-width="2.2" stroke-linecap="round"/></g>
<g class="mz"><ellipse cx="120" cy="130" rx="3.6" ry="4.4" fill="#3A1F4D"/></g>
</g>
<g class="aL"><path d="M74 176C68 196 78 210 96 214" fill="none" stroke="#C3B7E4" stroke-width="25" stroke-linecap="round"/><path d="M74 176C68 196 78 210 96 214" fill="none" stroke="url(#bg${uid})" stroke-width="21" stroke-linecap="round"/>
<g class="hc" transform="rotate(-14 98 210)"><rect x="91" y="196" width="22" height="31" rx="3.5" fill="#FF3D9A" stroke="#FFE9A8" stroke-width="1.6"/><path d="M102 205l3 5-3 5-3-5z" fill="#FFE9A8"/></g></g>
<g class="aR"><path d="M176 172C196 150 208 122 206 98" fill="none" stroke="#C3B7E4" stroke-width="25" stroke-linecap="round"/><path d="M176 172C196 150 208 122 206 98" fill="none" stroke="url(#bg${uid})" stroke-width="21" stroke-linecap="round"/>
<circle cx="206" cy="93" r="15.5" fill="url(#bg${uid})" stroke="#C3B7E4" stroke-width="1.6"/><ellipse cx="206" cy="98" rx="6.5" ry="5.5" fill="url(#ei${uid})"/><circle cx="197" cy="88" r="2.8" fill="url(#ei${uid})"/><circle cx="206" cy="84" r="2.8" fill="url(#ei${uid})"/><circle cx="215" cy="88" r="2.8" fill="url(#ei${uid})"/></g>
<g class="zz" fill="#B9A8FF" font-family="Fraunces,Georgia,serif" font-weight="800" font-style="italic"><text class="z1" x="190" y="50" font-size="20">z</text><text class="z2" x="204" y="32" font-size="15">z</text></g>
<g class="thk" fill="#fff" fill-opacity=".9"><circle cx="198" cy="44" r="3.5"/><circle cx="208" cy="30" r="5.5"/><circle cx="224" cy="12" r="10"/><text x="224" y="17" font-size="13" text-anchor="middle" font-weight="800" fill="#3A1F4D" font-family="Sora,sans-serif">?</text></g>
<g class="spk" fill="#FFD875"><path class="k1" d="M0 -8L2.2 -2.2L8 0L2.2 2.2L0 8L-2.2 2.2L-8 0L-2.2 -2.2Z"/><path class="k2" d="M0 -8L2.2 -2.2L8 0L2.2 2.2L0 8L-2.2 2.2L-8 0L-2.2 -2.2Z"/><path class="k3" d="M0 -8L2.2 -2.2L8 0L2.2 2.2L0 8L-2.2 2.2L-8 0L-2.2 -2.2Z"/></g>
</svg>`;

    /* --------------------------------------------------------------- layers */
    mk('felt'); mk('sheen');
    if (web) mk('rail');
    const sheen = q('.sheen'); sheen.style.opacity = 0.9;

    /* pages */
    const home = pgE('p-home'), pick = pgE('p-pick'), shr = pgE('p-shr'), crop = pgE('p-crop'), priv = pgE('p-priv'), gif = pgE('p-gif'), done = pgE('p-done');
    const intro = pgE('p-in');
    S.insertBefore(intro, home);

    /* intro: a foil card back flips to the title card */
    intro.innerHTML = `<div class="ab ibk" style="left:${W(0) - 110}px;top:${H(0) - 160}px;width:220px;height:300px;transform-style:preserve-3d">
      <div class="ab cd" style="backface-visibility:hidden"><div class="cb"><i class="fo"></i></div><div class="cn" style="align-items:center;justify-content:center;gap:12px;background:radial-gradient(circle at 50% 40%,#4B2E8A,#1E1038 70%)"><svg width="84" height="84" viewBox="0 0 84 84"><path d="M14 40L18 10L36 24Q42 22 48 24L66 10L70 40Q76 52 66 64Q56 76 42 76Q28 76 18 64Q8 52 14 40Z" fill="none" stroke="#FFC857" stroke-width="3" stroke-linejoin="round"/><circle cx="31" cy="46" r="4" fill="#F6F1FF"/><circle cx="53" cy="46" r="4" fill="#F6F1FF"/><path d="M38 56q4 4 8 0" stroke="#FF3D9A" stroke-width="3" fill="none" stroke-linecap="round"/></svg><span class="lab" style="color:#FFC857;letter-spacing:.3em">Mochi deals</span></div></div>
      <div class="ab cd" style="transform:rotateY(180deg);backface-visibility:hidden"><div class="cb"><i class="fo"></i></div><div class="cn" style="align-items:center;justify-content:center;text-align:center;gap:10px;padding:14px"><span class="lab" style="color:#FFC857">Image</span><b class="fr" style="font-size:34px;line-height:1">Swiss<br>Knife</b><span style="font-size:12px;color:var(--mut);line-height:1.4">Every photo tool,<br>dealt as a card.</span><span class="chip c">${I('lock', 13, 2.4)}Stays on your ${web ? 'browser' : 'phone'}</span></div></div></div>`;
    function W(k) { return A.W / 2 + k; }
    function H(k) { return A.H / 2 + k; }
    const ibk = q('.ibk');

    /* home */
    if (app) {
      home.innerHTML = `<div class="ab hmh" style="left:0;top:0;width:1px;height:1px">${TOOLS.map((t, i) => toolH(i, 'mini hh' + i)).join('')}</div>
        <div class="ab dp gl" style="left:18px;top:584px;width:354px;height:58px;display:flex;align-items:center;gap:12px;padding:0 14px"><div style="position:relative;width:34px;height:44px;flex:none"><div class="pk dpk" style="transform:scale(.21);transform-origin:0 0"><div class="pkh"><i class="fo"></i></div></div></div><div style="flex:1"><b class="fr" style="font-size:15px">Daily free pack</b><div style="font-size:12px;color:var(--mut)">1 pack is ready · duplicates give XP</div></div><div class="chip g">Open</div></div>
        <div class="ab gl hset" style="left:18px;top:654px;width:354px;height:60px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:10px 12px">${SETS.map((s, i) => `<div class="setr"><div class="h"><b>${s.n}</b><span class="sn${i}">1/4</span></div><div class="sbar"><i class="sf${i}" style="width:25%"></i></div></div>`).join('')}</div>
        <div class="ab btn hm-add" style="left:18px;top:728px;width:354px">${I('plus', 20, 2.6)}Add a photo</div>`;
    } else {
      home.innerHTML = `<div class="dz hmz" style="left:120px;top:448px;width:692px;height:140px"><b>Drop a photo on the table</b><span>Mochi turns it into a card. Or press <kbd>Ctrl</kbd> <kbd>O</kbd> to choose a file.</span></div>`;
    }

    /* pick */
    const rawP = mk('cw rawP', pick, cardH(RAW));
    if (app) {
      pick.insertAdjacentHTML('afterbegin', `<div class="gal galp" style="left:18px;top:292px;width:354px">${[A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)].map((b, i) => `<div class="gc pk${i}" style="background-image:${b}"></div>`).join('')}</div>
        <div class="ab lab galc" style="left:18px;top:664px">Recent photos · tap one to deal it</div>`);
    } else {
      pick.insertAdjacentHTML('afterbegin', `<div class="dz pdz" style="left:40px;top:284px;width:852px;height:312px"></div>
        <div class="ab kv gl pfacts" style="left:500px;top:300px;width:376px"><span>File</span><b>${D.portrait.file}</b><span>Size</span><b>${D.portrait.size}</b><span>Pixels</span><b>${D.portrait.dims}</b><span>Rarity</span><b>Raw, not opened yet</b><span>Privacy</span><b>Stays in your browser</b></div>
        <div class="ab chip c pchip" style="left:500px;top:520px">${I('sparkle', 14, 2.2)}Pick a purpose to open the pack</div>`);
      S.appendChild(mk('file', S, `<i style="background-image:${A.photo('portrait')}"></i><span>${D.portrait.file}</span><small style="font-size:10.5px;opacity:.7">From your Desktop · ${D.portrait.size}</small>`));
    }

    /* shrink */
    const rawS = mk('cw rawS', shr, cardH(RAW));
    const resC = mk('cw resC', shr, cardH(CARDS[0]) + '<div class="stp">96% smaller</div>');
    const zone = (pg, id, rect) => { const z = mk('zone ' + id, pg); z.style.cssText = `left:${rect.x}px;top:${rect.y}px;width:${rect.w}px;height:${rect.h}px`; return z; };
    const zs = zone(shr, 'zs', G.zone);
    const opts = D.shrink.options;
    const bPur = mk('bpur', zs, `<div style="display:grid;${app ? 'grid-template-columns:1fr 1fr;grid-auto-rows:70px' : 'grid-template-columns:1fr;grid-auto-rows:62px'};gap:10px">${opts.map((o, i) => `<div class="opt gl po${i}">${I(['image', 'check', 'share', 'ruler'][i] === 'check' ? 'shield' : ['image', 'shield', 'share', 'ruler'][i], 22, 2)}<div><b>${o.label}</b><span>${o.hint}</span></div>${i === 1 ? '<em class="sg" style="font-style:normal">Mochi picks</em>' : ''}</div>`).join('')}</div>`);
    const bWk = mk('bwk', zs, `<div class="cnt">4.8 MB</div><div class="wtx" style="margin:8px 0 4px">Shuffling pixels…</div><div class="barh"></div>`);
    bWk.style.cssText = 'display:flex;flex-direction:column;justify-content:center';
    const bRs = mk('brs', zs, `<div style="display:flex;flex-wrap:wrap;gap:6px"><span class="chip m">96% smaller</span><span class="chip c">${D.portrait.size} → ${D.shrink.size}</span><span class="chip g">+120 XP</span></div>
      <div class="setr gl" style="margin-top:10px;padding:10px 12px"><div class="h"><b>Exam set</b><span class="rsn">1/4</span></div><div class="sbar"><i class="rsf" style="width:25%"></i></div><div style="font-size:12px;color:var(--mut)">${D.shrink.format} · ${D.shrink.px} · looks the same</div></div>
      <div style="position:absolute;left:0;right:0;bottom:${app ? 6 : 0}px;display:flex;gap:10px"><div class="btn sv-save" style="flex:1.4">${I('save', 20, 2.4)}Save${web ? ' <kbd>Ctrl S</kbd>' : ''}</div><div class="btn sec" style="flex:1">${I('share', 18, 2.4)}Share</div></div>`);
    /* the pack */
    const pkArt = `<i class="fo"></i><div class="pki"><svg width="46" height="46" viewBox="0 0 84 84"><path d="M14 40L18 10L36 24Q42 22 48 24L66 10L70 40Q76 52 66 64Q56 76 42 76Q28 76 18 64Q8 52 14 40Z" fill="none" stroke="#FFC857" stroke-width="4" stroke-linejoin="round"/><circle cx="31" cy="46" r="4.5" fill="#F6F1FF"/><circle cx="53" cy="46" r="4.5" fill="#F6F1FF"/></svg><b>Mochi</b><em>Foil pack</em></div>`;
    const pkW = mk('pkw ab', shr);
    pkW.style.cssText = 'left:0;top:0;width:1px;height:1px';
    pkW.innerHTML = `<div class="glow pkg"></div><div class="rays prays"></div><div class="pk"><div class="pkh pt">${pkArt}</div><div class="pkh pb">${pkArt}</div></div><div class="flash pfl"></div>`;
    pkW.querySelector('.pk').style.margin = '-105px 0 0 -75px'; pkW.style.zIndex = 3;
    const orb = Array.from({ length: 12 }, () => mk('rc', shr));

    /* crop */
    const cvR = app ? { x: 18, y: 292, w: 354, h: 404 } : { x: 70, y: 292, w: 380, h: 296 };
    const frW = app ? 232 : 208, frH = frW * 5 / 4;
    const cv = mk('cv', crop); cv.style.cssText = `left:${cvR.x}px;top:${cvR.y}px;width:${cvR.w}px;height:${cvR.h}px`;
    const imgW = app ? 470 : 420, imgH = imgW * 0.75;
    cv.innerHTML = `<div class="cvimg" style="width:${imgW}px;height:${imgH}px;margin:${-imgH / 2}px 0 0 ${-imgW / 2}px;background-image:${A.photo('mountain')}"></div><div class="cvfr" style="width:${frW}px;height:${frH}px;margin:${-frH / 2}px 0 0 ${-frW / 2}px"></div><div class="cvtag chip g">${I('crop', 14, 2.2)}${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}</div>`;
    const cvimg = q('.cvimg'), cvfr = q('.cvfr'), cvtag = q('.cvtag');
    const prs = D.crop.presets.slice(0, 5);
    const prBox = app ? { x: 18, y: 292, w: 354, h: 330 } : { x: 500, y: 292, w: 376, h: 296 };
    const bPre = mk('bpre ab', crop, prs.map((p, i) => { const m = 24, w = p.w >= p.h ? m : Math.max(8, Math.round(m * p.w / p.h)), h = p.h >= p.w ? m : Math.max(8, Math.round(m * p.h / p.w)); return `<div class="opt gl sol pr${i}" style="position:absolute;left:0;right:0;top:${i * (app ? 64 : 58)}px;height:${app ? 56 : 52}px"><div style="width:28px;height:28px;display:grid;place-items:center;flex:none"><i style="display:block;width:${w}px;height:${h}px;border:2px solid var(--gold);border-radius:3px"></i></div><div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div></div>`; }).join(''));
    bPre.style.cssText += `left:${prBox.x}px;top:${prBox.y}px;width:${prBox.w}px;height:${prBox.h}px`;
    const cInfo = mk('cinfo ab', crop, `<div class="lab">Mountain photo</div><div class="fr" style="font-size:20px;font-weight:700;margin:4px 0 6px">IMG_1650.JPG</div><div style="color:var(--mut);font-size:12.5px">4000 × 3000 · 6.2 MB</div>${web ? '<div style="margin-top:12px;color:var(--mut);font-size:12.5px">Click Mochi or press <kbd>Space</kbd> for the tool hand.</div>' : ''}`);
    cInfo.style.cssText += app ? 'left:18px;top:710px;width:354px;text-align:center' : 'left:500px;top:310px;width:376px';
if (web) { const ci2 = mk('cinfo2 ab gl', crop, `<div class="lab">Frame</div><div class="fr" style="font-size:20px;font-weight:700;margin:2px 0 6px">${D.crop.preset} ${D.crop.ratio}</div><div style="font-size:12.5px;color:var(--mut);line-height:1.5">${D.crop.px}<br>Drag the photo to move it. Only the golden frame is kept.</div>`); ci2.style.cssText += 'left:500px;top:310px;width:376px;padding:14px'; ci2.id = 'ci2'; }
    const cDone = mk('btn cv-done ab', crop, `${I('check', 20, 3)}Done${web ? ' <kbd>Enter</kbd>' : ''}`);
    cDone.style.cssText += app ? 'left:18px;top:716px;width:354px' : 'left:500px;top:532px;width:376px';
    const cvPr = mk('gl ab cpr', crop); cvPr.style.cssText = `left:${cvR.x + cvR.w / 2 - 150}px;top:${cvR.y + cvR.h / 2 - 76}px;width:300px;height:152px;padding:12px;z-index:5`;
    cvPr.innerHTML = '<div class="barh" style="height:100px"></div><div class="wtx cpt" style="margin-top:4px">Cropping to 1080 × 1350…</div>';

    /* privacy */
    const mapSVG = `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="#2A1D4A"/><path d="M-10 150C80 128 120 172 200 140S330 80 410 100" stroke="#3DE0FF" stroke-opacity=".35" stroke-width="18" fill="none"/><path d="M0 60h400M70 0v200M160 0l40 200M290 0v200M0 176h400M340 0l-60 200" stroke="#4B3A7F" stroke-width="8"/><path d="M0 104h400" stroke="#FFC857" stroke-opacity=".5" stroke-width="9"/><rect x="84" y="14" width="62" height="34" rx="8" fill="#38275F"/><rect x="300" y="118" width="70" height="44" rx="8" fill="#38275F"/></svg>`;
    const pinSVG = `<svg viewBox="0 0 44 56"><path d="M22 54S4 34 4 21a18 18 0 0 1 36 0c0 13-18 33-18 33z" fill="#FF3D9A"/><path d="M12 16a11 11 0 0 1 8-8" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6" fill="none"/><circle cx="22" cy="21" r="7" fill="#fff"/></svg>`;
    const pvR = app ? { ph: { x: 18, y: 292, w: 354, h: 86 }, map: { x: 18, y: 388, w: 354, h: 168 } } : { ph: { x: 70, y: 292, w: 380, h: 96 }, map: { x: 70, y: 398, w: 380, h: 190 } };
    const rc = (e, r) => { e.style.cssText += `left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px`; };
    const pph = mk('vid pph ab', priv, `<span class="chip vb">${D.place.file} · city photo</span>`); rc(pph, pvR.ph); pph.style.backgroundImage = A.photo('city');
    const pmap = mk('map pmap ab', priv, `${mapSVG}<div class="mpin" style="left:52%;top:62%">${pinSVG}</div><span class="chip ab" style="left:8px;bottom:8px">${I('pin', 13, 2.2)}${D.place.lat} · ${D.place.lon}</span>`); rc(pmap, pvR.map);
    const pvZ = zone(priv, 'zp', app ? { x: 18, y: 566, w: 354, h: 230 } : { x: 500, y: 292, w: 376, h: 296 });
    mk('pinfo', pvZ, `<div class="lab">Found in the photo</div><div class="ptag pcity" style="margin:2px 0 2px">${D.place.city}, ${D.place.country}</div><div style="font-size:12.5px;color:var(--mut)">${D.place.region} · ${D.place.when} · ${D.place.device}</div>
      <div class="warn pwarn" style="margin-top:10px">${I('eye', 20, 2.2)}<span>If you share this photo, people can see this place.</span></div>
      <div class="warn ok pok" style="margin-top:10px;display:none">${I('shield', 20, 2.2)}<span>Place removed. Safe to share.</span></div>`);
    const pvRm = mk('btn pv-rm ab', priv, `${I('trash', 18, 2.4)}<span class="rml">Remove location</span>`);
    pvRm.style.cssText += app ? 'left:18px;top:728px;width:354px' : 'left:500px;top:532px;width:376px';
    const pvPr = mk('gl ab ppr', priv); pvPr.style.cssText = `left:${pvR.map.x + pvR.map.w / 2 - 150}px;top:${pvR.map.y + pvR.map.h / 2 - (app ? 70 : 84)}px;width:300px;height:${app ? 140 : 168}px;padding:10px;z-index:5`;
    pvPr.innerHTML = `<div class="barh" style="height:${app ? 90 : 110}px"></div><div class="wtx ppt" style="margin-top:2px">Dissolving the pin…</div>`;
    const shield = mk('shield ab', priv, I('shield', 70, 1.6)); shield.style.cssText += `left:${pvR.map.x + pvR.map.w / 2 - 35}px;top:${pvR.map.y + pvR.map.h / 2 - 35}px;color:#3DE0FF;width:70px;height:70px;z-index:6;filter:drop-shadow(0 0 14px rgba(61,224,255,.8))`;

    /* gif */
    const gvR = app ? { x: 18, y: 292, w: 354, h: 200 } : { x: 70, y: 292, w: 380, h: 214 };
    const vid = mk('vid gvid ab', gif, `<span class="chip vb gvb">${D.video.file} · ${D.video.len}</span>`); rc(vid, gvR);
    const stR = app ? { x: 34, y: 520, w: 322 } : { x: 90, y: 526, w: 340 };
    const strip = mk('strip ab', gif, `<div class="sclip">${Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('')}<div class="selw"></div></div><div class="hd hL"></div><div class="hd hR"></div>`);
    strip.style.cssText += `left:${stR.x}px;top:${stR.y}px;width:${stR.w}px`;
    const gz = zone(gif, 'zg', app ? { x: 18, y: 596, w: 354, h: 200 } : { x: 500, y: 292, w: 376, h: 296 });
    mk('gtrim', gz, `<div class="lab">Trim</div><div class="fr gsv" style="font-size:24px;font-weight:700;margin:2px 0 4px"></div><div class="gsl" style="font-size:12.5px;color:var(--mut)"></div>
      <div class="btn gf-make ab" style="left:0;right:0;top:auto;bottom:${app ? 28 : 0}px">${I('film', 20, 2.4)}<span class="mkl">Make GIF</span></div>`);
    const gWk = mk('gwk', gz, `<div class="cnt gcnt" style="font-size:34px">Frame 0 of 36</div><div class="wtx gwt" style="margin:6px 0">Dealing 36 frames…</div><div class="barh"></div>`);
    gWk.style.cssText = 'display:flex;flex-direction:column;justify-content:center';
    const pileL = mk('pile ab pL', gif, '<i></i><i style="transform:translate(2px,-2px)"></i><i style="transform:translate(4px,-4px)"></i>'), pileR = mk('pile ab pR', gif, '<i></i><i style="transform:translate(-2px,-2px)"></i><i style="transform:translate(-4px,-4px)"></i>');
    pileL.style.left = (gvR.x + 40) + 'px'; pileR.style.left = (gvR.x + gvR.w - 40 - 64) + 'px'; pileL.style.top = pileR.style.top = (gvR.y + gvR.h / 2 - 20) + 'px';
    const flyers = Array.from({ length: 5 }, () => mk('fly', gif));
    const gcnt = q('.gcnt');

    /* done */
    const mw = app ? 80 : 124, mh = app ? 112 : 172, gap = app ? 12 : 16;
    const dRow = app ? { x: 17, y: 262 } : { x: 60, y: 292 };
    done.innerHTML = '';
    const minis = CARDS.map((c, i) => { const m = mk('mcw ab', done, miniH(c)); m.style.cssText = `left:0;top:0;width:${mw}px;height:${mh}px;--mw:${mw}px;--mh:${mh}px`; m.firstChild.style.cssText = ''; return m; });
    const dxy = i => ({ x: dRow.x + i * (mw + gap), y: dRow.y });
    const adH = `<div class="ad"><i></i><div><small>Ad</small>Sponsored message. Shown only after the work is done.</div></div>`;
    const setRows = () => SETS.map((s, i) => `<div class="srow"><b>${s.n}</b><div class="sbar" style="height:6px"><i class="dsf${i}" style="width:25%"></i></div><span class="dsn${i}">1/4</span></div>`).join('');
    const lvB = `<span class="chip m lvup ab" style="left:auto;right:16px;top:-13px">Level up!</span>`;
    if (app) {
      done.insertAdjacentHTML('beforeend', `<div class="ab fr dn-t" style="left:18px;top:224px;font-size:24px;font-weight:700">Done. 4 new cards.</div>
      <span class="ab chip g dtaps" style="left:auto;right:18px;top:228px">0 taps</span>
      <div class="ab gl dlv" style="left:18px;top:384px;width:354px;height:88px;padding:11px 14px">${lvB}<div style="display:flex;align-items:center;justify-content:space-between"><span class="lvl dlt" style="font-size:19px">Lv 6 · Dealer</span><span class="chip g dstk">${flame}<b class="dsn">3-day streak</b></span></div><div class="xpb dxb" style="height:10px;margin:9px 0 7px"><i></i></div><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--mut)"><span class="dxt">240 / 600 XP</span><span class="dxg" style="color:var(--gold)">+370 XP · duplicate +20</span></div></div>
      <div class="ab gl dst" style="left:18px;top:482px;width:354px;height:92px;padding:12px 14px;display:flex;flex-direction:column;gap:9px">${setRows()}</div>
      <div class="ab drc" style="left:18px;top:586px;width:354px"><span class="chip c">${I('lock', 13, 2.4)}${D.promise}</span></div>
      <div class="ab drc" style="left:18px;top:622px;width:354px">${adH}</div>
      <div class="ab dsv" style="left:18px;top:740px;width:354px;display:flex;gap:10px"><div class="btn dn-save" style="flex:1">${I('save', 20, 2.4)}<span class="sal">Save all 4</span></div><div class="btn sec" style="width:100px">${I('share', 18, 2.4)}Share</div></div>`);
    } else {
      done.insertAdjacentHTML('beforeend', `<div class="ab fr dn-t" style="left:60px;top:228px;font-size:26px;font-weight:700">Done. 4 new cards.</div>
      <span class="ab chip g dtaps" style="left:330px;top:234px">0 taps</span>
      <div class="ab drc" style="left:60px;top:484px;width:560px;display:flex;flex-direction:column;gap:10px"><div style="display:flex;gap:10px"><span class="chip c">${I('lock', 13, 2.4)}${D.promiseWeb}</span><span class="chip m">+370 XP</span></div>${adH}</div>
      <div class="ab gl dlv" style="left:660px;top:228px;width:232px;height:262px;padding:14px;display:flex;flex-direction:column;gap:8px">${lvB}<span class="lab">Rank</span><div class="lvl dlt" style="font-size:20px">Lv 6 · Dealer</div><div><div class="xpb dxb" style="height:10px;margin-bottom:6px"><i></i></div><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--mut)"><span class="dxt">240 / 600 XP</span></div><div class="dxg" style="font-size:12px;color:var(--gold);font-weight:600;margin-top:2px">+370 XP · duplicate +20</div></div><span class="chip g dstk" style="align-self:flex-start">${flame}<b class="dsn">3-day streak</b></span>${setRows()}</div>
      <div class="ab dsv" style="left:660px;top:508px;width:232px;display:flex;gap:10px"><div class="btn dn-save" style="flex:1">${I('save', 20, 2.4)}<span class="sal">Save all 4</span> <kbd>Ctrl S</kbd></div></div>`);
    }

    /* chrome: hud, slot/title, album, hand */
    if (app) {
      mk('hud', S, `<div class="lv">Lv 6</div><div class="xpb"><i></i></div><div class="fl">${flame}<b class="fn">3</b></div><div class="cc">${I('layers', 17, 2.2)}<b class="cn2">12</b></div>`);
    } else {
      mk('tbar', S, `<div class="brand"><svg width="30" height="30" viewBox="0 0 84 84"><path d="M14 40L18 10L36 24Q42 22 48 24L66 10L70 40Q76 52 66 64Q56 76 42 76Q28 76 18 64Q8 52 14 40Z" fill="none" stroke="#FFC857" stroke-width="5" stroke-linejoin="round"/><circle cx="31" cy="46" r="4.5" fill="#F6F1FF"/><circle cx="53" cy="46" r="4.5" fill="#F6F1FF"/></svg>Image Swiss Knife</div><span class="chip c">${I('lock', 13, 2.4)}Done in your browser. Nothing uploaded.</span><span class="chip g">${I('layers', 13, 2.4)}Daily pack ready</span><div class="fl">${flame}<b class="fn">3</b></div><div class="lv">Lv 6</div><div class="xpb"><i></i></div><span class="xpt">240 / 600 XP</span>`);
      const alb = mk('alb gl', S);
      alb.innerHTML = `<div class="ab fr" style="left:16px;top:14px;font-size:20px;font-weight:700">Collection</div><div class="ab chip cc" style="left:auto;right:14px;top:14px">${I('layers', 13, 2.2)}<b class="cn2">12</b> cards</div>
        <div class="ab gl" style="left:14px;top:50px;width:288px;height:70px;display:flex;align-items:center;gap:12px;padding:0 12px"><div style="width:40px;height:52px;border-radius:8px;overflow:hidden;position:relative;flex:none"><i class="fo" style="width:300px;height:300px;margin:-150px 0 0 -150px"></i></div><div style="flex:1"><b class="fr" style="font-size:15px">Daily free pack</b><div style="font-size:12px;color:var(--mut)">Ready. Duplicates give XP.</div></div></div>
        ${SETS.map((s, si) => `<div class="ab" style="left:14px;top:${130 + 152 * si}px;width:288px"><div class="setr"><div class="h"><b>${s.n}</b><span class="an${si}">1/4</span></div><div class="sbar"><i class="af${si}" style="width:25%"></i></div></div>${s.s.map((x, i) => `<div class="as ${x.r || ''} as${si}${i}" style="left:${i * 74}px;top:42px">?</div>`).join('')}</div>`).join('')}`;
      const hand = mk('hand', S);
      hand.innerHTML = TOOLS.map((t, i) => toolH(i, 'hnd hd' + i)).join('');
    }
    const slotW = mk('slotw', S, toolH(0, 'sm')); slotW.style.left = G.slot.x + 'px'; slotW.style.top = G.slot.y + 'px';
    const slotTc = slotW.querySelector('.tc');
    const tt = mk('tt', S, '<b></b><span></span>');
    tt.style.top = (G.slot.y + (web ? 4 : 2)) + 'px';
    const ttb = tt.querySelector('b'), tts = tt.querySelector('span');

    /* overlays: dim, result cards, fan, fx */
    const dim = mk('dim', S); dim.style.opacity = 0;
    const ov = [1, 2, 3].map(i => mk('cw ov' + i, S, cardH(CARDS[i])));
    ov.forEach(o => { o.style.zIndex = 36; });
    resC.style.zIndex = 3;
    const fanCards = TOOLS.map((t, i) => { S.insertAdjacentHTML('beforeend', toolH(i)); const c = S.lastElementChild; c.classList.add('fk', 'fk' + i); c.style.zIndex = 48; return c; });
    const fanl = mk('fanl', S, 'Pick a tool'); fanl.style.opacity = 0;
    const fx = mk('fx', S);
    const sw = mk('sweep', fx);
    const xpf = Array.from({ length: 4 }, (_, i) => mk('xpf', fx, ['+120 XP', '+60 XP', '+80 XP', '+90 XP'][i]));
    const toast = mk('toast', S, `${I('check', 18, 3)}<span class="tst">Saved</span>`);
    const dnToast = mk('toast', S, `${I('check', 18, 3)}<span>${web ? '4 cards saved' : '4 cards saved to your Gallery'}</span>`);

    /* mochi, bubble, suggestion, pulse */
    const mo = mk('mochi', S, mochiSVG);
    const bub = mk('bub', S, '<span class="bt"></span><i></i>'); const bt = bub.querySelector('.bt'), btail = bub.querySelector('i');
    const sug = mk('sug', S, `<span class="sgi"></span><span class="sgt"></span>`);
    const pulse = mk('pulse', S), tapme = mk('tapme', S, 'Tap me');
    const M = {
      tail: q('.tail'), body: q('.body'), head: q('.head'), bow: q('.bow'), bell: q('.bell'), earL: q('.earL'), earR: q('.earR'),
      aL: q('.aL'), aR: q('.aR'), hc: q('.hc'), iris: qa('.iris'), eo: qa('.eo'), ea: qa('.ea'), ec: qa('.ec'), eye: qa('.eye'), brow: qa('.brow'),
      bl: [q('.blL'), q('.blR')], m: { w: q('.mw'), s: q('.ms'), o: q('.mo'), p: q('.mp'), t: q('.mt'), f: q('.mf'), z: q('.mz') },
      zz: q('.zz'), thk: q('.thk'), spk: q('.spk'), ks: [q('.k1'), q('.k2'), q('.k3')],
    };

    /* progress bars */
    const kinds = A.bars(4, ['streams', 'tiles', 'comet', 'orbit', 'liquid', 'warp'], 13);
    const BC = ['#FF3D9A', '#FFC857', '#3DE0FF', '#140B26'];
    const SZ = { streams: [0, 64], liquid: [0, 30], orbit: [110, 110], tiles: [0, 56], comet: [0, 44], warp: [0, 92] };
    const mkBar = (i, host, wFull) => { const k = kinds[i], s = SZ[k]; const b = A.bar(host, k, { w: s[0] || wFull, h: s[1], colors: BC, track: 'rgba(246,241,255,.14)', field: BC[3], seed: i + 3 }); return b; };
    const barA = mkBar(0, q('.bwk .barh'), G.bw), barB = mkBar(1, q('.cpr .barh'), 270), barC = mkBar(2, q('.ppr .barh'), 270), barD = mkBar(3, q('.gwk .barh'), G.bw);

    const fit = (bar, panel, cy, extra) => { const h = SZ[bar.kind][1] + 6; bar.el.parentNode.style.height = h + 'px'; if (panel) { const ph = h + extra; panel.style.height = ph + 'px'; panel.style.top = (cy - ph / 2) + 'px'; } };
    fit(barA, null); fit(barD, null);
    fit(barB, cvPr, cvR.y + cvR.h / 2, 52); fit(barC, pvPr, pvR.map.y + pvR.map.h / 2, 46);

    /* confetti */
    const burst = (x, y, shape, n, seed, power = 640) => A.confetti(fx, { x, y, count: n, shape, colors: [C.mag, C.gold, C.cy, C.vio, '#fff'], power, spread: Math.PI * 1.5, gravity: 800, dur: 2.2, seed });
    const pkC = { x: G.card.x, y: G.card.y };
    const cf = [
      [14.3, burst(pkC.x, pkC.y, 'star', 26, 3), burst(pkC.x, pkC.y, 'coin', 18, 4), burst(pkC.x, pkC.y, 'spark', 30, 5, 760)],
      [23.1, burst(G.ov.x, G.ov.y, 'star', 16, 6, 520), burst(G.ov.x, G.ov.y, 'spark', 20, 7, 600)],
      [28.95, burst(app ? 195 : 260, app ? 470 : 500, 'spark', 26, 8, 620), burst(app ? 195 : 260, app ? 470 : 500, 'star', 12, 9, 480)],
      [35.0, burst(G.ov.x, G.ov.y, 'coin', 14, 10, 560), burst(G.ov.x, G.ov.y, 'spark', 22, 11, 620)],
      [36.25, burst(app ? 195 : 466, app ? 330 : 380, 'star', 30, 12, 700), burst(app ? 195 : 466, app ? 330 : 380, 'coin', 22, 13, 640), burst(app ? 195 : 466, app ? 330 : 380, 'spark', 34, 14, 800)],
    ];

    /* ------------------------------------------------------------------ pointer */
    const T = { add: 3.8, pick: 5.6, exam: 9.7, save: 16.0, mochi: 17.5, crop: 18.5, preset: 19.7, d0: 20.6, d1: 21.6, cdone: 22.1, chk: 24.9, rm: 27.2, sug: 30.5, h0: 31.2, h1: 32.1, make: 32.7, saveAll: 37.9 };
    const FS = { x: 1236, y: 690 };
    const keys = [
      ...(app ? [{ t: T.add, at: '.hm-add', tap: true }, { t: T.pick, at: '.pk0', tap: true }]
        : [{ t: 5.2, at: FS, hold: 0.25 }, { t: 6.6, at: { x: 466, y: 440 }, drag: true, move: 1.2 }]),
      { t: T.exam, at: '.po1', tap: true }, { t: T.save, at: '.sv-save', tap: true },
      { t: T.mochi, at: '.mochi', ay: 0.5, tap: true },
      { t: T.crop, at: '.fk1', tap: true }, { t: T.preset, at: '.pr0', tap: true },
      { t: T.d0, at: '.cvimg', hold: 0.15 }, { t: T.d1, at: '.cvimg', drag: true, move: 1.0 },
      { t: T.cdone, at: '.cv-done', tap: true }, { t: T.chk, at: '.sug', tap: true }, { t: T.rm, at: '.pv-rm', tap: true },
      { t: T.sug, at: '.sug', tap: true }, { t: T.h0, at: '.hR', hold: 0.1 }, { t: T.h1, at: '.hR', drag: true, move: 0.8 },
      { t: T.make, at: '.gf-make', tap: true }, { t: T.saveAll, at: '.dn-save', tap: true },
    ];
    const taps = keys.filter(k => k.tap).length + keys.filter(k => k.drag).length;
    A.pointer(keys);
    qa('.dtaps').forEach(e => { e.textContent = taps + ' taps'; });

    /* -------------------------------------------------------------- scripts */
    const MOODS = {
      neutral: { e: 'o', so: 1, m: 'w', bl: 0.4, wv: 6, ws: 3 },
      happy: { e: 'a', m: 's', bl: 0.85, wv: 9, ws: 5 },
      wink: { e: 'wk', m: 's', bl: 0.8, wv: 14, ws: 8, tilt: 5 },
      surprised: { e: 'o', so: 1.1, big: 1, ir: 0.75, m: 'o', bl: 0.3, br: [-5, -5, 0, 0], wv: 3, ws: 3, hop: 1 },
      thinking: { e: 'o', so: 0.92, look: [0.8, -0.8], m: 't', bl: 0.3, br: [2, -6, 4, -4], aL: -99, wv: 0, ws: 0, tilt: -5, thk: 1 },
      working: { e: 'o', so: 0.72, m: 'f', bl: 0.5, br: [3, 3, 12, -12], aRb: 40, wv: 9, ws: 15, shuf: 1 },
      celebrate: { e: 'a', m: 'p', bl: 1, aL: 150, wv: 16, ws: 9, aRb: -8, bounce: 1, spk: 1 },
      sleepy: { e: 'o', so: 0.4, look: [0, 0.7], m: 'z', bl: 0.5, tilt: -7, wv: 2, ws: 1.2, zz: 1 },
    };
    const MK = [[0, 'neutral'], [2.0, 'happy'], [3.1, 'wink'], [3.9, 'neutral'], [5.55, 'surprised'], [6.25, 'happy'], [7.4, 'thinking'], [8.9, 'wink'], [9.9, 'happy'], [10.4, 'working'], [14.2, 'surprised'], [14.55, 'celebrate'], [16.2, 'happy'], [17.0, 'neutral'], [17.5, 'wink'], [18.8, 'happy'], [19.4, 'thinking'], [22.0, 'working'], [23.0, 'celebrate'], [23.95, 'neutral'], [24.2, 'thinking'], [25.7, 'surprised'], [26.4, 'thinking'], [27.3, 'working'], [29.0, 'celebrate'], [29.95, 'neutral'], [30.45, 'wink'], [31.0, 'thinking'], [32.7, 'happy'], [33.0, 'working'], [35.0, 'surprised'], [35.3, 'celebrate'], [38.2, 'happy'], [39.1, 'sleepy']];
    const moodAt = t => { let m = MK[0]; for (const k of MK) if (t >= k[0]) m = k; return m; };
    const POSE = app
      ? [[0, 195, 990, 0.85], [1.9, 195, 990, 0.85], [2.55, 195, 454, 0.85], [4.15, 195, 454, 0.85], [4.9, 74, 214, 0.5], [41, 74, 214, 0.5]]
      : [[0, 640, 990, 0.85], [1.9, 640, 990, 0.85], [2.55, 640, 424, 0.85], [2.8, 640, 424, 0.85], [3.4, 466, 424, 0.85], [4.6, 466, 424, 0.85], [5.3, 466, 214, 0.62], [41, 466, 214, 0.62]];
    const poseAt = t => {
      let i = 0; while (i < POSE.length - 2 && t >= POSE[i + 1][0]) i++;
      const a = POSE[i], b = POSE[i + 1], u = seg(t, a[0], b[0]), moving = a[1] !== b[1] || a[2] !== b[2] || a[3] !== b[3];
      const e = i === 1 ? E.outBack(u) : E.inOut(u);
      return { x: lerp(a[1], b[1], e), y: lerp(a[2], b[2], e) - (moving && i !== 1 ? Math.sin(Math.PI * u) * 34 : 0), s: lerp(a[3], b[3], e) };
    };
    const BP = app ? { H: [65, 150, 260, 'b', 130], C: [142, 92, 236, 'l', 34] } : { H: [610, 232, 300, 'l', 44], C: [556, 84, 340, 'l', 36] };
    const LINES = [
      [2.6, "Hi, I'm Mochi. I deal your photo tools.", 'H'], [3.35, 'Tap me any time for a hand of tools.', 'H'],
      [4.9, app ? 'Pick a photo and I will deal it as a card.' : 'Drop a photo on the table. I will deal it.', 'C'], [5.7, 'Ooh, a big one. 4.8 MB!', 'C'], [6.6, 'Too big for a form. Pick a purpose next.', 'C'],
      [9.0, 'I would shrink it for an exam form. Tap it.', 'C'], [10.5, 'Shuffling pixels. Hold tight!', 'C'], [12.4, 'The pack is glowing. Almost there!', 'C'],
      [14.45, 'A Holo card! 96% smaller.', 'C'], [15.5, 'Save it to your album.', 'C'], [16.3, 'Saved. Exam set is 2 of 4.', 'C'],
      [17.05, 'Next card. Tap me for tools.', 'C'], [18.7, 'Crop. Where will you post it?', 'C'], [19.9, '4:5 fits Instagram. Slide the photo.', 'C'], [22.2, 'Perfect fit. Cropping…', 'C'], [23.2, 'A Rare card! +60 XP.', 'C'],
      [24.1, 'This photo knows where it was taken. Check?', 'C'], [25.3, 'Pune, India. Anyone you share it with can see it.', 'C'], [27.3, 'Poof. Removing the place…', 'C'], [29.0, 'Safe to share. Shield card! +80 XP.', 'C'],
      [30.1, 'A clip. Make it a GIF?', 'C'], [31.0, 'Trim 3 seconds. Drag the handle.', 'C'], [32.7, 'Tap Make GIF.', 'C'], [33.1, 'Dealing 36 frames…', 'C'], [35.1, 'Your GIF card. It loops forever.', 'C'],
      [36.1, '4 cards pulled. +370 XP!', 'C'], [38.3, 'Level up! See you tomorrow.', 'C'],
    ];
    const SUG = [[24.2, 25.4, 'pin', 'Check location'], [30.15, 30.9, 'film', 'Make a GIF']];
    const TOOL = t => (t >= 30.3 ? 3 : t >= 24.3 ? 2 : t >= 18.85 ? 1 : t >= 9.3 ? 0 : -1);
    const TITLES = t => t < 4.5 ? ['', ''] : t < 9.3 ? ['Pick a photo', 'It is dealt as a card'] : t < 17.2 ? ['Shrink', t < 9.7 ? 'Pick a purpose' : `${D.shrink.target} · ${D.shrink.rule}`]
      : t < 18.85 ? ['Mountain photo', 'IMG_1650.JPG · 4000 × 3000'] : t < 24.3 ? ['Crop', t < 19.7 ? 'Choose a size' : `${D.crop.preset} ${D.crop.ratio} · ${D.crop.px}`]
        : t < 30.3 ? ['Place', 'Where was it taken?'] : t < 36 ? ['GIF', `${D.video.file} · ${D.video.len}`] : ['All done', '4 new cards'];
    const XPG = [[14.85, 120], [23.3, 60], [29.45, 80], [35.65, 90], [36.8, 20]];
    const xpAt = t => 240 + XPG.reduce((s, g) => s + g[1] * E.out(seg(t, g[0], g[0] + 0.7)), 0);
    const SWT = [2.3, 4.4, 9.0, 17.0, 24.0, 30.0, 36.0];
    const PG = [[intro, -1, 2.7, null, ['flip']], [home, 2.3, 4.7, ['flip'], ['push', { dir: 'l' }]], [pick, 4.35, 9.4, ['push', { dir: 'r' }], ['flip']], [shr, 9.0, 17.4, ['flip'], ['pixels', { n: 5 }]], [crop, 17.0, 24.4, ['pixels', { n: 5 }], ['push', { dir: 'l' }]], [priv, 24.0, 30.4, ['push', { dir: 'r' }], ['flip']], [gif, 30.0, 36.4, ['flip'], ['pixels', { n: 5 }]], [done, 36.0, 41, ['pixels', { n: 5 }], ['fade']]];

    /* ------------------------------------------------------------- helpers */
    const fi12 = tt => Math.floor(tt * 12) % 12, bgOf = tt => Math.min(seg(tt, 17.55, 17.8), 1 - seg(tt, 18.6, 19.0)) * 0.9;
    const pawPos = p => ({ x: p.x + p.s * 86, y: p.y - p.s * 168 });
    const tiltCard = (w, t, cx, cy, amp) => {
      const p = A.pointerAt(t), cd = w.firstChild; if (!cd) return 0;
      let rx, ry;
      if (p.vis > 0.15) { rx = cl((p.x - cx) / 260, -1, 1); ry = cl((p.y - cy) / 260, -1, 1); }
      else { rx = Math.sin(t * 1.3) * 0.5; ry = Math.cos(t * 1.1) * 0.3; }
      cd.style.transform = `perspective(720px) rotateY(${(rx * amp).toFixed(2)}deg) rotateX(${(-ry * amp * 0.8).toFixed(2)}deg)`;
      return rx;
    };
    const place = (w, x, y, s, r, o, sx) => set(w, { x: x - 110, y: y - 150, s, r: r || 0, sx: sx == null ? 1 : sx, sy: 1, o });
    const flip = u => Math.abs(Math.cos((1 - cl(u)) * Math.PI / 2));
    /* result card overlay: appears at t0, rests, flies to album target */
    const ovFlow = (w, t, t0, f0, f1, tgt, from) => {
      const a = seg(t, t0, t0 + 0.55), f = E.inOut(seg(t, f0, f1));
      const bx = lerp(from.x, G.ov.x, E.out(a)), by = lerp(from.y, G.ov.y, E.out(a));
      const x = lerp(bx, tgt.x, f), y = lerp(by, tgt.y, f) - Math.sin(Math.PI * f) * 40;
      const s = lerp(0.35 + 0.65 * E.outBack(a), 0.2, f) * G.cs * 1.0;
      place(w, x, y, s, (1 - a) * -14 + f * 8, a < 0.02 ? 0 : (1 - seg(f, 0.75, 1)), Math.max(0.04, flip(a)));
      return { a, f };
    };

    /* ----------------------------------------------------------------- update */
    return {
      update(t) {
        S.style.setProperty('--fa', ((t * 38) % 360).toFixed(1) + 'deg');
        set(sheen, { r: t * 5 });

        /* pages */
        PG.forEach(([e, a, b, kin, kout]) => {
          const pin = seg(t, a, a + 0.45), pout = 1 - seg(t, b - 0.45, b);
          let p, k;
          if (t < (a + b) / 2) { p = pin; k = kin || ['fade']; } else { p = pout; k = kout || ['fade']; }
          if (e === intro && t < 1) { p = 1; k = ['fade']; }
          A.reveal(e, k[0], p, k[1] || {});
        });
        /* foil sweep on every change */
        let sp = -1; SWT.forEach(T0 => { const u = seg(t, T0 - 0.1, T0 + 0.6); if (u > 0 && u < 1) sp = u; });
        set(sw, { x: sp < 0 ? -9999 : lerp(-A.W * 0.5, A.W * 1.1, E.inOut(sp)), o: sp < 0 ? 0 : Math.sin(Math.PI * sp) });

        /* HUD */
        const xp = xpAt(t), lvl = xp >= 600 ? 7 : 6, fill = lvl === 6 ? xp / 600 : (xp - 600) / 800;
        const hudE = web ? q('.tbar') : q('.hud');
        set(hudE, { o: seg(t, 2.2, 2.7) });
        qa('.lv').forEach(e => txt(e, 'Lv ' + lvl));
        qa('.xpb i').forEach(e => { if (!e.closest('.dxb')) e.style.width = (cl(fill) * 100).toFixed(1) + '%'; });
        qa('.xpt').forEach(e => txt(e, lvl === 6 ? `${Math.round(xp)} / 600 XP` : `${Math.round(xp - 600)} / 800 XP`));
        const streak = t >= 36.8 ? 4 : 3; qa('.fn').forEach(e => txt(e, String(streak)));
        const flies = [16.85, 23.95, 30.05, 36.7].filter(x => t >= x).length;
        qa('.cn2').forEach(e => txt(e, String(12 + flies)));

        /* ---- tool slot and title ---- */
        const tool = TOOL(t), tc0 = [9.3, 18.85, 24.3, 30.3][Math.max(0, tool)];
        const sl = tool < 0 ? 0 : (tool === 1 ? seg(t, 18.85, 19.1) : E.out(seg(t, tc0, tc0 + 0.35)));
        if (tool >= 0) { const tcE = slotTc; const k = tool; if (tcE._k !== k) { tcE._k = k; tcE.style.setProperty('--tc', TOOLS[k][2]); tcE.querySelector('.tn').innerHTML = I(TOOLS[k][0], 24, 2); } }
        set(slotW, { sx: Math.max(0.05, tool === 1 ? 1 : sl), sy: 1, o: t >= 36 ? seg(t, 36.2, 36.3) * 0 : sl });
        const ti = TITLES(t); txt(ttb, ti[0]); txt(tts, ti[1]);
        tt.style.left = (G.slot.x + (tool >= 0 && t < 36 ? (web ? 62 : 52) : 0)) + 'px';
        set(tt, { o: seg(t, 4.5, 4.9) * (t < 36 ? 1 : 0) });

        /* ---- web album and hand ---- */
        if (web) {
          set(q('.alb'), { x: (1 - E.out(seg(t, 2.4, 3.1))) * 40, o: seg(t, 2.4, 3.0) });
          SETS.forEach((s, si) => {
            s.s.forEach((x, i) => {
              const e = q(`.as${si}${i}`), on = t >= x.at, u = on ? E.outBack(seg(t, x.at < 0 ? 0 : x.at, (x.at < 0 ? 0 : x.at) + 0.5)) : 0;
              if (e._on !== on) { e._on = on; e.classList.toggle('on', on); e.textContent = on ? '' : '?'; if (x.a) e.style.backgroundImage = on ? x.a : ''; e.classList.toggle('holo', on && x.r === 'holo'); }
              e.style.transform = on && x.at > 0 ? `scale(${(0.6 + 0.4 * u).toFixed(3)})` : '';
            });
            const n = setN(si, t); txt(q('.an' + si), n + '/4'); q('.af' + si).style.width = (n * 25) + '%';
          });
          const hv = seg(t, 2.6, 3.2);
          TOOLS.forEach((_, i) => {
            const e = q('.hd' + i), a = (i - 2), act = i === tool ? 1 : 0;
            set(e, { x: 466 + a * 112 - 52 + (i === 2 ? 0 : 0), y: 616 + a * a * 6 + (1 - E.out(hv)) * 160 - act * 24, r: a * 4.5, o: hv });
            e.style.boxShadow = act ? '0 0 26px rgba(255,200,87,.7)' : '';
            e.style.zIndex = act ? 31 : 30;
          });
        } else {
          SETS.forEach((s, i) => { const n = setN(i, t); txt(q('.sn' + i), n + '/4'); q('.sf' + i).style.width = n * 25 + '%'; });
        }

        /* ---- intro ---- */
        {
          const drop = E.outBack(seg(t, 0.25, 0.95)), fl = E.inOut(seg(t, 1.25, 1.95)), up = E.inOut(seg(t, 2.0, 2.4));
          ibk.style.opacity = seg(t, 0.2, 0.4).toFixed(2);
          ibk.style.transform = `perspective(900px) translate(0px,${((1 - drop) * -520 + up * -30).toFixed(1)}px) scale(${(0.7 + 0.3 * drop).toFixed(3)}) rotateY(${(fl * 180 + (1 - drop) * 140).toFixed(1)}deg)`;
        }

        /* ---- home ---- */
        if (app) {
          TOOLS.forEach((_, i) => {
            const e = q('.hh' + i), a = i - 2, u = E.outBack(seg(t, 2.7 + i * 0.08, 3.3 + i * 0.08));
            set(e, { x: 195 + a * 66 - 29, y: 476 + Math.abs(a) * a * 0 + a * a * 6 + (1 - u) * 40, r: a * 7, o: seg(t, 2.7 + i * 0.08, 3.0 + i * 0.08) });
          });
          ['.dp', '.hset', '.hm-add'].forEach((s, i) => { const u = E.out(seg(t, 3.0 + i * 0.1, 3.5 + i * 0.1)); set(q(s), { y: (1 - u) * 24, o: u }); });
          A.press(q('.hm-add'), t, T.add);
          const dk = q('.dpk'); if (dk) dk.style.transform = `scale(.21) rotate(${(Math.sin(t * 6) * 2).toFixed(1)}deg)`;
        } else {
          set(q('.hmz'), { o: seg(t, 3.0, 3.5) });
          cls(q('.hmz'), 'hot', false);
        }

        /* ---- pick ---- */
        const gmv = seg(t, 5.7, 6.5), rawPos = { x: G.card.x, y: G.card.y };
        if (app) {
          const cell = A.center('.pk0');
          const gu = E.out(gmv);
          set(q('.galp'), { o: lerp(1, 0.12, gu) });
          qa('.gc').forEach((g, i) => { if (i === 0) set(g, { s: t > T.pick ? 1.08 : 1, o: 1 - gu }); });
          set(q('.galc'), { o: 1 - gu });
          const u = E.outBack(seg(t, T.pick + 0.05, T.pick + 0.75));
          place(rawP, lerp(cell.x, rawPos.x, u), lerp(cell.y, rawPos.y, u), lerp(0.3, G.cs, u), (1 - u) * -10, seg(t, T.pick, T.pick + 0.15));
        } else {
          const ft = q('.file'), pp = A.pointerAt(t), dragging = t > 5.15 && t < 6.75;
          set(ft, { x: pp.x - 75, y: pp.y - 40, r: -5 * (1 - seg(t, 5.6, 6.6)), s: 1 - 0.3 * seg(t, 6.55, 6.8), o: dragging ? seg(t, 5.15, 5.5) * (1 - seg(t, 6.6, 6.8)) : 0 });
          const dzE = q('.pdz'); cls(dzE, 'hot', dragging);
          dzE.style.borderColor = dragging && t > 5.8 ? '#FF3D9A' : '';
          set(q('.pfacts'), { y: (1 - E.out(seg(t, 7.3, 7.9))) * 14, o: seg(t, 7.3, 7.8) });
          set(q('.pchip'), { o: seg(t, 8.0, 8.5) });
          const u = E.outBack(seg(t, 6.6, 7.2)), mv = E.inOut(seg(t, 7.2, 7.9));
          place(rawP, lerp(466, G.card.x, mv), lerp(440, G.card.y, mv), (0.4 + 0.6 * u) * G.cs, (1 - u) * 8, seg(t, 6.6, 6.75), flip(seg(t, 6.6, 7.0)));
        }
        tiltCard(rawP, t, rawPos.x, rawPos.y, 6);

        /* ---- shrink ---- */
        {
          const p = seg(t, 10.55, 14.3), busy = t >= 10.4 && t < 14.4, pkp = seg(t, 10.35, 10.9);
          // raw card: shows, then turns over and is sealed in the pack
          const rIn = seg(t, 9.0, 9.3), seal = E.inOut(seg(t, 10.0, 10.6));
          place(rawS, G.card.x, G.card.y + seal * 20, G.cs * (1 - 0.5 * seal), 0, rIn * (1 - seg(t, 10.3, 10.65)), Math.max(0.04, Math.abs(Math.cos(seal * Math.PI / 2))));
          // purposes
          const pu = (i) => E.outBack(seg(t, 9.2 + i * 0.1, 9.65 + i * 0.1));
          opts.forEach((_, i) => { const e = q('.po' + i); set(e, { y: (1 - pu(i)) * 26, o: pu(i) * (1 - seg(t, 10.0, 10.4)) }); cls(e, 'on', t >= T.exam && i === 1); });
          cls(q('.po1'), 'is-pressed', t >= T.exam - 0.06 && t <= T.exam + 0.2);
          set(bPur, { o: 1 }); bPur.style.display = t < 10.5 ? '' : 'none';
          // pack
          const shake = busy ? 0.8 + 7 * p * p : 0, pcx = G.card.x, pcy = G.card.y;
          const bu = t - 14.3;
          set(pkW, { x: pcx + (busy ? Math.sin(t * 47) * shake : 0), y: pcy + (busy ? Math.sin(t * 61) * shake * 0.6 : 0), r: busy ? Math.sin(t * 53) * shake * 0.45 : 0, s: (0.7 + 0.3 * E.outBack(pkp)) * (app ? 1 : 1.1), o: t < 10.35 || t > 15.0 ? 0 : 1 });
          const top = q('.pkw .pt'), bot = q('.pkw .pb'), eb = E.out(seg(bu, 0, 0.55));
          set(top, { x: -40 * eb, y: -150 * eb, r: -28 * eb, o: 1 - seg(bu, 0.2, 0.55) }); set(bot, { x: 24 * eb, y: 110 * eb, r: 14 * eb, o: 1 - seg(bu, 0.2, 0.55) });
          const gl = q('.pkg'); set(gl, { s: 1 + 0.9 * p + (bu > 0 ? 1.2 * seg(bu, 0, 0.5) : 0), o: t < 10.4 ? 0 : Math.min(1, 0.15 + 0.85 * p) * (1 - seg(bu, 0.3, 0.8)) });
          set(q('.prays'), { r: t * 30, s: 0.6 + 0.8 * seg(bu, 0, 0.9), o: bu > 0 ? 0.9 * (1 - seg(bu, 0.1, 1.1)) : 0 });
          set(q('.pfl'), { s: 0.3 + 2.8 * seg(bu, 0, 0.45), o: bu > 0 ? 1 - seg(bu, 0.05, 0.5) : 0 });
          // orbiting riffle cards
          const [rx, ry] = G.orb, om = busy ? 1 : 0;
          orb.forEach((c, i) => {
            const th = i / orb.length * 6.283 + t * (1.4 + 3.4 * p), sn = Math.sin(th), cn = Math.cos(th);
            set(c, { x: pcx + cn * rx * (0.9 + 0.1 * p), y: pcy + 36 + sn * ry, sx: Math.max(0.12, Math.abs(Math.cos(t * 6 + i))) * (0.7 + 0.3 * (sn + 1) / 2), sy: 0.7 + 0.3 * (sn + 1) / 2, r: cn * 14, o: om * seg(t, 10.6 + i * 0.03, 10.9 + i * 0.03) * (1 - seg(bu, 0, 0.25)) });
            c.style.zIndex = sn > 0 ? 6 : 1;
          });
          // counter, text, bar
          set(bWk, { o: busy ? Math.min(seg(t, 10.45, 10.8), 1 - seg(t, 14.15, 14.4)) : 0 });
          const bytes = A.count(t, 10.7, 14.25, D.portrait.bytes, D.shrink.bytes, E.inOut);
          txt(q('.bwk .cnt'), A.fmtBytes(bytes));
          txt(q('.bwk .wtx'), p < 0.3 ? 'Shuffling pixels…' : p < 0.65 ? 'Dealing the best JPG…' : p < 0.92 ? 'Checking: under 200 KB' : 'Sealing the pack…');
          if (busy) barA.update(p, t);
          // result
          const ra = seg(bu, 0.12, 1.0), re = E.outBack(ra), sweepQ = seg(bu, 0.7, 1.9), fy = seg(t, 16.15, 16.85), fe = E.inOut(fy);
          const tgt = web ? albSlot(0, 1) : G.alb;
          const rx0 = lerp(pcx, G.card.x, E.out(ra)), ry0 = lerp(pcy, G.card.y, E.out(ra)) - Math.sin(Math.PI * ra) * 30;
          place(resC, lerp(rx0, tgt.x, fe), lerp(ry0, tgt.y, fe) - Math.sin(Math.PI * fe) * 40, lerp((0.3 + 0.7 * re) * G.cs, 0.2, fe), (1 - re) * 12, ra > 0 ? 1 - seg(fy, 0.7, 1) : 0, Math.max(0.05, flip(ra * 1.3)));
          resC.style.setProperty('--bp', lerp(-60, 200, sweepQ).toFixed(1) + '%');
          if (ra >= 1 && fy < 0.05) tiltCard(resC, t, G.card.x, G.card.y, 12); else tiltCard(resC, t, G.card.x, G.card.y, 3);
          set(q('.resC .stp'), { s: E.outBack(seg(bu, 1.0, 1.4)), o: seg(bu, 1.0, 1.1) });
          set(bRs, { o: Math.min(seg(bu, 0.9, 1.3), 1 - seg(t, 16.9, 17.2)) });
          const sbtn = q('.sv-save'); A.press(sbtn, t, T.save);
          const sn0 = t >= 16.5 ? 2 : 1; txt(q('.rsn'), sn0 + '/4'); q('.rsf').style.width = sn0 * 25 + '%';
        }

        /* ---- crop: fan, presets, canvas ---- */
        {
          const cu = seg(t, 17.2, 17.6);
          set(cInfo, { o: cu * (1 - seg(t, 18.9, 19.3)) });
          if (app) cInfo.style.display = t < 19.4 ? '' : 'none';
          const sel = t >= 19.65;
          set(bPre, { o: Math.min(seg(t, 19.0, 19.35), 1 - seg(t, 19.95, 20.3)) });
          prs.forEach((_, i) => { const e = q('.pr' + i); set(e, { x: (1 - E.out(seg(t, 19.0 + i * 0.05, 19.4 + i * 0.05))) * 30, o: 1 }); cls(e, 'on', sel && i === 0); });
          cls(q('.pr0'), 'is-pressed', t >= T.preset - 0.06 && t <= T.preset + 0.2);
          // canvas
          const photoO = seg(t, 17.2, 17.6);
          set(cv, { o: photoO * (1 - 0.88 * Math.min(seg(t, 18.95, 19.3), 1 - seg(t, 19.9, 20.4))) });
          const fr = E.outBack(seg(t, 19.95, 20.5)), dq = E.inOut(seg(t, Math.max(T.d0 + 0.15 + 0.12, T.d1 - 1.0), T.d1));
          set(cvfr, { s: 0.7 + 0.3 * fr, o: seg(t, 19.95, 20.2) * (1 - seg(t, 23.0, 23.3)) });
          cvimg.style.transform = `translateX(${(-70 * dq).toFixed(1)}px) scale(${lerp(0.74, 1, E.out(seg(t, 19.9, 20.5))).toFixed(3)})`;
          set(cvtag, { o: seg(t, 20.3, 20.6) * (1 - seg(t, 22.1, 22.3)) }); cvtag.style.transform = 'translateX(-50%)';
          if (web) set(q('#ci2'), { o: seg(t, 20.3, 20.7) }); set(cDone, { o: seg(t, 20.4, 20.8) }); A.press(cDone, t, T.cdone);
          // mini process (bar B)
          const bm = seg(t, 22.3, 23.1), on = t >= 22.25 && t < 23.2;
          set(cvPr, { s: 0.9 + 0.1 * E.out(seg(t, 22.25, 22.45)), o: on ? Math.min(seg(t, 22.25, 22.4), 1 - seg(t, 23.05, 23.2)) : 0 });
          if (on) barB.update(bm, t);
          // fan
          const F = G.fan, paw = pawPos(poseAt(t));
          const bgO = Math.min(seg(t, 17.55, 17.8), 1 - seg(t, 18.6, 19.0));
          set(dim, { o: bgO * 0.9 });
          TOOLS.forEach((_, i) => {
            const e = fanCards[i], a = i - 2, f0 = 17.55 + i * 0.04, k = E.outBack(seg(t, f0, f0 + 0.36));
            const fx0 = F.cx + a * F.gap - 0, fy0 = F.cy + a * a * F.arc, fr0 = a * F.rot;
            const chosen = i === 1, ch = E.inOut(seg(t, 18.5, 19.05)), out = E.in(seg(t, 18.5, 18.85));
            let x = lerp(paw.x, fx0, k), y = lerp(paw.y, fy0, k), r = lerp(-60, fr0, k), s = lerp(0.2, 1, k), o = seg(t, f0, f0 + 0.08);
            if (chosen && t >= 18.5) {
              const lift = Math.sin(Math.PI * seg(t, 18.5, 18.7)) * 14;
              x = lerp(fx0, G.slot.x + (web ? 23 : 20), ch); y = lerp(fy0, G.slot.y + (web ? 32 : 28), ch) - lift; r = lerp(fr0, 0, ch); s = lerp(1.1, G.slotS, ch); o = 1 - seg(t, 19.0, 19.12);
            } else if (t >= 18.5) { x = lerp(fx0, paw.x, out); y = lerp(fy0, paw.y, out); s = lerp(1, 0.2, out); o = 1 - out; r = lerp(fr0, -60, out); }
            if (t > 19.2) o = 0;
            set(e, { x: x - G.tw / 2, y: y - G.th / 2, s, r, o });
            e.style.boxShadow = chosen && t >= 18.4 ? '0 0 30px rgba(255,200,87,.8)' : '';
          });
          set(fanl, { x: G.fan.cx - 40, y: G.fan.cy - (web ? 140 : 100), o: Math.min(seg(t, 17.7, 17.95), 1 - seg(t, 18.45, 18.65)) });
        }
        /* ---- privacy ---- */
        {
          const found = t >= 25.3, removed = seg(t, 27.5, 28.9), prun = t >= 27.45 && t < 28.95;
          set(pph, { o: 1 }); set(pmap, { o: seg(t, 25.0, 25.5) });
          const pinE = q('.mpin'), pin = E.outBack(seg(t, 25.7, 26.2));
          set(pinE, { y: -40 * (1 - pin) - removed * 14, s: 1 - 0.6 * removed, o: seg(t, 25.7, 25.85) * (1 - seg(t, 27.6, 28.5)) });
          pmap.style.filter = `saturate(${(1 - 0.8 * removed).toFixed(2)})`;
          set(q('.pinfo'), { o: seg(t, 25.3, 25.8) });
          txt(q('.pcity'), found ? `${D.place.city}, ${D.place.country}` : 'Looking…');
          const okq = seg(t, 28.9, 29.3); q('.pwarn').style.display = t < 28.9 ? '' : 'none'; q('.pok').style.display = t >= 28.9 ? '' : 'none'; set(q('.pok'), { o: okq });
          set(pvRm, { o: seg(t, 25.6, 26.0) * (1 - seg(t, 29.5, 29.9)) }); A.press(pvRm, t, T.rm);
          txt(q('.rml'), 'Remove location');
          set(pvPr, { s: 0.9 + 0.1 * E.out(seg(t, 27.4, 27.6)), o: prun ? Math.min(seg(t, 27.4, 27.55), 1 - seg(t, 28.8, 28.95)) : 0 });
          if (prun) barC.update(seg(t, 27.45, 28.9), t);
          txt(q('.ppt'), t < 28.0 ? 'Dissolving the pin…' : 'Sealing with a shield…');
          const sh = E.outBack(seg(t, 28.9, 29.4));
          set(shield, { s: 0.3 + 0.7 * sh, o: seg(t, 28.9, 29.1) * (1 - seg(t, 29.55, 29.8)) });
        }
        /* ---- gif ---- */
        {
          const made = t >= 35.0, run = t >= 33.0 && t < 35.0, pg = seg(t, 33.0, 35.0), nfr = Math.round(pg * D.video.frames);
          const fi = Math.floor(t * 12) % 12;
          vid.style.backgroundImage = t < 33.0 ? A.frame(fi) : 'radial-gradient(70% 90% at 50% 50%,#3A2468,#150A28)';
          set(strip, { o: 1 - seg(t, 32.8, 33.1) });
          const hq = E.inOut(seg(t, Math.max(T.h0 + 0.1 + 0.12, T.h1 - 0.8), T.h1)), Lp = 4 / 12, Rp = (8 - hq) / 12;
          const selw = q('.selw'); selw.style.left = (Lp * 100) + '%'; selw.style.width = ((Rp - Lp) * 100) + '%';
          q('.hL').style.left = `calc(${Lp * 100}% - 10px)`; q('.hR').style.left = `calc(${Rp * 100}% - 10px)`;
          txt(q('.gsv'), hq > 0.5 ? `${D.video.from} to ${D.video.to}` : `${D.video.from} to 0:08`);
          txt(q('.gsl'), hq > 0.5 ? `${D.video.clip} · ${D.video.fps} fps · ${D.video.frames} frames` : '4.0 s · too long for a quick GIF');
          set(q('.gtrim'), { o: t < 33.0 ? seg(t, 30.4, 30.8) : 0 }); q('.gtrim').style.display = t < 33.0 ? '' : 'none';
          A.press(q('.gf-make'), t, T.make);
          set(gWk, { o: run ? Math.min(seg(t, 33.0, 33.3), 1 - seg(t, 34.85, 35.0)) : 0 });
          txt(gcnt, `Frame ${nfr} of ${D.video.frames}`);
          if (run) barD.update(pg, t);
          // piles and flying frame cards
          const pon = t >= 32.95 && t < 35.25;
          set(pileL, { o: pon ? seg(t, 33.0, 33.3) : 0, s: 1 - 0.3 * pg + 0.3 }); set(pileR, { o: pon ? seg(t, 33.0, 33.3) : 0, s: 0.7 + 0.5 * pg });
          const Lc = { x: gvR.x + 40 + 32, y: gvR.y + gvR.h / 2 + 25 }, Rc = { x: gvR.x + gvR.w - 40 - 32, y: gvR.y + gvR.h / 2 + 25 };
          flyers.forEach((f, j) => {
            const rate = 18, ph = ((t - 33.0) * rate / flyers.length + j / flyers.length) % 1, idx = Math.floor((t - 33.0) * rate - j) + 100;
            const u = ph, arc = Math.sin(Math.PI * u) * (app ? 70 : 80);
            f.style.backgroundImage = A.frame(((idx % 12) + 12) % 12);
            set(f, { x: lerp(Lc.x, Rc.x, E.inOut(u)), y: lerp(Lc.y, Rc.y, u) - arc - 25, r: lerp(-20, 20, u), s: 0.8 + 0.4 * Math.sin(Math.PI * u), o: pon ? seg(t, 33.05, 33.25) * (1 - seg(t, 34.95, 35.2)) : 0 });
          });
        }
        /* ---- result overlays (crop, privacy, gif) ---- */
        {
          const cA = ovFlow(ov[0], t, 23.1, 23.7, 24.0, web ? albSlot(1, 1) : G.alb, { x: G.ov.x, y: G.ov.y + 40 });
          const cB = ovFlow(ov[1], t, 29.2, 29.8, 30.1, web ? albSlot(2, 1) : G.alb, { x: G.ov.x, y: G.ov.y + 40 });
          // gif card holds, then deals itself into the done row
          const a = seg(t, 35.0, 35.55), f = E.inOut(seg(t, 36.15, 36.75)), dp = dxy(3), mini = { x: dp.x + mw / 2, y: dp.y + mh / 2 };
          const x = lerp(lerp(G.ov.x, G.ov.x, a), mini.x, f), y = lerp(G.ov.y + 40 * (1 - E.out(a)), mini.y, f) - Math.sin(Math.PI * f) * 30;
          place(ov[2], x, y, lerp((0.35 + 0.65 * E.outBack(a)) * G.cs, (mw / 220) * 0.94, f), (1 - a) * 14, a < 0.02 ? 0 : 1 - seg(f, 0.92, 1), Math.max(0.04, flip(a)));
          ov[2].querySelector('.ca').style.backgroundImage = A.frame(fi12(t));
          [ov[0], ov[1], ov[2]].forEach((o, k) => { const cdE = o.firstChild; if (cdE) cdE.style.transform = ''; });
          set(dim, { o: Math.max(bgOf(t), Math.min(seg(t, 23.1, 23.35), 1 - seg(t, 23.7, 23.95)) * 0.7, Math.min(seg(t, 29.2, 29.45), 1 - seg(t, 29.8, 30.05)) * 0.7, Math.min(seg(t, 35.0, 35.25), 1 - seg(t, 36.0, 36.3)) * 0.7) });
          ov[0].style.setProperty('--bp', lerp(-60, 200, seg(t, 23.4, 24.0)).toFixed(0) + '%'); ov[1].style.setProperty('--bp', lerp(-60, 200, seg(t, 29.5, 30.1)).toFixed(0) + '%'); ov[2].style.setProperty('--bp', lerp(-60, 200, seg(t, 35.3, 36.1)).toFixed(0) + '%');
        }

        /* ---- done ---- */
        {
          const dq = seg(t, 36.2, 36.6);
          minis.forEach((m, i) => {
            const d = dxy(i), u = E.outBack(seg(t, 36.25 + i * 0.12, 36.8 + i * 0.12));
            set(m, { x: d.x, y: d.y + (1 - u) * 40, r: (1 - u) * (i - 1.5) * 6, s: 1, o: i === 3 ? seg(t, 36.7, 36.8) : seg(t, 36.25 + i * 0.12, 36.45 + i * 0.12) * u });
          });
          set(q('.dn-t'), { o: dq }); set(q('.dtaps'), { o: seg(t, 37.2, 37.6) });
          txt(q('.dlt'), lvl === 6 ? 'Lv 6 · Dealer' : 'Lv 7 · Card Sharp');
          const lq = seg(t, 37.1, 37.5); set(q('.lvup'), { s: E.outBack(lq), o: lvl === 7 ? 1 : 0 });
          qa('.dxb i').forEach(e => { e.style.width = (cl(fill) * 100).toFixed(1) + '%'; });
          qa('.dxt').forEach(e => txt(e, lvl === 6 ? `${Math.round(xp)} / 600 XP` : `${Math.round(xp - 600)} / 800 XP`));
          qa('.dsn').forEach(e => txt(e, `${streak}-day streak`));
          SETS.forEach((s, i) => { const n = setN(i, t); qa('.dsn' + i).forEach(e => txt(e, n + '/4')); qa('.dsf' + i).forEach(e => { e.style.width = n * 25 + '%'; }); });
          qa('.dxg').forEach(e => { const k = Math.exp(-5 * Math.max(0, t - 36.85)) * (t > 36.85 ? 1 : 0); e.style.transform = `scale(${(1 + 0.18 * k).toFixed(3)})`; e.style.transformOrigin = 'left center'; e.style.display = 'inline-block'; });
          const dl = q('.dlv'); set(dl, { s: 1 + (lvl === 7 ? 0.03 * Math.exp(-6 * (t - 37.1)) * Math.cos(16 * (t - 37.1)) : 0), o: seg(t, 36.5, 36.9) });
          if (app) set(q('.dst'), { o: seg(t, 36.8, 37.2) });
          qa('.drc').forEach((e, i) => set(e, { o: seg(t, 37.2 + i * 0.15, 37.6 + i * 0.15) }));
          set(q('.dsv'), { o: seg(t, 37.0, 37.4) }); A.press(q('.dn-save'), t, T.saveAll);
          txt(q('.sal'), t < 38.05 ? 'Save all 4' : web ? 'All 4 saved' : '4 saved to Gallery');
          const dt = A.win(t, 38.1, 40.5, 0.2, 0.01);
          dnToast.style.left = (web ? 660 : 18) + 'px'; dnToast.style.top = (web ? 566 : 682) + 'px'; set(dnToast, { y: (1 - E.out(Math.min(1, dt))) * 20, o: dt });
        }

        /* ---- xp floaters ---- */
        const fpos = [[G.card.x + (app ? 40 : 130), G.card.y - (app ? 60 : 140)], [G.ov.x + 40, G.ov.y - 150], [app ? 250 : 330, app ? 470 : 420], [app ? 270 : G.ov.x + 40, app ? 400 : G.ov.y - 150], [0, 0]];
        XPG.slice(0, 4).forEach((g, i) => { const u = seg(t, g[0], g[0] + 1.3); set(xpf[i], { x: fpos[i][0], y: fpos[i][1] - 60 * E.out(u), o: u > 0 && u < 1 ? Math.sin(Math.PI * Math.min(1, u * 1.15)) : 0 }); });
        cf.forEach(([t0, ...list]) => list.forEach(c => c.update(t - t0)));

        /* ---- sweeps for the toast of save ---- */
        { const w = A.win(t, 16.15, 17.1, 0.2, 0.25); txt(toast.querySelector('.tst'), `Saved to your ${web ? 'Downloads' : 'Gallery'}`); toast.style.left = (web ? 500 : 20) + 'px'; toast.style.top = (web ? 540 : 690) + 'px'; set(toast, { y: (1 - E.out(Math.min(1, w))) * 20, o: w }); }

        /* ---- bubble, suggestion, pulse ---- */
        {
          let cur = null; LINES.forEach(l => { if (t >= l[0]) cur = l; });
          if (!cur || t > 39.4) set(bub, { o: 0 });
          else {
            const [x, y, w, side, off] = BP[cur[2]]; txt(bt, cur[1]);
            bub.style.width = w + 'px'; bub.style.left = x + 'px'; bub.style.top = y + 'px';
            const ts = btail.style; ts.left = ts.top = ts.right = ts.bottom = '';
            if (side === 'l') { ts.left = '-7px'; ts.top = off + 'px'; bub.style.transformOrigin = '0 ' + off + 'px'; ts.borderTop = ts.borderRight = '0'; ts.borderLeft = ts.borderBottom = '1px solid rgba(255,255,255,.22)'; }
            else { ts.bottom = '-7px'; ts.left = off + 'px'; bub.style.transformOrigin = off + 'px 100%'; ts.borderTop = ts.borderLeft = '0'; ts.borderRight = ts.borderBottom = '1px solid rgba(255,255,255,.22)'; }
            const u = E.outBack(seg(t, cur[0], cur[0] + 0.35));
            set(bub, { s: 0.6 + 0.4 * u, o: Math.min(1, seg(t, cur[0], cur[0] + 0.12)) });
          }
          let sg = null; SUG.forEach(s => { if (t >= s[0] && t < s[1] + 0.15) sg = s; });
          const [sx0, sy0] = app ? [150, 172] : [560, 160];
          if (sg) {
            A.html(sug.querySelector('.sgi'), I(sg[2], 16, 2.4)); txt(sug.querySelector('.sgt'), sg[3]);
            const u = E.outBack(seg(t, sg[0], sg[0] + 0.3)); set(sug, { x: sx0, y: sy0, s: 0.7 + 0.3 * u, o: Math.min(1, seg(t, sg[0], sg[0] + 0.12)) * (1 - seg(t, sg[1] - 0.05, sg[1] + 0.15)) });
          } else set(sug, { x: sx0, y: sy0, o: 0 });
          A.press(sug, t, T.chk); A.press(sug, t, T.sug);
          const hp = poseAt(t), ppos = pawPos(hp), pu = seg(t, 3.05, 3.95);
          const ring = pu > 0 && pu < 1 ? (pu * 2.2) % 1 : -1;
          set(pulse, { x: ppos.x, y: ppos.y, s: ring < 0 ? 0 : 0.5 + 1.3 * ring, o: ring < 0 ? 0 : 1 - ring });
          set(tapme, { x: ppos.x + (app ? -30 : 24), y: ppos.y - 54, o: pu > 0 && pu < 1 ? Math.min(seg(pu, 0, 0.1), 1 - seg(pu, 0.85, 1)) : 0 });
        }

        /* ---- Mochi ---- */
        {
          const [mt, mn] = moodAt(t), mood = MOODS[mn], pose = poseAt(t), L = A.life(t, 7), d = t - mt;
          
          let air = 0, sy = 1 + 0.012 * L.breathe, sx = 1 - 0.006 * L.breathe;
          if (mood.hop) air += Math.sin(Math.PI * Math.min(1, d / 0.45)) * 16;
          if (mood.bounce) air += Math.abs(Math.sin((t - mt) * 7)) * (app ? 12 : 14);
          const show = seg(t, 1.8, 1.9);
          set(mo, { x: pose.x - 120, y: pose.y - 262 - air * pose.s, s: pose.s, o: show });
          mo.style.transformOrigin = '120px 262px';
          set(mochiBody(), { sx, sy });
          // pointer gaze
          const pt = A.pointerAt(t), hx = pose.x, hy = pose.y - 162 * pose.s;
          let lx = L.look * 0.5, ly = 0.1;
          if (pt.vis > 0.2) { lx = cl((pt.x - hx) / 140, -1, 1); ly = cl((pt.y - hy) / 140, -1, 1); }
          if (mood.look) { lx = mood.look[0]; ly = mood.look[1]; }
          const blink = L.blink, so = (mood.so ?? 1) * (mood.e === 'o' ? 1 : 1);
          const eyeMode = k => mood.e === 'a' ? 'a' : mood.e === 'wk' ? (k === 0 ? 'o' : 'a') : 'o';
          M.eye.forEach((g, k) => {
            const em = eyeMode(k), open = so * (1 - blink * 0.98);
            const showO = em === 'o' && open > 0.22, showC = em === 'o' && open <= 0.22, showA = em === 'a';
            attr(M.eo[k], 'opacity', showO ? '1' : '0'); attr(M.ec[k], 'opacity', showC ? '1' : '0'); attr(M.ea[k], 'opacity', showA ? '1' : '0');
            attr(M.eo[k], 'transform', `scale(${(mood.big ? 1.08 : 1).toFixed(2)} ${open.toFixed(3)})`);
            attr(M.iris[k], 'transform', `translate(${(lx * 5.2).toFixed(2)} ${(ly * 5.2).toFixed(2)}) scale(${(mood.ir || 1)})`);
          });
          const br = mood.br || [0, 0, 0, 0];
          M.brow.forEach((b, k) => { const x = k ? 160 : 80; attr(b, 'transform', `translate(${x} ${72 + br[k]}) rotate(${br[k + 2]})`); });
                    Object.keys(M.m).forEach(k => attr(M.m[k], 'opacity', k === mood.m ? '1' : '0'));
          attr(M.m.z, 'transform', `translate(120 130) scale(${(1 + 0.25 * L.breathe).toFixed(3)}) translate(-120 -130)`);
          M.bl.forEach(b => attr(b, 'opacity', (mood.bl * 0.55).toFixed(2)));
          const tilt = (mood.tilt || 0) + L.sway * 1.2;
          attr(M.head, 'transform', `translate(0 ${(-1.2 * L.breathe).toFixed(2)}) rotate(${tilt.toFixed(2)} 120 150)`);
          // ears: idle twitch
          const tw = (() => { const r = A.rng(31); let a = 2.4, v = 0; for (let i = 0; i < 12; i++) { if (t >= a && t < a + 0.2) v = Math.sin((t - a) / 0.2 * Math.PI); a += 2.5 + r() * 3; } return v; })();
          attr(M.earL, 'transform', `rotate(${(-9 * tw).toFixed(2)} 80 70)`); attr(M.earR, 'transform', `rotate(${(0).toFixed(2)} 80 70)`);
          // paws
          const fan = seg(t, 17.5, 18.5) * (1 - seg(t, 18.5, 18.6));
          let wv = mood.wv, ws = mood.ws; if (fan > 0) { wv = 14; ws = 11; }
          const idleK = mn === 'neutral' ? 0.5 + 0.5 * Math.sin(t * 0.9) : 1;
          const aR = (mood.aRb || 0) + Math.sin(t * ws) * wv * idleK;
          attr(M.aR, 'transform', `rotate(${aR.toFixed(2)} 176 172)`);
          let aL = mood.aL || 0; if (mood.shuf) aL = -16 + Math.sin(t * ws + 3) * 14;
          if (mn === 'celebrate') aL = 168 + Math.sin(t * 9) * 10;
          attr(M.aL, 'transform', `rotate(${aL.toFixed(2)} 74 176)`);
          attr(M.hc, 'opacity', mood.shuf ? '1' : '0');
          attr(M.tail, 'transform', `rotate(${(Math.sin(t * (mn === 'celebrate' ? 5 : 1.7)) * 7).toFixed(2)} 172 238)`);
          attr(M.bell, 'transform', `rotate(${(L.sway * 7 + (mn === 'celebrate' ? Math.sin(t * 12) * 8 : 0)).toFixed(2)} 120 178)`);
          attr(M.zz, 'opacity', mood.zz ? '1' : '0'); attr(M.thk, 'opacity', mood.thk ? '1' : '0'); attr(M.spk, 'opacity', mood.spk ? '1' : '0');
          if (mood.zz) { const z1 = (t * 0.7) % 1; attr(q('.z1'), 'transform', `translate(${z1 * 8} ${-z1 * 14})`); attr(q('.z2'), 'transform', `translate(${((t * 0.7 + 0.5) % 1) * 8} ${-((t * 0.7 + 0.5) % 1) * 14})`); }
          if (mood.spk) [[28, 40], [212, 44], [226, 130]].forEach((p, i) => { const k = 0.5 + 0.5 * Math.sin(t * 8 + i * 2); attr(M.ks[i], 'transform', `translate(${p[0]} ${p[1]}) scale(${(0.3 + 0.9 * k).toFixed(2)}) rotate(${(t * 90).toFixed(0)})`); });
        }
      },
    };
    function mochiBody() { return q('.body'); }
  },
});

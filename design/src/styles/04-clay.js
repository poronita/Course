/* Style 4 — Clay Buddy. A clay mascot, Pip, does the work in front of you. */
ISK.register({
  id: 'clay',
  order: 4,
  name: 'Clay Buddy',
  tagline: 'Pip the clay buddy does the work while you watch.',
  concept: 'A small red clay pocket knife named Pip lives in the app. Pip squeezes your photo to make it smaller, holds the frame while you crop, and puts on a detective hat to find where a photo was taken. Each screen has one speech bubble with one plain instruction. Stickers and a daily streak make each finished job feel like a small win.',
  wins: [
    'Pip shows what each tool does, so people understand it without reading a manual.',
    'The speech bubble gives one short instruction per screen, which guides older users step by step.',
    'Stickers and streaks bring people back, and a mascot is easy to remember and share.',
  ],
  risks: [
    'Some adults may find a mascot childish, so offer a calm mode that hides Pip.',
    'Mascot animation is costly to draw and keep consistent across every tool.',
  ],
  scores: { simple: 4, fun: 5, wow: 4, effort: 4 },
  palette: ['#F2F4FF', '#FF6B5E', '#FFD3B6', '#BDF2E3', '#D9CBFF', '#FFF0A6', '#3B2A4F'],
  type: 'Fredoka: round and friendly like the clay. Bold 600 to 700 for headings, 500 for body text.',
  motion: 'Squash and stretch on every hop, bouncy springs, jelly button presses, and Pip blinks on a fixed rhythm.',
  notes: {
    intro: 'Pip drops in and squashes on landing, waves, and the tools appear as chunky clay blocks.',
    pick: 'On the phone Pip says "Tap the photo". On the web Pip jumps and catches the file you drag in.',
    shrink: 'Pip stomps on the photo four times. Each stomp squashes it and the size drops from 4.8 MB to 196 KB.',
    crop: 'Pip holds a big clay frame in the 4:5 shape. You slide the photo behind it.',
    privacy: 'Pip puts on a detective hat, finds Pune, India, then rubs the map pin away with an eraser.',
    gif: 'Pip cranks a tiny film projector while the 36 pictures count up, then the GIF loops on a clay screen.',
    done: 'A sticker board shows the 4 results, the streak goes up, and one Ad card waits at the end.',
  },
  statusBar: 'dark',
  css: `
.st-clay{--bg:#F2F4FF;--ink:#3B2A4F;--mut:#6B5C84;--pe:#FFD3B6;--mi:#BDF2E3;--la:#D9CBFF;--bu:#FFF0A6;--red:#FF6B5E;--card:#fff;background:radial-gradient(120% 60% at 15% 0%,#FBFCFF 0,#F2F4FF 55%,#E8EBFF 100%);color:var(--ink);font-family:Fredoka,system-ui,sans-serif;font-weight:500;font-size:17px;line-height:1.25}
.st-clay b{font-weight:600}
.st-clay .cl{background:var(--card);border-radius:22px;box-shadow:0 10px 22px -8px rgba(59,42,79,.28),0 2px 0 rgba(59,42,79,.04),inset 0 -5px 0 rgba(59,42,79,.07),inset 0 3px 3px rgba(255,255,255,.95)}
.st-clay .pe{background:var(--pe)}.st-clay .mi{background:var(--mi)}.st-clay .la{background:var(--la)}.st-clay .bu{background:var(--bu)}.st-clay .wh{background:#fff}
.st-clay .pg{position:absolute;inset:0;padding:228px 18px 28px;display:flex;flex-direction:column;gap:12px}
.st-clay .hdr{position:absolute;left:16px;right:16px;top:54px;height:44px;display:flex;align-items:center;gap:10px}
.st-clay .hdr .ttl{font-size:21px;font-weight:700;flex:1;white-space:nowrap}
.st-clay .back{display:flex;align-items:center;gap:2px;padding:8px 14px 8px 8px;font-size:17px;font-weight:600;border-radius:16px}
.st-clay .flame{display:flex;align-items:center;gap:4px;padding:6px 12px 6px 8px;border-radius:16px;font-weight:700;font-size:18px}
.st-clay .flame svg{display:block}
.st-clay .btn{height:64px;border-radius:24px;display:flex;align-items:center;justify-content:center;gap:10px;font-size:22px;font-weight:700;color:#fff;background:linear-gradient(180deg,#FF8478,#EC5046);box-shadow:0 12px 20px -8px rgba(236,80,70,.6),inset 0 -6px 0 rgba(120,20,20,.22),inset 0 4px 4px rgba(255,255,255,.45);text-shadow:0 1px 0 rgba(120,20,20,.3);flex:none}
.st-clay .btn.sec{background:#fff;color:var(--ink);text-shadow:none;box-shadow:0 10px 18px -8px rgba(59,42,79,.3),inset 0 -6px 0 rgba(59,42,79,.08),inset 0 3px 3px #fff}
.st-clay .btn.off{background:#E4E6F4;color:#9A93B0;text-shadow:none;box-shadow:inset 0 -5px 0 rgba(59,42,79,.06)}
.st-clay .foot{margin-top:auto;display:flex;gap:12px}.st-clay .foot .btn{flex:1}
.st-clay .pip{position:absolute;left:0;top:0;width:120px;height:150px;transform-origin:60px 146px;z-index:40;pointer-events:none}
.st-clay .pip-j,.st-clay .pip-b{position:absolute;inset:0;transform-origin:60px 146px}
.st-clay .pip-sh{position:absolute;left:20px;top:137px;width:80px;height:17px;border-radius:50%;background:rgba(59,42,79,.2);transform-origin:50% 50%}
.st-clay .pip-svg{overflow:visible;display:block}
.st-clay .bub{position:absolute;left:0;top:0;z-index:45;padding:12px 16px;border-radius:22px;font-size:18px;font-weight:600;line-height:1.22;transform-origin:var(--ox,0) var(--oy,50%)}
.st-clay .bub .tail{position:absolute;width:20px;height:20px;background:#fff;border-radius:4px;transform:rotate(45deg)}
.st-clay .bub .bt{position:relative;z-index:1;display:block}
.st-clay .tiles{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.st-clay .tile{height:118px;border-radius:26px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;position:relative}
.st-clay .tile b{font-size:19px;line-height:1.1}
.st-clay .ic{width:46px;height:46px;border-radius:16px;display:grid;place-items:center;background:rgba(255,255,255,.7);box-shadow:inset 0 -3px 0 rgba(59,42,79,.08)}
.st-clay .stk{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;border:4px solid #fff;box-shadow:0 6px 12px -4px rgba(59,42,79,.35);flex:none;color:var(--ink)}
.st-clay .stk.empty{background:#E6E8F7;border:3px dashed #C4C2DC;box-shadow:none;color:#B7B3CF}
.st-clay .shelf{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:22px}
.st-clay .shelf .tx{flex:1;font-size:16px;line-height:1.15}.st-clay .shelf .tx span{display:block;color:var(--mut);font-size:14px}
.st-clay .shelf .stk{width:42px;height:42px}.st-clay .pD .shelf{gap:6px;padding:10px 12px}.st-clay .pD .shelf .stk{width:34px;height:34px;border-width:3px}
.st-clay .lockl{display:flex;align-items:center;gap:8px;font-size:15px;color:#2E7D66;font-weight:600;justify-content:center}
.st-clay .lab{font-size:16px;color:var(--mut);font-weight:600;margin:0}
.st-clay .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.st-clay .th{aspect-ratio:1;border-radius:20px;background-size:cover;background-position:center;position:relative;box-shadow:0 8px 14px -8px rgba(59,42,79,.5),inset 0 0 0 4px rgba(255,255,255,.55)}
.st-clay .th.sel{box-shadow:0 0 0 5px var(--red),0 10px 18px -6px rgba(236,80,70,.6)}
.st-clay .th .stk{position:absolute;right:-8px;top:-8px;width:40px;height:40px;background:var(--mi)}
.st-clay .chip{display:flex;align-items:center;gap:12px;padding:10px;border-radius:20px}
.st-clay .chip i{width:46px;height:46px;border-radius:14px;background-size:cover;background-position:center;flex:none}
.st-clay .chip span{font-size:15px;color:var(--mut);line-height:1.2}.st-clay .chip b{color:var(--ink);font-size:17px}
.st-clay .opts{display:flex;flex-direction:column;gap:10px}
.st-clay .opt{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:22px;min-height:68px}
.st-clay .opt b{display:block;font-size:19px;line-height:1.1}.st-clay .opt span{font-size:15px;color:var(--mut)}
.st-clay .opt .dot{margin-left:auto;width:30px;height:30px;border-radius:50%;background:#ECEAF7;box-shadow:inset 0 3px 4px rgba(59,42,79,.15);flex:none;display:grid;place-items:center;color:#fff}
.st-clay .opt.on{background:var(--pe)}.st-clay .opt.on .dot{background:var(--red);box-shadow:inset 0 -3px 0 rgba(120,20,20,.2)}
.st-clay .ratio{width:42px;height:42px;display:grid;place-items:center;flex:none}.st-clay .ratio i{display:block;border-radius:5px;background:var(--la);box-shadow:inset 0 0 0 3px var(--ink)}
.st-clay .wph{position:absolute;background-size:cover;background-position:center;border-radius:22px;box-shadow:0 16px 26px -10px rgba(59,42,79,.45),inset 0 0 0 6px #fff;transform-origin:50% 100%}
.st-clay .bign{font-size:50px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums;text-align:center}
.st-clay .meter{height:22px;border-radius:12px;background:#E3E4F5;box-shadow:inset 0 3px 4px rgba(59,42,79,.14);position:relative}
.st-clay .meter i{position:absolute;left:3px;top:3px;bottom:3px;border-radius:9px;background:linear-gradient(180deg,#9FE8D3,#5CC9AA);box-shadow:inset 0 2px 2px rgba(255,255,255,.6)}
.st-clay .meter em{position:absolute;right:0;top:-4px;bottom:-4px;width:4px;border-radius:2px;background:var(--ink)}
.st-clay .goal{font-size:15px;color:var(--mut);text-align:center;font-weight:600}
.st-clay .crumbs{position:absolute;left:0;top:0;z-index:41}
.st-clay .rrow{display:flex;gap:16px;align-items:center}
.st-clay .rph{width:140px;height:186px;border-radius:22px;background-size:cover;background-position:center;flex:none;position:relative;box-shadow:0 12px 20px -10px rgba(59,42,79,.5),inset 0 0 0 5px #fff}
.st-clay .rph .stk,.st-clay .wph .stk{position:absolute;right:-12px;bottom:-12px;width:auto;height:auto;border-radius:18px;padding:5px 10px;font-size:18px;font-weight:700;background:var(--bu)}
.st-clay .big2{font-size:42px;font-weight:700;line-height:1}
.st-clay .was{font-size:17px;color:var(--mut);text-decoration:line-through}
.st-clay .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}.st-clay .tags span{padding:4px 10px;border-radius:12px;background:var(--mi);font-size:15px;font-weight:600}
.st-clay .cmp{display:grid;grid-template-columns:auto 1fr auto;gap:10px 12px;align-items:center;padding:14px 16px;font-size:16px}
.st-clay .cmp .b{height:18px;border-radius:9px;background:#D7D4EA;box-shadow:inset 0 -3px 0 rgba(59,42,79,.08)}
.st-clay .cmp .b.g{background:#5CC9AA}
.st-clay .toast{position:absolute;left:18px;right:18px;bottom:112px;z-index:60;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:24px}
.st-clay .toast b{display:block;font-size:18px}.st-clay .toast span{font-size:15px;color:var(--mut)}
.st-clay .cbox{position:absolute;left:18px;right:18px;top:190px;height:470px;border-radius:30px;overflow:hidden;background:#2E2340;box-shadow:inset 0 -6px 0 rgba(0,0,0,.25),0 14px 24px -12px rgba(59,42,79,.6)}
.st-clay .cimg{position:absolute;left:50%;top:50%;width:667px;height:500px;margin:-260px 0 0 -300px;background-size:cover;background-position:center}
.st-clay .cfr{position:absolute;left:50%;top:50%;width:228px;height:285px;margin:-200px 0 0 -114px;border-radius:22px;box-shadow:0 0 0 999px rgba(36,26,52,.62)}
.st-clay .cfr b{position:absolute;inset:-14px;border-radius:30px;border:14px solid var(--la);box-shadow:0 8px 14px rgba(0,0,0,.3),inset 0 3px 4px rgba(255,255,255,.7),0 -2px 0 rgba(255,255,255,.6)}
.st-clay .cfr u{position:absolute;inset:0;border-radius:16px;background:linear-gradient(#fff5,#fff5) 33.3% 0/2px 100% no-repeat,linear-gradient(#fff5,#fff5) 66.6% 0/2px 100% no-repeat,linear-gradient(#fff5,#fff5) 0 33.3%/100% 2px no-repeat,linear-gradient(#fff5,#fff5) 0 66.6%/100% 2px no-repeat}
.st-clay .cfr s{position:absolute;left:50%;top:-34px;transform:translateX(-50%);white-space:nowrap;text-decoration:none;font-size:14px;font-weight:700;background:var(--bu);border-radius:12px;padding:4px 10px;box-shadow:0 4px 8px rgba(0,0,0,.25)}
.st-clay .ctag{display:flex;align-items:center;justify-content:center;gap:8px;font-size:16px;font-weight:600;color:var(--mut)}
.st-clay .prow{display:flex;gap:14px;align-items:center}
.st-clay .pph{width:112px;height:112px;border-radius:22px;background-size:cover;background-position:center;flex:none;box-shadow:0 10px 16px -8px rgba(59,42,79,.5),inset 0 0 0 4px #fff}
.st-clay .place b{display:block;font-size:28px;line-height:1.05;font-weight:700}.st-clay .place span{font-size:15px;color:var(--mut);display:block;margin-top:4px}
.st-clay .map{position:relative;height:170px;border-radius:26px;overflow:hidden;background:#E2F6EE;flex:none}
.st-clay .map svg{position:absolute;inset:0;width:100%;height:100%}
.st-clay .mpin{position:absolute;width:44px;height:56px;margin:-56px 0 0 -22px;transform-origin:50% 100%}
.st-clay .mpin svg{position:static;width:44px;height:56px}
.st-clay .mlab{position:absolute;left:12px;bottom:12px;font-size:14px;font-weight:700;padding:4px 10px;border-radius:12px;background:#fffd}
.st-clay .warn,.st-clay .okb{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:22px;font-size:16px;line-height:1.2}
.st-clay .okb{font-weight:600}.st-clay .swap{position:relative;flex:none}.st-clay .swap .okv{position:absolute;left:0;right:0;top:50%;margin-top:-26px;min-height:52px}
.st-clay .vid{position:relative;height:220px;border-radius:26px;background-size:cover;background-position:center;flex:none;box-shadow:0 12px 20px -10px rgba(59,42,79,.5),inset 0 0 0 5px #fff}
.st-clay .vb{position:absolute;left:12px;top:12px;font-size:14px;font-weight:700;padding:4px 10px;border-radius:12px;background:#fffe}
.st-clay .strip-c{position:relative;padding:8px 18px}
.st-clay .strip{position:relative;display:flex;height:58px;border-radius:16px;overflow:visible}
.st-clay .strip i{flex:1;background-size:cover;background-position:center}
.st-clay .strip i:first-child{border-radius:14px 0 0 14px}.st-clay .strip i:last-child{border-radius:0 14px 14px 0}
.st-clay .selw{position:absolute;top:-7px;bottom:-7px;border-radius:16px;border:6px solid #FFD84D;box-shadow:0 0 0 999px rgba(242,244,255,.6)}
.st-clay .strip-clip{overflow:hidden;border-radius:16px;padding:8px 0;margin:-8px 0}
.st-clay .hd{position:absolute;top:50%;width:28px;height:64px;margin-top:-32px;border-radius:12px;background:#FFD84D;box-shadow:0 5px 10px rgba(59,42,79,.3),inset 0 -4px 0 rgba(150,110,0,.25),inset 0 3px 3px #fff8}
.st-clay .hd::after{content:"";position:absolute;left:11px;top:20px;width:6px;height:24px;border-radius:3px;background:var(--ink);opacity:.5}
.st-clay .secs{font-size:22px;font-weight:700;text-align:center}.st-clay .secs span{display:block;font-size:15px;color:var(--mut);font-weight:500}
.st-clay .proj{position:absolute;left:0;top:0;width:84px;height:80px;z-index:39}
.st-clay .beam{position:absolute;left:0;top:0;z-index:38;pointer-events:none}
.st-clay .board{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.st-clay .sc{position:relative;border-radius:24px;padding:8px 8px 10px;border:5px solid #fff}
.st-clay .sc i{display:block;height:84px;border-radius:16px;background-size:cover;background-position:center}
.st-clay .sc b{display:block;font-size:16px;margin-top:6px;line-height:1.1}.st-clay .sc span{font-size:14px;color:var(--mut)}
.st-clay .sc .stk{position:absolute;right:-10px;top:-12px;width:40px;height:40px}
.st-clay .promise{display:flex;align-items:center;gap:8px;justify-content:center;font-size:17px;font-weight:600;color:#2E7D66}
.st-clay .ad{display:flex;gap:12px;align-items:center;border-radius:20px;padding:10px 12px;background:#fff9;border:2px dashed #C9C5DE}
.st-clay .ad i{width:44px;height:44px;border-radius:12px;background:#E6E8F2;flex:none}
.st-clay .ad small{font-size:12px;font-weight:700;letter-spacing:.05em;border:1.5px solid var(--mut);color:var(--mut);border-radius:6px;padding:0 6px;margin-right:6px}
.st-clay .ad span{font-size:14px;color:var(--mut)}
.st-clay .stat{display:flex;gap:10px}.st-clay .stat>div{flex:1;display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:20px;font-size:15px;line-height:1.1}
.st-clay .stat b{font-size:19px;display:block}
.st-clay .blob{position:absolute;border-radius:50%;box-shadow:inset -10px -14px 0 rgba(59,42,79,.07),inset 8px 10px 14px rgba(255,255,255,.7)}
.st-clay .splash h1{position:absolute;left:0;right:0;top:560px;margin:0;text-align:center;font-size:36px;font-weight:700}
.st-clay .splash p{position:absolute;left:0;right:0;top:612px;margin:0;display:flex;justify-content:center;align-items:center;gap:8px;font-size:18px;color:#2E7D66;font-weight:600}
.st-clay .jel{transform-origin:50% 60%}
/* ---------- web ---------- */
.st-clay.m-web{font-size:17px}
.st-clay .tb{position:absolute;left:0;right:0;top:0;height:68px;display:flex;align-items:center;gap:14px;padding:0 24px;z-index:20}
.st-clay .tb .brand{display:flex;align-items:center;gap:10px;font-size:22px;font-weight:700;margin-right:18px}
.st-clay .tb .nv{padding:8px 16px;border-radius:16px;font-size:16px;font-weight:600;color:var(--mut)}.st-clay .tb .nv.on{background:#fff;color:var(--ink);box-shadow:0 6px 12px -6px rgba(59,42,79,.3)}
.st-clay .tb .sp{flex:1}
.st-clay .tb .safe{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:#2E7D66;padding:8px 14px;border-radius:16px;background:#DDF6EE}
.st-clay .stage{position:absolute;left:24px;top:80px;width:840px;height:652px;border-radius:40px;background:radial-gradient(90% 70% at 50% 100%,#DCE0FF 0,#E8EAFF 45%,#F7F8FF 100%);box-shadow:inset 0 -10px 0 rgba(59,42,79,.06),inset 0 4px 8px #fff,0 18px 30px -18px rgba(59,42,79,.4);overflow:hidden}
.st-clay .floor{position:absolute;left:60px;right:60px;bottom:-120px;height:260px;border-radius:50%;background:radial-gradient(closest-side,#D3D7FB,#D3D7FB00)}
.st-clay .spg{position:absolute;inset:0}
.st-clay .hs{position:relative;width:42px;height:42px;flex:none}.st-clay .hs>.stk{position:absolute;inset:0}
.st-clay .sh{position:absolute;left:28px;top:24px;right:28px;display:flex;align-items:center;gap:10px;font-size:15px;color:var(--mut);font-weight:600}
.st-clay .sh b{font-size:24px;color:var(--ink);font-weight:700;margin-right:6px}
.st-clay .sh em{font-style:normal;padding:4px 12px;border-radius:12px;background:#fff;box-shadow:0 4px 8px -4px rgba(59,42,79,.3)}
.st-clay .ring{position:absolute;left:230px;top:500px;width:380px;height:110px;border-radius:50%;border:4px dashed #B9B2E6;background:#ffffff55}
.st-clay .ring.hot{border-color:var(--red);background:#FFE6E0aa}
.st-clay .rlab{position:absolute;left:0;right:0;top:612px;text-align:center;font-size:17px;font-weight:600;color:var(--mut)}
.st-clay .rlab kbd,.st-clay kbd{font-family:inherit;font-size:13px;font-weight:600;padding:1px 7px;border-radius:7px;background:#fff;box-shadow:inset 0 -2px 0 rgba(59,42,79,.15);color:var(--mut)}
.st-clay .fcard{position:absolute;left:0;top:0;width:170px;padding:8px;border-radius:18px;z-index:44;display:flex;flex-direction:column;gap:6px}
.st-clay .fcard i{height:118px;border-radius:12px;background-size:cover;background-position:center}
.st-clay .fcard span{font-size:14px;font-weight:600}.st-clay .fcard small{font-size:12px;color:var(--mut)}
.st-clay .col{position:absolute;left:888px;top:80px;width:368px;bottom:24px}
.st-clay .bks{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.st-clay .bk{height:88px;border-radius:22px;padding:10px 10px 8px;position:relative;display:flex;flex-direction:column;justify-content:space-between}
.st-clay .bk b{font-size:14px;line-height:1.08;font-weight:600}
.st-clay .bk kbd{position:absolute;right:8px;top:8px}
.st-clay .bk .ic{width:34px;height:34px;border-radius:12px}
.st-clay .bk.on{box-shadow:0 0 0 4px var(--ink),0 10px 18px -8px rgba(59,42,79,.5)}
.st-clay .bk .stk{position:absolute;left:-8px;top:-8px;width:30px;height:30px;border-width:3px}
.st-clay .panel{position:absolute;left:0;right:0;top:196px;bottom:0;border-radius:30px;overflow:hidden}
.st-clay .pp{position:absolute;inset:0;padding:20px;display:flex;flex-direction:column;gap:12px}
.st-clay .pp h3{margin:0;font-size:24px;font-weight:700;line-height:1.1}
.st-clay .pp .foot{flex-direction:column;gap:10px}.st-clay .pp .foot .btn{flex:none}
.st-clay.m-web .btn{height:56px;font-size:20px}
.st-clay.m-web .btn kbd{background:#ffffff40;color:#fff;box-shadow:none}
.st-clay.m-web .btn.sec kbd{background:#EEEAF8;color:var(--mut)}
.st-clay.m-web .opt{min-height:58px;padding:9px 12px}.st-clay.m-web .opt b{font-size:17px}.st-clay.m-web .opt span{font-size:14px}
.st-clay.m-web .opts{gap:8px}
.st-clay.m-web .opt .dot{width:26px;height:26px}
.st-clay.m-web .ratio{width:34px;height:34px}
.st-clay.m-web .bub{font-size:21px;padding:14px 18px}
.st-clay.m-web .toast{left:488px;right:auto;top:90px;bottom:auto;width:360px}
.st-clay.m-web .wph{box-shadow:0 22px 30px -14px rgba(59,42,79,.45),inset 0 0 0 8px #fff}
.st-clay .wcount{position:absolute;left:600px;top:250px;width:216px;display:flex;flex-direction:column;gap:10px}
.st-clay .wcount .bign{font-size:56px;text-align:left}
.st-clay .wcount .goal{text-align:left}
.st-clay.m-web .cimg{width:720px;height:540px;margin:-270px 0 0 -300px}
.st-clay .wcrop{position:absolute;left:120px;top:84px;width:600px;height:450px;border-radius:30px;overflow:hidden;background:#2E2340}
.st-clay.m-web .cfr{width:280px;height:350px;margin:-175px 0 0 -140px}
.st-clay .wpph{position:absolute;left:40px;top:88px;width:380px;height:285px;border-radius:30px;background-size:cover;background-position:center;box-shadow:0 18px 26px -14px rgba(59,42,79,.5),inset 0 0 0 7px #fff}
.st-clay .wmap{position:absolute;left:452px;top:88px;width:350px;height:285px;border-radius:30px;overflow:hidden;background:#E2F6EE;box-shadow:0 18px 26px -14px rgba(59,42,79,.5),inset 0 0 0 7px #fff}
.st-clay .scr{position:absolute;left:330px;top:96px;width:470px;height:330px;border-radius:34px;padding:14px;background:var(--la)}
.st-clay .scr i{display:block;width:100%;height:100%;border-radius:22px;background-size:cover;background-position:center;position:relative}
.st-clay .wboard{position:absolute;left:300px;top:96px;width:510px;display:grid;grid-template-columns:1fr 1fr;gap:18px}
.st-clay .wboard .sc i{height:118px}
.st-clay .wstat{position:absolute;left:300px;top:548px;width:510px}
.st-clay .pp .chip i{width:52px;height:52px}
.st-clay .pp .warn,.st-clay .pp .okb{font-size:15px}
.st-clay .kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:15px;padding:12px 14px;border-radius:20px}.st-clay .kv span{color:var(--mut)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, app = A.app, E = A.ease;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = 'c' + Math.floor(A.rng(web ? 7 : 3)() * 1e6);

    /* ---------- Pip, drawn in one inline SVG ---------- */
    const pipSVG = id => `<svg class="pip-svg" viewBox="0 0 120 150" width="120" height="150" aria-hidden="true">
<defs><radialGradient id="pb${id}" cx=".36" cy=".3" r=".85"><stop offset="0" stop-color="#FF9C91"/><stop offset=".5" stop-color="#FF6B5E"/><stop offset="1" stop-color="#DC473F"/></radialGradient>
<linearGradient id="pl${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#C3C8E4"/></linearGradient></defs>
<g class="pp-blade"><path d="M62 44C62 28 74 10 97 3c4-1 6 2 4 6C92 22 84 34 80 46z" fill="url(#pl${id})" stroke="#AEB5D6" stroke-width="1.6"/><path d="M71 34c4-9 11-18 22-25" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"/></g>
<rect x="30" y="24" width="15" height="24" rx="7" fill="#BDF2E3" stroke="#8ED9C4" stroke-width="1.5"/>
<g class="pp-armL"><rect x="0" y="86" width="28" height="14" rx="7" fill="#E9564C"/></g>
<g class="pp-armR"><rect x="92" y="86" width="28" height="14" rx="7" fill="#E9564C"/>
 <g class="pp-mag"><path d="M116 90l10-12" stroke="#8E5F38" stroke-width="6" stroke-linecap="round"/><circle cx="133" cy="70" r="13" fill="#BDF2E3" fill-opacity=".55" stroke="#3B2A4F" stroke-width="5"/><path d="M127 65a7 7 0 0 1 6-4" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/></g>
 <g class="pp-era"><g transform="rotate(-25 128 86)"><rect x="112" y="76" width="32" height="20" rx="6" fill="#FFB3C7"/><rect x="112" y="76" width="14" height="20" rx="5" fill="#D9CBFF"/><rect x="114" y="78" width="28" height="5" rx="2.5" fill="#fff" opacity=".5"/></g></g>
</g>
<ellipse cx="44" cy="143" rx="12" ry="6" fill="#C9403A"/><ellipse cx="76" cy="143" rx="12" ry="6" fill="#C9403A"/>
<path d="M60 32C92 32 105 50 105 80v30c0 22-17 33-45 33S15 132 15 110V80c0-30 13-48 45-48z" fill="url(#pb${id})"/>
<path d="M27 62c4-13 13-20 25-21" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".45" fill="none"/>
<path d="M24 116c6 14 20 20 36 20" stroke="#A8322C" stroke-width="5" stroke-linecap="round" opacity=".22" fill="none"/>
<circle cx="35" cy="126" r="3.4" fill="#FFD3B6"/><circle cx="85" cy="126" r="3.4" fill="#FFD3B6"/>
<g transform="translate(45 79)"><g class="pp-lid"><ellipse rx="12.5" ry="14.5" fill="#fff"/><g class="pp-pu"><circle cy="2" r="7.5" fill="#3B2A4F"/><circle cx="2.6" cy="-1.4" r="2.6" fill="#fff"/></g></g></g>
<g transform="translate(75 79)"><g class="pp-lid"><ellipse rx="12.5" ry="14.5" fill="#fff"/><g class="pp-pu"><circle cy="2" r="7.5" fill="#3B2A4F"/><circle cx="2.6" cy="-1.4" r="2.6" fill="#fff"/></g></g></g>
<ellipse cx="31" cy="101" rx="7" ry="4.5" fill="#FFC2B8" opacity=".8"/><ellipse cx="89" cy="101" rx="7" ry="4.5" fill="#FFC2B8" opacity=".8"/>
<path class="pp-sm" d="M51 103q9 9 18 0" stroke="#3B2A4F" stroke-width="3.6" fill="none" stroke-linecap="round"/>
<g class="pp-op"><path d="M49 101q11 2 22 0q-1 15-11 15t-11-15z" fill="#3B2A4F"/><path d="M54 111q6-4 12 0q-2 4-6 4t-6-4z" fill="#FF9AA8"/></g>
<ellipse class="pp-o" cx="60" cy="107" rx="5" ry="6.5" fill="#3B2A4F"/>
<g class="pp-hat"><path d="M24 46C21 16 99 16 96 46z" fill="#B88458"/><path d="M40 24l-3 20M60 19v25M80 24l3 20M28 34h64" stroke="#8E5F38" stroke-width="2.2" opacity=".55"/><path d="M16 46q44 11 88 0q-2 7-7 8q-37 7-74 0q-5-1-7-8z" fill="#8E5F38"/><circle cx="60" cy="18" r="4.5" fill="#8E5F38"/></g>
<g class="pp-party"><path d="M26 44L42 0l18 40z" fill="#FFF0A6"/><path d="M33 26l17 4M29 36l24 5M38 12l9 2" stroke="#B9A2FF" stroke-width="4" stroke-linecap="round"/><circle cx="42" cy="0" r="6" fill="#BDF2E3"/></g>
</svg>`;
    const pip = A.el('div', 'pip', S, `<i class="pip-sh"></i><div class="pip-j"><div class="pip-b">${pipSVG(uid)}</div></div>`);
    const P = {
      j: pip.querySelector('.pip-j'), b: pip.querySelector('.pip-b'), sh: pip.querySelector('.pip-sh'),
      aL: pip.querySelector('.pp-armL'), aR: pip.querySelector('.pp-armR'), lids: [...pip.querySelectorAll('.pp-lid')], pus: [...pip.querySelectorAll('.pp-pu')],
      sm: pip.querySelector('.pp-sm'), op: pip.querySelector('.pp-op'), o: pip.querySelector('.pp-o'),
      hat: pip.querySelector('.pp-hat'), party: pip.querySelector('.pp-party'), mag: pip.querySelector('.pp-mag'), era: pip.querySelector('.pp-era'), blade: pip.querySelector('.pp-blade'),
    };
    const attr = (e, k, v) => { if (e._a !== v) { e._a = v; e.setAttribute(k, v); } };
    const vis = (e, on) => attr(e, 'opacity', on ? '1' : '0');
    const blinks = []; { const r = A.rng(42); let b = 1.65; while (b < 41) { blinks.push(b); b += 1.7 + r() * 2.1; } }
    const lidAt = t => { for (const b of blinks) if (t >= b && t <= b + 0.18) return 1 - 0.92 * Math.sin(Math.PI * (t - b) / 0.18); return 1; };

    /* Hop between spots. Each spot: [t, x, y, s, flip]; Pip lands at t. */
    const hopPose = (t, K) => {
      let i = 0; while (i < K.length - 1 && t >= K[i + 1][0]) i++;
      const a = K[i], b = K[i + 1];
      let x = a[1], y = a[2], s = a[3], f = a[4] || 1, air = 0, sx = 1, sy = 1;
      const land = t >= a[0] ? a[0] : -9;
      if (b) {
        const hd = b[5] || 0.5, st = b[0] - hd, qq = A.seg(t, st, b[0]);
        if (qq > 0) {
          const e = E.inOut(qq);
          x = A.lerp(a[1], b[1], e); y = A.lerp(a[2], b[2], e); s = A.lerp(a[3], b[3], e);
          f = A.lerp(a[4] || 1, b[4] || 1, e);
          air = Math.sin(Math.PI * qq) * (60 + Math.abs(b[1] - a[1]) * 0.15);
          sy = 1 + 0.14 * Math.sin(Math.PI * qq); sx = 1 - 0.09 * Math.sin(Math.PI * qq);
        } else {
          const ant = A.seg(t, st - 0.16, st); const k = Math.sin(Math.PI * ant);
          sy -= 0.14 * k; sx += 0.1 * k;
        }
      }
      const d = t - land;
      if (land > -9 && d < 0.9 && air === 0) { const dec = Math.exp(-6 * d) * Math.cos(15 * d); sy -= 0.2 * dec; sx += 0.16 * dec; }
      return { x, y, s, f, air, sx, sy };
    };
    const drawPip = p => {
      const br = Math.sin(p.t * 4.4) * 0.018;
      A.set(pip, { x: p.x - 60, y: p.y - 146, s: p.s, o: p.o ?? 1 });
      P.j.style.transform = `translateY(${(-p.air / p.s).toFixed(1)}px)`;
      P.b.style.transform = `scale(${((p.sx + br * -0.8) * p.f).toFixed(4)},${(p.sy + br).toFixed(4)})`;
      const sh = 1 - Math.min(0.55, p.air / 160);
      P.sh.style.transform = `scale(${sh.toFixed(3)})`; P.sh.style.opacity = (sh * (p.noShadow ? 0 : 1)).toFixed(2);
      attr(P.aL, 'transform', `rotate(${(p.aL).toFixed(1)} 24 93)`);
      attr(P.aR, 'transform', `rotate(${(-p.aR).toFixed(1)} 96 93)`);
      const lk = lidAt(p.t).toFixed(3);
      P.lids.forEach(l => attr(l, 'transform', `scale(1 ${lk})`));
      P.pus.forEach(u => attr(u, 'transform', `translate(${(p.lx || 0).toFixed(1)} ${(p.ly || 0).toFixed(1)})`));
      vis(P.sm, p.mouth === 'sm'); vis(P.op, p.mouth === 'op'); vis(P.o, p.mouth === 'o');
      vis(P.hat, p.hat); vis(P.party, p.party); vis(P.mag, p.mag); vis(P.era, p.era);
    };

    /* ---------- speech bubble ---------- */
    const bub = A.el('div', 'bub cl', S, '<span class="bt"></span><i class="tail"></i>');
    const bt = bub.querySelector('.bt'), tail = bub.querySelector('.tail');
    const placeBub = (pl, t0, t) => {
      const [x, y, w, side, off] = pl;
      bub.style.left = x + 'px'; bub.style.top = y + 'px'; bub.style.width = w + 'px';
      const ts = tail.style; ts.left = ts.top = ts.right = ts.bottom = '';
      if (side === 'l') { ts.left = '-7px'; ts.top = off + 'px'; bub.style.setProperty('--ox', '0px'); bub.style.setProperty('--oy', off + 'px'); }
      if (side === 'r') { ts.right = '-7px'; ts.top = off + 'px'; bub.style.setProperty('--ox', '100%'); bub.style.setProperty('--oy', off + 'px'); }
      if (side === 'b') { ts.bottom = '-7px'; ts.left = off + 'px'; bub.style.setProperty('--ox', off + 'px'); bub.style.setProperty('--oy', '100%'); }
      if (side === 't') { ts.top = '-7px'; ts.left = off + 'px'; bub.style.setProperty('--ox', off + 'px'); bub.style.setProperty('--oy', '0px'); }
      const k = E.outBack(A.seg(t, t0, t0 + 0.38));
      return k;
    };
    const runBubble = (t, LINES) => {
      let cur = null; for (const L of LINES) if (t >= L[0]) cur = L;
      if (!cur || !cur[1]) { A.set(bub, { o: 0 }); return; }
      A.txt(bt, cur[1]);
      const k = placeBub(cur[2], cur[0], t);
      A.set(bub, { s: 0.6 + 0.4 * k, o: Math.min(1, A.seg(t, cur[0], cur[0] + 0.15)) });
    };

    /* ---------- shared bits ---------- */
    const flame = `<svg width="20" height="24" viewBox="0 0 20 24"><path d="M10 1c1 5 7 7 7 14a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 2.5 4C9 8 8 5 10 1z" fill="#FF8A3D"/><path d="M10 12c1 2 3.5 3 3.5 6a3.5 3.5 0 0 1-7 0c0-2 1.5-3 2-4 .4 1 .8 1.5 1.5 1.5z" fill="#FFD84D"/></svg>`;
    const stkDefs = [['shrink', 'pe', 'Shrinker'], ['crop', 'mi', 'Framer'], ['search', 'la', 'Detective'], ['film', 'bu', 'Director']];
    const stk = (i, sz = 24) => `<div class="stk ${stkDefs[i][1]}">${I(stkDefs[i][0], sz, 2.6)}</div>`;
    const earnT = [15.75, 22.75, 28.4, 35.35];
    const tools = [['shrink', 'Make it smaller', 'pe', 'S'], ['crop', 'Crop for social', 'mi', 'C'], ['pin', 'Where was it taken?', 'la', 'P'], ['film', 'Video to GIF', 'bu', 'G'], ['convert', 'Change format', 'mi', 'F'], ['grid', 'More tools', 'wh', 'M']];
    const thumbs = [A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    const optsH = cls => `<div class="opts">${D.shrink.options.map((o, i) => `<div class="opt cl ${cls}${i}"><div><b>${o.label}</b><span>${o.hint}</span></div><div class="dot">${I('check', 18, 3.4)}</div></div>`).join('')}</div>`;
    const presets = D.crop.presets.filter((p, i) => [0, 1, 2, 3, 5, 7].includes(i));
    const ratioBox = (p, m = 30) => { const w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(8, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const presetsH = n => `<div class="opts">${presets.slice(0, n).map((p, i) => `<div class="opt cl c${i}">${ratioBox(p, web ? 26 : 30)}<div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div><div class="dot">${I('check', 18, 3.4)}</div></div>`).join('')}</div>`;
    const mapSVG = `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="#E2F6EE"/><path d="M-10 150C80 128 120 172 200 140S330 80 410 100" stroke="#A9D8FF" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M0 60h400M70 0v200M160 0l40 200M290 0v200M0 176h400M340 0l-60 200" stroke="#fff" stroke-width="10" stroke-linecap="round"/><path d="M0 104h400" stroke="#FFF0A6" stroke-width="12"/><rect x="84" y="14" width="62" height="34" rx="12" fill="#BDF2E3"/><rect x="300" y="118" width="70" height="44" rx="14" fill="#D9CBFF"/><circle cx="240" cy="30" r="16" fill="#BDF2E3"/></svg>`;
    const pinSVG = `<svg viewBox="0 0 44 56"><path d="M22 54S4 34 4 21a18 18 0 0 1 36 0c0 13-18 33-18 33z" fill="#FF6B5E"/><path d="M12 16a11 11 0 0 1 8-8" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6" fill="none"/><circle cx="22" cy="21" r="7" fill="#fff"/></svg>`;
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(i * 1.5 | 0)}"></i>`).join('');
    const stripH = `<div class="strip-c"><div class="strip-clip"><div class="strip">${strip}<div class="selw"></div></div></div><div class="hd hL"></div><div class="hd hR"></div></div>`;
    const projSVG = `<svg width="84" height="80" viewBox="0 0 84 80"><circle cx="24" cy="18" r="15" fill="#D9CBFF" stroke="#3B2A4F" stroke-width="3"/><circle cx="54" cy="16" r="13" fill="#D9CBFF" stroke="#3B2A4F" stroke-width="3"/><g class="rl"><circle cx="24" cy="11" r="3.2" fill="#3B2A4F"/><circle cx="18" cy="22" r="3.2" fill="#3B2A4F"/><circle cx="30" cy="22" r="3.2" fill="#3B2A4F"/></g><g class="rl2"><circle cx="54" cy="10" r="3" fill="#3B2A4F"/><circle cx="49" cy="20" r="3" fill="#3B2A4F"/><circle cx="59" cy="20" r="3" fill="#3B2A4F"/></g><rect x="8" y="30" width="62" height="40" rx="14" fill="#FF6B5E"/><rect x="12" y="34" width="54" height="10" rx="5" fill="#fff" opacity=".35"/><rect x="66" y="40" width="16" height="20" rx="6" fill="#3B2A4F"/><circle cx="82" cy="50" r="4" fill="#FFF0A6"/><g class="ck"><path d="M8 50h-6" stroke="#3B2A4F" stroke-width="4" stroke-linecap="round"/><path d="M2 50v-12" stroke="#3B2A4F" stroke-width="4" stroke-linecap="round"/><circle cx="2" cy="38" r="4" fill="#FFF0A6" stroke="#3B2A4F" stroke-width="2"/></g><rect x="14" y="70" width="10" height="8" rx="3" fill="#3B2A4F"/><rect x="54" y="70" width="10" height="8" rx="3" fill="#3B2A4F"/></svg>`;
    const items = [[thumbs[0], 'Exam photo', `${D.shrink.size} · JPG`], [thumbs[1], 'Instagram post', D.crop.px], [A.photo('city'), 'City photo', 'Place removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const boardH = cls => `<div class="${cls}">${items.map((x, i) => `<div class="sc cl ${stkDefs[i][1]} sc${i}"><i style="background-image:${x[0]}"></i><b>${x[1]}</b><span>${x[2]}</span>${stk(i, 20)}</div>`).join('')}</div>`;
    const adH = `<div class="ad"><i></i><div><small>Ad</small><span>A sponsor message shows here, only after your work is done.</span></div></div>`;
    const toastH = (cls, i, b, s) => `<div class="toast cl ${cls}">${i >= 0 ? stk(i) : `<div class="stk mi">${I('check', 24, 3)}</div>`}<div><b>${b}</b><span>${s}</span></div></div>`;
    const pg = (cls, inner, parent = S) => A.el('div', (web && parent !== S ? '' : 'pg ') + cls, parent, inner);
    const show = (p, t, ranges) => {
      let o = 0, y = 0, s = 1;
      for (const [a, b] of ranges) {
        if (t < a || t > b) continue;
        const e = A.seg(t, a, a + 0.4), l = E.in(A.seg(t, b - 0.35, b));
        o = Math.min(A.seg(t, a, a + 0.25), 1 - l); y = (1 - E.outBack(e)) * 26 - l * 14; s = 0.97 + 0.03 * E.out(e);
      }
      A.set(p, { y, s, o });
    };
    /* Jelly press: squash on tap, wobble back. */
    const jelly = (e, t, taps) => {
      if (!e) return;
      let v = '';
      for (const tp of taps) {
        if (typeof tp !== 'number') continue;
        const d = t - tp;
        if (d < -0.07 || d > 0.7) continue;
        let k; if (d < 0) k = (d + 0.07) / 0.07; else k = Math.exp(-6 * d) * Math.cos(17 * d);
        v = `scale(${(1 + 0.07 * k).toFixed(4)},${(1 - 0.1 * k).toFixed(4)})`;
      }
      if (e._j !== v) { e._j = v; e.style.transform = v; }
    };
    const crumbs = (x, y, seed) => A.confetti(S, { x, y, count: 12, colors: ['#FFD3B6', '#BDF2E3', '#D9CBFF', '#FFF0A6', '#FF6B5E'], seed, power: 300, spread: Math.PI * 1.1, gravity: 1100, dur: 0.75 });

    /* ---------- layout ---------- */
    let L = {}, spots, lines, keys;
    if (app) {
      const hdr = (title, back = true) => `<div class="hdr">${back ? `<div class="back cl">${I('back', 22, 2.8)}Back</div>` : ''}<b class="ttl">${title}</b><div class="flame cl">${flame}<span class="sk">3</span></div></div>`;
      const blobs = [[-30, 120, 120, 'pe'], [300, 200, 90, 'mi'], [40, 700, 70, 'bu'], [290, 640, 130, 'la']];
      L.splash = pg('splash', `${blobs.map(b => `<i class="blob ${b[3]}" style="left:${b[0]}px;top:${b[1]}px;width:${b[2]}px;height:${b[2]}px"></i>`).join('')}<h1>Image Swiss Knife</h1><p>${I('lock', 20, 2.6)}Your photos stay on this phone</p>`);
      L.home = pg('home', `${hdr('Image Swiss Knife', false)}<div class="tiles">${tools.map((x, i) => `<div class="tile cl ${x[2]} b${i + 1}"><div class="ic">${I(x[0], 26, 2.4)}</div><b>${x[1]}</b></div>`).join('')}</div>
        <div class="shelf cl"><div class="tx"><b>Today's stickers</b><span class="shn">0 of 4 earned</span></div>${[0, 1, 2, 3].map(i => `<div class="hs hs${i}">${stk(i, 20)}<div class="stk empty">${I('star', 18, 2.4)}</div></div>`).join('')}</div>
        <div class="lockl">${I('lock', 18, 2.6)}Nothing leaves your phone</div>`);
      L.pick = pg('pick', `${hdr('Make it smaller')}<p class="lab">Recent photos</p><div class="gal">${thumbs.map((b, i) => `<div class="th g${i}" style="background-image:${b}">${i === 0 ? `<div class="stk">${I('check', 20, 3.4)}</div>` : ''}</div>`).join('')}</div>
        <div class="foot"><div class="btn next off jel">Next ${I('next', 24, 3)}</div></div>`);
      L.shq = pg('shq', `${hdr('Make it smaller')}<div class="chip cl"><i style="background-image:${thumbs[0]}"></i><span><b>${D.portrait.file}</b><br>${D.portrait.size} · ${D.portrait.dims}</span></div>${optsH('o')}`);
      L.work = pg('work', `${hdr('Make it smaller')}<div class="wph" style="left:90px;top:350px;width:210px;height:280px;background-image:${thumbs[0]}"></div>
        <div style="position:absolute;left:30px;right:30px;top:648px;display:flex;flex-direction:column;gap:10px"><div class="bign">4.8 MB</div><div class="meter"><i></i><em></em></div><div class="goal">Goal: ${D.shrink.rule}</div></div>`);
      L.res = pg('res', `${hdr('Make it smaller')}<div class="rrow"><div class="rph" style="background-image:${thumbs[0]}"><div class="stk">${D.shrink.size}</div></div><div><div class="big2">${D.shrink.size}</div><div class="was">was ${D.portrait.size}</div><div class="tags"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span>Exam form</span></div></div></div>
        <div class="cmp cl"><span>Before</span><div class="b"></div><b>${D.portrait.size}</b><span>After</span><div class="b g ba"></div><b>${D.shrink.size}</b></div>
        <div class="foot"><div class="btn save jel">${I('save', 24, 2.8)}Save</div><div class="btn sec">${I('share', 22, 2.6)}Share</div></div>
        ${toastH('t1', 0, 'Saved to your Gallery', 'New sticker: Shrinker')}`);
      L.cq = pg('cq', `${hdr('Crop for social')}${presetsH(6)}`);
      L.ce = pg('ce', `${hdr('Crop for social')}<div class="cbox"><div class="cimg" style="background-image:${thumbs[1]}"></div><div class="cfr"><u></u><b></b><s>${D.crop.ratio}</s></div></div>
        <div class="ctag" style="position:absolute;left:18px;right:18px;top:672px">${I('crop', 20, 2.4)}${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}</div>
        <div class="foot"><div class="btn cdone jel">${I('check', 24, 3)}Done</div></div>${toastH('t2', 1, 'Ready for Instagram', 'New sticker: Framer')}`);
      L.priv = pg('priv', `${hdr('Where was it taken?')}<div class="prow"><div class="pph" style="background-image:${A.photo('city')}"></div><div class="place"><b class="pl">Looking…</b><span class="pls">${D.place.file}</span></div></div>
        <div class="map cl">${mapSVG}<div class="mpin" style="left:77%;top:66%">${pinSVG}</div><div class="mlab">${D.place.lat} · ${D.place.lon}</div></div>
        <div class="swap"><div class="warn bu wv">${I('eye', 24, 2.4)}<span>If you share this photo, people can see this place.</span></div><div class="okb mi okv">${I('shield', 24, 2.4)}<span>Place removed. Safe to share.</span></div></div>
        <div class="foot"><div class="btn rm jel">${I('trash', 22, 2.6)}<span class="rml">Remove the place</span></div></div>`);
      L.gif = pg('gif', `${hdr('Video to GIF')}<div class="vid"><span class="vb">${D.video.file} · ${D.video.len}</span></div>${stripH}
        <div class="secs"><span class="sl">Pick the part you like</span><b class="sv">0:04 to 0:08 · 4.0 s</b></div><div class="meter gm"><i></i></div>
        <div class="foot"><div class="btn mk jel">${I('film', 24, 2.6)}<span class="mkl">Make GIF</span></div></div>${toastH('t4', 3, 'GIF saved to your Gallery', 'New sticker: Director')}`);
      L.done = pg('done', `${hdr('All done', false)}${boardH('board')}
        <div class="stat"><div class="cl pe">${I('shrink', 22, 2.6)}<span><b>4.6 MB</b>saved today</span></div><div class="cl bu">${flame}<span><b class="sk2">3 days</b>in a row</span></div></div>
        <div class="promise">${I('lock', 20, 2.6)}${D.promise}</div><div class="btn saveall jel">${I('save', 24, 2.8)}<span class="sal">Save all 4</span></div>${adH}`);
      L.proj = A.el('div', 'proj', S, projSVG);
      L.beam = A.el('div', 'beam', S, `<svg width="390" height="844"><path d="M180 190L330 232L330 420L180 200z" fill="#FFF0A6" opacity=".55"/></svg>`);
      L.privT = A.el('div', 'toast cl t5', S, `${stk(2)}<div><b>Place removed</b><span>New sticker: Detective</span></div>`);

      const dock = [66, 214, 0.74];
      spots = [[0.75, 195, 520, 1.5], [2.9, ...dock], [11.0, 195, 350, 0.9], [13.75, ...dock], [20.0, 46, 578, 0.78, 1, 0.55], [24.95, ...dock], [27.9, 336, 538, 0.74, -1], [29.3, 336, 538, 0.74, -1], [29.8, ...dock]];
      const pDock = [124, 106, 250, 'l', 44];
      lines = [[0.9, 'Hi! I am Pip.', [124, 204, 142, 'b', 60]], [2.3, null], [2.95, 'What shall we fix today? Tap a block.', pDock],
        [5.2, 'Tap the photo you want to shrink.', pDock], [6.75, 'Great pick! Now tap Next.', pDock], [8.8, 'Where will you use it?', pDock],
        [10.7, 'Squeeze! I keep your face sharp.', [50, 112, 290, 'b', 135]], [13.75, 'Done! Tap Save to keep it.', pDock],
        [15.75, 'You saved 4.6 MB. That is room for 23 more photos!', pDock], [17.0, 'What next? Tap a block.', pDock],
        [18.0, 'Where will you post it?', pDock], [19.95, 'I hold the frame. You slide the photo.', [150, 560, 220, 'l', 34]],
        [22.75, 'Perfect fit! Ready for Instagram.', [150, 560, 220, 'l', 34]], [24.0, 'What next? Tap a block.', pDock],
        [25.0, 'Let me look for clues…', pDock], [26.0, 'Found it! Tap Remove to hide the place.', pDock],
        [27.7, 'Rub, rub… the pin is gone!', [18, 108, 354, 'b', 300]], [29.8, 'Safe to share now.', pDock], [30.0, 'What next? Tap a block.', pDock],
        [30.8, 'Drag the yellow handle to pick 3 seconds.', pDock], [32.5, 'Now tap Make GIF.', pDock],
        [33.05, 'Crank, crank! 36 pictures.', [204, 106, 172, 'l', 44]], [34.4, 'Your GIF is ready! Tap Save.', pDock],
        [35.35, 'Saved! You earned a sticker.', pDock], [36.1, 'All done! You earned 4 stickers.', pDock]];
      keys = [
        { t: 4.9, at: '.home .b1', tap: true }, { t: 6.6, at: '.pick .g0', tap: true }, { t: 8.2, at: '.pick .next', tap: true },
        { t: 10.0, at: '.shq .o1', tap: true }, { t: 15.6, at: '.res .save', tap: true }, { t: 17.8, at: '.home .b2', tap: true },
        { t: 18.9, at: '.cq .c0', tap: true }, { t: 20.1, at: '.ce .cimg', hold: 0.15, dy: -40 }, { t: 21.4, at: '.ce .cimg', drag: true, move: 1.0, dy: -40 },
        { t: 22.6, at: '.ce .cdone', tap: true }, { t: 24.8, at: '.home .b3', tap: true }, { t: 27.6, at: '.priv .rm', tap: true },
        { t: 30.6, at: '.home .b4', tap: true }, { t: 31.4, at: '.gif .hR', hold: 0.1 }, { t: 32.4, at: '.gif .hR', drag: true, move: 0.9 },
        { t: 33.0, at: '.gif .mk', tap: true }, { t: 35.2, at: '.gif .mk', tap: true }, { t: 38.2, at: '.done .saveall', tap: true },
      ];
    } else {
      /* Web: top bar, big stage for Pip on the left, clay tool blocks and a panel on the right. */
      A.el('div', 'tb', S, `<div class="brand"><svg width="38" height="38" viewBox="0 0 40 40"><rect x="4" y="8" width="32" height="30" rx="14" fill="#FF6B5E"/><path d="M21 9c0-4 3-7 8-8 1 0 1 1 1 2-3 2-5 4-6 7z" fill="#C3C8E4"/><circle cx="15" cy="21" r="4" fill="#fff"/><circle cx="25" cy="21" r="4" fill="#fff"/><circle cx="15" cy="22" r="2.2" fill="#3B2A4F"/><circle cx="25" cy="22" r="2.2" fill="#3B2A4F"/></svg>Image Swiss Knife</div>
        <div class="nv on">Tools</div><div class="nv">My stickers</div><div class="nv">Help</div><div class="sp"></div>
        <div class="flame cl">${flame}<span class="sk">3-day streak</span></div><div class="safe">${I('lock', 18, 2.6)}Works offline. Nothing uploaded.</div>`);
      const stage = A.el('div', 'stage', S, `<div class="floor"></div>${[[650, 120, 90, 'pe'], [80, 210, 60, 'mi'], [740, 300, 46, 'bu'], [150, 420, 40, 'la']].map(b => `<i class="blob sdeco ${b[3]}" style="left:${b[0]}px;top:${b[1]}px;width:${b[2]}px;height:${b[2]}px"></i>`).join('')}`);
      const col = A.el('div', 'col', S, `<div class="bks">${tools.map((x, i) => `<div class="bk cl ${x[2]} bk${i + 1}"><div class="ic">${I(x[0], 20, 2.4)}</div><b>${x[1]}</b><kbd>${x[3]}</kbd>${i < 4 ? stk(i, 14) : ''}</div>`).join('')}</div><div class="panel cl"></div>`);
      const panel = col.querySelector('.panel');
      L.wsplash = A.el('div', 'pg splash', S, `${[[60, 90, 200, 'pe'], [1040, 120, 150, 'mi'], [180, 560, 110, 'bu'], [960, 520, 220, 'la']].map(b => `<i class="blob ${b[3]}" style="left:${b[0]}px;top:${b[1]}px;width:${b[2]}px;height:${b[2]}px"></i>`).join('')}<h1 style="top:560px;font-size:52px">Image Swiss Knife</h1><p style="top:630px;font-size:21px">${I('lock', 22, 2.6)}Your photos stay in your browser</p>`);
      L.wsplash.style.background = '#F2F4FF'; L.wsplash.style.zIndex = 30;
      const sp = (cls, inner) => A.el('div', 'spg ' + cls, stage, inner);
      const shd = (b, ...em) => `<div class="sh"><b>${b}</b>${em.map(x => `<em>${x}</em>`).join('')}</div>`;
      L.sHome = sp('sHome', `${shd('What shall we fix today?')}<div class="ring"></div><div class="rlab">Drop photos on Pip · or press <kbd>Ctrl</kbd> <kbd>O</kbd> to open</div>`);
      L.sPh = sp('sPh', `${shd('Your photo', D.portrait.file, D.portrait.size)}<div class="wph" style="left:300px;top:256px;width:240px;height:320px;background-image:${thumbs[0]}"><div class="stk">${D.shrink.size}</div></div>
        <div class="wcount"><div class="bign">4.8 MB</div><div class="meter"><i></i><em></em></div><div class="goal">Goal: ${D.shrink.rule}</div></div>`);
      L.sCrop = sp('sCrop', `${shd('Crop for social', 'IMG_1650.JPG', '4000 × 3000')}<div class="wcrop"><div class="cimg" style="background-image:${thumbs[1]}"></div><div class="cfr"><u></u><b></b><s>${D.crop.preset} · ${D.crop.ratio}</s></div></div>`);
      L.sPriv = sp('sPriv', `${shd('Where was it taken?', D.place.file)}<div class="wpph" style="background-image:${A.photo('city')}"></div><div class="wmap">${mapSVG}<div class="mpin" style="left:52%;top:60%">${pinSVG}</div><div class="mlab">${D.place.city}, ${D.place.country}</div></div>`);
      L.sGif = sp('sGif', `${shd('Video to GIF', D.video.file, D.video.len)}<div class="scr cl"><i><span class="vb">${D.video.file}</span></i></div>`);
      L.sDone = sp('sDone', `${shd('All done!', '4 results')}${boardH('wboard')}<div class="wstat stat"><div class="cl pe">${I('shrink', 22, 2.6)}<span><b>4.6 MB</b>saved today</span></div><div class="cl bu">${flame}<span><b class="sk2">3-day streak</b>Keep it going</span></div><div class="cl mi">${I('lock', 22, 2.6)}<span><b>0 uploads</b>Nothing sent</span></div></div>`);
      const ppg = (cls, inner) => A.el('div', 'pp ' + cls, panel, inner);
      L.pHome = ppg('pHome', `<h3>Today</h3><div class="shelf cl la"><div class="tx"><b>Today's stickers</b><span>0 of 4 earned</span></div></div><div style="display:flex;gap:10px;justify-content:center">${[0, 1, 2, 3].map(() => `<div class="stk empty">${I('star', 18, 2.4)}</div>`).join('')}</div>
        <p class="lab">Drag a photo onto Pip, then pick a tool above. Or press a key: <kbd>S</kbd> <kbd>C</kbd> <kbd>P</kbd> <kbd>G</kbd>.</p><div class="lockl" style="margin-top:auto">${I('lock', 18, 2.6)}Nothing leaves this computer</div>`);
      L.pGot = ppg('pGot', `<h3>Got your photo</h3><div class="chip cl"><i style="background-image:${thumbs[0]}"></i><span><b>${D.portrait.file}</b><br>${D.portrait.size} · ${D.portrait.dims}</span></div><p class="lab">Now pick a tool above. "Make it smaller" fits an exam form.</p><div class="lockl" style="margin-top:auto">${I('lock', 18, 2.6)}Nothing leaves this computer</div>`);
      L.pS = ppg('pS', `<h3>Where will you use it?</h3>${optsH('o')}`);
      L.pR = ppg('pR', `<h3>Done! ${D.shrink.size}</h3><div class="cmp cl"><span>Before</span><div class="b"></div><b>${D.portrait.size}</b><span>After</span><div class="b g ba"></div><b>${D.shrink.size}</b></div>
        <div class="tags" style="margin:0"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span>Exam form</span></div><div class="foot"><div class="btn save jel">${I('save', 22, 2.8)}Save <kbd>Ctrl S</kbd></div><div class="btn sec">${I('share', 20, 2.6)}Share</div></div>`);
      L.pCQ = ppg('pCQ', `<h3>Where will you post it?</h3>${presetsH(6)}`);
      L.pCE = ppg('pCE', `<h3>Slide to fit</h3><div class="chip cl mi"><div class="ratio"><i style="width:24px;height:30px"></i></div><span><b>${D.crop.preset}</b><br>${D.crop.ratio} · ${D.crop.px}</span></div><p class="lab">Drag the photo behind Pip's frame. Arrow keys nudge it.</p><p class="lab">Only the part inside the frame is kept.</p><div class="foot"><div class="btn cdone jel">${I('check', 22, 3)}Done <kbd>Enter</kbd></div></div>`);
      L.pP = ppg('pP', `<h3 class="pl">Looking…</h3><div class="kv cl"><span>Region</span><b>${D.place.region}</b><span>Map</span><b>${D.place.lat}, ${D.place.lon}</b><span>Taken</span><b>${D.place.when}</b><span>Camera</span><b>${D.place.device}</b></div>
        <div class="swap"><div class="warn bu wv">${I('eye', 22, 2.4)}<span>If you share this photo, people can see this place.</span></div><div class="okb mi okv">${I('shield', 22, 2.4)}<span>Place removed. Safe to share.</span></div></div>
        <div class="foot"><div class="btn rm jel">${I('trash', 20, 2.6)}<span class="rml">Remove the place</span></div></div>`);
      L.pG = ppg('pG', `<h3>Pick 3 seconds</h3><div class="chip cl"><i style="background-image:${A.frame(2)}"></i><span><b>${D.video.file}</b><br>Video · ${D.video.len}</span></div>${stripH}
        <div class="secs"><span class="sl">Pick the part you like</span><b class="sv">0:04 to 0:08 · 4.0 s</b></div><div class="meter gm"><i></i></div>
        <div class="foot"><div class="btn mk jel">${I('film', 22, 2.6)}<span class="mkl">Make GIF</span></div></div>`);
      L.pD = ppg('pD', `<h3>All done!</h3><p class="lab" style="margin-top:-4px">You saved 4.6 MB. That is room for 23 more photos!</p><div class="promise" style="justify-content:flex-start">${I('lock', 20, 2.6)}${D.promiseWeb}</div>
        <div class="foot" style="margin-top:0"><div class="btn saveall jel">${I('save', 22, 2.8)}<span class="sal">Save all 4</span> <kbd>Ctrl S</kbd></div></div><div class="shelf cl bu"><div class="tx"><b>4 of 4 stickers</b><span>Best day this week</span></div>${[0, 1, 2, 3].map(i => stk(i, 18)).join('')}</div><div style="margin-top:auto">${adH}</div>`);
      L.fcard = A.el('div', 'fcard cl', S, `<i style="background-image:${thumbs[0]}"></i><span>${D.portrait.file}</span><small>From your Desktop · ${D.portrait.size}</small>`);
      L.proj = A.el('div', 'proj', S, projSVG);
      L.proj.style.transformOrigin = '0 0';
      L.beam = A.el('div', 'beam', S, `<svg width="1280" height="756"><path d="M334 644L560 210L470 500L334 668z" fill="#FFF0A6" opacity=".6"/></svg>`);
      L.toasts = [toastH('t1', 0, 'Saved to Downloads', 'New sticker: Shrinker'), toastH('t2', 1, 'Ready for Instagram', 'New sticker: Framer'), toastH('t5', 2, 'Place removed', 'New sticker: Detective'), toastH('t4', 3, 'GIF saved to Downloads', 'New sticker: Director'), toastH('t3', -1, '4 files saved', 'Find them in Downloads')].map(h => { const w = A.el('div', '', S, h); return w.firstChild; });

      const home = [444, 650, 1.8], side = [214, 700, 1.3];
      spots = [[0.75, 640, 520, 1.7], [2.9, ...home], [7.5, ...side, 1, 0.5], [11.0, 444, 336, 1.1], [13.8, ...side], [18.45, 244, 668, 1.25], [25.35, 392, 618, 1.25], [27.9, 790, 446, 1.0, -1, 0.6], [29.6, 790, 446, 1.0, -1], [31.35, 128, 714, 1.1, 1, 0.7], [36.3, 176, 700, 1.35]];
      lines = [[0.9, 'Hi! I am Pip.', [520, 190, 240, 'b', 120]], [2.3, null], [2.95, 'Drop a photo on me, or pick a tool on the right.', [580, 400, 260, 'l', 40]],
        [5.0, 'Drag your photo here. I will catch it!', [580, 400, 260, 'l', 40]], [6.9, 'Got it! Now pick a tool on the right.', [56, 330, 290, 'b', 150]],
        [8.7, 'Where will you use it? Pick on the right.', [56, 330, 290, 'b', 150]], [10.7, 'Squeeze! I keep your face sharp.', [60, 170, 260, 'r', 40]],
        [13.8, 'Done! Click Save to keep it.', [56, 330, 290, 'b', 150]], [15.75, 'You saved 4.6 MB. That is room for 23 more photos!', [56, 300, 290, 'b', 150]],
        [17.9, null], [18.45, 'Where will you post it?', [330, 620, 300, 'l', 30]], [19.9, 'I hold the frame. You slide the photo.', [330, 620, 330, 'l', 30]],
        [22.75, 'Perfect fit! Ready for Instagram.', [330, 620, 330, 'l', 30]], [24.25, null], [24.4, null], [25.35, 'Let me look for clues…', [60, 580, 250, 'r', 30]],
        [26.0, 'Found it! Click Remove to hide the place.', [52, 560, 262, 'r', 40]], [27.7, 'Rub, rub… the pin is gone!', [520, 560, 300, 't', 230]],
        [29.6, 'Safe to share now.', [520, 560, 300, 't', 230]], [30.6, null], [31.35, 'Drag the yellow handle to pick 3 seconds.', [390, 560, 300, 'l', 40]],
        [32.5, 'Now click Make GIF.', [390, 560, 300, 'l', 40]], [33.05, 'Crank, crank! 36 pictures.', [390, 560, 300, 'l', 40]],
        [34.4, 'Your GIF is ready! Click Save.', [390, 560, 300, 'l', 40]], [35.35, 'Saved! You earned a sticker.', [390, 560, 300, 'l', 40]],
        [36.3, 'All done! You earned 4 stickers.', [40, 360, 260, 'b', 130]]];
      L.FS = { x: 64, y: 560 }; L.FE = { x: 444, y: 330 };
      keys = [
        { t: 5.6, at: () => ({ x: L.FS.x + 85, y: L.FS.y + 60 }), hold: 0.2 }, { t: 6.8, at: () => ({ x: L.FE.x + 85, y: L.FE.y + 60 }), drag: true, move: 0.9 },
        { t: 8.2, at: '.bk1', tap: true }, { t: 10.0, at: '.pS .o1', tap: true }, { t: 15.6, at: '.pR .save', tap: true },
        { t: 17.8, at: '.bk2', tap: true }, { t: 18.9, at: '.pCQ .c0', tap: true }, { t: 20.1, at: '.sCrop .cimg', hold: 0.15, dx: 120 }, { t: 21.4, at: '.sCrop .cimg', drag: true, move: 1.0, dx: 120 },
        { t: 22.6, at: '.pCE .cdone', tap: true }, { t: 24.8, at: '.bk3', tap: true }, { t: 27.6, at: '.pP .rm', tap: true },
        { t: 30.6, at: '.bk4', tap: true }, { t: 31.4, at: '.pG .hR', hold: 0.1 }, { t: 32.4, at: '.pG .hR', drag: true, move: 0.9 },
        { t: 33.0, at: '.pG .mk', tap: true }, { t: 35.2, at: '.pG .mk', tap: true }, { t: 38.2, at: '.pD .saveall', tap: true },
      ];
    }
    A.pointer(keys);

    /* ---------- element refs ---------- */
    const R = s => S.querySelector(s);
    const X = {
      wph: R('.wph'), bign: R('.bign'), wstk: R('.wph .stk'),
      ba: R('.ba'), save: R('.save'), cimg: R('.cimg'), cfr: R('.cfr'), cdone: R('.cdone'),
      pin: R('.mpin'), map: R(web ? '.wmap' : '.map'), wv: R('.wv'), okv: R('.okv'), rm: R('.rm'), rml: R('.rml'), pl: R('.pl'),
      selw: R('.selw'), hL: R('.hL'), hR: R('.hR'), sv: R('.sv'), sl: R('.sl'), gm: R('.gm'), gmi: R('.gm i'), mk: R('.mk'), mkl: R('.mkl'),
      vid: R(web ? '.scr i' : '.vid'), vb: R('.vb'), saveall: R('.saveall'), sks: qa('.sk, .sk2'), scs: qa('.sc'), ck: R('.proj .ck'), rl: R('.proj .rl'), rl2: R('.proj .rl2'),
      next: R('.next'), opt1: R('.o1'), c0: R('.c0'),
    };
    const meterEl = R('.work .meter i') || R('.wcount .meter i');
    const stomps = [11.3, 11.85, 12.4, 12.95], sizes = [D.portrait.bytes, 2936012, 1258291, 524288, D.shrink.bytes];
    const cr = stomps.map((st, i) => ({ st, c: crumbs(0, 0, 30 + i) }));
    const fin = A.confetti(S, { x: web ? 176 : 66, y: web ? 520 : 140, count: 50, colors: ['#FF6B5E', '#FFD3B6', '#BDF2E3', '#D9CBFF', '#FFF0A6'], seed: 9, power: web ? 700 : 520, gravity: 900, dur: 2.4 });

    return {
      update(t) {
        const { seg, set, cls, txt } = A;
        /* --- pages --- */
        if (app) {
          show(L.splash, t, [[-1, 2.6]]);
          set(L.splash.querySelector('h1'), { y: 30 * (1 - E.outElastic(seg(t, 0.8, 1.8))), o: seg(t, 0.8, 1.1) });
          set(L.splash.querySelector('p'), { y: 14 * (1 - E.out(seg(t, 1.3, 1.8))), o: seg(t, 1.3, 1.6) });
          qa('.splash .blob').forEach((b, i) => set(b, { s: E.spring(seg(t, 0.1 + i * 0.12, 0.9 + i * 0.12)), y: Math.sin(t * 1.6 + i) * 6 }));
          show(L.home, t, [[2.3, 5.2], [16.9, 18.15], [23.9, 25.15], [29.9, 30.95]]);
          qa('.home .tile').forEach((tl, i) => { const p = E.spring(seg(t, 2.5 + i * 0.07, 3.3 + i * 0.07)); if (t < 4) { set(tl, { s: 0.5 + 0.5 * p, o: seg(t, 2.5 + i * 0.07, 2.7 + i * 0.07) }); tl._j = null; } else { set(tl, { o: 1 }); jelly(tl, t, [4.9, 17.8, 24.8, 30.6].filter((x, k) => k === i)); } });
          let earned = 0; earnT.forEach((et, i) => { const on = t >= et; if (on) earned++; const h = q('.home .hs' + i); set(h.firstChild, { o: on ? 1 : 0 }); set(h.lastChild, { o: on ? 0 : 1 }); });
          txt(q('.shn'), `${earned} of 4 earned`);
          show(L.pick, t, [[5.0, 9.0]]);
          const sel = t >= 6.6; cls(q('.pick .g0'), 'sel', sel); set(q('.pick .g0 .stk'), { s: E.spring(seg(t, 6.6, 7.2)), o: sel ? 1 : 0 });
          cls(X.next, 'off', !sel); jelly(X.next, t, [8.2]);
          show(L.shq, t, [[8.6, 10.8]]); cls(X.opt1, 'on', t >= 10.0); jelly(X.opt1, t, [10.0]);
          show(L.work, t, [[10.5, 13.6]]);
          show(L.res, t, [[13.5, 17.3]]);
          set(q('.res .rph'), { s: 0.8 + 0.2 * E.spring(seg(t, 13.4, 14.2)) });
          show(L.cq, t, [[17.95, 19.8]]); cls(X.c0, 'on', t >= 18.9); jelly(X.c0, t, [18.9]);
          show(L.ce, t, [[19.4, 24.2]]);
          show(L.priv, t, [[24.95, 30.2]]);
          show(L.gif, t, [[30.75, 36.2]]);
          show(L.done, t, [[35.9, 40.5]]);
        } else {
          show(L.wsplash, t, [[-1, 2.5]]);
          set(L.wsplash.querySelector('h1'), { y: 30 * (1 - E.outElastic(seg(t, 0.8, 1.8))), o: seg(t, 0.8, 1.1) });
          set(L.wsplash.querySelector('p'), { y: 14 * (1 - E.out(seg(t, 1.3, 1.8))), o: seg(t, 1.3, 1.6) });
          qa('.wsplash .blob, .splash .blob').forEach((b, i) => set(b, { s: E.spring(seg(t, 0.1 + i * 0.12, 0.9 + i * 0.12)), y: Math.sin(t * 1.6 + i) * 8 }));
          show(L.sHome, t, [[2.3, 7.1]]); qa('.sdeco').forEach((b, i) => set(b, { y: Math.sin(t * 1.4 + i * 1.7) * 7, o: A.win(t, 2.4, 7.1, 0.4, 0.4) }));
          txt(q('.sPh .sh b'), t < 8.2 ? 'Your photo' : 'Make it smaller'); show(L.sPh, t, [[6.8, 18.1]]); show(L.sCrop, t, [[17.95, 25.1]]); show(L.sPriv, t, [[24.95, 30.95]]); show(L.sGif, t, [[30.75, 36.3]]); show(L.sDone, t, [[36.0, 40.5]]);
          show(L.pHome, t, [[2.3, 7.0]]); show(L.pGot, t, [[6.9, 8.6]]); show(L.pS, t, [[8.4, 13.6]]); show(L.pR, t, [[13.5, 18.1]]); show(L.pCQ, t, [[17.95, 19.7]]); show(L.pCE, t, [[19.6, 25.1]]); show(L.pP, t, [[24.95, 30.95]]); show(L.pG, t, [[30.75, 36.2]]); show(L.pD, t, [[36.0, 40.5]]);
          qa('.bk').forEach((b, i) => {
            const p = E.spring(seg(t, 2.4 + i * 0.07, 3.2 + i * 0.07)); set(b, { o: seg(t, 2.4 + i * 0.07, 2.6 + i * 0.07) });
            if (t < 3.6) { b.style.transform = `scale(${(0.5 + 0.5 * p).toFixed(3)})`; b._j = null; } else jelly(b, t, [[8.2, 17.8, 24.8, 30.6][i]]);
            const which = t < 8.2 ? -1 : t < 17.8 ? 0 : t < 24.8 ? 1 : t < 30.6 ? 2 : t < 36 ? 3 : -1;
            cls(b, 'on', i === which);
            const st = b.querySelector('.stk'); if (st) set(st, { s: E.spring(seg(t, earnT[i], earnT[i] + 0.6)), o: t >= earnT[i] ? 1 : 0 });
          });
          set(S.querySelector('.tb'), { o: seg(t, 2.2, 2.6) }); set(S.querySelector('.panel'), { o: seg(t, 2.3, 2.7) });
          set(S.querySelector('.stage'), { s: 0.96 + 0.04 * E.out(seg(t, 2.2, 2.7)), o: seg(t, 2.2, 2.5) });
          cls(X.opt1, 'on', t >= 10.0); jelly(X.opt1, t, [10.0]); cls(X.c0, 'on', t >= 18.9); jelly(X.c0, t, [18.9]);
          /* file drag from the desktop, caught by Pip */
          const st = Math.max(5.6 + 0.2 + 0.12, 6.8 - 0.9), dq = E.inOut(seg(t, st, 6.8));
          const fx = A.lerp(L.FS.x, L.FE.x - 85, dq), fy = A.lerp(L.FS.y, L.FE.y - 40, dq);
          set(L.fcard, { x: fx, y: fy, r: (1 - dq) * -5, s: 1 - 0.45 * E.in(seg(t, 6.7, 7.0)), o: seg(t, 4.9, 5.3) * (1 - seg(t, 6.85, 7.0)) });
          cls(q('.ring'), 'hot', t > 6.1 && t < 6.9);
          set(q('.sPh .wph'), { s: t < 7.3 ? E.spring(seg(t, 6.85, 7.5)) : 1 });
          L.toasts.forEach((tt, i) => { const a = [15.75, 22.75, 28.5, 35.35, 38.35][i], b = [17.3, 24.2, 30.2, 36.2, 40.6][i], w = A.win(t, a, b, 0.2, 0.25); set(tt, { y: (1 - E.outBack(Math.min(1, w))) * 24, o: w }); });
        }

        /* --- shrink: stomp the photo --- */
        let pSc = 1, pSq = 0, sIdx = 0;
        stomps.forEach((s, i) => { if (t >= s) sIdx = i + 1; });
        const baseTarget = [1, 0.92, 0.84, 0.77, 0.7];
        pSc = baseTarget[sIdx]; if (sIdx > 0) { const d = t - stomps[sIdx - 1]; pSq = d < 0.7 ? Math.exp(-7 * d) * Math.cos(16 * d) : 0; pSc = A.lerp(baseTarget[sIdx - 1], baseTarget[sIdx], E.out(seg(d, 0, 0.25))); }
        if (web && t > 13.4) pSc = A.lerp(0.7, 0.76, E.spring(seg(t, 13.4, 14.2)));
        const bytes = sIdx === 0 ? sizes[0] : A.lerp(sizes[sIdx - 1], sizes[sIdx], E.out(seg(t, stomps[sIdx - 1], stomps[sIdx - 1] + 0.3)));
        txt(X.bign, A.fmtBytes(bytes));
        if (meterEl) meterEl.style.width = `calc(${(Math.max(0.06, 1 - Math.log(bytes / sizes[4]) / Math.log(sizes[0] / sizes[4])) * 100).toFixed(1)}% - 6px)`;
        const PH = web ? 320 : 280, PB = web ? 80 + 256 + 320 : 630;
        set(X.wph, { sx: pSc * (1 + 0.1 * pSq), sy: pSc * (1 - 0.16 * pSq) });
        if (X.wstk) set(X.wstk, { s: E.spring(seg(t, 13.6, 14.3)), o: t > 13.6 ? 1 : 0 });
        const photoTop = PB - PH * pSc * (1 - 0.16 * pSq);
        cr.forEach(c => { c.c.el.style.left = (web ? 444 : 195) + 'px'; c.c.el.style.top = (PB - PH * baseTarget[stomps.indexOf(c.st) + 1]) + 'px'; c.c.update(t - c.st); });
        if (X.ba) X.ba.style.width = (100 - 96 * E.inOut(seg(t, 14.0, 14.9))).toFixed(1) + '%';
        jelly(X.save, t, [15.6]);

        /* --- crop --- */
        const cq = E.inOut(seg(t, 20.37, 21.4));
        set(X.cimg, { x: -70 * cq });
        const fr = E.spring(seg(t, 19.7, 20.5));
        set(X.cfr, { s: 0.6 + 0.4 * fr, o: seg(t, 19.7, 19.9) });
        jelly(X.cdone, t, [22.6]);

        /* --- privacy --- */
        const found = t >= 25.9, removed = seg(t, 27.95, 28.5);
        txt(X.pl, found ? `${D.place.city}, ${D.place.country}` : 'Looking…');
        const pinDrop = E.outBack(seg(t, 25.9, 26.4));
        const rub = t > 27.95 && t < 28.5 ? Math.sin(t * 40) * 3 : 0;
        set(X.pin, { y: -50 * (1 - pinDrop), x: rub, s: 1 - 0.9 * removed, o: seg(t, 25.9, 26.05) * (1 - removed) });
        set(X.wv, { o: found ? 1 - seg(t, 27.95, 28.2) : 0 });
        const okq = seg(t, 28.2, 28.55); set(X.okv, { s: 0.9 + 0.1 * E.outBack(okq), o: okq });
        txt(X.rml, t < 28.0 ? 'Remove the place' : 'Save safe copy'); cls(X.rm, 'off', !found); jelly(X.rm, t, [27.6]);
        if (X.map) X.map.style.filter = removed > 0 ? `saturate(${1 - 0.7 * removed})` : '';
        if (app) { const w5 = A.win(t, 28.5, 30.0, 0.2, 0.25); set(L.privT, { y: (1 - E.outBack(Math.min(1, w5))) * 24, o: w5 }); }

        /* --- gif --- */
        const made = t >= 34.3, making = t > 33.1 && t < 34.3;
        const fi = Math.floor(t * 12) % 12;
        X.vid.style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 12) % 5) : fi);
        const hq = E.inOut(seg(t, 31.62, 32.4));
        const Lp = 3 / 12, Rp = (8 - hq) / 12;
        X.selw.style.left = (Lp * 100) + '%'; X.selw.style.width = ((Rp - Lp) * 100) + '%';
        X.hL.style.left = `calc(18px + (100% - 36px) * ${Lp} - 14px)`; X.hR.style.left = `calc(18px + (100% - 36px) * ${Rp} - 14px)`;
        txt(X.sl, made ? 'Your GIF' : making ? 'Making your GIF' : 'Pick the part you like');
        const mp = seg(t, 33.15, 34.2);
        txt(X.sv, made ? `${D.video.size} · ${D.video.fps} fps · ${D.video.frames} frames` : making ? `${Math.round(mp * D.video.frames)} of ${D.video.frames} pictures` : hq > 0.5 ? `${D.video.from} to ${D.video.to} · ${D.video.clip}` : '0:04 to 0:08 · 4.0 s');
        set(X.gm, { o: making ? 1 : 0 }); X.gm.style.display = making ? '' : 'none'; X.gmi.style.width = `calc(${(mp * 100).toFixed(1)}% - 6px)`;
        txt(X.mkl, made ? 'Save GIF' : 'Make GIF'); cls(X.mk, 'off', making); jelly(X.mk, t, [33.0, 35.2]);
        txt(X.vb, made ? `GIF · ${D.video.size} · loops` : `${D.video.file}${app ? ' · ' + D.video.len : ''}`);
        if (app) { const w4 = A.win(t, 35.35, 36.2, 0.2, 0.2); set(q('.gif .toast'), { y: (1 - E.outBack(Math.min(1, w4))) * 24, o: w4 }); }
        const crank = making ? (t - 33.1) * 14 : 0;
        if (X.ck) attr(X.ck, 'transform', `rotate(${(crank * 57.3).toFixed(1)} 8 50)`); if (X.rl) attr(X.rl, 'transform', `rotate(${(crank * 40).toFixed(1)} 24 18)`); if (X.rl2) attr(X.rl2, 'transform', `rotate(${(crank * 40).toFixed(1)} 54 16)`);
        if (app) {
          const pv = A.win(t, 32.9, 34.6, 0.3, 0.3);
          set(L.proj, { x: 116 + 4, y: 128, s: 0.6 + 0.4 * E.spring(seg(t, 32.9, 33.5)), o: pv });
          set(L.beam, { o: making ? 0.9 * Math.min(1, seg(t, 33.1, 33.4)) : 0 });
        } else {
          const pv = A.win(t, 30.9, 36.3, 0.3, 0.3);
          set(L.proj, { x: 170, y: 556, s: 2.0 * (0.6 + 0.4 * E.spring(seg(t, 30.9, 31.6))), o: pv });
          set(L.beam, { o: making ? 0.9 * Math.min(1, seg(t, 33.1, 33.4)) : 0 });
        }

        /* --- toasts (app) and done --- */
        if (app) {
          const w1 = A.win(t, 15.75, 17.3, 0.2, 0.25); set(q('.res .toast'), { y: (1 - E.outBack(Math.min(1, w1))) * 24, o: w1 });
          const w2 = A.win(t, 22.75, 24.2, 0.2, 0.25); set(q('.ce .toast'), { y: (1 - E.outBack(Math.min(1, w2))) * 24, o: w2 }); set(q('.ce .ctag'), { o: 1 - Math.min(1, w2 * 3) });
                  }
        X.scs.forEach((c, i) => { const a = 36.4 + i * 0.22, p = E.outBack(seg(t, a, a + 0.55)); set(c, { s: 0.4 + 0.6 * p, r: (1 - p) * 14 + [-2, 1.5, 1, -1.5][i], o: seg(t, a, a + 0.12) }); });
        X.sks.forEach(k => { const four = t >= 37.2; const txtv = k.classList.contains('sk2') ? (web ? (four ? '4-day streak' : '3-day streak') : (four ? '4 days' : '3 days')) : (web ? (four ? '4-day streak' : '3-day streak') : (four ? '4' : '3')); txt(k, txtv); });
        qa('.flame').forEach(f => { const d = t - 37.2; f.style.transform = d > 0 && d < 0.8 ? `scale(${(1 + 0.25 * Math.exp(-5 * d) * Math.cos(14 * d)).toFixed(3)})` : ''; });
        jelly(X.saveall, t, [38.2]); txt(q('.sal'), t < 38.35 ? 'Save all 4' : web ? 'All 4 saved' : '4 files saved to Gallery'); cls(X.saveall, 'sec', t >= 38.35);
        fin.update(t - 36.3);

        /* --- Pip --- */
        let p = hopPose(t, spots);
        p.t = t; p.aL = -38 + Math.sin(t * 2.2) * 4; p.aR = -38 + Math.sin(t * 2.2 + 1) * 4; p.mouth = 'sm'; p.lx = 0; p.ly = 0;
        p.hat = t > 25.0 && t < 30.4; p.mag = t > 25.1 && t < 27.8; p.era = t >= 27.8 && t < 29.3; p.party = t > 36.1;
        if (t < 0.75) { const fq = E.in(seg(t, 0.15, 0.75)); p.air = (1 - fq) * 700; p.o = seg(t, 0.15, 0.25); p.sy = 1.12; p.sx = 0.92; p.mouth = 'o'; }
        const wave = (a, b, arm = 'aR') => { if (t > a && t < b) { const k = Math.min(seg(t, a, a + 0.2), 1 - seg(t, b - 0.2, b)); p[arm] = A.lerp(p[arm], 110 + Math.sin(t * 15) * 22, k); p.mouth = 'op'; } };
        wave(1.2, 2.3); wave(3.0, 3.8);
        if (t > 6.6 && t < 7.4 && app) { p.mouth = 'op'; p.aL = p.aR = 70; p.air += Math.sin(Math.PI * seg(t, 6.6, 7.0)) * 8; }
        if (web && t > 5.9 && t < 7.2) { const k = Math.min(seg(t, 5.9, 6.2), 1 - seg(t, 7.0, 7.2)); p.aL = A.lerp(p.aL, 95, k); p.aR = A.lerp(p.aR, 95, k); p.mouth = t < 6.8 ? 'o' : 'op'; p.ly = -4 * k; if (t > 6.8) { const d = t - 6.8; const dec = Math.exp(-6 * d) * Math.cos(15 * d); p.sy -= 0.18 * dec; p.sx += 0.14 * dec; } }
        if (t >= 10.9 && t < 13.5) {
          p.y = photoTop; p.mouth = 'o'; p.ly = 4;
          stomps.forEach((s, i) => { const a = i === 0 ? 11.0 : stomps[i - 1]; if (t >= a && t < s) { const k = seg(t, a, s); p.air = Math.sin(Math.PI * k) * (web ? 70 : 48); p.sy = 1 + 0.12 * Math.sin(Math.PI * k); p.sx = 1 - 0.08 * Math.sin(Math.PI * k); p.aL = p.aR = 60 * Math.sin(Math.PI * k); } });
          if (sIdx > 0) { const d = t - stomps[sIdx - 1]; if (d < 0.5) { const dec = Math.exp(-7 * d) * Math.cos(16 * d); p.sy -= 0.22 * dec; p.sx += 0.16 * dec; } }
          if (t > 13.0) p.mouth = 'op';
        }
        if (t > 13.8 && t < 14.8) { const k = Math.min(seg(t, 13.8, 14.0), 1 - seg(t, 14.6, 14.8)); p.aL = A.lerp(p.aL, 100, k); p.aR = A.lerp(p.aR, 100, k); p.mouth = 'op'; }
        if (t > 15.75 && t < 16.6) { const k = seg(t, 15.75, 16.25); p.air += Math.sin(Math.PI * k) * (app ? 8 : 34); p.aL = p.aR = 90; p.mouth = 'op'; }
        if (t > 19.6 && t < 24.3) { const k = Math.min(seg(t, 19.6, 20.0), 1 - seg(t, 24.0, 24.3)); p.aR = A.lerp(p.aR, web ? 62 : 70, k); p.aL = A.lerp(p.aL, -20, k); p.lx = 3; p.ly = -4; if (t > 22.75) p.mouth = 'op'; }
        if (p.mag) { p.aR = 75 + Math.sin(t * 3.2) * 14; p.lx = 3 * Math.sin(t * 3.2); p.ly = -4; p.mouth = t > 25.9 && t < 26.8 ? 'op' : 'o'; }
        if (p.era) { const k = t < 28.6 ? 1 : 1 - seg(t, 28.6, 29.2); p.aR = A.lerp(p.aR, 62 + Math.sin(t * 38) * 14, k); p.mouth = 'o'; p.ly = -3; }
        if (t > 28.6 && t < 29.6) p.mouth = 'op';
        if (making) { p.aR = (app ? 30 : 10) + Math.sin(crank) * 34; p.mouth = 'o'; p.lx = 3; }
        if (t > 34.3 && t < 35.0) { p.mouth = 'op'; p.aL = 90; }
        if (t > 35.35 && t < 36.0) { p.air += Math.sin(Math.PI * seg(t, 35.35, 35.8)) * (app ? 8 : 30); p.mouth = 'op'; }
        if (t > 36.1) { const k = seg(t, 36.1, 36.4); p.aL = A.lerp(p.aL, 100 + Math.sin(t * 9) * 18, k); p.aR = A.lerp(p.aR, 100 + Math.sin(t * 9 + 2) * 18, k); p.mouth = 'op'; p.air += Math.abs(Math.sin((t - 36.3) * 4.5)) * (app ? 7 : 18) * k; }
        drawPip(p);

        if (app) runBubble(t, lines.map(l => l));
        else runBubble(t, lines);
        if (app && t < 2.4) { /* bubble belongs to the splash */ }
        bub.style.zIndex = 45;
      },
    };
  },
});

/* Style 7 — Sticker Pop. Neo-brutalist sticker board: thick outlines, hard shadows, stamps. */
ISK.register({
  id: 'sticker',
  order: 7,
  name: 'Sticker Pop',
  tagline: 'Loud stickers, one big button.',
  concept: 'A neo-brutalist sticker board for students and creators. Every tool is a chunky sticker card with a thick black outline and a hard shadow. Results slap onto the screen, get stamped, and end up pinned to your board like polaroids. It is loud, yet every screen has one big obvious button.',
  wins: [
    'Nothing in the photo tool space looks like this, so people share screenshots of it.',
    'Stamps such as "196 KB!" and "SAFE!" make each finished task feel like a small win.',
    'Big cards, plain words and one main button per screen keep it easy for first-timers.',
  ],
  risks: [
    'The loud look can tire older users and may feel childish for work tasks.',
    'Tilted cards and stamps need care so text stays readable on small phones.',
  ],
  scores: { simple: 4, fun: 5, wow: 4, effort: 3 },
  palette: ['#FFE24A', '#FF4FA3', '#3D5AFE', '#3DDC97', '#FFFFFF', '#0A0A0A'],
  type: 'Dela Gothic One for big, short, loud words. Familjen Grotesk for clear body text and numbers.',
  motion: 'Stickers slap on at 1.4x with a twist and overshoot, stamps hit with a 3 px shake, and a ticker scrolls along the top.',
  notes: {
    intro: 'Brand words slap onto a lemon poster one by one, then the tool stickers land on a grid board.',
    pick: 'A chunky photo grid on the phone. On the web, the file is dragged from the desktop onto a big DROP IT zone.',
    shrink: 'A giant number counts 4.8 MB down to 196 KB beside a striped bar, then a "196 KB!" stamp hits the photo.',
    crop: 'A thick black 4:5 frame with a pink "4:5" sticker. The user drags the photo and a READY stamp lands.',
    privacy: 'The place card says PUNE, INDIA beside a map sticker. One big REMOVE PLACE button, then a SAFE stamp.',
    gif: 'A film-strip sticker with lemon trim handles. The finished GIF becomes a looping sticker.',
    done: 'All four results are pinned like polaroids. One Ad sticker sits below them, clearly labelled.',
  },
  statusBar: (t, mode) => (mode === 'app' && t >= 17.95 && t < 24.05 ? 'light' : 'dark'),
  css: `
.st-sticker{--y:#FFE24A;--pk:#FF4FA3;--bl:#3D5AFE;--mn:#3DDC97;--k:#0A0A0A;--gl:rgba(10,10,10,.075);background-color:#fff;color:var(--k);font-family:"Familjen Grotesk",system-ui,sans-serif;font-size:17px;line-height:1.3}
.st-sticker .D{font-family:"Dela Gothic One","Arial Black",system-ui,sans-serif;font-weight:400;letter-spacing:.01em;line-height:1.04}
.st-sticker.gr,.st-sticker .gr{background-image:linear-gradient(var(--gl) 1.5px,transparent 1.5px),linear-gradient(90deg,var(--gl) 1.5px,transparent 1.5px);background-size:26px 26px}
.st-sticker .pg{position:absolute;inset:0;padding:92px 18px 34px;display:flex;flex-direction:column;gap:14px;background-color:#fff}
.st-sticker.m-web .pg{padding:24px 28px 28px;gap:16px}
.st-sticker .y{background-color:var(--y)}.st-sticker .pk{background-color:var(--pk)}.st-sticker .bl{background-color:var(--bl)}.st-sticker .mn{background-color:var(--mn)}
.st-sticker .sk{background-color:#fff;border:3px solid var(--k);border-radius:16px;box-shadow:6px 6px 0 var(--k)}
.st-sticker .c-y{background-color:var(--y)}.st-sticker .c-pk{background-color:var(--pk)}.st-sticker .c-bl{background-color:var(--bl);color:#fff}.st-sticker .c-mn{background-color:var(--mn)}
.st-sticker .tick{position:absolute;left:0;right:0;top:46px;height:32px;background:var(--k);overflow:hidden;z-index:500}
.st-sticker.m-web .tick{top:0;height:36px}
.st-sticker .tk{position:absolute;left:0;top:0;height:100%;display:flex;align-items:center;white-space:nowrap;color:var(--y);font-size:15px}
.st-sticker .tu{display:flex;align-items:center;gap:16px;padding-right:16px;flex:none}
.st-sticker .tu i{width:12px;height:12px;border-radius:50%;border:2px solid #fff;flex:none}
.st-sticker .hd{display:flex;justify-content:space-between;align-items:center;flex:none;height:48px}
.st-sticker .bk{width:48px;height:48px;display:grid;place-items:center;border-radius:14px;background:#fff;border:3px solid var(--k);box-shadow:4px 4px 0 var(--k)}
.st-sticker .tg{display:flex;align-items:center;gap:8px;font-size:17px;padding:8px 14px;border-radius:12px;background:#fff;border:3px solid var(--k);box-shadow:4px 4px 0 var(--k);rotate:-2deg}
.st-sticker .stp{font-size:14px;padding:8px 14px;border-radius:999px;background:#fff;border:3px solid var(--k);box-shadow:3px 3px 0 var(--k);rotate:2deg}
.st-sticker .ttl{font-size:34px;margin:0;flex:none}
.st-sticker.m-web .ttl{font-size:42px}
.st-sticker .bl .ttl{color:#fff;text-shadow:3px 3px 0 var(--k)}
.st-sticker .hey{align-self:flex-start;background:var(--pk);padding:6px 12px;border:3px solid var(--k);border-radius:10px;box-shadow:4px 4px 0 var(--k);rotate:-4deg;font-size:16px;flex:none}
.st-sticker .btn{height:68px;flex:none;border-radius:18px;background:var(--pk);border:3px solid var(--k);box-shadow:6px 6px 0 var(--k);display:flex;align-items:center;justify-content:center;gap:12px;font-size:23px;white-space:nowrap}
.st-sticker .btn.yb{background:var(--y)}
.st-sticker .btn.off{background:#fff;color:#8c8c8c;border-style:dashed;box-shadow:none}
.st-sticker .is-pressed{translate:5px 5px;box-shadow:1px 1px 0 var(--k) !important}
.st-sticker .kbd{font:600 12px/1.2 "JetBrains Mono",monospace;padding:3px 7px;border:2px solid currentColor;border-radius:7px;opacity:.75;letter-spacing:0;white-space:nowrap}
.st-sticker .foot{margin-top:auto;display:flex;flex-direction:column;gap:14px;flex:none}
.st-sticker .stamp{position:absolute;z-index:6;padding:9px 16px;border:4px solid currentColor;border-radius:12px;color:#E0157A;background:#fff;font-size:26px;box-shadow:inset 0 0 0 3px #fff,inset 0 0 0 6px currentColor,5px 5px 0 var(--k);white-space:nowrap;pointer-events:none;line-height:1}
.st-sticker .stamp.g{color:#0E8F57}.st-sticker .stamp.b{color:var(--bl)}
.st-sticker .bw{position:relative;flex:none}
.st-sticker .toast{position:absolute;inset:-3px -6px;z-index:8;white-space:nowrap;background:var(--k);color:var(--y);border:3px solid var(--k);border-radius:18px;padding:0 16px;font-size:20px;display:flex;gap:10px;align-items:center;justify-content:center;box-shadow:6px 6px 0 var(--mn);rotate:-2deg}
.st-sticker .tiles{display:grid;grid-template-columns:1fr 1fr;gap:16px 14px}
.st-sticker .tile{position:relative;min-height:148px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:8px}
.st-sticker .tile .tic{width:50px;height:50px;border-radius:50%;background:#fff;color:var(--k);border:3px solid var(--k);display:grid;place-items:center}
.st-sticker .tile b{font-size:21px;display:block}
.st-sticker .tile span{font-size:15px;font-weight:600;line-height:1.2;display:block;margin-top:3px}
.st-sticker .tile .kbd{position:absolute;right:10px;top:10px}
.st-sticker .t1{rotate:-2deg}.st-sticker .t2{rotate:1.5deg}.st-sticker .t3{rotate:1deg}.st-sticker .t4{rotate:-1.5deg}.st-sticker .t5{rotate:-1deg}.st-sticker .t6{rotate:2deg}
.st-sticker .tile.on{translate:-3px -3px;box-shadow:10px 10px 0 var(--k)}
.st-sticker .tile.on .tic{background:var(--k);color:#fff}
.st-sticker .safe{display:flex;gap:12px;align-items:center;padding:12px 14px;background:var(--mn);font-size:16px;font-weight:700;line-height:1.25}
.st-sticker .safe .D{font-size:15px;background:#fff;border:3px solid var(--k);border-radius:50%;width:62px;height:62px;display:grid;place-items:center;flex:none;rotate:-10deg}
.st-sticker .lbl{font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin:0}
.st-sticker .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.st-sticker .th{aspect-ratio:1;border:3px solid var(--k);border-radius:12px;background-size:cover;background-position:center;position:relative}
.st-sticker .th.sel{outline:5px solid var(--pk);outline-offset:2px}
.st-sticker .ck{position:absolute;right:-10px;top:-10px;width:40px;height:40px;border-radius:50%;background:var(--y);border:3px solid var(--k);display:grid;place-items:center;box-shadow:3px 3px 0 var(--k)}
.st-sticker .tip{font-size:16px;font-weight:600;display:flex;gap:8px;align-items:center}
.st-sticker .drop{position:relative;flex:1;border:4px dashed var(--k);border-radius:20px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center}
.st-sticker .drop.hot{background:var(--y);border-style:solid}
.st-sticker .dic{width:88px;height:88px;border-radius:50%;background:var(--pk);border:3px solid var(--k);box-shadow:5px 5px 0 var(--k);display:grid;place-items:center;rotate:-6deg}
.st-sticker .drop b{font-size:44px}
.st-sticker .drop span{font-size:18px;font-weight:600;display:flex;gap:8px;align-items:center}
.st-sticker .pol{position:relative;background:#fff;border:3px solid var(--k);box-shadow:6px 6px 0 var(--k);padding:10px 10px 0;border-radius:6px;display:flex;flex-direction:column;flex:none}
.st-sticker .pol i{display:block;border:3px solid var(--k);background-size:cover;background-position:center}
.st-sticker .pol em{font-style:normal;font-weight:700;font-size:15px;padding:7px 2px 9px;white-space:nowrap}
.st-sticker .dropped{position:absolute;left:50%;top:50%;width:230px;margin:-150px 0 0 -115px;rotate:-3deg;z-index:2}
.st-sticker .dropped i{height:220px}
.st-sticker .fc{position:absolute;left:0;top:0;width:200px;z-index:950;background:#fff;border:3px solid var(--k);border-radius:10px;padding:8px;box-shadow:8px 8px 0 rgba(10,10,10,.35);display:flex;flex-direction:column;gap:6px}
.st-sticker .fc i{height:120px;border-radius:6px;border:2px solid var(--k);background-size:cover;background-position:center}
.st-sticker .fc span{font-size:14px;font-weight:700}
.st-sticker .pchip{display:flex;align-items:center;gap:12px;padding:8px 12px 8px 8px;flex:none;border-radius:14px;box-shadow:4px 4px 0 var(--k)}
.st-sticker .pchip i{width:50px;height:50px;border-radius:9px;border:2px solid var(--k);background-size:cover;background-position:center;flex:none}
.st-sticker .pchip b{display:block;font-size:16px}.st-sticker .pchip span{font-size:14px;font-weight:600}
.st-sticker .opts{display:flex;flex-direction:column;gap:12px}
.st-sticker.m-web .crops{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.st-sticker .opt{position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px;min-height:72px;border-radius:14px;box-shadow:4px 4px 0 var(--k)}
.st-sticker.m-web .crops .opt{min-height:84px}
.st-sticker.m-web .opt{min-height:78px}
.st-sticker .opt b{font-size:18px;display:block;font-weight:700;line-height:1.15}
.st-sticker .opt span{font-size:15px;font-weight:600;opacity:.75}
.st-sticker .opt .sz{margin-left:auto;font-size:13px;padding:6px 10px;border:3px solid var(--k);border-radius:999px;background:var(--y);white-space:nowrap;opacity:1;flex:none}
.st-sticker .opt.on{background:var(--pk)}
.st-sticker .opt .ok{position:absolute;right:-10px;top:-14px;width:38px;height:38px;border-radius:50%;background:var(--y);border:3px solid var(--k);display:grid;place-items:center;box-shadow:3px 3px 0 var(--k)}
.st-sticker .crops .opt{min-height:70px;padding:8px 14px}
.st-sticker .ratio{width:44px;height:44px;display:grid;place-items:center;flex:none}
.st-sticker .ratio i{display:block;border:3px solid var(--k);border-radius:4px;background:var(--y)}
.st-sticker .wrow{display:flex;flex-direction:column;align-items:center;gap:18px}
.st-sticker.m-web .wrow{flex-direction:row;align-items:center;gap:34px;flex:1}
.st-sticker .pw{width:220px;rotate:-3deg}.st-sticker .pw i{height:226px}
.st-sticker.m-web .pw{width:232px}.st-sticker.m-web .pw i{height:270px}
.st-sticker.m-web .chips{flex-wrap:wrap}.st-sticker.m-web .wcol .slot{height:84px}
.st-sticker .s1{right:-40px;bottom:64px;rotate:-12deg}
.st-sticker .wcol{display:flex;flex-direction:column;gap:12px;align-self:stretch}
.st-sticker.m-web .wcol{flex:1;align-self:center}
.st-sticker .from{font-size:20px;font-weight:700;text-decoration:line-through 3px;height:24px}
.st-sticker .bign{font-size:60px;white-space:nowrap}
.st-sticker.m-web .bign{font-size:58px}
.st-sticker .cbar{height:30px;border:3px solid var(--k);border-radius:999px;background:#fff;overflow:hidden;box-shadow:4px 4px 0 var(--k);flex:none}
.st-sticker .cbar i{display:block;height:100%;width:0;background:repeating-linear-gradient(-45deg,var(--pk) 0 12px,#FF9ACB 12px 24px);border-right:3px solid var(--k)}
.st-sticker .slot{position:relative;height:40px}
.st-sticker .slot>*{position:absolute;left:0;right:0;top:0}
.st-sticker .wtxt{font-size:17px;font-weight:700;padding-top:6px}
.st-sticker .chips{display:flex;gap:8px;flex-wrap:nowrap}
.st-sticker .chips span{font-size:14px;font-weight:700;padding:6px 10px;border:3px solid var(--k);border-radius:999px;background:#fff;white-space:nowrap;display:flex;gap:4px;align-items:center}
.st-sticker .chips .ok{background:var(--mn)}
.st-sticker .crow{display:flex;flex-direction:column;gap:16px;flex:1}
.st-sticker.m-web .crow{flex-direction:row;gap:28px}
.st-sticker .cropbox{position:relative;height:430px;overflow:hidden;background:#222;flex:none}
.st-sticker.m-web .cropbox{width:330px;height:452px}
.st-sticker .cimg{position:absolute;left:50%;top:50%;width:540px;height:470px;margin:-235px 0 0 -270px;background-size:cover;background-position:center}
.st-sticker .cframe{position:absolute;left:50%;top:50%;width:272px;height:340px;margin:-170px 0 0 -136px;border:6px solid var(--k);box-shadow:0 0 0 999px rgba(255,255,255,.6);background:linear-gradient(#0A0A0A55,#0A0A0A55) 33.3% 0/2px 100% no-repeat,linear-gradient(#0A0A0A55,#0A0A0A55) 66.6% 0/2px 100% no-repeat,linear-gradient(#0A0A0A55,#0A0A0A55) 0 33.3%/100% 2px no-repeat,linear-gradient(#0A0A0A55,#0A0A0A55) 0 66.6%/100% 2px no-repeat}
.st-sticker .cc{position:absolute;width:20px;height:20px;background:var(--y);border:3px solid var(--k)}
.st-sticker .cc.a{left:-13px;top:-13px}.st-sticker .cc.b{right:-13px;top:-13px}.st-sticker .cc.c{left:-13px;bottom:-13px}.st-sticker .cc.d{right:-13px;bottom:-13px}
.st-sticker .r45{position:absolute;left:calc(50% + 92px);top:calc(50% - 206px);width:72px;height:72px;border-radius:50%;background:var(--pk);border:3px solid var(--k);box-shadow:4px 4px 0 var(--k);display:grid;place-items:center;font-size:22px;z-index:4}
.st-sticker .ctag{position:absolute;left:12px;bottom:12px;background:#fff;border:3px solid var(--k);border-radius:10px;padding:5px 10px;font-size:14px;font-weight:700;box-shadow:3px 3px 0 var(--k);z-index:4}
.st-sticker .s2{left:50%;top:44%;translate:-50% 0;rotate:-10deg}
.st-sticker .ccol{display:flex;flex-direction:column;gap:16px;flex:1}
.st-sticker .hint{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:700;padding:10px 14px;border-radius:14px;box-shadow:4px 4px 0 var(--k)}
.st-sticker .pinfo{padding:14px;display:flex;flex-direction:column;gap:6px;font-size:15px;font-weight:600}
.st-sticker .pinfo b{font-size:20px}
.st-sticker .keys{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:14px;font-weight:700;color:#fff}.st-sticker .keys>span{white-space:nowrap;display:flex;gap:6px;align-items:center}.st-sticker .keys em{font-style:normal}
.st-sticker .pgrid{display:flex;flex-direction:column;gap:16px;flex:1}
.st-sticker.m-web .pgrid{display:grid;grid-template-columns:250px 1fr;gap:30px}
.st-sticker .prow{position:relative;display:flex;gap:16px;align-items:flex-start;flex:none}
.st-sticker.m-web .prow{flex-direction:column;gap:24px}
.st-sticker .pp{width:160px;rotate:-3deg}.st-sticker .pp i{height:116px}
.st-sticker.m-web .pp{width:230px}.st-sticker.m-web .pp i{height:150px}
.st-sticker .map{position:relative;flex:1;height:160px;overflow:hidden;rotate:2.5deg;margin-top:6px}
.st-sticker.m-web .map{flex:none;width:236px;height:190px}
.st-sticker .map svg{position:absolute;inset:0;width:100%;height:100%}
.st-sticker .mpin{position:absolute;left:50%;top:50%;width:52px;height:52px;margin:-50px 0 0 -26px}
.st-sticker .mpin svg{position:static}
.st-sticker .s3{right:-4px;top:92px;rotate:-12deg;font-size:30px}
.st-sticker.m-web .s3{right:6px;top:150px}
.st-sticker .pcol{display:flex;flex-direction:column;gap:16px;flex:1}
.st-sticker .place{display:flex;gap:12px;align-items:center;padding:14px}
.st-sticker .pi{width:52px;height:52px;border-radius:50%;background:var(--pk);border:3px solid var(--k);display:grid;place-items:center;flex:none}
.st-sticker .place b{font-size:28px;display:inline-block;position:relative;margin-bottom:4px}
.st-sticker.m-web .place b{font-size:34px}
.st-sticker .strike{position:absolute;left:-4px;right:-4px;top:50%;height:6px;margin-top:-3px;background:var(--k);transform-origin:0 50%}
.st-sticker .place span{display:block;font-size:15px;font-weight:600}
.st-sticker .swap{position:relative;height:92px;flex:none}
.st-sticker .swap>div{position:absolute;inset:0;display:flex;gap:12px;align-items:center;padding:12px 14px;font-size:16px;font-weight:600;line-height:1.25}
.st-sticker .swap b{display:block;font-size:16px;margin-bottom:3px}
.st-sticker .warn{background:var(--y) !important}
.st-sticker .vid{position:relative;height:240px;background-size:cover;background-position:center;flex:none}
.st-sticker.m-web .vid{height:280px}
.st-sticker .vid.made{border:8px solid #fff;outline:3px solid var(--k)}
.st-sticker .vlab{position:absolute;left:10px;top:10px;background:var(--k);color:#fff;border-radius:8px;padding:5px 10px;font-size:14px;font-weight:700}
.st-sticker .gifb{position:absolute;right:-12px;top:-16px;background:var(--pk);border:3px solid var(--k);border-radius:10px;padding:6px 10px;font-size:20px;box-shadow:3px 3px 0 var(--k);rotate:10deg}
.st-sticker .loop{position:absolute;left:-12px;bottom:-16px;background:var(--y);border:3px solid var(--k);border-radius:999px;padding:7px 14px;font-size:18px;box-shadow:3px 3px 0 var(--k)}
.st-sticker .film{position:relative;height:84px;background:var(--k);border-radius:10px;padding:15px 8px;rotate:-1.2deg;box-shadow:0 0 0 4px #fff,6px 6px 0 4px var(--k);flex:none;margin:4px 4px 0}
.st-sticker .film::before,.st-sticker .film::after{content:"";position:absolute;left:8px;right:8px;height:6px;background:repeating-linear-gradient(90deg,#fff 0 9px,transparent 9px 18px)}
.st-sticker .film::before{top:4px}.st-sticker .film::after{bottom:4px}
.st-sticker .frames{position:relative;display:flex;gap:3px;height:100%}
.st-sticker .frames i{flex:1;background-size:cover;background-position:center;border-radius:3px}
.st-sticker .dim{position:absolute;top:15px;bottom:15px;background:rgba(10,10,10,.6)}
.st-sticker .selw{position:absolute;top:-6px;bottom:-6px;border:5px solid var(--y);border-radius:8px}
.st-sticker .hh{position:absolute;top:50%;width:22px;height:64px;margin-top:-32px;border-radius:7px;background:var(--y);border:3px solid var(--k)}
.st-sticker .hh::after{content:"";position:absolute;left:6px;top:16px;width:4px;height:26px;border-radius:2px;background:var(--k)}
.st-sticker .hL{left:-14px}.st-sticker .hR{right:-14px}
.st-sticker .gbot{display:flex;flex-direction:column;gap:16px;flex:1}
.st-sticker.m-web .gbot{flex-direction:row;align-items:flex-end;gap:24px}
.st-sticker .gslot{position:relative;height:56px;flex:none}
.st-sticker.m-web .gslot{flex:1;margin-bottom:6px}
.st-sticker .gslot>*{position:absolute;left:0;top:0}
.st-sticker .tchip{display:flex;align-items:center;gap:10px;padding:9px 14px;font-size:17px;font-weight:700;border-radius:14px;box-shadow:4px 4px 0 var(--k);white-space:nowrap}
.st-sticker .tchip b{font-size:20px;background:var(--y);border:3px solid var(--k);border-radius:8px;padding:2px 8px}
.st-sticker .gprog{right:0;display:flex;flex-direction:column;gap:6px}
.st-sticker .gprog .cbar{height:26px}
.st-sticker .gt{font-size:15px;font-weight:700}
.st-sticker.m-web .gbot .foot{width:230px}
.st-sticker .pin{position:relative;background:#fff;border:3px solid var(--k);border-radius:6px;box-shadow:5px 5px 0 var(--k);padding:8px;display:flex;flex-direction:column;gap:2px}
.st-sticker .pin i{display:block;height:112px;border:3px solid var(--k);background-size:cover;background-position:center;margin-bottom:5px}
.st-sticker .pin b{font-size:15px;white-space:nowrap}
.st-sticker .pin span{font-size:14px;font-weight:600;white-space:nowrap}
.st-sticker .tape{position:absolute;top:-13px;left:50%;width:64px;height:22px;margin-left:-32px;background:rgba(255,226,74,.9);border:2px solid var(--k);rotate:-5deg}
.st-sticker .pn0{rotate:-3deg}.st-sticker .pn1{rotate:2.5deg}.st-sticker .pn2{rotate:2deg}.st-sticker .pn3{rotate:-2deg}
.st-sticker .pn1 .tape{background:rgba(255,79,163,.85)}.st-sticker .pn2 .tape{background:rgba(61,220,151,.9)}.st-sticker .pn3 .tape{background:rgba(61,90,254,.8)}
.st-sticker .board{display:grid;grid-template-columns:1fr 1fr;gap:20px 16px;flex:none;margin-top:4px}
.st-sticker .dtop{position:relative;flex:none}
.st-sticker .sd{right:0;top:-4px;rotate:10deg;font-size:24px}
.st-sticker .promise{display:flex;gap:10px;align-items:center;padding:11px 14px;font-size:16px;font-weight:700;background:var(--mn);border-radius:14px;box-shadow:4px 4px 0 var(--k);flex:none}
.st-sticker .ad{display:flex;gap:12px;align-items:center;border:3px dashed var(--k);border-radius:16px;padding:10px 12px;background:#fff;flex:none}
.st-sticker .ad .adi{width:52px;height:52px;border-radius:10px;background:#E4E4E4;border:2px solid #BDBDBD;flex:none}
.st-sticker .ad .adl{font:700 12px/1 "Familjen Grotesk",sans-serif;letter-spacing:.06em;background:var(--k);color:#fff;border-radius:6px;padding:4px 7px;flex:none;align-self:flex-start}
.st-sticker .ad b{display:block;font-size:15px}.st-sticker .ad span{font-size:14px;color:#555;font-weight:600}
.st-sticker .stats{display:flex;gap:18px}
.st-sticker .stats>div{flex:1;padding:14px 16px;display:flex;flex-direction:column;gap:4px}
.st-sticker .stats b{font-size:28px;white-space:nowrap}.st-sticker .stats span{font-size:15px;font-weight:700}
.st-sticker .xl{font-size:64px !important}
.st-sticker .arr.seeb{align-self:flex-end;rotate:3deg;font-size:22px;background:var(--bl);color:#fff;margin-top:6px}
.st-sticker .arr{align-self:flex-start;display:flex;gap:12px;align-items:center;background:var(--y);padding:14px 22px;font-size:28px;rotate:-3deg}
.st-sticker .dh{display:flex;gap:14px;align-items:center;border:3px dashed var(--k);border-radius:16px;padding:18px 20px;font-size:18px;font-weight:700;background:#fff}
.st-sticker .fan{display:flex;justify-content:center;gap:26px;padding:6px 0 0;flex:none}
.st-sticker .fp{position:relative;width:116px;padding:8px;border-radius:8px}
.st-sticker .fp i{display:block;height:104px;border:3px solid var(--k);background-size:cover;background-position:center}
.st-sticker .fp b{position:absolute;right:-14px;bottom:-12px;font-size:15px;padding:5px 9px;border:3px solid var(--k);border-radius:10px;background:var(--y);rotate:-8deg;white-space:nowrap}
.st-sticker .f0{rotate:-6deg}.st-sticker .f1{rotate:4deg}.st-sticker .f2{rotate:-3deg}.st-sticker .f3{rotate:6deg}
.st-sticker .f1 b{background:var(--pk)}.st-sticker .f2 b{background:var(--mn)}.st-sticker .f3 b{background:var(--bl);color:#fff}
.st-sticker .dots{display:flex;gap:16px;margin-top:auto}
.st-sticker .dots>div{padding:12px 16px;font-size:16px;border-radius:14px;box-shadow:4px 4px 0 var(--k)}
.st-sticker .spl{position:absolute;inset:0;background-color:var(--y);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;z-index:5}
.st-sticker.m-web .spl{z-index:900}
.st-sticker .lgb{width:120px;height:120px;border-radius:50%;background:var(--pk);display:grid;place-items:center;margin-bottom:10px}
.st-sticker .w{font-size:54px;padding:8px 20px 6px;border:3px solid var(--k);border-radius:14px;box-shadow:6px 6px 0 var(--k);background:#fff}
.st-sticker.m-web .w{font-size:76px}
.st-sticker .w1{rotate:-5deg}.st-sticker .w2{rotate:4deg;background:var(--bl);color:#fff}.st-sticker .w3{rotate:-3deg;background:var(--pk)}
.st-sticker .ssub{font-size:17px;margin-top:12px;background:var(--k);color:var(--y);padding:9px 16px;border-radius:999px}
.st-sticker .s0{right:34px;top:150px;rotate:14deg}
.st-sticker.m-web .s0{right:300px;top:160px}
.st-sticker .wl{position:absolute;left:24px;top:58px;width:272px;height:676px;display:flex;flex-direction:column;gap:16px}
.st-sticker .brand{display:flex;gap:14px;align-items:center;flex:none}
.st-sticker .brand .lg{width:62px;height:62px;border-radius:50%;background:var(--pk);display:grid;place-items:center;rotate:-6deg;flex:none}
.st-sticker .brand .D{font-size:21px}
.st-sticker .wl .tiles{gap:16px 14px}
.st-sticker .wl .tile{min-height:132px;padding:12px}
.st-sticker .wl .tile .tic{width:42px;height:42px}
.st-sticker .wl .tile b{font-size:17px}.st-sticker .wl .tile span{font-size:13px}
.st-sticker .wl .safe{margin-top:auto;font-size:14px}
.st-sticker .wl .safe .D{width:54px;height:54px;font-size:13px}
.st-sticker .khint{font-size:13px;font-weight:700;display:flex;gap:6px;align-items:center}
.st-sticker .cv{position:absolute;left:320px;top:56px;width:620px;height:680px;overflow:hidden;border-radius:20px}
.st-sticker .bd{position:absolute;left:966px;top:56px;width:290px;height:680px;background-color:var(--y);padding:18px 16px;display:flex;flex-direction:column;gap:14px;border-radius:20px}
.st-sticker .bh{display:flex;justify-content:space-between;align-items:center}
.st-sticker .bh b{font-size:24px}
.st-sticker .cnt{font-size:15px;background:var(--k);color:var(--y);padding:6px 12px;border-radius:999px}
.st-sticker .slots{display:grid;grid-template-columns:1fr 1fr;gap:16px 14px;margin-top:6px}
.st-sticker .slot2{position:relative;height:178px;border:3px dashed rgba(10,10,10,.4);border-radius:10px;display:grid;place-items:center}
.st-sticker .slot2>span{font-size:40px;color:rgba(10,10,10,.18)}
.st-sticker .slot2 .pin{position:absolute;inset:2px;padding:6px}
.st-sticker .slot2 .pin i{height:100px;margin-bottom:4px}
.st-sticker .slot2 .pin b{font-size:11px;letter-spacing:0}.st-sticker .slot2 .pin span{font-size:12px}
.st-sticker .up{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;font-size:15px;font-weight:700;border-radius:14px;box-shadow:4px 4px 0 var(--k);margin-top:6px}
.st-sticker .up b{font-size:16px;color:#0E8F57}
.st-sticker .bnote{font-size:14px;font-weight:600;line-height:1.35}
.st-sticker .sb{left:50%;top:210px;translate:-50% 0;rotate:-12deg;font-size:40px}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web;
    const { seg, ease, set, cls, txt, lerp } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const PH = { por: A.photo('portrait'), mtn: A.photo('mountain'), city: A.photo('city') };
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><g stroke="#0A0A0A" stroke-width="3" stroke-linejoin="round"><path d="M16 30L46 12l5 6-27 13z" fill="#fff"/><path d="M22 44l30 4-1 7-30-4z" fill="#FFE24A"/><rect x="7" y="28" width="46" height="18" rx="9" fill="#3DDC97"/></g><circle cx="16" cy="37" r="3.4" fill="#0A0A0A"/></svg>`;
    const where = web ? 'computer' : 'phone';
    if (web) S.classList.add('gr');

    /* ---- shared bits */
    const TL = [
      ['shrink', 'SHRINK', 'Make it smaller', 'c-y'], ['crop', 'CROP', 'Fit any post', 'c-pk'],
      ['pin', 'PLACE', 'Where was it taken?', 'c-bl'], ['film', 'GIF', 'Video to GIF', 'c-mn'],
      ['convert', 'CONVERT', 'HEIC, JPG, PNG', ''], ['grid', 'ALL TOOLS', 'See them all', ''],
    ];
    const tilesHTML = `<div class="tiles">${TL.map((x, i) => `<div class="tile sk ${x[3]} t${i + 1}"><div class="tic">${I(x[0], web ? 22 : 24, 2.6)}</div><div><b class="D">${x[1]}</b><span>${x[2]}</span></div>${web ? `<em class="kbd">${i + 1}</em>` : ''}</div>`).join('')}</div>`;
    const hdr = (step, tool, ic) => web
      ? `<div class="hd"><div class="tg D">${I(ic, 20, 2.8)}${tool}<span class="kbd">Esc</span></div><div class="stp D">STEP ${step}/3</div></div>`
      : `<div class="hd"><div class="bk">${I('back', 26, 3)}</div><div class="stp D">STEP ${step}/3</div></div>`;
    const RES = [
      [PH.por, 'EXAM PHOTO', `${D.shrink.size} · JPG`], [PH.mtn, 'INSTA POST', D.crop.px],
      [PH.city, 'CITY PHOTO', 'Place removed'], [A.frame(4), 'BEACH GIF', `${D.video.size} · ${D.video.clip}`],
    ];
    const pinHTML = (x, i) => `<div class="pin pn${i}"><span class="tape"></span><i style="background-image:${x[0]}"></i><b class="D">${x[1]}</b><span>${x[2]}</span></div>`;

    /* ---- ticker */
    const tick = A.el('div', 'tick', S);
    const unit = `<div class="tu"><span>NO UPLOAD</span><i style="background:#FF4FA3"></i><span>NO SIGN-UP</span><i style="background:#3DDC97"></i><span>FREE</span><i style="background:#3D5AFE"></i></div>`;
    tick.innerHTML = `<div class="tk D">${unit.repeat(web ? 9 : 4)}</div>`;
    const tk = tick.firstChild, tu = tk.firstChild;

    /* ---- web frame: tools left, canvas centre, board right */
    let host = S, wl, cv, bd;
    if (web) {
      wl = A.el('div', 'wl', S, `<div class="brand"><div class="lg sk">${logo(42)}</div><div class="D">IMAGE<br>SWISS KNIFE</div></div>${tilesHTML}
        <div class="khint"><span class="kbd">1</span>to<span class="kbd">6</span>picks a tool</div>
        <div class="safe sk"><span class="D">SAFE!</span><span>Your files never leave this computer.</span></div>`);
      cv = A.el('div', 'cv sk', S); host = cv;
      bd = A.el('div', 'bd sk gr', S, `<div class="bh"><b class="D">MY BOARD</b><span class="cnt D">0/4</span></div>
        <div class="slots">${RES.map((x, i) => `<div class="slot2"><span class="D">${i + 1}</span>${pinHTML(x, i)}</div>`).join('')}</div>
        <div class="up sk">Uploaded so far<b class="D">0 BYTES</b></div>
        <div class="bnote">Your results stick here as you go. Everything stays in this browser.</div>
        <div class="stamp sb D">DONE!</div>`);
    }
    const pg = (cls, inner, parent = host) => A.el('div', 'pg gr ' + cls, parent, inner);

    /* ---- splash */
    const spl = A.el('div', 'spl gr', S, `<div class="lgb sk">${logo(84)}</div><div class="w w1 D">IMAGE</div><div class="w w2 D">SWISS</div><div class="w w3 D">KNIFE</div>
      <div class="ssub D">ALL ON YOUR ${where.toUpperCase()}</div><div class="stamp s0 D">FREE!</div>`);

    /* ---- home */
    const home = web
      ? pg('home', `<div class="hey D">HEY THERE!</div><h2 class="ttl">WHAT ARE WE<br>MAKING TODAY?</h2>
        <div class="arr sk D">${I('back', 32, 3.2)}PICK A TOOL</div>
        <div class="dh">${I('upload', 30, 2.6)}<span>Or drop a photo or video anywhere on this page.</span><span class="kbd">Ctrl O</span></div>
        <div class="fan">${[[PH.por, D.shrink.size], [PH.mtn, D.crop.ratio], [PH.city, 'SAFE!'], [A.frame(3), 'GIF']].map((x, i) => `<div class="fp sk f${i}"><i style="background-image:${x[0]}"></i><b class="D">${x[1]}</b></div>`).join('')}</div>
        <div class="dots"><div class="sk c-mn D">NO UPLOAD</div><div class="sk c-bl D">NO SIGN-UP</div><div class="sk c-pk D">FREE</div></div>`)
      : pg('home', `<div class="hey D">HEY THERE!</div><h2 class="ttl" style="font-size:42px">PICK A TOOL</h2>${tilesHTML}
        <div class="safe sk" style="margin-top:auto"><span class="D">SAFE!</span><span>Your photos never leave this phone.</span></div>`);

    /* ---- pick */
    const thumbs = [PH.por, PH.mtn, PH.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7), A.photo('abstract', { seed: 4 }), A.photo('mountain', { sun: 0.3 }), A.photo('abstract', { seed: 12 })];
    const pick = pg('pick', `${hdr(1, 'SHRINK', 'shrink')}<h2 class="ttl">${web ? 'ADD A PHOTO' : 'PICK A PHOTO'}</h2>
      ${web ? `<div class="drop"><div class="dic">${I('upload', 40, 2.8)}</div><b class="D">DROP IT!</b><span>or click to choose a file <em class="kbd">Ctrl O</em></span>
          <div class="pol dropped"><i style="background-image:${PH.por}"></i><em>${D.portrait.file} · ${D.portrait.size}</em></div></div>`
        : `<p class="lbl">Recent photos</p><div class="gal">${thumbs.map((b, i) => `<div class="th p${i}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 22, 3.4)}</div>` : ''}</div>`).join('')}</div>`}
      <div class="foot"><div class="btn next off D">NEXT ${I('next', 26, 3)}${web ? '<span class="kbd">Enter</span>' : ''}</div></div>`);
    if (web) A.el('div', 'fc', S, `<i style="background-image:${PH.por}"></i><span>${D.portrait.file}</span>`);

    /* ---- shrink */
    const sz = ['~500 KB', '<200 KB', '<1 MB', 'YOU PICK'];
    const chip = (img, a, b) => `<div class="pchip sk"><i style="background-image:${img}"></i><div><b>${a}</b><span>${b}</span></div></div>`;
    const shrinkQ = pg('shrinkq y', `${hdr(2, 'SHRINK', 'shrink')}<h2 class="ttl">WHAT'S IT FOR?</h2>${chip(PH.por, D.portrait.file, `${D.portrait.size} · ${D.portrait.dims}`)}
      <div class="opts">${D.shrink.options.map((o, i) => `<div class="opt sk o${i}"><div><b>${o.label}</b><span>${o.hint}</span></div><em class="sz D">${sz[i]}</em>${i === 1 ? `<div class="ok">${I('check', 20, 3.4)}</div>` : ''}</div>`).join('')}</div>`);
    const shrinkW = pg('shrinkw y', `${hdr(3, 'SHRINK', 'shrink')}<h2 class="ttl wt">SHRINKING...</h2>
      <div class="wrow"><div class="pol pw"><i style="background-image:${PH.por}"></i><em>${D.portrait.file}</em><div class="stamp s1 D">${D.shrink.size}!</div></div>
      <div class="wcol"><s class="from">${D.portrait.size}</s><b class="bign D">${D.portrait.size}</b><div class="cbar sbar"><i></i></div>
      <div class="slot"><div class="wtxt"></div><div class="chips"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span class="ok">${I('check', 16, 3.4)}under 200 KB</span></div></div></div></div>
      <div class="foot"><div class="bw"><div class="btn save D">${I('save', 26, 3)}SAVE IT${web ? '<span class="kbd">Ctrl S</span>' : ''}</div>
      <div class="toast D">${I('check', 22, 3.4)}SAVED TO ${web ? 'DOWNLOADS' : 'GALLERY'}!</div></div></div>`);

    /* ---- crop */
    const presets = D.crop.presets.filter((p, i) => [0, 1, 2, 4, 5].includes(i));
    const ratioBox = p => { const m = 32, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(9, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const cropQ = pg('cropq bl', `${hdr(2, 'CROP', 'crop')}<h2 class="ttl">WHERE TO POST?</h2>${chip(PH.mtn, 'IMG_1650.JPG', 'Mountain photo · 4000 × 3000')}
      <div class="opts crops">${presets.map((p, i) => `<div class="opt sk c${i}">${ratioBox(p)}<div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div>${i === 0 ? `<div class="ok">${I('check', 20, 3.4)}</div>` : ''}</div>`).join('')}</div>`);
    const cropE = pg('crope bl', `${hdr(3, 'CROP', 'crop')}<h2 class="ttl">MOVE TO FIT</h2>
      <div class="crow"><div class="cropbox sk"><div class="cimg" style="background-image:${PH.mtn}"></div><div class="cframe"><i class="cc a"></i><i class="cc b"></i><i class="cc c"></i><i class="cc d"></i></div>
        <div class="r45 D">${D.crop.ratio}</div><div class="ctag">${D.crop.preset} · ${D.crop.px}</div><div class="stamp s2 b D">READY!</div></div>
      <div class="ccol"><div class="hint sk">${I('crop', 22, 2.6)}Drag the photo to move it.</div>
        ${web ? `<div class="pinfo sk"><b class="D">${D.crop.preset.toUpperCase()}</b><span>${D.crop.ratio} · ${D.crop.px} px</span><span>The black frame is exactly what people will see.</span></div>
        <div class="keys"><span><em class="kbd">Arrows</em> nudge</span><span><em class="kbd">Enter</em> crop</span></div>` : ''}
        <div class="foot"><div class="bw"><div class="btn yb cdone D">${I('crop', 24, 3)}CROP IT</div>
        <div class="toast D">${I('check', 22, 3.4)}SAVED!${web ? '' : ' ' + D.crop.px}</div></div></div></div></div>`);

    /* ---- privacy */
    const mapSVG = `<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice"><rect width="200" height="160" fill="#EEF2FF"/><path d="M-10 120C40 100 70 132 110 112S170 70 210 82" stroke="#3D5AFE" stroke-width="13" fill="none" opacity=".5"/><rect x="16" y="14" width="46" height="32" rx="5" fill="#3DDC97" stroke="#0A0A0A" stroke-width="2.5"/><rect x="140" y="102" width="50" height="38" rx="5" fill="#FFE24A" stroke="#0A0A0A" stroke-width="2.5"/><path d="M0 64h200M84 0v160M0 146h200M156 0l-30 160" stroke="#0A0A0A" stroke-width="12" opacity=".85"/><path d="M0 64h200M84 0v160M0 146h200M156 0l-30 160" stroke="#fff" stroke-width="7"/></svg>`;
    const pinSVG = `<svg width="52" height="52" viewBox="0 0 24 24"><path d="M12 22.5s-8-6.9-8-12.7a8 8 0 0 1 16 0c0 5.8-8 12.7-8 12.7z" fill="#FF4FA3" stroke="#0A0A0A" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="9.8" r="3" fill="#fff" stroke="#0A0A0A" stroke-width="1.5"/></svg>`;
    const priv = pg('priv mn', `${hdr(2, 'PLACE', 'pin')}<h2 class="ttl">WHERE WAS IT TAKEN?</h2>
      <div class="pgrid"><div class="prow"><div class="pol pp"><i style="background-image:${PH.city}"></i><em>${D.place.file}</em></div><div class="map sk">${mapSVG}<div class="mpin">${pinSVG}</div></div><div class="stamp s3 g D">SAFE!</div></div>
      <div class="pcol"><div class="place sk"><div class="pi">${I('pin', 28, 2.6)}</div><div><b class="D">${D.place.city.toUpperCase()}, ${D.place.country.toUpperCase()}<i class="strike"></i></b><span>${D.place.region} · ${D.place.when}</span></div></div>
        <div class="swap"><div class="warn sk">${I('eye', 30, 2.4)}<div><b class="D">HEADS UP!</b>Anyone you share it with can see this place.</div></div>
        <div class="okv sk">${I('shield', 30, 2.4)}<div><b class="D">PLACE GONE</b>Safe to share now. The photo looks the same.</div></div></div>
        <div class="foot"><div class="btn rm D">${I('trash', 24, 3)}<span class="rml">REMOVE PLACE</span></div></div></div></div>`);

    /* ---- gif */
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(Math.round(i * 1.5))}"></i>`).join('');
    const gifP = pg('gifp pk', `${hdr(2, 'GIF', 'film')}<h2 class="ttl">MAKE A GIF</h2>
      <div class="vid sk"><span class="vlab">${D.video.file} · ${D.video.len}</span><b class="gifb D">GIF</b><b class="loop D">LOOP!</b></div>
      <div class="film"><div class="frames">${strip}</div><div class="dim dL"></div><div class="dim dR"></div><div class="selw"><b class="hh hL"></b><b class="hh hR"></b></div></div>
      <div class="gbot"><div class="gslot"><div class="tchip sk"><span class="tv">From 0:04 to 0:08</span><b class="D tl">4.0 s</b></div>
        <div class="gprog"><div class="cbar gm"><i></i></div><div class="gt"></div></div>
        <div class="chips ginfo"><span>${D.video.size}</span><span>${D.video.fps} fps</span><span class="ok">${D.video.frames} frames</span></div></div>
      <div class="foot"><div class="bw"><div class="btn yb mk D">${I('film', 24, 2.8)}<span class="mkl">MAKE GIF</span></div>
        <div class="toast D">${I('check', 22, 3.4)}GIF SAVED!</div></div></div></div>`);

    /* ---- done */
    const adHTML = `<div class="ad"><span class="adl">Ad</span><i class="adi"></i><div><b>Sponsored</b><span>Shows only after your work is done.</span></div></div>`;
    const done = web
      ? pg('done', `<div class="hey D">ALL 4 READY</div><h2 class="ttl xl">NICE WORK!</h2>
        <div class="stats"><div class="sk c-y"><b class="D">${D.done.count}</b><span>files made</span></div><div class="sk c-mn"><b class="D">${D.done.saved.replace(' saved', '')}</b><span>saved</span></div><div class="sk c-pk"><b class="D">0 B</b><span>uploaded</span></div></div>
        <div class="promise">${I('lock', 22, 2.6)}${D.promiseWeb}</div>
        <div class="arr sk D seeb">SEE YOUR BOARD${I('next', 30, 3.2)}</div>
        <div class="foot"><div class="bw"><div class="btn saveall D">${I('save', 26, 3)}SAVE ALL 4<span class="kbd">Ctrl S</span></div>
        <div class="toast D">${I('check', 22, 3.4)}4 FILES SAVED TO DOWNLOADS!</div></div>${adHTML}</div>`)
      : pg('done', `<div class="dtop"><h2 class="ttl">NICE WORK!</h2><div class="stamp sd D">DONE!</div></div>
        <div class="board">${RES.map(pinHTML).join('')}</div>
        <div class="promise">${I('lock', 22, 2.6)}${D.promise}</div>
        <div class="foot"><div class="bw"><div class="btn saveall D">${I('save', 26, 3)}SAVE ALL 4</div>
        <div class="toast D">${I('check', 22, 3.4)}4 FILES SAVED!</div></div>${adHTML}</div>`);

    /* ---- motion helpers (all pure functions of t) */
    const slap = (t, t0, r0 = -12, dur = 0.36, s0 = 1.4) => {
      const p = seg(t, t0, t0 + dur), b = ease.outBack(p);
      return { s: s0 - (s0 - 1) * b, r: r0 * (1 - b), o: t < t0 ? 0 : seg(t, t0, t0 + 0.07) };
    };
    const stamp = (e, t, t0) => {
      if (t < t0) { set(e, { s: 1, o: 0 }); return; }
      const p = seg(t, t0, t0 + 0.14);
      const s = p < 1 ? lerp(2.5, 1, ease.in(p)) : 1 - 0.06 * Math.sin(seg(t, t0 + 0.14, t0 + 0.34) * Math.PI);
      set(e, { s, o: seg(t, t0, t0 + 0.05) });
    };
    const shake = (t, ...ts) => {
      for (const t0 of ts) {
        const p = seg(t, t0 + 0.14, t0 + 0.5);
        if (p > 0 && p < 1) { const a = 3 * (1 - p); return { x: a * Math.sin(p * 60), y: a * Math.cos(p * 47) }; }
      }
      return { x: 0, y: 0 };
    };
    const show = (p, t, ranges, sh) => {
      let st = null;
      ranges.forEach(([a, b], i) => {
        if (t < a || t >= b) return;
        const k = seg(t, a, a + 0.34), e = ease.outBack(k);
        st = { s: 1.1 - 0.1 * e, r: ((Math.round(a) % 2) ? 2.5 : -2.5) * (1 - ease.out(k)), o: 1, z: 10 + Math.round(a * 10) };
      });
      if (!st) { set(p, { o: 0 }); return false; }
      p.style.zIndex = st.z;
      set(p, { x: sh ? sh.x : 0, y: sh ? sh.y : 0, s: st.s, r: st.r, o: st.o });
      return true;
    };
    const toast = (e, t, t0, t1) => {
      if (t < t0 || t > t1) { set(e, { o: 0 }); return; }
      const v = slap(t, t0, -10, 0.32, 1.35);
      set(e, { ...v, o: v.o * (1 - seg(t, t1 - 0.2, t1)) });
    };
    const press = (e, t, ...ts) => cls(e, 'is-pressed', ts.some(x => t >= x - 0.06 && t <= x + 0.2));

    /* ---- pointer */
    const FX = 560, FY = 300, dT0 = 5.7, dT1 = 6.8;
    A.pointer([
      { t: 4.9, at: '.tile.t1', tap: true },
      ...(web
        ? [{ t: dT0, at: () => { const c = A.center('.pick .drop'); return { x: c.x + FX, y: c.y + FY }; }, hold: 0.2 },
           { t: dT1, at: '.pick .drop', drag: true, move: 0.9 }]
        : [{ t: 6.6, at: '.pick .p0', tap: true }]),
      { t: 8.2, at: '.pick .next', tap: true },
      { t: 10.0, at: '.shrinkq .o1', tap: true },
      { t: 15.6, at: '.shrinkw .save', tap: true },
      { t: 17.8, at: '.tile.t2', tap: true },
      { t: 18.9, at: '.cropq .c0', tap: true },
      { t: 20.1, at: '.crope .cimg', hold: 0.15 },
      { t: 21.4, at: '.crope .cimg', drag: true, move: 1.0 },
      { t: 22.6, at: '.crope .cdone', tap: true },
      { t: 24.8, at: '.tile.t3', tap: true },
      { t: 27.6, at: '.priv .rm', tap: true },
      { t: 30.6, at: '.tile.t4', tap: true },
      { t: 31.4, at: '.gifp .hR', hold: 0.1 },
      { t: 32.4, at: '.gifp .hR', drag: true, move: 0.9 },
      { t: 33.0, at: '.gifp .mk', tap: true },
      { t: 35.2, at: '.gifp .mk', tap: true },
      { t: 38.2, at: '.done .saveall', tap: true },
    ]);

    const E = {
      splW: [...spl.querySelectorAll('.w')], lgb: spl.querySelector('.lgb'), ssub: spl.querySelector('.ssub'), s0: spl.querySelector('.s0'),
      tiles: qa('.tile'), hey: home.querySelector('.hey'), homeX: [...home.querySelectorAll('.arr,.dh,.fp,.dots>div,.safe')], dropX: qa('.drop>.dic,.drop>b,.drop>span'),
      next: q('.pick .next'), th0: q('.pick .p0'), ck: q('.pick .ck'), drop: q('.pick .drop'), dropped: q('.pick .dropped'), fc: q('.fc'),
      o1: q('.shrinkq .o1'), ok1: q('.shrinkq .ok'),
      wt: q('.shrinkw .wt'), from: q('.shrinkw .from'), bign: q('.shrinkw .bign'), sbar: q('.shrinkw .sbar i'), wtxt: q('.shrinkw .wtxt'), chips: q('.shrinkw .chips'), s1: q('.shrinkw .s1'), save: q('.shrinkw .save'), t1: q('.shrinkw .toast'), pw: q('.shrinkw .pw'),
      c0: q('.cropq .c0'), okc: q('.cropq .ok'), cimg: q('.crope .cimg'), r45: q('.crope .r45'), s2: q('.crope .s2'), cdone: q('.crope .cdone'), t2: q('.crope .toast'),
      map: q('.priv .map'), mpin: q('.priv .mpin'), strike: q('.priv .strike'), warn: q('.priv .warn'), okv: q('.priv .okv'), rm: q('.priv .rm'), rml: q('.priv .rml'), s3: q('.priv .s3'),
      vid: q('.gifp .vid'), vlab: q('.gifp .vlab'), gifb: q('.gifp .gifb'), loop: q('.gifp .loop'), selw: q('.gifp .selw'), dL: q('.gifp .dL'), dR: q('.gifp .dR'),
      tchip: q('.gifp .tchip'), tv: q('.gifp .tv'), tl: q('.gifp .tl'), gprog: q('.gifp .gprog'), gmi: q('.gifp .gm i'), gt: q('.gifp .gt'), ginfo: q('.gifp .ginfo'), mk: q('.gifp .mk'), mkl: q('.gifp .mkl'), t4: q('.gifp .toast'),
      dpins: [...done.querySelectorAll('.pin')], sd: q('.done .sd'), dX: [...done.querySelectorAll('.hey,.stats>div,.promise,.seeb')], saveall: q('.done .saveall'), t5: q('.done .toast'),
      bpins: web ? [...bd.querySelectorAll('.pin')] : [], cnt: web ? bd.querySelector('.cnt') : null, sb: web ? bd.querySelector('.sb') : null,
      gifImgs: qa('.pn3 i'),
    };
    let lastGif = -1;

    if (web) A.after(t => {
      // the file is dragged in from the desktop (bottom-right, outside the window)
      const c = A.center('.pick .drop');
      const st = Math.max(dT0 + 0.2 + 0.12, dT1 - 0.9), qd = ease.inOut(seg(t, st, dT1)), land = seg(t, dT1, dT1 + 0.25);
      const vis = t < 5.3 || t > dT1 + 0.3 ? 0 : seg(t, 5.3, 5.6) * (1 - land);
      set(E.fc, { x: c.x - 100 + (1 - qd) * FX, y: c.y - 75 + (1 - qd) * FY, r: 8 * (1 - qd) - 3, s: 1 - 0.1 * land, o: vis });
      cls(E.drop, 'hot', t > st + 0.35 && t < dT1 + 0.15);
    });

    return {
      update(t) {
        /* ticker */
        const uw = tu.offsetWidth || 320;
        set(tk, { x: -((t * 55) % uw) });
        set(tick, web ? { o: 1 } : { y: -40 * (1 - ease.out(seg(t, 1.0, 1.4))), o: seg(t, 1.0, 1.15) });

        /* splash */
        if (t < 2.75) {
          spl.style.display = '';
          // web: the poster is ripped away upward; app: home slaps on top of it
          if (web) set(spl, { y: -A.H * 1.05 * ease.in(seg(t, 2.3, 2.62)), r: -4 * seg(t, 2.3, 2.62), o: 1 });
          set(E.lgb, slap(t, 0.1, -20, 0.4));
          E.splW.forEach((w, i) => set(w, slap(t, 0.45 + i * 0.22, i % 2 ? 14 : -14)));
          set(E.ssub, slap(t, 1.25, 6, 0.3, 1.25));
          stamp(E.s0, t, 1.65);
          if (!web) { const sh = shake(t, 1.65); spl.style.translate = `${sh.x.toFixed(1)}px ${sh.y.toFixed(1)}px`; }
        } else spl.style.display = 'none';

        /* web frame arrives */
        if (web) {
          set(wl.querySelector('.brand'), slap(t, 2.45, -10, 0.36, 1.3));
          [wl.querySelector('.khint'), wl.querySelector('.safe')].forEach((e, i) => set(e, slap(t, 3.1 + i * 0.12, 6, 0.3, 1.2)));
          set(cv, slap(t, 2.4, 0, 0.36, 1.06));
          set(bd, slap(t, 2.7, 3, 0.36, 1.1));
          const pinT = [15.75, 22.75, 27.9, 35.35];
          E.bpins.forEach((p, i) => set(p, slap(t, pinT[i], i % 2 ? 16 : -16, 0.36, 1.5)));
          txt(E.cnt, `${pinT.filter(x => t >= x).length}/4`);
          stamp(E.sb, t, 36.7);
          const sh = shake(t, 36.7); bd.style.translate = `${sh.x.toFixed(1)}px ${sh.y.toFixed(1)}px`;
          const which = t < 4.9 ? -1 : t < 17.8 ? 0 : t < 24.8 ? 1 : t < 30.6 ? 2 : t < 36 ? 3 : -1;
          E.tiles.forEach((e, i) => cls(e, 'on', i === which));
        }
        /* tool stickers slap in once, then stay put */
        E.tiles.forEach((e, i) => set(e, t < 4 ? slap(t, 2.38 + i * 0.09, i % 2 ? 14 : -14, 0.34) : { s: 1, o: 1 }));
        press(E.tiles[0], t, 4.9); press(E.tiles[1], t, 17.8); press(E.tiles[2], t, 24.8); press(E.tiles[3], t, 30.6);

        /* home */
        show(home, t, web ? [[2.3, 5.4]] : [[2.3, 5.4], [16.9, 18.3], [23.9, 25.3], [29.9, 31.1]]);
        set(E.hey, t < 4 ? slap(t, 2.32, -14, 0.3) : { s: 1, o: 1 });
        E.homeX.forEach((e, i) => set(e, t < 4 ? slap(t, 2.75 + i * 0.08, i % 2 ? 10 : -10, 0.32, 1.3) : { s: 1, o: 1 }));

        /* pick */
        show(pick, t, [[5.0, 9.0]]);
        if (web) {
          set(E.dropped, slap(t, dT1, -10, 0.36, 1.25));
          E.dropX.forEach(e => set(e, { o: 1 - seg(t, dT1, dT1 + 0.12) }));
          cls(E.next, 'off', t < dT1 + 0.3);
        } else {
          const sel = t >= 6.6;
          cls(E.th0, 'sel', sel);
          set(E.ck, slap(t, 6.6, -30, 0.3, 1.8));
          cls(E.next, 'off', !sel);
        }
        press(E.next, t, 8.2);

        /* shrink: question */
        show(shrinkQ, t, [[8.6, 10.9]]);
        cls(E.o1, 'on', t >= 10.0);
        set(E.o1, t >= 10.0 ? { r: -1.5 * ease.outBack(seg(t, 10.0, 10.3)) } : { r: 0 });
        set(E.ok1, slap(t, 10.05, -30, 0.3, 1.8));
        press(E.o1, t, 10.0);

        /* shrink: work and result */
        const sh1 = shake(t, 13.4);
        show(shrinkW, t, [[10.5, web ? 18.3 : 17.3]], sh1);
        const wq = seg(t, 10.9, 13.0);
        txt(E.bign, A.fmtBytes(A.count(t, 10.9, 13.0, D.portrait.bytes, D.shrink.bytes, ease.inOut)));
        set(E.bign, { s: t > 13.0 ? 1 + 0.12 * Math.sin(seg(t, 13.0, 13.3) * Math.PI) : 1 });
        E.sbar.style.width = (wq * 100).toFixed(1) + '%';
        E.sbar.style.backgroundPosition = `${(t * 40 % 34).toFixed(1)}px 0`;
        txt(E.wt, t < 13.0 ? 'SHRINKING...' : 'SHRUNK!');
        txt(E.wtxt, t < 11.6 ? 'Keeping it sharp...' : t < 12.5 ? 'Trying smaller sizes...' : 'Checking: under 200 KB');
        set(E.wtxt, { o: 1 - seg(t, 13.0, 13.15) });
        set(E.chips, slap(t, 13.9, -6, 0.3, 1.25));
        set(E.from, { o: seg(t, 13.0, 13.2) });
        set(E.pw, { s: 1 - 0.06 * ease.inOut(wq) });
        stamp(E.s1, t, 13.4);
        cls(E.save, 'off', t < 13.2);
        press(E.save, t, 15.6);
        toast(E.t1, t, 15.75, web ? 17.7 : 16.9);

        /* crop */
        show(cropQ, t, [[web ? 17.9 : 17.8, 19.9]]);
        cls(E.c0, 'on', t >= 18.9);
        set(E.okc, slap(t, 18.95, -30, 0.3, 1.8));
        press(E.c0, t, 18.9);
        const sh2 = shake(t, 22.75);
        show(cropE, t, [[19.4, web ? 25.2 : 24.3]], sh2);
        set(E.cimg, { x: -70 * ease.inOut(seg(t, 20.37, 21.4)) });
        const rv = slap(t, 19.85, 25, 0.4, 1.6);
        set(E.r45, { ...rv, r: rv.r + 12 + 4 * Math.sin(t * 5) });
        stamp(E.s2, t, 22.75);
        press(E.cdone, t, 22.6);
        toast(E.t2, t, 22.9, web ? 24.7 : 23.95);

        /* privacy */
        const sh3 = shake(t, 27.85);
        show(priv, t, [[24.9, web ? 31.0 : 30.3]], sh3);
        const gone = seg(t, 27.75, 28.1);
        const pd = ease.outBack(seg(t, 25.6, 26.05));
        set(E.mpin, { y: -50 * (1 - pd), s: 1 - 0.6 * gone, o: seg(t, 25.6, 25.75) * (1 - gone) });
        E.map.style.filter = gone > 0 ? `grayscale(${gone.toFixed(2)}) opacity(${(1 - 0.45 * gone).toFixed(2)})` : '';
        set(E.map, slap(t, 25.35, 18, 0.36, 1.3));
        set(E.strike, { sx: ease.out(seg(t, 27.75, 28.05)), o: t >= 27.75 ? 1 : 0 });
        set(E.warn, { o: 1 - gone });
        set(E.okv, t >= 27.75 ? slap(t, 27.75, -6, 0.3, 1.2) : { o: 0 });
        stamp(E.s3, t, 27.85);
        press(E.rm, t, 27.6);
        txt(E.rml, t < 27.75 ? 'REMOVE PLACE' : 'SAVE SAFE COPY');

        /* gif */
        show(gifP, t, [[30.7, 36.3]]);
        const made = t >= 34.3;
        E.vid.style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 8) % 4) : Math.floor(t * 12) % 12);
        cls(E.vid, 'made', made);
        if (made) { const v = slap(t, 34.3, -14, 0.4, 1.25); set(E.vid, { ...v, r: v.r - 2 + 1.2 * Math.sin(t * 4) }); }
        else set(E.vid, { s: 1, r: 0, o: 1 });
        set(E.gifb, made ? slap(t, 34.55, 30, 0.3, 1.8) : { o: 0 });
        const lv = slap(t, 34.75, -30, 0.3, 1.8);
        set(E.loop, made ? { ...lv, r: lv.r - 6 + 5 * Math.sin(t * 6) } : { o: 0 });
        txt(E.vlab, made ? `GIF · ${D.video.size} · ${D.video.clip}` : `${D.video.file} · ${D.video.len}`);
        const hq = ease.inOut(seg(t, 31.62, 32.4)), L = 4 / 12 * 100, R = (8 - hq) / 12 * 100;
        E.selw.style.left = `calc(${L}% - 2px)`; E.selw.style.width = `calc(${R - L}% + 4px)`;
        E.dL.style.left = '8px'; E.dL.style.width = `calc(${L}% - 8px)`;
        E.dR.style.left = `${R}%`; E.dR.style.right = '8px';
        txt(E.tv, hq > 0.5 ? `From ${D.video.from} to ${D.video.to}` : 'From 0:04 to 0:08');
        txt(E.tl, hq > 0.5 ? D.video.clip : '4.0 s');
        const busy = t > 33.1 && t < 34.3, mp = seg(t, 33.15, 34.2);
        set(E.tchip, { o: t < 33.1 ? 1 : 0 });
        set(E.gprog, { o: busy ? 1 : 0 });
        E.gmi.style.width = (mp * 100).toFixed(1) + '%';
        E.gmi.style.backgroundPosition = `${(t * 40 % 34).toFixed(1)}px 0`;
        txt(E.gt, `Making GIF... ${Math.round(mp * D.video.frames)} of ${D.video.frames} frames`);
        set(E.ginfo, made ? slap(t, 34.5, -6, 0.3, 1.25) : { o: 0 });
        txt(E.mkl, made ? 'SAVE GIF' : busy ? 'WORKING...' : 'MAKE GIF');
        cls(E.mk, 'off', busy);
        press(E.mk, t, 33.0, 35.2);
        toast(E.t4, t, 35.35, 36.3);

        /* done */
        const sh5 = web ? null : shake(t, 37.2);
        show(done, t, [[35.9, 40.5]], sh5);
        if (!web) E.dpins.forEach((p, i) => set(p, slap(t, 36.05 + i * 0.18, i % 2 ? 18 : -18, 0.36, 1.5)));
        E.dX.forEach((e, i) => set(e, slap(t, 36.05 + i * 0.12, i % 2 ? 8 : -8, 0.32, 1.3)));
        if (E.sd) stamp(E.sd, t, 37.2);
        press(E.saveall, t, 38.2);
        toast(E.t5, t, 38.35, 40.5);

        /* the GIF result keeps looping wherever it is pinned */
        const gi = 4 + (Math.floor(t * 8) % 4);
        if (gi !== lastGif) { lastGif = gi; E.gifImgs.forEach(e => { e.style.backgroundImage = A.frame(gi); }); }
      },
    };
  },
});

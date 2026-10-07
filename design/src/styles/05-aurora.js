/* Style 5 — Aurora Glass. Dark canvas, slow aurora light, frosted glass, cinematic results. */
ISK.register({
  id: 'aurora',
  order: 5,
  name: 'Aurora Glass',
  tagline: 'Cinematic light and glass, with plain words and big buttons.',
  concept: 'Every screen sits on a night sky with slow aurora light. Tools live on frosted glass, and your photo floats with a soft 3D tilt. Each job ends with a moment of light: the photo breaks into sparks and settles smaller, the place fades off a map, and video frames spin into a loop. Labels stay plain and buttons stay big, so it feels premium and still easy.',
  wins: [
    'It looks like no other free image app. Screenshots and screen recordings sell it on their own.',
    'Every result has a small show, so people remember the app and come back to it.',
    'The web version works like a pro tool: tool rail, inspector, drag and drop, and a Ctrl K command bar.',
  ],
  risks: [
    'Glass and glow cost more to build and test. Cheap phones need a lighter motion mode.',
    'Text on glass can lose contrast, so every colour pair needs checking.',
  ],
  scores: { simple: 3, fun: 3, wow: 5, effort: 4 },
  palette: ['#07080F', '#2EF2C9', '#7A5CFF', '#FF4FD8', '#F2F4FF', '#9AA3C7'],
  type: 'Unbounded for big numbers and short headlines. Manrope for every label and button, because it stays clear at small sizes.',
  motion: 'Aurora light drifts slowly behind glass, and each result arrives as light: sparks, a counting ring, a light sweep and a liquid wipe.',
  notes: {
    intro: 'The aurora rises and a glass emblem turns to face you. Then six big glass tiles with plain names.',
    pick: 'Phone: tap a photo in a glass gallery. Web: drag the file in from the desktop, press Ctrl K and type "shrink to 200 kb".',
    shrink: 'The photo breaks into sparks and settles into a small tile while a glowing ring counts 4.8 MB down to 196 KB. A liquid wipe shows before and after.',
    crop: 'The glowing frame melts into 4:5. When you let go, the photo snaps to the thirds guide.',
    privacy: 'A beacon pulses over Pune on a night map. A sweep of light wipes the place away and a glass shield appears.',
    gif: 'The 3 seconds of frames fan out like a 3D film strip, spin into a ring and become a looping GIF.',
    done: 'Four results float on glass with the promise. One quiet Ad card waits at the end.',
  },
  statusBar: 'light',
  css: `
.st-aurora{--n:#07080F;--g:rgba(255,255,255,.07);--gb:rgba(255,255,255,.16);--te:#2EF2C9;--vi:#7A5CFF;--ma:#FF4FD8;--tx:#F2F4FF;--mu:#9AA3C7;background:var(--n);color:var(--tx);font-family:Manrope,system-ui,sans-serif;font-size:16px;line-height:1.35}
.st-aurora .h{font-family:Unbounded,Manrope,sans-serif;font-weight:600;letter-spacing:-.01em}
.st-aurora .aur{position:absolute;inset:0;overflow:hidden;z-index:0}
.st-aurora .rb{position:absolute;left:50%;top:50%;border-radius:50%;will-change:transform,opacity}
.st-aurora .stars{position:absolute;left:0;top:0;width:2px;height:2px;border-radius:50%}
.st-aurora .vig{position:absolute;inset:0;background:radial-gradient(130% 95% at 50% 45%,transparent 45%,rgba(7,8,15,.75))}
.st-aurora .pg{position:absolute;inset:0;padding:56px 18px 30px;display:flex;flex-direction:column;gap:14px;z-index:2}
.st-aurora.m-web .pg{left:212px;top:64px;padding:0}
.st-aurora.m-web .pg.splash{left:0;top:0;z-index:40;background:transparent}
.st-aurora .gl{background:var(--g);border:1px solid var(--gb);border-radius:20px;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 18px 44px rgba(0,0,0,.3)}
.st-aurora .bar{display:flex;align-items:center;gap:12px;min-height:46px}
.st-aurora .bk{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;flex:none}
.st-aurora .bar .tt{font-size:18px;font-weight:800}
.st-aurora .bar .chip{margin-left:auto}
.st-aurora .chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:99px;background:rgba(46,242,201,.1);border:1px solid rgba(46,242,201,.35);color:var(--te);font-size:13px;font-weight:800;white-space:nowrap}
.st-aurora .chip.w{background:var(--g);border-color:var(--gb);color:var(--tx)}
.st-aurora .btn{height:60px;border-radius:18px;display:flex;align-items:center;justify-content:center;gap:10px;font-size:18px;font-weight:800;color:#07080F;background:linear-gradient(100deg,#2EF2C9,#8FA2FF 62%,#C58BFF);box-shadow:0 10px 30px rgba(46,242,201,.22),inset 0 1px 0 rgba(255,255,255,.6);flex:none}
.st-aurora .btn.off{background:rgba(255,255,255,.07);color:var(--mu);box-shadow:none;border:1px solid var(--gb)}
.st-aurora .btn.sec{background:var(--g);color:var(--tx);border:1px solid var(--gb);box-shadow:none}
.st-aurora .btn.mg{background:linear-gradient(100deg,#FF4FD8,#B98BFF);box-shadow:0 10px 30px rgba(255,79,216,.25),inset 0 1px 0 rgba(255,255,255,.5)}
.st-aurora .btn .kbd{background:rgba(7,8,15,.14);border-color:rgba(7,8,15,.25);color:#07080F}
.st-aurora .is-pressed{transform:scale(.95) !important;filter:brightness(1.18)}
.st-aurora .foot{margin-top:auto;display:flex;gap:12px}
.st-aurora .foot .btn{flex:1}.st-aurora .foot .btn.sec{flex:.7}
.st-aurora .q{font-size:23px;line-height:1.2;margin:0}
.st-aurora .sub{font-size:15px;color:var(--mu);margin:0}
.st-aurora .kbd{display:inline-grid;place-items:center;min-width:24px;height:24px;padding:0 6px;border-radius:7px;border:1px solid rgba(255,255,255,.24);border-bottom-width:2px;background:rgba(255,255,255,.08);font:800 12px Manrope,sans-serif;color:var(--tx);line-height:1}
.st-aurora .splash{align-items:center;justify-content:center;text-align:center;gap:16px}
.st-aurora .emb{position:relative;width:128px;height:128px;display:grid;place-items:center}
.st-aurora .halo{position:absolute;left:50%;top:50%;width:360px;height:360px;margin:-180px;border-radius:50%;background:radial-gradient(closest-side,rgba(46,242,201,.35),rgba(122,92,255,.16) 50%,transparent)}
.st-aurora .splash h1{font-size:25px;margin:6px 0 0}
.st-aurora.m-web .splash h1{font-size:34px}
.st-aurora .splash p{margin:0;font-size:16px;color:var(--te);font-weight:800;display:flex;gap:8px;align-items:center}
.st-aurora .brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px}
.st-aurora .tiles{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.st-aurora .tile{padding:16px;min-height:142px;display:flex;flex-direction:column;justify-content:space-between;gap:10px;border-radius:22px}
.st-aurora .tile b{font-size:18px;line-height:1.15;display:block}
.st-aurora .tile span{font-size:13.5px;color:var(--mu)}
.st-aurora .ico{width:50px;height:50px;border-radius:16px;display:grid;place-items:center;color:#07080F;flex:none}
.st-aurora .c1{background:linear-gradient(135deg,#7BFFE3,#2EF2C9)}.st-aurora .c2{background:linear-gradient(135deg,#B8A8FF,#8D74FF)}.st-aurora .c3{background:linear-gradient(135deg,#FF9DEB,#FF4FD8)}
.st-aurora .c4{background:linear-gradient(135deg,#9FEBFF,#5D9BFF)}.st-aurora .c5{background:linear-gradient(135deg,#FFE0A3,#FF9F7A)}.st-aurora .c6{background:rgba(255,255,255,.14);color:var(--tx)}
.st-aurora .safe{display:flex;align-items:center;gap:10px;padding:14px 16px;border-radius:16px;font-size:15px;font-weight:800;color:var(--te)}
.st-aurora .tabs{display:flex;gap:8px}
.st-aurora .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-aurora .th{aspect-ratio:1;border-radius:16px;background-size:cover;background-position:center;position:relative;border:1px solid var(--gb)}
.st-aurora .th.sel{box-shadow:0 0 0 3px var(--te),0 0 30px rgba(46,242,201,.55);z-index:2}
.st-aurora .ck{position:absolute;right:7px;top:7px;width:30px;height:30px;border-radius:50%;background:var(--te);color:#07080F;display:grid;place-items:center}
.st-aurora .selchip{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:16px}
.st-aurora .selchip i{width:44px;height:44px;border-radius:10px;background-size:cover;background-position:center;flex:none}
.st-aurora .selchip b{display:block;font-size:15px}.st-aurora .selchip span{font-size:13.5px;color:var(--mu)}
.st-aurora .fl{display:flex;gap:16px;align-items:center}
.st-aurora .fph{position:relative;width:126px;height:162px;border-radius:18px;background-size:cover;background-position:center;box-shadow:0 22px 44px rgba(0,0,0,.55),0 0 0 1px var(--gb);flex:none;overflow:hidden}
.st-aurora .shine{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.22) 48%,transparent 60%);background-size:260% 100%}
.st-aurora .finfo b{display:block;font-size:16px}.st-aurora .finfo span{display:block;color:var(--mu);font-size:14px;margin-top:3px}
.st-aurora .opts,.st-aurora .prs{display:flex;flex-direction:column;gap:9px}
.st-aurora .opt,.st-aurora .pr{display:flex;align-items:center;gap:12px;padding:12px 15px;border-radius:18px;min-height:70px}
.st-aurora .opt b,.st-aurora .pr b{display:block;font-size:16.5px;line-height:1.2}.st-aurora .opt span,.st-aurora .pr span{font-size:13.5px;color:var(--mu)}
.st-aurora .rad{margin-left:auto;width:24px;height:24px;border-radius:50%;border:2px solid rgba(255,255,255,.3);flex:none}
.st-aurora .on{border-color:rgba(46,242,201,.85);background:rgba(46,242,201,.1);box-shadow:0 0 28px rgba(46,242,201,.22)}
.st-aurora .on .rad{border-color:var(--te);background:radial-gradient(var(--te) 0 42%,transparent 48%)}
.st-aurora .ratio{width:34px;height:34px;display:grid;place-items:center;flex:none}
.st-aurora .ratio i{display:block;border:2px solid var(--tx);border-radius:4px;opacity:.85}
.st-aurora .on .ratio i{border-color:var(--te);box-shadow:0 0 10px rgba(46,242,201,.6)}
.st-aurora .swrap{display:flex;flex-direction:column;align-items:center;gap:6px}
.st-aurora .stage{position:relative;width:300px;height:300px}
.st-aurora.m-web .stage{transform:scale(1.32);margin:48px 0 54px}
.st-aurora .core{position:absolute;left:50%;top:50%;width:300px;height:300px;margin:-150px;border-radius:50%;background:radial-gradient(closest-side,rgba(46,242,201,.4),rgba(122,92,255,.18) 55%,transparent)}
.st-aurora .ring{position:absolute;inset:0;width:300px;height:300px;overflow:visible}
.st-aurora .trk{fill:none;stroke:rgba(255,255,255,.08);stroke-width:8}
.st-aurora .rg{fill:none;stroke:url(#au-rg);stroke-linecap:round;stroke-dasharray:816.8}
.st-aurora .rgG{stroke-width:24;opacity:.2}.st-aurora .rgM{stroke-width:8}.st-aurora .spk{fill:#fff}
.st-aurora .whole{position:absolute;left:60px;top:30px;width:180px;height:240px;border-radius:14px;background-size:cover;box-shadow:0 20px 40px rgba(0,0,0,.5)}
.st-aurora .small{position:absolute;left:105px;top:90px;width:90px;height:120px;border-radius:10px;background-size:cover;box-shadow:0 0 0 2px var(--te),0 0 30px rgba(46,242,201,.55)}
.st-aurora .pz,.st-aurora .dust{position:absolute;left:150px;top:150px;width:0;height:0}
.st-aurora .pc{position:absolute;left:0;top:0;width:23px;height:24.5px;background-size:180px 240px;box-shadow:0 0 7px rgba(46,242,201,.55)}
.st-aurora .dust i{position:absolute;left:-2px;top:-2px;width:4px;height:4px;border-radius:50%;background:var(--te)}
.st-aurora .dust i:nth-child(3n){background:var(--ma)}.st-aurora .dust i:nth-child(3n+1){background:#B9A9FF}
.st-aurora .num{font-size:42px;line-height:1.1;font-variant-numeric:tabular-nums}
.st-aurora .num.ok{color:var(--te)}
.st-aurora .from{font-size:15px;color:var(--mu)}
.st-aurora .wst{font-size:15px;font-weight:800;color:var(--tx);display:flex;align-items:center;gap:8px;margin-top:6px}
.st-aurora .wipe{position:relative;width:276px;height:352px;margin:0 auto;border-radius:22px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.5),0 0 0 1px var(--gb);flex:none}
.st-aurora.m-web .wipe{width:330px;height:430px}
.st-aurora .wa,.st-aurora .wb{position:absolute;inset:0;background-size:cover;background-position:center}
.st-aurora .wl{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.st-aurora .wg{fill:none;stroke:var(--te);stroke-width:12;opacity:.35}.st-aurora .wm{fill:none;stroke:#fff;stroke-width:3}
.st-aurora .knob{position:absolute;left:0;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;display:grid;place-items:center;background:rgba(7,8,15,.7);border:2px solid #fff;color:#fff}
.st-aurora .lab{position:absolute;top:12px;padding:6px 10px;border-radius:10px;background:rgba(7,8,15,.72);font-size:13px;font-weight:800;white-space:nowrap}
.st-aurora .la{left:12px}.st-aurora .lb{right:12px;color:var(--te)}
.st-aurora .rnum{display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center}
.st-aurora .grad{background:linear-gradient(95deg,#2EF2C9,#A99BFF 70%,#FF8FE6);-webkit-background-clip:text;background-clip:text;color:transparent}
.st-aurora .rnum b{font-size:34px;line-height:1.15}.st-aurora .rnum span{color:var(--mu);font-size:15px}
.st-aurora .chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.st-aurora .toast{position:absolute;left:18px;right:18px;bottom:104px;padding:14px 16px;border-radius:16px;display:flex;align-items:center;gap:10px;font-weight:800;background:rgba(16,19,36,.95);border:1px solid rgba(46,242,201,.55);box-shadow:0 0 30px rgba(46,242,201,.25);z-index:20}
.st-aurora .toast svg{color:var(--te)}
.st-aurora.m-web .toast{left:auto;right:16px;width:auto;max-width:440px;white-space:nowrap;bottom:16px}
.st-aurora.m-web .ic .toast{left:20px;right:20px;width:auto;bottom:100px}
.st-aurora .cropbox{position:relative;height:470px;border-radius:22px;overflow:hidden;background:#0c0e1a;border:1px solid var(--gb);flex:none}
.st-aurora.m-web .cropbox{position:absolute;inset:0;height:auto}
.st-aurora .cimg{position:absolute;left:50%;top:50%;width:600px;height:450px;margin:-225px 0 0 -300px;background-size:cover;background-position:center}
.st-aurora.m-web .cimg{width:960px;height:720px;margin:-360px 0 0 -480px}
.st-aurora .cfr{position:absolute;left:50%;top:50%;border:2px solid var(--te);box-shadow:0 0 0 999px rgba(7,8,15,.62),0 0 24px rgba(46,242,201,.7),inset 0 0 18px rgba(46,242,201,.3)}
.st-aurora .g3{position:absolute;inset:0;background:linear-gradient(var(--te),var(--te)) 33.3% 0/1.5px 100% no-repeat,linear-gradient(var(--te),var(--te)) 66.6% 0/1.5px 100% no-repeat,linear-gradient(var(--te),var(--te)) 0 33.3%/100% 1.5px no-repeat,linear-gradient(var(--te),var(--te)) 0 66.6%/100% 1.5px no-repeat}
.st-aurora .cfr b{position:absolute;width:22px;height:22px;border:4px solid #fff}
.st-aurora .k1{left:-5px;top:-5px;border-right:0 !important;border-bottom:0 !important;border-radius:8px 0 0 0}.st-aurora .k2{right:-5px;top:-5px;border-left:0 !important;border-bottom:0 !important;border-radius:0 8px 0 0}
.st-aurora .k3{left:-5px;bottom:-5px;border-right:0 !important;border-top:0 !important;border-radius:0 0 0 8px}.st-aurora .k4{right:-5px;bottom:-5px;border-left:0 !important;border-top:0 !important;border-radius:0 0 8px 0}
.st-aurora .ctag{position:absolute;left:12px;bottom:12px;padding:8px 12px;border-radius:12px;background:rgba(7,8,15,.78);border:1px solid var(--gb);font-size:14px;font-weight:800}
.st-aurora .hint{display:flex;align-items:center;gap:10px;font-size:15px;color:var(--mu);font-weight:700}
.st-aurora .map{position:relative;height:380px;border-radius:22px;overflow:hidden;background:#0A0D1C;border:1px solid var(--gb);flex:none}
.st-aurora.m-web .map{position:absolute;inset:0;height:auto}
.st-aurora .map>svg{position:absolute;inset:0;width:100%;height:100%}
.st-aurora .mph{position:absolute;left:12px;top:12px;width:104px;height:104px;border-radius:14px;background-size:cover;background-position:center;box-shadow:0 14px 30px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.3)}
.st-aurora.m-web .mph{left:22px;top:22px;width:200px;height:150px}
.st-aurora .mph span{position:absolute;left:6px;bottom:6px;padding:3px 7px;border-radius:7px;background:rgba(7,8,15,.75);font-size:11.5px;font-weight:800}
.st-aurora .clr{position:absolute;inset:0;background:rgba(7,8,15,.62)}
.st-aurora .bea{position:absolute;left:56%;top:52%;width:0;height:0}
.st-aurora .bc{position:absolute;left:-9px;top:-9px;width:18px;height:18px;border-radius:50%;background:var(--ma);box-shadow:0 0 0 4px rgba(255,79,216,.3),0 0 26px 6px rgba(255,79,216,.7)}
.st-aurora .br{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;border:2px solid var(--ma)}
.st-aurora .plab{position:absolute;left:56%;top:52%;transform:translate(-50%,-100%);margin-top:-22px;padding:8px 12px;border-radius:12px;background:rgba(16,19,36,.9);border:1px solid rgba(255,79,216,.5);text-align:center;white-space:nowrap}
.st-aurora .plab b{display:block;font-size:15px}.st-aurora .plab span{font-size:12px;color:var(--mu)}
.st-aurora .sweep{position:absolute;top:-10%;bottom:-10%;left:0;width:160px;margin-left:-120px;background:linear-gradient(90deg,transparent,rgba(46,242,201,.18) 45%,rgba(242,244,255,.75) 72%,transparent 80%);transform:skewX(-12deg)}
.st-aurora .shd{position:absolute;left:50%;top:50%;width:176px;margin-left:-88px;margin-top:-70px;padding:18px 10px 14px;border-radius:24px;display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--te);background:rgba(16,19,36,.85);border:1px solid rgba(46,242,201,.6);box-shadow:0 0 50px rgba(46,242,201,.35),inset 0 1px 0 rgba(255,255,255,.2)}
.st-aurora .shd b{color:var(--tx);font-size:15px}
.st-aurora .place b{font-size:22px;display:block;line-height:1.2}.st-aurora .place span{font-size:14.5px;color:var(--mu)}
.st-aurora .warn,.st-aurora .okb{border-radius:16px;padding:12px 14px;font-size:15px;font-weight:700;display:flex;gap:10px;align-items:center}
.st-aurora .warn{background:rgba(255,79,216,.1);border:1px solid rgba(255,79,216,.5)}.st-aurora .warn svg{color:var(--ma);flex:none}
.st-aurora .okb{background:rgba(46,242,201,.1);border:1px solid rgba(46,242,201,.55)}.st-aurora .okb svg{color:var(--te);flex:none}
.st-aurora .vid{position:relative;height:270px;flex:none;perspective:700px}
.st-aurora.m-web .vid{height:350px}
.st-aurora.m-web .plab b{font-size:18px}.st-aurora.m-web .plab span{font-size:13.5px}.st-aurora.m-web .shd{transform-origin:50% 50%}
.st-aurora .vimg{position:absolute;inset:0;border-radius:22px;background-size:cover;background-position:center;box-shadow:0 0 0 1px var(--gb)}
.st-aurora .vimg.gif{box-shadow:0 0 0 2px var(--te),0 0 40px rgba(46,242,201,.45)}
.st-aurora .vbadge,.st-aurora .loop{position:absolute;top:12px;padding:6px 10px;border-radius:10px;background:rgba(7,8,15,.75);font-size:13px;font-weight:800;display:flex;gap:6px;align-items:center}
.st-aurora .vbadge{left:12px}.st-aurora .loop{right:12px;color:var(--te)}
.st-aurora .fan{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d}
.st-aurora .fc{position:absolute;left:-52px;top:-36px;width:104px;height:72px;border-radius:10px;background-size:cover;background-position:center;border:1.5px solid rgba(255,255,255,.55);box-shadow:0 10px 26px rgba(0,0,0,.55)}
.st-aurora.m-web .fc{left:-90px;top:-62px;width:180px;height:124px}
.st-aurora .strip-clip{position:relative;overflow:hidden;border-radius:12px;padding:6px 0;margin:-6px 0;flex:none}
.st-aurora .strip{position:relative;display:flex;height:60px;border-radius:12px}
.st-aurora .strip i{flex:1;background-size:cover;background-position:center}
.st-aurora .selw{position:absolute;top:-6px;bottom:-6px;border:3px solid var(--te);border-radius:12px;box-shadow:0 0 0 999px rgba(7,8,15,.6),0 0 18px rgba(46,242,201,.6)}
.st-aurora .hd{position:absolute;top:50%;width:22px;height:56px;margin-top:-28px;border-radius:8px;background:var(--te);box-shadow:0 0 14px rgba(46,242,201,.7)}
.st-aurora .hd::after{content:"";position:absolute;left:9px;top:16px;width:4px;height:24px;border-radius:2px;background:#07080F;opacity:.55}
.st-aurora .hL{left:-13px}.st-aurora .hR{right:-13px}
.st-aurora .trow{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.st-aurora .trow span{font-size:16px;font-weight:800}.st-aurora .trow b{font-size:26px;color:var(--te)}
.st-aurora .gbar{height:8px;border-radius:4px;background:rgba(255,255,255,.1);overflow:hidden}
.st-aurora .gbar i{display:block;height:100%;background:linear-gradient(90deg,#2EF2C9,#7A5CFF,#FF4FD8)}
.st-aurora .rgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.st-aurora .rc{position:relative;padding:8px 8px 12px;border-radius:18px;display:flex;flex-direction:column;gap:8px}
.st-aurora .rc i{height:118px;border-radius:12px;background-size:cover;background-position:center}
.st-aurora.m-web .rc{padding:10px 10px 14px}.st-aurora.m-web .rc i{height:170px}
.st-aurora .rc b{display:block;font-size:15px;padding:0 4px}.st-aurora .rc span{display:block;font-size:13px;color:var(--mu);padding:0 4px}
.st-aurora.m-web .rc b{font-size:17px}.st-aurora.m-web .rc span{font-size:14.5px}
.st-aurora .rc em{position:absolute;right:14px;top:14px;width:28px;height:28px;border-radius:50%;background:var(--te);color:#07080F;display:grid;place-items:center}
.st-aurora .ad{display:flex;gap:12px;align-items:center;border:1px dashed rgba(255,255,255,.25);border-radius:16px;padding:10px 12px;background:rgba(255,255,255,.04)}
.st-aurora .ad i{width:44px;height:44px;border-radius:10px;background:rgba(255,255,255,.1);flex:none}
.st-aurora .ad small{font-size:11px;font-weight:800;letter-spacing:.06em;border:1px solid var(--mu);color:var(--mu);border-radius:5px;padding:1px 5px;margin-right:6px}
.st-aurora .ad span{font-size:13.5px;color:var(--mu)}
.st-aurora .rail{position:absolute;left:0;top:0;bottom:0;width:212px;padding:18px 12px;display:flex;flex-direction:column;gap:4px;background:rgba(12,14,28,.5);border-right:1px solid var(--gb);backdrop-filter:blur(20px);z-index:5}
.st-aurora .rail .brand{font-size:14px;margin:0 4px 18px}
.st-aurora .nav{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:14px;font-weight:800;font-size:15px;color:var(--mu)}
.st-aurora .nav .kbd{margin-left:auto;opacity:.7}
.st-aurora .nav.sel{background:rgba(46,242,201,.12);color:var(--tx);box-shadow:inset 0 0 0 1px rgba(46,242,201,.42)}.st-aurora .nav.sel svg{color:var(--te)}
.st-aurora .rail .safe{margin-top:auto;font-size:13px;padding:12px}
.st-aurora .topb{position:absolute;left:212px;right:0;top:0;height:64px;display:flex;align-items:center;gap:16px;padding:0 16px 0 28px;z-index:4}
.st-aurora .crumb{display:flex;gap:8px;align-items:center;font-size:15px;width:300px;white-space:nowrap}.st-aurora .crumb span{color:var(--mu)}
.st-aurora .cmdk{display:flex;align-items:center;gap:8px;width:380px;height:42px;padding:0 10px 0 14px;border-radius:14px;color:var(--mu);font-size:14.5px;font-weight:700}
.st-aurora .cmdk span:first-of-type{flex:1}
.st-aurora .cmdk.hot{border-color:rgba(46,242,201,.7);box-shadow:0 0 24px rgba(46,242,201,.35)}
.st-aurora .topb .chip{margin-left:auto}
.st-aurora .insp{position:absolute;right:16px;top:76px;bottom:16px;width:308px;border-radius:22px;background:rgba(255,255,255,.055);border:1px solid var(--gb);backdrop-filter:blur(22px);z-index:1}
.st-aurora .cv{position:absolute;left:16px;top:12px;width:712px;bottom:16px}
.st-aurora .ic{position:absolute;right:16px;top:12px;width:308px;bottom:16px}
.st-aurora .lay{position:absolute;inset:0;padding:22px 20px;display:flex;flex-direction:column;gap:12px}
.st-aurora .cl{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}
.st-aurora .ih{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--mu);font-weight:800}
.st-aurora .it{font-size:19px;line-height:1.25;margin:-4px 0 2px}
.st-aurora .rows{display:flex;flex-direction:column}
.st-aurora .row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14.5px}
.st-aurora .row span{color:var(--mu)}.st-aurora .row b{text-align:right}
.st-aurora .lay .opt,.st-aurora .lay .pr{min-height:52px;padding:9px 12px;border-radius:14px}
.st-aurora .lay .opt b,.st-aurora .lay .pr b{font-size:15px}.st-aurora .lay .opt span,.st-aurora .lay .pr span{font-size:13px}
.st-aurora .lay .btn{height:54px;font-size:17px}
.st-aurora .steps{display:flex;flex-direction:column;gap:12px}
.st-aurora .stp{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;color:var(--mu)}
.st-aurora .stp i{width:24px;height:24px;border-radius:50%;border:2px solid rgba(255,255,255,.25);display:grid;place-items:center;flex:none}
.st-aurora .stp.ok{color:var(--tx)}.st-aurora .stp.ok i{background:var(--te);border-color:var(--te);color:#07080F}
.st-aurora .stp.now{color:var(--tx)}.st-aurora .stp.now i{border-color:var(--te);box-shadow:0 0 12px rgba(46,242,201,.7)}
.st-aurora .drop{position:absolute;inset:0;border-radius:24px;border:2px dashed rgba(255,255,255,.22);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center}
.st-aurora .drop.hot{border-color:var(--te);background:rgba(46,242,201,.06);box-shadow:inset 0 0 90px rgba(46,242,201,.14)}
.st-aurora .orb{width:96px;height:96px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.35),rgba(122,92,255,.45) 45%,rgba(46,242,201,.2) 80%);box-shadow:0 0 60px rgba(122,92,255,.45)}
.st-aurora .drop h2{font-size:28px;margin:0}
.st-aurora .drop p{margin:0;color:var(--mu);font-size:16px;display:flex;align-items:center;gap:6px}
.st-aurora .drop .btn{height:50px;padding:0 22px;font-size:16px}
.st-aurora .fcard{position:absolute;left:50%;top:50%;width:200px;margin:-80px 0 0 -100px;padding:10px;border-radius:16px;background:rgba(22,25,44,.95);border:1px solid rgba(255,255,255,.25);box-shadow:0 26px 60px rgba(0,0,0,.6);z-index:6}
.st-aurora .fcard i{display:block;height:116px;border-radius:10px;background-size:cover;background-position:center}
.st-aurora .fcard b{display:block;font-size:14px;margin-top:8px}.st-aurora .fcard span{font-size:12.5px;color:var(--mu)}
.st-aurora .hero{position:relative;width:300px;height:400px;border-radius:24px;background-size:cover;background-position:center;box-shadow:0 40px 80px rgba(0,0,0,.6),0 0 0 1px var(--gb);overflow:hidden}
.st-aurora .palw{position:absolute;inset:0;z-index:30;background:rgba(5,6,12,.55)}
.st-aurora .pal{position:absolute;left:50%;top:116px;width:600px;margin-left:-300px;border-radius:20px;background:#15172B;border:1px solid rgba(255,255,255,.2);box-shadow:0 40px 100px rgba(0,0,0,.6),0 0 60px rgba(122,92,255,.25);overflow:hidden}
.st-aurora .pin{display:flex;align-items:center;gap:12px;padding:18px 20px;border-bottom:1px solid var(--gb);font-size:21px;font-weight:700;height:66px}
.st-aurora .pin svg{color:var(--te)}
.st-aurora .pin .ph{color:var(--mu)}
.st-aurora .car{display:inline-block;width:2px;height:24px;background:var(--te);margin-left:1px}
.st-aurora .pin .kbd{margin-left:auto}
.st-aurora .pset{padding:8px 0}
.st-aurora .prow{display:flex;align-items:center;gap:12px;padding:11px 14px;margin:2px 8px;border-radius:12px;font-size:15.5px;font-weight:700}
.st-aurora .prow small{display:block;font-size:13px;color:var(--mu);font-weight:600}
.st-aurora .prow .kbd{margin-left:auto}
.st-aurora .prow>svg{color:var(--mu);flex:none}
.st-aurora .prow.hi{background:rgba(46,242,201,.12);box-shadow:inset 0 0 0 1px rgba(46,242,201,.5)}.st-aurora .prow.hi>svg{color:var(--te)}
.st-aurora .pfoot{display:flex;gap:18px;padding:12px 20px;color:var(--mu);font-size:13px;border-top:1px solid var(--gb);align-items:center}
.st-aurora .keys{position:absolute;left:50%;bottom:30px;display:flex;gap:8px;align-items:center;padding:10px 14px;border-radius:16px;background:rgba(22,24,44,.95);border:1px solid var(--gb);z-index:32;color:var(--mu);font-weight:800;transform:translateX(-50%)}
.st-aurora .kc{display:inline-grid;place-items:center;min-width:46px;height:42px;padding:0 12px;border-radius:10px;border:1px solid rgba(255,255,255,.3);border-bottom-width:4px;background:rgba(255,255,255,.1);font-size:16px;font-weight:800;color:var(--tx)}
.st-aurora .kc.dn{border-bottom-width:1px;margin-top:3px;background:rgba(46,242,201,.25);border-color:var(--te)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, app = A.app;
    const { seg, ease, set, cls, txt, lerp } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const P = { por: A.photo('portrait'), mnt: A.photo('mountain'), city: A.photo('city') };
    const kbd = k => `<span class="kbd">${k}</span>`;
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><defs><linearGradient id="au-lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2EF2C9"/><stop offset=".55" stop-color="#7A5CFF"/><stop offset="1" stop-color="#FF4FD8"/></linearGradient></defs><rect x="3" y="3" width="58" height="58" rx="18" fill="rgba(255,255,255,.08)" stroke="url(#au-lg)" stroke-width="2.5"/><rect x="12" y="33" width="40" height="12" rx="6" fill="url(#au-lg)"/><path d="M18 33L45 18l3.5 5.5L25 33z" fill="#F2F4FF"/><circle cx="19" cy="39" r="2.6" fill="#07080F"/></svg>`;

    /* ---------- aurora sky (always behind) ---------- */
    const aur = A.el('div', 'aur', S);
    const RW = web ? 1400 : 640, RH = web ? 440 : 250;
    const RB = [['46,242,201', .42, -.33, -.32, -16, 0], ['122,92,255', .5, .22, -.12, 14, 1.7], ['255,79,216', .3, -.18, .36, -9, 3.1], ['56,110,255', .32, .28, .42, 18, 4.4]];
    const rbs = RB.map(([c, a]) => { const e = A.el('i', 'rb', aur); e.style.cssText = `width:${RW}px;height:${RH}px;margin:${-RH / 2}px 0 0 ${-RW / 2}px;background:radial-gradient(closest-side,rgba(${c},${a}),rgba(${c},${(a * .3).toFixed(2)}) 50%,rgba(${c},0))`; return e; });
    const sr = A.rng(31), stars = A.el('i', 'stars', aur);
    stars.style.boxShadow = Array.from({ length: web ? 120 : 60 }, () => `${(sr() * A.W) | 0}px ${(sr() * A.H) | 0}px 0 ${sr() > .85 ? .6 : 0}px rgba(242,244,255,${(.2 + sr() * .5).toFixed(2)})`).join(',');
    A.el('i', 'vig', aur);

    /* ---------- shared pieces ---------- */
    const toast = (c, s) => `<div class="toast ${c}">${I('check', 22, 3)}<span>${s}</span></div>`;
    const bar = (title, chip = '') => `<div class="bar"><div class="bk gl">${I('back', 22, 2.6)}</div><div class="tt">${title}</div>${chip ? `<span class="chip">${chip}</span>` : ''}</div>`;
    const optsH = () => `<div class="opts">${D.shrink.options.map((o, i) => `<div class="opt gl o${i}"><div><b>${o.label}</b><span>${o.hint}</span></div><div class="rad"></div></div>`).join('')}</div>`;
    const stageH = () => `<div class="swrap"><div class="stage"><div class="core"></div><svg class="ring" viewBox="0 0 300 300"><defs><linearGradient id="au-rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2EF2C9"/><stop offset=".5" stop-color="#7A5CFF"/><stop offset="1" stop-color="#FF4FD8"/></linearGradient></defs><circle cx="150" cy="150" r="130" class="trk"/><circle cx="150" cy="150" r="130" class="rg rgG" transform="rotate(-90 150 150)"/><circle cx="150" cy="150" r="130" class="rg rgM" transform="rotate(-90 150 150)"/><circle class="spk" r="6" cx="150" cy="20"/></svg><div class="dust"></div><div class="whole" style="background-image:${P.por}"></div><div class="pz"></div><div class="small" style="background-image:${P.por}"></div></div>
      <div class="num h">4.8 MB</div><div class="from">Target: under 200 KB · ${D.shrink.format}</div><div class="wst">${I('sparkle', 18, 2.2)}<span>Keeping it sharp</span></div></div>`;
    const WW = web ? 330 : 276, WH = web ? 430 : 352;
    const wipeH = () => `<div class="wipe"><div class="wa" style="background-image:${P.por}"></div><div class="wb" style="background-image:${P.por}"></div><svg class="wl" viewBox="0 0 ${WW} ${WH}"><path class="wg"/><path class="wm"/></svg><div class="knob">${I('convert', 18, 2.4)}</div><span class="lab la">Before · ${D.portrait.size}</span><span class="lab lb">After · ${D.shrink.size}</span></div>`;
    const resStats = () => `<div class="rnum"><b class="h grad">${D.shrink.size}</b><span>from ${D.portrait.size} · 96% smaller · looks the same</span></div>`;
    const presets = D.crop.presets.filter((p, i) => [0, 1, 2, 3, 5, 7].includes(i));
    const ratioBox = p => { const m = 28, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(9, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const presH = () => `<div class="prs">${presets.map((p, i) => `<div class="pr gl pr${i}">${ratioBox(p)}<div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div><div class="rad"></div></div>`).join('')}</div>`;
    const cropH = () => `<div class="cropbox"><div class="cimg" style="background-image:${P.mnt}"></div><div class="cfr"><i class="g3"></i><b class="k1"></b><b class="k2"></b><b class="k3"></b><b class="k4"></b></div><div class="ctag">Original · 4000 × 3000</div></div>`;
    const mr = A.rng(5);
    let minor = '';
    for (let i = 0; i < 16; i++) { const x = mr() * 400, y = mr() * 300; minor += `M${x.toFixed(0)} ${y.toFixed(0)}l${(mr() * 160 - 80).toFixed(0)} ${(mr() * 120 - 60).toFixed(0)}`; }
    const mapSVG = `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="#0A0D1C"/><path d="M0 25h400M0 75h400M0 125h400M0 175h400M0 225h400M0 275h400M25 0v300M75 0v300M125 0v300M175 0v300M225 0v300M275 0v300M325 0v300M375 0v300" stroke="rgba(154,163,199,.07)"/>
      <path d="M30 40h60v40H30zM260 30h70v50h-70zM290 220h80v50h-80zM60 230h70v40H60z" fill="rgba(122,92,255,.12)"/><path d="${minor}" stroke="rgba(154,163,199,.24)" stroke-width="1.5" fill="none"/>
      <path d="M-10 196C60 172 110 214 170 188S280 122 410 152" stroke="rgba(46,242,201,.35)" stroke-width="8" fill="none"/>
      <path d="M0 96L400 142M118 0L204 300M0 246L400 206M306 0L252 300M0 30L400 66" stroke="rgba(122,92,255,.5)" stroke-width="3" fill="none"/>
      <text x="200" y="288" text-anchor="middle" fill="rgba(154,163,199,.55)" font-size="10" font-family="Manrope,sans-serif" font-weight="800" letter-spacing="3">MAHARASHTRA · INDIA</text></svg>`;
    const mapH = () => `<div class="map">${mapSVG}<div class="clr"></div><div class="mph" style="background-image:${P.city}"><span>${D.place.file}</span></div><div class="bea"><i class="br"></i><i class="br"></i><i class="br"></i><b class="bc"></b></div><div class="plab"><b>${D.place.city}, ${D.place.country}</b><span>${D.place.lat}, ${D.place.lon}</span></div><div class="sweep"></div><div class="shd">${I('shield', 46, 2)}<b>Location removed</b></div></div>`;
    const warnH = () => `<div class="warn">${I('eye', 22, 2.2)}<span>Anyone you send this photo to can see this place.</span></div><div class="okb">${I('shield', 22, 2.2)}<span>Place removed. Safe to share.</span></div>`;
    const vidH = () => `<div class="vid"><div class="vimg"></div><div class="fan">${Array.from({ length: 9 }, (_, i) => `<i class="fc" style="background-image:${A.frame(i + 2)}"></i>`).join('')}</div><span class="vbadge">${I('video', 16, 2.2)}<span class="vbt">${D.video.file}</span></span><span class="loop">${I('convert', 16, 2.4)}Loops</span></div>`;
    const stripH = () => `<div class="strip-clip"><div class="strip">${Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('')}<div class="selw"><div class="hd hL"></div><div class="hd hR"></div></div></div></div>`;
    const trowH = () => `<div class="trow"><span class="tl1">Pick the part you like</span><b class="tv h">4.0 s</b></div><div class="sub tsub">From 0:04 to 0:08</div><div class="gbar"><i></i></div>`;
    const items = [[P.por, 'Exam photo', `${D.shrink.size} · JPG`], [P.mnt, 'Instagram post', D.crop.px], [P.city, 'City photo', 'Location removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const resH = () => `<div class="rgrid">${items.map((x, i) => `<div class="rc gl r${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><span>${x[2]}</span></div><em>${I('check', 16, 3.2)}</em></div>`).join('')}</div>`;
    const adH = () => `<div class="ad"><i></i><div><small>Ad</small><span>Sponsored. Shown only after your work is done.</span></div></div>`;
    const tiles = [['shrink', 'Make it smaller', 'For forms and email', 'c1'], ['crop', 'Crop for social', 'Instagram, passport', 'c2'], ['pin', 'Where was it taken?', 'See and hide the place', 'c3'],
      ['film', 'Video to GIF', 'Short loops', 'c4'], ['convert', 'Change format', 'HEIC, JPG, PNG', 'c5'], ['grid', 'All tools', '24 more', 'c6']];
    const pg = (c, html) => A.el('div', 'pg ' + c, S, html);

    /* ---------- web chrome ---------- */
    if (web) {
      const nv = [['home', 'Home', ''], ['shrink', 'Shrink', 'S'], ['crop', 'Crop', 'C'], ['pin', 'Location', 'L'], ['film', 'Video to GIF', 'G'], ['convert', 'Convert', 'F'], ['grid', 'All tools', '/']];
      A.el('div', 'rail', S, `<div class="brand">${logo(34)}Image Swiss Knife</div>${nv.map((n, i) => `<div class="nav n${i}">${I(n[0], 20, 2.2)}${n[1]}${n[2] ? kbd(n[2]) : ''}</div>`).join('')}<div class="safe gl">${I('lock', 18, 2.4)}Files stay on this computer</div>`);
      A.el('div', 'topb', S, `<div class="crumb"><b class="cr1">Home</b><span class="cr2"></span></div><div class="cmdk gl">${I('search', 18, 2.2)}<span>Search tools or type a command</span>${kbd('Ctrl')}${kbd('K')}</div><span class="chip">${I('lock', 14, 2.4)}Nothing uploaded</span>`);
      A.el('div', 'insp', S);
    }

    /* ---------- pages ---------- */
    const splash = pg('splash', `<div class="emb"><div class="halo"></div>${logo(128)}</div><h1 class="h">Image Swiss Knife</h1><p>${I('lock', 18, 2.6)}Private photo tools. ${web ? 'Right in your browser.' : 'Right on your phone.'}</p>`);
    const tilesH = `<div class="tiles">${tiles.map((x, i) => `<div class="tile gl t${i + 1}"><div class="ico ${x[3]}">${I(x[0], 26, 2.3)}</div><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}</div>`;
    const thumbs = [P.por, P.mnt, P.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: .8 }), A.photo('abstract', { seed: 9 }), A.frame(7), A.photo('abstract', { seed: 4 }), A.photo('mountain', { sun: .4 }), A.photo('abstract', { seed: 7 })];
    let home, pick, shrinkq, work, res, cropq, crope, priv, gif, done, wS, wC, wP, wG, wD;
    if (app) {
      home = pg('home', `<div class="bar"><div class="brand">${logo(36)}Image Swiss Knife</div><span class="chip" style="margin-left:auto">${I('lock', 14, 2.4)}On device</span></div>
        <div><p class="sub">Good evening</p><h2 class="q h">What do you want to do?</h2></div>${tilesH}<div class="safe gl" style="margin-top:auto">${I('lock', 20, 2.4)}Nothing leaves this phone</div>`);
      pick = pg('pick', `${bar('Choose a photo')}<div class="tabs"><span class="chip">Recent</span><span class="chip w">Camera</span><span class="chip w">Downloads</span></div>
        <div class="gal">${thumbs.map((b, i) => `<div class="th p${i}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 18, 3)}</div>` : ''}</div>`).join('')}</div>
        <div class="selchip gl"><i style="background-image:${P.por}"></i><div><b>${D.portrait.file}</b><span>${D.portrait.size} · ${D.portrait.dims}</span></div></div>
        <div class="foot"><div class="btn next off">Next ${I('next', 22, 2.6)}</div></div>`);
      shrinkq = pg('shrinkq', `${bar('Make it smaller', 'Step 1 of 2')}<div class="fl"><div class="fph" style="background-image:${P.por}"><i class="shine"></i></div><div class="finfo"><b>${D.portrait.file}</b><span>${D.portrait.size}</span><span>${D.portrait.dims}</span></div></div>
        <h2 class="q h">Where will you use it?</h2>${optsH()}`);
      work = pg('work', `${bar('Make it smaller', 'Step 2 of 2')}<div style="flex:1;display:flex;align-items:center;justify-content:center">${stageH()}</div>`);
      res = pg('res', `${bar('Make it smaller', `${I('check', 14, 3)}Done`)}${wipeH()}${resStats()}<div class="chips"><span class="chip w">JPG</span><span class="chip w">${D.shrink.px}</span><span class="chip">${I('check', 14, 3)}Fits the exam form</span></div>
        <div class="foot"><div class="btn save">${I('save', 22, 2.6)}Save</div><div class="btn sec">${I('share', 20, 2.4)}Share</div></div>${toast('ts1', 'Saved to your Gallery')}`);
      cropq = pg('cropq', `${bar('Crop for social')}<h2 class="q h">Where will you post it?</h2>${presH()}`);
      crope = pg('crope', `${bar('Crop for social', D.crop.ratio)}<h2 class="q h">Move the photo to fit</h2>${cropH()}<div class="hint">${I('crop', 20, 2.2)}Drag with one finger. It snaps into place.</div>
        <div class="foot"><div class="btn cdone">${I('check', 22, 3)}Done</div></div>${toast('ts2', `Saved. ${D.crop.px}, ready to post.`)}`);
      priv = pg('priv', `${bar('Where was it taken?')}${mapH()}<div class="place"><b class="h">${D.place.city}, ${D.place.country}</b><span>${D.place.region} · ${D.place.when}</span></div>${warnH()}
        <div class="foot"><div class="btn mg rm">${I('eyeoff', 22, 2.4)}<span class="rml">Remove location</span></div></div>`);
      gif = pg('gif', `${bar('Video to GIF')}${vidH()}${stripH()}${trowH()}<div class="chips gch" style="justify-content:flex-start"><span class="chip w">${D.video.fps} fps</span><span class="chip w">${D.video.frames} frames</span><span class="chip w gsz">Size: about 2 MB</span></div>
        <div class="foot"><div class="btn mk">${I('film', 22, 2.4)}<span class="mkl">Make GIF</span></div></div>${toast('ts4', 'GIF saved to your Gallery')}`);
      done = pg('done', `<div><h2 class="q h" style="font-size:28px">All done</h2><p class="sub">${D.done.count} results · ${D.done.saved}</p></div>${resH()}
        <div class="safe gl">${I('shield', 22, 2.3)}${D.promise}</div><div class="btn saveall"><span class="sa0" style="display:contents">${I('save', 22, 2.6)}Save all 4</span><span class="sa1" style="display:none">${I('check', 22, 3)}4 files saved to Gallery</span></div>${adH()}`);
    } else {
      const lay = (c, h) => `<div class="lay ${c}">${h}</div>`, cl = (c, h) => `<div class="cl ${c}">${h}</div>`;
      home = pg('home', `<div class="cv"><div class="drop"><div class="orb">${I('upload', 40, 2.2)}</div><h2 class="h">Drop a photo or video</h2><p>Or press ${kbd('Ctrl')}${kbd('K')} and type what you need.</p>
          <div class="btn sec">${I('folder', 20, 2.2)}Choose a file</div><p style="font-size:14px">JPG, PNG, HEIC, WEBP, MP4 · it stays on this computer</p>
          <div class="fcard"><i style="background-image:${P.por}"></i><b>${D.portrait.file}</b><span>${D.portrait.size} · Desktop</span></div></div></div>
        <div class="ic">${lay('', `<div class="ih">Keyboard</div><div class="it h">Fast with keys</div><div class="rows">${[['Find any tool', 'Ctrl K'], ['Open a file', 'Ctrl O'], ['Save result', 'Ctrl S'], ['Run the tool', '↵'], ['Undo', 'Ctrl Z']].map(r => `<div class="row"><span>${r[0]}</span><b>${r[1].split(' ').map(kbd).join(' ')}</b></div>`).join('')}</div>
          <div class="safe gl" style="margin-top:auto">${I('lock', 18, 2.4)}Your files never leave this browser.</div>`)}</div>`);
      wS = pg('wS', `<div class="cv">${cl('hero-l', `<div class="hero" style="background-image:${P.por}"><i class="shine"></i></div><span class="chip w">${D.portrait.file} · ${D.portrait.size}</span>`)}${cl('stage-l', stageH())}
          ${cl('wipe-l', `${wipeH()}<span class="sub">Drag the line to compare. It looks the same.</span>`)}${toast('ts1', 'Saved to Downloads')}</div>
        <div class="ic">${lay('i-file', `<div class="ih">File</div><div class="it h">${D.portrait.file}</div><div class="rows"><div class="row"><span>Size</span><b>${D.portrait.size}</b></div><div class="row"><span>Pixels</span><b>${D.portrait.dims}</b></div><div class="row"><span>Type</span><b>HEIC photo</b></div><div class="row"><span>Stored</span><b>This computer</b></div></div><p class="sub" style="margin-top:auto;display:flex;gap:6px;align-items:center;white-space:nowrap">Pick a tool, or press ${kbd('Ctrl')}${kbd('K')}</p>`)}
          ${lay('i-opts', `<div class="ih">Shrink</div><div class="it h">Where will you use it?</div>${optsH()}<p class="sub">${D.shrink.format} · under 200 KB · ${D.shrink.px}</p><div class="btn go" style="margin-top:auto">${I('shrink', 20, 2.4)}Shrink now ${kbd('↵')}</div>`)}
          ${lay('i-work', `<div class="ih">Working</div><div class="it h">Shrinking on this computer</div><div class="steps">${['Read the HEIC photo', `Resize to ${D.shrink.px}`, 'Find the best quality', 'Check it is under 200 KB'].map((s, i) => `<div class="stp s${i}"><i>${I('check', 14, 3.2)}</i>${s}</div>`).join('')}</div><div class="gbar wbar" style="margin-top:8px"><i></i></div>`)}
          ${lay('i-res', `<div class="ih">Result</div>${resStats()}<div class="rows"><div class="row"><span>Format</span><b>${D.shrink.format}</b></div><div class="row"><span>Pixels</span><b>${D.shrink.px}</b></div><div class="row"><span>Exam form</span><b style="color:var(--te)">Fits, under 200 KB</b></div></div>
            <div class="btn save" style="margin-top:auto">${I('save', 20, 2.6)}Save ${kbd('Ctrl')}${kbd('S')}</div><div class="btn sec">${I('share', 20, 2.4)}Share</div>`)}</div>`);
      wC = pg('wC', `<div class="cv">${cropH()}${toast('ts2', `Exported. ${D.crop.px}, ready to post.`)}</div><div class="ic">${lay('', `<div class="ih">Crop</div><div class="it h">Where will you post it?</div>${presH()}<div class="hint" style="font-size:13.5px">${I('crop', 18, 2.2)}Drag the photo. Arrow keys nudge it.</div><div class="btn cdone" style="margin-top:auto">${I('save', 20, 2.6)}Export ${D.crop.px}</div>`)}</div>`);
      wP = pg('wP', `<div class="cv">${mapH()}</div><div class="ic">${lay('', `<div class="ih">Location</div><div class="it h">Where was it taken?</div><div class="place"><b class="h">${D.place.city}, ${D.place.country}</b></div>
          <div class="rows"><div class="row"><span>Region</span><b>${D.place.region}</b></div><div class="row"><span>GPS</span><b class="gps">${D.place.lat}, ${D.place.lon}</b></div><div class="row"><span>Taken</span><b>${D.place.when}</b></div><div class="row"><span>Camera</span><b>${D.place.device}</b></div></div>
          ${warnH()}<div class="btn mg rm" style="margin-top:auto">${I('eyeoff', 20, 2.4)}<span class="rml">Remove location</span></div>`)}</div>`);
      wG = pg('wG', `<div class="cv" style="display:flex;flex-direction:column;gap:18px;justify-content:center">${vidH()}${stripH()}${trowH()}${toast('ts4', 'GIF saved to Downloads')}</div><div class="ic">${lay('', `<div class="ih">Video to GIF</div><div class="it h">${D.video.file}</div>
          <div class="rows"><div class="row"><span>Video length</span><b>${D.video.len}</b></div><div class="row"><span>Part</span><b class="gpart">0:04 to 0:08</b></div><div class="row"><span>Speed</span><b>${D.video.fps} fps</b></div><div class="row"><span>Frames</span><b>${D.video.frames}</b></div><div class="row"><span>GIF size</span><b class="gsz">about 2 MB</b></div></div>
          <div class="btn mk" style="margin-top:auto">${I('film', 20, 2.4)}<span class="mkl">Make GIF</span> ${kbd('↵')}</div>`)}</div>`);
      wD = pg('wD', `<div class="cv" style="display:flex;flex-direction:column;gap:16px;justify-content:center"><div><h2 class="q h" style="font-size:30px">All done</h2><p class="sub" style="font-size:16px">${D.promiseWeb}</p></div>${resH()}</div>
        <div class="ic">${lay('', `<div class="ih">Summary</div><div class="rnum" style="align-items:flex-start;text-align:left"><b class="h grad" style="font-size:28px">${D.done.saved}</b><span>${D.done.count} files ready</span></div><div class="safe gl">${I('shield', 22, 2.3)}${D.promiseWeb}</div>
          <div class="btn saveall">${I('save', 20, 2.6)}Download all 4</div><div style="margin-top:auto">${adH()}</div>`)}${toast('ts3', '4 files saved to Downloads')}</div>`);
      A.el('div', 'palw', S, `<div class="pal"><div class="pin">${I('search', 22, 2.4)}<span class="ptx"></span><i class="car"></i><span class="ph">Type a command</span>${kbd('Esc')}</div>
        <div class="pset ps0">${[['shrink', 'Shrink a photo', 'S'], ['crop', 'Crop for social', 'C'], ['pin', 'Remove location', 'L'], ['film', 'Video to GIF', 'G']].map(r => `<div class="prow">${I(r[0], 20, 2.2)}<div>${r[1]}</div>${kbd(r[2])}</div>`).join('')}</div>
        <div class="pset ps1">${[['Shrink to 200 KB', `For exam or job form · JPG · ${D.shrink.px}`], ['Shrink to 200 KB, keep PNG', 'Keeps a clear background'], ['Shrink to 500 KB', 'For WhatsApp']].map((r, i) => `<div class="prow ${i ? '' : 'hi pr-top'}">${I('shrink', 20, 2.2)}<div>${r[0]}<small>${r[1]}</small></div>${i ? '' : kbd('↵')}</div>`).join('')}</div>
        <div class="pfoot"><span>${kbd('↑')} ${kbd('↓')} move</span><span>${kbd('↵')} run</span><span>${kbd('Esc')} close</span></div></div>`);
      A.el('div', 'keys', S, `<span class="kc k-ctrl">Ctrl</span>+<span class="kc k-k">K</span><span class="kc k-ent" style="display:none">↵ Enter</span>`);
    }
    const toTop = qa('.toast'); toTop.forEach(x => x.parentNode.appendChild(x));

    /* particles for the shrink moment */
    const pz = q('.pz'), PC = 8, PR = 10, pr = A.rng(77), parts = [];
    for (let r = 0; r < PR; r++) for (let c = 0; c < PC; c++) {
      const e = A.el('i', 'pc', pz); e.style.backgroundImage = P.por; e.style.backgroundPosition = `${-c * 22.5}px ${-r * 24}px`;
      const ang = pr() * Math.PI * 2;
      parts.push({ e, hx: (c + .5) * 22.5 - 90, hy: (r + .5) * 24 - 120, ax: Math.cos(ang), ay: Math.sin(ang), d: 50 + pr() * 90, dl: pr(), rot: (pr() - .5) * 220, sw: pr() * 6 });
    }
    const dust = Array.from({ length: 26 }, (_, i) => ({ e: A.el('i', '', q('.dust')), a: pr() * 6.28, r: 112 + pr() * 40, sp: .6 + pr() * 1.2, s: .5 + pr() }));

    /* ---------- pointer ---------- */
    const FX = 640, FY = -120, dragA = web ? 19.9 : 20.1, dragB = web ? 21.2 : 21.4;
    const keys = app ? [
      { t: 4.9, at: '.home .t1', tap: true }, { t: 6.4, at: '.pick .p0', tap: true }, { t: 8.2, at: '.pick .next', tap: true },
      { t: 10.0, at: '.o1', tap: true }, { t: 15.6, at: '.save', tap: true }, { t: 17.5, at: '.home .t2', tap: true }, { t: 18.9, at: '.pr0', tap: true },
      { t: dragA, at: '.cimg', hold: .15 }, { t: dragB, at: '.cimg', drag: true, move: 1.0 }, { t: 22.6, at: '.cdone', tap: true },
      { t: 24.6, at: '.home .t3', tap: true }, { t: 27.6, at: '.rm', tap: true }, { t: 30.5, at: '.home .t4', tap: true },
      { t: 31.4, at: '.hR', hold: .1 }, { t: 32.4, at: '.hR', drag: true, move: .9 }, { t: 33.0, at: '.mk', tap: true }, { t: 35.2, at: '.mk', tap: true },
      { t: 38.2, at: '.saveall', tap: true },
    ] : [
      { t: 5.2, at: () => { const c = A.center('.drop'); return { x: c.x + FX, y: c.y + FY }; }, hold: .2 }, { t: 6.3, at: '.drop', drag: true, move: 1.0 },
      { t: 7.0, at: { x: 948, y: 560 } }, { t: 10.2, at: '.go', tap: true }, { t: 15.6, at: '.save', tap: true },
      { t: 17.4, at: '.rail .n2', tap: true }, { t: 18.6, at: '.pr0', tap: true }, { t: dragA, at: '.cimg', hold: .15 }, { t: dragB, at: '.cimg', drag: true, move: 1.0 },
      { t: 22.6, at: '.cdone', tap: true }, { t: 24.5, at: '.rail .n3', tap: true }, { t: 27.6, at: '.rm', tap: true }, { t: 30.5, at: '.rail .n4', tap: true },
      { t: 31.4, at: '.hR', hold: .1 }, { t: 32.4, at: '.hR', drag: true, move: .9 }, { t: 33.0, at: '.mk', tap: true }, { t: 35.2, at: '.mk', tap: true },
      { t: 38.2, at: '.saveall', tap: true },
    ];
    A.pointer(keys);

    /* ---------- helpers ---------- */
    const show = (p, t, ranges, dz = 1) => {
      let o = 0, s = 1;
      for (const [a, b] of ranges) {
        if (t < a || t > b) continue;
        const e = ease.out(seg(t, a, a + .5)), l = ease.in(seg(t, b - .4, b));
        o = Math.min(e, 1 - l); s = 1 + (1 - e) * .04 * dz - l * .03 * dz;
      }
      set(p, { s, o });
      return o;
    };
    const tilt = (e, t, k = 1, sc = 1, ph = 0) => {
      if (!e) return;
      const rx = Math.sin(t * .9 + ph) * 5 * k, ry = Math.cos(t * .7 + ph) * 8 * k;
      e.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(${(Math.sin(t * 1.1 + ph) * 4 * k).toFixed(1)}px) scale(${sc.toFixed(3)})`;
      const sh = e.querySelector('.shine'); if (sh) sh.style.backgroundPosition = `${(50 + ry * 6).toFixed(1)}% 0`;
    };
    const toastAt = (e, t, a, b) => { const w = A.win(t, a, b, .2, .25); set(e, { y: (1 - ease.out(Math.min(1, w))) * 18, o: w }); };
    const E = {
      tiles: qa('.home .tile'), th0: q('.p0'), ck: q('.pick .ck'), next: q('.next'), selchip: q('.selchip'), o1: q('.o1'), fph: q('.fph'),
      whole: q('.whole'), small: q('.small'), core: q('.core'), rgG: q('.rgG'), rgM: q('.rgM'), spk: q('.spk'), num: q('.num'), from: q('.from'), wst: q('.wst span'),
      wb: q('.wb'), wg: q('.wg'), wm: q('.wm'), knob: q('.knob'), la: q('.la'), lb: q('.lb'), save: q('.save'),
      pr0: q('.pr0'), cimg: q('.cimg'), cfr: q('.cfr'), g3: q('.g3'), ctag: q('.ctag'), cdone: q('.cdone'),
      clr: q('.clr'), bea: q('.bea'), brs: qa('.br'), plab: q('.plab'), sweep: q('.sweep'), shd: q('.shd'), mph: q('.mph'), warn: q('.warn'), okb: q('.okb'), rm: q('.rm'), rml: q('.rml'), gps: q('.gps'),
      vimg: q('.vimg'), fcs: qa('.fc'), selw: q('.selw'), tl1: q('.tl1'), tv: q('.tv'), tsub: q('.tsub'), gbar: q('.trow ~ .gbar'), gbi: q('.trow ~ .gbar i'), mk: q('.mk'), mkl: q('.mkl'), vbt: q('.vbt'), loop: q('.loop'), gsz: q('.gsz'), gpart: q('.gpart'),
      rcs: qa('.rc'), saveall: q('.saveall'), gifth: q('.r3 i'),
    };

    return {
      update(t) {
        /* aurora drift: slow, layered, brighter on result moments */
        const lift = .75 + .25 * A.seg(t, 0, 1.4) + .25 * (A.win(t, 12.6, 14.2, .3, .8) + A.win(t, 28.2, 29.4, .2, .8) + A.win(t, 34.2, 35.4, .2, .8) + A.win(t, 36.2, 38, .3, .9));
        aur.style.opacity = Math.min(1, seg(t, 0, 1.2) * 1.2).toFixed(3);
        rbs.forEach((e, i) => {
          const [, , bx, by, br, ph] = RB[i];
          const x = (bx + Math.sin(t * .13 + ph) * .14) * A.W, y = (by + Math.cos(t * .11 + ph * 1.3) * .08) * A.H;
          e.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${(br + Math.sin(t * .09 + ph) * 9).toFixed(2)}deg) scale(${(1 + .12 * Math.sin(t * .17 + ph)).toFixed(3)},${(1 + .2 * Math.cos(t * .15 + ph)).toFixed(3)})`;
          e.style.opacity = Math.min(1, lift * (.75 + .25 * Math.sin(t * .4 + ph * 2))).toFixed(3);
        });

        /* intro */
        show(splash, t, [[-1, 2.6]], 2);
        if (t < 2.7) {
          const emb = splash.querySelector('.emb svg'), p = ease.out(seg(t, .15, 1.3));
          emb.style.transform = `perspective(600px) rotateY(${((1 - p) * 70).toFixed(1)}deg) scale(${(.7 + .3 * p).toFixed(3)})`;
          set(splash.querySelector('.halo'), { s: .6 + .4 * p + .06 * Math.sin(t * 4), o: p });
          set(splash.querySelector('h1'), { y: 14 * (1 - ease.out(seg(t, .6, 1.2))), o: seg(t, .6, 1.1) });
          set(splash.querySelector('p'), { y: 12 * (1 - ease.out(seg(t, 1.0, 1.6))), o: seg(t, 1.0, 1.5) });
        }

        if (app) {
          show(home, t, [[2.3, 5.3], [16.9, 18.0], [23.9, 25.0], [29.9, 30.9]]);
          E.tiles.forEach((tl, i) => { const p = ease.out(seg(t, 2.5 + i * .08, 3.1 + i * .08)); set(tl, { y: t < 4 ? (1 - p) * 26 : 0, o: t < 4 ? p : 1 }); });
          [4.9, 17.5, 24.6, 30.5].forEach((tt, i) => A.press(E.tiles[i], t, tt));
          show(pick, t, [[5.0, 9.0]]);
          const sel = t >= 6.4;
          cls(E.th0, 'sel', sel); set(E.th0, { s: 1 + .05 * ease.outBack(seg(t, 6.4, 6.8)) });
          set(E.ck, { s: ease.outBack(seg(t, 6.4, 6.75)), o: sel ? 1 : 0 });
          set(E.selchip, { y: 16 * (1 - ease.out(seg(t, 6.5, 6.9))), o: seg(t, 6.5, 6.8) });
          cls(E.next, 'off', !sel); A.press(E.next, t, 8.2);
          show(shrinkq, t, [[8.6, 10.9]]);
          tilt(E.fph, t, 1);
          show(work, t, [[10.6, 13.6]]);
          show(res, t, [[13.2, 17.3]]);
          show(cropq, t, [[17.8, 19.9]]);
          cls(E.pr0, 'on', t >= 18.9); A.press(E.pr0, t, 18.9);
          show(crope, t, [[19.4, 24.2]]);
          show(priv, t, [[24.9, 30.2]]);
          show(gif, t, [[30.7, 36.2]]);
          show(done, t, [[35.9, 40.5]]);
        } else {
          /* web chrome + routing */
          const rail = q('.rail'), topb = q('.topb'), insp = q('.insp'), ci = seg(t, 2.1, 2.7);
          set(rail, { x: -30 * (1 - ease.out(ci)), o: ci }); set(topb, { y: -16 * (1 - ease.out(ci)), o: ci }); set(insp, { x: 30 * (1 - ease.out(ci)), o: ci });
          const navI = t < 8.6 ? 0 : t < 17.4 ? 1 : t < 24.5 ? 2 : t < 30.5 ? 3 : t < 36.1 ? 4 : 0;
          qa('.nav').forEach((n, i) => cls(n, 'sel', i === navI));
          [17.4, 24.5, 30.5].forEach((tt, i) => A.press(q('.rail .n' + (i + 2)), t, tt));
          const cr = t < 6.4 ? ['Home', ''] : t < 8.6 ? ['Home', '/ ' + D.portrait.file] : t < 17.4 ? ['Shrink', '/ ' + D.portrait.file] : t < 24.5 ? ['Crop', '/ IMG_1650.JPG'] : t < 30.5 ? ['Location', '/ ' + D.place.file] : t < 36.1 ? ['Video to GIF', '/ ' + D.video.file] : ['Summary', '/ 4 files'];
          txt(q('.cr1'), cr[0]); txt(q('.cr2'), cr[1]);
          cls(q('.cmdk'), 'hot', t > 6.85 && t < 9);

          show(home, t, [[2.3, 6.9]]);
          const qd = ease.inOut(seg(t, 5.52, 6.3)), land = seg(t, 6.3, 6.6), fin = ease.out(seg(t, 4.5, 5.0));
          const fc = q('.fcard');
          set(fc, { x: (1 - qd) * FX + (1 - fin) * 120, y: (1 - qd) * FY, r: (1 - qd) * 7, s: 1 - .3 * land, o: fin * (1 - land) });
          cls(q('.drop'), 'hot', t > 5.7 && t < 6.6);
          show(wS, t, [[6.4, 17.7]]);
          const heroO = show(q('.hero-l'), t, [[6.4, 10.9]], 2);
          if (heroO > 0) tilt(q('.hero'), t, 1, .92 + .08 * ease.outBack(seg(t, 6.4, 7.0)));
          show(q('.stage-l'), t, [[10.6, 13.6]]); show(q('.wipe-l'), t, [[13.2, 17.8]]);
          show(q('.i-file'), t, [[6.5, 9.0]]); show(q('.i-opts'), t, [[8.8, 10.9]]); show(q('.i-work'), t, [[10.6, 13.6]]); show(q('.i-res'), t, [[13.2, 17.8]]);
          A.press(q('.go'), t, 10.2);
          const wq = seg(t, 10.9, 13.0);
          qa('.stp').forEach((s, i) => { const a = 10.9 + i * .52, b = a + .52; cls(s, 'ok', t >= b); cls(s, 'now', t >= a && t < b); });
          q('.wbar i').style.width = (wq * 100).toFixed(1) + '%';
          /* command palette: Ctrl K once, typed request, Enter */
          const pw = q('.palw'), po = A.win(t, 6.95, 8.95, .2, .25);
          set(pw, { o: po });
          set(q('.pal'), { y: -14 * (1 - ease.out(seg(t, 6.95, 7.25))), s: .98 + .02 * ease.out(seg(t, 6.95, 7.25)) });
          const typedS = A.typed(t, 7.3, 'shrink to 200 kb', 18);
          txt(q('.ptx'), typedS); set(q('.ph'), { o: typedS ? 0 : 1 }); q('.ph').style.display = typedS ? 'none' : '';
          set(q('.car'), { o: (Math.floor(t * 2.6) % 2 === 0 || (t > 7.3 && t < 8.2)) ? 1 : 0 });
          q('.ps0').style.display = typedS.length < 4 ? '' : 'none'; q('.ps1').style.display = typedS.length < 4 ? 'none' : '';
          A.press(q('.pr-top'), t, 8.6);
          const ky = q('.keys'), kOn = Math.max(A.win(t, 6.75, 7.7, .15, .25), A.win(t, 8.45, 9.1, .12, .2));
          ky.style.opacity = kOn.toFixed(3); ky.style.visibility = kOn > 0 ? 'visible' : 'hidden';
          const ent = t > 8.2;
          q('.k-ctrl').style.display = ent ? 'none' : ''; q('.k-k').style.display = ent ? 'none' : ''; q('.k-ent').style.display = ent ? '' : 'none';
          ky.childNodes[1].textContent = ent ? '' : '+';
          cls(q('.k-ctrl'), 'dn', t > 6.85 && t < 7.4); cls(q('.k-k'), 'dn', t > 6.9 && t < 7.35); cls(q('.k-ent'), 'dn', t > 8.58 && t < 8.8);

          show(wC, t, [[17.55, 24.6]]);
          cls(E.pr0, 'on', t >= 18.6); A.press(E.pr0, t, 18.6);
          show(wP, t, [[24.55, 30.6]]);
          show(wG, t, [[30.55, 36.3]]);
          show(wD, t, [[36.0, 40.5]]);
        }

        /* shrink options + particles + ring */
        cls(E.o1, 'on', web ? t >= 8.75 : t >= 10.0); if (app) A.press(E.o1, t, 10.0);
        const T0 = 10.9, T1 = 11.85, sF = .5;
        const inP = t >= T0 && t < 13.15;
        set(E.whole, { o: t < T0 ? 1 : 0, s: 1 + .03 * Math.sin(t * 3) * seg(t, 10.4, T0) });
        set(E.small, { o: t >= 13.0 ? 1 : 0, s: 1 + .08 * (1 - ease.out(seg(t, 13.0, 13.4))) });
        pz.style.display = inP ? '' : 'none';
        if (inP) parts.forEach(p => {
          const p1 = ease.out(seg(t, T0 + p.dl * .3, T0 + .8 + p.dl * .3)), p2 = ease.inOut(seg(t, T1 + p.dl * .3, T1 + .85 + p.dl * .3));
          const sc = lerp(1, sF, p2), fly = p1 * (1 - p2), sw = Math.sin(t * 5 + p.sw) * 10 * fly;
          const x = p.hx * sc + p.ax * p.d * fly + sw, y = p.hy * sc + p.ay * p.d * fly - sw * .5;
          const s = sc * (1 - .5 * fly);
          p.e.style.transform = `translate(${(x - 11.25).toFixed(1)}px,${(y - 12).toFixed(1)}px) rotate(${(p.rot * fly).toFixed(1)}deg) scale(${s.toFixed(3)})`;
          p.e.style.borderRadius = (fly * 50).toFixed(0) + '%';
        });
        const rp = ease.inOut(seg(t, T0, 13.0)), done1 = seg(t, 13.0, 13.4);
        if (E.rgM) {
          E.rgM.style.strokeDashoffset = (816.8 * (1 - rp)).toFixed(1); E.rgG.style.strokeDashoffset = (816.8 * (1 - rp)).toFixed(1);
          E.rgG.style.opacity = (.2 + .35 * done1 * (1 - seg(t, 13.4, 13.8)) + .06 * Math.sin(t * 6)).toFixed(3);
          const a = -Math.PI / 2 + rp * Math.PI * 2;
          E.spk.setAttribute('cx', (150 + 130 * Math.cos(a)).toFixed(1)); E.spk.setAttribute('cy', (150 + 130 * Math.sin(a)).toFixed(1));
          set(E.spk, { o: rp > 0 && rp < 1 ? 1 : 0 });
          set(E.core, { s: .85 + .15 * Math.sin(t * 2.4) + .25 * done1, o: .5 + .5 * seg(t, 10.7, 11.3) });
          txt(E.num, A.fmtBytes(A.count(t, T0, 13.0, D.portrait.bytes, D.shrink.bytes, ease.inOut)));
          cls(E.num, 'ok', t >= 13.0);
          txt(E.wst, t < 11.6 ? 'Keeping it sharp' : t < 12.4 ? 'Trying smaller sizes' : t < 13.0 ? 'Checking: under 200 KB' : 'Fits the exam form');
          dust.forEach(d => { const a2 = d.a + t * d.sp, w = A.win(t, 10.8, 13.5, .4, .4); d.e.style.transform = `translate(${(Math.cos(a2) * d.r).toFixed(1)}px,${(Math.sin(a2) * d.r).toFixed(1)}px) scale(${d.s.toFixed(2)})`; d.e.style.opacity = (w * (.5 + .5 * Math.sin(t * 3 + d.a))).toFixed(2); });
        }
        /* liquid before/after wipe */
        if (E.wb) {
          const ph1 = ease.inOut(seg(t, 13.7, 14.6)), ph2 = ease.spring(seg(t, 14.6, 15.6));
          const P2 = t < 14.6 ? 1 - ph1 : .5 * ph2;
          const amp = 3 + 13 * Math.sin(Math.PI * seg(t, 13.7, 14.6)) + 8 * Math.sin(Math.PI * seg(t, 14.6, 15.3));
          const xs = [], N = 18;
          for (let i = 0; i <= N; i++) { const y = WH * i / N; xs.push([P2 * WW + Math.sin(i / N * Math.PI * 2.2 + t * 4) * amp, y]); }
          E.wb.style.clipPath = `polygon(${WW + 40}px -10px,${xs.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(',')},${WW + 40}px ${WH + 10}px)`;
          const d = 'M' + xs.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L');
          E.wg.setAttribute('d', d); E.wm.setAttribute('d', d);
          const mid = xs[N / 2][0];
          E.knob.style.transform = `translate(${mid.toFixed(1)}px,0)`;
          set(E.la, { o: P2 > .3 ? 1 : seg(P2, .15, .3) }); set(E.lb, { o: P2 < .7 ? 1 : 1 - seg(P2, .7, .85) });
          A.press(E.save, t, 15.6);
          toastAt(q('.ts1'), t, 15.75, 17.2);
        }

        /* crop: liquid frame morph, drag, snap */
        const mT = web ? 18.7 : 19.65, fwA = web ? 560 : 300, fhA = web ? 420 : 225, fwB = web ? 380 : 268, fhB = web ? 475 : 335;
        const mp = ease.spring(seg(t, mT, mT + 1.0)), wob = Math.sin(seg(t, mT, mT + 1.0) * Math.PI);
        const fw = lerp(fwA, fwB, mp) * (1 + .03 * wob), fh = lerp(fhA, fhB, mp) * (1 - .02 * wob);
        if (E.cfr) {
          Object.assign(E.cfr.style, { width: fw.toFixed(1) + 'px', height: fh.toFixed(1) + 'px', marginLeft: (-fw / 2).toFixed(1) + 'px', marginTop: (-fh / 2).toFixed(1) + 'px', borderRadius: (8 + 14 * wob).toFixed(1) + 'px' });
          txt(E.ctag, t < mT ? 'Original · 4000 × 3000' : `${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}`);
          const dq = ease.inOut(seg(t, dragA + .27, dragB)), snap = ease.spring(seg(t, dragB, dragB + .7));
          const dx = web ? -150 : -86, sx = web ? -128 : -70;
          set(E.cimg, { x: lerp(0, dx, dq) + (sx - dx) * snap });
          set(E.g3, { o: .15 + .7 * A.win(t, dragA + .2, dragB + .8, .2, .4) });
          A.press(E.cdone, t, 22.6);
          toastAt(q('.ts2'), t, 22.75, 24.2);
        }

        /* privacy: beacon, light sweep, shield */
        if (E.bea) {
          const sw = ease.inOut(seg(t, 27.75, 28.6)), sxp = lerp(-.15, 1.2, sw);
          E.brs.forEach((b, i) => { const ph = (t * .8 + i / 3) % 1; set(b, { s: 1 + ph * 3.5, o: (1 - ph) * .85 }); });
          const gone = seg(sxp, .5, .62);
          set(E.bea, { o: seg(t, 25.4, 25.7) * (1 - gone), s: .6 + .4 * ease.outBack(seg(t, 25.4, 25.9)) });
          set(E.plab, { o: seg(t, 25.8, 26.2) * (1 - gone) });
          E.plab.style.transform = `translate(-50%,-100%) translateY(${(8 * (1 - ease.out(seg(t, 25.8, 26.2)))).toFixed(1)}px)`;
          E.clr.style.clipPath = `inset(0 ${(100 - Math.max(0, Math.min(1, sxp)) * 100).toFixed(1)}% 0 0)`;
          set(E.clr, { o: sw > 0 ? 1 : 0 });
          E.sweep.style.left = (sxp * 100).toFixed(1) + '%'; set(E.sweep, { o: sw > 0 && sw < 1 ? 1 : 0 });
          const sh = ease.outBack(seg(t, 28.4, 28.9));
          set(E.shd, { s: (.6 + .4 * sh) * (web ? 1.35 : 1), o: seg(t, 28.4, 28.7) });
          tilt(E.mph, t, .8, 1, 1.3);
          const rmd = t >= 27.8;
          E.warn.style.display = rmd ? 'none' : ''; E.okb.style.display = rmd ? '' : 'none';
          set(E.okb, { s: .94 + .06 * ease.outBack(seg(t, 27.8, 28.2)), o: seg(t, 27.8, 28.1) });
          txt(E.rml, rmd ? 'Save safe copy' : 'Remove location');
          cls(E.rm, 'mg', !rmd);
          txt(E.gps, t >= 28.2 ? 'Removed' : `${D.place.lat}, ${D.place.lon}`);
          A.press(E.rm, t, 27.6);
        }

        /* GIF: trim, 3D fan, spin into loop */
        if (E.vimg) {
          const made = t >= 34.3, fi = Math.floor(t * 12) % 12;
          E.vimg.style.backgroundImage = A.frame(made ? fi : 4 + (Math.floor(t * 8) % 4));
          cls(E.vimg, 'gif', made);
          const hq = ease.inOut(seg(t, 31.62, 32.4));
          const L = 4 / 12 * 100, R = (8 - hq) / 12 * 100;
          E.selw.style.left = L + '%'; E.selw.style.width = (R - L) + '%';
          const mk = t > 33.05 && t < 34.3, mp2 = seg(t, 33.1, 34.2);
          txt(E.tl1, made ? 'Your GIF is ready' : mk ? 'Making your GIF' : 'Pick the part you like');
          txt(E.tv, made ? D.video.size : hq > .5 ? D.video.clip : '4.0 s');
          txt(E.tsub, made ? `${D.video.clip} · ${D.video.fps} fps · ${D.video.frames} frames · plays on loop` : mk ? `${Math.round(mp2 * D.video.frames)} of ${D.video.frames} frames` : hq > .5 ? `From ${D.video.from} to ${D.video.to}` : 'From 0:04 to 0:08');
          txt(E.gpart, hq > .5 ? `${D.video.from} to ${D.video.to} (${D.video.clip})` : '0:04 to 0:08 (4.0 s)');
          txt(E.gsz, made ? D.video.size : app ? 'Size: about 2 MB' : 'about 2 MB');
          set(E.gbar, { o: mk ? 1 : 0 }); E.gbi.style.width = (mp2 * 100).toFixed(1) + '%';
          txt(E.mkl, made ? 'Save GIF' : 'Make GIF'); cls(E.mk, 'off', mk);
          A.press(E.mk, t, 33.0); A.press(E.mk, t, 35.2);
          txt(E.vbt, made ? `GIF · ${D.video.size}` : D.video.file); set(E.loop, { o: made ? 1 : 0 });
          set(E.vimg, { o: 1 - .75 * A.win(t, 33.05, 34.45, .2, .2) });
          const f0 = ease.out(seg(t, 33.1, 33.55)), f1 = ease.inOut(seg(t, 33.55, 34.05)), f2 = ease.in(seg(t, 34.0, 34.4));
          const SP = web ? 64 : 32, RR = (web ? 210 : 112) * (1 - f2), spin = (t - 33.55) * 260;
          q('.fan').style.transform = `rotateX(${(-16 * f1).toFixed(1)}deg)`;
          E.fcs.forEach((c, i) => {
            if (t < 33.05 || t > 34.45) { c.style.visibility = 'hidden'; return; }
            const a = (i * 40 + Math.max(0, spin)) * Math.PI / 180;
            const x = lerp((i - 4) * SP * f0, RR * Math.sin(a), f1), z = lerp(-(i - 4) * (i - 4) * 14 * f0, RR * Math.cos(a) - RR, f1);
            const ry = lerp((i - 4) * -9 * f0, a * 180 / Math.PI, f1);
            c.style.visibility = 'visible';
            c.style.transform = `translate3d(${x.toFixed(1)}px,${(Math.sin(i * .9 + t * 3) * 6 * f0 * (1 - f1)).toFixed(1)}px,${z.toFixed(1)}px) rotateY(${ry.toFixed(1)}deg) scale(${(1 - .5 * f2).toFixed(3)})`;
            c.style.opacity = (Math.min(1, f0 * 1.5) * (1 - f2)).toFixed(3);
          });
          toastAt(q('.ts4'), t, 35.35, 36.3);
        }

        /* done */
        E.rcs.forEach((c, i) => { const p = ease.outBack(seg(t, 36.3 + i * .18, 36.8 + i * .18)); set(c, { y: (1 - p) * 30, s: .94 + .06 * p, o: seg(t, 36.3 + i * .18, 36.6 + i * .18) }); });
        if (E.gifth) E.gifth.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        A.press(E.saveall, t, 38.2);
        toastAt(q('.ts3'), t, 38.35, 40.5);
        if (app) { const sv = t >= 38.35; q('.sa0').style.display = sv ? 'none' : 'contents'; q('.sa1').style.display = sv ? 'contents' : 'none'; }
      },
    };
  },
});

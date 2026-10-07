/* =========================================================================
   Image Swiss Knife · Pip Prime mockup (60 s).
   One story, two layouts (app / website), two themes (dark = Turkish blue,
   light = creamy white). Every frame is a pure function of t.
   ========================================================================= */
(() => {
const CSS = String.raw`
.st-pp{--bg:#071A21;--s1:#0E2A34;--s2:#14394A;--ink:#E8F6F8;--mut:#8DB3BE;--line:rgba(140,200,215,.18);--ac:#2BB3D1;--ac2:#6FD6EA;--acInk:#03212B;--gold:#FFC94A;--gold2:#FFE08A;--good:#3DDC97;--warn:#FFB454;--shadow:0 10px 30px rgba(0,0,0,.35);--card:#0E2A34;--glow:rgba(43,179,209,.35);
  font-family:"Hanken Grotesk",system-ui,sans-serif;color:var(--ink);background:var(--bg);font-size:14px;line-height:1.4}
.st-pp[data-th=light]{--bg:#F8F1E0;--s1:#FFFCF4;--s2:#F0E6CE;--ink:#18272D;--mut:#5A6B6F;--line:rgba(70,55,25,.16);--ac:#0E7C99;--ac2:#14A0C2;--acInk:#fff;--gold:#E0A21B;--gold2:#FFD66B;--good:#12875A;--warn:#C97A0B;--shadow:0 10px 26px rgba(90,70,30,.18);--card:#FFFCF4;--glow:rgba(14,124,153,.25)}
.st-pp *{box-sizing:border-box}
.st-pp .dsp{font-family:"Bricolage Grotesque",system-ui,sans-serif;letter-spacing:-.01em}
.st-pp .mono{font-family:"JetBrains Mono",ui-monospace,monospace}
.st-pp svg{display:block}
.st-pp button{font:inherit;color:inherit}
.st-pp .bgd{position:absolute;inset:0;background:radial-gradient(520px 380px at 85% -5%,var(--glow),transparent 70%),radial-gradient(420px 360px at -10% 105%,var(--glow),transparent 70%);pointer-events:none}
.st-pp .grain{position:absolute;inset:0;opacity:.5;pointer-events:none;background-image:radial-gradient(var(--line) 1px,transparent 1.2px);background-size:22px 22px}
/* header */
.st-pp .top{position:absolute;z-index:20;display:flex;align-items:center;gap:10px}
.st-pp.m-app .top{left:14px;right:14px;top:50px;height:50px}
.st-pp.m-web .top{left:260px;right:28px;top:0;height:56px;justify-content:flex-end}
.st-pp .crumb{display:none}
.st-pp.m-web .crumb{display:block;margin-right:auto;font-weight:700;font-size:15px}
.st-pp.m-web .crumb span{color:var(--mut);font-weight:500}
.st-pp .ring{--f:.2;position:relative;width:44px;height:44px;border-radius:50%;flex:none;background:conic-gradient(var(--gold) calc(var(--f)*360deg),var(--line) 0);display:grid;place-items:center;box-shadow:0 0 0 1px var(--line)}
.st-pp .ring::before{content:"";position:absolute;inset:4px;border-radius:50%;background:var(--bg)}
.st-pp .ring b{position:relative;font:800 17px/1 "Bricolage Grotesque",sans-serif}
.st-pp .xpbox{flex:1;min-width:0;max-width:260px}
.st-pp .xpt1{display:flex;justify-content:space-between;font-size:11.5px;font-weight:700;margin-bottom:4px;white-space:nowrap}
.st-pp .xpt1 span{color:var(--mut);font-weight:600}
.st-pp .xpbar{height:8px;border-radius:5px;background:var(--line);overflow:hidden;position:relative}
.st-pp .xpbar i{position:absolute;left:0;top:0;bottom:0;border-radius:5px;background:linear-gradient(90deg,var(--ac),var(--gold));width:50%}
.st-pp .pill{display:flex;align-items:center;gap:5px;height:34px;padding:0 10px;border-radius:17px;background:var(--s1);border:1px solid var(--line);font-weight:800;font-size:13.5px;flex:none}
.st-pp .pill svg{width:16px;height:16px}
/* sidebar (web) */
.st-pp .side{display:none}
.st-pp.m-web .side{display:flex;position:absolute;left:0;top:0;bottom:0;width:232px;padding:18px 14px;flex-direction:column;gap:4px;background:var(--s1);border-right:1px solid var(--line);z-index:15}
.st-pp .logo{display:flex;align-items:center;gap:9px;padding:0 6px 14px;font-weight:800;font-size:15px;line-height:1.1}
.st-pp .logo i{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--ac2),var(--ac));display:grid;place-items:center;color:var(--acInk)}
.st-pp .sl{display:flex;align-items:center;gap:10px;height:40px;padding:0 10px;border-radius:11px;font-weight:600;color:var(--mut);position:relative}
.st-pp .sl.on{background:var(--s2);color:var(--ink);box-shadow:inset 3px 0 0 var(--ac)}
.st-pp .sl svg{width:18px;height:18px;flex:none}
.st-pp .sl .inf{margin-left:auto}
.st-pp .sidefoot{margin-top:auto;padding:10px;border-radius:12px;background:var(--s2);font-size:12px;color:var(--mut)}
.st-pp .sidefoot b{display:block;color:var(--ink);font-size:13px;margin-bottom:2px}
.st-pp .inf{width:20px;height:20px;border-radius:50%;border:1.6px solid currentColor;display:grid;place-items:center;font:italic 700 12px/1 Georgia,serif;flex:none;opacity:.8;background:transparent}
/* work area */
.st-pp .work{position:absolute;overflow:hidden}
.st-pp.m-app .work{left:0;top:104px;width:390px;height:650px}
.st-pp.m-web .work{left:232px;top:56px;width:748px;height:700px}
.st-pp .sc{position:absolute;inset:0;overflow:hidden;background:var(--bg);visibility:hidden}
.st-pp.m-app .sc{padding:6px 16px 0}
.st-pp.m-web .sc{padding:14px 28px 0}
.st-pp .sc h1{font:800 24px/1.1 "Bricolage Grotesque",sans-serif;margin:0;letter-spacing:-.015em}
.st-pp.m-web .sc h1{font-size:30px}
.st-pp .hrow{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.st-pp .hrow .inf{width:24px;height:24px;font-size:14px;color:var(--ac2);margin-left:2px}
.st-pp[data-th=light] .hrow .inf{color:var(--ac)}
.st-pp .sub{color:var(--mut);font-size:13px}
.st-pp .btn{height:46px;border-radius:15px;border:0;background:linear-gradient(180deg,var(--ac2),var(--ac));color:var(--acInk);font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;gap:8px;padding:0 20px;box-shadow:0 6px 18px var(--glow),inset 0 1px 0 rgba(255,255,255,.4)}
.st-pp[data-th=light] .btn{background:linear-gradient(180deg,#1796B6,var(--ac))}
.st-pp .btn.alt{background:var(--s2);color:var(--ink);box-shadow:inset 0 0 0 1px var(--line)}
.st-pp .btn.is-pressed{transform:scale(.95);filter:brightness(1.1)}
.st-pp .btn svg{width:18px;height:18px}
.st-pp .card{background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}
.st-pp .chipb{background:var(--s1);border:1px solid var(--line);border-radius:16px;padding:10px 12px;display:flex;flex-direction:column;gap:2px;font-weight:800;font-size:14px;position:relative}
.st-pp .chipb small{font-weight:600;color:var(--mut);font-size:12px}
.st-pp .chipb.is-pressed{transform:scale(.95)}
.st-pp .chipb.hot{border-color:var(--ac);box-shadow:0 0 0 1px var(--ac),0 6px 18px var(--glow)}
.st-pp .chipb .tag{position:absolute;right:8px;top:-8px;background:var(--gold);color:#2a1d00;font:800 10px/1 "Hanken Grotesk";padding:4px 7px;border-radius:8px}
/* home */
.st-pp .tiles{display:grid;gap:10px}
.st-pp.m-app .tiles{grid-template-columns:repeat(3,1fr)}
.st-pp.m-web .tiles{grid-template-columns:repeat(6,1fr)}
.st-pp .tile{background:var(--s1);border:1px solid var(--line);border-radius:18px;height:92px;padding:12px 10px 8px;display:flex;flex-direction:column;justify-content:space-between;position:relative;font-weight:700;font-size:12.5px;line-height:1.15}
.st-pp .tile .ti{width:34px;height:34px;border-radius:11px;background:var(--s2);display:grid;place-items:center;color:var(--ac2)}
.st-pp[data-th=light] .tile .ti{color:var(--ac)}
.st-pp .tile .ti svg{width:20px;height:20px}
.st-pp .tile .inf{position:absolute;right:7px;top:7px;width:17px;height:17px;font-size:10px;color:var(--mut)}
.st-pp .cta{height:56px;border-radius:18px;font-size:16px;margin-bottom:12px}
.st-pp .homet{text-align:center}
.st-pp .homet h1{font-size:26px}
.st-pp.m-web .homet h1{font-size:40px}
.st-pp .qrow{display:flex;gap:8px;margin-top:10px}
.st-pp .qchip{flex:1;display:flex;align-items:center;gap:7px;background:var(--s1);border:1px solid var(--line);border-radius:12px;padding:8px 9px;font-size:11.5px;font-weight:700;line-height:1.15}
.st-pp .qchip i{width:18px;height:18px;border-radius:50%;border:2px solid var(--mut);flex:none;display:grid;place-items:center;color:transparent}
.st-pp .qchip.ok i{background:var(--good);border-color:var(--good);color:#fff}
.st-pp .qchip i svg{width:11px;height:11px}
/* gallery */
.st-pp .grid{display:grid;gap:8px}
.st-pp.m-app .grid{grid-template-columns:repeat(3,1fr)}
.st-pp.m-web .grid{grid-template-columns:repeat(6,1fr)}
.st-pp .th{position:relative;aspect-ratio:1;border-radius:14px;background-size:cover;background-position:center;overflow:hidden;box-shadow:0 0 0 1px var(--line)}
.st-pp .th em{position:absolute;left:6px;bottom:6px;font:700 10px/1 "JetBrains Mono";font-style:normal;background:rgba(0,0,0,.55);color:#fff;border-radius:6px;padding:3px 5px}
.st-pp .th .pl{position:absolute;right:6px;top:6px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.5);display:grid;place-items:center;color:#fff}
.st-pp .th .pl svg{width:12px;height:12px}
.st-pp .facts{display:flex;align-items:center;gap:10px;margin:12px 0 10px;font-size:13px}
.st-pp .facts .tn{width:40px;height:40px;border-radius:10px;background-size:cover;background-position:center;flex:none;box-shadow:0 0 0 1px var(--line)}
.st-pp .facts b{display:block;font-size:14px}
.st-pp .opts{display:grid;gap:8px}
.st-pp.m-app .opts{grid-template-columns:1fr 1fr}
.st-pp.m-web .opts{grid-template-columns:repeat(4,1fr)}
/* process */
.st-pp .cmp{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.st-pp .ph{width:96px;height:120px;border-radius:14px;background-size:cover;background-position:center;position:relative;flex:none;box-shadow:0 0 0 1px var(--line),var(--shadow)}
.st-pp.m-web .ph{width:190px;height:238px}
.st-pp .ph em{position:absolute;left:6px;bottom:6px;font:700 11px/1 "JetBrains Mono";font-style:normal;background:rgba(0,0,0,.6);color:#fff;border-radius:7px;padding:4px 6px}
.st-pp .arrow{color:var(--mut);flex:none}
.st-pp .arrow svg{width:26px;height:26px}
.st-pp .bigno{font:800 38px/1 "Bricolage Grotesque";letter-spacing:-.02em}
.st-pp.m-web .bigno{font-size:64px}
.st-pp .bigno small{font-size:15px;color:var(--mut);font-weight:700;margin-left:4px}
.st-pp .procbox{padding:14px;display:flex;flex-direction:column;gap:10px}
.st-pp .stage{font:700 12px/1.2 "JetBrains Mono";color:var(--mut);display:flex;justify-content:space-between}
.st-pp .stage b{color:var(--ink)}
.st-pp canvas.isk-bar{width:100%;height:auto;border-radius:14px}
.st-pp .res{position:absolute;left:0;right:0}
.st-pp .okline{display:flex;align-items:center;gap:10px;font-weight:800;font-size:17px}
.st-pp .okline i{width:30px;height:30px;border-radius:50%;background:var(--good);color:#fff;display:grid;place-items:center}
.st-pp .okline i svg{width:17px;height:17px}
.st-pp .stats{display:flex;gap:8px;margin:10px 0 12px}
.st-pp .stat{flex:1;background:var(--s1);border:1px solid var(--line);border-radius:14px;padding:9px 10px;font-size:11.5px;color:var(--mut);font-weight:600}
.st-pp .stat b{display:block;color:var(--ink);font:800 17px/1.15 "Bricolage Grotesque"}
.st-pp .btnrow{display:flex;gap:10px}
.st-pp .btnrow .btn{flex:1}
/* crop */
.st-pp .presets{display:flex;gap:7px;margin-bottom:10px;overflow:hidden}
.st-pp .pre{height:34px;padding:0 12px;border-radius:17px;background:var(--s1);border:1px solid var(--line);display:flex;align-items:center;gap:6px;font-weight:700;font-size:12.5px;white-space:nowrap;flex:none}
.st-pp .pre.on{background:var(--ac);color:var(--acInk);border-color:var(--ac)}
.st-pp .pre.is-pressed{transform:scale(.94)}
.st-pp .cropst{position:relative;border-radius:18px;overflow:hidden;background:#000;box-shadow:0 0 0 1px var(--line),var(--shadow)}
.st-pp.m-app .cropst{width:358px;height:330px}
.st-pp.m-web .cropst{width:692px;height:430px}
.st-pp .cimg{position:absolute;background-size:cover;background-position:center}
.st-pp .cfr{position:absolute;border:2px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(3,14,18,.62);pointer-events:none}
.st-pp .cfr::before,.st-pp .cfr::after{content:"";position:absolute;background:rgba(255,255,255,.35)}
.st-pp .cfr::before{left:33.3%;right:33.3%;top:0;bottom:0;border-left:1px solid rgba(255,255,255,.45);border-right:1px solid rgba(255,255,255,.45);background:none}
.st-pp .cfr::after{top:33.3%;bottom:33.3%;left:0;right:0;border-top:1px solid rgba(255,255,255,.45);border-bottom:1px solid rgba(255,255,255,.45);background:none}
.st-pp .cfr b{position:absolute;width:16px;height:16px;border:3px solid #fff}
.st-pp .cfr b:nth-child(1){left:-3px;top:-3px;border-right:0;border-bottom:0;border-radius:6px 0 0 0}
.st-pp .cfr b:nth-child(2){right:-3px;top:-3px;border-left:0;border-bottom:0;border-radius:0 6px 0 0}
.st-pp .cfr b:nth-child(3){left:-3px;bottom:-3px;border-right:0;border-top:0;border-radius:0 0 0 6px}
.st-pp .cfr b:nth-child(4){right:-3px;bottom:-3px;border-left:0;border-top:0;border-radius:0 0 6px 0}
.st-pp .cinfo{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);background:rgba(3,14,18,.75);color:#fff;border-radius:10px;padding:5px 10px;font:700 12px/1 "JetBrains Mono";white-space:nowrap}
.st-pp .cdone{margin-top:12px}
/* info bubble */
.st-pp .ibub{position:absolute;z-index:40;width:358px;padding:14px 14px 12px;background:var(--card);border:1px solid var(--ac);border-radius:18px;box-shadow:0 18px 40px rgba(0,0,0,.35),0 0 0 4px var(--glow);transform-origin:var(--tl,20px) -6px;visibility:hidden}
.st-pp.m-web .ibub{width:400px}
.st-pp .ibub::before{content:"";position:absolute;left:calc(var(--tl,20px) - 6px);top:-7px;width:12px;height:12px;background:var(--card);border-left:1px solid var(--ac);border-top:1px solid var(--ac);transform:rotate(45deg)}
.st-pp .ibub h4{margin:0 0 6px;font:800 14.5px/1.2 "Bricolage Grotesque"}
.st-pp .ibub p{margin:0;font-size:12.5px;line-height:1.5;color:var(--ink)}
.st-pp .ibub .meta{display:flex;align-items:center;gap:6px;margin-top:9px;padding-top:8px;border-top:1px dashed var(--line);font:600 10.5px/1.2 "JetBrains Mono";color:var(--mut)}
.st-pp .ibub .meta i{width:7px;height:7px;border-radius:50%;background:var(--good);flex:none}
/* privacy */
.st-pp .mapc{position:relative;height:190px;border-radius:18px;overflow:hidden;background:var(--s2);box-shadow:0 0 0 1px var(--line),var(--shadow)}
.st-pp.m-web .mapc{height:300px}
.st-pp .mapc svg.map{position:absolute;inset:0;width:100%;height:100%}
.st-pp .pin{position:absolute;left:58%;top:46%;width:0;height:0}
.st-pp .pin i{position:absolute;left:-14px;top:-40px;width:28px;height:28px;border-radius:50% 50% 50% 0;background:linear-gradient(135deg,var(--warn),#E5532B);transform:rotate(-45deg);box-shadow:0 6px 12px rgba(0,0,0,.35)}
.st-pp .pin i::after{content:"";position:absolute;left:8px;top:8px;width:12px;height:12px;border-radius:50%;background:#fff}
.st-pp .pin u{position:absolute;left:-16px;top:-8px;width:32px;height:14px;border-radius:50%;border:2px solid #E5532B;opacity:.6}
.st-pp .place{display:flex;align-items:center;gap:10px;margin:12px 0 8px}
.st-pp .place b{font:800 22px/1.1 "Bricolage Grotesque";display:block}
.st-pp .place span{color:var(--mut);font-size:12.5px}
.st-pp .warn{display:flex;gap:9px;align-items:flex-start;padding:10px 12px;border-radius:14px;background:rgba(255,180,84,.14);border:1px solid rgba(255,180,84,.45);font-size:12.5px;font-weight:600;margin-bottom:12px}
.st-pp[data-th=light] .warn{background:rgba(201,122,11,.1);border-color:rgba(201,122,11,.4)}
.st-pp .warn svg{width:18px;height:18px;color:var(--warn);flex:none;margin-top:1px}
.st-pp .shield{position:absolute;left:58%;top:50%;width:120px;height:120px;margin:-60px 0 0 -60px}
.st-pp .next{display:flex;gap:8px;align-items:center;margin-top:14px;font-size:12px;color:var(--mut);font-weight:700}
.st-pp .next .chipb{flex-direction:row;align-items:center;gap:8px;padding:9px 12px;flex:none;color:var(--ink)}
.st-pp .next .chipb svg{width:17px;height:17px;color:var(--ac2)}
/* gif */
.st-pp .vid{position:relative;height:200px;border-radius:18px;background-size:cover;background-position:center;box-shadow:0 0 0 1px var(--line),var(--shadow);overflow:hidden}
.st-pp.m-web .vid{height:330px}
.st-pp .strip{position:relative;display:flex;gap:2px;height:46px;margin:12px 0 4px;border-radius:12px;overflow:hidden}
.st-pp .strip i{flex:1;background-size:cover;background-position:center}
.st-pp .sel{position:absolute;top:-2px;bottom:-2px;border:3px solid var(--gold);border-radius:10px;box-shadow:0 0 0 999px rgba(3,14,18,.55)}
.st-pp .sel b{position:absolute;top:50%;width:14px;height:30px;margin-top:-15px;border-radius:5px;background:var(--gold)}
.st-pp .sel b:first-child{left:-11px}.st-pp .sel b:last-child{right:-11px}
.st-pp .gstat{display:flex;justify-content:space-between;font:700 12px/1 "JetBrains Mono";color:var(--mut);margin:6px 2px 12px}
.st-pp .gstat b{color:var(--ink)}
/* rewards */
.st-pp .rays{position:absolute;left:50%;top:44%;width:900px;height:900px;margin:-450px 0 0 -450px;background:repeating-conic-gradient(from 0deg,var(--glow) 0 8deg,transparent 8deg 22deg);-webkit-mask-image:radial-gradient(circle,#000 8%,transparent 62%);mask-image:radial-gradient(circle,#000 8%,transparent 62%)}
.st-pp .lvl{position:absolute;left:0;right:0;text-align:center}
.st-pp .lvl small{font:800 12px/1 "JetBrains Mono";letter-spacing:.2em;color:var(--gold)}
.st-pp .lvl h2{margin:6px 0 4px;font:800 54px/1 "Bricolage Grotesque";letter-spacing:-.03em}
.st-pp .rank{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;border-radius:20px;background:linear-gradient(180deg,var(--gold2),var(--gold));color:#2a1d00;font-weight:800;font-size:13px;box-shadow:0 6px 16px rgba(255,190,50,.35)}
.st-pp .case{position:absolute;left:0;right:0;top:0;bottom:0}
.st-pp .mgrid{display:grid;gap:10px 8px}
.st-pp.m-app .mgrid{grid-template-columns:repeat(4,1fr)}
.st-pp.m-web .mgrid{grid-template-columns:repeat(4,1fr);width:470px;gap:18px 10px}
.st-pp.m-web .md{width:76px;height:86px}
.st-pp.m-web .md .ic{top:20px}
.st-pp.m-web .md .ic svg{width:32px;height:32px}
.st-pp.m-web .mcell{font-size:12px}
.st-pp .mcell{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10.5px;font-weight:700;text-align:center;line-height:1.1;position:relative}
.st-pp .mcell em{position:absolute;top:-4px;right:2px;background:var(--gold);color:#2a1d00;font:800 9px/1 "Hanken Grotesk";font-style:normal;padding:3px 5px;border-radius:7px;z-index:2}
.st-pp .md{position:relative;width:60px;height:68px}
.st-pp .md svg.sh{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 4px 6px rgba(0,0,0,.35))}
.st-pp .md .ic{position:absolute;left:0;right:0;top:15px;display:grid;place-items:center}
.st-pp .md .ic svg{width:26px;height:26px}
.st-pp .md.lock{filter:grayscale(1) brightness(.6);opacity:.55}
.st-pp .md .shine{position:absolute;inset:0;overflow:hidden;-webkit-mask-image:linear-gradient(#000,#000);pointer-events:none}
.st-pp .md .shine i{position:absolute;top:-10px;bottom:-10px;width:16px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.85),transparent);transform:skewX(-20deg)}
.st-pp .awardrow{display:flex;gap:10px;margin-top:14px}
.st-pp.m-web .awardrow{position:absolute;left:520px;top:70px;flex-direction:column;width:190px;margin:0;gap:14px}
.st-pp .award{flex:1;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:16px;background:var(--s1);border:1px solid var(--line);font-size:12px;font-weight:700;line-height:1.2}
.st-pp .award small{display:block;color:var(--mut);font-weight:600;font-size:11px}
.st-pp .award svg.big{width:40px;height:40px;flex:none}
.st-pp .chestw{position:relative;width:78px;height:70px;flex:none}
/* badge popup, toasts, bubble, menu */
.st-pp .bpop{position:absolute;z-index:60;left:50%;width:340px;margin-left:-170px;padding:12px 14px 12px 12px;display:flex;align-items:center;gap:12px;border-radius:20px;background:var(--card);border:1px solid var(--gold);box-shadow:0 18px 40px rgba(0,0,0,.4),0 0 0 4px rgba(255,201,74,.2);visibility:hidden}
.st-pp .bpop small{font:800 10px/1 "JetBrains Mono";letter-spacing:.12em;color:var(--gold)}
.st-pp .bpop b{display:block;font:800 17px/1.15 "Bricolage Grotesque";margin:3px 0 2px}
.st-pp .bpop span{font-size:12px;color:var(--mut)}
.st-pp .xpf{position:absolute;z-index:61;font:800 22px/1 "Bricolage Grotesque";color:var(--gold);text-shadow:0 2px 10px rgba(0,0,0,.35);visibility:hidden;white-space:nowrap}
.st-pp .pip{position:absolute;left:0;top:0;width:400px;height:400px;transform-origin:0 0;z-index:50;pointer-events:none}
.st-pp .pip .cast-svg{width:100%;height:100%;overflow:visible}
.st-pp[data-th=light] .pip .cast-svg{filter:drop-shadow(1.5px 0 0 #7b6443) drop-shadow(-1.5px 0 0 #7b6443) drop-shadow(0 1.5px 0 #7b6443) drop-shadow(0 -1.5px 0 #7b6443) drop-shadow(0 10px 8px rgba(90,70,30,.22))}
.st-pp[data-th=dark] .pip .cast-svg{filter:drop-shadow(0 12px 14px rgba(0,0,0,.4))}
.st-pp .bub{position:absolute;left:0;top:0;z-index:55;visibility:hidden}
.st-pp .bubin{transform-origin:50% 100%;transform:translate(-50%,-100%);position:relative;width:max-content;max-width:300px;padding:10px 13px;border-radius:16px;background:var(--card);border:1px solid var(--line);box-shadow:var(--shadow);font-weight:700;font-size:13.5px;line-height:1.3}
.st-pp .bubin::after{content:"";position:absolute;left:50%;bottom:-6px;width:12px;height:12px;margin-left:-6px;background:var(--card);border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}
.st-pp .bubin.ask{border-color:var(--ac);box-shadow:0 0 0 4px var(--glow),var(--shadow)}
.st-pp .bubin .go{color:var(--ac2);font-weight:800}
.st-pp[data-th=light] .bubin .go{color:var(--ac)}
.st-pp .menu{position:absolute;left:0;top:0;z-index:58;width:0;height:0}
.st-pp .mi{position:absolute;left:-26px;top:-26px;width:52px;height:52px;border-radius:50%;background:var(--card);border:1px solid var(--ac);box-shadow:0 8px 18px rgba(0,0,0,.35),0 0 0 3px var(--glow);display:grid;place-items:center;color:var(--ac2);visibility:hidden}
.st-pp[data-th=light] .mi{color:var(--ac)}
.st-pp .mi svg{width:22px;height:22px}
.st-pp .mi span{position:absolute;top:56px;left:50%;transform:translateX(-50%);font:800 10.5px/1 "Hanken Grotesk";white-space:nowrap;color:var(--ink);background:var(--card);padding:3px 6px;border-radius:7px;border:1px solid var(--line)}
.st-pp .mi.is-pressed{background:var(--ac);color:var(--acInk)}
/* nav (app) */
.st-pp .nav{display:none}
.st-pp.m-app .nav{display:flex;position:absolute;left:0;right:0;bottom:0;height:92px;z-index:30;background:var(--s1);border-top:1px solid var(--line);padding:12px 40px 0;justify-content:space-between;align-items:flex-start}
.st-pp .nv{display:flex;flex-direction:column;align-items:center;gap:3px;font-size:11px;font-weight:700;color:var(--mut);width:64px}
.st-pp .nv svg{width:22px;height:22px}
.st-pp .nv.on{color:var(--ac2)}
.st-pp[data-th=light] .nv.on{color:var(--ac)}
/* rail (web) */
.st-pp .rail{display:none}
.st-pp.m-web .rail{display:block;position:absolute;left:980px;top:56px;right:0;bottom:0;border-left:1px solid var(--line);background:var(--s1);z-index:10;padding:0 18px}
.st-pp .rail .rc{position:absolute;left:14px;right:14px;top:14px;height:296px;border-radius:22px;background:radial-gradient(circle at 50% 40%,var(--glow),transparent 70%),var(--s2);border:1px solid var(--line)}
.st-pp .rail h3{position:absolute;left:18px;top:324px;margin:0;font:800 11px/1 "JetBrains Mono";letter-spacing:.1em;text-transform:uppercase;color:var(--mut)}
.st-pp .rq{position:absolute;left:18px;right:18px;top:346px;display:flex;flex-direction:column;gap:7px}
.st-pp .rq .qchip{flex:none;padding:10px 11px;font-size:12.5px}
.st-pp .rchest{position:absolute;left:18px;right:18px;top:516px;display:flex;align-items:center;gap:12px;padding:12px;border-radius:16px;background:var(--s2);border:1px solid var(--line);font-size:12.5px;font-weight:700}
.st-pp .rchest small{display:block;color:var(--mut);font-weight:600;font-size:11.5px}
/* done */
.st-pp.m-web .dgrid{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start}
.st-pp.m-web .rrow{padding:14px;font-size:14px}
.st-pp.m-web .rrow .tn{width:48px;height:48px}
.st-pp .rrow{display:flex;align-items:center;gap:11px;padding:9px 11px;background:var(--s1);border:1px solid var(--line);border-radius:14px;font-size:12.5px;font-weight:700;line-height:1.2}
.st-pp .rrow .tn{width:38px;height:38px;border-radius:10px;background-size:cover;background-position:center;flex:none;display:grid;place-items:center;color:#fff;background-color:var(--ac)}
.st-pp .rrow .tn svg{width:20px;height:20px}
.st-pp .rrow small{display:block;color:var(--mut);font-weight:600;font-size:11.5px}
.st-pp .rrow .ok{margin-left:auto;color:var(--good)}
.st-pp .rrow .ok svg{width:20px;height:20px}
.st-pp .sumrow{display:flex;gap:8px;margin:10px 0}
.st-pp .sumrow .stat b{font-size:19px}
.st-pp .promise{display:flex;align-items:center;gap:8px;font-weight:700;font-size:13px;justify-content:center;margin:10px 0}
.st-pp .promise svg{width:16px;height:16px;color:var(--good)}
.st-pp .ad{height:62px;border-radius:14px;border:1px dashed var(--mut);display:flex;align-items:center;gap:10px;padding:0 12px;color:var(--mut);font-size:12px;font-weight:600;position:relative}
.st-pp .ad i{position:absolute;left:8px;top:-8px;font:800 9px/1 "JetBrains Mono";font-style:normal;background:var(--bg);padding:2px 5px;letter-spacing:.1em}
.st-pp .ad .adimg{width:46px;height:46px;border-radius:10px;background:linear-gradient(135deg,var(--s2),var(--line))}
/* seo explainer */
.st-pp .owner{display:inline-flex;align-items:center;gap:6px;font:800 10.5px/1 "JetBrains Mono";letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:8px}
.st-pp .owner i{width:7px;height:7px;border-radius:50%;background:var(--gold)}
.st-pp .seog{display:grid;gap:8px}
.st-pp.m-web .seog{grid-template-columns:1fr 1fr;gap:18px}
.st-pp .sbox{padding:10px 12px;border-radius:999px;background:var(--s1);border:1px solid var(--line);display:flex;align-items:center;gap:9px;font-size:15px;font-weight:600;height:44px}
.st-pp .sbox svg{width:18px;height:18px;color:var(--mut)}
.st-pp .sbox u{display:inline-block;width:2px;height:18px;background:var(--ac2);vertical-align:-3px;margin-left:1px;text-decoration:none}
.st-pp .sres{margin-top:8px;padding:10px 12px}
.st-pp .sres .site{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--mut);margin-bottom:4px}
.st-pp .sres .site i{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,var(--ac2),var(--ac));flex:none}
.st-pp .sres .site b{color:var(--ink);font-size:12.5px}
.st-pp .sres h5{margin:0 0 4px;font:700 16px/1.25 "Hanken Grotesk";color:var(--ac2)}
.st-pp[data-th=light] .sres h5{color:var(--ac)}
.st-pp .sres p{margin:0;font-size:12.5px;color:var(--mut);line-height:1.45}
.st-pp .sres p b{color:var(--ink)}
.st-pp.m-app .sitel{display:none}
.st-pp .sitel{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
.st-pp .sitel span{font-size:11.5px;font-weight:700;color:var(--ac2);border:1px solid var(--line);border-radius:10px;padding:4px 8px}
.st-pp[data-th=light] .sitel span{color:var(--ac)}
.st-pp .code{padding:9px 11px;font:500 10.5px/1.5 "JetBrains Mono",monospace;color:var(--mut);white-space:pre-wrap;word-break:break-word;overflow:hidden}
.st-pp .code .h{display:block;background:var(--glow);color:var(--ink);border-radius:6px;margin:0 -5px;padding:0 5px;box-shadow:inset 3px 0 0 var(--ac2)}
.st-pp .code .t{color:var(--ac2)}
.st-pp[data-th=light] .code .t{color:var(--ac)}
.st-pp .codecap{font:700 11px/1.3 "Hanken Grotesk";color:var(--mut);margin:7px 2px 0}
.st-pp .codecap b{color:var(--ink)}
.st-pp .pills{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.st-pp .pills span{font-size:11.5px;font-weight:800;padding:6px 10px;border-radius:12px;background:var(--s2);border:1px solid var(--line)}
.st-pp .endc{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;text-align:center;padding-bottom:70px}
.st-pp .endc h1{font-size:30px}
.st-pp.m-web .endc h1{font-size:46px}
.st-pp .endc p{margin:6px 0 0;color:var(--mut);font-weight:600}
.st-pp .endc .pills{justify-content:center}
.st-pp .end-bg{position:absolute;inset:0;background:radial-gradient(circle at 50% 42%,var(--glow),transparent 62%)}
`;
const styleEl = document.createElement('style'); styleEl.textContent = CSS; document.head.appendChild(styleEl);

/* ----------------------------------------------------------------- data */
const T = { intro: 0, pick: 5, shrink: 11, crop: 20, priv: 29, gif: 36, rew: 43, done: 48, seo: 52, end: 57 };
const INFO = {
  compress: { h: 'About: Compress image to 200 KB', p: 'Compress an image to 200 KB or any size you choose. Pip shrinks JPG, PNG, WebP and HEIC photos until they fit exam forms, job portals and email limits, and keeps the picture as sharp as the limit allows. Everything runs on your device, so nothing is uploaded. Free, with no sign-up.' },
  crop: { h: 'About: Crop photo to 1:1', p: 'Crop a photo to 1:1, a perfect square of 1080 × 1080 pixels, for profile pictures and feed posts. Drag the photo inside the frame, or switch to 4:5, 16:9 or passport size in one tap. Save as JPG, PNG or WebP. The photo never leaves your device. Free, with no sign-up.' },
};
const ICON_TOOLS = [['shrink', 'Compress'], ['crop', 'Crop'], ['convert', 'Convert'], ['pin', 'Location'], ['film', 'Video to GIF'], ['ruler', 'Resize']];
const TIERS = { bronze: ['#F6C9A0', '#C98A52', '#7A4516', '#4A2A0C'], silver: ['#FAFCFE', '#C3CED9', '#6B7888', '#2F3B49'], gold: ['#FFF3B0', '#FFC94A', '#B97A08', '#5A3A00'] };

const MOODS = [[0, 'surprised'], [0.9, 'happy'], [2.8, 'wink'], [3.8, 'idle'], [7.3, 'surprised'], [8.0, 'happy'], [11.3, 'working'], [15.4, 'celebrate'], [18.2, 'idle'], [20.6, 'happy'], [22.2, 'thinking'], [25.3, 'happy'], [26.8, 'working'], [27.9, 'celebrate'], [29.5, 'surprised'], [30.5, 'thinking'], [32.6, 'working'], [34.4, 'celebrate'], [36.0, 'idle'], [38.8, 'working'], [41.6, 'celebrate'], [43.0, 'levelup'], [46.0, 'happy'], [48.0, 'wink'], [49.6, 'happy'], [52.0, 'idle'], [57.0, 'signature']];
const POKES = [20.6, 30.4];

ISK.register({
  id: 'pp', order: 1, name: 'Pip Prime',
  notes: [
    ['Theme:', 'Dark uses Turkish blue, light uses creamy white. Pip changes colour with the theme, the app follows.'],
    ['Game layer:', 'XP ring and bar in the header, a daily streak, three daily quests, badges with bronze, silver and gold tiers, a level-up moment with a rank title, a daily chest and Pip skins.'],
    ['Search:', 'Every tool and preset is its own page (see the address bar in website mode). Each tool has an (i) bubble whose text is in the page from the first load. The last scene shows how search engines read it.'],
  ],
  statusBar: () => (ISK.theme === 'dark' ? 'light' : 'dark'),
  meta(t) {
    if (t < T.shrink) return { url: '/', title: 'Image Swiss Knife: free image tools that run on your device' };
    if (t < T.crop + 1.95) return { url: '/compress-image-to-200kb', title: 'Compress image to 200 KB, free and private | Image Swiss Knife' };
    if (t < T.crop + 5.2) return { url: '/crop', title: 'Crop photo online, free | Image Swiss Knife' };
    if (t < T.priv + 1.6) return { url: '/crop-photo-1-1', title: 'Crop photo to 1:1 (square), free and private | Image Swiss Knife' };
    if (t < T.gif + 0.9) return { url: '/photo-location-checker', title: 'Photo location checker and remover | Image Swiss Knife' };
    if (t < T.rew) return { url: '/video-to-gif', title: 'Video to GIF, free and private | Image Swiss Knife' };
    if (t < T.done) return { url: '/awards', title: 'Your badges and awards | Image Swiss Knife' };
    if (t < T.seo + 4.6) return { url: '/', title: 'Image Swiss Knife: free image tools that run on your device' };
    return { url: '/crop-photo-1-1', title: 'Crop photo to 1:1 (square), free and private | Image Swiss Knife' };
  },

  build(S, A) {
    const { seg, ease, win, lerp, clamp } = A;
    const web = A.web, th = A.theme === 'light' ? 'light' : 'dark';
    S.dataset.th = th;
    const ic = (n, s = 20, w = 2) => A.icon(n, s, w);
    const COL = th === 'dark' ? ['#2BB3D1', '#6FD6EA', '#FFC94A', '#04202A'] : ['#0E7C99', '#14A0C2', '#E0A21B', '#0B2A33'];
    const TRACK = th === 'dark' ? 'rgba(140,200,215,.16)' : 'rgba(70,55,25,.12)';
    const kinds = A.bars(4, A.BAR_KINDS, 5);
    const FLAME = '<svg viewBox="0 0 24 24"><defs><linearGradient id="fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD45A"/><stop offset="1" stop-color="#FF6A2B"/></linearGradient></defs><path fill="url(#fl)" d="M12.3 1.5c.9 3.7-2.9 5-2.9 9.2 0 1 .4 1.9 1 2.5-.2-1.4.6-2.6 1.6-3.4 0 2 2.9 2.7 2.9 5.3 0 1.9-1.5 3.4-3.4 3.4a4.4 4.4 0 0 1-4.4-4.4c0-1 .3-1.800.7-2.500C4.800 12.400 3 14.200 3 16.800 3 20.800 6.800 23 11 23s8-2.300 8-7.400c0-5.200-5-7-6.700-14.100z"/></svg>';

    /* ---------- reusable bits ---------- */
    const medal = (icon, tier, locked) => {
      const c = TIERS[tier], id = 'mg' + tier;
      return `<div class="md${locked ? ' lock' : ''}"><svg class="sh" viewBox="0 0 64 72"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset=".5" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient><linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient></defs><path d="M32 2 60 12v24c0 18-12 29-28 34C16 65 4 54 4 36V12z" fill="url(#${id})"/><path d="M32 8 54 16v20c0 14-9 23-22 28C19 59 10 50 10 36V16z" fill="url(#${id}f)" stroke="rgba(255,255,255,.55)" stroke-width="1.2"/><path d="M32 8 54 16v8C44 22 20 22 10 24v-8z" fill="rgba(255,255,255,.22)"/></svg><div class="ic" style="color:${c[3]}">${locked ? ic('lock', 24, 2.2) : ic(icon, 26, 2.2)}</div><div class="shine"><i></i></div></div>`;
    };
    const cupSVG = '<svg class="big" viewBox="0 0 48 48"><defs><linearGradient id="cup" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF3B0"/><stop offset=".5" stop-color="#FFC94A"/><stop offset="1" stop-color="#B97A08"/></linearGradient></defs><path d="M14 6h20v10c0 8-5 13-10 13S14 24 14 16z" fill="url(#cup)"/><path d="M14 9H7c0 7 3 11 8 12M34 9h7c0 7-3 11-8 12" fill="none" stroke="#E0A21B" stroke-width="3" stroke-linecap="round"/><rect x="21" y="28" width="6" height="8" fill="#E0A21B"/><rect x="15" y="36" width="18" height="6" rx="2" fill="url(#cup)"/><path d="M19 10c0 6 1 9 4 11" stroke="#fff" stroke-opacity=".6" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>';
    const bladeSVG = '<svg class="big" viewBox="0 0 48 48"><defs><linearGradient id="gb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#B97A08"/><stop offset=".4" stop-color="#FFF3B0"/><stop offset="1" stop-color="#FFC94A"/></linearGradient></defs><path d="M30 4C22 10 20 22 22 34l8 0C30 24 32 12 30 4z" fill="url(#gb)"/><rect x="19" y="34" width="14" height="9" rx="3" fill="#7A8696"/><path d="M26 8c-2 6-2 12-1 20" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
    const infBtn = cls => `<span class="inf ${cls || ''}">i</span>`;
    const q = (id, txt) => `<div class="qchip" data-q="${id}"><i>${ic('check', 11, 3.4)}</i>${txt}</div>`;

    /* ---------- skeleton ---------- */
    A.el('div', 'bgd', S); A.el('div', 'grain', S);
    const side = A.el('div', 'side', S,
      `<div class="logo"><i>${ic('scissors', 17, 2.4)}</i><div>Image<br>Swiss Knife</div></div>` +
      [['home', 'Home', 'h'], ['shrink', 'Compress', 'compress'], ['crop', 'Crop', 'crop'], ['pin', 'Location', 'pin'], ['film', 'Video to GIF', 'gif'], ['convert', 'Convert', 'cv'], ['star', 'Awards', 'aw']]
        .map(a => `<div class="sl" data-n="${a[2]}">${ic(a[0], 18, 2)}<span>${a[1]}</span>${a[2] === 'h' || a[2] === 'aw' ? '' : infBtn('')}</div>`).join('') +
      `<div class="sidefoot"><b>Free. Private.</b>Everything happens in your browser. Nothing is uploaded.</div>`);
    const top = A.el('div', 'top', S,
      `<div class="crumb dsp"><span>Tools /</span> <b data-k="crumb">Home</b></div>` +
      `<div class="pill" data-k="streakp">${FLAME}<span data-k="streak">11</span></div>` +
      `<div class="xpbox"><div class="xpt1"><b data-k="rank">Craftsman</b><span data-k="xptx">340 / 500 XP</span></div><div class="xpbar"><i data-k="xpf"></i></div></div>` +
      `<div class="ring" data-k="ring"><b data-k="lv">7</b></div>`);
    const kq = k => top.querySelector(`[data-k="${k}"]`);
    const ring = kq('ring'), lvT = kq('lv'), xpf = kq('xpf'), xptx = kq('xptx'), rankT = kq('rank'), streakT = kq('streak'), streakP = kq('streakp'), crumb = kq('crumb');
    const work = A.el('div', 'work', S);
    const rail = A.el('div', 'rail', S,
      `<div class="rc"></div><h3>Daily quests</h3><div class="rq">${q(1, 'Shrink a photo')}${q(2, 'Crop a photo')}${q(3, 'Remove a location')}</div>` +
      `<div class="rchest"><div class="chestw" data-k="rch"></div><div><span data-k="rchl">Daily chest</span><small data-k="rchs">Finish 3 quests to open it</small></div></div>`);
    const nav = A.el('div', 'nav', S,
      `<div class="nv on">${ic('home', 22)}Tools</div><div class="nv">${ic('star', 22)}Awards</div>`);

    /* ---------- layers ---------- */
    const layers = [];
    const layer = (cls, html, a, dur, kind, o) => { const e = A.el('div', 'sc ' + cls, work, html); const L = { e, a, dur, kind, o: o || {}, b: 1e9 }; if (layers.length) layers[layers.length - 1].b = a + dur; layers.push(L); return e; };

    /* HOME */
    const home = layer('home', `<div class="homet"><h1 class="dsp">${web ? 'Fix any photo.<br>Right here.' : 'Image Swiss Knife'}</h1></div>` +
      `<div style="position:absolute;left:${web ? 28 : 16}px;right:${web ? 28 : 16}px;bottom:${web ? 36 : 14}px"><div class="btn cta">${ic('image', 20, 2.2)}Pick a photo${web ? '<span class="sub" style="margin-left:6px;color:inherit;opacity:.7;font-weight:600">or drop it here</span>' : ''}</div>` +
      `<div class="tiles">${ICON_TOOLS.map(x => `<div class="tile"><div class="ti">${ic(x[0], 20)}</div>${x[1]}${infBtn('')}</div>`).join('')}</div>` +
      (web ? '' : `<div class="qrow">${q(1, 'Shrink a photo')}${q(2, 'Crop a photo')}${q(3, 'Strip a location')}</div>`) + `</div>`, 0, 0, 'fade');
    const cta = home.querySelector('.cta');

    /* PICK */
    const thumbs = [['portrait', 'HEIC'], ['mountain', 'JPG'], ['city', 'JPG'], ['beach', '0:12'], ['abstract', 'PNG'], ['abstract', 'JPG']];
    const pick = layer('pick', `<div class="hrow"><h1 class="dsp">Pick a photo</h1><span class="sub" style="margin-left:auto">Recent</span></div>` +
      `<div class="grid">${thumbs.map((x, i) => `<div class="th th${i}" style="background-image:${A.photo(x[0], i > 3 ? { seed: i - 3 } : {})}"><em>${x[1]}</em>${i === 3 ? `<span class="pl">${ic('play', 12, 2.4)}</span>` : ''}</div>`).join('')}</div>` +
      `<div class="facts"><div class="tn" style="background-image:${A.photo('portrait')}"></div><div><b>IMG_2041.HEIC</b><span class="sub">4.8 MB · 4032 × 3024</span></div></div>` +
      `<div class="opts">` +
      [['For WhatsApp', 'about 500 KB'], ['Exam or job form', 'under 200 KB'], ['For email', 'under 1 MB'], ['Type my own size', 'KB or MB']].map((x, i) => `<div class="chipb ${i === 1 ? 'hot chip-exam' : ''}">${x[0]}<small>${x[1]}</small>${i === 1 ? '<span class="tag">Pip picks</span>' : ''}</div>`).join('') +
      `</div>`, T.pick + 0.5, 0.7, 'push', { dir: 'd' });
    const facts = pick.querySelector('.facts'), optsEl = pick.querySelector('.opts'), th0 = pick.querySelector('.th0'), chipExam = pick.querySelector('.chip-exam');
    const pickGrid = pick.querySelector('.grid');

    /* SHRINK */
    const shrink = layer('shrink', `<div class="hrow"><h1 class="dsp">Compress image to 200 KB</h1>${infBtn('')}</div>` +
      `<div class="cmp"><div class="ph" style="background-image:${A.photo('portrait')}"><em>4.8 MB</em></div><div class="arrow">${ic('next', 26, 2.4)}</div><div class="ph" data-k="after" style="background-image:${A.photo('portrait')}"><em data-k="aft">…</em></div>` +
      `<div style="margin-left:auto;text-align:right"><div class="bigno" data-k="no">4.8<small>MB</small></div><div class="sub" data-k="nosub">Exam or job form</div></div></div>` +
      `<div class="card procbox" data-k="proc"><div class="stage"><b data-k="stg">Reading photo</b><span data-k="pct">0%</span></div><div data-k="barhost"></div><div class="stage"><span>Target: under 200 KB</span><span>JPG · 350 × 450 px</span></div></div>` +
      `<div class="res" data-k="res" style="top:${web ? 330 : 190}px;padding:0 ${web ? 28 : 16}px"><div class="okline"><i>${ic('check', 17, 3)}</i>Done. 96% smaller.</div><div class="stats"><div class="stat">Before<b>4.8 MB</b></div><div class="stat">After<b>196 KB</b></div><div class="stat">Saved<b>4.6 MB</b></div></div><div class="btnrow"><div class="btn btn-save1">${ic('save', 18, 2.2)}Save</div><div class="btn alt">${ic('share', 18, 2.2)}Share</div></div></div>`,
      T.shrink, 0.9, 'iris');
    const sk = k => shrink.querySelector(`[data-k="${k}"]`);
    const shrinkBar = A.bar(sk('barhost'), kinds[0], { w: web ? 640 : 330, h: web ? 66 : 62, colors: COL, track: TRACK, seed: 3 });
    const afterPh = sk('after');
    const saveBtn1 = shrink.querySelector('.btn-save1');

    /* CROP */
    const cropIn = INFO.crop;
    const crop = layer('crop', `<div class="hrow"><h1 class="dsp" data-k="ch">Crop photo</h1><span class="inf crop-i" data-k="ci">i</span></div>` +
      `<div class="presets"><div class="pre">Free</div><div class="pre pre-sq" data-k="psq">1:1 Square</div><div class="pre">4:5 Post</div><div class="pre">9:16 Story</div><div class="pre">16:9</div><div class="pre">Passport</div></div>` +
      `<div class="cropst" data-k="cst"><div class="cimg" data-k="cimg" style="background-image:${A.photo('mountain', { sun: 0.4 })}"></div><div class="cfr" data-k="cfr"><b></b><b></b><b></b><b></b></div><div class="cinfo" data-k="cinfo">4:3 · 1600 × 1200</div></div>` +
      `<div class="cdone"><div class="btn btn-done-crop" data-k="cbtn">${ic('check', 18, 2.6)}Done</div></div>` +
      `<div class="card procbox res" data-k="cmini" style="top:${web ? 120 : 100}px;margin:0 ${web ? 28 : 16}px;left:0;right:0"><div class="stage"><b>Cropping</b><span data-k="cpct">0%</span></div><div data-k="cbar"></div></div>` +
      `<div class="res" data-k="cres" style="top:${web ? 70 : 60}px;padding:0 ${web ? 28 : 16}px"><div class="okline"><i>${ic('check', 17, 3)}</i>Cropped to 1:1</div><div class="cmp" style="margin-top:12px"><div class="ph" style="width:${web ? 190 : 150}px;height:${web ? 190 : 150}px;background-image:${A.photo('mountain', { sun: 0.4 })}"><em>1080 × 1080</em></div><div><div class="bigno" style="font-size:30px">Sharp.</div><div class="sub">Saved as JPG<br>1.1 MB</div></div></div><div class="btnrow"><div class="btn">${ic('save', 18, 2.2)}Save</div><div class="btn alt">${ic('share', 18, 2.2)}Share</div></div></div>` +
      `<div class="ibub" data-k="ib"><h4>${cropIn.h}</h4><p>${cropIn.p}</p><div class="meta"><i></i>This text is in the page from the first load. Search engines can read it.</div></div>`,
      T.crop + 1.85, 0.7, 'wipe', { dir: 'l' });
    const ck = k => crop.querySelector(`[data-k="${k}"]`);
    const cropBar = A.bar(ck('cbar'), kinds[1], { w: web ? 640 : 320, h: 40, colors: COL, track: TRACK, seed: 8 });
    const cimg = ck('cimg'), cfr = ck('cfr'), cst = ck('cst'), ibub = ck('ib'), ciBtn = ck('ci');
    const CW = web ? 692 : 358, CH = web ? 430 : 330;

    /* PRIVACY */
    const MAP = `<svg class="map" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="${th === 'dark' ? '#10303B' : '#EADFC4'}"/><path d="M-10 150C60 120 120 170 200 130S330 60 420 90" fill="none" stroke="${th === 'dark' ? '#1F6C85' : '#8FCBDD'}" stroke-width="22" stroke-linecap="round"/><g fill="none" stroke="${th === 'dark' ? '#1E4658' : '#FFFFFF'}" stroke-width="7" stroke-linecap="round"><path d="M0 40L400 70M60 0L120 220M250 0L300 220M0 190L400 160"/></g><g fill="none" stroke="${th === 'dark' ? '#173A49' : '#F7F0DD'}" stroke-width="3"><path d="M0 100L400 120M170 0L200 220M330 0L350 220M0 20L400 30"/></g><g fill="${th === 'dark' ? '#17475A' : '#CFE3C8'}"><rect x="210" y="150" width="70" height="40" rx="8"/><rect x="20" y="60" width="60" height="34" rx="8"/></g></svg>`;
    const priv = layer('priv', `<div class="hrow"><h1 class="dsp">Where was it taken?</h1>${infBtn('')}</div>` +
      `<div class="mapc">${MAP}<div class="pin"><u data-k="pu"></u><i data-k="pi"></i></div><svg class="shield" data-k="sh" viewBox="0 0 120 120"><defs><linearGradient id="shg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${COL[1]}"/><stop offset="1" stop-color="${COL[0]}"/></linearGradient></defs><circle cx="60" cy="60" r="56" fill="none" stroke="${COL[1]}" stroke-width="3" data-k="shr"/><path d="M60 14 98 28v28c0 24-16 40-38 50C38 96 22 80 22 56V28z" fill="url(#shg)"/><path d="M42 60l13 13 25-27" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" data-k="shc" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg><div class="th" style="position:absolute;left:12px;top:12px;width:62px;height:62px;border-radius:12px;background-image:${A.photo('city')}"></div></div>` +
      `<div class="place"><div><b data-k="pl">Pune, India</b><span>Maharashtra · 18.52° N, 73.86° E</span></div></div>` +
      `<div class="warn" data-k="wn">${ic('eye', 18, 2.2)}<span>Anyone you share this photo with can see where you were on 12 Aug, 6:42 PM.</span></div>` +
      `<div class="btn btn-remove" data-k="rm">${ic('eyeoff', 18, 2.2)}Remove location</div>` +
      `<div class="card procbox res" data-k="pbox" style="top:${web ? 400 : 300}px;margin:0 ${web ? 28 : 16}px;left:0;right:0"><div class="stage"><b>Wiping location</b><span data-k="ppct">0%</span></div><div data-k="pbar"></div></div>` +
      `<div class="next" data-k="nx"><span>Next up</span><div class="chipb chip-gif">${ic('film', 17, 2.2)}Video to GIF</div></div>`,
      T.priv + 1.6, 0.9, 'diamond');
    const pk = k => priv.querySelector(`[data-k="${k}"]`);
    const privBar = A.bar(pk('pbar'), kinds[2], { w: web ? 640 : 330, h: 52, colors: COL, track: TRACK, seed: 12 });

    /* GIF */
    const gif = layer('gif', `<div class="hrow"><h1 class="dsp">Video to GIF</h1>${infBtn('')}</div>` +
      `<div class="vid" data-k="vid" style="background-image:${A.frame(0)}"><div class="th" style="display:none"></div></div>` +
      `<div class="strip" data-k="strip">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<i style="background-image:${A.frame(i, 8)}"></i>`).join('')}<div class="sel" data-k="sel"><b class="hL"></b><b class="hR"></b></div></div>` +
      `<div class="gstat"><span>0:00</span><span data-k="tr"><b>0:04 → 0:07</b> · 3.0 s</span><span>0:12</span></div>` +
      `<div class="btn btn-make" data-k="mk">${ic('sparkle', 18, 2.2)}Make GIF</div>` +
      `<div class="card procbox res" data-k="gbox" style="top:${web ? 486 : 346}px;margin:0 ${web ? 28 : 16}px;left:0;right:0"><div class="stage"><b data-k="gst">Frame 0 of 36</b><span data-k="gpct">0%</span></div><div data-k="gbar"></div></div>` +
      `<div class="res" data-k="gres" style="top:0;bottom:0;background:var(--bg);padding:6px ${web ? 28 : 16}px 0"><div class="hrow"><h1 class="dsp">Your GIF</h1></div><div class="vid" data-k="gv"></div><div class="stats"><div class="stat">Size<b>2.1 MB</b></div><div class="stat">Speed<b>12 fps</b></div><div class="stat">Frames<b>36</b></div></div><div class="btnrow"><div class="btn">${ic('save', 18, 2.2)}Save</div><div class="btn alt">${ic('share', 18, 2.2)}Share</div></div></div>`,
      T.gif + 0.7, 0.9, 'pixels');
    const gk = k => gif.querySelector(`[data-k="${k}"]`);
    const gifBar2 = A.bar(gk('gbar'), kinds[3], { w: web ? 640 : 330, h: 64, colors: COL, track: TRACK, seed: 21 });
    const sel = gk('sel'), strip = gk('strip'), gv = gk('gv'), vid = gk('vid');

    /* REWARDS */
    const BADGES = [['shrink', 'bronze', 'Feather Weight', 1], ['crop', 'bronze', 'Perfect Square', 1], ['shield', 'silver', 'Privacy Guard', 1], ['film', 'bronze', 'Loop Master', 1], ['star', 'gold', 'Streak 12', 0], ['sparkle', 'silver', 'Early Bird', 0], ['convert', 'bronze', 'Format Hopper', 2], ['heart', 'gold', 'Super Fan', 2]];
    const rew = layer('rew', `<div class="rays" data-k="rays"></div><div class="lvl" data-k="lvl" style="top:${web ? 424 : 364}px"><small>LEVEL UP</small><h2 class="dsp">Level 8</h2><span class="rank">${ic('star', 15, 2.4)}Artisan</span><div class="sub" style="margin-top:8px;font-weight:700">+180 XP today</div></div>` +
      `<div class="case" data-k="case" style="padding:${web ? 14 : 6}px ${web ? 28 : 16}px 0"><div class="hrow"><h1 class="dsp">Trophy case</h1><span class="sub" style="margin-left:auto" data-k="bc">4 new badges</span></div>` +
      `<div class="mgrid">${BADGES.map((b, i) => `<div class="mcell" data-i="${i}">${b[3] === 1 ? '<em>NEW</em>' : ''}${medal(b[0], b[1], b[3] === 2)}${b[2]}</div>`).join('')}</div>` +
      `<div class="awardrow"><div class="award">${cupSVG}<div>Weekly Fixer trophy<small>Top 10% of makers</small></div></div><div class="award" data-k="chestaward" style="flex:none"><div class="chestw" data-k="chest"></div><div>Daily chest<small data-k="chs">Tap to open</small></div></div></div></div>`,
      T.rew, 0.8, 'zoom');
    const rk = k => rew.querySelector(`[data-k="${k}"]`);
    const chestHTML = `<svg viewBox="0 0 78 70" width="78" height="70"><defs><linearGradient id="chb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${COL[1]}"/><stop offset="1" stop-color="${COL[0]}"/></linearGradient></defs><rect x="8" y="34" width="62" height="30" rx="6" fill="url(#chb)"/><rect x="8" y="44" width="62" height="5" fill="rgba(0,0,0,.2)"/><rect x="34" y="40" width="10" height="14" rx="3" fill="#FFC94A"/><g class="lid" style="transform-origin:8px 36px"><path d="M8 36V28Q8 14 39 14T70 28v8z" fill="url(#chb)"/><path d="M8 28Q8 14 39 14T70 28" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2"/></g><g class="glow" opacity="0"><circle cx="39" cy="30" r="22" fill="#FFE08A" opacity=".7"/></g></svg>`;
    rk('chest').innerHTML = chestHTML; const rch = rail.querySelector('[data-k="rch"]'); rch.innerHTML = chestHTML;
    const chestLid = rk('chest').querySelector('.lid'), chestGlow = rk('chest').querySelector('.glow');
    const railLid = rch.querySelector('.lid');

    /* DONE */
    const TAPS = 13;
    const done = layer('done', `<div class="hrow"><h1 class="dsp">All done. 4 jobs.</h1></div><div class="dgrid"><div style="display:flex;flex-direction:column;gap:7px">` +
      [['shrink', 'Exam photo', '4.8 MB → 196 KB', A.photo('portrait')], ['crop', 'Square crop', '1080 × 1080', A.photo('mountain', { sun: 0.4 })], ['pin', 'Location removed', 'Pune, India', A.photo('city')], ['film', 'GIF', '2.1 MB · 12 fps', A.frame(3, 12)]].map(r => `<div class="rrow"><div class="tn" style="background-image:${r[3]}"></div><div>${r[1]}<small>${r[2]}</small></div><span class="ok">${ic('check', 20, 3)}</span></div>`).join('') + `</div>` +
      `<div><div class="sumrow"><div class="stat">XP<b style="color:var(--gold)">+180</b></div><div class="stat">Streak<b>12 days</b></div><div class="stat">Taps used<b>${TAPS}</b></div></div>` +
      `<div class="promise">${ic('shield', 16, 2.4)}${web ? 'Done in your browser. Nothing uploaded.' : 'Done on your phone. Nothing uploaded.'}</div>` +
      `<div class="ad"><i>AD</i><div class="adimg"></div><div>Sponsored space. Shown only after your work is done.</div></div></div></div>`,
      T.done, 0.8, 'blinds');

    /* SEO */
    const QS = [
      { q: 'crop photo to 1:1', crumb: 'imageswissknife.com › crop-photo-1-1', title: 'Crop photo to 1:1 (square) online, free and private', snip: 'Crop any photo to a perfect <b>1:1</b> square, 1080 × 1080 pixels, in one tap. Works on your device. Nothing is uploaded.', links: ['Crop to 4:5', 'Crop to 16:9', 'Passport size'], url: '/crop-photo-1-1', h1: 'Crop photo to 1:1', txt: 'Crop a photo to 1:1, a perfect square of 1080 × 1080 pixels, for profile pictures and feed posts…' },
      { q: 'compress image to 200kb', crumb: 'imageswissknife.com › compress-image-to-200kb', title: 'Compress image to 200 KB for exam and job forms', snip: 'Shrink a <b>JPG, PNG or HEIC</b> photo to <b>200 KB</b> or any size you pick. Free, with no sign-up. Runs in your browser.', links: ['To 100 KB', 'To 500 KB', 'To 1 MB'], url: '/compress-image-to-200kb', h1: 'Compress image to 200 KB', txt: 'Compress an image to 200 KB or any size you choose. Pip shrinks JPG, PNG, WebP and HEIC photos…' },
      { q: 'video to gif', crumb: 'imageswissknife.com › video-to-gif', title: 'Video to GIF maker, free and private', snip: 'Trim a clip, pick the speed and make a <b>looping GIF</b> that is small enough to share. Your video never leaves your device.', links: ['GIF to MP4', 'GIF speed', 'Resize GIF'], url: '/video-to-gif', h1: 'Video to GIF', txt: 'Turn a video into a GIF. Trim up to 10 seconds of an MP4, MOV or WebM clip, choose the frame rate…' },
    ];
    const seo = layer('seo', `<div class="owner"><i></i>How people find us</div><h1 class="dsp" style="margin-bottom:10px;font-size:${web ? 30 : 21}px">Every tool is its own page</h1>` +
      `<div class="seog"><div><div class="sbox">${ic('search', 18, 2.2)}<span data-k="qt"></span><u></u></div><div class="card sres" data-k="sr"></div></div>` +
      `<div><div class="card code" data-k="code"></div><div class="codecap" data-k="cc"></div></div></div>` +
      `<div class="pills"><span>One page per tool</span><span>One build: web + Android</span></div>`,
      T.seo, 0.9, 'curtain');
    const sk2 = k => seo.querySelector(`[data-k="${k}"]`);

    /* END card */
    const endc = layer('endc endc', `<div class="end-bg"></div><h1 class="dsp">Image Swiss Knife</h1><p>Do more with your photos. Free. Private. Web and Android.</p><div class="pills"><span>No uploads</span><span>No sign-up</span><span>Always free</span></div>`, T.end, 1.0, 'iris');
    endc.style.padding = '0 20px 70px';
    const endHost = endc;

    /* ---------- overlays ---------- */
    const pipEl = A.el('div', 'pip', S);
    const cdef = CAST.chars.find(c => c.id === (th === 'dark' ? 'pip-dark' : 'pip-light'));
    const rig = CAST.mount(cdef, pipEl);
    const bub = A.el('div', 'bub', S, '<div class="bubin"></div>');
    const bubIn = bub.firstChild;
    const menu = A.el('div', 'menu', S);
    const MENU = [['shrink', 'Compress'], ['crop', 'Crop'], ['convert', 'Convert'], ['pin', 'Location'], ['film', 'GIF']];
    const mis = MENU.map((m, i) => A.el('div', 'mi mi-' + ['compress', 'crop', 'convert', 'loc', 'gif'][i], menu, ic(m[0], 22, 2.2) + `<span>${m[1]}</span>`));
    const BP = [
      { a: 15.9, b: 19, tier: 'bronze', icon: 'shrink', name: 'Feather Weight', desc: 'Shrank your first photo today', xp: 40, at: 15.55 },
      { a: 28.2, b: 30, tier: 'bronze', icon: 'crop', name: 'Perfect Square', desc: 'Cropped a photo to 1:1', xp: 30, at: 28.0 },
      { a: 34.7, b: 36.6, tier: 'silver', icon: 'shield', name: 'Privacy Guard', desc: 'Removed a location tag', xp: 50, at: 34.5 },
      { a: 41.9, b: 43.1, tier: 'bronze', icon: 'film', name: 'Loop Master', desc: 'Made your first GIF', xp: 60, at: 41.7 },
    ];
    const bpops = BP.map(b => A.el('div', 'bpop', S, `${medal(b.icon, b.tier)}<div><small>NEW BADGE</small><b>${b.name}</b><span>${b.desc}</span></div>`));
    const xpfs = BP.map(b => A.el('div', 'xpf', S, `+${b.xp} XP`));
    const confs = [A.confetti(S, { x: web ? 606 : 195, y: web ? 330 : 330, count: 46, colors: [COL[0], COL[1], COL[2], '#fff'], seed: 3, shape: 'star' }), A.confetti(S, { x: web ? 606 : 195, y: web ? 420 : 400, count: 90, colors: [COL[0], COL[1], COL[2], '#fff', '#FFE08A'], seed: 7, power: 760, shape: 'coin' })];

    /* pointer script */
    const KEYS = [
      { t: 5.4, at: '.cta', tap: true }, { t: 7.2, at: '.th0', tap: true }, { t: 10.6, at: '.chip-exam', tap: true },
      { t: 18.0, at: '.btn-save1', tap: true }, { t: 20.7, at: '.pip', ay: 0.6, tap: true }, { t: 21.7, at: '.mi-crop', tap: true },
      { t: 22.9, at: '.crop-i', tap: true }, { t: 25.2, at: '.pre-sq', tap: true }, { t: 25.7, at: '.cst', ax: 0.5, ay: 0.5, hold: 0.1 },
      { t: 26.8, at: '.cst', ax: 0.56, ay: 0.46, drag: true }, { t: 27.35, at: '.btn-done-crop', tap: true },
      { t: 30.4, at: '.bubin', tap: true }, { t: 32.6, at: '.btn-remove', tap: true }, { t: 36.4, at: '.chip-gif', tap: true },
      { t: 37.3, at: '.hL', hold: 0.1 }, { t: 38.2, at: '.hL', drag: true }, { t: 38.75, at: '.btn-make', tap: true },
    ];
    A.pointer(KEYS);

    /* ---------- timelines ---------- */
    const POSE = web
      ? [[0, 606, 420, 0], [0.9, 606, 400, 340], [4.0, 606, 400, 340], [4.9, 1130, 232, 230], [42.8, 1130, 232, 230], [43.6, 606, 330, 380], [45.4, 606, 330, 380], [46.2, 1130, 232, 230], [56.3, 1130, 232, 230], [57.6, 606, 360, 340], [60, 606, 360, 340]]
      : [[0, 195, 330, 0], [0.9, 195, 300, 260], [4.0, 195, 300, 260], [4.9, 195, 764, 150], [42.8, 195, 764, 150], [43.6, 195, 340, 320], [45.4, 195, 340, 320], [46.2, 195, 764, 150], [56.3, 195, 764, 150], [57.6, 195, 330, 290], [60, 195, 330, 290]];
    const pose = t => {
      let i = 0; while (i < POSE.length - 2 && t >= POSE[i + 1][0]) i++;
      const a = POSE[i], b = POSE[i + 1], p = ease.inOut(seg(t, a[0], b[0]));
      let box = lerp(a[3], b[3], p);
      if (i === 0) box = b[3] * ease.outBack(seg(t, 0.1, 0.9));
      return { x: lerp(a[1], b[1], p), y: lerp(a[2], b[2], p), box };
    };
    const moodAt = t => {
      let i = 0; while (i < MOODS.length - 1 && t >= MOODS[i + 1][0]) i++;
      return { mood: MOODS[i][1], mt: t - MOODS[i][0], prev: i ? MOODS[i - 1][1] : 'idle' };
    };
    const SAY = [
      { a: 0.9, b: 3.8, at: 'hero', t: 'Hi, I am Pip! What shall we fix today?' },
      { a: 8.1, b: 10.6, at: 'pip', t: '4.8 MB is big for a form. Try <span class="go">200 KB</span>?' },
      { a: 16.2, b: 18.8, at: 'pip', t: 'Squeezed! Saved 4.6 MB.' },
      { a: 28.4, b: 29.6, at: 'pip', t: 'Perfect square!' },
      { a: 29.6, b: 30.9, at: 'pip', ask: 1, t: 'This photo knows where it was taken. <span class="go">Check?</span>' },
      { a: 35.0, b: 36.4, at: 'pip', t: 'Gone. No one can trace this one.' },
      { a: 42.2, b: 43.0, at: 'pip', t: 'Looping nicely!' },
      { a: 46.4, b: 47.9, at: 'pip', t: 'Open your chest!' },
      { a: 48.3, b: 51.8, at: 'pip', t: `${TAPS} taps. 4 jobs. See you tomorrow!` },
    ];
    let lastSay = -1;
    const xpTotal = t => 340 + 40 * ease.out(seg(t, 15.5, 16.3)) + 30 * ease.out(seg(t, 27.8, 28.5)) + 50 * ease.out(seg(t, 34.4, 35.1)) + 60 * ease.out(seg(t, 41.7, 42.5));
    const fmtKB = n => (n >= 1024 ? (n / 1024).toFixed(1) + ' MB' : Math.round(n) + ' KB');
    const rr = A.rng(4);

    const pipC = { x: 195, y: 700 };
    function update(t) {
      /* ---- layers ---- */
      layers.forEach(L => {
        const p = seg(t, L.a, L.a + L.dur);
        if (t >= L.b) { L.e.style.visibility = 'hidden'; return; }
        const o = Object.assign({}, L.o);
        if (L.kind === 'iris') { const c = A.center('.chip-exam'); o.cx = c.x - work.offsetLeft; o.cy = c.y - work.offsetTop; if (L.e === endc) { o.cx = work.offsetWidth / 2; o.cy = work.offsetHeight * 0.45; } }
        if (L.kind === 'diamond') { o.cx = work.offsetWidth / 2; o.cy = work.offsetHeight * 0.45; }
        A.reveal(L.e, L.kind, p, Object.assign({ W: work.offsetWidth, H: work.offsetHeight }, o));
        if (p <= 0.001) L.e.style.visibility = 'hidden';
      });
      layers[0].e.style.visibility = t < layers[1].a + layers[1].dur ? 'visible' : 'hidden';

      /* ---- header: XP, level, streak ---- */
      const total = xpTotal(t), lvUp = t >= 43.2;
      const frac = lvUp ? clamp((total - 500) / 700) : clamp(total / 500);
      xpf.style.width = (frac * 100).toFixed(1) + '%';
      ring.style.setProperty('--f', frac.toFixed(3));
      const txt = lvUp ? `${Math.round(total - 500)} / 700 XP` : `${Math.round(Math.min(total, 500))} / 500 XP`;
      A.txt(xptx, txt); A.txt(lvT, lvUp ? '8' : '7'); A.txt(rankT, lvUp ? 'Artisan' : 'Craftsman');
      A.txt(streakT, t >= 16.0 ? '12' : '11');
      A.set(streakP, { s: 1 + 0.25 * Math.sin(Math.PI * seg(t, 16.0, 16.8)) * (t >= 16.0 && t < 16.8 ? 1 : 0) });
      A.set(ring, { s: 1 + (t >= 43.0 && t < 44.0 ? 0.18 * Math.sin(Math.PI * seg(t, 43.0, 44.0)) : 0) });
      const crumbN = t < T.shrink ? 'Home' : t < T.crop + 1.85 ? 'Compress image' : t < T.priv + 1.6 ? 'Crop photo' : t < T.gif + 0.7 ? 'Photo location' : t < T.rew ? 'Video to GIF' : t < T.done ? 'Awards' : 'Home';
      A.txt(crumb, crumbN);
      /* quests */
      const qs = [15.8, 28.2, 34.8];
      S.querySelectorAll('.qchip[data-q]').forEach(e => e.classList.toggle('ok', t >= qs[+e.dataset.q - 1]));
      const nOk = qs.filter(x => t >= x).length;
      if (web) {
        const rs = rail.querySelector('[data-k="rchs"]'); A.txt(rs, nOk >= 3 ? (t >= 46.5 ? 'Opened' : 'Ready to open!') : `${nOk} of 3 quests done`);
        A.cls(rail.querySelector('.rchest'), 'ready', nOk >= 3);
      }
      /* sidebar active */
      if (web) {
        const act = t < T.shrink ? 'h' : t < T.crop + 1.85 ? 'compress' : t < T.priv + 1.6 ? 'crop' : t < T.gif + 0.7 ? 'pin' : t < T.rew ? 'gif' : t < T.done ? 'aw' : 'h';
        side.querySelectorAll('.sl').forEach(e => e.classList.toggle('on', e.dataset.n === act));
      } else {
        nav.children[1].classList.toggle('on', t >= T.rew && t < T.done);
        nav.children[0].classList.toggle('on', !(t >= T.rew && t < T.done));
      }

      /* ---- pick ---- */
      const picked = seg(t, 7.2, 7.9);
      th0.style.transform = `scale(${1 + 0.06 * Math.sin(Math.PI * Math.min(1, picked * 1.2))})`;
      th0.style.boxShadow = picked > 0 ? `0 0 0 3px var(--ac),0 8px 24px var(--glow)` : '';
      pickGrid.style.opacity = (1 - 0.55 * picked).toFixed(2);
      th0.style.opacity = '1';
      A.set(facts, { o: ease.out(seg(t, 7.8, 8.3)), y: (1 - ease.out(seg(t, 7.8, 8.3))) * 10 });
      A.set(optsEl, { o: ease.out(seg(t, 8.3, 8.9)), y: (1 - ease.out(seg(t, 8.3, 8.9))) * 14 });
      A.press(chipExam, t, 10.6);

      /* ---- shrink ---- */
      const sp = seg(t, 11.4, 15.4), spr = A.rush(sp);
      const showProc = t < 15.6;
      A.set(sk('proc'), { o: showProc ? clamp(seg(t, 11.0, 11.5)) * (1 - seg(t, 15.3, 15.7)) : 0 });
      shrinkBar.update(sp, t);
      const bytes = 4.8 * 1024 - (4.8 * 1024 - 196) * spr;
      const no = sk('no');
      A.html(no, (bytes >= 1024 ? (bytes / 1024).toFixed(1) : Math.round(bytes)) + `<small>${bytes >= 1024 ? 'MB' : 'KB'}</small>`);
      A.txt(sk('pct'), Math.round(sp * 100) + '%');
      A.txt(sk('stg'), sp < 0.15 ? 'Reading photo' : sp < 0.55 ? 'Trying quality 84, 76, 68' : sp < 0.9 ? 'Fitting to 200 KB' : sp < 1 ? 'Checking sharpness' : 'Done');
      A.txt(sk('aft'), sp >= 1 ? '196 KB' : fmtKB(bytes));
      afterPh.style.filter = `blur(${((1 - spr) * 0 + 0).toFixed(1)}px)`;
      A.set(sk('res'), { o: ease.out(seg(t, 15.5, 16.1)), y: (1 - ease.out(seg(t, 15.5, 16.1))) * 18 });
      A.txt(sk('nosub'), sp >= 1 ? 'Exam form ✓' : 'Exam or job form');
      A.press(saveBtn1, t, 18.0);

      /* ---- crop ---- */
      const toSq = ease.inOut(seg(t, 25.2, 25.8));
      const fw0 = web ? 560 : 300, fh0 = fw0 * 3 / 4, fs = web ? 340 : 250;
      const fw = lerp(fw0, fs, toSq), fh = lerp(fh0, fs, toSq);
      const fx = (CW - fw) / 2, fy = (CH - fh) / 2 - 6;
      Object.assign(cfr.style, { left: fx + 'px', top: fy + 'px', width: fw + 'px', height: fh + 'px' });
      const iw = fs * 1.55, ih = iw * 0.75, drag = ease.inOut(seg(t, 25.8, 26.8));
      Object.assign(cimg.style, { width: iw + 'px', height: ih + 'px', left: ((CW - iw) / 2 + lerp(0, -iw * 0.06, drag)) + 'px', top: ((CH - ih) / 2 + lerp(0, ih * 0.04, drag) - 6) + 'px' });
      A.txt(ck('cinfo'), toSq > 0.5 ? '1:1 · 1080 × 1080' : '4:3 · 1600 × 1200');
      A.txt(ck('ch'), t >= 25.2 ? 'Crop photo to 1:1' : 'Crop photo');
      ck('psq').classList.toggle('on', t >= 25.25); A.press(ck('psq'), t, 25.2);
      A.press(ck('cbtn'), t, 27.35);
      ck('cst').style.opacity = (1 - seg(t, 27.4, 27.6)).toFixed(2); crop.querySelector('.presets').style.opacity = (1 - seg(t, 27.4, 27.6)).toFixed(2);
      A.set(ck('cdone') || ck('cbtn').parentNode, { o: 1 - seg(t, 27.4, 27.6) });
      ck('ci').style.boxShadow = t > 22.5 && t < 23.0 ? '0 0 0 5px var(--glow)' : '';
      const ibOn = win(t, 23.0, 25.0, 0.25, 0.25);
      const ibl = web ? Math.max(0, ciBtn.offsetLeft - 8) : 16; ibub.style.left = ibl + 'px'; ibub.style.top = (ciBtn.offsetTop + 36) + 'px'; ibub.style.setProperty('--tl', (ciBtn.offsetLeft + 12 - ibl) + 'px');
      A.set(ibub, { s: 0.85 + 0.15 * ease.outBack(ibOn), o: ibOn });
      const cmo = win(t, 27.5, 28.0, 0.05, 0.2);
      A.set(ck('cmini'), { o: cmo > 0 ? 1 : 0 });
      cropBar.update(seg(t, 27.4, 28.0), t); A.txt(ck('cpct'), Math.round(seg(t, 27.4, 28.0) * 100) + '%');
      A.set(ck('cres'), { o: ease.out(seg(t, 27.95, 28.4)), y: (1 - ease.out(seg(t, 27.95, 28.4))) * 12 });

      /* ---- privacy ---- */
      A.set(pk('wn'), { o: ease.out(seg(t, 31.2, 31.7)), y: (1 - ease.out(seg(t, 31.2, 31.7))) * 10 });
      const pw = pk('pl'); A.txt(pw, t < 34.6 ? 'Pune, India' : 'No location tag'); A.txt(priv.querySelector('.place span'), t < 34.6 ? 'Maharashtra · 18.52° N, 73.86° E' : 'Hidden from everyone you share it with');
      pk('pi').style.transform = `rotate(-45deg) translateY(${(Math.sin(t * 5) * 2).toFixed(1)}px)`;
      const pul = (t * 1.2) % 1; pk('pu').style.transform = `scale(${(0.6 + pul * 1.6).toFixed(2)})`; pk('pu').style.opacity = (0.7 * (1 - pul)).toFixed(2);
      const rmOn = t < 32.7; A.set(pk('rm'), { o: rmOn ? 1 : 0 }); A.press(pk('rm'), t, 32.6);
      A.set(pk('wn'), { o: ease.out(seg(t, 31.2, 31.7)) * (t < 32.7 ? 1 : 0), y: (1 - ease.out(seg(t, 31.2, 31.7))) * 10 });
      const pp = seg(t, 32.7, 34.4);
      A.set(pk('pbox'), { o: win(t, 32.7, 34.5, 0.15, 0.2) > 0 ? 1 : 0 });
      privBar.update(pp, t); A.txt(pk('ppct'), Math.round(pp * 100) + '%');
      pk('pi').parentNode.style.opacity = (1 - seg(t, 34.2, 34.7)).toFixed(2);
      const shOn = win(t, 34.4, 36.4, 0.2, 0.4);
      A.set(pk('sh'), { o: shOn, s: 0.6 + 0.4 * ease.outBack(seg(t, 34.4, 35.1)) });
      pk('shc').setAttribute('stroke-dashoffset', (1 - ease.out(seg(t, 34.8, 35.4))).toFixed(3));
      const sr = seg(t, 34.5, 35.6); pk('shr').setAttribute('r', (56 + sr * 30).toFixed(1)); pk('shr').setAttribute('opacity', (1 - sr).toFixed(2));
      A.set(pk('nx'), { o: ease.out(seg(t, 35.2, 35.7)) });

      /* ---- gif ---- */
      const trim = ease.inOut(seg(t, 37.3, 38.2));
      const sW = strip.offsetWidth || (web ? 692 : 358);
      const selL = lerp(sW * 0.5, sW * 0.33, trim), selR = lerp(sW * 0.8, sW * 0.58, trim);
      sel.style.left = selL + 'px'; sel.style.width = (selR - selL) + 'px';
      vid.style.backgroundImage = A.frame(Math.floor(t * 12) % 12, 12);
      A.press(gk('mk'), t, 38.75);
      const gm = t < 38.9; gk('mk').style.opacity = gm ? '1' : '0';
      gk('mk').style.visibility = gm ? 'visible' : 'hidden';
      const gp = seg(t, 38.9, 41.6);
      A.set(gk('gbox'), { o: win(t, 38.9, 41.6, 0.2, 0.2) > 0 ? 1 : 0 });
      gifBar2.update(gp, t); A.txt(gk('gpct'), Math.round(gp * 100) + '%');
      A.txt(gk('gst'), `Frame ${Math.min(36, Math.round(A.rush(gp) * 36))} of 36`);
      const gres = ease.out(seg(t, 41.6, 42.2)); A.set(gk('gres'), { o: gres, y: (1 - gres) * 20 });
      gv.style.backgroundImage = A.frame(Math.floor(t * 12) % 12, 12);

      /* ---- rewards ---- */
      const lvOn = win(t, 43.0, 45.5, 0.4, 0.6);
      A.set(rk('rays'), { o: lvOn * 0.9, r: t * 14 });
      A.set(rk('lvl'), { o: lvOn, s: 0.7 + 0.3 * ease.outBack(seg(t, 43.1, 43.8)) });
      const caseOn = ease.out(seg(t, 45.2, 45.9));
      A.set(rk('case'), { o: caseOn, y: (1 - caseOn) * 30 });
      rew.querySelectorAll('.mcell').forEach(c => {
        const i = +c.dataset.i, p = ease.outBack(seg(t, 45.4 + i * 0.07, 45.9 + i * 0.07));
        A.set(c, { s: clamp(p, 0, 1.15), o: seg(t, 45.4 + i * 0.07, 45.6 + i * 0.07) });
        const sh = c.querySelector('.shine i'); if (sh) { const ps = seg(t, 46.0 + i * 0.12, 46.7 + i * 0.12); sh.style.left = (-20 + ps * 90) + 'px'; }
      });
      const op = seg(t, 46.6, 47.4);
      chestLid.style.transform = `rotate(${(-70 * ease.out(op)).toFixed(1)}deg)`;
      chestGlow.setAttribute('opacity', (ease.out(op) * 0.9 * (1 - seg(t, 47.8, 48))).toFixed(2));
      A.txt(rk('chs'), op > 0.3 ? 'Gold Blade skin!' : 'Tap to open');
      if (railLid) railLid.style.transform = `rotate(${(-70 * ease.out(op)).toFixed(1)}deg)`;

      /* ---- seo ---- */
      const qi = t < 54.2 ? 0 : t < 55.7 ? 1 : 2, q0 = qi === 0 ? 52.4 : qi === 1 ? 54.2 : 55.7;
      const Q = QS[qi], typedQ = A.typed(t, q0, Q.q, 22);
      A.txt(sk2('qt'), typedQ);
      const showRes = typedQ.length >= Q.q.length;
      A.html(sk2('sr'), `<div class="site"><i></i><div><b>Image Swiss Knife</b><br>${Q.crumb}</div></div><h5>${Q.title}</h5><p>${Q.snip}</p><div class="sitel">${Q.links.map(l => `<span>${l}</span>`).join('')}</div>`);
      A.set(sk2('sr'), { o: showRes ? ease.out(seg(t, q0 + Q.q.length / 22, q0 + Q.q.length / 22 + 0.3)) : 0, y: showRes ? (1 - ease.out(seg(t, q0 + Q.q.length / 22, q0 + Q.q.length / 22 + 0.3))) * 8 : 8 });
      A.html(sk2('code'), `<span class="t">&lt;title&gt;</span>${Q.title.split(',')[0]} | Image Swiss Knife<span class="t">&lt;/title&gt;</span>\n<span class="t">&lt;link</span> rel="canonical" href="${Q.url}"<span class="t">&gt;</span>\n<span class="t">&lt;h1&gt;</span>${Q.h1}<span class="t">&lt;/h1&gt;</span>\n<span class="t">&lt;button</span> aria-label="About this tool"<span class="t">&gt;</span>i<span class="t">&lt;/button&gt;</span>\n<span class="h"><span class="t">&lt;section</span> class="info"<span class="t">&gt;</span>\n  ${Q.txt}\n<span class="t">&lt;/section&gt;</span></span>`);
      A.html(sk2('cc'), '<b>The (i) text is real page text</b>, in the HTML from the first load. Search engines read it, people open it.');
      A.set(sk2('code').parentNode, { o: ease.out(seg(t, 53.0, 53.6)) });

      /* ---- pip ---- */
      const ps = pose(t), md = moodAt(t);
      const ptr = A.pointerAt(t);
      pipC.x = ps.x; pipC.y = ps.y;
      const lk = { x: clamp((ptr.x - ps.x) / 220, -1, 1), y: clamp((ptr.y - ps.y) / 260, -1, 1) };
      const dr = { x: Math.sin(t * 0.7) * 0.5, y: Math.sin(t * 0.5) * 0.15 };
      const lw = clamp(ptr.vis * 1.2);
      const lastP = POKES.filter(x => x <= t).pop();
      const hov = ptr.vis > 0.5 && Math.hypot(ptr.x - ps.x, ptr.y - ps.y) < 80;
      const small = ps.box < 150;
      A.set(pipEl, { x: ps.x - ps.box / 2, y: ps.y - ps.box / 2, s: Math.max(0.01, ps.box / 400), o: ps.box > 4 ? 1 : 0 });
      rig.update({ t, mood: md.mood, mt: md.mt, prev: md.prev, blend: ease.out(clamp(md.mt / 0.35)), look: { x: lerp(dr.x, lk.x, lw) * (small ? 0.7 : 1), y: lerp(dr.y, lk.y, lw) * (small ? 0.7 : 1) }, poke: small && lastP == null ? 1e9 : (lastP == null ? 1e9 : t - lastP), pokes: 0, hover: hov, small });

      /* ---- speech ---- */
      const say = SAY.find(s => t >= s.a && t < s.b);
      if (say) {
        const on = win(t, say.a, say.b, 0.25, 0.25);
        if (say.t !== lastSay) { A.html(bubIn, say.t); lastSay = say.t; bubIn.classList.toggle('ask', !!say.ask); }
        const bx = ps.x, by = ps.y - ps.box * 0.44 - 4;
        bub.style.transform = `translate(${bx}px,${by}px)`;
        bubIn.style.transform = `translate(-50%,-100%) scale(${(0.8 + 0.2 * ease.outBack(on)).toFixed(3)})`;
        bub.style.opacity = on.toFixed(2); bub.style.visibility = on > 0.01 ? 'visible' : 'hidden';
      } else { bub.style.visibility = 'hidden'; lastSay = -1; }

      /* ---- quick menu ---- */
      const mOpen = ease.outBack(seg(t, 20.85, 21.35)) * (1 - ease.in(seg(t, 21.85, 22.2)));
      menu.style.transform = `translate(${ps.x}px,${ps.y - (web ? 0 : 0)}px)`;
      const N = mis.length, R = web ? 112 : 118;
      mis.forEach((m, i) => {
        const ang = web ? (100 + i * (160 / (N - 1))) * Math.PI / 180 : (-160 + i * (140 / (N - 1))) * Math.PI / 180;
        const ox = 0, oy = web ? 0 : -22;
        const r = R * mOpen;
        const sel2 = i === 1 && t >= 21.7 ? 1 + 0.22 * Math.sin(Math.PI * seg(t, 21.7, 22.1)) : 1;
        m.style.transform = `translate(${(Math.cos(ang) * r + ox).toFixed(1)}px,${(Math.sin(ang) * r + oy).toFixed(1)}px) scale(${(clamp(mOpen, 0, 1.1) * sel2).toFixed(3)})`;
        m.style.visibility = mOpen > 0.02 ? 'visible' : 'hidden';
        A.press(m, t, i === 1 ? 21.7 : -9);
      });

      /* ---- badge popups + xp floaters ---- */
      bpops.forEach((e, i) => {
        const b = BP[i], inn = ease.outBack(seg(t, b.a, b.a + 0.45)), out = ease.in(seg(t, b.b - 0.35, b.b));
        const y0 = web ? 72 : 112;
        A.set(e, { y: y0 - (1 - inn) * 90 - out * 70, s: 1, o: win(t, b.a, b.b, 0.2, 0.3) });
        const sh = e.querySelector('.shine i'); if (sh) sh.style.left = (-20 + seg(t, b.a + 0.3, b.a + 1.0) * 90) + 'px';
        const f = xpfs[i], fp = seg(t, b.at, b.at + 1.4);
        const fx = web ? 1130 : 270, fy = web ? 84 : 118;
        A.set(f, { x: fx, y: fy - 40 * ease.out(fp), s: 0.8 + 0.4 * ease.outBack(clamp(fp * 3)), o: fp > 0 ? (1 - seg(t, b.at + 0.9, b.at + 1.4)) : 0 });
      });
      confs[0].update(t - 15.45); confs[1].update(t - 43.1);
      /* mood for pip poke on bubble tap handled by moods */
    }
    return { update };
  },
});
})();

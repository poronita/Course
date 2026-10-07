/* Style 1 — Swiss Blade. The app is a pocket knife: every tool is a steel blade that folds out of one red handle. */
ISK.register({
  id: 'swiss',
  order: 1,
  name: 'Swiss Blade',
  tagline: 'Every tool folds out of one red knife.',
  concept: 'The app is a pocket knife. Home shows your photo above a closed red handle. Tap the knife and steel blades fan out, each engraved with a tool name. Pick a blade and it swings out and opens into a machined steel panel. Close the panel and the blade snaps back into the handle.',
  wins: [
    'The knife is a brand object people remember and show to friends.',
    'Six blades means six choices at most. The fan shows every tool at once, with no menus to dig through.',
    'Steel plates and engraved labels feel precise and premium, so people trust the quality of the result.',
  ],
  risks: [
    'Angled labels on the blades are harder to read than a flat list. Each blade needs big, short words.',
    'The fan, swing and snap take time. Frequent users will want a setting to skip the motion.',
  ],
  scores: { simple: 3, fun: 4, wow: 5, effort: 4 },
  palette: ['#D7261E', '#9E1A14', '#EEF1F4', '#A7B0BA', '#1E2228', '#FFFFFF'],
  type: 'Archivo everywhere. Labels use its widest cut (125%) in capitals with wide spacing, like engraving on steel. Body text stays at normal width so it reads easily.',
  motion: 'Blades fan out on a spring, a glint sweeps the steel, and each blade snaps shut with a tiny click shake.',
  notes: {
    intro: 'The knife greets you by opening all six blades, snaps shut, and settles at the bottom as the home control.',
    pick: 'Tap the empty bay to open the gallery. On the web, drag a stack of files from the desktop onto the canvas.',
    shrink: 'The Shrink blade opens into a gauge. The needle sweeps while the size counts down to 196 KB.',
    crop: 'Steel rulers frame the 4:5 crop and show 1080 and 1350 pixels. The user drags the photo inside the frame.',
    privacy: 'The Place blade shows Pune on a map with a pin. One button lifts the pin away and stamps the photo safe.',
    gif: 'The GIF blade is a film strip. Red trim handles pick 3.0 s, and the button fills up as frames are made.',
    done: 'The knife is shut. Four engraved tags list the results, and one small Ad plate comes last.',
  },
  statusBar: 'light',
  css: `
.st-swiss{--red:#D7261E;--redd:#9E1A14;--sl:#EEF1F4;--sd:#A7B0BA;--gr:#1E2228;--mut:#58616C;
  --steel:linear-gradient(168deg,#F6F8F9 0%,#E1E5E9 34%,#C6CDD4 64%,#E6E9EC 100%);
  --brush:repeating-linear-gradient(90deg,rgba(255,255,255,.22) 0 1px,rgba(0,0,0,.028) 1px 2px,rgba(255,255,255,0) 2px 4px);
  background:#121417;color:var(--sl);font-family:Archivo,system-ui,sans-serif;font-stretch:100%;font-size:15px;line-height:1.3}
.st-swiss .rig{position:absolute;inset:0}
.st-swiss .bg{position:absolute;inset:0;background:radial-gradient(110% 60% at 50% 8%,#2E343C 0%,#1C2025 52%,#111316 100%)}
.st-swiss .bg::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.02) 0 1px,transparent 1px 3px)}
.st-swiss .eng{font-stretch:125%;font-weight:800;text-transform:uppercase;letter-spacing:.12em}
.st-swiss .plate{background:var(--brush),var(--steel);color:var(--gr);box-shadow:inset 0 1px 0 #fff,inset 0 -1px 0 rgba(0,0,0,.25),0 18px 40px rgba(0,0,0,.55)}
.st-swiss .plate .eng{color:#46505A;text-shadow:0 1px 0 rgba(255,255,255,.85)}
.st-swiss .scr{position:absolute;width:9px;height:9px;border-radius:50%;background:linear-gradient(45deg,transparent 42%,#6E7883 42% 58%,transparent 58%),radial-gradient(circle at 35% 30%,#fff,#B9C1C9 60%,#7F8994);box-shadow:0 1px 0 rgba(255,255,255,.8),inset 0 0 0 .5px rgba(0,0,0,.3)}
.st-swiss .scr.s1{left:8px;top:8px}.st-swiss .scr.s2{right:8px;top:8px}.st-swiss .scr.s3{left:8px;bottom:8px}.st-swiss .scr.s4{right:8px;bottom:8px}
/* header */
.st-swiss .hdr{position:absolute;left:20px;right:20px;top:54px;height:40px;display:flex;align-items:center;gap:10px;z-index:3}
.st-swiss .hdr .wm{font-size:15px;color:#fff;letter-spacing:.16em}
.st-swiss .lock{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:10.5px;color:#C9D0D7;border:1px solid rgba(255,255,255,.16);border-radius:999px;padding:6px 10px;background:rgba(255,255,255,.04)}
.st-swiss .lock svg{color:var(--red)}
.st-swiss.m-web .hdr{left:0;right:0;top:0;height:56px;padding:0 20px;background:linear-gradient(#1F2328,#181B1F);border-bottom:1px solid rgba(255,255,255,.07);gap:14px}
.st-swiss .crumb{margin-left:40px;font-size:14px;color:#9AA3AD}.st-swiss .crumb em{font-style:normal;color:#fff;font-weight:600}
.st-swiss .kbtn{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:#fff;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:9px;padding:7px 10px}
.st-swiss kbd{font:700 10.5px/1 Archivo,sans-serif;font-stretch:125%;letter-spacing:.06em;color:#1E2228;background:linear-gradient(#F4F6F8,#C9D0D7);border-radius:5px;padding:4px 6px;box-shadow:0 2px 0 #6F7882}
.st-swiss.m-web .hdr .lock{margin-left:auto}
/* canvas / bay */
.st-swiss .cv{position:absolute;left:20px;top:104px;width:350px;height:384px;z-index:1}
.st-swiss.m-web .cv{left:200px;top:56px;width:704px;height:580px}
.st-swiss .empty{position:absolute;inset:0;border-radius:20px;border:2px dashed rgba(201,208,215,.35);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#C9D0D7;text-align:center;background:rgba(255,255,255,.025)}
.st-swiss.m-web .empty{inset:40px 60px 50px}
.st-swiss .empty svg{color:var(--red)}
.st-swiss .empty b{font-size:17px;color:#fff}.st-swiss .empty span{font-size:14px;color:#9AA3AD}
.st-swiss .empty.hot{border-color:var(--red);background:rgba(215,38,30,.1)}
.st-swiss .ph{position:absolute;inset:0;border-radius:20px;background-size:cover;background-position:center;box-shadow:0 18px 40px rgba(0,0,0,.5),inset 0 0 0 1px rgba(255,255,255,.12)}
.st-swiss.m-web .ph{left:50%;top:48%;width:627px;height:470px;margin:-235px 0 0 -313px;border-radius:10px}
.st-swiss.m-web .ph.k-portrait{width:352px;margin-left:-176px}
.st-swiss .cap{position:absolute;left:12px;bottom:12px;font-size:10.5px;color:var(--gr);background:var(--brush),var(--steel);border-radius:8px;padding:7px 10px;box-shadow:0 4px 12px rgba(0,0,0,.35);text-shadow:0 1px 0 #fff;z-index:2;white-space:nowrap}
.st-swiss.m-web .cap{left:50%;bottom:12px;transform:translateX(-50%)}
.st-swiss .stag{position:absolute;right:-14px;top:22px;background:var(--red);color:#fff;border-radius:10px;padding:10px 14px;box-shadow:0 10px 24px rgba(0,0,0,.45);z-index:3;min-width:150px;text-align:center}
.st-swiss .stag small{display:block;font-size:10px;opacity:.85}.st-swiss .stag b{font-size:28px;font-variant-numeric:tabular-nums;font-stretch:112%}
/* strip / files */
.st-swiss .stg{position:absolute;inset:0;z-index:2}
.st-swiss .strip{position:absolute;left:20px;top:502px;display:flex;gap:9px;z-index:1;align-items:center}
.st-swiss .strip .lb{font-size:10px;color:#8D96A0;writing-mode:vertical-rl;transform:rotate(180deg);margin-right:2px}
.st-swiss .strip .r{position:relative;width:56px;height:56px;border-radius:12px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
.st-swiss .strip .r.on{box-shadow:0 0 0 3px var(--red),0 0 0 5px #121417}
.st-swiss .strip .r em,.st-swiss .files em{position:absolute;right:4px;bottom:4px;width:20px;height:20px;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;display:grid;place-items:center}
.st-swiss .files{position:absolute;left:0;top:56px;bottom:0;width:200px;background:#17191D;border-right:1px solid rgba(255,255,255,.07);padding:18px 12px;display:flex;flex-direction:column;gap:8px;z-index:4}
.st-swiss .files .fh{font-size:11px;color:#8D96A0;padding:0 4px 4px}
.st-swiss .files .f{position:relative;display:flex;gap:10px;align-items:center;padding:7px;border-radius:10px;border:1px solid transparent}
.st-swiss .files .f i{position:relative;width:42px;height:42px;border-radius:8px;background-size:cover;background-position:center;flex:none}
.st-swiss .files .f b{display:block;font-size:13px;color:#fff;font-weight:600}.st-swiss .files .f span{font-size:11.5px;color:#8D96A0}
.st-swiss .files .f.on{background:rgba(215,38,30,.14);border-color:rgba(215,38,30,.6)}
.st-swiss .files .dz{margin-top:6px;border:1.5px dashed rgba(201,208,215,.25);border-radius:10px;padding:12px 8px;font-size:10px;color:#8D96A0;display:flex;gap:8px;align-items:center;justify-content:center}
.st-swiss .files .safe{margin-top:auto;font-size:12.5px;color:#C9D0D7;display:flex;gap:8px;align-items:flex-start;line-height:1.35}
.st-swiss .files .safe svg{color:var(--red);flex:none}
/* knife */
.st-swiss .scrim{position:absolute;inset:0;background:rgba(9,10,12,.74);z-index:5}
.st-swiss .knife{position:absolute;inset:0;z-index:6;pointer-events:none}
.st-swiss .blade{position:absolute;transform-origin:0 50%;filter:drop-shadow(0 6px 8px rgba(0,0,0,.5))}
.st-swiss .bs{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.16) 0 1px,rgba(0,0,0,.03) 1px 3px),linear-gradient(180deg,#FAFBFC 0%,#E3E7EB 30%,#BCC4CC 66%,#9EA8B2 82%,#E3E7EB 100%);clip-path:polygon(0 22%,9% 6%,74% 6%,100% 28%,93% 62%,74% 94%,9% 94%,0 78%)}
.st-swiss .k-ruler .bs{clip-path:polygon(0 22%,7% 8%,97% 8%,100% 20%,100% 80%,97% 92%,7% 92%,0 78%)}
.st-swiss .k-ruler .bs::before{content:"";position:absolute;left:26%;right:3%;bottom:8%;height:22%;background:repeating-linear-gradient(90deg,#4B545E 0 1px,transparent 1px 7px)}
.st-swiss .k-film .bs{clip-path:polygon(0 22%,7% 6%,96% 6%,100% 16%,100% 84%,96% 94%,7% 94%,0 78%);background:radial-gradient(circle,#2A2F35 0 38%,transparent 42%) 0 9%/10px 8px repeat-x,radial-gradient(circle,#2A2F35 0 38%,transparent 42%) 0 91%/10px 8px repeat-x,linear-gradient(180deg,#F4F6F8,#C2C9D0 60%,#E3E7EB)}
.st-swiss .k-driver .bs{clip-path:polygon(0 22%,8% 8%,76% 14%,100% 38%,100% 62%,76% 86%,8% 92%,0 78%)}
.st-swiss .k-hook .bs{clip-path:polygon(0 22%,8% 8%,86% 8%,100% 24%,100% 60%,91% 60%,89% 40%,82% 40%,82% 92%,8% 92%,0 78%)}
.st-swiss .bl{position:absolute;left:32%;right:12%;top:0;bottom:0;display:flex;align-items:center;justify-content:center;gap:6px;color:#333B44;font-size:12px;text-shadow:0 1px 0 rgba(255,255,255,.9)}
.st-swiss.m-web .bl{font-size:15px;gap:8px}
.st-swiss .bl.flip{transform:rotate(180deg)}
.st-swiss .bl svg{color:var(--red);flex:none}
.st-swiss .gl{position:absolute;inset:0;background:linear-gradient(100deg,transparent 40%,rgba(255,255,255,.95) 50%,transparent 60%);background-size:300% 100%;background-position:var(--g,100%) 0;pointer-events:none}
.st-swiss .liner{position:absolute;border-radius:5px;background:linear-gradient(180deg,#F1F3F5,#9AA4AE);box-shadow:0 -1px 0 rgba(255,255,255,.4)}
.st-swiss .handle{position:absolute;border-radius:999px;overflow:hidden;background:linear-gradient(180deg,#F25A4F 0%,#D7261E 28%,#BC2019 68%,#8E1712 100%);box-shadow:inset 0 2px 0 rgba(255,255,255,.35),inset 0 -3px 6px rgba(0,0,0,.35),0 12px 26px rgba(0,0,0,.6),0 2px 0 rgba(0,0,0,.45)}
.st-swiss .handle.is-pressed{filter:brightness(.9)}
.st-swiss .handle .gloss{position:absolute;left:12%;right:12%;top:4px;height:36%;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0))}
.st-swiss .handle .bol{position:absolute;top:0;bottom:0;width:12%;background:repeating-linear-gradient(0deg,rgba(255,255,255,.2) 0 1px,rgba(0,0,0,.05) 1px 3px),linear-gradient(180deg,#F7F9FA,#C3CAD2 55%,#8C96A1)}
.st-swiss .handle .bol.l{left:0;box-shadow:inset -2px 0 2px rgba(0,0,0,.25)}.st-swiss .handle .bol.r{right:0;box-shadow:inset 2px 0 2px rgba(0,0,0,.25)}
.st-swiss .handle .rv{position:absolute;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#C9D0D7 45%,#76808B);box-shadow:0 1px 1px rgba(0,0,0,.5)}
.st-swiss .handle .rv.l{left:16%}.st-swiss .handle .rv.r{right:16%}
.st-swiss .hlab{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;font-size:12.5px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.18)}
.st-swiss.m-web .hlab{font-size:14px}
.st-swiss .hgl{position:absolute;inset:0;background:linear-gradient(100deg,transparent 42%,rgba(255,255,255,.55) 50%,transparent 58%);background-size:300% 100%;background-position:var(--g,100%) 0}
.st-swiss .hint{position:absolute;left:0;right:0;top:604px;text-align:center;font-size:10.5px;color:#9AA3AD;z-index:7;display:flex;justify-content:center;align-items:center;gap:6px}
.st-swiss .hint svg{color:var(--red)}
.st-swiss .lockline{position:absolute;left:0;right:0;top:748px;text-align:center;font-size:10px;color:#8D96A0;display:flex;gap:6px;justify-content:center;align-items:center;z-index:2}
.st-swiss .lockline svg{color:var(--red)}
.st-swiss .rail{position:absolute;left:200px;right:0;top:636px;bottom:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px),linear-gradient(180deg,#1A1D21,#0F1113);border-top:1px solid rgba(255,255,255,.08);z-index:2}
.st-swiss .keys{position:absolute;left:920px;top:662px;display:grid;grid-template-columns:auto auto;gap:9px 12px;font-size:12.5px;color:#AEB6BF;z-index:3;align-items:center}
.st-swiss .keys kbd{justify-self:end}
/* intro */
.st-swiss .intro{position:absolute;left:0;right:0;top:500px;text-align:center;z-index:7}
.st-swiss.m-web .intro{top:520px}
.st-swiss .intro b{display:block;font-size:19px;color:#fff;letter-spacing:.14em}
.st-swiss.m-web .intro b{font-size:38px}
.st-swiss .intro span{display:block;margin-top:10px;font-size:15px;color:#C9D0D7}
.st-swiss.m-web .intro span{font-size:18px}
/* gallery sheet / drag card */
.st-swiss .sheet{position:absolute;left:0;right:0;top:330px;bottom:0;border-radius:26px 26px 0 0;z-index:20;padding:12px 18px}
.st-swiss .grab{width:44px;height:5px;border-radius:3px;background:#9AA4AE;margin:0 auto 12px}
.st-swiss .shh{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:12px}
.st-swiss .shh b{font-size:14px}.st-swiss .shh span{font-size:13px;color:var(--mut)}
.st-swiss .gg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-swiss .gg .g{position:relative;aspect-ratio:1;border-radius:12px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.st-swiss .gg .g.sel{box-shadow:inset 0 0 0 4px var(--red)}
.st-swiss .gg .ck{position:absolute;right:7px;top:7px;width:28px;height:28px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center;box-shadow:0 2px 6px rgba(0,0,0,.35)}
.st-swiss .gg em{position:absolute;left:7px;bottom:7px;font:800 10px Archivo;font-stretch:125%;color:#fff;background:rgba(0,0,0,.55);border-radius:6px;padding:3px 6px;font-style:normal}
.st-swiss .dcard{position:absolute;left:1070px;top:240px;width:180px;z-index:30;padding:10px;border-radius:12px}
.st-swiss .dcard i{display:block;height:120px;border-radius:8px;background-size:cover;background-position:center 30%}
.st-swiss .dcard b{display:block;margin-top:8px;font-size:13px}.st-swiss .dcard span{font-size:12px;color:var(--mut)}
.st-swiss .dcard .st2,.st-swiss .dcard .st3{position:absolute;inset:0;border-radius:12px;background:var(--steel);z-index:-1;box-shadow:0 6px 16px rgba(0,0,0,.4)}
.st-swiss .dcard .st2{transform:rotate(-5deg)}.st-swiss .dcard .st3{transform:rotate(6deg)}
.st-swiss .dcard .nb{position:absolute;right:-10px;top:-10px;width:30px;height:30px;border-radius:50%;background:var(--red);color:#fff;font-weight:800;font-size:13px;display:grid;place-items:center}
/* panels */
.st-swiss .panel{position:absolute;left:14px;top:104px;width:362px;height:544px;border-radius:18px;z-index:8;overflow:hidden}
.st-swiss.m-web .panel{left:920px;top:72px;width:344px;height:548px;transform-origin:0 50%}
.st-swiss .phd{height:56px;display:flex;align-items:center;gap:11px;padding:0 14px 0 16px;border-bottom:1px solid rgba(0,0,0,.14);box-shadow:0 1px 0 rgba(255,255,255,.8);position:relative}
.st-swiss .pic{width:34px;height:34px;border-radius:9px;background:linear-gradient(#E2372E,#A81C15);color:#fff;display:grid;place-items:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 2px 0 #6E120D}
.st-swiss .phd b{display:block;font-size:16px}.st-swiss .phd small{display:block;font-size:12px;color:var(--mut);margin-top:1px}
.st-swiss .x{margin-left:auto;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;color:#39414A;background:linear-gradient(#FAFBFC,#BFC7CF);box-shadow:0 2px 0 #7D8792,inset 0 1px 0 #fff}
.st-swiss .x.is-pressed{transform:translateY(2px);box-shadow:0 0 0 #7D8792}
.st-swiss .pb{position:absolute;left:14px;right:14px;top:70px;bottom:14px;display:flex;flex-direction:column;gap:12px}
.st-swiss .pgl{position:absolute;inset:0;background:linear-gradient(105deg,transparent 42%,rgba(255,255,255,.7) 50%,transparent 58%);background-size:300% 100%;background-position:var(--g,100%) 0;pointer-events:none}
.st-swiss .lab{font-size:10.5px;margin:0 0 8px}
.st-swiss .frow{display:flex;gap:12px;align-items:center;background:rgba(255,255,255,.45);border:1px solid rgba(0,0,0,.1);border-radius:12px;padding:8px}
.st-swiss .frow i{width:46px;height:56px;border-radius:7px;background-size:cover;background-position:center;flex:none}
.st-swiss .frow b{display:block;font-size:15px}.st-swiss .frow span{font-size:13px;color:var(--mut)}.st-swiss .frow em{font-style:normal;font-weight:700;color:var(--gr)}
.st-swiss .swap{position:relative;flex:none}
.st-swiss .swap>div{position:absolute;left:0;right:0;top:0}
.st-swiss .opt{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.12);border-radius:11px;padding:8px 12px;margin-bottom:8px;height:52px;box-shadow:inset 0 1px 0 #fff}
.st-swiss .opt b{display:block;font-size:15px}.st-swiss .opt span{font-size:12.5px;color:var(--mut)}
.st-swiss .led{margin-left:auto;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fff,#AEB6BF);box-shadow:inset 0 1px 2px rgba(0,0,0,.4);flex:none}
.st-swiss .opt.on{border-color:var(--red);box-shadow:inset 0 0 0 1px var(--red);background:#fff}
.st-swiss .opt.on .led{background:radial-gradient(circle at 40% 35%,#FF8A80,#D7261E 60%,#9E1A14);box-shadow:0 0 8px rgba(215,38,30,.8)}
.st-swiss .opt.is-pressed{transform:scale(.98)}
.st-swiss .gauge svg{display:block;margin:0 auto}
.st-swiss .rd{text-align:center;margin-top:6px}
.st-swiss .rd .big{display:block;font-size:44px;font-weight:800;font-stretch:112%;font-variant-numeric:tabular-nums;line-height:1;color:var(--gr)}
.st-swiss .rd .tg{display:inline-block;margin-top:8px;font-size:10.5px}
.st-swiss .res{display:flex;align-items:center;gap:10px;font-size:13.5px;color:var(--mut)}
.st-swiss .ok{display:inline-flex;align-items:center;gap:6px;background:var(--red);color:#fff;border-radius:8px;padding:6px 10px;font-size:10.5px;text-shadow:none;flex:none}
.st-swiss .plate .ok.eng{color:#fff;text-shadow:none}
.st-swiss .pf{margin-top:auto}
.st-swiss .btn{position:relative;overflow:hidden;height:52px;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:10px;color:#fff;background:linear-gradient(#E2372E,#B81F18);box-shadow:0 3px 0 #7E140F,inset 0 1px 0 rgba(255,255,255,.35);font-size:14px;font-stretch:125%;font-weight:800;letter-spacing:.1em;text-transform:uppercase}
.st-swiss .btn>*{position:relative}
.st-swiss .btn.is-pressed{transform:translateY(3px);box-shadow:0 0 0 #7E140F}
.st-swiss .btn.off{background:linear-gradient(#C9D0D7,#AEB6BF);box-shadow:0 3px 0 #7D8792;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.45)}
.st-swiss .btn .fill{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(#E2372E,#B81F18)}
.st-swiss .prs .pr{display:flex;align-items:center;gap:12px;height:42px;padding:0 12px;border-radius:10px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.45);margin-bottom:6px}
.st-swiss .prs .pr b{font-size:14.5px}.st-swiss .prs .pr .px{margin-left:auto;font-size:12.5px;color:var(--mut);font-variant-numeric:tabular-nums}
.st-swiss .prs .rt{width:26px;height:26px;display:grid;place-items:center;flex:none}.st-swiss .prs .rt i{display:block;border:2px solid #4B545E;border-radius:3px}
.st-swiss .prs .pr.on{border-color:var(--red);background:#fff;box-shadow:inset 0 0 0 1px var(--red)}.st-swiss .prs .pr.on .rt i{border-color:var(--red);background:rgba(215,38,30,.15)}
.st-swiss .prs .pr.is-pressed{transform:scale(.98)}
.st-swiss .cinfo{font-size:10.5px;text-align:center}
/* crop stage */
.st-swiss .cst{position:relative;overflow:hidden;border-radius:12px;background:#0F1113;width:334px;height:330px}
.st-swiss.m-web .cst{position:absolute;left:22px;top:30px;width:660px;height:520px;border-radius:12px}
.st-swiss .cimg{position:absolute;left:-53px;top:0;width:440px;height:330px;background-size:cover;background-position:center}
.st-swiss.m-web .cimg{left:-50px;top:-25px;width:760px;height:570px}
.st-swiss .cfr{position:absolute;border:2px solid #fff;box-shadow:0 0 0 999px rgba(8,10,12,.62);background:linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)) 33.3% 0/1px 100% no-repeat,linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)) 66.6% 0/1px 100% no-repeat,linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)) 0 33.3%/100% 1px no-repeat,linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)) 0 66.6%/100% 1px no-repeat}
.st-swiss .rul{position:absolute;background:repeating-linear-gradient(90deg,#3B434C 0 1px,transparent 1px 6px) left bottom/100% 40% no-repeat,repeating-linear-gradient(90deg,#3B434C 0 1px,transparent 1px 30px) left bottom/100% 70% no-repeat,var(--steel);border-radius:3px;box-shadow:0 2px 6px rgba(0,0,0,.5)}
.st-swiss .rul.rt{left:-2px;right:-2px;top:-26px;height:20px}
.st-swiss .rul.rl{top:-2px;bottom:-2px;left:-26px;width:20px;background:repeating-linear-gradient(0deg,#3B434C 0 1px,transparent 1px 6px) right top/40% 100% no-repeat,repeating-linear-gradient(0deg,#3B434C 0 1px,transparent 1px 30px) right top/70% 100% no-repeat,var(--steel)}
.st-swiss .rul span{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:var(--red);color:#fff;font-size:9.5px;padding:3px 7px;border-radius:4px;white-space:nowrap;text-shadow:none}
.st-swiss .rul.rl span{transform:translate(-50%,-50%) rotate(-90deg)}
.st-swiss .rul.rt::after,.st-swiss .rul.rl::after{content:none}
/* place */
.st-swiss .mst{position:relative;overflow:hidden;border-radius:12px;height:178px;background:#DCE1E6;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}
.st-swiss.m-web .mst{position:absolute;left:22px;top:30px;width:660px;height:520px}
.st-swiss .mst svg.map{position:absolute;inset:0;width:100%;height:100%}
.st-swiss .mpin{position:absolute;left:58%;top:52%;width:44px;height:44px;margin:-44px 0 0 -22px;filter:drop-shadow(0 6px 6px rgba(0,0,0,.35))}
.st-swiss.m-web .mpin{width:64px;height:64px;margin:-64px 0 0 -32px}
.st-swiss .mpin svg{width:100%;height:100%}
.st-swiss .ring{position:absolute;left:58%;top:52%;width:60px;height:24px;margin:-12px 0 0 -30px;border-radius:50%;border:3px solid var(--red)}
.st-swiss .mph{position:absolute;left:10px;top:10px;width:104px;height:78px;border-radius:8px;background-size:cover;background-position:center;border:3px solid #fff;box-shadow:0 6px 14px rgba(0,0,0,.35)}
.st-swiss.m-web .mph{left:22px;top:22px;width:250px;height:188px}
.st-swiss .mlab{position:absolute;right:10px;bottom:10px;font-size:10px;background:#fff;border-radius:6px;padding:5px 8px;color:#46505A}
.st-swiss .stamp{position:absolute;left:50%;top:50%;border:3px solid var(--red);color:var(--red);border-radius:10px;padding:7px 11px;font-size:12px;background:rgba(255,255,255,.88);white-space:nowrap;display:flex;gap:8px;align-items:center}
.st-swiss .plate .stamp.eng{color:var(--red);text-shadow:none}
.st-swiss.m-web .stamp{font-size:22px;padding:12px 22px}
.st-swiss .plc .tk{font-size:10.5px}
.st-swiss .plc b{display:block;font-size:30px;font-weight:800;line-height:1.05;margin:4px 0 6px}
.st-swiss .plc span{display:block;font-size:13.5px;color:var(--mut);font-variant-numeric:tabular-nums}
.st-swiss .warn,.st-swiss .safe2{display:flex;gap:10px;align-items:center;border-radius:11px;padding:10px 12px;font-size:14px;line-height:1.3}
.st-swiss .warn{background:#FCE9E7;border:1px solid #E8A39E;color:#7A140F}
.st-swiss .warn svg{color:var(--red);flex:none}
.st-swiss .safe2{background:#1E2228;color:#fff}.st-swiss .safe2 svg{color:#FF6B61;flex:none}
/* gif */
.st-swiss .gst{display:flex;flex-direction:column;gap:10px}
.st-swiss.m-web .gst{position:absolute;left:32px;top:40px;width:640px}
.st-swiss .vid{position:relative;height:180px;border-radius:12px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}
.st-swiss.m-web .vid{height:360px}
.st-swiss .vb{position:absolute;left:10px;top:10px;font-size:10px;background:rgba(17,19,22,.75);color:#fff;border-radius:6px;padding:5px 8px}
.st-swiss .plate .vb.eng,.st-swiss .plate .lp.eng{color:#fff;text-shadow:none}
.st-swiss .lp{position:absolute;right:10px;top:10px;font-size:10px;background:var(--red);color:#fff;border-radius:6px;padding:5px 8px;display:flex;gap:5px;align-items:center}
.st-swiss .film{position:relative;height:60px;border-radius:8px;overflow:hidden;background:radial-gradient(ellipse,#C9D0D7 0 45%,transparent 50%) 3px 2px/12px 7px repeat-x,radial-gradient(ellipse,#C9D0D7 0 45%,transparent 50%) 3px calc(100% - 2px)/12px 7px repeat-x,#121417}
.st-swiss.m-web .film{height:76px}
.st-swiss .fr{position:absolute;left:0;right:0;top:11px;bottom:11px;display:flex;gap:2px}
.st-swiss .fr i{flex:1;background-size:cover;background-position:center}
.st-swiss .win{position:absolute;top:0;bottom:0;border:3px solid var(--red);border-radius:6px;box-shadow:0 0 0 999px rgba(10,12,14,.6)}
.st-swiss .hd{position:absolute;top:50%;width:14px;height:44px;margin-top:-22px;border-radius:5px;background:linear-gradient(#F04A40,#B81F18);box-shadow:0 2px 6px rgba(0,0,0,.5)}
.st-swiss .hd::after{content:"";position:absolute;left:5px;top:12px;width:4px;height:20px;border-left:1px solid rgba(255,255,255,.7);border-right:1px solid rgba(255,255,255,.7)}
.st-swiss .hd.hL{left:-9px}.st-swiss .hd.hR{right:-9px}
.st-swiss .clip{display:flex;align-items:baseline;justify-content:space-between;gap:10px}
.st-swiss .clip .tk{font-size:10.5px}.st-swiss .clip b{font-size:20px;font-weight:800;font-variant-numeric:tabular-nums}
.st-swiss .chips{display:flex;gap:8px}
.st-swiss .chips span{flex:1;text-align:center;font-size:10.5px;padding:9px 4px;border-radius:9px;background:rgba(255,255,255,.5);border:1px solid rgba(0,0,0,.12);white-space:nowrap}
.st-swiss .chips span.hot{background:#1E2228;color:#fff;text-shadow:none;border-color:#1E2228}
/* done */
.st-swiss .sum{position:absolute;left:20px;right:20px;top:104px;height:548px;display:flex;flex-direction:column;gap:12px;z-index:3}
.st-swiss.m-web .sum{left:230px;width:644px;right:auto;top:84px;height:530px;gap:16px}
.st-swiss .sh b{display:block;font-size:24px;color:#fff;letter-spacing:.14em}
.st-swiss.m-web .sh b{font-size:32px}
.st-swiss .sh span{font-size:14px;color:#C9D0D7}
.st-swiss .tags{display:flex;flex-direction:column;gap:8px}
.st-swiss.m-web .tags{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.st-swiss .tag{position:relative;display:flex;align-items:center;gap:12px;border-radius:12px 30px 30px 12px;padding:8px 12px 8px 8px;height:62px}
.st-swiss.m-web .tag{height:auto;flex-direction:column;align-items:stretch;border-radius:14px;padding:10px;gap:10px}
.st-swiss .tag i{width:46px;height:46px;border-radius:8px;background-size:cover;background-position:center;flex:none}
.st-swiss.m-web .tag i{width:auto;height:118px}
.st-swiss .tag b{display:block;font-size:15px}.st-swiss .tag span{font-size:13px;color:var(--mut)}
.st-swiss .tag em{margin-left:auto;width:28px;height:28px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center;flex:none}
.st-swiss.m-web .tag em{position:absolute;right:18px;top:18px}
.st-swiss .tag .hole{width:12px;height:12px;border-radius:50%;background:#1C2025;box-shadow:inset 0 1px 2px rgba(0,0,0,.6);flex:none;margin-right:2px}
.st-swiss.m-web .tag .hole{display:none}
.st-swiss .tag .tx{min-width:0}
.st-swiss.m-web .tag .row{display:flex;align-items:center;gap:10px;padding:0 4px}
.st-swiss .prom{display:flex;gap:8px;align-items:center;font-size:15px;color:#fff;font-weight:600;margin:0}
.st-swiss .prom svg{color:var(--red);flex:none}
.st-swiss .ad{display:flex;gap:12px;align-items:center;border:1px dashed rgba(201,208,215,.35);border-radius:12px;padding:10px 12px;background:rgba(255,255,255,.04)}
.st-swiss .ad i{width:44px;height:44px;border-radius:9px;background:rgba(255,255,255,.08);flex:none}
.st-swiss .ad small{font-size:10px;font-weight:800;letter-spacing:.08em;border:1px solid #8D96A0;color:#C9D0D7;border-radius:5px;padding:1px 6px;margin-right:8px}
.st-swiss .ad span{font-size:13px;color:#9AA3AD}
.st-swiss .plate .ad{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.35)}.st-swiss .plate .ad i{background:rgba(0,0,0,.08)}
.st-swiss .plate .ad small{color:var(--mut);border-color:var(--mut)}.st-swiss .plate .ad span{color:var(--mut)}
.st-swiss .bigsave{font-size:42px;font-weight:800;font-stretch:112%;line-height:1;color:var(--gr)}
.st-swiss .toast{position:absolute;left:50%;top:740px;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px;background:var(--brush),var(--steel);color:var(--gr);border-radius:999px;padding:9px 18px 9px 9px;font-size:11.5px;white-space:nowrap;box-shadow:0 10px 24px rgba(0,0,0,.5);text-shadow:0 1px 0 #fff}
.st-swiss.m-web .toast{top:574px;left:552px;font-size:13px}
.st-swiss .toast i{width:28px;height:28px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center}
.st-swiss .insp0{position:absolute;left:920px;top:72px;width:344px;height:548px;border-radius:18px;z-index:3;padding:20px 18px}
.st-swiss .insp0 h4{margin:0 0 12px;font-size:11px}
.st-swiss .kv{display:grid;grid-template-columns:72px 1fr;gap:9px 10px;font-size:13.5px;margin-bottom:22px}
.st-swiss .kv span{color:var(--mut)}.st-swiss .kv b{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.st-swiss .ins-empty{font-size:14px;color:var(--mut);margin:0 0 22px}
.st-swiss .sc{display:grid;grid-template-columns:auto 1fr;gap:10px 12px;font-size:13.5px;align-items:center}
.st-swiss .sc kbd{justify-self:start}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, app = A.app;
    const { seg, ease, lerp, set, txt, cls, win } = A;
    const G = web ? { px: 552, py: 666, L: 288, BW: 56, HW: 420, HH: 76, a0: -155, step: 26, ky: 410, ks: 1.1 }
      : { px: 195, py: 672, L: 220, BW: 46, HW: 300, HH: 64, a0: -147, step: 22.8, ky: 410, ks: 1.12 };
    const TOOLS = [['SHRINK', 'shrink', 'k-blade'], ['CROP', 'crop', 'k-ruler'], ['PLACE', 'shield', 'k-blade'], ['GIF', 'film', 'k-film'], ['CONVERT', 'convert', 'k-driver'], ['MORE', 'grid', 'k-hook']];
    const FAN = TOOLS.map((_, i) => G.a0 + i * G.step);
    const CLO = FAN.map(a => (a < -90 ? -180 : 0));
    // Knife sessions: open = fan out, tc = blade chosen, close = panel closes (blade snaps back ~0.48 s later).
    const SES = [{ open: 0.55, fold: 1.95 },
      { open: 8.35, pick: 0, tc: 9.4, close: 16.45 }, { open: 17.45, pick: 1, tc: 18.6, close: 23.45 },
      { open: 24.45, pick: 2, tc: 25.4, close: 29.35 }, { open: 30.35, pick: 3, tc: 31.3, close: 35.45 }];
    const PH = { portrait: A.photo('portrait'), mountain: A.photo('mountain'), city: A.photo('city'), beach: A.frame(2) };
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><path d="M11 23L29 8.5q3-1.6 3.3 1.4L16 23z" fill="#D5DBE1"/><path d="M14 23l15-12.6" stroke="#8C96A1" stroke-width="1.2"/><rect x="5" y="21" width="30" height="11" rx="5.5" fill="#D7261E"/><rect x="7" y="22.2" width="26" height="3" rx="1.5" fill="#fff" opacity=".3"/><circle cx="10.5" cy="26.5" r="1.7" fill="#EEF1F4"/><circle cx="29.5" cy="26.5" r="1.7" fill="#EEF1F4"/></svg>`;
    const pinSVG = `<svg viewBox="0 0 24 24"><path d="M12 23s-8-7.2-8-13.2a8 8 0 0 1 16 0C20 15.8 12 23 12 23z" fill="#D7261E" stroke="#fff" stroke-width="1.4"/><circle cx="12" cy="9.8" r="3" fill="#fff"/></svg>`;
    const scr = '<i class="scr s1"></i><i class="scr s2"></i><i class="scr s3"></i><i class="scr s4"></i>';
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];

    const rig = A.el('div', 'rig', S);
    A.el('div', 'bg', rig);
    A.el('div', 'hdr', rig, `<span class="lg">${logo(web ? 34 : 30)}</span><b class="eng wm">${web ? 'Image Swiss Knife' : 'Swiss Knife'}</b>` +
      (web ? `<span class="crumb">File: <em class="cf">none yet</em></span><span class="lock eng">${I('lock', 13, 2.6)}Nothing uploaded</span><span class="kbtn">${I('folder', 16, 2.2)}Open files <kbd>Ctrl O</kbd></span>`
        : `<span class="lock eng">${I('lock', 13, 2.6)}On-device</span>`));

    /* ---------- canvas / bay */
    const REC = [['portrait', D.portrait.file, `${D.portrait.size} · HEIC`], ['mountain', 'IMG_1650.JPG', '4000 × 3000'], ['city', D.place.file, `${D.place.device} · Aug 2026`], ['beach', D.video.file, `Video · ${D.video.len}`]];
    const CAPS = [`${D.portrait.file} · ${D.portrait.size}`, 'IMG_1650.JPG · 4000 × 3000', `${D.place.file} · ${D.place.device}`, `${D.video.file} · ${D.video.len}`];
    const cv = A.el('div', 'cv', rig, `<div class="empty">${I(web ? 'upload' : 'plus', web ? 46 : 40, 2.2)}<b class="eng">${web ? 'Drop photos here' : 'Load a photo'}</b><span>${web ? 'or press Ctrl O to choose files' : 'Tap here to open your gallery'}</span></div>
      ${REC.map((r, i) => `<div class="ph ph${i} k-${r[0]}" style="background-image:${PH[r[0]]}">${i === 0 && web ? `<div class="stag"><small class="eng">File size</small><b class="stv">4.8 MB</b></div>` : ''}</div>`).join('')}<div class="cap eng"></div>`);
    const phs = qa('.cv .ph'), cap = q('.cv .cap'), empty = q('.cv .empty');

    let files = [];
    if (app) {
      A.el('div', 'strip', rig, `<span class="lb eng">Recent</span>` + REC.map((r, i) => `<i class="r r${i}" style="background-image:${PH[r[0]]}">${i === 3 ? `<em>${I('play', 10)}</em>` : ''}</i>`).join('') + `<i class="r r4" style="background-image:${A.photo('abstract', { seed: 2 })}"></i>`);
      files = qa('.strip .r');
    } else {
      A.el('div', 'files', rig, `<b class="eng fh">Files</b>${REC.map((r, i) => `<div class="f f${i}"><i style="background-image:${PH[r[0]]}">${i === 3 ? `<em>${I('play', 10)}</em>` : ''}</i><div><b>${r[1]}</b><span>${r[2]}</span></div></div>`).join('')}
        <div class="dz eng">${I('upload', 14, 2.4)}Drop more files</div><div class="safe">${I('lock', 16, 2.4)}<span>Your files stay in this browser. Nothing is uploaded.</span></div>`);
      files = qa('.files .f');
      A.el('div', 'rail', rig);
      A.el('div', 'keys', rig, `<kbd>Ctrl S</kbd><span>Save the result</span><kbd>Ctrl Z</kbd><span>Undo last step</span><kbd>?</kbd><span>Show all shortcuts</span>`);
      A.el('div', 'insp0 plate', rig, `${scr}<h4 class="eng">Inspector</h4><p class="ins-empty">No photo yet. Drop one on the canvas.</p>
        <div class="kv"><span>Name</span><b class="kn"></b><span>Pixels</span><b class="kp"></b><span>Kind</span><b class="kk"></b><span>Stored</span><b>This computer only</b></div>
        <h4 class="eng">Shortcuts</h4><div class="sc"><kbd>Space</kbd><span>Open the knife</span><kbd>1 – 6</kbd><span>Pick a blade</span><kbd>Ctrl O</kbd><span>Open files</span><kbd>Esc</kbd><span>Fold the blade back</span></div>`);
    }

    /* ---------- pick: gallery sheet (app) or dragged file stack (web) */
    const GAL = [PH.portrait, PH.mountain, PH.city, PH.beach, A.photo('abstract', { seed: 2 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 5 }), A.frame(7), A.photo('abstract', { seed: 9 })];
    const sheet = app ? A.el('div', 'sheet plate', rig, `<div class="grab"></div><div class="shh"><b class="eng">Choose a photo</b><span>Gallery · 128 photos</span></div>
      <div class="gg">${GAL.map((b, i) => `<i class="g g${i}" style="background-image:${b}">${i === 0 ? `<span class="ck">${I('check', 16, 3.2)}</span>` : ''}${i === 3 || i === 7 ? '<em>0:12</em>' : ''}</i>`).join('')}</div>`) : null;
    const dcard = web ? A.el('div', 'dcard plate', rig, `<span class="st2"></span><span class="st3"></span><i style="background-image:${PH.portrait}"></i><b>${D.portrait.file}</b><span>and 3 more files</span><span class="nb">4</span>`) : null;

    /* ---------- knife */
    const scrim = A.el('div', 'scrim', rig);
    const knife = A.el('div', 'knife', rig);
    knife.style.transformOrigin = `${G.px}px ${G.py}px`;
    const blades = TOOLS.map((tl, i) => {
      const b = A.el('div', `blade bd${i} ${tl[2]}`, knife, `<div class="bs"><div class="bl eng${FAN[i] < -90 ? ' flip' : ''}">${I(tl[1], web ? 18 : 15, 2.6)}${tl[0]}</div><i class="gl"></i></div>`);
      Object.assign(b.style, { left: G.px + 'px', top: G.py - G.BW / 2 + 'px', width: G.L + 'px', height: G.BW + 'px' });
      return b;
    });
    const bgl = blades.map(b => b.querySelector('.gl'));
    const liner = A.el('div', 'liner', knife);
    Object.assign(liner.style, { left: G.px - G.HW / 2 + G.HW * 0.12 + 'px', width: G.HW * 0.76 + 'px', top: G.py - 16 + 'px', height: '12px' });
    const handle = A.el('div', 'handle', knife, `<i class="bol l"></i><i class="bol r"></i><i class="rv l"></i><i class="rv r"></i><i class="gloss"></i><div class="hlab eng"><span class="hl">Open tools</span></div><i class="hgl"></i>`);
    Object.assign(handle.style, { left: G.px - G.HW / 2 + 'px', top: G.py - 10 + 'px', width: G.HW + 'px', height: G.HH + 'px' });
    const hl = handle.querySelector('.hl'), hgl = handle.querySelector('.hgl');
    const intro = A.el('div', 'intro', rig, `<b class="eng">Image Swiss Knife</b><span>Every photo tool. Nothing leaves your ${web ? 'computer' : 'phone'}.</span>`);
    const hint = app ? A.el('div', 'hint eng', rig, '') : null;
    const lockline = app ? A.el('div', 'lockline eng', rig, `${I('lock', 12, 2.6)}Nothing leaves this phone`) : null;

    /* ---------- tool panels */
    const mkPanel = (k, title, sub, ic, body) => A.el('div', `panel plate p-${k}`, rig, `${scr}<div class="phd"><span class="pic">${I(ic, 19, 2.4)}</span><div><b class="eng">${title}</b><small>${sub}</small></div><span class="x">${I('x', 17, 2.8)}</span></div><div class="pb">${body}</div><i class="pgl"></i>`);
    const stage = (k, html) => { const e = A.el('div', 'stg stg-' + k, web ? cv : null, html); return e; };
    const frow = (bg, name, line) => `<div class="frow"><i style="background-image:${bg}"></i><div><b>${name}</b><span>${line}</span></div></div>`;

    // gauge: log scale 100 KB (left) .. 5 MB (right)
    const fr = kb => Math.log(kb / 100) / Math.log(50);
    const pt = (f, r) => { const a = Math.PI - f * Math.PI; return [150 + r * Math.cos(a), 156 - r * Math.sin(a)]; };
    let ticks = '';
    for (let k = 0; k <= 40; k++) { const f = k / 40, maj = k % 5 === 0, [x1, y1] = pt(f, 122), [x2, y2] = pt(f, maj ? 106 : 113); ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${f <= fr(200) + 0.001 ? '#FF6B61' : '#C9D0D7'}" stroke-width="${maj ? 2.2 : 1.2}"/>`; }
    const labs = [[100, '100K'], [200, '200K'], [500, '500K'], [1024, '1M'], [2048, '2M'], [5000, '5M']].map(([v, s]) => { const [x, y] = pt(fr(v), 92); return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="10.5" font-weight="700" fill="${v === 200 ? '#FF6B61' : '#C9D0D7'}" font-family="Archivo" style="font-stretch:125%">${s}</text>`; }).join('');
    const [ax, ay] = pt(0, 128), [bx, by] = pt(fr(200), 128);
    const gauge = `<svg width="300" height="170" viewBox="0 0 300 170"><path d="M10 156A140 140 0 0 1 290 156L290 166L10 166Z" fill="#1E2228"/><path d="M10 156A140 140 0 0 1 290 156" stroke="#A7B0BA" stroke-width="3" fill="none"/>
      <path d="M${ax} ${ay}A128 128 0 0 1 ${bx.toFixed(1)} ${by.toFixed(1)}" stroke="#D7261E" stroke-width="6" fill="none"/>${ticks}${labs}
      <g class="ndl"><path d="M150 152L38 156L150 160Z" fill="#FF3B30"/><path d="M150 153.5L176 156L150 158.5Z" fill="#9E1A14"/></g><circle cx="150" cy="156" r="11" fill="#C9D0D7" stroke="#6E7883" stroke-width="2"/><circle cx="150" cy="156" r="4" fill="#6E7883"/></svg>`;

    const pShrink = mkPanel('shrink', 'Shrink', 'Make the file smaller', 'shrink', `${frow(PH.portrait, D.portrait.file, `${D.portrait.dims} · <em class="fsz">${D.portrait.size}</em>`)}
      <div class="swap" style="height:254px"><div class="sA"><p class="lab eng">Where will you use it?</p>${D.shrink.options.map((o, i) => `<div class="opt o${i}"><div><b>${o.label}</b><span>${o.hint}</span></div><i class="led"></i></div>`).join('')}</div>
      <div class="sB"><div class="gauge">${gauge}</div><div class="rd"><b class="big">4.8 MB</b><span class="tg eng">Target · under 200 KB</span></div></div></div>
      <div class="res sC"><span class="ok eng">${I('check', 13, 3.4)}Under 200 KB</span><span>${D.portrait.size} → ${D.shrink.size}<br>${D.shrink.format} · ${D.shrink.px}</span></div>
      <div class="pf"><div class="btn save">${I('save', 20, 2.6)}<span>Save to ${web ? 'Downloads' : 'gallery'}</span></div></div>`);

    const presets = D.crop.presets.slice(0, 6);
    const ratioBox = p => { const m = 20, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(6, Math.round(m * p.h / p.w)); return `<span class="rt"><i style="width:${w}px;height:${h}px"></i></span>`; };
    const cropStage = `<div class="cst"><div class="cimg" style="background-image:${PH.mountain}"></div><div class="cfr"><div class="rul rt"><span class="eng">1080 px</span></div><div class="rul rl"><span class="eng">1350 px</span></div></div></div>`;
    const presetList = `<p class="lab eng">Where will you post it?</p><div class="prs">${presets.map((p, i) => `<div class="pr pr${i}">${ratioBox(p)}<b>${p.label}</b><span class="px">${p.ratio} · ${p.px}</span></div>`).join('')}</div>`;
    const pCrop = mkPanel('crop', 'Crop', 'Fit a size for social media', 'crop', web
      ? `<div>${presetList}</div><div class="cinfo eng">Drag the photo inside the frame</div><div class="pf"><div class="btn apply">${I('check', 20, 2.8)}<span>Apply crop</span></div></div>`
      : `<div class="swap" style="height:332px"><div class="cA">${presetList}</div><div class="cB">${cropStage}</div></div><div class="cinfo eng">${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}</div><div class="pf"><div class="btn apply">${I('check', 20, 2.8)}<span>Apply crop</span></div></div>`);
    if (web) stage('crop', cropStage);

    const mapSVG = `<svg class="map" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice"><rect width="400" height="220" fill="#DCE1E6"/><rect x="40" y="20" width="70" height="40" rx="4" fill="#C9D6CB"/><rect x="270" y="150" width="90" height="50" rx="4" fill="#C9D6CB"/><rect x="150" y="30" width="60" height="30" rx="3" fill="#CDD3D9"/><rect x="290" y="30" width="70" height="44" rx="3" fill="#CDD3D9"/><rect x="40" y="150" width="80" height="40" rx="3" fill="#CDD3D9"/>
      <path d="M-10 172C70 150 120 190 200 160S330 100 410 120" stroke="#A9BBCB" stroke-width="16" fill="none"/><path d="M0 80h400M80 0v220M150 0l40 220M270 0v220M0 135h400M330 0l-60 220" stroke="#fff" stroke-width="7"/><path d="M0 100L400 92M232 0L232 220" stroke="#F2C2BE" stroke-width="9"/></svg>`;
    const mapStage = `<div class="mst">${mapSVG}<div class="ring"></div><div class="mpin">${pinSVG}</div><div class="mph" style="background-image:${PH.city}"></div><span class="mlab eng">Pune · 18.52° N</span><div class="stamp eng">${I('shield', web ? 24 : 18, 2.4)}Location removed</div></div>`;
    const pPlace = mkPanel('place', 'Place', 'Where was it taken?', 'shield', `${web ? frow(PH.city, D.place.file, `${D.place.device} · JPG`) : mapStage}
      <div class="plc"><span class="tk eng">Taken in</span><b>${D.place.city}, ${D.place.country}</b><span>${D.place.region} · ${D.place.lat}, ${D.place.lon}</span><span>${D.place.when} · ${D.place.device}</span></div>
      <div class="swap" style="height:62px"><div class="warn">${I('eye', 22, 2.2)}<span>Anyone you send this photo to can see this place.</span></div><div class="safe2">${I('shield', 22, 2.4)}<span>Location removed. Safe to share.</span></div></div>
      <div class="pf"><div class="btn rm">${I('trash', 20, 2.4)}<span class="rml">Remove location</span></div></div>`);
    if (web) stage('place', mapStage);

    const strip = Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('');
    const gifStage = `<div class="gst"><div class="vid"><span class="vb eng">${D.video.file} · ${D.video.len}</span><span class="lp eng">${I('clock', 12, 2.6)}Loop</span></div><div class="film"><div class="fr">${strip}</div><div class="win"><i class="hd hL"></i><i class="hd hR"></i></div></div></div>`;
    const pGif = mkPanel('gif', 'GIF', 'Turn a video into a GIF', 'film', `${web ? frow(PH.beach, D.video.file, `Video · ${D.video.len}`) : gifStage}
      <div class="clip"><span class="tk eng">Clip</span><b class="cr">0:04 – 0:08 · 4.0 s</b></div>
      <div class="chips"><span class="eng">${D.video.fps} fps</span><span class="eng cfm">48 frames</span><span class="eng csz">Size —</span></div>
      <div class="pf"><div class="btn mk"><i class="fill"></i>${I('film', 20, 2.4)}<span class="mkl">Make GIF</span></div></div>`);
    if (web) stage('gif', gifStage);

    /* ---------- done */
    const RES = [[PH.portrait, 'Exam photo', `${D.shrink.size} · ${D.shrink.format}`], [PH.mountain, 'Instagram post', `${D.crop.ratio} · ${D.crop.px}`], [PH.city, 'City photo', 'Location removed'], [A.frame(5), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const tagH = r => web ? `<div class="tag plate"><i style="background-image:${r[0]}"></i><div class="row"><div class="tx"><b>${r[1]}</b><span>${r[2]}</span></div></div><em>${I('check', 16, 3.2)}</em></div>`
      : `<div class="tag plate"><span class="hole"></span><i style="background-image:${r[0]}"></i><div class="tx"><b>${r[1]}</b><span>${r[2]}</span></div><em>${I('check', 16, 3.2)}</em></div>`;
    const sum = A.el('div', 'sum', web ? rig : rig, `<div class="sh"><b class="eng">All done</b><span>${D.done.count} results · ${D.done.saved}</span></div><div class="tags">${RES.map(tagH).join('')}</div>
      <p class="prom">${I('lock', 18, 2.4)}${web ? D.promiseWeb : D.promise}</p>
      ${app ? `<div class="btn saveall">${I('save', 20, 2.6)}<span>Save all 4</span></div><div class="ad"><i></i><div><small>Ad</small><span>A sponsor message shows here, after your work is done.</span></div></div>` : ''}`);
    const pDone = web ? A.el('div', 'panel plate p-done', rig, `${scr}<div class="phd"><span class="pic">${I('check', 19, 3)}</span><div><b class="eng">Finished</b><small>Four files are ready</small></div></div>
      <div class="pb"><div><span class="lab eng">Space saved</span><div class="bigsave">4.6 MB</div></div>
      <div class="res"><span class="ok eng">${I('lock', 13, 2.8)}On this computer</span><span>Nothing was uploaded</span></div>
      <div class="btn saveall">${I('save', 20, 2.6)}<span>Save all 4</span></div><div class="btn off" style="color:#1E2228">${I('share', 20, 2.4)}<span>Share</span></div>
      <div class="pf"><div class="ad"><i></i><div><small>Ad</small><span>A sponsor message shows here, after your work is done.</span></div></div></div></div>`) : null;
    const toast = A.el('div', 'toast eng', rig, `<i>${I('check', 16, 3.2)}</i><span class="tt"></span>`);

    /* ---------- refs */
    const R = {
      opts: qa('.p-shrink .opt'), sA: q('.p-shrink .sA'), sB: q('.p-shrink .sB'), sC: q('.p-shrink .sC'), big: q('.p-shrink .big'), ndl: q('.p-shrink .ndl'), fsz: q('.p-shrink .fsz'), save: q('.p-shrink .save'), stag: q('.stag'), stv: q('.stv'),
      prs: qa('.p-crop .pr'), cA: q('.p-crop .cA'), cB: q('.p-crop .cB'), cinfo: q('.p-crop .cinfo'), apply: q('.p-crop .apply'), cimg: q('.cst .cimg'), cfr: q('.cst .cfr'), cst: q('.cst'),
      pin: q('.mpin'), ring: q('.ring'), map: q('.mst svg.map'), stamp: q('.mst .stamp'), warn: q('.p-place .warn'), safe2: q('.p-place .safe2'), rm: q('.p-place .rm'), rml: q('.p-place .rml'), plc: q('.p-place .plc'), mlab: q('.mlab'),
      vid: q('.vid'), win: q('.win'), cr: q('.p-gif .cr'), mk: q('.p-gif .mk'), mkl: q('.p-gif .mkl'), fill: q('.p-gif .fill'), cfm: q('.p-gif .cfm'), csz: q('.p-gif .csz'), lp: q('.lp'), vb: q('.vb'),
      tags: qa('.sum .tag'), prom: q('.sum .prom'), sh: q('.sum .sh'), ad: q('.sum .ad') || q('.p-done .ad'), saveall: q('.saveall'), tt: toast.querySelector('.tt'),
      stgs: { crop: q('.stg-crop'), place: q('.stg-place'), gif: q('.stg-gif') }, hdr: q('.hdr'), cf: q('.cf'),
      kn: q('.kn'), kp: q('.kp'), kk: q('.kk'), insE: q('.ins-empty'), kv: q('.kv'), insp0: q('.insp0'), xs: qa('.panel .x'),
    };
    const panels = [pShrink, pCrop, pPlace, pGif];

    /* ---------- knife state (pure function of t) */
    const fanAt = (ses, i, tt) => { const st = ses.open + i * 0.045, p = seg(tt, st, st + 0.7); return { a: lerp(CLO[i], FAN[i], ease.spring(p)), p }; };
    const foldFrom = (t, i, t0, a0, dur) => { const k = ease.in(seg(t, t0, t0 + dur)); return { a: lerp(a0, CLO[i], k), s: lerp(1, 0.62, k), o: 1 - seg(k, 0.82, 1) }; };
    const bladeState = (i, t) => {
      let ses = null; for (const s of SES) if (t >= s.open) ses = s;
      if (!ses) return { a: CLO[i], s: 0.62, o: 0 };
      const f = fanAt(ses, i, t);
      if (ses.fold != null && t >= ses.fold + i * 0.02) return foldFrom(t, i, ses.fold + i * 0.02, fanAt(ses, i, ses.fold + i * 0.02).a, 0.24);
      if (ses.pick != null && t >= ses.tc) {
        const a0 = fanAt(ses, i, ses.tc).a;
        if (i !== ses.pick) return foldFrom(t, i, ses.tc, a0, 0.26);
        const a = lerp(a0, -90, ease.spring(seg(t, ses.tc, ses.tc + 0.6)));
        const back = web ? ses.tc + 0.78 : ses.close + 0.28;
        if (t >= back) return foldFrom(t, i, back, -90, 0.2);
        return { a, s: 1, o: 1 };
      }
      return { a: f.a, s: lerp(0.62, 1, ease.out(f.p)), o: seg(f.p, 0, 0.03) };
    };
    const glintAt = (i, t) => {
      let g = 0; const w = (a, d) => { const p = seg(t, a, a + d); if (p > 0 && p < 1) g = p; };
      w(1.15 + i * 0.06, 0.5);
      for (const s of SES.slice(1)) { w(s.open + 0.55 + i * 0.05, 0.45); if (i === s.pick) w(s.tc + 0.28, 0.45); }
      return g;
    };
    const tip = i => () => ({ x: G.px + G.L * 0.9 * Math.cos(FAN[i] * Math.PI / 180), y: G.py + G.L * 0.9 * Math.sin(FAN[i] * Math.PI / 180) });
    const panelP = (s, t) => ease.outQuart(seg(t, s.tc + 0.5, s.tc + 0.95)) * (1 - ease.in(seg(t, s.close, s.close + 0.28)));
    const SNAPS = [[2.2, 2], ...SES.slice(1).map(s => [s.close + 0.48, 2]), ...(web ? SES.slice(1).map(s => [s.tc + 0.98, 1]) : []), [13.65, 1], [28.35, 1]];

    /* ---------- pointer */
    const pickT = web ? 6.4 : 6.2;
    A.pointer([
      ...(web ? [{ t: 5.25, at: '.dcard', hold: 0.15 }, { t: 6.4, at: '.dcard', drag: true, move: 1.0 }]
        : [{ t: 4.6, at: '.cv .empty', tap: true }, { t: 6.2, at: '.sheet .g0', tap: true }]),
      { t: 8.25, at: '.handle', tap: true, ax: 0.5, ay: 0.55 },
      { t: 9.4, at: tip(0), tap: true }, { t: 10.9, at: '.p-shrink .o1', tap: true }, { t: 15.2, at: '.p-shrink .save', tap: true }, { t: 16.4, at: '.p-shrink .x', tap: true },
      { t: 17.3, at: web ? '.files .f1' : '.strip .r1', tap: true }, { t: 18.6, at: tip(1), tap: true }, { t: 20.1, at: '.p-crop .pr0', tap: true },
      { t: 21.1, at: '.cst .cimg', hold: 0.1, ax: 0.5, ay: 0.55 }, { t: 22.0, at: '.cst .cimg', drag: true, move: 0.8, ax: 0.5, ay: 0.55 },
      { t: 22.6, at: '.p-crop .apply', tap: true }, { t: 23.4, at: '.p-crop .x', tap: true },
      { t: 24.3, at: web ? '.files .f2' : '.strip .r2', tap: true }, { t: 25.4, at: tip(2), tap: true }, { t: 27.9, at: '.p-place .rm', tap: true }, { t: 29.3, at: '.p-place .x', tap: true },
      { t: 30.2, at: web ? '.files .f3' : '.strip .r3', tap: true }, { t: 31.3, at: tip(3), tap: true },
      { t: 32.5, at: '.win .hR', hold: 0.1 }, { t: 33.2, at: '.win .hR', drag: true, move: 0.6 }, { t: 33.6, at: '.p-gif .mk', tap: true }, { t: 35.4, at: '.p-gif .x', tap: true },
      { t: 38.4, at: '.saveall', tap: true },
    ]);

    return {
      update(t) {
        // click shake (≤ 2 px)
        let sh = 0; for (const [ts, am] of SNAPS) { const d = t - ts; if (d >= 0 && d < 0.3) sh += am * Math.exp(-d * 16) * Math.sin(d * 90); }
        set(rig, { x: sh, y: sh * 0.4 });

        /* intro: knife at centre, then to the home spot */
        const home = ease.inOut(seg(t, 2.35, 3.1));
        const kin = ease.outBack(seg(t, 0.05, 0.55));
        set(knife, { y: (G.ky - G.py) * (1 - home) + (1 - kin) * 60, s: lerp(G.ks, 1, home), o: seg(t, 0.05, 0.3) });
        const io = Math.min(seg(t, 0.85, 1.3), 1 - seg(t, 2.2, 2.6));
        set(intro, { y: (1 - ease.out(seg(t, 0.85, 1.4))) * 14, o: io });
        const ui = seg(t, 2.6, 3.2);
        set(R.hdr, { o: ui });
        hgl.style.setProperty('--g', ((1 - seg(t, 0.35, 0.9)) * 100).toFixed(1) + '%');

        /* blades */
        blades.forEach((b, i) => {
          const st = bladeState(i, t);
          b.style.transform = `rotate(${st.a.toFixed(2)}deg) scaleX(${st.s.toFixed(4)})`;
          set(b, { o: st.o });
          bgl[i].style.setProperty('--g', ((1 - glintAt(i, t)) * 100).toFixed(1) + '%');
        });

        /* current session + handle label */
        let ses = null; for (const s of SES.slice(1)) if (t >= s.open - 0.2) ses = s;
        const inTool = ses && t >= ses.tc && t < ses.close + 0.48;
        const fanned = ses && t >= ses.open && t < ses.tc;
        txt(hl, inTool ? TOOLS[ses.pick][0] + ' open' : fanned ? 'Choose a blade' : 'Open tools');
        A.press(handle, t, 8.25);

        /* scrim */
        let sc = 0;
        for (const s of SES.slice(1)) sc = Math.max(sc, web ? win(t, s.open - 0.05, s.tc + 0.8, 0.25, 0.3) : win(t, s.open - 0.05, s.close + 0.45, 0.25, 0.3));
        set(scrim, { o: sc });

        /* photos in the bay */
        const P0 = web ? 6.45 : 6.85;
        const PW = [[P0, 17.6], [17.35, 24.6], [24.35, 30.5], [30.25, 36.1]];
        phs.forEach((p, i) => set(p, { o: win(t, PW[i][0], PW[i][1], 0.3, 0.3) * ui, s: i === 0 ? 0.94 + 0.06 * ease.outBack(seg(t, P0, P0 + 0.45)) : 1 }));
        set(empty, { o: ui * (1 - seg(t, P0, P0 + 0.2)) });
        let cur = -1; PW.forEach((w, i) => { if (t >= w[0]) cur = i; }); if (t >= 36) cur = -1;
        txt(cap, cur >= 0 ? CAPS[cur] : '');
        set(cap, { o: cur >= 0 ? ui * Math.min(seg(t, PW[cur][0] + 0.2, PW[cur][0] + 0.5), 1 - seg(t, 35.8, 36.1)) : 0 });
        files.forEach((f, i) => {
          cls(f, 'on', cur === i);
          if (web) set(f, { o: seg(t, 6.5 + i * 0.1, 6.8 + i * 0.1), x: (1 - ease.out(seg(t, 6.5 + i * 0.1, 6.8 + i * 0.1))) * -16 });
          else set(f, { o: ui * (i === 4 ? 1 : 1) });
        });
        [17.3, 24.3, 30.2].forEach((tt, i) => A.press(files[i + 1], t, tt));
        if (app) {
          set(q('.strip'), { o: ui * (1 - seg(t, 35.9, 36.2)) });
          // gallery sheet
          const up = ease.outQuart(seg(t, 4.7, 5.15)), dn = ease.in(seg(t, 6.55, 6.9));
          set(sheet, { y: (1 - up + dn) * 520, o: up > 0 && dn < 1 ? 1 : 0 });
          const g0 = q('.sheet .g0'); cls(g0, 'sel', t >= 6.2);
          set(q('.sheet .ck'), { s: ease.outBack(seg(t, 6.2, 6.45)), o: t >= 6.2 ? 1 : 0 });
          A.press(g0, t, 6.2);
          cls(empty, 'hot', t > 4.5 && t < 4.8);
          // hint above the knife
          const hintTxt = t > 7.2 && t < 8.3 ? `<span style="display:inline-flex;transform:rotate(90deg)">${I('next', 12, 3)}</span>Tap the knife to open tools` : '';
          A.html(hint, hintTxt);
          set(hint, { o: hintTxt ? 1 : 0, y: hintTxt && t < 8.3 ? Math.sin(t * 7) * 2 : 0 });
          set(lockline, { o: ui });
        } else {
          // dragged file stack from the desktop
          const inn = ease.outQuart(seg(t, 4.7, 5.1));
          const st = Math.max(5.25 + 0.15 + 0.12, 6.4 - 1.0), dq = ease.inOut(seg(t, st, 6.4)), land = seg(t, 6.4, 6.62);
          set(dcard, { x: (1 - inn) * 260 + dq * (552 - 1160), y: dq * (346 - 330), r: (1 - dq) * 4 - dq * 3, s: 1 - 0.3 * land, o: inn * (1 - land) });
          cls(empty, 'hot', t > st + 0.3 && t < 6.45);
          txt(R.cf, cur >= 0 ? REC[cur][1] : t >= 36 ? 'All results' : 'none yet');
          // resting inspector
          const has = cur >= 0;
          set(R.insE, { o: has || t >= 36 ? 0 : 1 }); R.insE.style.display = has || t >= 36 ? 'none' : '';
          R.kv.style.display = has || t >= 36 ? '' : 'none';
          const meta = [[D.portrait.file, D.portrait.dims, 'HEIC photo'], ['IMG_1650.JPG', '4000 × 3000', 'JPG photo'], [D.place.file, '4000 × 3000', 'JPG photo'], [D.video.file, '1920 × 1080', 'MP4 video · 0:12']][Math.max(0, cur)];
          txt(R.kn, t >= 36 ? '4 results' : meta[0]); txt(R.kp, t >= 36 ? 'Mixed' : meta[1]); txt(R.kk, t >= 36 ? 'JPG, GIF' : meta[2]);
          set(R.insp0, { o: ui }); set(q('.files'), { o: ui }); set(q('.rail'), { o: ui }); set(q('.keys'), { o: ui }); set(q('.files .dz'), { o: seg(t, 6.9, 7.2) });
        }

        /* panels unfold out of the chosen blade */
        SES.slice(1).forEach((s, k) => {
          const p = panelP(s, t), pn = panels[k];
          set(pn, { o: p > 0.001 ? 1 : 0 });
          if (p <= 0.001) return;
          if (web) { pn.style.clipPath = `inset(0 ${((1 - p) * 100).toFixed(1)}% 0 0 round 18px)`; pn.style.transform = `translateX(${((1 - p) * -24).toFixed(1)}px)`; }
          else pn.style.clipPath = `inset(${lerp(348, 0, p).toFixed(1)}px ${lerp(158, 0, p).toFixed(1)}px 0px ${lerp(158, 0, p).toFixed(1)}px round ${lerp(23, 18, p).toFixed(1)}px)`;
          set(pn.querySelector('.pb'), { o: seg(p, 0.65, 1) });
          pn.querySelector('.pgl').style.setProperty('--g', ((1 - seg(t, s.tc + 0.85, s.tc + 1.45)) * 100).toFixed(1) + '%');
          A.press(R.xs[k], t, s.close - 0.05);
        });
        // web canvas stages follow their panel
        if (web) {
          const st = (k, s) => Math.min(seg(t, s.tc + 0.6, s.tc + 0.95), 1 - seg(t, s.close, s.close + 0.3));
          set(R.stgs.crop, { o: st('crop', SES[2]) }); set(R.stgs.place, { o: st('place', SES[3]) }); set(R.stgs.gif, { o: st('gif', SES[4]) });
          [[1, SES[2]], [2, SES[3]], [3, SES[4]]].forEach(([i, s]) => { const o = 1 - Math.min(seg(t, s.tc + 0.6, s.tc + 0.95), 1 - seg(t, s.close, s.close + 0.3)); if (o < 1) set(phs[i], { o: Math.min(o, win(t, PW[i][0], PW[i][1], 0.3, 0.3)) }); });
          if (cur >= 1 && cur <= 3) { const s = SES[cur + 1]; set(cap, { o: Math.min(Number(cap.style.opacity), 1 - Math.min(seg(t, s.tc + 0.6, s.tc + 0.9), 1 - seg(t, s.close, s.close + 0.3))) }); }
        }

        /* SHRINK */
        cls(R.opts[1], 'on', t >= 10.9); A.press(R.opts[1], t, 10.9);
        const sw = seg(t, 11.3, 11.6);
        set(R.sA, { o: 1 - sw, y: -10 * sw }); set(R.sB, { o: sw, y: 10 * (1 - sw) });
        const cq = seg(t, 11.6, 13.6);
        const bytes = Math.exp(lerp(Math.log(D.portrait.bytes), Math.log(D.shrink.bytes), ease.inOut(cq)));
        const sz = A.fmtBytes(bytes);
        txt(R.big, sz); txt(R.fsz, t >= 13.6 ? D.shrink.size : D.portrait.size);
        const nf = lerp(fr(D.portrait.bytes / 1024), fr(D.shrink.bytes / 1024), ease.spring(seg(t, 11.6, 13.9)) * 0.15 + ease.inOut(cq) * 0.85);
        R.ndl.setAttribute('transform', `rotate(${(nf * 180).toFixed(2)} 150 156)`);
        set(R.sC, { o: seg(t, 13.7, 14.0), y: (1 - ease.out(seg(t, 13.7, 14.1))) * 8 });
        set(R.save, { o: seg(t, 13.9, 14.2) }); A.press(R.save, t, 15.2);
        if (web) { set(R.stag, { o: seg(t, 11.4, 11.7) * (1 - seg(t, 16.45, 16.7)), s: t > 13.6 && t < 13.9 ? 1.08 : 1 }); txt(R.stv, sz); R.stag.style.background = t >= 13.6 ? '#D7261E' : '#1E2228'; }

        /* CROP */
        R.prs.forEach((p, i) => cls(p, 'on', i === 0 && t >= 20.1)); A.press(R.prs[0], t, 20.1);
        const cw = app ? seg(t, 20.45, 20.75) : 0;
        if (app) { set(R.cA, { o: 1 - cw }); set(R.cB, { o: cw }); set(R.cinfo, { o: cw }); }
        const [SW, SH] = app ? [334, 330] : [660, 520];
        const fh = app ? 268 : 440, fw = fh * 4 / 5;
        const mq = ease.inOut(app ? seg(t, 20.6, 21.0) : seg(t, 20.2, 20.6));
        const w0 = SW - (app ? 60 : 120), h0 = SH - (app ? 56 : 70);
        const cwid = lerp(w0, fw, mq), chei = lerp(h0, fh, mq);
        Object.assign(R.cfr.style, { width: cwid.toFixed(1) + 'px', height: chei.toFixed(1) + 'px', left: ((SW - cwid) / 2 + (app ? 10 : 12)).toFixed(1) + 'px', top: ((SH - chei) / 2 + (app ? 12 : 14)).toFixed(1) + 'px' });
        const dq = ease.inOut(seg(t, 21.32, 22.0));
        set(R.cimg, { x: -(app ? 46 : 48) * dq });
        A.press(R.apply, t, 22.6);

        /* PLACE */
        const pd = ease.outBack(seg(t, 26.4, 26.8)), rmq = seg(t, 28.0, 28.4);
        set(R.pin, { y: -50 * (1 - pd) - 70 * ease.in(rmq), o: seg(t, 26.4, 26.55) * (1 - rmq) });
        set(R.ring, { s: 0.6 + 0.6 * seg((t - 26.8) % 1.2, 0, 1.2), o: t > 26.8 && t < 28 ? 0.8 * (1 - seg((t - 26.8) % 1.2, 0, 1.2)) : 0 });
        R.map.style.filter = `grayscale(${rmq.toFixed(2)}) opacity(${(1 - 0.35 * rmq).toFixed(2)})`;
        set(R.mlab, { o: 1 - rmq });
        const stq = seg(t, 28.25, 28.45);
        R.stamp.style.transform = `translate(-50%,-50%) rotate(-8deg) scale(${(1.6 - 0.6 * ease.out(stq)).toFixed(3)})`;
        R.stamp.style.opacity = stq.toFixed(2); R.stamp.style.visibility = stq > 0 ? 'visible' : 'hidden';
        set(R.plc, { o: seg(t, 26.5, 26.8) });
        set(R.warn, { o: seg(t, 26.9, 27.2) * (1 - rmq) }); set(R.safe2, { o: seg(t, 28.25, 28.5) });
        A.press(R.rm, t, 27.9); txt(R.rml, t < 28.1 ? 'Remove location' : 'Save safe copy');

        /* GIF */
        const made = t >= 34.6, mp = seg(t, 33.7, 34.6);
        R.vid.style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 12) % 4) : Math.floor(t * 12) % 12);
        const hq = ease.inOut(seg(t, 32.72, 33.2));
        const L = 4 / 12, Rr = (8 - hq) / 12;
        R.win.style.left = (L * 100).toFixed(2) + '%'; R.win.style.width = ((Rr - L) * 100).toFixed(2) + '%';
        txt(R.cr, hq > 0.5 ? `${D.video.from} – ${D.video.to} · ${D.video.clip}` : '0:04 – 0:08 · 4.0 s');
        txt(R.cfm, hq > 0.5 ? `${D.video.frames} frames` : '48 frames');
        txt(R.csz, made ? D.video.size : 'Size —'); cls(R.csz, 'hot', made);
        R.fill.style.width = (t > 33.65 && !made ? mp * 100 : 0).toFixed(1) + '%';
        cls(R.mk, 'off', t > 33.65 && !made);
        txt(R.mkl, made ? 'Save GIF' : t > 33.65 ? `Making · ${Math.round(mp * D.video.frames)} / ${D.video.frames}` : 'Make GIF');
        A.press(R.mk, t, 33.6);
        set(R.lp, { o: made ? 1 : 0 }); txt(R.vb, made ? `GIF · ${D.video.size} · ${D.video.fps} fps` : `${D.video.file} · ${D.video.len}`);

        /* DONE */
        const dn = seg(t, 36.05, 36.4);
        set(sum, { o: dn });
        set(R.sh, { y: (1 - ease.out(dn)) * 10 });
        R.tags.forEach((g, i) => { const p = ease.outBack(seg(t, 36.35 + i * 0.2, 36.8 + i * 0.2)); set(g, { x: app ? (1 - p) * 40 : 0, y: web ? (1 - p) * 30 : 0, o: seg(t, 36.35 + i * 0.2, 36.6 + i * 0.2) }); });
        set(R.prom, { o: seg(t, 37.2, 37.5) });
        if (app) { set(R.saveall, { o: seg(t, 37.4, 37.7) }); set(R.ad, { o: seg(t, 37.8, 38.1) }); }
        else {
          const p = ease.outQuart(seg(t, 36.2, 36.65));
          set(pDone, { o: p > 0.001 ? 1 : 0 });
          pDone.style.clipPath = `inset(0 ${((1 - p) * 100).toFixed(1)}% 0 0 round 18px)`;
          set(pDone.querySelector('.pb'), { o: seg(p, 0.6, 1) }); set(R.ad, { o: seg(t, 37.8, 38.1) });
        }
        A.press(R.saveall, t, 38.4);

        /* toast */
        const TS = [[15.3, 16.35, `Saved to ${web ? 'Downloads' : 'gallery'} · ${D.shrink.size}`], [22.7, 23.4, `Saved · ${D.crop.px}`], [34.65, 35.4, `GIF ready · ${D.video.size}`], [38.5, 40.6, '4 files saved']];
        let to = 0; for (const [a, b, s] of TS) { const v = win(t, a, b, 0.2, 0.2); if (v > 0) { to = v; txt(R.tt, s); } }
        toast.style.opacity = to.toFixed(2); toast.style.visibility = to > 0 ? 'visible' : 'hidden';
        toast.style.transform = `translate(-50%,${((1 - ease.out(Math.min(1, to))) * 14).toFixed(1)}px)`;
        if (web) { toast.style.left = t > 37 ? '1092px' : '552px'; toast.style.top = t > 37 ? '470px' : '574px'; }
        if (app) set(lockline, { o: ui * (1 - to) });
      },
    };
  },
});

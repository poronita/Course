/* Style 16 — Sprout Garden. A plant companion that grows as you work; every finished photo plants a flower. */
ISK.register((() => {
const CSS = `
@@{--ink:#1B3A2E;--mut:#5E7E6E;--line:#D3E9DB;--leaf:#3DBE7A;--lime:#B6E35B;--sun:#FFD24D;--pink:#FF8FB1;--soil:#8B5E3C;--water:#5CC4EE;background:linear-gradient(180deg,#E6F6EC,#F6FCF8 55%,#fff);color:var(--ink);font:600 14px/1.25 Nunito,system-ui,sans-serif}
@@ b{font-weight:800}@@ small{font-size:12px;color:var(--mut);font-weight:600}@@ h3{margin:0}
@@ .fr{font-family:Fraunces,Georgia,serif;font-weight:700;letter-spacing:-.01em}
@@ .card{background:#fff;border:1px solid var(--line);border-radius:18px;box-shadow:0 10px 20px -14px rgba(27,58,46,.45),inset 0 1px 0 #fff}
@@ .pg{position:absolute;inset:0;background:linear-gradient(180deg,#E6F6EC,#F6FCF8 55%,#fff)}
@@ .pg .w,@@ .pg .c{position:relative}
@@ .btn{height:46px;flex:none;border-radius:15px;background:linear-gradient(180deg,#55D391,#2DAA68);color:#fff;font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 10px 18px -10px rgba(45,170,104,.9),inset 0 1px 0 rgba(255,255,255,.55),inset 0 -2px 0 rgba(0,70,30,.18)}
@@ .btn.sec{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:0 8px 16px -12px rgba(27,58,46,.5)}
@@ .btn.off{background:#E3EEE7;color:#8AA697;box-shadow:none}
@@ .is-pressed{transform:translateY(2px) scale(.97)!important;filter:brightness(.94)}
@@ kbd{font:800 11px Nunito,sans-serif;padding:1px 6px;border-radius:6px;background:#EEF7F1;border:1px solid var(--line);color:var(--mut)}
@@ .chip{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:99px;background:#EAF7EF;color:#1F7A4D;font-size:12px;font-weight:800}
@@ .isk-ic{flex:none}
/* app chrome */
@@ .hdr{position:absolute;left:16px;right:16px;top:52px;height:42px;z-index:10;display:flex;gap:8px;opacity:0}
@@ .lv{flex:1;display:flex;align-items:center;gap:9px;padding:0 12px 0 6px;border-radius:15px}
@@ .lvi{width:30px;height:30px;border-radius:50%;background:linear-gradient(180deg,#D6F4B0,#7FD36B);display:grid;place-items:center;color:#1F6B3F;flex:none}
@@ .lvt{flex:1;min-width:0}@@ .lvt .r1{display:flex;justify-content:space-between;align-items:baseline}
@@ .lvn{font-size:15px;line-height:1}@@ .lvr{font-size:12px;color:var(--mut);font-weight:800}
@@ .xb,@@ .xbar{height:7px;border-radius:5px;background:#E3F0E8;overflow:hidden;margin-top:4px}
@@ .xb i,@@ .xbar i{display:block;height:100%;border-radius:5px;background:linear-gradient(90deg,#5CC4EE,#3DBE7A 55%,#FFD24D)}
@@ .stk{display:flex;align-items:center;gap:6px;padding:0 13px 0 9px;border-radius:15px}
@@ .stk .fr{font-size:18px}
@@ .deco{position:absolute;left:0;right:0;top:0;height:332px;z-index:3;pointer-events:none;overflow:hidden}
@@ .deco .sunl{position:absolute;right:-60px;top:-50px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(255,224,120,.55),rgba(255,224,120,0) 68%)}
@@ .deco .hill{position:absolute;left:-90px;top:268px;width:420px;height:150px;border-radius:50%;background:radial-gradient(100% 100% at 50% 0,#CDEFB6,#A8E08E 60%,#8ED17C)}
@@ .deco .hill2{position:absolute;left:150px;top:292px;width:330px;height:120px;border-radius:50%;background:radial-gradient(100% 100% at 50% 0,#DDF5C6,#BDEAA2)}
@@.m-app .pg{padding:330px 24px 0;display:flex;flex-direction:column;gap:10px}
@@.m-app .tt,@@.m-app .rail{display:none}
@@ .dock{position:absolute;left:16px;right:16px;top:738px;height:76px;z-index:9;padding:8px 10px 8px 14px;display:flex;align-items:flex-end;gap:10px;border-radius:20px;opacity:0}
@@ .dock .dl{width:86px;align-self:center;flex:none}@@ .dock .dl b{display:block;font-size:13.5px;line-height:1.1;margin-bottom:2px}
@@ .dock .plots{flex:1;display:flex;gap:7px;justify-content:flex-end}
@@ .plot{position:relative;width:52px;height:56px;flex:none;border-radius:13px;background:linear-gradient(#EEF9F2,#D6EEDD);border:1px solid #C5E3D0}
@@ .plot .soil{position:absolute;left:-1px;right:-1px;bottom:-1px;height:20px;border-radius:0 0 13px 13px;background:radial-gradient(120% 140% at 50% 0,#B07A4C,#8B5E3C 55%,#6E4829);box-shadow:inset 0 2px 5px rgba(0,0,0,.28)}
@@ .plot .soil::after{content:"";position:absolute;left:50%;top:5px;width:14px;height:6px;margin-left:-7px;border-radius:50%;background:rgba(0,0,0,.22)}
@@ .plot .pl{position:absolute;left:50%;bottom:8px;width:50px;height:60px;margin-left:-25px;transform-origin:50% 94%}
@@ .plot .pl svg{display:block;width:100%;height:100%;overflow:visible}
@@ .dock .pkw{position:absolute;right:-5px;top:-14px;width:22px;height:29px;z-index:2}
@@ .dock .pkt{transform:scale(.41);transform-origin:0 0}
@@ .pkt{position:relative;width:54px;height:72px;border-radius:5px 5px 7px 7px;background:#fff;border:1.5px solid #CFE6D7;box-shadow:0 5px 8px -4px rgba(27,58,46,.4);overflow:hidden;text-align:center;flex:none}
@@ .pkt .pz{display:block;height:14px;background:var(--pk,#3DBE7A);clip-path:polygon(0 0,100% 0,100% 55%,92% 100%,84% 55%,76% 100%,68% 55%,60% 100%,52% 55%,44% 100%,36% 55%,28% 100%,20% 55%,12% 100%,4% 55%,0 100%)}
@@ .pkt .pwin{height:36px;margin:2px 5px 0;border-radius:8px;background:linear-gradient(#F5FBF7,#E4F4EA);position:relative;overflow:hidden}
@@ .pkt .pwin svg{position:absolute;left:50%;bottom:-3px;width:42px;height:48px;margin-left:-21px}
@@ .pkt b{display:block;font-size:8.5px;line-height:1;margin-top:3px;padding:0 3px;color:var(--ink)}
@@ .pkt.lock{background:#F1F6F3;border-style:dashed}@@ .pkt.lock .pz{background:#D5E5DB}@@ .pkt.lock .pwin{background:#E6EEE9}
/* home */
@@ .tgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@@ .tool{display:flex;align-items:center;gap:10px;height:54px;padding:0 10px}
@@ .tool b{display:block;font-size:15px;line-height:1.1}
@@ .ti{width:36px;height:36px;border-radius:12px;display:grid;place-items:center;flex:none;color:#1F6B3F}
@@ .ti0{background:#D9F3E2}@@ .ti1{background:#FFF0B8}@@ .ti2{background:#FFDDE8}@@ .ti3{background:#E1F4B4}@@ .ti4{background:#D7EEF8}@@ .ti5{background:#EFE6DA;color:#6B4A2A}
@@ .today{padding:10px 14px 11px}@@ .trow{display:flex;align-items:center;justify-content:space-between;gap:8px}@@ .trow b{display:block;font-size:15px}
@@ .qgrid{display:grid;grid-template-columns:1fr 1fr;gap:7px 12px;margin-top:9px;padding-top:9px;border-top:1px solid #E3F1E8}@@ .q{display:flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700}@@ .q .cb2{width:17px;height:17px;border-radius:6px;border:2px solid #BFDCCB;display:grid;place-items:center;color:#fff;flex:none}@@ .q.on .cb2{background:var(--leaf);border-color:var(--leaf)}@@ .q em{margin-left:auto;font-style:normal;font-size:11px;color:#8A6410;background:#FFF1BD;border-radius:99px;padding:0 6px}
@@ .drs{display:flex;gap:4px}@@ .dr{width:20px;height:24px;display:block}@@ .dr svg{width:100%;height:100%;display:block}
@@ .dr path{fill:#DCE9E1}@@ .dr.on path{fill:url(#gwater)}
/* pick */
@@ .lab{font-size:13px;color:var(--mut);font-weight:800;margin:0}
@@ .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
@@ .th{aspect-ratio:1;border-radius:14px;background-size:cover;background-position:center;position:relative}
@@ .th.sel{box-shadow:0 0 0 3px #fff,0 0 0 6px var(--leaf)}
@@ .th .ck{position:absolute;right:6px;top:6px;width:26px;height:26px;border-radius:50%;background:var(--leaf);display:grid;place-items:center;color:#fff}
/* shrink */
@@.m-app .shrink .w{height:186px;display:flex;gap:14px;align-items:center}
@@ .phw{position:relative;flex:none;width:138px;height:176px}
@@ .ph{position:absolute;inset:0;border-radius:16px;background-size:cover;background-position:center 20%;box-shadow:0 0 0 4px #fff,0 16px 26px -12px rgba(27,58,46,.6);overflow:hidden}
@@ .ph .rays{position:absolute;inset:0;mix-blend-mode:screen;opacity:0}
@@ .szb{position:absolute;right:6px;bottom:6px;padding:3px 9px;border-radius:99px;background:var(--leaf);color:#fff;font-size:13px;font-weight:800;box-shadow:0 4px 8px rgba(0,0,0,.25)}
@@ .bl{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px}@@ .bl svg{width:100%;height:100%;display:block}
@@ .inf h3{font-size:22px}@@ .inf p{margin:6px 0 0;font-size:13px;color:var(--mut)}@@ .inf p b{color:var(--ink);display:block;font-size:14px}
@@ .goalc{display:inline-flex;margin-top:8px;padding:4px 9px;border-radius:10px;background:#FFF4CC;color:#8A6410;font-size:12px;font-weight:800}
@@.m-app .c{height:196px}@@.m-app .done .c,@@.m-app .priv .c{height:auto}
@@ .opts,@@ .job,@@ .res{position:absolute;inset:0}
@@ .opts{display:flex;flex-direction:column;gap:6px}
@@ .opt{display:flex;align-items:center;gap:10px;height:44px;padding:0 12px 0 8px;border-radius:14px;position:relative}
@@ .opt b{display:block;font-size:15px;line-height:1.1}@@ .opt .oi{width:30px;height:30px;border-radius:10px;background:#EAF7EF;display:grid;place-items:center;color:#1F7A4D;flex:none}
@@ .opt .rb{margin-left:auto;width:22px;height:22px;border-radius:50%;border:2px solid #CFE3D6;display:grid;place-items:center;color:#fff}
@@ .opt .pick{position:absolute;right:42px;top:-8px;padding:2px 8px;border-radius:99px;background:var(--lime);color:#2C5A1A;font-size:11px;font-weight:800;box-shadow:0 3px 6px rgba(0,0,0,.15)}
@@ .opt.on{border-color:var(--leaf);background:#F0FBF4;box-shadow:0 0 0 2px var(--leaf)}@@ .opt.on .rb{background:var(--leaf);border-color:var(--leaf)}
@@ .job{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;text-align:center}
@@ .jbig{font-size:40px;line-height:1;font-variant-numeric:tabular-nums}
@@ .jbar{display:flex;justify-content:center;width:100%}
@@ .jt{display:flex;justify-content:space-between;width:100%;font-size:13px;color:var(--mut);font-weight:800}@@ .jt .jp{color:var(--ink)}
@@ .res{display:flex;flex-direction:column;gap:8px}
@@ .cmp{display:grid;grid-template-columns:48px 1fr auto;gap:6px 10px;align-items:center;padding:10px 14px;font-size:13px}
@@ .cmp .bb{height:12px;border-radius:7px;background:#CBB79F}@@ .cmp .ba{height:12px;border-radius:7px;background:linear-gradient(90deg,#3DBE7A,#B6E35B)}
@@ .tags{display:flex;gap:6px;flex-wrap:wrap}
/* crop */
@@ .cb{position:relative;overflow:hidden;border-radius:18px;background:#14291F;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
@@.m-app .cb{height:236px}
@@ .cimg{position:absolute;left:50%;top:50%;background-size:cover;background-position:center}
@@.m-app .cimg{width:420px;height:315px;margin:-157px 0 0 -210px}
@@ .cfr{position:absolute;left:50%;top:50%;border:2px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(20,41,31,.62);background:linear-gradient(#fff6,#fff6) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff6,#fff6) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff6,#fff6) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff6,#fff6) 0 66.6%/100% 1px no-repeat}
@@.m-app .cfr{width:160px;height:200px;margin:-100px 0 0 -80px}
@@ .cfr s{position:absolute;left:50%;top:-12px;transform:translateX(-50%);text-decoration:none;background:var(--sun);color:#5A4300;font-size:11px;font-weight:800;padding:2px 8px;border-radius:99px;white-space:nowrap}
@@ .pres{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,44px);gap:6px;align-content:start}
@@ .pr{display:flex;align-items:center;gap:8px;padding:0 10px;border-radius:13px;height:44px}
@@ .pr b{display:block;font-size:13px;line-height:1.1}@@ .pr small{font-size:11px}
@@ .rt{width:26px;height:26px;display:grid;place-items:center;flex:none}@@ .rt i{display:block;border:2px solid var(--ink);border-radius:3px;background:#DFF4E6}
@@ .pr.on{border-color:var(--leaf);background:#F0FBF4;box-shadow:0 0 0 2px var(--leaf)}
@@ .cinfo{position:absolute;inset:0;display:flex;flex-direction:column;gap:8px;justify-content:flex-start}
@@ .cchip{display:flex;align-items:center;gap:10px;padding:8px 12px}@@ .cchip b{display:block;font-size:15px}
@@ .cslot{position:relative;height:64px;display:flex;align-items:center;justify-content:center}
@@ .cdone{position:absolute;left:0;right:0;top:9px}
/* privacy */
@@ .pw2{display:flex;gap:10px}
@@.m-app .priv .w{height:158px}
@@ .pcard,@@ .mcard{position:relative;border-radius:18px;overflow:hidden;box-shadow:0 0 0 3px #fff,0 12px 20px -12px rgba(27,58,46,.55)}
@@ .pcard{background-size:cover;background-position:center}
@@ .pcard .tag{position:absolute;left:8px;bottom:8px;padding:3px 8px;border-radius:99px;background:rgba(255,255,255,.92);font-size:11px;font-weight:800;color:#B03A2E;display:flex;gap:4px;align-items:center}
@@ .mcard{background:#E4F3E6}@@ .mcard svg.mp{position:absolute;inset:0;width:100%;height:100%}
@@ .mpin{position:absolute;width:34px;height:44px;margin:-44px 0 0 -17px;transform-origin:50% 100%}@@ .mpin svg{width:100%;height:100%;display:block}
@@ .mlab{position:absolute;left:8px;bottom:8px;font-size:11px;font-weight:800;padding:3px 8px;border-radius:99px;background:#fffd}
@@ .fog{position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.96),rgba(240,250,244,.9));opacity:0}
@@ .shield{position:absolute;left:50%;top:50%;width:70px;height:78px;margin:-39px 0 0 -35px}
@@ .place{display:flex;flex-direction:column;gap:2px}@@ .place .plc{font-size:28px;line-height:1.05}
@@ .warn,@@ .okb{display:flex;gap:10px;align-items:center;padding:9px 12px;border-radius:14px;font-size:13px;line-height:1.25}
@@ .warn{background:#FFF4CC;border:1px solid #F0D27A;color:#6B5008}@@ .okb{background:#E4F7EC;border:1px solid #9ADBB6;color:#175A38}
@@ .pc2{position:relative;flex:none}@@ .pc2 .okb{position:absolute;left:0;right:0;top:0}
/* gif */
@@ .vid{position:relative;border-radius:18px;background-size:cover;background-position:center;overflow:hidden;box-shadow:0 0 0 3px #fff,0 12px 20px -12px rgba(27,58,46,.55)}
@@.m-app .vid{height:176px}
@@ .vb{position:absolute;left:8px;top:8px;padding:3px 9px;border-radius:99px;background:rgba(27,58,46,.78);color:#fff;font-size:12px;font-weight:800}
@@ .stp{position:relative;margin-top:12px;height:46px}
@@ .stp .fs{display:flex;height:100%;border-radius:10px;overflow:hidden}@@ .stp .fs i{flex:1;background-size:cover;background-position:center}
@@ .selw{position:absolute;top:-4px;bottom:-4px;border:3px solid var(--sun);border-radius:10px;box-shadow:0 0 0 999px rgba(236,247,240,.62)}
@@ .stpc{position:absolute;inset:-5px 0;overflow:hidden;border-radius:12px;padding:5px 0}
@@ .hd{position:absolute;top:50%;width:18px;height:54px;margin:-27px 0 0 -9px;border-radius:7px;background:var(--sun);box-shadow:0 3px 6px rgba(0,0,0,.25);display:grid;place-items:center}
@@ .hd::after{content:"";width:3px;height:20px;border-radius:2px;background:#8A6410;opacity:.6}
@@ .trim{display:flex;justify-content:space-between;align-items:baseline;font-size:13px}@@ .trim b{font-size:16px}
@@ .vslot{display:flex;justify-content:center;align-items:center}
@@ .gt{display:flex;justify-content:space-between;font-size:13px;color:var(--mut);font-weight:800}
/* done */
@@ .g4{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@@ .rc{display:flex;align-items:center;gap:10px;padding:8px;height:92px;position:relative}
@@ .rc i{width:56px;height:70px;border-radius:12px;background-size:cover;background-position:center;flex:none}
@@ .rc b{display:block;font-size:14px;line-height:1.1}@@ .rc small{font-size:11.5px;line-height:1.2;display:block;margin-top:2px}
@@ .rc .mp{position:absolute;right:6px;bottom:2px;width:36px;height:42px}
@@ .sumr{display:flex;gap:8px}@@ .sumr .card{flex:1;padding:9px 12px;min-height:66px}
@@ .sumr .fr{font-size:19px;line-height:1.1;white-space:nowrap}@@ .lvup{display:flex;align-items:center;gap:6px}
@@ .sumr .rk2{display:inline-block;padding:2px 8px;border-radius:99px;background:#FFE9A8;color:#7A5600;font-size:11px;font-weight:800}
@@ .spk{position:absolute;right:6px;top:-14px;width:23px;height:31px;z-index:2}@@ .spk .pkt{transform:scale(.43);transform-origin:0 0}
@@ .dn{align-items:center}@@ .dn .bigp{transform:scale(1.7);margin:34px 0 30px}
@@ .rcpt{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--mut);font-weight:800}@@ .rcpt b{color:var(--ink)}
@@ .promise{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:800;color:#1F7A4D}
@@ .ad{display:flex;gap:10px;align-items:center;border:1.5px dashed #B9D4C3;border-radius:14px;padding:8px 10px;background:#fff8}
@@ .ad i{width:40px;height:40px;border-radius:10px;background:#E4EDE8;flex:none}@@ .ad small{font-size:11px;font-weight:800;letter-spacing:.06em;border:1.5px solid var(--mut);border-radius:5px;padding:0 5px;margin-right:6px}
/* character layer */
@@ .spr{position:absolute;left:0;top:0;width:220px;height:300px;transform-origin:110px 285px;z-index:20;pointer-events:none}
@@ .spsh{position:absolute;left:34px;top:268px;width:152px;height:28px;border-radius:50%;background:radial-gradient(closest-side,rgba(27,58,46,.34),rgba(27,58,46,0))}
@@ .spj,@@ .spj svg{position:absolute;left:0;top:0;width:220px;height:300px;transform-origin:110px 285px;overflow:visible}
@@ .zz{position:absolute;z-index:22;font:800 18px Fraunces,serif;color:#5E7E6E;opacity:0}
@@ .bub{position:absolute;left:0;top:0;z-index:26;background:#fff;border:1px solid var(--line);border-radius:18px;padding:9px 13px;font-size:14px;font-weight:700;line-height:1.28;box-shadow:0 12px 22px -12px rgba(27,58,46,.55)}
@@ .bub .tl{position:absolute;width:16px;height:16px;background:#fff;border:1px solid var(--line);border-top:0;border-right:0;border-radius:0 0 0 4px;transform:rotate(45deg)}
@@ .bub .bt{position:relative;z-index:1;display:block}
@@ .bub .cta{position:relative;z-index:1;display:inline-flex;align-items:center;gap:6px;margin-top:7px;padding:5px 13px;border-radius:99px;background:linear-gradient(180deg,#55D391,#2DAA68);color:#fff;font-weight:800;font-size:13px}
@@ .xpf{position:absolute;left:0;top:0;z-index:27;display:flex;align-items:center;gap:5px;padding:4px 11px;border-radius:99px;background:linear-gradient(180deg,#FFE27A,#FFC53A);color:#5A4300;font-weight:800;font-size:14px;box-shadow:0 8px 14px -6px rgba(180,120,0,.55)}
@@ .fx{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:15}
@@ .scrim{position:absolute;inset:0;z-index:18;background:rgba(27,58,46,.38)}
@@ .vn{position:absolute;left:0;top:0;z-index:19;pointer-events:none}
@@ .qm{position:absolute;left:-34px;top:-50px;width:68px;height:100px;z-index:25;display:grid;place-items:center;text-align:center;color:#17452E}
@@ .qm svg.lf{position:absolute;inset:0;width:68px;height:100px;overflow:visible}
@@ .qm .qc{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;font-size:12px;font-weight:800;line-height:1}
@@ .qm.hit{filter:brightness(.92)}
/* dewdrop hint */
@@ .shill{position:absolute;border-radius:50%;background:radial-gradient(100% 100% at 50% 0,#D8F3C4,#A8E08E 62%,#8ED17C)}
@@ .spl{position:absolute;left:0;right:0;text-align:center}@@ .spl h1{margin:0;font-size:34px}@@ .spl p{margin:6px 0 0;font-size:15px;color:var(--mut);display:flex;gap:7px;justify-content:center;align-items:center}
/* web */
@@.m-web{font-size:14px}
@@ .side{position:absolute;left:16px;top:16px;width:200px;height:724px;padding:16px 12px;display:flex;flex-direction:column;gap:6px;z-index:5;border-radius:22px}
@@ .brand{display:flex;align-items:center;gap:9px;font-size:17px;margin:2px 4px 14px;line-height:1.1}
@@ .nav{display:flex;align-items:center;gap:10px;height:46px;padding:0 10px;border-radius:14px;font-size:15px;font-weight:800;color:#2D5A45;border:1px solid transparent}
@@ .nav kbd{margin-left:auto}@@ .nav .ti{width:30px;height:30px;border-radius:10px}
@@ .nav.on{background:#F0FBF4;border-color:var(--leaf);box-shadow:0 0 0 2px rgba(61,190,122,.18)}
@@ .side .sn{margin-top:auto;display:flex;gap:8px;align-items:flex-start;font-size:12.5px;color:#1F7A4D;font-weight:800;background:#E4F7EC;padding:10px;border-radius:13px}
@@ .cv{position:absolute;left:232px;top:16px;width:696px;height:724px;border-radius:24px;overflow:hidden;z-index:4;background:linear-gradient(180deg,#E6F6EC,#F6FCF8 55%,#fff);box-shadow:0 0 0 1px var(--line),0 24px 40px -28px rgba(27,58,46,.5)}
@@ .cv .gr{position:absolute;left:-40px;right:-40px;bottom:-60px;height:130px;border-radius:50%;background:radial-gradient(100% 100% at 50% 0,#D3F2BE,#A8E08E 70%);z-index:3;pointer-events:none}
@@.m-web .tt{position:absolute;left:22px;right:22px;top:18px;height:34px;display:flex;align-items:center;gap:10px}
@@ .tt .tti{width:32px;height:32px;border-radius:11px;background:#D9F3E2;display:grid;place-items:center;color:#1F6B3F}@@ .tt .fr{font-size:23px}@@ .tt small{margin-left:auto}
@@.m-web .rail{position:absolute;left:20px;top:68px;width:206px;padding:12px;display:flex;flex-direction:column;gap:6px}
@@ .rail .rp{height:84px;border-radius:12px;background-size:cover;background-position:center 38%}@@ .rail b{font-size:14px}@@ .rail .kv{display:flex;justify-content:space-between;font-size:12px;color:var(--mut)}@@ .rail .kv b{color:var(--ink);font-size:12px}
@@.m-web .pg .w{position:absolute;left:250px;top:62px;width:430px;height:336px;display:flex;align-items:center;justify-content:center}
@@.m-web .pg .c{position:absolute;left:250px;top:410px;width:430px;height:296px}
@@.m-web .phw{width:228px;height:292px}
@@.m-web .cb{width:430px;height:326px}
@@.m-web .cimg{width:580px;height:435px;margin:-217px 0 0 -290px}
@@.m-web .cfr{width:232px;height:290px;margin:-145px 0 0 -116px}
@@.m-web .pr{height:52px}@@.m-web .opt{height:52px}@@.m-web .opts{gap:8px}
@@.m-web .vid{width:430px;height:240px}@@.m-web .stp{width:430px;position:absolute;left:0;top:262px}
@@.m-web .gif .w{align-items:flex-start}
@@.m-web .jbig{font-size:44px}
@@.m-web .pcard{width:200px;height:300px}@@.m-web .mcard{width:220px;height:300px}
@@.m-web .rc{height:128px;padding:10px}@@.m-web .rc i{width:70px;height:100px}@@.m-web .g4{gap:10px;width:430px}
@@ .dz{width:400px;height:280px;border:2.5px dashed #9FD3B4;border-radius:26px;background:rgba(255,255,255,.7);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center}
@@ .dz.hot{border-color:var(--leaf);background:#F0FBF4}@@ .dz .fr{font-size:24px}
@@ .quest{padding:14px 16px;display:flex;flex-direction:column;gap:9px}@@ .quest .q{display:flex;align-items:center;gap:10px;font-size:14px}@@ .quest .q .cb2{width:20px;height:20px;border-radius:7px;border:2px solid #BFDCCB;display:grid;place-items:center;color:#fff;flex:none}@@ .quest .q.on .cb2{background:var(--leaf);border-color:var(--leaf)}@@ .quest .q em{margin-left:auto;font-style:normal;font-size:12px;color:#8A6410;background:#FFF1BD;border-radius:99px;padding:1px 8px}
@@ .fcard{position:absolute;left:0;top:0;z-index:200;width:150px;padding:7px;border-radius:14px;display:flex;flex-direction:column;gap:5px;box-shadow:0 22px 36px -14px rgba(27,58,46,.6)}@@ .fcard i{height:92px;border-radius:9px;background-size:cover;background-position:center}@@ .fcard span{font-size:12px;font-weight:800}
@@ .rcol{position:absolute;left:944px;top:16px;width:320px;height:724px;display:flex;flex-direction:column;gap:10px;z-index:5}
@@ .rcol .card{padding:12px 14px}@@ .ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}@@ .ch .fr{font-size:16px}
@@ .gbed{display:grid;grid-template-columns:1fr 1fr;gap:10px}
@@ .gbed .plot{width:auto;height:112px}@@ .gbed .plot .soil{height:44px;border-radius:14px}@@ .gbed .plot .pl{width:86px;height:100px;margin-left:-43px;bottom:16px}@@ .gbed .plot .soil::after{display:none}
@@ .gbed .plot small{position:absolute;left:0;right:0;bottom:5px;text-align:center;color:#F7E8D2;font-size:11px;font-weight:800;z-index:2}
@@ .wk{display:flex;justify-content:space-between}@@ .wk div{text-align:center;font-size:11px;color:var(--mut);font-weight:800}@@ .wk .dr{width:30px;height:36px;margin:0 auto 3px}
@@ .ssn{display:flex;justify-content:space-between;margin-top:8px}@@ .ssn div{display:flex;flex-direction:column;align-items:center;gap:3px;font-size:11px;font-weight:800;color:#8DA89A;width:62px}
@@ .ssn i{width:32px;height:32px;border-radius:50%;background:#EDF4F0;display:grid;place-items:center}@@ .ssn div.on{color:var(--ink)}@@ .ssn div.on i{background:#FFE9A8;box-shadow:0 0 0 2px var(--sun)}
@@ .pks{display:flex;gap:8px;justify-content:space-between}@@ .pks .pkt{width:50px;height:68px}@@ .pks .pkt .pwin{height:32px;margin:2px 4px 0}@@ .pks .pkt b{font-size:8px}
@@ .xr{display:flex;justify-content:space-between;margin-top:5px}
`;
return {
  id: 'sprout', order: 16, round: 2, name: 'Sprout Garden',
  tagline: 'Sprout grows as you work. Every finished photo plants a flower.',
  concept: 'Sprout is a small plant in a terracotta pot. It starts as a seedling, grows a bud after your first win and blooms at the end of the story. XP is water and sunlight, each finished job plants a new flower in your garden, a daily watering streak keeps it alive, and seasons are the ranks. Tap Sprout and five leaf buttons unfurl on vines to jump to any tool.',
  wins: [
    'One calm, wholesome world: the growth metaphor makes saving space, hiding places and making GIFs feel like tending a garden.',
    'Real game loops (XP, levels, seasons, streak, seed packets) that never block the work and look like a premium wellness app.',
    'A distinctive character and motion language: roots feeding the pot, a vine progress bar and bloom bursts that no rival has.',
  ],
  risks: [
    'The garden is a lot of art to keep consistent across every tool and every screen size.',
    'Sprout and the dock use space on a small phone, so the content area is tighter than in a plain layout.',
  ],
  scores: { simple: 4, fun: 4, wow: 4, pro: 4, game: 4, effort: 3 },
  palette: ['#E9F7EF', '#1B3A2E', '#3DBE7A', '#B6E35B', '#FFD24D', '#FF8FB1', '#8B5E3C'],
  type: 'Nunito for all UI text (soft, friendly, very readable). Fraunces for headings and big numbers, so the app feels like a botanical journal.',
  motion: 'Leaves sway on a breeze, light rays sweep the photo, XP motes flow into the pot, and every win ends in a petal burst while Sprout grows.',
  notes: {
    intro: 'Sprout sleeps in its pot, a dewdrop wakes it, the seedling pops up, winks, and the home opens in an iris bloom from the plant.',
    pick: 'One tap on the photo and Sprout gasps, then suggests "Exam form" with a Sprout pick tag. On the web you drag the file and plant it.',
    shrink: 'Sunlight sweeps the photo, a watering can drips, motes stream into the pot while 4.8 MB falls to 196 KB. The photo blooms and Sprout grows a bud.',
    crop: 'Tap Sprout and five leaf buttons unfurl on vines. Crop is pointed out, one tap picks Instagram 4:5, and a flower is planted when you finish.',
    privacy: 'Sprout spots the location and asks. The pin drops on Pune, India. Remove location fogs the map, then a leaf shield pops.',
    gif: 'The longest wait uses a growing vine bar that sprouts leaves and a blossom for each frame batch, ending in a looping 2.1 MB GIF.',
    done: 'Four plants fill the garden, Sprout blooms into Summer rank, the 7-day streak lights up and the only Ad waits at the bottom.',
  },
  extras: [
    ['Character', 'Sprout: a plant in a terracotta and moss pot with a face on the pot. Eight moods (neutral, happy, wink, surprised, thinking, effort, celebrate, sleepy). Eyes follow the pointer, leaves sway, blink and breathe. Three growth stages: seedling, bud, flower. Tap it for the five-leaf quick menu.'],
    ['Game system', 'XP is sun and water (+40, +30, +30, +50). Levels carry the rank of a season (Spring to Summer). Each job plants a flower in the garden bed. Daily watering streak (6 to 7 days) and seed packet achievements.'],
    ['Progress bars', 'A.bars set for the shrink, crop and location jobs (streams as roots, liquid as water, tiles as petals, comet as fireflies, orbit). A custom growing vine with leaves and a blossom for the GIF.'],
    ['Screen changes', 'Iris bloom from the plant, blinds that part like leaves, push for steps, and seed packets that drop in from above.'],
    ['Finish effect', 'Petal and heart bursts, a bloom ring around the plant and Sprout growing to the next stage.'],
    ['Taps to finish', 'Shrink 4 · Crop 4 · Place 2 · GIF 3 = 13 taps on the phone. On the web the drag replaces two taps (12 actions).'],
  ],
  statusBar: 'dark',
  css: CSS.replace(/@@/g, '.st-sprout'),
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, E = A.ease, { seg, lerp, clamp, set, txt, cls } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = web ? 'w' : 'a', W = A.W, H = A.H;
    const at = (e, k, v) => { const m = e._m || (e._m = {}); if (m[k] !== v) { m[k] = v; e.setAttribute(k, v); } };
    const dsp = (e, on) => at(e, 'display', on ? 'inline' : 'none');
    const DK = web ? { x: 340, y: 722, s: 1 } : { x: 96, y: 322, s: 0.86 };
    const CEN = web ? { x: 640, y: 540, s: 1.7 } : { x: 195, y: 540, s: 1.15 };
    const T_PHOTO = web ? 6.8 : 6.0, XPT = [14.4, 23.7, 28.7, 35.3], PLT = [14.9, 24.0, 29.0, 35.6], XPA = [40, 30, 30, 50];
    const NAMES = ['Tiny Tulip', 'Frame Flower', 'Shy Fern', 'Loop Lotus', 'Week Streak'], PKC = ['#FF8FB1', '#FFD24D', '#3DBE7A', '#B6A4F0', '#5CC4EE'];

    /* ---------- art ---------- */
    const GL = `<linearGradient id="gl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#23895A"/><stop offset="1" stop-color="#9AE06A"/></linearGradient><linearGradient id="gt" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E8648F"/><stop offset="1" stop-color="#FFB5CD"/></linearGradient><linearGradient id="gs" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FFB92E"/><stop offset="1" stop-color="#FFE98A"/></linearGradient><radialGradient id="gb" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#A8703F"/><stop offset="1" stop-color="#4E2F17"/></radialGradient><linearGradient id="gp" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#FF9FBE"/><stop offset=".5" stop-color="#FFE0EA"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="gwater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FDCF6"/><stop offset="1" stop-color="#3FB2E2"/></linearGradient>`;
    const lf = (tr, f = 'url(#gl)') => `<path transform="${tr}" d="M0 0C-8 -4 -11 -12 -9 -18 -3 -14 0 -8 0 0Z" fill="${f}"/>`;
    const PLANTS = [
      /* tulip */ `<path d="M30 68V36" stroke="#2A9460" stroke-width="3.2" stroke-linecap="round"/><path d="M30 64C19 62 13 52 14 42 23 46 29 55 30 64Z" fill="url(#gl)"/><path d="M30 60C41 58 47 50 46 40 37 44 31 52 30 60Z" fill="url(#gl)"/><path d="M30 42C18 40 16 25 20 14 26 19 28 21 30 26 32 21 34 19 40 14 44 25 42 40 30 42Z" fill="url(#gt)"/><path d="M30 28C28 34 29 38 30 41" stroke="#fff" stroke-opacity=".55" stroke-width="1.4" fill="none"/>`,
      /* sunflower */ `<path d="M30 68V34" stroke="#2A9460" stroke-width="3.2" stroke-linecap="round"/><path d="M30 60C19 60 12 52 12 44 22 46 29 52 30 60Z" fill="url(#gl)"/><path d="M30 54C41 54 48 47 48 40 38 42 31 47 30 54Z" fill="url(#gl)"/><g transform="translate(30 26)">${Array.from({ length: 12 }, (_, i) => `<ellipse cx="0" cy="-12" rx="4.2" ry="8.4" transform="rotate(${i * 30})" fill="url(#gs)"/>`).join('')}<circle r="8.4" fill="url(#gb)"/><circle cx="-2" cy="-2" r="1.2" fill="#C9A06A"/><circle cx="2.5" cy="1" r="1.2" fill="#C9A06A"/></g>`,
      /* fern */ (() => { let s = '<path d="M30 68C30 52 34 36 48 22" stroke="#2A9460" stroke-width="3" fill="none" stroke-linecap="round"/>'; for (let i = 1; i < 10; i++) { const u = i / 10, x = (1 - u) ** 3 * 30 + 3 * (1 - u) ** 2 * u * 30 + 3 * (1 - u) * u * u * 34 + u ** 3 * 48, y = (1 - u) ** 3 * 68 + 3 * (1 - u) ** 2 * u * 52 + 3 * (1 - u) * u * u * 36 + u ** 3 * 22, a = -30 + u * 60, L = 14 * (1 - u * 0.55); s += `<ellipse cx="${(x - 0).toFixed(1)}" cy="${y.toFixed(1)}" rx="${(L * 0.28).toFixed(1)}" ry="${L.toFixed(1)}" transform="rotate(${(a + 62).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)}) translate(0 ${-L * 0.8})" fill="url(#gl)"/><ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(L * 0.28).toFixed(1)}" ry="${L.toFixed(1)}" transform="rotate(${(a - 62).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)}) translate(0 ${-L * 0.8})" fill="url(#gl)"/>`; } return s + '<ellipse cx="48" cy="22" rx="2.5" ry="5" transform="rotate(30 48 22)" fill="url(#gl)"/>'; })(),
      /* lotus */ `<ellipse cx="30" cy="66" rx="24" ry="5" fill="#2A9460"/><ellipse cx="30" cy="65" rx="22" ry="3.6" fill="#5FC27F"/><path d="M30 64C12 62 6 52 8 42 20 45 28 52 30 64Z" fill="url(#gp)"/><path d="M30 64C48 62 54 52 52 42 40 45 32 52 30 64Z" fill="url(#gp)"/><path d="M30 64C16 60 12 46 18 34 26 40 30 50 30 64Z" fill="url(#gp)"/><path d="M30 64C44 60 48 46 42 34 34 40 30 50 30 64Z" fill="url(#gp)"/><path d="M30 64C22 52 23 38 30 26 37 38 38 52 30 64Z" fill="url(#gp)"/><circle cx="30" cy="48" r="3" fill="#FFD24D"/>`,
    ];
    const plantSVG = i => `<svg viewBox="0 0 60 72">${PLANTS[i]}</svg>`;
    const flowerSVG = c => `<svg viewBox="-16 -16 32 32">${Array.from({ length: 6 }, (_, i) => `<ellipse cy="-8" rx="4.6" ry="7.6" transform="rotate(${i * 60})" fill="${c}"/>`).join('')}<circle r="4.2" fill="#FFD24D"/></svg>`;
    const dropSVG = '<svg viewBox="0 0 24 28"><path d="M12 2C7.5 9 5 13 5 17.5a7 7 0 0 0 14 0C19 13 16.5 9 12 2Z"/></svg>';
    const pkt = i => `<div class="pkt ${i > 3 ? 'wk5' : ''}" style="--pk:${PKC[i]}"><i class="pz"></i><div class="pwin">${i < 4 ? plantSVG(i) : `<div style="display:grid;place-items:center;height:100%;color:#2C86B0">${I('star', 22, 2.2)}</div>`}</div><b>${NAMES[i]}</b></div>`;
    const plotH = i => `<div class="plot"><i class="soil"></i><div class="pl">${plantSVG(i)}</div>${web ? `<small>${NAMES[i]}</small>` : `<div class="pkw">${pkt(i)}</div>`}</div>`;
    const SPOT = 'M22 112C12 152 24 208 58 214L102 214C136 208 148 152 138 112Z', LEAF = 'M0 0C-24 -14 -27 -46 0 -72C27 -46 24 -14 0 0Z';
    const leafG = c => `<g class="${c}"><path d="${LEAF}" fill="url(#lg${uid})" stroke="#1F7A4D" stroke-opacity=".35" stroke-width=".8"/><path d="M0 0C24 -14 27 -46 0 -72L0 -64C14 -44 15 -18 0 -5Z" fill="#fff" opacity=".16"/><path d="M0 -4L0 -64" stroke="#1F7A4D" stroke-opacity=".5" stroke-width="1.5" stroke-linecap="round"/><path d="M0 -18L-11 -31M0 -18L11 -31M0 -33L-13 -47M0 -33L13 -47M0 -48L-8 -58M0 -48L8 -58" stroke="#E8FAC8" stroke-opacity=".6" stroke-width="1" stroke-linecap="round" fill="none"/>${c === 'earR' ? `<g class="dew" transform="translate(10 -30)"><path d="M0 -6C4.4 0 4.8 3.8 0 5.4C-4.8 3.8 -4.4 0 0 -6Z" fill="url(#dw${uid})" stroke="#5CC4EE" stroke-opacity=".5" stroke-width=".6"/><circle cx="-1.3" cy="-.3" r="1.2" fill="#fff"/><path class="dsp" d="M0 -11L2 -2L11 0L2 2L0 11L-2 2L-11 0L-2 -2Z" fill="#fff" opacity="0"/></g>` : ''}</g>`;
    const petal = (r, k, f) => `<path transform="rotate(${r}) scale(${k})" d="M0 0C-9 -7 -11 -22 0 -31C11 -22 9 -7 0 0Z" fill="${f}"/>`;
    const sproutSVG = u => `<svg viewBox="-30 -70 220 300"><defs>
<radialGradient id="pg${u}" cx=".32" cy=".25" r=".95"><stop offset="0" stop-color="#F4B48A"/><stop offset=".5" stop-color="#D67D4F"/><stop offset="1" stop-color="#A24F2E"/></radialGradient>
<linearGradient id="rg${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F9CBA7"/><stop offset=".55" stop-color="#DE8657"/><stop offset="1" stop-color="#B5603A"/></linearGradient>
<linearGradient id="mg${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9BE08E"/><stop offset=".6" stop-color="#3DBE7A"/><stop offset="1" stop-color="#25905B"/></linearGradient>
<linearGradient id="lg${u}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#23895A"/><stop offset=".55" stop-color="#3DBE7A"/><stop offset="1" stop-color="#B6E35B"/></linearGradient>
<linearGradient id="sg${u}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2A9460"/><stop offset="1" stop-color="#7FD36B"/></linearGradient>
<radialGradient id="pt${u}" cx=".5" cy=".95" r="1"><stop offset="0" stop-color="#E8648F"/><stop offset=".6" stop-color="#FF8FB1"/><stop offset="1" stop-color="#FFD0E0"/></radialGradient>
<radialGradient id="cn${u}" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#FFF3B0"/><stop offset=".6" stop-color="#FFD24D"/><stop offset="1" stop-color="#E5A21A"/></radialGradient>
<radialGradient id="dw${u}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#C6EEFB"/><stop offset="1" stop-color="#5CC4EE"/></radialGradient>
<radialGradient id="gl${u}"><stop offset="0" stop-color="#FFE98A" stop-opacity=".75"/><stop offset="1" stop-color="#FFE98A" stop-opacity="0"/></radialGradient>
<clipPath id="pc${u}"><path d="${SPOT}"/></clipPath><clipPath id="ec${u}"><ellipse rx="9.5" ry="11"/></clipPath></defs>
<g class="all"><ellipse cx="80" cy="99" rx="52" ry="9" fill="#4A2E1A"/><ellipse cx="80" cy="96" rx="40" ry="5" fill="#6B452B"/>
<g class="plant"><path class="stem" fill="none" stroke="url(#sg${u})" stroke-width="5.5" stroke-linecap="round"/>${leafG('lowL')}${leafG('lowR')}${leafG('earL')}${leafG('earR')}
<g class="fl"><circle class="glow" r="40" fill="url(#gl${u})"/><g class="bud"><g transform="translate(0 4) scale(.5) rotate(-38)"><path d="${LEAF}" fill="url(#lg${u})"/></g><g transform="translate(0 4) scale(.5) rotate(38)"><path d="${LEAF}" fill="url(#lg${u})"/></g><path d="M0 6C-9 -2 -7 -18 0 -27C7 -18 9 -2 0 6Z" fill="url(#pt${u})"/><path d="M-2 -3C-4 -10 -2 -16 0 -20" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" fill="none"/></g>
<g class="pet">${Array.from({ length: 8 }, (_, i) => petal(22.5 + i * 45, 0.82, '#FFB5CD')).join('')}${Array.from({ length: 8 }, (_, i) => petal(i * 45, 1, `url(#pt${u})`)).join('')}<circle r="9" fill="url(#cn${u})"/><circle cx="-2.5" cy="-2" r="1.1" fill="#C98A12"/><circle cx="2.6" cy="1.5" r="1.1" fill="#C98A12"/><circle cx="-1" cy="3.4" r="1" fill="#C98A12"/></g></g></g>
<path d="${SPOT}" fill="url(#pg${u})"/>
<g clip-path="url(#pc${u})"><path d="M30 124C24 150 28 180 42 200" stroke="#fff" stroke-opacity=".3" stroke-width="7" stroke-linecap="round" fill="none"/><path d="M134 128C144 162 128 204 100 214" stroke="#7A3A20" stroke-opacity=".28" stroke-width="12" fill="none"/><path d="M12 128Q80 142 148 128" stroke="#7A3A20" stroke-opacity=".25" stroke-width="9" fill="none"/>
<path d="M0 195Q18 186 38 194T80 192T120 197T165 186V230H0Z" fill="url(#mg${u})"/><path d="M6 195Q20 190 34 195M84 193Q100 189 114 196" stroke="#D2F5B4" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="48" cy="203" r="1.8" fill="#D2F5B4"/><circle cx="96" cy="206" r="1.5" fill="#D2F5B4"/><circle cx="124" cy="201" r="1.8" fill="#D2F5B4"/></g>
<rect x="12" y="100" width="136" height="25" rx="12.5" fill="url(#rg${u})"/><path d="M26 107H92" stroke="#fff" stroke-opacity=".65" stroke-width="3.6" stroke-linecap="round"/><circle cx="103" cy="107" r="2" fill="#fff" opacity=".75"/><path d="M22 121H138" stroke="#8C4527" stroke-opacity=".28" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="30" cy="123" rx="11" ry="4.6" fill="#3DBE7A"/><ellipse cx="38" cy="125" rx="8" ry="3.6" fill="#7FD36B"/><ellipse cx="128" cy="124" rx="9" ry="4" fill="#3DBE7A"/>
<g class="face"><ellipse class="chL" cx="46" cy="170" rx="8.5" ry="5" fill="#FF8FB1"/><ellipse class="chR" cx="114" cy="170" rx="8.5" ry="5" fill="#FF8FB1"/>
${['eL', 'eR'].map((c, k) => `<g class="${c}"><g class="eo"><g clip-path="url(#ec${u})"><ellipse rx="9.5" ry="11" fill="#FFFDF4"/><g class="ir"><ellipse rx="6.8" ry="8" fill="#22513C"/><ellipse rx="4" ry="4.9" fill="#0F241B"/><circle cx="-2.5" cy="-3" r="2.4" fill="#fff"/><circle cx="2.5" cy="3.2" r="1.1" fill="#fff" opacity=".85"/></g><g class="lg"><rect x="-12" y="-36" width="24" height="25" fill="#D98655"/><path d="M-10 -11Q0 -8 10 -11" stroke="#5B301B" stroke-width="2.2" fill="none" stroke-linecap="round"/></g></g></g><path class="ea" d="M-8 3Q0 -7 8 3" stroke="#1B3A2E" stroke-width="3.4" fill="none" stroke-linecap="round"/><path class="ec" d="M-8 0Q0 5 8 0" stroke="#1B3A2E" stroke-width="3.2" fill="none" stroke-linecap="round"/></g>`).join('')}
<path class="bL" fill="none" stroke="#5B301B" stroke-width="3" stroke-linecap="round" d="M-9 0Q0 -3.5 9 0"/><path class="bR" fill="none" stroke="#5B301B" stroke-width="3" stroke-linecap="round" d="M-9 0Q0 -3.5 9 0"/>
<g transform="translate(80 172)"><path class="m-smile" d="M-10 -1Q0 8 10 -1" stroke="#1B3A2E" stroke-width="3.2" fill="none" stroke-linecap="round"/><g class="m-grin"><path d="M-12 -4Q0 -3 12 -4Q10 12 0 12Q-10 12 -12 -4Z" fill="#1B3A2E"/><path d="M-6 8Q0 3 6 8Q3 12 0 12Q-3 12 -6 8Z" fill="#FF8FB1"/></g><ellipse class="m-o" cy="3" rx="4.6" ry="5.8" fill="#1B3A2E"/><path class="m-flat" d="M-7 3H7" stroke="#1B3A2E" stroke-width="3" stroke-linecap="round"/><path class="m-smirk" d="M-9 5Q0 4 10 -3" stroke="#1B3A2E" stroke-width="3.2" fill="none" stroke-linecap="round"/><g class="m-grit"><rect x="-11" y="-3" width="22" height="9" rx="3.5" fill="#FFFDF4" stroke="#1B3A2E" stroke-width="2.4"/><path d="M-5.5 -3V6M0 -3V6M5.5 -3V6" stroke="#1B3A2E" stroke-width="1.4"/></g><g class="m-cheer"><path d="M-14 -5Q0 -4 14 -5Q12 18 0 18Q-12 18 -14 -5Z" fill="#1B3A2E"/><path d="M-7 12Q0 5 7 12Q4 18 0 18Q-4 18 -7 12Z" fill="#FF8FB1"/></g><ellipse class="m-tiny" cy="3" rx="3" ry="2.6" fill="#1B3A2E"/></g>
<path class="sweat" d="M116 132C120 138 121 141 116 143C111 141 112 138 116 132Z" fill="url(#dw${u})" stroke="#5CC4EE" stroke-width=".7"/></g></g></svg>`;

    /* ---------- DOM ---------- */
    const WATER_DEFS = `<svg width="0" height="0" style="position:absolute"><defs>${GL}</defs></svg>`;
    A.el('div', '', S, WATER_DEFS);
    const tools = [['shrink', 'Shrink', 'to a size', 'S'], ['crop', 'Crop', 'for social', 'C'], ['pin', 'Place', 'hide places', 'P'], ['film', 'GIF', 'from a video', 'G'], ['convert', 'Convert', 'JPG, PNG, WebP', 'F'], ['grid', 'More', 'all tools', 'M']];
    const lockLine = web ? D.promiseWeb : D.promise;
    const dropRow = n => `<div class="drs">${Array.from({ length: 7 }, (_, i) => `<span class="dr ${i < n ? 'on' : ''}">${dropSVG}</span>`).join('')}</div>`;
    const thumbs = [A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    const cv = web ? A.el('div', 'cv', S) : S;
    let dash = null;
    const brandLogo = `<svg width="30" height="30" viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="10" fill="#3DBE7A"/><path d="M20 30V19" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><path d="M20 21C13 21 11 15 12 11 18 12 20 16 20 21ZM20 19C26 19 29 14 28 10 22 11 20 15 20 19Z" fill="#fff"/></svg>`;
    if (web) {
      A.el('div', 'side card', S, `<div class="brand fr">${brandLogo}<span>Image<br>Swiss Knife</span></div>${tools.slice(0, 5).map((x, i) => `<div class="nav n${i}"><span class="ti ti${i}">${I(x[0], 17, 2.3)}</span>${x[1]}<kbd>${x[3]}</kbd></div>`).join('')}<div class="nav"><span class="ti ti5">${I('grid', 17, 2.3)}</span>More<kbd>M</kbd></div><div class="sn">${I('lock', 18, 2.4)}<span>${lockLine}</span></div>`);
      const SEAS = [['Spring', 'sparkle'], ['Summer', 'star'], ['Autumn', 'layers'], ['Winter', 'sparkle']];
      A.el('div', 'rcol', S, `<div class="card"><div class="ch"><b class="fr">Garden bed</b><span class="chip gct">0 of 4 grown</span></div><div class="gbed">${[0, 1, 2, 3].map(plotH).join('')}</div></div>
        <div class="card"><div class="ch"><b class="fr">Daily watering</b><span class="chip stt">6-day streak</span></div><div class="wk">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'].map((d, i) => `<div><span class="dr d${i} ${i < 6 ? 'on' : ''}">${dropSVG}</span>${d}</div>`).join('')}</div></div>
        <div class="card"><div class="ch"><b class="fr lvc">Level 2</b><span class="chip rkc">Spring</span></div><div class="xbar"><i></i></div><div class="xr"><small class="xtt">70 / 100 XP</small><small>Next rank: Summer</small></div><div class="ssn">${SEAS.map((x, i) => `<div class="${i === 0 ? 'on' : ''} se${i}"><i>${I(x[1], 16, 2.2)}</i>${x[0]}</div>`).join('')}</div></div>
        <div class="card"><div class="ch"><b class="fr">Seed packets</b><span class="chip pkc">0 of 5</span></div><div class="pks">${[0, 1, 2, 3, 4].map(i => `<div class="pkx" data-i="${i}"><div class="pkt lock" style="--pk:${PKC[i]}"><i class="pz"></i><div class="pwin"></div><b>${NAMES[i]}</b></div></div>`).join('')}</div></div>`);
      A.el('div', 'gr', cv);
    } else {
      A.el('div', 'deco', S, '<i class="sunl"></i><i class="hill"></i><i class="hill2"></i>');
      A.el('div', 'hdr', S, `<div class="lv card"><span class="lvi">${I('sparkle', 17, 2.4)}</span><div class="lvt"><div class="r1"><b class="fr lvn">Lv 2</b><span class="lvr">Spring</span><small class="xtt">70/100</small></div><div class="xb"><i></i></div></div></div><div class="stk card"><span class="dr on" style="width:18px;height:22px">${dropSVG}</span><b class="fr stn">6</b></div>`);
      A.el('div', 'dock card', S, `<div class="dl"><b class="fr">Today's garden</b><small class="gct">0 of 4 grown</small></div><div class="plots">${[0, 1, 2, 3].map(plotH).join('')}</div>`);
    }
    const pg = (c, inner) => A.el('div', 'pg ' + c, cv, inner);
    const tt = (ic, title, hint) => `<div class="tt"><span class="tti">${I(ic, 18, 2.3)}</span><b class="fr">${title}</b><small>${hint}</small></div>`;
    const kv = (a, b) => `<div class="kv"><span>${a}</span><b>${b}</b></div>`;
    const rail = (ph, title, rows) => web ? `<div class="rail card"><div class="rp" style="background-image:${ph}"></div><b class="fr" style="font-size:17px">${title}</b>${rows.map(r => kv(r[0], r[1])).join('')}</div>` : '';

    const spl = A.el('div', 'spl', S, `<h1 class="fr">Image Swiss Knife</h1><p>${I('lock', 17, 2.4)}${web ? 'Your photos stay in your browser' : 'Your photos stay on this phone'}</p>`);
    spl.style.top = (CEN.y + 66) + 'px';
    const shill = A.el('div', 'shill', S); shill.style.cssText += `;left:${CEN.x - 330}px;top:${CEN.y - 48}px;width:660px;height:260px`;
    const pHome = pg('home', web
      ? `${tt('home', 'Your garden', 'Drag a photo from your desktop')}<div class="w"><div class="dz"><svg width="62" height="62" viewBox="0 0 60 72">${PLANTS[2].slice(0, 0)}<ellipse cx="30" cy="56" rx="24" ry="9" fill="#8B5E3C"/><ellipse cx="30" cy="53" rx="16" ry="5" fill="#6E4829"/><path d="M30 52V38" stroke="#2A9460" stroke-width="3" stroke-linecap="round"/><path d="M30 40C22 40 20 33 21 28 27 29 30 34 30 40ZM30 38C37 38 40 32 39 27 33 28 30 33 30 38Z" fill="url(#gl)"/></svg><b class="fr">Drop a photo to plant it</b><small>or press <kbd>Ctrl</kbd> <kbd>O</kbd> to browse</small></div></div>
        <div class="c"><div class="card quest"><b class="fr">Today's quests</b>${['Shrink a photo', 'Crop for social', 'Check a location', 'Make a GIF'].map((x, i) => `<div class="q qq${i}"><span class="cb2">${I('check', 13, 3.4)}</span>${x}<em>+${XPA[i]} XP</em></div>`).join('')}</div></div>`
      : `<div class="w"><div class="tgrid">${tools.map((x, i) => `<div class="tool card"><span class="ti ti${i}">${I(x[0], 20, 2.3)}</span><span><b>${x[1]}</b><small>${x[2]}</small></span></div>`).join('')}</div></div>
        <div class="today card"><div class="trow"><span><b class="fr">6-day streak</b><small>Water today to keep it</small></span>${dropRow(6)}</div><div class="qgrid">${['Shrink a photo', 'Crop for social', 'Check a place', 'Make a GIF'].map((x, i) => `<div class="q qq${i}"><span class="cb2">${I('check', 11, 3.6)}</span>${x}<em>+${XPA[i]}</em></div>`).join('')}</div></div><div class="btn cta">${I('image', 21, 2.3)}Pick a photo</div>`);
    const pPick = web ? null : pg('pick', `<p class="lab">Recent photos</p><div class="gal">${thumbs.map((b, i) => `<div class="th g${i}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 16, 3.4)}</div>` : ''}</div>`).join('')}</div>`);
    const blos = (web ? [[-4, 8, '#FF8FB1'], [100, -2, '#FFD24D'], [104, 62, '#FF8FB1'], [-2, 96, '#FFD24D'], [100, 100, '#B6E35B'], [2, 44, '#B6E35B']] : [[-4, 8, '#FF8FB1'], [50, -2, '#FFD24D'], [-6, 52, '#B6E35B'], [-2, 96, '#FFD24D'], [60, 102, '#FF8FB1'], [100, 100, '#B6E35B']]).map((b, i) => `<div class="bl" style="left:${b[0]}%;top:${b[1]}%">${flowerSVG(b[2])}</div>`).join('');
    const infoH = `<div class="inf"><h3 class="fr">Shrink</h3><p><b>${D.portrait.file}</b>${D.portrait.size} · ${D.portrait.dims}</p><span class="goalc">Pick where it will be used</span></div>`;
    const optI = ['phone', 'ruler', 'share', 'settings'];
    const pShr = pg('shrink', `${tt('shrink', 'Shrink', 'Pick a purpose. It starts at once.')}${rail(thumbs[0], D.portrait.file, [['Size', D.portrait.size], ['Pixels', D.portrait.dims], ['Goal', '<span class="goal">choose below</span>']])}
      <div class="w"><div class="phw"><div class="ph" style="background-image:${thumbs[0]}"><div class="rays"></div></div><b class="szb">${D.shrink.size}</b>${blos}</div>${web ? '' : infoH}</div>
      <div class="c"><div class="opts">${D.shrink.options.map((o, i) => `<div class="opt card o${i}"><span class="oi">${I(optI[i], 17, 2.3)}</span><span><b>${o.label}</b><small>${o.hint}</small></span>${i === 1 ? '<span class="pick">Sprout\'s pick</span>' : ''}<span class="rb">${I('check', 13, 3.6)}</span></div>`).join('')}</div>
      <div class="job"><div><b class="fr jbig">4.8 MB</b></div><div class="jbar"></div><div class="jt"><span class="jst">Getting ready…</span><span class="jp">0%</span></div></div>
      <div class="res"><div class="cmp card"><span>Before</span><div class="bb"></div><b>${D.portrait.size}</b><span>After</span><div class="ba"></div><b>${D.shrink.size}</b></div><div class="tags"><span class="chip">${D.shrink.format}</span><span class="chip">${D.shrink.px}</span><span class="chip">Exam form</span><span class="chip" style="background:#FFF1BD;color:#8A6410">96% smaller</span></div><div class="btn save">${I('save', 20, 2.4)}<span class="sv">Save</span></div></div></div>`);
    const presets = D.crop.presets.slice(0, 6);
    const ratio = p => { const m = 22, w = p.w >= p.h ? m : Math.max(7, Math.round(m * p.w / p.h)), h = p.h >= p.w ? m : Math.max(6, Math.round(m * p.h / p.w)); return `<span class="rt"><i style="width:${Math.min(w, 26)}px;height:${Math.min(h, 26)}px"></i></span>`; };
    const pCrop = pg('crop', `${tt('crop', 'Crop', 'Slide the photo inside the frame')}${rail(thumbs[1], 'IMG_1650.JPG', [['Photo', 'Mountain'], ['Size', '4000 × 3000'], ['Frame', '<span class="fl2">pick a shape</span>']])}
      <div class="w"><div class="cb"><div class="cimg" style="background-image:${thumbs[1]}"></div><div class="cfr"><s>${D.crop.ratio} · ${D.crop.px}</s></div></div></div>
      <div class="c"><div class="pres">${presets.map((p, i) => `<div class="pr card pr${i}">${ratio(p)}<span><b>${p.label}</b><small>${p.ratio} · ${p.px}</small></span></div>`).join('')}</div>
      <div class="cinfo"><div class="cchip card"><span class="rt"><i style="width:18px;height:22px"></i></span><span><b>${D.crop.preset} ${D.crop.ratio}</b><small>${D.crop.px} · drag to position</small></span></div><div class="cslot"><div class="btn cdone">${I('check', 20, 3)}Done</div></div></div></div>`);
    const mapSVG = `<svg class="mp" viewBox="0 0 220 220" preserveAspectRatio="xMidYMid slice"><rect width="220" height="220" fill="#E4F3E6"/><path d="M-10 160C50 140 90 190 150 160S220 110 240 120" stroke="#A9DDF2" stroke-width="18" fill="none"/><path d="M0 70h220M50 0v220M120 0l30 220M190 0v220M0 120h220" stroke="#fff" stroke-width="8"/><path d="M0 40h220" stroke="#FFEFA8" stroke-width="9"/><rect x="60" y="80" width="50" height="30" rx="8" fill="#C8EBC0"/><rect x="130" y="130" width="46" height="34" rx="8" fill="#C8EBC0"/><circle cx="170" cy="50" r="14" fill="#C8EBC0"/></svg>`;
    const pinSVG = '<svg viewBox="0 0 44 56"><path d="M22 54S4 34 4 21a18 18 0 0 1 36 0c0 13-18 33-18 33z" fill="#E5484D"/><path d="M12 16a11 11 0 0 1 8-8" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6" fill="none"/><circle cx="22" cy="21" r="7" fill="#fff"/></svg>';
    const pPriv = pg('priv', `${tt('pin', 'Where was it taken?', 'Check before you share')}${rail(A.photo('city'), D.place.file, [['Camera', D.place.device], ['Taken', '12 Aug 2026'], ['Location', '<span class="lo">on</span>']])}
      <div class="w"><div class="pw2"><div class="pcard" style="background-image:${A.photo('city')};${web ? '' : 'width:158px;height:158px'}"><span class="tag">${I('pin', 12, 2.6)}<span class="lt">Location on</span></span></div>
      <div class="mcard" style="${web ? '' : 'width:174px;height:158px'}">${mapSVG}<div class="mpin" style="left:56%;top:62%">${pinSVG}</div><div class="mlab">${D.place.lat} · ${D.place.lon}</div><div class="fog"></div><div class="shield"><svg viewBox="0 0 70 78"><path d="M35 3L64 14V38C64 56 52 69 35 75 18 69 6 56 6 38V14Z" fill="#3DBE7A" stroke="#fff" stroke-width="4"/><path d="M35 8L60 17V38C60 53 50 65 35 71Z" fill="#fff" opacity=".18"/><path d="M22 40L31 49L48 30" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div></div></div>
      <div class="c"><div class="place"><b class="fr plc">Looking…</b><small class="pls">${D.place.file}</small></div><div class="pc2" style="margin-top:8px"><div class="warn wv">${I('eye', 20, 2.3)}<span>If you share this photo, people can see where you were.</span></div><div class="okb okv">${I('shield', 20, 2.3)}<span>Location removed. Safe to share.</span></div></div>
      <div class="pbarw" style="position:relative;margin-top:8px;height:${web ? 130 : 78}px"><div class="btn rm" style="position:absolute;left:0;right:0;top:${web ? 0 : 16}px">${I('trash', 19, 2.3)}<span class="rml">Remove location</span></div><div class="pbar" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px"><div class="pbs" style="display:flex;justify-content:center"></div><small class="pbt"></small></div></div></div>`);
    const fs = Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('');
    const pGif = pg('gif', `${tt('film', 'Video to GIF', 'Trim 3 seconds and make it loop')}${rail(A.frame(2), D.video.file, [['Length', D.video.len], ['Clip', '<span class="clipv">0:04 to 0:08</span>'], ['Output', '12 fps']])}
      <div class="w"><div style="width:100%"><div class="vid" style="${web ? '' : ''}"><span class="vb">${D.video.file} · ${D.video.len}</span></div><div class="stp"><div class="stpc"><div class="fs">${fs}</div><div class="selw"></div></div><div class="hd hL"></div><div class="hd hR"></div></div></div></div>
      <div class="c" style="${web ? '' : 'height:142px;margin-top:8px'}"><div class="trim"><span class="tl2">Clip</span><b class="fr tv">0:04 to 0:08 · 4.0 s</b></div><div class="vslot" style="height:${web ? 90 : 60}px;position:relative"><div class="btn mk" style="position:absolute;left:0;right:0;top:${web ? 20 : 8}px">${I('film', 20, 2.3)}<span class="mkl">Make GIF</span></div><div class="vbs" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"></div></div><div class="gt"><span class="gt1"></span><span class="gt2"></span></div></div>`);
    const items = [[thumbs[0], 'Exam photo', `${D.shrink.size} · JPG`, 0], [thumbs[1], 'Instagram post', D.crop.px, 1], [A.photo('city'), 'City photo', 'Location removed', 2], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`, 3]];
    const pDone = pg('done', `${tt('check', 'All done', 'Your garden grew')}${web ? `<div class="rail card dn"><b class="fr" style="font-size:17px">New seed packet</b><div class="bigp">${pkt(4)}</div><small style="text-align:center">Week Streak<br>7 days of watering in a row</small></div>` : ''}
      <div class="w"><div class="g4">${items.map((x, i) => `<div class="rc card r${i}"><i style="background-image:${x[0]}"></i><span><b>${x[1]}</b><small>${x[2]}</small></span><div class="mp">${plantSVG(x[3])}</div></div>`).join('')}</div></div>
      <div class="c" style="${web ? '' : 'display:flex;flex-direction:column;gap:8px'}"><div class="sumr"><div class="card"><small>XP gained</small><div class="fr">+150 XP</div></div><div class="card"><small>Rank</small><div class="lvup"><b class="fr dlv">Lv 3</b><span class="rk2 drk">Spring</span></div></div><div class="card" style="position:relative"><small>Streak</small><div class="fr dst">6 days</div>${web ? '' : `<div class="spk">${pkt(4)}</div>`}</div></div>
      <div class="rcpt" style="margin-top:8px">${I('sparkle', 16, 2.4)}<span><b class="rn">13 taps</b> <span class="rb2"></span></span></div><div class="promise" style="margin-top:6px">${I('lock', 17, 2.4)}${lockLine}</div>
      <div class="ad" style="margin-top:8px"><i></i><div><small>Ad</small><span style="font-size:13px;color:var(--mut)">A sponsor message shows here, only after the work is done.</span></div></div><div class="btn saveall" style="margin-top:8px">${I('save', 20, 2.4)}<span class="sal">Save all 4</span></div></div>`);
    if (web) { pDone.querySelector('.c').style.top = '392px'; }

    /* Sprout, bubble, quick menu, fx */
    const spr = A.el('div', 'spr', S, `<i class="spsh"></i><div class="spj">${sproutSVG(uid)}</div>`);
    const R = c => spr.querySelector('.' + c);
    const bub = A.el('div', 'bub', S, '<span class="bt"></span><span class="ct"></span><i class="tl"></i>');
    const zz = [0, 1].map(i => A.el('div', 'zz', S, 'z'));
    const xpf = A.el('div', 'xpf', S, `${I('sparkle', 15, 2.6)}<span>+40 XP</span>`);
    const QM = [['shrink', 'Shrink'], ['crop', 'Crop'], ['pin', 'Place'], ['film', 'GIF'], ['convert', 'Convert']];
    const scrim = A.el('div', 'scrim', S);
    const vn = A.el('div', 'vn', S, `<svg width="${W}" height="${H}">${QM.map((x, i) => `<path class="vp${i}" fill="none" stroke="#2F9E62" stroke-width="3.2" stroke-linecap="round"/><path class="vq${i}" fill="none" stroke="#7FD36B" stroke-width="1.4" stroke-linecap="round"/>`).join('')}</svg>`);
    const qms = QM.map((x, i) => A.el('div', 'qm q' + i, S, `<svg class="lf" viewBox="-34 -50 68 100"><path d="M0 -48C30 -30 34 8 0 48C-34 8 -30 -30 0 -48Z" fill="url(#lm)" stroke="#fff" stroke-width="2.5"/><path d="M0 -40V40" stroke="#fff" stroke-opacity=".4" stroke-width="1.4"/></svg><div class="qc">${I(x[0], 22, 2.3)}${x[1]}</div>`));
    A.el('div', '', S, `<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="lm" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#8FDC7C"/><stop offset="1" stop-color="#D5F28F"/></linearGradient></defs></svg>`);
    const fx = document.createElement('canvas'), DPR = 1.25; fx.width = W * DPR; fx.height = H * DPR; fx.className = 'fx'; S.appendChild(fx);
    const cx = fx.getContext('2d');
    const bursts = [[14.35, 'photo'], [14.85, 'spr'], [23.7, 'crop'], [28.65, 'priv'], [35.2, 'gif'], [36.6, 'spr']].map(([t0, k], i) => ({ t0, k, a: A.confetti(S, { count: 38, shape: 'petal', colors: ['#FF8FB1', '#FFD24D', '#B6E35B', '#fff', '#3DBE7A'], seed: 5 + i, power: i === 5 ? 760 : 520, gravity: 700, dur: 2.2, spread: Math.PI * 1.3 }), b: A.confetti(S, { count: i === 5 ? 26 : 12, shape: 'heart', colors: ['#FF8FB1', '#FF6B93'], seed: 20 + i, power: 460, gravity: 520, dur: 2.4, spread: Math.PI * 1.1 }) }));

    /* ---------- progress bars ---------- */
    const kinds = A.bars(3, ['streams', 'liquid', 'tiles', 'comet', 'orbit'], 16);
    const COL = { streams: ['#3DBE7A', '#B6E35B', '#FFD24D'], liquid: ['#2FB67A', '#9AE58A', '#5CC4EE'], tiles: ['#3DBE7A', '#B6E35B', '#FFD24D'], comet: ['#B6E35B', '#FFD24D', '#FF8FB1'], orbit: ['#3DBE7A', '#FFD24D', '#B6E35B'] };
    const SZ = { streams: [60], liquid: [28], tiles: [54], comet: [44], orbit: [web ? 124 : 96] };
    const mkBar = (kind, slot, w) => A.bar(slot, kind, { w: kind === 'orbit' ? SZ.orbit[0] : w, h: SZ[kind][0], colors: COL[kind], track: 'rgba(27,58,46,.1)', seed: 4, lanes: 5 });
    const BW = web ? 400 : 320;
    const bShrink = mkBar(kinds[0], q('.jbar'), BW), bCrop = mkBar(kinds[1], q('.cslot'), BW - (web ? 0 : 20)), bPriv = mkBar(kinds[2], q('.pbs'), BW - 20);
    bCrop.el.style.cssText += ';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)';
    /* custom growing vine bar */
    const vineBar = (slot, w, h) => {
      const cvn = document.createElement('canvas'); cvn.width = w * 2; cvn.height = h * 2; cvn.style.cssText = `width:${w}px;height:${h}px;display:block`; slot.appendChild(cvn);
      const c = cvn.getContext('2d'), y0 = h * 0.58, yv = (x, t) => y0 + Math.sin(x * 0.05 + 1) * h * 0.1 + Math.sin(x * 0.11 - t * 2.2) * 1.4;
      const leaf = (x, y, a, L, k, col) => { c.save(); c.translate(x, y); c.rotate(a); c.scale(k, k); const g = c.createLinearGradient(0, 0, 0, -L); g.addColorStop(0, '#23895A'); g.addColorStop(1, col); c.fillStyle = g; c.beginPath(); c.moveTo(0, 0); c.bezierCurveTo(-L * 0.36, -L * 0.2, -L * 0.38, -L * 0.7, 0, -L); c.bezierCurveTo(L * 0.38, -L * 0.7, L * 0.36, -L * 0.2, 0, 0); c.fill(); c.strokeStyle = 'rgba(255,255,255,.5)'; c.lineWidth = 0.8; c.beginPath(); c.moveTo(0, -1); c.lineTo(0, -L * 0.8); c.stroke(); c.restore(); };
      const flower = (x, y, r, rot, c1, c2) => { c.save(); c.translate(x, y); c.rotate(rot); for (let i = 0; i < 8; i++) { c.rotate(Math.PI / 4); c.fillStyle = i % 2 ? c2 : c1; c.beginPath(); c.ellipse(0, -r * 0.62, r * 0.26, r * 0.55, 0, 0, 6.3); c.fill(); } c.fillStyle = '#FFD24D'; c.beginPath(); c.arc(0, 0, r * 0.28, 0, 6.3); c.fill(); c.restore(); };
      return {
        el: cvn,
        update(p, t) {
          c.setTransform(2, 0, 0, 2, 0, 0); c.clearRect(0, 0, w, h);
          c.lineCap = 'round'; c.strokeStyle = 'rgba(27,58,46,.1)'; c.lineWidth = 7; c.beginPath(); for (let x = 8; x <= w - 8; x += 4) c[x === 8 ? 'moveTo' : 'lineTo'](x, yv(x, 0)); c.stroke();
          const hx = 8 + A.rush(p) * (w - 40);
          const g = c.createLinearGradient(8, 0, Math.max(9, hx), 0); g.addColorStop(0, '#2A9460'); g.addColorStop(1, '#6FD07A');
          c.strokeStyle = g; c.lineWidth = 4.2; c.beginPath(); for (let x = 8; x <= hx; x += 3) c[x === 8 ? 'moveTo' : 'lineTo'](x, yv(x, t)); c.stroke();
          for (let i = 0; i < 14; i++) {
            const x = 22 + i * ((w - 70) / 13); if (x > hx) break; const k = E.outBack(clamp((hx - x) / 34)), up = i % 2 ? 1 : -1, y = yv(x, t);
            leaf(x, y, up * (0.9 + Math.sin(t * 2 + i) * 0.08), 17 + (i % 3) * 3, k, i % 3 ? '#9AE06A' : '#C9EE7A');
            if (i % 4 === 1) { c.strokeStyle = '#3DBE7A'; c.lineWidth = 1.6; c.beginPath(); c.arc(x + 6, y - up * 8, 3 * k, 0, 4.7); c.stroke(); }
          }
          [0.25, 0.5, 0.75].forEach((m, i) => { const x = 8 + A.rush(m) * 0 + m * (w - 40) * 1; const pk = clamp((p - m * 0.9) / 0.1); if (pk > 0 && x < hx + 20) flower(x, yv(x, t) - 14, 8 * E.outBack(pk), t * 0.5 + i, i % 2 ? '#FFD24D' : '#FF8FB1', '#fff'); });
          const bl = clamp((p - 0.9) / 0.1), hy = yv(hx, t);
          if (bl > 0) { c.save(); c.globalAlpha = 0.55 * bl; const gg = c.createRadialGradient(hx + 4, hy - 8, 0, hx + 4, hy - 8, 30); gg.addColorStop(0, '#FFE98A'); gg.addColorStop(1, 'rgba(255,233,138,0)'); c.fillStyle = gg; c.beginPath(); c.arc(hx + 4, hy - 8, 30, 0, 6.3); c.fill(); c.restore(); }
          flower(hx + 4, hy - 8, 6 + 14 * E.outBack(bl) + 3 * p, t * 0.6, '#FF8FB1', '#FFB5CD');
          if (p < 0.98) { c.fillStyle = 'rgba(255,255,255,.9)'; c.beginPath(); c.arc(hx - 2 + Math.sin(t * 9) * 2, hy - 2, 1.6, 0, 6.3); c.fill(); }
        },
      };
    };
    const vBar = vineBar(q('.vbs'), web ? 410 : 330, web ? 80 : 56);

    /* ---------- timeline data ---------- */
    const MD = {
      neutral: { e: 'o', lid: 0, br: [0, 0, 0, 0], m: 'smile', ch: 0.5, ear: [0, 0], es: 1, lx: 0, ly: 0 },
      happy: { e: 'o', lid: 0.1, br: [-3, -3, -3, -3], m: 'grin', ch: 0.9, ear: [14, 14], es: 1, lx: 0, ly: 0 },
      wink: { e: 'o', eR: 'a', lid: 0.05, br: [-3, -3, 1, -6], m: 'grin', ch: 0.9, ear: [10, 30], es: 1, lx: 0, ly: 0 },
      surprised: { e: 'o', lid: 0, br: [-8, -8, -8, -8], m: 'o', ch: 0.35, ear: [30, 30], es: 1.2, lx: 0, ly: 0 },
      thinking: { e: 'o', lid: 0.1, br: [-6, -10, 1, 8], m: 'smirk', ch: 0.4, ear: [-4, 22], es: 1, lx: 0.75, ly: -0.8 },
      effort: { e: 'o', lid: 0.45, br: [1, 16, 1, 16], m: 'grit', ch: 0.25, ear: [-6, -6], es: 0.96, lx: 0, ly: 0, vib: 1 },
      celebrate: { e: 'a', lid: 0, br: [-6, -6, -6, -6], m: 'cheer', ch: 1, ear: [42, 42], es: 1, lx: 0, ly: 0 },
      sleepy: { e: 'o', lid: 0.66, br: [3, -10, 3, -10], m: 'tiny', ch: 0.3, ear: [-56, -56], es: 1, lx: 0, ly: 0.7 },
    };
    const SCH = [[0, 'sleepy'], [0.75, 'surprised'], [1.15, 'happy'], [2.0, 'wink'], [2.5, 'happy'], [4.6, 'thinking'], [T_PHOTO - 0.1, 'surprised'], [T_PHOTO + 0.7, 'happy'], [T_PHOTO + 2.2, 'wink'], [10.0, 'happy'], [10.9, 'effort'], [14.3, 'celebrate'], [16.3, 'happy'], [17.65, 'wink'], [19.0, 'happy'], [20.3, 'thinking'], [22.8, 'effort'], [23.7, 'celebrate'], [24.5, 'thinking'], [25.35, 'surprised'], [26.1, 'thinking'], [27.0, 'effort'], [28.6, 'celebrate'], [30.0, 'happy'], [30.8, 'thinking'], [32.9, 'happy'], [33.1, 'effort'], [35.2, 'celebrate'], [36.1, 'happy'], [36.6, 'celebrate']];
    const JUMPS = [[0.75, 12], [T_PHOTO + 0.05, 16], [14.4, 24], [14.9, 20], [23.7, 18], [28.65, 18], [35.25, 22], [36.65, 36]];
    const BUB = [[0.9, 'Hello! I am Sprout.'], [2.55, null], [2.9, 'Good morning! Pick a photo and we will grow something.'], [4.7, 'Choose any photo. I will look after it.'],
      ...(web ? [[5.0, 'Drag your photo onto the canvas.'], [6.9, 'Ooh, planted! That is a big one, 4.8 MB.']] : [[6.1, 'Ooh, a big one! 4.8 MB.']]),
      [T_PHOTO + 2.3, 'For an exam form? I would pick this one.'], [10.1, 'On it! Soaking up the sun.'], [14.35, 'Just 196 KB. Perfect for the form!'], [15.0, 'I am growing! +40 XP.'], [16.5, null], [17.0, 'Need another tool? Tap me.'], [17.6, null],
      [19.05, 'Which shape do you need?'], [20.2, 'Slide the photo to frame it.'], [22.85, 'Planting your crop…'], [23.75, 'Planted! +30 XP.'], [24.3, 'This photo knows where it was taken. Check?', 'Check'], [25.4, 'Pune, India. Anyone could find this spot.'], [27.15, 'Wiping the pin away…'], [28.7, 'Safe! +30 XP.'], [29.7, null], [30.1, 'Got a video? I can make it a GIF.', 'Make a GIF'],
      [30.7, 'Drag the yellow handles. Keep 3 seconds.'], [32.95, 'Growing 36 frames for you…'], [35.3, 'Your GIF is ready. 2.1 MB!'], [36.15, 'Garden complete!'], [36.7, 'I bloomed! Welcome to Summer.']];
    const keys = [];
    const K = (t, at, o = {}) => keys.push(Object.assign({ t, at }, o));
    const faceAt = () => { const c = sprAt(80, 150); return { x: c.x, y: c.y }; };
    let cur = { x: DK.x, y: DK.y, s: DK.s, air: 0 };
    const sprAt = (X, Y) => ({ x: cur.x + (X - 80) * cur.s, y: cur.y - cur.air + (Y - 215) * cur.s });
    if (web) {
      const dz = () => { const c = A.center('.home .dz'); return { x: c.x, y: c.y }; };
      K(5.6, () => ({ x: 1190, y: 130 }), { hold: 0.2 }); K(6.8, dz, { drag: true, move: 0.95, n: 1 });
    } else { K(4.5, '.home .cta', { tap: true, n: 1 }); K(6.0, '.pick .g0', { tap: true, n: 1 }); }
    K(10.0, '.shrink .o1', { tap: true, n: 1 }); K(15.6, '.shrink .save', { tap: true, n: 1 });
    K(17.55, faceAt, { tap: true, n: 1 }); K(18.7, '.qm.q1', { tap: true, n: 1 });
    K(20.0, '.crop .pr0', { tap: true, n: 1 }); K(20.95, '.crop .cimg', { hold: 0.15 }); K(22.1, '.crop .cimg', { drag: true, move: 1.0 }); K(22.8, '.crop .cdone', { tap: true, n: 1 });
    K(25.3, '.bub .ct', { tap: true, n: 1 }); K(27.0, '.priv .rm', { tap: true, n: 1 });
    K(30.6, '.bub .ct', { tap: true, n: 1 }); K(31.4, '.gif .hR', { hold: 0.1 }); K(32.3, '.gif .hR', { drag: true, move: 0.85 }); K(32.9, '.gif .mk', { tap: true, n: 1 }); K(35.7, '.gif .save2', { tap: true, n: 1 }); K(38.5, '.done .saveall', { tap: true });
    A.pointer(keys.map(k => (k.at === '.gif .save2' ? Object.assign(k, { at: '.gif .mk' }) : k)));
    const cnt = (a, b) => keys.filter(k => k.n && k.t >= a && k.t < b).length;
    const tapsTxt = [cnt(0, 17), cnt(17, 24), cnt(24, 30), cnt(30, 36)];
    const totalTaps = tapsTxt.reduce((a, b) => a + b, 0);
    q('.rn').textContent = `${totalTaps} ${web ? 'actions' : 'taps'}`;
    q('.rb2').textContent = `Shrink ${tapsTxt[0]} · Crop ${tapsTxt[1]} · Place ${tapsTxt[2]} · GIF ${tapsTxt[3]}`;

    /* ---------- refs ---------- */
    const plots = qa('.plot'), plantEl = plots.map(p => p.querySelector('.pl')), pkws = qa('.pkw'), pkxs = qa('.pkx');
    const FR = { all: R('all'), plant: R('plant'), stem: R('stem'), lowL: R('lowL'), lowR: R('lowR'), earL: R('earL'), earR: R('earR'), fl: R('fl'), glow: R('glow'), bud: R('bud'), pet: R('pet'), dew: R('dew'), dsp: R('dsp'), eL: R('eL'), eR: R('eR'), bL: R('bL'), bR: R('bR'), chL: R('chL'), chR: R('chR'), sweat: R('sweat') };
    const MOUTH = ['smile', 'grin', 'o', 'flat', 'smirk', 'grit', 'cheer', 'tiny'].reduce((o, k) => (o[k] = R('m-' + k), o), {});
    const eyeP = e => ({ g: e, eo: e.querySelector('.eo'), ea: e.querySelector('.ea'), ec: e.querySelector('.ec'), lg: e.querySelector('.lg'), ir: e.querySelector('.ir') });
    const EY = [eyeP(FR.eL), eyeP(FR.eR)];
    const pages = { home: pHome, pick: pPick, shrink: pShr, crop: pCrop, priv: pPriv, gif: pGif, done: pDone };
    const el = { cta: q('.home .cta'), ph: q('.shrink .ph'), phw: q('.shrink .phw'), rays: q('.shrink .rays'), szb: q('.shrink .szb'), bls: qa('.shrink .bl'), opts: q('.shrink .opts'), job: q('.shrink .job'), res: q('.shrink .res'), jbig: q('.jbig'), jst: q('.jst'), jp: q('.jp'), ba: q('.res .ba'), save: q('.shrink .save'), sv: q('.shrink .sv'), goal: q('.goal'), goalc: q('.goalc'), pres: q('.crop .pres'), cinfo: q('.crop .cinfo'), cfr: q('.crop .cfr'), cimg: q('.crop .cimg'), cdone: q('.crop .cdone'), fl2: q('.fl2'), pcard: q('.priv .pcard'), mcard: q('.priv .mcard'), mpin: q('.mpin'), fog: q('.fog'), shield: q('.shield'), pl: q('.plc'), pls: q('.pls'), wv: q('.wv'), okv: q('.okv'), rm: q('.rm'), rml: q('.rml'), pbar: q('.pbar'), pbt: q('.pbt'), lt: q('.lt'), lo: q('.lo'), vid: q('.gif .vid'), vb: q('.gif .vb'), selw: q('.selw'), hL: q('.hL'), hR: q('.hR'), tv: q('.tv'), clipv: q('.clipv'), mk: q('.gif .mk'), mkl: q('.mkl'), vbs: q('.vbs'), gt1: q('.gt1'), gt2: q('.gt2'), saveall: q('.saveall'), sal: q('.sal'), dlv: q('.dlv'), drk: q('.drk'), dst: q('.dst'), rcs: qa('.rc'), fcard: null, dz: q('.dz') };
    if (web) { el.fcard = A.el('div', 'fcard card', S, `<i style="background-image:${thumbs[0]}"></i><span>${D.portrait.file}</span><small>From Desktop · ${D.portrait.size}</small>`); }
    

    /* ---------- helpers for update ---------- */
    const fmt = A.fmtBytes;
    const xpAt = t => {
      let cum = 70; XPT.forEach((x, i) => { cum += XPA[i] * E.out(seg(t, x, x + 0.9)); });
      if (t >= 36.55) return { lv: 4, cur: 12, max: 150, rk: 'Summer', cum };
      if (cum < 100) return { lv: 2, cur: cum, max: 100, rk: 'Spring', cum };
      return { lv: 3, cur: cum - 100, max: 120, rk: 'Spring', cum };
    };
    const showPage = (p, t, a, d, b, kind, o) => A.reveal(p, kind, t >= b ? 0 : seg(t, a, a + d), o);
    const pop = (e, t, a, d = 0.5, extra = {}) => { const k = E.outBack(seg(t, a, a + d)); set(e, Object.assign({ s: 0.6 + 0.4 * k, o: seg(t, a, a + d * 0.4) }, extra)); };
    const win = (t, a, b) => A.win(t, a, b, 0.25, 0.25);
    const SEC = { tf: 0 };
    let bubKey = '';

    return {
      update(t) {
        const life = A.life(t, 3), ptr = A.pointerAt(t), xp = xpAt(t);
        const tapN = t >= 36.5 ? 7 : 6;
        /* ===== pose ===== */
        let x = DK.x, y = DK.y, s = DK.s, air = 0, sx = 1, sy = 1;
        if (t < 2.4) { x = CEN.x; y = CEN.y; s = CEN.s; }
        else if (t < 3.25) { const k = E.inOut(seg(t, 2.4, 3.25)), sn = Math.sin(Math.PI * k); x = lerp(CEN.x, DK.x, k); y = lerp(CEN.y, DK.y, k); s = lerp(CEN.s, DK.s, k); air = sn * 90; sy = 1 + 0.1 * sn; sx = 1 - 0.07 * sn; }
        if (t >= 3.25 && t < 4.2) { const d = t - 3.25, dec = Math.exp(-6 * d) * Math.cos(15 * d); sy -= 0.16 * dec; sx += 0.12 * dec; }
        JUMPS.forEach(([j, a]) => { const d = t - j; if (d >= 0 && d < 0.6) { const k = d / 0.5; air += k < 1 ? Math.sin(Math.PI * k) * a : 0; if (k >= 1) { const dd = d - 0.5, dec = Math.exp(-7 * dd) * Math.cos(16 * dd); sy -= 0.14 * dec; sx += 0.1 * dec; } } });
        const grow = E.outBack(seg(t, 14.75, 15.6)) + E.outBack(seg(t, 36.6, 37.8));
        const g = clamp(grow, 0, 2.15), g1 = clamp(g, 0, 1), bloom = clamp(g - 1, 0, 1.12);
        const em = E.outBack(seg(t, 0.0, 0.55));
        const evo = Math.max(Math.exp(-5 * Math.max(0, t - 14.9)) * (t > 14.9 ? 1 : 0) * Math.sin(Math.max(0, t - 14.9) * 18), Math.exp(-4 * Math.max(0, t - 36.7)) * (t > 36.7 ? 1 : 0) * Math.sin(Math.max(0, t - 36.7) * 16));
        sy += 0.08 * evo; sx -= 0.05 * evo;
        cur = { x, y, s, air };
        A.set(spr, { x: x - 110, y: y - 285 - air, s });
        spr._s = s;
        const spj = spr.querySelector('.spj'); spj.style.transform = `scale(${(sx).toFixed(3)},${(sy).toFixed(3)})`;
        const sh = 1 - Math.min(0.5, air / 220); spr.querySelector('.spsh').style.transform = `translateY(${air.toFixed(0)}px) scale(${sh.toFixed(3)})`; spr.querySelector('.spsh').style.opacity = sh.toFixed(2);
        /* mood */
        let mi = 0; SCH.forEach((m, i) => { if (t >= m[0]) mi = i; });
        const mc = MD[SCH[mi][1]], mp = MD[SCH[Math.max(0, mi - 1)][1]], mk = E.out(seg(t, SCH[mi][0], SCH[mi][0] + 0.2)), bl = (a, b) => lerp(a, b, mk);
        const lid = bl(mp.lid, mc.lid), es = bl(mp.es, mc.es), ch = bl(mp.ch, mc.ch);
        const eye = (mk > 0.5 ? mc : mp), mood = SCH[mi][1];
        /* look */
        const fp = { x: cur.x, y: cur.y - cur.air - 63 * cur.s }, pv = ptr.vis * (mood === 'sleepy' ? 0 : 1);
        let lx = clamp((ptr.x - fp.x) / 220, -1, 1) * pv + (1 - pv) * (life.look * 0.5), ly = clamp((ptr.y - fp.y) / 260, -1, 1) * pv;
        lx = lx * (1 - Math.abs(bl(mp.lx, mc.lx))) + bl(mp.lx, mc.lx); ly = ly * (1 - Math.abs(bl(mp.ly, mc.ly))) + bl(mp.ly, mc.ly);
        const blink = mood === 'celebrate' || mood === 'sleepy' ? 0 : life.blink;
        EY.forEach((E_, k) => {
          const mode = (k && eye.eR) ? eye.eR : eye.e, le = Math.max(lid, blink);
          dsp(E_.eo, mode === 'o' && le < 0.86); dsp(E_.ea, mode === 'a'); dsp(E_.ec, mode === 'o' && le >= 0.86);
          at(E_.lg, 'transform', `translate(0 ${(le * 22).toFixed(1)})`);
          at(E_.ir, 'transform', `translate(${(lx * 3.3).toFixed(2)} ${(ly * 3.4).toFixed(2)})`);
          at(E_.g, 'transform', `translate(${k ? 98 : 62} 152) scale(${es.toFixed(3)})`);
        });
        const br = [0, 1, 2, 3].map(i => bl(mp.br[i], mc.br[i]));
        at(FR.bL, 'transform', `translate(62 ${(137 + br[0]).toFixed(1)}) rotate(${br[1].toFixed(1)})`);
        at(FR.bR, 'transform', `translate(98 ${(137 + br[2]).toFixed(1)}) rotate(${(-br[3]).toFixed(1)})`);
        at(FR.chL, 'opacity', (ch * 0.85).toFixed(2)); at(FR.chR, 'opacity', (ch * 0.85).toFixed(2));
        Object.keys(MOUTH).forEach(k => dsp(MOUTH[k], (mk > 0.5 ? mc : mp).m === k));
        dsp(FR.sweat, mood === 'effort' && t > 11.2); at(FR.sweat, 'transform', `translate(0 ${((t * 14) % 10).toFixed(1)})`);
        /* plant */
        const sw = life.sway, vib = mood === 'effort' ? Math.sin(t * 50) * 2.2 : 0, bend = sw * 3.5 + (mood === 'celebrate' ? Math.sin(t * 6) * 3 : 0);
        const Ys = lerp(lerp(86, 40, g1), 22, clamp(bloom, 0, 1)), top = 80 + bend;
        const grown = em;
        at(FR.plant, 'transform', `translate(80 106) scale(${grown.toFixed(3)}) translate(-80 -106)`);
        at(FR.stem, 'd', `M80 112C80 ${((112 + Ys) / 2 + 8).toFixed(1)} ${(80 + bend * 0.3).toFixed(1)} ${((112 + Ys) / 2 - 8).toFixed(1)} ${(80 + bend).toFixed(1)} ${Ys.toFixed(1)}`);
        const earY = Ys + lerp(4, 18, g1) + bloom * 4, earK = 0.95 + 0.2 * g1 + 0.08 * clamp(bloom, 0, 1);
        const ptA = (t > 17.75 && t < 18.95) ? (() => { const tg = qmPos(1); const p0 = sprAt(80 + bend, earY); return Math.atan2(tg.x - p0.x, -(tg.y - p0.y)) * 180 / Math.PI; })() : null;
        const lift = (k) => mc.ear[k] * mk + mp.ear[k] * (1 - mk);
        const wave = (a, b) => (t > a && t < b ? Math.sin((t - a) * 14) * 16 * Math.min(1, (t - a) * 4, (b - t) * 4) : 0);
        const spreadB = 20 * clamp(bloom, 0, 1), aL = -(56 - lift(0) + spreadB) + sw * 4 + vib - wave(1.15, 2.0) + (t > 36.7 ? Math.sin(t * 5) * 4 : 0), aR = ptA !== null ? ptA : (56 - lift(1) + spreadB) + sw * 4 - vib + wave(1.15, 2.0) - (t > 36.7 ? Math.sin(t * 5 + 1) * 4 : 0);
        const ex = 80 + bend * 0.88;
        at(FR.earL, 'transform', `translate(${ex.toFixed(1)} ${earY.toFixed(1)}) rotate(${aL.toFixed(1)}) scale(${earK.toFixed(3)})`);
        at(FR.earR, 'transform', `translate(${ex.toFixed(1)} ${earY.toFixed(1)}) rotate(${aR.toFixed(1)}) scale(${(earK * (ptA !== null ? 1.12 : 1)).toFixed(3)})`);
        const lowY = (112 + Ys) / 2 + 12, lk = 0.62 * clamp((g - 0.15) / 0.6, 0, 1) + 0.16 * clamp(bloom, 0, 1), lAng = 84 + (mood === 'sleepy' ? 20 : 0) - lift(0) * 0.3;
        at(FR.lowL, 'transform', `translate(${(80 + bend * 0.5).toFixed(1)} ${lowY.toFixed(1)}) rotate(${(-lAng + sw * 3).toFixed(1)}) scale(${lk.toFixed(3)})`);
        at(FR.lowR, 'transform', `translate(${(80 + bend * 0.5).toFixed(1)} ${lowY.toFixed(1)}) rotate(${(lAng + sw * 3).toFixed(1)}) scale(${lk.toFixed(3)})`);
        const budK = E.out(seg(g, 0.3, 1)) * (1 - clamp(bloom * 2.2, 0, 1)), flK = clamp(bloom, 0, 1.12);
        at(FR.fl, 'transform', `translate(${(80 + bend).toFixed(1)} ${(Ys - 2).toFixed(1)}) translate(0 ${(flK > 0 ? -10 * flK : 0).toFixed(1)})`);
        at(FR.bud, 'transform', `scale(${(budK).toFixed(3)})`); dsp(FR.bud, budK > 0.02);
        at(FR.pet, 'transform', `scale(${(flK * 1.0).toFixed(3)}) rotate(${((1 - clamp(flK, 0, 1)) * -40 + t * 4).toFixed(1)})`); dsp(FR.pet, flK > 0.02);
        at(FR.glow, 'opacity', (clamp(flK, 0, 1) * (0.55 + 0.25 * Math.sin(t * 3))).toFixed(2));
        /* dewdrop shimmer hint */
        const dsh = win(t, 1.5, 3.1), pul = 0.5 + 0.5 * Math.sin(t * 9);
        at(FR.dsp, 'opacity', (dsh * pul).toFixed(2)); at(FR.dsp, 'transform', `scale(${(0.5 + pul * 0.7).toFixed(2)}) rotate(${(t * 40).toFixed(0)})`);
        at(FR.all, 'transform', `translate(80 214) scale(${(1 + 0.012 * life.breathe).toFixed(4)} ${(1 - 0.016 * life.breathe).toFixed(4)}) translate(-80 -214)`);
        zz.forEach((z, i) => { const k = seg(t, 0.05 + i * 0.4, 0.95 + i * 0.4) * (t < 0.8 ? 1 : 0); const p0 = sprAt(130, 70); set(z, { x: p0.x + k * 14 + i * 8, y: p0.y - k * 36 - i * 12, s: 0.7 + 0.5 * i, o: (1 - Math.abs(k - 0.5) * 2) * (t < 0.8 ? 1 : 0) }); });

        /* ===== layout of persistent bits ===== */
        const hdrOn = seg(t, 2.6, 3.2);
        if (web) {
          const dsh = q('.side'), rc = q('.rcol');
          [dsh, rc, cv].forEach(e => A.reveal(e, 'iris', seg(t, 2.35, 3.3), { cx: CEN.x - (e === cv ? 232 : e === rc ? 944 : 16), cy: CEN.y - 80 - 16, W: e === cv ? 696 : e === rc ? 320 : 200, H: 724 }));
          spl.style.opacity = shill.style.opacity = (1 - seg(t, 2.6, 3.2)).toFixed(2); spl.style.visibility = shill.style.visibility = t > 3.3 ? 'hidden' : 'visible';
        } else {
          A.set(q('.hdr'), { o: hdrOn }); A.set(q('.dock'), { o: seg(t, 2.9, 3.4) * (1 - seg(t, 35.85, 36.2)) });
          spl.style.opacity = shill.style.opacity = (1 - seg(t, 2.5, 3.1)).toFixed(2); spl.style.visibility = shill.style.visibility = t > 3.2 ? 'hidden' : 'visible'; A.set(q('.deco'), { o: seg(t, 2.6, 3.2) });
          A.reveal(pHome, 'iris', t >= 5.1 ? 0 : seg(t, 2.35, 3.3), { cx: CEN.x, cy: CEN.y - 90 });
        }
        /* XP / level */
        txt(q('.lvn') || q('.lvc'), web ? `Level ${xp.lv}` : `Lv ${xp.lv}`); if (!web) txt(q('.lvr'), xp.rk); if (web) txt(q('.rkc'), xp.rk);
        const xpt = `${Math.round(xp.cur)}${web ? ' / ' : '/'}${xp.max}${web ? ' XP' : ''}`; txt(q('.xtt'), xpt);
        (q('.xb i') || q('.xbar i')).style.width = (100 * xp.cur / xp.max).toFixed(1) + '%';
        const full = t >= 36.0 && t < 36.55 ? 100 : null; if (full) (q('.xb i') || q('.xbar i')).style.width = '100%';
        const grownN = PLT.filter(p => t >= p + 0.2).length; qa('.gct').forEach(e => txt(e, `${grownN} of 4 grown`));
        const streak = t >= 37.1 ? 7 : 6; if (!web) { txt(q('.stn'), String(streak)); } else { txt(q('.stt'), `${streak}-day streak`); cls(q('.wk .d6'), 'on', t >= 37.1); }
        qa('.q').forEach((e, i) => { const k = i % 4, on = k === 0 ? t > 15.0 : k === 1 ? t > 24.0 : k === 2 ? t > 29.0 : t > 35.6; cls(e, 'on', on); });
        plantEl.forEach((p, i) => { const k = E.outBack(seg(t, PLT[i], PLT[i] + 0.8)); set(p, { s: Math.max(0.01, k), o: t >= PLT[i] ? 1 : 0 }); });
        pkws.forEach((p, i) => A.reveal(p, 'drop', seg(t, PLT[i] + 0.35, PLT[i] + 0.9), { H: 160 }));
        pkxs.forEach((p, i) => { const on = i < 4 ? t >= PLT[i] + 0.35 : t >= 37.4; const inner = p.firstChild; if (on && inner.classList.contains('lock')) { inner.classList.remove('lock'); inner.querySelector('.pwin').innerHTML = i < 4 ? plantSVG(i) : `<div style="display:grid;place-items:center;height:100%;color:#2C86B0">${I('star', 22, 2.2)}</div>`; } if (!on && !inner.classList.contains('lock')) { inner.classList.add('lock'); inner.querySelector('.pwin').innerHTML = ''; } A.reveal(p, 'drop', seg(t, (i < 4 ? PLT[i] + 0.35 : 37.4), (i < 4 ? PLT[i] + 0.9 : 37.9)) || (on ? 1 : 0.0001), { H: 140 }); if (!on) { p.style.visibility = 'visible'; p.style.opacity = '1'; p.style.transform = 'none'; } });
        if (web) { txt(q('.pkc'), `${pkxs.filter((p, i) => (i < 4 ? t >= PLT[i] + 0.35 : t >= 37.4)).length} of 5`); qa('.ssn div').forEach((d, i) => cls(d, 'on', i === (xp.lv >= 4 ? 1 : 0))); }
        /* XP float */
        const xi = XPT.findIndex((a, i) => t >= a && t < a + 1.5);
        if (xi >= 0) { const d = t - XPT[xi], p0 = sprAt(80, Ys - 24); txt(xpf.lastChild, `+${XPA[xi]} XP`); set(xpf, { x: p0.x + 20, y: p0.y - 8 - E.out(d / 1.5) * 40, s: 0.7 + 0.3 * E.outBack(clamp(d * 4)), o: Math.min(clamp(d * 6), 1 - seg(d, 1.0, 1.5)) }); } else set(xpf, { o: 0 });

        /* ===== pages ===== */
        const PW = web ? { W: 696, H: 724 } : {};
        const chg = web ? { push: 'push' } : {};
        if (!web) showPage(pPick, t, 4.55, 0.45, 7.05, 'push', { dir: 'r' });
        showPage(pShr, t, web ? 6.95 : 6.5, web ? 0.8 : 0.5, 19.6, web ? 'iris' : 'push', web ? Object.assign({ cx: 215 + 250, cy: 225 }, PW) : { dir: 'r' });
        showPage(pCrop, t, 18.85, 0.65, 24.45, 'blinds', Object.assign({ n: 7 }, PW));
        showPage(pPriv, t, 23.95, 0.5, 31.5, 'push', Object.assign({ dir: 'r' }, PW));
        showPage(pGif, t, 30.65, 0.65, 37.0, 'blinds', Object.assign({ n: 7 }, PW));
        showPage(pDone, t, 36.0, 0.9, 99, 'iris', Object.assign({ cx: web ? DK.x - 232 : DK.x, cy: (web ? DK.y - 16 : DK.y) - 120 }, PW));
        if (web) { showPage(pHome, t, 0, 0.01, 7.8, 'fade', PW); pHome.style.visibility = t < 7.8 && t > 2.4 ? 'visible' : 'hidden'; }
        /* --- home / pick --- */
        if (!web) {
          qa('.home .tool').forEach((tl, i) => { const p = E.outBack(seg(t, 2.75 + i * 0.07, 3.3 + i * 0.07)); set(tl, { y: (1 - p) * 20, o: seg(t, 2.75 + i * 0.07, 2.95 + i * 0.07) }); });
          A.press(el.cta, t, 4.5);
          const sel = t >= 6.0; cls(q('.pick .g0'), 'sel', sel); set(q('.pick .ck'), { s: E.outBack(seg(t, 6.0, 6.35)), o: sel ? 1 : 0 });
        } else {
          const dq = q('.dz'); cls(dq, 'hot', t > 6.0 && t < 7.0);
          
          set(q('.quest'), { o: seg(t, 3.0, 3.5) });
          const fd = ptr, fo = seg(t, 5.0, 5.4) * (1 - seg(t, 6.95, 7.2));
          set(el.fcard, { x: fd.x - 60, y: fd.y - 20, r: t < 6.8 ? 3 : 0, s: 1 - 0.4 * seg(t, 6.82, 7.1), o: fo });
        }
        /* --- shrink --- */
        const oT = web ? 7.7 : 7.1;
        A.press(q('.shrink .o1'), t, 10.0);
        const pp = web ? 7.0 : 6.55; pop(el.phw, t, pp, 0.6);
        const sel1 = t >= 10.0; qa('.shrink .opt').forEach((o, i) => { const p = E.outBack(seg(t, oT + i * 0.12, oT + 0.4 + i * 0.12)); set(o, { y: (1 - p) * 16, o: Math.min(seg(t, oT + i * 0.12, oT + 0.25 + i * 0.12), sel1 && i !== 1 ? 1 - seg(t, 10.1, 10.4) : 1) * (i === 1 || t < 10.5 ? 1 : 1) }); cls(o, 'on', i === 1 && sel1); });
        set(el.opts, { o: 1 - seg(t, 10.4, 10.8) }); el.opts.style.display = t > 10.85 ? 'none' : '';
        txt(el.goalc, sel1 ? `Exam form · ${D.shrink.rule}` : 'Pick where it will be used'); if (el.goal) txt(el.goal, sel1 ? 'Exam form' : 'choose below');
        const jp = seg(t, 11.0, 14.3);
        const jon = t > 10.5 && t < 14.5; set(el.job, { o: jon ? seg(t, 10.5, 10.9) * (1 - seg(t, 14.2, 14.5)) : 0 });
        bShrink.update(jp, t);
        const bytes = lerp(D.portrait.bytes, D.shrink.bytes, A.rush(jp));
        txt(el.jbig, fmt(bytes)); txt(el.jp, `${Math.round(100 * A.rush(jp))}%`);
        txt(el.jst, jp <= 0 ? 'Getting ready…' : jp < 0.25 ? 'Soaking up the sun…' : jp < 0.55 ? 'Trimming extra leaves…' : jp < 0.85 ? 'Checking the 200 KB rule…' : 'Almost in bloom…');
        const done1 = seg(t, 14.3, 14.9);
        set(el.res, { o: seg(t, 14.4, 14.9), y: (1 - E.out(seg(t, 14.4, 14.9))) * 14 }); el.res.style.display = t < 14.3 ? 'none' : '';
        el.ba.style.width = (100 - 96 * E.inOut(seg(t, 14.7, 15.5))).toFixed(1) + '%';
        el.bb = el.bb || q('.res .bb'); el.bb.style.width = '100%';
        set(el.ph, { s: 1 - 0.1 * A.rush(jp) + 0.1 * E.outBack(done1) * 0 });
        set(el.szb, { s: E.outBack(seg(t, 14.5, 14.95)), o: t >= 14.5 ? 1 : 0 });
        el.bls.forEach((b, i) => { const p = E.outBack(seg(t, 14.35 + i * 0.08, 14.95 + i * 0.08)); set(b, { s: p, r: (1 - p) * 90, o: t >= 14.35 + i * 0.08 ? 1 : 0 }); });
        const rayOn = jp > 0 && jp < 1 ? 1 : 0, ra = t * 70 % 360;
        el.rays.style.opacity = (rayOn * 0.9).toFixed(2); el.rays.style.background = `conic-gradient(from ${(196 + Math.sin(t * 1.7) * 24).toFixed(0)}deg at 100% 0%,transparent 0deg,rgba(255,244,180,.55) 9deg,transparent 19deg,transparent 27deg,rgba(255,244,180,.42) 37deg,transparent 47deg,transparent 55deg,rgba(255,244,180,.32) 63deg,transparent 73deg,transparent 360deg)`;
        A.press(el.save, t, 15.6); txt(el.sv, t > 15.7 ? 'Saved to your gallery' : 'Save'); cls(el.save, 'sec', t > 15.8);
        /* --- crop --- */
        const preT = 20.0, cOn = t >= preT;
        qa('.crop .pr').forEach((e, i) => { const p = E.outBack(seg(t, 19.35 + i * 0.07, 19.8 + i * 0.07)); set(e, { y: (1 - p) * 14, o: seg(t, 19.35 + i * 0.07, 19.6 + i * 0.07) }); cls(e, 'on', i === 0 && cOn); });
        A.press(q('.crop .pr0'), t, preT);
        set(el.pres, { o: 1 - seg(t, 20.25, 20.55) }); el.pres.style.display = t > 20.6 ? 'none' : '';
        set(el.cinfo, { o: seg(t, 20.45, 20.85) }); el.cinfo.style.display = t < 20.4 ? 'none' : '';
        const fk = E.outBack(seg(t, 20.1, 20.7)); set(el.cfr, { s: 1.25 - 0.25 * fk, o: seg(t, 20.1, 20.35) });
        set(el.cimg, { x: (web ? -90 : -56) * E.inOut(seg(t, 21.0, 22.1)) });
        const cp = seg(t, 22.9, 23.7);
        set(el.cdone, { o: 1 - seg(t, 22.85, 23.0) }); bCrop.el.style.opacity = cp > 0 && cp < 1 ? '1' : '0'; if (cp > 0) bCrop.update(cp, t);
        A.press(el.cdone, t, 22.8); if (el.fl2) txt(el.fl2, cOn ? `${D.crop.preset} ${D.crop.ratio}` : 'pick a shape');
        /* --- privacy --- */
        const found = t >= 25.4, rem = seg(t, 28.0, 28.6), pj = seg(t, 27.1, 28.6);
        const mp2 = E.out(seg(t, 25.4, 26.1)); A.reveal(el.mcard, 'iris', mp2, { cx: 96, cy: web ? 150 : 79, W: web ? 220 : 174, H: web ? 300 : 158 }); el.mcard.style.display = '';
        set(el.mpin, { y: -60 * (1 - E.outBack(seg(t, 25.8, 26.3))), s: 1 - 0.9 * seg(t, 27.4, 28.1), o: seg(t, 25.8, 25.95) * (1 - seg(t, 27.9, 28.2)) });
        el.fog.style.opacity = (seg(t, 27.1, 28.3)).toFixed(2); el.fog.style.transform = `translateX(${((1 - E.inOut(seg(t, 27.1, 28.3))) * -100).toFixed(0)}%)`;
        pop(el.shield, t, 28.4, 0.5, { r: 0 }); set(el.shield, { o: seg(t, 28.4, 28.55) * (1 - seg(t, 29.6, 29.95)), s: 0.4 + 0.6 * E.outBack(seg(t, 28.4, 28.9)) });
        txt(el.pl, found ? `${D.place.city}, ${D.place.country}` : 'Looking…'); txt(el.pls, found ? `${D.place.region} · ${D.place.when} · ${D.place.device}` : D.place.file);
        set(el.wv, { o: found ? 1 - seg(t, 28.3, 28.6) : 0 }); const okq = seg(t, 28.5, 28.9); set(el.okv, { o: okq, s: 0.95 + 0.05 * E.outBack(okq) });
        const rmo = Math.max(seg(t, 26.1, 26.5) * (1 - seg(t, 27.05, 27.3)), seg(t, 28.9, 29.3)); set(el.rm, { o: rmo }); cls(el.rm, 'sec', t > 28.8); txt(el.rml, t > 28.8 ? 'Saved a safe copy' : 'Remove location');
        A.press(el.rm, t, 27.0);
        const pb = pj > 0 && pj < 1; set(el.pbar, { o: pb ? Math.min(seg(t, 27.1, 27.3), 1 - seg(t, 28.4, 28.6)) : 0 }); bPriv.update(pj, t); txt(el.pbt, pj < 0.4 ? 'Lifting the pin…' : pj < 0.8 ? 'Wiping the map…' : 'Almost safe…');
        txt(el.lt, t >= 28.5 ? 'Location off' : 'Location on'); if (el.lo) txt(el.lo, t >= 28.5 ? 'off' : 'on'); el.pcard.querySelector('.tag').style.color = t >= 28.5 ? '#175A38' : '#B03A2E';
        /* --- gif --- */
        const gh = E.inOut(seg(t, 31.45, 32.3)), Lp = 4 / 12, Rp = (8 - gh) / 12, gp = seg(t, 33.0, 35.2), made = t >= 35.2, making = t >= 33.0 && !made;
        const sw0 = web ? 430 : 342;
        el.selw.style.left = (Lp * 100) + '%'; el.selw.style.width = ((Rp - Lp) * 100) + '%';
        el.hL.style.left = (Lp * sw0) + 'px'; el.hR.style.left = (Rp * sw0) + 'px';
        const gfi = making ? Math.min(11, Math.floor(gp * 12)) : Math.floor(t * 12) % 12; el.vid.style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 12) % 4) : making ? gfi : Math.floor(t * 12) % 12);
        txt(el.tv, made ? `${D.video.size} · ${D.video.fps} fps · ${D.video.frames} frames` : gh > 0.5 ? `${D.video.from} to ${D.video.to} · ${D.video.clip}` : '0:04 to 0:08 · 4.0 s'); txt(el.clipv, gh > 0.5 ? '0:04 to 0:07' : '0:04 to 0:08');
        txt(el.vb, made ? `GIF · loops · ${D.video.size}` : `${D.video.file} · ${D.video.len}`);
        set(el.mk, { o: making ? 0 : 1 }); txt(el.mkl, made ? 'Save GIF' : 'Make GIF'); cls(el.mk, 'sec', made && t > 35.8); A.press(el.mk, t, 32.9); A.press(el.mk, t, 35.7);
        el.vbs.style.opacity = making ? '1' : '0'; vBar.update(gp, t);
        txt(el.gt1, making ? `Frame ${Math.round(36 * A.rush(gp))} of ${D.video.frames}` : made ? 'Saved to your gallery' : ''); txt(el.gt2, making ? `${D.video.fps} fps · ${Math.round(100 * A.rush(gp))}%` : '');
        if (made && t > 35.8) txt(el.mkl, 'Saved');
        /* --- done --- */
        el.rcs.forEach((c, i) => { const p = E.outBack(seg(t, 36.3 + i * 0.14, 36.8 + i * 0.14)); set(c, { s: 0.7 + 0.3 * p, o: seg(t, 36.3 + i * 0.14, 36.5 + i * 0.14) }); });
        const lu = t >= 36.6; txt(el.dlv, lu ? 'Lv 4' : 'Lv 3'); txt(el.drk, lu ? 'Summer' : 'Spring'); txt(el.dst, t >= 37.1 ? '7 days' : '6 days'); el.drk.style.background = lu ? '#FFD24D' : '#FFE9A8';
        A.press(el.saveall, t, 38.5); { const bp = q('.dn .bigp') || q('.spk'); if (bp) A.reveal(bp, 'drop', seg(t, 37.2, 37.8), { H: 160 }); } txt(el.sal, t > 38.65 ? (web ? 'All 4 saved' : '4 files saved') : 'Save all 4'); cls(el.saveall, 'sec', t > 38.7);
        /* sidebar */
        if (web) { const on = t < 9.4 ? -1 : t < 17.9 ? 0 : t < 24.3 ? 1 : t < 30.5 ? 2 : t < 36.2 ? 3 : -1; qa('.nav').forEach((n, i) => cls(n, 'on', i === on)); }

        /* ===== bubble ===== */
        let L = null; BUB.forEach(b => { if (t >= b[0]) L = b; });
        const showB = L && L[1] && !(t > 17.55 && t < 19.0) && !(t > 36.2 && t < 36.7 && false);
        if (showB) {
          const key = L[1] + '|' + (L[2] || ''); if (key !== bubKey) { bubKey = key; bub.querySelector('.bt').textContent = L[1]; const c = bub.querySelector('.ct'); c.className = L[2] ? 'cta ct' : 'ct'; c.innerHTML = L[2] ? `${L[2]}${I('next', 14, 3)}` : ''; bub._h = 0; }
          const intro = t < 2.55, w2 = intro ? (web ? 250 : 240) : (web ? 216 : 214); bub.style.width = w2 + 'px'; if (!bub._h) bub._h = bub.offsetHeight;
          const h = bub._h, tl = bub.querySelector('.tl'); let l, tp;
          if (intro) { l = CEN.x - w2 / 2 + (web ? 150 : 0); tp = CEN.y - 175 * CEN.s - h - 14 - (web ? 0 : 0); tl.style.cssText = `left:${w2 / 2 - 8 - (web ? 150 : 0)}px;bottom:-8px;top:auto;transform:rotate(-45deg)`; }
          else if (web) { l = 244; tp = 458 - h; tl.style.cssText = `left:${340 - 244 - 8}px;bottom:-8px;top:auto;transform:rotate(-45deg)`; }
          else { l = 158; tp = 232 - h / 2; tl.style.cssText = `left:-8px;top:${h / 2 - 8}px;transform:rotate(45deg)`; }
          const k = E.outBack(seg(t, L[0], L[0] + 0.35)); bub.style.transformOrigin = intro ? '50% 100%' : web ? '40% 100%' : '0 50%';
          set(bub, { x: l, y: tp, s: 0.7 + 0.3 * k, o: seg(t, L[0], L[0] + 0.15) }); if (L[2]) A.press(bub.querySelector('.ct'), t, L[0] > 30 ? 30.6 : 25.3);
        } else set(bub, { o: 0 });
        /* ===== quick menu ===== */
        const qo = t > 17.5 && t < 19.3, qc = 1 - seg(t, 18.9, 19.2);
        set(scrim, { o: qo ? seg(t, 17.6, 17.9) * qc : 0 });
        const pot = sprAt(80, 104);
        qms.forEach((m, i) => {
          const k = E.outBack(seg(t, 17.62 + i * 0.04, 17.96 + i * 0.04)) * qc, p = qmPos(i);
          const cr = i === 1 ? seg(t, 18.35, 18.7) : 0, pr2 = i === 1 && t > 18.7 ? 1 : 0;
          set(m, { x: lerp(pot.x, p.x, clamp(k, 0, 1.15)), y: lerp(pot.y, p.y, clamp(k, 0, 1.15)), s: (0.2 + 0.8 * k) * (1 + 0.08 * Math.sin(cr * 6.28) * (i === 1 ? 1 : 0) + (pr2 ? 0.1 : 0)), o: qo ? Math.min(1, k * 3) * qc : 0 });
          m.querySelector('svg.lf').style.transform = `rotate(${p.ang + 90}deg)`; A.press(m, t, 18.7, 'hit');
          const vp = vn.querySelector('.vp' + i), vq = vn.querySelector('.vq' + i), b0 = p.base, cx1 = lerp(pot.x, b0.x, 0.5) + (i - 2) * 6, cy1 = lerp(pot.y, b0.y, 0.5) - 26;
          const d = `M${pot.x.toFixed(1)} ${pot.y.toFixed(1)}Q${cx1.toFixed(1)} ${cy1.toFixed(1)} ${b0.x.toFixed(1)} ${b0.y.toFixed(1)}`; const L2 = 400;
          at(vp, 'd', d); at(vq, 'd', d); vp.style.strokeDasharray = L2; vp.style.strokeDashoffset = (L2 * (1 - clamp(k, 0, 1))).toFixed(1); vq.style.strokeDasharray = '4 9'; vq.style.opacity = qo ? clamp(k, 0, 1) * qc : 0; vp.style.opacity = qo ? qc : 0;
        });

        /* ===== effects canvas ===== */
        cx.setTransform(DPR, 0, 0, DPR, 0, 0); cx.clearRect(0, 0, W, H);
        if (t > 0.42 && t < 1.0) {
          const u = seg(t, 0.42, 0.74), a0 = sprAt(96, -50), b0 = sprAt(96, 38), dy = lerp(a0.y, b0.y, u * u), r0 = 5 * cur.s;
          if (u < 1) { const gd = cx.createRadialGradient(a0.x - 1, dy - 2, 0, a0.x, dy, r0 * 1.6); gd.addColorStop(0, '#fff'); gd.addColorStop(0.5, '#BFEBFA'); gd.addColorStop(1, '#5CC4EE'); cx.fillStyle = gd; cx.beginPath(); cx.moveTo(a0.x, dy - r0 * 2); cx.bezierCurveTo(a0.x + r0 * 1.4, dy - r0 * 0.4, a0.x + r0 * 1.2, dy + r0 * 1.2, a0.x, dy + r0 * 1.2); cx.bezierCurveTo(a0.x - r0 * 1.2, dy + r0 * 1.2, a0.x - r0 * 1.4, dy - r0 * 0.4, a0.x, dy - r0 * 2); cx.fill(); }
          else { const k = seg(t, 0.74, 1.0); cx.strokeStyle = `rgba(92,196,238,${(1 - k).toFixed(2)})`; cx.lineWidth = 2; cx.beginPath(); cx.ellipse(b0.x, b0.y, 8 + 22 * k, 3 + 8 * k, 0, 0, 6.3); cx.stroke(); }
        }
        const jobs = (t > 10.9 && t < 14.5) ? 'shr' : (t > 27.05 && t < 28.7) ? 'priv' : (t > 33.0 && t < 35.3) ? 'gif' : null;
        const ffv = jobs ? 0.2 : (t > 36.5 ? 1.2 : 0.8);
        const ffR = A.rng(77);
        for (let i = 0; i < (web ? 26 : 16); i++) {
          const bx = ffR() * W, by = ffR() * H, f1 = 0.3 + ffR() * 0.5, f2 = 0.25 + ffR() * 0.5, ph = ffR() * 6.3, rr = 1.4 + ffR() * 1.8;
          const ox = bx + 26 * Math.sin(t * f1 + ph), oy = by + 22 * Math.sin(t * f2 + ph * 1.7), al = Math.pow(0.5 + 0.5 * Math.sin(t * 2 + ph * 3), 2) * ffv * 0.85;
          if (al < 0.02 || (!web && oy > 330 && oy < 732 && t > 3.3 && t < 36)) continue; if (web && ox > 220 && ox < 930 && oy > 20 && oy < 735 && t > 3.3 && !(oy > 440 && ox < 480)) continue;
          const gg = cx.createRadialGradient(ox, oy, 0, ox, oy, rr * 5); gg.addColorStop(0, `rgba(255,236,150,${al})`); gg.addColorStop(1, 'rgba(255,236,150,0)'); cx.fillStyle = gg; cx.beginPath(); cx.arc(ox, oy, rr * 5, 0, 6.3); cx.fill(); cx.fillStyle = `rgba(255,252,220,${Math.min(1, al * 1.3)})`; cx.beginPath(); cx.arc(ox, oy, rr * 0.8, 0, 6.3); cx.fill();
        }
        const dst = sprAt(80, 170);
        const flow = (src, amp, col) => {
          cx.lineCap = 'round'; for (let k = 0; k < 5; k++) { const kk = k - 2; cx.strokeStyle = `rgba(139,94,60,${(0.75 * amp).toFixed(2)})`; cx.lineWidth = 2.6 - Math.abs(kk) * 0.4; cx.setLineDash([10, 8]); cx.lineDashOffset = -t * 46 - k * 6; const dy0 = dst.y - src.y, dx0 = src.x - dst.x; cx.beginPath(); cx.moveTo(src.x + kk * 20, src.y + 24 + Math.abs(kk) * 6); cx.bezierCurveTo(src.x + kk * 28 - dx0 * 0.1, src.y + dy0 * 0.4, dst.x + kk * 12 + dx0 * 0.4, dst.y - dy0 * 0.25, dst.x, dst.y); cx.stroke(); } cx.setLineDash([]);
          const r = A.rng(5); for (let i = 0; i < 32; i++) {
            const u = (t * (0.7 + r() * 0.4) + i / 32) % 1, o1 = (r() - 0.5) * 70, o2 = (r() - 0.5) * 60;
            const dy0 = dst.y - src.y, dx0 = src.x - dst.x, p1 = { x: src.x + o1 * 0.5 - dx0 * 0.1, y: src.y + dy0 * 0.4 }, p2 = { x: dst.x + o2 * 0.4 + dx0 * 0.4, y: dst.y - dy0 * 0.25 }, v = 1 - u;
            const px = v ** 3 * src.x + 3 * v * v * u * p1.x + 3 * v * u * u * p2.x + u ** 3 * dst.x, py = v ** 3 * src.y + 3 * v * v * u * p1.y + 3 * v * u * u * p2.y + u ** 3 * dst.y;
            const al = Math.sin(u * Math.PI) * amp; cx.fillStyle = col[i % col.length]; cx.globalAlpha = al * 0.35; cx.beginPath(); cx.arc(px, py, 5 + (1 - u) * 5, 0, 6.3); cx.fill(); cx.globalAlpha = al; cx.beginPath(); cx.arc(px, py, 2 + (1 - u) * 3, 0, 6.3); cx.fill();
          } cx.globalAlpha = 1;
        };
        if (jobs === 'shr') {
          const pc = A.center(el.ph), a = Math.min(seg(t, 10.9, 11.5), 1 - seg(t, 14.0, 14.5));
          flow(pc, a, ['#B6E35B', '#FFD24D', '#3DBE7A', '#FFF3B0']);
          const rect = el.ph.getBoundingClientRect(), sr = S.getBoundingClientRect(), scl = sr.width / W, cx0 = (rect.left - sr.left) / scl + rect.width / scl, cy0 = (rect.top - sr.top) / scl;
          const tilt = -28 * seg(t, 11.0, 11.5) * (1 - seg(t, 14.0, 14.3));
          cx.save(); cx.translate(cx0 + 4, cy0 - 18); cx.globalAlpha = a; cx.rotate(tilt * Math.PI / 180);
          const cg = cx.createLinearGradient(0, -14, 0, 14); cg.addColorStop(0, '#8FDC9E'); cg.addColorStop(1, '#3DBE7A'); cx.fillStyle = cg; cx.beginPath(); cx.roundRect(-14, -14, 34, 28, 7); cx.fill();
          cx.strokeStyle = '#2F9E62'; cx.lineWidth = 4; cx.lineCap = 'round'; cx.beginPath(); cx.moveTo(-12, -4); cx.lineTo(-30, -16); cx.stroke(); cx.beginPath(); cx.arc(24, 0, 9, -1.6, 1.6); cx.stroke();
          cx.fillStyle = 'rgba(255,255,255,.45)'; cx.fillRect(-9, -10, 5, 18); cx.restore();
          if (tilt < -8) for (let i = 0; i < 12; i++) { const u = (t * 1.5 + i / 12) % 1, spx = cx0 + 4 - 30 * Math.cos(tilt * 0.0175) - 6, spy = cy0 - 18 - 16 * Math.cos(0.5) + 12; cx.fillStyle = `rgba(92,196,238,${(1 - u) * a})`; cx.beginPath(); cx.ellipse(spx - 4 + (i % 3) * 5 - u * 4, spy + u * u * rect.height / scl * 0.9, 1.7, 3, 0, 0, 6.3); cx.fill(); }
        }
        if (jobs === 'priv') flow(A.center(el.mcard), Math.min(seg(t, 27.05, 27.5), 1 - seg(t, 28.3, 28.7)), ['#B6E35B', '#fff', '#3DBE7A']);
        if (jobs === 'gif') flow(A.center(el.vid), Math.min(seg(t, 33.0, 33.5), 1 - seg(t, 35.0, 35.3)), ['#B6E35B', '#FFD24D', '#FF8FB1', '#fff']);
        const ring = (x0, y0, d, dur, R0, c1, c2) => { if (d < 0 || d > dur) return; const k = E.out(d / dur), a = Math.pow(1 - d / dur, 1.3); const gg = cx.createRadialGradient(x0, y0, R0 * k * 0.4, x0, y0, R0 * k); gg.addColorStop(0, 'rgba(255,255,255,0)'); gg.addColorStop(0.8, c2.replace('A', (a * 0.35).toFixed(2))); gg.addColorStop(1, c2.replace('A', '0')); cx.fillStyle = gg; cx.beginPath(); cx.arc(x0, y0, R0 * k, 0, 6.3); cx.fill(); cx.strokeStyle = c1.replace('A', a.toFixed(2)); cx.lineWidth = 3 + 3 * (1 - k); cx.beginPath(); cx.arc(x0, y0, R0 * k, 0, 6.3); cx.stroke(); for (let i = 0; i < 10; i++) { const an = i * 0.628 + d, rr = R0 * k * (0.7 + 0.5 * ((i * 7) % 3) / 3); cx.save(); cx.translate(x0 + Math.cos(an) * rr, y0 + Math.sin(an) * rr); cx.rotate(an); cx.fillStyle = c1.replace('A', a.toFixed(2)); cx.beginPath(); cx.moveTo(0, -5); cx.lineTo(1.5, -1.5); cx.lineTo(5, 0); cx.lineTo(1.5, 1.5); cx.lineTo(0, 5); cx.lineTo(-1.5, 1.5); cx.lineTo(-5, 0); cx.lineTo(-1.5, -1.5); cx.fill(); cx.restore(); } };
        const top2 = sprAt(80 + bend, Ys - 10);
        ring(top2.x, top2.y, t - 14.85, 1.4, 110 * cur.s, 'rgba(255,210,77,A)', 'rgba(182,227,91,A)');
        ring(top2.x, top2.y, t - 36.7, 1.8, 190 * cur.s, 'rgba(255,143,177,A)', 'rgba(255,224,120,A)');
        PLT.forEach((p, i) => { if (t < p || t > p + 0.95) return; const c = A.center(plots[i]); ring(c.x, c.y - 12, t - p, 0.9, web ? 70 : 38, 'rgba(255,210,77,A)', 'rgba(255,143,177,A)'); });
        if (t > 28.6 && t < 29.8) { const pc2 = A.center(el.mcard); ring(pc2.x, pc2.y, t - 28.6, 1.1, web ? 120 : 80, 'rgba(61,190,122,A)', 'rgba(182,227,91,A)'); }
        /* bursts */
        bursts.forEach(b => {
          if (t < b.t0 - 0.05 || t > b.t0 + 2.5) { b.a.update(-1); b.b.update(-1); return; }
          let p0;
          if (b.k === 'photo') p0 = A.center(el.ph); else if (b.k === 'spr') p0 = top2; else if (b.k === 'crop') p0 = A.center(q('.crop .cb')); else if (b.k === 'priv') p0 = A.center(el.mcard); else p0 = A.center(el.vid);
          [b.a, b.b].forEach(c => { c.el.style.transform = `translate(${p0.x.toFixed(0)}px,${p0.y.toFixed(0)}px)`; c.update(t - b.t0); });
        });
        /* iris/other reveals needing the page elements' final state */
        qa('.pg').forEach(p => { p.style.pointerEvents = 'none'; });
      },
    };
    function qmPos(i) {
      const pot = sprAt(80, 92), R2 = web ? 172 : 142, ang0 = web ? -122 : -52, step = web ? 28 : 31, a = (ang0 + step * i) * Math.PI / 180;
      const p = { x: pot.x + Math.cos(a) * R2, y: pot.y + Math.sin(a) * R2, ang: ang0 + step * i };
      p.base = { x: pot.x + Math.cos(a) * (R2 - 40), y: pot.y + Math.sin(a) * (R2 - 40) };
      return p;
    }
  },
};
})());

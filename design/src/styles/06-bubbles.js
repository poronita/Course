/* Style 6 — Smart Drop. No menus: drop a file in, tap the bubble that fits. */
ISK.register({
  id: 'bubbles',
  order: 6,
  name: 'Smart Drop',
  tagline: 'Drop in a file. Tap the bubble that fits.',
  concept: 'There are no menus. Home is one soft circle that asks for a photo or video. The app reads the file with plain rules: size, pixels, format, location and type. Then it floats up three or four bubbles, and each bubble does a whole job in one tap.',
  wins: [
    'Nobody needs to know a tool name. The app offers the fix that fits the file, like "Too big for forms? Shrink to 200 KB".',
    'Fact chips such as "Has location" teach people about their own photo in plain words.',
    'It feels playful and quick. One tap does the job, and a ripple shows it worked.',
  ],
  risks: [
    'Rules can guess wrong. An "All tools" link must stay one tap away.',
    'Moving bubbles are harder to hit with shaky hands, so the drift must stay small and slow.',
  ],
  scores: { simple: 5, fun: 4, wow: 4, effort: 3 },
  palette: ['#EAF4FF', '#0F1B2D', '#3D8BFF', '#FF7A6B', '#22C38E', '#FFB020'],
  type: 'Lexend, a typeface designed for reading ease, from 13 to 36 px with round, open shapes.',
  motion: 'Bubbles rise with a soft bounce, drift on slow waves, and sink into the photo with a ripple when tapped.',
  notes: {
    intro: 'Bubbles float up around one soft circle that says "Give me a photo or video".',
    pick: 'The photo lands in the circle and fact chips pop up: 4.8 MB, HEIC, 4032 × 3024, Has location.',
    shrink: 'The "Shrink to 200 KB" bubble sinks into the photo. One more tap picks the exam form, and the size counts down to 196 KB.',
    crop: 'A wide photo gets an "Instagram post 4:5" bubble. Presets sit under the frame, and one finger moves the photo.',
    privacy: 'A coral bubble warns "This photo shows where you were: Pune, India" with a tiny map. One tap removes the location.',
    gif: 'A video gets video bubbles. Tap "Make a GIF", trim 0:04 to 0:07, and the 2.1 MB GIF loops.',
    done: 'The four results float around a mint check, with the privacy promise and one ad slot below.',
  },
  statusBar: 'dark',
  css: `
.st-bubbles{--ink:#0F1B2D;--mut:#56667F;--line:#D6E4F5;--az:#3D8BFF;--co:#FF7A6B;--mi:#22C38E;--am:#FFB020;background:linear-gradient(180deg,#EAF4FF 0%,#F5FAFF 55%,#FFFFFF 100%);color:var(--ink);font-family:Lexend,system-ui,sans-serif;font-size:15px;line-height:1.3}
.st-bubbles .az{--rim:#3D8BFF;--ri:#2A6FE0}.st-bubbles .co{--rim:#FF7A6B;--ri:#D4463A}.st-bubbles .mi{--rim:#22C38E;--ri:#0E8C64}.st-bubbles .am{--rim:#FFB020;--ri:#A86C00}
.st-bubbles .lay{position:absolute;inset:0}
.st-bubbles .ab{position:absolute;border-radius:50%;border:2px solid var(--rim);background:radial-gradient(circle at 35% 30%,#fff 0 35%,color-mix(in srgb,var(--rim) 14%,#fff));opacity:.6}
.st-bubbles .hdr{position:absolute;left:18px;top:52px;height:40px;display:flex;align-items:center;gap:9px;font-weight:600;font-size:17px;z-index:30}
.st-bubbles.m-web .hdr{left:28px;top:12px;font-size:19px}
.st-bubbles .hdr small{font-size:13px;font-weight:500;color:var(--az);background:#fff;border:1.5px solid #CFE0FA;border-radius:12px;padding:3px 10px;margin-left:6px}
.st-bubbles .rp{position:absolute;right:16px;top:54px;height:36px;display:flex;align-items:center;gap:7px;padding:0 6px 0 12px;border-radius:18px;background:#fff;border:1.5px solid var(--line);font-size:14px;font-weight:500;z-index:30}
.st-bubbles .rp em{font-style:normal;min-width:24px;height:24px;border-radius:12px;background:#E6EEF8;color:var(--mut);display:grid;place-items:center;font-size:13px;font-weight:600;padding:0 7px}
.st-bubbles .rp em.on{background:var(--mi);color:#fff}
.st-bubbles .wtop{position:absolute;left:0;right:0;top:0;height:64px;border-bottom:1px solid var(--line);background:rgba(255,255,255,.6);z-index:29}
.st-bubbles .wr{position:absolute;right:28px;top:14px;display:flex;gap:12px;align-items:center;z-index:30}
.st-bubbles .pill{display:flex;align-items:center;gap:8px;height:36px;padding:0 14px;border-radius:18px;background:#fff;border:1.5px solid var(--line);font-size:14px;font-weight:500;white-space:nowrap}
.st-bubbles .pill.ok{color:#0E7A57;border-color:#BDEBD9;background:#EFFBF6}
.st-bubbles kbd{font-family:inherit;font-size:12px;font-weight:600;border:1.5px solid #C5D4E8;border-bottom-width:3px;border-radius:6px;padding:1px 6px;background:#fff;color:var(--ink)}
.st-bubbles .halo{position:absolute;border-radius:50%;border:2px solid rgba(61,139,255,.13)}
.st-bubbles .horb{position:absolute;border-radius:50%;background:radial-gradient(circle at 50% 28%,#fff 0 50%,#EEF5FF 100%);border:2.5px solid rgba(61,139,255,.35);box-shadow:0 30px 60px -28px rgba(61,139,255,.6),inset 0 -20px 40px rgba(61,139,255,.07);display:grid;place-items:center;text-align:center}
.st-bubbles .horb.hot{border-color:var(--az);border-style:dashed;box-shadow:0 0 0 12px rgba(61,139,255,.13),0 30px 60px -28px rgba(61,139,255,.7)}
.st-bubbles .horb>div{grid-area:1/1;display:flex;flex-direction:column;align-items:center;gap:10px}
.st-bubbles .hic{width:64px;height:64px;border-radius:50%;background:var(--az);color:#fff;display:grid;place-items:center;box-shadow:0 10px 22px -8px rgba(61,139,255,.9)}
.st-bubbles .hin b{font-size:25px;line-height:1.15;font-weight:600;max-width:210px}
.st-bubbles .hin span{font-size:15px;color:var(--mut)}
.st-bubbles.m-web .hin b{font-size:34px;max-width:300px}
.st-bubbles.m-web .hic{width:80px;height:80px}
.st-bubbles.m-web .hin span{font-size:17px}
.st-bubbles .hin .kb{font-size:14px;margin-top:2px}
.st-bubbles .ititle{position:absolute;left:0;right:0;top:546px;text-align:center;display:flex;flex-direction:column;gap:6px}
.st-bubbles.m-web .ititle{top:612px}
.st-bubbles .ititle b{font-size:28px;font-weight:600}.st-bubbles .ititle span{font-size:16px;color:var(--mut)}
.st-bubbles .hhint{position:absolute;left:0;right:0;top:548px;text-align:center;font-size:16px;color:var(--mut);margin:0}
.st-bubbles.m-web .hhint{top:640px;font-size:17px}
.st-bubbles .rl{position:absolute;left:30px;top:598px;font-size:14px;font-weight:600;color:var(--mut);margin:0}
.st-bubbles .rt{position:absolute;top:626px;width:72px;height:72px;border-radius:20px;background-size:cover;background-position:center;box-shadow:0 8px 18px -8px rgba(15,27,45,.45);border:3px solid #fff}
.st-bubbles .rt em{position:absolute;right:4px;bottom:4px;font-style:normal;font-size:11px;font-weight:600;color:#fff;background:rgba(15,27,45,.7);border-radius:8px;padding:1px 6px;display:flex;align-items:center;gap:2px}
.st-bubbles .rt.is-pressed{transform:scale(.92)}
.st-bubbles .safe{position:absolute;left:0;right:0;top:772px;display:flex;justify-content:center;align-items:center;gap:7px;font-size:14px;color:#0E7A57;font-weight:500;margin:0}
.st-bubbles .dim{position:absolute;inset:0;background:rgba(15,27,45,.28);z-index:40}
.st-bubbles .sheet{position:absolute;left:0;right:0;top:372px;bottom:0;background:#fff;border-radius:28px 28px 0 0;box-shadow:0 -12px 40px rgba(15,27,45,.2);z-index:41;padding:12px 16px}
.st-bubbles .grab{width:44px;height:5px;border-radius:3px;background:#D3DCE8;margin:0 auto 12px}
.st-bubbles .shh{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:14px}
.st-bubbles .shh b{font-size:20px;font-weight:600}.st-bubbles .shh span{font-size:14px;color:var(--mut)}
.st-bubbles .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-bubbles .gt{aspect-ratio:1;border-radius:16px;background-size:cover;background-position:center;position:relative}
.st-bubbles .gt.sel{box-shadow:0 0 0 4px #fff,0 0 0 7px var(--az)}
.st-bubbles .gt em{position:absolute;right:6px;bottom:6px;font-style:normal;font-size:11px;color:#fff;background:rgba(15,27,45,.7);border-radius:8px;padding:1px 6px}
.st-bubbles .fly{position:absolute;background-size:cover;background-position:center;z-index:45;border:4px solid #fff;box-shadow:0 18px 40px -12px rgba(15,27,45,.45)}
.st-bubbles .dcard{position:absolute;left:0;top:0;width:250px;height:64px;margin:-32px 0 0 -125px;background:#fff;border-radius:16px;box-shadow:0 20px 44px -12px rgba(15,27,45,.45);display:flex;align-items:center;gap:12px;padding:8px 14px 8px 8px;z-index:45}
.st-bubbles .dcard i{width:48px;height:48px;border-radius:12px;background-size:cover;background-position:center;flex:none}
.st-bubbles .dcard b{display:block;font-size:15px;font-weight:600}.st-bubbles .dcard span{font-size:13px;color:var(--mut)}
.st-bubbles .orb{position:absolute;border-radius:50%}
.st-bubbles .oi{position:absolute;inset:0;border-radius:50%;background-size:cover;background-position:center;border:6px solid #fff;box-shadow:0 24px 50px -18px rgba(15,27,45,.5),0 0 0 1px rgba(61,139,255,.18)}
.st-bubbles svg.ring{position:absolute;left:-14px;top:-14px;width:calc(100% + 28px);height:calc(100% + 28px);transform:rotate(-90deg);overflow:visible}
.st-bubbles svg.ring circle{fill:none;stroke-width:2.6;stroke-linecap:round}
.st-bubbles svg.ring .tk{stroke:#D6E4F5}.st-bubbles svg.ring .pr{stroke:var(--az)}
.st-bubbles .rip{position:absolute;inset:0;border-radius:50%;border:4px solid var(--az);opacity:0}
.st-bubbles .scrim{position:absolute;inset:6px;border-radius:50%;background:rgba(15,27,45,.66);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.st-bubbles .scrim b{font-size:34px;font-weight:600;font-variant-numeric:tabular-nums;line-height:1.05}
.st-bubbles .scrim span{font-size:13px;opacity:.85}
.st-bubbles.m-web .scrim b{font-size:46px}.st-bubbles.m-web .scrim span{font-size:16px}
.st-bubbles .obadge{position:absolute;right:4px;bottom:8px;width:46px;height:46px;border-radius:50%;background:var(--rim);color:#fff;display:grid;place-items:center;border:3px solid #fff;box-shadow:0 6px 14px -4px rgba(15,27,45,.4)}
.st-bubbles .olab{position:absolute;left:0;right:0;text-align:center;font-size:14px;color:var(--mut);font-weight:500;white-space:nowrap}
.st-bubbles .olab.q{font-size:19px;color:var(--ink);font-weight:600}
.st-bubbles.m-web .olab{font-size:16px}.st-bubbles.m-web .olab.q{font-size:22px}
.st-bubbles .chips{position:absolute;left:10px;right:10px;top:334px;display:flex;justify-content:center;gap:6px}
.st-bubbles .chip{display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 10px;border-radius:15px;background:#fff;border:1.5px solid var(--line);font-size:13px;font-weight:500;white-space:nowrap}
.st-bubbles .chip.co{border-color:var(--rim);color:var(--ri);background:#FFF2EF}
.st-bubbles .chip.mi{border-color:var(--rim);color:var(--ri);background:#EAFAF3}
.st-bubbles .bb{position:absolute;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;text-align:center;background:radial-gradient(circle at 50% 80%,color-mix(in srgb,var(--rim) 14%,#fff) 0%,#fff 64%);border:3px solid var(--rim);box-shadow:0 18px 30px -16px color-mix(in srgb,var(--rim) 80%,transparent),0 0 0 6px color-mix(in srgb,var(--rim) 11%,transparent);will-change:transform}
.st-bubbles .bb::before{content:"";position:absolute;left:12%;top:8%;width:44%;height:44%;border-radius:50%;border-top:3px solid color-mix(in srgb,var(--rim) 32%,#fff);border-left:3px solid transparent;transform:rotate(-28deg)}
.st-bubbles .bb::after{content:"";position:absolute;left:24%;top:15%;width:7px;height:7px;border-radius:50%;background:color-mix(in srgb,var(--rim) 30%,#fff)}
.st-bubbles .bi{width:36px;height:36px;border-radius:50%;background:color-mix(in srgb,var(--rim) 17%,#fff);color:var(--ri);display:grid;place-items:center;flex:none}
.st-bubbles .bb b{font-size:15px;font-weight:600;line-height:1.15}
.st-bubbles .bb small{font-size:12px;color:var(--mut);line-height:1.2}
.st-bubbles .bb.big b{font-size:18px}.st-bubbles .bb.big small{font-size:13px}.st-bubbles .bb.big .bi{width:44px;height:44px}
.st-bubbles.m-web .bb b{font-size:17px}.st-bubbles.m-web .bb small{font-size:13px}.st-bubbles.m-web .bb.big b{font-size:21px}.st-bubbles.m-web .bb.big small{font-size:14px}
.st-bubbles .bb.wn>div{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:0 14%}
.st-bubbles .mm{position:relative;width:64px;height:64px;border-radius:50%;overflow:hidden;border:2px solid #fff;box-shadow:0 0 0 2px var(--rim);margin-bottom:4px;flex:none}
.st-bubbles .mm>svg{position:absolute;inset:0;width:100%;height:100%}
.st-bubbles .mp{position:absolute;left:50%;top:50%;width:24px;height:24px;margin:-22px 0 0 -12px;color:#E5483A;filter:drop-shadow(0 2px 2px rgba(15,27,45,.3))}
.st-bubbles .mp svg{display:block;fill:#fff}
.st-bubbles .bb.wn b{font-size:20px}.st-bubbles.m-web .bb.wn b{font-size:23px}
.st-bubbles .pulse{position:absolute;inset:-5px;border-radius:50%;border:3px solid var(--co);opacity:0}
.st-bubbles .steps{position:absolute;left:0;right:0;top:350px;display:flex;flex-direction:column;align-items:center;gap:8px}
.st-bubbles.m-web .steps{top:492px}
.st-bubbles .st{display:flex;align-items:center;gap:10px;height:40px;width:230px;padding:0 8px 0 5px;border-radius:20px;background:#fff;border:1.5px solid var(--line);font-size:15px;font-weight:500}
.st-bubbles .st i{width:30px;height:30px;border-radius:50%;background:#EEF5FF;color:var(--az);display:grid;place-items:center;flex:none}
.st-bubbles .st em{margin-left:auto;width:24px;height:24px;border-radius:50%;background:var(--mi);color:#fff;display:grid;place-items:center;flex:none}
.st-bubbles .bh{position:absolute;left:0;right:0;top:772px;display:flex;justify-content:center;align-items:center;gap:7px;font-size:14px;color:var(--mut);z-index:5}
.st-bubbles.m-web .bh{left:300px;right:300px;top:690px;font-size:16px}
.st-bubbles .bh i{width:12px;height:12px;border-radius:50%;border:2px solid var(--rim)}
.st-bubbles .card{position:absolute;left:16px;right:16px;bottom:72px;background:#fff;border-radius:26px;padding:16px;box-shadow:0 24px 50px -22px rgba(15,27,45,.45),0 0 0 1px #E3ECF7;display:flex;flex-direction:column;gap:12px}
.st-bubbles.m-web .card{left:390px;right:auto;width:500px;top:500px;bottom:auto}
.st-bubbles .ct{display:flex;align-items:center;gap:12px}
.st-bubbles .ct i{width:56px;height:56px;border-radius:50%;background-size:cover;background-position:center;flex:none;border:3px solid #fff;box-shadow:0 0 0 2px var(--mi)}
.st-bubbles .ct b{display:block;font-size:18px;font-weight:600;line-height:1.2}.st-bubbles .ct span{font-size:13px;color:var(--mut)}
.st-bubbles .ct em{margin-left:auto;width:30px;height:30px;border-radius:50%;background:var(--mi);color:#fff;display:grid;place-items:center;flex:none}
.st-bubbles .bars{display:grid;grid-template-columns:52px 1fr 64px;gap:8px 10px;align-items:center;font-size:13px;color:var(--mut)}
.st-bubbles .bars i{height:12px;border-radius:6px;background:#EDF2F8;overflow:hidden}
.st-bubbles .bars u{display:block;height:100%;border-radius:6px;background:#B9C6D8}.st-bubbles .bars u.g{background:var(--mi)}
.st-bubbles .bars b{color:var(--ink);font-weight:600;text-align:right;font-variant-numeric:tabular-nums}
.st-bubbles .cm{margin:0;font-size:13px;color:var(--mut)}
.st-bubbles .cb{display:flex;gap:10px}
.st-bubbles .btn{height:52px;border-radius:26px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:17px;font-weight:600;background:var(--az);color:#fff;flex:1.4;box-shadow:0 10px 20px -10px rgba(61,139,255,.9);position:relative}
.st-bubbles .btn.gh{flex:1;background:#fff;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--line)}
.st-bubbles .btn.is-pressed{transform:scale(.95)}
.st-bubbles .btn .svd{display:none}.st-bubbles .btn.done{background:var(--mi);box-shadow:0 10px 20px -10px rgba(34,195,142,.9)}
.st-bubbles .btn.done .svl{display:none}.st-bubbles .btn.done .svd{display:flex;align-items:center;gap:8px}
.st-bubbles .btn .svl{display:flex;align-items:center;gap:8px}
.st-bubbles .cv{position:absolute;left:20px;top:108px;width:350px;height:372px;border-radius:28px;overflow:hidden;background:#1A2234;box-shadow:0 24px 50px -20px rgba(15,27,45,.5);border:4px solid #fff}
.st-bubbles.m-web .cv{left:374px;top:84px;width:532px;height:392px}
.st-bubbles .cimg{position:absolute;left:-95px;top:-18px;width:533px;height:400px;background-size:cover;background-position:center}
.st-bubbles.m-web .cimg{left:-71px;top:-58px;width:667px;height:500px}
.st-bubbles .cfr{position:absolute;left:50%;top:50%;width:266px;height:332px;margin:-166px 0 0 -133px;border:3px solid #fff;border-radius:8px;box-shadow:0 0 0 999px rgba(15,27,45,.58);background:linear-gradient(#fff5,#fff5) 33.3% 0/1.5px 100% no-repeat,linear-gradient(#fff5,#fff5) 66.6% 0/1.5px 100% no-repeat,linear-gradient(#fff5,#fff5) 0 33.3%/100% 1.5px no-repeat,linear-gradient(#fff5,#fff5) 0 66.6%/100% 1.5px no-repeat}
.st-bubbles.m-web .cfr{width:282px;height:352px;margin:-176px 0 0 -141px}
.st-bubbles .cl{position:absolute;left:0;right:0;top:492px;text-align:center;font-size:15px;font-weight:600}
.st-bubbles .cl span{color:var(--mut);font-weight:400}
.st-bubbles.m-web .cl{top:488px;font-size:17px}
.st-bubbles .pre{position:absolute;left:16px;right:16px;top:526px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.st-bubbles.m-web .pre{left:310px;right:auto;width:660px;top:524px;grid-template-columns:repeat(4,auto);justify-content:center;gap:8px}
.st-bubbles.m-web .pp{padding:0 14px 0 10px}
.st-bubbles .pp{height:54px;border-radius:27px;background:#fff;border:1.5px solid var(--line);display:flex;align-items:center;gap:9px;padding:0 12px}
.st-bubbles .pp.on{border:2.5px solid var(--az);background:#F1F7FF}
.st-bubbles .pp .sh{width:24px;height:24px;display:grid;place-items:center;flex:none}
.st-bubbles .pp .sh i{display:block;border:2px solid var(--ink);border-radius:3px}
.st-bubbles .pp b{display:block;font-size:13px;font-weight:600;line-height:1.15;white-space:nowrap}.st-bubbles .pp span{font-size:11px;color:var(--mut);white-space:nowrap}
.st-bubbles .chint{position:absolute;left:0;right:0;top:656px;display:flex;justify-content:center;align-items:center;gap:8px;font-size:15px;color:var(--mut)}
.st-bubbles.m-web .chint{left:374px;right:auto;top:614px;justify-content:flex-start}
.st-bubbles .bigb{position:absolute;left:20px;right:20px;top:694px}
.st-bubbles.m-web .bigb{left:auto;right:374px;width:250px;top:598px}
.st-bubbles.m-web .tv .bigb{right:auto;left:515px;top:504px}
.st-bubbles .vbox{position:absolute;left:20px;top:108px;width:350px;height:197px;border-radius:24px;background-size:cover;background-position:center;border:4px solid #fff;box-shadow:0 24px 50px -20px rgba(15,27,45,.5)}
.st-bubbles.m-web .vbox{left:395px;top:84px;width:490px;height:276px}
.st-bubbles .vbadge{position:absolute;left:10px;top:10px;background:rgba(15,27,45,.72);color:#fff;border-radius:10px;padding:4px 10px;font-size:13px;font-weight:500;display:flex;gap:6px;align-items:center}
.st-bubbles .strip{position:absolute;left:20px;top:322px;width:350px;height:56px;display:flex;border-radius:14px;overflow:visible}
.st-bubbles.m-web .strip{left:395px;top:378px;width:490px}
.st-bubbles .strip>i{flex:1;background-size:cover;background-position:center;opacity:.55}
.st-bubbles .strip>i:first-child{border-radius:14px 0 0 14px}.st-bubbles .strip>i:last-child{border-radius:0 14px 14px 0}
.st-bubbles .selw{position:absolute;top:-5px;bottom:-5px;border:4px solid var(--am);border-radius:14px;box-shadow:0 0 0 2px #fff}
.st-bubbles .selw u{position:absolute;inset:0;background-size:cover}
.st-bubbles .hd{position:absolute;top:50%;width:22px;height:54px;margin-top:-27px;border-radius:11px;background:var(--am);box-shadow:0 3px 8px rgba(15,27,45,.3)}
.st-bubbles .hd::after{content:"";position:absolute;left:9px;top:15px;width:4px;height:24px;border-radius:2px;background:#fff}
.st-bubbles .tl{position:absolute;left:0;right:0;top:394px;text-align:center}
.st-bubbles.m-web .tl{top:446px}
.st-bubbles .tl b{display:block;font-size:22px;font-weight:600;font-variant-numeric:tabular-nums}.st-bubbles .tl span{font-size:14px;color:var(--mut)}
.st-bubbles.m-web .tl b{display:inline;font-size:20px}.st-bubbles.m-web .tl span{font-size:16px;margin-left:10px}
.st-bubbles .prog{position:absolute;left:40px;right:40px;top:476px;text-align:center;font-size:15px;color:var(--mut)}
.st-bubbles.m-web .prog{left:440px;right:auto;width:400px;top:510px}
.st-bubbles .prog i{display:block;height:12px;border-radius:6px;background:#EDF2F8;margin-bottom:10px;overflow:hidden}
.st-bubbles .prog u{display:block;height:100%;background:var(--am);border-radius:6px}
.st-bubbles .side,.st-bubbles .rcol{position:absolute;top:84px;bottom:24px;width:260px;background:rgba(255,255,255,.78);border:1.5px solid #E1EBF7;border-radius:26px;padding:20px 18px;box-shadow:0 20px 50px -34px rgba(15,27,45,.4);z-index:20}
.st-bubbles .side{left:24px}.st-bubbles .rcol{right:24px}
.st-bubbles .side h3,.st-bubbles .rcol h3{margin:0;font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px}
.st-bubbles .side h3 .isk-ic,.st-bubbles .rcol h3 .isk-ic{color:var(--az)}
.st-bubbles .sd{margin:4px 0 0;font-size:13px;color:var(--mut)}
.st-bubbles .fbody{position:absolute;left:18px;right:18px;top:92px;bottom:18px}
.st-bubbles .fem{position:absolute;inset:0 0 40px;border:2px dashed #CFDDF0;border-radius:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;color:var(--mut);font-size:14px;padding:20px}
.st-bubbles .fem i{width:60px;height:60px;border-radius:50%;background:#EEF5FF;color:var(--az);display:grid;place-items:center}
.st-bubbles .fb{position:absolute;inset:0;display:flex;flex-direction:column;gap:6px}
.st-bubbles .ff{display:flex;align-items:center;gap:10px;padding-bottom:10px;border-bottom:1.5px solid #E6EEF8;margin-bottom:2px}
.st-bubbles .ff i{width:48px;height:48px;border-radius:50%;background-size:cover;background-position:center;flex:none;border:2px solid #fff;box-shadow:0 0 0 2px #CFE0FA}
.st-bubbles .ff b{display:block;font-size:15px;font-weight:600}.st-bubbles .ff span{font-size:12px;color:var(--mut)}
.st-bubbles .fr{display:flex;flex-direction:column;padding:6px 10px;border-radius:12px;background:#F5F9FF}
.st-bubbles .fr span{font-size:12px;color:var(--mut)}.st-bubbles .fr b{font-size:15px;font-weight:600}
.st-bubbles .fr.co{background:#FFF2EF}.st-bubbles .fr.co b{color:#D4463A}
.st-bubbles .fr.mi{background:#EAFAF3}.st-bubbles .fr.mi b{color:#0E8C64}
.st-bubbles .fmap{position:relative;height:86px;border-radius:14px;overflow:hidden;flex:none}
.st-bubbles .fmap>svg{position:absolute;inset:0;width:100%;height:100%}
.st-bubbles .fmap .mp{width:26px;height:26px;margin:-24px 0 0 -13px}
.st-bubbles .fnote{position:absolute;left:0;right:0;bottom:0;font-size:12px;color:var(--mut);display:flex;gap:6px;align-items:center}
.st-bubbles .rlist{position:absolute;left:18px;right:18px;top:92px;display:flex;flex-direction:column;gap:10px}
.st-bubbles .ri{display:flex;align-items:center;gap:10px;background:#fff;border-radius:18px;padding:8px 10px 8px 8px;box-shadow:0 0 0 1.5px #E3ECF7}
.st-bubbles .ri i{width:48px;height:48px;border-radius:50%;background-size:cover;background-position:center;flex:none;box-shadow:0 0 0 2px var(--mi)}
.st-bubbles .ri b{display:block;font-size:14px;font-weight:600}.st-bubbles .ri span{font-size:12px;color:var(--mut)}
.st-bubbles .ri em{margin-left:auto;color:var(--mi);flex:none}
.st-bubbles .rem{position:absolute;left:18px;right:18px;top:92px;height:150px;border:2px dashed #CFDDF0;border-radius:20px;display:grid;place-items:center;text-align:center;color:var(--mut);font-size:14px;padding:16px}
.st-bubbles .dall{position:absolute;left:18px;right:18px;bottom:18px}
.st-bubbles .dorb{position:absolute;border-radius:50%;background:radial-gradient(circle at 50% 80%,#DDF7EC 0%,#fff 65%);border:3px solid var(--mi);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;box-shadow:0 0 0 8px rgba(34,195,142,.12),0 24px 50px -20px rgba(34,195,142,.7)}
.st-bubbles .dorb i{width:56px;height:56px;border-radius:50%;background:var(--mi);color:#fff;display:grid;place-items:center}
.st-bubbles .dorb b{font-size:24px;font-weight:600}.st-bubbles .dorb span{font-size:14px;color:var(--mut)}
.st-bubbles .rb{position:absolute;border-radius:50%;background-size:cover;background-position:center;border:4px solid #fff;box-shadow:0 0 0 3px var(--rim),0 14px 24px -12px rgba(15,27,45,.5)}
.st-bubbles .rb p{position:absolute;left:50%;top:100%;width:110px;margin:10px 0 0 -55px;text-align:center;font-size:13px;line-height:1.25}
.st-bubbles .rb p b{display:block;font-weight:600}.st-bubbles .rb p span{color:var(--mut);font-size:12px}
.st-bubbles .prom{position:absolute;left:20px;right:20px;top:496px;border-radius:22px;background:#EFFBF6;border:1.5px solid #BDEBD9;padding:14px 16px;display:flex;gap:12px;align-items:center}
.st-bubbles.m-web .prom{left:390px;right:auto;width:500px;top:520px}
.st-bubbles .prom em{width:40px;height:40px;border-radius:50%;background:var(--mi);color:#fff;display:grid;place-items:center;flex:none}
.st-bubbles .prom b{display:block;font-size:16px;font-weight:600;color:#0B5E43}.st-bubbles .prom span{font-size:13px;color:#2E7A5E}
.st-bubbles .ad{position:absolute;left:20px;right:20px;top:600px;height:118px;border-radius:22px;border:2px dashed #C9D6E8;background:rgba(255,255,255,.7);display:flex;align-items:center;gap:14px;padding:14px}
.st-bubbles.m-web .ad{left:390px;right:auto;width:500px;top:616px;height:100px}
.st-bubbles .ad i{width:84px;height:84px;border-radius:16px;background:#E8EEF6;flex:none}.st-bubbles.m-web .ad i{width:70px;height:70px}
.st-bubbles .ad small{font-size:11px;font-weight:600;letter-spacing:.06em;border:1.5px solid var(--mut);color:var(--mut);border-radius:6px;padding:1px 6px}
.st-bubbles .ad p{margin:6px 0 0;font-size:14px;color:var(--mut)}
.st-bubbles .dnext{position:absolute;left:0;right:0;top:744px;text-align:center;font-size:14px;color:var(--mut)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, app = A.app, web = A.web, E = A.ease;
    const { seg, lerp, set, txt, cls } = A;
    const q = (s, r = S) => r.querySelector(s);
    const mk = (c, parent, html, style) => { const e = A.el('div', c, parent, html); if (style) e.style.cssText = style; return e; };
    const cbox = (x, y, d) => `left:${x - d / 2}px;top:${y - d / 2}px;width:${d}px;height:${d}px`;
    const PH = { portrait: A.photo('portrait'), mountain: A.photo('mountain'), city: A.photo('city'), beach: A.frame(3) };
    const RIMC = { az: '#3D8BFF', co: '#FF7A6B', mi: '#22C38E', am: '#FFB020' };
    const LOGO = s => `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><circle cx="16" cy="23" r="12" fill="#fff" stroke="#3D8BFF" stroke-width="3"/><circle cx="29.5" cy="12" r="7" fill="#fff" stroke="#22C38E" stroke-width="3"/><circle cx="31" cy="31" r="4.5" fill="#fff" stroke="#FF7A6B" stroke-width="3"/><circle cx="7.5" cy="8" r="3" fill="#fff" stroke="#FFB020" stroke-width="2.5"/><path d="M10 19a7 7 0 0 1 6-5" stroke="#3D8BFF" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".45"/></svg>`;
    const MAP = `<svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid slice"><rect width="120" height="120" fill="#E6EEF6"/><path d="M-5 80C30 70 50 95 75 80S110 50 125 58" stroke="#A9CBEF" stroke-width="9" fill="none"/><path d="M0 35h120M35 0v120M80 0l-15 120M0 100h120" stroke="#fff" stroke-width="5"/><path d="M0 58h120" stroke="#FFD98A" stroke-width="6"/><rect x="88" y="10" width="24" height="18" rx="3" fill="#D3E9D6"/><rect x="8" y="104" width="22" height="12" rx="3" fill="#D3E9D6"/></svg>`;
    const L = app
      ? { orb: { x: 195, y: 205, d: 172 }, home: { x: 195, y: 370, d: 270 }, slots: [[122, 480, 172], [300, 440, 118], [290, 600, 124], [120, 672, 128]], lab: 303 }
      : { orb: { x: 640, y: 320, d: 240 }, home: { x: 640, y: 360, d: 400 }, slots: [[410, 215, 180], [872, 205, 150], [880, 445, 140], [408, 480, 150]], lab: 454 };
    const O = L.orb, H = L.home;
    const drift = (seed, t) => ({ x: 5 * Math.sin(t * 0.9 + seed * 1.7) + 2.5 * Math.sin(t * 1.9 + seed), y: 6 * Math.cos(t * 0.75 + seed * 2.3) + 2 * Math.sin(t * 1.6 + seed * 0.7) });

    /* ------------------------------------------------ ambient bubbles */
    const AMB = (app
      ? [[30, 150, 22, 'az'], [366, 122, 14, 'mi'], [14, 470, 18, 'am'], [382, 296, 20, 'co'], [36, 812, 14, 'mi'], [356, 812, 18, 'az'], [292, 248, 12, 'am']]
      : [[318, 104, 20, 'az'], [962, 104, 14, 'mi'], [960, 690, 26, 'co'], [318, 712, 16, 'am'], [612, 736, 12, 'mi'], [700, 96, 10, 'am']]
    ).map(([x, y, d, c], i) => ({ e: mk('ab ' + c, S, '', cbox(x, y, d)), i }));

    /* ------------------------------------------------ header */
    mk('hdr', S, `<span>${LOGO(app ? 30 : 34)}</span><span>Image Swiss Knife</span>${web ? '<small>Smart Drop</small>' : ''}`);
    let pill = null, pillN = null;
    if (app) { pill = mk('rp', S, `${I('layers', 18, 2.2)}<span>Results</span><em>0</em>`); pillN = q('em', pill); }
    else {
      mk('wtop', S);
      mk('wr', S, `<div class="pill">${I('upload', 16, 2.4)}Drop, or paste with <kbd>Ctrl</kbd>+<kbd>V</kbd></div><div class="pill ok">${I('lock', 16, 2.4)}Nothing leaves this computer</div>`);
    }

    /* ------------------------------------------------ home */
    const homeg = mk('lay', S);
    const halos = [app ? 1.1 : 1.16, app ? 1.22 : 1.34].map(k => mk('halo', homeg, '', cbox(H.x, H.y, H.d * k)));
    const horb = mk('horb', homeg, `<div class="ilogo">${LOGO(app ? 110 : 140)}</div><div class="hin"><i class="hic">${I('plus', app ? 32 : 40, 2.6)}</i><b>Give me a photo or video</b><span>${app ? 'Tap here to choose' : 'Drop it here, or click to choose'}</span></div>`, cbox(H.x, H.y, H.d));
    const IB = (app ? [[70, 'az', 46], [320, 'mi', 36], [140, 'am', 28], [260, 'co', 40], [200, 'az', 24]] : [[470, 'az', 60], [820, 'mi', 48], [560, 'am', 36], [740, 'co', 52], [650, 'az', 30]])
      .map(([x, c, d], i) => ({ e: mk('ab ' + c, homeg, '', cbox(x, H.y + (app ? 520 : 420), d)), x, y: H.y + (app ? 520 : 420), i, st: 0.05 + i * 0.12 }));
    homeg.insertBefore(horb, null);
    const ilogo = q('.ilogo', horb), hin = q('.hin', horb);
    const ititle = mk('ititle', homeg, `<b>Image Swiss Knife</b><span>Give it a photo. Get one-tap fixes.</span>`);
    const hhint = mk('hhint', homeg, app ? 'I read it and suggest what to do.' : 'I read the facts and float up the fixes that fit. No menus.');
    const below = [hhint];
    const rts = [];
    if (app) {
      below.push(mk('rl', homeg, 'Or tap a recent one'));
      [PH.portrait, PH.mountain, PH.city, PH.beach].forEach((b, i) => rts.push(mk('rt', homeg, i === 3 ? `<em>${I('play', 10, 2)}0:12</em>` : '', `left:${30 + i * 86}px;background-image:${b}`)));
      below.push(...rts, mk('safe', homeg, `${I('lock', 16, 2.4)}Everything stays on this phone.`));
    }

    /* ------------------------------------------------ app gallery sheet + fly */
    let dim, sheet, g0, fly;
    if (app) {
      dim = mk('dim', S);
      const g = [PH.portrait, PH.mountain, PH.city, PH.beach, A.photo('abstract', { seed: 2 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 5 }), A.frame(8), A.photo('abstract', { seed: 9 })];
      sheet = mk('sheet', S, `<div class="grab"></div><div class="shh"><b>Choose a photo</b><span>Photos and videos</span></div><div class="gal">${g.map((b, i) => `<div class="gt" style="background-image:${b}">${i === 3 || i === 7 ? '<em>0:12</em>' : ''}</div>`).join('')}</div>`);
      g0 = q('.gt', sheet);
      fly = mk('fly', S);
    }
    const dcard = web ? mk('dcard', S, '<i></i><div><b></b><span></span></div>') : null;

    /* ------------------------------------------------ web side panels */
    let fbody, fem, rcItems = [], rem, dall;
    if (web) {
      const side = mk('side', S, `<h3>${I('search', 20, 2.4)}What we found</h3><p class="sd">Plain rules, read on this computer.</p><div class="fbody"><div class="fem"><i>${I('image', 28, 2)}</i><span>Drop a file. Its facts show up here.</span></div><div class="fnote">${I('lock', 14, 2.4)}Nothing is uploaded to read it.</div></div>`);
      fbody = q('.fbody', side); fem = q('.fem', side);
      const rc = mk('rcol', S, `<h3>${I('layers', 20, 2.4)}Recent results</h3><p class="sd">Saved to your Downloads.</p><div class="rem">Results land here after one tap.</div><div class="rlist"></div><div class="dall"><div class="btn">${I('save', 20, 2.4)}Download all 4</div></div>`);
      rem = q('.rem', rc); dall = q('.dall', rc);
      const items = [[PH.portrait, 'Exam form photo', `${D.shrink.size} · JPG · ${D.shrink.px}`], [PH.mountain, D.crop.preset, `${D.crop.ratio} · ${D.crop.px}`], [PH.city, 'City photo', 'Location removed'], [A.frame(5), 'Beach GIF', `${D.video.size} · ${D.video.clip} · loops`]];
      rcItems = items.map(([b, n, m]) => mk('ri', q('.rlist', rc), `<i style="background-image:${b}"></i><div><b>${n}</b><span>${m}</span></div><em>${I('check', 20, 3)}</em>`));
    }

    /* ------------------------------------------------ round helpers */
    const mkOrb = (g, o, img) => {
      const e = mk('orb', g, `<div class="oi" style="background-image:${img}"></div><svg class="ring" viewBox="0 0 100 100"><circle class="tk" cx="50" cy="50" r="48" pathLength="100"/><circle class="pr" cx="50" cy="50" r="48" pathLength="100"/></svg><div class="rip"></div>`, cbox(o.x, o.y, o.d));
      return { e, oi: q('.oi', e), tk: q('.tk', e), pr: q('.pr', e), rip: q('.rip', e), o };
    };
    const mkBubs = (g, specs, rise, to) => specs.map((s, i) => {
      const [x, y, d] = s.at;
      const e = mk(`bb ${s.rim}${s.big ? ' big' : ''}${s.cls ? ' ' + s.cls : ''}`, g, s.html || `${s.ic ? `<i class="bi">${I(s.ic, s.big ? 24 : 20, 2.3)}</i>` : ''}${s.pre ? `<small>${s.pre}</small>` : ''}<b>${s.b}</b>${s.sub ? `<small>${s.sub}</small>` : ''}`, cbox(x, y, d) + `;padding:0 ${Math.round(d * 0.12)}px`);
      return { e, x, y, d, rise: rise + i * 0.13, seed: i * 1.7 + rise, abs: null, gone: null, to, rim: s.rim };
    });
    const bst = (b, t) => {
      const eb = E.outBack(seg(t, b.rise, b.rise + 0.75)), dr = drift(b.seed, t);
      let x = b.x + dr.x, y = b.y + dr.y + (1 - eb) * (app ? 110 : 90), s = 0.55 + 0.45 * eb, o = seg(t, b.rise, b.rise + 0.25);
      if (b.abs != null) {
        const k = E.inOut(seg(t, b.abs + 0.1, b.abs + 0.55));
        x = lerp(x, b.to.x, k); y = lerp(y, b.to.y, k); s *= (1 - 0.8 * k) * (1 - 0.08 * Math.sin(Math.PI * seg(t, b.abs - 0.06, b.abs + 0.16)));
        o *= 1 - seg(t, b.abs + 0.38, b.abs + 0.55);
      }
      if (b.gone != null) { const k = seg(t, b.gone, b.gone + 0.45); o *= 1 - k; s *= 1 - 0.25 * k; y += 50 * E.in(k); }
      return { x, y, s, o };
    };
    const bupd = (b, t, ox = 0, oy = 0, sk = 1) => { const s = bst(b, t); set(b.e, { x: s.x - b.x + ox, y: s.y - b.y + oy, s: s.s * sk, o: s.o }); };
    const bAt = (b, T) => () => { const s = bst(b, T); return { x: s.x, y: s.y }; };
    const choose = (bs, i, T) => bs.forEach((b, j) => { if (j === i) b.abs = T; else b.gone = T + 0.05; });
    const ripple = (rip, t, list) => {
      let k = -1, c = RIMC.az;
      list.forEach(([tt, col]) => { if (t >= tt && t <= tt + 0.8) { k = seg(t, tt, tt + 0.8); c = RIMC[col]; } });
      if (k < 0) { rip.style.opacity = '0'; return; }
      rip.style.borderColor = c; rip.style.transform = `scale(${(1 + 0.38 * E.out(k)).toFixed(3)})`; rip.style.opacity = (0.9 * (1 - k) * (1 - k)).toFixed(3);
    };
    const gulp = (t, list) => list.reduce((s, tt) => s * (1 + 0.07 * Math.sin(Math.PI * seg(t, tt, tt + 0.4))), 1);
    const scan = (r, t, tIn) => {
      const v = A.win(t, tIn + 0.05, tIn + 0.95, 0.15, 0.2);
      r.pr.style.strokeDasharray = '20 80'; r.pr.style.strokeDashoffset = (-(t * 160) % 100).toFixed(1); r.pr.style.opacity = v.toFixed(2); r.tk.style.opacity = '0';
    };
    const progress = (r, t, p, vis) => { r.pr.style.strokeDasharray = `${(p * 100).toFixed(1)} 100`; r.pr.style.strokeDashoffset = '0'; r.pr.style.opacity = vis.toFixed(2); r.tk.style.opacity = vis.toFixed(2); };
    const mkLab = g => mk('olab', g, '', `top:${L.lab}px`);
    const mkChips = (g, list) => {
      if (!app) return null;
      const c = mk('chips', g, list.map(([s, k]) => `<span class="chip ${k || ''}">${k === 'co' ? I('pin', 14, 2.4) : ''}${s}</span>`).join(''));
      return [...c.children];
    };
    const chipsUpd = (cs, t, tIn, hideT) => cs && cs.forEach((c, i) => {
      const a = tIn + 0.35 + i * 0.12, p = E.outBack(seg(t, a, a + 0.35));
      const h = hideT ? seg(t, hideT, hideT + 0.25) : 0;
      set(c, { s: 0.6 + 0.4 * p, y: 8 * h, o: seg(t, a, a + 0.15) * (1 - h) });
    });
    const mkCard = (g, thumb, title, meta, extra) => {
      const c = mk('card', g, `<div class="ct"><i style="background-image:${thumb}"></i><div><b>${title}</b><span>${meta}</span></div><em>${I('check', 18, 3)}</em></div>${extra}<div class="cb"><div class="btn sv"><span class="svl">${I('save', 20, 2.4)}Save</span><span class="svd">${I('check', 20, 3)}Saved</span></div><div class="btn gh">${I('share', 18, 2.2)}Share</div></div>`);
      return { e: c, sv: q('.sv', c) };
    };
    const cardUpd = (c, t, tIn, tSave) => {
      const p = E.outBack(seg(t, tIn, tIn + 0.55));
      set(c.e, { y: (1 - p) * 60, o: seg(t, tIn, tIn + 0.25) });
      cls(c.sv, 'done', t >= tSave + 0.1); A.press(c.sv, t, tSave);
    };
    const orbIn = (r, t, tIn) => web ? 0.6 + 0.4 * E.outBack(seg(t, tIn, tIn + 0.5)) : 1;
    const labUpd = (lab, t, steps) => { let cur = null; steps.forEach(s => { if (t >= s[0]) cur = s; }); txt(lab, cur ? cur[1] : ''); cls(lab, 'q', cur && cur[2]); };

    /* ================================================ ROUND 1 — portrait, shrink */
    const R1 = { tIn: 6.7, out: 16.6, save: 15.3 };
    {
      const g = R1.g = mk('lay', S);
      R1.orb = mkOrb(g, O, PH.portrait);
      R1.scrim = mk('scrim', R1.orb.e, '<b>4.8 MB</b><span>Making it smaller</span>');
      R1.cn = q('b', R1.scrim); R1.cs = q('span', R1.scrim);
      R1.lab = mkLab(g);
      R1.chips = mkChips(g, [[D.portrait.size], ['HEIC'], [D.portrait.dims], ['Has location', 'co']]);
      const sl = L.slots, to = { x: O.x, y: O.y };
      R1.b = mkBubs(g, [
        { at: sl[0], rim: 'az', big: 1, ic: 'shrink', pre: 'Too big for forms?', b: 'Shrink to 200\u00a0KB' },
        { at: sl[1], rim: 'mi', ic: 'convert', b: 'HEIC to JPG' },
        { at: sl[2], rim: 'am', ic: 'crop', b: 'Instagram size' },
        { at: sl[3], rim: 'co', ic: 'pin', b: 'Remove location' }], 7.75, to);
      choose(R1.b, 0, 9.5);
      R1.s = mkBubs(g, [
        { at: sl[0], rim: 'az', big: 1, ic: 'image', b: 'Exam form', sub: 'JPG under 200 KB' },
        { at: sl[1], rim: 'mi', ic: 'phone', b: 'WhatsApp', sub: 'about 500 KB' },
        { at: sl[2], rim: 'am', ic: 'share', b: 'Email', sub: 'under 1 MB' },
        { at: sl[3], rim: 'az', ic: 'ruler', b: 'My own size', sub: 'KB or MB' }], 10.15, to);
      choose(R1.s, 0, 11.0);
      R1.steps = [...mk('steps', g, [['convert', 'HEIC to JPG'], ['crop', D.shrink.px], ['shrink', 'Under 200 KB']].map(([ic, x]) => `<div class="st"><i>${I(ic, 16, 2.4)}</i><span>${x}</span><em>${I('check', 14, 3.2)}</em></div>`).join('')).children];
      R1.conf = A.confetti(g, { x: O.x, y: O.y - 20, count: 30, colors: Object.values(RIMC), seed: 3, power: 430, spread: Math.PI * 1.7, gravity: 650, dur: 1.6 });
      R1.card = mkCard(g, PH.portrait, 'Ready for your exam form', `IMG_2041.jpg · ${D.shrink.size}`,
        `<div class="bars"><span>Before</span><i><u style="width:100%"></u></i><b>${D.portrait.size}</b><span>After</span><i><u class="g"></u></i><b>${D.shrink.size}</b></div><p class="cm">${D.shrink.format} · ${D.shrink.px} · Looks the same</p>`);
      R1.bar = q('u.g', R1.card.e);
    }
    const upd1 = t => {
      const r = R1, { tIn } = r;
      set(r.g, { o: A.win(t, tIn - 0.02, r.out, 0.12, 0.35) });
      if (t < tIn - 0.1 || t > r.out + 0.1) return;
      const shrinkP = E.inOut(seg(t, 11.5, 13.1));
      set(r.orb.e, { s: orbIn(r, t, tIn) * gulp(t, [tIn, 10.0, 11.5]) * (1 - 0.08 * shrinkP) });
      ripple(r.orb.rip, t, [[9.98, 'az'], [11.48, 'az'], [13.1, 'mi']]);
      if (t < 11.3) scan(r.orb, t, tIn); else progress(r.orb, t, shrinkP, A.win(t, 11.4, 14.0, 0.2, 0.4));
      set(r.scrim, { o: seg(t, 11.35, 11.6) });
      txt(r.cn, A.fmtBytes(A.count(t, 11.5, 13.1, D.portrait.bytes, D.shrink.bytes, E.inOut)));
      txt(r.cs, t < 13.1 ? 'Making it smaller' : `was ${D.portrait.size}`);
      labUpd(r.lab, t, [[tIn, 'Reading the facts…'], [tIn + 0.8, D.portrait.file], [9.85, 'Where will you use it?', 1], [11.3, `${D.shrink.target} · ${D.shrink.rule}`]]);
      set(r.lab, { o: seg(t, tIn, tIn + 0.2) * (t > 9.6 && t < 9.85 ? 1 - seg(t, 9.6, 9.75) : 1) });
      chipsUpd(r.chips, t, tIn, 9.55);
      r.b.forEach(b => bupd(b, t)); r.s.forEach(b => bupd(b, t));
      r.steps.forEach((e, i) => {
        const a = 11.5 + i * 0.45;
        set(e, { y: 10 * (1 - E.out(seg(t, a, a + 0.35))), o: seg(t, a, a + 0.25) * (web ? 1 - seg(t, 13.25, 13.45) : 1) });
        set(e.lastChild, { s: E.outBack(seg(t, a + 0.35, a + 0.6)) });
      });
      r.conf.update(t - 13.15);
      cardUpd(r.card, t, 13.4, r.save);
      r.bar.style.width = (100 - 96 * E.inOut(seg(t, 13.8, 14.5))).toFixed(1) + '%';
    };

    /* ================================================ ROUND 2 — mountain, crop */
    const R2 = { tIn: 18.1, out: 23.7, save: 22.4 };
    {
      const g = R2.g = mk('lay', S);
      R2.orb = mkOrb(g, O, PH.mountain);
      R2.lab = mkLab(g);
      R2.chips = mkChips(g, [['3.1 MB'], ['JPG'], ['4000 × 3000'], ['Wide 4:3']]);
      const sl = L.slots;
      R2.b = mkBubs(g, [
        { at: sl[0], rim: 'az', big: 1, ic: 'crop', pre: 'Posting it?', b: 'Instagram post 4:5' },
        { at: sl[1], rim: 'am', ic: 'grid', b: 'Square 1:1' },
        { at: sl[2], rim: 'mi', ic: 'phone', b: 'Story 9:16' },
        { at: sl[3], rim: 'az', ic: 'shrink', b: 'Shrink for email' }], 18.5, { x: O.x, y: O.y });
      choose(R2.b, 0, 19.4);
      const pv = R2.pv = mk('lay', g);
      R2.cv = mk('cv', pv, `<div class="cimg" style="background-image:${PH.mountain}"></div><div class="cfr"></div>`);
      R2.cimg = q('.cimg', R2.cv);
      R2.cl = mk('cl', pv, `${D.crop.preset} · ${D.crop.ratio} <span>· ${D.crop.px}</span>`);
      const pr = [0, 1, 2, 3].map(i => D.crop.presets[i]);
      const shp = p => { const m = 20, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<span class="sh"><i style="width:${w}px;height:${h}px"></i></span>`; };
      R2.pre = mk('pre', pv, pr.map((p, i) => `<div class="pp${i === 0 ? ' on' : ''}">${shp(p)}<div><b>${p.label}</b><span>${p.px}</span></div></div>`).join(''));
      R2.hint = mk('chint', pv, `${I('crop', 18, 2.4)}Drag the photo to move it`);
      R2.done = mk('bigb', pv, `<div class="btn sv"><span class="svl">${I('check', 20, 3)}Save for Instagram</span><span class="svd">${I('check', 20, 3)}Saved</span></div>`);
      R2.sv = q('.sv', R2.done);
    }
    const upd2 = t => {
      const r = R2, { tIn } = r;
      set(r.g, { o: A.win(t, tIn - 0.02, r.out, 0.12, 0.35) });
      if (t < tIn - 0.1 || t > r.out + 0.1) return;
      const ex = seg(t, 19.85, 20.2);
      set(r.orb.e, { s: orbIn(r, t, tIn) * gulp(t, [tIn]) * (1 + 0.5 * E.in(ex)), o: 1 - ex });
      ripple(r.orb.rip, t, [[19.88, 'az']]);
      scan(r.orb, t, tIn);
      labUpd(r.lab, t, [[tIn, 'Reading the facts…'], [tIn + 0.8, 'IMG_1650.JPG']]);
      set(r.lab, { o: seg(t, tIn, tIn + 0.2) * (1 - seg(t, 19.7, 19.9)) });
      chipsUpd(r.chips, t, tIn, 19.7);
      r.b.forEach(b => bupd(b, t));
      const pv = seg(t, 19.95, 20.35);
      set(r.cv, { s: 0.9 + 0.1 * E.outBack(pv), o: pv });
      [r.cl, r.hint, r.done].forEach((e, i) => set(e, { y: 14 * (1 - E.out(seg(t, 20.1 + i * 0.08, 20.5 + i * 0.08))), o: seg(t, 20.1 + i * 0.08, 20.4 + i * 0.08) }));
      [...r.pre.children].forEach((e, i) => set(e, { s: 0.8 + 0.2 * E.outBack(seg(t, 20.15 + i * 0.07, 20.5 + i * 0.07)), o: seg(t, 20.15 + i * 0.07, 20.35 + i * 0.07) }));
      set(r.cimg, { x: (app ? -70 : -56) * E.inOut(seg(t, 20.87, 21.6)) });
      cls(r.sv, 'done', t >= r.save + 0.1); A.press(r.sv, t, r.save);
    };

    /* ================================================ ROUND 3 — city, privacy */
    const R3 = { tIn: 25.0, out: 29.6, save: 28.8, rm: 27.2 };
    {
      const g = R3.g = mk('lay', S);
      const o = R3.o = app ? O : { x: 680, y: 320, d: 230 };
      R3.orb = mkOrb(g, o, PH.city);
      R3.badge = mk('obadge co', R3.orb.e, I('pin', 22, 2.4));
      R3.lab = mk('olab', g, '', `top:${o.y + o.d / 2 + 14}px;${web ? `left:${o.x - 200}px;right:auto;width:400px` : ''}`);
      R3.chips = mkChips(g, [['2.6 MB'], ['JPG'], ['4000 × 3000'], ['Has location', 'co']]);
      const P = (a, w) => (app ? a : w);
      R3.b = mkBubs(g, [
        { at: P([150, 500, 214], [418, 320, 224]), rim: 'co', cls: 'wn', html: `<div class="wa"><div class="mm">${MAP}<i class="mp">${I('pin', 24, 2.6)}</i></div><small>This photo shows where you were:</small><b>${D.place.city}, ${D.place.country}</b><small>${D.place.region}</small></div><div class="wb"><i class="bi">${I('shield', 24, 2.4)}</i><b>Location removed</b><small>Safe to share now</small></div><i class="pulse"></i>` },
        { at: P([292, 655, 136], [905, 430, 150]), rim: 'co', ic: 'eyeoff', b: 'Remove location', sub: 'Keeps the photo' },
        { at: P([322, 442, 100], [880, 200, 116]), rim: 'az', ic: 'shrink', b: 'Shrink to 1\u00a0MB' },
        { at: P([88, 702, 96], [432, 556, 104]), rim: 'mi', ic: 'grid', b: 'Square 1:1' }], 25.4, { x: o.x, y: o.y });
      R3.b[1].abs = R3.rm; R3.b[2].gone = R3.b[3].gone = R3.rm + 0.05;
      R3.wa = q('.wa', R3.b[0].e); R3.wb = q('.wb', R3.b[0].e); R3.pulse = q('.pulse', R3.b[0].e); R3.mp = q('.mp', R3.b[0].e);
      R3.card = mkCard(g, PH.city, 'Safe to share', `${D.place.file} · location removed`, `<p class="cm">Removed the place, the date and the phone name. The picture stays the same.</p>`);
    }
    const upd3 = t => {
      const r = R3, { tIn } = r, o = r.o, done = t >= r.rm + 0.55;
      set(r.g, { o: A.win(t, tIn - 0.02, r.out, 0.12, 0.35) });
      if (t < tIn - 0.1 || t > r.out + 0.1) return;
      set(r.orb.e, { s: orbIn(r, t, tIn) * gulp(t, [tIn, r.rm + 0.5]) });
      ripple(r.orb.rip, t, [[r.rm + 0.5, 'mi']]);
      scan(r.orb, t, tIn);
      cls(r.badge, 'co', !done); cls(r.badge, 'mi', done);
      A.html(r.badge, done ? I('check', 22, 3) : I('pin', 22, 2.4));
      set(r.badge, { s: E.outBack(seg(t, tIn + 0.5, tIn + 0.9)) * (done ? 0.8 + 0.2 * E.outBack(seg(t, r.rm + 0.55, r.rm + 0.9)) : 1) });
      labUpd(r.lab, t, [[tIn, 'Reading the facts…'], [tIn + 0.8, D.place.file]]);
      set(r.lab, { o: seg(t, tIn, tIn + 0.2) });
      chipsUpd(r.chips, t, tIn, null);
      if (r.chips) { const c = r.chips[3]; A.html(c, done ? `${I('check', 14, 3)}No location` : `${I('pin', 14, 2.4)}Has location`); cls(c, 'co', !done); cls(c, 'mi', done); }
      // warning bubble: pulses, then turns mint and settles
      const w = r.b[0], mv = E.inOut(seg(t, r.rm + 0.6, r.rm + 1.2));
      bupd(w, t, app ? (195 - w.x) * mv : 0, app ? (462 - w.y) * mv : 0, (app ? 1 - 0.1 * mv : 1) * gulp(t, [r.rm + 0.5]));
      cls(w.e, 'co', !done); cls(w.e, 'mi', done);
      const sw = seg(t, r.rm + 0.45, r.rm + 0.75);
      set(r.wa, { o: 1 - sw }); set(r.wb, { o: sw, s: 0.8 + 0.2 * E.outBack(sw) });
      const pk = ((t - 26.1) * 0.9) % 1;
      set(r.pulse, { s: 1 + 0.18 * pk, o: t > 26.1 && t < r.rm ? 0.7 * (1 - pk) : 0 });
      set(r.mp, { y: -16 * (1 - E.outBack(seg(t, 25.9, 26.3))) });
      r.b.slice(1).forEach(b => bupd(b, t));
      cardUpd(r.card, t, 28.0, r.save);
    };

    /* ================================================ ROUND 4 — video, GIF */
    const R4 = { tIn: 30.8, out: 35.95, save: 35.35, make: 33.95 };
    {
      const g = R4.g = mk('lay', S);
      R4.orb = mkOrb(g, O, PH.beach);
      R4.vb = mk('obadge am', R4.orb.e, I('play', 18, 2));
      R4.lab = mkLab(g);
      R4.chips = mkChips(g, [['Video'], ['MP4'], ['0:12 long'], ['1920 × 1080']]);
      const sl = L.slots;
      R4.b = mkBubs(g, [
        { at: sl[0], rim: 'am', big: 1, ic: 'film', pre: 'Funny moment?', b: 'Make a GIF' },
        { at: sl[1], rim: 'mi', ic: 'image', b: 'Grab frames' },
        { at: sl[2], rim: 'az', ic: 'shrink', b: 'Shrink video' }], 31.15, { x: O.x, y: O.y });
      choose(R4.b, 0, 31.95);
      const tv = R4.tv = mk('lay tv', g);
      R4.vbox = mk('vbox', tv, `<span class="vbadge">${I('video', 14, 2.2)}<span>${D.video.file}</span></span>`);
      R4.vbt = q('.vbadge span', R4.vbox);
      R4.strip = mk('strip', tv, Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('') + `<div class="selw"><div class="hd hL" style="left:-13px"></div><div class="hd hR" style="right:-13px"></div></div>`);
      R4.selw = q('.selw', R4.strip); R4.hR = q('.hR', R4.strip);
      R4.tl = mk('tl', tv, '<b></b><span></span>');
      R4.tlb = q('b', R4.tl); R4.tls = q('span', R4.tl);
      R4.mk = mk('bigb', tv, `<div class="btn mkb" style="background:var(--am);box-shadow:0 10px 20px -10px rgba(255,176,32,.9);color:#3A2600">${I('film', 20, 2.4)}Make GIF</div>`);
      R4.mkb = q('.mkb', R4.mk);
      R4.prog = mk('prog', tv, '<i><u></u></i><span></span>');
      R4.pu = q('u', R4.prog); R4.ps = q('span', R4.prog);
      R4.card = mkCard(g, A.frame(5), 'Your GIF is ready', `beach-trip.gif · ${D.video.size}`, `<p class="cm">${D.video.clip} · ${D.video.fps} fps · ${D.video.frames} frames · plays on loop</p>`);
      R4.cth = q('.ct i', R4.card.e);
    }
    const upd4 = t => {
      const r = R4, { tIn } = r;
      set(r.g, { o: A.win(t, tIn - 0.02, r.out, 0.12, 0.35) });
      if (t < tIn - 0.1 || t > r.out + 0.1) return;
      const fi = Math.floor(t * 12) % 12;
      r.orb.oi.style.backgroundImage = A.frame(fi);
      const ex = seg(t, 32.3, 32.65);
      set(r.orb.e, { s: orbIn(r, t, tIn) * gulp(t, [tIn]) * (1 + 0.4 * E.in(ex)), o: 1 - ex });
      ripple(r.orb.rip, t, [[32.43, 'am']]);
      scan(r.orb, t, tIn);
      set(r.vb, { s: E.outBack(seg(t, tIn + 0.4, tIn + 0.8)) });
      labUpd(r.lab, t, [[tIn, 'Reading the facts…'], [tIn + 0.8, D.video.file]]);
      set(r.lab, { o: seg(t, tIn, tIn + 0.2) * (1 - seg(t, 32.1, 32.3)) });
      chipsUpd(r.chips, t, tIn, 32.1);
      r.b.forEach(b => bupd(b, t));
      const tvp = seg(t, 32.4, 32.8), made = t >= 34.7;
      set(r.vbox, { s: 0.9 + 0.1 * E.outBack(tvp), o: tvp });
      [r.strip, r.tl].forEach((e, i) => set(e, { y: 14 * (1 - E.out(seg(t, 32.5 + i * 0.1, 32.9 + i * 0.1))), o: seg(t, 32.5 + i * 0.1, 32.8 + i * 0.1) }));
      const loop = 4 + Math.floor(((t * 12) % 36) / 12 * 3);
      r.vbox.style.backgroundImage = A.frame(made ? loop + Math.floor(t * 12) % 3 : 4 + Math.floor(t * 6) % 6);
      r.cth.style.backgroundImage = A.frame(4 + Math.floor(t * 12) % 6);
      txt(r.vbt, made ? `GIF · ${D.video.size} · loops` : D.video.file);
      const hq = E.inOut(seg(t, 33.07, 33.45)), Lp = 4 / 12, Rp = (9 - 2 * hq) / 12;
      r.selw.style.left = (Lp * 100).toFixed(2) + '%'; r.selw.style.width = ((Rp - Lp) * 100).toFixed(2) + '%';
      const end = 9 - 2 * hq;
      txt(r.tlb, `From ${D.video.from} to 0:0${Math.round(end)}`);
      txt(r.tls, `${(end - 4).toFixed(1)} s · ${D.video.fps} fps · ${Math.round((end - 4) * D.video.fps)} frames`);
      const mv = A.win(t, 32.7, 34.1, 0.3, 0.12);
      set(r.mk, { y: 14 * (1 - E.out(seg(t, 32.7, 33.0))), o: mv });
      A.press(r.mkb, t, r.make);
      const pv = A.win(t, 34.05, 34.8, 0.1, 0.15), mp = seg(t, 34.08, 34.65);
      set(r.prog, { o: pv }); r.pu.style.width = (mp * 100).toFixed(1) + '%';
      txt(r.ps, `Making GIF… ${Math.round(mp * D.video.frames)} of ${D.video.frames} pictures`);
      cardUpd(r.card, t, 34.72, r.save);
    };

    /* ================================================ DONE */
    const DN = { t: 36.0 };
    {
      const g = DN.g = mk('lay', S);
      const o = app ? { x: 195, y: 210, d: 172 } : { x: 640, y: 214, d: 200 };
      DN.orb = mk('dorb', g, `<i>${I('check', 32, 3)}</i><b>All done</b><span>${D.done.count} results</span>`, cbox(o.x, o.y, o.d));
      DN.o = o;
      const ry = app ? 380 : 398, rd = app ? 74 : 92, gap = app ? 92 : 136, x0 = (app ? 195 : 640) - gap * 1.5;
      const rs = [[PH.portrait, 'Exam form', D.shrink.size, 'az'], [PH.mountain, 'Instagram', D.crop.ratio + ' post', 'az'], [PH.city, 'City photo', 'No location', 'mi'], [A.frame(5), 'Beach GIF', D.video.size, 'am']];
      DN.rb = rs.map(([b, n, m, c], i) => ({ e: mk('rb ' + c, g, `<p><b>${n}</b><span>${m}</span></p>`, cbox(x0 + i * gap, ry, rd) + `;background-image:${b}`), x: x0 + i * gap, y: ry, rise: 36.45 + i * 0.14, seed: i * 2.1 }));
      DN.prom = mk('prom', g, `<em>${I('lock', 20, 2.4)}</em><div><b>${web ? D.promiseWeb : D.promise}</b><span>${D.done.count} results · ${D.done.saved}</span></div>`);
      DN.ad = mk('ad', g, `<i></i><div><small>Ad</small><p>A sponsor message shows here, only after your work is done.</p></div>`);
      DN.next = app ? mk('dnext', g, 'Drop in the next file any time.') : null;
      DN.conf = A.confetti(g, { x: o.x, y: o.y, count: 40, colors: Object.values(RIMC), seed: 9, power: 520, spread: Math.PI * 1.8, gravity: 700, dur: 1.8 });
    }
    const updDone = t => {
      set(DN.g, { o: seg(t, 35.95, 36.25) });
      if (t < 35.9) return;
      set(DN.orb, { s: 0.5 + 0.5 * E.outBack(seg(t, 36.05, 36.6)), o: seg(t, 36.0, 36.2) });
      DN.rb.forEach(b => { const p = E.outBack(seg(t, b.rise, b.rise + 0.7)), dr = drift(b.seed, t); set(b.e, { x: dr.x * 0.6, y: dr.y * 0.6 + (1 - p) * 60, s: 0.6 + 0.4 * p, o: seg(t, b.rise, b.rise + 0.25) }); });
      set(DN.prom, { y: 16 * (1 - E.out(seg(t, 37.1, 37.6))), o: seg(t, 37.1, 37.4) });
      set(DN.ad, { y: 16 * (1 - E.out(seg(t, 37.7, 38.2))), o: seg(t, 37.7, 38.0) });
      if (DN.next) set(DN.next, { o: seg(t, 38.2, 38.5) });
      DN.conf.update(t - 36.35);
    };

    /* ================================================ web facts panel */
    let FB = [];
    if (web) {
      const blk = (tIn, out, img, name, kind, rows, extra) => {
        const e = mk('fb', fbody, `<div class="ff"><i style="background-image:${img}"></i><div><b>${name}</b><span>${kind}</span></div></div>${rows.map(([l, v, c], i) => `<div class="fr ${c || ''}"><span>${l}</span><b>${v}</b></div>${i === 2 && extra ? extra : ''}`).join('')}`);
        return { e, tIn, out, rows: [...e.querySelectorAll('.fr')], ff: q('.ff', e), fmap: q('.fmap', e) };
      };
      FB = [
        blk(R1.tIn, R1.out, PH.portrait, D.portrait.file, 'Photo · read in 0.2 s', [['Size', D.portrait.size], ['Format', 'HEIC, an iPhone format'], ['Pixels', D.portrait.dims], ['Location', 'Saved in the photo', 'co'], ['Big for forms?', 'Yes, most want under 200 KB']]),
        blk(R2.tIn, R2.out, PH.mountain, 'IMG_1650.JPG', 'Photo · read in 0.1 s', [['Size', '3.1 MB'], ['Format', 'JPG'], ['Pixels', '4000 × 3000'], ['Shape', 'Wide, 4:3'], ['Location', 'None']]),
        blk(R3.tIn, R3.out, PH.city, D.place.file, 'Photo · read in 0.1 s', [['Size', '2.6 MB'], ['Format', 'JPG'], ['Location', `${D.place.city}, ${D.place.country}`, 'co'], ['Taken', D.place.when, 'co'], ['Phone', D.place.device, 'co']], `<div class="fmap">${MAP}<i class="mp">${I('pin', 26, 2.6)}</i></div>`),
        blk(R4.tIn, R4.out, PH.beach, D.video.file, 'Video · read in 0.3 s', [['Kind', 'Video with sound'], ['Length', D.video.len], ['Format', 'MP4'], ['Pixels', '1920 × 1080'], ['Good for', 'GIF, frames, smaller video']]),
        blk(36.0, 41, A.photo('abstract', { seed: 4 }), 'This visit', 'Four files, four taps', [['Results made', String(D.done.count)], ['Space saved', D.done.saved.replace(' saved', '')], ['Uploaded', '0 bytes', 'mi'], ['Menus opened', 'None']]),
      ];
    }
    const updFacts = t => {
      let any = 0;
      FB.forEach((b, k) => {
        const v = A.win(t, b.tIn + 0.1, b.out, 0.25, 0.3); any = Math.max(any, v);
        set(b.e, { o: v });
        if (v <= 0) return;
        set(b.ff, { y: 10 * (1 - E.out(seg(t, b.tIn + 0.1, b.tIn + 0.5))) });
        b.rows.forEach((r, i) => { const a = b.tIn + 0.35 + i * 0.12; set(r, { x: 16 * (1 - E.out(seg(t, a, a + 0.35))), o: seg(t, a, a + 0.25) }); });
        if (k === 2) {
          const done = t >= R3.rm + 0.55;
          b.rows.slice(2).forEach(r => { cls(r, 'co', !done); cls(r, 'mi', done); });
          txt(q('b', b.rows[2]), done ? 'Removed' : `${D.place.city}, ${D.place.country}`);
          txt(q('b', b.rows[3]), done ? 'Removed' : D.place.when);
          txt(q('b', b.rows[4]), done ? 'Removed' : D.place.device);
          b.fmap.style.filter = `grayscale(${seg(t, R3.rm + 0.4, R3.rm + 0.8)})`; set(q('.mp', b.fmap), { o: 1 - seg(t, R3.rm + 0.4, R3.rm + 0.7), y: -14 * (1 - E.outBack(seg(t, 25.6, 26.0))) });
          set(b.fmap, { o: seg(t, 25.6, 25.9) });
        }
      });
      set(fem, { o: 1 - any });
    };

    /* ================================================ pick: home, sheet, fly, drag */
    const rounds = [R1, R2, R3, R4];
    const pickT = app ? [6.0, 17.5, 24.4, 30.2] : [5.5, 17.2, 24.15, 29.95];
    const hEnd = i => (app && i ? pickT[i] + 0.45 : rounds[i].tIn - 0.05);
    const homeVis = t => Math.max(A.win(t, -1, hEnd(0), 0.1, 0.3), A.win(t, R1.out - 0.15, hEnd(1), 0.3, 0.3), A.win(t, R2.out - 0.15, hEnd(2), 0.3, 0.3), A.win(t, R3.out - 0.15, hEnd(3), 0.3, 0.3));
    const updHome = t => {
      set(homeg, { o: homeVis(t) });
      const pop = E.outBack(seg(t, 0.15, 0.95));
      const hot = web && rounds.some((r, i) => t > r.tIn - 0.45 && t < r.tIn);
      cls(horb, 'hot', hot);
      set(horb, { s: (t < 2.4 ? (0.4 + 0.6 * pop) * gulp(t, IB.map(b => b.st + 0.85)) : 1) * (hot ? 1.03 : 1) * (app ? 1 - 0.05 * Math.sin(Math.PI * seg(t, 4.52, 4.76)) : 1) * (1 + 0.012 * Math.sin(t * 1.6)), o: seg(t, 0.1, 0.35) });
      halos.forEach((h, i) => set(h, { s: 1 + 0.02 * Math.sin(t * 1.3 + i * 1.4), o: seg(t, 0.6 + i * 0.2, 1.1 + i * 0.2) }));
      IB.forEach(b => {
        const p = E.inOut(seg(t, b.st, b.st + 0.95));
        set(b.e, { x: (H.x - b.x) * p + 34 * Math.sin(p * Math.PI) * (b.i % 2 ? 1 : -1), y: (H.y - b.y) * p, s: 1 - 0.8 * seg(p, 0.7, 1), o: seg(t, b.st, b.st + 0.2) * (1 - seg(p, 0.86, 1)) });
      });
      const sw = seg(t, 2.0, 2.3), sw2 = seg(t, 2.25, 2.6);
      set(ilogo, { s: 0.8 + 0.2 * E.outBack(seg(t, 0.3, 1.0)), o: 1 - sw });
      set(hin, { s: 0.9 + 0.1 * E.out(sw2), o: sw2 });
      set(ititle, { y: 14 * (1 - E.out(seg(t, 1.25, 1.8))), o: seg(t, 1.25, 1.6) * (1 - seg(t, 2.0, 2.3)) });
      if (web) set(hhint, { o: seg(t, 2.4, 2.75) * (1 - Math.max(...rounds.map((r, i) => A.win(t, pickT[i] - 0.5, r.tIn + 0.3, 0.3, 0.1)))) });
      else below.forEach((e, i) => set(e, { y: t < 4 ? 14 * (1 - E.out(seg(t, 2.4 + i * 0.07, 2.9 + i * 0.07))) : 0, o: t < 4 ? seg(t, 2.4 + i * 0.07, 2.75 + i * 0.07) : 1 }));
      rts.forEach((e, i) => A.press(e, t, pickT[i]));
      const big = app ? Math.max(A.win(t, 19.8, 23.75, 0.3, 0.3), A.win(t, 32.2, 36.0, 0.3, 0.3)) : 0;
      AMB.forEach(a => { const p = E.out(seg(t, 0.05 + a.i * 0.12, 1.3 + a.i * 0.12)), dr = drift(a.i * 3.1, t); set(a.e, { x: dr.x * 1.4, y: dr.y * 1.6 + (1 - p) * 260, o: p * (1 - big) }); });
      if (pillN) {
        const n = rounds.filter(r => t >= r.save + 0.7).length;
        txt(pillN, String(n)); cls(pillN, 'on', n > 0);
        set(pill, { s: rounds.reduce((s, r) => s * (1 + 0.12 * Math.sin(Math.PI * seg(t, r.save + 0.6, r.save + 0.9))), 1) });
      }
      if (web) {
        rcItems.forEach((e, i) => { const a = rounds[i].save + 0.6; set(e, { x: 20 * (1 - E.outBack(seg(t, a, a + 0.45))), o: seg(t, a, a + 0.2) }); });
        set(rem, { o: 1 - seg(t, R1.save + 0.5, R1.save + 0.7) });
        set(dall, { y: 12 * (1 - E.out(seg(t, 36.8, 37.2))), o: seg(t, 36.8, 37.1) });
      }
    };
    const rectOf = e => { const r = e.getBoundingClientRect(), s = S.getBoundingClientRect(), k = s.width / A.W || 1; return { x: (r.left - s.left) / k, y: (r.top - s.top) / k, w: r.width / k, h: r.height / k }; };
    const updPickApp = t => {
      const up = E.out(seg(t, 4.75, 5.15)), dn = E.inOut(seg(t, 6.12, 6.5));
      const sv = up * (1 - dn);
      set(sheet, { y: (1 - sv) * 480, o: sv > 0.001 ? 1 : 0 });
      set(dim, { o: sv });
      cls(g0, 'sel', t >= 6.0); A.press(g0, t, 6.0);
      // flying thumb into the circle
      let k = -1;
      rounds.forEach((r, i) => { if (t >= pickT[i] + 0.08 && t < r.tIn + 0.05) k = i; });
      if (k < 0) { set(fly, { o: 0 }); return; }
      const r = rounds[k], src = rectOf(k === 0 ? g0 : rts[k]);
      const p = E.inOut(seg(t, pickT[k] + 0.12, r.tIn)), d = lerp(src.w, O.d, p);
      const cx = lerp(src.x + src.w / 2, O.x, p), cy = lerp(src.y + src.h / 2, O.y, p) - 40 * Math.sin(Math.PI * p);
      fly.style.cssText = `left:${(cx - d / 2).toFixed(1)}px;top:${(cy - d / 2).toFixed(1)}px;width:${d.toFixed(1)}px;height:${d.toFixed(1)}px;border-radius:${lerp(k === 0 ? 16 : 20, d / 2, p).toFixed(1)}px;background-image:${k === 3 ? A.frame(Math.floor(t * 12) % 12) : r.orb.oi.style.backgroundImage}`;
      set(fly, { o: 1 });
    };
    const DRAG = [[PH.portrait, D.portrait.file, D.portrait.size], [PH.mountain, 'IMG_1650.JPG', '3.1 MB'], [PH.city, D.place.file, '2.6 MB'], [PH.beach, D.video.file, `Video · ${D.video.len}`]];
    const dStart = { x: 820, y: 712 };
    const dPos = t => {
      let k = 0;
      rounds.forEach((r, i) => { if (t >= pickT[i] - 1.0) k = i; });
      const r = rounds[k], h = pickT[k];
      const rise = E.out(seg(t, h - 0.8, h - 0.05)), p = E.inOut(seg(t, h + 0.12, r.tIn));
      return { k, x: lerp(dStart.x + 60, dStart.x, rise) + (O.x - dStart.x) * p, y: lerp(dStart.y + 120, dStart.y, rise) + (O.y - dStart.y) * p, s: 1 - 0.25 * p, r: 5 * (1 - rise) - 3 * Math.sin(Math.PI * p), o: seg(t, h - 0.8, h - 0.5) * (1 - seg(t, r.tIn - 0.05, r.tIn + 0.1)) };
    };
    const updPickWeb = t => {
      const d = dPos(t);
      const [img, n, s] = DRAG[d.k];
      const di = dcard.firstChild; di.style.backgroundImage = d.k === 3 ? A.frame(Math.floor(t * 12) % 12) : img;
      txt(q('b', dcard), n); txt(q('span', dcard), s);
      set(dcard, { x: d.x, y: d.y, s: d.s, r: d.r, o: d.o });
    };

    /* ================================================ bubble hint */
    const BH = [[R1.tIn + 1.4, 9.55, 'Tap a bubble. One tap does the whole job.', 'az'], [10.5, 11.05, 'Pick where it will go.', 'az'], [R2.tIn + 0.6, 19.45, 'Tap a bubble. One tap does the whole job.', 'az'], [R3.tIn + 0.7, R3.rm + 0.05, 'Coral bubbles warn you before you share.', 'co'], [R4.tIn + 0.5, 32.0, 'Tap a bubble. One tap does the whole job.', 'am']];
    const bh = mk('bh', S, '<i></i><span></span>');
    const updHint = t => {
      let v = 0, cur = BH[0];
      BH.forEach(h => { const w = A.win(t, h[0], h[1], 0.3, 0.2); if (w > v) { v = w; cur = h; } });
      txt(bh.lastChild, cur[2]); bh.firstChild.className = cur[3];
      set(bh, { o: v, y: 8 * (1 - v) });
    };

    /* ================================================ pointer */
    const K = [];
    if (app) K.push({ t: 4.6, at: horb, tap: true }, { t: 6.0, at: g0, tap: true });
    else K.push({ t: pickT[0], at: dcard }, { t: R1.tIn, at: dcard, drag: true, move: R1.tIn - pickT[0] - 0.12 });
    K.push({ t: 9.5, at: bAt(R1.b[0], 9.5), tap: true }, { t: 11.0, at: bAt(R1.s[0], 11.0), tap: true }, { t: R1.save, at: R1.card.sv, tap: true });
    [R2, R3, R4].forEach((r, j) => {
      const i = j + 1;
      if (app) K.push({ t: pickT[i], at: rts[i], tap: true });
      else K.push({ t: pickT[i], at: dcard }, { t: r.tIn, at: dcard, drag: true, move: r.tIn - pickT[i] - 0.12 });
      if (r === R2) K.push({ t: 19.4, at: bAt(R2.b[0], 19.4), tap: true }, { t: 20.6, at: R2.cimg, hold: 0.15 }, { t: 21.6, at: R2.cimg, drag: true, move: 1.0 }, { t: R2.save, at: R2.sv, tap: true });
      if (r === R3) K.push({ t: R3.rm, at: bAt(R3.b[1], R3.rm), tap: true }, { t: R3.save, at: R3.card.sv, tap: true });
      if (r === R4) K.push({ t: 31.95, at: bAt(R4.b[0], 31.95), tap: true }, { t: 32.85, at: R4.hR, hold: 0.1 }, { t: 33.45, at: R4.hR, drag: true, move: 0.6 }, { t: R4.make, at: R4.mkb, tap: true }, { t: R4.save, at: R4.card.sv, tap: true });
    });
    A.pointer(K);

    return {
      update(t) {
        updHome(t);
        if (app) updPickApp(t); else updPickWeb(t);
        upd1(t); upd2(t); upd3(t); upd4(t); updDone(t); updHint(t);
        if (web) updFacts(t);
      },
    };
  },
});

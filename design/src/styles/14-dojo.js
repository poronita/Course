/* Style 14 — Panda Dojo. Sensei Panda trains you, belt by belt. Round 2. */
ISK.register({
  id: 'dojo', order: 14, round: 2, name: 'Panda Dojo',
  tagline: 'Sensei Panda trains you, one kata and one belt at a time.',
  concept: 'A calm young panda in a charcoal gi runs the dojo. Every tool is a kata with three mastery pips, every job ends with a vermilion hanko stamp, and every XP gain ties you closer to the next belt. Tap Sensei and his staff spins out five ink seals. The look is cool white paper, sumi ink and one red accent.',
  wins: [
    'A premium, grown-up character world: belts, katas, stamps and a bamboo streak make progress easy to read without gimmicks.',
    'Quick menu from Sensei and a smart suggestion cut most jobs to two or three taps.',
    'Waits become small rituals: ink drops, falling petals and a breath ring fill the time.',
  ],
  risks: [
    'The martial-arts theme must stay respectful and generic, so copy avoids real Japanese text.',
    'A fully rigged panda with many moods is the costliest illustration to build and keep consistent.',
  ],
  scores: { simple: 4, fun: 4, wow: 4, pro: 5, game: 4, effort: 4 },
  palette: ['#F7F8FA', '#14161A', '#D7352B', '#5E8C61', '#EBB832', '#3C6FB6'],
  type: 'Shippori Mincho for headings and numerals, Plus Jakarta Sans for all UI text at 12 to 15 px.',
  motion: 'Shoji screens slide shut and open between tools, ink drops spread for reveals, and every finish ends with a hanko stamp slam.',
  notes: {
    intro: 'An ink drop spreads into a dark moon. Sensei dozes, a bell rings, he wakes, bows and walks to his corner.',
    pick: 'A shoji door slides across. On the phone you tap a photo, on the web you drag a file onto the mat. Sensei is surprised, then pumps a fist.',
    shrink: 'One tap on Exam form. Ink drops spiral into the photo, the bar fills and 4.8 MB becomes 196 KB. A stamp slams and the belt stripe fills.',
    crop: 'Tap Sensei and his staff spins out five ink seals. Crop floods the screen as an iris, then one tap picks 4:5 and a brush stroke seals the crop.',
    privacy: 'Sensei notices a place and asks. Pune, India drops a pin, the warning shows, and Remove wipes it with a green bar and a SAFE stamp.',
    gif: 'A bubble suggests the GIF kata. Trim 0:04 to 0:07, then petals fall into the bar while 36 frame cells light up.',
    done: 'Four results, XP counted, the green belt is retied as blue, the bamboo grows a segment, and one Ad slot waits at the end.',
  },
  extras: [
    ['Character', 'Sensei Panda: 8 moods (serene, happy, wink, surprised, thinking, focus, celebrate, sleepy), jointed arms, bamboo staff, twitching ears, eyes that follow the pointer. Tap him: the staff spins and five ink seals fan out.'],
    ['Game system', 'Belt ranks White to Black with a belt-tying level up, 3 mastery pips per kata, a bamboo-stalk streak, a daily goal of 4 katas, hanko honour stamps.'],
    ['Progress bars', 'Three library bars via A.bars (recoloured to ink, vermilion and bamboo), plus a custom calligraphy brush bar. Waits add converging ink drops, falling petals and a breath ring.'],
    ['Screen changes', 'Sliding shoji doors, curtain, ink-drop iris, and blinds for results.'],
    ['Finish effect', 'Vermilion hanko stamp slams with a shake and ring, petals and sparks burst, the XP strip fills and flies to the belt chip.'],
    ['Taps to finish', 'Shrink 4 · Crop 4 · Place 2 · GIF 2 · Save all 1 = 13 taps'],
  ],
  statusBar: (t, m) => (m === 'app' && t < 2.9 ? 'light' : 'dark'),
  css: `
.st-dojo{--bg:#F7F8FA;--wash:#EDEFF3;--wash2:#E1E4EA;--ink:#14161A;--ink2:#3A3F4A;--mut:#6A7280;--line:#DADEE5;--red:#D7352B;--redl:#FBEAE8;--bam:#5E8C61;--bamd:#3F6A43;--baml:#E6F0E7;--belt:#4E9A5B;--fy:664px;background:var(--bg);color:var(--ink);font:500 13px/1.3 "Plus Jakarta Sans",system-ui,sans-serif}
.st-dojo.m-web{--fy:552px}
.st-dojo b{font-weight:700}.st-dojo .mn{font-family:"Shippori Mincho","Hiragino Mincho ProN",serif;font-weight:700;letter-spacing:-.01em}
.st-dojo svg{display:block}.st-dojo kbd{font:600 10px/1 "Plus Jakarta Sans";background:#fff;border:1px solid var(--line);border-bottom-width:2px;border-radius:5px;padding:3px 5px;color:var(--mut)}
.st-dojo .card{background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 24px -18px rgba(20,22,26,.35)}
.st-dojo .is-pressed{filter:brightness(.93);transform:translateY(1px) scale(.985)}
.st-dojo .pg{position:absolute;inset:0;overflow:hidden;isolation:isolate;background:radial-gradient(70% 36% at 88% 8%,rgba(20,22,26,.05),transparent 70%),linear-gradient(180deg,var(--bg) 0,var(--bg) var(--fy),#EEF0F4 var(--fy),#E6E9EF 100%)}
.st-dojo .pg::before{content:"";position:absolute;left:0;right:0;top:var(--fy);height:1px;background:var(--line)}
.st-dojo .in{position:absolute;left:18px;right:18px;top:104px;bottom:calc(100% - var(--fy) + 14px);display:flex;flex-direction:column;gap:12px}
.st-dojo.m-web .in{left:30px;right:30px;top:30px}
.st-dojo .hh{font-size:26px;line-height:1.1;margin:0}.st-dojo .sb{color:var(--mut);margin:3px 0 0;font-size:13px}
.st-dojo .eb{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}
.st-dojo .cta{position:absolute;left:144px;right:18px;bottom:36px;height:46px;border-radius:12px;background:var(--ink);color:#fff;font-weight:700;font-size:14.5px;display:flex;align-items:center;justify-content:center;gap:9px;box-shadow:0 3px 0 #000,0 14px 22px -12px rgba(20,22,26,.6)}
.st-dojo .cta.red{background:var(--red);box-shadow:0 3px 0 #9E2018,0 14px 22px -12px rgba(215,53,43,.6)}
.st-dojo .cta.off{background:var(--wash2);color:var(--mut);box-shadow:0 3px 0 #C9CDD6}
.st-dojo.m-web .cta{left:auto;right:30px;width:270px;bottom:34px}
.st-dojo .cta kbd{background:rgba(255,255,255,.16);border-color:transparent;color:#fff}
/* header and chips */
.st-dojo .hdr{position:absolute;left:16px;right:16px;top:54px;height:38px;display:flex;align-items:center;gap:10px;z-index:30}
.st-dojo .rk{display:flex;align-items:center;gap:9px;height:38px;padding:0 12px 0 9px;border-radius:13px;background:#fff;border:1px solid var(--line);box-shadow:0 8px 18px -14px rgba(20,22,26,.4)}
.st-dojo .rk .rkn{font-size:13px;line-height:1.1;display:block}.st-dojo .rk .xbar{width:74px;margin-top:4px}
.st-dojo .xbar{height:5px;border-radius:3px;background:var(--wash2);overflow:hidden}.st-dojo .xbar i{display:block;height:100%;border-radius:3px;background:var(--belt);box-shadow:inset 0 0 0 1px rgba(20,22,26,.35)}
.st-dojo .hsp{flex:1}.st-dojo .hchip{display:flex;align-items:center;gap:7px;height:38px;padding:0 11px;border-radius:13px;background:#fff;border:1px solid var(--line);font-weight:700;font-size:13px}
.st-dojo .hchip .stk{height:26px;width:auto}.st-dojo .dg{display:inline-flex;gap:4px}.st-dojo .dg i{width:9px;height:9px;border-radius:50%;background:var(--wash2);box-shadow:inset 0 0 0 1.5px #C0C6D0}.st-dojo .dg i.on{background:var(--red);box-shadow:none}
.st-dojo .pips{display:inline-flex;gap:3px}.st-dojo .pips i{width:8px;height:8px;border-radius:50%;border:1.5px solid #AEB4BF}.st-dojo .pips i.on{background:var(--ink);border-color:var(--ink)}.st-dojo .pips.full i.on{background:var(--red);border-color:var(--red)}
/* home */
.st-dojo .rkc{display:flex;align-items:center;gap:14px;padding:12px 14px}.st-dojo .rkt{flex:1}.st-dojo .rkt .rkn{font-size:19px;display:block;line-height:1.1}.st-dojo .rkt .rkx{font-size:12px;color:var(--mut);display:block;margin:2px 0 7px}
.st-dojo .two{display:flex;gap:10px}.st-dojo .two>.card{flex:1;display:flex;align-items:center;gap:12px;padding:10px 12px;min-height:84px}.st-dojo .stats .big{font-size:17px;white-space:nowrap}.st-dojo .stats .stk{height:50px;width:auto}.st-dojo .two b.big{font-size:22px;display:block;line-height:1}.st-dojo .two span.s{font-size:12px;color:var(--mut)}
.st-dojo .klist{display:flex;flex-direction:column;gap:7px}.st-dojo .kr{display:flex;align-items:center;gap:12px;height:50px;padding:0 12px 0 8px}
.st-dojo .kr .kn{flex:1;line-height:1.15}.st-dojo .kr .kn b{display:block;font-size:14px}.st-dojo .kr .kn span{font-size:12px;color:var(--mut)}
.st-dojo .si{width:34px;height:34px;border-radius:50%;flex:none;display:grid;place-items:center;color:#fff;background:radial-gradient(circle at 35% 28%,#4B515C,#14161A 72%);box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.08)}
.st-dojo .eh{font-size:10.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin:2px 0 -2px}
/* gallery, mat, facts */
.st-dojo .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.st-dojo .th{position:relative;aspect-ratio:1;border-radius:12px;background-size:cover;background-position:center}
.st-dojo .th.sel{box-shadow:0 0 0 3px var(--bg),0 0 0 5px var(--red)}.st-dojo .th .ck{position:absolute;right:-6px;top:-6px;width:26px;height:26px;border-radius:50%;background:var(--red);color:#fff;display:grid;place-items:center;box-shadow:0 4px 10px -2px rgba(215,53,43,.6)}
.st-dojo .facts{display:flex;align-items:center;gap:11px;padding:8px 12px 8px 8px}.st-dojo .facts i{width:42px;height:42px;border-radius:9px;background-size:cover;background-position:center;flex:none}.st-dojo .facts b{display:block;font-size:13.5px}.st-dojo .facts span{color:var(--mut);font-size:12px}
.st-dojo .mat{position:absolute;left:30px;right:30px;top:30px;bottom:calc(100% - var(--fy) + 14px);border-radius:18px;border:1.5px dashed #B8BEC9;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center}
.st-dojo .mat.hot{border-color:var(--red);background:rgba(215,53,43,.04)}
.st-dojo .mat .ens{width:190px;height:190px}.st-dojo .mat h3{margin:0;font-size:26px}.st-dojo .mat p{margin:0;color:var(--mut);max-width:360px}
.st-dojo .mdrop{position:absolute;left:50%;top:50%;width:230px;margin:-176px 0 0 -115px;padding:8px;background:#fff;border-radius:14px;border:1px solid var(--line);box-shadow:0 24px 40px -20px rgba(20,22,26,.5)}.st-dojo .mdrop i{display:block;height:290px;border-radius:9px;background-size:cover;background-position:center}.st-dojo .mdrop span{display:block;margin:7px 2px 1px;font-weight:700}.st-dojo .mdrop small{color:var(--mut);margin:0 2px}
.st-dojo .fcard{position:absolute;left:0;top:0;width:164px;padding:7px;background:#fff;border-radius:12px;border:1px solid var(--line);box-shadow:0 22px 36px -16px rgba(20,22,26,.55);z-index:70}.st-dojo .fcard i{display:block;height:112px;border-radius:8px;background-size:cover;background-position:center}.st-dojo .fcard span{display:block;margin:6px 2px 0;font-weight:700;font-size:12px}
/* purpose */
.st-dojo .ops{display:flex;flex-direction:column;gap:8px}.st-dojo .op{display:flex;align-items:center;gap:12px;min-height:56px;padding:8px 12px 8px 10px;position:relative}
.st-dojo .op b{display:block;font-size:14px}.st-dojo .op span{font-size:12px;color:var(--mut)}.st-dojo .op .oi{width:36px;height:36px;border-radius:10px;background:var(--wash);display:grid;place-items:center;flex:none}
.st-dojo .op em{white-space:nowrap;font-size:9px;padding:3px 6px;font-style:normal;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--red);background:var(--redl);padding:3px 7px;border-radius:6px;margin-left:auto}
.st-dojo .op u{width:22px;height:22px;border-radius:50%;border:1.6px solid #B8BEC9;flex:none;margin-left:4px;display:grid;place-items:center;text-decoration:none;color:#fff}
.st-dojo .op.on{border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink)}.st-dojo .op.on u{background:var(--red);border-color:var(--red)}
.st-dojo .wprev{display:none}.st-dojo.m-web .wprev{display:block;width:250px;flex:none}.st-dojo .wprev i{display:block;height:320px;border-radius:12px;background-size:cover;background-position:center;box-shadow:0 20px 34px -18px rgba(20,22,26,.5)}
.st-dojo.m-web .pPurp .in{flex-direction:row;gap:34px;align-items:flex-start}.st-dojo.m-web .pPurp .pcol{flex:1}.st-dojo.m-web .pPurp .facts{display:none}.st-dojo .pcol{display:flex;flex-direction:column;gap:12px}
/* process */
.st-dojo .ptag{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);text-align:center}
.st-dojo .pst{position:relative;height:232px;flex:none}.st-dojo.m-web .pst{height:196px}.st-dojo.m-web .cells{max-width:420px;margin:0 auto;width:100%}.st-dojo.m-web .gst{height:130px}.st-dojo.m-web .in{gap:8px}.st-dojo .pst canvas{position:absolute;left:50%;top:0;transform:translateX(-50%)}
.st-dojo .pcd{position:absolute;left:50%;top:50%;width:132px;height:170px;margin:-85px 0 0 -66px;border-radius:12px;background-size:cover;background-position:center;border:5px solid #fff;box-shadow:0 20px 32px -14px rgba(20,22,26,.55)}
.st-dojo .sz{font-size:46px;text-align:center;line-height:1;font-variant-numeric:tabular-nums}.st-dojo .szs{text-align:center;color:var(--mut);margin-top:-6px}
.st-dojo .bbox{display:grid;place-items:center;height:112px;flex:none}.st-dojo .stg{display:flex;justify-content:space-between;align-items:center;font-size:13px}.st-dojo .stg b{font-size:14px}.st-dojo .stg .pc{font-weight:800;font-variant-numeric:tabular-nums;color:var(--red)}
.st-dojo .br{position:absolute;left:0;top:0;width:100px;height:100px;border-radius:50%;border:1.5px solid rgba(20,22,26,.4);background:radial-gradient(circle,rgba(94,140,97,.14),transparent 70%);z-index:51;pointer-events:none}
.st-dojo .brt{position:absolute;left:0;top:0;z-index:51;font-size:11px;font-weight:700;color:var(--mut);letter-spacing:.1em;text-transform:uppercase;pointer-events:none;white-space:nowrap}
/* results and stamps */
.st-dojo .rrow{display:flex;gap:16px;align-items:center}.st-dojo .pcw{position:relative;flex:none}.st-dojo .rph{width:122px;height:156px;border-radius:12px;background-size:cover;background-position:center;border:5px solid #fff;box-shadow:0 18px 28px -14px rgba(20,22,26,.5)}
.st-dojo .bignum{font-size:50px;line-height:1;display:block}.st-dojo .was{color:var(--mut);margin-top:4px}.st-dojo .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.st-dojo .tags span{background:var(--wash);border-radius:7px;padding:4px 9px;font-weight:700;font-size:12px}
.st-dojo .hkw{position:absolute;width:66px;height:66px;z-index:6}.st-dojo .in>.hkw{right:0;top:2px}.st-dojo .hkh .hkw{right:14px;top:14px}.st-dojo .hk{width:66px;height:66px;border-radius:7px 10px 8px 11px;background:var(--red);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;box-shadow:inset 0 0 0 2.5px var(--red),inset 0 0 0 4.5px rgba(255,255,255,.88),0 8px 14px -6px rgba(215,53,43,.6);background-image:radial-gradient(circle at 18% 22%,rgba(255,255,255,.55) 0 1px,transparent 1.6px),radial-gradient(circle at 80% 74%,rgba(255,255,255,.5) 0 1.2px,transparent 1.8px),radial-gradient(circle at 66% 20%,rgba(255,255,255,.4) 0 .9px,transparent 1.4px)}
.st-dojo .hk b{font:800 9px/1 "Plus Jakarta Sans";letter-spacing:.14em}.st-dojo .hkr{position:absolute;inset:-4px;border-radius:12px;border:2px solid var(--red);opacity:0}
.st-dojo .cmp{display:grid;grid-template-columns:48px 1fr 54px;gap:9px 10px;align-items:center;padding:12px 14px;font-size:12.5px}.st-dojo .cmp .bs{height:9px;border-radius:5px;background:var(--ink);transform-origin:0 50%}.st-dojo .cmp .bs.r{background:var(--red)}.st-dojo .cmp b{text-align:right}
.st-dojo .mast{display:flex;align-items:center;gap:10px;padding:10px 14px}.st-dojo .mast .pips i{width:11px;height:11px}.st-dojo .mast b{flex:1}.st-dojo .mast em{font-style:normal;font-weight:800;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--red)}
.st-dojo .bst{display:flex;align-items:center;gap:10px;padding:10px 14px}.st-dojo .bst b{color:var(--red);width:58px;font-size:13.5px}.st-dojo .bsb{flex:1;height:10px;border-radius:5px;background:var(--wash2);position:relative;overflow:hidden}.st-dojo .bsb i{position:absolute;left:0;top:0;bottom:0;border-radius:5px;background:var(--belt);box-shadow:inset 0 0 0 1px rgba(20,22,26,.4)}.st-dojo .bsb u{position:absolute;left:4px;right:4px;top:2px;height:2px;border-radius:2px;background:rgba(255,255,255,.55)}.st-dojo .bsl{width:82px;text-align:right;font-size:12px;font-weight:700;color:var(--mut)}
.st-dojo .cta.ok{background:var(--bamd);box-shadow:0 3px 0 #2C4B30,0 14px 22px -12px rgba(63,106,67,.6)}.st-dojo .qs{position:absolute;inset:0;z-index:49;background:rgba(247,248,250,.8);pointer-events:none}
/* crop */
.st-dojo .pre{display:flex;flex-direction:column;gap:7px}.st-dojo .pr{display:flex;align-items:center;gap:12px;height:48px;padding:0 12px}.st-dojo .pr .rt{width:34px;display:grid;place-items:center;flex:none}.st-dojo .pr .rt i{display:block;border:2px solid var(--ink);border-radius:3px;background:var(--wash)}.st-dojo .pr b{display:block;font-size:13.5px}.st-dojo .pr span{font-size:12px;color:var(--mut)}.st-dojo .pr em{margin-left:auto;font-style:normal;font-weight:800;font-size:11px;color:var(--mut)}
.st-dojo .pr.on{border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink)}.st-dojo .pr.on em{color:var(--red)}
.st-dojo.m-web .pre{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.st-dojo .cst{position:relative;height:432px;border-radius:16px;overflow:hidden;background:#14161A;flex:none}.st-dojo.m-web .cst{height:420px}.st-dojo.m-web .cph{width:800px;height:600px;margin:-300px 0 0 -400px}
.st-dojo .cph{position:absolute;left:50%;top:50%;width:580px;height:435px;margin:-217px 0 0 -290px;background-size:cover;background-position:center}
.st-dojo .cfr{position:absolute;left:50%;top:50%;width:290px;height:362px;margin:-181px 0 0 -145px;border:1.5px solid rgba(255,255,255,.9);box-shadow:0 0 0 999px rgba(20,22,26,.64);background:linear-gradient(#fff5,#fff5) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff5,#fff5) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff5,#fff5) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff5,#fff5) 0 66.6%/100% 1px no-repeat}
.st-dojo.m-web .cfr{width:300px;height:375px;margin:-188px 0 0 -150px}
.st-dojo .cfr i{position:absolute;width:20px;height:20px;border:3px solid var(--red)}.st-dojo .cfr i:nth-child(1){left:-3px;top:-3px;border-right:0;border-bottom:0}.st-dojo .cfr i:nth-child(2){right:-3px;top:-3px;border-left:0;border-bottom:0}.st-dojo .cfr i:nth-child(3){left:-3px;bottom:-3px;border-right:0;border-top:0}.st-dojo .cfr i:nth-child(4){right:-3px;bottom:-3px;border-left:0;border-top:0}
.st-dojo .ctag{position:absolute;left:10px;top:10px;background:rgba(255,255,255,.94);border-radius:9px;padding:5px 10px;font-weight:700;font-size:12px;z-index:3}
.st-dojo .mini{position:absolute;left:14px;right:14px;bottom:14px;padding:10px 12px;background:rgba(247,248,250,.97);border-radius:12px;z-index:4;display:flex;flex-direction:column;gap:5px;align-items:center}.st-dojo .mini span{font-weight:700;font-size:12px}
/* place */
.st-dojo .cityc{position:relative;height:250px;border-radius:16px;background-size:cover;background-position:center;overflow:hidden;flex:none}
.st-dojo .cityc .scan{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--red),transparent);box-shadow:0 0 12px var(--red)}.st-dojo .cityc .rg{position:absolute;width:70px;height:70px;border:2px solid #fff;border-radius:50%;margin:-35px 0 0 -35px}
.st-dojo .cityc .tg{position:absolute;left:10px;bottom:10px;background:rgba(255,255,255,.94);border-radius:9px;padding:5px 10px;font-weight:700;font-size:12px}
.st-dojo .mapc{position:relative;height:170px;border-radius:16px;overflow:hidden;flex:none;border:1px solid var(--line)}.st-dojo .mapc svg.mp{position:absolute;inset:0;width:100%;height:100%}
.st-dojo .mpin{position:absolute;left:62%;top:60%;width:34px;height:44px;margin:-44px 0 0 -17px;transform-origin:50% 100%}.st-dojo .mpin svg{width:34px;height:44px}
.st-dojo .ptl{display:flex;align-items:center;gap:12px}.st-dojo .ptl .big{font-size:30px;line-height:1}.st-dojo .kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;padding:11px 14px}.st-dojo .kv span{color:var(--mut)}.st-dojo .kv b{text-align:right}
.st-dojo .warn{display:flex;gap:10px;align-items:center;padding:11px 13px;border-radius:12px;background:var(--redl);border:1px solid #F1C6C1;color:#7A1F18;font-weight:600;line-height:1.25}
.st-dojo.m-web .pPlB .in{flex-direction:row;gap:28px;align-items:flex-start}.st-dojo.m-web .pPlB .mapc{width:300px;height:360px}.st-dojo .pcol2{display:flex;flex-direction:column;gap:12px;flex:1}
.st-dojo .wmap{position:relative;width:176px;height:176px;border-radius:50%;overflow:hidden;margin:0 auto;border:1px solid var(--line)}
.st-dojo .shd{width:104px;height:116px;margin:0 auto;display:block}.st-dojo .saf{display:flex;flex-direction:column;align-items:center;gap:10px;position:relative}
.st-dojo .okp{display:inline-flex;align-items:center;gap:7px;background:var(--baml);color:var(--bamd);font-weight:800;border-radius:999px;padding:6px 13px}
.st-dojo .sf{display:grid;grid-template-columns:auto 1fr auto;gap:8px 12px;padding:12px 14px;align-items:center}.st-dojo .sf s{color:var(--mut)}.st-dojo .sf b{color:var(--bamd)}
/* gif */
.st-dojo .vid{position:relative;height:200px;border-radius:16px;background-size:cover;background-position:center;overflow:hidden;flex:none}.st-dojo.m-web .vid{height:250px}
.st-dojo .vb{position:absolute;left:10px;top:10px;background:rgba(20,22,26,.78);color:#fff;border-radius:8px;padding:4px 9px;font-weight:700;font-size:12px}
.st-dojo .strw{position:relative;padding:20px 0 6px;flex:none}.st-dojo .strip{position:relative;display:flex;height:52px;border-radius:10px;overflow:visible}.st-dojo .strip i{flex:1;background-size:cover;background-position:center}.st-dojo .strip i:first-child{border-radius:10px 0 0 10px}.st-dojo .strip i:last-child{border-radius:0 10px 10px 0}
.st-dojo .selw{position:absolute;top:-4px;bottom:-4px;border:3px solid var(--red);border-radius:9px;box-shadow:0 0 0 999px rgba(247,248,250,.62)}
.st-dojo .sclip{overflow:hidden;border-radius:10px;padding:4px 0;margin:-4px 0}
.st-dojo .hd{position:absolute;top:19px;width:16px;height:60px;margin-left:-8px;border-radius:7px;background:var(--red);box-shadow:0 5px 10px -2px rgba(215,53,43,.55);z-index:3}.st-dojo .hd::after{content:"";position:absolute;left:6px;top:20px;width:4px;height:20px;border-radius:2px;background:rgba(255,255,255,.8)}
.st-dojo .tl{position:absolute;top:0;font-weight:800;font-size:11.5px;transform:translateX(-50%);white-space:nowrap}
.st-dojo .secs{display:flex;align-items:center;gap:10px}.st-dojo .secs b{font-size:19px}.st-dojo .secs span{color:var(--mut)}
.st-dojo .cells{display:grid;grid-template-columns:repeat(12,1fr);gap:5px}.st-dojo .cells i{aspect-ratio:1;border-radius:5px;background:var(--wash2)}.st-dojo .cells i.on{background:var(--ink)}.st-dojo .cells i.n{background:var(--red)}
.st-dojo .gst{position:relative;height:150px;flex:none}.st-dojo .gst canvas{position:absolute;left:50%;top:0;transform:translateX(-50%)}
.st-dojo .gfr{position:absolute;left:50%;top:50%;width:150px;height:102px;margin:-51px 0 0 -75px;border-radius:10px;background-size:cover;background-position:center;border:4px solid #fff;box-shadow:0 14px 24px -12px rgba(20,22,26,.5)}
.st-dojo .gres{position:relative;height:230px;border-radius:16px;background-size:cover;background-position:center;flex:none}.st-dojo.m-web .gres{height:240px}.st-dojo .gres .lp{position:absolute;left:10px;top:10px;background:rgba(20,22,26,.8);color:#fff;border-radius:8px;padding:4px 9px;font-weight:800;font-size:11px;letter-spacing:.08em}
/* done */
.st-dojo .dg2{display:grid;grid-template-columns:1fr 1fr;gap:8px}.st-dojo .rc{display:flex;align-items:center;gap:10px;padding:8px 10px 8px 8px;position:relative}.st-dojo .rc i{width:40px;height:40px;border-radius:9px;background-size:cover;background-position:center;flex:none}.st-dojo .rc b{display:block;font-size:12.5px;line-height:1.15}.st-dojo .rc span{font-size:11.5px;color:var(--mut)}
.st-dojo .dbelt{position:relative;padding:8px 12px 12px;display:flex;align-items:center;gap:12px}.st-dojo .dbelt svg.tie{flex:none}.st-dojo .dbt b{display:block;font-size:20px;line-height:1.1}.st-dojo .dbt span{color:var(--mut)}
.st-dojo .stats{display:flex;gap:8px}.st-dojo .stats>div{flex:1;display:flex;align-items:center;gap:9px;padding:8px 10px;min-height:72px}.st-dojo .stats b.big{font-size:20px;display:block;line-height:1.05}.st-dojo .stats span.s{font-size:11.5px;color:var(--mut)}
.st-dojo .hrow{display:flex;gap:8px;justify-content:space-between}.st-dojo .hs{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;width:25%}.st-dojo .hs .hkw{position:relative;width:48px;height:48px}.st-dojo .hs .hk{width:48px;height:48px;gap:1px}.st-dojo .hs .hk b{font-size:7px}.st-dojo .hs .hk svg{width:18px;height:18px}.st-dojo .hs span{font-size:10.5px;font-weight:700;color:var(--mut)}
.st-dojo .prom{display:flex;align-items:center;gap:8px;font-weight:700;color:var(--bamd)}.st-dojo .ad{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1.5px dashed #C3C8D2;border-radius:12px;background:rgba(255,255,255,.6)}.st-dojo .ad i{width:38px;height:38px;border-radius:8px;background:var(--wash2);flex:none}.st-dojo .ad small{font-size:10px;font-weight:800;letter-spacing:.08em;border:1.4px solid var(--mut);color:var(--mut);border-radius:5px;padding:0 5px;margin-right:6px}.st-dojo .ad span{color:var(--mut);font-size:12px}
.st-dojo.m-web .pDone .in{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto auto auto;gap:10px 16px;align-content:start}.st-dojo.m-web .pDone .in>.full{grid-column:1/3}.st-dojo .pa{display:flex;flex-direction:column;gap:10px}.st-dojo.m-web .pa{flex-direction:row;align-items:center;gap:16px}.st-dojo.m-web .pa .ad{flex:1}.st-dojo.m-web .pDone .in{top:22px;gap:8px 16px}.st-dojo.m-web .hs .hkw,.st-dojo.m-web .hs .hk{width:40px;height:40px}.st-dojo.m-web .hs .hk svg{width:15px;height:15px}.st-dojo.m-web .hs .hk b{display:none}.st-dojo.m-web .hs{flex-direction:row;gap:8px;width:auto;flex:1;justify-content:center}.st-dojo.m-web .dbelt{padding:4px 12px}
/* splash */
.st-dojo .pSplash{background:radial-gradient(90% 60% at 50% 40%,#2A2F38,#14161A 72%);color:#fff;z-index:50}.st-dojo .pSplash::before{display:none}
.st-dojo .moon{position:absolute;border-radius:50%;background:radial-gradient(circle at 40% 35%,#F3F5F8,#C9CEDA 100%);box-shadow:0 0 70px 6px rgba(220,226,240,.18)}
.st-dojo .ens2{position:absolute}.st-dojo .sp-t{position:absolute;left:0;right:0;text-align:center}.st-dojo .sp-t b{display:block;font-size:30px;line-height:1.1}.st-dojo .sp-t span{display:block;margin-top:6px;color:#9AA2B2;letter-spacing:.14em;text-transform:uppercase;font-size:11px;font-weight:700}
.st-dojo .sp-l{position:absolute;left:0;right:0;bottom:36px;display:flex;justify-content:center;align-items:center;gap:8px;color:#AEB5C4;font-weight:600}
.st-dojo .bell{position:absolute;display:flex;flex-direction:column;align-items:center;gap:6px;color:#D9DDE6;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.st-dojo .bell svg{overflow:visible;transform-origin:50% 0}
.st-dojo .drp{position:absolute;width:12px;height:16px;margin:-8px 0 0 -6px;border-radius:50% 50% 50% 50%/62% 62% 38% 38%;background:#14161A;box-shadow:0 0 0 1.5px #3A3F4A}
/* character */
.st-dojo .sn{position:absolute;left:0;top:0;width:200px;height:240px;transform-origin:100px 228px;z-index:52;pointer-events:none}.st-dojo .sn svg{overflow:visible}.st-dojo .shit{position:absolute;left:46px;top:30px;width:108px;height:196px}
.st-dojo .bub{position:absolute;z-index:54;background:#fff;border:1.5px solid var(--ink);border-radius:14px;padding:9px 12px;font-weight:600;font-size:13px;line-height:1.3;box-shadow:0 12px 22px -12px rgba(20,22,26,.45);transform-origin:0 70%}
.st-dojo .bub::before{content:"";position:absolute;left:-7px;top:28px;width:11px;height:11px;background:#fff;border-left:1.5px solid var(--ink);border-bottom:1.5px solid var(--ink);transform:rotate(45deg)}
.st-dojo .bub .bbtn{display:none;margin-top:7px;background:var(--red);color:#fff;border-radius:9px;padding:7px 12px;font-weight:700;font-size:12.5px;text-align:center;box-shadow:0 3px 0 #9E2018}.st-dojo .bub .bbtn.on{display:block}
.st-dojo .qm{position:absolute;left:0;top:0;width:0;height:0;z-index:56}
.st-dojo .sl{position:absolute;display:grid;place-items:center;color:#fff;border-radius:46% 54% 52% 48%/54% 46% 54% 46%;background:radial-gradient(circle at 35% 28%,#5A606C,#14161A 72%);box-shadow:0 10px 18px -8px rgba(20,22,26,.6),inset 0 0 0 2px rgba(255,255,255,.1)}
.st-dojo .sl .slb{position:absolute;inset:-5px;border-radius:50%;background:radial-gradient(circle,rgba(20,22,26,.22),transparent 70%);z-index:-1}.st-dojo .sl.pk{background:radial-gradient(circle at 35% 28%,#F2665C,#C32A20 75%)}
.st-dojo .sl em{position:absolute;top:100%;margin-top:5px;font-style:normal;font-weight:700;font-size:11px;background:#fff;border:1px solid var(--line);border-radius:7px;padding:2px 7px;color:var(--ink);white-space:nowrap}.st-dojo .sl kbd{position:absolute;right:-6px;top:-6px}
.st-dojo .qring{position:absolute;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;border:2px solid var(--ink);opacity:0}
.st-dojo .shj{position:absolute;inset:0;z-index:51;pointer-events:none}.st-dojo .shj i{position:absolute;top:0;bottom:0;width:50%;background-color:#F1F3F6;border:6px solid #23262C;box-shadow:0 0 36px rgba(20,22,26,.3);background-image:linear-gradient(90deg,#23262C 0 3px,transparent 3px),linear-gradient(#2F333A 0 2px,transparent 2px),linear-gradient(135deg,rgba(255,255,255,.7),rgba(200,206,216,.25));background-size:33.34% 100%,100% 11.2%,100% 100%}
.st-dojo .shj i::after{content:"";position:absolute;top:50%;width:10px;height:10px;border-radius:50%;background:var(--red);margin-top:-5px}.st-dojo .shj i:first-child::after{right:12px}.st-dojo .shj i:last-child::after{left:12px}
.st-dojo .toast{position:absolute;z-index:58;left:50%;top:104px;margin-left:-110px;width:220px;height:40px;border-radius:12px;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;box-shadow:0 14px 24px -12px rgba(20,22,26,.6)}
.st-dojo .xpf{position:absolute;left:0;top:0;z-index:62;padding:5px 11px;border-radius:999px;background:#fff;border:1.5px solid var(--red);color:var(--red);font-weight:800;font-size:13px;box-shadow:0 8px 16px -8px rgba(215,53,43,.6);white-space:nowrap}
/* web chrome */
.st-dojo .wtop{position:absolute;left:0;right:0;top:0;height:60px;display:flex;align-items:center;gap:18px;padding:0 20px;z-index:30;border-bottom:1px solid var(--line);background:rgba(255,255,255,.85)}
.st-dojo .wbr{display:flex;align-items:center;gap:10px;font-size:19px;width:212px}.st-dojo .wbr .hm{width:32px;height:32px;border-radius:7px 9px 8px 10px;background:var(--red);display:grid;place-items:center;color:#fff;transform:rotate(-6deg)}
.st-dojo .wtop .rk{width:300px}.st-dojo .wtop .rk .xbar{width:130px}.st-dojo .wsafe{display:flex;gap:7px;align-items:center;color:var(--bamd);font-weight:700;margin-left:auto}
.st-dojo .wl{position:absolute;left:20px;top:72px;width:212px;bottom:16px;z-index:20;overflow:hidden}.st-dojo .wl .klist{gap:6px;margin-top:8px}.st-dojo .wl .kr{height:52px;padding:0 10px 0 8px;gap:10px}.st-dojo .wl .kr.on{border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink)}
.st-dojo .wl .kr.dim{opacity:.72}.st-dojo .wl .fade{position:absolute;left:0;right:0;bottom:0;height:74px;background:linear-gradient(transparent,var(--bg) 85%)}.st-dojo .wl .sbar{position:absolute;right:0;top:34px;bottom:10px;width:3px;border-radius:2px;background:var(--wash2)}.st-dojo .wl .sbar i{position:absolute;left:0;right:0;top:0;height:46%;border-radius:2px;background:#9AA2B0}
.st-dojo .wl .kr .kn{min-width:0}.st-dojo .wl .kr kbd{flex:none}
.st-dojo .cv{position:absolute;left:248px;top:72px;width:700px;height:668px;border-radius:18px;overflow:hidden;border:1px solid var(--line);box-shadow:0 30px 50px -34px rgba(20,22,26,.4);isolation:isolate}
.st-dojo .wr{position:absolute;left:964px;top:72px;width:296px;bottom:16px;z-index:20;display:flex;flex-direction:column;gap:10px}
.st-dojo .wr .rkc{padding:12px 14px}.st-dojo .wr h4{margin:2px 0 -2px}.st-dojo .rrw{display:flex;align-items:center;gap:10px;padding:8px 10px;min-height:48px}.st-dojo .rrw .si{width:30px;height:30px}.st-dojo .rrw b{display:block;font-size:12.5px;line-height:1.15}.st-dojo .rrw span{font-size:11.5px;color:var(--mut)}.st-dojo .rrw .hkm{margin-left:auto;width:26px;height:26px;border-radius:5px 7px 6px 7px;background:var(--red);color:#fff;display:grid;place-items:center;transform:rotate(-6deg)}
.st-dojo .wr .two>.card{min-height:76px;padding:8px 10px}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, E = A.ease;
    const { seg, lerp, clamp, set, txt, cls, el } = A;
    const q = (s, r = S) => r.querySelector(s), qa = (s, r = S) => [...r.querySelectorAll(s)];
    const U = web ? 'dw' : 'da';
    const att = (e, k, v) => { if (e && (e._a || (e._a = {}))[k] !== v) { e._a[k] = v; e.setAttribute(k, v); } };
    const sty = (e, k, v) => { if (e && (e._s || (e._s = {}))[k] !== v) { e._s[k] = v; e.style[k] = v; } };
    const BEL = ['#F4F4F0', '#EBB832', '#4E9A5B', '#3C6FB6', '#7B5334', '#1C1E23'];
    const hexMix = (a, b, k) => '#' + [1, 3, 5].map(i => Math.round(lerp(parseInt(a.slice(i, i + 2), 16), parseInt(b.slice(i, i + 2), 16), k)).toString(16).padStart(2, '0')).join('');
    const CV = web ? { x: 248, y: 72, w: 700, h: 668 } : { x: 0, y: 0, w: A.W, h: A.H };
    const DK = web ? { x: CV.x + 90, y: CV.y + CV.h - 16, s: 0.64 } : { x: 78, y: 806, s: 0.55 };
    const KT = [['shrink', 'Shrink', 'Smaller file', 'shrink', 'S'], ['crop', 'Crop', 'Fit any frame', 'crop', 'C'], ['place', 'Place', 'Find the pin', 'pin', 'P'], ['gif', 'GIF', 'Video to GIF', 'film', 'G'], ['conv', 'Convert', 'Any format', 'convert', 'F']];
    const MORE = [['Resize', 'ruler'], ['Rotate', 'layers'], ['Blur', 'eyeoff']];
    const T = { shrink: 14.7, crop: 23.35, place: 28.85, gif: 35.55 };
    const GAIN = [[T.shrink, 40], [T.crop, 30], [T.place, 30], [T.gif, 50]];
    const thumbs = [A.photo('portrait'), A.photo('mountain'), A.photo('city'), A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];

    /* ---------------------------------------------------- small drawings */
    const belt = (w = 108) => `<svg class="belt" viewBox="0 0 120 46" width="${w}" height="${(w * 46 / 120).toFixed(1)}"><path d="M3 13h114v15H3z" style="fill:var(--belt)" stroke="#14161A" stroke-width="1.5" stroke-linejoin="round"/><path d="M3 13h114v5H3z" fill="#fff" opacity=".22"/><path d="M8 23h38M74 23h38" stroke="#000" stroke-opacity=".2" stroke-width=".9"/><path d="M57 29l-12 15h11l5-14zM63 29l13 15H65l-6-14z" style="fill:var(--belt)" stroke="#14161A" stroke-width="1.4" stroke-linejoin="round"/><rect x="50" y="9" width="20" height="23" rx="6" style="fill:var(--belt)" stroke="#14161A" stroke-width="1.5"/><path d="M54 13h8" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/></svg>`;
    const stalk = (h = 60) => { const sh = h / 7; let s = ''; for (let i = 0; i < 7; i++) { const y = h + 12 - (i + 1) * sh; s += `<g class="sg" data-y="${(y + sh).toFixed(1)}"><rect x="8" y="${y.toFixed(1)}" width="12" height="${(sh - 1).toFixed(1)}" rx="3.5" fill="#6C9E70" stroke="#2F5233" stroke-width="1.1"/><path d="M11 ${(y + 2).toFixed(1)}v${(sh - 5).toFixed(1)}" stroke="#fff" stroke-opacity=".35" stroke-width="1.5" stroke-linecap="round"/><path d="M7 ${(y + sh - 1).toFixed(1)}h14" stroke="#2F5233" stroke-width="2" stroke-linecap="round"/></g>`; } return `<svg class="stk" viewBox="0 0 30 ${h + 18}" width="30" height="${h + 18}"><g class="lfg" data-sh="${sh.toFixed(1)}"><path d="M14 8Q24 -2 30 4Q22 12 14 8z" fill="#5E8C61"/><path d="M14 8Q4 -2 -2 5Q6 12 14 8z" fill="#86B38A"/></g>${s}</svg>`; };
    const stripe = k => `<div class="bst card" data-k="${k}"><b>+${GAIN[k][1]} XP</b><div class="bsb"><i></i><u></u></div><span class="bsl">Green belt</span></div>`;
    const dg = () => '<span class="dg"><i></i><i></i><i></i><i></i></span>';
    const pips = k => `<span class="pips" data-k="${k}"><i></i><i></i><i></i></span>`;
    const hanko = (ic, lab) => `<div class="hkw"><i class="hkr"></i><div class="hk">${I(ic, 26, 2.2)}<b>${lab}</b></div></div>`;
    const seal = (ic, sz = 22) => `<div class="si">${I(ic, sz, 2)}</div>`;
    const ensoSVG = (w, cls = '') => `<svg class="ens ${cls}" viewBox="0 0 300 300" width="${w}" height="${w}"><circle class="e1" cx="150" cy="150" r="116" fill="none" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-dasharray="680 800" transform="rotate(-120 150 150)"/><circle class="e2" cx="150" cy="150" r="116" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="620 800" stroke-dashoffset="-30" opacity=".55" transform="rotate(-100 150 150)"/></svg>`;
    const mapSVG = `<svg class="mp" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><rect width="400" height="200" fill="#E9EEF3"/><path d="M-10 150C80 128 120 172 200 140S330 80 410 100" stroke="#C5D9EA" stroke-width="18" fill="none"/><path d="M0 60h400M70 0v200M160 0l40 200M290 0v200M0 176h400M340 0l-60 200" stroke="#fff" stroke-width="9"/><path d="M0 104h400" stroke="#F6E3A8" stroke-width="11"/><rect x="84" y="14" width="62" height="34" rx="6" fill="#D6E6D6"/><rect x="300" y="118" width="70" height="44" rx="6" fill="#D6E6D6"/></svg>`;
    const pinSVG = `<svg viewBox="0 0 34 44"><path d="M17 43S3 27 3 16a14 14 0 0 1 28 0c0 11-14 27-14 27z" fill="#D7352B" stroke="#14161A" stroke-width="1.6"/><circle cx="17" cy="16" r="5.5" fill="#fff"/></svg>`;
    const shieldSVG = `<svg class="shd" viewBox="0 0 104 116"><path class="shp" d="M52 6l42 15v32c0 26-17 42-42 54C27 95 10 79 10 53V21z" fill="#E6F0E7" stroke="#14161A" stroke-width="3" stroke-linejoin="round" stroke-dasharray="320" stroke-dashoffset="320"/><path class="shc" d="M32 56l15 15 27-30" fill="none" stroke="#3F6A43" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="70" stroke-dashoffset="70"/></svg>`;

    /* ------------------------------------------------------- Sensei Panda */
    const senseiSVG = () => {
      const arm = s => `<g class="d-a${s}s"><rect x="-11" y="-9" width="22" height="43" rx="11" fill="url(#${U}g)" stroke="#0E1013" stroke-width="1.3"/><path d="M-5 -2v26" stroke="#fff" stroke-opacity=".16" stroke-width="3" stroke-linecap="round"/><g class="d-a${s}e" transform="translate(0 30)"><circle r="10.5" fill="url(#${U}g)"/><rect x="-10" y="-4" width="20" height="33" rx="10" fill="url(#${U}g)" stroke="#0E1013" stroke-width="1.3"/><rect x="-10.6" y="15" width="21.2" height="6" rx="3" fill="#6C7484" opacity=".85"/><circle cy="28" r="9.6" fill="url(#${U}k)" stroke="#0E1013" stroke-width="1"/><ellipse cx="-3" cy="25" rx="3" ry="2" fill="#fff" opacity=".2"/></g></g>`;
      const eye = (side, x) => `<g class="d-e${side}" transform="translate(${x} 84)"><g class="lid"><ellipse rx="6.3" ry="7.2" fill="#fff"/><g class="pu"><circle r="3.9" fill="#14161A"/><circle cx="1.4" cy="-1.6" r="1.3" fill="#fff"/></g></g><path class="up" d="M-6.5 2.4Q0-5.6 6.5 2.4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity="0"/><path class="dn" d="M-6.2-1.2Q0 5 6.2-1.2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity="0"/></g>`;
      return `<svg viewBox="0 0 200 240" width="200" height="240" aria-hidden="true"><defs>
<radialGradient id="${U}f" cx=".4" cy=".28" r=".95"><stop offset="0" stop-color="#fff"/><stop offset=".68" stop-color="#F0F2F5"/><stop offset="1" stop-color="#CDD2DB"/></radialGradient>
<linearGradient id="${U}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4C5360"/><stop offset="1" stop-color="#252931"/></linearGradient>
<radialGradient id="${U}k" cx=".35" cy=".28" r=".9"><stop offset="0" stop-color="#3D424C"/><stop offset="1" stop-color="#0C0D10"/></radialGradient>
<linearGradient id="${U}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A5C79A"/><stop offset=".5" stop-color="#5E8C61"/><stop offset="1" stop-color="#37603B"/></linearGradient>
<linearGradient id="${U}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient></defs>
<ellipse class="d-sh" cx="100" cy="228" rx="60" ry="8" fill="#14161A" opacity=".17"/>
<g class="d-body">
<ellipse cx="74" cy="221" rx="21" ry="9" fill="url(#${U}k)"/><ellipse cx="126" cy="221" rx="21" ry="9" fill="url(#${U}k)"/>
<path d="M63 168h74l7 45q-44 9-88 0z" fill="url(#${U}g)" stroke="#0E1013" stroke-width="1.4" stroke-linejoin="round"/><path d="M100 178v36" stroke="#0E1013" stroke-opacity=".5" stroke-width="1.4"/>
<path d="M66 118Q56 150 62 178h76Q144 150 134 118Q100 106 66 118z" fill="url(#${U}g)" stroke="#0E1013" stroke-width="1.4" stroke-linejoin="round"/>
<path d="M84 114l16 34 16-34Q100 108 84 114z" fill="url(#${U}f)" stroke="#0E1013" stroke-width="1.2"/><path d="M81 113l22 44M119 113L97 157" stroke="#6E7584" stroke-width="3.6" stroke-linecap="round"/>
<rect x="70" y="136" width="9" height="9" rx="1.6" fill="#D7352B" opacity=".92"/>
<g class="d-t1"><path d="M96 176l-9 33 11-2 6-31z" style="fill:var(--belt)" stroke="#0E1013" stroke-width="1.2" stroke-linejoin="round"/></g><g class="d-t2"><path d="M104 176l13 31-12 4-9-33z" style="fill:var(--belt)" stroke="#0E1013" stroke-width="1.2" stroke-linejoin="round"/></g>
<path d="M60 160q40 9 80 0l1 14q-41 9-82 0z" style="fill:var(--belt)" stroke="#0E1013" stroke-width="1.3" stroke-linejoin="round"/><path d="M60 160q40 9 80 0l1 14q-41 9-82 0z" fill="url(#${U}s)"/><rect x="92" y="160" width="16" height="18" rx="4.5" style="fill:var(--belt)" stroke="#0E1013" stroke-width="1.3"/><rect x="92" y="160" width="16" height="18" rx="4.5" fill="url(#${U}s)"/>
<g class="d-stf"><rect x="-3.8" y="-112" width="7.6" height="168" rx="3.8" fill="url(#${U}b)" stroke="#2F5233" stroke-width="1"/><path d="M-5 -72h10M-5 -24h10M-5 26h10" stroke="#2F5233" stroke-width="2.3" stroke-linecap="round"/><path d="M-1.5 -108V52" stroke="#fff" stroke-opacity=".38" stroke-width="1.5"/><path d="M0-110Q10-124 25-120Q14-108 0-110zM0-110Q-10-122-23-119Q-12-108 0-110z" fill="#5E8C61" stroke="#2F5233" stroke-width=".8"/></g>
<g class="d-head">
<g class="d-eLr"><circle cx="58" cy="46" r="17" fill="url(#${U}k)"/><ellipse cx="58" cy="47" rx="8" ry="9" fill="#2D3139" opacity=".8"/></g><g class="d-eRr"><circle cx="142" cy="46" r="17" fill="url(#${U}k)"/><ellipse cx="142" cy="47" rx="8" ry="9" fill="#2D3139" opacity=".8"/></g>
<ellipse cx="100" cy="82" rx="54" ry="45" fill="url(#${U}f)" stroke="#14161A" stroke-width="2.3"/><path d="M47 94Q52 123 96 127" fill="none" stroke="#14161A" stroke-width="3.8" stroke-linecap="round" opacity=".78"/><path d="M153 72Q155 98 138 115" fill="none" stroke="#14161A" stroke-width="1.6" stroke-linecap="round" opacity=".45"/>
<ellipse cx="100" cy="104" rx="22" ry="14" fill="#EBEEF2"/>
<ellipse cx="76" cy="84" rx="12.8" ry="17.5" transform="rotate(20 76 84)" fill="url(#${U}k)"/><ellipse cx="124" cy="84" rx="12.8" ry="17.5" transform="rotate(-20 124 84)" fill="url(#${U}k)"/>
${eye('L', 77)}${eye('R', 123)}
<g class="d-bL"><path d="M-12 3Q-2-5 12-1Q0-1.5-12 3z" fill="#14161A" stroke="#14161A" stroke-width="1.5" stroke-linejoin="round"/></g><g class="d-bR"><path d="M12 3Q2-5-12-1Q0-1.5 12 3z" fill="#14161A" stroke="#14161A" stroke-width="1.5" stroke-linejoin="round"/></g>
<ellipse class="d-bl" cx="59" cy="106" rx="8" ry="5" fill="#D7352B" opacity="0"/><ellipse class="d-bl" cx="141" cy="106" rx="8" ry="5" fill="#D7352B" opacity="0"/>
<path d="M92.5 94Q100 90 107.5 94Q105 102 100 103Q95 102 92.5 94z" fill="#14161A"/><path d="M100 103v3.5" stroke="#14161A" stroke-width="1.8" stroke-linecap="round"/>
<path class="m-S" d="M91 106Q100 113 109 106" fill="none" stroke="#14161A" stroke-width="2.3" stroke-linecap="round"/>
<g class="m-O"><path d="M90 105Q100 123 110 105Q100 108 90 105z" fill="#14161A" stroke="#14161A" stroke-width="1.4" stroke-linejoin="round"/><path d="M94 113Q100 118 106 113Q100 110 94 113z" fill="#D7352B"/></g>
<path class="m-F" d="M93 108h14" fill="none" stroke="#14161A" stroke-width="2.3" stroke-linecap="round"/>
<ellipse class="m-C" cx="100" cy="111" rx="5" ry="6.6" fill="#14161A"/><ellipse class="m-T" cx="100" cy="109" rx="2.6" ry="3.2" fill="#14161A"/>
<path class="m-K" d="M93 111Q101 106 108 108.5" fill="none" stroke="#14161A" stroke-width="2.3" stroke-linecap="round"/>
</g>
${arm('L').replace('translate(0 30)', 'translate(0 30)')}${arm('R')}
<g class="d-fx"><text class="d-z" x="150" y="46" font-family="Shippori Mincho,serif" font-weight="700" font-size="24" fill="#6A7280">z</text><text class="d-z" x="164" y="28" font-family="Shippori Mincho,serif" font-weight="700" font-size="17" fill="#8A93A2">z</text>
<path class="d-sp" d="M0-8L2-2 8 0 2 2 0 8-2 2-8 0-2-2z" fill="#EBB832"/><path class="d-sp" d="M0-8L2-2 8 0 2 2 0 8-2 2-8 0-2-2z" fill="#EBB832"/><path class="d-sp" d="M0-8L2-2 8 0 2 2 0 8-2 2-8 0-2-2z" fill="#EBB832"/></g>
</g></svg>`;
    };

    /* mood and arm tables */
    const B0 = { eL: 0.82, eR: 0.82, uL: 0, uR: 0, dn: 0, bLy: 0, bLr: -3, bRy: 0, bRr: 3, mS: 0, mO: 0, mF: 0, mC: 0, mT: 0, mK: 0, bl: 0.22, tilt: 0, hx: 0, hy: 0, lx: 0, ly: 0, z: 0, sp: 0, big: 1 };
    const MOOD = {};
    Object.entries({
      serene: { mS: 1 },
      happy: { eL: 0, eR: 0, uL: 1, uR: 1, bLy: -3, bLr: -6, bRy: -3, bRr: 6, mO: 1, bl: 0.55, tilt: -3 },
      wink: { eL: 0, uL: 1, eR: 1, bLy: 1, bLr: -3, bRy: -4, bRr: 6, mS: 1, bl: 0.5, tilt: 5, ly: -0.4 },
      surprised: { eL: 1, eR: 1, bLy: -9, bLr: -9, bRy: -9, bRr: 9, mC: 1, bl: 0.1, hy: -3, big: 1.2 },
      thinking: { eL: 0.9, eR: 0.9, bLy: 3, bLr: 11, bRy: -9, bRr: -13, mK: 1, tilt: 6, lx: 2.4, ly: -2 },
      focus: { eL: 0.55, eR: 0.55, bLy: 2, bLr: 12, bRy: 2, bRr: -12, mF: 1, bl: 0.05 },
      celebrate: { eL: 0, eR: 0, uL: 1, uR: 1, bLy: -5, bLr: -8, bRy: -5, bRr: 8, mO: 1, bl: 0.7, tilt: -4, sp: 1 },
      sleepy: { eL: 0, eR: 0, dn: 1, bLy: 1, bLr: -6, bRy: 1, bRr: 6, mT: 1, bl: 0.35, tilt: 8, hy: 3, z: 1 },
    }).forEach(([k, v]) => { MOOD[k] = Object.assign({}, B0, v); });
    const ARM = {
      rest: { ls: 16, le: 12, rs: 40, re: 18, st: 0, sv: 1 }, hip: { ls: 36, le: 81, rs: 40, re: 18, st: 0, sv: 1 },
      gassho: { ls: 10, le: 115, rs: 10, re: 115, st: 0, sv: 0 }, point: { ls: 36, le: 81, rs: 98, re: 12, st: 64, sv: 1 },
      pump: { ls: 72, le: -112, rs: 70, re: -112, st: 0, sv: 1 }, ready: { ls: 34, le: 98, rs: 40, re: 18, st: 0, sv: 1 },
      wave: { ls: 140, le: -30, rs: 40, re: 18, st: 0, sv: 1 }, spin: { ls: 30, le: 90, rs: 78, re: 30, st: 0, sv: 1 },
    };
    const MO = [[0, 'sleepy'], [0.95, 'surprised'], [1.7, 'serene'], [2.4, 'happy'], [3.2, 'serene'], [web ? 6.8 : 6.35, 'surprised'], [web ? 7.3 : 6.9, 'happy'], [8.1, 'thinking'], [9.3, 'wink'], [10.2, 'happy'], [10.9, 'focus'], [14.3, 'celebrate'], [15.6, 'happy'], [16.8, 'serene'], [17.8, 'wink'], [18.5, 'happy'], [19.4, 'serene'], [22.3, 'focus'], [23.25, 'celebrate'], [24.0, 'surprised'], [24.6, 'thinking'], [25.2, 'focus'], [25.9, 'serene'], [27.0, 'focus'], [28.7, 'celebrate'], [29.5, 'wink'], [30.2, 'happy'], [31.0, 'serene'], [32.7, 'focus'], [35.2, 'celebrate'], [37.0, 'happy'], [38.4, 'wink'], [39.3, 'serene']];
    const AR = [[0, 'rest'], [1.75, 'gassho'], [2.5, 'wave'], [3.4, 'rest'], [web ? 6.8 : 6.4, 'rest'], [web ? 7.2 : 6.9, 'pump'], [7.9, 'rest'], [8.2, 'point'], [10.3, 'rest'], [10.9, 'ready'], [14.3, 'pump'], [15.6, 'rest'], [17.8, 'spin'], [18.55, 'gassho'], [19.3, 'rest'], [19.9, 'point'], [22.4, 'ready'], [23.25, 'pump'], [24.0, 'rest'], [25.2, 'ready'], [25.95, 'hip'], [27.0, 'ready'], [28.7, 'pump'], [29.6, 'rest'], [30.1, 'point'], [31.0, 'rest'], [32.8, 'ready'], [35.2, 'pump'], [37.2, 'gassho'], [38.1, 'rest'], [38.5, 'pump'], [39.3, 'rest']];
    const blend = (TAB, LST, t) => { let i = 0; while (i < LST.length - 1 && t >= LST[i + 1][0]) i++; const c = LST[i], p = LST[Math.max(0, i - 1)], k = E.inOut(seg(t, c[0], c[0] + 0.3)), a = TAB[p[1]], b = TAB[c[1]], o = {}; for (const n in b) o[n] = lerp(a[n], b[n], k); return o; };
    const BOWS = [[1.75, 2.55], [18.55, 19.35], [37.2, 38.1]];
    const twitch = (() => { const r = A.rng(77); const a = []; let x = 1.3; while (x < 41) { a.push([x, r() < 0.5 ? 0 : 1]); x += 2.4 + r() * 3; } return a; })();

    const SN = el('div', 'sn', S, senseiSVG() + '<i class="shit"></i>');
    const g = s => SN.querySelector(s);
    const SV = {
      sh: g('.d-sh'), body: g('.d-body'), head: g('.d-head'), eLr: g('.d-eLr'), eRr: g('.d-eRr'), stf: g('.d-stf'), t1: g('.d-t1'), t2: g('.d-t2'),
      aLs: g('.d-aLs'), aLe: g('.d-aLe'), aRs: g('.d-aRs'), aRe: g('.d-aRe'), bL: g('.d-bL'), bR: g('.d-bR'),
      eL: g('.d-eL'), eR: g('.d-eR'), bl: qa('.d-bl', SN), z: qa('.d-z', SN), sp: qa('.d-sp', SN),
      m: { S: g('.m-S'), O: g('.m-O'), F: g('.m-F'), C: g('.m-C'), T: g('.m-T'), K: g('.m-K') },
    };
    SV.eL.lid = SV.eL.querySelector('.lid'); SV.eR.lid = SV.eR.querySelector('.lid');

    /* dock and travel */
    const POS = web ? [[0, 640, 640, 1.1], [2.0, 640, 640, 1.1], [3.0, DK.x, DK.y, DK.s, 0.9]] : [[0, 195, 690, 0.95], [2.0, 195, 690, 0.95], [3.0, DK.x, DK.y, DK.s, 0.9]];
    const placeAt = t => { let i = 0; while (i < POS.length - 1 && t >= POS[i + 1][0]) i++; const a = POS[i], b = POS[i + 1]; if (!b) return { x: a[1], y: a[2], s: a[3], air: 0 }; const d = b[4] || 0.6, qq = seg(t, b[0] - d, b[0]), e = E.inOut(qq); return { x: lerp(a[1], b[1], e), y: lerp(a[2], b[2], e), s: lerp(a[3], b[3], e), air: Math.sin(Math.PI * qq) * 14 }; };
    let SPOS = { x: DK.x, y: DK.y, s: DK.s };
    const FOCUS = [[10.9, 14.3], [22.3, 23.25], [27.0, 28.7], [32.7, 35.2]];
    const BEATS = [[14.3, 15.6], [23.25, 24.0], [28.7, 29.6], [35.2, 37.2], [38.5, 39.3]];
    const drawSensei = t => {
      const P = placeAt(t, POS); SPOS = P;
      const mo = blend(MOOD, MO, t), ar = blend(ARM, AR, t), L = A.life(t, 3), foc = FOCUS.some(f => t >= f[0] && t < f[1]);
      const bow = Math.max(0, ...BOWS.map(b => Math.sin(Math.PI * seg(t, b[0], b[1]))));
      const beat = BEATS.some(b => t >= b[0] && t < b[1]);
      const amp = foc ? 0.03 : 0.014, br = foc ? Math.sin(t * 2.1) : L.breathe;
      let ls = ar.ls, le = ar.le, rs = ar.rs, re = ar.re, st = ar.st;
      if (t > 2.5 && t < 3.4) { le = -25 + Math.sin(t * 15) * 22; }
      if (beat) { const w = Math.sin(t * 9); le += w * 8; re += w * 8; }
      if (t >= 17.8 && t < 18.55) st += 720 * E.inOut(seg(t, 17.85, 18.5));
      if (t > 7.2 && t < 7.9) { re += Math.sin((t - 7.2) * 18) * 10; }
      const air = P.air + (beat ? Math.abs(Math.sin(t * 6)) * 6 : 0);
      A.set(SN, { x: P.x - 100, y: P.y - 228 - air, s: P.s, o: 1 });
      sty(SN, 'zIndex', t < 3.2 ? 58 : 52);
      att(SV.body, 'transform', `translate(100 226) scale(${(1 + br * -amp * 0.4 + bow * 0.02).toFixed(4)} ${(1 + br * amp - bow * 0.08).toFixed(4)}) translate(-100 -226)`);
      att(SV.sh, 'opacity', (0.17 - air * 0.004).toFixed(3));
      /* look at the pointer */
      const pp = A.pointerAt(t), ex = P.x, ey = P.y - (228 - 84) * P.s;
      const lk = pp.vis > 0.1 ? 1 : 0, lx = clamp((pp.x - ex) / 240, -1, 1) * lk, ly = clamp((pp.y - ey) / 260, -1, 1) * lk;
      const tw = twitch.find(w => t >= w[0] && t < w[0] + 0.35), twA = tw ? Math.sin((t - tw[0]) / 0.35 * Math.PI * 3) * 14 * (1 - (t - tw[0]) / 0.35) : 0;
      const bellEar = t > 0.95 && t < 1.4 ? Math.sin((t - 0.95) * 50) * 12 * (1 - seg(t, 0.95, 1.4)) : 0;
      const tilt = mo.tilt + lx * 3 + bow * -2 + L.sway * 0.8;
      att(SV.head, 'transform', `translate(${(mo.hx).toFixed(2)} ${(mo.hy + bow * 10 + L.bob * 0.4).toFixed(2)}) rotate(${tilt.toFixed(2)} 100 126)`);
      att(SV.eLr, 'transform', `rotate(${(tw && tw[1] === 0 ? twA : bellEar).toFixed(1)} 64 58)`);
      att(SV.eRr, 'transform', `rotate(${(tw && tw[1] === 1 ? -twA : 0).toFixed(1)} 136 58)`);
      att(SV.bL, 'transform', `translate(76 ${(57 + mo.bLy).toFixed(2)}) rotate(${mo.bLr.toFixed(1)})`);
      att(SV.bR, 'transform', `translate(124 ${(57 + mo.bRy).toFixed(2)}) rotate(${mo.bRr.toFixed(1)})`);
      const bk = 1 - 0.94 * L.blink;
      [[SV.eL, mo.eL, mo.uL], [SV.eR, mo.eR, mo.uR]].forEach(([e, o, u]) => {
        att(e.lid, 'transform', `scale(${mo.big.toFixed(2)} ${Math.max(0.02, o * bk * mo.big).toFixed(3)})`);
        const pu = e.lid.querySelector('.pu'); att(pu, 'transform', `translate(${(lx * 2.7 + mo.lx).toFixed(2)} ${(ly * 2.1 + mo.ly).toFixed(2)})`);
        att(e.querySelector('.up'), 'opacity', (u + (o < 0.1 && mo.dn < 0.5 && u < 0.5 ? 0 : 0)).toFixed(2));
        att(e.querySelector('.dn'), 'opacity', mo.dn.toFixed(2));
      });
      for (const k in SV.m) att(SV.m[k], 'opacity', mo['m' + k].toFixed(2));
      SV.bl.forEach(b => att(b, 'opacity', mo.bl.toFixed(2)));
      SV.z.forEach((z, i) => { att(z, 'opacity', (mo.z * (0.55 + 0.45 * Math.sin(t * 2 + i * 2))).toFixed(2)); att(z, 'transform', `translate(0 ${(-Math.sin(t * 1.4 + i * 2) * 3).toFixed(1)})`); });
      SV.sp.forEach((s, i) => { const k = mo.sp * (0.55 + 0.45 * Math.sin(t * 7 + i * 2.1)); att(s, 'transform', `translate(${[38, 164, 154][i]} ${[34, 30, 96][i]}) scale(${(k * 1.1).toFixed(2)})`); att(s, 'opacity', mo.sp.toFixed(2)); });
      att(SV.t1, 'transform', `rotate(${(Math.sin(t * 2.2 + 1) * 5).toFixed(1)} 100 176)`); att(SV.t2, 'transform', `rotate(${(Math.sin(t * 2.4) * -6).toFixed(1)} 100 176)`);
      att(SV.aLs, 'transform', `translate(70 128) rotate(${ls.toFixed(1)})`); att(SV.aLe, 'transform', `translate(0 30) rotate(${(-le).toFixed(1)})`);
      att(SV.aRs, 'transform', `translate(130 128) rotate(${(-rs).toFixed(1)})`); att(SV.aRe, 'transform', `translate(0 30) rotate(${re.toFixed(1)})`);
      const a1 = rs * Math.PI / 180, a2 = (rs - re) * Math.PI / 180, ex2 = 130 + 30 * Math.sin(a1), ey2 = 128 + 30 * Math.cos(a1);
      const px = ex2 + 28 * Math.sin(a2), py = ey2 + 28 * Math.cos(a2);
      att(SV.stf, 'transform', `translate(${px.toFixed(1)} ${py.toFixed(1)}) rotate(${st.toFixed(1)})`); att(SV.stf, 'opacity', ar.sv.toFixed(2));
    };

    /* ---------------------------------------------------------- chrome */
    const rankChip = `<div class="rk">${belt(34)}<div><b class="rkn mn">Green belt</b><div class="xbar"><i></i></div></div></div>`;
    const stats = `<div class="card"><div class="stkw">${stalk(46)}</div><div><b class="big mn"><span class="skn">6</span> days</b><span class="s">Bamboo streak</span></div></div><div class="card"><div style="flex:1"><b class="big mn"><span class="dgn">0</span> of 4</b><span class="s">Daily katas</span><div style="margin-top:7px">${dg()}</div></div></div>`;
    let host = S;
    if (web) {
      host = el('div', 'cv', S);
      el('div', 'wl', S, `<div class="eh">Katas</div><div class="klist">${KT.map((k, i) => `<div class="kr card ki${i}">${seal(k[3], 18)}<div class="kn"><b>${k[1]}</b><span>${k[2]}</span></div>${pips(k[0])}<kbd>${k[4]}</kbd></div>`).join('')}${MORE.map(m => `<div class="kr card dim">${seal(m[1], 18)}<div class="kn"><b>${m[0]}</b><span>Practise soon</span></div>${pips(m[0])}</div>`).join('')}</div><div class="fade"></div><div class="sbar"><i></i></div>`);
      el('div', 'wr', S, `<div class="rkc card">${belt(84)}<div class="rkt"><b class="mn rkn">Green belt</b><span class="rkx">380 / 500 XP</span><div class="xbar"><i></i></div></div></div><div class="eh">Today's katas</div>
        ${KT.slice(0, 4).map((k, i) => `<div class="rrw card rr${i}">${seal(k[3], 15)}<div><b>${k[1]}</b><span class="rs">Waiting</span></div><i class="hkm" style="display:none">${I('check', 15, 3)}</i></div>`).join('')}
        <div class="two">${stats}</div>`);
      el('div', 'wtop', S, `<div class="wbr mn"><i class="hm">${I('crop', 18, 2.2)}</i>Swiss Knife</div>${rankChip}<div class="hchip">${dg()}<span><span class="dgn">0</span> of 4 today</span></div><div class="wsafe">${I('lock', 16, 2.4)}In your browser. Nothing uploaded.</div>`);
    } else {
      /* header is added after pages so that it sits on top (z-index) */
    }
    const pg = (c, h) => { const e = el('div', 'pg ' + c, host, h); const b = e.querySelector('.in > .cta'); if (b) e.appendChild(b); return e; };

    const splash = el('div', 'pg pSplash', S, web
      ? `<i class="moon" style="left:450px;top:150px;width:380px;height:380px"></i>${ensoSVG(460, '').replace('<svg class="ens ', '<svg style="position:absolute;left:410px;top:110px;color:#EEF0F4" class="ens ')}<div class="sp-t" style="top:42px"><b class="mn">Image Swiss Knife</b><span>Sensei Panda's dojo</span></div><div class="bell" style="left:930px;top:360px"><svg width="46" height="52" viewBox="0 0 46 52"><path d="M23 2v8" stroke="#D9DDE6" stroke-width="2.5" stroke-linecap="round"/><path d="M9 38c3-3 4-8 4-14a10 10 0 0 1 20 0c0 6 1 11 4 14z" fill="#EBB832" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="23" cy="42" r="4" fill="#fff"/></svg><span class="bt">Ring the bell</span></div><div class="sp-l">${I('lock', 16, 2.4)}Your photos stay in this browser</div>`
      : `<i class="moon" style="left:60px;top:305px;width:270px;height:270px"></i>${ensoSVG(330, '').replace('<svg class="ens ', '<svg style="position:absolute;left:30px;top:275px;color:#EEF0F4" class="ens ')}<div class="sp-t" style="top:120px"><b class="mn">Image Swiss Knife</b><span>Sensei Panda's dojo</span></div><div class="bell" style="left:300px;top:560px"><svg width="40" height="46" viewBox="0 0 46 52"><path d="M23 2v8" stroke="#D9DDE6" stroke-width="2.5" stroke-linecap="round"/><path d="M9 38c3-3 4-8 4-14a10 10 0 0 1 20 0c0 6 1 11 4 14z" fill="#EBB832" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="23" cy="42" r="4" fill="#fff"/></svg><span class="bt">Ring</span></div><div class="sp-l">${I('lock', 16, 2.4)}Your photos stay on this phone</div>`);
    const drop = el('i', 'drp', splash);

    const L = {};
    if (web) {
      L.home = pg('pHome mt', `<div class="mat"><div style="color:#B8BEC9">${ensoSVG(150, '')}</div><h3 class="mn mt1">Drop a photo on the mat</h3><p class="mt2">or press <kbd>Ctrl</kbd> <kbd>O</kbd> to choose. JPG, HEIC, PNG, WEBP and MP4 work.</p></div><div class="mdrop"><i style="background-image:${thumbs[0]}"></i><span>${D.portrait.file}</span><small>${D.portrait.size} · ${D.portrait.dims}</small></div>`);
      L.pick = L.home;
    } else {
      L.home = pg('pHome', `<div class="in"><div class="rkc card">${belt(104)}<div class="rkt"><b class="mn rkn">Green belt</b><span class="rkx">380 / 500 XP</span><div class="xbar"><i></i></div></div></div><div class="two">${stats}</div><div class="eh">Katas</div><div class="klist">${KT.map((k, i) => `<div class="kr card ki${i}">${seal(k[3], 18)}<div class="kn"><b>${k[1]}</b><span>${k[2]}</span></div>${pips(k[0])}</div>`).join('')}</div></div>`);
      L.pick = pg('pPick', `<div class="in"><div><div class="eb">Shrink</div><h2 class="hh mn">Choose a photo</h2></div><div class="gal">${thumbs.map((b, i) => `<div class="th g${i}" style="background-image:${b}">${i === 0 ? `<i class="ck">${I('check', 15, 3.4)}</i>` : ''}</div>`).join('')}</div><div class="facts card"><i style="background-image:${thumbs[0]}"></i><div><b>${D.portrait.file}</b><span>${D.portrait.size} · ${D.portrait.dims}</span></div></div></div>`);
    }
    const opIc = ['share', 'shrink', 'upload', 'ruler'];
    L.purp = pg('pPurp', `<div class="in"><div class="wprev"><i style="background-image:${thumbs[0]}"></i></div><div class="pcol"><div class="facts card"><i style="background-image:${thumbs[0]}"></i><div><b>${D.portrait.file}</b><span>${D.portrait.size} · ${D.portrait.dims}</span></div></div><div><div class="eb">Shrink</div><h2 class="hh mn">Where will it go?</h2></div><div class="ops">${D.shrink.options.map((o, i) => `<div class="op op${i} card"><div class="oi">${I(opIc[i], 19, 2)}</div><div><b>${o.label}</b><span>${o.hint}</span></div>${i === 1 ? '<em>Sensei\'s pick</em>' : ''}<u>${I('check', 13, 3.6)}</u></div>`).join('')}</div></div></div>`);
    L.p1 = pg('pProc1', `<div class="in"><div class="ptag">Shrink · Exam form · ${D.shrink.rule}</div><div class="pst"><div class="pcd" style="background-image:${thumbs[0]}"></div></div><div class="sz mn">4.8 MB</div><div class="szs">Target ${D.shrink.size} · ${D.shrink.px}</div><div class="stg"><b class="sg1">Folding pixels</b><span class="pc">0%</span></div><div class="bbox"></div></div>`);
    L.r1 = pg('pRes1', `<div class="in"><div><div class="eb">Kata complete</div><h2 class="hh mn">Shrink</h2></div>${hanko('shrink', 'SHRINK')}<div class="rrow"><div class="pcw"><div class="rph" style="background-image:${thumbs[0]}"></div></div><div><span class="bignum mn">${D.shrink.size}</span><div class="was">was ${D.portrait.size} · 96% smaller</div><div class="tags"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span>Exam form</span></div></div></div>
      <div class="cmp card"><span>Before</span><div class="bs"></div><b>${D.portrait.size}</b><span>After</span><div class="bs r aft"></div><b>${D.shrink.size}</b></div>
      <div class="mast card">${pips('shrink').replace('class="pips"', 'class="pips"')}<b>Shrink mastery</b><em class="mst">Mastered</em></div>${stripe(0)}<div class="cta save"></div></div>`);
    const pres = D.crop.presets.filter((p, i) => [0, 1, 2, 3, 5, 7].includes(i));
    const rt = p => { const m = 26, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<div class="rt"><i style="width:${w}px;height:${h}px"></i></div>`; };
    L.pre = pg('pPre', `<div class="in"><div><div class="eb">Crop</div><h2 class="hh mn">Pick a frame</h2></div><div class="pre">${pres.map((p, i) => `<div class="pr card pr${i}">${rt(p)}<div><b>${p.label}</b><span>${p.px}</span></div><em>${p.ratio}</em></div>`).join('')}</div></div>`);
    L.ed = pg('pEd', `<div class="in"><div class="cst"><div class="cph" style="background-image:${thumbs[1]}"></div><div class="cfr"><i></i><i></i><i></i><i></i></div><div class="ctag">${D.crop.preset} ${D.crop.ratio} · ${D.crop.px}</div><div class="mini"><span class="mt">Cropping to ${D.crop.px}</span><div class="mb"></div></div><div class="hkh">${hanko('crop', 'CROP')}</div></div><div class="sb ehint">Slide the photo. The bright box is what you keep.</div><div class="cta done">${I('check', 20, 3)}Done${web ? ' <kbd>Enter</kbd>' : ''}</div></div>`);
    L.plA = pg('pPlA', `<div class="in"><div><div class="eb">Place</div><h2 class="hh mn">A photo from your day</h2></div><div class="cityc" style="background-image:${A.photo('city')}"><div class="scan"></div><i class="rg"></i><span class="tg">${D.place.file}</span></div><p class="sb">Photos can carry a hidden map pin. Sensei can check it.</p></div>`);
    L.plB = pg('pPlB', `<div class="in"><div class="mapc">${mapSVG}<div class="mpin">${pinSVG}</div></div><div class="pcol2"><div class="ptl"><div><div class="eb">Taken in</div><b class="big mn">${D.place.city}, ${D.place.country}</b></div></div><div class="kv card"><span>Region</span><b>${D.place.region}</b><span>Map</span><b>${D.place.lat}, ${D.place.lon}</b><span>Taken</span><b>${D.place.when}</b><span>Camera</span><b>${D.place.device}</b></div><div class="warn">${I('eye', 20, 2.2)}<span>If you share this photo, anyone can see where you were.</span></div><div class="facts card"><i style="background-image:${A.photo('city')}"></i><div><b>${D.place.file}</b><span>Taken with a ${D.place.device}</span></div></div></div><div class="cta red rm">${I('eyeoff', 20, 2.2)}Remove location</div></div>`);
    L.p2 = pg('pProc2', `<div class="in"><div class="ptag">Place · Wiping the location</div><div class="pst"><div class="wmap" style="position:absolute;left:50%;top:${web ? 10 : 28}px;margin-left:-88px">${mapSVG}<div class="mpin" style="left:50%;top:60%">${pinSVG}</div></div></div><div class="stg"><b class="sg2">Reading the tags</b><span class="pc">0%</span></div><div class="bbox"></div></div>`);
    L.sf = pg('pSafe', `<div class="in"><div class="saf">${shieldSVG}${hanko('shield', 'SAFE').replace('class="hkw"', 'class="hkw" style="right:calc(50% - 150px);top:0"')}<h2 class="hh mn">Location removed</h2><span class="okp">${I('shield', 16, 2.4)}Safe to share</span></div><div class="sf card"><s>Place</s><span>${D.place.city}, ${D.place.country}</span><b>Gone</b><s>GPS</s><span>${D.place.lat}, ${D.place.lon}</span><b>Gone</b><s>Photo</s><span>${D.place.file}</span><b>Same</b></div>${stripe(2)}</div>`);
    const stripH = Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('');
    L.gif = pg('pGif', `<div class="in"><div><div class="eb">GIF</div><h2 class="hh mn">Pick 3 seconds</h2></div><div class="vid"><span class="vb">${D.video.file} · ${D.video.len}</span></div><div class="strw"><div class="sclip"><div class="strip">${stripH}<div class="selw"></div></div></div><span class="tl tL">0:04</span><span class="tl tR">0:08</span><div class="hd hL"></div><div class="hd hR"></div></div><div class="secs"><b class="sv mn">0:04 – 0:08</b><span class="sd">4.0 s · ${D.video.fps} fps</span></div><div class="cta mk">${I('film', 20, 2.2)}<span class="mkl">Make GIF</span></div></div>`);
    L.p3 = pg('pProc3', `<div class="in"><div class="ptag">GIF · ${D.video.file} · ${D.video.clip}</div><div class="gst"><div class="gfr"></div></div><div class="sz mn fcn">0 of ${D.video.frames}</div><div class="szs">frames made at ${D.video.fps} fps</div><div class="cells">${Array.from({ length: 36 }, () => '<i></i>').join('')}</div><div class="stg"><b class="sg3">Cutting frames</b><span class="pc">0%</span></div><div class="bbox"></div></div>`);
    L.gr = pg('pGifRes', `<div class="in"><div><div class="eb">Kata complete</div><h2 class="hh mn">Your GIF is ready</h2></div><div class="pcw"><div class="gres"><span class="lp">LOOP</span></div>${hanko('film', 'GIF').replace('class="hkw"', 'class="hkw" style="right:12px;top:12px"')}</div><div class="tags" style="margin-top:0"><span>${D.video.size}</span><span>${D.video.fps} fps</span><span>${D.video.frames} frames</span><span>${D.video.clip}</span></div><div class="mast card">${pips('gif')}<b>GIF mastery</b><em class="mst">+1 pip</em></div>${stripe(3)}</div>`);
    const items = [[thumbs[0], 'Exam photo', `${D.shrink.size} · JPG`], [thumbs[1], 'Instagram post', D.crop.px], [A.photo('city'), 'City photo', 'Place removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const hon = [['shrink', 'Light Hand'], ['crop', 'Sharp Eye'], ['pin', 'Quiet Step'], ['film', 'Reel Master']];
    L.done = pg('pDone', `<div class="in"><div class="full"><div class="eb">Dojo complete</div><h2 class="hh mn">Four katas done</h2></div>
      <div class="dg2 full">${items.map((x, i) => `<div class="rc card r${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}</div>
      <div class="dbelt card full"><svg class="tie" viewBox="0 0 320 96" width="${web ? 230 : 170}" height="${web ? 69 : 51}"><defs><linearGradient id="${U}tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4C5360"/><stop offset="1" stop-color="#252931"/></linearGradient></defs><path d="M62 4Q160-6 258 4l14 90H48z" fill="url(#${U}tg)" stroke="#0E1013" stroke-width="2.5" stroke-linejoin="round"/><path d="M130 4l30 56 30-56" fill="#F1F3F6" stroke="#0E1013" stroke-width="2"/>
        <path class="bo" d="M44 56H276" stroke="#14161A" stroke-width="22" stroke-linecap="round" stroke-dasharray="240" fill="none"/><path class="bi" d="M44 56H276" stroke="#4E9A5B" stroke-width="17" stroke-linecap="round" stroke-dasharray="240" fill="none"/>
        <path class="no" d="M44 56H276" stroke="#14161A" stroke-width="22" stroke-linecap="round" stroke-dasharray="240" stroke-dashoffset="240" fill="none"/><path class="ni" d="M44 56H276" stroke="#3C6FB6" stroke-width="17" stroke-linecap="round" stroke-dasharray="240" stroke-dashoffset="240" fill="none"/>
        <g class="kn0"><rect x="146" y="40" width="28" height="32" rx="8" fill="#4E9A5B" stroke="#14161A" stroke-width="2.5"/></g><g class="kn1"><path d="M154 70l-14 24h14l6-22zM166 70l16 24h-15l-7-22z" fill="#3C6FB6" stroke="#14161A" stroke-width="2.4" stroke-linejoin="round"/><rect x="146" y="40" width="28" height="32" rx="8" fill="#3C6FB6" stroke="#14161A" stroke-width="2.5"/><path d="M151 46h12" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/></g></svg>
        <div class="dbt"><b class="mn dbn">Green belt</b><span class="dbs">500 of 500 XP · <b class="dxp">+150 XP</b></span></div></div>
      <div class="stats full">${stats}<div class="card"><div style="flex:1"><b class="big mn tapn">13 taps</b><span class="s">for 4 jobs</span></div></div></div>
      <div class="hrow card full" style="padding:9px 10px">${hon.map((h, i) => `<div class="hs hs${i}">${hanko(h[0], 'KATA')}<span>${h[1]}</span></div>`).join('')}</div>
      <div class="pa full"><div class="prom">${I('lock', 16, 2.4)}${web ? D.promiseWeb : D.promise}</div><div class="ad"><i></i><div><small>Ad</small><span>A quiet sponsor message. It shows only after the work is done.</span></div></div></div>
      <div class="cta saveall">${I('save', 20, 2.2)}<span class="sal">Save all 4</span>${web ? ' <kbd>Ctrl S</kbd>' : ''}</div></div>`);
    if (!web) {
      el('div', 'hdr', S, `${rankChip}<div class="hsp"></div><div class="hchip">${stalk(18).replace('class="stk"', 'class="stk" style="display:none"')}<b class="skn2">6</b> days</div><div class="hchip">${dg()}</div>`);
    }
    const shj = el('div', 'shj', host, '<i style="left:0"></i><i style="right:0"></i>');
    const scrim = el('div', 'qs', S);
    const xpf = [0, 1, 2, 3].map(() => el('div', 'xpf', S, '+0 XP'));
    const bub = el('div', 'bub', S, '<span class="bt"></span><div class="bbtn"></div>');
    const br = el('div', 'br', S);
    const ORG = { x: DK.x, y: DK.y - 76 * DK.s * (web ? 1.1 : 1) };
    const FAN = { cx: DK.x + (web ? 34 : 26), cy: DK.y - (web ? 124 : 108), r: web ? 172 : 150, a0: -115, da: 27.5, sz: web ? 54 : 48 };
    const fan = i => { const a = (FAN.a0 + i * FAN.da) * Math.PI / 180; return { x: FAN.cx + FAN.r * Math.cos(a), y: FAN.cy + FAN.r * Math.sin(a) }; };
    const qm = el('div', 'qm', S, KT.map((k, i) => `<div class="sl sl${i}" style="width:${FAN.sz}px;height:${FAN.sz}px;left:${(fan(i).x - FAN.sz / 2).toFixed(1)}px;top:${(fan(i).y - FAN.sz / 2).toFixed(1)}px">${I(k[3], web ? 24 : 22, 2)}<i class="slb"></i><em>${k[1]}</em>${web ? `<kbd>${i + 1}</kbd>` : ''}</div>`).join('') + '<i class="qring"></i>');
    const fcard = web ? el('div', 'fcard', S, `<i style="background-image:${thumbs[0]}"></i><span>${D.portrait.file}</span><small style="color:var(--mut);margin:0 2px;font-size:11px">Desktop</small>`) : null;

    /* ----------------------------------------------------------- bars */
    const BK = A.bars(3, A.BAR_KINDS, 14), BW = web ? 460 : 330;
    const SZ = { streams: [BW, 52], liquid: [BW, 32], orbit: [108, 108], tiles: [BW, 52], comet: [BW, 44], warp: [BW, 92] };
    const SETS = {
      ink: { c: ['#14161A', '#D7352B', '#5E8C61'], w: ['#F7F8FA', '#D7352B', '#9FC4A2'] },
      red: { c: ['#D7352B', '#F07A6D', '#14161A'], w: ['#FFD9D5', '#D7352B', '#F7F8FA'] },
      grn: { c: ['#5E8C61', '#9CC59F', '#14161A'], w: ['#E6F0E7', '#9CC59F', '#D7352B'] },
    };
    const mkBar = (idx, set, host) => { const k = BK[idx], s = SZ[k], c = SETS[set]; return A.bar(host, k, { w: s[0], h: s[1], colors: (k === 'warp' ? c.w : c.c).concat(['#14161A']), track: 'rgba(20,22,26,.09)', seed: 5 + idx }); };
    const bars = [mkBar(0, 'ink', q('.pProc1 .bbox', host)), mkBar(1, 'grn', q('.pProc2 .bbox', host)), mkBar(2, 'red', q('.pProc3 .bbox', host))];
    /* custom ink brush bar: a calligraphic stroke with bleeding edges */
    const BRW = web ? 560 : 300, brush = (() => {
      const cv = document.createElement('canvas'), w = BRW, h = 44; cv.width = w * 2; cv.height = h * 2; cv.style.cssText = `width:${w}px;height:${h}px`;
      q('.pEd .mb', host).appendChild(cv); const c = cv.getContext('2d'), r0 = A.rng(21), pts = []; for (let i = 0; i <= 120; i++) pts.push([r0(), r0(), r0()]);
      return { el: cv, update(p, t) {
        c.setTransform(2, 0, 0, 2, 0, 0); c.clearRect(0, 0, w, h);
        c.fillStyle = 'rgba(20,22,26,.07)'; c.fillRect(6, h / 2 - 1, w - 12, 2);
        const end = 8 + (w - 30) * E.out(p), N = Math.floor(end / 2.4);
        for (let i = 0; i < N; i++) {
          const x = 8 + i * 2.4, u = i * 2.4 / (w - 30), y = h / 2 + Math.sin(u * 7 + 0.6) * 4 - u * 2;
          const th = (2.5 + 11 * Math.pow(Math.sin(Math.PI * Math.min(1, u * 1.05 + 0.04)), 0.55)) * (0.85 + 0.3 * pts[i % 120][0]);
          c.globalAlpha = 0.07; c.fillStyle = '#14161A'; c.beginPath(); c.arc(x, y + (pts[i % 120][1] - 0.5) * 3, th * 0.78 + 3.6, 0, 6.3); c.fill();
          c.globalAlpha = u > 0.72 ? 0.5 + 0.4 * pts[i % 120][2] : 0.95; c.beginPath(); c.arc(x, y, th * 0.56, 0, 6.3); c.fill();
          if (u > 0.55 && pts[i % 120][1] > 0.55) { c.globalAlpha = 0.5; c.fillRect(x, y + (pts[i % 120][2] - 0.5) * th * 1.6, 6, 0.9); }
        }
        c.globalAlpha = 1; if (p > 0.02 && p < 0.98) { c.fillStyle = '#D7352B'; c.beginPath(); c.arc(end + 5, h / 2 - end / w * 4, 3.4, 0, 6.3); c.fill(); }
        c.fillStyle = 'rgba(215,53,43,' + (0.25 + 0.75 * seg(p, 0.9, 1)) + ')'; c.fillRect(w - 16, h / 2 - 7, 11, 14);
      } };
    })();
    /* ink drops and petals (canvas FX) */
    const mkFX = (parent, w, h) => { const c = document.createElement('canvas'); c.width = w * 2; c.height = h * 2; c.style.cssText = `width:${w}px;height:${h}px`; parent.insertBefore(c, parent.firstChild); const x = c.getContext('2d'); return { x, w, h }; };
    const inkFX = mkFX(q('.pProc1 .pst', host), BW + 20, 232), mapFX = mkFX(q('.pProc2 .pst', host), BW + 20, 232), petFX = mkFX(q('.pProc3 .gst', host), BW + 20, 150);
    const rr = A.rng(5), DROPS = Array.from({ length: 48 }, () => ({ a: rr() * 6.28, r0: 0.9 + rr() * 0.5, sp: 0.6 + rr() * 0.9, ph: rr(), sz: 1.6 + rr() * 2.6, red: rr() < 0.18, dir: rr() < 0.5 ? 1 : -1 }));
    const PET = Array.from({ length: 30 }, () => ({ x: rr(), ph: rr(), sp: 0.6 + rr() * 0.8, rot: rr() * 6, c: ['#D7352B', '#F29A92', '#F7B9B2', '#9CC59F'][Math.floor(rr() * 4)] }));
    const drawInk = (F, t, p, cx, cy, R, core) => {
      const c = F.x; c.setTransform(2, 0, 0, 2, 0, 0); c.clearRect(0, 0, F.w, F.h);
      const fade = 1 - seg(p, 0.95, 1), bl = c.createRadialGradient(cx, cy, 0, cx, cy, core * (1.5 + p));
      bl.addColorStop(0, 'rgba(20,22,26,.16)'); bl.addColorStop(1, 'rgba(20,22,26,0)'); c.fillStyle = bl; c.beginPath(); c.arc(cx, cy, core * (1.5 + p), 0, 6.3); c.fill();
      DROPS.forEach(d => {
        const u = (t * d.sp * 0.5 + d.ph) % 1;
        for (let j = 0; j < 6; j++) {
          const uu = Math.max(0, u - j * 0.014), rad = lerp(R * d.r0, core, uu * uu), a = d.a + d.dir * uu * 3;
          c.globalAlpha = Math.sin(Math.PI * u) * 0.85 * fade * (1 - j / 6); c.fillStyle = d.red ? '#D7352B' : '#14161A';
          c.beginPath(); c.arc(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad * 0.92, d.sz * (1 - uu * 0.5) * (1 - j * 0.1), 0, 6.3); c.fill();
        }
      });
      c.globalAlpha = 0.45 * fade; c.strokeStyle = '#14161A'; c.lineWidth = 1.2; c.beginPath(); c.arc(cx, cy, core + 8 + 3 * Math.sin(t * 6), 0, 6.3); c.stroke(); c.globalAlpha = 1;
    };
    const drawPet = (F, t, p, barY) => {
      const c = F.x; c.setTransform(2, 0, 0, 2, 0, 0); c.clearRect(0, 0, F.w, F.h);
      PET.forEach((d, i) => { const u = (t * d.sp * 0.3 + d.ph) % 1, x = d.x * (F.w - 40) + 20 + Math.sin(t * 1.4 + d.ph * 9) * 16 + u * 26, y = u * barY;
        c.globalAlpha = Math.min(1, u * 5) * (1 - seg(u, 0.93, 1)); c.fillStyle = d.c; c.save(); c.translate(x, y); c.rotate(d.rot + t * 1.6 * d.sp + u * 4); c.scale(1, 0.62 + 0.38 * Math.sin(t * 3 + i)); c.beginPath(); c.moveTo(0, -5.5); c.quadraticCurveTo(5.5, -1, 0, 6); c.quadraticCurveTo(-5.5, -1, 0, -5.5); c.fill(); c.restore();
        if (u > 0.9) { c.globalAlpha = (1 - (u - 0.9) / 0.1) * 0.55; c.strokeStyle = '#14161A'; c.lineWidth = 1; c.beginPath(); c.ellipse(x, barY + 4, (u - 0.9) * 130, (u - 0.9) * 28, 0, 0, 6.3); c.stroke(); } });
      c.globalAlpha = 1;
    };

    /* --------------------------------------------------- pointer script */
    const SEN = { at: '.sn .shit', ay: 0.5 };
    const keys = web ? [
      { t: 4.15, at: '.ki0', tap: true },
      { t: 5.3, at: () => ({ x: 1190, y: 650 }), hold: 0.2 }, { t: 6.65, at: () => { const c = A.center('.pHome .mat'); return { x: c.x, y: c.y }; }, drag: true, move: 1.2 },
      { t: 10.1, at: '.pPurp .op1', tap: true }, { t: 15.9, at: '.pRes1 .save', tap: true },
      Object.assign({ t: 17.85, tap: true }, SEN), { t: 18.75, at: '.qm .sl1', tap: true }, { t: 19.8, at: '.pPre .pr0', tap: true },
      { t: 20.5, at: '.pEd .cph', hold: 0.1, dy: -90 }, { t: 21.55, at: '.pEd .cph', drag: true, move: 0.95, dy: -90 }, { t: 22.3, at: '.pEd .done', tap: true },
      { t: 25.0, at: '.bub .bbtn', tap: true }, { t: 27.0, at: '.pPlB .rm', tap: true }, { t: 30.0, at: '.bub .bbtn', tap: true },
      { t: 31.0, at: '.pGif .hR', hold: 0.1 }, { t: 32.0, at: '.pGif .hR', drag: true, move: 0.9 }, { t: 32.75, at: '.pGif .mk', tap: true }, { t: 38.6, at: '.pDone .saveall', tap: true },
    ] : [
      { t: 4.2, at: '.pHome .ki0', tap: true }, { t: 6.4, at: '.pPick .g0', tap: true },
      { t: 10.1, at: '.pPurp .op1', tap: true }, { t: 15.9, at: '.pRes1 .save', tap: true },
      Object.assign({ t: 17.85, tap: true }, SEN), { t: 18.75, at: '.qm .sl1', tap: true }, { t: 19.8, at: '.pPre .pr0', tap: true },
      { t: 20.5, at: '.pEd .cph', hold: 0.1, dy: -90 }, { t: 21.55, at: '.pEd .cph', drag: true, move: 0.95, dy: -90 }, { t: 22.3, at: '.pEd .done', tap: true },
      { t: 25.0, at: '.bub .bbtn', tap: true }, { t: 27.0, at: '.pPlB .rm', tap: true }, { t: 30.0, at: '.bub .bbtn', tap: true },
      { t: 31.0, at: '.pGif .hR', hold: 0.1 }, { t: 32.0, at: '.pGif .hR', drag: true, move: 0.9 }, { t: 32.75, at: '.pGif .mk', tap: true }, { t: 38.6, at: '.pDone .saveall', tap: true },
    ];
    A.pointer(keys);

    /* -------------------------------------------------------- timelines */
    const RANGES = {
      splash: [[0, 3.5, 'iris', 0.9, () => ({ cx: web ? 640 : 195, cy: web ? 340 : 440 })]],
      home: web ? [[2.6, 9.0, 'curtain', 0.7], [16.9, 19.5, 'fade', 0.01]] : [[2.6, 5.1, 'curtain', 0.7], [16.9, 19.5, 'fade', 0.01]],
      pick: web ? [[2.6, 9.0, 'curtain', 0.7], [16.9, 19.5, 'fade', 0.01]] : [[4.75, 8.8, 'fade', 0.01]],
      purp: [[web ? 8.0 : 8.1, 11.6, 'wipe', 0.5, { dir: 'r' }]],
      p1: [[10.85, 15.0, 'iris', 0.55, () => { const c = A.center('.pPurp .op1'); return { cx: c.x - CV.x, cy: c.y - CV.y }; }]],
      r1: [[14.3, 16.9, 'blinds', 0.6, { n: 9 }]],
      pre: [[18.9, 21.0, 'iris', 0.55, () => { const f = fan(1); return { cx: f.x - CV.x, cy: f.y - CV.y }; }]],
      ed: [[20.05, 24.7, 'wipe', 0.45, { dir: 'r' }]],
      plA: [[24.0, 25.8, 'wipe', 0.5, { dir: 'l' }]],
      plB: [[25.2, 27.7, 'iris', 0.5, () => { const c = A.center('.bub .bbtn'); return { cx: c.x - CV.x, cy: c.y - CV.y }; }]],
      p2: [[27.2, 29.3, 'iris', 0.4, () => { const c = A.center('.pPlB .rm'); return { cx: c.x - CV.x, cy: c.y - CV.y }; }]],
      sf: [[28.7, 30.8, 'blinds', 0.55, { n: 9 }]],
      gif: [[30.15, 33.6, 'curtain', 0.55]],
      p3: [[33.0, 35.9, 'iris', 0.4, () => { const c = A.center('.pGif .mk'); return { cx: c.x - CV.x, cy: c.y - CV.y }; }]],
      gr: [[35.2, 36.5, 'blinds', 0.55, { n: 9 }]],
      done: [[35.95, 41, 'iris', 0.8, () => ({ cx: CV.w / 2, cy: 330 })]],
    };
    const pages = { splash, home: L.home, pick: L.pick, purp: L.purp, p1: L.p1, r1: L.r1, pre: L.pre, ed: L.ed, plA: L.plA, plB: L.plB, p2: L.p2, sf: L.sf, gif: L.gif, p3: L.p3, gr: L.gr, done: L.done };
    const showAll = t => {
      for (const k in pages) {
        let p = 0, kind = 'fade', o = {};
        for (const r of RANGES[k]) if (t >= r[0] && t <= r[1]) { p = seg(t, r[0], r[0] + (r[3] || 0.5)); kind = r[2]; o = typeof r[4] === 'function' ? r[4]() : (r[4] || {}); }
        if (k === 'splash') A.reveal(pages[k], kind, p, Object.assign({ W: A.W, H: A.H }, o));
        else A.reveal(pages[k], kind, p, Object.assign({ W: CV.w, H: CV.h }, o));
      }
    };
    const SHOJI = [4.35, 16.45];
    const shojiAt = t => { for (const s of SHOJI) { const p = seg(t, s, s + 0.85); if (p > 0 && p < 1) return p < 0.45 ? E.out(p / 0.45) : p < 0.5 ? 1 : 1 - E.inOut(seg(p, 0.5, 1)); } return 0; };
    const BUB = [[0, null], [2.95, 'Welcome. Let us practise.'], [3.6, web ? 'Pick a kata on the left.' : 'Pick a kata to begin.'], [4.9, web ? 'Drag a photo onto the mat.' : 'Choose a photo.'], [web ? 6.9 : 6.5, 'Good eye. Keep going.'], [8.2, 'Exam form? One tap.'], [10.3, null], [10.95, 'Breathe in.'], [14.35, 'Done. Under 200 KB.'], [15.7, 'Saved. Nice work.'], [16.6, null], [16.95, 'Tap me for the quick menu.'], [17.8, null], [19.0, 'Pick a frame.'], [20.0, 'Slide the photo. I hold the frame.'], [22.35, 'Sealing the crop.'], [23.3, 'Well framed.'], [24.0, null], [24.2, 'This photo knows where it was taken. Check?', 'Check'], [25.15, null], [25.5, 'Found it. Pune.'], [26.5, 'Anyone can see this. Remove it?'], [27.2, 'Hold still. Wiping it.'], [28.75, 'Safe to share.'], [29.5, 'Next: the beach clip. Make a GIF?', 'Make a GIF'], [30.1, null], [30.8, 'Slide the red handles. Keep 3 seconds.'], [32.4, 'Now make it.'], [33.1, 'Breathe in. 36 frames to go.'], [35.25, 'It loops. Lovely.'], [36.2, 'Four katas. Blue belt!'], [38.2, 'A deep bow. You earned it.'], [39.3, null]];
    BUB.forEach(b => { b[3] = null; });
    const BP = web ? { x: DK.x + 70, y: DK.y - 150, w: 280 } : { x: DK.x + 62, y: DK.y - 148, w: 236 };
    const TLINE = SHOJI.concat([]);
    const XPEND = web ? { x: CV.x + 250, y: 30 } : { x: 78, y: 70 };
    const XPST = web ? [[CV.x + 360, CV.y + 130], [CV.x + 520, CV.y + 160], [CV.x + 350, CV.y + 280], [CV.x + 300, CV.y + 260]] : [[290, 250], [280, 370], [210, 300], [250, 300]];

    /* refs */
    const R = {
      rkn: qa('.rkn'), rkx: qa('.rkx'), xb: qa('.xbar i'), pips: qa('.pips'), dgs: qa('.dg'), dgn: qa('.dgn'), stks: qa('.stk'), skn: qa('.skn, .skn2'),
      sz: q('.pProc1 .sz'), pc: qa('.pc'), sg1: q('.sg1'), sg2: q('.sg2'), sg3: q('.sg3'), pcd: q('.pcd'),
      op: qa('.pPurp .op'), pr0: q('.pPre .pr0'), cph: q('.cph'), cfr: q('.cfr'), done: q('.pEd .done'), mini: q('.mini'), ctag: q('.ctag'), ehint: q('.ehint'),
      th0: q('.pPick .th'), ck: q('.pPick .ck'), facts: q('.pPick .facts'),
      shp: q('.shp'), shc: q('.shc'), rm: q('.pPlB .rm'), mpinB: q('.pPlB .mpin'), mapB: q('.pPlB .mapc'), scan: q('.scan'), rg: q('.rg'), warn: q('.warn'),
      p2pin: q('.pProc2 .mpin'), p2map: q('.pProc2 .wmap'), vid: q('.pGif .vid'), selw: q('.selw'), hL: q('.hL'), hR: q('.hR'), tL: q('.tL'), tR: q('.tR'), sv: q('.sv'), sd: q('.sd'), mk: q('.pGif .mk'),
      cells: qa('.cells i'), fcn: q('.fcn'), gfr: q('.gfr'), gres: q('.gres'), saveall: q('.saveall'), sal: q('.sal'),
      rcs: qa('.rc'), tie: q('svg.tie'), bo: q('.bo'), bi: q('.bi'), no: q('.no'), ni: q('.ni'), kn0: q('.kn0'), kn1: q('.kn1'), dbn: q('.dbn'), dbs: q('.dbs'), dxp: q('.dxp'),
      hss: qa('.hs'), tapn: q('.tapn'), ad: q('.pDone .ad'), prom: q('.pDone .prom'), save: q('.pRes1 .save'), aft: q('.pRes1 .aft'), mst: qa('.mst'), mat: q('.mat'), mdrop: q('.mdrop'), mt1: q('.mt1'), mt2: q('.mt2'),
      kis: qa('.ki0, .ki1, .ki2, .ki3, .ki4', host === S ? S : S), rrw: qa('.rrw'),
      hk: { r1: q('.pRes1 .hkw'), ed: q('.pEd .hkw'), sf: q('.pSafe .hkw'), gr: q('.pGifRes .hkw') },
    };
    R.kis = qa('.kr[class*="ki"]');
    const IN = { r1: q('.pRes1 .in'), ed: q('.pEd .in'), sf: q('.pSafe .in'), gr: q('.pGifRes .in') };
    const burstAt = (key, sel, t0, o) => { const b = BURST[key] || (BURST[key] = {}); return b; };
    const BURST = {};
    const bursts = [[T.shrink - 0.2, '.pRes1 .hk', 'r1'], [T.crop - 0.2, '.pEd .hk', 'ed'], [T.place - 0.2, '.pSafe .hk', 'sf'], [T.gif - 0.2, '.pGifRes .hk', 'gr']];
    const slam = (t, t0, wrap, rest) => {
      const d = t - t0, k = seg(d, 0, 0.16), land = d >= 0.16 ? d - 0.16 : -1;
      const sc = d < 0 ? 2.2 : d < 0.16 ? lerp(2.2, 1, E.in(k)) : 1 + 0.1 * Math.exp(-13 * land) * Math.cos(28 * land);
      set(wrap, { r: rest + (d < 0.16 ? (1 - k) * 14 : 0), s: sc, o: seg(d, 0, 0.05) });
      const ring = wrap.querySelector('.hkr'); if (ring) { const rq = seg(d, 0.16, 0.7); ring.style.opacity = d > 0.16 && rq < 1 ? ((1 - rq) * 0.8).toFixed(2) : '0'; ring.style.transform = `scale(${(1 + rq * 1.2).toFixed(3)})`; }
    };
    const shake = (e, t, t0) => { const d = t - t0 - 0.16; if (d > 0 && d < 0.5) { const a = Math.exp(-8 * d) * 6; sty(e, 'transform', `translate(${(Math.sin(d * 70) * a).toFixed(1)}px,${(Math.cos(d * 60) * a * 0.6).toFixed(1)}px)`); } else sty(e, 'transform', 'none'); };
    let breathIn = true;

    return {
      update(t) {
        showAll(t);
        /* shoji */
        const c = shojiAt(t); const sj = shj.children;
        sty(sj[0], 'transform', `translateX(${(-(1 - c) * 100).toFixed(2)}%)`); sty(sj[1], 'transform', `translateX(${((1 - c) * 100).toFixed(2)}%)`); sty(shj, 'display', c > 0 ? '' : 'none');
        /* xp, rank, belt */
        const xpv = 380 + GAIN.reduce((s, [a, v]) => s + v * E.out(seg(t, a, a + 0.8)), 0), lvl = t >= 37.95;
        const val = lvl ? 30 : Math.min(500, xpv), mx = lvl ? 700 : 500;
        R.rkn.forEach(e => txt(e, lvl ? 'Blue belt' : 'Green belt')); R.rkx.forEach(e => txt(e, `${Math.round(val)} / ${mx} XP`)); R.xb.forEach(e => sty(e, 'width', (val / mx * 100).toFixed(1) + '%'));
        const bc = t < 37.5 ? BEL[2] : hexMix(BEL[2], BEL[3], E.inOut(seg(t, 37.5, 38.0)));
        if (S._bc !== bc) { S._bc = bc; S.style.setProperty('--belt', bc); }
        /* katas, pips, goal, streak */
        const pc = { shrink: 2 + (t >= T.shrink ? 1 : 0), crop: 1 + (t >= T.crop ? 1 : 0), place: (t >= T.place ? 1 : 0), gif: 1 + (t >= T.gif ? 1 : 0), conv: 0, Resize: 1, Rotate: 0, Blur: 0 };
        R.pips.forEach(p => { const n = pc[p.dataset.k] || 0; cls(p, 'full', n === 3); [...p.children].forEach((i, k) => cls(i, 'on', k < n)); });
        const done = [T.shrink, T.crop, T.place, T.gif].filter(x => t >= x).length;
        R.dgs.forEach(d => [...d.children].forEach((i, k) => cls(i, 'on', k < done))); R.dgn.forEach(e => txt(e, String(done)));
        const gk = E.out(seg(t, 37.4, 38.2)), sk = t >= 37.6 ? '7' : '6';
        R.skn.forEach(e => txt(e, sk));
        R.stks.forEach(s => { qa('.sg', s).forEach((g2, i) => { if (i < 6) att(g2, 'opacity', '1'); else { const y0 = +g2.dataset.y; att(g2, 'transform', `translate(0 ${y0}) scale(1 ${Math.max(0.001, gk).toFixed(3)}) translate(0 ${-y0})`); att(g2, 'opacity', gk > 0 ? '1' : '0'); } }); const lf = s.querySelector('.lfg'); att(lf, 'transform', `translate(0 ${((1 - gk) * +lf.dataset.sh).toFixed(1)}) rotate(${(Math.sin(t * 1.5) * 2).toFixed(1)} 14 8)`); });
        if (web) {
          const sel = t < 4.15 ? -1 : t < 17.3 ? 0 : t < 24 ? 1 : t < 30 ? 2 : t < 36 ? 3 : -1;
          qa('.wl .kr').forEach((k, i) => { cls(k, 'on', i === sel); const p = E.out(seg(t, 2.7 + i * 0.07, 3.2 + i * 0.07)); set(k, { x: (1 - p) * -16, o: p }); });
          qa('.wr .rrw').forEach((r, i) => { const dn = t >= [T.shrink, T.crop, T.place, T.gif][i]; txt(r.querySelector('.rs'), dn ? ['196 KB · JPG', '1080 × 1350', 'Place removed', '2.1 MB · 36 frames'][i] : 'Waiting'); const m = r.querySelector('.hkm'); m.style.display = dn ? '' : 'none'; });
          set(q('.wtop'), { o: seg(t, 2.5, 2.9) }); set(q('.wl'), { o: seg(t, 2.5, 2.9) }); set(q('.wr'), { o: seg(t, 2.6, 3.0) });
          cls(R.mat, 'hot', t > 6.0 && t < 6.9);
        }
        /* home list rows pop in and press */
        qa('.pHome .kr').forEach((k, i) => { const p = E.out(seg(t, 2.8 + i * 0.07, 3.3 + i * 0.07)); if (t < 4.0) set(k, { y: (1 - p) * 14, o: p }); else set(k, { y: 0, o: 1 }); });
        A.press(q('.ki0', L.home), t, 4.2); if (web) A.press(q('.wl .ki0'), t, 4.15);
        /* splash */
        if (t < 3.6) {
          const ds = seg(t, 0, 0.3); drop.style.left = (web ? 640 : 195) + 'px'; drop.style.top = (lerp(-20, web ? 340 : 440, E.in(ds))) + 'px'; drop.style.opacity = t < 0.3 ? '1' : '0';
          const e1 = splash.querySelector('.e1'), e2 = splash.querySelector('.e2'); att(e1, 'stroke-dashoffset', (680 - 680 * E.out(seg(t, 0.5, 1.6))).toFixed(1)); att(e2, 'stroke-dashoffset', (650 - 620 * E.out(seg(t, 0.7, 1.8))).toFixed(1));
          set(splash.querySelector('.sp-t'), { y: (1 - E.out(seg(t, 0.7, 1.3))) * 14, o: seg(t, 0.7, 1.2) });
          const b = splash.querySelector('.bell'), sw = t > 0.95 ? Math.sin((t - 0.95) * 22) * 18 * Math.exp(-3 * (t - 0.95)) : 0;
          set(b, { o: seg(t, 0.4, 0.8) * (1 - seg(t, 2.2, 2.6)) }); att(b.querySelector('svg'), 'style', `transform:rotate(${sw.toFixed(1)}deg);transform-origin:50% 0`);
          set(splash.querySelector('.sp-l'), { o: seg(t, 1.2, 1.7) });
          if (web) {/* bell sits right of Sensei */}
        }
        /* mat and pick */
        if (web) {
          const fq = E.inOut(seg(t, 5.3 + 0.32, 6.65)), land = seg(t, 6.65, 7.0);
          const mc = { x: CV.x + CV.w / 2, y: CV.y + 300 };
          set(fcard, { x: lerp(1190, mc.x, fq) - 82, y: lerp(650, mc.y, fq) - 40, r: (1 - fq) * 8, s: 1 - 0.4 * E.in(land), o: seg(t, 4.9, 5.2) * (1 - seg(t, 6.9, 7.1)) });
          const dropped = t >= 6.7 && t < 10.9;
          set(R.mdrop, { s: 0.92 + 0.08 * E.outBack(seg(t, 6.7, 7.2)), o: dropped ? seg(t, 6.7, 6.95) * (1 - seg(t, 8.0, 8.3) * 0) : 0 });
          const hub = t >= 16.9; txt(R.mt1, hub ? 'Tap Sensei for the quick menu' : 'Drop a photo on the mat'); txt(R.mt2, hub ? 'Or press 1 to 5 for a kata. Everything stays in this browser.' : 'or press Ctrl O to choose. JPG, HEIC, PNG, WEBP and MP4 work.');
          set(q('.mat > div:first-child'), { o: dropped ? 0.2 : 1 }); set(R.mat.querySelector('h3'), { o: dropped ? 0 : 1 }); set(R.mat.querySelector('p'), { o: dropped ? 0 : 1 });
        } else {
          const sel = t >= 6.4; cls(R.th0, 'sel', sel); set(R.ck, { s: E.outBack(seg(t, 6.4, 6.75)), o: sel ? 1 : 0 }); set(R.facts, { y: (1 - E.out(seg(t, 6.7, 7.2))) * 14, o: seg(t, 6.7, 7.0) });
        }
        /* purpose */
        R.op.forEach((o, i) => cls(o, 'on', i === 1 && t >= 10.1)); A.press(R.op[1], t, 10.1);
        set(q('.pPurp .pcol'), { o: 1 });
        /* process 1: shrink */
        const p1 = seg(t, 11.0, 14.3), rp = A.rush(p1);
        bars[0].update(p1, t);
        txt(R.sz, A.fmtBytes(lerp(D.portrait.bytes, D.shrink.bytes, rp)));
        txt(R.sg1, p1 < 0.25 ? 'Folding pixels' : p1 < 0.55 ? 'Trimming the edges' : p1 < 0.88 ? 'Checking: under 200 KB' : 'Sealing the file');
        txt(q('.pProc1 .pc'), Math.round(rp * 100) + '%');
        set(R.pcd, { s: 1 - 0.3 * E.inOut(rp), r: Math.sin(t * 5) * 1.2 * (1 - p1) });
        if (t > 10.8 && t < 14.9) drawInk(inkFX, t, p1, inkFX.w / 2, web ? 98 : 116, web ? 108 : 126, 26);
        /* result 1 */
        slam(t, T.shrink + 0.2, R.hk.r1, -8); shake(IN.r1, t, T.shrink + 0.2);
        R.aft.style.transform = `scaleX(${(1 - 0.96 * E.inOut(seg(t, 14.5, 15.2))).toFixed(3)})`;
                A.press(R.save, t, 15.9);
        /* crop */
        const dragQ = E.inOut(seg(t, 20.55, 21.55));
        set(R.cph, { x: 60 - 130 * dragQ });
        set(R.cfr, { s: 0.9 + 0.1 * E.out(seg(t, 20.05, 20.5)), o: seg(t, 20.05, 20.3) });
        const mini = seg(t, 22.45, 23.25); sty(R.mini, 'display', t > 22.4 && t < 23.4 ? '' : 'none'); brush.update(mini, t);
        txt(q('.mini .mt'), mini < 1 ? 'Cropping to ' + D.crop.px : 'Cropped');
        txt(R.ehint, t < 22.4 ? 'Slide the photo. The bright box is what you keep.' : 'Saved as a new file. The original stays safe.');
        R.pr0 && cls(R.pr0, 'on', t >= 19.8); A.press(R.pr0, t, 19.8); A.press(R.done, t, 22.3);
        slam(t, T.crop + 0.2, R.hk.ed, -8); shake(IN.ed, t, T.crop + 0.2);
        set(R.hk.ed.parentNode, { o: 1 });
        /* place */
        const sc = seg(t, 24.35, 25.0); sty(R.scan, 'top', (sc * 250) + 'px'); set(R.scan, { o: sc > 0 && sc < 1 ? 1 : 0 }); R.rg.style.left = '58%'; R.rg.style.top = '62%'; set(R.rg, { s: 0.5 + E.out(seg(t, 24.8, 25.2)), o: seg(t, 24.8, 24.95) * (1 - seg(t, 25.0, 25.2)) });
        const rem = seg(t, 28.7, 29.0);
        set(R.mpinB, { y: -50 * (1 - E.outBack(seg(t, 25.5, 26.0))), s: 1 - rem, o: seg(t, 25.5, 25.65) * (1 - rem) }); R.mapB.style.filter = `grayscale(${rem}) opacity(${1 - 0.4 * rem})`;
        A.press(R.rm, t, 27.0);
        const p2 = seg(t, 27.2, 28.7); bars[1].update(p2, t);
        txt(R.sg2, p2 < 0.4 ? 'Reading the tags' : p2 < 0.8 ? 'Wiping the pin' : 'Sealing the photo'); txt(q('.pProc2 .pc'), Math.round(A.rush(p2) * 100) + '%');
        set(R.p2pin, { s: 1 - 0.9 * E.in(seg(p2, 0.3, 0.95)), o: 1 - seg(p2, 0.85, 1) }); R.p2map.style.filter = `grayscale(${E.inOut(seg(p2, 0.5, 1))})`;
        if (t > 27.1 && t < 29.4) drawInk(mapFX, t, p2, mapFX.w / 2, web ? 98 : 116, web ? 104 : 118, 54);
        const sf0 = T.place + 0.2; att(R.shp, 'stroke-dashoffset', (320 * (1 - E.out(seg(t, sf0 - 0.1, sf0 + 0.5)))).toFixed(1)); att(R.shc, 'stroke-dashoffset', (70 * (1 - E.out(seg(t, sf0 + 0.35, sf0 + 0.7)))).toFixed(1));
        slam(t, sf0 + 0.25, R.hk.sf, 8); shake(IN.sf, t, sf0 + 0.25);
        /* gif */
        const hq = E.inOut(seg(t, 31.62, 32.0 + 0.0)), hq2 = E.inOut(seg(t, 31.1, 32.0));
        const Lp = 4 / 12, Rp = (8 - hq2) / 12; const sw = R.vid.parentNode.querySelector('.strw').clientWidth || (web ? 640 : 354);
        R.selw.style.left = (Lp * 100) + '%'; R.selw.style.width = ((Rp - Lp) * 100) + '%'; R.hL.style.left = (Lp * 100) + '%'; R.hR.style.left = (Rp * 100) + '%'; R.tL.style.left = (Lp * 100) + '%'; R.tR.style.left = (Rp * 100) + '%';
        txt(R.tR, hq2 > 0.5 ? '0:07' : '0:08'); txt(R.sv, `0:04 – ${hq2 > 0.5 ? '0:07' : '0:08'}`); txt(R.sd, hq2 > 0.5 ? `${D.video.clip} · ${D.video.fps} fps` : `4.0 s · ${D.video.fps} fps`);
        R.vid.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        A.press(R.mk, t, 32.75);
        const p3 = seg(t, 33.0, 35.2), fr = Math.round(A.rush(p3) * D.video.frames); bars[2].update(p3, t);
        txt(R.fcn, `${fr} of ${D.video.frames}`); R.cells.forEach((c2, i) => { cls(c2, 'on', i < fr); cls(c2, 'n', i === fr - 1 && p3 < 1); });
        txt(R.sg3, p3 < 0.3 ? 'Cutting frames' : p3 < 0.75 ? 'Painting the loop' : 'Squeezing to 2.1 MB'); txt(q('.pProc3 .pc'), Math.round(A.rush(p3) * 100) + '%');
        R.gfr.style.backgroundImage = A.frame(Math.floor(t * 12) % 12); set(R.gfr, { r: Math.sin(t * 3) * 2 });
        if (t > 32.9 && t < 35.9) drawPet(petFX, t, p3, 134);
        R.gres.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        slam(t, T.gif + 0.25, R.hk.gr, 7); shake(IN.gr, t, T.gif + 0.25);
        /* done */
        const dq = t - 36.0;
        R.rcs.forEach((r, i) => { const p = E.outBack(seg(dq, 0.35 + i * 0.12, 0.8 + i * 0.12)); set(r, { y: (1 - p) * 16, o: seg(dq, 0.35 + i * 0.12, 0.6 + i * 0.12) }); });
        const tp = seg(t, 37.0, 38.3), tw = seg(tp, 0, 1);
        att(R.bo, 'stroke-dashoffset', (-240 * E.inOut(seg(tw, 0, 0.4))).toFixed(1)); att(R.bi, 'stroke-dashoffset', (-240 * E.inOut(seg(tw, 0, 0.4))).toFixed(1));
        att(R.no, 'stroke-dashoffset', (240 * (1 - E.inOut(seg(tw, 0.3, 0.75)))).toFixed(1)); att(R.ni, 'stroke-dashoffset', (240 * (1 - E.inOut(seg(tw, 0.3, 0.75)))).toFixed(1));
        const kk = E.outElastic(seg(tw, 0.75, 1));
        att(R.kn0, 'opacity', tw < 0.12 ? '1' : '0'); att(R.kn1, 'transform', `translate(160 56) scale(${kk.toFixed(3)}) translate(-160 -56)`); att(R.kn1, 'opacity', tw > 0.75 ? '1' : '0');
        txt(R.dbn, tw > 0.55 ? 'Blue belt' : 'Green belt'); txt(R.dbs, tw > 0.55 ? 'Level up! 30 of 700 XP · ' : '500 of 500 XP · '); txt(R.dxp, `+${Math.round(150 * E.out(seg(dq, 0.6, 1.4)))} XP`);
        R.hss.forEach((h, i) => slam(t, 36.8 + i * 0.28, h.querySelector('.hkw'), -6 + i * 3));
        txt(R.tapn, `${Math.round(13 * E.out(seg(dq, 0.8, 1.6)))} taps`);
        set(R.ad, { o: seg(t, 37.6, 38.1) }); set(R.prom, { o: seg(t, 37.2, 37.7) });
        A.press(R.saveall, t, 38.6);
        /* toast, xp flies */
        qa('.bst').forEach(b => { const k = +b.dataset.k, f0 = 380 + GAIN.slice(0, k).reduce((a, g2) => a + g2[1], 0), f1 = f0 + GAIN[k][1], v = lerp(f0, f1, E.out(seg(t, GAIN[k][0] + 0.1, GAIN[k][0] + 1.1))); sty(b.querySelector('i'), 'width', (Math.min(v, 500) / 500 * 100).toFixed(1) + '%'); txt(b.querySelector('.bsl'), f1 > 500 && v >= 499.5 ? 'Belt full!' : `${Math.round(Math.min(v, 500))} / 500 XP`); });
        const svd = t >= 15.95; A.html(R.save, svd ? `${I('check', 20, 3)}Saved to ${web ? 'Downloads' : 'Gallery'}` : `${I('save', 20, 2.2)}Save photo${web ? ' <kbd>Ctrl S</kbd>' : ''}`); cls(R.save, 'ok', svd);
        cls(R.saveall, 'ok', t >= 38.75); A.html(R.sal, t < 38.75 ? 'Save all 4' : '4 files saved');
        const mq = Math.min(seg(t, 17.9, 18.15), 1 - seg(t, 18.85, 19.15)); set(scrim, { o: mq });
        xpf.forEach((f, i) => { const g0 = GAIN[i][0] + 0.15, pq = seg(t, g0, g0 + 0.95); txt(f, `+${GAIN[i][1]} XP`); set(f, { x: lerp(XPST[i][0], XPEND.x, E.inOut(pq)) - 30, y: lerp(XPST[i][1], XPEND.y, E.inOut(pq)) - 14 - 50 * Math.sin(Math.PI * pq) * (1 - pq), s: 1 - 0.25 * pq, o: seg(t, g0, g0 + 0.12) * (1 - seg(pq, 0.85, 1)) }); });
        /* bursts */
        bursts.forEach((b, i) => {
          if (t < b[0] - 0.05) return;
          const o = BURST[b[2]] || (BURST[b[2]] = (() => { const cc = A.center(b[1]); const mk = (shape, n, extra) => A.confetti(S, Object.assign({ shape, count: n, x: cc.x, y: cc.y, seed: 30 + i, colors: ['#D7352B', '#F29A92', '#F7B9B2', '#5E8C61', '#9CC59F', '#EBB832'], power: 520, spread: Math.PI * 1.7, gravity: 700, dur: 2.2 }, extra)); return [mk('petal', 36, {}), mk('spark', 22, { power: 700, dur: 0.9, gravity: 300, colors: ['#D7352B', '#EBB832', '#14161A'] })]; })());
          o.forEach(x => x.update(t - (b[0] + 0.36)));
        });
        const fin = BURST.fin || (t >= 36.5 ? (BURST.fin = [A.confetti(S, { shape: 'petal', count: 60, x: A.W / 2 - (web ? 40 : 0), y: web ? 260 : 190, seed: 77, colors: ['#D7352B', '#F29A92', '#3C6FB6', '#9CC59F', '#EBB832', '#F7B9B2'], power: 760, spread: Math.PI * 1.5, gravity: 620, dur: 3 })]) : null);
        if (fin) fin[0].update(t - 37.9);
        /* breath ring */
        const bw = FOCUS.find(f => t >= f[0] && t < f[1]);
        if (bw) { const ph = (t * 0.55) % 1, k = 0.5 - 0.5 * Math.cos(ph * 6.283), cx = SPOS.x, cy = SPOS.y - 70 * SPOS.s; const rr2 = lerp(0.8, 1.55, k) * (web ? 1.1 : 1); set(br, { x: cx - 50, y: cy - 50, s: rr2 * 0.8, o: 0.9 * Math.min(seg(t, bw[0], bw[0] + 0.4), 1 - seg(t, bw[1] - 0.3, bw[1])) }); breathIn = ph < 0.5; }
        else set(br, { o: 0 });
        /* quick menu */
        const qa0 = 17.95, close = E.in(seg(t, 18.8, 19.15)), ring = seg(t, 17.85, 18.4);
        qa('.sl', qm).forEach((s, i) => { const f = fan(i), e = E.outBack(seg(t, qa0 + i * 0.04, qa0 + 0.36 + i * 0.04)), pk = i === 1; const sc2 = (pk ? 1 + close * 0.7 : 1 - close) * Math.max(0.01, e); cls(s, 'pk', pk && t >= 18.75); set(s, { x: (1 - e) * (ORG.x - f.x), y: (1 - e) * (ORG.y - f.y), s: sc2, o: t < qa0 || t > 19.2 ? 0 : Math.min(1, seg(t, qa0 + i * 0.04, qa0 + 0.1 + i * 0.04)) * (1 - close * (pk ? 1 : 1)) });
          const lb = s.querySelector('em'); set(lb, { o: pk && close > 0 ? 0 : 1 }); A.press(s, t, 18.75 + 0); });
        const rg = q('.qring'); set(rg, { x: ORG.x, y: ORG.y, s: 1 + ring * 5, o: t > 17.85 && t < 18.5 ? (1 - ring) * 0.6 : 0 });
        /* bubble */
        let cur = null; BUB.forEach(b => { if (t >= b[0]) cur = b; });
        if (!cur || !cur[1]) set(bub, { o: 0 }); else {
          txt(bub.firstChild, cur[1].startsWith('Breathe') && t < 35 ? (breathIn ? 'Breathe in…' : 'Breathe out…') : cur[1]); const bt = bub.lastChild; txt(bt, cur[2] || ''); cls(bt, 'on', !!cur[2]);
          const k = E.outBack(seg(t, cur[0], cur[0] + 0.35)); bub.style.left = BP.x + 'px'; bub.style.width = BP.w + 'px';
          const hh = bub.offsetHeight || 40; bub.style.top = (BP.y + (cur[2] ? -14 : 0)) + 'px';
          set(bub, { s: 0.7 + 0.3 * k, o: seg(t, cur[0], cur[0] + 0.15) });
        }
        if (t < 2.9) set(bub, { o: 0 });
        drawSensei(t);
      },
    };
  },
});

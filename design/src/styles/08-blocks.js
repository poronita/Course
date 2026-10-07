/* Style 8 — Recipe Blocks. Every action is a snap-together block. */
ISK.register({
  id: 'blocks',
  order: 8,
  name: 'Recipe Blocks',
  tagline: 'Snap tools together once. Reuse the recipe forever.',
  concept: 'Every action is a bright block that snaps onto the next one, like toy bricks. Home offers ready-made recipes, so a beginner taps "Exam photo" and is done. Tinkerers drag blocks from a palette to build their own. The photo rides a small conveyor down the chain, and each block lights up as it works.',
  wins: [
    'One tap on a recipe does a three-step job, and the same recipe runs on 20 photos at once.',
    'Each block shows its setting in plain words, so people see what will happen before they press Run.',
    'Saved recipes bring people back. Rivals make them repeat the same taps every time.',
  ],
  risks: [
    'Building a recipe from scratch is new to many people, so the ready-made recipes must carry the first visit.',
    'Drag and snap on a small phone needs big touch targets, a forgiving magnet and an undo.',
  ],
  scores: { simple: 4, fun: 5, wow: 4, effort: 4 },
  palette: ['#FF8A3D', '#3E7BFA', '#20B26C', '#8E5BFF', '#FF5C8A', '#1A1F36'],
  type: 'Rubik at 500 to 800. Its soft corners match the toy-brick blocks, and the bold weights keep white labels readable on bright colours.',
  motion: 'Blocks snap on like magnets with a small overshoot, a conveyor carries the photo down the chain, and each block lights up in turn as it runs.',
  notes: {
    intro: 'Four blocks drop in and snap into a tower. Home then offers four ready-made recipes.',
    pick: 'The photo goes into the dark "Photo in" block that starts every chain. On the web, the file comes in from the desktop.',
    shrink: 'One tap on "Exam photo" snaps three blocks together. The photo rides the conveyor and the size counts down to 196 KB.',
    crop: 'The user drags "Instagram post 4:5" from the palette. It snaps into the chain, then the user slides the photo in the frame.',
    privacy: 'The "Where was it taken?" block reports Pune, India on a small map. A green "Remove place" block snaps on and wipes it.',
    gif: 'A tall Trim block holds the film strip. The Make GIF block counts its 36 frames as they pass.',
    done: 'Four results, a "Save as recipe" moment and a batch run on 20 photos. The only ad sits below the results.',
  },
  statusBar: 'dark',
  css: `
.st-blocks{--bg:#F6F7FB;--ink:#1A1F36;--mut:#5B6280;--line:#DDE1EC;--card:#fff;background-color:var(--bg);background-image:linear-gradient(rgba(26,31,54,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(26,31,54,.055) 1px,transparent 1px);background-size:22px 22px;color:var(--ink);font-family:Rubik,system-ui,sans-serif;font-weight:500;font-size:16px;line-height:1.3}
.st-blocks .pg{position:absolute;inset:0;padding:54px 20px 28px;display:flex;flex-direction:column;gap:14px}
.st-blocks.m-app .c,.st-blocks.m-app .r{display:contents}
.st-blocks.m-app .wo,.st-blocks.m-web .ao{display:none !important}
.st-blocks.m-web .pg{left:260px;top:56px;padding:0;display:grid;grid-template-columns:minmax(0,1fr) 360px}
.st-blocks.m-web .c{padding:22px 36px;display:flex;flex-direction:column;gap:16px;min-width:0}
.st-blocks.m-web .r{padding:20px 22px;display:flex;flex-direction:column;gap:12px;min-width:0}
/* blocks */
.st-blocks .blk{--c:#3E7BFA;--d:#2858CF;--under:var(--bg);position:relative;display:flex;align-items:center;gap:10px;height:54px;padding:0 12px 3px 10px;border-radius:12px;background-color:var(--c);color:#fff;font-weight:700;font-size:17px;white-space:nowrap;box-shadow:inset 0 2px 0 rgba(255,255,255,.35),inset 0 -5px 0 var(--d),0 3px 8px rgba(26,31,54,.14)}
.st-blocks .blk::before,.st-blocks .blk::after,.st-blocks .hat::after{content:"";position:absolute;left:20px;width:34px;height:8px;clip-path:polygon(0 0,100% 0,76% 100%,24% 100%)}
.st-blocks .blk::before{top:0;background:var(--under)}
.st-blocks .blk::after{bottom:-8px;background:var(--d)}
.st-blocks .blk.joined::before{display:none}
.st-blocks .k-crop{--c:#FF8A3D;--d:#D9662A}.st-blocks .k-size{--c:#3E7BFA;--d:#2858CF}.st-blocks .k-priv{--c:#20B26C;--d:#138A51}.st-blocks .k-fmt{--c:#8E5BFF;--d:#6A3BD6}.st-blocks .k-anim{--c:#FF5C8A;--d:#D93A69}
.st-blocks .blk .bi{width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.24);display:grid;place-items:center;flex:none}
.st-blocks .blk b{font-weight:700;text-shadow:0 1px 0 rgba(0,0,0,.16);overflow:hidden;text-overflow:ellipsis}
.st-blocks .blk em{font-style:normal;margin-left:auto;background:#fff;color:var(--d);border-radius:9px;padding:5px 9px;font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;flex:none}
.st-blocks .blk .bok{position:absolute;right:-11px;top:50%;margin-top:-14px;width:24px;height:24px;border-radius:50%;background:#fff;color:var(--d);display:grid;place-items:center;box-shadow:0 2px 6px rgba(26,31,54,.28);opacity:0}
.st-blocks .blk.lit,.st-blocks .blk.flash{filter:brightness(1.08) saturate(1.15);box-shadow:inset 0 2px 0 rgba(255,255,255,.45),inset 0 -5px 0 var(--d),0 0 0 3px #fff,0 0 0 6px var(--c),0 10px 26px var(--c)}
.st-blocks .rg{display:block;border:2.5px solid #fff;border-radius:3px}
.st-blocks .blk.sm{height:32px;font-size:14px;border-radius:9px;padding:0 6px 3px 5px;gap:7px;box-shadow:inset 0 2px 0 rgba(255,255,255,.35),inset 0 -4px 0 var(--d),0 2px 4px rgba(26,31,54,.12)}
.st-blocks .blk.sm::before,.st-blocks .blk.sm::after{left:13px;width:24px;height:6px}
.st-blocks .blk.sm::after{bottom:-6px}
.st-blocks .blk.sm .bi{width:22px;height:22px;border-radius:6px}
.st-blocks .blk.sm em{font-size:12px;padding:2px 6px;border-radius:6px}
.st-blocks .blk.xs{height:24px;font-size:12px;border-radius:7px;padding:0 8px 2px;gap:5px;text-shadow:0 1px 0 rgba(0,0,0,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),inset 0 -3px 0 var(--d)}
.st-blocks .blk.xs::before,.st-blocks .blk.xs::after{left:9px;width:16px;height:5px}
.st-blocks .blk.xs::after{bottom:-5px}
.st-blocks .blk.tall{height:auto;flex-direction:column;align-items:stretch;gap:8px;padding:9px 12px 15px 10px}
.st-blocks .blk .row{display:flex;align-items:center;gap:10px}
.st-blocks .hat{position:relative;display:flex;align-items:center;gap:12px;height:66px;padding:0 14px 4px 9px;border-radius:20px 20px 12px 12px;background:var(--ink);color:#fff;box-shadow:inset 0 2px 0 rgba(255,255,255,.14),inset 0 -5px 0 #0B0E1F,0 4px 10px rgba(26,31,54,.18)}
.st-blocks .hat::after{bottom:-8px;background:#0B0E1F}
.st-blocks .hat .hph{width:48px;height:48px;border-radius:11px;background:#2E3556 center/cover;flex:none;border:2px solid rgba(255,255,255,.85);display:grid;place-items:center;color:#fff}
.st-blocks .hat div{min-width:0}
.st-blocks .hat small{display:block;font-size:11px;letter-spacing:.09em;text-transform:uppercase;opacity:.62;font-weight:600}
.st-blocks .hat b{display:block;font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st-blocks .hat span{display:block;font-size:13px;opacity:.75;white-space:nowrap}
.st-blocks .chain{position:relative;padding-left:48px;display:flex;flex-direction:column;flex:none}
.st-blocks.m-web .chain{width:500px}
.st-blocks.m-web .chain .blk:not(.tall){height:60px}.st-blocks.m-web .chain .blk{font-size:18.5px}.st-blocks.m-web .chain .slotw{height:60px}
.st-blocks.m-web .chain .hat{height:72px}.st-blocks.m-web .chain .hat .hph{width:54px;height:54px}.st-blocks.m-web .chain .hat b{font-size:17.5px}
.st-blocks .wsf{position:absolute;left:260px;right:360px;bottom:0;height:40px;border-top:1.5px solid var(--line);background:#ffffffd9;display:flex;align-items:center;gap:18px;padding:0 20px;z-index:15}
.st-blocks .wsf .zm{margin-left:auto;font-size:13px;color:var(--mut);font-weight:600}
.st-blocks .chain>*{position:relative}
.st-blocks .chain>.belt{position:absolute;left:8px;top:24px;bottom:6px;width:26px;border-radius:13px;background:repeating-linear-gradient(180deg,#2C3354 0 8px,#454D78 8px 16px);box-shadow:inset 0 0 0 3px var(--ink),0 2px 0 rgba(26,31,54,.15)}
.st-blocks .chain>.tok{position:absolute;left:1px;top:0;width:40px;height:40px;border-radius:10px;border:3px solid #fff;background:center/cover;box-shadow:0 5px 12px rgba(26,31,54,.38);z-index:40}
.st-blocks .slotw{height:54px}
.st-blocks .slot{position:absolute;inset:0;border:2.5px dashed rgba(26,31,54,.3);border-radius:12px;display:flex;align-items:center;gap:8px;padding-left:16px;color:var(--mut);font-weight:600;font-size:15px;background:rgba(255,255,255,.7)}
.st-blocks .slot.hot{border-color:#1A1F36;background:#fff;color:var(--ink)}
.st-blocks .slotw .blk{position:absolute;left:0;right:0;top:0}
.st-blocks .ghost{position:absolute;left:0;top:0;z-index:900;pointer-events:none}
.st-blocks .ghost .blk{height:100%;box-shadow:inset 0 2px 0 rgba(255,255,255,.35),inset 0 -5px 0 var(--d),0 18px 30px rgba(26,31,54,.32)}
/* chrome */
.st-blocks .btn{height:58px;border-radius:16px;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;font-size:19px;font-weight:700;box-shadow:inset 0 -4px 0 #0B0E1F,0 6px 14px rgba(26,31,54,.2)}
.st-blocks .btn .pl{width:30px;height:30px;border-radius:50%;background:#20B26C;display:grid;place-items:center}
.st-blocks .btn.blue{background:#3E7BFA;box-shadow:inset 0 -4px 0 #2858CF,0 6px 14px rgba(62,123,250,.3)}
.st-blocks .btn.off{background:#C9CEDC;box-shadow:inset 0 -4px 0 #B3B9CB;color:#fff}
.st-blocks .is-pressed{transform:translateY(3px) scale(.98) !important;filter:brightness(.94)}
.st-blocks.m-app .afoot{position:absolute;left:20px;right:20px;bottom:34px;height:58px}
.st-blocks.m-app .afoot .btn{position:absolute;inset:0}
.st-blocks.m-web .afoot{display:flex;align-items:center;gap:12px}
.st-blocks.m-web .afoot .btn{width:250px;height:52px;font-size:17px}
.st-blocks.m-web .r .afoot .btn{width:100%}
.st-blocks .kbd{font:600 12px/1 "JetBrains Mono",monospace;border:1.5px solid var(--line);border-bottom-width:3px;border-radius:6px;padding:4px 6px;background:#fff;color:var(--mut)}
.st-blocks .kh{display:flex;align-items:center;gap:7px;font-size:13.5px;color:var(--mut)}
.st-blocks .bar{display:flex;align-items:center;gap:12px;min-height:46px;flex:none}
.st-blocks .bk{width:42px;height:42px;border-radius:50%;background:#fff;border:1.5px solid var(--line);display:grid;place-items:center;flex:none}
.st-blocks .bar h2{margin:0;font-size:24px;font-weight:800;line-height:1.1;letter-spacing:-.01em}
.st-blocks.m-web .bar h2{font-size:30px}
.st-blocks .bar p{margin:2px 0 0;font-size:14px;color:var(--mut)}
.st-blocks .h1{margin:0;font-size:29px;font-weight:800;letter-spacing:-.015em;line-height:1.1}
.st-blocks.m-web .h1{font-size:36px}
.st-blocks .lbl{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin:0}
.st-blocks .toast{position:absolute;left:20px;right:20px;bottom:112px;background:var(--ink);color:#fff;border-radius:16px;padding:14px 16px;font-size:17px;font-weight:600;display:flex;align-items:center;gap:12px;z-index:60;box-shadow:0 12px 30px rgba(26,31,54,.3)}
.st-blocks.m-web .toast{left:auto;right:16px;bottom:18px;width:348px;font-size:16px}
.st-blocks .toast i{width:30px;height:30px;border-radius:50%;background:#20B26C;display:grid;place-items:center;flex:none}
.st-blocks .brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px}
.st-blocks .chip{display:flex;align-items:center;gap:6px;background:#E3F5EC;color:#0F7A47;font-weight:700;border-radius:999px;padding:6px 11px;font-size:13px;white-space:nowrap}
/* splash */
.st-blocks .splash{align-items:center;justify-content:center;text-align:center;gap:16px}
.st-blocks.m-web .pg.splash{left:0;top:0;display:flex;z-index:50;background:inherit}
.st-blocks .tower{width:236px;display:flex;flex-direction:column;margin-bottom:14px}
.st-blocks.m-web .tower{width:280px}
.st-blocks .tower .blk{transform-origin:50% 100%}
.st-blocks .splash h1{margin:0;font-size:34px;font-weight:800;letter-spacing:-.02em}
.st-blocks.m-web .splash h1{font-size:46px}
.st-blocks .splash p{margin:0;font-size:17px;color:var(--mut);max-width:300px}
.st-blocks.m-web .splash p{max-width:none;font-size:19px}
/* web shell */
.st-blocks .top{position:absolute;left:0;right:0;top:0;height:56px;background:#fff;border-bottom:1.5px solid var(--line);display:flex;align-items:center;gap:22px;padding:0 20px;z-index:20}
.st-blocks .crumbs{display:flex;align-items:center;gap:8px;color:var(--mut);font-size:15px;padding-left:22px;border-left:1.5px solid var(--line);height:28px}
.st-blocks .crumbs b{color:var(--ink);font-weight:700}
.st-blocks .tr{margin-left:auto;display:flex;align-items:center;gap:18px}
.st-blocks .pal{position:absolute;left:0;top:56px;bottom:0;width:260px;background:#fff;border-right:1.5px solid var(--line);padding:12px 16px;display:flex;flex-direction:column;gap:7px;z-index:10}
.st-blocks .pal .blk{--under:#fff}
.st-blocks .srch{display:flex;align-items:center;gap:8px;height:34px;border:1.5px solid var(--line);border-radius:10px;padding:0 8px 0 10px;color:var(--mut);font-size:14px;margin-bottom:2px}
.st-blocks .srch .kbd{margin-left:auto;padding:2px 5px}
.st-blocks .grp{display:flex;flex-direction:column;gap:5px;padding:4px 6px 8px;margin:0 -6px;border-radius:12px}
.st-blocks .grp.hl{background:#FFF1E6;box-shadow:inset 0 0 0 2px #FFC49C}
.st-blocks .grp.hl.gp{background:#E3F6EC;box-shadow:inset 0 0 0 2px #9EDDBE}
.st-blocks .gh{font-size:11.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--mut);display:flex;align-items:center;gap:7px}
.st-blocks .gh i{width:10px;height:10px;border-radius:3px}
.st-blocks .rpbg{position:absolute;right:0;top:56px;bottom:0;width:360px;background:#fff;border-left:1.5px solid var(--line)}
.st-blocks .lift{transform:translateY(-2px) scale(1.04);box-shadow:0 0 0 3px #fff,0 0 0 5px var(--c),0 8px 16px rgba(26,31,54,.2) !important}
/* home */
.st-blocks .rcs{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.st-blocks .rc{background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px 12px 12px;display:flex;flex-direction:column;gap:10px;box-shadow:0 2px 0 var(--line)}
.st-blocks.m-web .rc{padding:14px 16px 16px;gap:12px}
.st-blocks .rc .ms{display:flex;flex-direction:column;flex:none}
.st-blocks.m-web .rc .ms{width:170px}
.st-blocks .rc .blk{--under:#fff}
.st-blocks .rc b{display:block;font-size:18px;font-weight:700}
.st-blocks .rc span{font-size:13.5px;color:var(--mut)}
.st-blocks.m-web .rc b{font-size:20px}.st-blocks.m-web .rc span{font-size:14.5px}
.st-blocks .own{display:flex;align-items:center;gap:12px;border:2.5px dashed rgba(26,31,54,.25);border-radius:16px;padding:10px 14px;color:var(--mut);font-size:14.5px;background:rgba(255,255,255,.6)}
.st-blocks .own b{display:block;color:var(--ink);font-size:16px}
.st-blocks .own .pi{width:36px;height:36px;border-radius:10px;background:var(--ink);color:#fff;display:grid;place-items:center;flex:none}
.st-blocks .safe{margin-top:auto;display:flex;align-items:center;justify-content:center;gap:8px;color:#0F7A47;font-weight:600;font-size:14.5px}
.st-blocks .hello{display:flex;justify-content:space-between;align-items:center}
.st-blocks .sub{margin:-8px 0 0;color:var(--mut);font-size:16px}
.st-blocks .drop{position:relative;height:300px;border:2.5px dashed rgba(26,31,54,.25);border-radius:18px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;color:var(--mut);font-size:14px}
.st-blocks .drop b{color:var(--ink);font-size:19px}
.st-blocks .drop .ui{width:56px;height:56px;border-radius:16px;background:#E8EFFF;color:#3E7BFA;display:grid;place-items:center}
.st-blocks .drop.hot{border-color:#3E7BFA;background:#F0F5FF}
.st-blocks .dropped{position:absolute;inset:10px;border-radius:12px;background:center 30%/cover;display:flex;align-items:flex-end;padding:10px}
.st-blocks .dropped span{background:#fff;border-radius:10px;padding:6px 10px;font-size:14px;font-weight:700;color:var(--ink)}
.st-blocks .fcard{position:absolute;left:50%;top:50%;width:170px;margin:-70px 0 0 -85px;background:#fff;border-radius:14px;box-shadow:0 18px 40px rgba(26,31,54,.28);padding:8px;display:flex;flex-direction:column;gap:6px;z-index:5}
.st-blocks .fcard i{height:100px;border-radius:9px;background:center 30%/cover}
.st-blocks .fcard span{font-size:13px;font-weight:700;color:var(--ink);text-align:left}
.st-blocks .qi{display:flex;align-items:center;gap:10px;border:1.5px solid var(--line);border-radius:12px;padding:7px 10px;font-size:14px}
.st-blocks .qi i{width:36px;height:36px;border-radius:8px;background:center/cover;flex:none}
.st-blocks .qi b{display:block;font-size:14px}
.st-blocks .qi .qs{margin-left:auto;font-weight:700;font-size:13px;color:var(--mut);white-space:nowrap}
.st-blocks .qi .qs.ok{color:#0F7A47}
.st-blocks .qe{margin:0;font-size:14px;color:var(--mut)}
/* gallery */
.st-blocks .galp{padding:0}
.st-blocks .scrim{position:absolute;inset:0;background:rgba(26,31,54,.42)}
.st-blocks .sheet{position:absolute;left:0;right:0;bottom:0;height:610px;background:#fff;border-radius:26px 26px 0 0;padding:12px 20px 34px;display:flex;flex-direction:column;gap:14px}
.st-blocks .hdl{width:44px;height:5px;border-radius:3px;background:#D3D7E3;align-self:center;flex:none}
.st-blocks .shh b{display:block;font-size:22px;font-weight:800}
.st-blocks .shh span{font-size:14px;color:var(--mut)}
.st-blocks .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-blocks .th{aspect-ratio:1;border-radius:14px;background:center/cover;position:relative}
.st-blocks .th.sel{box-shadow:inset 0 0 0 5px #3E7BFA}
.st-blocks .ck{position:absolute;right:7px;top:7px;width:32px;height:32px;border-radius:50%;background:#3E7BFA;color:#fff;display:grid;place-items:center;box-shadow:0 2px 6px rgba(0,0,0,.25)}
.st-blocks .sheet .btn{margin-top:auto}
/* live preview */
.st-blocks .live{display:flex;gap:14px;background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px;flex:none}
.st-blocks.m-web .live{flex-direction:column;align-items:center;padding:16px 16px 14px;gap:12px;border-radius:16px;background:#F6F7FB}
.st-blocks .lph{width:132px;height:170px;border-radius:12px;background:center 28%/cover;flex:none}
.st-blocks.m-web .lph{width:170px;height:219px}
.st-blocks .lin{flex:1;display:flex;flex-direction:column;gap:7px;min-width:0;justify-content:center}
.st-blocks.m-web .lin{width:100%}
.st-blocks .num{font-size:38px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.st-blocks .meter{position:relative;height:12px;border-radius:6px;background:#E6E9F2}
.st-blocks .meter i{position:absolute;left:0;top:0;bottom:0;border-radius:6px;background:#3E7BFA}
.st-blocks .meter u{position:absolute;top:-4px;bottom:-4px;width:3px;border-radius:2px;background:var(--ink)}
.st-blocks .lt{font-size:13px;color:var(--mut)}
.st-blocks .facts{font-size:14.5px;font-weight:600}
.st-blocks .okr{display:flex;align-items:center;gap:7px;color:#0F7A47;font-weight:700;font-size:14.5px}
.st-blocks .okr i{width:22px;height:22px;border-radius:50%;background:#20B26C;color:#fff;display:grid;place-items:center;flex:none}
/* crop */
.st-blocks .drawer{position:absolute;left:0;right:0;bottom:0;height:372px;background:#fff;border-radius:26px 26px 0 0;padding:10px 20px 30px;display:flex;flex-direction:column;gap:12px;box-shadow:0 -10px 30px rgba(26,31,54,.12);z-index:50}
.st-blocks .dh{display:flex;justify-content:space-between;align-items:baseline}
.st-blocks .dh b{font-size:19px;font-weight:800}.st-blocks .dh span{font-size:14px;color:var(--mut)}
.st-blocks .tabs{display:flex;gap:6px}
.st-blocks .tab{border:2px solid var(--c);color:var(--d);border-radius:999px;padding:6px 10px;font-size:14px;font-weight:700;background:#fff}
.st-blocks .tab.on{background:var(--c);color:#fff}
.st-blocks .plist{display:flex;flex-direction:column;gap:12px}
.st-blocks .plist .blk{--under:#fff;height:48px}
.st-blocks .phint{margin:0;color:var(--mut);font-size:15px;text-align:center;padding-top:30px}
.st-blocks .ced{position:relative;height:452px;border-radius:18px;overflow:hidden;background:#141a29 center/cover;flex:none}
.st-blocks.m-web .ced{height:380px}
.st-blocks .cimg{position:absolute;left:50%;top:50%;width:640px;height:480px;margin:-240px 0 0 -320px;background:center/cover}
.st-blocks.m-web .cimg{width:520px;height:390px;margin:-195px 0 0 -260px}
.st-blocks .cfr{position:absolute;left:50%;top:50%;width:288px;height:360px;margin:-188px 0 0 -144px;border:3px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(12,15,30,.6);background:linear-gradient(#fff6,#fff6) 33.3% 0/2px 100% no-repeat,linear-gradient(#fff6,#fff6) 66.6% 0/2px 100% no-repeat,linear-gradient(#fff6,#fff6) 0 33.3%/100% 2px no-repeat,linear-gradient(#fff6,#fff6) 0 66.6%/100% 2px no-repeat}
.st-blocks.m-web .cfr{width:240px;height:300px;margin:-160px 0 0 -120px}
.st-blocks .ctag{position:absolute;left:10px;bottom:10px;display:flex;align-items:center;gap:7px;background:#FF8A3D;color:#fff;border-radius:10px;padding:6px 10px;font-size:14px;font-weight:700}
.st-blocks .chint{position:absolute;left:10px;right:10px;top:10px;display:flex;align-items:center;gap:8px;background:#fffffff2;border-radius:10px;padding:7px 10px;font-size:14px;font-weight:600}
.st-blocks .tip{display:flex;align-items:center;gap:10px;color:var(--mut);font-size:14.5px}
/* privacy */
.st-blocks .ans{position:relative;background:#fff;border:2px solid #20B26C;border-radius:18px;padding:10px;display:flex;flex-direction:column;gap:10px;flex:none}
.st-blocks .ans::before{content:"";position:absolute;left:70px;top:-11px;width:18px;height:18px;background:#fff;border-left:2px solid #20B26C;border-top:2px solid #20B26C;transform:rotate(45deg)}
.st-blocks.m-web .ans{width:500px}
.st-blocks .map{position:relative;height:112px;border-radius:12px;overflow:hidden;background:#E4ECF5}
.st-blocks .map svg{position:absolute;inset:0;width:100%;height:100%}
.st-blocks .mpin{position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-40px 0 0 -20px;color:#fff}
.st-blocks .mpin svg{position:static;width:40px;height:40px;fill:#E5484D}
.st-blocks .place{display:flex;align-items:center;gap:10px;padding:0 4px}
.st-blocks .place b{display:block;font-size:22px;font-weight:800;line-height:1.1}
.st-blocks .place span{font-size:13.5px;color:var(--mut)}
.st-blocks .warn,.st-blocks .okb{display:flex;align-items:center;gap:9px;border-radius:12px;padding:9px 11px;font-size:14.5px;font-weight:600}
.st-blocks .warn{background:#FFF4E0;color:#8A5300}
.st-blocks .okb{background:#E3F5EC;color:#0F7A47}
.st-blocks .tray{display:flex;flex-direction:column;gap:10px;background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px 14px 18px}
.st-blocks .tray .blk{--under:#fff;width:230px}
.st-blocks .tray span{font-size:14px;color:var(--mut);font-weight:600}
.st-blocks .pph{height:210px;border-radius:14px;background:center/cover}
.st-blocks .exif{display:flex;flex-direction:column;border:1.5px solid var(--line);border-radius:14px}
.st-blocks .exif div{display:flex;justify-content:space-between;gap:10px;padding:10px 12px;font-size:14.5px}
.st-blocks .exif div+div{border-top:1.5px solid var(--line)}
.st-blocks .exif span{color:var(--mut)}
.st-blocks .exif b{font-weight:700;text-align:right}
.st-blocks .exif .gone b{color:#0F7A47}
/* gif */
.st-blocks .strip{position:relative;display:flex;height:46px;border-radius:8px;overflow:visible}
.st-blocks .strip>i{flex:1;background:center/cover}
.st-blocks .strip>i:first-child{border-radius:8px 0 0 8px}.st-blocks .strip>i:nth-child(8){border-radius:0 8px 8px 0}
.st-blocks .shade{position:absolute;top:0;bottom:0;background:rgba(26,31,54,.55)}
.st-blocks .selw{position:absolute;top:-4px;bottom:-4px;border:3px solid #fff;border-radius:8px}
.st-blocks .hd{position:absolute;top:50%;width:14px;height:40px;margin-top:-20px;border-radius:6px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.3)}
.st-blocks .hd::after{content:"";position:absolute;left:5px;top:11px;width:4px;height:18px;border-radius:2px;background:#FF5C8A}
.st-blocks .hL{left:-9px}.st-blocks .hR{right:-9px}
.st-blocks .gout{position:relative;height:196px;border-radius:16px;background:center/cover;flex:none}
.st-blocks.m-web .gout{height:236px}
.st-blocks .gb{position:absolute;left:10px;top:10px;background:#1A1F36e6;color:#fff;border-radius:9px;padding:5px 10px;font-size:14px;font-weight:700}
.st-blocks .gb.g{background:#FF5C8A}
.st-blocks .loop{position:absolute;right:10px;top:10px;width:34px;height:34px;border-radius:50%;background:#fffffff0;color:#FF5C8A;display:grid;place-items:center}
/* done */
.st-blocks .res{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.st-blocks.m-web .res{grid-template-columns:repeat(4,1fr);gap:12px}
.st-blocks .rt{background:#fff;border:1.5px solid var(--line);border-radius:16px;overflow:hidden;position:relative}
.st-blocks .rt i{display:block;height:68px;background:center 30%/cover}
.st-blocks.m-web .rt i{height:96px}
.st-blocks .rt div{padding:7px 10px 9px}
.st-blocks .rt b{display:block;font-size:15px}
.st-blocks .rt span{font-size:13px;color:var(--mut)}
.st-blocks .rt em{position:absolute;left:8px;top:8px;width:26px;height:26px;border-radius:8px;background:var(--c);color:#fff;display:grid;place-items:center;box-shadow:inset 0 -3px 0 var(--d)}
.st-blocks .saverec{display:flex;align-items:center;gap:14px;background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px 14px;flex:none}
.st-blocks .saverec .ms{width:104px;display:flex;flex-direction:column;flex:none}
.st-blocks .saverec .blk{--under:#fff}
.st-blocks .srt{flex:1;display:flex;flex-direction:column;gap:7px;min-width:0}
.st-blocks .fld{height:40px;border:2px solid #3E7BFA;border-radius:10px;display:flex;align-items:center;padding:0 10px;font-size:16px;font-weight:700;white-space:nowrap;overflow:hidden}
.st-blocks .fld s{display:inline-block;width:2px;height:20px;background:#3E7BFA;margin-left:2px;text-decoration:none}
.st-blocks .svb{height:40px;border-radius:10px;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;gap:7px;font-weight:700;font-size:15px;box-shadow:inset 0 -3px 0 #0B0E1F}
.st-blocks .svb.ok{background:#20B26C;box-shadow:inset 0 -3px 0 #138A51}
.st-blocks.m-web .srt{flex-direction:row;align-items:flex-end;gap:12px}
.st-blocks.m-web .srt>div:first-child{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px}
.st-blocks.m-web .svb{width:150px;flex:none}
.st-blocks .batch{display:flex;flex-direction:column;gap:9px;background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px 14px;flex:none}
.st-blocks.m-web .batch{border:0;padding:0;background:none;gap:12px}
.st-blocks .brow{display:flex;align-items:center;gap:12px}
.st-blocks .brow b{display:block;font-size:17px}.st-blocks .brow span{font-size:13.5px;color:var(--mut)}
.st-blocks .bst{position:relative;width:44px;height:44px;flex:none}
.st-blocks .bst i{position:absolute;width:34px;height:34px;border-radius:8px;border:2px solid #fff;background:center/cover;box-shadow:0 2px 5px rgba(26,31,54,.25)}
.st-blocks .bgo{margin-left:auto;height:40px;padding:0 16px;border-radius:10px;background:#3E7BFA;color:#fff;font-weight:700;display:flex;align-items:center;gap:6px;box-shadow:inset 0 -3px 0 #2858CF;flex:none}
.st-blocks.m-web .bgo{margin:0;height:50px;justify-content:center;font-size:17px}
.st-blocks .bgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.st-blocks .bgrid i{aspect-ratio:1;border-radius:9px;background:center 30%/cover;position:relative}
.st-blocks .bgrid i u{position:absolute;right:-4px;top:-4px;width:20px;height:20px;border-radius:50%;background:#20B26C;color:#fff;display:grid;place-items:center;border:2px solid #fff}
.st-blocks .bpr{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:700;color:var(--mut);font-variant-numeric:tabular-nums}
.st-blocks .bpr .meter{flex:1}
.st-blocks .bpr .meter i{background:#20B26C}
.st-blocks .promise{display:flex;align-items:center;gap:8px;color:#0F7A47;font-weight:700;font-size:15.5px;margin:-6px 0 0}
.st-blocks .ad{display:flex;align-items:center;gap:12px;border:2px dashed var(--line);border-radius:16px;padding:10px 12px;background:#ffffffb0;flex:none}
.st-blocks .ad i{width:44px;height:44px;border-radius:10px;background:#E6E9F2;flex:none}
.st-blocks .ad small{font-size:11px;font-weight:700;letter-spacing:.06em;border:1.5px solid var(--mut);color:var(--mut);border-radius:6px;padding:1px 6px;margin-right:6px}
.st-blocks .ad span{font-size:14px;color:var(--mut)}
.st-blocks.m-app .done .ad{order:5}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web;
    const { seg, ease, set, cls, txt, lerp, clamp } = A;
    const P = { por: A.photo('portrait'), mtn: A.photo('mountain'), city: A.photo('city') };
    const blk = (k, ic, label, param, c = '', sz = 18) => `<div class="blk k-${k} ${c}"><span class="bi">${I(ic, sz, 2.6)}</span><b>${label}</b>${param ? `<em>${param}</em>` : ''}<i class="bok">${I('check', 14, 3.6)}</i></div>`;
    const rg = (p, m) => { const w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.round(m * p.h / p.w); return `<i class="rg" style="width:${w}px;height:${h}px"></i>`; };
    const blkR = (p, label, c, m) => `<div class="blk k-crop ${c}"><span class="bi">${rg(p, m)}</span><b>${label}</b><em>${p.ratio}</em></div>`;
    const hat = (ph, small, name, meta, c = '') => `<div class="hat ${c}"><i class="hph" style="background-image:${ph}"></i><div><small>${small}</small><b>${name}</b><span>${meta}</span></div></div>`;
    const bar = (title, sub) => `<div class="bar"><span class="bk ao">${I('back', 22, 2.6)}</span><div><h2>${title}</h2><p>${sub}</p></div></div>`;
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="14" rx="4" fill="#FF8A3D"/><path d="M10 19h10l-2 4h-6z" fill="#D9662A"/><rect x="5" y="21" width="30" height="14" rx="4" fill="#3E7BFA"/><path d="M10 21h10l-2 4h-6z" fill="#D9662A"/></svg>`;
    const runBtn = `<div class="afoot fr"><div class="btn run"><span class="pl">${I('play', 16)}</span>Run recipe</div><span class="kh wo"><span class="kbd">⌘ ↵</span>to run</span></div>`;
    const toast = (c, msg) => `<div class="toast ${c}"><i>${I('check', 18, 3.2)}</i><span>${msg}</span></div>`;
    const pg = (cls, inner) => A.el('div', 'pg ' + cls, S, inner);
    const where = web ? 'Downloads' : 'Gallery';
    const PRE = D.crop.presets, pIG = PRE[0];
    const crops = [[PRE[0], 'Instagram post'], [PRE[1], 'Instagram story'], [PRE[2], 'Square'], [PRE[5], 'YouTube thumbnail']];

    /* ---------- web shell */
    if (web) {
      A.el('div', 'rpbg', S);
      A.el('div', 'top', S, `<div class="brand">${logo(30)}Image Swiss Knife</div><div class="crumbs">Recipes ${I('next', 14, 2.4)}<b class="crumb">Home</b></div>
        <div class="tr"><span class="kh"><span class="kbd">⌘ O</span>Add photos</span><span class="kh"><span class="kbd">⌘ ↵</span>Run</span><span class="chip">${I('lock', 15, 2.6)}Runs in your browser</span></div>`);
      const g = (k, c, name, inner) => `<div class="grp g-${k} ${c}"><div class="gh"><i class="k-${k}" style="background:var(--c)"></i>${name}</div>${inner}</div>`;
      A.el('div', 'wsf', S, `<span class="kh"><span class="kbd">⌘ Z</span>Undo</span><span class="kh"><span class="kbd">Del</span>Remove block</span><span class="kh"><span class="kbd">⌘ S</span>Save recipe</span><span class="zm">Workspace · 100%</span>`);
      A.el('div', 'pal', S, `<div class="srch">${I('search', 16, 2.4)}Find a block<span class="kbd">/</span></div>
        ${g('crop', '', 'Crop · social sizes', crops.map((x, i) => blkR(x[0], x[1], 'sm pc' + i, 13)).join(''))}
        ${g('size', '', 'Size', blk('size', 'ruler', 'Resize', 'px', 'sm', 14) + blk('size', 'shrink', 'Shrink', 'KB', 'sm', 14))}
        ${g('priv', 'gp', 'Privacy', blk('priv', 'pin', 'Where was it taken?', '', 'sm', 14) + blk('priv', 'eyeoff', 'Remove place', '', 'sm prm', 14))}
        ${g('fmt', '', 'Format', blk('fmt', 'convert', 'Save as', 'JPG', 'sm', 14))}
        ${g('anim', '', 'Motion', blk('anim', 'scissors', 'Trim video', '', 'sm', 14) + blk('anim', 'film', 'Make GIF', 'fps', 'sm', 14))}`);
    }

    /* ---------- splash */
    const tw = [['crop', 'crop', 'Crop', '4:5'], ['size', 'shrink', 'Shrink', '200 KB'], ['priv', 'eyeoff', 'Remove place', ''], ['anim', 'film', 'Make GIF', '12 fps']];
    const splash = pg('splash', `<div class="tower">${tw.map(x => blk(x[0], x[1], x[2], x[3])).join('')}</div><h1>Image Swiss Knife</h1><p>Snap tools together. Your photos stay on this ${web ? 'computer' : 'phone'}.</p>`);

    /* ---------- home */
    const RC = [
      ['Exam photo', 'Under 200 KB, as JPG', [['size', 'Resize'], ['size', 'Shrink'], ['fmt', 'Save JPG']]],
      ['Insta post', '4:5, ready to post', [['crop', 'Crop 4:5'], ['size', 'Shrink'], ['fmt', 'Save JPG']]],
      ['Safe to share', 'Removes the place', [['priv', 'Find place'], ['priv', 'Remove place'], ['fmt', 'Save copy']]],
      ['Quick GIF', 'Video to a short loop', [['anim', 'Trim'], ['anim', 'Make GIF'], ['fmt', 'Save GIF']]],
    ];
    const mstack = (bs, ws = [100, 84, 94]) => `<div class="ms">${bs.map((b, j) => `<div class="blk xs k-${b[0]}${j ? ' joined' : ''}" style="width:${ws[j]}%">${b[1]}</div>`).join('')}</div>`;
    const home = pg('home', `<div class="c">
      <div class="hello ao"><div class="brand">${logo(30)}Image Swiss Knife</div><span class="chip">${I('lock', 14, 2.6)}On this phone</span></div>
      <h2 class="h1">What shall we make?</h2>
      <div class="hat hin"><i class="hph">${I('plus', 24, 2.8)}</i><div><small>Photo in</small><b class="hn">${web ? 'Drop a photo on the right' : 'Add a photo'}</b><span class="hm">${web ? 'or press ⌘ O' : 'Tap to choose from Gallery'}</span></div></div>
      <p class="lbl">Ready-made recipes</p>
      <div class="rcs">${RC.map((r, i) => `<div class="rc rc${i}">${mstack(r[2])}<div><b>${r[0]}</b><span>${r[1]}</span></div></div>`).join('')}</div>
      <div class="own"><span class="pi">${I('plus', 20, 2.8)}</span><div><b>Build your own</b>${web ? 'Drag blocks from the left. They snap together.' : 'Snap blocks together your way.'}</div></div>
      <div class="safe ao">${I('lock', 16, 2.6)}Photos never leave this phone.</div></div>
      <div class="r wo"><p class="lbl">Live preview</p>
        <div class="drop"><span class="ui">${I('upload', 28, 2.4)}</span><b>Drop photos here</b><span>Up to 20 at once</span>
          <div class="dropped" style="background-image:${P.por}"><span>${D.portrait.file} · ${D.portrait.size}</span></div>
          <div class="fcard"><i style="background-image:${P.por}"></i><span>${D.portrait.file}</span></div></div>
        <p class="lbl">Batch queue</p><p class="qe">No photos yet.</p>
        <div class="qi"><i style="background-image:${P.por}"></i><div><b>${D.portrait.file}</b>${D.portrait.dims}</div><span class="qs">${D.portrait.size}</span></div></div>`);

    /* ---------- gallery sheet (app) */
    const thumbs = [P.por, P.mtn, P.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: 0.8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    const galp = web ? null : pg('galp', `<div class="scrim"></div><div class="sheet"><i class="hdl"></i><div class="shh"><b>Choose a photo</b><span>Recent · It goes into the "Photo in" block</span></div>
      <div class="gal">${thumbs.map((b, i) => `<div class="th p${i}" style="background-image:${b}">${i === 0 ? `<div class="ck">${I('check', 18, 3.2)}</div>` : ''}</div>`).join('')}</div>
      <div class="btn blue use">Use 1 photo</div></div>`);

    /* ---------- exam recipe */
    const exam = pg('exam', `<div class="c">${bar('Exam photo', 'Ready-made recipe · 3 blocks')}
      <div class="chain"><i class="belt"></i>${hat(P.por, 'Photo in', D.portrait.file, `${D.portrait.size} · HEIC`)}
        ${blk('size', 'ruler', 'Resize', '350 × 450', 'joined')}${blk('size', 'shrink', 'Shrink', '≤ 200 KB', 'joined')}${blk('fmt', 'convert', 'Save as', 'JPG', 'joined')}
        <i class="tok" style="background-image:${P.por}"></i></div>${runBtn}
      ${web ? `<div class="tip">${I('layers', 20, 2.2)}Every block shows its setting. Tap one to change it.</div>` : ''}</div>
      <div class="r"><p class="lbl wo">Live preview</p>
        <div class="live"><i class="lph" style="background-image:${P.por}"></i><div class="lin"><span class="lt ll">Size now</span><b class="num">4.8 MB</b>
          <div class="meter"><i></i><u></u></div><span class="lt">Black line: the 200 KB limit</span><span class="facts">HEIC · ${D.portrait.dims}</span>
          <span class="okr"><i>${I('check', 13, 3.6)}</i>Under 200 KB</span></div></div>
        <div class="afoot fs"><div class="btn blue save">${I('save', 22, 2.6)}Save to ${where}</div></div>
        <p class="lbl wo">Batch queue</p><div class="qi wo"><i style="background-image:${P.por}"></i><div><b>${D.portrait.file}</b>Exam photo</div><span class="qs eq">Waiting</span></div></div>
      ${toast('t1', `Saved to ${where} · ${D.shrink.size}`)}`);

    /* ---------- crop (build your own) */
    const crop = pg('crop', `<div class="c">${bar('My recipe', 'Build your own · drag blocks in')}
      <div class="chain"><i class="belt"></i>${hat(P.mtn, 'Photo in', 'IMG_1650.JPG', 'Mountain · 4000 × 3000')}
        <div class="slotw"><div class="slot">${I('plus', 18, 2.6)}Drop a block here</div>${blk('crop', 'crop', 'Crop · Instagram post', pIG.ratio, 'joined real')}</div>
        <i class="tok" style="background-image:${P.mtn}"></i></div>${runBtn}
      ${web ? `<div class="tip">${I('wand', 20, 2.2)}Let go near a slot. The block snaps in by itself.</div>` : ''}
      <div class="drawer ao"><i class="hdl"></i><div class="dh"><b>Add a block</b><span>Tap a colour</span></div>
        <div class="tabs">${[['crop', 'Crop'], ['size', 'Size'], ['priv', 'Privacy'], ['fmt', 'Format'], ['anim', 'Motion']].map((x, i) => `<span class="tab k-${x[0]} tb${i}">${x[1]}</span>`).join('')}</div>
        <p class="phint">Each colour holds one kind of tool.</p>
        <div class="plist">${crops.map((x, i) => blkR(x[0], x[1], 'pz' + i, 16)).join('')}</div></div></div>
      <div class="r"><p class="lbl wo">Live preview</p>
        <div class="ced"><div class="cimg" style="background-image:${P.mtn}"></div><div class="cfr"></div>
          <div class="chint">${I('crop', 18, 2.4)}Drag the photo to fit the frame</div><div class="ctag">${I('crop', 16, 2.6)}${D.crop.preset} · ${D.crop.px}</div></div>
        <p class="tip wo">The bright box is what people will see. The dark part is cut off.</p></div>
      ${toast('t2', `Saved · ${D.crop.px} · 4:5`)}`);

    /* ---------- privacy */
    const mapSVG = `<svg viewBox="0 0 400 140" preserveAspectRatio="xMidYMid slice"><rect width="400" height="140" fill="#E4ECF5"/><path d="M-10 110C80 90 130 125 210 100S330 50 410 66" stroke="#A9CBEE" stroke-width="14" fill="none"/><path d="M0 40h400M70 0v140M160 0l30 140M270 0v140M0 128h400M330 0l-50 140" stroke="#fff" stroke-width="7"/><path d="M0 74h400" stroke="#FFD98A" stroke-width="9"/><rect x="84" y="10" width="56" height="22" rx="4" fill="#CDE8D3"/><rect x="290" y="88" width="60" height="30" rx="4" fill="#CDE8D3"/></svg>`;
    const priv = pg('priv', `<div class="c">${bar('Safe to share', 'Find the place, then remove it')}
      <div class="chain"><i class="belt"></i>${hat(P.city, 'Photo in', D.place.file, `${D.place.device} · 12 Aug 2026`)}
        ${blk('priv', 'pin', 'Where was it taken?', '', 'joined bwh')}
        <div class="slotw"><div class="slot">${I('plus', 18, 2.6)}Drop a block here</div>${blk('priv', 'eyeoff', 'Remove place', '', 'joined real')}</div>
        <i class="tok" style="background-image:${P.city}"></i></div>
      <div class="ans"><div class="map">${mapSVG}<div class="mpin">${I('pin', 40, 2)}</div></div>
        <div class="place"><div><b class="pn">${D.place.city}, ${D.place.country}</b><span class="ps">${D.place.region} · ${D.place.when}</span></div></div>
        <div class="warn">${I('eye', 20, 2.4)}<span>Anyone you send it to can see this place.</span></div>
        <div class="okb">${I('shield', 20, 2.4)}<span>Place removed. Safe to share.</span></div></div>
      <div class="tray ao"><span>Snap this on to remove the place</span>${blk('priv', 'eyeoff', 'Remove place', '', 'src')}</div>
      ${runBtn}</div>
      <div class="r wo"><p class="lbl">Live preview</p><div class="pph" style="background-image:${P.city}"></div>
        <div class="exif"><div class="xp"><span>Place</span><b class="xpv">${D.place.city}, ${D.place.country}</b></div><div class="xg"><span>GPS</span><b class="xgv">${D.place.lat}, ${D.place.lon}</b></div><div><span>Taken</span><b>${D.place.when}</b></div><div><span>Camera</span><b>${D.place.device}</b></div></div></div>`);

    /* ---------- gif */
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(Math.round(i * 1.5))}"></i>`).join('');
    const gifp = pg('gifp', `<div class="c">${bar('Quick GIF', 'Ready-made recipe · 2 blocks')}
      <div class="chain"><i class="belt"></i>${hat(A.frame(2), 'Video in', D.video.file, `Video · ${D.video.len}`)}
        <div class="blk k-anim tall joined btr"><div class="row"><span class="bi">${I('scissors', 18, 2.6)}</span><b>Trim</b><em class="tv">0:04–0:08 · 4.0 s</em></div>
          <div class="strip">${strip}<b class="shade sL"></b><b class="shade sR"></b><div class="selw"><span class="hd hL"></span><span class="hd hR"></span></div></div><i class="bok">${I('check', 14, 3.6)}</i></div>
        ${blk('anim', 'film', 'Make GIF', '12 fps', 'joined bmk')}
        <i class="tok"></i></div>${runBtn}</div>
      <div class="r"><p class="lbl wo">Live preview</p>
        <div class="gout"><span class="gb">${D.video.file}</span><span class="loop">${I('convert', 18, 2.6)}</span></div>
        <span class="facts gf">Pick 3 seconds, then press Run</span>
        <div class="afoot fs"><div class="btn blue save">${I('save', 22, 2.6)}Save GIF</div></div></div>
      ${toast('t4', `GIF saved · ${D.video.size}`)}`);

    /* ---------- done */
    const RES = [[P.por, 'Exam photo', `${D.shrink.size} · JPG`, 'size', 'shrink'], [P.mtn, 'Insta post', D.crop.px, 'crop', 'crop'], [P.city, 'Safe to share', 'Place removed', 'priv', 'eyeoff'], [A.frame(5), 'Quick GIF', `${D.video.size} · ${D.video.clip}`, 'anim', 'film']];
    const bth = Array.from({ length: 20 }, (_, i) => i % 3 === 0 ? P.por : A.photo('abstract', { seed: 11 + i }));
    const done = pg('done', `<div class="c"><h2 class="h1">All done!</h2><p class="promise">${I('lock', 17, 2.6)}${web ? D.promiseWeb : D.promise}</p>
      <div class="res">${RES.map((x, i) => `<div class="rt r${i}"><i style="background-image:${x[0]}"></i><em class="k-${x[3]}">${I(x[4], 15, 2.6)}</em><div><b>${x[1]}</b><span>${x[2]}</span></div></div>`).join('')}</div>
      <div class="saverec">${mstack(RC[0][2], [100, 86, 94])}<div class="srt"><div><span class="lbl">Save as recipe</span><div class="fld"><span class="fn"></span><s></s></div></div><div class="svb">${I('star', 17, 2.4)}<span class="svl">Save recipe</span></div></div></div>
      <div class="ad"><i></i><div><small>Ad</small><span>Sponsored message. Shown only after your work is done.</span></div></div></div>
      <div class="r"><div class="batch">${web ? `<p class="lbl">Batch queue</p><div class="brow"><div><b>Run "My exam photo" on 20 photos</b><span>Same blocks, all at once</span></div></div>
          <div class="bgrid">${bth.map(b => `<i style="background-image:${b}"><u>${I('check', 11, 3.6)}</u></i>`).join('')}</div>`
        : `<div class="brow"><span class="bst">${[0, 1, 2].map(i => `<i style="left:${i * 5}px;top:${i * 4}px;background-image:${bth[i * 2]}"></i>`).join('')}</span><div><b>Run on 20 photos</b><span>Same recipe, all at once</span></div><span class="bgo">${I('play', 13)}Run</span></div>`}
        <div class="bpr"><div class="meter"><i></i></div><span class="bpn">0 of 20</span></div>
        ${web ? `<span class="bgo">${I('play', 15)}<span class="bgl">Run on 20 photos</span></span>` : ''}</div></div>`);

    /* ---------- ghosts for drag and snap */
    const gCrop = A.el('div', 'ghost', S, blk('crop', 'crop', 'Crop · Instagram post', pIG.ratio, 'joined'));
    const gPriv = A.el('div', 'ghost', S, blk('priv', 'eyeoff', 'Remove place', '', 'joined'));

    // stacking: upper blocks above lower ones so each bump covers the joint
    S.querySelectorAll('.chain,.ms,.tower').forEach(c => { const k = [...c.children]; k.forEach((ch, i) => { ch.style.zIndex = k.length - i + 1; }); });
    S.querySelectorAll('.belt').forEach(b => { b.style.zIndex = 0; });
    S.querySelectorAll('.chain .tok').forEach(b => { b.style.zIndex = 40; });

    const q = s => S.querySelector(s);
    const qa = s => [...S.querySelectorAll(s)];
    const sc = () => S.getBoundingClientRect().width / A.W || 1;
    const rect = e => { const r = e.getBoundingClientRect(), s = S.getBoundingClientRect(), k = sc(); return { x: (r.left - s.left) / k, y: (r.top - s.top) / k, w: r.width / k, h: r.height / k }; };
    const relY = (e, ref) => { const a = e.getBoundingClientRect(), b = ref.getBoundingClientRect(); return (a.top + a.height / 2 - b.top) / sc(); };
    const mkChain = p => ({ el: p.querySelector('.chain'), hat: p.querySelector('.chain .hat'), tok: p.querySelector('.tok'), belt: p.querySelector('.belt') });
    const CH = { exam: mkChain(exam), crop: mkChain(crop), priv: mkChain(priv), gif: mkChain(gifp) };
    CH.exam.bl = qa('.exam .chain .blk'); CH.crop.bl = [q('.crop .real')]; CH.priv.bl = [q('.priv .bwh'), q('.priv .real')]; CH.gif.bl = [q('.gifp .btr'), q('.gifp .bmk')];

    /* Photo token rides the belt; block i lights while t is in [a,b]. */
    function run(ch, t, t0, segs, tEnd) {
      const live = t >= t0 - 0.3;
      let y = relY(ch.hat, ch.el), prev = y;
      segs.forEach(([i, a, b]) => {
        const e = ch.bl[i], ty = relY(e, ch.el);
        if (t >= a - 0.3) y = lerp(prev, ty, ease.inOut(seg(t, a - 0.3, a)));
        prev = ty;
        const lit = t >= a && t < b;
        cls(e, 'lit', lit);
        if (live) set(e, { x: 0, y: 0, s: lit ? 1 + 0.03 * Math.sin(seg(t, a, b) * Math.PI) : 1 });
        set(e.querySelector('.bok'), { s: ease.outBack(seg(t, b, b + 0.3)), o: seg(t, b, b + 0.08) });
      });
      const ex = seg(t, tEnd, tEnd + 0.35);
      set(ch.tok, { y: y - 20 + ex * 46, s: 1 - 0.3 * ex, o: Math.min(seg(t, t0 - 0.25, t0), 1 - ex) });
      ch.belt.style.backgroundPosition = `0 ${(48 * clamp(t - t0, 0, tEnd + 0.35 - t0)).toFixed(1)}px`;
    }

    /* Drag a copy of src to just below-right of the slot, then the real block snaps in like a magnet. */
    const NEAR = { x: 22, y: 30 };
    const nearPt = slotW => () => { const b = rect(slotW); return { x: b.x + b.w / 2 + NEAR.x, y: b.y + b.h / 2 + NEAR.y }; };
    function snap(t, g, src, slotW, T0, HOLD, T1, MOVE, consume) {
      const st = Math.max(T0 + HOLD + 0.12, T1 - MOVE);
      const slot = slotW.querySelector('.slot'), real = slotW.querySelector('.real');
      cls(src, 'lift', t >= T0 - 0.06 && t < st + 0.1);
      if (consume) set(src, { o: t >= st ? 0 : 1 });
      if (t >= st && t < T1) {
        const a = rect(src), b = rect(slotW), qq = ease.inOut(seg(t, st, T1));
        const s0 = a.w / b.w * 1.04, s = lerp(s0, 1.04, ease.out(qq));
        g.style.width = b.w + 'px'; g.style.height = b.h + 'px';
        const cx = lerp(a.x + a.w / 2, b.x + b.w / 2 + NEAR.x, qq), cy = lerp(a.y + a.h / 2, b.y + b.h / 2 + NEAR.y, qq);
        set(g, { x: cx - b.w / 2, y: cy - b.h / 2, r: -4 * Math.sin(qq * Math.PI), s, o: 1 });
      } else set(g, { o: 0 });
      const k = 1 - ease.outBack(seg(t, T1, T1 + 0.38));
      set(real, { x: NEAR.x * k, y: NEAR.y * k, s: 1, o: t >= T1 ? 1 : 0 });
      cls(real, 'flash', t >= T1 + 0.08 && t < T1 + 0.45);
      cls(slot, 'hot', t >= st && t < T1);
      set(slot, { o: t >= T1 + 0.1 ? 0 : 1 });
    }

    /* ---------- pointer */
    const FX = 150, FY = 400, D0 = 5.6, D1 = 6.8;
    const C = { T0: 18.55, T1: 19.45, M: 0.75 }, PV = { T0: 26.6, T1: 27.4, M: 0.7 };
    const slotC = q('.crop .slotw'), slotP = q('.priv .slotw');
    const srcC = web ? q('.pal .pc0') : q('.crop .pz0'), srcP = web ? q('.pal .prm') : q('.priv .tray .src');
    A.pointer([
      ...(web
        ? [{ t: D0, at: () => { const c = A.center('.home .drop'); return { x: c.x + FX, y: c.y + FY }; }, hold: 0.2 },
           { t: D1, at: '.home .drop', drag: true, move: 0.9 }]
        : [{ t: 4.85, at: '.home .hin', tap: true }, { t: 6.5, at: '.galp .p0', tap: true }, { t: 7.75, at: '.galp .use', tap: true }]),
      { t: 9.3, at: '.home .rc0', tap: true },
      { t: 11.3, at: '.exam .run', tap: true },
      { t: 15.6, at: '.exam .save', tap: true },
      ...(web ? [] : [{ t: 17.75, at: '.crop .tb0', tap: true }]),
      { t: C.T0, at: srcC, hold: 0.15 },
      { t: C.T1, at: nearPt(slotC), drag: true, move: C.M },
      { t: 20.5, at: '.crop .cimg', hold: 0.15 },
      { t: 21.4, at: '.crop .cimg', drag: true, move: 0.8 },
      { t: 22.2, at: '.crop .run', tap: true },
      { t: 24.8, at: '.priv .bwh', tap: true },
      { t: PV.T0, at: srcP, hold: 0.15 },
      { t: PV.T1, at: nearPt(slotP), drag: true, move: PV.M },
      { t: 28.1, at: '.priv .run', tap: true },
      { t: 30.9, at: '.gifp .hR', hold: 0.1 },
      { t: 31.8, at: '.gifp .hR', drag: true, move: 0.8 },
      { t: 32.4, at: '.gifp .run', tap: true },
      { t: 35.2, at: '.gifp .save', tap: true },
      { t: 37.8, at: '.done .svb', tap: true },
      { t: 38.8, at: '.done .bgo', tap: true },
    ]);

    const show = (p, t, ranges) => {
      let o = 0, x = 0;
      for (const [a, b] of ranges) {
        if (t < a || t > b) continue;
        const e = ease.out(seg(t, a, a + 0.4)), l = ease.in(seg(t, b - 0.3, b));
        o = Math.min(e, 1 - l); x = (1 - e) * 40 - l * 40;
      }
      set(p, { x, o });
    };
    const toastAt = (e, t, a, b) => { const w = A.win(t, a, b, 0.2, 0.25); set(e, { y: (1 - ease.out(Math.min(1, w))) * 18, o: w }); };

    const E = {
      tw: qa('.splash .tower .blk'), sh1: q('.splash h1'), shp: q('.splash p'),
      rcs: qa('.home .rc'), hin: q('.home .hin'), hph: q('.home .hin .hph'), hn: q('.home .hn'), hm: q('.home .hm'),
      drop: q('.home .drop'), fcard: q('.home .fcard'), dropped: q('.home .dropped'), qe: q('.home .qe'), qi: q('.home .qi'),
      exRun: q('.exam .run'), exSave: q('.exam .save'), num: q('.exam .num'), ll: q('.exam .ll'), mi: q('.exam .meter i'), mu: q('.exam .meter u'),
      facts: q('.exam .facts'), okr: q('.exam .okr'), eq: q('.exam .eq'), t1: q('.exam .t1'), lph: q('.exam .lph'),
      tabs: qa('.crop .tab'), phint: q('.crop .phint'), pz: qa('.crop .plist .blk'), drawer: q('.crop .drawer'), ced: q('.crop .ced'),
      cimg: q('.crop .cimg'), cfr: q('.crop .cfr'), ctag: q('.crop .ctag'), chint: q('.crop .chint'), cRun: q('.crop .run'), t2: q('.crop .t2'),
      ans: q('.priv .ans'), map: q('.priv .map'), pin: q('.priv .mpin'), warn: q('.priv .warn'), okb: q('.priv .okb'), pn: q('.priv .pn'), ps: q('.priv .ps'),
      tray: q('.priv .tray'), pRun: q('.priv .run'), xpv: q('.priv .xpv'), xgv: q('.priv .xgv'), xp: q('.priv .xp'), xg: q('.priv .xg'),
      tv: q('.gifp .tv'), selw: q('.gifp .selw'), sL: q('.gifp .sL'), sR: q('.gifp .sR'), bmk: q('.gifp .bmk'), bmkEm: q('.gifp .bmk em'),
      gout: q('.gifp .gout'), gb: q('.gifp .gb'), gf: q('.gifp .gf'), loop: q('.gifp .loop'), gRun: q('.gifp .run'), gSave: q('.gifp .save'), t4: q('.gifp .t4'), gtok: q('.gifp .tok'),
      rts: qa('.done .rt'), rt3: q('.done .r3 i'), sav: q('.done .saverec'), fn: q('.done .fn'), caret: q('.done .fld s'), svb: q('.done .svb'), svl: q('.done .svl'),
      batch: q('.done .batch'), bgo: q('.done .bgo'), bpi: q('.done .bpr .meter i'), bpn: q('.done .bpn'), bpr: q('.done .bpr'), bgi: qa('.done .bgrid u'), ad: q('.done .ad'),
      crumb: q('.crumb'), top: q('.top'), pal: q('.pal'), rpbg: q('.rpbg'), wsf: q('.wsf'), gC: q('.g-crop'), gP: q('.g-priv'),
    };
    const B0 = D.portrait.bytes, MID = 624000;
    const fill = b => Math.sqrt(b / B0) * 100;
    E.mu.style.left = fill(204800).toFixed(1) + '%';

    return {
      update(t) {
        /* intro: blocks drop and snap into a tower (bottom one first) */
        show(splash, t, [[-1, 2.65]]);
        if (t < 2.8) {
          E.tw.forEach((b, i) => {
            const land = 0.5 + (3 - i) * 0.24, fall = seg(t, land - 0.34, land), bq = seg(t, land, land + 0.3);
            set(b, { y: -520 * (1 - ease.in(fall)), sx: 1 + 0.06 * Math.sin(bq * Math.PI), sy: 1 - 0.1 * Math.sin(bq * Math.PI), o: fall > 0 ? 1 : 0 });
            if (i < 3) cls(E.tw[i + 1], 'joined', t >= land);
          });
          set(E.sh1, { y: 14 * (1 - ease.out(seg(t, 1.35, 1.8))), o: seg(t, 1.35, 1.7) });
          set(E.shp, { y: 10 * (1 - ease.out(seg(t, 1.6, 2.0))), o: seg(t, 1.6, 1.95) });
        }

        /* home + pick */
        show(home, t, [[2.6, 9.75]]);
        E.rcs.forEach((r, i) => { const p = ease.outBack(seg(t, 2.7 + i * 0.1, 3.15 + i * 0.1)); set(r, { y: (1 - p) * 26, o: seg(t, 2.7 + i * 0.1, 2.95 + i * 0.1) }); });
        A.press(E.rcs[0], t, 9.3);
        const loaded = web ? t >= D1 + 0.15 : t >= 8.4;
        const lp = ease.outBack(seg(t, web ? D1 + 0.15 : 8.4, (web ? D1 + 0.15 : 8.4) + 0.4));
        E.hph.style.backgroundImage = loaded ? P.por : 'none';
        A.html(E.hph, loaded ? '' : I('plus', 24, 2.8));
        set(E.hph, { s: loaded ? 0.6 + 0.4 * lp : 1 });
        txt(E.hn, loaded ? D.portrait.file : web ? 'Drop a photo on the right' : 'Add a photo');
        txt(E.hm, loaded ? `${D.portrait.size} · ${D.portrait.dims}` : web ? 'or press ⌘ O' : 'Tap to choose from Gallery');
        A.press(E.hin, t, 4.85);
        if (web) {
          const st = Math.max(D0 + 0.2 + 0.12, D1 - 0.9), qd = ease.inOut(seg(t, st, D1)), land = seg(t, D1, D1 + 0.3);
          set(E.fcard, { x: (1 - qd) * FX, y: (1 - qd) * FY, r: (1 - qd) * 8, s: 1 - 0.1 * land, o: seg(t, 4.9, 5.2) * (1 - land) });
          cls(E.drop, 'hot', t > st + 0.3 && t < D1 + 0.2);
          set(E.dropped, { s: 0.94 + 0.06 * ease.outBack(seg(t, D1, D1 + 0.45)), o: seg(t, D1, D1 + 0.25) });
          E.qe.style.display = t < D1 + 0.3 ? '' : 'none';
          E.qi.style.display = t < D1 + 0.3 ? 'none' : '';
          set(E.qi, { o: seg(t, D1 + 0.3, D1 + 0.6) });
        } else {
          const gq = Math.min(seg(t, 4.95, 5.4), 1 - seg(t, 8.05, 8.45));
          set(galp, { o: t > 4.95 && t < 8.5 ? 1 : 0 });
          set(galp.querySelector('.scrim'), { o: gq });
          set(galp.querySelector('.sheet'), { y: 640 * (1 - ease.out(seg(t, 4.95, 5.45))) + 640 * ease.in(seg(t, 8.05, 8.45)) });
          const sel = t >= 6.5;
          cls(galp.querySelector('.p0'), 'sel', sel);
          set(galp.querySelector('.ck'), { s: ease.outBack(seg(t, 6.5, 6.85)), o: sel ? 1 : 0 });
          cls(galp.querySelector('.use'), 'off', !sel);
          A.press(galp.querySelector('.use'), t, 7.75);
        }

        /* shrink: exam recipe */
        show(exam, t, [[9.7, 17.15]]);
        CH.exam.bl.forEach((b, i) => { const a = 9.95 + i * 0.25, p = ease.outBack(seg(t, a, a + 0.38)); set(b, { o: seg(t, a, a + 0.12) }); if (t < 11.15) set(b, { y: (1 - p) * -34, x: (1 - p) * 30 }); });
        run(CH.exam, t, 11.45, [[0, 11.75, 12.35], [1, 12.65, 13.55], [2, 13.85, 14.3]], 14.35);
        const bytes = t < 12.4 ? A.count(t, 11.75, 12.35, B0, MID, ease.inOut) : A.count(t, 12.65, 13.55, MID, D.shrink.bytes, ease.inOut);
        txt(E.num, A.fmtBytes(bytes));
        E.mi.style.width = fill(bytes).toFixed(1) + '%';
        E.mi.style.background = bytes <= 204800 ? '#20B26C' : '#3E7BFA';
        txt(E.ll, t < 11.7 ? 'Size now' : t < 14.3 ? 'Working…' : 'New size');
        txt(E.facts, t < 12.35 ? `HEIC · ${D.portrait.dims}` : t < 14.3 ? `HEIC · ${D.shrink.px}` : `${D.shrink.format} · ${D.shrink.px}`);
        set(E.okr, { o: seg(t, 14.35, 14.6), s: 0.9 + 0.1 * ease.outBack(seg(t, 14.35, 14.7)) });
        set(E.lph, { s: 1 - 0.06 * ease.inOut(seg(t, 11.75, 12.35)) });
        const ranEx = t >= 14.45;
        if (web) { cls(E.exSave, 'off', !ranEx); txt(E.eq, t < 11.6 ? 'Waiting' : t < 14.35 ? 'Running…' : `Done · ${D.shrink.size}`); cls(E.eq, 'ok', t >= 14.35); }
        else { set(E.exRun, { o: ranEx ? 0 : 1 }); set(E.exSave, { o: ranEx ? ease.out(seg(t, 14.45, 14.75)) : 0, y: ranEx ? 10 * (1 - ease.out(seg(t, 14.45, 14.75))) : 0 }); }
        A.press(E.exRun, t, 11.3); A.press(E.exSave, t, 15.6);
        toastAt(E.t1, t, 15.75, 17.15);

        /* crop: drag a block from the palette, then reposition */
        show(crop, t, [[17.1, 24.15]]);
        E.tabs.forEach((b, i) => cls(b, 'on', i === 0 && t >= 17.75));
        A.press(E.tabs[0], t, 17.75);
        set(E.phint, { o: t < 17.8 ? 1 : 0 });
        E.phint.style.display = t < 17.8 ? '' : 'none';
        E.pz.forEach((b, i) => { const a = 17.85 + i * 0.08, p = ease.outBack(seg(t, a, a + 0.3)); set(b, { y: (1 - p) * 18, o: seg(t, a, a + 0.15) }); });
        const dq = ease.inOut(seg(t, 19.75, 20.15));
        set(E.drawer, { y: dq * 400 });
        if (!web) set(E.ced, { o: seg(t, 19.95, 20.3), y: 20 * (1 - ease.out(seg(t, 19.95, 20.35))) });
        const framed = seg(t, 19.95, 20.3);
        set(E.cfr, { o: framed, s: 0.92 + 0.08 * ease.outBack(framed) });
        set(E.ctag, { o: framed }); set(E.chint, { o: framed * (1 - seg(t, 21.5, 21.8)) });
        set(E.cimg, { x: lerp(56, -54, ease.inOut(seg(t, 20.77, 21.4))) });
        snap(t, gCrop, srcC, slotC, C.T0, 0.15, C.T1, C.M);
        run(CH.crop, t, 22.35, [[0, 22.6, 23.1]], 23.15);
        A.press(E.cRun, t, 22.2);
        toastAt(E.t2, t, 23.2, 24.15);

        /* privacy: where was it taken, then snap on Remove place */
        show(priv, t, [[24.1, 30.15]]);
        snap(t, gPriv, srcP, slotP, PV.T0, 0.15, PV.T1, PV.M, !web);
        if (t < 28.0) run(CH.priv, t, 24.9, [[0, 25.1, 25.5]], 25.55);
        else run(CH.priv, t, 28.25, [[0, 28.45, 28.7], [1, 28.95, 29.4]], 29.45);
        A.press(CH.priv.bl[0], t, 24.8);
        const ap = seg(t, 25.4, 25.75);
        set(E.ans, { o: ap, y: -14 * (1 - ease.outBack(ap)), s: 0.96 + 0.04 * ease.outBack(ap) });
        const gone = seg(t, 29.05, 29.4);
        set(E.pin, { y: -36 * (1 - ease.outBack(seg(t, 25.6, 26.0))) - 30 * gone, o: seg(t, 25.6, 25.75) * (1 - gone), s: 1 + 0.4 * gone });
        E.map.style.filter = `grayscale(${gone.toFixed(2)}) opacity(${(1 - 0.45 * gone).toFixed(2)})`;
        txt(E.pn, gone >= 0.5 ? 'No place in the photo' : `${D.place.city}, ${D.place.country}`);
        txt(E.ps, gone >= 0.5 ? 'GPS and place name removed' : `${D.place.region} · ${D.place.when}`);
        E.warn.style.display = t < 29.3 ? '' : 'none';
        E.okb.style.display = t < 29.3 ? 'none' : '';
        set(E.warn, { o: seg(t, 25.9, 26.15) }); set(E.okb, { o: seg(t, 29.3, 29.5), s: 0.94 + 0.06 * ease.outBack(seg(t, 29.3, 29.6)) });
        if (!web) set(E.tray, { o: seg(t, 26.0, 26.3) * (1 - seg(t, 27.5, 27.8)), y: 16 * (1 - ease.out(seg(t, 26.0, 26.35))) });
        A.press(E.pRun, t, 28.1);
        if (web) {
          txt(E.xpv, gone >= 0.5 ? 'Removed' : `${D.place.city}, ${D.place.country}`); txt(E.xgv, gone >= 0.5 ? 'Removed' : `${D.place.lat}, ${D.place.lon}`);
          cls(E.xp, 'gone', gone >= 0.5); cls(E.xg, 'gone', gone >= 0.5);
        }

        /* gif: trim, make, loop */
        show(gifp, t, [[30.1, 36.1]]);
        const hq = ease.inOut(seg(t, 31.12, 31.8));
        const L = 4 / 12, R = (8 - hq) / 12;
        E.selw.style.left = (L * 100).toFixed(2) + '%'; E.selw.style.width = ((R - L) * 100).toFixed(2) + '%';
        E.sL.style.cssText = `left:0;width:${(L * 100).toFixed(2)}%`; E.sR.style.cssText = `right:0;width:${((1 - R) * 100).toFixed(2)}%`;
        txt(E.tv, hq > 0.5 ? `${D.video.from}–${D.video.to} · ${D.video.clip}` : '0:04–0:08 · 4.0 s');
        run(CH.gif, t, 32.55, [[0, 32.8, 33.2], [1, 33.5, 34.4]], 34.45);
        const fp = seg(t, 33.5, 34.4), made = t >= 34.45;
        txt(E.bmkEm, t < 33.5 ? '12 fps' : t < 34.4 ? `${Math.round(fp * D.video.frames)} / ${D.video.frames}` : `${D.video.frames} frames`);
        E.bmk.style.backgroundImage = t >= 33.5 && t < 34.4 ? `linear-gradient(90deg,rgba(255,255,255,.28) ${(fp * 100).toFixed(1)}%,transparent ${(fp * 100).toFixed(1)}%)` : 'none';
        const fi = Math.floor(t * 12);
        E.gtok.style.backgroundImage = A.frame(4 + (fi % 4));
        E.gout.style.backgroundImage = made ? A.frame(4 + (fi % 4)) : A.frame(fi % 12);
        txt(E.gb, made ? `GIF · ${D.video.size}` : D.video.file); cls(E.gb, 'g', made);
        set(E.loop, { o: made ? 1 : 0, r: made ? (t * 180) % 360 : 0 });
        txt(E.gf, made ? `${D.video.frames} frames · ${D.video.fps} fps · ${D.video.clip} · loops forever` : t >= 32.5 ? 'Making your GIF…' : 'Pick 3 seconds, then press Run');
        if (web) cls(E.gSave, 'off', !made);
        else { set(E.gRun, { o: made ? 0 : 1 }); set(E.gSave, { o: made ? ease.out(seg(t, 34.5, 34.8)) : 0 }); }
        A.press(E.gRun, t, 32.4); A.press(E.gSave, t, 35.2);
        toastAt(E.t4, t, 35.35, 36.15);

        /* done */
        show(done, t, [[36.05, 40.6]]);
        E.rts.forEach((r, i) => { const a = 36.25 + i * 0.12, p = ease.outBack(seg(t, a, a + 0.4)); set(r, { y: (1 - p) * -30, o: seg(t, a, a + 0.15) }); });
        E.rt3.style.backgroundImage = A.frame(4 + (Math.floor(t * 12) % 4));
        set(E.sav, { o: seg(t, 36.7, 36.95), y: 14 * (1 - ease.out(seg(t, 36.7, 37.0))) });
        txt(E.fn, A.typed(t, 36.95, 'My exam photo', 24));
        set(E.caret, { o: t < 37.8 && Math.floor(t * 3) % 2 === 0 ? 1 : 0 });
        const saved = t >= 37.85;
        cls(E.svb, 'ok', saved); txt(E.svl, saved ? 'Saved to My recipes' : 'Save recipe');
        if (web) txt(E.svl, saved ? 'Saved' : 'Save recipe');
        A.press(E.svb, t, 37.8);
        set(E.batch, { o: seg(t, 37.0, 37.3) });
        set(E.ad, { o: seg(t, 37.2, 37.5) });
        A.press(E.bgo, t, 38.8);
        const bp = seg(t, 39.0, 39.9), nb = Math.round(bp * 20);
        set(E.bpr, { o: seg(t, 38.85, 39.0) });
        E.bpi.style.width = (bp * 100).toFixed(1) + '%';
        txt(E.bpn, `${nb} of 20 done`);
        if (web) txt(q('.done .bgl'), t < 38.85 ? 'Run on 20 photos' : nb < 20 ? 'Running on 20 photos…' : 'All 20 done');
        E.bgi.forEach((u, i) => set(u, { o: i < nb ? 1 : 0, s: i < nb ? 1 : 0.5 }));

        /* web shell */
        if (web) {
          const sh = seg(t, 2.25, 2.7);
          set(E.top, { o: sh, y: -10 * (1 - sh) }); set(E.pal, { o: sh, x: -20 * (1 - sh) }); set(E.rpbg, { o: sh }); set(E.wsf, { o: sh });
          txt(E.crumb, t < 9.6 ? 'Home' : t < 17 ? 'Exam photo' : t < 24 ? 'My recipe' : t < 30 ? 'Safe to share' : t < 36 ? 'Quick GIF' : 'All done');
          cls(E.gC, 'hl', t > 17.3 && t < 19.8);
          cls(E.gP, 'hl', t > 26.0 && t < 27.8);
        }
      },
    };
  },
});

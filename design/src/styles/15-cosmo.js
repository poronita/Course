/* Style 15 — Cosmo Launchpad. A young astronaut co-pilot, missions, ranks and hyperspace waits. */
ISK.register({
  id: 'cosmo', order: 15, round: 2,
  name: 'Cosmo Launchpad',
  tagline: 'Cosmo the astronaut turns every photo job into a short space mission.',
  concept: 'A young astronaut named Cosmo floats beside your work with a tether that wiggles. Tap him and his backpack opens a ring of five mission buttons. Every wait becomes a hyperspace jump with a T-minus clock, and every finished job stamps a mission patch, adds fuel and moves you up the ranks. The look is a calm dark mission console with gold accents.',
  wins: [
    'One character, one idea: space missions. People remember Cosmo, and patches, fuel and ranks give a reason to return without blocking any task.',
    'Waiting is the show. The whole sky jumps to hyperspace, a T-minus clock ticks and the bar kind changes per job, so a 3 second wait feels short.',
    'It looks like a premium game HUD but stays compact: dark glass, thin borders, 13 to 15 px text and 44 px controls.',
  ],
  risks: [
    'The space theme is a strong choice. Users who only want a plain tool may find the HUD busy, so keep a quiet mode that hides Cosmo and the fuel bar.',
    'A detailed vector astronaut with many moods costs real illustration and animation time, and canvas stars use battery on old phones.',
  ],
  scores: { simple: 3, fun: 5, wow: 5, pro: 4, game: 5, effort: 4 },
  palette: ['#0B0F2E', '#141A4A', '#7B61FF', '#29D3C0', '#FFC53D', '#FF6B5A'],
  type: 'Sora for headings and big numbers, Exo 2 for every label, button and counter. Both stay clear on dark glass at 12 to 15 px.',
  motion: 'Warp-gate iris and diamond hatch reveals, push slides for panels, a sky that streaks into hyperspace during every wait, and patches that stamp in with a ring shockwave while a small rocket crosses the screen.',
  notes: {
    intro: 'Cosmo tumbles in asleep, a T-minus 3-2-1 wakes him with a jolt, he waves and a warp gate opens on home. His backpack light blinks once as a hint.',
    pick: 'Phone: tap a photo in Recent. Web: drag the file from the desktop and Cosmo\'s tractor beam catches it into the porthole. He gives a thumbs up.',
    shrink: 'One tap on "For exam or job form" jumps the whole sky to hyperspace. A T-minus clock ticks, 4.8 MB falls to 196 KB, then a diamond reveal and a Compactor patch stamp.',
    crop: 'Tap Cosmo. His backpack opens and five round mission buttons orbit out. Tap Crop, one preset, drag, Done. A short render bar plays and the Framer patch stamps in.',
    privacy: 'Cosmo spots the GPS tag and asks in a bubble. One tap opens Pune, India on a star chart. Remove location runs a short wipe, then a shield dome and the Guardian patch.',
    gif: 'A bubble offers the GIF. Trim 0:04 to 0:07, tap Make GIF and watch 36 frames count under a warp bar. The 2.1 MB loop plays and the Director patch lands.',
    done: 'Four patches, +360 fuel, a promotion from Cadet to Pilot, a new star joins the streak constellation and a 12 taps receipt. One Ad slot sits at the end.',
  },
  extras: [
    ['Character', 'Cosmo, an astronaut with a gold visor, glowing pack lights and a wiggling tether. Eight moods, eyes that follow the pointer, thumbs up, wave. Tap him and the backpack opens a ring of five mission buttons.'],
    ['Game system', 'Fuel is XP (+360 today). Ranks go Cadet, Pilot, Commander. Five collectible mission patches, a daily mission and a streak constellation that adds a star.'],
    ['Progress bars', 'Four different kinds chosen by A.bars: warp, orbit, comet, streams and tiles, one per job. The whole sky also streaks into hyperspace with a T-minus clock.'],
    ['Screen changes', 'Iris warp gate with a glowing ring, diamond hatch reveal, zoom for tool steps, push for panels.'],
    ['Finish effect', 'Patch stamps in with a ring shockwave, star and spark bursts, a small rocket with a trail, and fuel flies to the HUD.'],
    ['Taps to finish', 'Shrink 3 · Crop 4 · Place 2 · GIF 3 (12 taps in total)'],
  ],
  statusBar: 'light',
  css: `
.st-cosmo{--n0:#0B0F2E;--n1:#141A4A;--vio:#7B61FF;--teal:#29D3C0;--gold:#FFC53D;--coral:#FF6B5A;--tx:#EEF1FF;--mu:#8E98C8;--gb:rgba(150,165,255,.22);background:linear-gradient(185deg,#0B0F2E 0%,#10154A 60%,#141A4A 100%);color:var(--tx);font-family:"Exo 2",system-ui,sans-serif;font-size:14px;line-height:1.28;font-weight:500}
.st-cosmo .sr{font-family:Sora,"Exo 2",sans-serif;font-weight:700;letter-spacing:-.01em}
.st-cosmo small{font-size:12px;color:var(--mu);font-weight:500;display:block}
.st-cosmo b{font-weight:700}
.st-cosmo u{display:block;text-decoration:none}
.st-cosmo kbd{font:600 11px "Exo 2",sans-serif;padding:1px 6px;border-radius:5px;border:1px solid var(--gb);border-bottom-width:2px;background:rgba(255,255,255,.07);color:var(--tx)}
.st-cosmo .gold{color:var(--gold)}
.st-cosmo .gl{background:linear-gradient(160deg,rgba(48,56,132,.52),rgba(16,21,68,.62));border:1px solid var(--gb);border-radius:14px;box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 12px 26px -12px rgba(2,4,24,.8)}
.st-cosmo .bg{position:absolute;inset:0;overflow:hidden;z-index:0}
.st-cosmo .nb{position:absolute;left:0;top:0;border-radius:50%;will-change:transform,opacity}
.st-cosmo .stars{position:absolute;left:0;top:0}
.st-cosmo .vig{position:absolute;inset:0;background:radial-gradient(120% 90% at 50% 45%,transparent 52%,rgba(5,7,28,.72))}
.st-cosmo .flash{position:absolute;inset:0;z-index:36;pointer-events:none;background:radial-gradient(circle at 50% 50%,rgba(255,255,255,.9),rgba(123,97,255,.55) 38%,transparent 70%);opacity:0}
.st-cosmo .tth{position:absolute;left:0;top:0;z-index:1;pointer-events:none;overflow:visible}
/* pages */
.st-cosmo .pg{position:absolute;left:0;right:0;bottom:0;padding:0 14px 30px;display:flex;flex-direction:column;gap:10px;z-index:2}
.st-cosmo .pg.cp{top:300px}.st-cosmo .pg.fl{top:108px}
.st-cosmo .vw,.st-cosmo .sd{display:flex;flex-direction:column;gap:10px;min-height:0}
.st-cosmo .sd{flex:1}
.st-cosmo .foot{margin-top:auto;display:flex;gap:10px}
.st-cosmo.m-web .pv{position:absolute;left:244px;top:64px;width:580px;height:680px;z-index:2;display:flex;flex-direction:column;gap:12px}
.st-cosmo.m-web .pr{position:absolute;left:1018px;top:64px;width:250px;height:680px;z-index:2;display:flex;flex-direction:column;gap:10px}
.st-cosmo.m-web .pg{display:none}
.st-cosmo .sh{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.st-cosmo .sh b{font-size:14px}.st-cosmo .sh small{display:inline}
/* buttons */
.st-cosmo .btn{height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;font-weight:700;color:#1B1540;background:linear-gradient(180deg,#FFDB78,#FFB821);box-shadow:0 8px 20px -8px rgba(255,184,33,.65),inset 0 1px 0 rgba(255,255,255,.7);flex:1}
.st-cosmo .btn.sec{background:linear-gradient(160deg,rgba(60,68,150,.7),rgba(24,30,92,.8));color:var(--tx);box-shadow:inset 0 1px 0 rgba(255,255,255,.12);border:1px solid var(--gb);flex:none;width:52px}
.st-cosmo .btn.off{background:rgba(255,255,255,.08);color:var(--mu);box-shadow:none;border:1px solid var(--gb)}
.st-cosmo .btn.ok{background:linear-gradient(180deg,#5BE8D6,#29D3C0);box-shadow:0 8px 20px -8px rgba(41,211,192,.6)}
.st-cosmo .btn kbd{background:rgba(27,21,64,.15);border-color:rgba(27,21,64,.3);color:#1B1540}
.st-cosmo .is-pressed{transform:scale(.95) !important;filter:brightness(1.2)}
.st-cosmo .chip{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:99px;font-size:11.5px;font-weight:600;background:rgba(123,97,255,.18);border:1px solid rgba(123,97,255,.5);white-space:nowrap}
/* patches */
.st-cosmo .pa{position:relative;width:44px;height:44px;border-radius:50%;flex:none;background:radial-gradient(circle at 35% 26%,rgba(255,255,255,.6),transparent 58%),var(--pc);box-shadow:0 0 0 2px #10143F,0 0 0 3.5px var(--pc),inset 0 -6px 10px rgba(10,8,50,.35),0 6px 12px -4px rgba(0,0,0,.6);display:grid;place-items:center;color:#14123A}
.st-cosmo .pa::before{content:"";position:absolute;inset:3px;border-radius:50%;border:1.5px dashed rgba(20,18,58,.6)}
.st-cosmo .pa i{display:block;width:50%;height:50%}
.st-cosmo .pa.mini{width:28px;height:28px;box-shadow:0 0 0 1.5px #10143F,0 0 0 2.5px var(--pc),inset 0 -4px 6px rgba(10,8,50,.35)}
.st-cosmo .pa.mini::before{inset:2px;border-width:1px}
.st-cosmo .pa.sm{width:34px;height:34px}.st-cosmo .pa.lg{width:104px;height:104px;box-shadow:0 0 0 3px #10143F,0 0 0 6px var(--pc),inset 0 -14px 22px rgba(10,8,50,.35),0 16px 34px -6px rgba(0,0,0,.7),0 0 40px -4px var(--pc)}
.st-cosmo .pa.lg::before{inset:8px;border-width:2.5px}
.st-cosmo .pa.em{background:rgba(255,255,255,.04);box-shadow:none;border:1.5px dashed rgba(150,165,255,.4);color:transparent}
.st-cosmo .pa.em::before{display:none}
.st-cosmo .slots{display:flex;gap:7px}
.st-cosmo .slot{position:relative;width:34px;height:34px;flex:none}
.st-cosmo .slot .pa{position:absolute;inset:0;width:34px;height:34px}.st-cosmo .slot .pa:not(.em){opacity:0}
.st-cosmo .slot .pa.em{border-width:1.5px}
/* HUD */
.st-cosmo .hud{position:absolute;left:12px;right:12px;top:52px;height:46px;z-index:8;display:flex;align-items:center;gap:10px;padding:0 8px 0 7px;border-radius:15px}
.st-cosmo.m-web .hud{left:auto;right:14px;top:7px;width:540px;height:42px}
.st-cosmo .rk{display:flex;align-items:center;gap:7px;flex:none}
.st-cosmo .rb{width:32px;height:32px;border-radius:50%;background:radial-gradient(circle at 35% 26%,#C9BEFF,#7B61FF 55%,#3B2FA3);box-shadow:0 0 0 1.5px #FFC53D,0 0 12px rgba(123,97,255,.6);display:grid;place-items:center;flex:none}
.st-cosmo .rb.big{width:44px;height:44px}
.st-cosmo .rk b{display:block;font-size:13px;line-height:1.05}.st-cosmo .rk small{font-size:11px}
.st-cosmo .fu{flex:1;min-width:0}
.st-cosmo .fh{display:flex;align-items:baseline;gap:5px;font-size:10.5px;color:var(--mu);letter-spacing:.1em;font-weight:600}.st-cosmo .fh b{color:var(--tx);font-size:14px;letter-spacing:0}.st-cosmo .fh small{display:inline;font-size:11px}
.st-cosmo .ft{height:8px;border-radius:4px;background:rgba(255,255,255,.1);margin-top:3px;position:relative;overflow:hidden}
.st-cosmo .ff{position:absolute;left:0;top:0;bottom:0;border-radius:4px;background:linear-gradient(90deg,#FFB21F,#FFD66B);box-shadow:0 0 10px rgba(255,197,61,.7)}
.st-cosmo .ft::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 9px,rgba(11,15,46,.7) 9px 10px)}
.st-cosmo .pcn{display:flex;align-items:center;gap:6px;flex:none;padding:3px 9px 3px 4px;border-radius:12px;background:rgba(255,255,255,.06)}
.st-cosmo .pcn b{font-size:13px}
.st-cosmo .met{margin-left:auto;margin-right:18px;text-align:right}.st-cosmo .met b{font-size:15px;letter-spacing:.06em}
/* web chrome */
.st-cosmo .tb{position:absolute;left:0;right:0;top:0;height:56px;z-index:7;display:flex;align-items:center;gap:12px;padding:0 580px 0 16px}
.st-cosmo .brand{display:flex;align-items:center;gap:9px}.st-cosmo .brand b{font-size:16px}
.st-cosmo .lst{position:absolute;left:12px;top:64px;width:220px;bottom:12px;z-index:5;padding:12px 12px;display:flex;flex-direction:column;gap:6px}
.st-cosmo .lh{font-size:10.5px;letter-spacing:.14em;color:var(--mu);font-weight:700;margin:4px 2px 2px}
.st-cosmo .mr{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:11px;border:1px solid transparent}
.st-cosmo .mr b{flex:1;font-size:14px}.st-cosmo .mr.on{background:rgba(255,197,61,.1);border-color:rgba(255,197,61,.5);box-shadow:0 0 18px -6px rgba(255,197,61,.6)}
.st-cosmo .mr .mst{width:16px;height:16px;border-radius:50%;border:1.5px solid rgba(150,165,255,.35);display:grid;place-items:center;color:#10143F}
.st-cosmo .mr.dn .mst{background:var(--teal);border-color:var(--teal)}
.st-cosmo .lst .slots{gap:4px}.st-cosmo .lst .slot,.st-cosmo .lst .slot .pa{width:30px;height:30px}.st-cosmo .lst .cs{flex:none;width:100%;max-width:none;height:46px}
.st-cosmo .lst .daily{margin-top:auto}
/* daily + constellation */
.st-cosmo .daily{padding:10px 12px;display:flex;flex-direction:column;gap:7px}
.st-cosmo .dh{display:flex;justify-content:space-between;align-items:center}.st-cosmo .dh b{font-size:14px;display:block}.st-cosmo .dh small{font-size:10.5px;letter-spacing:.12em;font-weight:700}
.st-cosmo .dcn{font-size:18px;color:var(--gold)}
.st-cosmo .dbar{height:6px;border-radius:3px;background:rgba(255,255,255,.1);overflow:hidden}.st-cosmo .dbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#FFB21F,#29D3C0)}
.st-cosmo .drow{display:flex;align-items:center;justify-content:space-between;gap:8px}
.st-cosmo .cs{flex:1;max-width:120px;min-width:0;overflow:visible}.st-cosmo .cs .ln{stroke:#3A4180;stroke-width:1.5;stroke-linecap:round}.st-cosmo .cs .ln.lit{stroke:#FFC53D}
.st-cosmo .cs .sn path{fill:#3A4180}.st-cosmo .cs .sn.lit path{fill:#FFC53D}.st-cosmo .cs .sn circle{fill:rgba(255,197,61,.28)}
/* intro */
.st-cosmo .intro{position:absolute;inset:0;z-index:2}
.st-cosmo .intro>*{position:absolute;left:0;right:0;text-align:center}
.st-cosmo .intro .ilogo{top:74px;display:flex;justify-content:center}.st-cosmo .intro h1{top:196px;margin:0;font-size:27px}
.st-cosmo .intro p{margin:0;color:var(--mu);font-size:14px}.st-cosmo .intro .isub{top:238px}.st-cosmo .intro .tmn{top:612px}
.st-cosmo .intro .ipriv{top:764px;color:var(--teal);font-weight:600;display:flex;gap:7px;justify-content:center;align-items:center}
.st-cosmo.m-web .intro .ilogo{top:40px}.st-cosmo.m-web .intro h1{top:158px;font-size:38px}.st-cosmo.m-web .intro .isub{top:212px;font-size:16px}.st-cosmo.m-web .intro .tmn{top:560px}.st-cosmo.m-web .intro .ipriv{top:690px}
.st-cosmo .tmn{text-align:center}.st-cosmo .tmn small{font-size:10.5px;letter-spacing:.2em;font-weight:700}
.st-cosmo .tmv{font-size:40px;color:var(--gold);line-height:1.1;text-shadow:0 0 22px rgba(255,197,61,.55);display:block}
.st-cosmo .pgo{width:72px;height:72px;margin:0 auto}
/* porthole */
.st-cosmo .port{position:relative;border-radius:22px;padding:9px;background:linear-gradient(145deg,#454DA8,#171C58 55%,#2C3188);box-shadow:0 0 0 1px rgba(160,175,255,.4),0 16px 34px -10px rgba(2,4,24,.85),inset 0 2px 0 rgba(255,255,255,.2);flex:none}
.st-cosmo .port .ph,.st-cosmo .port .mapv{position:absolute;left:9px;top:9px;right:9px;bottom:9px;border-radius:15px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);overflow:hidden}
.st-cosmo .port::after{content:"";position:absolute;inset:9px;border-radius:15px;background:repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px 3px);pointer-events:none}
.st-cosmo .hc{position:absolute;width:16px;height:16px;border:2px solid var(--gold);z-index:3;filter:drop-shadow(0 0 4px rgba(255,197,61,.7))}
.st-cosmo .hc.a{left:17px;top:17px;border-right:0;border-bottom:0;border-radius:5px 0 0 0}.st-cosmo .hc.b{right:17px;top:17px;border-left:0;border-bottom:0;border-radius:0 5px 0 0}
.st-cosmo .hc.c{left:17px;bottom:17px;border-right:0;border-top:0;border-radius:0 0 0 5px}.st-cosmo .hc.d{right:17px;bottom:17px;border-left:0;border-top:0;border-radius:0 0 5px 0}
.st-cosmo .tag{position:absolute;z-index:4;padding:3px 8px;border-radius:8px;background:rgba(8,11,40,.8);border:1px solid var(--gb);font-size:11.5px;font-weight:600;display:flex;gap:5px;align-items:center;white-space:nowrap}
.st-cosmo .tag.tl{left:24px;top:24px}.st-cosmo .tag.tr{right:24px;top:24px}.st-cosmo .tag.br{right:24px;bottom:24px}.st-cosmo .tag.gps{background:rgba(255,107,90,.25);border-color:var(--coral);color:#FFD2CC}
.st-cosmo .pt{width:124px;height:156px}.st-cosmo .bw{height:188px}.st-cosmo .ps{height:112px}.st-cosmo .vp{height:190px}.st-cosmo .map{height:150px}
.st-cosmo.m-web .pt{width:340px;height:440px;align-self:center}.st-cosmo.m-web .bw{height:490px}.st-cosmo.m-web .ps{height:500px}.st-cosmo.m-web .vp{height:400px}.st-cosmo.m-web .map{height:520px}
.st-cosmo.m-web .brief .tag.tl,.st-cosmo.m-web .res .tag.tl{display:flex}.st-cosmo.m-app .pt .tag{display:none}
.st-cosmo .brow{display:flex;gap:12px;align-items:stretch}.st-cosmo.m-web .brow{flex-direction:column;gap:12px}
.st-cosmo .facts{flex:1;padding:10px 12px;display:flex;flex-direction:column;justify-content:space-between;gap:4px;min-width:0}
.st-cosmo .facts b{font-size:14px;display:block}.st-cosmo .facts small{font-size:10.5px;letter-spacing:.12em;font-weight:700}.st-cosmo .facts .big{font-size:30px;line-height:1.05}
.st-cosmo.m-web .facts{flex-direction:row;flex:none}.st-cosmo.m-web .facts>div{flex:1}
.st-cosmo .gal{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.st-cosmo .th{position:relative;aspect-ratio:1;border-radius:13px;background-size:cover;background-position:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.18),0 6px 14px -6px rgba(0,0,0,.7)}
.st-cosmo .th.sel{box-shadow:0 0 0 2px var(--gold),0 0 18px rgba(255,197,61,.7)}
.st-cosmo .ck{opacity:0;position:absolute;right:5px;top:5px;width:22px;height:22px;border-radius:50%;background:var(--gold);color:#1B1540;display:grid;place-items:center;font-style:normal}
.st-cosmo .tools{display:flex;justify-content:space-between}
.st-cosmo .tool{display:flex;flex-direction:column;align-items:center;gap:5px;width:62px;font-size:12px;font-weight:600}
.st-cosmo .ti,.st-cosmo .qi{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(160deg,#4047A8,#1C2166);box-shadow:0 0 0 2px var(--pc,#7B61FF),inset 0 1px 0 rgba(255,255,255,.25),0 8px 16px -6px rgba(0,0,0,.7);font-style:normal}
.st-cosmo .drop{align-self:stretch}.st-cosmo.m-web .drop{height:430px}
.st-cosmo .dz{position:absolute;left:9px;top:9px;right:9px;bottom:9px;border-radius:15px;border:2px dashed rgba(255,197,61,.5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;background:radial-gradient(circle at 50% 50%,rgba(123,97,255,.22),transparent 70%)}
.st-cosmo .dz b{font-size:22px}.st-cosmo .dz .dzi{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;background:rgba(255,197,61,.15);color:var(--gold);box-shadow:0 0 30px rgba(255,197,61,.3)}
.st-cosmo .acq{position:absolute;left:9px;top:9px;right:9px;bottom:9px;border-radius:15px;background-size:cover;background-position:center;z-index:2}
.st-cosmo .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.st-cosmo .g4 .th{aspect-ratio:1.3}
.st-cosmo .keys{padding:12px;display:flex;flex-direction:column;gap:8px}.st-cosmo .keys div{display:flex;justify-content:space-between;align-items:center;font-size:13px}
.st-cosmo .tip{display:flex;gap:9px;align-items:center;padding:10px 12px;font-size:13px;color:var(--mu)}.st-cosmo .tip svg{color:var(--gold);flex:none}
.st-cosmo .sd>.tip:last-child{margin-top:auto}
/* options */
.st-cosmo .opts{display:flex;flex-direction:column;gap:7px}
.st-cosmo .opt{position:relative;display:flex;align-items:center;gap:11px;min-height:48px;padding:7px 12px;border-radius:13px;background:linear-gradient(160deg,rgba(48,56,132,.5),rgba(16,21,68,.6));border:1px solid var(--gb)}
.st-cosmo .opt b{display:block;font-size:14px;line-height:1.15}.st-cosmo .opt small{font-size:12px}
.st-cosmo .oi{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;background:rgba(123,97,255,.22);color:#C9BEFF;flex:none;font-style:normal}
.st-cosmo .rad{margin-left:auto;width:20px;height:20px;border-radius:50%;border:2px solid rgba(150,165,255,.4);flex:none}
.st-cosmo .opt.on{border-color:var(--gold);background:linear-gradient(160deg,rgba(255,197,61,.2),rgba(16,21,68,.7));box-shadow:0 0 22px -6px rgba(255,197,61,.7)}
.st-cosmo .opt.on .rad{border-color:var(--gold);background:radial-gradient(var(--gold) 0 42%,transparent 48%)}
.st-cosmo .pick{position:absolute;right:38px;top:-8px;font-style:normal;font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:8px;background:var(--gold);color:#1B1540;letter-spacing:.04em}
.st-cosmo .ratio{width:30px;height:30px;display:grid;place-items:center;flex:none}.st-cosmo .ratio i{display:block;border:2px solid var(--tx);border-radius:3px;opacity:.85}
.st-cosmo .opt.on .ratio i{border-color:var(--gold)}
.st-cosmo.m-web .opt{min-height:52px}
/* work */
.st-cosmo .wk{position:relative;height:590px;flex:none}
.st-cosmo .wchip{position:absolute;left:0;right:0;top:0;display:flex;justify-content:center}.st-cosmo .wchip>span{display:inline-flex;align-items:center;gap:7px;padding:4px 12px;border-radius:99px;background:rgba(255,197,61,.14);border:1px solid rgba(255,197,61,.5);font-size:11.5px;font-weight:700;letter-spacing:.1em}
.st-cosmo .wk .tmn{position:absolute;left:0;right:0;top:34px}.st-cosmo .wk .tmv{font-size:46px}
.st-cosmo .cap{position:absolute;left:236px;top:128px;width:112px;height:144px}
.st-cosmo .cap.ls{width:144px;height:112px;left:210px;top:144px}
.st-cosmo .capp{position:absolute;inset:0;border-radius:16px;background-size:cover;background-position:center;box-shadow:0 0 0 3px #3C4396,0 0 0 4px var(--gb),0 14px 30px rgba(0,0,0,.6),inset 0 0 0 1px rgba(255,255,255,.2)}
.st-cosmo .cfl{position:absolute;left:50%;bottom:-38px;width:30px;height:46px;margin-left:-15px;border-radius:50%/30% 30% 70% 70%;background:linear-gradient(#fff,#FFC53D 40%,rgba(255,107,90,0));transform-origin:50% 0}
.st-cosmo .dock{position:absolute;left:0;right:0;top:352px;height:118px;display:grid;place-items:center}
.st-cosmo .cnt{position:absolute;left:0;right:0;top:492px;text-align:center}.st-cosmo .cnt b{font-size:30px;display:block;line-height:1.1}
.st-cosmo.m-web .wk{height:680px}.st-cosmo.m-web .cap{left:210px;top:120px;width:160px;height:200px}.st-cosmo.m-web .cap.ls{width:240px;height:170px;left:170px;top:140px}.st-cosmo.m-web .dock{top:380px;height:214px}.st-cosmo.m-web .cnt{top:604px}.st-cosmo.m-web .wk .tmn{top:40px}
.st-cosmo .stgs{padding:10px 12px;display:grid;grid-template-columns:1fr 1fr;gap:8px 10px}
.st-cosmo.m-web .stgs{grid-template-columns:1fr}
.st-cosmo .stg{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--mu);font-weight:600}.st-cosmo .stg i{width:18px;height:18px;border-radius:50%;border:1.5px solid rgba(150,165,255,.4);display:grid;place-items:center;flex:none;color:#10143F}
.st-cosmo .stg.now{color:var(--tx)}.st-cosmo .stg.now i{border-color:var(--gold);box-shadow:0 0 10px rgba(255,197,61,.7)}
.st-cosmo .stg.ok{color:var(--tx)}.st-cosmo .stg.ok i{background:var(--teal);border-color:var(--teal)}
.st-cosmo .kv{padding:10px 12px;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:13px}.st-cosmo .kv span{color:var(--mu)}.st-cosmo .kv b{text-align:right}
/* result */
.st-cosmo .cmp{padding:12px;display:grid;grid-template-columns:auto 1fr auto;gap:8px 10px;align-items:center;font-size:13px}.st-cosmo .cmp span{color:var(--mu)}
.st-cosmo .cb{height:10px;border-radius:5px;background:rgba(255,255,255,.1);overflow:hidden}.st-cosmo .cb i{display:block;height:100%;border-radius:5px;background:#6B74C4}.st-cosmo .cb i.g{background:linear-gradient(90deg,#29D3C0,#7BF2E2)}
.st-cosmo .tip.hintr{margin-top:auto}
/* crop */
.st-cosmo .cbox{position:relative;height:456px;border-radius:20px;overflow:hidden;background:#090C2A;box-shadow:0 0 0 1px var(--gb),0 14px 30px -10px rgba(0,0,0,.8);flex:none}
.st-cosmo.m-web .cbox{height:610px}
.st-cosmo .cimg{position:absolute;left:50%;top:50%;width:600px;height:450px;margin:-225px 0 0 -300px;background-size:cover;background-position:center}
.st-cosmo.m-web .cimg{width:760px;height:570px;margin:-285px 0 0 -380px}
.st-cosmo .cfr{position:absolute;left:50%;top:50%;width:240px;height:300px;margin:-150px 0 0 -120px;border:2px solid var(--gold);box-shadow:0 0 0 999px rgba(6,8,30,.66),0 0 22px rgba(255,197,61,.45)}
.st-cosmo.m-web .cfr{width:296px;height:370px;margin:-185px 0 0 -148px}
.st-cosmo .cfr .gr{position:absolute;inset:0;background:linear-gradient(rgba(255,197,61,.45),rgba(255,197,61,.45)) 33.3% 0/1px 100% no-repeat,linear-gradient(rgba(255,197,61,.45),rgba(255,197,61,.45)) 66.6% 0/1px 100% no-repeat,linear-gradient(rgba(255,197,61,.45),rgba(255,197,61,.45)) 0 33.3%/100% 1px no-repeat,linear-gradient(rgba(255,197,61,.45),rgba(255,197,61,.45)) 0 66.6%/100% 1px no-repeat}
.st-cosmo .cbox .tag{left:12px;bottom:12px}
.st-cosmo .hint{display:flex;gap:8px;align-items:center;color:var(--mu);font-size:13px}.st-cosmo .hint svg{color:var(--gold);flex:none}
.st-cosmo .cgap{width:104px;flex:none}
.st-cosmo .pfr{position:absolute;left:50%;top:50%;border:2px solid var(--gold);box-shadow:0 0 0 999px rgba(6,8,30,.55),0 0 18px rgba(255,197,61,.5);z-index:2}
.st-cosmo .ps{overflow:hidden}
.st-cosmo .ps .ph{z-index:0}
/* docks (mini process) */
.st-cosmo .od{background:linear-gradient(160deg,rgba(40,48,118,.96),rgba(14,18,60,.97));position:absolute;left:50%;top:44%;z-index:12;padding:12px 14px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;width:326px;margin-left:-163px;margin-top:-90px}
.st-cosmo.m-web .od{left:534px;top:360px;width:420px;margin-left:-210px;margin-top:-110px}
.st-cosmo .od .odt{display:flex;justify-content:space-between;align-items:baseline;width:100%}.st-cosmo .od .odt b{font-size:13px;letter-spacing:.08em}.st-cosmo .od .odm{font-size:20px;color:var(--gold);font-weight:700}
.st-cosmo .odb{display:grid;place-items:center;height:84px}.st-cosmo.m-web .odb{height:96px}
/* place */
.st-cosmo .mapv svg{width:100%;height:100%;display:block}
.st-cosmo .mpin{position:absolute;left:58%;top:52%;width:34px;height:46px;margin:-46px 0 0 -17px;z-index:3;transform-origin:50% 100%}
.st-cosmo .mr1,.st-cosmo .mr2{position:absolute;left:58%;top:52%;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;border:2px solid var(--coral);z-index:2}
.st-cosmo .dome{position:absolute;left:50%;top:50%;width:200px;height:200px;margin:-100px 0 0 -100px;border-radius:50%;z-index:4;border:2px solid rgba(41,211,192,.9);background:radial-gradient(circle,rgba(41,211,192,.05) 40%,rgba(41,211,192,.34));box-shadow:0 0 40px rgba(41,211,192,.55),inset 0 0 40px rgba(41,211,192,.4);display:grid;place-items:center;color:#9FF7EC}
.st-cosmo .thumb{position:absolute;right:20px;top:20px;width:52px;height:52px;border-radius:12px;background-size:cover;background-position:center;z-index:4;box-shadow:0 0 0 2px #fff4,0 8px 16px rgba(0,0,0,.6)}
.st-cosmo.m-web .thumb{width:90px;height:90px}
.st-cosmo .ptx b{font-size:21px;display:block;line-height:1.15}
.st-cosmo .swap{position:relative;min-height:50px}.st-cosmo .swap>div{position:absolute;left:0;right:0;top:0}
.st-cosmo .warn,.st-cosmo .okb{display:flex;gap:9px;align-items:center;padding:9px 11px;border-radius:12px;font-size:13px;font-weight:600}
.st-cosmo .warn{background:rgba(255,107,90,.16);border:1px solid rgba(255,107,90,.6)}.st-cosmo .warn svg{color:var(--coral);flex:none}
.st-cosmo .okb{background:rgba(41,211,192,.14);border:1px solid rgba(41,211,192,.6)}.st-cosmo .okb svg{color:var(--teal);flex:none}
/* gif */
.st-cosmo .trim{padding:4px 0 0}.st-cosmo .tstrip{position:relative;display:flex;height:50px;border-radius:10px;margin:0 8px}
.st-cosmo .tstrip>i{flex:1;background-size:cover;background-position:center;font-style:normal}.st-cosmo .tstrip>i:first-child{border-radius:10px 0 0 10px}.st-cosmo .tstrip>i:nth-child(8){border-radius:0 10px 10px 0}
.st-cosmo .tsel{position:absolute;top:-4px;bottom:-4px;border:2px solid var(--gold);border-radius:8px;box-shadow:0 0 0 999px rgba(8,11,40,.62),0 0 14px rgba(255,197,61,.6);clip-path:inset(-4px)}
.st-cosmo .trim{position:relative;overflow:hidden;border-radius:12px;padding:6px 0 0}
.st-cosmo .hnd{position:absolute;top:50%;width:18px;height:58px;margin:-29px 0 0 -9px;border-radius:7px;background:var(--gold);box-shadow:0 0 12px rgba(255,197,61,.7);z-index:2}
.st-cosmo .hnd::after{content:"";position:absolute;left:7.5px;top:18px;width:3px;height:22px;border-radius:2px;background:#1B1540;opacity:.6}
.st-cosmo .tms{display:flex;justify-content:space-between;padding:4px 8px 0}
.st-cosmo .rd{padding:10px 12px;display:flex;flex-direction:column;gap:8px}.st-cosmo .rd b{font-size:15px;display:block}.st-cosmo .rd small{font-size:10.5px;letter-spacing:.12em;font-weight:700}
.st-cosmo .chs{display:flex;gap:6px;flex-wrap:wrap}
.st-cosmo .play{position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px;border-radius:50%;background:rgba(8,11,40,.6);border:1.5px solid #fff8;display:grid;place-items:center;z-index:3}
/* done */
.st-cosmo .dres{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.st-cosmo .di{position:relative;display:flex;align-items:center;gap:8px;padding:7px 8px;min-width:0}.st-cosmo .di>i{width:44px;height:52px;border-radius:9px;background-size:cover;background-position:center;flex:none}
.st-cosmo .di>div{padding-right:12px;min-width:0}.st-cosmo.m-web .di>div{padding-right:0}.st-cosmo .di b{font-size:13px;display:block;line-height:1.15}.st-cosmo .di small{font-size:11.5px}.st-cosmo .di .pa{position:absolute;right:-6px;top:-8px}
.st-cosmo.m-web .dres{gap:14px}.st-cosmo.m-web .di{flex-direction:column;align-items:stretch;padding:9px;gap:8px}.st-cosmo.m-web .di>i{width:100%;height:150px}.st-cosmo.m-web .di .pa{right:-8px;top:-10px}
.st-cosmo .duo{display:flex;gap:8px}.st-cosmo .duo>div{flex:1;padding:8px 10px;display:flex;align-items:center;gap:8px;min-width:0}
.st-cosmo .rank,.st-cosmo .strk{display:flex;align-items:center;gap:8px;padding:8px 10px;min-width:0}.st-cosmo .rank b{font-size:15px;display:block;line-height:1.1}.st-cosmo .rank small{font-size:10.5px;letter-spacing:.12em;font-weight:700}.st-cosmo .gain{font-size:14px;color:var(--gold);margin-left:auto}
.st-cosmo .strk{flex-direction:column;align-items:stretch !important;gap:2px !important}.st-cosmo .strk b{font-size:15px;display:inline}.st-cosmo .strk small{display:inline;font-size:10.5px;letter-spacing:.12em;font-weight:700}
.st-cosmo .strk .cs{max-width:none;width:100%}
.st-cosmo .rcpt{display:flex;align-items:center;gap:10px;padding:8px 12px}.st-cosmo .rcpt .tapn{font-size:26px;color:var(--teal);min-width:38px}.st-cosmo .rcpt b{font-size:14px}
.st-cosmo .promise{display:flex;gap:8px;align-items:center;justify-content:center;font-size:13px;color:var(--teal);font-weight:600}
.st-cosmo .ad{display:flex;gap:10px;align-items:center;border:1px dashed rgba(150,165,255,.4);border-radius:12px;padding:8px 10px;background:rgba(255,255,255,.04)}
.st-cosmo .ad>i{width:40px;height:40px;border-radius:9px;background:rgba(255,255,255,.1);flex:none}
.st-cosmo .ad em{font-style:normal;font-size:10.5px;font-weight:700;letter-spacing:.06em;border:1px solid var(--mu);color:var(--mu);border-radius:5px;padding:0 5px;margin-right:6px}.st-cosmo .ad span{font-size:12.5px;color:var(--mu)}
.st-cosmo .prow{display:flex;gap:8px;align-items:center;justify-content:center}
/* Cosmo, bubble, menu, fx */
.st-cosmo .cosmo{position:absolute;left:0;top:0;width:200px;height:240px;z-index:20;will-change:transform}
.st-cosmo .csv{display:block;overflow:visible;position:relative}
.st-cosmo .chalo{position:absolute;left:24px;top:40px;width:152px;height:176px;border-radius:50%;background:radial-gradient(closest-side,rgba(123,97,255,.42),transparent)}
.st-cosmo .bubble{position:absolute;left:0;top:0;z-index:22}.st-cosmo .bubble.bb{transform:translateY(-100%)}
.st-cosmo .bi{position:relative;padding:9px 12px;border-radius:14px;font-size:13.5px;font-weight:600;background:linear-gradient(160deg,#2B3484,#1A2064);border:1px solid rgba(255,197,61,.55);box-shadow:0 12px 26px -8px rgba(0,0,0,.8);transform-origin:var(--ox,0) var(--oy,50%)}
.st-cosmo .bi::after{content:"";position:absolute;width:11px;height:11px;background:#1F2670;transform:rotate(45deg);border:1px solid rgba(255,197,61,.55)}
.st-cosmo .bubble.tpl .bi::after{left:-6px;top:var(--tt,22px);border-width:0 0 1px 1px}.st-cosmo .bubble.tpb .bi::after{bottom:-6px;left:var(--tx,50%);border-width:0 1px 1px 0}
.st-cosmo .bc{display:inline-flex;margin-left:8px;padding:2px 10px;border-radius:9px;background:var(--gold);color:#1B1540;font-size:12px}.st-cosmo .bc:empty{display:none}
.st-cosmo .qsc{position:absolute;inset:0;z-index:15;background:radial-gradient(circle at 50% 60%,rgba(5,7,28,.35),rgba(5,7,28,.72));opacity:0}
.st-cosmo .qm{position:absolute;left:0;top:0;z-index:24}
.st-cosmo .qb{position:absolute;left:0;top:0;width:0;height:0}
.st-cosmo .qb>*{position:absolute;transform:translate(-50%,0)}
.st-cosmo .qb .qi{left:0;top:-27px;width:54px;height:54px}.st-cosmo .qb span{left:0;top:32px;font-size:12px;font-weight:700;white-space:nowrap;text-shadow:0 2px 6px #000}
.st-cosmo .qb kbd{left:25px;top:-32px;font-size:10.5px}
.st-cosmo .fx{position:absolute;inset:0;z-index:30;pointer-events:none}
.st-cosmo .gate{position:absolute;left:0;top:0;border-radius:50%;border:3px solid rgba(255,214,107,.95);box-shadow:0 0 24px 4px rgba(255,197,61,.7),0 0 60px 8px rgba(123,97,255,.55),inset 0 0 30px rgba(41,211,192,.6)}
.st-cosmo .dia{position:absolute;left:0;top:0;border:2px solid rgba(255,214,107,.95);box-shadow:0 0 22px rgba(255,197,61,.7),inset 0 0 26px rgba(41,211,192,.5)}
.st-cosmo .dia.b{border-color:rgba(123,97,255,.9);box-shadow:0 0 18px rgba(123,97,255,.8)}
.st-cosmo .stp{position:absolute;left:0;top:0;width:0;height:0}
.st-cosmo .stp>.pa{position:absolute;left:-52px;top:-52px}
.st-cosmo .stl{position:absolute;left:-90px;width:180px;top:62px;text-align:center}.st-cosmo .stl b{display:block;font-size:14px;letter-spacing:.14em}.st-cosmo .stl span{display:inline-block;margin-top:3px;padding:2px 10px;border-radius:99px;background:var(--gold);color:#1B1540;font-weight:700;font-size:12px}
.st-cosmo .shk{position:absolute;left:0;top:0;width:0;height:0}.st-cosmo .shk i{position:absolute;left:-60px;top:-60px;width:120px;height:120px;border-radius:50%;border:3px solid var(--gold);box-shadow:0 0 16px rgba(255,197,61,.8)}
.st-cosmo .shk i+i{border-color:var(--teal);box-shadow:0 0 16px rgba(41,211,192,.8)}
.st-cosmo .xpc{position:absolute;left:0;top:0;margin:-12px 0 0 -26px;padding:3px 10px;border-radius:99px;background:var(--gold);color:#1B1540;font-weight:700;font-size:13px;box-shadow:0 0 16px rgba(255,197,61,.8)}
.st-cosmo .rkt{position:absolute;left:0;top:0;width:0;height:0}.st-cosmo .rkt svg{position:absolute;left:-17px;top:-10px}
.st-cosmo .rkt .tr{position:absolute;right:14px;top:-3px;width:120px;height:6px;border-radius:3px;background:linear-gradient(90deg,transparent,rgba(41,211,192,.7),rgba(255,214,107,.95),#fff)}
.st-cosmo .fcard{position:absolute;left:0;top:0;width:150px;padding:8px;z-index:19;display:flex;flex-direction:column;gap:5px}.st-cosmo .fcard i{height:96px;border-radius:9px;background-size:cover;background-position:center}.st-cosmo .fcard b{font-size:12.5px}
.st-cosmo .beam{position:absolute;left:0;top:0;width:100%;height:100%;z-index:18;pointer-events:none}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, app = A.app, E = A.ease, W = A.W, H = A.H;
    const { seg, set, cls, txt, lerp, clamp, win } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = 'c' + (ISK._cu = (ISK._cu || 0) + 1);
    const pad2 = n => String(n).padStart(2, '0');
    const PHS = { por: A.photo('portrait'), mnt: A.photo('mountain'), city: A.photo('city') };
    const MS = [['Shrink', 'shrink'], ['Crop', 'crop'], ['Place', 'pin'], ['GIF', 'film'], ['Convert', 'convert']];
    const PA = [['Compactor', '#FFC53D', 'shrink', 90], ['Framer', '#29D3C0', 'crop', 70], ['Guardian', '#7B61FF', 'shield', 80], ['Director', '#FF6B5A', 'film', 120], ['Converter', '#8E98C8', 'convert', 0]];
    const pa = (i, c = '') => `<div class="pa ${c}" style="--pc:${PA[i][1]}"><i>${I(PA[i][2], '100%', 2.4)}</i></div>`;
    const emb = (s, g = '#FFC53D', b = '#E8ECFF') => `<svg width="${s}" height="${s}" viewBox="0 0 32 32" aria-hidden="true"><g transform="rotate(-42 16 16)"><rect x="2.5" y="12" width="14" height="8" rx="4" fill="${g}"/><circle cx="7" cy="16" r="1.3" fill="#1D2062"/><circle cx="12" cy="16" r="1.3" fill="#1D2062"/><path d="M15.5 12h8.5q5 0 7.5 4-2.5 4-7.5 4h-8.5z" fill="${b}"/><path d="M17.5 13.6h6.5" stroke="#fff" stroke-width="1.2" opacity=".8"/></g></svg>`;
    const hc = '<u class="hc a"></u><u class="hc b"></u><u class="hc c"></u><u class="hc d"></u>';
    const chev = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path class="c1" d="M5 19l7-5 7 5"/><path class="c2" d="M5 13l7-5 7 5"/><path class="c3" d="M5 7l7-5 7 5"/></svg>`;
    const SN = [[14, 36], [42, 14], [72, 32], [104, 10], [134, 30], [164, 10], [188, 32]];
    const cons = () => `<svg class="cs" viewBox="0 0 200 46" aria-hidden="true">${SN.slice(1).map((p, i) => `<line class="ln l${i + 1}${i < 2 ? ' lit' : ''}" x1="${SN[i][0]}" y1="${SN[i][1]}" x2="${p[0]}" y2="${p[1]}" pathLength="1"/>`).join('')}${SN.map((p, i) => `<g class="sn n${i}${i < 3 ? ' lit' : ''}" transform="translate(${p[0]} ${p[1]})"><circle r="9"/><path d="M0-7L2-2 7 0 2 2 0 7-2 2-7 0-2-2Z"/></g>`).join('')}</svg>`;

    /* ---------- layout constants per mode ---------- */
    const G = app ? {
      cock: [118, 198, .8], pad: [195, 548, 1.05], work: [112, 340, 1], edit: [58, 778, .5], intro: [195, 440, 1.12],
      bub: { C: [172, 118, 208, 'l', 30], P: [38, 428, 314, 'b', 150], I: [72, 322, 246, 'b', 124] },
      stamp: [195, 430], ring: [-168, -12, 134], anchor: [-16, 70], pageCx: [195, 440],
    } : {
      cock: [917, 520, 1], pad: [917, 520, 1], work: [917, 520, 1], edit: [917, 520, 1], intro: [640, 430, 1.3],
      bub: { C: [830, 420, 178, 'b', 86], P: [830, 420, 178, 'b', 86], I: [520, 322, 240, 'b', 120] },
      stamp: [534, 360], ring: [-212, -58, 150], anchor: [-30, 260], pageCx: [534, 360],
    };
    const BOX = app ? { cp: { x: 0, y: 300, w: 390, h: 544 }, fl: { x: 0, y: 108, w: 390, h: 736 } } : { v: { x: 244, y: 64, w: 580, h: 680 }, r: { x: 1018, y: 64, w: 250, h: 680 } };

    /* ---------- background: nebula, stars, hyperspace ---------- */
    const bg = A.el('div', 'bg', S);
    const NB = [[760, 'rgba(123,97,255,.42)', .02, .02, 0], [620, 'rgba(41,211,192,.24)', .62, .74, 1.7], [520, 'rgba(255,197,61,.1)', .8, .08, 3.1], [700, 'rgba(123,97,255,.3)', .1, .8, 4.2]]
      .map(([sz, c, bx, by, ph]) => { const e = A.el('i', 'nb', bg); e.style.cssText = `width:${sz}px;height:${sz}px;margin:${-sz / 2}px 0 0 ${-sz / 2}px;background:radial-gradient(closest-side,${c},transparent)`; return { e, bx, by, ph }; });
    const cvs = A.el('canvas', 'stars', bg); cvs.width = W; cvs.height = H; const cx = cvs.getContext('2d');
    A.el('i', 'vig', bg);
    const sr = A.rng(15);
    const SS = Array.from({ length: web ? 200 : 140 }, () => ({ x: sr() * 2 - 1, y: sr() * 2 - 1, z: .05 + sr() * .95, v: .5 + sr() * 1, c: Math.floor(sr() * 4) }));
    const FS = Array.from({ length: web ? 150 : 90 }, () => ({ x: sr() * W, y: sr() * H, r: .5 + sr() * 1, p: sr() * 6.3, d: .2 + sr() * .8 }));
    const SC = ['#EEF1FF', '#FFE9A8', '#B9A9FF', '#8FF0E4'];
    const wAt = t => Math.min(1, Math.max(win(t, -1, 1.9, .01, 1.3), win(t, 2.15, 3.2, .2, .9) * .7, win(t, 10.05, 14.2, .45, .6), win(t, 22.3, 23.3, .15, .3) * .55, win(t, 27.5, 29.2, .15, .35) * .8, win(t, 33, 35.5, .35, .5), win(t, 37.2, 38.2, .1, .8) * .6));
    const PHI = [0]; for (let i = 1; i < 2500; i++) PHI[i] = PHI[i - 1] + (0.012 + wAt(i / 60) * 1.05) / 60;
    const phi = t => { const k = clamp(t * 60, 0, 2498), i = Math.floor(k); return lerp(PHI[i], PHI[i + 1], k - i); };
    const bgDraw = t => {
      const w = wAt(t), ph = phi(t), mx = W / 2 + Math.sin(t * .3) * 8, my = H * (app ? .44 : .5);
      cx.clearRect(0, 0, W, H); cx.lineCap = 'round';
      FS.forEach(s => { cx.globalAlpha = (.2 + .5 * (.5 + .5 * Math.sin(t * s.d * 2 + s.p))) * (1 - w * .6); cx.fillStyle = '#EEF1FF'; cx.fillRect(((s.x - t * s.d * 3) % W + W) % W, s.y, s.r, s.r); });
      SS.forEach(s => {
        const z = (((s.z - ph * s.v) % 1) + 1) % 1; if (z < .03) return;
        const k = .1 / z, z2 = Math.min(1, z + w * .1 * s.v + .003), k2 = .1 / z2;
        const px = mx + s.x * W * .5 * k, py = my + s.y * H * .5 * k; if (px < -30 || px > W + 30 || py < -30 || py > H + 30) return;
        cx.globalAlpha = Math.min(1, (1 - z) * 1.4 + .15); cx.strokeStyle = SC[s.c]; cx.lineWidth = .5 + (1 - z) * (1.3 + w * 1.2);
        cx.beginPath(); cx.moveTo(mx + s.x * W * .5 * k2, my + s.y * H * .5 * k2); cx.lineTo(px + .01, py); cx.stroke();
      });
      cx.globalAlpha = 1;
      NB.forEach((n, i) => { n.e.style.transform = `translate(${((n.bx + Math.sin(t * .11 + n.ph) * .05) * W).toFixed(1)}px,${((n.by + Math.cos(t * .09 + n.ph) * .04) * H).toFixed(1)}px) scale(${(1 + w * .25 + .06 * Math.sin(t * .2 + i)).toFixed(3)})`; n.e.style.opacity = (.75 + .25 * Math.sin(t * .4 + n.ph) + w * .4).toFixed(2); });
    };
    const tether = A.el('div', 'tth', S, `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><path class="t1" fill="none" stroke="rgba(210,218,255,.55)" stroke-width="3.6" stroke-linecap="round"/><path class="t2" fill="none" stroke="#7B61FF" stroke-width="1.6" stroke-dasharray="3 4" stroke-linecap="round"/></svg>`);
    const T1 = tether.querySelector('.t1'), T2 = tether.querySelector('.t2');

    /* ---------- HUD ---------- */
    const hud = A.el('div', 'hud gl', S, `<div class="rk"><div class="rb">${chev}</div><div><b class="rkn sr">Cadet</b><small class="rkl">Level 3</small></div></div><div class="fu"><div class="fh"><span>FUEL</span><b class="fv">240</b><small class="fm">/ 600</small></div><div class="ft"><i class="ff"></i></div></div><div class="pcn"><div class="pa mini" style="--pc:#FFC53D"><i>${I('star', '100%', 2.4)}</i></div><b class="pcv">0/4</b></div>`);
    const MR = [['Shrink', 'Make it smaller'], ['Crop', 'Crop for social'], ['Place', 'Where was it taken?'], ['GIF', 'Video to GIF'], ['Convert', 'Change format']];
    const daily = `<div class="daily gl"><div class="dh"><div><small>DAILY MISSION</small><b>Earn 4 patches</b></div><span class="dcn sr">0/4</span></div><div class="dbar"><i></i></div><div class="drow"><div class="slots">${PA.map((p, i) => `<div class="slot s${i}"><div class="pa em"></div>${pa(i)}</div>`).join('')}</div>${app ? cons() : ''}</div></div>`;
    if (web) {
      A.el('div', 'tb', S, `<div class="brand">${emb(30)}<b class="sr">Image Swiss Knife</b><span class="chip">Mission Control</span></div><div class="met"><small>MISSION TIME</small><b class="mt sr">T+ 00:00</b></div>`);
      A.el('div', 'lst gl', S, `<div class="lh">MISSIONS</div>${MR.map((m, i) => `<div class="mr m${i}"><div class="pa mini" style="--pc:${PA[i][1]}"><i>${I(MS[i][1], '100%', 2.4)}</i></div><b>${m[0]}</b><kbd>${i + 1}</kbd><span class="mst">${I('check', 10, 4)}</span></div>`).join('')}<div class="lh">STREAK</div>${cons()}<div class="daily gl"><div class="dh"><div><small>DAILY MISSION</small><b>Earn 4 patches</b></div><span class="dcn sr">0/4</span></div><div class="dbar"><i></i></div><div class="slots">${PA.map((p, i) => `<div class="slot s${i}"><div class="pa em"></div>${pa(i)}</div>`).join('')}</div></div>`);
    }

    /* ---------- pages ---------- */
    const PGS = [];
    const mk = (n, v, s, kind = 'cp') => {
      let rec;
      if (app) { const e = A.el('div', `pg ${n} ${kind}`, S, `<div class="vw">${v}</div><div class="sd">${s}</div>`); e._b = BOX[kind]; rec = { n, els: [e], v: e.firstChild, s: e.lastChild }; }
      else { const a = A.el('div', 'pv ' + n, S, v), b = A.el('div', 'pr ' + n, S, s); a._b = BOX.v; b._b = BOX.r; rec = { n, els: [a, b], v: a, s: b }; }
      rec.q = x => rec.els.map(e => e.querySelector(x)).find(Boolean); rec.qa = x => rec.els.flatMap(e => [...e.querySelectorAll(x)]);
      PGS.push(rec); return rec;
    };
    const gth = [PHS.por, PHS.mnt, PHS.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: .8 }), A.photo('abstract', { seed: 9 }), A.photo('abstract', { seed: 4 }), A.photo('mountain', { sun: .4 }), A.photo('abstract', { seed: 7 }), A.frame(7)];
    const th = n => gth.slice(0, n).map((b, i) => `<div class="th g${i}" style="background-image:${b}"><em class="ck">${I('check', 13, 3.6)}</em></div>`).join('');
    const kvh = rows => `<div class="kv gl">${rows.map(r => `<span>${r[0]}</span><b class="${r[2] || ''}">${r[1]}</b>`).join('')}</div>`;
    const btn = (c, ic, l, k) => `<div class="btn ${c}">${I(ic, 20, 2.4)}<span class="bl">${l}</span>${web && k ? `<kbd>${k}</kbd>` : ''}</div>`;
    const tipH = (ic, s) => `<div class="tip gl">${I(ic, 18, 2.2)}<span>${s}</span></div>`;
    const facts = rows => `<div class="facts gl">${rows.map(r => `<div><small>${r[0]}</small><b class="${r[2] || ''}">${r[1]}</b></div>`).join('')}</div>`;

    /* intro */
    const intro = A.el('div', 'intro', S, `<div class="ilogo"><div class="pa lg" style="--pc:#FFC53D"><i>${emb(52, '#1D2062', '#fff')}</i></div></div><h1 class="sr">Image Swiss Knife</h1><p class="isub">Mission control for your photos</p><div class="tmn"><small class="tml">LAUNCH SEQUENCE</small><b class="tmv sr">T–3</b></div><p class="ipriv">${I('lock', 16, 2.4)}${web ? D.promiseWeb : D.promise}</p>`);
    intro._b = { x: 0, y: 0, w: W, h: H }; PGS.push({ n: 'intro', els: [intro] });

    const home = mk('home', web
      ? `<div class="port drop"><div class="dz"><div class="dzi">${I('upload', 30, 2.2)}</div><b class="sr">Drop a photo or video</b><small>Cosmo's tractor beam catches it</small></div><div class="acq" style="background-image:${PHS.por};opacity:0"></div>${hc}<span class="tag tl">${I('folder', 12, 2.4)}Viewscreen ready</span></div><div class="sh"><b class="sr">Recent</b><small>or press <kbd>Ctrl</kbd> <kbd>V</kbd></small></div><div class="g4">${th(4)}</div>`
      : `<div class="sh"><b class="sr">Recent photos</b><small>Tap one to launch</small></div><div class="gal">${th(12)}</div>`,
      web ? `<div class="keys gl"><b class="sr">Quick keys</b>${MR.map((m, i) => `<div><span>${m[1]}</span><kbd>${i + 1}</kbd></div>`).join('')}<div><span>Paste photo</span><span><kbd>Ctrl</kbd> <kbd>V</kbd></span></div></div>${tipH('lock', 'Your files never leave this browser.')}`
        : `<div class="sh"><b class="sr">Missions</b><small>or tap Cosmo</small></div><div class="tools">${MR.map((m, i) => `<div class="tool"><i class="ti" style="--pc:${PA[i][1]}">${I(MS[i][1], 22, 2.2)}</i>${m[0]}</div>`).join('')}</div>${daily}`);

    const OPI = ['phone', 'image', 'share', 'ruler'];
    const brief = mk('brief', `<div class="brow"><div class="port pt"><i class="ph" style="background-image:${PHS.por}"></i>${hc}<span class="tag tl">${I('image', 12, 2.4)}${D.portrait.file}</span></div>${facts([['FILE', D.portrait.file], ['SIZE', D.portrait.size, 'sr gold'], ['PIXELS', D.portrait.dims]])}</div>`,
      `<div class="sh"><b class="sr">What is it for?</b><small>one tap starts it</small></div><div class="opts">${D.shrink.options.map((o, i) => `<div class="opt o${i}"><i class="oi">${I(OPI[i], 18, 2.2)}</i><div><b>${o.label}</b><small>${o.hint}</small></div>${i === 1 ? '<em class="pick">Cosmo\'s pick</em>' : ''}<span class="rad"></span></div>`).join('')}</div>`);

    const wk = (n, lab, ic, photoCls, stages, rows) => mk(n, `<div class="wk"><div class="wchip"><span>${I(ic, 14, 2.4)}${lab}</span></div><div class="tmn"><small>LIFTOFF IN</small><b class="tmv sr">T–3.4</b></div><div class="cap ${photoCls}"><i class="cfl"></i><div class="capp"></div></div><div class="dock"></div><div class="cnt"><b class="cn1 sr"></b><small class="cn2"></small></div></div>`,
      `<div class="stgs gl">${stages.map((s, i) => `<div class="stg s${i}"><i>${I('check', 11, 4)}</i>${s}</div>`).join('')}</div>${web ? kvh(rows) : ''}`, 'fl');
    const workA = wk('workA', 'MISSION 1 · SHRINK', 'shrink', '', ['Reading HEIC photo', `Resize to ${D.shrink.px}`, 'Finding best quality', 'Sealing under 200 KB'], [['Warp factor', 'x1', 'wf'], ['Quality', '95', 'ql'], ['Pixels', '4032 × 3024', 'px'], ['Uploads', '0 files']]);

    const res = mk('res', `<div class="brow"><div class="port pt"><i class="ph" style="background-image:${PHS.por}"></i>${hc}<span class="tag tl">${I('check', 12, 3)}Exam form ready</span></div>${facts([['NEW SIZE', D.shrink.size, 'sr big gold'], ['FORMAT', `${D.shrink.format} · ${D.shrink.px}`], ['WAS', `${D.portrait.size} · 96% smaller`]])}</div>`,
      `<div class="cmp gl"><span>Before</span><div class="cb"><i style="width:100%"></i></div><b>${D.portrait.size}</b><span>After</span><div class="cb"><i class="g cb1" style="width:100%"></i></div><b>${D.shrink.size}</b></div><div class="foot">${btn('save', 'save', 'Save', 'Ctrl S')}<div class="btn sec">${I('share', 18, 2.4)}</div></div>`);

    const bench = (n, ph, tags, side, vcls = '') => mk(n, `<div class="port bw ${vcls}"><i class="ph" style="background-image:${ph}"></i>${hc}${tags}</div>`, side, 'fl');
    const benchM = bench('benchM', PHS.mnt, `<span class="tag tl">${I('image', 12, 2.4)}IMG_1650.JPG</span><span class="tag br">4000 × 3000</span>`,
      (web ? kvh([['File', 'IMG_1650.JPG'], ['Pixels', '4000 × 3000'], ['Type', 'JPG photo'], ['Stored', 'This browser']]) : '') + tipH('sparkle', web ? 'Click Cosmo or press 1 to 5 for a mission.' : 'Tap Cosmo for the mission menu.'));
    const PRS = D.crop.presets.filter((p, i) => [0, 1, 2, 3, 5, 7].includes(i));
    const rb = p => { const m = 24, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<div class="ratio"><i style="width:${w}px;height:${h}px"></i></div>`; };
    const presets = mk('presets', `<div class="port ps"><i class="ph" style="background-image:${PHS.mnt}"></i><div class="pfr"></div>${hc}<span class="tag tl">IMG_1650.JPG</span></div>`,
      `<div class="sh"><b class="sr">Where will you post it?</b></div><div class="opts">${PRS.map((p, i) => `<div class="opt pr${i}">${rb(p)}<div><b>${p.label}</b><small>${p.ratio} · ${p.px}</small></div><span class="rad"></span></div>`).join('')}</div>`);
    const edit = mk('edit', `<div class="cbox"><div class="cimg" style="background-image:${PHS.mnt}"></div><div class="cfr"><u class="gr"></u></div><span class="tag">${I('crop', 12, 2.4)}${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}</span></div>`,
      web ? `${kvh([['Preset', D.crop.preset], ['Ratio', D.crop.ratio], ['Export', D.crop.px]])}<div class="hint">${I('crop', 16, 2.2)}<span>Drag the photo. Arrow keys nudge it.</span></div><div class="foot">${btn('dn', 'check', 'Done', 'Enter')}</div>`
        : `<div class="hint">${I('crop', 16, 2.2)}<span>Drag the photo inside the frame</span></div><div class="foot"><div class="cgap"></div>${btn('dn', 'check', 'Done')}</div>`, 'fl');
    const benchP = bench('benchP', PHS.city, `<span class="tag tl">${I('image', 12, 2.4)}${D.place.file}</span><span class="tag tr gps">${I('pin', 12, 2.4)}GPS tag found</span>`,
      (web ? kvh([['File', D.place.file], ['Camera', D.place.device], ['Taken', '12 Aug 2026']]) : '') + tipH('eye', 'Cosmo checks every photo for hidden places.'));
    const mapSVG = `<svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"><rect width="400" height="260" fill="#0A0E34"/><path d="M0 30h400M0 80h400M0 130h400M0 180h400M0 230h400M40 0v260M100 0v260M160 0v260M220 0v260M280 0v260M340 0v260" stroke="rgba(142,152,200,.1)"/><circle cx="232" cy="136" r="110" fill="none" stroke="rgba(142,152,200,.14)"/><circle cx="232" cy="136" r="62" fill="none" stroke="rgba(142,152,200,.14)"/><path d="M-10 190C60 170 120 215 190 180S300 110 410 140" stroke="rgba(41,211,192,.45)" stroke-width="9" fill="none"/><path d="M0 70L400 110M120 0L200 260M0 200L400 170M300 0L260 260" stroke="rgba(123,97,255,.5)" stroke-width="3" fill="none"/><path d="M30 40h60v36H30zM300 30h70v46h-70zM300 200h70v40h-70zM60 205h70v36H60z" fill="rgba(123,97,255,.14)"/><text x="200" y="250" text-anchor="middle" fill="rgba(142,152,200,.7)" font-size="10" font-family="Exo 2,sans-serif" font-weight="700" letter-spacing="3">${D.place.region.toUpperCase()} · ${D.place.country.toUpperCase()}</text></svg>`;
    const pinSVG = `<svg viewBox="0 0 34 46" width="34" height="46"><path d="M17 45S3 29 3 17a14 14 0 0 1 28 0C31 29 17 45 17 45z" fill="#FF6B5A" stroke="#fff" stroke-width="2"/><circle cx="17" cy="17" r="5.5" fill="#fff"/></svg>`;
    const place = mk('place', `<div class="port map"><div class="mapv">${mapSVG}</div>${hc}<div class="mpin">${pinSVG}</div><i class="mr1"></i><i class="mr2"></i><div class="dome">${I('shield', 56, 1.8)}</div><div class="thumb" style="background-image:${PHS.city}"></div><span class="tag tl">${I('pin', 12, 2.4)}<span class="mtag">${D.place.lat} · ${D.place.lon}</span></span></div>`,
      `<div class="ptx"><b class="sr pln">Searching…</b><small class="pls">${D.place.region} · ${D.place.when}</small></div>${kvh([['GPS', `${D.place.lat}, ${D.place.lon}`, 'gps'], ['Camera', D.place.device], ['File', D.place.file]])}<div class="swap"><div class="warn wv">${I('eye', 18, 2.3)}<span>If you share this photo, people can see this place.</span></div><div class="okb okv">${I('shield', 18, 2.3)}<span>Place removed. Safe to share.</span></div></div><div class="foot">${btn('rm', 'eyeoff', 'Remove location', 'Enter')}</div>`);
    const benchG = bench('benchG', A.frame(0), `<span class="tag tl">${I('video', 12, 2.4)}${D.video.file} · ${D.video.len}</span><div class="play">${I('play', 20, 2)}</div>`,
      (web ? kvh([['File', D.video.file], ['Length', D.video.len], ['Type', 'MP4 video']]) : '') + tipH('film', 'Cosmo can turn any clip into a loop.'), 'vid');
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(Math.floor(i * 1.5))}"></i>`).join('');
    const gedit = mk('gedit', `<div class="port vp"><i class="ph"></i>${hc}<span class="tag tl">${I('video', 12, 2.4)}${D.video.file}</span></div><div class="trim"><div class="tstrip">${strip}<div class="tsel"></div><div class="hnd hL"></div><div class="hnd hR"></div></div><div class="tms"><small>0:00</small><small>0:12</small></div></div>`,
      `<div class="rd gl"><div><small>CLIP</small><b class="sr tsv">0:04 – 0:08 · 4.0 s</b></div><div class="chs"><span class="chip">${D.video.fps} fps</span><span class="chip">${D.video.frames} frames</span><span class="chip">about 2 MB</span></div></div><div class="foot">${btn('mk', 'film', 'Make GIF', 'Enter')}</div>`);
    const workB = wk('workB', 'MISSION 4 · VIDEO TO GIF', 'film', 'ls', ['Cutting 0:04 to 0:07', `Grabbing ${D.video.frames} frames`, 'Mixing colours', 'Packing the loop'], [['Warp factor', 'x1', 'wf'], ['Frame rate', `${D.video.fps} fps`], ['GIF size', '0 KB', 'gs'], ['Uploads', '0 files']]);
    const gres = mk('gres', `<div class="port vp"><i class="ph"></i>${hc}<span class="tag tl">GIF · ${D.video.size}</span><span class="tag tr">${I('convert', 12, 2.4)}Loops</span></div>`,
      `${kvh([['Size', D.video.size, 'gold'], ['Speed', `${D.video.fps} fps`], ['Frames', String(D.video.frames)], ['Length', D.video.clip]])}<div class="foot">${btn('save', 'save', 'Save GIF', 'Ctrl S')}<div class="btn sec">${I('share', 18, 2.4)}</div></div>`);
    const items = [[PHS.por, 'Exam photo', `${D.shrink.size} · JPG`], [PHS.mnt, 'Instagram post', D.crop.px], [PHS.city, 'City photo', 'Location removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]];
    const adH = `<div class="ad"><i></i><div><em>Ad</em><span>Sponsored message. Shown only after your work is done.</span></div></div>`;
    const rankH = `<div class="gl rank"><div class="rb big">${chev}</div><div><small>PROMOTED TO</small><b class="sr rkn2">Cadet</b></div><span class="gain sr">+360</span></div>`;
    const strkH = `<div class="gl strk"><div><small>STREAK</small> <b class="sr sdy">Day 3</b></div>${cons()}</div>`;
    const rcptH = `<div class="gl rcpt"><b class="sr tapn">0</b><div><b>taps for 4 missions</b><small>Shrink 3 · Crop 4 · Place 2 · GIF 3</small></div></div>`;
    const done = mk('done', `<div class="dres">${items.map((x, i) => `<div class="di gl d${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><small>${x[2]}</small></div>${pa(i, 'sm')}</div>`).join('')}</div>${web ? `<div class="prow">${PA.slice(0, 4).map((p, i) => pa(i, 'mini')).join('')}</div><div class="promise">${I('shield', 18, 2.3)}${D.promiseWeb}</div>` : ''}`,
      app ? `<div class="duo">${rankH}${strkH}</div>${rcptH}<div class="promise">${I('shield', 18, 2.3)}${D.promise}</div><div class="foot" style="margin-top:0">${btn('saveall', 'save', 'Save all 4')}</div>${adH}`
        : `${rankH}${strkH}${rcptH}<div class="foot" style="margin-top:0">${btn('saveall', 'save', 'Download all 4', 'Ctrl S')}</div><div style="margin-top:auto">${adH}</div>`);
    if (web) { const sk = done.s.querySelector('.strk'); sk.style.padding = '8px 10px'; }

    /* overlay docks for the two short processes, plus the web file card */
    const odC = A.el('div', 'od gl', S, `<div class="odt"><b class="sr">RENDER ${D.crop.px}</b><span class="odm">T–0.8</span></div><div class="odb"></div><small>Packing pixels for Instagram</small>`);
    const odP = A.el('div', 'od gl', S, `<div class="odt"><b class="sr">WIPING LOCATION</b><span class="odm">T–1.5</span></div><div class="odb"></div><small class="odc">${D.place.lat} · ${D.place.lon}</small>`);

    /* ---------- progress bars (four kinds from A.bars) ---------- */
    const KB = A.bars(4, ['warp', 'orbit', 'comet', 'streams', 'tiles'], 15);
    const COL3 = ['#FFC53D', '#7B61FF', '#29D3C0'];
    const SZ = {
      big: app ? { warp: [326, 112], orbit: [116, 116], comet: [326, 44], streams: [326, 64], tiles: [326, 64] } : { warp: [540, 210], orbit: [170, 170], comet: [540, 50], streams: [540, 76], tiles: [540, 76] },
      mini: app ? { warp: [290, 76], orbit: [84, 84], comet: [290, 40], streams: [290, 54], tiles: [290, 54] } : { warp: [380, 86], orbit: [96, 96], comet: [380, 42], streams: [380, 58], tiles: [380, 58] },
    };
    const mkbar = (kind, host, sz, seed) => A.bar(host, kind, { w: SZ[sz][kind][0], h: SZ[sz][kind][1], colors: kind === 'warp' ? [...COL3, '#080B26'] : COL3, track: 'rgba(142,152,200,.2)', seed, field: 'rgba(8,11,40,.55)' });
    const bA = mkbar(KB[0], workA.q('.dock'), 'big', 3), bB = mkbar(KB[1], odC.querySelector('.odb'), 'mini', 5), bC = mkbar(KB[2], odP.querySelector('.odb'), 'mini', 7), bD = mkbar(KB[3], workB.q('.dock'), 'big', 9);

    /* ---------- Cosmo ---------- */
    const u = uid;
    const csv = `<svg class="csv" viewBox="-20 -20 200 240" width="200" height="240" aria-hidden="true"><defs>
<linearGradient id="w${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#E3E7FC"/><stop offset="1" stop-color="#A9B3E6"/></linearGradient>
<linearGradient id="n${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4C51C8"/><stop offset="1" stop-color="#1B1E60"/></linearGradient>
<radialGradient id="h${u}" cx=".34" cy=".26" r=".9"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#E6EAFF"/><stop offset="1" stop-color="#9FAAE4"/></radialGradient>
<linearGradient id="v${u}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFD76A" stop-opacity=".5"/><stop offset=".5" stop-color="#FFC53D" stop-opacity=".1"/><stop offset="1" stop-color="#7B61FF" stop-opacity=".36"/></linearGradient>
<radialGradient id="f${u}" cx=".42" cy=".34" r=".8"><stop offset="0" stop-color="#F8D2AE"/><stop offset="1" stop-color="#D79A70"/></radialGradient>
<linearGradient id="m${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A1B3C"/><stop offset=".6" stop-color="#4B2046"/><stop offset="1" stop-color="#FF6B5A"/></linearGradient>
<radialGradient id="g${u}"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<clipPath id="cv${u}"><rect x="40" y="38" width="80" height="64" rx="30"/></clipPath>
<clipPath id="ct${u}"><path d="M54 120q0-12 12-12h28q12 0 12 12v26q0 16-16 16H70q-16 0-16-16z"/></clipPath></defs>
<g class="kpk"><rect x="42" y="100" width="76" height="58" rx="13" fill="url(#n${u})" stroke="#0F1250" stroke-width="1.5"/><path d="M49 105h62" stroke="#9AA4FF" stroke-opacity=".35" stroke-width="2" stroke-linecap="round"/>
<g class="kst" opacity="0"><rect x="112" y="108" width="30" height="44" rx="8" fill="#10144E" stroke="#29D3C0" stroke-width="1.5"/><path d="M119 118h16M119 127h16M119 136h16M119 145h16" stroke="#29D3C0" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/><circle class="kd0" cx="124" cy="118" r="2.3" fill="#FFC53D"/><circle class="kd1" cx="130" cy="127" r="2.3" fill="#FFC53D"/><circle class="kd2" cx="122" cy="136" r="2.3" fill="#FFC53D"/><circle class="kd3" cx="131" cy="145" r="2.3" fill="#FFC53D"/></g>
<path d="M110 104L122 76" stroke="#B9C2F2" stroke-width="2.6" stroke-linecap="round"/><circle class="kal" cx="122.5" cy="75" r="3.9" fill="#FF6B5A"/>
<circle class="kl0" cx="48" cy="119" r="2.8"/><circle class="kl1" cx="48" cy="128" r="2.8"/><circle class="kl2" cx="48" cy="137" r="2.8"/><circle class="khr" cx="48" cy="119" r="5" fill="none" stroke="#29D3C0" stroke-width="2"/></g>
<g class="klgL"><rect x="60" y="148" width="19" height="30" rx="9" fill="url(#w${u})" stroke="#A5B0E4"/><path d="M59 168h21v10a8 8 0 0 1-8 8h-5a8 8 0 0 1-8-8z" fill="url(#n${u})" stroke="#0F1250"/></g>
<g class="klgR"><rect x="81" y="148" width="19" height="30" rx="9" fill="url(#w${u})" stroke="#A5B0E4"/><path d="M80 168h21v10a8 8 0 0 1-8 8h-5a8 8 0 0 1-8-8z" fill="url(#n${u})" stroke="#0F1250"/></g>
<g class="ktor"><path d="M54 120q0-12 12-12h28q12 0 12 12v26q0 16-16 16H70q-16 0-16-16z" fill="url(#w${u})" stroke="#A5B0E4" stroke-width="1.2"/>
<g clip-path="url(#ct${u})"><path d="M99 108v60" stroke="#8E98FF" stroke-opacity=".3" stroke-width="9"/><rect x="50" y="146" width="62" height="7" fill="#1D2062"/><rect x="74" y="145.5" width="12" height="8" rx="2" fill="#FFC53D"/></g>
<rect x="65" y="119" width="30" height="21" rx="5" fill="#16195A" stroke="#29D3C0" stroke-opacity=".65"/><circle class="kc0" cx="72" cy="124" r="1.7"/><circle class="kc1" cx="80" cy="124" r="1.7"/><circle class="kc2" cx="88" cy="124" r="1.7"/><g transform="translate(73.5 127) scale(.42)"><g transform="rotate(-42 16 16)"><rect x="2.5" y="12" width="14" height="8" rx="4" fill="#FFC53D"/><path d="M15.5 12h8.5q5 0 7.5 4-2.5 4-7.5 4h-8.5z" fill="#E8ECFF"/></g></g></g>
<g class="karmL"><rect x="49" y="119" width="15" height="36" rx="7.5" fill="url(#w${u})" stroke="#A5B0E4"/><rect x="49" y="146" width="15" height="8" rx="3" fill="#1D2062"/><circle cx="56.5" cy="161" r="8.6" fill="url(#w${u})" stroke="#A5B0E4"/><circle cx="56.5" cy="132" r="5.8" fill="#1D2062" stroke="#FFC53D" stroke-width="1" stroke-dasharray="2 1.4"/><g transform="translate(51.4 126.9) scale(.32)"><g transform="rotate(-42 16 16)"><rect x="2.5" y="12" width="14" height="8" rx="4" fill="#FFC53D"/><path d="M15.5 12h8.5q5 0 7.5 4-2.5 4-7.5 4h-8.5z" fill="#E8ECFF"/></g></g></g>
<g class="karmR"><rect x="96.5" y="119" width="15" height="36" rx="7.5" fill="url(#w${u})" stroke="#A5B0E4"/><rect x="96.5" y="146" width="15" height="8" rx="3" fill="#1D2062"/><circle cx="104" cy="161" r="8.6" fill="url(#w${u})" stroke="#A5B0E4"/><ellipse class="kthm" cx="113" cy="157" rx="6.8" ry="3.8" fill="url(#w${u})" stroke="#A5B0E4" opacity="0"/></g>
<g class="khd"><ellipse cx="80" cy="106" rx="31" ry="7.5" fill="url(#n${u})" stroke="#FFC53D" stroke-opacity=".7"/>
<rect x="28" y="56" width="15" height="28" rx="7.5" fill="url(#n${u})" stroke="#0F1250"/><rect x="117" y="56" width="15" height="28" rx="7.5" fill="url(#n${u})" stroke="#0F1250"/><circle cx="35.5" cy="64" r="2" fill="#29D3C0"/><circle cx="124.5" cy="64" r="2" fill="#FFC53D"/>
<path d="M114 32L124 12" stroke="#B9C2F2" stroke-width="2.4" stroke-linecap="round"/><circle class="kat" cx="124.5" cy="11" r="3.3" fill="#FFC53D"/>
<circle cx="80" cy="68" r="47" fill="url(#h${u})" stroke="#9AA6E0" stroke-width="1.2"/><path d="M118 94A47 47 0 0 1 66 113" fill="none" stroke="#29D3C0" stroke-width="2.6" stroke-linecap="round" opacity=".8"/><path d="M46 38A47 47 0 0 1 88 21" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"/>
<rect x="37" y="35" width="86" height="70" rx="33" fill="#10144A" stroke="#1B1F66" stroke-width="3"/>
<g clip-path="url(#cv${u})"><rect x="40" y="38" width="80" height="64" fill="#1B2070"/><ellipse cx="80" cy="98" rx="36" ry="20" fill="#2B2F8F"/>
<g class="kfc"><ellipse cx="80" cy="76" rx="28.5" ry="30" fill="url(#f${u})"/><path d="M51 70C48 46 66 40 80 40S112 46 109 70C103 59 97 52 80 52S57 59 51 70Z" fill="#241638"/><path d="M60 46Q70 41 82 42" stroke="#7A66C8" stroke-width="2" fill="none" opacity=".7"/>
<ellipse class="kchL" cx="62" cy="86" rx="5.6" ry="3.6" fill="#FF8A78"/><ellipse class="kchR" cx="98" cy="86" rx="5.6" ry="3.6" fill="#FF8A78"/>
<g class="keL" transform="translate(68 72)"><g class="keb"><ellipse rx="8" ry="9.2" fill="#F8F9FF"/><path d="M-8 -3Q0-11.5 8 -3" fill="none" stroke="#241638" stroke-width="1.8" stroke-linecap="round"/><g class="kpu"><circle r="5.6" fill="#3B2F8A"/><circle r="5.6" fill="none" stroke="#6B5CE7" stroke-width="1"/><circle r="3" fill="#10103A"/><circle cx="2" cy="-2.2" r="1.8" fill="#fff"/></g></g><path class="kea" d="M-8 3Q0-8 8 3" fill="none" stroke="#241638" stroke-width="3" stroke-linecap="round"/></g>
<g class="keR" transform="translate(92 72)"><g class="keb"><ellipse rx="8" ry="9.2" fill="#F8F9FF"/><path d="M-8 -3Q0-11.5 8 -3" fill="none" stroke="#241638" stroke-width="1.8" stroke-linecap="round"/><g class="kpu"><circle r="5.6" fill="#3B2F8A"/><circle r="5.6" fill="none" stroke="#6B5CE7" stroke-width="1"/><circle r="3" fill="#10103A"/><circle cx="2" cy="-2.2" r="1.8" fill="#fff"/></g></g><path class="kea" d="M-8 3Q0-8 8 3" fill="none" stroke="#241638" stroke-width="3" stroke-linecap="round"/></g>
<path class="kbL" d="M-8 1Q0-3 8 1" fill="none" stroke="#2B1B44" stroke-width="3.2" stroke-linecap="round"/><path class="kbR" d="M-8 1Q0-3 8 1" fill="none" stroke="#2B1B44" stroke-width="3.2" stroke-linecap="round"/>
<g class="kmo"><path class="kmp" fill="url(#m${u})" stroke="#3A1B3C" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/></g>
<path class="ksw" d="M107 55q5 7 0 11q-5-4 0-11z" fill="#9BE0FF" stroke="#fff" stroke-width=".8"/></g>
<ellipse class="kfog" cx="80" cy="98" rx="30" ry="10" fill="url(#g${u})"/><path d="M44 100Q80 84 118 98V104H44Z" fill="#29D3C0" opacity=".16"/>
<rect x="40" y="38" width="80" height="64" fill="url(#v${u})"/><g class="krf" fill="#fff"><circle cx="102" cy="52" r="1.3"/><circle cx="110" cy="90" r="1"/><circle cx="52" cy="94" r=".9"/></g></g>
<rect x="40" y="38" width="80" height="64" rx="30" fill="none" stroke="#FFC53D" stroke-opacity=".8" stroke-width="1.5"/><path d="M50 55Q52 46 63 43" stroke="#fff" stroke-width="3.4" stroke-linecap="round" fill="none" opacity=".75"/><circle cx="70" cy="42" r="1.6" fill="#fff" opacity=".85"/><path d="M112 76Q114 86 108 94" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" opacity=".35"/></g>
<g class="kthk"><circle cx="130" cy="30" r="3" fill="#EEF1FF"/><circle cx="139" cy="19" r="4.6" fill="#EEF1FF"/><ellipse cx="152" cy="3" rx="13" ry="10" fill="#EEF1FF"/><text x="152" y="8" text-anchor="middle" font-size="14" font-weight="800" fill="#2A2F8F" font-family="Sora,sans-serif">?</text></g>
<g class="kzz"><text x="128" y="28" font-size="17" font-weight="800" fill="#FFC53D" font-family="Sora,sans-serif">Z</text><text x="142" y="10" font-size="12" font-weight="800" fill="#FFC53D" font-family="Sora,sans-serif">z</text></g>
<g class="ksp" fill="#FFD76A"><path d="M12 40l2.4-6 2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4z"/><path d="M148 62l2-5 2 5 5 2-5 2-2 5-2-5-5-2z"/><path d="M132 4l1.6-4 1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6z"/></g></svg>`;
    const cos = A.el('div', 'cosmo', S, `<i class="chalo"></i>${csv}`);
    const cq = s => cos.querySelector(s), cqa = s => [...cos.querySelectorAll(s)];
    const R = { pk: cq('.kpk'), st: cq('.kst'), hr: cq('.khr'), al: cq('.kal'), at: cq('.kat'), lgL: cq('.klgL'), lgR: cq('.klgR'), tor: cq('.ktor'), aL: cq('.karmL'), aR: cq('.karmR'), thm: cq('.kthm'), hd: cq('.khd'), fc: cq('.kfc'),
      eL: cq('.keL'), eR: cq('.keR'), bL: cq('.kbL'), bR: cq('.kbR'), mo: cq('.kmo'), mp: cq('.kmp'), chL: cq('.kchL'), chR: cq('.kchR'), sw: cq('.ksw'), fog: cq('.kfog'), rf: cq('.krf'), thk: cq('.kthk'), zz: cq('.kzz'), sp: cq('.ksp'),
      ls: [0, 1, 2].map(i => cq('.kl' + i)), cs: [0, 1, 2].map(i => cq('.kc' + i)), ds: [0, 1, 2, 3].map(i => cq('.kd' + i)) };
    const at = (e, k, v) => { if (e._a === undefined) e._a = {}; if (e._a[k] !== v) { e._a[k] = v; e.setAttribute(k, v); } };
    const MK = ['eoL', 'eoR', 'arcL', 'arcR', 'pup', 'bLy', 'bRy', 'bLt', 'bRt', 'mw', 'mt', 'mb', 'mr', 'chk', 'sweat', 'think', 'zzz', 'spark'];
    const MOODS = {
      neutral: [1, 1, 0, 0, 1, 0, 0, 0, 0, 7, 5, 5, 0, .15, 0, 0, 0, 0],
      happy: [1, 1, 0, 0, 1, -2, -2, -3, -3, 11, 2, 16, 0, .55, 0, 0, 0, 0],
      wink: [1, 1, 0, 1, 1, -1, -4, -3, -6, 9, 6, 6, -7, .45, 0, 0, 0, 0],
      surprised: [1.15, 1.15, 0, 0, .72, -6, -6, -8, -8, 4.6, -9, 9, 0, 0, 0, 0, 0, 0],
      thinking: [1, .85, 0, 0, 1, 1, -4, 8, -6, 5, 3, 3, 10, 0, 0, 1, 0, 0],
      working: [.55, .55, 0, 0, 1, 1, 1, 14, 14, 10, 1, 9, 0, 0, 1, 0, 0, 0],
      celebrate: [1, 1, 1, 1, 1, -3, -3, -4, -4, 13, 0, 20, 0, .75, 0, 0, 0, 1],
      sleepy: [.2, .2, 0, 0, 1, 1, 1, -4, -4, 4, -3, 7, 0, .1, 0, 0, 1, 0],
    };
    const MT = [[0, 'sleepy'], [1.3, 'surprised'], [1.9, 'happy'], [3, 'wink'], [3.7, 'neutral'], [6.5, 'surprised'], [7, 'happy'], [8.8, 'thinking'], [9.8, 'neutral'], [10.1, 'working'], [14, 'celebrate'], [15.7, 'happy'], [17, 'neutral'], [17.45, 'wink'], [18.8, 'neutral'], [19.9, 'thinking'], [22.25, 'happy'], [22.4, 'working'], [23.2, 'celebrate'], [24.2, 'neutral'], [24.9, 'thinking'], [25.65, 'surprised'], [26.3, 'thinking'], [27.4, 'working'], [29.05, 'celebrate'], [30.2, 'neutral'], [30.5, 'wink'], [31.3, 'thinking'], [33, 'working'], [35.2, 'celebrate'], [37, 'happy'], [37.3, 'celebrate'], [39, 'wink']];
    const mv = t => { let i = 0; while (i < MT.length - 1 && t >= MT[i + 1][0]) i++; const c = MOODS[MT[i][1]], p = MOODS[MT[Math.max(0, i - 1)][1]], k = E.out(seg(t, MT[i][0], MT[i][0] + .16)); return c.map((v, j) => lerp(p[j], v, k)); };
    const pull = [t => 64 + Math.sin(t * 15) * 8, t => 64 + Math.sin(t * 15 + 1.6) * 8], cel = [t => 166 + Math.sin(t * 10) * 10, t => 166 + Math.sin(t * 10 + 2) * 10];
    const POS = [[1.85, 3, { aR: t => 150 + Math.sin(t * 13) * 18, aL: 34 }], [6.95, 8.9, { aR: 104, th: 1, aL: 30 }], [10.15, 14, { aL: pull[0], aR: pull[1] }], [14, 15.6, { aL: cel[0], aR: cel[1] }], [17.45, 18.75, { aR: 104, th: 1, aL: 52 }], [22.4, 23.2, { aL: pull[0], aR: pull[1] }], [23.2, 24.1, { aL: cel[0], aR: cel[1] }],
      [25.6, 26.4, { aL: 140, aR: 140 }], [27.5, 29.05, { aL: pull[0], aR: pull[1] }], [29.05, 30.1, { aL: cel[0], aR: cel[1] }], [30.45, 31.1, { aR: 104, th: 1 }], [33, 35.2, { aL: pull[0], aR: pull[1] }], [35.2, 36.6, { aL: cel[0], aR: cel[1] }], [37.3, 40.5, { aL: t => 150 + Math.sin(t * 8) * 20, aR: t => 150 + Math.sin(t * 8 + 1) * 20 }]];
    if (web) POS.push([5.9, 7.3, { aL: 98 }]);
    const SPT = [[-9, ...G.intro], [3.1, ...G.cock, .8], [10.95, ...G.work, .6], [14.4, ...G.cock, .6], [17.2, ...G.pad, .6], [19.45, ...G.cock, .6], [20.4, ...G.edit, .5], [24.45, ...G.pad, .6], [26.4, ...G.cock, .5], [30.1, ...G.pad, .5], [31.55, ...G.cock, .5], [33.75, ...G.work, .5], [35.5, ...G.cock, .5]];
    const cpos = t => {
      if (t < 1.7) { const k = E.out(seg(t, 0, 1.7)); return { x: lerp(app ? 330 : 900, G.intro[0], k) + Math.sin(k * 7) * 46 * (1 - k), y: lerp(app ? 250 : 120, G.intro[1], k) + Math.cos(k * 6) * 34 * (1 - k), s: lerp(.12, G.intro[2], k), spin: (1 - k) * 700 }; }
      let k = 0; while (k < SPT.length - 1 && t >= SPT[k + 1][0] - SPT[k + 1][4]) k++;
      const a = SPT[k], b = SPT[k + 1]; let m = 0; if (b) m = E.inOut(seg(t, b[0] - b[4], b[0])); else m = 0;
      if (!b) return { x: a[1], y: a[2], s: a[3], spin: 0 };
      return { x: lerp(a[1], b[1], m), y: lerp(a[2], b[2], m), s: lerp(a[3], b[3], m), spin: Math.sin(m * Math.PI) * 360 * (b[3] === a[3] ? 0 : 0) };
    };
    const CT = { x: 0, y: 0, r: 0, s: 1 };
    const c2s = (px, py) => { const dx = (px - 80) * CT.s, dy = (py - 100) * CT.s, c = Math.cos(CT.r * Math.PI / 180), s = Math.sin(CT.r * Math.PI / 180); return { x: CT.x + dx * c - dy * s, y: CT.y + dx * s + dy * c }; };
    const CELW = [[14, 15.6], [23.2, 24.1], [29.05, 30.1], [35.2, 36.6], [37.3, 40.5]];
    const MENU = { open: 17.45, pick: 18.55, close: 18.62, idx: 1 };
    const menuK = t => seg(t, MENU.open, MENU.open + .3) * (1 - seg(t, MENU.close, MENU.close + .3));
    function drawCosmo(t) {
      const cp = cpos(t), lf = A.life(t, 3), ml = mv(t), M = {}; MK.forEach((k, i) => { M[k] = ml[i]; });
      let aL = 24 + Math.sin(t * 1.3) * 5, aR = 24 + Math.sin(t * 1.1 + 1) * 5, th = 0;
      POS.forEach(([a, b, o]) => { const w = Math.min(seg(t, a, a + .22), 1 - seg(t, b - .22, b)); if (w <= 0) return; const f = v => typeof v === 'function' ? v(t) : v; if (o.aL != null) aL = lerp(aL, f(o.aL), w); if (o.aR != null) aR = lerp(aR, f(o.aR), w); if (o.th != null) th = lerp(th, o.th, w); });
      let hop = 0; CELW.forEach(([a, b]) => { const w = Math.min(seg(t, a, a + .2), 1 - seg(t, b - .2, b)); hop = Math.max(hop, w * Math.abs(Math.sin((t - a) * 5.5)) * 14); });
      const work = ml[14] > .5 ? 1.3 : 0;
      const dx = Math.sin(t * .7) * 3 + Math.sin(t * 61) * work, dy = Math.sin(t * 1.05) * 5 + Math.sin(t * .45) * 2 - hop * cp.s + Math.cos(t * 53) * work;
      const tum = Math.sin(t * .5) * 4.5 + Math.sin(t * .83 + 1) * 2.2 + (cp.spin || 0) + (t > 1.25 && t < 1.5 ? Math.sin(seg(t, 1.25, 1.5) * 3.14) * -12 : 0);
      CT.x = cp.x + dx; CT.y = cp.y + dy; CT.r = tum; CT.s = cp.s; CT.cx = cp.x; CT.cy = cp.y;
      set(cos, { x: CT.x - 100, y: CT.y - 120, r: tum, s: cp.s });
      /* look at the pointer */
      const pt = A.pointerAt(t), ex = CT.x, ey = CT.y - 28 * cp.s;
      let lx = lerp(Math.sin(t * .55) * .5, clamp((pt.x - ex) / 150, -1, 1), pt.vis), ly = lerp(Math.sin(t * .4 + 1) * .25, clamp((pt.y - ey) / 150, -1, 1), pt.vis);
      lx = lerp(lx, -.75, M.think); ly = lerp(ly, -.85, M.think); ly = lerp(ly, .8, M.zzz);
      /* face */
      const bl = lf.blink; at(R.fc, 'transform', `translate(${(lx * 1.6).toFixed(2)} ${(ly * 1.2).toFixed(2)})`);
      [[R.eL, M.eoL, M.arcL, -1], [R.eR, M.eoR, M.arcR, 1]].forEach(([g, eo, arc]) => {
        const eb = g.firstChild, o = Math.max(.05, eo * (1 - bl) * (1 - arc)); at(eb, 'transform', `scale(1 ${o.toFixed(3)})`); at(eb, 'opacity', (1 - arc).toFixed(2)); at(g.lastChild, 'opacity', arc.toFixed(2));
        const pu = eb.firstChild.nextSibling || eb.lastChild; at(eb.querySelector('.kpu'), 'transform', `translate(${(lx * 3.4).toFixed(2)} ${(ly * 2.6).toFixed(2)}) scale(${M.pup.toFixed(2)})`);
      });
      at(R.bL, 'transform', `translate(68 ${(60 + M.bLy).toFixed(1)}) rotate(${M.bLt.toFixed(1)})`); at(R.bR, 'transform', `translate(92 ${(60 + M.bRy).toFixed(1)}) rotate(${(-M.bRt).toFixed(1)})`);
      const w = M.mw, tp = M.mt, bt = M.mb; at(R.mp, 'd', `M${-w} 0C${-w} ${tp} ${w} ${tp} ${w} 0C${w} ${bt} ${-w} ${bt} ${-w} 0Z`); at(R.mp, 'fill-opacity', clamp((bt - tp) / 5, 0, 1).toFixed(2)); at(R.mo, 'transform', `translate(80 ${(90 - Math.max(0, tp < 0 ? tp * .3 : 0)).toFixed(1)}) rotate(${M.mr.toFixed(1)})`);
      at(R.chL, 'opacity', M.chk.toFixed(2)); at(R.chR, 'opacity', M.chk.toFixed(2));
      at(R.sw, 'opacity', M.sweat.toFixed(2)); at(R.sw, 'transform', `translate(0 ${((t * 14) % 9).toFixed(1)})`);
      at(R.fog, 'opacity', (.1 + .22 * (.5 + .5 * Math.sin(t * 1.5))).toFixed(2)); at(R.rf, 'transform', `translate(${(Math.sin(t * .5) * 3).toFixed(1)} ${(Math.cos(t * .4) * 2).toFixed(1)})`);
      at(R.thk, 'opacity', M.think.toFixed(2)); at(R.thk, 'transform', `translate(0 ${(Math.sin(t * 2) * 1.5).toFixed(1)})`);
      at(R.zz, 'opacity', M.zzz.toFixed(2)); at(R.zz, 'transform', `translate(${(Math.sin(t * 2) * 2).toFixed(1)} ${(-((t * 7) % 12)).toFixed(1)})`);
      at(R.sp, 'opacity', M.spark.toFixed(2)); at(R.sp, 'transform', `rotate(${(Math.sin(t * 3) * 14).toFixed(1)} 80 70) scale(${(1 + .12 * Math.sin(t * 9)).toFixed(3)})`);
      /* body */
      at(R.hd, 'transform', `rotate(${(lx * 3 + Math.sin(t * .6) * 1.5 + M.think * 6).toFixed(2)} 80 104)`);
      at(R.aL, 'transform', `rotate(${aL.toFixed(1)} 56.5 124)`); at(R.aR, 'transform', `rotate(${(-aR).toFixed(1)} 104 124)`); at(R.thm, 'opacity', th.toFixed(2));
      at(R.lgL, 'transform', `rotate(${(Math.sin(t * 1.6) * 5).toFixed(1)} 70 150)`); at(R.lgR, 'transform', `rotate(${(-Math.sin(t * 1.6 + .5) * 5).toFixed(1)} 90 150)`);
      at(R.tor, 'transform', `translate(0 135) scale(1 ${(1 + .014 * Math.sin(t * 2.1)).toFixed(4)}) translate(0 -135)`);
      /* lights and the backpack hatch */
      const hint = win(t, 3.1, 4.05, .15, .2), kk = menuK(t);
      R.ls.forEach((e, i) => at(e, 'fill', (Math.floor(t * 2.2) % 3 === i || (i === 0 && hint > 0 && Math.sin(t * 14) > 0)) ? (hint > 0 && i === 0 ? '#FF6B5A' : '#29D3C0') : '#2A3278'));
      R.cs.forEach((e, i) => at(e, 'fill', Math.floor(t * 1.7 + i) % 3 === 0 ? '#FFC53D' : '#2A3278'));
      R.ds.forEach((e, i) => at(e, 'fill', Math.sin(t * 9 + i * 2) > 0 ? '#FFC53D' : '#29D3C0'));
      at(R.al, 'fill', Math.sin(t * 5.2) > .2 ? '#FF6B5A' : '#5A2C5F'); at(R.at, 'fill', Math.sin(t * 3.1 + 2) > .1 ? '#FFC53D' : '#7A6A3A');
      at(R.hr, 'r', (4 + ((t * 2.2) % 1) * 9).toFixed(1)); at(R.hr, 'opacity', (hint * (1 - ((t * 2.2) % 1))).toFixed(2));
      at(R.st, 'opacity', kk.toFixed(2)); at(R.st, 'transform', `translate(112 0) scale(${Math.max(.01, kk).toFixed(3)} 1) translate(-112 0)`);
      return { x: CT.x, y: CT.y, s: cp.s };
    }

    /* ---------- bubble, quick menu, FX ---------- */
    const bub = A.el('div', 'bubble', S, '<div class="bi"><span class="bt"></span><b class="bc"></b></div>');
    const BI = bub.firstChild, BT = BI.firstChild, BC = BI.lastChild;
    const BL = [[1.9, 'Ready for liftoff!', 'I'], [2.35, null], [2.95, web ? 'I am Cosmo. Click me any time for the mission menu.' : 'I am Cosmo. Tap me any time for the mission menu.', 'C'], [4.4, web ? 'Drag a photo here. My tractor beam will catch it.' : 'Pick a photo to launch your first mission.', 'C'],
      [6.75, web ? 'Got it! 4.8 MB is big for a form.' : 'Nice shot! 4.8 MB is big for a form.', 'C'], [8.75, 'Going to an exam form? I know the size.', 'C'], [10.4, null], [14.1, 'Mission complete. 196 KB!', 'C'], [15.8, 'Saved. +90 fuel for you.', 'C'], [17.05, web ? 'Click me for the mission menu.' : 'Tap me for the mission menu.', 'P'], [17.38, null],
      [18.95, 'Where will you post it?', 'C'], [20.1, null], [24.35, 'This photo knows where it was taken. Check?', 'P', 'Check'], [25.7, null], [26.55, 'Found it. Pune, India.', 'C'], [28.0, null], [29.3, 'Location wiped. Safe to share.', 'C'], [30.1, 'Video found. Make a GIF?', 'P', 'Yes'], [31.0, null],
      [31.4, 'Slide the handle to pick 3 seconds.', 'C'], [33.0, null], [35.4, 'GIF ready. 2.1 MB loop!', 'C'], [36.85, 'Promoted to Pilot! +360 fuel.', 'C']];
    const bubUpdate = t => {
      let c = null; for (const l of BL) if (t >= l[0]) c = l;
      if (!c || !c[1] || (c[1] && t >= 36.3 && t < 36.3)) { set(bub, { o: 0 }); return; }
      const pl = G.bub[c[2]]; if (bub._l !== c) { bub._l = c; bub.style.left = pl[0] + 'px'; bub.style.top = pl[1] + 'px'; bub.style.width = pl[2] + 'px'; bub.className = 'bubble ' + (pl[3] === 'b' ? 'bb tpb' : 'tpl'); BI.style.setProperty('--tx', pl[4] + 'px'); BI.style.setProperty('--tt', pl[4] + 'px'); BI.style.setProperty('--ox', pl[3] === 'b' ? pl[4] + 'px' : '0px'); BI.style.setProperty('--oy', pl[3] === 'b' ? '100%' : pl[4] + 'px'); txt(BT, c[1]); txt(BC, c[3] || ''); }
      const k = E.outBack(seg(t, c[0], c[0] + .35)); set(BI, { s: .7 + .3 * k, o: seg(t, c[0], c[0] + .15) }); set(bub, { o: 1 });
    };
    const qsc = A.el('div', 'qsc', S);
    const qm = A.el('div', 'qm', S, MS.map((m, i) => `<div class="qb qb${i}"><i class="qi" style="--pc:${PA[i][1]}">${I(m[1], 24, 2.2)}</i><span>${m[0]}</span>${web ? `<kbd>${i + 1}</kbd>` : ''}</div>`).join(''));
    const qbs = qa('.qb');
    const menuUpdate = t => {
      const kk = menuK(t); set(qsc, { o: kk * .9 }); qm.style.display = kk > 0 ? '' : 'none'; if (kk <= 0) return;
      const pk = c2s(124, 130), cc = { x: G.pad[0], y: G.pad[1] }, [a0, a1, rad] = G.ring, ps = G.pad[2];
      qbs.forEach((b, i) => {
        const a = (lerp(a0, a1, i / 4)) * Math.PI / 180, o = E.outBack(seg(t, MENU.open + i * .04, MENU.open + .32 + i * .04)), c = 1 - E.in(seg(t, MENU.close + i * .02, MENU.close + .26 + i * .02));
        const k = Math.max(0, o) * c, sw = (1 - Math.min(1, o)) * -1.1, ca = Math.cos(a + sw), sa = Math.sin(a + sw);
        const tx = cc.x + ca * rad * ps, ty = cc.y + sa * rad * ps;
        const pk2 = seg(t, MENU.pick, MENU.pick + .25), pickd = i === MENU.idx ? 1 + .22 * Math.sin(Math.PI * pk2) : 1 - .08 * pk2;
        const x = lerp(pk.x, tx, Math.min(1, o)), y = lerp(pk.y, ty, Math.min(1, o));
        set(b, { x, y, s: (.35 + .65 * Math.min(1.1, k)) * pickd, o: clamp(o * 1.6, 0, 1) * (i === MENU.idx ? c : c * (1 - .35 * pk2)) });
        b.firstChild.style.boxShadow = i === MENU.idx && t > MENU.pick ? `0 0 0 3px #FFC53D,0 0 ${(18 * (1 - pk2) + 8).toFixed(0)}px rgba(255,197,61,.9)` : '';
      });
    };
    const fx = A.el('div', 'fx', S);
    const gate = A.el('div', 'gate', fx), dia = A.el('div', 'dia', fx), dib = A.el('div', 'dia b', fx);
    const flash = A.el('div', 'flash', S);
    const STP = [[14.6, 15.1, 15.55], [23.2, 23.65, 24.05], [29.1, 29.55, 29.95], [35.5, 35.85, 36.25]];
    const stps = STP.map((s, i) => { const shk = A.el('div', 'shk', fx, '<i></i><i></i>'), e = A.el('div', 'stp', fx, `${pa(i, 'lg')}<div class="stl"><b class="sr">${PA[i][0].toUpperCase()}</b><span>+${PA[i][3]} FUEL</span></div>`), x = A.el('div', 'xpc', fx, `+${PA[i][3]}`); return { e, shk, x, s }; });
    const SK = stps.map((s, i) => ({ star: A.confetti(fx, { x: G.stamp[0], y: G.stamp[1], count: 22, shape: 'star', colors: ['#FFC53D', '#FFE9A8', '#29D3C0', '#B9A9FF'], seed: 20 + i, power: 520, spread: Math.PI * 2, gravity: 420, dur: 1.5 }), spark: A.confetti(fx, { x: G.stamp[0], y: G.stamp[1], count: 26, shape: 'spark', colors: ['#fff', '#FFC53D', '#8FF0E4'], seed: 30 + i, power: 640, spread: Math.PI * 2, gravity: 260, dur: 1.0 }) }));
    const rankBurst = A.confetti(fx, { x: app ? 195 : 1140, y: app ? 520 : 330, count: 36, shape: 'star', colors: ['#FFC53D', '#7B61FF', '#29D3C0', '#FF6B5A'], seed: 77, power: 600, spread: Math.PI * 1.6, gravity: 500, dur: 1.8 });
    const rocket = A.el('div', 'rkt', fx, `<div class="tr"></div><svg width="34" height="20" viewBox="0 0 34 20"><path d="M2 10L8 5h10c6 0 11 2.4 15 5-4 2.6-9 5-15 5H8z" fill="#EEF1FF" stroke="#9AA6E0"/><path d="M8 5L3 1l1 9-1 9 5-4z" fill="#FF6B5A"/><circle cx="21" cy="10" r="3.2" fill="#FFC53D" stroke="#1B1540"/><path d="M-4 10l6-3v6z" fill="#FFB21F"/></svg>`);
    const FLY = [[14.7, 1.3, [-20, app ? 640 : 700], [app ? 410 : 1300, app ? 90 : 120], -120], [23.3, 1.2, [app ? 410 : 1300, app ? 700 : 740], [-20, app ? 150 : 200], 110], [29.2, 1.2, [-20, app ? 720 : 760], [app ? 410 : 1300, app ? 200 : 160], -130], [35.6, 1.2, [app ? 410 : 1300, app ? 660 : 700], [-20, app ? 120 : 140], 110], [37.35, 1.5, [-20, app ? 760 : 740], [app ? 410 : 1300, app ? 120 : 100], -150]];
    const TG = {};
    const getTg = () => { if (!TG.pc) { TG.pc = A.center('.hud .pcn'); TG.fu = A.center('.hud .ft'); } };
    const fxUpdate = t => {
      getTg();
      /* warp gate rings for iris pages, diamond edge for diamond pages */
      let gOn = 0, dOn = 0;
      PGS.forEach(r => { if (!r.in) return; const [a, b, k, o] = r.in; if (t <= a || t >= b) return; const p = seg(t, a, b), qd = E.inOut(p), e0 = r.els[0], bx = e0._b;
        if (k === 'iris') { const sx = vl(o.sx), sy = vl(o.sy), rr = qd * 1.5 * Math.sqrt((bx.w * bx.w + bx.h * bx.h) / 2); gOn = 1 - seg(p, .82, 1); gate.style.width = gate.style.height = (rr * 2) + 'px'; gate.style.transform = `translate(${sx - rr}px,${sy - rr}px)`; }
        if (k === 'diamond') { const kk = qd * (bx.w + bx.h) * .6, c = { x: bx.x + bx.w / 2, y: bx.y + bx.h / 2 }; dOn = 1 - seg(p, .85, 1); [[dia, 1], [dib, .9]].forEach(([d, f]) => { const sz = kk * f * 1.4142; d.style.width = d.style.height = sz + 'px'; d.style.transform = `translate(${c.x - sz / 2}px,${c.y - sz / 2}px) rotate(45deg)`; }); } });
      set(gate, { o: gOn }); set(dia, { o: dOn }); set(dib, { o: dOn * .8 });
      /* patch stamps */
      const [sx, sy] = G.stamp;
      stps.forEach((p, i) => {
        const [a, f0, f1] = p.s, ap = seg(t, a, a + .24), fl = E.inOut(seg(t, f0, f1)), im = t - (a + .24);
        const px = lerp(sx, TG.pc.x, fl), py = lerp(sy, TG.pc.y, fl), sc = (t < a + .24 ? lerp(2.6, 1, E.in(ap)) : 1 + .1 * Math.exp(-9 * im) * Math.cos(26 * im)) * lerp(1, .28, fl);
        set(p.e, { x: px, y: py, s: sc, r: (1 - ap) * 24 + Math.sin(fl * 3) * 6, o: t < a ? 0 : (1 - seg(fl, .8, 1)) * clamp(ap * 3, 0, 1) });
        p.e.lastChild.style.opacity = (1 - seg(t, f0 - .1, f0 + .15)).toFixed(2);
        const rs = seg(t, a + .24, a + .9); set(p.shk, { x: sx, y: sy, o: t < a + .24 || rs >= 1 ? 0 : 1 - rs }); p.shk.firstChild.style.transform = `scale(${(.4 + rs * 2.6).toFixed(3)})`; p.shk.lastChild.style.transform = `scale(${(.3 + seg(t, a + .3, a + 1.1) * 2.2).toFixed(3)})`; p.shk.lastChild.style.opacity = (1 - seg(t, a + .3, a + 1.1)).toFixed(2);
        const xq = E.inOut(seg(t, f0 + .02, f1 + .02)); set(p.x, { x: lerp(sx, TG.fu.x, xq), y: lerp(sy + 78, TG.fu.y, xq), s: 1 - .3 * xq, o: t < f0 ? 0 : 1 - seg(xq, .85, 1) });
        SK[i].star.update(t - (a + .24)); SK[i].spark.update(t - (a + .24));
      });
      rankBurst.update(t - 37.3);
      /* rocket */
      let ro = 0; FLY.forEach(([a, d, p0, p1, bow]) => { const k = seg(t, a, a + d); if (k <= 0 || k >= 1) return; ro = 1; const e = E.inOut(k), mx = (p0[0] + p1[0]) / 2 + bow * .3, my = (p0[1] + p1[1]) / 2 + bow, x = (1 - e) * (1 - e) * p0[0] + 2 * (1 - e) * e * mx + e * e * p1[0], y = (1 - e) * (1 - e) * p0[1] + 2 * (1 - e) * e * my + e * e * p1[1], dx = 2 * (1 - e) * (mx - p0[0]) + 2 * e * (p1[0] - mx), dy = 2 * (1 - e) * (my - p0[1]) + 2 * e * (p1[1] - my); set(rocket, { x, y, r: Math.atan2(dy, dx) * 180 / Math.PI, o: Math.min(1, k * 8, (1 - k) * 8) }); });
      if (!ro) set(rocket, { o: 0 });
    };
    const vl = v => typeof v === 'function' ? v() : v;
    /* flashes */
    const FLS = [[2.1, 2.65, .5], [10.15, 10.75, .75], [33, 33.55, .65], [14.0, 14.4, .3], [37.25, 37.8, .55]];
    /* web: tractor beam and file card */
    let card = null, beam = null;
    if (web) {
      card = A.el('div', 'fcard gl', S, `<i style="background-image:${PHS.por}"></i><b>${D.portrait.file}</b><small>${D.portrait.size} · Desktop</small>`);
      beam = A.el('div', 'beam', S, `<svg width="${W}" height="${H}"><defs><linearGradient id="bm${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#29D3C0" stop-opacity=".75"/><stop offset="1" stop-color="#29D3C0" stop-opacity=".12"/></linearGradient></defs><path class="bp" fill="url(#bm${u})"/><circle class="b0" fill="none" stroke="#8FF0E4" stroke-width="2"/><circle class="b1" fill="none" stroke="#8FF0E4" stroke-width="2"/><circle class="b2" fill="none" stroke="#8FF0E4" stroke-width="2"/></svg>`);
    }
    const CARD0 = { x: 1190, y: 650 }, CARD_T = { x: 534, y: 300 };
    const vp = { x: 534, y: 300 };

    /* ---------- page schedule ---------- */
    const hudPt = () => A.center('.brief .o1');
    const SCH = {
      home: { in: [2.3, 3.05, 'iris', { sx: G.cock[0], sy: G.cock[1] }], out: [7.05, 7.45, 'zoom'] },
      brief: { in: [7.1, 7.6, 'zoom'], out: [10.75, 10.85, 'fade'] },
      workA: { in: [10.2, 10.8, 'iris', { sx: () => A.center('.brief .o1').x, sy: () => A.center('.brief .o1').y }], out: [14.5, 14.6, 'fade'] },
      res: { in: [13.9, 14.5, 'diamond'], out: [17, 17.5, 'push', { dir: 'l' }] },
      benchM: { in: [17, 17.5, 'push', { dir: 'r' }], out: [18.65, 19.1, 'push', { dir: 'l' }] },
      presets: { in: [18.7, 19.2, 'push', { dir: 'r' }], out: [20.1, 20.5, 'zoom'] },
      edit: { in: [20.1, 20.5, 'zoom'], out: [24.55, 24.65, 'fade'] },
      benchP: { in: [23.95, 24.6, 'iris', { sx: G.pad[0], sy: G.pad[1] }], out: [26.4, 26.5, 'fade'] },
      place: { in: [25.75, 26.4, 'iris', { sx: () => A.center('.bubble').x, sy: () => A.center('.bubble').y }], out: [30, 30.5, 'push', { dir: 'l' }] },
      benchG: { in: [30, 30.5, 'push', { dir: 'r' }], out: [31.0, 31.4, 'zoom'] },
      gedit: { in: [31.1, 31.5, 'zoom'], out: [33.6, 33.7, 'fade'] },
      workB: { in: [33, 33.6, 'iris', { sx: () => A.center('.gedit .mk').x, sy: () => A.center('.gedit .mk').y }], out: [35.75, 35.85, 'fade'] },
      gres: { in: [35.1, 35.7, 'diamond'], out: [36.7, 36.8, 'fade'] },
      done: { in: [36, 36.7, 'diamond'], out: [99, 100, 'fade'] },
    };
    const REC = { home, brief, workA, res, benchM, presets, edit, benchP, place, benchG, gedit, workB, gres, done };
    Object.keys(SCH).forEach(k => { REC[k].in = SCH[k].in; REC[k].out = SCH[k].out; });
    const rv = (rec, kind, p, o = {}) => rec.els.forEach(e => { const b = e._b; A.reveal(e, kind, p, { W: b.w, H: b.h, cx: (o.sx != null ? vl(o.sx) : b.x + b.w / 2) - b.x, cy: (o.sy != null ? vl(o.sy) : b.y + b.h / 2) - b.y, dir: o.dir }); });
    const live = (rec, t) => { const [a, b, k, o] = rec.in, [c, d, k2, o2] = rec.out; let p, kind = 'fade', op = {}; if (t < b) { p = seg(t, a, b); kind = k; op = o || {}; } else if (t >= c) { p = 1 - seg(t, c, d); kind = k2; op = o2 || {}; } else p = 1; rv(rec, kind, p, op); return p; };

    /* ---------- pointer ---------- */
    const keys = [
      ...(web ? [{ t: 5.4, at: () => ({ x: CARD0.x, y: CARD0.y }), hold: .2 }, { t: 6.9, at: () => ({ x: CARD_T.x, y: CARD_T.y }), drag: true, move: 1.4 }] : [{ t: 6.5, at: '.home .g0', tap: true }]),
      { t: 10, at: '.brief .o1', tap: true }, { t: 15.7, at: '.res .save', tap: true },
      { t: MENU.open, at: '.cosmo', ay: .4, tap: true }, { t: MENU.pick, at: '.qm .qb' + MENU.idx, tap: true },
      { t: 19.6, at: '.presets .pr0', tap: true }, { t: 20.75, at: '.edit .cimg', hold: .15 }, { t: 21.8, at: '.edit .cimg', drag: true, move: 1 }, { t: 22.3, at: '.edit .dn', tap: true },
      { t: 25.6, at: '.bubble', tap: true }, { t: 27.45, at: '.place .rm', tap: true }, { t: 30.9, at: '.bubble', tap: true },
      { t: 31.75, at: '.gedit .hR', hold: .1 }, { t: 32.6, at: '.gedit .hR', drag: true, move: .8 }, { t: 33, at: '.gedit .mk', tap: true }, { t: 35.9, at: '.gres .save', tap: true }, { t: 38.3, at: '.done .saveall', tap: true },
    ];
    A.pointer(keys);

    /* ---------- element refs ---------- */
    const hv = { rkn: q('.hud .rkn'), rkl: q('.hud .rkl'), fv: q('.hud .fv'), fm: q('.hud .fm'), ff: q('.hud .ff'), pcv: q('.hud .pcv'), pcn: q('.hud .pcn'), c: qa('.hud .chv path, .hud svg path'), met: q('.mt') };
    const slots = [0, 1, 2, 3].map(i => qa('.slot.s' + i + ' .pa:not(.em)'));
    const FE = STP.map(s => [s[1], s[2]]);
    const intr = { tmv: intro.querySelector('.tmv'), tml: intro.querySelector('.tml'), logo: intro.querySelector('.ilogo'), h1: intro.querySelector('h1'), sub: intro.querySelector('.isub'), pr: intro.querySelector('.ipriv'), tmn: intro.querySelector('.tmn') };
    const shrinkT = [10.6, 14.0], gifT = [33.1, 35.2], cropT = [22.35, 23.15], placeT = [27.55, 29.05];
    const stageUpdate = (rec, p, labels) => rec.qa('.stg').forEach((s, i) => { const on = p >= i / 4 && p < (i + 1) / 4, ok = p >= (i + 1) / 4; s.classList.toggle('now', on); s.classList.toggle('ok', ok); });
    const scr = (s, t, k) => s.replace(/[0-9]/g, (c, i) => (A.rng(i * 7 + Math.floor(t * 18) * 13 + 5)() < k ? String(Math.floor(A.rng(i + Math.floor(t * 18))() * 10)) : c));
    const wkOf = (rec) => ({ tmv: rec.q('.tmv'), cap: rec.q('.cap'), capp: rec.q('.capp'), cfl: rec.q('.cfl'), cn1: rec.q('.cn1'), cn2: rec.q('.cn2'), dock: rec.q('.dock'), wf: rec.q('.wf'), ql: rec.q('.ql'), px: rec.q('.px'), gs: rec.q('.gs') });
    const wA = wkOf(workA), wB = wkOf(workB);
    wA.capp.style.backgroundImage = PHS.por; wA.cn2.textContent = `Target: ${D.shrink.rule}`; wB.cn2.textContent = `${D.video.fps} fps · ${D.video.clip} clip`;
    const FUEL0 = 240;
    const E_ = { opts: qa('.brief .opt'), th0: q('.home .g0'), gal: qa('.home .th'), cimg: edit.q('.cimg'), cfr: edit.q('.cfr'), pfr: presets.q('.pfr'), tsel: gedit.q('.tsel'), hL: gedit.q('.hL'), hR: gedit.q('.hR'), tsv: gedit.q('.tsv'), gvp: gedit.q('.ph'), gresph: gres.q('.ph'), gbench: benchG.q('.ph'), mpin: place.q('.mpin'), mr1: place.q('.mr1'), mr2: place.q('.mr2'), dome: place.q('.dome'), pln: place.q('.pln'), wv: place.q('.wv'), okv: place.q('.okv'), rm: place.q('.rm'), rml: place.q('.bl', 1), gps: benchP.q('.gps'), mtag: place.q('.mtag'), kvgps: place.q('.kv .gps'), sv: res.q('.save'), cb1: res.q('.cb1'), saveG: gres.q('.save'), saveall: done.q('.saveall'), mk: gedit.q('.mk'), dn: edit.q('.dn'), acq: web ? home.q('.acq') : null, drop: web ? home.q('.drop') : null };
    const rmLbl = place.s.querySelector('.rm .bl'), mkLbl = gedit.s.querySelector('.mk .bl'), saveLbl = res.s.querySelector('.save .bl'), svgLbl = gres.s.querySelector('.save .bl'), saLbl = done.s.querySelector('.saveall .bl');
    const dn = { items: done.qa('.di'), rank: done.q('.rank'), strk: done.q('.strk'), rcpt: done.q('.rcpt'), ad: done.q('.ad'), tapn: done.q('.tapn'), rkn2: done.q('.rkn2'), sdy: done.q('.sdy'), gain: done.q('.gain') };
    const CNS = qa('.cs');

    /* ---------- update ---------- */
    return {
      update(t) {
        bgDraw(t);
        PGS.forEach(r => { if (r.in) live(r, t); });
        /* intro */
        const ip = Math.min(1, 1 - seg(t, 2.7, 3.05));
        set(intro, { o: ip });
        set(intr.logo, { s: .5 + .5 * E.outBack(seg(t, .3, 1)), o: seg(t, .25, .7) }); set(intr.h1, { y: 14 * (1 - E.out(seg(t, .5, 1.2))), o: seg(t, .5, 1.1) }); set(intr.sub, { o: seg(t, .8, 1.3) }); set(intr.pr, { o: seg(t, 1.2, 1.7) });
        const tk = [[.5, 'T–3'], [1.05, 'T–2'], [1.6, 'T–1'], [2.15, 'LIFTOFF']]; let tc = null; tk.forEach(x => { if (t >= x[0]) tc = x; });
        if (tc) { txt(intr.tmv, tc[1]); const d = t - tc[0]; set(intr.tmv, { s: 1 + .45 * Math.exp(-7 * d) }); intr.tmv.style.color = tc[1] === 'LIFTOFF' ? '#29D3C0' : ''; set(intr.tmn, { o: 1 }); } else set(intr.tmn, { o: 0 });
        /* HUD values */
        let fuel = FUEL0, n = 0; FE.forEach((f, i) => { const k = E.out(seg(t, f[0], f[1])); fuel += PA[i][3] * k; if (t >= f[1]) n++; });
        const promoted = t >= 37.3; set(hud, { o: seg(t, 2.3, 2.9) });
        txt(hv.rkn, promoted ? 'Pilot' : 'Cadet'); txt(hv.rkl, promoted ? 'Level 4' : 'Level 3'); txt(hv.fv, String(Math.round(fuel))); txt(hv.fm, promoted ? '/ 1500' : '/ 600');
        hv.ff.style.width = ((promoted ? seg(fuel - 600, 0, 900) : Math.min(1, fuel / 600)) * 100).toFixed(1) + '%'; txt(hv.pcv, `${n}/4`);
        const rk = hud.querySelectorAll('svg path'); [rk[0], rk[1], rk[2]].forEach((p, i) => { if (p) at(p, 'opacity', (i === 0 || promoted && i === 1 ? 1 : .2).toString()); });
        const land = FE.some(f => t >= f[1] && t < f[1] + .35); hv.pcn.style.transform = land ? 'scale(1.12)' : ''; hv.pcn.style.boxShadow = land ? '0 0 16px rgba(255,197,61,.8)' : '';
        if (hv.met) txt(hv.met, `T+ ${pad2(Math.floor(t / 60))}:${pad2(Math.floor(t % 60))}`);
        if (web) {
          const ACT = [[7.1, 15.7], [17, 24.1], [24, 30], [30, 36]];
          for (let i = 0; i < 5; i++) { const r = q('.lst .m' + i); cls(r, 'on', i < 4 && t >= ACT[i][0] && t < ACT[i][1]); cls(r, 'dn', i < 4 && t >= FE[i][1]); }
          set(q('.tb'), { o: seg(t, 2.2, 2.7) }); const ls = q('.lst'); set(ls, { x: -24 * (1 - E.out(seg(t, 2.2, 2.9))), o: seg(t, 2.2, 2.7) });
        }
        qa('.dcn, .dbar i').forEach(e => { if (e.tagName === 'I') e.style.width = (n / 4 * 100) + '%'; else txt(e, `${n}/4`); });
        slots.forEach((arr, i) => arr.forEach(e => { const k = seg(t, FE[i][1] - .05, FE[i][1] + .3); set(e, { s: .4 + .6 * E.outBack(k), o: k }); }));
        /* constellation: the fourth star joins at the end */
        const c4 = E.out(seg(t, 37.7, 38.3)); CNS.forEach(c => { const ln = c.querySelector('.l3'), nd = c.querySelector('.n3'); ln.style.strokeDasharray = 1; ln.style.strokeDashoffset = (1 - c4).toFixed(3); ln.classList.toggle('lit', c4 > .02); nd.classList.toggle('lit', c4 > .6); nd.style.transform = `translate(${SN[3][0]}px,${SN[3][1]}px) scale(${(1 + .5 * Math.sin(Math.PI * seg(t, 38, 38.5))).toFixed(2)})`; });
        flash.style.opacity = Math.min(1, FLS.reduce((m, [a, b, k]) => Math.max(m, A.win(t, a, b, (b - a) * .25, (b - a) * .7) * k), 0)).toFixed(3);

        /* home: select the photo, web file drag and tractor beam */
        const sel = t >= 6.5;
        if (app) { E_.gal.forEach((g, i) => { g.style.opacity = sel && i !== 0 ? (1 - .6 * seg(t, 6.5, 6.9)).toFixed(2) : '1'; }); cls(E_.th0, 'sel', sel); set(q('.home .g0 .ck'), { s: E.outBack(seg(t, 6.5, 6.85)), o: sel ? 1 : 0 }); A.press(E_.th0, t, 6.5); }
        else {
          const pt = A.pointerAt(t), pull2 = E.inOut(seg(t, 6.15, 6.95)), fx0 = t < 5.4 ? CARD0 : { x: pt.x, y: pt.y - 6 };
          const cxp = lerp(fx0.x, CARD_T.x, pull2), cyp = lerp(fx0.y, CARD_T.y, pull2);
          set(card, { x: cxp - 75, y: cyp - 85, s: lerp(1, .5, E.in(seg(t, 6.7, 7.1))), r: (1 - pull2) * -4, o: seg(t, 4.7, 5.2) * (1 - seg(t, 6.9, 7.15)) });
          const bo = win(t, 5.95, 7.1, .2, .2), ga = c2s(32, 118), pa2 = { x: cxp, y: cyp };
          const dxx = pa2.x - ga.x, dyy = pa2.y - ga.y, ln = Math.hypot(dxx, dyy) || 1, nx = -dyy / ln * 46, ny = dxx / ln * 46;
          beam.querySelector('.bp').setAttribute('d', `M${ga.x} ${ga.y - 3}L${pa2.x + nx} ${pa2.y + ny}L${pa2.x - nx} ${pa2.y - ny}L${ga.x} ${ga.y + 3}Z`);
          [0, 1, 2].forEach(i => { const k = ((t * 1.6 + i / 3) % 1), c = beam.querySelector('.b' + i); c.setAttribute('cx', lerp(ga.x, pa2.x, k)); c.setAttribute('cy', lerp(ga.y, pa2.y, k)); c.setAttribute('r', 4 + k * 38); c.setAttribute('opacity', (1 - k) * .8); });
          set(beam, { o: bo });
          cls(E_.drop, 'hot', t > 6.1 && t < 7.2); set(E_.acq, { o: seg(t, 6.95, 7.4) }); E_.drop.style.boxShadow = t > 6.2 && t < 7.4 ? '0 0 0 1px #29D3C0,0 0 40px rgba(41,211,192,.6)' : '';
        }
        /* brief options */
        const opP = i => E.out(seg(t, 7.9 + i * .1, 8.4 + i * .1));
        E_.opts.forEach((o, i) => { const k = opP(i); set(o, { x: (1 - k) * 22, o: k }); }); set(brief.q('.sh'), { o: opP(0) });
        cls(E_.opts[1], 'on', t >= 10); A.press(E_.opts[1], t, 10);
        /* shrink process */
        const pA = seg(t, shrinkT[0], shrinkT[1]), onA = t > 10.2 && t < 14.6;
        if (onA) {
          bA.update(pA, t); const by = lerp(D.portrait.bytes, D.shrink.bytes, A.rush(pA));
          txt(wA.tmv, `T–${Math.max(0, shrinkT[1] - t).toFixed(1)}`); txt(wA.cn1, A.fmtBytes(by)); stageUpdate(workA, pA);
          set(wA.cap, { y: Math.sin(t * 2.4) * 6, s: lerp(1, .66, A.rush(pA)), o: 1 }); set(wA.cfl, { sy: .7 + .5 * Math.abs(Math.sin(t * 22)), o: 1 });
          if (wA.wf) { txt(wA.wf, `x${(1 + 7 * Math.min(1, pA * 3)).toFixed(1)}`); txt(wA.ql, String(Math.round(lerp(95, 72, A.rush(pA))))); txt(wA.px, pA > .5 ? D.shrink.px : D.portrait.dims.replace('×', '×')); }
        }
        /* result */
        const rsT = seg(t, 14.4, 15.0); res.q('.cb1').style.width = (100 - 96 * E.inOut(rsT)).toFixed(1) + '%'; A.press(E_.sv, t, 15.7); const sv = t >= 15.8;
        cls(E_.sv, 'ok', sv); txt(saveLbl, sv ? 'Saved' : 'Save');
        /* bench: keep the video frames playing */
        E_.gbench.style.backgroundImage = A.frame(Math.floor(t * 12) % 12);
        set(E_.gps, { o: seg(t, 24.85, 25.1) * (t < 26.5 ? 1 : 1), s: 1 + .06 * Math.sin(t * 8) });
        /* presets, crop editor */
        cls(presets.q('.pr0'), 'on', t >= 19.6); A.press(presets.q('.pr0'), t, 19.6);
        const fk = E.outBack(seg(t, 19.65, 20.05)), pw = app ? 84 : 330; E_.pfr.style.display = t >= 19.65 ? '' : 'none'; const pbh = app ? 92 : 440; { const hh = pbh * .84, ww = hh * .8; set(E_.pfr, { s: .3 + .7 * Math.min(1, fk) }); E_.pfr.style.width = ww + 'px'; E_.pfr.style.height = hh + 'px'; E_.pfr.style.margin = `${-hh / 2}px 0 0 ${-ww / 2}px`; }
        const cq2 = E.inOut(seg(t, 20.8, 21.8)); set(E_.cimg, { x: -70 * cq2 }); set(E_.cfr, { s: .7 + .3 * E.outBack(seg(t, 20.2, 20.6)), o: seg(t, 20.2, 20.4) }); A.press(E_.dn, t, 22.3);
        /* crop mini process */
        const pB = seg(t, cropT[0], cropT[1]), onB = t > 22.3 && t < 23.35;
        set(odC, { o: onB ? Math.min(seg(t, 22.3, 22.45), 1 - seg(t, 23.15, 23.35)) : 0, s: .92 + .08 * E.out(seg(t, 22.3, 22.5)) });
        if (onB) { bB.update(pB, t); txt(odC.querySelector('.odm'), `T–${Math.max(0, cropT[1] - t).toFixed(1)}`); }
        /* place */
        const found = t >= 26.4, rem = seg(t, 29.05, 29.5), pC = seg(t, placeT[0], placeT[1]), onC = t > 27.5 && t < 29.25;
        txt(E_.pln, found ? `${D.place.city}, ${D.place.country}` : 'Searching…'); const drop = E.outBack(seg(t, 26.4, 26.8));
        set(E_.mpin, { y: -60 * (1 - drop), s: 1 - .5 * rem, o: seg(t, 26.4, 26.5) * (1 - rem) });
        [E_.mr1, E_.mr2].forEach((r, i) => { const k = (t * .9 + i * .5) % 1; set(r, { s: .4 + k * 2.2, o: found && t < 29.05 ? (1 - k) * .8 : 0 }); });
        set(E_.dome, { s: E.out(seg(t, 29.05, 29.7)) * 1.5, o: t < 29.05 ? 0 : 1 - seg(t, 29.8, 30.3) });
        set(E_.wv, { o: found ? 1 - seg(t, 29.1, 29.4) : 0 }); set(E_.okv, { s: .92 + .08 * E.outBack(seg(t, 29.3, 29.7)), o: seg(t, 29.3, 29.6) });
        cls(E_.rm, 'off', !found); A.press(E_.rm, t, 27.45); txt(rmLbl, t < 29.1 ? 'Remove location' : 'Location removed');
        set(odP, { o: onC ? Math.min(seg(t, 27.5, 27.65), 1 - seg(t, 29.05, 29.25)) : 0, s: .92 + .08 * E.out(seg(t, 27.5, 27.7)) });
        if (onC) { bC.update(pC, t); txt(odP.querySelector('.odm'), `T–${Math.max(0, placeT[1] - t).toFixed(1)}`); txt(odP.querySelector('.odc'), scr(`${D.place.lat} · ${D.place.lon}`, t, 1 - A.rush(pC))); }
        txt(E_.kvgps, rem > .5 ? 'Removed' : `${D.place.lat}, ${D.place.lon}`);
        /* gif editor */
        const hq = E.inOut(seg(t, 31.75, 32.6)), Lp = 4 / 12, Rp = (8 - hq) / 12, vf = A.frame(Math.floor(t * 12) % 12);
        E_.gvp.style.backgroundImage = vf; E_.gresph.style.backgroundImage = A.frame(4 + (Math.floor(t * 12) % 7));
        E_.tsel.style.left = (Lp * 100) + '%'; E_.tsel.style.width = ((Rp - Lp) * 100) + '%'; E_.hL.style.left = (Lp * 100) + '%'; E_.hR.style.left = (Rp * 100) + '%';
        txt(E_.tsv, hq > .5 ? `${D.video.from} – ${D.video.to} · ${D.video.clip}` : '0:04 – 0:08 · 4.0 s'); A.press(E_.mk, t, 33);
        /* gif process */
        const pD = seg(t, gifT[0], gifT[1]), onD = t > 33 && t < 35.9;
        if (onD) {
          bD.update(pD, t); txt(wB.tmv, `T–${Math.max(0, gifT[1] - t).toFixed(1)}`); const fr = Math.round(A.rush(pD) * D.video.frames); txt(wB.cn1, `Frame ${fr} of ${D.video.frames}`); stageUpdate(workB, pD);
          wB.capp.style.backgroundImage = A.frame(Math.floor(t * 12) % 12); set(wB.cap, { y: Math.sin(t * 2.4) * 6, o: 1 }); set(wB.cfl, { sy: .7 + .5 * Math.abs(Math.sin(t * 22)), o: 1 });
          if (wB.wf) { txt(wB.wf, `x${(1 + 7 * Math.min(1, pD * 3)).toFixed(1)}`); txt(wB.gs, `${(2.1 * A.rush(pD)).toFixed(1)} MB`); }
        }
        const gsv = t >= 36.0; A.press(E_.saveG, t, 35.9); cls(E_.saveG, 'ok', gsv); txt(svgLbl, gsv ? 'Saved' : 'Save GIF');
        /* done */
        dn.items.forEach((it, i) => { const k = E.outBack(seg(t, 36.75 + i * .15, 37.2 + i * .15)); set(it, { s: .7 + .3 * k, o: seg(t, 36.75 + i * .15, 37 + i * .15) }); });
        const rp = E.outBack(seg(t, 37.3, 37.8)); set(dn.rank, { s: .8 + .2 * rp, o: seg(t, 37.2, 37.5) }); set(dn.strk, { o: seg(t, 37.4, 37.7), y: 10 * (1 - seg(t, 37.4, 37.8)) }); set(dn.rcpt, { o: seg(t, 37.6, 37.9), y: 10 * (1 - seg(t, 37.6, 38)) });
        txt(dn.rkn2, 'Pilot'); txt(dn.sdy, t >= 38 ? 'Day 4' : 'Day 3'); txt(dn.tapn, String(Math.round(12 * E.out(seg(t, 37.8, 38.3))))); set(dn.ad, { o: seg(t, 38.4, 38.9) });
        A.press(E_.saveall, t, 38.3); const sa = t >= 38.45; cls(E_.saveall, 'ok', sa); txt(saLbl, sa ? '4 files saved' : (web ? 'Download all 4' : 'Save all 4'));
        done.qa('.rb svg path').forEach((p, i) => at(p, 'opacity', (i < 2 ? 1 : .2).toString()));

        /* Cosmo, tether, bubble, menu, fx */
        drawCosmo(t);
        const P0 = c2s(48, 128), an = G.anchor, Q = { x: app ? an[0] : P0.x - 20, y: app ? P0.y + an[1] : H + 30 };
        const w1 = (a, b) => `${(a).toFixed(1)} ${(b).toFixed(1)}`, c1 = { x: lerp(P0.x, Q.x, .33) + Math.sin(t * 2.1) * 12, y: lerp(P0.y, Q.y, .33) + Math.cos(t * 1.7) * 14 }, c2 = { x: lerp(P0.x, Q.x, .7) + Math.cos(t * 1.9 + 1) * 14, y: lerp(P0.y, Q.y, .7) + Math.sin(t * 2.3) * 12 };
        const d = `M${w1(P0.x, P0.y)}C${w1(c1.x, c1.y)} ${w1(c2.x, c2.y)} ${w1(Q.x, Q.y)}`; at(T1, 'd', d); at(T2, 'd', d);
        bubUpdate(t); menuUpdate(t); fxUpdate(t);
      },
    };
  },
});

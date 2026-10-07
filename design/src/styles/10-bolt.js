/* Style 10 - Bolt Control. A graphite robot co-pilot runs a mission-control HUD. */
ISK.register({
  id: 'bolt',
  order: 10,
  round: 2,
  name: 'Bolt Control',
  tagline: 'A robot co-pilot turns every job into a mission.',
  concept: 'Bolt is a compact graphite robot with a glass visor face who hovers beside your photo like a co-pilot. Every tool is a mission on a dark control panel: you pick the goal, Bolt scans, readouts tick, and a mission-complete stamp pays out XP and a rank star. Tap Bolt and a holographic ring of five tools projects from his visor.',
  wins: [
    'A premium robot character with a real visor face, seven or more moods, and body language. It reads as a serious product, not a toy.',
    'The mission, XP, rank and hex-badge loop is easy to understand, and the reward lands after the work, never in the way.',
    'Waiting feels short: a scan beam, ticking telemetry, a scrolling log and a different progress bar for each job.',
  ],
  risks: [
    'A dark HUD look suits power users more than the grandfather test, so the labels must stay plain words.',
    'The robot rig, the scan effects and the web cockpit are the most expensive parts to build and keep consistent.',
  ],
  scores: { simple: 3, fun: 4, wow: 5, pro: 5, game: 4, effort: 4 },
  palette: ['#14171D', '#1C2028', '#2B313C', '#FF7A1A', '#FFB547', '#34D399', '#E8ECF4'],
  type: 'Chakra Petch for labels, numbers and the terminal: squared, technical and clear at 10 to 13 px. Sora for body text at 13 px.',
  motion: 'HUD blinds and diamond scans between screens, a scan beam with ticking telemetry while a job runs, then a shockwave ring, a hex stamp and a coin burst.',
  notes: {
    intro: 'Bolt rises on his hover jet, boots with a glitch and a wave, and pulses his antenna LED once as a hint. Home shows daily missions and recent photos.',
    pick: 'One tap on a recent photo (or a file drag onto the viewport on the web). Bolt looks surprised, gives a thumbs up, and the file facts appear.',
    shrink: 'One tap on the suggested "Exam form". A scan beam sweeps the photo while readouts tick and a warp-style bar runs. A shockwave and a stamp pay out +40 XP.',
    crop: 'Tap Bolt and five mission chips project from his visor in a ring with a scan sweep. Tap Crop, pick Instagram 4:5, slide the photo, tap Done.',
    privacy: 'Bolt spots the location tag and offers it. A map card drops a pin on Pune, India, then the tags are wiped and a shield locks in.',
    gif: 'Bolt offers the video as a suggestion. Trim 3.0 s, then a four-line process with a film-frame bar fills 36 cells while Bolt conducts.',
    done: 'Pixel-reveal mission report: four results, rank up from Cadet to Pilot, a hex badge stamp, a taps receipt and one labelled Ad.',
  },
  statusBar: 'light',
  extras: [
    ['Character', 'Bolt: graphite robot with a glass visor, antenna LED, jointed arms and a hover jet. Moods: idle, happy, proud, cheer, love, scan, alert, surprised, wink, glitch, sleepy, curious. His eyes follow the pointer. Tap him for a holographic ring of five mission chips.'],
    ['Game system', 'Daily missions with XP and rank stars, a pilot rank bar (Cadet to Pilot), hex achievement badges, a streak, and a debrief card after every job.'],
    ['Progress bars', 'Four kinds from A.bars (warp, orbit, comet, streams in orange, amber and mint) plus a 36-cell film-frame bar, a scan beam, ticking readouts and a scrolling terminal log.'],
    ['Screen changes', 'Diamond scan between screens and blinds with HUD edge lines between steps. Pixel reveal for results.'],
    ['Finish effect', 'Radial shockwave ring with HUD ticks, a hex mission-complete stamp, spark and coin bursts, floating XP.'],
    ['Taps to finish', 'Pick 1 · Shrink 2 · Crop 4 · Place 2 · GIF 3 = 12 taps'],
  ],
  css: `
.st-bolt{--bg:#14171D;--bg2:#1C2028;--ln:#2B313C;--or:#FF7A1A;--am:#FFB547;--mt:#34D399;--ice:#E8ECF4;--mu:#8B94A7;--ec:#5EF2C4;--lc:#34D399;background:#14171D;color:var(--ice);font:400 13px/1.35 Sora,system-ui,sans-serif}.st-bolt *{box-sizing:border-box}
.st-bolt b,.st-bolt .cp,.st-bolt .lb,.st-bolt .nm,.st-bolt kbd,.st-bolt .btn{font-family:"Chakra Petch",Sora,sans-serif}.st-bolt b{font-weight:600}
.st-bolt .lb{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--mu);white-space:nowrap}.st-bolt .nm{font-weight:600;font-variant-numeric:tabular-nums}
.st-bolt kbd{font-size:10px;font-weight:600;padding:1px 5px;border:1px solid #3A414E;border-bottom-width:2px;border-radius:4px;color:var(--mu);background:#1E232B;letter-spacing:.04em}
.st-bolt .bg{position:absolute;inset:0;background:radial-gradient(70% 40% at 50% 0,rgba(255,122,26,.08),transparent 70%),linear-gradient(rgba(139,148,167,.05) 1px,transparent 1px) 0 0/24px 24px,linear-gradient(90deg,rgba(139,148,167,.05) 1px,transparent 1px) 0 0/24px 24px,#14171D}
.st-bolt .pg{position:absolute;inset:0}.st-bolt .fx{position:absolute;left:0;top:0;z-index:30;pointer-events:none}.st-bolt .tx{position:absolute;inset:0;z-index:500;pointer-events:none;display:none}
.st-bolt .tx i{position:absolute;border:2px solid var(--or);box-shadow:0 0 14px rgba(255,122,26,.8),inset 0 0 14px rgba(255,122,26,.4);transform:rotate(45deg)}
.st-bolt .pn{position:absolute;background:linear-gradient(180deg,#1D2129,#181C23);border:1px solid var(--ln);border-radius:10px;padding:9px 12px;box-shadow:0 10px 24px -14px #000}
.st-bolt .pn::before,.st-bolt .pn::after{content:"";position:absolute;width:9px;height:9px;border:1.5px solid var(--or);pointer-events:none}.st-bolt .pn::before{left:-1px;top:-1px;border-right:0;border-bottom:0;border-radius:4px 0 0 0}
.st-bolt .pn::after{right:-1px;bottom:-1px;border-left:0;border-top:0;border-radius:0 0 4px 0}.st-bolt .pz{position:absolute;z-index:12}.st-bolt .pz>.pn{inset:0}
.st-bolt .ph2{display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;height:14px}.st-bolt .ph2 .r{color:var(--or)}
.st-bolt .btn{height:40px;border-radius:9px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#1B0F04;background:linear-gradient(180deg,#FF9440,#FF7A1A 55%,#E86509);box-shadow:inset 0 1px 0 rgba(255,255,255,.4),0 8px 18px -8px rgba(255,122,26,.7);flex:none;white-space:nowrap}
.st-bolt .btn.g{background:#232832;color:var(--ice);box-shadow:inset 0 0 0 1px var(--ln)}.st-bolt .btn.ok{background:linear-gradient(180deg,#4BE3A9,#34D399);box-shadow:inset 0 1px 0 rgba(255,255,255,.4)}
.st-bolt .btn kbd{background:rgba(0,0,0,.18);border-color:rgba(0,0,0,.3);color:#1B0F04}.st-bolt .is-pressed{transform:scale(.96) !important;filter:brightness(1.25)}.st-bolt .hx{position:relative;width:34px;height:38px;flex:none}
.st-bolt .hx::before,.st-bolt .hxi{content:"";position:absolute;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}.st-bolt .hx::before{inset:0;background:linear-gradient(160deg,#FFB066,#FF7A1A 45%,#7A3A12)}
.st-bolt .hxi{inset:1.5px;background:linear-gradient(180deg,#20252E,#171B22);display:grid;place-items:center;color:var(--or);font:700 11px "Chakra Petch";letter-spacing:.04em}
.st-bolt .hx.mt::before{background:linear-gradient(160deg,#7CF0C3,#34D399 45%,#14614A)}.st-bolt .hx.mt .hxi{color:var(--mt)}.st-bolt .hx.lk::before{background:#2B313C}.st-bolt .hx.lk .hxi{color:#566070;background:#171B22}
.st-bolt .hx.lg{width:60px;height:68px}.st-bolt .hx.lg .hxi{font-size:15px}.st-bolt .hx.xl{width:84px;height:95px}.st-bolt .hx svg{display:block}
/* top bar */
.st-bolt .tb{position:absolute;left:14px;right:14px;top:50px;height:38px;display:flex;align-items:center;gap:10px;z-index:20}.st-bolt .tb .hx{width:28px;height:32px}.st-bolt .brd{display:none}.st-bolt .xpw{flex:1;min-width:0}
.st-bolt .xl{display:flex;justify-content:space-between;align-items:baseline}.st-bolt .rn{font:700 12px "Chakra Petch";letter-spacing:.16em;color:var(--or)}.st-bolt .xn{font:600 11px "Chakra Petch";color:var(--mu)}
.st-bolt .xb{height:6px;border-radius:3px;background:#262B35;margin-top:4px;overflow:hidden;position:relative}.st-bolt .xb i{position:absolute;left:0;top:0;bottom:0;border-radius:3px;background:linear-gradient(90deg,#FF7A1A,#FFB547)}
.st-bolt .skc{display:flex;align-items:center;gap:6px;padding:0 10px;height:30px;border:1px solid var(--ln);border-radius:8px;background:#1A1E26;font:700 13px "Chakra Petch"}.st-bolt .skc svg{display:block}
/* missions */
.st-bolt .ms{display:flex;align-items:center;gap:10px;height:46px;padding:0 4px 0 0;border-bottom:1px solid #232831;position:relative}.st-bolt .ms:last-child{border-bottom:0}.st-bolt .ms .hx{width:30px;height:34px}.st-bolt .ms .mt{flex:1;min-width:0}
.st-bolt .ms .mt b{display:block;font-size:13px;line-height:1.15;white-space:nowrap}.st-bolt .ms .mt span{display:block;font-size:11.5px;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.st-bolt .ms .xv{font:700 12px "Chakra Petch";color:var(--am);font-style:normal;white-space:nowrap}.st-bolt .ms .sr{width:20px;height:20px;color:#4A5262;display:grid;place-items:center}.st-bolt .ms .sr svg{width:18px;height:18px;fill:none}
.st-bolt .ms.dn .sr{color:var(--am)}.st-bolt .ms.dn .sr svg{fill:var(--am)}.st-bolt .ms.dn .xv{color:var(--mt)}.st-bolt .ms.on{background:linear-gradient(90deg,rgba(255,122,26,.14),transparent 70%);box-shadow:inset 2px 0 0 var(--or)}
.st-bolt .ms.on .mt b{color:#fff}.st-bolt .ms kbd{display:none}
/* home (app) */
.st-bolt .mp{left:14px;top:98px;width:362px;height:226px}.st-bolt .rcp{left:14px;top:332px;width:362px;height:178px}.st-bolt .rcg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-bolt .rc{height:66px;border-radius:8px;background-size:cover;background-position:center;position:relative;border:1px solid var(--ln)}.st-bolt .rc.dim{opacity:.35}
.st-bolt .rc.sel{border-color:var(--or);box-shadow:0 0 0 2px rgba(255,122,26,.35),0 0 16px rgba(255,122,26,.55)}.st-bolt .rc .hx{position:absolute;right:-6px;top:-8px;width:24px;height:27px}.st-bolt .rc .hx svg{width:12px;height:12px}
.st-bolt .rc i{position:absolute;inset:-5px;pointer-events:none}.st-bolt .rc i b{position:absolute;width:12px;height:12px;border:2px solid var(--or)}.st-bolt .bgp{left:14px;top:518px;width:362px;height:86px}
.st-bolt .bgr{display:flex;justify-content:space-between}.st-bolt .bd{display:flex;flex-direction:column;align-items:center;gap:3px;width:52px}.st-bolt .bd .hx{width:32px;height:36px}
.st-bolt .bd span{font:600 8.5px/1.1 "Chakra Petch";letter-spacing:.05em;color:var(--mu);text-transform:uppercase;text-align:center;min-height:19px}.st-bolt .bd.on span{color:var(--ice)}
/* boot */
.st-bolt .pgB{z-index:1;background:#14171D}.st-bolt .bwm{position:absolute;left:0;right:0;top:566px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}.st-bolt .bwm .bn{font:700 24px "Chakra Petch";letter-spacing:.16em}
.st-bolt .bwm .bt2{color:var(--or);border:1px solid rgba(255,122,26,.5);padding:2px 10px;border-radius:4px}
.st-bolt .bl{position:absolute;left:0;right:0;top:640px;display:flex;flex-direction:column;align-items:center;gap:3px;font:500 12px "Chakra Petch";color:var(--mu);letter-spacing:.06em}
.st-bolt .bl p{margin:0;height:16px;white-space:nowrap}.st-bolt .bl em{color:var(--mt);font-style:normal}
/* workbench */
.st-bolt .vp{position:absolute;overflow:hidden;border:1px solid var(--ln);border-radius:12px;background:#0F1217;z-index:5}
.st-bolt .vp::before,.st-bolt .vp::after{content:"";position:absolute;left:0;right:0;height:5px;z-index:19;pointer-events:none;background:repeating-linear-gradient(90deg,#2B313C 0 1px,transparent 1px 12px)}
.st-bolt .vp::before{top:0}.st-bolt .vp::after{bottom:0}.st-bolt .vl{position:absolute;inset:0}.st-bolt .cbk{position:absolute;inset:0;z-index:300;pointer-events:none}
.st-bolt .cbk i{position:absolute;width:20px;height:20px;border:2px solid var(--or);z-index:20;pointer-events:none}
.st-bolt .cbk i:nth-child(1){left:8px;top:10px;border-right:0;border-bottom:0}.st-bolt .cbk i:nth-child(2){right:8px;top:10px;border-left:0;border-bottom:0}
.st-bolt .cbk i:nth-child(3){left:8px;bottom:10px;border-right:0;border-top:0}.st-bolt .cbk i:nth-child(4){right:8px;bottom:10px;border-left:0;border-top:0}.st-bolt .vp.ok .cbk i{border-color:var(--mt)}
.st-bolt .vt{position:absolute;font:600 10px "Chakra Petch";letter-spacing:.12em;color:var(--mu);z-index:21;white-space:nowrap;text-transform:uppercase}
.st-bolt .vt.a{left:34px;top:14px}.st-bolt .vt.b{right:34px;top:14px;color:var(--ice)}.st-bolt .vt.c{left:34px;bottom:14px}.st-bolt .vt.d{right:34px;bottom:14px}.st-bolt .vt.b.ok,.st-bolt .vt.d.ok{color:var(--mt)}
.st-bolt .phw{position:absolute;left:50%;top:50%}.st-bolt .ph{position:absolute;inset:0;background-size:cover;background-position:center 20%;border-radius:4px;border:1px solid #3A414E;box-shadow:0 20px 40px -16px #000}
.st-bolt .gh{position:absolute;inset:0;border:1px dashed rgba(139,148,167,.55);border-radius:4px}
.st-bolt .gov{position:absolute;inset:0;border-radius:4px;background:linear-gradient(rgba(255,122,26,.35) 1px,transparent 1px) 0 0/12px 12px,linear-gradient(90deg,rgba(255,122,26,.35) 1px,transparent 1px) 0 0/12px 12px}
.st-bolt .cmi{position:absolute;left:50%;top:50%;background-size:cover;background-position:center;border:1px solid #3A414E}
.st-bolt .cfr{position:absolute;left:50%;top:50%;border:2px solid #fff;box-shadow:0 0 0 999px rgba(12,14,18,.72);background:linear-gradient(#fff5,#fff5) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff5,#fff5) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff5,#fff5) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff5,#fff5) 0 66.6%/100% 1px no-repeat}
.st-bolt .cfr b{position:absolute;left:50%;top:8px;transform:translateX(-50%);background:var(--or);color:#1B0F04;font-size:10px;letter-spacing:.1em;padding:2px 8px;border-radius:3px;white-space:nowrap}
.st-bolt .cfr i{position:absolute;width:10px;height:10px;background:#fff;border-radius:2px}
.st-bolt .cfr i:nth-of-type(1){left:-6px;top:-6px}.st-bolt .cfr i:nth-of-type(2){right:-6px;top:-6px}.st-bolt .cfr i:nth-of-type(3){left:-6px;bottom:-6px}.st-bolt .cfr i:nth-of-type(4){right:-6px;bottom:-6px}
.st-bolt .cph{position:absolute;inset:0;background-size:cover;background-position:center}.st-bolt .cshd{position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,14,18,.5),rgba(12,14,18,.1) 40%,rgba(12,14,18,.6))}
.st-bolt .ex{position:absolute;left:30px;top:38px;display:flex;flex-direction:column;gap:4px;width:150px;z-index:6}.st-bolt .tg{background:rgba(15,18,23,.86);border:1px solid #3A414E;border-left:2px solid var(--or);border-radius:4px;padding:2px 8px 3px}
.st-bolt .tg b{display:block;font-size:11.5px;white-space:nowrap}.st-bolt .tg.rd{border-left-color:var(--mt)}.st-bolt .tg.rd b{color:var(--mu)}
.st-bolt .mc{position:absolute;right:30px;bottom:34px;width:188px;height:122px;border:1px solid #3A414E;border-radius:8px;overflow:hidden;background:#161A21;z-index:6;box-shadow:0 14px 30px -10px #000}
.st-bolt .mc svg.mm{position:absolute;inset:0;width:100%;height:100%}.st-bolt .pin{position:absolute;width:26px;height:34px;margin:-34px 0 0 -13px;z-index:3}.st-bolt .pin svg{display:block}
.st-bolt .rg{position:absolute;width:60px;height:60px;margin:-30px 0 0 -30px;border:2px solid var(--or);border-radius:50%;z-index:2}
.st-bolt .mlab{position:absolute;left:8px;bottom:6px;font-size:12px;background:rgba(15,18,23,.88);padding:2px 7px;border-radius:4px;z-index:4;white-space:nowrap}
.st-bolt .shd{position:absolute;left:50%;top:50%;width:64px;height:72px;margin:-36px 0 0 -32px;display:grid;place-items:center;z-index:5;color:var(--mt)}
.st-bolt .vid{position:absolute;left:50%;top:50%;border:1px solid #3A414E;background-size:cover;background-position:center;border-radius:4px}.st-bolt .vid.gif{border-color:var(--mt);box-shadow:0 0 0 2px rgba(52,211,153,.3),0 0 24px rgba(52,211,153,.4)}
.st-bolt .vid .vo{position:absolute;left:8px;top:8px;font:600 10px "Chakra Petch";letter-spacing:.1em;background:rgba(15,18,23,.8);padding:2px 6px;border-radius:3px;display:flex;align-items:center;gap:5px}
.st-bolt .vid .vo i{width:6px;height:6px;border-radius:50%;background:#FF4D4D}
.st-bolt .vid .vg{position:absolute;right:8px;bottom:8px;font:700 10px "Chakra Petch";letter-spacing:.1em;background:rgba(15,18,23,.86);color:var(--mt);padding:2px 7px;border-radius:3px}
.st-bolt .drop{position:absolute;left:34px;right:34px;top:34px;bottom:34px;border:2px dashed #3A414E;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;color:var(--mu)}
.st-bolt .drop b{font-size:20px;letter-spacing:.12em;color:var(--ice)}.st-bolt .drop.hot{border-color:var(--or);background:rgba(255,122,26,.07);box-shadow:inset 0 0 60px rgba(255,122,26,.18)}
.st-bolt .stamp{position:absolute;z-index:400;display:flex;align-items:center;gap:10px;padding:8px 14px 8px 8px;border:2px solid var(--or);border-radius:8px;background:rgba(15,18,23,.92);box-shadow:0 0 30px rgba(255,122,26,.5);white-space:nowrap}
.st-bolt .stamp .hx{width:36px;height:41px}.st-bolt .stamp b{display:block;font-size:14px;letter-spacing:.14em;color:var(--or)}.st-bolt .stamp span{display:block;font:600 11px "Chakra Petch";letter-spacing:.1em;color:var(--ice)}
.st-bolt .xpf{position:absolute;z-index:401;font:700 20px "Chakra Petch";color:var(--am);text-shadow:0 0 12px rgba(255,181,71,.7);white-space:nowrap}.st-bolt .tw0{position:absolute;z-index:60;display:flex;justify-content:center;pointer-events:none}
.st-bolt .toast{display:flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;border-radius:8px;background:#102A22;border:1px solid var(--mt);color:#CFFBEA;font:600 12px "Chakra Petch";letter-spacing:.06em;white-space:nowrap;box-shadow:0 10px 24px -8px #000}
.st-bolt .toast svg{color:var(--mt)}
/* comm */
.st-bolt .cm{position:absolute;z-index:38;border:1px solid var(--ln);border-radius:10px;background:linear-gradient(180deg,rgba(29,33,41,.97),rgba(22,26,33,.97));padding:8px 12px;box-shadow:0 10px 24px -12px #000}
.st-bolt .cm::before{content:"";position:absolute;left:-1px;top:-1px;width:9px;height:9px;border:1.5px solid var(--or);border-right:0;border-bottom:0;border-radius:4px 0 0 0}
.st-bolt .cm::after{content:"";position:absolute;right:-6px;top:56px;width:10px;height:10px;background:#1B1F27;border-right:1px solid var(--ln);border-top:1px solid var(--ln);transform:rotate(45deg)}
.st-bolt .cmh{display:flex;align-items:center;gap:7px;height:14px}.st-bolt .cmh i{width:7px;height:7px;border-radius:50%;background:var(--mt);box-shadow:0 0 8px var(--mt)}.st-bolt .cmh .md{margin-left:auto;color:var(--or)}
.st-bolt .ct{margin-top:7px;font-size:13px;line-height:1.38;min-height:36px;color:var(--ice)}.st-bolt .ct u{display:inline-block;width:6px;height:12px;margin-left:2px;vertical-align:-1px;background:var(--or);text-decoration:none}
.st-bolt .cta{position:absolute;left:12px;right:12px;bottom:10px;height:32px;font-size:12px}.st-bolt .wl{display:none}
/* panels */
.st-bolt .fr{display:flex;align-items:center;gap:10px;margin-bottom:8px}.st-bolt .fr i{width:44px;height:44px;border-radius:6px;background-size:cover;background-position:center;border:1px solid #3A414E;flex:none}
.st-bolt .fr b{display:block;font-size:14px}.st-bolt .fr span{font-size:12px;color:var(--mu)}.st-bolt .kv{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.st-bolt .kv>div,.st-bolt .rds>div{background:#13161C;border:1px solid #262C36;border-radius:6px;padding:4px 8px;display:flex;flex-direction:column;gap:1px;min-width:0}.st-bolt .kv b,.st-bolt .rds b{font-size:13px;white-space:nowrap}
.st-bolt .mtc{color:var(--mt)}.st-bolt .sg{display:flex;align-items:center;gap:6px;margin-top:9px;flex-wrap:wrap}
.st-bolt .chp{font:600 11px "Chakra Petch";letter-spacing:.06em;padding:4px 9px;border-radius:5px;background:#232832;border:1px solid var(--ln);color:var(--ice);white-space:nowrap}
.st-bolt .chp.o{background:rgba(255,122,26,.14);border-color:var(--or);color:#FFB677}.st-bolt .po{display:flex;align-items:center;gap:10px;height:42px;padding:0 10px;border-radius:7px;background:#14171D;border:1px solid #262C36;margin-bottom:6px}
.st-bolt .po:last-child{margin-bottom:0}.st-bolt .po .n{width:20px;height:20px;border-radius:5px;border:1px solid #3A414E;display:grid;place-items:center;font:700 11px "Chakra Petch";color:var(--mu);flex:none}
.st-bolt .po b{display:block;font-size:13px;line-height:1.15}.st-bolt .po span{font-size:11.5px;color:var(--mu)}
.st-bolt .po .tgp{margin-left:auto;font:700 9px "Chakra Petch";letter-spacing:.12em;color:#1B0F04;background:var(--or);padding:3px 6px;border-radius:3px;white-space:nowrap}.st-bolt .po.pk{border-color:rgba(255,122,26,.7);background:rgba(255,122,26,.07)}
.st-bolt .po.on{background:rgba(255,122,26,.22);border-color:var(--or);box-shadow:0 0 18px rgba(255,122,26,.4)}.st-bolt .po.on .n{background:var(--or);border-color:var(--or);color:#1B0F04}.st-bolt .pb{display:flex;flex-direction:column;gap:8px}
.st-bolt .pc.sq .pb{flex-direction:row;align-items:center}.st-bolt .bw{flex:none;line-height:0}.st-bolt .rds{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;flex:1}.st-bolt .pc.sq .rds{grid-template-columns:1fr 1fr}.st-bolt .rds b{font-size:12.5px}
.st-bolt .tm{margin-top:8px;font:500 10.5px/14.5px "Chakra Petch";color:var(--mu);overflow:hidden;height:43px}.st-bolt .tm p{margin:0;white-space:nowrap;overflow:hidden;text-overflow:clip}.st-bolt .tm p.nw{color:var(--ice)}
.st-bolt .tm em,.st-bolt .wl em{color:var(--mt);font-style:normal}.st-bolt .tm strong,.st-bolt .wl strong{color:var(--am)}.st-bolt .fc{display:flex;flex-wrap:wrap;gap:2px;margin-top:6px}
.st-bolt .fc i{width:calc((100% - 34px)/18);height:9px;border-radius:2px;background:#262B35}.st-bolt .fc i.on{background:var(--mt)}.st-bolt .fc i.nw{background:#fff;box-shadow:0 0 8px var(--am)}
.st-bolt .cs{display:grid;grid-template-columns:54px 1fr auto;gap:8px;align-items:center;height:24px}.st-bolt .cs .tr{height:8px;border-radius:4px;background:#262B35;overflow:hidden}
.st-bolt .cs .tr i{display:block;height:100%;border-radius:4px;background:#6B7384}.st-bolt .cs.af .tr i{background:linear-gradient(90deg,var(--or),var(--am))}.st-bolt .cs b{font-size:13px;white-space:nowrap}.st-bolt .cs.af b{color:var(--mt)}
.st-bolt .chs{display:flex;gap:6px;margin:8px 0;flex-wrap:wrap}.st-bolt .xpr{display:flex;align-items:center;gap:8px;margin-bottom:8px}.st-bolt .xpr b{font-size:17px;color:var(--am)}.st-bolt .xpr span{font-size:11.5px;color:var(--mu)}
.st-bolt .xpr svg{width:16px;height:16px;fill:var(--am);color:var(--am)}.st-bolt .stt{display:flex;align-items:center;gap:8px;font:600 12px "Chakra Petch";letter-spacing:.06em;color:var(--mt);height:40px}
.st-bolt .pr{display:flex;align-items:center;gap:10px;height:34px;padding:0 8px;border-radius:7px;background:#14171D;border:1px solid #262C36;margin-bottom:5px}.st-bolt .pr .rt{width:30px;display:grid;place-items:center;flex:none}
.st-bolt .pr .rt i{display:block;border:2px solid #8B94A7;border-radius:2px}.st-bolt .pr b{font-size:12.5px;flex:1;white-space:nowrap;overflow:hidden}.st-bolt .pr span{font:600 11px "Chakra Petch";color:var(--mu);white-space:nowrap}
.st-bolt .pr.on{background:rgba(255,122,26,.22);border-color:var(--or);box-shadow:0 0 16px rgba(255,122,26,.4)}.st-bolt .pr.on .rt i{border-color:var(--or)}
.st-bolt .hint2{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--mu);margin:6px 0 10px}.st-bolt .rw{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px}
.st-bolt .rw>div{background:#13161C;border:1px solid #262C36;border-radius:6px;padding:4px 8px;min-width:0}.st-bolt .rw b{display:block;font-size:12.5px;white-space:nowrap}
.st-bolt .wn{display:flex;gap:8px;align-items:center;padding:7px 9px;border-radius:7px;background:rgba(255,181,71,.1);border:1px solid rgba(255,181,71,.5);font-size:12px;line-height:1.3;margin-bottom:8px}.st-bolt .wn svg{flex:none;color:var(--am)}
.st-bolt .wn.sf{background:rgba(52,211,153,.1);border-color:rgba(52,211,153,.5)}.st-bolt .wn.sf svg{color:var(--mt)}.st-bolt .stp{position:relative;height:46px;margin:6px 6px 14px}
.st-bolt .stc{position:absolute;inset:0;overflow:hidden;border-radius:5px;border:1px solid #3A414E}.st-bolt .stp .th{position:absolute;inset:0;display:flex}.st-bolt .tw2{position:absolute;top:0;bottom:0}
.st-bolt .stp .th i{flex:1;background-size:cover;background-position:center}.st-bolt .tw{position:absolute;top:0;bottom:0;border:2px solid var(--or);border-radius:5px;box-shadow:0 0 0 999px rgba(15,18,23,.62)}
.st-bolt .hd{position:absolute;top:50%;width:12px;height:34px;margin-top:-17px;border-radius:4px;background:var(--or);box-shadow:0 0 12px rgba(255,122,26,.7)}
.st-bolt .hd::after{content:"";position:absolute;left:5px;top:9px;width:2px;height:16px;background:#1B0F04;opacity:.6}.st-bolt .hL{left:-8px}.st-bolt .hR{right:-8px}
.st-bolt .tcr{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px}.st-bolt .tcr b{font-size:15px}.st-bolt .tl{display:none}.st-bolt .tl>div{display:flex;align-items:center;gap:10px;height:40px;border-bottom:1px solid #232831}
.st-bolt .tl>div:last-child{border-bottom:0}.st-bolt .tl b{flex:1;font-size:13px}.st-bolt .nx{font-size:12px;color:var(--mu);margin:0 0 6px}
/* quick menu */
.st-bolt .qm{position:absolute;inset:0;z-index:45;pointer-events:none}.st-bolt .qc{position:absolute;left:0;top:0;width:46px;height:52px;margin:-26px 0 0 -23px;filter:drop-shadow(0 0 8px rgba(255,122,26,.6))}.st-bolt .qc .hx{width:46px;height:52px}
.st-bolt .qc .hxi{background:linear-gradient(180deg,#2A2F39,#1C2028)}
.st-bolt .qc span{position:absolute;transform:translate(-50%,-50%);white-space:nowrap;font:700 10px "Chakra Petch";letter-spacing:.1em;text-transform:uppercase;background:rgba(15,18,23,.92);padding:2px 6px;border-radius:3px;border:1px solid #3A414E}
.st-bolt .qc.sl .hxi{background:linear-gradient(180deg,#FF9440,#E86509);color:#1B0F04}
/* bolt */
.st-bolt .bolt{position:absolute;left:0;top:0;width:200px;height:260px;transform-origin:0 0;z-index:40;pointer-events:none}.st-bolt .bsv{display:block}.st-bolt .ef{fill:var(--ec)}.st-bolt .es{fill:none;stroke:var(--ec)}
.st-bolt .hnt{position:absolute;z-index:39;pointer-events:none}.st-bolt .hnr{width:30px;height:30px;margin:-15px 0 0 -15px;border:2px solid var(--or);border-radius:50%}
.st-bolt .hnp{margin:0;width:156px;text-align:center;font:700 10px "Chakra Petch";letter-spacing:.1em;text-transform:uppercase;padding:4px 9px;border-radius:5px;background:rgba(15,18,23,.92);border:1px solid var(--or);color:#FFB677;white-space:nowrap}
/* done */
.st-bolt .pgD{z-index:4;background:linear-gradient(rgba(139,148,167,.05) 1px,transparent 1px) 0 0/24px 24px,linear-gradient(90deg,rgba(139,148,167,.05) 1px,transparent 1px) 0 0/24px 24px,#14171D}
.st-bolt .dhd{position:absolute;left:14px;right:14px;top:98px;display:flex;align-items:center;justify-content:space-between}.st-bolt .dhd b{font-size:19px;letter-spacing:.14em}
.st-bolt .drk{position:absolute;left:14px;top:136px;width:362px;height:122px;display:flex;align-items:center;gap:14px}.st-bolt .drk .rb{flex:none;position:relative;width:72px;height:81px}.st-bolt .drk .hx.xl{width:72px;height:81px}
.st-bolt .drk .rt{flex:1;min-width:0}.st-bolt .drk .rt .lb{color:var(--or)}.st-bolt .drk .rt b{display:block;font-size:22px;letter-spacing:.08em;line-height:1.15;margin:2px 0 6px}.st-bolt .drk .rt b em{color:var(--am);font-style:normal}
.st-bolt .rst{display:flex;gap:3px;margin-top:6px;align-items:center}.st-bolt .rst svg{width:16px;height:16px;fill:var(--am);color:var(--am)}.st-bolt .rst .lb{margin-left:6px}
.st-bolt .dres{position:absolute;left:14px;top:266px;width:362px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.st-bolt .rcd{position:relative;height:84px;border:1px solid var(--ln);border-radius:9px;background:#181C23;padding:8px;display:flex;gap:9px;align-items:center;overflow:hidden}
.st-bolt .rcd i{width:56px;height:68px;border-radius:5px;background-size:cover;background-position:center 12%;border:1px solid #3A414E;flex:none}
.st-bolt .rcd b{display:block;font-size:12.5px;line-height:1.15}.st-bolt .rcd span{display:block;font-size:11px;color:var(--mu);margin-top:2px}.st-bolt .rcd .hx{position:absolute;right:5px;top:5px;width:20px;height:23px}
.st-bolt .rcd .hx svg{width:10px;height:10px}.st-bolt .dst{position:absolute;left:14px;top:450px;width:362px;display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.st-bolt .dst>div{height:54px;border:1px solid var(--ln);border-radius:8px;background:#181C23;padding:6px 8px;display:flex;flex-direction:column;justify-content:space-between}.st-bolt .dst b{font-size:15px;white-space:nowrap}
.st-bolt .dbd{position:absolute;left:14px;top:514px;width:362px;height:76px}
.st-bolt .dbd .bgbig{flex-direction:row;gap:12px;margin-top:-2px}.st-bolt .dbd .bgbig .hx{width:44px;height:50px}.st-bolt .dbd .bgbig div{display:flex;flex-direction:column;align-items:flex-start}
.st-bolt .dpr{position:absolute;left:14px;top:598px;display:flex;align-items:center;gap:7px;font:600 12px "Chakra Petch";letter-spacing:.04em;color:var(--mt);width:262px;white-space:normal;line-height:1.25}.st-bolt .dpr svg{flex:none}
.st-bolt .ad{position:absolute;display:flex;align-items:center;gap:10px;border:1px dashed #3A414E;border-radius:9px;background:rgba(255,255,255,.025);padding:6px 10px}
.st-bolt .ad small{font:700 10px "Chakra Petch";letter-spacing:.1em;border:1px solid var(--mu);color:var(--mu);padding:1px 6px;border-radius:3px}.st-bolt .ad i{width:34px;height:34px;border-radius:6px;background:#232832;flex:none}
.st-bolt .ad b{display:block;font-size:12.5px}.st-bolt .ad span{font-size:11px;color:var(--mu)}.st-bolt .dad{left:14px;top:770px;width:362px;height:46px}
/* web */
.st-bolt.m-web{font-size:13.5px}.st-bolt.m-web .ck{position:absolute;inset:0;z-index:2}.st-bolt.m-web .tb{left:0;right:0;top:0;height:44px;padding:0 16px;border-bottom:1px solid var(--ln);background:#161A21;z-index:25}
.st-bolt.m-web .tb .hx{width:26px;height:30px}.st-bolt.m-web .brd{display:flex;align-items:center;gap:10px}.st-bolt.m-web .brd b{font-size:15px;letter-spacing:.16em}
.st-bolt.m-web .brd .lb{color:var(--or);border:1px solid rgba(255,122,26,.5);padding:2px 8px;border-radius:4px}.st-bolt.m-web .xpw,.st-bolt.m-web .tb .hx.rk{display:none}.st-bolt.m-web .tb .sp{flex:1}
.st-bolt.m-web .tb .safe{display:flex;align-items:center;gap:7px;font:600 11.5px "Chakra Petch";letter-spacing:.06em;color:var(--mt);padding:5px 10px;border-radius:6px;background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.35)}
.st-bolt .rail{position:absolute;left:0;top:44px;bottom:0;width:236px;border-right:1px solid var(--ln);background:#161A21;padding:14px 12px;display:flex;flex-direction:column;gap:12px;z-index:6}.st-bolt .rail .ms{padding-right:2px}
.st-bolt .rail .ms .xv{display:none}.st-bolt .rkc{border:1px solid var(--ln);border-radius:10px;background:#1A1E26;padding:10px;display:flex;gap:10px;align-items:center}.st-bolt .rkc .hx{width:44px;height:50px}.st-bolt .rkc .xpw{display:block;flex:1}
.st-bolt .rkc .xn{font-size:10.5px}.st-bolt .rkg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px 0}.st-bolt .rail .bd{width:auto}
.st-bolt .rail .sfn{margin-top:auto;display:flex;gap:8px;align-items:center;font-size:11.5px;color:var(--mu);line-height:1.3}.st-bolt .rcol .pz{z-index:12}.st-bolt .lgp{position:absolute;z-index:12;display:flex;flex-direction:column}
.st-bolt .le{display:flex;align-items:center;gap:10px;height:46px;border-bottom:1px solid #232831}.st-bolt .le .hx{width:28px;height:32px}.st-bolt .le b{display:block;font-size:12.5px;line-height:1.2}.st-bolt .le span{font-size:11px;color:var(--mu)}
.st-bolt .le em{margin-left:auto;font:700 12px "Chakra Petch";color:var(--am);font-style:normal}.st-bolt.m-web .cm{padding:9px 14px}
.st-bolt.m-web .mc{width:300px;height:216px}.st-bolt.m-web .ex{width:250px;gap:8px;top:40px}.st-bolt.m-web .tg b{font-size:13px}.st-bolt.m-web .mlab{font-size:13px}.st-bolt.m-web .cm::after{left:-6px;right:auto;top:84px;transform:rotate(-135deg)}
.st-bolt.m-web .cm::before{left:auto;right:-1px;top:-1px;border:1.5px solid var(--or);border-left:0;border-bottom:0;border-radius:0 4px 0 0}.st-bolt.m-web .ct{margin-top:6px;min-height:38px;width:300px}
.st-bolt.m-web .cta{left:auto;right:14px;top:30px;bottom:auto;width:150px;height:34px}
.st-bolt.m-web .wl{display:block;position:absolute;left:14px;right:14px;bottom:8px;height:76px;overflow:hidden;font:500 11px/15px "Chakra Petch";color:var(--mu);border-top:1px solid #232831;padding-top:6px}
.st-bolt.m-web .wl p{margin:0;white-space:nowrap;overflow:hidden}.st-bolt.m-web .wl p.nw{color:var(--ice)}.st-bolt.m-web .tm{display:none}.st-bolt.m-web .ms .mt span{font-size:11px}.st-bolt.m-web .tl{display:block}.st-bolt.m-web .ml{display:none}
.st-bolt.m-web .pn{padding:12px 16px}.st-bolt.m-web .ph2{margin-bottom:10px}.st-bolt.m-web .fr i{width:56px;height:56px}.st-bolt.m-web .fr b{font-size:15px}.st-bolt.m-web .kv{gap:8px}.st-bolt.m-web .kv>div{padding:8px 10px}.st-bolt.m-web .sg{margin-top:14px}
.st-bolt.m-web .cs{height:30px}.st-bolt.m-web .chs{margin:12px 0}.st-bolt.m-web .db .btn,.st-bolt.m-web .cc .btn,.st-bolt.m-web .pl .btn,.st-bolt.m-web .tr .btn{height:44px}
.st-bolt.m-web .rw>div{padding:7px 10px}.st-bolt.m-web .wn{padding:10px 12px;font-size:12.5px}.st-bolt.m-web .stp{height:56px;margin:10px 6px 18px}
.st-bolt.m-web .po{height:56px;margin-bottom:8px}.st-bolt.m-web .po b{font-size:14.5px}.st-bolt.m-web .po .n{width:22px;height:22px}.st-bolt.m-web .pr{height:46px;margin-bottom:6px}.st-bolt.m-web .pr b{font-size:13.5px}
.st-bolt.m-web .pgD{position:absolute;z-index:14}.st-bolt.m-web .pgD .dhd,.st-bolt.m-web .pgD .drk,.st-bolt.m-web .pgD .dres,.st-bolt.m-web .pgD .dst,.st-bolt.m-web .pgD .dbd,.st-bolt.m-web .pgD .dpr,.st-bolt.m-web .pgD .dad{position:absolute}
.st-bolt.m-web .dhd{left:0;right:0;top:0;height:40px;justify-content:flex-start;gap:16px}
.st-bolt.m-web .dbd .bgbig{flex-direction:column;gap:8px;margin-top:20px;align-items:center;text-align:center}.st-bolt.m-web .dbd .bgbig .hx{width:78px;height:88px}.st-bolt.m-web .dbd .bgbig div{align-items:center}
.st-bolt.m-web .dpr{left:auto;right:0;top:8px;width:auto;white-space:nowrap;font-size:13px}.st-bolt.m-web .dres{left:0;top:52px;width:1020px;grid-template-columns:repeat(4,1fr);gap:12px}
.st-bolt.m-web .rcd{height:176px;flex-direction:column;align-items:stretch;padding:10px;gap:8px}.st-bolt.m-web .rcd i{width:100%;height:100px;flex:none}.st-bolt.m-web .rcd .hx{right:16px;top:16px;width:26px;height:30px}
.st-bolt.m-web .rcd b{font-size:14px}.st-bolt.m-web .rcd span{font-size:12px}.st-bolt.m-web .drk{left:0;top:240px;width:420px;height:248px;padding:16px;gap:16px;border:1px solid var(--ln);border-radius:10px;background:linear-gradient(180deg,#1D2129,#181C23)}
.st-bolt.m-web .drk .rb,.st-bolt.m-web .drk .hx.xl{width:84px;height:95px}.st-bolt.m-web .drk .rt b{font-size:28px}.st-bolt.m-web .dst{left:432px;top:240px;width:290px;grid-template-columns:1fr 1fr;gap:8px}
.st-bolt.m-web .dst>div{height:76px;padding:10px 12px}.st-bolt.m-web .dst b{font-size:22px}.st-bolt.m-web .dbd{left:734px;top:240px;width:286px;height:248px}
.st-bolt.m-web .dad{left:664px;top:536px;width:356px;height:132px;flex-direction:column;align-items:flex-start;justify-content:center;padding:12px 16px}.st-bolt.m-web .dad i{width:100%;height:56px}
.st-bolt .bgl{display:flex;justify-content:space-around;margin-top:6px}.st-bolt .bgl .hx{width:34px;height:38px}.st-bolt .bgbig{display:flex;flex-direction:column;align-items:center;gap:6px;position:relative}.st-bolt .bgbig .hx{width:44px;height:50px}
.st-bolt .bgbig b{font-size:14px;letter-spacing:.12em;text-transform:uppercase}.st-bolt .bgbig span{font-size:11.5px;color:var(--mu)}
.st-bolt .fcard{position:absolute;z-index:60;width:150px;padding:6px;border-radius:8px;background:#1D2129;border:1px solid var(--or);box-shadow:0 14px 30px rgba(0,0,0,.6),0 0 16px rgba(255,122,26,.4);display:flex;gap:8px;align-items:center}
.st-bolt .fcard i{width:40px;height:40px;border-radius:4px;background-size:cover;background-position:center;flex:none}.st-bolt .fcard b{display:block;font-size:11.5px;line-height:1.15;white-space:nowrap}.st-bolt .fcard span{font-size:10.5px;color:var(--mu)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, E = A.ease, web = A.web, W = A.W, H = A.H;
    const { seg, set, cls, txt, lerp, clamp } = A;
    const OR = '#FF7A1A', AM = '#FFB547', MT = '#34D399';
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = 'k' + Math.floor(A.rng(web ? 5 : 9)() * 1e6);
    const attr = (e, k, v) => { const c = e._c || (e._c = {}); if (c[k] !== v) { c[k] = v; e.setAttribute(k, v); } };
    const sty = (e, k, v) => { const c = e._s || (e._s = {}); if (c[k] !== v) { c[k] = v; e.style[k] = v; } };
    const fmtN = n => Math.round(n).toLocaleString('en-US');
    const at = (list, t) => { let r = list[0]; for (const x of list) { if (t >= x[0]) r = x; else break; } return r; };
    const tapW = web ? 'Click' : 'Tap';

    /* ---------- geometry ---------- */
    const G = web
      ? { vp: [248, 56, 650, 504], pz: [912, 56, 356, 372], cm: [416, 572, 482, 172], dock: [318, 662, .74], boot: [640, 318, 1.1], done: [318, 662, .74] }
      : { vp: [14, 98, 362, 320], pz: [14, 574, 362, 240], cm: [14, 438, 258, 128], dock: [328, 504, .6], home: [322, 714, .62], boot: [195, 330, 1.0], done: [322, 690, .62] };
    const V = { x: G.vp[0], y: G.vp[1], w: G.vp[2], h: G.vp[3] };
    const phH = Math.round(V.h * .8), phW = Math.round(phH * .75);
    const frH = Math.round(V.h * .8), frW = Math.round(frH * .8);
    const imH = Math.round(V.h * .94), imW = Math.round(imH * 4 / 3);
    const vdW = web ? 590 : V.w - 24, vdH = Math.round(vdW * 9 / 16);
    const PR = { x: V.x + (V.w - phW) / 2, y: V.y + (V.h - phH) / 2, w: phW, h: phH };
    const FR = { x: V.x + (V.w - frW) / 2, y: V.y + (V.h - frH) / 2, w: frW, h: frH };
    const VR = { x: V.x + (V.w - vdW) / 2, y: V.y + (V.h - vdH) / 2, w: vdW, h: vdH };
    const VC = { x: V.x + V.w / 2, y: V.y + V.h / 2 };

    /* ---------- data ---------- */
    const MS = [
      { k: 'S', ic: 'shrink', name: 'Shrink a photo', sub: 'Exam form, under 200 KB', xp: 40, t: 14.3 },
      { k: 'C', ic: 'crop', name: 'Crop for a post', sub: 'Instagram post 4:5', xp: 25, t: 23.2 },
      { k: 'P', ic: 'pin', name: 'Check the place', sub: 'Remove the location tag', xp: 35, t: 28.9 },
      { k: 'G', ic: 'film', name: 'Make a GIF', sub: '3.0 s at 12 fps', xp: 50, t: 35.2 },
    ];
    const BADGES = [['First Flight', 'sparkle', 0], ['Squeezer', 'shrink', 14.5], ['Framer', 'crop', 23.4], ['Ghost', 'shield', 29.1], ['Director', 'film', 35.4], ['Clean Sweep', 'star', 37.5]];
    const th = { por: A.photo('portrait'), mnt: A.photo('mountain'), city: A.photo('city') };
    const kinds = A.bars(4, ['warp', 'orbit', 'comet', 'streams'], 10);
    const BK = { S: kinds[0], C: kinds[1], P: kinds[2], G: kinds[3] };
    const BCOL = { S: [OR, AM, '#FFD9B0', '#0B0D12'], C: [AM, OR, MT, '#0B0D12'], P: [MT, '#7CF0C3', AM, '#0B0D12'], G: [OR, AM, MT, '#0B0D12'] };
    const IW = web ? 330 : 336;
    const SZ = web ? { warp: [IW, 120, 64], orbit: [120, 120, 88], comet: [IW, 46, 34], streams: [IW, 76, 48] } : { warp: [IW, 66, 46], orbit: [88, 88, 64], comet: [IW, 40, 32], streams: [IW, 48, 36] };
    const bsz = (k, big) => k === 'orbit' ? { w: SZ.orbit[big ? 0 : 2], h: SZ.orbit[big ? 0 : 2], sq: 1 } : { w: SZ[k][0], h: SZ[k][big ? 1 : 2], sq: 0 };

    const xpAt = t => 250 + 40 * E.out(seg(t, 14.4, 15.1)) + 25 * E.out(seg(t, 23.3, 23.9)) + 35 * E.out(seg(t, 29.0, 29.6)) + 50 * E.out(seg(t, 35.3, 35.9));

    /* ---------- markup bits ---------- */
    const hx = (inner, c = '') => `<div class="hx ${c}"><div class="hxi">${inner}</div></div>`;
    const lbl = (a, b = '') => `<div class="ph2"><span class="lb">${a}</span><span class="lb r">${b}</span></div>`;
    const kb = k => web ? `<kbd>${k}</kbd>` : '';
    const flame = (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 20 24"><path d="M10 1c1 5 7 7 7 14a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 2.5 4C9 8 8 5 10 1z" fill="#FF7A1A"/><path d="M10 12c1 2 3.5 3 3.5 6a3.5 3.5 0 0 1-7 0c0-2 1.5-3 2-4 .4 1 .8 1.5 1.5 1.5z" fill="#FFD84D"/></svg>`;
    const chev = n => `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${n === 1 ? '<path d="M6 18l9-8 9 8"/>' : '<path d="M6 14l9-8 9 8M6 24l9-8 9 8"/>'}</svg>`;
    const msRow = (m, i) => `<div class="ms" data-i="${i}">${hx(I(m.ic, 15, 2.2))}<div class="mt"><b>${m.name}</b><span>${m.sub}</span></div>${kb(m.k)}<em class="xv">+${m.xp} XP</em><i class="sr">${I('star', 18, 2)}</i></div>`;
    const bdgH = (b, i) => `<div class="bd" data-i="${i}">${hx(I(b[1], 15, 2.2), 'lk')}<span>${b[0]}</span></div>`;
    const xpBlock = `<div class="xpw"><div class="xl"><b class="rn">CADET</b><span class="xn">250/400 XP</span></div><div class="xb"><i></i></div></div>`;

    /* ---------- background and pages ---------- */
    A.el('div', 'bg', S);
    const ckParent = web ? A.el('div', 'ck', S) : S;
    const tb = A.el('div', 'tb', ckParent, `<div class="brd">${hx('ISK')}<b>IMAGE SWISS KNIFE</b><span class="lb">BOLT CONTROL</span></div><div class="sp"></div>${hx(chev(1), 'rk')}${xpBlock}<div class="skc">${flame(14)}<span class="sk">3</span></div>${web ? `<div class="safe">${I('lock', 14, 2.4)}Runs in this browser · 0 bytes uploaded</div>` : ''}`);
    const pgB = A.el('div', 'pg pgB', S, `<div class="bwm"><b class="bn">IMAGE SWISS KNIFE</b><span class="lb bt2">BOLT CONTROL</span></div>
      <div class="bl"><p></p><p></p><p></p><p></p></div>`);
    if (web) { const bw = pgB.querySelector('.bwm'); bw.style.top = "528px"; pgB.querySelector(".bl").style.top = "610px"; }

    let pgH = null, pgW = null;
    if (!web) {
      pgH = A.el('div', 'pg pgH', S, `<div class="pn mp">${lbl('DAILY MISSIONS', '0 / 4 DONE')}${MS.map(msRow).join('')}</div>
        <div class="pn rcp">${lbl('RECENT PHOTOS', tapW.toUpperCase() + ' ONE TO START')}<div class="rcg">${[th.por, th.mnt, th.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 })].map((b, i) => `<div class="rc rc${i}" style="background-image:${b}">${i === 0 ? `<i><b style="left:0;top:0;border-right:0;border-bottom:0"></b><b style="right:0;top:0;border-left:0;border-bottom:0"></b><b style="left:0;bottom:0;border-right:0;border-top:0"></b><b style="right:0;bottom:0;border-left:0;border-top:0"></b></i>${hx(I('check', 12, 3))}` : ''}</div>`).join('')}</div></div>
        <div class="pn bgp">${lbl('BADGES', '<span class="bgn">1 / 6</span>')}<div class="bgr">${BADGES.map(bdgH).join('')}</div></div>`);
      pgW = A.el('div', 'pg pgW', S);
      pgW.style.zIndex = 3; pgH.style.zIndex = 2;
    }
    const wb = web ? ckParent : pgW;

    if (web) {
      A.el('div', 'rail', ckParent, `<div><span class="lb">MISSIONS</span></div><div class="ml2">${MS.map(msRow).join('')}</div>
        <div class="rkc">${hx(chev(1), 'rk')}${xpBlock}</div>
        <div><span class="lb">BADGES</span></div><div class="rkg">${BADGES.map(bdgH).join('')}</div>
        <div class="sfn">${I('lock', 18, 2.2)}<span>Photos stay on this computer. Nothing is uploaded.</span></div>`);
    }

    /* ---------- viewport ---------- */
    const vp = A.el('div', 'vp', wb); Object.assign(vp.style, { left: V.x + 'px', top: V.y + 'px', width: V.w + 'px', height: V.h + 'px' });
    const mkL = (cl, html) => A.el('div', 'vl ' + cl, vp, html);
    const LD = web ? mkL('LD', `<div class="drop"><div style="color:var(--or)">${I('upload', 40, 1.8)}</div><b>DROP A PHOTO HERE</b><span>or press <kbd>O</kbd> to open a file</span></div>`) : null;
    const LP = mkL('LP', `<div class="vt a">SRC · ${D.portrait.file}</div><div class="vt b lp-sz">${D.portrait.size}</div><div class="vt c lp-dm">${D.portrait.dims}</div><div class="vt d lp-st">LOCKED</div>
      <div class="phw" style="width:${phW}px;height:${phH}px;margin:${-phH / 2}px 0 0 ${-phW / 2}px"><div class="gh"></div><div class="ph" style="background-image:${th.por}"></div><div class="gov"></div></div>`);
    const LM = mkL('LM', `<div class="vt a">SRC · IMG_1650.JPG</div><div class="vt b lm-sz">4000 × 3000</div><div class="vt c lm-hint">MOUNTAIN · 4:3</div><div class="vt d lm-st">READY</div>
      <div class="cmi" style="width:${imW}px;height:${imH}px;margin:${-imH / 2}px 0 0 ${-imW / 2}px;background-image:${th.mnt}"></div>
      <div class="cfr" style="width:${frW}px;height:${frH}px;margin:${-frH / 2}px 0 0 ${-frW / 2}px"><b>${D.crop.ratio} · ${D.crop.px}</b><i></i><i></i><i></i><i></i></div>`);
    const mapSVG = `<svg class="mm" viewBox="0 0 188 136" preserveAspectRatio="xMidYMid slice"><rect width="188" height="136" fill="#161A21"/><path d="M-6 96C30 84 52 108 92 92S150 56 196 68" stroke="#1F3550" stroke-width="12" fill="none"/><path d="M0 40h188M0 100h188M40 0v136M96 0l18 136M150 0v136M0 70h188" stroke="#262C36" stroke-width="1"/><path d="M0 62l70-20 118 10M30 136l40-136" stroke="#3A414E" stroke-width="3" fill="none"/><rect x="108" y="14" width="40" height="22" rx="3" fill="#15261F"/><rect x="14" y="76" width="30" height="20" rx="3" fill="#15261F"/></svg>`;
    const pinSVG = `<svg width="26" height="34" viewBox="0 0 26 34"><path d="M13 33S2 21 2 12.5a11 11 0 0 1 22 0C24 21 13 33 13 33z" fill="#FF7A1A" stroke="#FFD9B0" stroke-width="1.5"/><circle cx="13" cy="12.5" r="4.5" fill="#fff"/></svg>`;
    const LC = mkL('LC', `<div class="cph" style="background-image:${th.city}"></div><div class="cshd"></div><div class="vt a">SRC · ${D.place.file}</div><div class="vt b lc-sz">EXIF SCAN</div><div class="vt c">${D.place.device}</div><div class="vt d lc-st">TRACE</div>
      <div class="ex"><div class="tg g0"><span class="lb">GPS</span><b class="gv">${D.place.lat} · ${D.place.lon}</b></div><div class="tg g1"><span class="lb">TAKEN</span><b>${D.place.when}</b></div><div class="tg g2"><span class="lb">DEVICE</span><b>${D.place.device}</b></div></div>
      <div class="mc">${mapSVG}<i class="rg r1"></i><i class="rg r2"></i><div class="pin">${pinSVG}</div><div class="shd">${I('shield', 44, 1.6)}</div><div class="mlab"><b>${D.place.city}, ${D.place.country}</b></div></div>`);
    const LB = mkL('LB', `<div class="vt a">SRC · ${D.video.file}</div><div class="vt b lb-sz">${D.video.len}</div><div class="vt c lb-tc">0:04 - 0:08</div><div class="vt d lb-st">PLAYING</div>
      <div class="vid" style="width:${vdW}px;height:${vdH}px;margin:${-vdH / 2}px 0 0 ${-vdW / 2}px"><div class="vo"><i></i><span class="vtc">PLAY 0:05</span></div><div class="vg" style="display:none">GIF · ${D.video.size} · ${D.video.fps} FPS · LOOP</div></div>`);
    A.el('div', 'cbk', vp, '<i></i><i></i><i></i><i></i>');
    const vpTx = A.el('div', 'tx', vp, '<i></i>');
    const stamp = A.el('div', 'stamp', vp, `${hx(I('star', 18, 2))}<div><b>MISSION COMPLETE</b><span class="sts">SHRINK · +40 XP</span></div>`);
    const xpf = A.el('div', 'xpf', vp, '+40 XP');

    /* ---------- panels ---------- */
    const pzEl = A.el('div', 'pz', web ? A.el('div', 'rcol', ckParent) : wb); Object.assign(pzEl.style, { left: G.pz[0] + 'px', top: G.pz[1] + 'px', width: G.pz[2] + 'px', height: G.pz[3] + 'px' });
    const pzTx = A.el('div', 'tx', pzEl, '<i></i>');
    const PN = {};
    const mkP = (k, cl, html) => { PN[k] = A.el('div', 'pn ' + cl, pzEl, html); };
    if (web) mkP('home', 'pm', `${lbl('MISSION CONTROL', 'READY')}<p class="nx">Drop a photo on the viewport to start. Bolt picks the tools.</p><div class="tl">${[['shrink', 'Shrink', 'S'], ['crop', 'Crop', 'C'], ['pin', 'Place', 'P'], ['film', 'GIF', 'G'], ['convert', 'Convert', 'V']].map(x => `<div>${hx(I(x[0], 15, 2.2))}<b>${x[1]}</b><kbd>${x[2]}</kbd></div>`).join('')}</div>`);
    mkP('facts', 'fa', `${lbl('FILE LOCKED', 'READY')}<div class="fr"><i style="background-image:${th.por}"></i><div><b>${D.portrait.file}</b><span>Portrait photo</span></div></div>
      <div class="kv"><div><span class="lb">SIZE</span><b class="nm">${D.portrait.size}</b></div><div><span class="lb">PIXELS</span><b class="nm">${D.portrait.dims}</b></div><div><span class="lb">FORMAT</span><b class="nm">HEIC</b></div><div><span class="lb">SENT OUT</span><b class="nm mtc">0 bytes</b></div></div>
      <div class="sg"><span class="lb">BOLT SUGGESTS</span><div class="chp o">Exam form</div><div class="chp">WhatsApp</div></div>`);
    mkP('purp', 'pu', `${lbl('AIM THE SHRINK', web ? 'PRESS 1 TO 4' : '1 TAP')}${D.shrink.options.map((o, i) => `<div class="po po${i}${i === 1 ? ' pk' : ''}"><i class="n">${i + 1}</i><div><b>${o.label}</b><span>${o.hint}</span></div>${i === 1 ? '<em class="tgp">BOLT PICK</em>' : ''}</div>`).join('')}`);
    const RDS = {
      S: ['QUALITY', 'BLOCKS', 'SIZE', 'PASS'], C: ['OUTPUT', 'RATIO', 'PIXELS', 'EDGE'], P: ['TAGS', 'GPS', 'EXIF', 'SENT'], G: ['FRAME', 'FPS', 'COLORS', 'SIZE'],
    };
    const TTL = { S: 'SHRINK · EXAM FORM', C: 'CROP · INSTAGRAM 4:5', P: 'WIPE LOCATION', G: 'MAKE GIF · 36 FRAMES' };
    ['S', 'C', 'P', 'G'].forEach(k => {
      const bz = bsz(BK[k], k !== 'C'), n = k === 'C' ? 4 : 4;
      mkP('proc' + k, `pc pc${k}${bz.sq ? ' sq' : ''}`, `${lbl(TTL[k], '<b class="nm pp">0%</b>')}<div class="pb"><div class="bw"></div><div class="rds">${RDS[k].map((r, i) => `<div><span class="lb">${r}</span><b class="nm r${i}">0</b></div>`).join('')}</div></div>${k === 'G' ? `<div class="fc">${'<i></i>'.repeat(36)}</div>` : ''}<div class="tm"><p></p><p></p><p></p></div>`);
    });
    const DB = {
      S: { t: 'SHRINK', a: ['BEFORE', D.portrait.size, 100], b: ['AFTER', D.shrink.size, 4], chips: [D.shrink.format, D.shrink.px, '-96%'], xp: 40, btn: 'Save' },
      C: { t: 'CROP', a: ['BEFORE', '4000 × 3000', 100], b: ['AFTER', D.crop.px, 12], chips: [D.crop.preset, D.crop.ratio, 'JPG'], xp: 25, st: web ? 'Saved to Downloads' : 'Saved to gallery' },
      P: { t: 'PLACE', a: ['BEFORE', 'GPS on', 100], b: ['AFTER', 'GPS off', 0], chips: ['23 tags to 0', 'Safe copy', 'Pune erased'], xp: 35, st: web ? 'Safe copy saved to Downloads' : 'Safe copy saved to gallery' },
      G: { t: 'GIF', a: ['BEFORE', D.video.len + ' video', 100], b: ['AFTER', D.video.size + ' GIF', 22], chips: [D.video.clip, D.video.fps + ' fps', D.video.frames + ' frames'], xp: 50, btn: 'Save GIF' },
    };
    Object.keys(DB).forEach(k => {
      const d = DB[k];
      mkP('db' + k, 'db db' + k, `${lbl('DEBRIEF · ' + d.t, '<span class="stars">1 STAR</span>')}<div class="cs"><span class="lb">${d.a[0]}</span><div class="tr"><i style="width:${d.a[2]}%"></i></div><b class="nm">${d.a[1]}</b></div>
        <div class="cs af"><span class="lb">${d.b[0]}</span><div class="tr"><i class="ba" style="width:0"></i></div><b class="nm">${d.b[1]}</b></div>
        <div class="chs">${d.chips.map((c, i) => `<span class="chp${i === 2 ? ' o' : ''}">${c}</span>`).join('')}</div>
        <div class="xpr">${I('star', 16, 2)}<b>+${d.xp} XP</b><span>Rank star earned</span></div>
        ${d.btn ? `<div class="btn bsave">${I('save', 16, 2.4)}<span class="bsl">${d.btn}</span>${kb('Ctrl S')}</div>` : `<div class="stt">${I('check', 16, 3)}${d.st}</div>`}`);
    });
    mkP('miss', 'ms2', `${lbl('MISSION BOARD', '<span class="mbn">1 / 4 DONE</span>')}<div class="ml">${MS.map(msRow).join('')}</div><div class="tl">${[['shrink', 'Shrink', 'S'], ['crop', 'Crop', 'C'], ['pin', 'Place', 'P'], ['film', 'GIF', 'G'], ['convert', 'Convert', 'V']].map(x => `<div>${hx(I(x[0], 15, 2.2))}<b>${x[1]}</b><kbd>${x[2]}</kbd></div>`).join('')}</div>`);
    mkP('pres', 'pre', `${lbl('CROP FOR', 'PICK A SIZE')}${D.crop.presets.slice(0, 5).map((p, i) => { const m = 18, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(5, Math.round(m * p.h / p.w)); return `<div class="pr pr${i}"><div class="rt"><i style="width:${w}px;height:${h}px"></i></div><b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div>`; }).join('')}`);
    mkP('ccl', 'cc', `${lbl('FRAME LOCKED', D.crop.ratio)}<div class="fr"><div class="hx" style="width:36px;height:41px"><div class="hxi">${I('crop', 18, 2.2)}</div></div><div><b>${D.crop.preset}</b><span>${D.crop.ratio} · ${D.crop.px}</span></div></div>
      <div class="hint2">${I('image', 16, 2)}<span>Drag the photo to slide it under the frame.</span></div><div class="btn cdone">${I('check', 16, 3)}Done${kb('Enter')}</div>`);
    mkP('plc', 'pl', `${lbl('LOCATION TAG FOUND', '<span class="rk2">EXPOSED</span>')}<div class="rw"><div><span class="lb">PLACE</span><b>${D.place.city}, ${D.place.country}</b></div><div><span class="lb">MAP</span><b>${D.place.lat}, ${D.place.lon}</b></div><div><span class="lb">TAKEN</span><b>${D.place.when}</b></div><div><span class="lb">CAMERA</span><b>${D.place.device}</b></div></div>
      <div class="wn">${I('eye', 18, 2.2)}<span>If you share this photo, people can see this place.</span></div><div class="btn brm">${I('shield', 16, 2.4)}Remove location${kb('R')}</div>`);
    const strip = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(i * 1.5 | 0)}"></i>`).join('');
    mkP('trm', 'tr', `${lbl('TRIM VIDEO', D.video.file)}<div class="stp"><div class="stc"><div class="th">${strip}</div><div class="tw"></div></div><div class="tw2"><b class="hd hL"></b><b class="hd hR"></b></div></div>
      <div class="tcr"><b class="tv nm">0:04 to 0:08 · 4.0 s</b><span class="lb">${D.video.fps} fps · ${D.video.frames} frames</span></div><div class="hint2" style="margin-top:2px">${I('film', 16, 2)}<span>Drag the orange handles. Bolt keeps it to 3.0 s.</span></div><div class="btn bmk">${I('film', 16, 2.4)}Make GIF${kb('Enter')}</div>`);

    const pzZ = { el: pzEl, tx: pzTx, w: G.pz[2], h: G.pz[3] };
    const vpZ = { el: vp, tx: vpTx, w: V.w, h: V.h };

    /* ---------- debrief log (web) and done page ---------- */
    let lgp = null, les = [];
    if (web) {
      lgp = A.el('div', 'lgp', ckParent, `${lbl('DEBRIEF LOG', 'THIS SESSION')}<p class="lgh nx">Finish a mission and Bolt logs the result here.</p>${MS.map((m, i) => `<div class="le">${hx(I(m.ic, 14, 2.2), 'mt')}<div><b>${m.name}</b><span>${['4.8 MB to 196 KB', '4000 × 3000 to 1080 × 1350', 'GPS removed', '2.1 MB · 36 frames'][i]}</span></div><em>+${m.xp}</em></div>`).join('')}`);
      Object.assign(lgp.style, { left: '912px', top: '440px', width: '356px', height: '304px' });
      les = [...lgp.querySelectorAll('.le')]; lgp.lgh = lgp.querySelector('.lgh');
    }
    const dsrc = [[th.por, 'Exam photo', D.shrink.size + ' · ' + D.shrink.format], [th.mnt, 'Instagram post', D.crop.px], [th.city, 'City photo', 'Place removed'], [A.frame(3), 'Beach GIF', D.video.size + ' · ' + D.video.clip]];
    const pgD = A.el('div', 'pg pgD', web ? ckParent : S, `<div class="dhd"><b>MISSION REPORT</b><span class="chp o">4 / 4 COMPLETE</span></div>
      <div class="pn drk"><div class="rb">${hx(chev(1), 'lg xl rbx')}</div><div class="rt"><span class="lb rl">RANK UP</span><b class="rtt">CADET <em>to</em> PILOT</b><div class="xb"><i style="width:100%"></i></div><div class="rst">${[0, 1, 2, 3].map(() => I('star', 16, 2)).join('')}<span class="lb dxp">+150 XP TODAY</span></div></div></div>
      <div class="dres">${dsrc.map((x, i) => `<div class="rcd rcd${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><span>${x[2]}</span></div>${hx(I('check', 11, 3.4), 'mt')}</div>`).join('')}</div>
      <div class="dst"><div><span class="lb">XP TODAY</span><b class="nm dx0">+0</b></div><div><span class="lb">SAVED</span><b class="nm">${D.done.saved.replace(' saved', '')}</b></div><div><span class="lb">STREAK</span><b class="nm dx2">3 days</b></div><div><span class="lb">RECEIPT</span><b class="nm">12 ${web ? 'clicks' : 'taps'}</b></div></div>
      <div class="pn dbd">${lbl('ACHIEVEMENT UNLOCKED', '')}<div class="bgbig">${hx(I('star', 22, 1.8), 'lg xl')}<div><b>CLEAN SWEEP</b><span>All four missions in one session</span></div></div></div>
      <div class="dpr">${I('lock', 16, 2.4)}<span>${web ? D.promiseWeb : D.promise}</span></div>
      <div class="ad dad"><small>Ad</small><i></i><div><b>Sponsored message</b><span>Shown only after your work is done</span></div></div>`);
    if (web) Object.assign(pgD.style, { left: '248px', top: '56px', width: '1020px', height: '688px' });
    const dZ = { el: pgD, tx: null, w: web ? 1020 : W, h: web ? 688 : H, noz: 1 };
    if (web) {  }
    const dBadge = pgD.querySelector('.bgbig');

    /* ---------- bar canvases ---------- */
    const bars = {};
    ['S', 'C', 'P', 'G'].forEach(k => {
      const bz = bsz(BK[k], k !== 'C');
      bars[k] = A.bar(PN['proc' + k].querySelector('.bw'), BK[k], { w: bz.w, h: bz.h, colors: BCOL[k], track: 'rgba(139,148,167,.16)', seed: 3 + k.charCodeAt(0) % 7, field: '#0B0D12' });
    });

    /* ---------- comm panel ---------- */
    const cmEl = A.el('div', 'cm', S, `<div class="cmh"><i></i><span class="lb">BOLT // COMMS</span><span class="lb md">STANDBY</span></div><div class="ct"></div><div class="btn cta"><span class="ctl">Check</span></div><div class="wl"></div>`);
    Object.assign(cmEl.style, { left: G.cm[0] + 'px', top: G.cm[1] + 'px', width: G.cm[2] + 'px', height: G.cm[3] + 'px' });
    const ct = cmEl.querySelector('.ct'), md = cmEl.querySelector('.md'), cta = cmEl.querySelector('.cta'), ctl = cmEl.querySelector('.ctl'), wl = cmEl.querySelector('.wl'), cmDot = cmEl.querySelector('.cmh i');

    /* ---------- toast, fcard, hint ---------- */
    const toast = A.el('div', 'tw0', S, `<div class="toast">${I('check', 16, 3)}<span class="tt">Saved</span></div>`);
    Object.assign(toast.style, { left: V.x + 'px', top: (V.y + 6) + 'px', width: V.w + 'px' });
    const hntR = A.el('i', 'hnt hnr', S), hntP = A.el('div', 'hnt hnp', S, 'Tap Bolt for menu');
    const fcard = web ? A.el('div', 'fcard', S, `<i style="background-image:${th.por}"></i><div><b>${D.portrait.file}</b><span>${D.portrait.size} · Desktop</span></div>`) : null;

    /* ---------- fx canvas, quick menu, bursts ---------- */
    const dpr = web ? 1.5 : 2, cv = A.el('canvas', 'fx', S);
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    const c = cv.getContext('2d');
    const QR = web ? 150 : 128, QA = web ? [255, 335] : [162, 272];
    const qm = A.el('div', 'qm', S);
    const QT = [['shrink', 'Shrink', 'S'], ['crop', 'Crop', 'C'], ['pin', 'Place', 'P'], ['film', 'GIF', 'G'], ['convert', 'Convert', 'V']];
    const qcs = QT.map(x => A.el('div', 'qc', qm, `${hx(I(x[0], 20, 2))}<span>${x[1]}${web ? ' · ' + x[2] : ''}</span>`));
    const burst = [14.3, 23.2, 28.9, 35.2].map((tt, i) => ({ tt, sp: A.confetti(S, { x: VC.x, y: VC.y, count: 26, shape: 'spark', colors: [OR, AM, '#ffffff'], power: web ? 620 : 480, spread: Math.PI * 2, gravity: 420, dur: 1.2, seed: 21 + i }), cn: A.confetti(S, { x: VC.x, y: VC.y, count: 12, shape: 'coin', colors: [AM, OR], power: web ? 560 : 440, spread: Math.PI * 1.1, gravity: 1100, dur: 1.9, seed: 41 + i }) }));
    qcs.forEach((e, i) => { const a = (QA[0] + (QA[1] - QA[0]) * i / 4) * Math.PI / 180, sp = e.querySelector('span'); sp.style.left = (23 + Math.cos(a) * (web ? 54 : 50)) + 'px'; sp.style.top = (26 + Math.sin(a) * 40) + 'px'; });
    const rkPos = web ? { x: 248 + 20 + 42, y: 56 + 240 + 20 + 52 } : { x: 14 + 30, y: 136 + 61 };
    const rankB = [{ tt: 36.9, x: rkPos.x, y: rkPos.y, cn: 'coin' }, { tt: 37.5, x: web ? 248 + 734 + 143 : 195, y: web ? 56 + 240 + 110 : 552, cn: 'spark' }].map((b, i) => A.confetti(S, { x: b.x, y: b.y, count: 22, shape: b.cn, colors: [AM, OR, MT], power: 520, spread: Math.PI * 2, gravity: 700, dur: 1.7, seed: 61 + i }));

    /* ---------- Bolt (the character) ---------- */
    const GLY = {
      cap: '<rect class="ef" x="-8" y="-11" width="16" height="22" rx="8"/><rect class="ef" x="-11" y="-14" width="22" height="28" rx="11" opacity=".2"/><circle cx="-2.6" cy="-5.5" r="2.4" fill="#fff" opacity=".9"/>',
      wide: '<rect class="ef" x="-9.5" y="-14" width="19" height="28" rx="9.5"/><rect class="ef" x="-13" y="-17" width="26" height="34" rx="13" opacity=".2"/><circle cx="-3" cy="-7" r="2.8" fill="#fff"/><circle cx="3.5" cy="5" r="1.4" fill="#fff" opacity=".8"/>',
      ring: '<circle class="es" r="9" stroke-width="5"/><circle class="es" r="14" stroke-width="2" opacity=".25"/>',
      up: '<path class="es" d="M-10 5 Q0 -9 10 5" stroke-width="5" stroke-linecap="round"/><path class="es" d="M-10 5 Q0 -9 10 5" stroke-width="11" stroke-linecap="round" opacity=".18"/>',
      down: '<path class="es" d="M-10 -3 Q0 9 10 -3" stroke-width="5" stroke-linecap="round"/><path class="es" d="M-10 -3 Q0 9 10 -3" stroke-width="11" stroke-linecap="round" opacity=".18"/>',
      half: '<path class="ef" d="M-9 -1 H9 Q9 10 0 10 Q-9 10 -9 -1Z"/><path class="ef" d="M-12 -4 H12 Q12 13 0 13 Q-12 13 -12 -4Z" opacity=".18"/>',
      heart: '<path class="ef" d="M0 11 C-15 1 -12 -11 -5 -9 C-2 -8 0 -5 0 -5 C0 -5 2 -8 5 -9 C12 -11 15 1 0 11Z"/><path class="es" d="M0 11 C-15 1 -12 -11 -5 -9 C-2 -8 0 -5 0 -5 C0 -5 2 -8 5 -9 C12 -11 15 1 0 11Z" stroke-width="6" opacity=".22"/><circle cx="-5" cy="-4" r="2" fill="#fff" opacity=".7"/>',
      x: '<path class="es" d="M-8 -8 L8 8 M8 -8 L-8 8" stroke-width="5" stroke-linecap="round"/><path class="es" d="M-8 -8 L8 8 M8 -8 L-8 8" stroke-width="11" stroke-linecap="round" opacity=".18"/>',
      spark: '<path class="ef" d="M0 -15 Q1.6 -2.6 14 0 Q1.6 2.6 0 15 Q-1.6 2.6 -14 0 Q-1.6 -2.6 0 -15Z"/><path class="ef" d="M9 -11 l1.2 2.6 l2.6 1.2 l-2.6 1.2 l-1.2 2.6 l-1.2 -2.6 l-2.6 -1.2 l2.6 -1.2z" opacity=".9"/><path class="ef" d="M0 -15 Q1.6 -2.6 14 0 Q1.6 2.6 0 15 Q-1.6 2.6 -14 0 Q-1.6 -2.6 0 -15Z" opacity=".2" transform="scale(1.3)"/>',
      bar: '<rect class="ef" x="-12" y="-2.6" width="24" height="5.2" rx="2.6"/><rect class="ef" x="-14" y="-6" width="28" height="12" rx="6" opacity=".2"/>',
    };
    const eyeG = (cx, sd) => `<g class="eye e${sd}" transform="translate(${cx} 79)"><g class="eb">${Object.keys(GLY).map(k => `<g class="g g-${k}" opacity="0">${GLY[k]}</g>`).join('')}</g><rect class="ef brow" x="-8" y="-25" width="16" height="3.4" rx="1.7" opacity="0"/></g>`;
    const armG = s => `<g class="arm${s}" transform="translate(${s === 'L' ? 60 : 140} 141)${s === 'R' ? ' scale(-1 1)' : ''}"><g class="a1" transform="rotate(7)"><rect x="-5" y="2" width="10" height="23" rx="5" fill="url(#bg${uid})" stroke="#10131A" stroke-width=".9"/><rect x="-3" y="6" width="2" height="14" rx="1" fill="#fff" opacity=".18"/><g class="a2" transform="translate(0 22) rotate(-14)"><rect x="-4.4" y="0" width="8.8" height="21" rx="4.4" fill="url(#bg${uid})" stroke="#10131A" stroke-width=".9"/><g transform="translate(0 20)"><rect x="-6.2" y="-1" width="12.4" height="4.4" rx="2.2" fill="url(#bo${uid})"/><rect x="-7.2" y="2" width="14.4" height="13" rx="6.2" fill="url(#bh${uid})" stroke="#10131A" stroke-width=".9"/><path d="M-4 5.5 Q0 4 4 5.5" stroke="#fff" opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/><g class="thm" transform="translate(6 7) rotate(100)"><rect x="-2.6" y="-1" width="5.2" height="10.5" rx="2.6" fill="url(#bh${uid})" stroke="#10131A" stroke-width=".8"/></g></g><circle r="5.2" fill="#2A303A" stroke="#10131A" stroke-width=".9"/></g><circle r="8" fill="url(#bh${uid})" stroke="#10131A" stroke-width=".9"/><circle r="3.2" fill="url(#bo${uid})"/></g></g>`;
    const boltSVG = `<svg class="bsv" viewBox="0 0 200 260" width="200" height="260" style="overflow:visible"><defs>
<linearGradient id="bg${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5A6375"/><stop offset=".45" stop-color="#2F3641"/><stop offset="1" stop-color="#1A1E26"/></linearGradient>
<linearGradient id="bh${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6A748A"/><stop offset=".5" stop-color="#383F4C"/><stop offset="1" stop-color="#222730"/></linearGradient>
<linearGradient id="bo${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB46E"/><stop offset=".5" stop-color="#FF7A1A"/><stop offset="1" stop-color="#C9540A"/></linearGradient>
<linearGradient id="bv${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07090D"/><stop offset="1" stop-color="#161B24"/></linearGradient>
<linearGradient id="bj${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE9C4"/><stop offset=".3" stop-color="#FFA24A"/><stop offset="1" stop-color="#FF7A1A" stop-opacity="0"/></linearGradient>
<radialGradient id="bf${uid}"><stop offset="0" stop-color="#FF7A1A" stop-opacity=".6"/><stop offset="1" stop-color="#FF7A1A" stop-opacity="0"/></radialGradient>
<radialGradient id="be${uid}"><stop offset="0" style="stop-color:var(--ec)" stop-opacity=".2"/><stop offset="1" style="stop-color:var(--ec)" stop-opacity="0"/></radialGradient>
<linearGradient id="bs${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".4"/><stop offset=".7" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="bmg${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".38"/></linearGradient>
<clipPath id="bc${uid}"><rect x="50" y="52" width="100" height="56" rx="24"/></clipPath>
<mask id="bm${uid}" maskUnits="userSpaceOnUse" x="-100" y="0" width="400" height="300"><rect x="-100" y="95" width="400" height="115" fill="url(#bmg${uid})"/></mask></defs>
<g class="rf" opacity="0" transform="translate(0 504) scale(1 -1)" mask="url(#bm${uid})"><use href="#ba${uid}"/></g>
<g class="all" id="ba${uid}">
<g class="jet" transform="translate(100 204)"><circle class="jg" cy="12" r="32" fill="url(#bf${uid})"/><g class="jfl"><path d="M-13 0 Q-7 26 0 44 Q7 26 13 0Z" fill="url(#bj${uid})"/><path d="M-6 0 Q-3 15 0 26 Q3 15 6 0Z" fill="#FFF3DA" opacity=".9"/></g></g>
<path d="M64 132 Q64 124 74 124 H126 Q136 124 136 132 V166 Q136 198 100 200 Q64 198 64 166 Z" fill="url(#bg${uid})" stroke="#10131A" stroke-width="1.2"/>
<path d="M65 178 Q100 191 135 178 L135.5 186 Q100 199 64.5 186Z" fill="url(#bo${uid})"/>
<path d="M68 131 Q68 127 74 127 H98" stroke="#fff" opacity=".35" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M67.5 140 V166" stroke="#fff" opacity=".16" stroke-width="2" stroke-linecap="round"/>
<path d="M70 190 Q100 203 130 190" stroke="#FF9A4D" opacity=".55" stroke-width="2" fill="none"/>
<rect x="78" y="137" width="44" height="30" rx="9" fill="#12151A" stroke="#3A4150" stroke-width="1"/><rect x="84" y="143" width="32" height="5" rx="2.5" fill="#2A2F39"/><rect class="cgf" x="84" y="143" width="20" height="5" rx="2.5" fill="url(#bo${uid})"/>
<circle class="ld" cx="90" cy="157" r="2.4" fill="#34D399"/><circle class="ld" cx="100" cy="157" r="2.4" fill="#FFB547"/><circle class="ld" cx="110" cy="157" r="2.4" fill="#FF7A1A"/><path d="M86 163 H114" stroke="#2A2F39" stroke-width="1.5" stroke-linecap="round"/>
<path d="M84 199 H116 L112 207 H88 Z" fill="#12151A"/>
<rect x="89" y="116" width="22" height="16" rx="5" fill="#1D2128" stroke="#10131A" stroke-width=".8"/><path d="M90 122 H110 M90 126 H110" stroke="#FF7A1A" opacity=".5" stroke-width="1"/>
${armG('L')}${armG('R')}
<g class="hdg"><g class="ant"><rect x="98.4" y="18" width="3.2" height="26" rx="1.6" fill="#6C7587"/><circle class="halo" cx="100" cy="15" r="12" style="fill:var(--lc)" opacity=".28"/><circle cx="100" cy="15" r="5.6" style="fill:var(--lc)"/><circle cx="98.2" cy="13.2" r="1.8" fill="#fff" opacity=".85"/></g>
<rect x="90" y="38" width="20" height="7" rx="3.5" fill="url(#bo${uid})"/>
<rect x="29" y="64" width="15" height="36" rx="7.5" fill="url(#bo${uid})" stroke="#8A3F0A" stroke-width=".8"/><rect x="156" y="64" width="15" height="36" rx="7.5" fill="url(#bo${uid})" stroke="#8A3F0A" stroke-width=".8"/><rect x="32" y="68" width="3" height="26" rx="1.5" fill="#fff" opacity=".4"/><rect x="159" y="68" width="3" height="26" rx="1.5" fill="#fff" opacity=".25"/>
<rect x="40" y="39" width="120" height="84" rx="34" fill="url(#bh${uid})" stroke="#10131A" stroke-width="1.2"/>
<path d="M54 49 Q100 36 146 49" stroke="#fff" opacity=".32" fill="none" stroke-width="2.4" stroke-linecap="round"/><path d="M47 102 Q50 118 76 121 H124 Q150 118 153 102" stroke="#000" opacity=".28" fill="none" stroke-width="2.4"/>
<rect x="47" y="49" width="106" height="62" rx="28" fill="#0C0F14"/><rect x="50" y="52" width="100" height="56" rx="24" fill="url(#bv${uid})" stroke="#2B313C" stroke-width="1"/>
<g clip-path="url(#bc${uid})"><ellipse cx="100" cy="80" rx="56" ry="30" fill="url(#be${uid})"/>
<g class="eyes">${eyeG(76, 'L')}${eyeG(124, 'R')}</g>
<g class="mo" transform="translate(100 100)"><path class="es m-smile" d="M-7 -1 Q0 5 7 -1" stroke-width="2.6" stroke-linecap="round" opacity="0"/><ellipse class="ef m-o" rx="3" ry="3.6" opacity="0"/><rect class="ef m-flat" x="-6" y="-1.2" width="12" height="2.4" rx="1.2" opacity="0"/></g>
<rect class="ef sw" x="-2" y="53" width="4" height="54" rx="2" opacity="0"/>
<path d="M50 54 H102 L80 108 H50Z" fill="url(#bs${uid})" opacity=".55"/></g></g></g></svg>`;
    const bolt = A.el('div', 'bolt', S, boltSVG);
    const svgB = bolt.firstChild;
    const B = {
      all: bolt.querySelector('.all'), hdg: bolt.querySelector('.hdg'), ant: bolt.querySelector('.ant'), eyes: bolt.querySelector('.eyes'), halo: bolt.querySelector('.halo'),
      eb: [...bolt.querySelectorAll('.eb')], brow: [...bolt.querySelectorAll('.brow')], g: [...bolt.querySelectorAll('.eye')].map(e => { const o = {}; e.querySelectorAll('.g').forEach(g => { o[g.getAttribute('class').split('g-')[1]] = g; }); return o; },),
      smile: bolt.querySelector('.m-smile'), mo: bolt.querySelector('.m-o'), flat: bolt.querySelector('.m-flat'), sw: bolt.querySelector('.sw'),
      jfl: bolt.querySelector('.jfl'), jg: bolt.querySelector('.jg'), cgf: bolt.querySelector('.cgf'), lds: [...bolt.querySelectorAll('.ld')], rf: bolt.querySelector('.rf'),
      a1: { L: bolt.querySelector('.armL .a1'), R: bolt.querySelector('.armR .a1') }, a2: { L: bolt.querySelector('.armL .a2'), R: bolt.querySelector('.armR .a2') }, thm: { L: bolt.querySelector('.armL .thm'), R: bolt.querySelector('.armR .thm') },
    };

    const MOODS = {
      idle: { L: 'cap', R: 'cap', c: '#5EF2C4', tag: 'STANDBY' },
      happy: { L: 'up', R: 'up', c: '#5EF2C4', mouth: 'smile', tag: 'HAPPY' },
      proud: { L: 'down', R: 'down', c: '#5EF2C4', mouth: 'smile', tag: 'PROUD' },
      wow: { L: 'spark', R: 'spark', c: AM, mouth: 'o', tag: 'CHEER' },
      love: { L: 'heart', R: 'heart', c: '#FF6B5A', mouth: 'smile', tag: 'LOVE' },
      scan: { L: 'bar', R: 'bar', c: AM, sweep: 1, tag: 'SCANNING' },
      alert: { L: 'cap', R: 'cap', c: OR, brow: [-16, 16, 0, 0], mouth: 'flat', tag: 'ALERT' },
      surprised: { L: 'ring', R: 'ring', c: '#8CF6D6', mouth: 'o', tag: 'SURPRISED' },
      wink: { L: 'up', R: 'cap', c: '#5EF2C4', mouth: 'smile', tag: 'WINK' },
      dizzy: { L: 'x', R: 'x', c: OR, tag: 'GLITCH' },
      sleepy: { L: 'half', R: 'half', c: '#3E9E80', tag: 'BOOTING' },
      curious: { L: 'cap', R: 'wide', c: '#5EF2C4', brow: [0, -10, -1, -4], tag: 'CURIOUS' },
    };
    const MOODT = [[0, 'sleepy'], [0.55, 'scan'], [1.05, 'dizzy'], [1.4, 'surprised'], [1.65, 'happy'], [2.7, 'idle'], [3.3, 'curious'], [4.6, 'idle'],
      ...(web ? [[4.9, 'curious'], [6.3, 'surprised'], [6.9, 'wow'], [7.5, 'happy']] : [[5.4, 'surprised'], [5.95, 'happy'], [7.0, 'idle']]),
      [8.0, 'wink'], [8.5, 'idle'], [9.0, 'curious'], [10.0, 'wow'], [10.45, 'scan'], [14.3, 'wow'], [15.5, 'happy'], [17.0, 'idle'], [17.85, 'wink'], [18.3, 'happy'], [19.0, 'wink'], [19.45, 'happy'],
      [20.1, 'curious'], [22.3, 'scan'], [23.2, 'proud'], [24.3, 'alert'], [25.6, 'curious'], [27.3, 'alert'], [27.45, 'scan'], [28.9, 'proud'], [29.3, 'happy'], [30.0, 'curious'], [30.85, 'happy'], [31.2, 'curious'],
      [33.0, 'wow'], [33.15, 'scan'], [35.2, 'love'], [36.3, 'wow'], [37.2, 'proud'], [39.0, 'happy']];
    const POSE = {
      rest: { aL: 7, eL: -14, aR: 7, eR: -14, tL: 100, tR: 100 },
      wave: { aL: 7, eL: -14, aR: 148, eR: 18, tL: 100, tR: 100, osc: (t, o) => { o.aR += Math.sin(t * 12) * 12; o.eR += Math.sin(t * 12 + 1.2) * 18; } },
      up: { aL: 62, eL: 22, aR: 62, eR: 22, tL: 100, tR: 100 },
      thumbs: { aL: 7, eL: -14, aR: 72, eR: 108, tL: 100, tR: 0 },
      cheer: { aL: 152, eL: 14, aR: 152, eR: 14, tL: 100, tR: 100, osc: (t, o) => { o.aL += Math.sin(t * 9) * 8; o.aR += Math.sin(t * 9 + 2) * 8; } },
      point: { aL: 126, eL: -8, aR: 7, eR: -14, tL: 100, tR: 100 },
      project: { aL: 58, eL: 26, aR: 58, eR: 26, tL: 60, tR: 60 },
      stop: { aL: 158, eL: -4, aR: 7, eR: -14, tL: 0, tR: 100 },
      conduct: { aL: 84, eL: 36, aR: 84, eR: 36, tL: 100, tR: 100, osc: (t, o) => { o.aL += Math.sin(t * 10) * 24; o.aR += Math.sin(t * 10 + 3.14) * 24; o.eL += Math.sin(t * 10 + 1) * 10; o.eR += Math.sin(t * 10 + 4) * 10; } },
    };
    const ARMT = [[0, 'rest'], [1.6, 'wave'], [2.55, 'rest'], ...(web ? [[6.3, 'up'], [6.95, 'thumbs']] : [[5.35, 'up'], [5.95, 'thumbs']]), [7.4, 'rest'], [10.0, 'point'], [14.3, 'cheer'], [15.6, 'thumbs'], [16.8, 'rest'],
      [17.85, 'project'], [19.3, 'rest'], [20.1, 'point'], [22.3, 'rest'], [22.4, 'point'], [23.2, 'thumbs'], [24.3, 'rest'], [24.5, 'point'], [27.4, 'stop'], [28.9, 'cheer'], [29.6, 'rest'], [30.1, 'point'], [31.0, 'rest'],
      [33.1, 'conduct'], [35.2, 'cheer'], [36.6, 'wave'], [38.5, 'thumbs']];
    const HOPS = [[1.4, .4, 12], [5.4, .45, 12], [14.3, .5, 24], [14.9, .45, 14], [35.2, .5, 24], [36.9, .5, 20], [37.6, .45, 10], [6.9, .45, web ? 12 : 0]];
    const LOOKT = [[10.4, 14.3], [20.3, 23.2], [24.3, 29.0], [30.2, 35.2]];
    const armsAt = t => {
      let i = 0; while (i < ARMT.length - 1 && t >= ARMT[i + 1][0]) i++;
      const cur = POSE[ARMT[i][1]], prev = POSE[ARMT[Math.max(0, i - 1)][1]], k = i ? E.inOut(seg(t, ARMT[i][0], ARMT[i][0] + 0.3)) : 1, o = {};
      ['aL', 'eL', 'aR', 'eR', 'tL', 'tR'].forEach(m => { o[m] = lerp(prev[m], cur[m], k); });
      if (cur.osc) { const d = { aL: 0, eL: 0, aR: 0, eR: 0 }; cur.osc(t, d); ['aL', 'eL', 'aR', 'eR'].forEach(m => { o[m] += (d[m] === undefined ? 0 : d[m]) * k; }); }
      return o;
    };
    const hopA = (a, b, f, d) => ({ x: lerp(a[0], b[0], f), y: lerp(a[1], b[1], f) - Math.sin(Math.PI * f) * d, s: lerp(a[2], b[2], f) });
    const bpos = t => {
      const bo = G.boot, dk = G.dock;
      if (t < 2.45) { const f = E.out(seg(t, 0, 0.85)); return { x: bo[0], y: lerp(bo[1] + 480, bo[1], f), s: bo[2] }; }
      if (web) return t < 3.4 ? hopA(bo, dk, E.inOut(seg(t, 2.45, 3.4)), 40) : { x: dk[0], y: dk[1], s: dk[2] };
      const hm = G.home, dn = G.done;
      if (t < 5.55) return t < 3.3 ? hopA(bo, hm, E.inOut(seg(t, 2.45, 3.3)), 40) : { x: hm[0], y: hm[1], s: hm[2] };
      if (t < 35.9) return t < 6.45 ? hopA(hm, dk, E.inOut(seg(t, 5.55, 6.45)), 50) : { x: dk[0], y: dk[1], s: dk[2] };
      return hopA(dk, dn, E.inOut(seg(t, 35.9, 36.7)), 40);
    };
    let BP = { x: G.boot[0], y: G.boot[1], s: 1 }, mood = 'sleepy', vis = { x: 0, y: 0 };
    const drawBolt = t => {
      const L = A.life(t, 7), p0 = bpos(t), p1 = bpos(t + .04), vx = (p1.x - p0.x) / .04, vy = (p1.y - p0.y) / .04, s = p0.s;
      mood = at(MOODT, t)[1]; const M = MOODS[mood], ar = armsAt(t);
      let hop = 0, sq = 0;
      HOPS.forEach(([h0, hd, hh]) => { const k = (t - h0) / hd; if (k >= 0 && k <= 1) hop += Math.sin(Math.PI * k) * hh; else if (k > 1 && k < 1.8) sq = Math.max(sq, Math.exp(-9 * (k - 1) * hd) * Math.cos(26 * (k - 1) * hd) * .1); });
      const bob = L.bob * 2.2 + Math.sin(t * 1.7) * 1.6, gl = t > 1.0 && t < 1.4 ? Math.sin(t * 90) * 2 : 0;
      const tilt = clamp(vx * 0.018, -14, 14) + L.sway * 1.5 + (mood === 'alert' ? -3 : 0);
      BP = { x: p0.x, y: p0.y - hop * s + bob * s, s };
      A.set(bolt, { x: BP.x - 100 * s + gl, y: BP.y - 125 * s, s, o: 1 });
      const vxs = BP.x, vys = BP.y - 45 * s;
      /* eyes follow the pointer, or a look target while a job runs */
      const ptr = A.pointerAt(t); let tx = ptr.x, ty = ptr.y, kv = ptr.vis;
      if (LOOKT.some(l => t >= l[0] && t < l[1])) { tx = VC.x; ty = VC.y; kv = 1; }
      const dx = tx - vxs, dy = ty - vys, n = Math.hypot(dx, dy) || 1, m = Math.min(1, n / 120);
      const lx = lerp(L.look * 3, dx / n * m * 5.5, kv), ly = lerp(0, dy / n * m * 3.6, kv);
      const sy = 1 - sq + clamp(vy * 0.0006, -.06, .06) - (hop > 0 ? -.03 : 0), sx = 1 + sq * .8;
      attr(B.all, 'transform', `rotate(${tilt.toFixed(2)} 100 200) translate(100 200) scale(${sx.toFixed(3)} ${sy.toFixed(3)}) translate(-100 -200)`);
      attr(B.hdg, 'transform', `rotate(${(clamp(lx * 0.8, -4, 4) + tilt * 0.4).toFixed(2)} 100 120)`);
      const ph = (t + 1.3) % 6.3, wig = ph < .55 ? Math.sin(Math.PI * ph / .55) : 0;
      attr(B.ant, 'transform', `rotate(${(Math.sin(t * 2.1) * 2 + wig * Math.sin(t * 26) * 8 + (mood === 'alert' ? Math.sin(t * 30) * 4 : 0)).toFixed(2)} 100 42)`);
      attr(B.eyes, 'transform', `translate(${lx.toFixed(2)} ${ly.toFixed(2)})`);
      ['L', 'R'].forEach((sd, i) => {
        const nm = M[sd]; for (const k in B.g[i]) attr(B.g[i][k], 'opacity', k === nm ? '1' : '0');
        const blinkable = nm === 'cap' || nm === 'wide' || nm === 'ring' || nm === 'half' || nm === 'spark';
        attr(B.eb[i], 'transform', `scale(1 ${(blinkable ? 1 - .92 * L.blink : 1).toFixed(2)})`);
        const br = M.brow; attr(B.brow[i], 'opacity', br ? '1' : '0'); if (br) attr(B.brow[i], 'transform', `translate(0 ${br[2 + i]}) rotate(${br[i]} 0 -23)`);
      });
      attr(B.smile, 'opacity', M.mouth === 'smile' ? '1' : '0'); attr(B.mo, 'opacity', M.mouth === 'o' ? '1' : '0'); attr(B.flat, 'opacity', M.mouth === 'flat' ? '1' : '0');
      const swOn = M.sweep || (t > 0.2 && t < 0.55);
      attr(B.sw, 'opacity', swOn ? '0.55' : '0'); if (swOn) attr(B.sw, 'transform', `translate(${(100 + Math.sin(t * 6) * 36).toFixed(1)} 0)`);
      if (svgB._ec !== M.c) { svgB._ec = M.c; svgB.style.setProperty('--ec', M.c); }
      const ledC = mood === 'alert' ? OR : mood === 'scan' ? AM : MT; if (svgB._lc !== ledC) { svgB._lc = ledC; svgB.style.setProperty('--lc', ledC); }
      const hint = t > 2.9 && t < 4.6 ? 1 : 0, pulse = .5 + .5 * Math.sin(t * (mood === 'alert' ? 14 : 4.2));
      attr(B.halo, 'r', (11 + pulse * 4 + hint * 5 * (.5 + .5 * Math.sin(t * 9))).toFixed(1)); attr(B.halo, 'opacity', (.22 + pulse * .25 + hint * .3).toFixed(2));
      const jet = 0.8 + 0.12 * Math.sin(t * 23) + Math.min(.9, Math.hypot(vx, vy) * .003) + (hop > 2 ? .25 : 0) + (t < 0.85 ? .8 : 0) + (t > 0.9 && t < 1.25 ? -.5 * Math.abs(Math.sin(t * 40)) : 0);
      attr(B.jfl, 'transform', `scale(1 ${Math.max(.2, jet).toFixed(3)})`); attr(B.jg, 'opacity', clamp(.5 + jet * .3, 0, 1).toFixed(2));
      attr(B.a1.L, 'transform', `rotate(${ar.aL.toFixed(1)})`); attr(B.a1.R, 'transform', `rotate(${ar.aR.toFixed(1)})`);
      attr(B.a2.L, 'transform', `translate(0 22) rotate(${ar.eL.toFixed(1)})`); attr(B.a2.R, 'transform', `translate(0 22) rotate(${ar.eR.toFixed(1)})`);
      attr(B.thm.L, 'transform', `translate(6 7) rotate(${ar.tL.toFixed(0)})`); attr(B.thm.R, 'transform', `translate(6 7) rotate(${ar.tR.toFixed(0)})`);
      attr(B.cgf, 'width', (32 * clamp((xpAt(t) - (t > 36.7 ? 400 : 0)) / (t > 36.7 ? 400 : 400), 0, 1)).toFixed(1));
      B.lds.forEach((l, i) => attr(l, 'opacity', (.45 + .55 * Math.max(0, Math.sin(t * 5 + i * 2.1))).toFixed(2)));
      attr(B.rf, 'opacity', (.9 * (1 - seg(t, 2.2, 2.9))).toFixed(2));
      vis = { x: vxs, y: vys };
      /* tag and LED in the comm panel */
      txt(md, M.tag); cmDot.style.background = ledC; cmDot.style.boxShadow = `0 0 8px ${ledC}`;
      /* hint ring and pill above the LED */
      const lx0 = BP.x, ly0 = BP.y - 111 * s;
      if (hint) {
        const k = ((t - 3.0) / .5) % 1;
        set(hntR, { x: lx0, y: ly0, s: .5 + k * 1.9, o: (1 - k) * .9 * seg(t, 2.9, 3.1) });
        const pill = { x: clamp(lx0 - 78, 8, W - 164), y: ly0 - (web ? 44 : 34) };
        set(hntP, { x: pill.x, y: pill.y, o: seg(t, 3.0, 3.3) * (1 - seg(t, 4.3, 4.6)) });
      } else { set(hntR, { o: 0 }); set(hntP, { o: 0 }); }
    };

    /* ---------- comm lines, process logs ---------- */
    const COMM = [[0, ''], [2.6, 'Bolt online. All jobs run on this ' + (web ? 'computer.' : 'phone.')], [3.3, 'Pick a photo and I will plan the mission.'],
      ...(web ? [[5.0, 'Drag a photo onto the viewport. I will catch it.'], [6.9, 'Nice catch! Locking the file.']] : [[5.4, 'Whoa, nice shot!'], [6.0, 'Locked on. Got it.']]),
      [7.3, 'IMG_2041.HEIC. 4.8 MB. Heavy cargo.'], [8.3, 'Exam form? I will aim under 200 KB.'], [9.5, tapW + ' Exam form. I will start right away.'], [10.15, 'Scanning. Hold steady.'], [12.4, 'Squeezing. Faces stay sharp.'],
      [14.3, 'Mission complete! 4.8 MB to 196 KB.'], [15.8, 'Saved. Ready for the next mission?'], [17.1, tapW + ' me for the quick menu.'], [17.95, 'Quick menu online. Pick a tool.'], [19.1, 'Crop it is.'],
      [19.5, 'Instagram post, 4:5. Slide the photo.'], [22.4, 'Rendering 1080 × 1350.'], [23.3, 'Cropped. Nice framing!'], [24.4, 'This photo knows where it was taken. Check?'], [25.7, 'Pune, India. Anyone can see it.'],
      [27.4, 'Wiping the location tag.'], [28.95, 'Clean. Safe to share.'], [30.1, 'I found beach-trip.mp4. Make a GIF?'], [31.1, 'Slide the handles. I will keep it to 3.0 s.'], [33.1, 'Rendering 36 frames at 12 fps.'],
      [35.3, 'GIF ready. 2.1 MB. It loops forever!'], [36.3, 'All 4 missions done. Rank up!'], [38.4, 'Great flying, pilot. See you next mission.']];
    const CTA = [[24.5, 25.6, web ? 'Check place' : 'Check'], [30.2, 30.95, 'Make a GIF']];
    const LOG = [[7.0, 'F', '> file locked · IMG_2041.HEIC'], [10.5, 'S', '> decode 4032 × 3024 ... OK'], [11.2, 'S', '> target JPG under 200 KB'], [11.9, 'S', '> pass 1 · q92 · 1.9 MB'], [12.6, 'S', '> pass 2 · q78 · 611 KB'], [13.3, 'S', '> pass 3 · q64 · 238 KB'], [13.95, 'S', '> pass 4 · q61 · 196 KB OK'], [14.3, 'S', '> MISSION COMPLETE +40 XP'],
      [19.2, 'C', '> tool: crop'], [20.1, 'C', '> frame locked 4:5 · 1080 × 1350'], [22.4, 'C', '> render 1080 × 1350 ... OK'], [23.2, 'C', '> MISSION COMPLETE +25 XP'],
      [25.6, 'P', '> exif scan · IMG_1877.JPG'], [25.95, 'P', '> geotag 18.52° N 73.86° E'], [27.5, 'P', '> wipe gps ... OK'], [27.9, 'P', '> wipe maker note ... OK'], [28.4, 'P', '> verify ... clean'], [28.9, 'P', '> MISSION COMPLETE +35 XP'],
      [31.0, 'G', '> trim 0:04 to 0:07 · 3.0 s'], [33.1, 'G', '> extract 36 frames @ 12 fps'], [33.8, 'G', '> palette 256 colors ... OK'], [34.5, 'G', '> encode loop ... 2.1 MB'], [35.2, 'G', '> MISSION COMPLETE +50 XP'], [36.9, 'F', '> RANK UP · CADET to PILOT']];
    const emph = s => s.replace(/ OK$/, ' <em>OK</em>').replace(/MISSION COMPLETE/, '<strong>MISSION COMPLETE</strong>').replace(/RANK UP/, '<strong>RANK UP</strong>');
    const renderLog = (el, ents, t, n) => {
      const sel = ents.filter(e => t >= e[0]).slice(-n);
      A.html(el, sel.map((e, i) => `<p class="${i === sel.length - 1 ? 'nw' : ''}">${emph(i === sel.length - 1 ? A.typed(t, e[0], e[2], 70) : e[2])}</p>`).join(''));
    };
    const scr = (t, seed) => { const r = A.rng(Math.floor(t * 16) * 7 + seed); return `${(10 + r() * 80).toFixed(2)}° ${r() > .5 ? 'N' : 'S'}`; };
    const PROC = { S: [10.5, 14.3], C: [22.4, 23.2], P: [27.4, 28.9], G: [33.1, 35.2] };
    const procVals = (k, p, pv, t) => {
      if (k === 'S') return [Math.round(lerp(95, 61, pv)), fmtN(pv * 12096), A.fmtBytes(lerp(D.portrait.bytes, D.shrink.bytes, pv)), `${t < 11.9 ? 1 : t < 12.6 ? 1 : t < 13.3 ? 2 : t < 13.95 ? 3 : 4} / 4`];
      if (k === 'C') return ['1080 × 1350', '4:5', fmtN(pv * 1458000), pv > .9 ? 'SMOOTH' : 'SOFT'];
      if (k === 'P') return [Math.round(lerp(23, 0, pv)), pv < .85 ? scr(t, 3) : 'NONE', (lerp(14.2, 0, pv)).toFixed(1) + ' KB', '0 B'];
      return [`${Math.round(pv * 36)} / 36`, D.video.fps, pv > .3 ? 256 : Math.round(pv * 850), (pv * 2.1).toFixed(1) + ' MB'];
    };

    /* ---------- reveal helpers ---------- */
    const showZ = (Z, el, t, ranges) => {
      let p = 0, z = 0, kind = 'blinds', o = {};
      for (const r of ranges) if (t >= r[0] && t < r[1]) { p = seg(t, r[0], r[0] + (r[2] ?? .5)); z = Math.round(r[0] * 10); kind = r[3] || 'blinds'; o = r[4] || {}; }
      if (!Z.noz && el._z !== z && z) { el._z = z; el.style.zIndex = z; }
      A.reveal(el, kind, p, Object.assign({ W: Z.w, H: Z.h }, o));
      if (p > 0.001 && p < 0.999 && Z.tx) Z.tr = { kind, p, n: o.n || (kind === 'blinds' ? 6 : 6), cx: o.cx ?? Z.w / 2, cy: o.cy ?? Z.h / 2 };
      return p;
    };
    const drawTx = Z => {
      const e = Z.tx; if (!e) return;
      const tr = Z.tr;
      if (!tr) { if (e._on) { e._on = 0; e.style.display = 'none'; } return; }
      e._on = 1; e.style.display = 'block';
      const q2 = E.inOut(tr.p), i = e.firstChild;
      if (tr.kind === 'blinds') {
        const sw = Z.w / tr.n, X = sw * q2;
        sty(e, 'backgroundImage', `linear-gradient(90deg,transparent calc(${X.toFixed(1)}px - 4px),rgba(255,122,26,.6) calc(${X.toFixed(1)}px - 1px),#FFE2C2 ${X.toFixed(1)}px,transparent calc(${X.toFixed(1)}px + .6px))`); sty(e, 'backgroundSize', `${sw.toFixed(1)}px 100%`); sty(i, 'display', 'none');
      } else if (tr.kind === 'diamond') {
        const k = q2 * (Z.w + Z.h) * .6, sd = k * 1.4142; sty(e, 'backgroundImage', 'none'); sty(i, 'display', 'block');
        Object.assign(i.style, { left: (tr.cx - sd / 2).toFixed(1) + 'px', top: (tr.cy - sd / 2).toFixed(1) + 'px', width: sd.toFixed(1) + 'px', height: sd.toFixed(1) + 'px', opacity: (1 - seg(tr.p, .8, 1)).toFixed(2) });
      } else {
        const cw = Z.w / tr.n; sty(i, 'display', 'none'); sty(e, 'backgroundImage', `linear-gradient(rgba(255,122,26,.32) 1px,transparent 1px),linear-gradient(90deg,rgba(255,122,26,.32) 1px,transparent 1px)`); sty(e, 'backgroundSize', `${cw.toFixed(1)}px ${cw.toFixed(1)}px`); sty(e, 'opacity', (Math.sin(tr.p * Math.PI)).toFixed(2));
      }
    };
    /* page-level overlay (app) */
    const txg = A.el('div', 'tx', S, '<i></i>'); txg.style.zIndex = 26;
    const pgZ = { el: S, tx: txg, w: W, h: H, noz: 1 }, ckZ = { el: ckParent, tx: txg, w: W, h: H, noz: 1 };

    /* ---------- FX drawing ---------- */
    const ringE = (cx, cy, r, w, col, a) => { if (a <= 0) return; c.globalAlpha = a; c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.arc(cx, cy, r, 0, Math.PI * 2); c.stroke(); c.globalAlpha = 1; };
    const SHOCK = [[14.3, VC.x, VC.y, OR], [23.2, VC.x, VC.y, AM], [28.9, VC.x, VC.y, MT], [35.2, VC.x, VC.y, OR], [36.9, rkPos.x, rkPos.y, AM]];
    const fxDraw = t => {
      c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H);
      /* boot radar and floor pad */
      if (t < 3.3) {
        const a = 1 - seg(t, 2.3, 3.1), bo = G.boot, s = bo[2], cx = bo[0], cy = bo[1], fy = cy + 127 * s;
        if (a > 0) {
          c.save(); const g = c.createRadialGradient(cx, fy, 0, cx, fy, 120 * s); g.addColorStop(0, `rgba(255,122,26,${.35 * a})`); g.addColorStop(1, 'rgba(255,122,26,0)'); c.fillStyle = g; c.beginPath(); c.ellipse(cx, fy, 120 * s, 22 * s, 0, 0, 7); c.fill();
          for (let i = 0; i < 3; i++) { c.strokeStyle = `rgba(255,122,26,${(.55 - i * .15) * a})`; c.lineWidth = 1.4; c.beginPath(); c.ellipse(cx, fy, (46 + i * 26) * s, (7 + i * 4) * s, 0, 0, 7); c.stroke(); }
          c.lineWidth = 1.2; c.strokeStyle = `rgba(139,148,167,${.35 * a})`;
          for (let i = 0; i < 4; i++) { const R = (120 + i * 38) * s, a0 = t * (i % 2 ? -.5 : .6) + i; c.setLineDash([R * .5, R * .35]); c.lineDashOffset = -a0 * 40; c.beginPath(); c.arc(cx, cy - 6 * s, R, a0, a0 + 5.2); c.stroke(); }
          c.setLineDash([]); c.restore();
        }
      }
      /* scan beam and Bolt cone while a job runs */
      const PW_ = [['S', PR], ['C', FR], ['P', V], ['G', VR]];
      PW_.forEach(([k, R]) => {
        const [a, b] = PROC[k], aa = a - (k === 'S' ? .1 : 0);
        if (t < aa || t > b + .15) return;
        const pr = seg(t, a, b), env = Math.min(seg(t, aa, aa + .25), 1 - seg(t, b - .1, b + .15)), sweeps = k === 'S' ? 3 : k === 'G' ? 2 : k === 'P' ? 2 : 1, u = (pr * sweeps) % 1, y = R.y + R.h * (u < .5 ? u * 2 : 2 - u * 2) * (pr >= 1 ? 0 : 1) + (pr >= 1 ? R.h : 0) * 0;
        c.save(); c.beginPath(); c.rect(V.x, V.y, V.w, V.h); c.clip();
        const gg = c.createLinearGradient(0, y - 34, 0, y); gg.addColorStop(0, 'rgba(255,122,26,0)'); gg.addColorStop(1, `rgba(255,122,26,${.32 * env})`); c.fillStyle = gg; c.fillRect(R.x, y - 34, R.w, 34);
        c.globalAlpha = env; c.fillStyle = '#FFE2C2'; c.shadowColor = OR; c.shadowBlur = 12; c.fillRect(R.x - 6, y - 1, R.w + 12, 2); c.shadowBlur = 0;
        c.strokeStyle = AM; c.lineWidth = 1.5; c.strokeRect(R.x - 4, R.y - 4, R.w + 8, R.h + 8);
        if (k === 'S' || k === 'G') { const rr = A.rng(Math.floor(t * 9) * 7 + 3); for (let i = 0; i < 7; i++) { const bx = R.x + rr() * (R.w - 16), by = R.y + rr() * (R.h - 16); c.fillStyle = `rgba(255,181,71,${.18 * env})`; c.fillRect(bx, by, 14, 14); c.strokeStyle = `rgba(255,181,71,${.8 * env})`; c.strokeRect(bx, by, 14, 14); } }
        c.restore();
        /* cone from the visor to the scan line */
        const vx = vis.x, vy = vis.y; c.globalAlpha = env; const cg = c.createLinearGradient(vx, vy, VC.x, y); cg.addColorStop(0, 'rgba(255,181,71,.0)'); cg.addColorStop(.5, 'rgba(255,181,71,.12)'); cg.addColorStop(1, 'rgba(255,122,26,.0)');
        c.fillStyle = cg; c.beginPath(); c.moveTo(vx, vy); c.lineTo(R.x, y); c.lineTo(R.x + R.w, y); c.closePath(); c.fill(); c.globalAlpha = 1;
      });
      /* shockwave rings */
      SHOCK.forEach(([t0, x, y, col], i) => {
        const d = t - t0; if (d < 0 || d > 1.3) return; const k = E.out(d / 1.3), R = (i === 4 ? 150 : web ? 320 : 230) * k;
        ringE(x, y, R, 3.5 * (1 - k) + .6, col, (1 - k) * .95); ringE(x, y, R * .72, 1.5, '#fff', (1 - k) * .55); ringE(x, y, R * 1.12, 1, col, (1 - k) * .4);
        c.save(); c.strokeStyle = col; c.globalAlpha = (1 - k) * .7; c.lineWidth = 1.5; for (let j = 0; j < 28; j++) { const a = j / 28 * Math.PI * 2 + i, r0 = R * .86, r1 = R * (.86 + (j % 2 ? .05 : .09)); c.beginPath(); c.moveTo(x + Math.cos(a) * r0, y + Math.sin(a) * r0); c.lineTo(x + Math.cos(a) * r1, y + Math.sin(a) * r1); c.stroke(); } c.restore();
      });
      /* shield lock after the place wipe */
      if (t > 28.9 && t < 30.4) { const d = t - 28.9, k = E.out(d / .7), mc = { x: V.x + V.w - 30 - 94, y: V.y + V.h - 34 - 68 }; ringE(mc.x, mc.y, 20 + k * 70, 2, MT, (1 - k) * .8); ringE(mc.x, mc.y, 20 + k * 45, 1, '#fff', (1 - k) * .6); }
      /* quick menu arc and scan sweep */
      const q0 = 17.9, q1 = 19.5;
      if (t > q0 - .05 && t < q1) {
        const R = QR, vx = vis.x, vy = vis.y, a0 = QA[0] * Math.PI / 180, a1 = QA[1] * Math.PI / 180, op = Math.min(seg(t, q0, q0 + .2), 1 - seg(t, q1 - .3, q1)), sw = a0 + (a1 - a0) * E.inOut(seg(t, q0, q0 + .4));
        c.save(); c.globalAlpha = op * .9; c.strokeStyle = 'rgba(255,181,71,.7)'; c.lineWidth = 1.2; c.setLineDash([4, 5]); c.beginPath(); c.arc(vx, vy, R, a0 - .12, sw + .06); c.stroke(); c.setLineDash([]);
        c.strokeStyle = 'rgba(255,122,26,.35)'; c.beginPath(); c.arc(vx, vy, R * .62, a0 - .2, sw); c.stroke();
        const wg = c.createConicGradient ? c.createConicGradient(sw - Math.PI, vx, vy) : null;
        const wedge = (a, w2, al) => { c.globalAlpha = op * al; c.fillStyle = 'rgba(255,122,26,.5)'; c.beginPath(); c.moveTo(vx, vy); c.arc(vx, vy, R + 6, a - w2, a); c.closePath(); c.fill(); };
        for (let i = 0; i < 5; i++) wedge(sw - i * .05, .05, (1 - i / 5) * .25);
        c.globalAlpha = op; c.strokeStyle = '#FFE2C2'; c.lineWidth = 2; c.shadowColor = OR; c.shadowBlur = 10; c.beginPath(); c.moveTo(vx, vy); c.lineTo(vx + Math.cos(sw) * (R + 8), vy + Math.sin(sw) * (R + 8)); c.stroke(); c.restore();
      }
    };

    /* ---------- pointer ---------- */
    const keys = [];
    if (!web) keys.push({ t: 5.4, at: '.rc0', tap: true });
    else keys.push({ t: 5.0, at: { x: 1215, y: 440 }, hold: 0.3 }, { t: 6.7, at: { x: VC.x, y: VC.y }, drag: true, move: 1.3 });
    keys.push(
      { t: 10.0, at: '.po1', tap: true }, { t: 15.6, at: '.dbS .bsave', tap: true },
      { t: 17.85, at: () => ({ x: BP.x, y: BP.y - 6 * BP.s }), tap: true, move: 0.8 }, { t: 19.0, at: '.qc1', tap: true, move: 0.6 }, { t: 20.0, at: '.pr0', tap: true },
      { t: 20.6, at: '.cmi', hold: 0.15, dy: 40 }, { t: 21.7, at: '.cmi', drag: true, move: 1.0, dy: 40 }, { t: 22.3, at: '.cdone', tap: true },
      { t: 25.4, at: '.cta', tap: true }, { t: 27.3, at: '.brm', tap: true },
      { t: 30.8, at: '.cta', tap: true }, { t: 31.4, at: '.tr .hR', hold: 0.1 }, { t: 32.4, at: '.tr .hR', drag: true, move: 0.9 }, { t: 33.0, at: '.bmk', tap: true }, { t: 35.7, at: '.dbG .bsave', tap: true });
    A.pointer(keys);

    /* ---------- element refs ---------- */
    const R = {
      lpPh: LP.querySelector('.ph'), lpWrap: LP.querySelector('.phw'), lpGh: LP.querySelector('.gh'), lpGov: LP.querySelector('.gov'), lpSz: LP.querySelector('.lp-sz'), lpDm: LP.querySelector('.lp-dm'), lpSt: LP.querySelector('.lp-st'),
      cmi: LM.querySelector('.cmi'), cfr: LM.querySelector('.cfr'), lmHint: LM.querySelector('.lm-hint'), lmSt: LM.querySelector('.lm-st'), lmSz: LM.querySelector('.lm-sz'),
      ex: [...LC.querySelectorAll('.tg')], gv: LC.querySelector('.gv'), mc: LC.querySelector('.mc'), pin: LC.querySelector('.pin'), rg1: LC.querySelector('.r1'), rg2: LC.querySelector('.r2'), shd: LC.querySelector('.shd'), mlab: LC.querySelector('.mlab'), lcSt: LC.querySelector('.lc-st'), lcSz: LC.querySelector('.lc-sz'), mm: LC.querySelector('.mm'),
      vid: LB.querySelector('.vid'), vg: LB.querySelector('.vg'), vtc: LB.querySelector('.vtc'), lbSt: LB.querySelector('.lb-st'), lbTc: LB.querySelector('.lb-tc'), vo: LB.querySelector('.vo'),
      tw: PN.trm.querySelector('.tw'), tw2: PN.trm.querySelector('.tw2'), tv: PN.trm.querySelector('.tv'), bmk: PN.trm.querySelector('.bmk'), cdone: PN.ccl.querySelector('.cdone'), brm: PN.plc.querySelector('.brm'),
      stsT: stamp.querySelector('.sts'), tt: toast.querySelector('.tt'), rk2: PN.plc.querySelector('.rk2'), mbn: PN.miss.querySelector('.mbn'), gm: PN.plc.querySelector('.wn'),
    };
    R.pin.style.left = R.rg1.style.left = R.rg2.style.left = '64%'; R.pin.style.top = R.rg1.style.top = R.rg2.style.top = '52%';
    /* the stamp and xp float sit at the viewport centre */
    const placeC = (e, w, h) => { e.style.left = (V.w / 2 - w / 2) + 'px'; e.style.top = (V.h / 2 - h / 2) + 'px'; };
    placeC(stamp, web ? 250 : 220, 54);
    const stSz = [web ? 250 : 220, 54];
    stamp.style.left = (V.w / 2 - 110) + 'px'; stamp.style.top = (V.h / 2 - 27) + 'px'; stamp.style.transformOrigin = '50% 50%';
    xpf.style.top = (V.h / 2 + 46) + 'px';
    const msEls = qa('.ms'), bdEls = qa('.bd');
    const toastW = [[15.8, 16.9, web ? 'Saved to Downloads' : 'Saved to gallery'], [23.3, 24.3, web ? 'Cropped photo saved to Downloads' : 'Cropped photo saved'], [29.0, 30.0, 'Safe copy saved'], [35.8, 36.3, web ? 'GIF saved to Downloads' : 'GIF saved to gallery']];
    const STAMPS = [[14.3, 'SHRINK · +40 XP'], [23.2, 'CROP · +25 XP'], [28.9, 'PLACE · +35 XP'], [35.2, 'GIF · +50 XP']];

    const bootLines = ['> BOLT CONTROL ........ <em>ONLINE</em>', '> ENGINE ............. ON ' + (web ? 'THIS COMPUTER' : 'THIS PHONE'), '> UPLOADS ............ <em>0 BYTES</em>', '> PILOT RANK ......... CADET'];
    const bls = [...pgB.querySelectorAll('.bl p')];
    const stampOne = (t, t0) => {
      const d = t - t0; if (d < 0 || d > 1.6) return 0;
      const sl = E.outBack(seg(d, 0, .28)), out = 1 - seg(d, 1.1, 1.5);
      set(stamp, { s: 2.6 - 1.6 * sl, r: -7 + (1 - sl) * 10, o: seg(d, 0, .08) * out });
      return 1;
    };

    /* ---------- update ---------- */
    return {
      update(t) {
        pzZ.tr = null; vpZ.tr = null; pgZ.tr = null; ckZ.tr = null;
        const xp = Math.round(xpAt(t)), promoted = t > 36.75;
        /* pages */
        showZ({ w: W, h: H, noz: 1 }, pgB, t, [[0, 3.3, .01, 'fade']]);
        if (web) showZ(ckZ, ckParent, t, [[2.3, 99, .9, 'diamond', { cx: G.boot[0], cy: G.boot[1] }]]);
        else {
          showZ(pgZ, pgH, t, [[2.4, 6.5, .75, 'diamond', { cx: G.boot[0], cy: G.boot[1] }]]);
          const c0 = A.center('.rc0');
          showZ(pgZ, pgW, t, [[5.6, 37.1, .7, 'diamond', { cx: c0.x, cy: c0.y }]]);
        }
        showZ(dZ, pgD, t, [[35.95, 99, .7, 'pixels', { n: web ? 10 : 7 }]]);
        if (!web) set(tb, { o: seg(t, 2.5, 2.9) * (1 - seg(t, 36.0, 36.01) * 0) });
        /* boot */
        if (t < 3.3) {
          bootLines.forEach((s, i) => { const tt = 0.9 + i * .42, n = Math.floor(clamp((t - tt) * 38, 0, s.length)); const raw = s.replace(/<\/?em>/g, ''); A.html(bls[i], n <= 0 ? '' : s.includes('<em>') ? (n >= raw.length ? s : raw.slice(0, n)) : raw.slice(0, n)); });
          const bw = pgB.querySelector('.bwm'); set(bw, { y: 14 * (1 - E.out(seg(t, .5, 1.1))), o: seg(t, .5, 1.0) });
        }
        /* XP and rank bits */
        qa('.xb i').forEach(e => { if (!e.closest('.drk')) sty(e, 'width', (promoted ? 0 : clamp(xp / 400, 0, 1) * 100).toFixed(1) + '%'); });
        qa('.rn').forEach(e => txt(e, promoted ? 'PILOT' : 'CADET'));
        qa('.xn').forEach(e => txt(e, promoted ? '400/800 XP' : xp + '/400 XP'));
        qa('.sk').forEach(e => txt(e, t >= 37.2 ? '4' : '3'));
        qa('.tb .hx.rk .hxi, .rkc .hx .hxi').forEach(e => A.html(e, promoted ? chev(2) : chev(1)));
        qa('.tb .hx:not(.rk)').forEach(() => { });
        /* missions and badges */
        const cur = t < 9 ? -1 : t < 17 ? 0 : t < 24 ? 1 : t < 30 ? 2 : t < 36 ? 3 : -1;
        let done = 0; MS.forEach(m => { if (t >= m.t) done++; });
        msEls.forEach(e => { const i = +e.dataset.i; cls(e, 'dn', t >= MS[i].t); cls(e, 'on', cur === i); txt(e.querySelector('.xv'), t >= MS[i].t ? 'DONE' : '+' + MS[i].xp + ' XP'); });
        txt(R.mbn, done + ' / 4 DONE');
        if (!web) { const pm = q('.mp .ph2 .r'); txt(pm, done + ' / 4 DONE'); }
        let nb = 0; BADGES.forEach(b => { if (t >= b[2]) nb++; });
        bdEls.forEach(e => { const i = +e.dataset.i, on = t >= BADGES[i][2]; cls(e, 'on', on); const h = e.querySelector('.hx'); cls(h, 'lk', !on); cls(h, 'mt', on && i > 0); });
        const bgn = q('.bgn'); if (bgn) txt(bgn, nb + ' / 6');

        /* viewport layers */
        showZ(vpZ, LP, t, [[web ? 6.75 : 5.0, 17.6, web ? .65 : .01, web ? 'pixels' : 'fade', { n: 8 }]]);
        if (LD) { showZ(vpZ, LD, t, [[2.9, 7.5, .5, 'fade']]); cls(LD.querySelector('.drop'), 'hot', t > 6.0 && t < 6.9); }
        showZ(vpZ, LM, t, [[16.9, 24.7, .6, 'blinds', { n: 7 }]]);
        showZ(vpZ, LC, t, [[24.0, 30.6, .6, 'diamond']]);
        showZ(vpZ, LB, t, [[29.9, 37.1, .6, 'blinds', { n: 7 }]]);
        cls(vp, 'ok', (t > 14.3 && t < 17) || (t > 23.2 && t < 24.4) || (t > 28.9 && t < 30.4) || t > 35.2);
        /* portrait: scan grid, shrink */
        const sP = seg(t, 10.5, 14.3), sv = A.rush(sP);
        sty(R.lpGov, 'opacity', (Math.min(seg(t, 10.4, 10.7), 1 - seg(t, 14.0, 14.4)) * (.55 + .25 * Math.sin(t * 9))).toFixed(2));
        const phS = 1 - .16 * sv * (1 - (t > 14.3 ? 0 : 0));
        set(R.lpPh, { s: phS }); sty(R.lpPh, 'transformOrigin', '50% 50%'); sty(R.lpPh, 'borderColor', t > 14.3 ? MT : '#3A414E');
        sty(R.lpGh, 'opacity', (seg(t, 10.4, 10.9)).toFixed(2));
        txt(R.lpSz, t < 11 ? D.portrait.size : A.fmtBytes(lerp(D.portrait.bytes, D.shrink.bytes, A.rush(seg(t, 11.0, 14.3)))));
        cls(R.lpSz, 'ok', t > 14.3); txt(R.lpDm, t > 14.3 ? D.shrink.px : D.portrait.dims); cls(R.lpDm, 'ok', t > 14.3);
        txt(R.lpSt, t < 10.4 ? 'LOCKED' : t < 14.3 ? 'SCANNING' : 'DONE'); cls(R.lpSt, 'ok', t > 14.3);
        /* mountain / crop */
        const frq = E.out(seg(t, 20.2, 20.7)), cq = E.inOut(seg(t, 20.7, 21.7)), off = -(web ? 110 : 70) * cq;
        set(R.cmi, { x: off, o: 1 }); set(R.cfr, { s: 1.12 - .12 * frq, o: frq });
        txt(R.lmHint, t < 20.2 ? 'MOUNTAIN · 4:3' : t < 22.4 ? 'REPOSITION' : 'RENDERING'); txt(R.lmSt, t < 20.2 ? 'READY' : t < 22.4 ? 'FRAME LOCKED' : t < 23.2 ? 'RENDER' : 'DONE'); cls(R.lmSt, 'ok', t > 23.2);
        txt(R.lmSz, t > 23.2 ? D.crop.px : '4000 × 3000'); cls(R.lmSz, 'ok', t > 23.2);
        /* city: tags, map, pin, shield */
        const found = seg(t, 25.6, 26.3), rem = seg(t, 27.4, 28.9);
        R.ex.forEach((e, i) => { const k = E.out(seg(t, 25.6 + i * .18, 26.0 + i * .18)); set(e, { x: (1 - k) * -20, o: k * (i === 0 ? 1 : 1 - seg(t, 28.2 + i * .15, 28.6 + i * .15) * .7) }); });
        const ge = R.ex[0]; cls(ge, 'rd', t > 28.9); const gvT = t < 27.4 ? `${D.place.lat} · ${D.place.lon}` : t < 28.9 ? `${scr(t, 5)} · ${scr(t, 9)}` : 'NO GPS DATA'; txt(R.gv, gvT);
        const mcK = E.out(seg(t, 25.4, 25.9)); set(R.mc, { y: (1 - mcK) * 30, o: mcK });
        sty(R.mm, 'filter', `grayscale(${seg(t, 28.0, 28.9)})`);
        const pd = E.outBack(seg(t, 25.9, 26.4)); set(R.pin, { y: -50 * (1 - pd), o: seg(t, 25.9, 26.05) * (1 - seg(t, 28.2, 28.6)), s: 1 });
        const rr = ((t - 26.4) / 1.1) % 1, rOn = t > 26.4 && t < 27.4 ? 1 : 0;
        set(R.rg1, { s: .3 + rr * 1.4, o: rOn * (1 - rr) * .9 }); set(R.rg2, { s: .3 + ((rr + .5) % 1) * 1.4, o: rOn * (1 - ((rr + .5) % 1)) * .9 });
        set(R.shd, { s: E.outBack(seg(t, 28.9, 29.4)), o: t > 28.9 ? 1 : 0 }); set(R.mlab, { o: t < 28.4 ? 1 : 0 });
        txt(R.lcSz, t < 25.6 ? 'EXIF SCAN' : t < 28.9 ? (t < 27.4 ? 'GEOTAG FOUND' : 'WIPING') : 'CLEAN'); cls(R.lcSz, 'ok', t > 28.9); txt(R.lcSt, t < 28.9 ? 'TRACE' : 'SAFE'); cls(R.lcSt, 'ok', t > 28.9);
        txt(R.rk2, t < 28.9 ? 'EXPOSED' : 'SAFE'); R.rk2.style.color = t < 28.9 ? OR : MT;
        sty(R.gm, 'opacity', '1'); const wnEl = PN.plc.querySelector('.wn'); cls(wnEl, 'sf', t > 28.9); A.html(wnEl.querySelector('span'), t > 28.9 ? 'Place removed. Safe to share.' : 'If you share this photo, people can see this place.');
        /* video */
        const made = t >= 35.2, making = t > 33.1 && t < 35.2;
        R.vid.style.backgroundImage = A.frame(made ? Math.floor(t * 12) % 12 : Math.floor(t * 12) % 12);
        cls(R.vid, 'gif', made); R.vg.style.display = made ? '' : 'none'; txt(R.vtc, made ? 'LOOP' : t > 33.1 ? 'RENDER' : 'PLAY 0:0' + (4 + Math.floor(((t * 1.0) % 3))));
        txt(R.lbTc, made ? D.video.from + ' - ' + D.video.to : t < 32.4 ? '0:04 - 0:08' : '0:04 - 0:07'); txt(R.lbSt, made ? 'GIF READY' : making ? 'RENDERING' : 'PLAYING'); cls(R.lbSt, 'ok', made);
        /* stamp, xp float, toast */
        if (t > 14 && !stamp._m) { stamp._m = 1; stamp.style.left = (V.w / 2 - stamp.offsetWidth / 2) + 'px'; stamp.style.top = (V.h / 2 - stamp.offsetHeight / 2 - 6) + 'px'; xpf.style.left = (V.w / 2 - 40) + 'px'; }
        let sOn = 0; STAMPS.forEach(([t0, txs]) => { if (t >= t0 && t < t0 + 1.6) { sOn = 1; txt(R.stsT, txs); stampOne(t, t0); } });
        if (!sOn) set(stamp, { o: 0 });
        let xo = 0, xy = 0; MS.forEach(m => { const d = t - m.t - .35; if (d > 0 && d < 1.4) { xo = Math.min(seg(d, 0, .2), 1 - seg(d, .9, 1.4)); xy = -18 * E.out(d / 1.4); txt(xpf, '+' + m.xp + ' XP'); } });
        set(xpf, { y: xy, o: xo });
        let tw = 0; toastW.forEach(([a, b, s]) => { if (t >= a && t < b) { tw = Math.min(seg(t, a, a + .2), 1 - seg(t, b - .25, b)); txt(R.tt, s); } });
        set(toast, { y: (1 - tw) * -12, o: tw });
        burst.forEach(b => { b.sp.update(t - b.tt); b.cn.update(t - b.tt); }); rankB.forEach((b, i) => b.update(t - [36.9, 37.5][i]));

        /* panels */
        const f0 = web ? 7.0 : 6.3;
        const PW = {
          home: [[2.9, f0 + .6, .5]], facts: [[f0, 9.55, .5]], purp: [[9.0, 10.9, .45]], procS: [[10.4, 14.95, .4]], dbS: [[14.35, 17.7, .55, 'pixels', { n: 6 }]],
          miss: [[17.1, 19.85, .5], [24.4, 26.1, .45], [30.3, 31.55, .45]], pres: [[19.3, 20.85, .4]], ccl: [[20.4, 22.75, .4]], procC: [[22.3, 23.7, .3]], dbC: [[23.2, 24.95, .45, 'pixels', { n: 6 }]],
          plc: [[25.6, 27.85, .45]], procP: [[27.4, 29.55, .3]], dbP: [[29.0, 30.85, .45, 'pixels', { n: 6 }]], trm: [[31.0, 33.45, .45]], procG: [[33.1, 35.75, .3]], dbG: [[35.2, 37.1, .5, 'pixels', { n: 6 }]],
        };
        Object.keys(PW).forEach(k => { if (PN[k]) showZ(pzZ, PN[k], t, PW[k].map(r => [r[0], r[1], r[2], r[3] || 'blinds', r[4] || { n: 5 }])); });
        A.press(PN.purp.querySelector('.po1'), t, 10.0); cls(PN.purp.querySelector('.po1'), 'on', t >= 10.0);
        cls(PN.pres.querySelector('.pr0'), 'on', t >= 20.0); A.press(PN.pres.querySelector('.pr0'), t, 20.0);
        A.press(R.cdone, t, 22.3); A.press(R.brm, t, 27.3); A.press(R.bmk, t, 33.0);
        ['S', 'G'].forEach((k, i) => { const b = PN['db' + k].querySelector('.bsave'), tt = [15.6, 35.7][i], dn = t >= tt + .1; A.press(b, t, tt); cls(b, 'ok', dn); txt(b.querySelector('.bsl'), dn ? 'Saved' : DB[k].btn); });
        /* debrief bars */
        ['S', 'C', 'P', 'G'].forEach(k => { const t0 = MS[['S', 'C', 'P', 'G'].indexOf(k)].t + .25, st = DB[k].b[2]; sty(PN['db' + k].querySelector('.ba'), 'width', (st * E.inOut(seg(t, t0, t0 + .8))).toFixed(1) + '%'); });
        /* process panels */
        ['S', 'C', 'P', 'G'].forEach(k => {
          const [a, b] = PROC[k], pr = seg(t, a, b), pv = A.rush(pr), pn = PN['proc' + k];
          if (t > a - .5 && t < b + 1.0) {
            bars[k].update(pr, t); txt(pn.querySelector('.pp'), Math.round(pv * 100) + '%');
            procVals(k, pr, pv, t).forEach((v, i) => txt(pn.querySelector('.r' + i), String(v)));
            if (!web) renderLog(pn.querySelector('.tm'), LOG.filter(e => e[1] === k), t, k === 'G' ? 2 : 3);
            if (k === 'G') { const n = Math.floor(pv * 36); pn.querySelectorAll('.fc i').forEach((e, i) => { cls(e, 'on', i < n); cls(e, 'nw', i === n && pr < 1); }); }
          }
        });
        if (web) renderLog(wl, LOG, t, 4);
        /* trim window */
        const hq = E.inOut(seg(t, 31.6, 32.4)), Lp = 4 / 12, Rp = (8 - hq) / 12;
        [R.tw, R.tw2].forEach(e => { e.style.left = (Lp * 100) + '%'; e.style.width = ((Rp - Lp) * 100) + '%'; }); txt(R.tv, hq > .5 ? '0:04 to 0:07 · 3.0 s' : '0:04 to 0:08 · 4.0 s');
        /* log (web) */
        if (lgp) set(lgp.lgh, { o: 1 - seg(t, 14.3, 14.7) });
        les.forEach((e, i) => { const k = E.out(seg(t, MS[i].t + .4, MS[i].t + .9)); set(e, { x: (1 - k) * 20, o: k }); });
        /* done */
        if (t > 35.9) {
          const rk = seg(t, 36.9, 37.0), ofs = E.outBack(seg(t, 36.4, 37.0));
          A.html(q('.rbx .hxi'), rk >= 1 ? chev(2) : chev(1)); set(q('.rbx'), { s: .9 + .1 * E.outBack(seg(t, 36.3, 36.9)) + (t > 36.9 && t < 37.5 ? .12 * Math.exp(-6 * (t - 36.9)) * Math.cos(16 * (t - 36.9)) : 0) });
          txt(q('.rtt'), t > 36.9 ? 'PILOT' : 'CADET'); A.html(q('.rtt'), t > 36.9 ? 'CADET <em>to</em> PILOT' : 'CADET <em>to</em> PILOT');
          txt(q('.rl'), t > 36.9 ? 'RANK UP' : 'RANK PROGRESS');
          qa('.rcd').forEach((e, i) => { const k = E.outBack(seg(t, 36.2 + i * .12, 36.7 + i * .12)); set(e, { s: .8 + .2 * k, o: seg(t, 36.2 + i * .12, 36.5 + i * .12) }); });
          set(dBadge, { s: 2.2 - 1.2 * E.outBack(seg(t, 37.5, 37.85)), o: seg(t, 37.5, 37.6) });
          txt(q('.dx0'), '+' + Math.round(150 * E.out(seg(t, 37.7, 38.5)))); txt(q('.dx2'), (t >= 37.2 ? 4 : 3) + ' days');
          const ad = q('.dad'); set(ad, { y: (1 - E.out(seg(t, 38.4, 38.9))) * 12, o: seg(t, 38.4, 38.9) });
          qa('.rst svg').forEach((s, i) => { s.style.opacity = t > 36.6 + i * .12 ? 1 : .25; });
        }
        /* comm */
        const cl = at(COMM, t); A.html(ct, A.typed(t, cl[0], cl[1], 62) + '<u></u>');
        let ca = 0; CTA.forEach(([a, b, s]) => { if (t >= a && t < b) { ca = Math.min(seg(t, a, a + .2), 1 - seg(t, b - .1, b)); txt(ctl, s); } });
        set(cta, { o: ca, s: .96 + .04 * ca }); A.press(cta, t, 25.4); A.press(cta, t, 30.8);
        if (!web) { const dy = t < 5.6 ? 212 : t < 6.45 ? lerp(212, 0, E.inOut(seg(t, 5.6, 6.45))) : t < 35.9 ? 0 : lerp(0, 198, E.inOut(seg(t, 35.9, 36.7))); cmEl.style.transform = `translateY(${dy.toFixed(1)}px)`; }
        set(cmEl, { o: seg(t, 2.6, 3.0) });
        /* file card (web) */
        if (fcard) { const p = A.pointerAt(t), on = t > 5.0 && t < 6.95 ? 1 : 0, land = seg(t, 6.7, 6.95); set(fcard, { x: p.x + 14, y: p.y + 10, s: 1 - .5 * land, o: on * seg(t, 5.0, 5.25) * (1 - land) }); }
        /* quick menu chips */
        const q0 = 17.9;
        qcs.forEach((e, i) => {
          const a = (QA[0] + (QA[1] - QA[0]) * i / 4) * Math.PI / 180, ap = E.outBack(seg(t, q0 + i * .045, q0 + .3 + i * .045)), close = E.inOut(seg(t, i === 1 ? 19.2 : 19.0, 19.45)), k = ap * (1 - close * (i === 1 ? .6 : 1));
          const sel = i === 1 && t > 18.95; cls(e, 'sl', sel);
          set(e, { x: vis.x + Math.cos(a) * QR * k, y: vis.y + Math.sin(a) * QR * k, s: (.2 + .8 * ap) * (sel ? 1 + .25 * Math.sin(seg(t, 18.95, 19.3) * Math.PI) : 1) * (1 - close * .8), o: Math.min(1, ap * 1.5) * (1 - seg(t, i === 1 ? 19.3 : 19.1, 19.45)) * (t > q0 - .05 && t < 19.5 ? 1 : 0) });
        });
        /* bolt, fx, transitions */
        drawBolt(t); fxDraw(t);
        (web ? [pzZ, vpZ, ckZ] : [pzZ, vpZ, pgZ]).forEach(drawTx);
      },
    };
  },
});

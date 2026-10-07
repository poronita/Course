/* Style 12 — Quest Map. Rue the fox explorer walks a painted adventure map; every tool is a level on the trail. */
ISK.register({
  id: 'quest', order: 12, round: 2, name: 'Quest Map',
  tagline: 'Every tool is a level on Rue\'s trail.',
  concept: 'The app is one hand-painted adventure map. Shrink Valley, Crop Ridge, Place Lookout, GIF Falls and Convert Bridge are levels on a winding trail. Rue, a fox explorer, walks the trail while your photo is processed, and the trail lights up behind her. Tap Rue and her compass opens a fan of five trail markers that jump to any level. A chest at the end pays out XP and a new map piece.',
  wins: [
    'One calm map explains the whole app. Levels, stars and a chest give a reason to come back without any pressure.',
    'The wait is the show: Rue walks, fireflies gather, the trail fills. Even a three second job feels like a short journey.',
    'Tapping Rue is the shortcut menu, so power users reach any tool in one tap and new users meet a guide.',
  ],
  risks: [
    'A map is slower than a plain list for people who know what they want. Keep a flat tool list one swipe away.',
    'The painted map and the fox illustration are costly to build, animate and keep consistent on cheap phones.',
  ],
  scores: { simple: 4, fun: 5, wow: 4, pro: 4, game: 5, effort: 5 },
  palette: ['#8CB89A', '#234B43', '#B5E3E0', '#E9D5A3', '#1F2B2A', '#F2B63D', '#E8702A', '#F4F7F2'],
  type: 'Fraunces for headings and map labels, because its soft serif looks like an old atlas. Nunito for every control, number and caption, because it stays clear at 12 to 15 px.',
  motion: 'The camera flies along the trail, Rue walks with a real step cycle, fireflies stream into her compass, and each cleared level lights up with stars while the trail glows forward.',
  notes: {
    intro: 'The map unfolds tile by tile and wakes Rue. She waves, and a pulse on her compass hints that she can be tapped.',
    pick: 'Phone: one tap on a photo. Web: drag the file from the desktop onto Rue\'s camp and she catches it.',
    shrink: 'One tap on "exam or job form" starts the trip. Rue walks to Shrink Valley while the size drops from 4.8 MB to 196 KB, and the node lights with three stars.',
    crop: 'Tap Rue, her compass opens five trail markers, tap Crop and the camera flies to Crop Ridge. Pick 4:5, slide the photo, tap Done.',
    privacy: 'Rue spots the location first and offers it in a bubble. One tap shows Pune, India on a pin, and removing it raises a shield.',
    gif: 'Rue suggests the video, you trim 0:04 to 0:07, and she walks to GIF Falls while 36 frames weave into a looping GIF.',
    done: 'Rue runs to the chest. It opens with coins and petals, the rank rises, a map piece appears and one Ad waits below.',
  },
  statusBar: 'dark',
  extras: [
    ['Character', 'Rue, a fox explorer with a scarf, satchel and brass compass. Ten moods (neutral, happy, wink, surprised, thinking with paw on chin, working, celebrate, sleepy, wave, cheer). Eyes follow the pointer. Tap Rue and the compass opens a fan of 5 trail markers.'],
    ['Game system', 'Levels as map nodes with 1 to 3 stars, XP bar and explorer rank (Scout to Pathfinder), daily quest of 4 levels, a streak, a Privacy Guard badge and a chest that gives XP and a new map piece.'],
    ['Progress bars', 'Four kinds from the library, recoloured to the map: tiles reveal the map, a comet draws the trail, streams merge like rivers, liquid fills a river. Rue also walks the trail while fireflies gather.'],
    ['Screen changes', 'Map tiles unfold at launch, an iris zoom opens a level from its node, a river sweep turns the page, and a diamond unlocks the next level.'],
    ['Finish effect', 'Stars fly up and into the node plate, the trail glows forward, then a chest opens with coins, petals and a rising map piece.'],
    ['Taps to finish', 'Pick 1 · Shrink 2 · Crop 5 · Place 2 · GIF 4 · Save all 1 = 15 taps'],
  ],
  css: `
.st-quest{--sage:#8CB89A;--forest:#234B43;--sky:#B5E3E0;--sand:#E9D5A3;--ink:#1F2B2A;--gold:#F2B63D;--goldd:#C98F1E;--fox:#E8702A;--paper:#F4F7F2;--line:#CAD7D0;--mut:#58706A;--teal:#2FA7A0;background:linear-gradient(180deg,#B5E3E0,#D8EFE9);color:var(--ink);font-family:Nunito,system-ui,sans-serif;font-size:14px;line-height:1.25;font-weight:600}
.st-quest .fr{font-family:Fraunces,Georgia,serif;font-weight:700;letter-spacing:-.01em}
.st-quest .mapw,.st-quest .fxc{position:absolute;inset:0}
.st-quest .mapw{overflow:hidden}.st-quest .fxc{z-index:8;pointer-events:none}
.st-quest .world{position:absolute;left:0;top:0;transform-origin:0 0}.st-quest .world svg{position:absolute;display:block;overflow:visible}
.st-quest .cd{background:var(--paper);border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 20px -10px rgba(31,43,42,.5),inset 0 1px 0 #fff}
.st-quest .ic{display:block;flex:none}
/* level plates */
.st-quest .nd{position:absolute;left:0;top:0;width:0;height:0;z-index:6}
.st-quest .nd .pl{position:absolute;left:-82px;top:16px;width:164px;height:26px;border-radius:13px;display:flex;align-items:center;gap:6px;padding:0 9px 0 3px;font:700 12.5px Fraunces,Georgia,serif;white-space:nowrap;box-shadow:0 5px 12px -6px rgba(31,43,42,.6)}
.st-quest .nd .lk{background:#DCE5E0;border:1px solid #BCCAC3;color:#6B7F78}
.st-quest .nd .op{background:var(--paper);border:1px solid var(--line);color:var(--ink)}
.st-quest .nd .nm{width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font:700 11px Fraunces,serif;flex:none}
.st-quest .nd .lk .nm{background:#B4C4BC;color:#fff}.st-quest .nd .op .nm{background:var(--forest);color:#FFE7A6}.st-quest .nd .op.cl .nm{background:var(--gold);color:var(--ink)}
.st-quest .nd .stz{margin-left:auto;display:flex;gap:2px}
.st-quest .sr{display:block;fill:#C8D5CE}.st-quest .sr.on{fill:#F2B63D;stroke:#C98F1E;stroke-width:1.2}
.st-quest .ring{position:absolute;left:0;top:0;z-index:5;border-radius:50%;border:2px solid var(--gold);pointer-events:none}
.st-quest .bst{position:absolute;left:0;top:0;z-index:14;width:0;height:0}
.st-quest .bst svg{position:absolute;left:-14px;top:-14px;fill:#F2B63D;stroke:#B97A12;stroke-width:1.4;filter:drop-shadow(0 3px 4px rgba(31,43,42,.4))}.st-quest .bst svg.off{fill:#D6E0DA;stroke:#9DB0A7}
.st-quest .xpp{position:absolute;left:0;top:0;z-index:33;padding:3px 9px;border-radius:10px;background:var(--forest);color:#FFE7A6;font:800 12px Nunito;box-shadow:0 4px 10px rgba(31,43,42,.35)}
/* Rue */
.st-quest .rue{position:absolute;left:0;top:0;width:244px;height:240px;z-index:12;pointer-events:none;transform-origin:122px 229px}
.st-quest .rue-svg{display:block;overflow:visible}.st-quest .rue-hit{position:absolute;left:70px;top:50px;width:104px;height:176px}
.st-quest .bub{position:absolute;left:0;top:0;z-index:16;max-width:208px;padding:9px 12px;border-radius:14px;font:700 13.5px/1.25 Nunito;background:var(--paper);border:1px solid var(--line);box-shadow:0 8px 18px -8px rgba(31,43,42,.55)}
.st-quest .bub i{position:absolute;bottom:-6px;width:12px;height:12px;background:var(--paper);border-right:1px solid var(--line);border-bottom:1px solid var(--line);transform:rotate(45deg)}
.st-quest .bub.sg{display:flex;align-items:center;gap:9px;max-width:236px;padding:8px 10px;border-color:var(--gold);box-shadow:0 0 0 2px rgba(242,182,61,.5),0 8px 18px -8px rgba(31,43,42,.55)}
.st-quest .bub.sg .th{width:38px;height:38px;border-radius:9px;background-size:cover;background-position:center;flex:none;box-shadow:inset 0 0 0 2px #fff}
.st-quest .bub.sg b{display:block;font-size:13px}.st-quest .bub.sg .go{display:inline-block;margin-top:3px;padding:2px 10px;border-radius:9px;background:var(--gold);color:var(--ink);font-weight:800;font-size:12px}
.st-quest .bub.sg .tk{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#3C7A6C,#234B43);color:#FFE7A6;flex:none;box-shadow:0 0 0 2px #E0A93D}
/* quick menu */
.st-quest .qm{position:absolute;left:0;top:0;z-index:24;width:0;height:0}
.st-quest .cp{position:absolute;left:-26px;top:-26px;width:52px;height:52px}
.st-quest .qt{position:absolute;left:-2px;top:-2px;width:4px;height:4px}
.st-quest .qt .tk{position:absolute;left:-22px;top:-22px;width:48px;height:48px;border-radius:50%;display:grid;place-items:center;color:#FFE7A6;background:radial-gradient(circle at 35% 28%,#4A8A7A,#234B43 70%);box-shadow:0 0 0 3px #E0A93D,0 0 0 4.5px #8A5A1C,0 8px 14px -4px rgba(31,43,42,.6)}
.st-quest .qt.hot .tk{box-shadow:0 0 0 3px #FFD66B,0 0 0 6px rgba(255,214,107,.55),0 8px 14px -4px rgba(31,43,42,.6)}
.st-quest .qt b{position:absolute;left:-38px;width:80px;top:-46px;text-align:center;font:800 12px Nunito;color:var(--ink);text-shadow:0 0 4px #F4F7F2,0 0 2px #F4F7F2,0 0 8px #F4F7F2}
.st-quest .qt kbd{position:absolute;left:-8px;top:27px;font:800 10px Nunito;padding:1px 5px;border-radius:5px;background:var(--paper);border:1px solid var(--line);border-bottom-width:2px;color:var(--mut)}
.st-quest .hintp{position:absolute;left:0;top:0;z-index:13}
.st-quest .hintp i{position:absolute;border-radius:50%;border:2.5px solid var(--gold);left:-30px;top:-30px;width:60px;height:60px}
.st-quest .hintp b{position:absolute;left:-30px;top:44px;white-space:nowrap;padding:3px 10px;border-radius:10px;background:var(--forest);color:#FFE7A6;font:800 12px Nunito}
/* HUD */
.st-quest .hud{position:absolute;left:12px;right:12px;top:52px;height:40px;display:flex;gap:8px;z-index:30}
.st-quest .chip{display:flex;align-items:center;gap:7px;padding:0 10px;height:40px;border-radius:13px;background:rgba(244,247,242,.94);border:1px solid var(--line);box-shadow:0 6px 14px -8px rgba(31,43,42,.5)}
.st-quest .rk{flex:1;min-width:0}.st-quest .rk .t{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}
.st-quest .rk .t b{font:700 13px/1 Fraunces,serif;display:flex;justify-content:space-between}.st-quest .rk .t b span{font:700 10.5px Nunito;color:var(--mut)}
.st-quest .xpb{height:6px;border-radius:3px;background:#D5E1DA;overflow:hidden}.st-quest .xpb i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#F2B63D,#E8702A)}
.st-quest .pips{display:flex;gap:4px}.st-quest .pips svg{width:15px;height:15px}
.st-quest .fl{font:800 14px Nunito;gap:4px}
.st-quest .toast{position:absolute;left:50%;top:100px;z-index:34;display:flex;align-items:center;gap:8px;padding:7px 14px 7px 8px;border-radius:99px;background:var(--forest);color:#FFF3D2;font:800 13px Nunito;white-space:nowrap;box-shadow:0 10px 20px -8px rgba(31,43,42,.6)}
.st-quest .toast .ti{width:22px;height:22px;border-radius:50%;background:var(--gold);color:var(--ink);display:grid;place-items:center}
.st-quest .banner{position:absolute;left:50%;top:100px;z-index:36;display:flex;align-items:center;gap:10px;padding:8px 18px 8px 10px;border-radius:14px;background:linear-gradient(#2E6155,#234B43);color:#FFF3D2;border:1.5px solid var(--gold);box-shadow:0 12px 24px -10px rgba(31,43,42,.7);white-space:nowrap}
.st-quest .banner b{font:700 16px Fraunces,serif;display:block}.st-quest .banner span{font-size:12px;color:#CFE6DC}
.st-quest .tt{position:absolute;left:50%;top:150px;width:290px;margin-left:-145px;z-index:32;padding:18px 16px 14px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}
.st-quest .tt h1{margin:0;font:700 27px/1 Fraunces,serif;letter-spacing:-.02em;white-space:nowrap}.st-quest .tt p{margin:0;font-size:13px;color:var(--mut)}
.st-quest .tt .lkl{display:flex;gap:6px;align-items:center;font-size:12.5px;color:#2B7A63;font-weight:800;margin-top:2px}
.st-quest .hb{position:absolute;left:12px;right:12px;bottom:26px;z-index:22;padding:12px 14px;display:flex;flex-direction:column;gap:10px}
.st-quest .hb .r1{display:flex;align-items:center;gap:10px}.st-quest .hb .r1 .tx{flex:1;font-size:13px;color:var(--mut)}.st-quest .hb .r1 .tx b{display:block;font:700 15px Fraunces,serif;color:var(--ink)}
/* sheet */
.st-quest .sheet{position:absolute;left:0;right:0;top:360px;bottom:0;z-index:20;background:#F5F8F4;border:1px solid #E2EBE5;border-radius:24px 24px 0 0;box-shadow:0 -12px 28px -14px rgba(31,43,42,.55),inset 0 1px 0 #fff}
.st-quest .shd{position:absolute;left:16px;right:16px;top:12px;height:34px;display:flex;align-items:center;gap:10px}
.st-quest .shd .bd{width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 35% 28%,#3E7A6C,#234B43 70%);color:#FFE7A6;display:grid;place-items:center;font:700 14px Fraunces,serif;box-shadow:0 0 0 2px #fff,0 0 0 3px #C3D3CA;flex:none}
.st-quest .shd b{display:block;font:700 17px/1.05 Fraunces,serif;letter-spacing:-.01em}.st-quest .shd span.sb{font-size:12px;color:var(--mut)}
.st-quest .pgs{position:absolute;left:16px;right:16px;top:56px;bottom:30px}
.st-quest .pg{position:absolute;inset:0;display:flex;flex-direction:column;gap:9px;background:#F5F8F4}
.st-quest .lab{font:800 11.5px Nunito;letter-spacing:.05em;text-transform:uppercase;color:var(--mut);margin:0}
.st-quest .fc{display:flex;align-items:center;gap:10px;padding:7px 10px 7px 7px;border-radius:12px;background:#fff;border:1px solid var(--line)}
.st-quest .fc i{width:38px;height:38px;border-radius:9px;background-size:cover;background-position:center;flex:none;box-shadow:inset 0 0 0 2px #fff}
.st-quest .fc b{display:block;font-size:13.5px}.st-quest .fc span{font-size:12px;color:var(--mut)}
.st-quest .fc .ok{margin-left:auto;width:22px;height:22px;border-radius:50%;background:var(--teal);color:#fff;display:grid;place-items:center}
.st-quest .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-quest .gal .gt{aspect-ratio:1.18;border-radius:12px;background-size:cover;background-position:center 25%;position:relative;box-shadow:inset 0 0 0 2px rgba(255,255,255,.7),0 4px 10px -6px rgba(31,43,42,.5)}
.st-quest .gal .gt.sel{box-shadow:0 0 0 3px var(--gold),0 6px 12px -6px rgba(31,43,42,.6)}
.st-quest .gal .gt em{position:absolute;right:5px;top:5px;width:22px;height:22px;border-radius:50%;background:var(--gold);color:var(--ink);display:grid;place-items:center}
.st-quest .opts{display:flex;flex-direction:column;gap:7px}
.st-quest .opt{height:44px;display:flex;align-items:center;gap:10px;padding:0 12px;border-radius:12px;background:#fff;border:1px solid var(--line)}
.st-quest .opt .oi{width:26px;height:26px;border-radius:8px;background:#E6EFEA;color:var(--forest);display:grid;place-items:center;flex:none}
.st-quest .opt b{font-size:14px}.st-quest .opt span{margin-left:auto;font-size:12px;color:var(--mut)}
.st-quest .opt.on{border-color:var(--gold);background:#FFF7DF;box-shadow:0 0 0 2px var(--gold) inset}.st-quest .opt.on .oi{background:var(--gold);color:var(--ink)}
.st-quest .btn{height:44px;flex:none;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:8px;font:800 15px Nunito;background:linear-gradient(#FFD36E,#F2B63D);color:var(--ink);border:1px solid #D9A02A;box-shadow:0 3px 0 #C98F1E,inset 0 1px 0 #FFE9A6}
.st-quest .btn.sec{background:#fff;border-color:var(--line);box-shadow:0 3px 0 #D3DFD8;color:var(--ink)}
.st-quest .btn.is-pressed{transform:translateY(2px);box-shadow:0 1px 0 #C98F1E}
.st-quest .btn kbd,.st-quest kbd{font:800 10.5px Nunito;padding:1px 6px;border-radius:5px;background:rgba(255,255,255,.7);border:1px solid rgba(31,43,42,.2);border-bottom-width:2px;color:var(--mut)}
.st-quest .row{display:flex;gap:8px}.st-quest .row>*{flex:1}
.st-quest .wk{display:flex;gap:12px;align-items:center}
.st-quest .wk .ph{width:62px;height:78px;border-radius:10px;background-size:cover;background-position:center;flex:none;box-shadow:inset 0 0 0 2px #fff,0 6px 12px -6px rgba(31,43,42,.6)}
.st-quest .bign{font:800 38px/1 Nunito;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.st-quest .bign small{display:block;font:700 12px Nunito;color:var(--mut);letter-spacing:0;margin-top:3px}
.st-quest .barw{border-radius:12px;overflow:hidden;background:#E8F0EB;padding:0;line-height:0}
.st-quest .stg{display:flex;gap:6px}.st-quest .stg span{flex:1;display:flex;align-items:center;justify-content:center;gap:5px;height:30px;border-radius:9px;background:#EAF1ED;color:#7E948D;font:800 12px Nunito}
.st-quest .stg span.on{background:#FFF3CF;color:var(--ink);box-shadow:0 0 0 1.5px var(--gold) inset}.st-quest .stg span.dn{background:#DDEFE8;color:#1F7A62}
.st-quest .meta{display:flex;justify-content:space-between;align-items:center;font-size:12.5px;color:var(--mut)}.st-quest .meta b{color:var(--ink)}
.st-quest .tags{display:flex;gap:6px;flex-wrap:wrap}.st-quest .tags span{padding:4px 10px;border-radius:9px;background:#E3EFE9;font-size:12.5px;font-weight:800;color:#1F5C4E}
.st-quest .cmp{display:grid;grid-template-columns:44px 1fr 56px;gap:7px 8px;align-items:center;font-size:13px}.st-quest .cmp div{height:14px;border-radius:7px;background:#C5D3CB}.st-quest .cmp div.g{background:linear-gradient(90deg,#2FA7A0,#6CC7A0)}.st-quest .cmp b{text-align:right}
.st-quest .big2{font:700 34px/1 Fraunces,serif}.st-quest .was{font-size:13px;color:var(--mut);text-decoration:line-through}
.st-quest .xpc{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:99px;background:var(--forest);color:#FFE7A6;font:800 12.5px Nunito}
.st-quest .presets{display:flex;flex-direction:column;gap:5px}
.st-quest .pr{height:41px;display:flex;align-items:center;gap:10px;padding:0 12px;border-radius:11px;background:#fff;border:1px solid var(--line)}
.st-quest .pr .rt{width:28px;height:28px;display:grid;place-items:center;flex:none}.st-quest .pr .rt i{display:block;border:2px solid var(--forest);border-radius:3px;background:#DCEBE3}
.st-quest .pr b{font-size:13.5px}.st-quest .pr span{margin-left:auto;font-size:12px;color:var(--mut)}.st-quest .pr.on{border-color:var(--gold);background:#FFF7DF;box-shadow:0 0 0 2px var(--gold) inset}
.st-quest .cbox{position:relative;height:238px;border-radius:14px;overflow:hidden;background:#182B28;flex:none}
.st-quest .cimg{position:absolute;left:50%;top:50%;width:420px;height:300px;margin:-150px 0 0 -210px;background-size:cover;background-position:center}
.st-quest .cfr{position:absolute;left:50%;top:50%;width:150px;height:188px;margin:-94px 0 0 -75px;border:2px solid #fff;border-radius:4px;box-shadow:0 0 0 999px rgba(16,30,28,.62);background:linear-gradient(#fff7,#fff7) 33.3% 0/1px 100% no-repeat,linear-gradient(#fff7,#fff7) 66.6% 0/1px 100% no-repeat,linear-gradient(#fff7,#fff7) 0 33.3%/100% 1px no-repeat,linear-gradient(#fff7,#fff7) 0 66.6%/100% 1px no-repeat}
.st-quest .cfr b{position:absolute;left:50%;top:-24px;transform:translateX(-50%);white-space:nowrap;font:800 11.5px Nunito;padding:2px 9px;border-radius:8px;background:var(--gold);color:var(--ink)}
.st-quest .cfr s{position:absolute;width:14px;height:14px;border:3px solid var(--gold);text-decoration:none}
.st-quest .ctag{display:flex;align-items:center;justify-content:center;gap:8px;font-size:12.5px;color:var(--mut)}
.st-quest .ar{position:relative;flex:none}.st-quest .ar>*{position:absolute;left:0;right:0;top:0}
.st-quest .prow{display:flex;gap:11px;align-items:center}
.st-quest .prow .ph{width:60px;height:60px;border-radius:12px;background-size:cover;background-position:center;flex:none;box-shadow:inset 0 0 0 2px #fff,0 6px 12px -6px rgba(31,43,42,.6)}
.st-quest .prow b{display:block;font:700 23px/1.05 Fraunces,serif}.st-quest .prow span{font-size:12px;color:var(--mut)}
.st-quest .mapc{position:relative;height:112px;border-radius:14px;overflow:hidden;flex:none;box-shadow:inset 0 0 0 1px var(--line)}
.st-quest .mapc svg.bg{position:absolute;inset:0;width:100%;height:100%}
.st-quest .mapc .pin{position:absolute;width:30px;height:38px;margin:-38px 0 0 -15px;transform-origin:50% 100%}
.st-quest .mapc .co{position:absolute;left:8px;bottom:7px;font:800 11px Nunito;padding:2px 8px;border-radius:8px;background:rgba(255,255,255,.88)}
.st-quest .mapc .sdome{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(47,167,160,.05) 20%,rgba(47,167,160,.5) 70%,rgba(47,167,160,0) 71%);border:2px solid rgba(255,255,255,.8)}
.st-quest .mapc .sh2{position:absolute;color:#fff;display:grid;place-items:center;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:var(--teal);box-shadow:0 6px 12px rgba(31,43,42,.35)}
.st-quest .wn,.st-quest .okb{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:12px;font-size:13px;line-height:1.25}
.st-quest .wn{background:#FFF4D6;border:1px solid #E8B23A}.st-quest .okb{background:#DCF1E8;border:1px solid #6CC0A0;color:#175C47;font-weight:800}
.st-quest .vid{position:relative;height:158px;border-radius:14px;background-size:cover;background-position:center;flex:none;box-shadow:inset 0 0 0 2px #fff,0 6px 12px -8px rgba(31,43,42,.6);overflow:hidden}
.st-quest .vid .vb{position:absolute;left:8px;top:8px;font:800 11.5px Nunito;padding:2px 9px;border-radius:8px;background:rgba(244,247,242,.92)}
.st-quest .stripc{position:relative;height:50px;flex:none;margin:2px 0}
.st-quest .strip{position:absolute;left:12px;right:12px;top:6px;bottom:6px;display:flex;border-radius:8px;overflow:hidden}.st-quest .strip i{flex:1;background-size:cover;background-position:center}
.st-quest .selw{position:absolute;top:2px;bottom:2px;border:3px solid var(--gold);border-radius:8px;box-shadow:0 0 0 999px rgba(244,247,242,.6);clip-path:inset(-4px -4px -4px -4px)}
.st-quest .hd{position:absolute;top:50%;width:18px;height:46px;margin:-23px 0 0 -9px;border-radius:7px;background:var(--gold);box-shadow:0 3px 8px rgba(31,43,42,.35)}.st-quest .hd::after{content:"";position:absolute;left:7px;top:13px;width:3px;height:20px;border-radius:2px;background:var(--ink);opacity:.55}
.st-quest .secs{display:flex;justify-content:space-between;align-items:center;font:700 15px Fraunces,serif}.st-quest .secs span{font:700 12.5px Nunito;color:var(--mut)}
.st-quest .dn .gr{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.st-quest .dn .rs{display:flex;align-items:center;gap:8px;padding:6px;border-radius:12px;background:#fff;border:1px solid var(--line)}
.st-quest .dn .rs i{width:36px;height:36px;border-radius:9px;background-size:cover;background-position:center;flex:none}
.st-quest .dn .rs b{display:block;font-size:12.5px;line-height:1.1}.st-quest .dn .rs span{font-size:11px;color:var(--mut)}.st-quest .dn .rs .stz{display:flex;gap:1px;margin-top:2px}
.st-quest .dn .rw{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:7px}
.st-quest .dn .rc{padding:7px 9px;border-radius:12px;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column;gap:2px;font-size:11.5px;color:var(--mut)}.st-quest .dn .rc b{font:800 17px Nunito;color:var(--ink);display:flex;align-items:center;gap:5px}
.st-quest .dn .slot{position:relative;height:28px;border-radius:8px;border:1.5px dashed #A8BBB1;overflow:hidden}.st-quest .dn .slot svg{position:absolute;left:50%;top:50%;margin:-12px 0 0 -12px}
.st-quest .rcpt{display:flex;justify-content:space-between;font-size:12.5px;color:var(--mut)}.st-quest .rcpt b{color:var(--ink)}
.st-quest .prm{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:800;color:#1F7A62}
.st-quest .ad{display:flex;gap:10px;align-items:center;padding:7px 10px;border-radius:12px;border:1.5px dashed #B5C5BC;background:rgba(255,255,255,.6)}.st-quest .ad i{width:38px;height:38px;border-radius:9px;background:#E0E8E3;flex:none}.st-quest .ad small{font:800 10.5px Nunito;letter-spacing:.06em;border:1.5px solid var(--mut);color:var(--mut);border-radius:5px;padding:0 5px;margin-right:6px}.st-quest .ad span{font-size:12px;color:var(--mut)}
.st-quest .chest{position:absolute;left:0;top:0;width:0;height:0;z-index:10}.st-quest .chest svg{position:absolute;left:-48px;top:-82px;overflow:visible}
.st-quest .piece{position:absolute;left:0;top:0;z-index:35;width:0;height:0}
.st-quest .sweep{position:absolute;left:0;top:0;bottom:0;z-index:40;pointer-events:none}.st-quest .sweep svg{display:block;width:100%;height:100%}
.st-quest .fcard{position:absolute;left:0;top:0;width:150px;z-index:44;padding:6px;border-radius:12px;display:flex;flex-direction:column;gap:5px}.st-quest .fcard i{height:92px;border-radius:8px;background-size:cover;background-position:center}.st-quest .fcard span{font-size:12px;font-weight:800}
.st-quest .dz{position:absolute;left:0;top:0;z-index:5;border-radius:50%;border:2.5px dashed var(--gold);background:rgba(242,182,61,.14);display:grid;place-items:center;color:#7A5200;font:800 12px Nunito}
.st-quest .bgc{display:flex;align-items:center;gap:8px;padding:6px 9px;border-radius:10px;background:#fff;border:1px solid var(--line);font-size:12.5px}.st-quest .bgc.lk{opacity:.45}
/* mini trail and tips */
.st-quest .tm{position:relative;height:46px;flex:none;margin:2px 14px 0}.st-quest .tm .tbg{position:absolute;left:0;right:0;top:15px;height:5px;border-radius:3px;background:repeating-linear-gradient(90deg,#C3D3CA 0 6px,transparent 6px 10px)}
.st-quest .tm .tlit{position:absolute;left:0;top:14px;height:7px;border-radius:4px;background:linear-gradient(90deg,#F2B63D,#FFD56A);box-shadow:0 0 8px rgba(242,182,61,.8)}
.st-quest .tm .td{position:absolute;top:9px;width:17px;height:17px;margin-left:-8px;border-radius:50%;background:#DCE6E0;border:2px solid #B4C4BC;display:grid;place-items:center}.st-quest .tm .td.on{background:var(--gold);border-color:#C98F1E}
.st-quest .tm .tn{position:absolute;top:30px;width:40px;margin-left:-20px;text-align:center;font:800 9.5px Nunito;color:var(--mut)}
.st-quest .tm .tfox{position:absolute;top:-3px;width:30px;height:30px;margin-left:-15px}
.st-quest .tip{display:flex;gap:9px;align-items:center;padding:8px 11px;border-radius:12px;background:#E7F1EC;font-size:12.5px;color:#2F4F46;line-height:1.3}.st-quest .tip svg{color:#B97A12;flex:none}
/* web */
.st-quest.m-web .topbar{position:absolute;left:0;right:0;top:0;height:50px;z-index:30;display:flex;align-items:center;gap:12px;padding:0 14px;background:rgba(244,247,242,.93);border-bottom:1px solid var(--line)}
.st-quest.m-web .topbar .brand{display:flex;align-items:center;gap:9px;font:700 19px Fraunces,serif;margin-right:auto}
.st-quest.m-web .topbar .chip{height:34px;border-radius:11px;box-shadow:none}
.st-quest.m-web .topbar .rk{flex:none;width:210px;border:0;background:transparent;padding:0}
.st-quest.m-web .ql{position:absolute;left:14px;top:62px;bottom:14px;width:246px;z-index:22;padding:14px;display:flex;flex-direction:column;gap:9px}
.st-quest.m-web .ql h3{margin:0;font:700 19px Fraunces,serif}
.st-quest.m-web .ql .sec{display:flex;justify-content:space-between;align-items:center;font:800 11px Nunito;letter-spacing:.06em;text-transform:uppercase;color:var(--mut);margin-top:3px}
.st-quest.m-web .ql .qr{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:10px;background:#fff;border:1px solid var(--line);font-size:12.5px}
.st-quest.m-web .ql .qr .ck{width:20px;height:20px;border-radius:50%;border:1.5px solid #AFC1B8;display:grid;place-items:center;color:#fff;flex:none}
.st-quest.m-web .ql .qr.on .ck{background:var(--teal);border-color:var(--teal)}.st-quest.m-web .ql .qr .stz{margin-left:auto;display:flex;gap:1px}
.st-quest.m-web .ql .pcs{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}.st-quest.m-web .ql .pcs div{position:relative;height:34px;border-radius:8px;border:1.5px dashed #AFC1B8;overflow:hidden}.st-quest.m-web .ql .pcs div.f{border:0}
.st-quest.m-web .ql .days{display:flex;gap:5px}.st-quest.m-web .ql .days i{flex:1;height:26px;border-radius:8px;background:#E3ECE7;display:grid;place-items:center;font:800 11px Nunito;color:#8CA097;font-style:normal}.st-quest.m-web .ql .days i.on{background:#FFE9B8;color:#8A5A00}
.st-quest.m-web .rp{position:absolute;right:14px;top:62px;bottom:14px;width:350px;z-index:22;display:flex;flex-direction:column;gap:10px}
.st-quest.m-web .tls{display:flex;gap:6px}.st-quest.m-web .tl{flex:1;height:52px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font:800 11px Nunito;position:relative;color:var(--ink)}
.st-quest.m-web .tl kbd{position:absolute;right:4px;top:3px;font-size:9px;padding:0 4px}
.st-quest.m-web .tl.on{background:#FFF3CF;border-color:var(--gold);box-shadow:0 0 0 2px var(--gold) inset}.st-quest.m-web .tl.lk{color:#8CA097;background:#E3ECE7}
.st-quest.m-web .sheet{position:relative;top:auto;bottom:auto;flex:1;border-radius:16px;border:1px solid var(--line)}
.st-quest.m-web .pgs{top:58px;bottom:16px}
.st-quest.m-web .toast,.st-quest.m-web .banner{top:64px}
.st-quest.m-web .tt{top:170px;width:360px;margin-left:-180px;padding:22px 20px 16px;gap:8px}.st-quest.m-web .tt h1{font-size:38px}
.st-quest.m-web .cbox{height:300px}.st-quest.m-web .cimg{width:520px;height:372px;margin:-186px 0 0 -260px}.st-quest.m-web .cfr{width:184px;height:230px;margin:-115px 0 0 -92px}
.st-quest.m-web .vid{height:200px}.st-quest.m-web .mapc{height:150px}
.st-quest.m-web .gal{grid-template-columns:1fr 1fr}.st-quest.m-web .pg{gap:13px}.st-quest.m-web .opt{height:50px}.st-quest.m-web .pr{height:46px}.st-quest.m-web .btn{height:48px}.st-quest.m-web .wk .ph{width:84px;height:106px}.st-quest.m-web .bign{font-size:48px}.st-quest.m-web .tip{padding:11px 13px;font-size:13px}.st-quest.m-web .stg span{height:36px}.st-quest.m-web .tm{height:54px}
.st-quest.m-web .lvl{display:flex;flex-direction:column;gap:6px}.st-quest.m-web .lr{display:flex;align-items:center;gap:10px;height:44px;padding:0 10px;border-radius:12px;background:#fff;border:1px solid var(--line)}
.st-quest.m-web .lr .oi{width:28px;height:28px;border-radius:9px;background:#E6EFEA;color:var(--forest);display:grid;place-items:center}.st-quest.m-web .lr b{font-size:13.5px}.st-quest.m-web .lr span{font-size:11.5px;color:var(--mut)}.st-quest.m-web .lr .stz{margin-left:auto;display:flex;gap:1px}
.st-quest.m-web .lr.nx{border-color:var(--gold);background:#FFF7DF}.st-quest.m-web .lr.lkd{opacity:.55}
.st-quest .drophint{border:2px dashed #B5C5BC;border-radius:14px;padding:16px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;color:var(--mut);font-size:13px;background:rgba(255,255,255,.55)}
.st-quest .drophint b{font:700 17px Fraunces,serif;color:var(--ink)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, E = A.ease, W = A.W, H = A.H;
    const { seg, lerp, clamp, set, txt, cls } = A;
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const uid = web ? 'w' : 'a', PI = Math.PI, TAU = PI * 2;
    const mix = (a, b, k) => (Array.isArray(a) ? a.map((v, i) => v + (b[i] - v) * k) : a + (b - a) * k);
    const attr = (e, k, v) => { if (!e) return; const c = e._a || (e._a = {}); if (c[k] !== v) { c[k] = v; e.setAttribute(k, v); } };
    const offOf = e => { let x = 0, y = 0; while (e && e !== S) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; } return [x, y]; };
    const ctr = e => { const o = offOf(e); return [o[0] + e.offsetWidth / 2, o[1] + e.offsetHeight / 2]; };
    const SHT = 360;

    /* ---------- story constants ---------- */
    const TC = [14.35, 23.7, 29.25, 35.25], STARS = [3, 2, 3, 3], XPG = [40, 30, 30, 50], XP0 = 120, TCHEST = 37.45;
    const NAMES = ['Shrink Valley', 'Crop Ridge', 'Place Lookout', 'GIF Falls', 'Convert Bridge'], NICON = ['shrink', 'crop', 'pin', 'film', 'convert'];
    const TOOLS = [['Shrink', 'shrink', 'S'], ['Crop', 'crop', 'C'], ['Place', 'pin', 'P'], ['GIF', 'film', 'G'], ['Convert', 'convert', 'V']];
    const thumb = { portrait: A.photo('portrait'), mountain: A.photo('mountain'), city: A.photo('city') };

    /* ---------- trail geometry: a Catmull-Rom spline through waypoints ---------- */
    const G = web
      ? { W0: 1280, H0: 756, entry: [230, 716], camp: [400, 650], N: [[570, 592], [440, 472], [612, 398], [772, 458], [806, 290]], chest: [640, 172], wob: 40, ax: 590, rw: 50 }
      : { W0: 640, H0: 1400, entry: [-70, 1318], camp: [170, 1262], N: [[440, 1092], [200, 882], [450, 672], [190, 472], [440, 284]], chest: [250, 118], wob: 62, ax: 195, rw: 46 };
    const M = web ? 300 : 620, RES = 20;
    const spline = (pts, res) => {
      const P = [pts[0], ...pts, pts[pts.length - 1]], out = [];
      for (let i = 1; i < P.length - 2; i++) for (let k = 0; k < res; k++) {
        const u = k / res, u2 = u * u, u3 = u2 * u, p0 = P[i - 1], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2];
        out.push([0, 1].map(c => 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * u + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * u2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * u3)));
      }
      out.push(pts[pts.length - 1]); return out;
    };
    const nodesW = [G.camp, ...G.N, G.chest];
    const ctrl = [G.entry, G.camp], kn = { 0: 1 };
    for (let i = 0; i < nodesW.length - 1; i++) {
      const a = nodesW[i], b = nodesW[i + 1], dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy), s = (i % 2 ? -1 : 1) * G.wob;
      ctrl.push([(a[0] + b[0]) / 2 - dy / l * s, (a[1] + b[1]) / 2 + dx / l * s]); ctrl.push(b); kn[i + 1] = ctrl.length - 1;
    }
    const poly = spline(ctrl, RES), cum = [0];
    for (let i = 1; i < poly.length; i++) cum.push(cum[i - 1] + Math.hypot(poly[i][0] - poly[i - 1][0], poly[i][1] - poly[i - 1][1]));
    const LEN = cum[cum.length - 1], knotD = i => cum[kn[i] * RES];
    const dCamp = knotD(0), dN = j => knotD(j + 1), dChest = knotD(6);
    const ptAt = d => {
      d = clamp(d, 0, LEN); let lo = 0, hi = cum.length - 1;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= d) lo = m; else hi = m; }
      const u = (d - cum[lo]) / Math.max(1e-6, cum[hi] - cum[lo]), a = poly[lo], b = poly[hi];
      return [lerp(a[0], b[0], u), lerp(a[1], b[1], u), Math.atan2(b[1] - a[1], b[0] - a[0])];
    };
    const pathD = pts => pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('');
    const NP = j => nodesW[j + 1]; // world position of node j (0..4)
    const CHEST = [G.chest[0] + 66, G.chest[1] - 8];

    /* ---------- painted map (world space) ---------- */
    const mapSVG = () => {
      const R = A.rng(web ? 31 : 17), rx = NP(4)[0], ry = NP(4)[1];
      const rpoly = spline([[-M - 40, ry + 30], [rx - 380, ry - 36], [rx - 220, ry - 58], [rx - 80, ry - 24], [rx, ry], [rx + 110, ry - 30], [rx + 280, ry + 14], [G.W0 + M + 80, ry + 66]], 14);
      const near = (pl, x, y, r) => { for (let i = 0; i < pl.length; i += 3) if (Math.hypot(pl[i][0] - x, pl[i][1] - y) < r) return true; return false; };
      const nearN = (x, y, r) => nodesW.some(n => Math.hypot(n[0] - x, n[1] - y) < r);
      const free = (x, y, r) => !near(poly, x, y, r) && !near(rpoly, x, y, r + 18) && !nearN(x, y, r + 54);
      const X0 = -M, X1 = G.W0 + M, Y0 = -M, Y1 = G.H0 + M;
      let s = `<svg viewBox="${X0} ${Y0} ${X1 - X0} ${Y1 - Y0}" width="${X1 - X0}" height="${Y1 - Y0}" style="left:${X0}px;top:${Y0}px">
<defs><linearGradient id="ld${uid}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#A3CCAE"/><stop offset=".5" stop-color="#8CB89A"/><stop offset="1" stop-color="#86B394"/></linearGradient>
<radialGradient id="md${uid}"><stop offset="0" stop-color="#B7DCC1" stop-opacity=".85"/><stop offset="1" stop-color="#B7DCC1" stop-opacity="0"/></radialGradient>
<linearGradient id="hl${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9CC8AA"/><stop offset="1" stop-color="#5F9279"/></linearGradient>
<linearGradient id="rv${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#58C2BA"/><stop offset="1" stop-color="#2FA7A0"/></linearGradient>
<linearGradient id="pl${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FDCD3"/><stop offset="1" stop-color="#2FA7A0"/></linearGradient>
<symbol id="pn${uid}" overflow="visible"><ellipse cx="3" cy="2" rx="13" ry="4" fill="#0D2A24" opacity=".25"/><rect x="-2" y="-2" width="4" height="8" fill="#5B3A22"/><path d="M0-36L11-16H5L14 2H-14L-5-16H-11Z" fill="currentColor"/><path d="M0-36L11-16H5L14 2H3Z" fill="#fff" opacity=".12"/></symbol>
<symbol id="rn${uid}" overflow="visible"><ellipse cx="3" cy="2" rx="14" ry="4" fill="#0D2A24" opacity=".22"/><rect x="-2" y="-10" width="4" height="12" fill="#5B3A22"/><circle cy="-20" r="15" fill="currentColor"/><circle cx="-4" cy="-25" r="9" fill="#fff" opacity=".1"/><circle cx="6" cy="-15" r="9" fill="#000" opacity=".08"/></symbol></defs>
<rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="${Y1 - Y0}" fill="url(#ld${uid})"/>`;
      for (let i = 0; i < (web ? 16 : 30); i++) s += `<ellipse cx="${(X0 + R() * (X1 - X0)).toFixed(0)}" cy="${(Y0 + R() * (Y1 - Y0)).toFixed(0)}" rx="${(90 + R() * 130).toFixed(0)}" ry="${(60 + R() * 90).toFixed(0)}" fill="url(#md${uid})"/>`;
      for (let i = 0; i < (web ? 17 : 34); i++) { // soft hills
        const hx = X0 + R() * (X1 - X0), hy = Y0 + R() * (Y1 - Y0), hr = 56 + R() * 84;
        if (!free(hx, hy, hr + 20)) continue;
        s += `<ellipse cx="${hx.toFixed(0)}" cy="${(hy + hr * .32).toFixed(0)}" rx="${(hr * 1.05).toFixed(0)}" ry="${(hr * .22).toFixed(0)}" fill="#1F4A3C" opacity=".18"/><path d="M${(hx - hr).toFixed(0)} ${(hy + hr * .3).toFixed(0)}Q${(hx - hr * .55).toFixed(0)} ${(hy - hr * .62).toFixed(0)} ${hx.toFixed(0)} ${(hy - hr * .6).toFixed(0)}T${(hx + hr).toFixed(0)} ${(hy + hr * .3).toFixed(0)}Z" fill="url(#hl${uid})"/><path d="M${(hx - hr * .7).toFixed(0)} ${(hy - hr * .05).toFixed(0)}Q${(hx - hr * .4).toFixed(0)} ${(hy - hr * .5).toFixed(0)} ${(hx - hr * .02).toFixed(0)} ${(hy - hr * .52).toFixed(0)}" stroke="#C4E4CC" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".5"/>`;
      }
      // river, banks, pond
      const rd = pathD(rpoly), cp = [G.camp[0] + (web ? 110 : 80), G.camp[1] + (web ? 70 : 70)];
      s += `<path d="${rd}" stroke="#E9D5A3" stroke-width="${G.rw + 20}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${rd}" stroke="#D3BF8A" stroke-width="${G.rw + 20}" fill="none" opacity=".35" transform="translate(0 3)"/><path d="${rd}" stroke="url(#rv${uid})" stroke-width="${G.rw}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${rd}" stroke="#A8E8E0" stroke-width="${G.rw * .5}" fill="none" opacity=".4" stroke-linecap="round"/><path class="flow" d="${rd}" stroke="#fff" stroke-width="2.4" fill="none" stroke-dasharray="14 34" stroke-linecap="round" opacity=".6"/>`;
      s += `<ellipse cx="${cp[0]}" cy="${cp[1]}" rx="${web ? 92 : 84}" ry="${web ? 38 : 40}" fill="#E9D5A3"/><ellipse cx="${cp[0]}" cy="${cp[1]}" rx="${web ? 80 : 72}" ry="${web ? 30 : 32}" fill="url(#pl${uid})"/><ellipse cx="${cp[0] - 18}" cy="${cp[1] - 8}" rx="26" ry="7" fill="#fff" opacity=".28"/><circle cx="${cp[0] + 30}" cy="${cp[1] + 4}" r="8" fill="#5FAE72"/><circle cx="${cp[0] + 30}" cy="${cp[1] + 4}" r="3" fill="#F2B63D"/>`;
      // trail
      const td = pathD(poly);
      s += `<path d="${td}" stroke="#4A3A1C" stroke-width="22" fill="none" opacity=".16" transform="translate(1 4)" stroke-linecap="round" stroke-linejoin="round"/><path d="${td}" stroke="#C4AC6E" stroke-width="20" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${td}" stroke="#EDDDAF" stroke-width="15" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${td}" stroke="#C9B278" stroke-width="1.8" fill="none" stroke-dasharray="5 8" opacity=".8" stroke-linecap="round"/>`;
      s += `<path class="lit1" d="${td}" stroke="#F2B63D" stroke-width="30" fill="none" opacity="0" stroke-linecap="round" stroke-linejoin="round"/><path class="lit2" d="${td}" stroke="#FFD56A" stroke-width="9" fill="none" opacity="0" stroke-linecap="round" stroke-linejoin="round"/><path class="lit3" d="${td}" stroke="#FFF3C4" stroke-width="3" fill="none" opacity="0" stroke-linecap="round" stroke-linejoin="round"/><path class="pls" d="${td}" stroke="#FFF3C4" stroke-width="7" fill="none" opacity="0" stroke-linecap="round" stroke-linejoin="round"/>`;
      // pads and landmarks
      const pad = (p, rx2 = 46, ry2 = 19) => `<ellipse cx="${p[0]}" cy="${p[1] + 5}" rx="${rx2}" ry="${ry2}" fill="#1F2B2A" opacity=".2"/><ellipse cx="${p[0]}" cy="${p[1]}" rx="${rx2}" ry="${ry2}" fill="#F1E6C2" stroke="#BFA96C" stroke-width="2"/><ellipse cx="${p[0]}" cy="${p[1]}" rx="${rx2 - 10}" ry="${ry2 - 5}" fill="none" stroke="#BFA96C" stroke-width="1.4" stroke-dasharray="3 5" opacity=".7"/>`;
      const lm = (p, inner) => `<g transform="translate(${p[0]} ${p[1]})">${inner}</g>`;
      const cliff = (sg) => `<g transform="scale(${sg} 1)"><path d="M-30 18L-44-30L-30-50L-20-84L-2-34L2 18Z" fill="#4F7D68"/><path d="M-20-84L-2-34L2 18L-12 18Z" fill="#3B6654"/><path d="M-44-30L-30-50L-26-8L-30 18Z" fill="#6B9C84"/></g>`;
      const a4 = ptAt(dN(4))[2] * 180 / PI;
      s += pad(G.camp) + lm(G.camp, `<path d="M-100 12L-62-52L-24 12Z" fill="#2FA7A0"/><path d="M-62-52L-24 12H-44Z" fill="#23827D"/><path d="M-72 12L-62-16L-52 12Z" fill="#1F4F4A"/><path d="M-62-52v-14l16 5-16 5" fill="#F2B63D"/><path d="M-62-66v14" stroke="#5B3A22" stroke-width="2"/><g transform="translate(78 4)"><ellipse cy="6" rx="16" ry="5" fill="#3C2A18" opacity=".4"/><path d="M-12 4L12-2M-12-2L12 4" stroke="#6E4325" stroke-width="5" stroke-linecap="round"/><path class="fire" d="M0 2C-9-6-4-14 0-24 4-14 9-6 0 2Z" fill="#F2B63D"/><path class="fire2" d="M0 2C-4-3-2-8 0-13 2-8 4-3 0 2Z" fill="#E8702A"/></g>`);
      s += pad(NP(0)) + lm(NP(0), `<g transform="translate(-88 -6)">${cliff(1)}</g><g transform="translate(88 -6)">${cliff(-1)}</g><path d="M-70 6l11-6v12zM70 6l-11-6v12z" fill="#F2B63D"/>`);
      s += pad(NP(1)) + lm(NP(1), `<path d="M-150-14L-112-70L-90-44L-60-96L-18-34L8-54L40-6Z" fill="#5E907A"/><path d="M-60-96L-18-34L-34-24L-52-52Z" fill="#3F6C59"/><path d="M-60-96l-10 18 8-4 6 6 6-8z" fill="#fff" opacity=".85"/><path d="M-112-70l-8 14 8-3 4 5 4-6z" fill="#fff" opacity=".8"/><g stroke="#F2B63D" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-66-18v-12h14M66-18v-12h-14M-66 22v10h14M66 22v10h-14"/></g>`);
      s += pad(NP(2)) + lm(NP(2), `<g transform="translate(62 -34)"><ellipse cy="38" rx="22" ry="6" fill="#1F2B2A" opacity=".2"/><path d="M-16 38L-10-6M16 38L10-6M-13 20H13M-14 8H14" stroke="#6E4325" stroke-width="4" stroke-linecap="round"/><rect x="-18" y="-12" width="36" height="7" rx="2" fill="#8A5A34"/><rect x="-13" y="-34" width="26" height="22" fill="#B27A47"/><rect x="-7" y="-28" width="14" height="10" fill="#B5E3E0" stroke="#5B3A22" stroke-width="1.5"/><path d="M-20-34L0-54L20-34Z" fill="#2FA7A0"/><path d="M0-54v-14l14 5-14 5" fill="#F2B63D"/><path d="M0-68v16" stroke="#5B3A22" stroke-width="2"/></g>`);
      s += pad(NP(3)) + lm(NP(3), `<g transform="translate(${web ? 78 : -78} -4)"><path d="M-44 8L-52-48L-6-60L6 8Z" fill="#4F7D68"/><path d="M-6-60L6 8H-8Z" fill="#3B6654"/><g class="fall" stroke="#EAF8F6" stroke-width="7" stroke-linecap="round" stroke-dasharray="16 10" opacity=".92"><path d="M-40-52V6M-26-54V6M-12-54V6"/></g><ellipse cx="-24" cy="14" rx="46" ry="14" fill="#E9D5A3"/><ellipse cx="-24" cy="14" rx="40" ry="11" fill="url(#pl${uid})"/><ellipse cx="-24" cy="12" rx="30" ry="6" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/></g>`);
      s += `<g transform="translate(${NP(4)[0]} ${NP(4)[1]}) rotate(${a4.toFixed(1)})"><rect x="-64" y="-18" width="128" height="36" rx="5" fill="#000" opacity=".16" transform="translate(2 5)"/><rect x="-66" y="-17" width="132" height="34" rx="4" fill="#B88A57"/>${Array.from({ length: 11 }, (_, i) => `<path d="M${-60 + i * 12} -17V17" stroke="#8A6236" stroke-width="1.4"/>`).join('')}<path d="M-66-17H66M-66 17H66" stroke="#6E4325" stroke-width="4"/><path d="M-58-17v-9M58-17v-9M-58 17v9M58 17v9" stroke="#6E4325" stroke-width="4" stroke-linecap="round"/><path d="M-42 0h-0M-34-4l10 4-10 4M34-4l-10 4 10 4" stroke="#F2B63D" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      s += pad(G.chest, 44, 17) + `<path d="M${G.chest[0] - 80} ${G.chest[1] + 10}q10-18 20 0M${G.chest[0] + 56} ${G.chest[1] + 16}q10-18 20 0" stroke="#5B8F6F" stroke-width="3" fill="none"/>`;
      // flowers, labels, trees
      for (let i = 0; i < (web ? 110 : 200); i++) { const x = X0 + R() * (X1 - X0), y = Y0 + R() * (Y1 - Y0); if (free(x, y, 24)) s += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(1.6 + R() * 1.6).toFixed(1)}" fill="${['#F4F7F2', '#F2B63D', '#F08A5C', '#fff'][i % 4]}" opacity=".85"/>`; }
      const lab = (x, y, t2, rot) => `<text x="${x}" y="${y}" transform="rotate(${rot} ${x} ${y})" font-family="Fraunces,Georgia,serif" font-style="italic" font-weight="600" font-size="${web ? 22 : 26}" fill="#234B43" opacity=".42">${t2}</text>`;
      s += lab(web ? 960 : 330, web ? 640 : 1160, 'Whispering Pines', -6) + lab(web ? 1040 : 430, ry + 52, 'Teal River', 4) + lab(web ? 120 : 20, web ? 330 : 560, 'Sunlit Meadow', -4);
      const tr = [];
      for (let n = 0; n < (web ? 800 : 1700) && tr.length < (web ? 320 : 560); n++) {
        const cl = R() < 0.55; let x, y;
        if (cl) { const c = [[(web ? 60 : 40), 120], [(web ? 1190 : 590), 220], [(web ? 1180 : 80), (web ? 640 : 700)], [(web ? 120 : 560), (web ? 640 : 1100)], [(web ? 700 : 330), (web ? 80 : 20)], [(web ? 1000 : 600), (web ? 440 : 480)]][n % 6]; x = c[0] + (R() - .5) * 280; y = c[1] + (R() - .5) * 240; }
        else { x = X0 + R() * (X1 - X0); y = Y0 + R() * (Y1 - Y0); }
        if (x < X0 || x > X1 || y < Y0 || y > Y1 || !free(x, y, 36)) continue;
        tr.push([x, y, R() < .62 ? 0 : 1, .7 + R() * .6, R()]);
      }
      tr.sort((a, b) => a[1] - b[1]);
      const pc = ['#234B43', '#2A5849', '#1F4139', '#2F6350'], rc = ['#3F7A63', '#4B8A6C', '#34705B', '#5A9A74'];
      tr.forEach(t2 => { s += `<use href="#${t2[2] ? 'rn' : 'pn'}${uid}" transform="translate(${t2[0].toFixed(0)} ${t2[1].toFixed(0)}) scale(${t2[3].toFixed(2)})" color="${(t2[2] ? rc : pc)[Math.floor(t2[4] * 4)]}"/>`; });
      return s + '</svg>';
    };

    /* ---------- Rue: the fox explorer ---------- */
    const HEAD = 'M110 44C92 44 74 52 66 68C63 75 61 80 60 85L46 92L58 98L50 108L64 106C70 116 86 122 110 122C134 122 150 116 156 106L170 108L162 98L174 92L160 85C159 80 157 75 154 68C146 52 128 44 110 44Z';
    const TAIL = 'M144 212C176 220 210 194 205 150C202 124 188 106 168 100C172 118 166 134 156 146C148 156 140 168 136 180Z';
    const earPaths = `<path d="M66 66C56 46 54 26 60 6C80 14 98 30 102 52Z" fill="url(#fb${uid})"/><path d="M71 58C65 44 64 30 66 18C80 26 90 38 94 52Z" fill="#FFF0DA"/><path d="M70 56C66 44 66 32 68 22C74 28 80 34 84 42Z" fill="#F4B58E" opacity=".55"/><path d="M60 6C68 9 76 13 84 20L72 28C68 20 63 13 60 6Z" fill="#3A2420"/>`;
    const armSVG = (cl, m, sx) => `<g class="${cl}" transform="translate(${sx} 134) scale(${m} 1)"><rect x="-7.2" y="-5" width="14.4" height="35" rx="7" fill="url(#fb${uid})"/><g class="${cl}_f" transform="translate(0 27)"><rect x="-6.4" y="-4" width="12.8" height="19" rx="6" fill="#3A2420"/><ellipse cy="15" rx="7.8" ry="7" fill="#3A2420"/><path d="M-2.5 19v-4M2.5 19v-4" stroke="#6A4A40" stroke-width="1" stroke-linecap="round"/></g></g>`;
    const eyeSVG = (cx, k) => `<g transform="translate(${cx} 80)"><g class="r-eg${k}"><g clip-path="url(#ec${uid})"><ellipse rx="12" ry="14.5" fill="url(#ey${uid})"/><g class="r-pu${k}"><ellipse rx="6.2" ry="8.6" fill="#2A1812"/><circle cx="-3.4" cy="-4.4" r="3.3" fill="#fff"/><circle cx="3.6" cy="4.6" r="1.6" fill="#fff" opacity=".85"/></g><path d="M-10 9Q0 16 10 9" stroke="#FFE7A0" stroke-width="2" fill="none" opacity=".5"/><rect class="r-lid${k}" x="-16" y="-20" width="32" height="0" fill="#EF7F37"/><rect class="r-bl${k}" x="-16" y="16" width="32" height="0" fill="#F3A25C"/></g><ellipse rx="12" ry="14.5" fill="none" stroke="#B5651A" stroke-width="1.1"/></g><path class="r-arc${k}" d="M-11 4Q0-11 11 4" stroke="#2A1812" stroke-width="3.6" fill="none" stroke-linecap="round" opacity="0"/><path d="M${k === 'L' ? '-12-4L-18-9' : '12-4L18-9'}" stroke="#3A2420" stroke-width="2.2" stroke-linecap="round" fill="none"/></g>`;
    const rueSVG = `<svg class="rue-svg" viewBox="-12 0 244 240" width="244" height="240"><defs>
<linearGradient id="fu${uid}" gradientUnits="userSpaceOnUse" x1="110" y1="44" x2="110" y2="124"><stop offset="0" stop-color="#F68B3E"/><stop offset="1" stop-color="#E26B28"/></linearGradient>
<linearGradient id="fb${uid}" gradientUnits="userSpaceOnUse" x1="60" y1="0" x2="160" y2="0"><stop offset="0" stop-color="#C95A1C"/><stop offset=".3" stop-color="#EE7A31"/><stop offset=".7" stop-color="#F08238"/><stop offset="1" stop-color="#C45619"/></linearGradient>
<linearGradient id="tl${uid}" gradientUnits="userSpaceOnUse" x1="146" y1="214" x2="180" y2="108"><stop offset="0" stop-color="#C55819"/><stop offset=".55" stop-color="#EF7D33"/><stop offset="1" stop-color="#F7A055"/></linearGradient>
<linearGradient id="cr${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6E2"/><stop offset="1" stop-color="#F0DBB6"/></linearGradient>
<linearGradient id="sc${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#52CBC1"/><stop offset="1" stop-color="#1F8A84"/></linearGradient>
<radialGradient id="ey${uid}" cx=".5" cy=".3" r=".8"><stop offset="0" stop-color="#FFE28E"/><stop offset=".5" stop-color="#F6B53F"/><stop offset="1" stop-color="#C46F17"/></radialGradient>
<linearGradient id="lt${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A56B3E"/><stop offset="1" stop-color="#6E4325"/></linearGradient>
<linearGradient id="br${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE29A"/><stop offset=".5" stop-color="#E0A93D"/><stop offset="1" stop-color="#A8751F"/></linearGradient>
<clipPath id="hc${uid}"><path d="${HEAD}"/></clipPath><clipPath id="tc${uid}"><path d="${TAIL}"/></clipPath><clipPath id="ec${uid}"><ellipse rx="12" ry="14.5"/></clipPath></defs>
<ellipse class="r-sh" cx="110" cy="229" rx="50" ry="7.5" fill="#1F2B2A" opacity=".24"/>
<g class="r-body">
<g class="r-tail"><path d="${TAIL}" fill="url(#tl${uid})"/><g clip-path="url(#tc${uid})"><path d="M150 90H215V128L203 121L197 133L189 121L181 131L173 119L165 129L156 115Z" fill="url(#cr${uid})"/><path d="M158 150C170 140 182 124 180 104" stroke="#FFC48A" stroke-width="3" fill="none" opacity=".4" stroke-linecap="round"/></g></g>
<g class="r-legL" transform="translate(94 200)"><rect x="-8" y="-6" width="16" height="18" rx="8" fill="url(#fb${uid})"/><rect x="-6.8" y="6" width="13.6" height="17" rx="6" fill="#3A2420"/><ellipse cy="23" rx="10.5" ry="6" fill="#3A2420"/></g>
<g class="r-legR" transform="translate(126 200)"><rect x="-8" y="-6" width="16" height="18" rx="8" fill="url(#fb${uid})"/><rect x="-6.8" y="6" width="13.6" height="17" rx="6" fill="#3A2420"/><ellipse cy="23" rx="10.5" ry="6" fill="#3A2420"/></g>
<path d="M74 126C67 150 63 176 67 198C71 211 88 214 110 214C132 214 149 211 153 198C157 176 153 150 146 126Z" fill="url(#fb${uid})"/>
<path d="M95 124C92 150 96 178 110 206C124 178 128 150 125 124Z" fill="url(#cr${uid})"/><path d="M70 150C68 170 70 190 74 204" stroke="#FFB070" stroke-width="2.4" fill="none" opacity=".35" stroke-linecap="round"/>
<path d="M142 124L52 174" stroke="url(#lt${uid})" stroke-width="8.5" stroke-linecap="round"/><path d="M142 123L52 173" stroke="#D9AE78" stroke-width="1.2" stroke-dasharray="3 2.6" fill="none"/>
<g><rect x="39" y="168" width="39" height="43" rx="9" fill="url(#lt${uid})"/><path d="M39 177Q39 168 48 168H69Q78 168 78 177V189Q58.5 198 39 189Z" fill="#7A4A29"/><path d="M42 188Q58.5 196 75 188" stroke="#D9B07A" stroke-width="1.2" stroke-dasharray="3 2.4" fill="none"/><rect x="55" y="186" width="8" height="8" rx="2" fill="url(#br${uid})"/>
<g class="r-cp" transform="translate(59 202)"><circle r="10" fill="url(#br${uid})"/><circle r="7.4" fill="#FFF6E2" stroke="#8A5A1C" stroke-width=".8"/><g class="r-nd"><path d="M0-6L2.2 0H-2.2Z" fill="#D8412F"/><path d="M0 6L2.2 0H-2.2Z" fill="#2B4A55"/></g><circle r="1.3" fill="#8A5A1C"/><path d="M-3.4-3.6L-5-5" stroke="#fff" stroke-width="1.2" opacity=".7"/></g></g>
${armSVG('r-aL', -1, 72)}${armSVG('r-aR', 1, 148)}
<path d="M70 120C82 134 138 134 150 120L156 136C140 152 80 152 64 136Z" fill="url(#sc${uid})"/><path d="M74 124C90 137 130 137 146 124" stroke="#9AEDE4" stroke-width="2.2" fill="none" opacity=".6" stroke-linecap="round"/><path d="M82 143Q110 152 138 143" stroke="#176F6A" stroke-width="1.6" fill="none" opacity=".6"/>
<path class="r-sf" d="" fill="url(#sc${uid})"/><path class="r-sf2" d="" fill="#FFF0D0"/><path class="r-sf3" d="" fill="#FFF0D0"/>
<ellipse cx="136" cy="142" rx="10" ry="8.5" fill="#1F8A84"/><path d="M129 140Q136 136 143 140" stroke="#7FE0D6" stroke-width="2" fill="none" opacity=".7" stroke-linecap="round"/>
<g class="r-head">
<g class="r-eL"><g>${earPaths}</g></g><g class="r-eR"><g transform="translate(220 0) scale(-1 1)">${earPaths}</g></g>
<path d="${HEAD}" fill="url(#fu${uid})"/>
<g clip-path="url(#hc${uid})"><path d="M40 98C62 90 82 98 94 106C100 98 104 92 110 90C116 92 120 98 126 106C138 98 158 90 180 98V135H40Z" fill="url(#cr${uid})"/><path d="M92 100C100 94 104 90 110 88" stroke="#F0DBB6" stroke-width="2" fill="none" opacity=".6"/><ellipse cx="86" cy="52" rx="26" ry="9" fill="#FFD7A8" opacity=".3" transform="rotate(-14 86 52)"/></g>
<path d="${HEAD}" fill="none" stroke="#B94E15" stroke-width="1.2" opacity=".5"/>
<ellipse class="r-bs" cx="72" cy="97" rx="9" ry="5.5" fill="#F28B68" opacity=".3"/><ellipse class="r-bs" cx="148" cy="97" rx="9" ry="5.5" fill="#F28B68" opacity=".3"/>
${eyeSVG(88, 'L')}${eyeSVG(132, 'R')}
<g class="r-brL"><path d="M-9 0Q0-3.4 9 0" stroke="#A6481A" stroke-width="3.6" stroke-linecap="round" fill="none"/></g><g class="r-brR"><path d="M-9 0Q0-3.4 9 0" stroke="#A6481A" stroke-width="3.6" stroke-linecap="round" fill="none"/></g>
<path d="M103 91Q110 87 117 91Q116 98 110 101Q104 98 103 91Z" fill="#2B1A17"/><ellipse cx="108" cy="90.4" rx="3" ry="1.4" fill="#fff" opacity=".45"/>
<g class="r-mo r-m-smile"><path d="M110 101V104M98 103Q104 111 110 104Q116 111 122 103" stroke="#3A2420" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
<g class="r-mo r-m-grin"><path d="M99 103Q110 106 121 103Q119 117 110 117Q101 117 99 103Z" fill="#3A2420"/><path d="M104 112Q110 108 116 112Q114 117 110 117Q106 117 104 112Z" fill="#F08C8C"/></g>
<g class="r-mo r-m-big"><path d="M96 102Q110 107 124 102Q123 123 110 123Q97 123 96 102Z" fill="#3A2420"/><path d="M103 116Q110 110 117 116Q115 123 110 123Q105 123 103 116Z" fill="#F08C8C"/></g>
<g class="r-mo r-m-o"><ellipse cx="110" cy="110" rx="5.5" ry="7" fill="#3A2420"/><ellipse cx="110" cy="113" rx="3" ry="2.6" fill="#F08C8C"/></g>
<g class="r-mo r-m-flat"><path d="M110 101V105M102 108Q110 110 118 108" stroke="#3A2420" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
<g class="r-mo r-m-smirk"><path d="M110 101V105M101 109Q108 111 114 107Q118 104 121 102" stroke="#3A2420" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
<g class="r-mo r-m-effort"><path d="M98 104H122Q122 114 110 114Q98 114 98 104Z" fill="#3A2420"/><path d="M100.5 105.2H119.5Q118 109.6 110 109.6Q102 109.6 100.5 105.2Z" fill="#FFF6E2"/></g>
<g class="r-z" opacity="0" font-family="Fraunces,serif" font-style="italic" font-weight="700" fill="#2B7A8A"><text x="150" y="40" font-size="16" class="z1">z</text><text x="162" y="26" font-size="13" class="z2">z</text><text x="171" y="14" font-size="10" class="z3">z</text></g>
</g>
<g class="r-aRfG" opacity="0">${armSVG('r-aRf', 1, 148)}</g>
</g></svg>`;

    /* mood table: every pose is a set of numbers, blended over 0.25 s */
    const MZ = {
      neutral: { lid: .04, bl: 0, aL: 0, aR: 0, es: 1, pu: 1, brL: [0, 0], brR: [0, 0], mo: 'smile', eL: 0, eR: 0, tilt: 0, al: [-6, 5], ar: [-6, 5], fr: 0, bs: .28, lx: 0, ly: 0, z: 0, wv: 0, pump: 0, hop: 0, tw: 1 },
      happy: { lid: 0, bl: .3, aL: 0, aR: 0, es: 1, pu: 1.05, brL: [-2, -4], brR: [-2, -4], mo: 'grin', eL: 4, eR: 4, tilt: 3, al: [-10, 6], ar: [-10, 6], fr: 0, bs: .5, lx: 0, ly: 0, z: 0, wv: 0, pump: 0, hop: .2, tw: 1.7 },
      wink: { lid: 0, bl: .22, aL: 0, aR: 1, es: 1, pu: 1, brL: [-4, -6], brR: [3, 6], mo: 'grin', eL: 6, eR: -2, tilt: -5, al: [-8, 5], ar: [-8, 5], fr: 0, bs: .55, lx: 0, ly: 0, z: 0, wv: 0, pump: 0, hop: 0, tw: 1.6 },
      surprised: { lid: -.15, bl: 0, aL: 0, aR: 0, es: 1.14, pu: .6, brL: [-7, -9], brR: [-7, -9], mo: 'o', eL: 12, eR: 12, tilt: 0, al: [-32, 12], ar: [-32, 12], fr: 0, bs: .2, lx: 0, ly: 0, z: 0, wv: 0, pump: 0, hop: .6, tw: 2 },
      thinking: { lid: .16, bl: .08, aL: 0, aR: 0, es: 1, pu: 1, brL: [-6, -10], brR: [2, 10], mo: 'smirk', eL: 8, eR: -12, tilt: -6, al: [-6, 5], ar: [69, 87], fr: 1, bs: .25, lx: -.8, ly: -.9, z: 0, wv: 0, pump: 0, hop: 0, tw: .7 },
      working: { lid: .3, bl: .32, aL: 0, aR: 0, es: 1, pu: .9, brL: [2, 16], brR: [2, 16], mo: 'effort', eL: -4, eR: -4, tilt: 0, al: [-4, 40], ar: [-4, 40], fr: 0, bs: .4, lx: 0, ly: 0, z: 0, wv: 0, pump: 1, hop: 0, tw: 1.5 },
      celebrate: { lid: 0, bl: 0, aL: 1, aR: 1, es: 1, pu: 1, brL: [-4, -4], brR: [-4, -4], mo: 'big', eL: 6, eR: 6, tilt: 0, al: [-150, -20], ar: [-150, -20], fr: 0, bs: .65, lx: 0, ly: 0, z: 0, wv: 0, pump: 0, hop: 1, tw: 2.4 },
      sleepy: { lid: .66, bl: .08, aL: 0, aR: 0, es: 1, pu: 1, brL: [4, -7], brR: [4, -7], mo: 'flat', eL: -20, eR: -20, tilt: 6, al: [-3, 3], ar: [-3, 3], fr: 0, bs: .3, lx: 0, ly: .3, z: 1, wv: 0, pump: 0, hop: 0, tw: .25 },
      wave: { lid: 0, bl: .3, aL: 0, aR: 0, es: 1, pu: 1.05, brL: [-3, -5], brR: [-3, -5], mo: 'grin', eL: 4, eR: 4, tilt: 4, al: [-8, 5], ar: [-122, -48], fr: 0, bs: .5, lx: 0, ly: 0, z: 0, wv: 1, pump: 0, hop: 0, tw: 1.8 },
      cheer: { lid: 0, bl: .32, aL: 0, aR: 0, es: 1, pu: 1.05, brL: [-3, -5], brR: [-3, -5], mo: 'big', eL: 6, eR: 6, tilt: 3, al: [-8, 5], ar: [-140, -22], fr: 0, bs: .55, lx: 0, ly: 0, z: 0, wv: .4, pump: 0, hop: .5, tw: 2 },
    };
    const MS = [[0, 'sleepy'], [2.0, 'surprised'], [2.4, 'wave'], [3.2, 'neutral'], [3.75, 'wink'], [4.1, 'neutral'],
      ...(web ? [[5.5, 'thinking'], [6.5, 'surprised'], [6.95, 'cheer'], [8.2, 'happy'], [8.8, 'neutral']] : [[4.2, 'surprised'], [4.75, 'thinking'], [6.0, 'cheer'], [7.6, 'happy'], [8.7, 'neutral']]),
      [9.0, 'thinking'], [10.05, 'wink'], [10.5, 'working'], [14.3, 'celebrate'], [15.6, 'happy'], [16.6, 'neutral'],
      [17.95, 'surprised'], [18.4, 'happy'], [19.1, 'wink'], [19.9, 'neutral'], [20.9, 'thinking'], [22.7, 'working'], [23.65, 'celebrate'], [24.4, 'thinking'],
      [25.35, 'neutral'], [25.95, 'surprised'], [26.9, 'thinking'], [27.6, 'wink'], [27.75, 'working'], [29.2, 'celebrate'], [30.0, 'happy'], [30.7, 'wink'], [31.4, 'neutral'],
      [32.9, 'thinking'], [33.0, 'wink'], [33.15, 'working'], [35.2, 'celebrate'], [36.2, 'working'], [37.4, 'celebrate'], [39.2, 'happy'], [39.6, 'wink']];
    const MOS = ['smile', 'grin', 'big', 'o', 'flat', 'smirk', 'effort'];
    const moodAt = t => {
      let i = 0; while (i < MS.length - 1 && t >= MS[i + 1][0]) i++;
      const cur = MZ[MS[i][1]], pre = MZ[MS[Math.max(0, i - 1)][1]], k = i ? E.out(seg(t, MS[i][0], MS[i][0] + .24)) : 1, o = {};
      for (const key in cur) o[key] = key === 'mo' ? 0 : mix(pre[key], cur[key], k);
      o.mw = MOS.map(m => (m === pre.mo ? 1 - k : 0) + (m === cur.mo ? k : 0));
      return o;
    };

    /* ---------- journeys, camera ---------- */
    const J = [
      { t0: 10.5, t1: 14.3, from: dCamp, to: dN(0), cad: 2.3, e: A.rush },
      { t0: 22.8, t1: 23.65, from: dN(0), to: dN(1), cad: 3.6, e: A.rush, run: 1 },
      { t0: 27.75, t1: 29.2, from: dN(1), to: dN(2), cad: 3.2, e: A.rush, run: 1 },
      { t0: 33.15, t1: 35.2, from: dN(2), to: dN(3), cad: 2.7, e: A.rush },
      { t0: 36.25, t1: 37.4, from: dN(3), to: dChest, cad: 3.4, e: E.inOut, run: 1 },
    ];
    const rueDist = t => { let d = dCamp; for (const j of J) { if (t >= j.t1) d = j.to; else { if (t > j.t0) d = lerp(j.from, j.to, j.e(seg(t, j.t0, j.t1))); break; } } return d; };
    const rueW = t => ptAt(rueDist(t));
    const sOv = web ? 1 : .5, ovC = web ? [640, 380] : [320, 700], ayOv = web ? 404 : 420;
    const sSeg = web ? 1.3 : .8, aySeg = web ? 396 : 222, sMenu = web ? 1.15 : .66, ayMenu = web ? 420 : 500, sRue = web ? 1.3 : .8, ayRue = web ? 430 : 300, sRun = web ? 1.15 : .7, ayRun = web ? 420 : 300, sCh = web ? 1.3 : .8, ayCh = web ? 470 : 292;
    const mid = j => [(nodesW[j][0] + nodesW[j + 1][0]) / 2, (nodesW[j][1] + nodesW[j + 1][1]) / 2];
    const kf = (t, d, c, s, ay, f = 0) => ({ t, d, cx: c[0], cy: c[1], s, ay, f });
    const KF = [kf(0, 0, [lerp(ovC[0], G.camp[0], .6), lerp(ovC[1], G.camp[1], .6)], sOv * 1.55, ayOv), kf(2.9, 2.9, ovC, sOv, ayOv), kf(4.9, .9, mid(0), sSeg, aySeg), kf(10.5, .5, mid(0), sSeg, aySeg, .55), kf(14.3, 3.8, NP(0), sRue, ayRue),
      kf(17.6, .8, NP(0), sMenu, ayMenu), kf(20.0, .9, mid(1), sSeg, aySeg), kf(22.8, .3, mid(1), sSeg, aySeg, .55), kf(23.65, .85, NP(1), sRue, ayRue),
      kf(26.1, .9, mid(2), sSeg, aySeg), kf(27.75, .3, mid(2), sSeg, aySeg, .55), kf(29.2, 1.45, NP(2), sRue, ayRue), kf(31.3, .9, mid(3), sSeg, aySeg), kf(33.15, .3, mid(3), sSeg, aySeg, .55), kf(35.2, 2.05, NP(3), sRue, ayRue),
      kf(36.1, .6, NP(3), sRun, ayRun, 1), kf(37.5, .8, CHEST, sCh, ayCh)];
    const viewOf = t => {
      let i = 0; while (i < KF.length - 1 && t >= KF[i + 1].t - KF[i + 1].d) i++;
      const a = KF[Math.max(0, i - 1)], b = KF[i], qq = i ? E.inOut(seg(t, b.t - b.d, b.t)) : 1, r = rueW(t - .1), f = lerp(a.f, b.f, qq);
      return { fx: lerp(lerp(a.cx, b.cx, qq), r[0], f), fy: lerp(lerp(a.cy, b.cy, qq), r[1], f), s: lerp(a.s, b.s, qq), ax: G.ax, ay: lerp(a.ay, b.ay, qq) };
    };
    const proj = (v, wx, wy) => [v.ax + (wx - v.fx) * v.s, v.ay + (wy - v.fy) * v.s];
    const rsOf = v => (web ? .36 + .34 * v.s : .3 + .4 * v.s);

    /* ---------- DOM: map, effects, character ---------- */
    const mapw = A.el('div', 'mapw', S), world = A.el('div', 'world', mapw, mapSVG());
    world.style.width = G.W0 + 'px'; world.style.height = G.H0 + 'px';
    const fxc = A.el('canvas', 'fxc', S), DPR = 1.5; fxc.width = W * DPR; fxc.height = H * DPR; fxc.style.width = W + 'px'; fxc.style.height = H + 'px';
    const fx = fxc.getContext('2d');
    const star = (s = 11, c = '') => `<svg class="sr ${c}" width="${s}" height="${s}" viewBox="0 0 24 24"><polygon points="12,2 14.9,8.5 22,9.3 16.7,14.1 18.2,21.2 12,17.6 5.8,21.2 7.3,14.1 2,9.3 9.1,8.5"/></svg>`;
    const flame = s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path d="M12 2c1 5 7 7 7 14a7 7 0 0 1-14 0c0-4 2-6 4-8 0 3 1 4 2.5 4C11 8 10 5 12 2z" fill="#E8702A"/><path d="M12 12c1 2 3.5 3 3.5 6a3.5 3.5 0 0 1-7 0c0-2 1.5-3 2-4 .4 1 .8 1.5 1.5 1.5z" fill="#F2B63D"/></svg>`;
    const badge = s => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><path d="M16 2l11 4v9c0 7-5 12-11 15C10 27 5 22 5 15V6z" fill="#234B43" stroke="#F2B63D" stroke-width="2"/><polygon points="16,8 17.9,12.8 23,13.3 19.2,16.7 20.3,21.7 16,19.1 11.7,21.7 12.8,16.7 9,13.3 14.1,12.8" fill="#F2B63D"/></svg>`;
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#F4F7F2" stroke="#234B43" stroke-width="3"/><circle cx="32" cy="32" r="23" fill="none" stroke="#F2B63D" stroke-width="1.6" stroke-dasharray="2 3"/><path d="M8 32L32 26L56 32L32 38Z" fill="#8CB89A"/><path d="M32 8L38 32L32 56L26 32Z" fill="#234B43"/><path d="M32 8L38 32H26Z" fill="#E8702A"/><circle cx="32" cy="32" r="4" fill="#F2B63D" stroke="#1F2B2A" stroke-width="1.5"/></svg>`;
    const nds = NAMES.map((n, j) => A.el('div', 'nd', S, `<div class="pl lk"><span class="nm">${I('lock', 11, 2.8)}</span>${n}</div><div class="pl op"><span class="nm">${j + 1}</span>${n}<span class="stz">${star(11)}${star(11)}${star(11)}</span></div>`));
    const rings = nds.map(() => null), ringEl = A.el('div', 'ring', S); const curRing = ringEl;
    const rue = A.el('div', 'rue', S, rueSVG + '<div class="rue-hit"></div>');
    const R$ = c => rue.querySelector('.' + c), R$$ = c => [...rue.querySelectorAll('.' + c)];
    const RE = { body: R$('r-body'), head: R$('r-head'), eL: R$('r-eL'), eR: R$('r-eR'), tail: R$('r-tail'), legL: R$('r-legL'), legR: R$('r-legR'), aL: R$('r-aL'), aLf: R$('r-aLf'), aR: R$('r-aR'), aRf: R$('r-aRf'), aRG: R$('r-aRfG'), sh: R$('r-sh'), nd: R$('r-nd'), sf: [R$('r-sf'), R$('r-sf2'), R$('r-sf3')], bs: R$$('r-bs'), z: R$('r-z'), brL: R$('r-brL'), brR: R$('r-brR') };
    const EY = ['L', 'R'].map(k => ({ pu: R$('r-pu' + k), lid: R$('r-lid' + k), bl: R$('r-bl' + k), arc: R$('r-arc' + k), eg: R$('r-eg' + k) }));
    const MO = MOS.map(m => R$('r-m-' + m));

    /* scarf tail: a rippling ribbon rebuilt each frame */
    const ribbon = (t, amp, u0, u1) => {
      const top = [], bot = [], N = 9;
      for (let k = 0; k <= N; k++) {
        const u = u0 + (u1 - u0) * k / N, x = 138 + u * 64 + Math.sin(t * 6 - u * 5) * amp * .25 * u, y = 142 + u * 18 + Math.sin(t * 7 - u * 6) * amp * u, w = 6.5 - 2.4 * u;
        top.push([x, y - w]); bot.push([x - 1, y + w]);
      }
      if (u1 >= 1) { const l = top[N], b2 = bot[N]; bot.push([(l[0] + b2[0]) / 2 - 5, (l[1] + b2[1]) / 2]); }
      return 'M' + top.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + 'L' + bot.reverse().map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + 'Z';
    };

    const poseRue = P => {
      const m = P.m, t = P.t, w = P.walk, ph = P.ph, sn = Math.sin(ph), tw = m.tw;
      let al = m.al.slice(), ar = m.ar.slice();
      const pump = m.pump * (w ? 0 : 1) * Math.sin(t * 11) * 12;
      al[0] += pump; ar[0] -= pump; ar[1] += m.wv * Math.sin(t * 9) * 16;
      al[0] += -sn * 26 * w; ar[0] += sn * 26 * w; al[1] += (-sn > 0 ? 14 : 0) * w; ar[1] += (sn > 0 ? 14 : 0) * w;
      const cel = m.hop > .8 ? Math.sin(t * 8) * 6 : 0; al[0] += cel; ar[0] -= cel;
      const arm = (g, gf, a, front) => { const s2 = `rotate(${a[0].toFixed(1)})`; attr(g, 'transform', g === RE.aL ? `translate(72 134) scale(-1 1) ${s2}` : `translate(148 134) ${s2}`); const f = g.querySelector('g'); attr(f, 'transform', `translate(0 21) rotate(${a[1].toFixed(1)})`); };
      arm(RE.aL, 0, al); arm(RE.aR, 0, ar); arm(RE.aRf, 0, ar);
      attr(RE.aRG, 'opacity', m.fr > .5 ? '1' : '0'); attr(RE.aR, 'opacity', m.fr > .5 ? '0' : '1');
      const bob = -Math.abs(sn) * 4.5 * w, br = P.br;
      attr(RE.body, 'transform', `translate(110 229) scale(${(P.sx - br * .012).toFixed(4)} ${(P.sy + br * .012).toFixed(4)}) translate(-110 -229) translate(0 ${bob.toFixed(1)})`);
      attr(RE.legL, 'transform', `translate(94 ${(200 - Math.max(0, sn) * 7 * w).toFixed(1)}) rotate(${(sn * 30 * w).toFixed(1)})`);
      attr(RE.legR, 'transform', `translate(126 ${(200 - Math.max(0, -sn) * 7 * w).toFixed(1)}) rotate(${(-sn * 30 * w).toFixed(1)})`);
      attr(RE.tail, 'transform', `rotate(${(Math.sin(t * 2.1) * 6 * tw + Math.sin(t * 3.4) * 3 * tw - 10 * w).toFixed(1)} 142 204)`);
      const ef = P.ear;
      attr(RE.eL, 'transform', `rotate(${(m.eL - ef * 12).toFixed(1)} 82 58)`); attr(RE.eR, 'transform', `rotate(${(-m.eR + ef * 3).toFixed(1)} 138 58)`);
      attr(RE.head, 'transform', `rotate(${(m.tilt + P.hx * 3 + w * Math.sin(ph * 2) * 1.5).toFixed(1)} 110 120) translate(0 ${(br * -.8).toFixed(1)})`);
      EY.forEach((e, i) => {
        const blink = P.blink, lid = clamp(m.lid + blink * (1 - m.lid), -.2, 1), arc = i ? m.aR : m.aL;
        attr(e.lid, 'height', Math.max(0, lid * 31).toFixed(1)); attr(e.bl, 'y', (16 - m.bl * 15).toFixed(1)); attr(e.bl, 'height', (m.bl * 15).toFixed(1));
        attr(e.pu, 'transform', `translate(${((m.lx * .6 + P.lx) * 3.6).toFixed(2)} ${((m.ly * .6 + P.ly) * 3.6).toFixed(2)}) scale(${m.pu.toFixed(2)})`);
        attr(e.arc, 'opacity', arc.toFixed(2)); attr(e.eg, 'opacity', (1 - arc).toFixed(2)); attr(e.eg, 'transform', `scale(${m.es.toFixed(3)})`);
      });
      attr(RE.brL, 'transform', `translate(88 ${(58 + m.brL[0] - m.lid * 3).toFixed(1)}) rotate(${m.brL[1].toFixed(1)})`); attr(RE.brR, 'transform', `translate(132 ${(58 + m.brR[0] - m.lid * 3).toFixed(1)}) rotate(${(-m.brR[1]).toFixed(1)})`);
      MO.forEach((e, i) => attr(e, 'opacity', m.mw[i].toFixed(2)));
      RE.bs.forEach(e => attr(e, 'opacity', m.bs.toFixed(2)));
      attr(RE.nd, 'transform', `rotate(${(Math.sin(t * 1.3) * 12 + P.spin).toFixed(1)})`);
      attr(RE.z, 'opacity', m.z.toFixed(2));
      if (m.z > .05) ['z1', 'z2', 'z3'].forEach((c, i) => { const e = RE.z.querySelector('.' + c), u = (t * .55 + i * .3) % 1; attr(e, 'transform', `translate(${(u * 6).toFixed(1)} ${(-u * 12).toFixed(1)})`); attr(e, 'opacity', Math.sin(u * PI).toFixed(2)); });
      const amp = 2.6 + w * 4 + (m.hop > .8 ? 3 : 0);
      attr(RE.sf[0], 'd', ribbon(t, amp, 0, 1)); attr(RE.sf[1], 'd', ribbon(t, amp, .62, .7)); attr(RE.sf[2], 'd', ribbon(t, amp, .78, .84));
    };

    /* ---------- bubbles, quick menu, hint ---------- */
    const bub = A.el('div', 'bub', S, '<span></span><i></i>'), bubT = bub.firstChild, bubI = bub.lastChild;
    const sug1 = A.el('div', 'bub sg sug1', S, `<div class="th" style="background-image:${thumb.city}"></div><div><b>This photo knows where it was taken.</b><span class="go">Check</span></div><i></i>`);
    const sug2 = A.el('div', 'bub sg sug2', S, `<div class="tk">${I('film', 20, 2.4)}</div><div><b>A video! Make a GIF?</b><span class="go">Open GIF Falls</span></div><i></i>`);
    const LINES = [[2.0, 'Oh! A map! Good morning.', 'r'], [2.7, null], [2.75, 'I\'m Rue. Where to today?', 'r'], [3.15, null], [3.2, 'Tap me any time for the quick menu.', 'r'], [4.0, null],
      ...(web ? [[4.3, 'Drag a photo onto my camp!', 'r'], [6.75, 'Got it! Nice portrait.', 'r'], [7.9, 'Where will it be used?', 'r'], [8.9, null]]
        : [[4.3, 'Which photo shall we shrink?', 'r'], [6.1, 'Nice portrait! Where will it be used?', 'r'], [8.9, null]]),
      [9.4, 'Pick where it goes. I start right away.', 'r'], [10.55, 'Off I go! Folding it small…', 'r'], [14.4, 'Level cleared! Only 196 KB.', 'r'], [15.85, 'Saved. +40 XP!', 'r'], [17.0, null], [17.3, 'Tap me for the quick menu.', 'r'], [17.9, null],
      [19.4, 'Crop Ridge, here we come!', 'r'], [20.2, null], [21.3, 'Slide the photo to frame it.', 'r'], [22.7, null], [23.75, 'Framed! Looks great.', 'r'], [24.2, null],
      [26.0, 'Whoa, it says Pune!', 'r'], [27.0, 'Anyone could see that. Remove it?', 'r'], [27.8, 'Sweeping the trail clean…', 'r'], [29.3, 'Hidden! Safe to share.', 'r'], [30.0, null],
      [31.4, 'Slide the handles: 3 seconds.', 'r'], [33.2, 'Weaving 36 frames…', 'r'], [35.3, 'It loops nicely!', 'r'], [36.0, null], [36.3, 'To the chest!', 'r'], [37.5, null], [39.0, 'Pathfinder now! Let\'s go again.', 'r'], [40.1, null]];
    const bsz = new Map();
    const placeBub = (el, tail, side, X, Y, rs, text) => {
      let b = bsz.get(el.className + text); if (!b) { b = [el.offsetWidth, el.offsetHeight]; bsz.set(el.className + text, b); }
      const [bw, bh] = b, hx = 50 * rs + 8, top0 = web ? 66 : 100;
      let l = side === 'r' ? X + hx : X - hx - bw; if (l + bw > W - 8) { l = X - hx - bw; side = 'l'; } if (l < 8) { l = X + hx; side = 'r'; }
      const tp = clamp(Y - 175 * rs - bh * .5, top0, H - 200);
      el.style.left = l.toFixed(0) + 'px'; el.style.top = tp.toFixed(0) + 'px';
      tail.style.left = side === 'r' ? '18px' : ''; tail.style.right = side === 'r' ? '' : '18px';
      tail.style.bottom = '-6px'; tail.style.top = '';
      if (Y - 150 * rs < tp + bh) { tail.style.bottom = ''; tail.style.top = '-6px'; tail.style.transform = 'rotate(225deg)'; } else tail.style.transform = 'rotate(45deg)';
    };

    const qm = A.el('div', 'qm', S);
    const cpSVG = `<svg class="cpv" viewBox="0 0 52 52" width="52" height="52"><circle cx="26" cy="26" r="24" fill="url(#br${uid})"/><circle cx="26" cy="26" r="19" fill="#FFF6E2" stroke="#8A5A1C" stroke-width="1.4"/><g stroke="#8A5A1C" stroke-width="1.4"><path d="M26 9v4M26 39v4M9 26h4M39 26h4"/></g><g class="cpn"><path d="M26 12L30.5 26H21.5Z" fill="#D8412F"/><path d="M26 40L30.5 26H21.5Z" fill="#2B4A55"/></g><circle cx="26" cy="26" r="2.6" fill="#8A5A1C"/><g class="cpl"><circle cx="26" cy="26" r="21" fill="url(#br${uid})"/><path d="M12 26a14 14 0 0 1 28 0" stroke="#fff" stroke-width="2" opacity=".5" fill="none"/></g></svg>`;
    const scrim = A.el('div', '', S); scrim.style.cssText = 'position:absolute;left:0;top:0;border-radius:50%;z-index:11;pointer-events:none;background:radial-gradient(circle,rgba(244,247,242,.7) 55%,rgba(244,247,242,0) 71%)';
    const cpEl = A.el('div', 'cp', qm, cpSVG);
    const qts = TOOLS.map((tl, i) => A.el('div', 'qt qt' + i, qm, `<div class="tk">${I(tl[1], 22, 2.4)}</div><b>${tl[0]}</b>${web ? `<kbd>${tl[2]}</kbd>` : ''}`));
    const tt = A.el('div', 'tt cd', S, `${logo(web ? 64 : 56)}<h1>Image Swiss Knife</h1><p>Photo tools on a map. Pick a level and go.</p><div class="lkl">${I('lock', 15, 2.6)}${web ? 'Nothing leaves your browser' : 'Nothing leaves your phone'}</div>`);
    const hintp = A.el('div', 'hintp', S, '<i></i><i></i><b>Tap Rue</b>');

    /* ---------- chrome: HUD (phone) or top bar and logs (web) ---------- */
    const pipsH = `<div class="pips">${[0, 1, 2, 3].map(() => star(15)).join('')}</div>`;
    const rankH = `<div class="chip rk">${badge(26)}<div class="t"><b><em class="rn" style="font-style:normal">Scout</em><span class="xt">120 / 300 XP</span></b><div class="xpb"><i></i></div></div></div>`;
    if (!web) A.el('div', 'hud', S, `${rankH}<div class="chip fl">${flame(20)}<span class="sk">3</span></div><div class="chip">${pipsH}</div>`);
    else {
      A.el('div', 'topbar', S, `<div class="brand">${logo(30)}Image Swiss Knife</div><div class="chip" style="font-size:12.5px;color:#1F7A62;font-weight:800;gap:6px">${I('lock', 15, 2.6)}Works in your browser. Nothing uploaded.</div>${rankH}<div class="chip fl">${flame(20)}<span class="sk">3-day streak</span></div>`);
      const qrows = ['Shrink a photo', 'Crop for social', 'Find a location', 'Make a GIF'].map((x, i) => `<div class="qr qr${i}"><span class="ck">${I('check', 12, 3.4)}</span>${x}<span class="stz">${star(11)}${star(11)}${star(11)}</span></div>`).join('');
      A.el('div', 'ql cd', S, `<h3>Quest log</h3><div class="sec">Daily quest <span class="qn">0 / 4</span></div>${qrows}
        <div class="qr" style="background:#FFF7DF;border-color:var(--gold)"><span style="display:grid;place-items:center;color:#8A5A1C">${I('star', 18, 2.4)}</span>Chest opens at 4 / 4: XP and a new map piece</div>
        <div class="sec">Map pieces <span class="mpn">3 / 8</span></div><div class="pcs">${Array.from({ length: 8 }, (_, i) => `<div class="${i < 3 ? 'f' : ''} pc${i}">${i < 3 ? mapPiece(i) : ''}</div>`).join('')}</div>
        <div class="sec">Streak</div><div class="days">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `<i class="${i < 3 ? 'on' : ''} dy${i}">${i < 3 ? '' : d}</i>`).join('')}</div>
        <div class="sec">Badges</div><div class="bgc"><span style="color:#B97A12">${I('star', 16, 2.4)}</span>Quick Hands</div><div class="bgc pgb lk"><span style="color:#1F7A62">${I('shield', 16, 2.4)}</span>Privacy Guard</div><div class="bgc lk"><span>${I('crop', 16, 2.4)}</span>Frame Master</div>`);
    }
    function mapPiece(i, s = 40) { const c = [['#8CB89A', '#234B43', '#B5E3E0'], ['#E9D5A3', '#8CB89A', '#2FA7A0'], ['#B5E3E0', '#2FA7A0', '#E9D5A3'], ['#8CB89A', '#E9D5A3', '#E8702A']][i % 4]; return `<svg viewBox="0 0 40 34" width="100%" height="100%" preserveAspectRatio="none"><rect width="40" height="34" fill="${c[0]}"/><path d="M0 24Q10 12 20 22T40 16V34H0Z" fill="${c[1]}"/><circle cx="30" cy="9" r="4" fill="${c[2]}"/><path d="M4 30Q18 24 36 30" stroke="#F2B63D" stroke-width="1.6" fill="none" stroke-dasharray="2 2.4"/></svg>`; }

    /* ---------- sheet and pages ---------- */
    const gifFrames = Array.from({ length: 8 }, (_, i) => `<i style="background-image:${A.frame(i * 1.5 | 0)}"></i>`).join('');
    const sheet = A.el('div', 'sheet', S, '<div class="shd"><span class="bd">1</span><div><b>Your quest</b><span class="sb"></span></div></div><div class="pgs"></div>');
    const pgsBox = sheet.querySelector('.pgs');
    const BK = A.bars(4, ['tiles', 'comet', 'streams', 'liquid'], 12);
    const BH = { tiles: 60, comet: 44, streams: 58, liquid: 30 }, BW = web ? 318 : 358;
    const BC = { tiles: ['#8CB89A', '#4E9170', '#234B43'], comet: ['#F2B63D', '#E8702A', '#FFE29A'], streams: ['#2FA7A0', '#58C2BA', '#1F8A84'], liquid: ['#2FA7A0', '#7FD9D0', '#BDEDE7'], orbit: ['#2FA7A0', '#F2B63D', '#8CB89A'], warp: ['#2FA7A0', '#F2B63D', '#8CB89A', '#234B43'] };
    const bars = BK.map((k, i) => ({ k, bar: A.bar(null, k, { w: BW, h: BH[k], colors: BC[k], track: 'rgba(35,75,67,.13)', seed: 5 + i * 3, lanes: 4 }) }));
    const pg = (id, html) => A.el('div', 'pg ' + (id === 'gal' ? 'galp' : id), pgsBox, html);
    const fcH = (th, name, sub, ok) => `<div class="fc"><i style="background-image:${th}"></i><div><b>${name}</b><span>${sub}</span></div>${ok ? `<span class="ok">${I('check', 14, 3.4)}</span>` : ''}</div>`;
    const foxHead = `<svg class="tfox" viewBox="0 0 30 30"><path d="M4 4L12 10H18L26 4L25 17C25 24 20 27 15 27C10 27 5 24 5 17Z" fill="#E8702A" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 18Q15 28 21 18Q15 15 9 18Z" fill="#FFF0D8"/><circle cx="11" cy="15" r="2" fill="#2A1812"/><circle cx="19" cy="15" r="2" fill="#2A1812"/></svg>`;
    const trailH = () => `<div class="tm"><i class="tbg"></i><i class="tlit"></i>${['Camp', '1', '2', '3', '4', '5', 'Chest'].map((n, k) => `<i class="td" style="left:${k / 6 * 100}%"></i><span class="tn" style="left:${k / 6 * 100}%">${n}</span>`).join('')}${foxHead}</div>`;
    const tipH = x => `<div class="tip">${I('sparkle', 18, 2.2)}<span>${x}</span></div>`;
    const P = {};
    const gthumbs = [thumb.portrait, thumb.mountain, thumb.city, A.frame(2), A.photo('abstract', { seed: 2 }), A.photo('abstract', { seed: 5 }), A.photo('mountain', { sun: .8 }), A.photo('abstract', { seed: 9 }), A.frame(7)];
    P.gal = pg('gal', web
      ? `<div class="drophint">${I('upload', 30, 2)}<b>Drop a photo on Rue's camp</b><span>or press <kbd>O</kbd> to choose a file</span></div><div class="fcw" style="opacity:0">${fcH(thumb.portrait, D.portrait.file, `${D.portrait.size} · ${D.portrait.dims}`, true)}</div>`
      : `<div class="lab">Recent photos</div><div class="gal">${gthumbs.map((b, i) => `<div class="gt g${i}" style="background-image:${b}">${i === 0 ? `<em>${I('check', 14, 3.4)}</em>` : ''}</div>`).join('')}</div><div class="fcw" style="opacity:0">${fcH(thumb.portrait, D.portrait.file, `${D.portrait.size} · ${D.portrait.dims}`, true)}</div>`);
    P.shq = pg('shq', `${fcH(thumb.portrait, D.portrait.file, `${D.portrait.size} · ${D.portrait.dims}`, 0)}<div class="lab">Where will you use it?</div><div class="opts">${D.shrink.options.map((o, i) => `<div class="opt opt${i}"><span class="oi">${I(['phone', 'check', 'share', 'ruler'][i], 16, 2.4)}</span><b>${o.label}</b><span>${o.hint}</span></div>`).join('')}</div>${tipH('Exam forms often ask for a small JPG. I pick the size and start right away.')}${web ? '<div class="meta"><span>Press <kbd>1</kbd> to <kbd>4</kbd> to choose</span></div>' : ''}`);
    P.shw = pg('shw', `<div class="wk"><div class="ph" style="background-image:${thumb.portrait}"></div><div class="bign"><span class="bn">4.8 MB</span><small>Goal: ${D.shrink.rule}</small></div></div><div class="barw bw0"></div><div class="stg">${['Scan', 'Fold', 'Trim', 'Polish'].map(x => `<span>${x}</span>`).join('')}</div><div class="meta"><span class="sl">Scanning pixels…</span><span>Fireflies <b class="ffn">0</b> / 24</span></div>${trailH()}${tipH('Rue walks the trail while your photo shrinks. Fireflies fill her compass.')}`);
    P.shr = pg('shr', `<div style="display:flex;align-items:center;gap:10px"><div><div class="big2">${D.shrink.size}</div><div class="was">was ${D.portrait.size}</div></div><div style="margin-left:auto;display:flex;flex-direction:column;align-items:flex-end;gap:5px"><div style="display:flex;gap:3px">${[0, 1, 2].map(() => star(22)).join('')}</div><span class="xpc">+${XPG[0]} XP</span></div></div>
      <div class="cmp"><span>Before</span><div class="bb"></div><b>${D.portrait.size}</b><span>After</span><div class="g ba"></div><b>${D.shrink.size}</b></div><div class="tags"><span>${D.shrink.format}</span><span>${D.shrink.px}</span><span>Exam form</span></div>${trailH()}${tipH('Level 1 cleared. Crop Ridge is open. Tap Rue to jump there.')}
      <div class="row" style="margin-top:auto"><div class="btn save">${I('save', 20, 2.6)}Save${web ? ' <kbd>Ctrl S</kbd>' : ''}</div><div class="btn sec" style="flex:.55">${I('share', 18, 2.4)}Share</div></div>`);
    const ps = D.crop.presets.filter((p, i) => [0, 1, 2, 3, 5, 7].includes(i));
    const ratio = p => { const m = 22, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<span class="rt"><i style="width:${w}px;height:${h}px"></i></span>`; };
    P.crq = pg('crq', `${fcH(thumb.mountain, 'IMG_1650.JPG', 'Mountain photo · 4000 × 3000', 0)}<div class="lab">Where will you post it?</div><div class="presets">${ps.map((p, i) => `<div class="pr pr${i}">${ratio(p)}<b>${p.label}</b><span>${p.ratio} · ${p.px}</span></div>`).join('')}</div>`);
    P.cre = pg('cre', `<div class="cbox"><div class="cimg" style="background-image:${thumb.mountain}"></div><div class="cfr"><b>${D.crop.ratio}</b></div></div><div class="ctag">${I('crop', 16, 2.4)}${D.crop.preset} · ${D.crop.ratio} · ${D.crop.px}</div>
      <div class="ar" style="height:${44}px"><div class="btn done" style="">${I('check', 20, 3)}Done${web ? ' <kbd>Enter</kbd>' : ''}</div><div class="barw bw1" style="opacity:0"></div></div>`);
    const mapMini = `<svg class="bg" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice"><rect width="300" height="120" fill="#CFE5D6"/><path d="M-10 90C60 70 100 104 160 84S250 40 310 56" stroke="#9AD6D0" stroke-width="14" fill="none"/><path d="M0 40h300M50 0v120M120 0l30 120M210 0v120M0 104h300M260 0l-40 120" stroke="#F4F7F2" stroke-width="6" fill="none"/><path d="M0 70h300" stroke="#F2D58A" stroke-width="7"/><rect x="60" y="8" width="44" height="24" rx="6" fill="#8CB89A"/><rect x="226" y="76" width="50" height="30" rx="8" fill="#B5E3E0"/></svg>`;
    const pinS = `<svg viewBox="0 0 30 38"><path d="M15 37S2 24 2 14a13 13 0 0 1 26 0c0 10-13 23-13 23z" fill="#E8702A" stroke="#fff" stroke-width="1.6"/><circle cx="15" cy="14" r="5" fill="#fff"/></svg>`;
    P.prv = pg('prv', `<div class="prow"><div class="ph" style="background-image:${thumb.city}"></div><div><b class="pl">Pune, India</b><span>${D.place.region} · ${D.place.when}</span></div></div>
      <div class="mapc">${mapMini}<div class="sdome"></div><div class="pin" style="left:62%;top:58%">${pinS}</div><div class="sh2">${I('shield', 24, 2.4)}</div><div class="co">${D.place.lat} · ${D.place.lon}</div></div>
      <div class="ar" style="height:48px"><div class="wn">${I('eye', 20, 2.4)}<span>If you share this photo, people can see this place.</span></div><div class="okb" style="opacity:0">${I('shield', 22, 2.4)}<span>Location removed. Safe to share.</span></div></div>
      <div class="ar" style="height:${web ? 90 : 78}px;margin-top:auto"><div class="btn rm" style="position:absolute;left:0;right:0;bottom:0">${I('trash', 18, 2.6)}<span class="rml">Remove location</span></div><div class="pw" style="opacity:0"><div class="barw bw2"></div><div class="meta" style="margin-top:6px"><span>Sweeping the trail clean…</span><span>Fireflies <b class="ffp">0</b> / 24</span></div></div><div class="nb cd" style="opacity:0;position:absolute;left:0;right:0;bottom:0;padding:8px 12px;display:flex;align-items:center;gap:10px">${badge(34)}<div style="flex:1"><b class="fr" style="font-size:15px;display:block">Privacy Guard</b><span style="font-size:12px;color:var(--mut)">New badge for removing a location</span></div><span class="xpc">+30 XP</span></div></div>`);
    P.gif = pg('gif', `<div class="vid"><span class="vb">${D.video.file} · ${D.video.len}</span></div><div class="stripc"><div class="strip">${gifFrames}</div><div class="selw"></div><div class="hd hL"></div><div class="hd hR"></div></div>
      <div class="secs"><b class="sv fr" style="font-size:15px">0:04 to 0:08</b><span class="sw">4.0 s</span></div>
      <div class="ar" style="height:${web ? 96 : 92}px;margin-top:auto"><div class="btn mk gbt" style="position:absolute;bottom:0">${I('film', 20, 2.4)}<span class="mkl">Make GIF</span></div><div class="gwk" style="opacity:0"><div class="barw bw3"></div><div class="meta" style="margin-top:6px"><span class="gl">Weaving frames…</span><span>Fireflies <b class="ffg">0</b> / 24</span></div></div></div>`);
    P.gif.querySelector('.gbt').style.cssText = 'position:absolute;left:0;right:0;bottom:0';
    P.dn = pg('dn', `<div class="gr">${[[thumb.portrait, 'Exam photo', `${D.shrink.size} · JPG`], [thumb.mountain, 'Instagram post', D.crop.px], [thumb.city, 'City photo', 'Location removed'], [A.frame(3), 'Beach GIF', `${D.video.size} · ${D.video.clip}`]].map((x, i) => `<div class="rs rs${i}"><i style="background-image:${x[0]}"></i><div><b>${x[1]}</b><span>${x[2]}</span><div class="stz">${[0, 1, 2].map(k => star(11, k < STARS[i] ? 'on' : '')).join('')}</div></div></div>`).join('')}</div>
      <div class="rw"><div class="rc"><b>${star(16, 'on')}<span class="xg">+0</span></b><span class="rkl">XP · Scout</span></div><div class="rc"><div class="slot"><span class="mpslot"></span></div><span>Map piece 4 / 8</span></div><div class="rc"><b>${flame(18)}<span class="sk3">3</span></b><span>day streak</span></div></div>
      <div class="rcpt"><span><b>15 taps</b> for 4 jobs</span><span>0 files uploaded</span></div><div class="prm">${I('lock', 16, 2.6)}${web ? D.promiseWeb : D.promise}</div>
      <div class="btn saveall" style="margin-top:auto">${I('save', 20, 2.6)}<span class="sal">Save all 4</span>${web ? ' <kbd>Ctrl S</kbd>' : ''}</div><div class="ad"><i></i><div><small>Ad</small><span>A sponsor message shows here, only after the work is done.</span></div></div>`);
    P.dn.querySelectorAll('.stz').forEach(z => { z.style.display = 'flex'; });
    const lvH = `<div class="lvl">${NAMES.map((n, j) => `<div class="lr lr${j}"><span class="oi">${I(NICON[j], 17, 2.3)}</span><div><b>${n}</b><br><span>${['Make it smaller', 'Crop for social', 'Where was it taken?', 'Video to GIF', 'Change format'][j]}</span></div><span class="stz">${star(12)}${star(12)}${star(12)}</span><kbd style="margin-left:6px">${TOOLS[j][2]}</kbd></div>`).join('')}</div>`;
    if (web) {
      P.wh = pg('wh', `<div class="drophint" style="padding:12px">${I('sparkle', 24, 2)}<b>Tap Rue or press a key</b><span>Jump to any level on the trail.</span></div>${lvH}`);
      P.wh0 = pg('wh0', `<div class="drophint">${I('upload', 30, 2)}<b>Drop a photo on Rue's camp</b><span>or press <kbd>O</kbd> to choose a file</span></div><div class="lab">Levels on the trail</div>${lvH.replace(/lr(\d)/g, 'lq$1')}`);
      const rp = A.el('div', 'rp', S); rp.appendChild(A.el('div', 'tls', null, TOOLS.map((tl, i) => `<div class="tl cd t${i}">${I(tl[1], 20, 2.2)}${tl[0]}<kbd>${tl[2]}</kbd></div>`).join(''))); rp.appendChild(sheet);
    } else {
      A.el('div', 'hb cd', S, `<div class="r1"><div class="tx"><b>Daily quest</b>Clear 4 levels today</div>${pipsH.replace('class="pips"', 'class="pips hpips"')}</div><div class="btn" style="height:42px">${I('image', 20, 2.4)}Pick a photo to start</div>`);
    }
    const hb = q('.hb'), shdBd = sheet.querySelector('.bd'), shdB = sheet.querySelector('.shd b'), shdS = sheet.querySelector('.sb');
    const barHost = { 0: q('.bw0'), 1: q('.bw1'), 2: q('.bw2'), 3: q('.bw3') };
    bars.forEach((b, i) => barHost[i].appendChild(b.bar.el));

    /* ---------- misc overlays ---------- */
    const toast = A.el('div', 'toast', S, `<span class="ti">${I('check', 14, 3.4)}</span><span class="tt2"></span>`), toastT = toast.querySelector('.tt2');
    const TOASTS = [[14.5, 15.6, `Shrink Valley cleared`], [15.95, 16.95, web ? 'Saved to Downloads' : 'Saved to Gallery'], [23.8, 24.4, 'Crop Ridge cleared'], [29.35, 30.1, 'Location removed · Privacy Guard badge'], [35.3, 35.6, 'GIF Falls cleared'], [35.75, 36.2, 'GIF saved'], [38.5, 40.4, web ? '4 files saved to Downloads' : '4 files saved to Gallery']];
    const banner = A.el('div', 'banner', S, `${badge(34)}<div><b>Rank up: Pathfinder</b><span>Next rank at 800 XP</span></div>`);
    const sweep = A.el('div', 'sweep', S, `<svg viewBox="0 0 1000 100" preserveAspectRatio="none"><defs><linearGradient id="sw${uid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#EAF8F6"/><stop offset=".05" stop-color="#7ED4CB"/><stop offset=".5" stop-color="#2FA7A0"/><stop offset=".95" stop-color="#7ED4CB"/><stop offset="1" stop-color="#EAF8F6"/></linearGradient></defs><path d="M0 0H920Q960 12 930 25T950 50T930 75T950 100H0Z" fill="url(#sw${uid})" transform="scale(1 1)"/><path d="M60 14C200 40 300 -4 440 16S700 40 880 14M40 60C180 86 320 40 460 62S720 90 900 60" stroke="#fff" stroke-width="3" fill="none" opacity=".35"/></svg>`);
    sweep.style.width = (W * 2.3) + 'px';
    const chestSVG = `<svg width="96" height="86" viewBox="0 0 96 86"><defs><linearGradient id="cw${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A56B3E"/><stop offset="1" stop-color="#6E4325"/></linearGradient><radialGradient id="cg${uid}"><stop offset="0" stop-color="#FFF3C4"/><stop offset=".5" stop-color="#F2B63D" stop-opacity=".6"/><stop offset="1" stop-color="#F2B63D" stop-opacity="0"/></radialGradient></defs><ellipse cx="48" cy="80" rx="44" ry="6" fill="#1F2B2A" opacity=".25"/><g class="chg" opacity="0"><circle cx="48" cy="40" r="60" fill="url(#cg${uid})"/></g><g class="chr" opacity="0" stroke="#FFE29A" stroke-width="3" stroke-linecap="round">${Array.from({ length: 9 }, (_, i) => { const a = -PI + i * PI / 8; return `<path d="M${48 + Math.cos(a) * 30} ${44 + Math.sin(a) * 30}L${48 + Math.cos(a) * 58} ${44 + Math.sin(a) * 58}"/>`; }).join('')}</g>
      <rect x="8" y="38" width="80" height="40" rx="6" fill="url(#cw${uid})"/><rect x="8" y="38" width="80" height="8" fill="#000" opacity=".15"/><rect x="26" y="38" width="9" height="40" fill="#E0A93D"/><rect x="61" y="38" width="9" height="40" fill="#E0A93D"/><ellipse class="chi" cx="48" cy="38" rx="40" ry="8" fill="#1B0F08" opacity="0"/><g class="chc" opacity="0"><ellipse cx="34" cy="38" rx="7" ry="4" fill="#F2B63D"/><ellipse cx="50" cy="35" rx="8" ry="4.5" fill="#FFD56A"/><ellipse cx="62" cy="38" rx="7" ry="4" fill="#F2B63D"/></g>
      <g class="chl"><path d="M8 40V28Q8 8 48 8Q88 8 88 28V40Z" fill="url(#cw${uid})"/><path d="M12 24Q48 12 84 24" stroke="#C9935B" stroke-width="2.5" fill="none" opacity=".6"/><rect x="26" y="9" width="9" height="31" fill="#E0A93D"/><rect x="61" y="9" width="9" height="31" fill="#E0A93D"/></g><rect class="chk" x="42" y="36" width="12" height="13" rx="3" fill="url(#br${uid})" stroke="#8A5A1C" stroke-width="1"/></svg>`;
    const chest = A.el('div', 'chest', S, chestSVG);
    const CH = { l: chest.querySelector('.chl'), g: chest.querySelector('.chg'), r: chest.querySelector('.chr'), i: chest.querySelector('.chi'), c: chest.querySelector('.chc'), k: chest.querySelector('.chk') };
    const bsts = TC.map((tc, j) => A.el('div', 'bst', S, [0, 1, 2].map(k => star(30, k < STARS[j] ? '' : 'off')).join('')));
    const pops = TC.map((tc, j) => A.el('div', 'xpp', S, `+${XPG[j]} XP`));
    const chestPop = A.el('div', 'xpp', S, '+50 XP');
    const piece = A.el('div', 'piece', S, `<div style="position:absolute;left:-26px;top:-22px;width:52px;height:44px;border-radius:8px;overflow:hidden;box-shadow:0 0 0 2px #F2B63D,0 8px 16px rgba(31,43,42,.5)">${mapPiece(3)}</div>`);
    const dz = web ? A.el('div', 'dz', S, 'Drop here') : null;
    const fcard = web ? A.el('div', 'fcard cd', S, `<i style="background-image:${thumb.portrait}"></i><span>${D.portrait.file}</span><small style="color:var(--mut);font-size:11px">From your Desktop · ${D.portrait.size}</small>`) : null;
    const tlsEl = web ? qa('.tl') : [];
    const confs = TC.map((tc, j) => A.confetti(S, { x: 0, y: 0, count: 26, shape: j % 2 ? 'star' : 'star', colors: ['#F2B63D', '#E8702A', '#FFE29A', '#8CB89A'], seed: 40 + j, power: 480, spread: PI * 1.3, gravity: 700, dur: 1.5 }));
    const sparkC = TC.map((tc, j) => A.confetti(S, { x: 0, y: 0, count: 22, shape: 'spark', colors: ['#FFF3C4', '#F2B63D'], seed: 70 + j, power: 380, spread: PI * 1.6, gravity: 300, dur: .9 }));
    const coinC = A.confetti(S, { count: 44, shape: 'coin', colors: ['#F2B63D', '#FFD56A', '#E0A93D'], seed: 91, power: 620, spread: PI * 1.0, gravity: 900, dur: 2.2 });
    const petC = A.confetti(S, { count: 40, shape: 'petal', colors: ['#F08A5C', '#F2B63D', '#8CB89A', '#F4F7F2'], seed: 92, power: 520, spread: PI * 1.5, gravity: 380, dur: 2.8 });
    const petalPin = A.confetti(S, { count: 20, shape: 'petal', colors: ['#E8702A', '#F2B63D', '#F4F7F2'], seed: 93, power: 220, spread: PI * 1.8, gravity: 300, dur: 1.2 });
    const confPos = (c, x, y) => { c.el.style.left = x.toFixed(0) + 'px'; c.el.style.top = y.toFixed(0) + 'px'; };

    /* ---------- pointer script ---------- */
    const keys = [
      ...(web ? [{ t: 5.2, at: () => ({ x: W - 90, y: 600 }), hold: 0.25 }, { t: 6.6, at: '.rue-hit', drag: true, move: 1.2 }] : [{ t: 6.0, at: '.gal .g0', tap: true }]),
      { t: 10.1, at: '.opt1', tap: true }, { t: 15.8, at: '.shr .save', tap: true }, { t: 17.9, at: '.rue-hit', tap: true }, { t: 19.1, at: '.qt1', tap: true },
      { t: 20.9, at: '.pr0', tap: true }, { t: 21.5, at: '.cre .cimg', hold: 0.1, dy: 40 }, { t: 22.4, at: '.cre .cimg', drag: true, move: 0.9, dy: 40 }, { t: 22.7, at: '.cre .done', tap: true },
      { t: 25.3, at: '.sug1', tap: true }, { t: 27.6, at: '.prv .rm', tap: true }, { t: 30.7, at: '.sug2', tap: true },
      { t: 31.7, at: '.gif .hR', hold: 0.1 }, { t: 32.6, at: '.gif .hR', drag: true, move: 0.9 }, { t: 33.0, at: '.gif .mk', tap: true }, { t: 35.55, at: '.gif .mk', tap: true }, { t: 38.2, at: '.dn .saveall', tap: true },
    ];
    A.pointer(keys);

    /* ---------- helpers for update ---------- */
    const irisShow = (e, p, cx, cy, R) => { if (p <= .001) { e.style.visibility = 'hidden'; e.style.opacity = '0'; return; } e.style.visibility = 'visible'; e.style.opacity = '1'; e.style.transform = 'none'; e.style.clipPath = p >= .999 ? 'none' : `circle(${(E.out(p) * R).toFixed(0)}px at ${cx.toFixed(0)}px ${cy.toFixed(0)}px)`; };
    let OFF = null; const origin = () => { if (!OFF) { const pb = offOf(pgsBox), sb = offOf(sheet); OFF = { x: pb[0], y: pb[1], sx: sb[0], sy: sb[1], xt: ctr(web ? q('.topbar .xpb') : q('.hud .xpb')), pt: ctr(web ? q('.pc3') : q('.dn .slot')) }; } return OFF; };
    const SW = [[4.0, 16.95, 'camp'], [20.0, 24.0, 1], [25.9, 30.0, 2], [31.1, 36.35, 3], [36.5, 41, 'chest']];
    const WIN = [['gal', 4.0, 9.0, 'camp'], ['shq', 8.8, 17.1, 0], ['shw', 10.4, 17.1], ['shr', 14.3, 17.1], ['crq', 20.0, 24.1, 1], ['cre', 21.2, 24.1], ['prv', 25.9, 30.1, 2], ['gif', 31.1, 36.4, 3], ['dn', 36.5, 41, 'chest']];
    const SHD = [[0, '★', 'Your quest', 'Pick a photo to begin'], [4.0, '1', web ? 'Drop a photo' : 'Choose a photo', web ? 'From your desktop' : 'Recent photos'], [8.8, '1', NAMES[0], 'Level 1 · Make it smaller'], [16.95, '★', 'Jump to a level', 'Tap Rue or press a key'], [19.95, '2', NAMES[1], 'Level 2 · Crop for social'], [24.05, '★', 'Jump to a level', 'Tap Rue or press a key'],
      [25.85, '3', NAMES[2], 'Level 3 · Where was it taken?'], [30.05, '★', 'Jump to a level', 'Tap Rue or press a key'], [31.05, '4', NAMES[3], 'Level 4 · Video to GIF'], [36.45, '★', 'Quest complete', 'Your 4 results']];
    const WHW = [[2.5, 4.0, 'wh0'], [17.0, 20.1, 'wh'], [24.0, 26.0, 'wh'], [30.0, 31.2, 'wh'], [36.4, 36.6, 'wh']];
    let fireT = null;
    const ffs = Array.from({ length: 24 }, (_, i) => { const r = A.rng(900 + i); return { x: r(), y: r(), a: .04 + i / 24 * .8, ph: r() * TAU, sw: (r() - .5) * 90 }; });
    const amb = Array.from({ length: 18 }, (_, i) => { const r = A.rng(300 + i); return { x: r(), y: r(), ph: r() * TAU, sp: .15 + r() * .3 }; });
    const procP = t => (t >= 10.5 && t < 14.4 ? seg(t, 10.5, 14.3) : t >= 22.8 && t < 23.7 ? seg(t, 22.8, 23.65) : t >= 27.75 && t < 29.25 ? seg(t, 27.75, 29.2) : t >= 33.15 && t < 35.3 ? seg(t, 33.15, 35.2) : -1);
    const stateAt = t => ({ n: TC.filter(x => t >= x).length, xp: XP0 + XPG.reduce((s2, g, i) => s2 + g * E.out(seg(t, TC[i] + .9, TC[i] + 1.6)), 0) + 50 * E.out(seg(t, 38.3, 39.0)) });

    return {
      update(t) {
        const v = viewOf(t), rs = rsOf(v), rw = rueW(t), st = stateAt(t), pr = A.pointerAt(t);
        const off = origin();
        set(tt, { s: .9 + .1 * E.outBack(seg(t, .4, 1.1)) - .35 * E.in(seg(t, 2.4, 2.9)), y: -50 * E.in(seg(t, 2.4, 2.9)), o: Math.min(seg(t, .4, .9), 1 - seg(t, 2.45, 2.85)) });
        /* map: unfold, camera, glow, life */
        A.reveal(mapw, 'pixels', seg(t, .3, 1.9), { n: web ? 14 : 7 });
        world.style.transform = `translate(${(v.ax - v.fx * v.s).toFixed(2)}px,${(v.ay - v.fy * v.s).toFixed(2)}px) scale(${v.s.toFixed(4)})`;
        const dist = rueDist(t), lit = Math.max(0, dist - dCamp), flash = Math.max(...TC.map(tc => Math.exp(-4 * Math.max(0, t - tc)) * (t >= tc ? 1 : 0)));
        [['lit1', .38 + .3 * flash, 1], ['lit2', .95, 1], ['lit3', .9, 1]].forEach(([c, o, k]) => { const e = world.querySelector('.' + c); attr(e, 'stroke-dasharray', `${lit.toFixed(1)} ${(LEN * 2).toFixed(0)}`); attr(e, 'stroke-dashoffset', (-dCamp).toFixed(1)); attr(e, 'opacity', lit > 1 ? o.toFixed(2) : '0'); });
        world.querySelector('.lit1').setAttribute('stroke-width', (24 + flash * 16).toFixed(1));
        const pulseOn = TC.findIndex((tc, j) => t > tc + .5 && t < tc + 1.8 && j < 4), pe = world.querySelector('.pls');
        if (pulseOn >= 0) { const u = E.inOut(seg(t, TC[pulseOn] + .5, TC[pulseOn] + 1.8)), d0 = dN(pulseOn), d1 = d0 + (dN(pulseOn + 1) - d0) * .55, pos = lerp(d0, d1, u); attr(pe, 'stroke-dasharray', `26 ${(LEN * 2).toFixed(0)}`); attr(pe, 'stroke-dashoffset', (-(pos - 26)).toFixed(1)); attr(pe, 'opacity', Math.sin(u * PI).toFixed(2)); } else attr(pe, 'opacity', '0');
        attr(world.querySelector('.flow'), 'stroke-dashoffset', (-t * 22).toFixed(1));
        const fall = world.querySelector('.fall'); if (fall) attr(fall, 'stroke-dashoffset', (-t * 30).toFixed(1));
        const f1 = world.querySelector('.fire'), f2 = world.querySelector('.fire2');
        attr(f1, 'transform', `scale(${(1 + .12 * Math.sin(t * 13)).toFixed(3)} ${(1 + .2 * Math.sin(t * 17)).toFixed(3)})`); attr(f2, 'transform', `scale(${(1 + .2 * Math.sin(t * 19)).toFixed(3)} ${(1 + .25 * Math.sin(t * 23)).toFixed(3)})`);

        /* level plates and rings */
        const cur = clamp(st.n, 0, 4), clearedNow = st.n;
        nds.forEach((nd, j) => {
          const [x, y] = proj(v, NP(j)[0], NP(j)[1]); set(nd, { x, y });
          const unl = j === 0 ? seg(t, 3.0, 3.55) : seg(t, TC[j - 1] + .8, TC[j - 1] + 1.35);
          const op = nd.querySelector('.op'), lk = nd.querySelector('.lk');
          A.reveal(op, 'diamond', unl, { W: 164, H: 26, cx: 82, cy: 13 }); set(lk, { o: seg(t, 2.4, 3.0) });
          const done = j < 4 && t >= TC[j] + 1.5, shown = j < 4 ? clamp((t - TC[j] - 1.5) / .1 + 1, 0, 1) : 0;
          cls(op, 'cl', done); const nm = op.querySelector('.nm'); txt(nm, done ? '✓' : String(j + 1));
          [...op.querySelectorAll('.sr')].forEach((s2, k) => cls(s2, 'on', done && k < STARS[j]));
          set(nd, { o: seg(t, 2.2, 2.7) * seg(y, web ? 60 : 98, web ? 84 : 124) * (1 - .75 * Math.min(seg(t, 17.9, 18.1), 1 - seg(t, 19.3, 19.6))) });
        });
        const nj = Math.min(4, st.n), np = proj(v, NP(nj)[0], NP(nj)[1]), rp0 = 1 + .14 * Math.sin(t * 4);
        const ringOn = (t > 3.0 && t < 4.4) || (t > 14.6 && t < 17.0) || (t > 23.9 && t < 26) || (t > 29.4 && t < 31.2) || (t > 35.4 && t < 36.4);
        ringEl.style.width = (92 * v.s * rp0).toFixed(0) + 'px'; ringEl.style.height = (38 * v.s * rp0).toFixed(0) + 'px';
        set(ringEl, { x: np[0] - 46 * v.s * rp0, y: np[1] - 19 * v.s * rp0, o: ringOn ? .85 : 0 });

        /* Rue: pose, position, look */
        const jn = J.find(j => t >= j.t0 - .05 && t <= j.t1 + .25), spd = (rueDist(t + .04) - rueDist(t - .04)) / .08;
        let walk = 0, ph = 0, hopA = 0;
        if (jn) { walk = clamp(Math.abs(spd) / ((jn.to - jn.from) / (jn.t1 - jn.t0) * 1.15), 0, 1); walk = Math.pow(walk, .6); ph = TAU * jn.cad * (t - jn.t0); if (jn.run) hopA = Math.abs(Math.sin(ph / 2)) * 15 * walk; }
        const mood = moodAt(t), L = A.life(t, 7), L2 = A.life(t, 13);
        const sx0 = proj(v, rw[0], rw[1]), X = sx0[0], Y = sx0[1] - hopA * rs;
        const hd = [X, Y - 146 * rs], dxp = clamp((pr.x - hd[0]) / 170, -1, 1) * pr.vis, dyp = clamp((pr.y - hd[1]) / 170, -1, 1) * pr.vis;
        const tx = Math.cos(rw[2]), lookx = jn && walk > .2 ? tx * .9 : L.look * .4 * (1 - pr.vis) + dxp, looky = jn && walk > .2 ? -.1 : dyp * .8;
        const hopM = mood.hop * Math.abs(Math.sin(t * 7.5)) * 11, hopS = mood.hop > .5 ? 1 : 0;
        const lean = jn ? clamp(tx * 7 * walk, -9, 9) * (jn.run ? 1.4 : 1) : L.sway * 1.2;
        const sy = 1 - (hopS ? .05 * (1 - Math.abs(Math.sin(t * 7.5))) : 0), sxs = 1 + (hopS ? .035 * (1 - Math.abs(Math.sin(t * 7.5))) : 0);
        const wake = t < 2.5 ? Math.sin(PI * seg(t, 2.0, 2.5)) * 14 : 0;
        poseRue({ t, m: mood, walk, ph, br: L.breathe, sx: sxs, sy, blink: t < 2.0 ? 0 : L.blink, ear: L2.blink, hx: dxp, lx: lookx, ly: looky, spin: t > 17.9 && t < 19.4 ? (t - 17.9) * 420 : 0 });
        const rueO = seg(t, 1.2, 1.8);
        rue.style.transform = `translate(${(X - 122).toFixed(1)}px,${(Y - 229 - hopM * rs - wake * rs).toFixed(1)}px) rotate(${lean.toFixed(1)}deg) scale(${rs.toFixed(4)})`;
        rue.style.opacity = rueO.toFixed(2); rue.style.visibility = rueO < .01 ? 'hidden' : 'visible';
        const pt = (lx, ly) => [X + (lx - 110) * rs, Y + (ly - 229) * rs];
        const cpP = pt(59, 202);

        /* speech bubbles and suggestion bubbles */
        let ln = null; for (const l of LINES) if (t >= l[0]) ln = l;
        if (ln && ln[1] && t > 1.9) { A.txt(bubT, ln[1]); placeBub(bub, bubI, ln[2], X, Y, rs, ln[1]); const k = E.outBack(seg(t, ln[0], ln[0] + .3)); set(bub, { s: .7 + .3 * k, o: seg(t, ln[0], ln[0] + .12) }); } else set(bub, { o: 0 });
        [[sug1, 24.2, 25.45, 'The photo'], [sug2, 30.1, 30.85, 'video']].forEach(([e, a, b, nm]) => { const o = Math.min(seg(t, a, a + .3), 1 - seg(t, b - .1, b)); if (o > 0) placeBub(e, e.lastChild, 'r', X, Y, rs, nm); set(e, { s: .7 + .3 * E.outBack(seg(t, a, a + .35)), o }); e.style.transformOrigin = '20px 100%'; });
        cls(sug1, 'is-pressed', t > 25.25 && t < 25.45); cls(sug2, 'is-pressed', t > 30.65 && t < 30.85);

        /* tap-hint pulse on the compass (intro only) */
        const hv = A.win(t, 3.0, 4.05, .2, .25), hq = (t * 1.25) % 1;
        set(hintp, { x: cpP[0], y: cpP[1], o: hv }); hintp.style.display = hv > 0 ? '' : 'none';
        [...hintp.querySelectorAll('i')].forEach((e, i) => { const u = (hq + i * .5) % 1; e.style.transform = `scale(${(.3 + u * .9).toFixed(2)})`; e.style.opacity = (1 - u).toFixed(2); });

        /* quick menu: compass opens, five tokens fan out of the satchel */
        const qo = seg(t, 17.9, 18.05), qc = seg(t, 19.1, 19.55), fcx = X, fcy = Y - 112 * rs, FR = 215 * rs + (web ? 4 : 0);
        set(qm, { o: t > 17.88 && t < 19.65 ? 1 : 0 });
        { const sc2 = FR * 2 + 120; scrim.style.width = scrim.style.height = sc2 + 'px'; set(scrim, { x: fcx - sc2 / 2, y: fcy - sc2 / 2, o: .9 * Math.min(seg(t, 17.9, 18.2), 1 - seg(t, 19.2, 19.6)) }); }
        const cpS = (.45 + .75 * E.outBack(seg(t, 17.9, 18.3))) * (1 - E.in(qc));
        set(cpEl, { x: cpP[0], y: cpP[1], s: cpS * (rs > .6 ? 1.1 : 1), o: 1 }); cpEl.querySelector('.cpl').style.opacity = String(1 - E.out(seg(t, 17.92, 18.2)));
        attr(cpEl.querySelector('.cpn'), 'transform', `rotate(${((1 - E.out(seg(t, 17.95, 18.7))) * 540 + Math.sin(t * 3) * 6).toFixed(0)} 26 26)`);
        qts.forEach((e, i) => {
          const ang = (-160 + i * 35) * PI / 180, u = E.outBack(seg(t, 17.98 + i * .05, 18.36 + i * .05)), fx2 = fcx + Math.cos(ang) * FR, fy2 = fcy + Math.sin(ang) * FR;
          const near = Math.hypot(pr.x - fx2, pr.y - fy2) < 34 && pr.vis > .3, chosen = i === 1 && t >= 19.05, hot = near || chosen;
          cls(e, 'hot', hot && t < 19.6);
          let sc = (.25 + .75 * u) * (hot ? 1.12 : 1), x2 = lerp(cpP[0], fx2, u), y2 = lerp(cpP[1], fy2, u), o = seg(t, 17.98 + i * .05, 18.12 + i * .05);
          if (t >= 19.05) { if (i === 1) { const c2 = E.in(qc); y2 = fy2 - 40 * c2; sc *= 1 + .35 * c2; o *= 1 - seg(qc, .6, 1); } else { const c2 = E.in(qc); x2 = lerp(fx2, cpP[0], c2); y2 = lerp(fy2, cpP[1], c2); sc *= 1 - .8 * c2; o *= 1 - c2; } }
          const sz = rs > .65 ? 1.1 : 1; set(e, { x: x2, y: y2, s: sc * sz, o });
        });

        /* sheet: iris from the node, slide out, pages */
        if (!web) {
          let vis = 0, out = 0, cxn = 0, cyn = 0, any = false;
          for (const [a, b, n] of SW) if (t >= a && t <= b + .05) { any = true; vis = seg(t, a, a + .55); out = seg(t, b - .3, b); const np2 = n === 'camp' ? proj(v, G.camp[0], G.camp[1]) : n === 'chest' ? proj(v, CHEST[0], CHEST[1]) : proj(v, NP(n)[0], NP(n)[1]); cxn = np2[0] - off.sx; cyn = np2[1] - off.sy; }
          if (!any) irisShow(sheet, 0, 0, 0, 0); else if (out > 0) { sheet.style.visibility = 'visible'; sheet.style.clipPath = 'none'; sheet.style.opacity = (1 - seg(out, .5, 1)).toFixed(3); sheet.style.transform = `translateY(${(E.in(out) * 60).toFixed(1)}px)`; } else if (t >= 36.5 && t < 37.3) A.reveal(sheet, 'diamond', vis, { W, H: H - SHT, cx: W / 2, cy: 40 }); else irisShow(sheet, vis, cxn, cyn, 900);
          A.reveal(hb, 'push', Math.min(seg(t, 2.6, 3.1), 1 - seg(t, 3.85, 4.2)), { dir: 'd' });
          set(q('.hud'), { o: seg(t, 2.5, 3.0) });
        } else {
          set(sheet, { o: seg(t, 2.3, 2.7) }); set(q('.rp .tls'), { o: seg(t, 2.3, 2.7) }); set(q('.ql'), { o: seg(t, 2.3, 2.7) }); set(q('.topbar'), { o: seg(t, 2.2, 2.6) });
        }
        const hdr = SHD.filter(h => t >= h[0]).pop(); txt(shdBd, hdr[1]); txt(shdB, hdr[2]); txt(shdS, hdr[3]);
        const whw = web ? WHW.find(w2 => t >= w2[0] && t < w2[1]) : null;
        Object.keys(P).forEach(id => { const wnd = WIN.find(w2 => w2[0] === id); let p = 0, hide = true;
          if (id === 'wh' || id === 'wh0') { hide = !(whw && whw[2] === id); p = whw ? Math.min(seg(t, whw[0], whw[0] + .4), 1) : 0; if (hide) p = 0; A.reveal(P[id], 'wipe', p, { dir: 'l' }); return; }
          if (!wnd) return; const [, a, b, ir] = wnd; hide = t < a || t >= b; const inP = seg(t, a, a + .5);
          if (hide) { A.reveal(P[id], 'fade', 0); return; }
          if (ir !== undefined && (web || id === 'shq')) { const n2 = ir === 'camp' ? proj(v, G.camp[0], G.camp[1]) : ir === 'chest' ? proj(v, CHEST[0], CHEST[1]) : proj(v, NP(ir)[0], NP(ir)[1]); irisShow(P[id], inP, n2[0] - off.x, n2[1] - off.y, 1100); } else if (ir !== undefined && ir !== 'chest') { irisShow(P[id], 1, 0, 0, 0); } else A.reveal(P[id], 'wipe', inP, { dir: 'l' });
        });
        if (web) { P.gal.style.zIndex = 1; }

        /* gallery, facts */
        const picked = web ? seg(t, 6.75, 7.1) : seg(t, 6.0, 6.3);
        set(P.gal.querySelector('.fcw'), { y: (1 - E.out(picked)) * 12, o: picked });
        if (!web) { const g0 = P.gal.querySelector('.g0'); cls(g0, 'sel', t >= 6.0); set(g0.firstChild, { s: E.outBack(seg(t, 6.0, 6.3)), o: t >= 6.0 ? 1 : 0 }); [...P.gal.querySelectorAll('.gt')].forEach((g, i) => { if (i) set(g, { o: 1 - .45 * seg(t, 6.05, 6.5) }); }); }
        else { const dh = P.gal.querySelector('.drophint'); set(dh, { o: 1 - seg(t, 6.6, 6.9) }); dh.style.display = t > 6.95 ? 'none' : ''; }

        /* shrink: question, process, result */
        cls(q('.opt1'), 'on', t >= 10.05); A.press(q('.opt1'), t, 10.1);
        qa('.opt').forEach((o, i) => { if (i !== 1) set(o, { o: 1 - .55 * seg(t, 10.1, 10.45) }); });
        const p1 = seg(t, 10.5, 14.3), rp1 = A.rush(p1);
        txt(q('.bn'), A.fmtBytes(lerp(D.portrait.bytes, D.shrink.bytes, rp1)));
        const ph1 = q('.shw .ph'); set(ph1, { sx: 1 - .22 * rp1 + .03 * Math.sin(t * 12) * (1 - rp1), sy: 1 - .18 * rp1, r: Math.sin(t * 9) * 2 * (1 - rp1) });
        [...q('.stg').children].forEach((e, i) => { const th = [0, .25, .6, .9][i]; cls(e, 'on', p1 >= th && (i === 3 || p1 < [0, .25, .6, .9, 2][i + 1])); cls(e, 'dn', i < 3 && p1 >= [.25, .6, .9][i]); });
        txt(q('.sl'), p1 < .25 ? 'Scanning pixels…' : p1 < .6 ? 'Folding the map…' : p1 < .9 ? 'Trimming to 200 KB…' : 'Final polish…');
        const ffc = pr1 => ffs.filter(f => clamp((pr1 - f.a * .72) / .3) >= 1).length;
        txt(q('.ffn'), String(ffc(p1))); txt(q('.ffg'), String(ffc(seg(t, 33.15, 35.2))));
        const shrP = Math.min(seg(t, 14.3, 14.7), 1);
        set(q('.shr .big2'), { s: .8 + .2 * E.outBack(shrP) }); q('.shr .ba').style.width = (100 - 95.9 * E.inOut(seg(t, 14.5, 15.3))).toFixed(1) + '%'; q('.shr .bb').style.width = '100%';
        qa('.shr svg.sr').forEach((s2, i) => { const u = E.outBack(seg(t, 14.4 + i * .14, 14.9 + i * .14)); s2.style.transform = `scale(${(.3 + .7 * u).toFixed(2)})`; cls(s2, 'on', i < STARS[0] && t >= 14.4 + i * .14); });
        A.press(q('.shr .save'), t, 15.8);
        /* crop */
        const prOn = t >= 20.9; cls(q('.pr0'), 'on', prOn); A.press(q('.pr0'), t, 20.9);
        const cdrag = E.inOut(seg(t, 21.62, 22.4)); set(q('.cre .cimg'), { x: -52 * cdrag, y: 6 * cdrag });
        const fre = E.outBack(seg(t, 21.35, 21.9)); set(q('.cre .cfr'), { s: .6 + .4 * fre, o: seg(t, 21.35, 21.55) });
        const bp = seg(t, 22.8, 23.65); set(q('.cre .done'), { o: 1 - seg(t, 22.72, 22.82) }); A.press(q('.cre .done'), t, 22.7);
        set(q('.bw1'), { o: t > 22.78 && t < 23.9 ? 1 : 0 }); set(q('.cre .ctag'), { o: 1 }); txt(q('.cre .ctag'), t > 23.65 ? 'Framed · 1080 × 1350 ready' : q('.cre .ctag').textContent);
        /* privacy */
        const found = seg(t, 26.0, 26.5), pinDrop = E.outBack(seg(t, 26.25, 26.75)), rem = seg(t, 29.2, 29.7);
        const pinE = q('.mapc .pin'); set(pinE, { y: -46 * (1 - pinDrop), s: 1 - .9 * rem, o: seg(t, 26.2, 26.35) * (1 - rem) });
        set(q('.prv .wn'), { o: seg(t, 26.7, 27.0) * (1 - seg(t, 27.7, 27.85)) }); const wn = q('.prv .wn'); wn.style.visibility = t < 26.6 || t > 27.9 ? 'hidden' : 'visible';
        set(q('.prv .okb'), { s: .94 + .06 * E.outBack(rem), o: rem });
        set(q('.prv .rm'), { o: 1 - seg(t, 27.62, 27.75) }); A.press(q('.prv .rm'), t, 27.6); set(q('.pw'), { o: t > 27.74 && t < 29.4 ? 1 : 0 }); set(q('.nb'), { s: .92 + .08 * E.outBack(seg(t, 29.5, 29.9)), o: seg(t, 29.5, 29.75) }); txt(q('.ffp'), String(ffc(seg(t, 27.75, 29.2))));
        set(q('.prv .pl'), { o: 1 }); txt(q('.prv .pl'), t < 26.0 ? 'Looking…' : 'Pune, India');
        const sd = q('.mapc .sdome'), sdq = E.out(seg(t, 29.2, 29.9)), mpc = q('.mapc'); const pc = [mpc.offsetWidth * .62, mpc.offsetHeight * .58];
        sd.style.left = (pc[0] - 90 * sdq) + 'px'; sd.style.top = (pc[1] - 90 * sdq) + 'px'; sd.style.width = sd.style.height = (180 * sdq) + 'px'; set(sd, { o: sdq > 0 ? (1 - seg(t, 29.7, 30.0)) * .9 : 0 });
        const sh2 = q('.mapc .sh2'); sh2.style.left = pc[0] + 'px'; sh2.style.top = pc[1] + 'px'; set(sh2, { s: E.outBack(seg(t, 29.4, 29.85)), o: t > 29.4 ? 1 : 0 });
        mpc.querySelector('svg.bg').style.filter = rem > 0 ? `saturate(${1 - .6 * rem})` : '';
        /* gif */
        const hq2 = E.inOut(seg(t, 31.7 + .08, 32.6)), Lp = 4 / 12, Rp = (8 - hq2) / 12, made = t >= 35.2, making = t >= 33.15 && t < 35.2, mp = seg(t, 33.15, 35.2);
        const sel = q('.selw'), strip = q('.strip'); sel.style.left = `calc(12px + (100% - 24px) * ${Lp})`; sel.style.width = `calc((100% - 24px) * ${Rp - Lp})`;
        q('.hL').style.left = `calc(12px + (100% - 24px) * ${Lp})`; q('.hR').style.left = `calc(12px + (100% - 24px) * ${Rp})`;
        txt(q('.sv'), made ? `${D.video.size} · ${D.video.fps} fps · ${D.video.frames} frames` : `${D.video.from} to ${hq2 > .5 ? D.video.to : '0:08'}`); txt(q('.sw'), made ? 'Loops forever' : hq2 > .5 ? D.video.clip : '4.0 s');
        q('.gif .vid').style.backgroundImage = A.frame(made ? 4 + (Math.floor(t * 12) % 7) : making ? Math.floor(t * 40) % 12 : Math.floor(t * 12) % 12);
        txt(q('.vb'), made ? `GIF · ${D.video.size} · 12 fps` : `${D.video.file} · ${D.video.len}`);
        set(q('.gwk'), { o: making ? 1 : 0 }); txt(q('.gl'), `Weaving frame ${Math.round(mp * D.video.frames)} of ${D.video.frames}`);
        set(q('.gbt'), { o: making ? 0 : 1 }); txt(q('.mkl'), made ? 'Save GIF' : 'Make GIF'); A.press(q('.gbt'), t, 33.0); A.press(q('.gbt'), t, 35.55);
        set(q('.stripc'), { o: made ? .4 : 1 });
        /* done */
        qa('.dn .rs').forEach((e, i) => { const u = E.outBack(seg(t, 36.9 + i * .18, 37.4 + i * .18)); set(e, { s: .85 + .15 * u, o: seg(t, 36.9 + i * .18, 37.15 + i * .18) }); });
        txt(q('.xg'), '+' + Math.round(XPG.reduce((a, b2) => a + b2, 0) * E.out(seg(t, 37.5, 38.2)) + 50 * E.out(seg(t, 38.3, 39))));
        txt(q('.rkl'), t >= 38.5 ? 'XP · Pathfinder' : 'XP · Scout'); txt(q('.sk3'), t >= 38.4 ? '4' : '3');
        set(q('.dn .saveall'), { o: 1 }); txt(q('.sal'), t < 38.35 ? 'Save all 4' : '4 files saved'); cls(q('.dn .saveall'), 'sec', t >= 38.35); A.press(q('.dn .saveall'), t, 38.2);
        { const pts = [dCamp, dN(0), dN(1), dN(2), dN(3), dN(4), dChest]; let i2 = 0; while (i2 < 5 && dist >= pts[i2 + 1]) i2++; const fr = clamp((i2 + (dist - pts[i2]) / (pts[i2 + 1] - pts[i2])) / 6, 0, 1);
          qa('.tm').forEach(m4 => { m4.querySelector('.tlit').style.width = (fr * 100).toFixed(1) + '%'; m4.querySelector('.tfox').style.left = (fr * 100).toFixed(1) + '%'; [...m4.querySelectorAll('.td')].forEach((d4, k) => cls(d4, 'on', dist >= pts[k] - 1 && (k > 0 || dist > dCamp + 2))); }); }
        /* bars */
        [[0, 10.5, 14.3, p1], [1, 22.8, 23.65, bp], [2, 27.75, 29.2, seg(t, 27.75, 29.2)], [3, 33.15, 35.2, mp]].forEach(([i, a, b, p]) => { if (t > a - .2 && t < b + .8) bars[i].bar.update(clamp(p), t); });

        /* HUD, quest log */
        const lvl = t >= 38.5, xpv = st.xp, fill = lvl ? clamp((xpv - 300) / 500, 0, 1) : clamp(xpv / 300, 0, 1);
        qa('.xpb i').forEach(e => { e.style.width = (fill * 100).toFixed(1) + '%'; });
        qa('.rn').forEach(e => txt(e, lvl ? 'Pathfinder' : 'Scout')); qa('.xt').forEach(e => txt(e, lvl ? `${Math.round(xpv - 300)} / 500 XP` : `${Math.round(Math.min(xpv, 300))} / 300 XP`));
        qa('.sk').forEach(e => txt(e, web ? (t >= 38.4 ? '4-day streak' : '3-day streak') : (t >= 38.4 ? '4' : '3')));
        qa('.fl').forEach(e => { const d = t - 38.4; e.style.transform = d > 0 && d < .8 ? `scale(${(1 + .25 * Math.exp(-5 * d) * Math.cos(14 * d)).toFixed(3)})` : ''; });
        qa('.pips').forEach(pp => [...pp.querySelectorAll('.sr')].forEach((s2, i) => cls(s2, 'on', i < st.n)));
        if (web) {
          [0, 1, 2, 3].forEach(i => { const r2 = q('.qr' + i); cls(r2, 'on', t >= TC[i] + .6); [...r2.querySelectorAll('.sr')].forEach((s2, k) => cls(s2, 'on', t >= TC[i] + 1.5 && k < STARS[i])); });
          cls(q('.pgb'), 'lk', t < 29.4); txt(q('.qn'), `${st.n} / 4`); txt(q('.mpn'), t >= 38.6 ? '4 / 8' : '3 / 8');
          const pc3 = q('.pc3'); if (!pc3.firstChild) pc3.innerHTML = mapPiece(3); pc3.classList.toggle('f', t >= 38.6); set(pc3.firstChild, { o: t >= 38.6 ? 1 : 0 }); const dy = q('.dy3'); dy.className = 'dy3 ' + (t >= 38.4 ? 'on' : ''); txt(dy, t >= 38.4 ? '★' : 'W');
          qa('.lvl .lr').forEach(r2 => { const j = +r2.className.match(/l[rq](\d)/)[1], dn2 = j < 4 && t >= TC[j] + 1.5, nxt = j === Math.min(st.n, 4), lkd = j > st.n || (j === 4 && t < 35.5); cls(r2, 'nx', nxt && !dn2); cls(r2, 'lkd', lkd && !nxt); [...r2.querySelectorAll('.sr')].forEach((s2, k) => cls(s2, 'on', dn2 && k < STARS[j])); });
          const act = t >= 9 && t < 17.05 ? 0 : t >= 19.6 && t < 24.05 ? 1 : t >= 25.85 && t < 30.05 ? 2 : t >= 31.05 && t < 36.4 ? 3 : -1;
          tlsEl.forEach((e, i) => { cls(e, 'on', i === act); cls(e, 'lk', i === 4 && t < 35.5); });
          const pf = t >= 5.0 && t < 6.9; const dzP = proj(v, G.camp[0], G.camp[1]); dz.style.width = (150 * v.s * .9) + 'px'; dz.style.height = (62 * v.s * .9) + 'px';
          set(dz, { x: dzP[0] - 75 * v.s * .9, y: dzP[1] - 31 * v.s * .9 + 4, o: A.win(t, 4.2, 6.95, .3, .2) * (pf ? .9 + .1 * Math.sin(t * 8) : .7) });
          const fo = Math.min(seg(t, 5.0, 5.3), 1 - seg(t, 6.7, 7.0)), pp = A.pointerAt(t), fq = E.in(seg(t, 6.62, 7.0));
          set(fcard, { x: lerp(pp.x - 70, X - 75, fq), y: lerp(pp.y - 40, Y - 100 * rs, fq), s: 1 - .55 * fq, r: -4 * (1 - fq), o: fo });
        }

        /* toasts, banner, plates stars, XP pops */
        const tz = TOASTS.find(z => t >= z[0] && t < z[1]);
        if (tz) { const o = Math.min(seg(t, tz[0], tz[0] + .2), 1 - seg(t, tz[1] - .2, tz[1])); txt(toastT, tz[2]); set(toast, { x: -toast.offsetWidth / 2 + (web ? 0 : 0) + (web ? 0 : 0), y: (1 - E.outBack(Math.min(1, o * 1.2))) * -14, o }); toast.style.left = (web ? 588 : 195) + 'px'; } else set(toast, { o: 0 });
        const bo = Math.min(seg(t, 38.0, 38.4), 1 - seg(t, 39.5, 39.9)); banner.style.left = (web ? 588 : 195) + 'px'; set(banner, { x: -banner.offsetWidth / 2, y: (1 - E.outBack(seg(t, 38.0, 38.5))) * -24, o: bo });
        TC.forEach((tc, j) => {
          const hv0 = viewOf(tc + .4), rs0 = rsOf(hv0);
          /* star burst over Rue, then they fly into the level plate */
          const grow = seg(t, tc, tc + .5), fly = E.inOut(seg(t, tc + .95, tc + 1.45)), plt = proj(v, NP(j)[0], NP(j)[1]);
          [...bsts[j].children].forEach((s2, k) => {
            const a0 = (-90 + (k - 1) * 38) * PI / 180, bx = X + Math.cos(a0) * 54 * rs + (k - 1) * 4, by = Y - 235 * rs + Math.sin(a0) * 26 + 40 + (k === 1 ? -10 : 0), tgx = plt[0] + 41.5 + k * 13, tgy = plt[1] + 29;
            const u = E.outBack(seg(t, tc + k * .1, tc + .4 + k * .1)); s2.style.transform = `translate(${lerp(bx, tgx, fly).toFixed(1)}px,${lerp(by, tgy, fly).toFixed(1)}px) scale(${((.2 + .8 * u) * lerp(1, .38, fly)).toFixed(3)}) rotate(${((1 - u) * 90).toFixed(0)}deg)`;
            s2.style.opacity = (k < STARS[j] || fly < .5 ? (t >= tc + k * .1 ? 1 : 0) * (1 - (k >= STARS[j] ? seg(t, tc + .8, tc + 1.1) : 0)) : 0).toFixed(2); if (fly >= 1) s2.style.opacity = '0';
          });
          bsts[j].style.display = t >= tc && t < tc + 1.6 ? '' : 'none';
          const pu = seg(t, tc + .3, tc + 1.15), px = lerp(X, OFF.xt[0], E.inOut(pu)), py = lerp(Y - 230 * rs, OFF.xt[1], E.inOut(pu)) - Math.sin(pu * PI) * 26;
          set(pops[j], { x: px - 28, y: py, s: 1 - .3 * pu, o: t >= tc + .3 && t < tc + 1.2 ? Math.min(1, seg(t, tc + .3, tc + .45)) * (1 - seg(t, tc + 1.05, tc + 1.2)) : 0 });
          const hp = proj(hv0, rw0(tc)[0], rw0(tc)[1]); confPos(confs[j], hp[0], hp[1] - 150 * rs0); confs[j].update(t - tc); confPos(sparkC[j], hp[0], hp[1] - 40 * rs0); sparkC[j].update(t - tc);
        });
        function rw0(tc) { return rueW(tc); }

        /* chest */
        const cp2 = proj(v, CHEST[0], CHEST[1]), co = seg(t, TCHEST, TCHEST + .45), cq = E.outBack(co);
        set(chest, { x: cp2[0], y: cp2[1], s: (web ? 1.15 : .9) * (1 + .03 * Math.sin(t * 3)), o: 1 }); chest.style.transformOrigin = '0 0';
        attr(CH.l, 'transform', `translate(0 ${(-30 * cq).toFixed(1)}) rotate(${(-18 * cq).toFixed(1)} 48 40)`); attr(CH.i, 'opacity', (co > 0 ? .8 : 0).toFixed(2)); attr(CH.c, 'opacity', co > .3 ? '1' : '0');
        attr(CH.g, 'opacity', (co * (.7 + .3 * Math.sin(t * 6))).toFixed(2)); attr(CH.r, 'opacity', (co * .8 * (1 - seg(t, 38.5, 39.6) * .6)).toFixed(2)); attr(CH.r, 'transform', `rotate(${(t * 12).toFixed(1)} 48 44)`);
        confPos(coinC, cp2[0], cp2[1] - 40); coinC.update(t - (TCHEST + .1)); confPos(petC, cp2[0], cp2[1] - 40); petC.update(t - (TCHEST + .1));
        const pcq = seg(t, TCHEST + .5, TCHEST + 2.1);
        const cu = E.inOut(seg(t, TCHEST + 1.4, TCHEST + 2.2)), rise = E.out(seg(t, TCHEST + .45, TCHEST + 1.3));
        const ppx = lerp(cp2[0], OFF.pt ? OFF.pt[0] : cp2[0], cu), ppy = lerp(cp2[1] - 40 - 60 * rise, OFF.pt ? OFF.pt[1] : 200, cu);
        set(piece, { x: ppx, y: ppy, s: (.5 + .9 * rise) * lerp(1, .45, cu) * (web ? 1 : 1), r: (1 - rise) * -40 + Math.sin(t * 5) * 3 * (1 - cu), o: t >= TCHEST + .45 && t < TCHEST + 2.2 ? Math.min(1, seg(t, TCHEST + .45, TCHEST + .6)) : 0 });
        const cpp = t >= TCHEST + .2 && t < TCHEST + 1.4, cuu = seg(t, TCHEST + .2, TCHEST + 1.3);
        set(chestPop, { x: lerp(cp2[0], OFF.xt[0], E.inOut(cuu)) - 24, y: lerp(cp2[1] - 90, OFF.xt[1], E.inOut(cuu)) - Math.sin(cuu * PI) * 24, o: cpp ? 1 : 0 });
        const sl2 = q('.dn .slot'); if (sl2 && !web) { const k5 = t >= TCHEST + 2.2 ? 1 : 0; sl2.style.borderStyle = k5 ? 'solid' : 'dashed'; const m2 = sl2.querySelector('.mpslot'); if (!m2.firstChild) m2.innerHTML = `<div style="position:absolute;inset:0">${mapPiece(3)}</div>`; set(m2, { o: k5 }); }
        /* pin petals */
        { const mo2 = offOf(mpc); confPos(petalPin, mo2[0] + pc[0], mo2[1] + pc[1] - 30); petalPin.update(t - 29.2); }

        /* river sweep (page turn) */
        { const sq = seg(t, 16.55, 17.45), x0 = -W * 2.3 + sq * (W * 3.4); sweep.style.transform = `translateX(${x0.toFixed(1)}px)`; sweep.style.visibility = sq > 0 && sq < 1 ? 'visible' : 'hidden'; }

        /* fireflies and motes (canvas) */
        fx.setTransform(DPR, 0, 0, DPR, 0, 0); fx.clearRect(0, 0, W, H);
        if (t > 2.4) {
          const g1 = (x, y, r, a, c = '255,226,138') => { const gr = fx.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(255,255,240,${a})`); gr.addColorStop(.25, `rgba(${c},${a * .8})`); gr.addColorStop(1, `rgba(${c},0)`); fx.fillStyle = gr; fx.beginPath(); fx.arc(x, y, r, 0, TAU); fx.fill(); };
          amb.forEach(m3 => { const x = (m3.x * W + Math.sin(t * m3.sp + m3.ph) * 26 + W) % W, y = ((web ? 60 : 110) + m3.y * (H * .55) + Math.cos(t * m3.sp * 1.3 + m3.ph) * 20), o = (.35 + .35 * Math.sin(t * 1.7 + m3.ph)) * .8; if (sheet.style.visibility !== 'visible' || y < SHT - 8 || web) g1(x, y, 7, o * .8); });
          const pp1 = procP(t);
          if (pp1 >= 0) {
            const cx0 = cpP[0], cy0 = cpP[1];
            ffs.forEach((f, i) => {
              const u = clamp((pp1 - f.a * .72) / .3), bx = (f.x * (W - 40) + 20), by = (web ? 70 : 100) + f.y * (web ? H - 150 : 250);
              const wx = bx + Math.sin(t * 1.4 + f.ph) * 22, wy = by + Math.cos(t * 1.1 + f.ph) * 16;
              if (u >= 1) return;
              for (let k = 0; k < 4; k++) { const uu = Math.max(0, u - k * .05), e2 = E.in(uu), sx2 = lerp(wx, cx0, e2) + Math.sin(uu * PI) * f.sw, sy2 = lerp(wy, cy0, e2) - Math.sin(uu * PI) * 40; if (u > 0 || k === 0) g1(sx2, sy2, 8 - k * 1.5 + (u > 0 ? 2 : 0), (.95 - k * .22) * (u > 0 ? 1 : .8)); }
            });
            const gl = .25 + .75 * pp1; g1(cx0, cy0, 14 + 10 * gl, .5 * gl, '255,200,90');
          }
        }
      },
    };
  },
});

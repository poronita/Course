/* Style 2 — Say It. The whole UI is one sentence you finish with taps. */
ISK.register({
  id: 'sentence',
  order: 2,
  name: 'Say It',
  tagline: 'Say what you want in one sentence. Tap the coloured words.',
  concept: 'The whole app is one sentence that you finish with taps. Each blank is a coloured word: what to do, which file, how much and what for. Tapping a word opens big plain choices. When the job is done, the same sentence turns into a receipt that says what happened.',
  wins: [
    'People read a sentence faster than they learn a toolbar. A grandfather can say "make this photo smaller for an exam form".',
    'Plain rules fill the rest. Pick "exam form" and the size, format and pixels follow on their own.',
    'Receipts and history read like a diary, so every result feels clear and a little fun.',
  ],
  risks: [
    'Every tool needs good grammar in every language, so translation costs more.',
    'Power users may find tapping words slower than sliders. Add an "All settings" link for them.',
  ],
  scores: { simple: 5, fun: 4, wow: 3, effort: 3 },
  palette: ['#FFFFFF', '#111111', '#CFF56A', '#9EDBFF', '#FFC27A', '#FFB3DA'],
  type: 'Bricolage Grotesque for everything. The sentence is huge (34 to 60 px), and labels use its small optical size.',
  motion: 'Chip words roll like a slot machine, a highlighter stroke wipes in from the left when a blank is set, and a caret blinks where the next answer goes.',
  notes: {
    intro: 'The words "say it" get a lime highlighter stroke. Home then reads "I want to make smaller a photo", and the action rolls into place.',
    pick: 'Tapping the blue word opens the gallery on the phone. On the web, the file comes from the desktop and lands on the page.',
    shrink: 'Picking "exam form" fills "under 200 KB" by a plain rule. After Do it, the size rolls down and the sentence becomes the receipt.',
    crop: 'Each choice opens the next blank on its own. The pink blank lists the social sizes, then the photo moves inside the 4:5 frame.',
    privacy: 'The answer is a sentence next to a map. One lime chip removes the place, and its highlight gets erased.',
    gif: 'Dragging the trim handle rolls the end time from 0:08 to 0:07. The receipt sits above the looping GIF.',
    done: 'The day reads as four short sentences. The only ad sits under them, after the work is done.',
  },
  statusBar: 'dark',
  css: `
.st-sentence{--ink:#111;--mut:#6B6B6B;--line:#ECECEC;--soft:#F4F4F4;--lime:#CFF56A;--sky:#9EDBFF;--tan:#FFC27A;--pink:#FFB3DA;background:#fff;color:var(--ink);font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:16px;line-height:1.35;overflow:hidden}
.st-sentence .k-act{--c:#CFF56A}.st-sentence .k-file{--c:#9EDBFF}.st-sentence .k-amt{--c:#FFC27A}.st-sentence .k-pur{--c:#FFB3DA}
.st-sentence .pg{position:absolute;inset:0;padding:50px 22px 30px;display:flex;flex-direction:column}
.st-sentence.m-web .pg{top:60px;bottom:40px;padding:20px 56px 0}
.st-sentence .tb{height:42px;display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:600;flex:none}
.st-sentence.m-web .tb{height:30px}
.st-sentence .bk{display:flex;align-items:center;gap:4px;padding:6px 13px 6px 7px;border-radius:12px;background:var(--soft)}
.st-sentence.m-web .bk{padding:4px 11px 4px 5px;font-size:14px;color:var(--mut)}
.st-sentence .lk{display:flex;align-items:center;gap:6px;color:var(--mut);font-size:14px}
.st-sentence .brand{display:flex;align-items:center;gap:9px;font-size:16px;font-weight:700;letter-spacing:-.01em}
.st-sentence .sns{display:grid;margin-top:12px;font:700 34px/1.2 "Bricolage Grotesque",system-ui,sans-serif;letter-spacing:-.03em;min-height:4.8em;flex:none}
.st-sentence.m-web .sns{font-size:60px;min-height:2.4em;margin-top:6px;letter-spacing:-.035em}
.st-sentence .home .sns{font-size:40px;min-height:3.6em;margin-top:4px}
.st-sentence.m-web .home .sns{font-size:64px;min-height:1.2em}
.st-sentence .sn{grid-area:1/1;align-self:start;max-width:100%}
.st-sentence .pg:not(.home):not(.dn) .sns{clip-path:inset(0 -80px)}
.st-sentence.m-web .sn{max-width:1130px}
.st-sentence .hi{margin:14px 0 0;font-size:18px;font-weight:600;color:var(--mut)}
.st-sentence.m-web .hi{margin:2px 0 0;font-size:20px}
.st-sentence .tip{margin:10px 0 0;font-size:17px;color:var(--mut);display:flex;gap:8px;align-items:center}
.st-sentence.m-web .tip{font-size:18px;margin-top:6px}
.st-sentence .tip i{width:26px;height:14px;border-radius:4px;background:linear-gradient(90deg,var(--lime) 0 25%,var(--sky) 0 50%,var(--tan) 0 75%,var(--pink) 0);transform:skew(-8deg);flex:none}
/* chips */
.st-sentence .ch{position:relative;display:inline-block;vertical-align:top;height:1.2em;padding:0 .1em;white-space:nowrap;isolation:isolate}
.st-sentence .hl,.st-sentence .bgt{position:absolute;left:-.03em;right:-.03em;top:.17em;bottom:.03em;background:var(--c);border-radius:.14em .36em .2em .42em/.42em .2em .38em .18em;transform:skew(-8deg) rotate(-.7deg);z-index:-1}
.st-sentence .bgt{opacity:.3}
.st-sentence .ch.set .bgt{display:none}
.st-sentence .rw{display:inline-block;vertical-align:top;height:1.2em;overflow:hidden}
.st-sentence .rs{display:block}
.st-sentence .rs b{display:block;width:max-content;height:1.2em;font-weight:inherit;white-space:pre}
.st-sentence .rs b.ph{color:#A9A9A9}
.st-sentence .ul{position:absolute;left:.1em;right:.1em;bottom:.08em;border-bottom:.05em dashed #111;z-index:1}
.st-sentence .cr{position:absolute;top:.22em;bottom:.12em;width:.075em;border-radius:.04em;background:#111;right:-.02em;visibility:hidden}
.st-sentence .ch.cl .cr{left:.08em;right:auto}
.st-sentence .ch.ca .cr{visibility:visible;opacity:var(--blink,1)}
.st-sentence .dd{width:.42em;height:.42em;margin:.42em 0 0 .06em;vertical-align:top;fill:none;stroke:#111;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}
.st-sentence .ch.is-pressed{transform:scale(.95)}
.st-sentence .nw{white-space:nowrap}
.st-sentence .aw{display:inline-block;vertical-align:top;height:1.2em;overflow:hidden;white-space:pre}
.st-sentence .aw>span{display:inline-block;white-space:pre}
.st-sentence .strike{position:absolute;left:0;top:.66em;height:.07em;background:#111;border-radius:.04em;width:0}
/* body */
.st-sentence .body{flex:1;display:flex;flex-direction:column;gap:14px;margin-top:14px;min-height:0}
.st-sentence.m-web .body{display:grid;grid-template-columns:minmax(0,1fr) 380px;grid-template-rows:minmax(0,1fr) auto;column-gap:44px;row-gap:14px;margin-top:16px;padding-bottom:22px}
.st-sentence.m-web .cv{grid-row:1/3;grid-column:1;min-height:0;position:relative}
.st-sentence.m-web .pn{grid-row:1;grid-column:2}
.st-sentence.m-web .foot{grid-row:2;grid-column:2}
.st-sentence .pn{display:flex;flex-direction:column;gap:12px}
.st-sentence .foot{margin-top:auto}
.st-sentence.m-web .foot{margin-top:0}
.st-sentence .go{height:62px;border-radius:31px;background:var(--ink);color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;font-size:22px;font-weight:700;letter-spacing:-.01em}
.st-sentence .go.off{background:#EDEDED;color:#A3A3A3}
.st-sentence .go .gi,.st-sentence .go .gc{display:flex}.st-sentence .go .gc{display:none}
.st-sentence .go.ok{background:var(--lime);color:#111}.st-sentence .go.ok .gc{display:flex}.st-sentence .go.ok .gi{display:none}
.st-sentence .kv{display:grid;grid-template-columns:auto 1fr;gap:7px 16px;font-size:15px;margin:0;padding:12px 14px;border:1.5px solid var(--line);border-radius:16px}
.st-sentence.m-web .kv{font-size:17px;padding:16px 18px;gap:10px 18px}
.st-sentence .kv dt{color:var(--mut);font-weight:500}
.st-sentence .kv dd{margin:0;font-weight:700}
.st-sentence .kv dd.wait{color:#B0B0B0;font-weight:500}
.st-sentence .kv dd.gone{text-decoration:line-through;text-decoration-thickness:2px;color:var(--mut)}
.st-sentence .legend{display:flex;flex-direction:column;gap:8px}
.st-sentence .lg{display:grid;grid-template-columns:1fr 1fr;gap:8px 12px;font-size:15px;font-weight:600}
.st-sentence.m-web .lg{font-size:16px}
.st-sentence .lg span{display:flex;align-items:center;gap:8px}
.st-sentence .lg i{width:30px;height:16px;border-radius:4px 7px 4px 8px;background:var(--c);transform:skew(-8deg);flex:none}
.st-sentence .go.is-pressed{transform:scale(.96)}
.st-sentence .tag{position:absolute;left:12px;top:12px;background:#fff;border-radius:999px;padding:5px 12px;font-size:13px;font-weight:600;box-shadow:0 2px 10px rgba(0,0,0,.14);white-space:nowrap}
.st-sentence .ph0{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#A3A3A3;background:var(--soft);border-radius:22px;font-weight:600;font-size:16px;z-index:3}
.st-sentence .line{display:flex;gap:10px;align-items:flex-start;font-size:17px;font-weight:600;line-height:1.3;margin:0}
.st-sentence.m-web .line{font-size:18px}
.st-sentence .line .isk-ic{flex:none;margin-top:1px}
.st-sentence .det{margin:0;font-size:15px;color:var(--mut);font-weight:500}
.st-sentence.m-web .det{font-size:16px}
.st-sentence .pnh{margin:0;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}
/* home */
.st-sentence .hist{background:var(--soft);border-radius:22px;padding:16px 16px 6px;display:flex;flex-direction:column}
.st-sentence.m-web .hist{background:none;padding:0}
.st-sentence .hr{display:flex;align-items:center;gap:12px;padding:9px 0;font-size:16px;font-weight:600;line-height:1.3;border-top:1.5px solid #E6E6E6}
.st-sentence.m-web .hr{font-size:18px;border-color:var(--line)}
.st-sentence .hr:first-of-type{border-top:0}
.st-sentence .hr i{width:40px;height:40px;border-radius:10px;background-size:cover;background-position:center;flex:none}
.st-sentence .hr0{font-size:16px;color:var(--mut);font-weight:500;padding:6px 0 12px}
.st-sentence mark{color:inherit;background:linear-gradient(var(--c),var(--c)) no-repeat 0 70%/var(--w,100%) 72%;padding:0 .12em;border-radius:.2em}
.st-sentence .safe{margin-top:auto;display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;font-weight:600;color:var(--mut)}
.st-sentence .drop{position:absolute;inset:0;border:2.5px dashed #D2D2D2;border-radius:26px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center}
.st-sentence .drop.hot{border-color:#111;background:#F3FBFF}
.st-sentence .drop b{font-size:28px;letter-spacing:-.02em}
.st-sentence .drop span{font-size:17px;color:var(--mut)}
.st-sentence .drop .dic{width:66px;height:66px;border-radius:20px;background:var(--sky);display:grid;place-items:center}
.st-sentence .dropped{position:absolute;left:50%;top:22px;bottom:22px;width:330px;margin-left:-165px;border-radius:16px;background-size:cover;background-position:center 30%;box-shadow:0 14px 34px rgba(0,0,0,.14)}
.st-sentence .drop.got{background:var(--soft);border-color:transparent}
.st-sentence .drop.got>b,.st-sentence .drop.got>span,.st-sentence .drop.got>.dic{visibility:hidden}
.st-sentence .fcard{position:absolute;left:0;top:0;width:190px;background:#fff;border-radius:16px;box-shadow:0 22px 50px rgba(0,0,0,.25);padding:9px;display:flex;flex-direction:column;gap:7px;z-index:35}
.st-sentence .fcard i{height:118px;border-radius:10px;background-size:cover;background-position:center 30%}
.st-sentence .fcard span{font-size:14px;font-weight:700;padding:0 3px}
.st-sentence .fcard small{font-size:12px;color:var(--mut);padding:0 3px;margin-top:-6px}
/* shrink */
.st-sentence .pcard{position:relative;height:270px;border-radius:24px;overflow:hidden;background:var(--soft)}
.st-sentence.m-web .pcard{height:100%}
.st-sentence .phi{position:absolute;inset:0;background-size:cover;background-position:center 30%}
.st-sentence.m-web .phi{left:50%;width:330px;margin-left:-165px;top:22px;bottom:22px;border-radius:16px;box-shadow:0 14px 34px rgba(0,0,0,.14)}
.st-sentence .scan{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(207,245,106,.45);border-right:5px solid var(--lime);mix-blend-mode:multiply;z-index:2}
.st-sentence .bars{display:grid;grid-template-columns:auto 1fr auto;gap:8px 12px;align-items:center;font-size:15px;font-weight:600}
.st-sentence .bars i{height:14px;border-radius:7px;background:#DCDCDC;display:block}
.st-sentence .bars i.b1{background:var(--tan)}
.st-sentence .bars b{font-variant-numeric:tabular-nums}
/* crop */
.st-sentence .cbox{position:relative;height:350px;border-radius:24px;overflow:hidden;background:#161616}
.st-sentence.m-web .cbox{height:100%}
.st-sentence .cimg{position:absolute;left:50%;top:50%;width:470px;height:352px;margin:-176px 0 0 -235px;background-size:cover;background-position:center}
.st-sentence.m-web .cimg{width:620px;height:465px;margin:-232px 0 0 -310px}
.st-sentence .cfr{position:absolute;left:50%;top:50%;width:240px;height:300px;margin:-150px 0 0 -120px;border:3px solid #fff;border-radius:6px;box-shadow:0 0 0 999px rgba(10,10,10,.6);background:linear-gradient(#fff5,#fff5) 33.3% 0/1.5px 100% no-repeat,linear-gradient(#fff5,#fff5) 66.6% 0/1.5px 100% no-repeat,linear-gradient(#fff5,#fff5) 0 33.3%/100% 1.5px no-repeat,linear-gradient(#fff5,#fff5) 0 66.6%/100% 1.5px no-repeat}
.st-sentence.m-web .cfr{width:300px;height:375px;margin:-187px 0 0 -150px}
.st-sentence .ctag{top:auto;bottom:12px}
/* privacy */
.st-sentence .prow{display:grid;grid-template-columns:1fr 1fr;gap:10px;height:230px}
.st-sentence.m-web .prow{height:100%;gap:14px}
.st-sentence .pph{position:relative;border-radius:22px;background-size:cover;background-position:center;overflow:hidden}
.st-sentence .map{position:relative;border-radius:22px;overflow:hidden;background:#F2F2F2}
.st-sentence .map>svg{position:absolute;inset:0;width:100%;height:100%}
.st-sentence .pin{position:absolute;left:50%;top:50%;width:40px;height:52px;margin:-50px 0 0 -20px}
.st-sentence .plab{position:absolute;left:50%;top:50%;margin:8px 0 0 -40px;width:80px;text-align:center;background:#111;color:#fff;border-radius:999px;font-size:13px;font-weight:700;padding:3px 0}
.st-sentence .rmc{align-self:flex-start;font-size:26px;font-weight:700;letter-spacing:-.02em;height:auto;padding:4px .3em 6px;display:inline-flex;align-items:center;gap:8px}
.st-sentence .rmc .hl{top:.08em;bottom:.02em}
.st-sentence .ok{color:#111}
.st-sentence .ok .isk-ic{background:var(--lime);border-radius:50%;padding:3px;box-sizing:content-box}
/* gif */
.st-sentence .vid{position:relative;height:205px;border-radius:22px;background-size:cover;background-position:center;overflow:hidden}
.st-sentence.m-web .vid{height:300px}
.st-sentence .vwork{position:absolute;left:0;top:0;bottom:0;width:0;background:rgba(255,194,122,.45);border-right:5px solid var(--tan);mix-blend-mode:multiply}
.st-sentence .trimc{position:relative;overflow:hidden;padding:7px 0;margin:6px 0 0}
.st-sentence .trim{position:relative;height:52px}
.st-sentence.m-web .trim{height:62px}
.st-sentence .strip{display:flex;height:100%;border-radius:12px;overflow:hidden}
.st-sentence .strip i{flex:1;background-size:cover;background-position:center}
.st-sentence .selw{position:absolute;top:-5px;bottom:-5px;border:4px solid #111;border-radius:12px;box-shadow:0 0 0 999px rgba(255,255,255,.62)}
.st-sentence .hd{position:absolute;top:50%;width:18px;height:46px;margin-top:-23px;border-radius:7px;background:var(--lime);border:3px solid #111}
.st-sentence .hL{left:-11px}.st-sentence .hR{right:-11px}
.st-sentence .tl{display:flex;justify-content:space-between;font-size:13px;color:var(--mut);font-weight:600;margin-top:4px;font-variant-numeric:tabular-nums}
.st-sentence .tl b{color:#111}
/* done */
.st-sentence .rlist{display:flex;flex-direction:column}
.st-sentence .rr{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1.5px solid var(--line);font-size:17px;font-weight:600;line-height:1.3}
.st-sentence.m-web .rr{font-size:21px;padding:12px 0;gap:16px}
.st-sentence .rr i{width:50px;height:50px;border-radius:12px;background-size:cover;background-position:center;flex:none}
.st-sentence.m-web .rr i{width:66px;height:66px;border-radius:14px}
.st-sentence .prom{display:flex;gap:10px;align-items:center;font-size:17px;font-weight:700;margin:0}
.st-sentence.m-web .prom{font-size:20px}
.st-sentence .prom em{width:34px;height:34px;border-radius:50%;background:var(--lime);display:grid;place-items:center;flex:none}
.st-sentence .ad{display:flex;gap:12px;align-items:center;border:1.5px dashed #CFCFCF;border-radius:16px;padding:11px 13px;color:var(--mut);font-size:14px;line-height:1.3}
.st-sentence .ad i{width:44px;height:44px;border-radius:10px;background:#EFEFEF;flex:none}
.st-sentence.m-web .ad{padding:16px;font-size:15px}.st-sentence.m-web .ad i{width:84px;height:84px;border-radius:12px}
.st-sentence .ad small{display:inline-block;border:1.5px solid #8F8F8F;border-radius:6px;padding:0 5px;font-weight:700;font-size:11px;letter-spacing:.06em;color:#6F6F6F;margin-right:6px}
/* sheets + popovers */
.st-sentence .scrim{position:absolute;inset:0;background:#111;opacity:0;z-index:28;pointer-events:none}
.st-sentence .sh{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:28px 28px 0 0;padding:10px 20px 32px;box-shadow:0 -10px 40px rgba(0,0,0,.16);z-index:30}
.st-sentence.m-web .sh{left:0;right:auto;bottom:auto;width:380px;border-radius:22px;padding:14px 18px 14px;box-shadow:0 24px 60px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.07);transform-origin:30px 0}
.st-sentence.m-web .sh-gal{width:420px}
.st-sentence .grab{display:block;width:44px;height:5px;border-radius:3px;background:#DADADA;margin:0 auto 12px}
.st-sentence.m-web .grab{display:none}
.st-sentence .sht{margin:0 0 6px;font-size:15px;font-weight:600;color:var(--mut);display:flex;justify-content:space-between;align-items:baseline}
.st-sentence .op{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 4px;border-bottom:1.5px solid var(--line);font-size:28px;font-weight:700;letter-spacing:-.025em;line-height:1.2}
.st-sentence.m-web .op{font-size:24px;padding:8px 4px}
.st-sentence .op:last-child{border-bottom:0}
.st-sentence .op.is-pressed{background:var(--soft);border-radius:12px}
.st-sentence .ow{position:relative;display:inline-block;padding:0 .1em;isolation:isolate;white-space:nowrap}
.st-sentence .op small{font-size:15px;color:var(--mut);font-weight:600;letter-spacing:0;white-space:nowrap}
.st-sentence .op .isk-ic{color:#9A9A9A;flex:none}
.st-sentence .sh-pre .op{font-size:20px;padding:7px 4px;justify-content:flex-start}
.st-sentence.m-web .sh-pre .op{font-size:19px;padding:6px 4px}
.st-sentence .sh-pre .op small{margin-left:auto}
.st-sentence .rt{width:30px;height:30px;display:grid;place-items:center;flex:none}
.st-sentence .rt i{display:block;border:2.5px solid #111;border-radius:3px}
.st-sentence .gal{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.st-sentence .g{aspect-ratio:1;border-radius:14px;background-size:cover;background-position:center;position:relative}
.st-sentence .g.on{box-shadow:inset 0 0 0 5px var(--sky)}
.st-sentence .g.is-pressed{transform:scale(.95)}
.st-sentence .gk{position:absolute;right:7px;top:7px;width:30px;height:30px;border-radius:50%;background:var(--sky);display:grid;place-items:center;visibility:hidden}
.st-sentence .g.on .gk{visibility:visible}
.st-sentence .vb{position:absolute;left:7px;bottom:7px;background:#111c;color:#fff;border-radius:8px;font-size:12px;font-weight:700;padding:2px 7px}
/* web chrome */
.st-sentence .wh{position:absolute;left:0;right:0;top:0;height:60px;display:flex;align-items:center;gap:26px;padding:0 56px;border-bottom:1.5px solid var(--line);font-size:15px;font-weight:600;z-index:20;background:#fff}
.st-sentence .wh .sp{flex:1}
.st-sentence .wh .lk{font-weight:600}
.st-sentence .wh a{color:var(--ink);text-decoration:none}
.st-sentence .wf{position:absolute;left:0;right:0;bottom:0;height:40px;border-top:1.5px solid var(--line);display:flex;align-items:center;gap:18px;padding:0 56px;font-size:13px;color:var(--mut);font-weight:600;z-index:20;background:#fff}
.st-sentence .wf .sp{flex:1}
.st-sentence kbd{font:700 12px/1 "Bricolage Grotesque",sans-serif;border:1.5px solid #CFCFCF;border-bottom-width:3px;border-radius:6px;padding:3px 7px;margin-right:6px;color:#111;background:#fff;display:inline-block}
.st-sentence kbd.dn{background:var(--lime);border-color:#111;transform:translateY(2px);border-bottom-width:1.5px}
/* splash */
.st-sentence .splash{align-items:center;justify-content:center;text-align:center;gap:22px}
.st-sentence .sp-big{font:800 66px/1.2 "Bricolage Grotesque",sans-serif;letter-spacing:-.04em}
.st-sentence.m-web .sp-big{font-size:120px}
.st-sentence .sp-big>span{display:inline-block}
.st-sentence .sp-brand{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700}
.st-sentence .sp-sub{margin:-10px 0 0;font-size:16px;color:var(--mut);display:flex;align-items:center;gap:7px}
.st-sentence.m-web .sp-sub{font-size:18px}
.st-sentence .spcr{display:inline-block;width:.07em;height:.82em;background:#111;margin-left:.06em;vertical-align:-.04em;opacity:var(--blink,1)}
`,
  build(S, A) {
    const D = A.DATA, I = A.icon, web = A.web, app = A.app;
    const BL = ' ? ';
    const q = s => S.querySelector(s), qa = s => [...S.querySelectorAll(s)];
    const chip = (k, words, cls = '', arrow = false) => `<span class="ch k-${k} ${cls}"><i class="bgt"></i><i class="hl"></i>${words[0] === BL ? '<i class="ul"></i>' : ''}<span class="rw"><span class="rs">${words.map(w => `<b class="${w === BL ? 'ph' : ''}">${w}</b>`).join('')}</span></span>${arrow ? '<svg class="dd" viewBox="0 0 24 24"><path d="M5 9l7 7 7-7"/></svg>' : ''}<u class="cr"></u></span>`;
    const nw = s => `<span class="nw">${s}</span>`;
    const aw = (inner, cls = '') => `<span class="aw ${cls}"><span>${inner}</span></span>`;
    const logo = s => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#111"/><path d="M5 20.5l21-6 1.2 5.2-21 6z" fill="#CFF56A"/><rect x="14.6" y="5.5" width="3" height="21" rx="1.5" fill="#fff"/></svg>`;
    const pg = (cls, inner) => A.el('div', 'pg ' + cls, S, inner);
    const back = `<div class="tb"><span class="bk">${I('back', 18, 2.6)}Home</span>${app ? `<span class="lk">${I('lock', 14, 2.4)}On this phone</span>` : ''}</div>`;
    const go = (cls, label, ic = 'next') => `<div class="foot"><div class="go ${cls}"><span class="gi">${I(ic, 24, 2.6)}</span><span class="gc">${I('check', 24, 3)}</span><span class="gl">${label}</span></div></div>`;
    const P = { portrait: A.photo('portrait'), mountain: A.photo('mountain'), city: A.photo('city'), beach: A.frame(2), a1: A.photo('abstract', { seed: 3 }), a2: A.photo('abstract', { seed: 6 }) };
    const where = web ? 'Downloads' : 'Gallery';

    /* ---------------- web chrome */
    if (web) {
      A.el('div', 'wh', S, `<span class="brand">${logo(30)}Image Swiss Knife</span><span class="sp"></span><span class="lk">${I('lock', 15, 2.4)}Runs in your browser. Nothing uploaded.</span><a>History</a><a>Help</a>`);
      A.el('div', 'wf', S, `<span><kbd class="kt">Tab</kbd>Tab to the next blank</span><span><kbd class="ke">Enter</kbd>Do it</span><span><kbd>Esc</kbd>Start over</span><span class="sp"></span><span>Free, with one small ad after the work is done</span>`);
    }

    /* ---------------- splash */
    const splash = pg('splash', `<div class="sp-big"><span class="w1">Just</span> ${chip('act', ['say it.'], 'spch')}<u class="spcr"></u></div>
      <div class="sp-brand">${logo(34)}Image Swiss Knife</div><p class="sp-sub">${I('lock', 15, 2.4)}Free. Nothing leaves this ${web ? 'computer' : 'phone'}.</p>`);

    /* ---------------- home */
    const ACTS = ['change the format', 'turn into a GIF', 'find the place', 'crop', 'make smaller', 'crop', 'find the place', 'turn into a GIF'];
    const hist = `<div class="hist">${app ? '' : '<p class="pnh" style="margin-bottom:6px">Today</p>'}
      <div class="hr0">Nothing made yet today. Your first one is a tap away.</div>
      <div class="hr r1"><i style="background-image:${P.portrait}"></i><span>You made <mark class="k-act">1 photo smaller</mark> today.</span></div>
      <div class="hr r2"><i style="background-image:${P.mountain}"></i><span>You cropped <mark class="k-pur">1 photo for Instagram</mark>.</span></div>
      <div class="hr r3"><i style="background-image:${P.city}"></i><span>You removed <mark class="k-act">the place</mark> from 1 photo.</span></div></div>`;
    const legend = `<div class="legend"><p class="pnh">What the colours mean</p><div class="lg"><span class="k-act"><i></i>what to do</span><span class="k-file"><i></i>which file</span><span class="k-amt"><i></i>how much</span><span class="k-pur"><i></i>what for</span></div></div>`;
    const home = pg('home', `${app ? `<div class="tb"><span class="brand">${logo(28)}Image Swiss Knife</span><span class="lk">${I('lock', 14, 2.4)}On this phone</span></div>` : ''}
      <p class="hi">Good evening.</p>
      <div class="sns"><div class="sn">I want to ${chip('act', ACTS, 'hA', true)} ${chip('file', ['a photo', 'IMG_2041'], 'hF', true)}</div></div>
      <p class="tip"><i></i>${web ? 'Click a coloured word to change it, or drop a file.' : 'Tap a coloured word to change it.'}</p>
      <div class="body">
        <div class="cv">${web ? `<div class="drop"><div class="dic">${I('upload', 32, 2.4)}</div><b>Drop a photo or video here</b><span>or click the blue word above</span><div class="dropped" style="background-image:${P.portrait}"></div></div>` : hist + legend}</div>
        ${web ? `<div class="pn">${hist}${legend}</div>` : `<p class="safe">${I('lock', 16, 2.4)}Nothing leaves this phone.</p>`}
      </div>`);
    const fcard = web ? A.el('div', 'fcard', S, `<i style="background-image:${P.portrait}"></i><span>${D.portrait.file}</span><small>From your desktop · ${D.portrait.size}</small>`) : null;

    /* ---------------- shrink */
    const SIZES = ['4.8 MB', '3.6 MB', '2.4 MB', '1.5 MB', '900 KB', '520 KB', '310 KB', '196 KB'];
    const shr = pg('shr', `${back}
      <div class="sns">
        <div class="sn s1">Make ${chip('file', ['IMG_2041'], 'f')} ${chip('act', ['smaller'], 'a')}, under ${nw(chip('amt', [BL, '1 MB', '500 KB', '300 KB', '200 KB'], 'm') + ',')} for ${nw(aw('an ', 'w-an') + chip('pur', [BL, 'exam form'], 'p') + '.')}</div>
        <div class="sn s2">Making it smaller… ${chip('amt', SIZES, 'w')}</div>
        <div class="sn s3">Made it ${nw(chip('amt', ['196 KB'], 'r1') + '.')} ${nw(chip('act', ['96% smaller'], 'r2') + '.')} ${aw('Looks the same.', 'r3')}</div>
      </div>
      <div class="body">
        <div class="cv"><div class="pcard"><div class="phi" style="background-image:${P.portrait}"><div class="scan"></div></div><span class="tag tb4">${D.portrait.file} · ${D.portrait.size}</span><span class="tag taf">${D.shrink.size} · ${D.shrink.px} · ${D.shrink.format}</span></div></div>
        <div class="pn">
          <dl class="kv kvs"><dt>File</dt><dd>${D.portrait.file} · ${D.portrait.size}</dd><dt>For</dt><dd data-t="10.35" data-v0="tap the pink word" data-v1="An exam or job form"></dd><dt>Size</dt><dd data-t="11.15" data-v0="…" data-v1="Under 200 KB"></dd><dt>Format</dt><dd data-t="11.15" data-v0="…" data-v1="${D.shrink.format} · ${D.shrink.px}"></dd></dl>
          <p class="line rule">${I('ruler', 22, 2.2)}<span>Rule: exam forms take a ${D.shrink.format} under 200 KB, ${D.shrink.px}.</span></p>
          <div class="bars"><span>Before</span><i class="b0"></i><b>${D.portrait.size}</b><span>After</span><i class="b1"></i><b>${D.shrink.size}</b></div>
        </div>
        ${go('', 'Do it')}
      </div>`);

    /* ---------------- crop */
    const crp = pg('crp', `${back}
      <div class="sns">
        <div class="sn s1">${chip('act', ['Crop'], 'a')} ${chip('file', [BL, 'mountain photo'], 'f')} for ${nw(aw('an ', 'w-an') + chip('pur', [BL, 'Instagram post'], 'p') + '.')}</div>
        <div class="sn s2">Cropped to ${nw(chip('amt', [D.crop.px], 'r1') + '.')} Ready for ${nw(chip('pur', ['Instagram'], 'r2') + '.')}</div>
      </div>
      <div class="body">
        <div class="cv"><div class="cbox"><div class="cimg" style="background-image:${P.mountain}"></div><div class="cfr"></div><span class="tag ctag">${D.crop.ratio} · ${D.crop.px}</span><div class="ph0">${I('image', 34, 2)}Your photo shows here</div></div></div>
        <div class="pn"><dl class="kv"><dt>Photo</dt><dd data-t="20.1" data-v0="tap the blue word" data-v1="IMG_1650.JPG · 4000 × 3000"></dd><dt>Size</dt><dd data-t="21.2" data-v0="tap the pink word" data-v1="${D.crop.ratio} · ${D.crop.px} px"></dd></dl><p class="line hint">${I('crop', 22, 2.2)}<span>Drag the photo to move it. The white frame is what people will see.</span></p></div>
        ${go('', 'Do it')}
      </div>`);

    /* ---------------- privacy */
    const mapSVG = `<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice"><rect width="300" height="220" fill="#F1F1F1"/><path d="M-10 168C60 136 112 188 172 156S262 92 312 112" stroke="#9EDBFF" stroke-width="16" fill="none"/><path d="M0 64h300M0 130h300M74 0v220M150 0l34 220M238 0v220" stroke="#fff" stroke-width="8"/><path d="M0 98h300M112 0v220M196 0v220" stroke="#E0E0E0" stroke-width="3"/><rect x="182" y="18" width="46" height="36" rx="7" fill="#E4F7B5"/><rect x="18" y="150" width="44" height="44" rx="7" fill="#E4F7B5"/></svg>`;
    const pinSVG = `<svg width="40" height="52" viewBox="0 0 40 52"><path d="M20 50S4 32 4 19a16 16 0 0 1 32 0c0 13-16 31-16 31z" fill="#111"/><circle cx="20" cy="19" r="7" fill="#FFB3DA"/></svg>`;
    const prv = pg('prv', `${back}
      <div class="sns">
        <div class="sn s1">${chip('act', ['Where'], 'a')} was ${chip('file', [BL, 'city photo'], 'f')} taken?</div>
        <div class="sn s2">Taken in ${nw(chip('amt', ['Pune, India'], 'pl') + ',')} on ${chip('pur', ['12 Aug'], 'd1')} at ${nw(chip('pur', ['6:42 PM'], 'd2') + '.')}</div>
        <div class="sn s3">Place removed. ${nw(chip('act', ['Safe to share'], 'r1') + '.')}</div>
      </div>
      <div class="body">
        <div class="cv"><div class="prow"><div class="pph" style="background-image:${P.city}"><span class="tag">${D.place.file}</span><div class="ph0">${I('image', 30, 2)}Photo</div></div>
          <div class="map">${mapSVG}<div class="pin">${pinSVG}</div><span class="plab">${D.place.city}</span><div class="ph0">${I('pin', 30, 2)}Map</div></div></div></div>
        <div class="pn">
          <p class="line warn">${I('eye', 22, 2.2)}<span>Anyone you send it to can see this place.</span></p>
          <dl class="kv"><dt>Place</dt><dd class="kpl"></dd><dt>GPS</dt><dd class="kgp"></dd><dt>Taken</dt><dd data-t="27.1" data-v0="…" data-v1="${D.place.when}"></dd><dt>Camera</dt><dd data-t="27.1" data-v0="…" data-v1="${D.place.device}"></dd></dl>
          <span class="ch k-act rmc"><i class="hl"></i>${I('trash', 24, 2.4)}Remove the place</span>
          <p class="line ok">${I('check', 18, 3)}<span>Saved a clean copy. The date stays. The place is gone.</span></p>
        </div>
        ${go('', 'Share the safe copy', 'share')}
      </div>`);

    /* ---------------- gif */
    const strip = Array.from({ length: 12 }, (_, i) => `<i style="background-image:${A.frame(i)}"></i>`).join('');
    const gif = pg('gif', `${back}
      <div class="sns">
        <div class="sn s1">${chip('act', ['Turn'], 'a')} ${chip('file', [BL, 'beach-trip.mp4'], 'f')} ${aw(`from ${chip('amt', [D.video.from], 'fr')} to ${chip('amt', ['0:08', D.video.to], 'to')} `, 'w-ft')}into a ${nw(chip('pur', ['GIF'], 'p') + '.')}</div>
        <div class="sn s2">Making frame ${chip('amt', ['1', '6', '12', '18', '24', '30', '36'], 'fc')} of ${D.video.frames}.</div>
        <div class="sn s3">Made a ${nw(chip('amt', [D.video.size], 'r1') + ' GIF.')} ${nw(chip('pur', [D.video.clip], 'r2') + ',')} ${D.video.fps} fps, loops forever.</div>
      </div>
      <div class="body">
        <div class="cv"><div class="vid"><div class="vwork"></div><span class="tag vt">${D.video.file} · ${D.video.len}</span><div class="ph0">${I('video', 34, 2)}Your video shows here</div></div>
          <div class="trimc"><div class="trim"><div class="strip">${strip}</div><div class="selw"><i class="hd hL"></i><i class="hd hR"></i></div></div></div>
          <div class="tl"><span>0:00</span><b class="clen">4.0 s chosen</b><span>${D.video.len}</span></div></div>
        <div class="pn"><dl class="kv"><dt>Part</dt><dd class="gd"></dd><dt>Speed</dt><dd>${D.video.fps} fps · ${D.video.frames} frames</dd><dt>Size</dt><dd class="gs"></dd></dl><p class="line hint">${I('film', 22, 2.2)}<span>Drag the lime handles to pick the part.</span></p></div>
        ${go('', 'Do it')}
      </div>`);

    /* ---------------- done */
    const rows = [
      [P.portrait, `<mark class="k-file">IMG_2041</mark> is now <mark class="k-amt">${D.shrink.size}</mark> for an exam form.`],
      [P.mountain, `<mark class="k-file">Mountain photo</mark> fits an <mark class="k-pur">${D.crop.preset}</mark>.`],
      [P.city, `<mark class="k-file">City photo</mark> no longer shows <mark class="k-act">the place</mark>.`],
      [A.frame(5), `<mark class="k-file">${D.video.file}</mark> is now a <mark class="k-amt">${D.video.size}</mark> GIF.`],
    ];
    const done = pg('dn', `${app ? `<div class="tb"><span class="brand">${logo(28)}Image Swiss Knife</span><span class="lk">${I('lock', 14, 2.4)}On this phone</span></div>` : ''}
      <div class="sns"><div class="sn">Today you made ${chip('amt', ['4'], 'c1')} things and saved ${nw(chip('pur', ['4.6 MB'], 'c2') + '.')}</div></div>
      <div class="body">
        <div class="cv"><div class="rlist">${rows.map((r, i) => `<div class="rr r${i}"><i style="background-image:${r[0]}"></i><span>${r[1]}</span></div>`).join('')}</div></div>
        <div class="pn"><p class="prom"><em>${I('lock', 18, 2.4)}</em>${web ? D.promiseWeb : D.promise}</p>
          <div class="ad"><i></i><div><small>Ad</small>Sponsored message shows here, only after the work is done.</div></div></div>
        ${go('sv', `Save all ${D.done.count}`, 'save')}
      </div>`);

    /* ---------------- sheets / popovers */
    const scrim = A.el('div', 'scrim', S);
    const ACT_OPTS = [['make smaller', 'shrink'], ['crop', 'crop'], ['find the place', 'pin'], ['turn into a GIF', 'film'], ['change the format', 'convert']];
    const shAct = A.el('div', 'sh sh-act', S, `<i class="grab"></i><p class="sht">I want to…</p>${ACT_OPTS.map((o, i) => `<div class="op o${i}"><span class="ow k-act"><i class="hl"></i>${o[0]}</span>${I(o[1], 22, 2.2)}</div>`).join('')}`);
    const G = [[P.portrait, 0], [P.mountain, 0], [P.city, 0], [P.beach, 1], [P.a1, 0], [P.a2, 0]];
    const shGal = A.el('div', 'sh sh-gal', S, `<i class="grab"></i><p class="sht"><span class="gt">Which photo?</span><small>Recent</small></p><div class="gal">${G.map((g, i) => `<div class="g g${i}" style="background-image:${g[0]}">${g[1] ? `<span class="vb">▶ ${D.video.len}</span>` : ''}<span class="gk">${I('check', 18, 3)}</span></div>`).join('')}</div>`);
    const shFor = A.el('div', 'sh sh-for', S, `<i class="grab"></i><p class="sht">For…</p>${D.shrink.options.map((o, i) => `<div class="op o${i}"><span class="ow k-pur"><i class="hl"></i>${o.label.replace(/^For /, '').replace('Type my own size', 'my own size')}</span><small>${o.hint}</small></div>`).join('')}`);
    const ratio = p => { const m = 24, w = p.w >= p.h ? m : Math.round(m * p.w / p.h), h = p.h >= p.w ? m : Math.max(7, Math.round(m * p.h / p.w)); return `<span class="rt"><i style="width:${w}px;height:${h}px"></i></span>`; };
    const shPre = A.el('div', 'sh sh-pre', S, `<i class="grab"></i><p class="sht">For…</p>${D.crop.presets.map((p, i) => `<div class="op o${i}">${ratio(p)}<span class="ow k-pur"><i class="hl"></i>${p.label}</span><small>${p.px}</small></div>`).join('')}`);

    /* ---------------- helpers */
    const C = e => { if (!e._c) e._c = { hl: e.querySelector(':scope > .hl'), ul: e.querySelector(':scope > .ul'), rw: e.querySelector('.rw'), rs: e.querySelector('.rs'), bs: [...e.querySelectorAll('.rs > b')] }; return e._c; };
    const slot = p => { const c1 = 1.3, c3 = c1 + 1; return p >= 1 ? 1 : 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };
    const sched = (t, start, steps, fn = slot) => { let cur = start; for (const [a, d, to] of steps) { if (t < a) break; if (d <= 0 || t >= a + d) { cur = to; continue; } return A.lerp(cur, to, fn((t - a) / d)); } return cur; };
    const reel = (e, pos) => {
      const c = C(e); if (!c.rs) return;
      const n = c.bs.length, i0 = A.clamp(Math.floor(pos), 0, n - 1), i1 = A.clamp(Math.ceil(pos), 0, n - 1), f = A.clamp(pos - i0, 0, 1);
      c.rs.style.transform = `translateY(${(-pos * 1.2).toFixed(4)}em)`;
      c.rw.style.width = A.lerp(c.bs[i0].offsetWidth, c.bs[i1].offsetWidth, f).toFixed(1) + 'px';
    };
    const wv = (t, ev, d = 0.38) => { let v = 0; for (const [a, dir] of ev) { if (t < a) break; const p = A.ease.inOut(A.seg(t, a, a + d)); v = dir ? p : 1 - p; } return v; };
    const wipe = (e, v) => { const c = C(e); if (c.hl) c.hl.style.clipPath = `inset(-20% ${((1 - v) * 100).toFixed(1)}% -20% -20%)`; if (c.ul) c.ul.style.opacity = (1 - Math.min(1, v * 3)).toFixed(2); A.cls(e, 'set', v > 0.98); };
    const grow = (e, p) => { e.style.width = (e.firstElementChild.offsetWidth * A.ease.inOut(p)).toFixed(1) + 'px'; };
    const caret = (e, on, left) => { A.cls(e, 'ca', on); A.cls(e, 'cl', !!left); };
    const show = (p, t, ranges) => {
      let o = 0, y = 0;
      for (const [a, b] of ranges) { if (t < a || t > b) continue; const e = A.ease.out(A.seg(t, a, a + 0.35)), l = A.ease.in(A.seg(t, b - 0.3, b)); o = Math.min(e, 1 - l); y = (1 - e) * 18 - l * 10; }
      p._oy = y; A.set(p, { y, o }); return o;
    };
    /* The sentence rolls up like a slot machine line when it turns into the next one. */
    const roll = (list, t, at) => {
      let k = 0; at.forEach((x, i) => { k += slot(A.seg(t, x, x + 0.5)); });
      const h = list[0].parentElement.offsetHeight + 12;
      list.forEach((e, i) => { const d = i - k; A.set(e, { y: d * h, o: Math.abs(d) < 0.999 ? 1 : 0 }); });
    };
    const fade = (e, t, a, b = 99, d = 0.3) => { const o = A.win(t, a, b, d, d); A.set(e, { y: (1 - A.ease.out(A.seg(t, a, a + d))) * 8, o }); };
    const stableC = (e, ax = 0.5, ay = 0.5) => { const c = A.center(e, ax, ay); let dx = 0, dy = 0; for (let p = e; p && p !== S; p = p.parentElement) { dx += p._ox || 0; dy += p._oy || 0; } return { x: c.x - dx, y: c.y - dy }; };
    const st = sel => () => stableC(q(sel));
    const openV = (t, ranges) => { let v = 0, idx = -1; ranges.forEach(([a, b], i) => { const o = Math.min(A.ease.out(A.seg(t, a, a + 0.32)), 1 - A.ease.in(A.seg(t, b, b + 0.26))); if (t >= a - 0.01 && (idx < 0 || o > v)) { if (t >= a) idx = i; } v = Math.max(v, o); }); return { v, idx }; };
    const placeSheet = (sh, v, anchor) => {
      if (app) { const h = sh.offsetHeight + 40; sh._oy = (1 - v) * h; A.set(sh, { y: sh._oy, o: v > 0.002 ? 1 : 0 }); return; }
      if (anchor) { const c = stableC(anchor, 0, 1); sh.style.left = A.clamp(c.x - 16, 40, A.W - sh.offsetWidth - 40).toFixed(1) + 'px'; sh.style.top = A.clamp(c.y + 10, 70, A.H - sh.offsetHeight - 52).toFixed(1) + 'px'; }
      sh._oy = (1 - v) * -10; A.set(sh, { y: sh._oy, s: 0.97 + 0.03 * v, o: v });
    };

    /* ---------------- pointer */
    const keys = [
      ...(web
        ? [{ t: 5.55, at: () => fcard._p ? { x: fcard._p.x + 95, y: fcard._p.y + 70 } : { x: A.W - 120, y: 420 }, hold: 0.2 },
           { t: 6.6, at: () => { const c = stableC(q('.home .drop')); return { x: c.x, y: c.y }; }, drag: true, move: 0.8 }]
        : [{ t: 4.6, at: st('.home .hF'), tap: true }, { t: 6.0, at: st('.sh-gal .g0'), tap: true }]),
      { t: 9.8, at: st('.sh-for .o1'), tap: true },
      { t: 12.0, at: st('.shr .go'), tap: true },
      { t: 15.4, at: st('.shr .go'), tap: true },
      { t: 17.7, at: st('.home .hA'), tap: true },
      { t: 18.3, at: st('.sh-act .o1'), tap: true },
      { t: 19.7, at: st('.sh-gal .g1'), tap: true },
      { t: 20.8, at: st('.sh-pre .o0'), tap: true },
      { t: 21.35, at: '.crp .cimg', hold: 0.15 },
      { t: 22.2, at: '.crp .cimg', drag: true, move: 0.7 },
      { t: 22.75, at: st('.crp .go'), tap: true },
      { t: 24.5, at: st('.home .hA'), tap: true },
      { t: 25.1, at: st('.sh-act .o2'), tap: true },
      { t: 26.4, at: st('.sh-gal .g2'), tap: true },
      { t: 28.4, at: st('.prv .rmc'), tap: true },
      { t: 30.45, at: st('.home .hA'), tap: true },
      { t: 31.0, at: st('.sh-act .o3'), tap: true },
      { t: 32.2, at: st('.sh-gal .g3'), tap: true },
      { t: 33.15, at: '.gif .hR', hold: 0.1 },
      { t: 33.75, at: '.gif .hR', drag: true, move: 0.5 },
      { t: 34.1, at: st('.gif .go'), tap: true },
      { t: 38.3, at: st('.dn .go'), tap: true },
    ];
    A.pointer(keys);

    const E = {
      spW1: q('.splash .w1'), spCh: q('.splash .spch'), spCr: q('.splash .spcr'), spBrand: q('.splash .sp-brand'), spSub: q('.splash .sp-sub'),
      hA: q('.home .hA'), hF: q('.home .hF'), hr0: q('.home .hr0'), hr: qa('.home .hr'), drop: q('.home .drop'), dropped: q('.home .dropped'),
      s: n => q(n),
    };
    const pages = { shr, crp, prv, gif, dn: done };
    const H = {};
    for (const k of Object.keys(pages)) {
      const p = pages[k];
      H[k] = { s1: p.querySelector('.s1'), s2: p.querySelector('.s2'), s3: p.querySelector('.s3'), go: p.querySelector('.go'), gl: p.querySelector('.go .gl') };
    }
    const ch = (p, c) => p.querySelector('.ch.' + c);
    const kt = web ? q('.wf .kt') : null, ke = web ? q('.wf .ke') : null;

    return {
      update(t) {
        const { seg, ease, set, cls, txt } = A;
        S.style.setProperty('--blink', (t * 1.7) % 1 < 0.56 ? '1' : '0');

        /* ---------- splash */
        show(splash, t, [[-1, 2.5]]);
        if (t < 2.6) {
          set(E.spW1, { y: 24 * (1 - ease.out(seg(t, 0.1, 0.6))), o: seg(t, 0.1, 0.45) });
          set(E.spCh, { y: 24 * (1 - ease.out(seg(t, 0.35, 0.85))), o: seg(t, 0.35, 0.7) });
          reel(E.spCh, 0); wipe(E.spCh, wv(t, [[0.85, 1]], 0.5));
          set(E.spCr, { o: t > 1.3 ? 1 : 0 });
          set(E.spBrand, { y: 12 * (1 - ease.out(seg(t, 1.3, 1.7))), o: seg(t, 1.3, 1.65) });
          set(E.spSub, { y: 10 * (1 - ease.out(seg(t, 1.5, 1.9))), o: seg(t, 1.5, 1.85) });
        }
        if (web) { set(q('.wh'), { o: seg(t, 2.2, 2.6) }); set(q('.wf'), { o: seg(t, 2.2, 2.6) }); }

        /* ---------- home */
        show(home, t, [[2.3, 7.45], [17.0, 18.95], [24.05, 25.65], [30.05, 31.55]]);
        reel(E.hA, sched(t, 0, [[2.6, 1.15, 4], [18.4, 0.45, 5], [19.3, 0, 4], [25.2, 0.5, 6], [26, 0, 4], [31.1, 0.5, 7]]));
        wipe(E.hA, wv(t, [[2.45, 1]]));
        const fileSet = web ? 6.65 : 6.35;
        reel(E.hF, sched(t, 0, [[fileSet, 0.5, 1], [8, 0, 0]]));
        wipe(E.hF, wv(t, [[2.7, 1]]));
        caret(E.hF, t > 3.5 && t < (web ? 6.6 : 4.6));
        caret(E.hA, (t > 17.15 && t < 17.7) || (t > 24.25 && t < 24.5) || (t > 30.25 && t < 30.45));
        [17.7, 24.5, 30.45].forEach(x => A.press(E.hA, t, x)); if (app) A.press(E.hF, t, 4.6);
        const hN = t < 16.5 ? 0 : t < 23.5 ? 1 : t < 29.5 ? 2 : 3;
        E.hr0.style.display = hN ? 'none' : '';
        E.hr.forEach((r, i) => {
          r.style.display = i < hN ? '' : 'none';
          const nt = [17.2, 24.3, 30.3][i], isNew = i === hN - 1;
          r.style.setProperty('--w', (isNew ? ease.inOut(seg(t, nt, nt + 0.5)) * 100 : 100).toFixed(1) + '%');
          set(r, { o: isNew ? seg(t, nt - 0.2, nt + 0.1) : 1 });
        });
        if (web) {
          const st0 = Math.max(5.55 + 0.2 + 0.12, 6.6 - 0.8), qd = ease.inOut(seg(t, st0, 6.6));
          const dc = stableC(E.drop), p0 = { x: A.W - 215, y: 360 }, p1 = { x: dc.x - 95, y: dc.y - 70 };
          const enter = ease.out(seg(t, 4.85, 5.3));
          const pos = { x: A.lerp(p0.x, p1.x, qd) + (1 - enter) * 300, y: A.lerp(p0.y, p1.y, qd) };
          fcard._p = { x: A.lerp(p0.x, p1.x, qd), y: pos.y };
          fcard.style.left = pos.x.toFixed(1) + 'px'; fcard.style.top = pos.y.toFixed(1) + 'px';
          set(fcard, { r: (1 - qd) * 5, s: 1 - 0.1 * qd, o: (t > 4.85 && t < 6.85 ? 1 : 0) * (1 - seg(t, 6.6, 6.8)) });
          cls(E.drop, 'hot', t > 6.0 && t < 6.6); cls(E.drop, 'got', t >= 6.6 && t < 8);
          set(E.dropped, { s: 0.94 + 0.06 * ease.outBack(seg(t, 6.6, 7.0)), o: t < 8 ? seg(t, 6.6, 6.8) : 0 });
        }

        /* ---------- shrink */
        const pS = shr, hS = H.shr;
        show(pS, t, [[7.45, 17.0]]);
        roll([hS.s1, hS.s2, hS.s3], t, [12.1, 13.75]);
        {
          const f = ch(pS, 'f'), a = ch(pS, 'a'), m = ch(pS, 'm'), p = ch(pS, 'p');
          reel(f, 0); wipe(f, wv(t, [[7.45, 1]]));
          reel(a, 0); wipe(a, wv(t, [[7.6, 1]]));
          reel(p, sched(t, 0, [[10.05, 0.4, 1]])); wipe(p, wv(t, [[10.35, 1]]));
          reel(m, sched(t, 0, [[10.45, 0.8, 4]])); wipe(m, wv(t, [[11.15, 1]]));
          grow(pS.querySelector('.w-an'), seg(t, 10.05, 10.35));
          caret(p, t > 7.9 && t < 9.85, true);
          const w = ch(pS, 'w'); reel(w, sched(t, 0, [[12.5, 1.25, 7]], ease.inOut)); wipe(w, 1);
          const r1 = ch(pS, 'r1'), r2 = ch(pS, 'r2'); reel(r1, 0); reel(r2, 0);
          wipe(r1, wv(t, [[14.15, 1]])); wipe(r2, wv(t, [[14.4, 1]]));
          grow(pS.querySelector('.r3'), seg(t, 14.6, 15.0));
          const scan = pS.querySelector('.scan');
          scan.style.width = (seg(t, 12.3, 13.75) * 100).toFixed(1) + '%';
          set(scan, { o: t < 12.3 ? 0 : t < 13.75 ? 1 : 1 - seg(t, 13.75, 14.05) });
          if (web) set(pS.querySelector('.phi'), { s: 1 - 0.06 * ease.inOut(seg(t, 12.3, 13.75)) });
          set(pS.querySelector('.tb4'), { o: t < 13.9 ? 1 : 0 });
          set(pS.querySelector('.taf'), { o: seg(t, 13.9, 14.15) });
          fade(pS.querySelector('.rule'), t, 11.3);
          fade(pS.querySelector('.bars'), t, 14.3);
          const kvs = pS.querySelector('.kvs'); kvs.style.display = t < 14.2 ? '' : 'none'; pS.querySelector('.bars').style.display = t < 14.2 ? 'none' : '';
          pS.querySelector('.b0').style.width = '100%';
          pS.querySelector('.b1').style.width = (100 - 96 * ease.inOut(seg(t, 14.45, 15.1))).toFixed(1) + '%';
          cls(hS.go, 'off', t < 11.3 || (t > 12.05 && t < 13.9));
          txt(hS.gl, t < 12.05 ? 'Do it' : t < 13.9 ? 'Working…' : t < 15.5 ? `Save to ${where}` : `Saved to ${where}`);
          cls(hS.go, 'ok', t >= 15.5);
          A.press(hS.go, t, 12.0); A.press(hS.go, t, 15.4);
        }

        /* ---------- crop */
        const pC = crp, hC = H.crp;
        show(pC, t, [[18.95, 24.05]]);
        roll([hC.s1, hC.s2], t, [22.8]);
        {
          const a = ch(pC, 'a'), f = ch(pC, 'f'), p = ch(pC, 'p');
          reel(a, 0); wipe(a, wv(t, [[19.1, 1]]));
          reel(f, sched(t, 0, [[19.85, 0.4, 1]])); wipe(f, wv(t, [[20.1, 1]]));
          reel(p, sched(t, 0, [[20.95, 0.4, 1]])); wipe(p, wv(t, [[21.2, 1]]));
          grow(pC.querySelector('.w-an'), seg(t, 20.95, 21.25));
          caret(f, t > 19.05 && t < 19.75, true); caret(p, t > 20.1 && t < 20.85, true);
          const r1 = ch(pC, 'r1'), r2 = ch(pC, 'r2'); reel(r1, 0); reel(r2, 0);
          wipe(r1, wv(t, [[23.2, 1]])); wipe(r2, wv(t, [[23.4, 1]]));
          set(pC.querySelector('.ph0'), { o: 1 - seg(t, 19.85, 20.15) });
          const frO = seg(t, 21.0, 21.3);
          set(pC.querySelector('.cfr'), { o: frO, s: 1.06 - 0.06 * ease.out(frO) });
          set(pC.querySelector('.ctag'), { o: frO });
          const dq = ease.inOut(seg(t, 21.5, 22.2));
          set(pC.querySelector('.cimg'), { x: (web ? -80 : -60) * dq, s: 1 + 0.03 * (1 - ease.out(seg(t, 19.85, 20.4))) });
          fade(pC.querySelector('.hint'), t, 21.2);
          cls(hC.go, 'off', t < 21.3);
          txt(hC.gl, t < 22.8 ? 'Do it' : `Saved to ${where}`); cls(hC.go, 'ok', t >= 22.8);
          A.press(hC.go, t, 22.75);
        }

        /* ---------- privacy */
        const pP = prv, hP = H.prv;
        show(pP, t, [[25.65, 30.05]]);
        roll([hP.s1, hP.s2, hP.s3], t, [26.85, 28.9]);
        {
          const a = ch(pP, 'a'), f = ch(pP, 'f');
          reel(a, 0); wipe(a, wv(t, [[25.8, 1]]));
          reel(f, sched(t, 0, [[26.5, 0.4, 1]])); wipe(f, wv(t, [[26.75, 1]]));
          caret(f, t > 25.85 && t < 26.4, true);
          const pl = ch(pP, 'pl'), d1 = ch(pP, 'd1'), d2 = ch(pP, 'd2'), r1 = ch(pP, 'r1');
          [pl, d1, d2, r1].forEach(c => reel(c, 0));
          wipe(pl, wv(t, [[27.3, 1], [28.5, 0]])); wipe(d1, wv(t, [[27.5, 1]])); wipe(d2, wv(t, [[27.65, 1]]));
          wipe(r1, wv(t, [[29.35, 1]]));
          let sk = pl.querySelector('.strike'); if (!sk) sk = A.el('i', 'strike', pl);
          sk.style.width = (ease.inOut(seg(t, 28.6, 28.9)) * 100).toFixed(1) + '%';
          const phs = pP.querySelectorAll('.ph0');
          set(phs[0], { o: 1 - seg(t, 26.55, 26.85) }); set(phs[1], { o: 1 - seg(t, 26.9, 27.2) });
          const pinQ = ease.outBack(seg(t, 27.15, 27.55)), rm = seg(t, 28.55, 28.95);
          set(pP.querySelector('.pin'), { y: -36 * (1 - pinQ) - 20 * rm, o: seg(t, 27.15, 27.3) * (1 - rm) });
          set(pP.querySelector('.plab'), { o: seg(t, 27.4, 27.6) * (1 - rm) });
          pP.querySelector('.map svg').style.filter = `grayscale(${rm.toFixed(2)}) opacity(${(1 - 0.45 * rm).toFixed(2)})`;
          const warn = pP.querySelector('.warn'), rmc = pP.querySelector('.rmc'), ok = pP.querySelector('.ok');
          fade(warn, t, 27.5, 28.75);
          const showRm = t < 28.75;
          rmc.style.display = showRm ? '' : 'none'; warn.style.display = showRm ? '' : 'none';
          const kpl = pP.querySelector('.kpl'), kgp = pP.querySelector('.kgp');
          txt(kpl, t < 26.4 ? 'tap the blue word' : t < 27.1 ? 'reading the photo…' : t < 28.6 ? `${D.place.city}, ${D.place.region}, ${D.place.country}` : 'Removed');
          txt(kgp, t < 27.1 ? '…' : t < 28.6 ? `${D.place.lat}, ${D.place.lon}` : 'Removed');
          cls(kpl, 'wait', t < 27.1); cls(kgp, 'wait', t < 27.1); cls(kpl, 'gone', t >= 28.6); cls(kgp, 'gone', t >= 28.6);
          set(hP.go.parentElement, { o: seg(t, 28.9, 29.2) });
          ok.style.display = showRm ? 'none' : '';
          set(rmc, { o: seg(t, 27.6, 27.8) * (1 - seg(t, 28.55, 28.75)) }); wipe(rmc, wv(t, [[27.7, 1]]));
          A.press(rmc, t, 28.4);
          fade(ok, t, 28.8);
        }

        /* ---------- gif */
        const pG = gif, hG = H.gif;
        show(pG, t, [[31.55, 36.05]]);
        roll([hG.s1, hG.s2, hG.s3], t, [34.15, 34.95]);
        {
          const a = ch(pG, 'a'), f = ch(pG, 'f'), p = ch(pG, 'p'), fr = ch(pG, 'fr'), to = ch(pG, 'to');
          reel(a, 0); wipe(a, wv(t, [[31.7, 1]])); reel(p, 0); wipe(p, wv(t, [[31.85, 1]]));
          reel(f, sched(t, 0, [[32.3, 0.4, 1]])); wipe(f, wv(t, [[32.55, 1]]));
          reel(fr, 0); wipe(fr, wv(t, [[32.85, 1]]));
          reel(to, sched(t, 0, [[33.4, 0.4, 1]])); wipe(to, wv(t, [[33.0, 1]]));
          grow(pG.querySelector('.w-ft'), seg(t, 32.5, 32.9));
          caret(f, t > 31.7 && t < 32.2, true);
          const fc = ch(pG, 'fc'); reel(fc, sched(t, 0, [[34.35, 0.6, 6]], A.ease.lin)); wipe(fc, 1);
          const r1 = ch(pG, 'r1'), r2 = ch(pG, 'r2'); reel(r1, 0); reel(r2, 0);
          wipe(r1, wv(t, [[35.3, 1]])); wipe(r2, wv(t, [[35.5, 1]]));
          set(pG.querySelector('.vid .ph0'), { o: 1 - seg(t, 32.35, 32.65) });
          const made = t >= 35.0;
          pG.querySelector('.vid').style.backgroundImage = made ? A.frame(12 + (Math.floor(t * 12) % 9), 36) : A.frame(Math.floor(t * 12) % 12);
          const vw = pG.querySelector('.vwork'); vw.style.width = (seg(t, 34.25, 35.0) * 100).toFixed(1) + '%'; set(vw, { o: t > 34.2 && t < 35.05 ? 1 : 0 });
          txt(pG.querySelector('.vt'), made ? `GIF · ${D.video.size} · ${D.video.frames} frames` : `${D.video.file} · ${D.video.len}`);
          const tq = ease.inOut(seg(t, 33.27, 33.75));
          const selw = pG.querySelector('.selw'), L = 4 / 12 * 100, R = (8 - tq) / 12 * 100;
          selw.style.left = L + '%'; selw.style.width = (R - L) + '%';
          set(pG.querySelector('.trimc'), { o: seg(t, 32.6, 32.9) }); set(pG.querySelector('.tl'), { o: seg(t, 32.6, 32.9) });
          const clip = tq > 0.5 ? D.video.clip : '4.0 s';
          txt(pG.querySelector('.clen'), `${clip} chosen`);
          txt(pG.querySelector('.gd'), `From ${D.video.from} to ${tq > 0.5 ? D.video.to : '0:08'} · ${clip}`);
          fade(pG.querySelector('.pn'), t, 32.7);
          txt(pG.querySelector('.gs'), made ? `${D.video.size} · plays on a loop` : 'ready after Do it'); cls(pG.querySelector('.gs'), 'wait', !made);
          cls(hG.go, 'off', t < 32.7 || (t > 34.15 && t < 35.0));
          txt(hG.gl, t < 34.15 ? 'Do it' : t < 35.0 ? 'Working…' : 'Save GIF');
          A.press(hG.go, t, 34.1);
        }

        /* ---------- done */
        const pD = done, hD = H.dn;
        show(pD, t, [[36.05, 41]]);
        {
          const c1 = ch(pD, 'c1'), c2 = ch(pD, 'c2'); reel(c1, 0); reel(c2, 0);
          wipe(c1, wv(t, [[36.4, 1]])); wipe(c2, wv(t, [[36.65, 1]]));
          pD.querySelectorAll('.rr').forEach((r, i) => {
            const a = 36.55 + i * 0.22;
            set(r, { x: (1 - ease.out(seg(t, a, a + 0.4))) * 24, o: seg(t, a, a + 0.3) });
            r.style.setProperty('--w', (ease.inOut(seg(t, a + 0.2, a + 0.6)) * 100).toFixed(1) + '%');
          });
          fade(pD.querySelector('.prom'), t, 37.4); fade(pD.querySelector('.ad'), t, 37.7);
          set(pD.querySelector('.foot'), { o: seg(t, 37.5, 37.8) });
          txt(hD.gl, t < 38.45 ? `Save all ${D.done.count}` : `${D.done.count} files saved to ${where}`); cls(hD.go, 'ok', t >= 38.45);
          A.press(hD.go, t, 38.3);
        }

        S._kv = S._kv || qa('dd[data-t]');
        S._kv.forEach(d => { const on = t >= +d.dataset.t; txt(d, on ? d.dataset.v1 : d.dataset.v0); cls(d, 'wait', !on); });

        /* ---------- sheets */
        const gal = openV(t, [...(app ? [[4.75, 6.2]] : []), [19.0, 19.9], [25.75, 26.55], [31.6, 32.35]]);
        const galA = app ? [E.hF, ch(crp, 'f'), ch(prv, 'f'), ch(gif, 'f')] : [ch(crp, 'f'), ch(prv, 'f'), ch(gif, 'f')];
        placeSheet(shGal, gal.v, galA[Math.max(0, gal.idx)]);
        txt(shGal.querySelector('.gt'), t > 31 ? 'Which video?' : 'Which photo?');
        const gTaps = [[app ? 6.0 : -9, 0], [19.7, 1], [26.4, 2], [32.2, 3]];
        shGal.querySelectorAll('.g').forEach((g, i) => {
          const tap = gTaps.find(x => x[1] === i);
          cls(g, 'on', !!tap && t >= tap[0] && t < tap[0] + 1.2);
          if (tap) A.press(g, t, tap[0]);
        });
        const act = openV(t, [[17.8, 18.4], [24.6, 25.2], [30.5, 31.05]]);
        placeSheet(shAct, act.v, E.hA);
        const aTaps = [[18.3, 1], [25.1, 2], [31.0, 3]];
        shAct.querySelectorAll('.op').forEach((o, i) => {
          const tap = aTaps.find(x => x[1] === i && t >= x[0] - 0.1 && t < x[0] + 1);
          wipe(o.querySelector('.ow'), tap ? wv(t, [[tap[0], 1]], 0.25) : 0);
          aTaps.forEach(x => { if (x[1] === i) A.press(o, t, x[0]); });
        });
        const fr = openV(t, [[8.5, 10.0]]);
        placeSheet(shFor, fr.v, ch(shr, 'p'));
        shFor.querySelectorAll('.op').forEach((o, i) => { wipe(o.querySelector('.ow'), i === 1 ? wv(t, [[9.8, 1]], 0.25) : 0); if (i === 1) A.press(o, t, 9.8); });
        const pr = openV(t, [[20.15, 20.95]]);
        placeSheet(shPre, pr.v, ch(crp, 'p'));
        shPre.querySelectorAll('.op').forEach((o, i) => { wipe(o.querySelector('.ow'), i === 0 ? wv(t, [[20.8, 1]], 0.25) : 0); if (i === 0) A.press(o, t, 20.8); });
        if (app) scrim.style.opacity = (0.3 * Math.max(gal.v, act.v, fr.v, pr.v)).toFixed(3);
        else scrim.style.display = 'none';
        if (web) { cls(kt, 'dn', (t > 8.3 && t < 8.55) || (t > 20.0 && t < 20.25)); cls(ke, 'dn', false); }

      },
    };
  },
});

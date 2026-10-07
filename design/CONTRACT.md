# Style Lab contract

`ui-style-lab.html` shows eight UI directions for **Image Swiss Knife**. It is a free, ad-supported app and website that does everything on the device. Every direction tells the **same 40-second story**, so the owner can compare them moment by moment, in two layouts: **app** (Android phone, 390 × 844) and **web** (desktop browser viewport, 1280 × 756).

Product philosophy (from the owner): *we win on experience: easy, clean, fun, visually stunning, and simple enough that a grandfather can use it.* No AI features anywhere.

## Files

| File | Role |
|---|---|
| `src/engine.js` | Timeline engine and helpers (`ISK`). Do not edit it unless you are the lead. |
| `src/shell.html` | The explorer page: dropdown, App/Web toggle, timeline, spec sheet. Do not edit. |
| `src/styles/NN-id.js` | One file per direction. Each calls `ISK.register({...})`. |
| `build.mjs` | Builds `ui-style-lab.html`. `--only <id> --out <file>` builds a one-style preview. |
| `tools/shoot.mjs` | Takes screenshots at given times, plus a contact sheet per mode. |

The reference implementation is `src/styles/03-calm.js`. Read it first.

## The story (fixed times, shared by all styles)

| t (s) | Scene id | What must happen |
|---|---|---|
| 0–4 | `intro` | Launch or brand moment, then home. |
| 4–9 | `pick` | The user picks the portrait photo. On the phone use a gallery; on the web, drag a file onto the page. |
| 9–17 | `shrink` | Compress to the target KB for an exam form. The size counts **4.8 MB → 196 KB**, the result is shown, and the user saves it. |
| 17–24 | `crop` | Crop the mountain photo for **Instagram post 4:5, 1080 × 1350**. Show the presets list, then reposition the photo inside the frame. |
| 24–30 | `privacy` | "Where was it taken?" on the city photo. Show the place (**Pune, India**) and a map pin, warn about sharing, then remove the location. |
| 30–36 | `gif` | Video to GIF: trim a **3.0 s** part of `beach-trip.mp4`, make the GIF (**2.1 MB**, 12 fps, 36 frames), and show it looping. |
| 36–40 | `done` | A summary of the 4 results and the promise "Done on your phone. Nothing uploaded." (or "...in your browser..." on the web). Show **one** tasteful ad slot, labelled "Ad", placed only after the work is done. |

Use the exact numbers and names from `A.DATA`. Small timing shifts inside a scene are fine. Scene boundaries must stay where they are, because the timeline chapters are shared.

## Registering a style

```js
ISK.register({
  id: 'swiss', order: 1, name: 'Swiss Blade', tagline: 'One short line',
  concept: '2–4 sentences: the big idea in plain words.',
  wins: ['3 bullets: why this could beat rivals'],
  risks: ['2 bullets: honest downsides'],
  scores: { simple: 1-5, fun: 1-5, wow: 1-5, effort: 1-5 }, // effort = build cost, 5 = hardest
  palette: ['#hex', ...5-6],
  type: 'Fonts and why',
  motion: 'The motion signature in one sentence',
  notes: { intro, pick, shrink, crop, privacy, gif, done },   // one sentence per scene: what is special here
  statusBar: 'dark' | 'light' | (t, mode) => 'dark'|'light',  // phone status bar text colour
  css: `...`,            // EVERY selector starts with .st-<id>   (use .st-<id>.m-web for web overrides)
  build(S, A) { ...; return { update(t) { ... } }; },
});
```

`build` runs once per mount, with `S` = the screen element (`.isk-screen.st-<id>.m-app|m-web`, fixed size `A.W × A.H`) and `A` = the helper API. It returns `update(t)`. That function **must be a pure function of t**, because users scrub backwards and forwards. Never use `Date.now()`, never use CSS `@keyframes`/`animation`, never keep state that depends on the previous frame, and never use `Math.random()` (use `A.rng(seed)`). Short CSS `transition`s of up to 0.2 s on hover-like states are tolerated, but avoid them where possible.

In app mode the engine draws the phone status bar over the top 46 px and a home bar at the bottom. Keep tappable content out of the top 50 px and the bottom 24 px.

## Helper API (`A`)

| Helper | Use |
|---|---|
| `A.mode`, `A.app`, `A.web`, `A.W`, `A.H`, `A.DATA`, `A.SCENES` | Context. |
| `A.seg(t,a,b)` | 0..1 progress between a and b (clamped). |
| `A.ease.{lin,in,out,inOut,outQuart,outBack,outElastic,spring}` | Easing functions. |
| `A.win(t,a,b,fadeIn,fadeOut)` | 0..1 visibility window. |
| `A.count(t,a,b,from,to,ease)`, `A.fmtBytes(n)`, `A.typed(t,a,text,cps)` | Numbers and typing. |
| `A.lerp`, `A.clamp`, `A.rng(seed)` | Maths and seeded randomness. |
| `A.el(tag,cls,parent,html)` | Create an element. |
| `A.set(el,{x,y,s,sx,sy,r,o})` | Set transform and opacity. `o: 0` also hides the element. |
| `A.txt(el,s)`, `A.html(el,s)`, `A.cls(el,name,on)` | Cheap DOM updates (no-ops when unchanged). |
| `A.icon(name,size,stroke)` | Stroke icon SVG string. Names: check shrink crop pin film convert grid share save back next shield play pause image video lock sparkle plus x scissors upload folder trash star heart search layers clock phone globe eye eyeoff menu home settings wand ruler palette. |
| `A.photo('portrait'|'mountain'|'city'|'beach'|'abstract', opts)` | A CSS `url('…')` for background-image (`background-size:cover`). Options: `mountain {sun:0..1}`, `beach {k:0..1}`, `abstract {seed}`. It is safe inside `style="…"`. |
| `A.frame(i, n=12)` | Video frame i of the looping beach clip (a kite and a ball move). |
| `A.pointer(keys)` | The simulated finger (app) or mouse cursor (web). See below. |
| `A.center(elOrSelector)` | Element centre in screen pixels (for pointer targets that are computed). |
| `A.press(el,t,tapT)` | Adds class `is-pressed` around a tap time. Style it as you like. |
| `A.confetti(parent,{x,y,count,colors,seed,power,spread,gravity,dur})` | Returns `{update(dt)}`. Call it with `t - burstTime`. |
| `A.after(fn)` | Runs `fn(t)` after `update`, for anything that reads layout. |

### Pointer

`A.pointer([{ t, at, tap, hold, drag, move, dx, dy, ax, ay }, ...])`. `at` can be a selector inside S, an element, `{x,y}`, or `() => ({x,y})`. The pointer glides to each key so it arrives at `t`. `tap: true` shows a press and a ripple. `drag: true` keeps it pressed while it travels into that key. To fake a drag, make the key `at` the moving element itself (as calm does with `.cimg` and `.hR`) and animate that element over the same window. The travel starts at `max(prev.t + (prev.hold||0) + 0.12, t - (move ?? 0.75))`. Every visible tap or drag in the story should have a pointer key, so viewers see what the user does.

## Quality bar

- It has to look like a real, shippable, distinctive product. No lorem ipsum, and no placeholder grey boxes except the "Ad" slot.
- **The web layout must be a real desktop layout** (sidebars, wide canvas, drag and drop from the desktop, keyboard hints and so on), not the phone UI stretched.
- Text must never overflow or clip, and nothing may overlap by accident, in either mode at any time. Check with screenshots.
- The direction's own idea must be obvious within 3 seconds of watching any scene.
- Don't use brand logos (Instagram, WhatsApp and so on). Text names of presets are fine. Don't use the Swiss flag or cross, because its commercial use is legally restricted.
- Fonts are already loaded by the shell (Google Fonts): Archivo (wdth 62–125), Atkinson Hyperlegible, Bricolage Grotesque, Dela Gothic One, Familjen Grotesk, Fredoka, Hanken Grotesk, JetBrains Mono, Lexend, Manrope, Rubik, Unbounded. Use only these, with system fallbacks.
- Keep each style file under about 900 lines. Draw shapes with CSS, inline SVG or the photo helpers, never with external assets.

## Test loop

```bash
cd /home/user/Course/design
SP=<your scratch dir>
node build.mjs --only <id> --out $SP/<id>.html
node tools/shoot.mjs --page $SP/<id>.html --style <id> --modes app,web \
  --times 1,3.5,6,8,10.5,12.5,15,18.5,21,23,25.5,27,29,31.5,33.5,35,37,39.5 --outdir $SP/shots-<id>
# then Read $SP/shots-<id>/sheet-<id>-app.png and sheet-<id>-web.png (and single frames for detail)
```

The script prints `CONSOLE ERRORS` if any occur, and there must be none.

---

# Round 2 brief: gamified, with a character (styles 9 to 16)

Round 1 (styles 1 to 8) is done. Round 2 builds on what the owner liked: **the Clay Buddy character plus the game feel**. The owner's rules, in their own words, condensed:

1. **A real character with details.** More than a blob: expressive face (eyes, brows, cheeks, mouth shapes), body parts that move, accessories, idle life (breathing, blinking, looking at the pointer), and many moods. **Tapping the character opens a quick menu** (radial or small list of tools) so the user can jump anywhere in one tap.
2. **A professional look.** Not childish or "cartoonish". Think premium game or well-funded consumer app: considered lighting (gradients, rim light, soft shadow), consistent illustration, refined type, tight spacing. Keep the game spirit (XP, levels, streaks, quests, badges, collectibles, ranks) but make it feel grown-up and trustworthy. Styles may use a different character (animal, robot, spirit, astronaut, plant...), as briefed.
3. **Evolve the gamification.** Show real game systems that make sense for a free tools app: XP and levels, streaks, daily quests, achievements, collectibles, ranks. Rewards appear at completion, never block the flow.
4. **Minimal clicks.** The whole story must finish with very few taps. Choosing the purpose ("Exam form") starts the job immediately, with no Next or Start. Suggestions come from the character. Show a small "N taps" receipt on the finish screen.
5. **Compact.** Not everything big. Base text 13 to 15 px, controls 40 to 44 px, dense but breathable cards, bottom bar or compact top bar. On the web use a proper desktop layout with sensible widths, not stretched phone UI.
6. **Waiting must feel short and beautiful.** Every process (shrink, remove location, make GIF) shows a mesmerising progress animation that makes time pass quickly. The progress is front-loaded (`A.rush`), the visual is busy and fast, and multiple mini bars may converge into one. **Each style uses at least three different bar kinds**, one per process, chosen with `A.bars(3, kinds, seed)` so the viewer can press "Shuffle bars" to see another set. Recolour bars to the style's palette, and you may add your own custom bar on top of the library (for example a brush stroke, a vine, a belt filling). The wait should also be entertaining: the character reacts, numbers count down, stage labels change.
7. **Unique motion.** The product does the same jobs as every competitor, so the motion must be the difference. Each style needs: a **signature screen-change effect** (use `A.reveal` kinds or custom), a **signature process effect**, a **signature completion effect** (use `A.confetti` shapes or custom), and tool-to-tool transitions that feel lightweight, not heavy.

## Story changes for round 2 (same scene boundaries as before)

| t (s) | Scene | Round 2 requirement |
|---|---|---|
| 0–4 | `intro` | The character enters with personality (greeting, small gag). Home is compact and ends with the character plus a short list of tools or a smart suggestion. |
| 4–9 | `pick` | One tap to choose the photo (phone) or a drag from the desktop (web). The character reacts (surprise, curious, thumbs up). Show the file facts briefly. |
| 9–17 | `shrink` | **One tap** on "Exam form" (or the suggestion bubble) starts the job. Process #1 with bar kind A for 3 s or more (about 11 to 14.3 s). Size counts 4.8 MB → 196 KB. A completion effect plays, the character celebrates, XP is awarded, then Save. |
| 17–24 | `crop` | The user **taps the character** and the quick menu opens (show it clearly, about 1.2 s). They tap **Crop**. Then one tap on "Instagram post 4:5" (1080 × 1350), reposition the photo by drag, tap Done. A short mini process with bar kind B (about 0.8 s) may run. |
| 24–30 | `privacy` | The character notices the location and offers it in a bubble ("This photo knows where it was taken. Check?"). One tap opens it. Show **Pune, India** with a map pin and the warning. Remove location runs process #2 with bar kind C (about 1.5 s), then a shield or safe effect. |
| 30–36 | `gif` | Reach the tool in the quickest way you design (quick menu or suggestion). Trim 0:04 to 0:07 (3.0 s), tap Make GIF, process #3 with bar kind D, the longest wait (about 33 to 35.2 s), shown with a different bar from #1. 36 frames, 12 fps, then the looping 2.1 MB GIF. |
| 36–40 | `done` | Summary: 4 results, **XP gained, level or rank change, streak or badge**, "N taps" receipt, the promise ("Done on your phone. Nothing uploaded." / "...in your browser..."), and one clearly labelled "Ad" slot placed only here. |

Use the exact numbers from `A.DATA`. `scores` must now include `pro` (professional look) and `game` (gamification richness) next to `simple`, `fun`, `wow`, `effort`. Set `round: 2`.

## Extra registration fields

```js
ISK.register({
  id, order: 9..16, round: 2, name, tagline, concept, wins, risks,
  scores: { simple, fun, wow, pro, game, effort },
  palette, type, motion, notes, statusBar, css, build,
  extras: [                       // shown in the spec sheet, one line each
    ['Character', 'who it is, its moods and quick-menu behaviour'],
    ['Game system', 'XP, ranks, quests... as used here'],
    ['Progress bars', 'which kinds, and what the viewer sees'],
    ['Screen changes', 'the signature transition(s)'],
    ['Finish effect', 'the completion effect'],
    ['Taps to finish', 'e.g. Shrink 2 · Crop 3 · Place 2 · GIF 3'],
  ],
});
```
Plain, active, short sentences in all copy. No em-dash asides and no "not X but Y". Do not name real brands.

## New helpers in `A` (round 2)

| Helper | Use |
|---|---|
| `A.bar(parent, kind, {w,h,colors,track,seed,lanes,field})` | Canvas progress bar. Returns `{el, update(p, t)}`. Kinds: `streams` (mini bars race, then merge; use h 40 to 80), `liquid` (wavy tube), `orbit` (particles spiral into a core; make it roughly square, 90 to 140 px), `tiles` (grid pops in scattered order; h 36 to 80), `comet` (comets dive into a glowing head; h 28 to 50), `warp` (hyperspace; h 70 to 130). Pass 3 hex colours, plus a 4th for the `warp` field. |
| `A.bars(n, kinds, seed)` | n **distinct** kinds, repeatable, and reshuffled when the viewer presses Shuffle bars. Call it once in `build`, and size each bar for the kind it ends up with (wrap sizes in a lookup). |
| `A.rush(p)` | Front-loaded easing. Feed bars with `A.rush` yourself if you build custom ones. |
| `A.reveal(el, kind, p, opts)` | Screen-change effect. p goes 0 to 1 to show, 1 to 0 to hide. Kinds: `iris` (opts `cx`, `cy`), `wipe` (`dir` l/r/u/d), `curtain`, `blinds` (`n`), `pixels` (`n`), `diamond`, `zoom`, `flip`, `push` (`dir`), `drop`, `fade`. It sets opacity, visibility, clip-path and transform on that element, so use it on page containers and never on elements you also move with `A.set`. |
| `A.life(t, seed)` | `{blink 0..1, breathe, sway, bob, look}` for an idle character. Blink is 1 when the eyes are closed. |
| `A.pointerAt(t)` | Pure pointer state `{x, y, vis, down, ripQ}` in screen px. Use it so the character's eyes follow the pointer (clamp the offset). |
| `A.confetti(parent, {shape})` | `shape`: `rect` (default), `star`, `ring`, `coin`, `heart`, `petal`, `spark`. Also `colors`, `count`, `power`, `spread`, `gravity`, `dur`, `x`, `y`, `seed`. |
| `A.hexA(hex, alpha)` | `rgba()` string from a hex colour. |
| `A.variant` | Number that increases each time the viewer presses Shuffle bars (already used by `A.bars`). |

Fonts now available in addition to round 1: Nunito, Baloo 2, Sora, Outfit, Plus Jakarta Sans, Chakra Petch, Fraunces, Shippori Mincho, Exo 2.

## Quick-menu rule

The quick menu is the star interaction. It opens from a tap on the character (pointer key with `tap: true` on the character element), animates out in under 0.4 s (radial fan, arc, or compact sheet), shows 5 tools with icons, and closes after a pick. In the web layout it can also show key hints. The character reacts (wink, surprised, point).

## Speed and quality

Per-frame cost matters: keep `update(t)` light. Canvas bars are fine. Avoid `filter: blur()` on many elements and avoid huge box-shadows on moving things. Check for clipping, overlap and illegible text at 18 time points in both modes, as in round 1, and **do at least 3 review-and-fix rounds**.

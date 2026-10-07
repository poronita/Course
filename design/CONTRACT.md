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

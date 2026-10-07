# Mascot Casting Room: character contract

`character-lab.html` shows 8 candidate mascots for **Image Swiss Knife**: a free, ad-supported image toolkit (web and Android) that does everything on the device, with no AI features. The owner chose a gamified UI with a mascot (the "Pip Pro" direction). The mascot will become **the brand identity**: someone glancing at another person's phone from across a room must know at once that they are using Image Swiss Knife. One look, remembered forever.

## The bar every candidate must clear

1. **An iconic silhouette.** As a pure black shape at 32 px it is still unmistakable. One bold signature feature that nobody else has. Test it with the line-up's Silhouettes button.
2. **Stylish and premium, not childish or low-effort.** Think of the polish of the best mascots in games and consumer apps: deliberate proportions, a confident shape language, layered SVG with gradient lighting, a rim light, soft contact shadow, crisp highlights and controlled detail. Avoid clip-art blobs and goofy toddler style.
3. **Owns the brand.** The tool idea (a pocket multi-tool: blades, scissors, lens, frame) shows in the design. Signal red is the brand colour family (you may tune the exact red, around #E5322B), with one or two support colours. Never use the Swiss flag or a white cross on red, since that is legally restricted.
4. **Expressive and reactive.** Real acting through eyes, brows, eyelids, mouth shapes, body squash and stretch, and secondary motion such as antennae, tails, ears and props that lag and settle. It reacts to the pointer and to pokes.
5. **Rich detail where it counts:** the face and the signature feature. The body stays simple so it reads at small sizes.

## Files

- `src/cast.js`: the engine (`CAST`). Do not edit it.
- `src/shell.html`: the page. Do not edit it.
- `src/chars/NN-id.js`: one file per character. `src/chars/example.js` is a minimal example of the contract.
- `build.mjs`: `node build.mjs --only <id> --out <file>` builds a preview with one character.
- `tools/shoot.mjs`: `node tools/shoot.mjs --page <file> --char <id> --outdir <dir>` saves every mood at two moments, gaze tests, poke frames, the recognition strip and the line-up, plus a contact sheet `sheet-<id>.png`.

## Registering

```js
CAST.register({
  id: 'pip', order: 1, name: 'Pip', tagline: 'one short line',
  concept: '2 to 4 plain sentences: who it is and why it fits the brand.',
  signature: 'The signature feature and the signature move, in one or two sentences.',
  why: ['3 reasons people remember it'], risks: ['2 honest risks'],
  voice: 'A sample line it would say in the app.',
  scores: { memorable, stylish, expressive, small, fit },   // 1-5, honest
  palette: ['#hex', ...4-6],
  bg: '#hex',            // stage glow colour (dark-ish works best); or set `stage: 'css background'` for full control
  iconBg: '#hex',        // app-icon tile colour
  icon: { viewBox: 'x y w h' },  // crop of the 400x400 art used for icons (head and signature feature, tight)
  build(g, A) { /* create SVG once */ return { update(s) { /* every frame */ } }; },
});
```

The art lives in a **400 × 400 viewBox**. Stand the character with feet or base around y = 330 to 350, centred on x = 200, and use roughly 220 to 300 px of height. Leave room for celebration effects and props.

### State `s`, passed to `update` every frame (real time, about 60 fps)

| Field | Meaning |
|---|---|
| `t` | Seconds, continuous. |
| `mood` | `idle`, `happy`, `wink`, `surprised`, `thinking`, `working`, `celebrate`, `sleepy`, `levelup` or `signature`. |
| `mt` | Seconds since this mood started. Use it to play an entrance beat, then loop. |
| `prev`, `blend` | Previous mood and an eased 0 to 1 blend over 0.35 s, for smooth changes. Interpolating face parameters from prev to mood is ideal. |
| `look` | `{x, y}` in -1 to 1: where the pointer is relative to the character. Eyes (and a little of the head) must follow it. |
| `poke` | Seconds since the last click on the stage (very large if none). React within 0.1 s: squash, a startled face, a wobble that settles in about 1 s. |
| `pokes` | Clicks in the last 2.5 s. At 3 or more, show a different, funnier reaction (dizzy, grumpy or giggling). |
| `hover` | Whether the pointer is over the stage. Optionally react to it (perk up). |
| `small` | True for icon-size instances. You may skip tiny details. |

### What each mood must show

| Mood | Required beat |
|---|---|
| idle | Breathing, blinking (`A.life`), gaze follows `look`, and a small fidget every few seconds. |
| happy | A warm smile and a gentle bounce. |
| wink | A clear one-eye wink and a cheeky smile. |
| surprised | Eyes wide, brows up, a small jump back. |
| thinking | Eyes up to one side, a hand or prop to the chin, maybe a thought dot. |
| working | Focused face and an action loop with its tool, for example cutting, squeezing or scanning. This is what users see during a progress bar. |
| celebrate | A jump with stretch, arms up, and sparkles or confetti drawn in your own SVG. |
| sleepy | Drooping lids, a slow sway, a "z". |
| levelup | Holds up a **badge or medal** (for example a shiny "LV 8" medal with a ribbon) proudly, with a shine sweep. This links to the reward system. |
| signature | The character's unique move that shows off its signature feature, for example tools fanning out. It should be the most memorable 3 seconds. |

### Helpers `A`

`A.el(tag, attrs, parent)` creates an SVG element (attrs may include `text`). `A.attr(el, attrs)` sets attributes. `A.tf(el, x, y, rotDeg, sx, sy, ox, oy)` translates, then rotates and scales around a pivot `(ox, oy)`. `A.grad(name, stops, {radial, x1, y1, x2, y2, cx, cy, r, fx, fy})` defines a gradient; use it with `A.url(name)`. `A.id(name)` gives a unique id for clip paths and filters. `A.show(el, bool)` and `A.op(el, opacity)` toggle visibility and opacity. `A.life(t, seed)` returns `{blink, breathe, sway, bob, drift}`. `A.wobble(dt, freq, decay)` is a settling wobble after an impulse. `A.ease.*`, `A.seg`, `A.lerp`, `A.clamp` and `A.rng(seed)` are utilities. `A.small` tells you the instance is icon size.

Rules: SVG only (no external images). Every id comes from `A.id` or `A.grad`, because there are many instances per page. Keep `update` light: set attributes and transforms only, never rebuild the DOM each frame, and avoid SVG filters on large moving groups (gradients are fine; one small blur on a glow is fine). Don't use brand names, the Swiss flag or a white cross. All copy uses plain, active, short sentences.

## Test loop

```bash
cd /home/user/Course/design/characters
SP=<your scratch dir>
node build.mjs --only <id> --out $SP/<id>.html
node tools/shoot.mjs --page $SP/<id>.html --char <id> --outdir $SP/shots
# Read $SP/shots/sheet-<id>.png, $SP/shots/<id>-recog.png and a few single frames at full size.
```

The shoot prints `CONSOLE ERRORS` if any occur, and there must be none. Do at least 4 review-and-fix rounds and judge the character as a brand designer would. Is it beautiful? Is the silhouette unique? Does every mood read without the label? Does the poke feel alive?

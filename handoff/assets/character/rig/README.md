# Pip Prime rig (source of the animated character)

Pip is an SVG drawing (400 x 400) that code can pose every frame. The drawing code is plain JavaScript and runs on the website and inside the Android WebView, so one rig serves both.

| File | What it is |
|---|---|
| `cast.js` | The small engine: `CAST.register(def)`, `CAST.mount(def, element)`, easing and "life" helpers (blink, breathe, sway). |
| `pip-dark.js` | Pip in Turkish blue (id `pip-dark`). Use with the dark theme. |
| `pip-light.js` | Pip in creamy white (id `pip-light`). Use with the light theme, with the thin warm outline from `../svg/light`. |
| `01-pip.js` | The original red Pip. Reference only. |
| `tint.mjs` | The script that recolours the red rig into the two themes (hex tables inside). |
| `demo.html` | Open in a browser: both themes side by side, a button for each mood, eyes follow the pointer. |

## Use it
```js
const def = CAST.chars.find(c => c.id === 'pip-dark');
const pip = CAST.mount(def, document.getElementById('pip'));   // adds an <svg viewBox="0 0 400 400">
function frame(t) {                                             // t in seconds
  pip.update({ t, mood: 'happy', mt: t - moodStart, prev: 'idle', blend: 1,
               look: { x: 0.3, y: 0 },        // -1..1, where the eyes look
               poke: 1e9, pokes: 0,            // seconds since last tap, and taps in the last 2.5 s
               hover: false, small: false });  // small = true when drawn under about 110 px
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
```
Moods: `idle, happy, wink, surprised, thinking, working, celebrate, sleepy, levelup, signature`.

## What exists and what is missing
- **Exists:** 10 moods, blinking, breathing, eyes that follow, a poke wobble, a dizzy state after 3 pokes, the tool flip on the blade (scissors, magnifier, crop corner, clapper), the gold "LV 8" level medal, sparkles and confetti.
- **Missing (to build, see `MASTER-PROMPT.md` sections 9 and 10):** the 90 service actions with props, celebration, level-up, badge, streak, error and egg clips, the touch zones and dwell reactions, pick-up, the magic carpet, skins, and a clip system. Build them as new TypeScript clips that move the layers listed in `../layers/<theme>/index.json`.
- **Facts about this rig:** Pip has **no separate legs and no ears**. The feet are two ovals under the body. The "ears" are the two shoulder rivets. The tail is the keyring.

## Colours
Dark (Turkish blue): body `#1B8CA8`, highlight `#5CD0E6`, shade `#0C5A72`, outline `#073A4C`.
Light (creamy white): body `#F3E8CF`, highlight `#FFFCF2`, shade `#D2BF95`, outline `#8C7550`.
The full tables are in `../palette` and in `tint.mjs`.

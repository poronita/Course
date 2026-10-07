## 9. Pip Prime, the mascot (this is the brand)

Pip Prime is a small pocket-knife-shaped character: a rounded body, a steel belt, two arms with mitts, two feet, two shoulder rivets that act as his ears, a keyring that swings like a tail, a face with big eyes and an expressive mouth, and a **steel blade quiff** on top that flips between tools. **Dark theme: Turkish blue body. Light theme: creamy white body with a thin warm outline.** The original red build exists in `assets/character/rig` for reference only and is not used in the app.

### 9.1 How Pip is rendered
- Pip is an **SVG rig** (400 x 400 viewBox) driven every frame by a state object. The source is in `assets/character/rig` (`cast.js`, `pip-dark.js`, `pip-light.js`, and `README.md`). **Port it to TypeScript as `packages/pip`**, keep the drawing code, and keep the same state object (`t, mood, mt, prev, blend, look, poke, pokes, hover, small`). Because the app UI is web-based, the same rig runs on the website and in the Android WebView. Do not rebuild Pip in Compose or as a Lottie file.
- Static art for splash screens, notifications, store listings and fallbacks is in `assets/character/svg` and `png`. Separate body parts with pivots are in `assets/character/layers` (use them for skins, hit regions and new actions).
- One big Pip at a time on screen (hero, nav or rail) plus small Pips in effects. Use `requestAnimationFrame`, pause when the tab or app is hidden, and cap work at 60 fps. Reuse DOM nodes; do not rebuild the SVG per frame. Target under 3 ms of script per frame for Pip on the mid phone.
- **Rig facts (checked against the layers):** Pip has no separate legs and no ears. The "feet" zone is the two foot ovals under the body; the "ears" zone is the two shoulder rivets on the arms; the tail is the keyring. Actions in the catalogue that need legs (running, moonwalk, push-ups, stomping) must be done with body bounce, squash and stretch and foot movement. If the owner later wants real legs, the artist adds them as new layers; do not block on it.
- Pip never blocks the UI. His container has `pointer-events: none`; only his hit regions (below) receive events.

### 9.2 The Pip brain: a small state machine
States, from highest priority to lowest. A higher state interrupts a lower one with a 150 to 250 ms blend.

1. **Carpet** (flying on the carpet)
2. **Held** (picked up by the blade)
3. **Reaction** (a reaction to a touch on a body part, or to a gesture)
4. **Reward** (celebration, level-up, badge, streak)
5. **Action** (a service action while a job runs)
6. **Mood** (one of the 10 base moods: idle, happy, wink, surprised, thinking, working, celebrate, sleepy, levelup, signature)
7. **Idle life** (blink, breathe, sway, eyes drift, small idle actions)

Rules:
- Every reaction, action and reward is an **animation clip** with an id from the catalogue, a duration, a sound id, and an `interruptible` flag. Build clips as small TypeScript modules that set properties of rig parts over time (pure functions of `t`, so they can be frozen for tests).
- **Random with memory:** when a trigger has several variants, pick one at random but never repeat either of the last two used for that trigger. Store counts of seen clips (this feeds sticker unlocks and the "Best Friend" badge).
- Never queue more than two clips. Drop the oldest.
- **Eyes always follow** the pointer (mouse) or the last touch point, unless a clip says otherwise. Eye travel is limited so he never looks broken.
- **Quiet Pip setting:** `Playful` (everything), `Calm` (no dwell escalation, no idle actions, short celebrations), `Off` (Pip shows as a static, blinking icon, no interactions, no sound from Pip).

### 9.3 Touch and pointer zones
Hit regions are shapes in the 400 x 400 rig space (ellipses and polygons). Take the pivots and bounds from `assets/character/layers/<theme>/index.json`. Approximate starting values: tummy ellipse centre (200, 285), radius (58, 42); eyes at (171, 201) and (229, 201); blade pivot near (212, 140); feet near y 318 to 336. Verify against the layers and adjust. Expand small hit regions to at least 44 dp on the screen.

{{ZONES}}

**Dwell** means: the pointer rests inside the zone (or within 24 px of it) and moves slower than 20 px per second. A mouse can hover; on a phone the user touches and holds without moving (no hover exists on touch). Reset the dwell timer if the pointer leaves the zone by more than 40 px for 300 ms. The "does not click" behaviour on the website is a pure hover. Every dwell stage plays a different clip and sound.

Every zone must also work for keyboard and screen-reader users in a simple way: Pip as a whole is one focusable button "Pip, open the tools menu" that opens the tools menu. The playful zones are extras, never the only way to reach a function.

### 9.4 Special gestures

{{GESTURES}}

#### Pick-up physics (default numbers, tune by feel)
- Start: pointer down on the blade region, moved less than 8 px, held 600 ms, Pip not in an `Action` or `Reward` state, and no job running. Play `vx-pickup`, haptic tick. The rig lifts by the blade: body hangs below the pointer.
- Model Pip as a **pendulum hanging from the pointer**: angle `θ''= -(g/L)·sin θ - c·θ' + (a_x/L)·cos θ`, with `L = 0.55 · Pip height`, `g = 2400 px/s²`, damping `c = 1.8`. Feet kick in proportion to `|θ'|`. Body stretches `scaleY = 1 + min(0.12, speed/6000)`. The eyes widen when speed is high.
- Release: gravity `2200 px/s²`, floor at the top of the bottom bar (the safe area), restitution `0.38`, squash on impact `scaleY = 1 - min(0.35, v/3500)` with a spring-back, two bounces, then 1.5 s of dizzy stars (`er-dizzy`), then back to idle with a small shake.
- Fling: release speed above 900 px/s sends Pip flying with air drag `0.4 /s` and spin; he bounces off the screen edges (restitution 0.6, up to 4 bounces) and comes to rest. Play `vx-whee` while he flies and `vx-drop` on the first landing.
- If he is dropped over a tool tile or the Save button, treat it as a tap on that control (a playful shortcut) after he lands.
- Disabled when "Pip interactions" is off, when a modal is open, or when a job is running.

#### Carpet physics
- Start: dwell on a foot for 2.5 s. The cursor (desktop) or a carpet sprite under the finger (touch) becomes a **mini magic carpet** (about 0.9 x Pip's width, tassels, a soft shadow). It slides under Pip in 0.9 s, lifts him 12 px, and he sits cross-legged on it. Play `vx-carpet-on`, then the looping `vx-carpet-fly` while moving.
- Follow: a critically damped spring toward the pointer with `ω = 6 rad/s` (about 0.3 s lag). Bank angle = `clamp(vx / 900, -1, 1) · 18°`. Bob `sin(t·3)·4 px`. The keyring tail streams behind. Pip's eyes look in the flight direction.
- Burst: the carpet bursts when **any** of these happens: a click, tap or second finger; pointer acceleration jump above 2500 px/s within 80 ms (a sudden jerk); the pointer leaves the window. On burst: pop of threads and sparkles (`vx-carpet-burst`), Pip falls with the pick-up landing physics, says "oops" (`vx-oops`), dizzy stars, then back to idle.
- Gentle end: if the user lifts a held finger slowly (speed under 200 px/s), the carpet lands softly and folds away. No burst, no fall.
- On desktop hide the real cursor (`cursor: none`) only while the carpet is active, and restore it on any exit path (including errors, blur and Escape).
- Badges: "Up, Up and Away", "Magic Carpet Ride" (10 s of flight), "Oops!" (a burst).

### 9.5 Idle life and surprises
- Always on: blink every 2 to 5 s (random, with the occasional double blink), breathing, tiny sway, eyes that drift, the keyring that swings with lag.
- After 8 s without touch on a calm screen, play an idle action from `idle` (section 10) every 10 to 25 s (random).
- After 45 s of no touch, Pip yawns and falls asleep (`ac-idl-nap`, floating Z). Any touch wakes him.
- Easter eggs (section 10.6) fire with a small random chance (about 1 in 40 idle slots) and are counted.
- Season and time hooks: a scarf and shiver in cold months, a sleepy mood late at night, a "good morning" stretch in the morning, a birthday hat on the app's install anniversary. All local, based only on the device date.

### 9.6 Skins and rewards on Pip
Skins are cosmetic overlays that attach to named pivots (head, blade, face, neck, back, tail). See `gamification.json` for the list and unlock rules. A skin is a small SVG group; it must survive every clip (follow the pivot) and must be shown in both themes (give each skin a light and a dark colour set). The user picks one skin per slot in the Awards screen.

## 10. Pip's action library (every service gets 10 playful actions)

Each time a job runs, Pip does **something related to the job**, picked at random from that service's 10 actions, so the same job feels different each time. Each action has its own sound.

**Choosing and running an action**
1. Map the running tool to a service (table below). Unknown tool: use `idle`.
2. Pick an action at random, excluding the last three used for that service (persisted).
3. If the job will last longer than the action, **chain** two to four different actions (no repeats in the chain), with a 200 ms blend between them. Never loop one action twice in a row.
4. Jobs shorter than 1.2 s skip the action and just get a quick happy hop.
5. When the job ends, cut the action within 250 ms, blend to the reward clip (celebration) and hold the result screen.
6. Pip must never cover the size counter, the cancel button or the progress bar. Place him beside them.
7. The progress bar and Pip are independent: the bar shows real progress, Pip entertains.

| Tool | Service |
|---|---|
| Compress, target size, P-group | Compress |
| Resize, crop, presets, G-group | Resize and crop |
| Convert, C-group | Convert formats |
| Metadata, location, privacy, M-group | Privacy |
| GIF, video, animation, V-group | Video, GIF |
| QR, colour, icon, SVG, barcode, U-group | Utilities |
| Batch, gallery cleaner, duplicates | Batch |
| Exam kits, passport photos | Exam |
| Waiting on anything else, idle on a tool page | Waiting |

{{SERVICES}}

### 10.1 Celebrations (job finished)
Pick at random; the bigger the win, the bigger the clip. Use the saved-bytes ratio, first job of the day, new badge, and streak to choose a **tier**: small (any job), medium (saved more than 50 percent, or a new badge), large (first job of a streak day, 3 quests done, or a gold badge). Large celebrations pick from the whole list, small ones only from the first four rows.

{{CELEBRATIONS}}

### 10.2 Level-ups (10 types)
Played full screen with the rays background, the level medal and the new rank title. Pick at random, never the same twice in a row. Always show: the new level number, the rank (if it changed), and the XP bar resetting. 2.4 to 3.2 seconds, skippable by tap after 1 second.

{{LEVELUPS}}

### 10.3 Badge unlock reactions

{{BADGES}}

### 10.4 Streak reactions

{{STREAKS}}

### 10.5 Errors and empty states

{{ERRORS}}

### 10.6 Easter eggs (rare)

{{EGGS}}

## 11. The effects engine: transitions, save effects, progress bars

The owner wants **at least 25 effects, used randomly or appropriately, so even a daily user gets surprises**. This section defines **32 screen transitions, 30 save and completion effects, and 12 progress bars** (74 effects). Each has its own sound (section 12).

### 11.1 Architecture (`packages/fx`)
```ts
interface Effect {
  id: string;                     // from catalogue.json, for example 'tr-iris'
  kind: 'transition' | 'save' | 'bar';
  durationMs: number;
  tier: 'css' | 'svg' | 'canvas' | 'webgl';   // implementation technique, lowest tier that looks good
  minQuality: 0 | 1 | 2;          // 0 = always allowed, 2 = only on fast devices
  contexts: string[];             // where it may be used (see tables below)
  sound: { id: string; cueAt: number };       // cueAt = 0..1 of the effect when the sound starts
  render(ctx: EffectContext, p: number, seed: number): void;  // PURE function of progress p (0..1) and seed
  cleanup?(): void;
}
```
- **Every effect is a pure function of progress `p` and a seed.** No hidden state. This lets the app scrub, pause and **freeze-frame test** every effect, exactly like the mock-up did.
- Transitions work on two layers (the leaving screen and the entering screen). Implement them with the cheapest technique that looks right: **CSS** (`clip-path`, `mask-image`, `transform`, `opacity`, 3D transforms) for most; **SVG filters** (`feTurbulence` + `feDisplacementMap`) for ripple, liquid, ink, glitch, gooey; **Canvas 2D** (OffscreenCanvas where available) for confetti sweep, shatter, tiles; **WebGL** only if one effect truly needs it and a CSS fallback exists. Do not take screenshots of the DOM into textures.
- A registry loads the catalogue and the implementations. A missing implementation falls back to a plain cross-fade (log it in debug builds). Adding an effect = one file in `packages/fx/src/effects/` plus a catalogue row.
- The "View Transitions API" may be used where it helps (Chromium WebView 111 and newer) but never as the only path.

### 11.2 The 32 screen transitions

{{TRANSITIONS}}

**Where each kind of transition is allowed** (the picker only chooses from the allowed pool for the situation):

| Situation | Allowed pool |
|---|---|
| Open a tool from home or the radial menu | `tr-iris`, `tr-diamond`, `tr-zoom-through`, `tr-portal` (when opened from Pip's tummy), `tr-tool-flip`, `tr-blade-swing`, `tr-liquid`, `tr-vortex`, `tr-unzip`, `tr-gooey`, `tr-pixel-bloom`, `tr-spiral`, `tr-shutter`, `tr-sunrise` |
| Pick a purpose chip, start a job | `tr-iris` (from the chip), `tr-wipe`, `tr-curtain`, `tr-blinds`, `tr-clock-wipe`, `tr-film-roll`, `tr-ink`, `tr-ripple` |
| Show the result | `tr-mosaic`, `tr-sunrise`, `tr-glitch`, `tr-shutter`, `tr-card-flip`, `tr-confetti-sweep`, `tr-shatter`, `tr-peel` |
| Switch bottom tab or sidebar item | `tr-push-parallax`, `tr-card-flip`, `tr-card-shuffle`, `tr-page-curl`, `tr-wipe` |
| Go back | The mirror of the effect that was used to enter (store it on the history entry), or `tr-push-parallax` reversed, or `tr-iris` closing |
| Open Awards or Settings | `tr-pip-pull`, `tr-drop-bounce`, `tr-card-shuffle`, `tr-sunrise` |
| Reduce motion is on | Cross-fade only (150 ms) |

### 11.3 The 30 save and completion effects
They play when a result is saved, shared, or ready.

{{DOWNLOADS}}

**Preferred effects by job** (use these first, then the rest at random):

| Job | Prefer |
|---|---|
| Privacy, location removed, metadata stripped | `dl-safe-lock`, `dl-vault`, `dl-wax-seal` |
| Compress | `dl-slot-roll`, `dl-coin-shower`, `dl-stack-tidy`, `dl-glow-badge`, `dl-lightning` |
| Resize, crop | `dl-stamp`, `dl-polaroid`, `dl-pip-catch`, `dl-sparkle-sweep` |
| Convert | `dl-zip-pack`, `dl-magnet`, `dl-origami-crane`, `dl-floppy` |
| GIF, video | `dl-polaroid`, `dl-rocket`, `dl-fireworks`, `dl-balloon-pop` |
| Share action | `dl-paper-plane`, `dl-mailbox`, `dl-rocket`, `dl-origami-crane` |
| Save to gallery | `dl-curve-to-gallery`, `dl-tray-drop`, `dl-drill`, `dl-bubbles` |
| Exam kit | `dl-zip-pack`, `dl-stamp`, `dl-gift-box`, `dl-mini-chest` |
| Batch with more than 5 files | `dl-stack-tidy`, `dl-zip-pack`, `dl-confetti-cannon`, `dl-fireworks` |
| Any job, first of the day | `dl-confetti-cannon`, `dl-fireworks`, `dl-mini-chest`, `dl-ring-pop` |

### 11.4 The 12 progress bars
Show **3 or 4 different bars per session**, picked at random, so the same job shows a different bar next time. Use a different bar for each job in a row. Every bar is built from many mini elements that **converge into one bar** so the wait feels fast.

{{BARS}}

Rules for bars:
1. The bar takes the **real progress** `p` (0..1) from the job. Use a **front-loaded curve** (`1 - (1 - p)^2.3`) so the bar jumps ahead early and slows near the end. It must be monotonic, must never reach 100 % before the job is done, and must hit 100 % when the job finishes.
2. When the job has no measurable progress (waiting for the WASM pack, for example), use an indeterminate version of the same bar (no percentage text).
3. Show the live counters: the size counting down or up, the stage label ("Trying quality 84, 76, 68"), and the percentage.
4. Colours come from the theme tokens (accent, accent-light, gold, field).
5. Jobs under 400 ms skip the bar and go straight to the save effect.
6. Every bar draws on a `<canvas>` sized to its container with `devicePixelRatio` up to 2, and updates from one shared animation loop.

### 11.5 Choosing effects at random, with memory (the "surprise engine")
```
pick(context, kind):
  pool = effects of this kind allowed in this context AND minQuality <= device quality tier
  remove the last 6 effects used for this kind (stored in IndexedDB)
  weight(e) = (1 / (1 + sqrt(seenCount[e]))) * (e.rare ? 0.35 : 1) * (e is "preferred for this job" ? 2.5 : 1)
  choose with weighted random using a seeded RNG (seed = install id + day + counter)
  store: seenCount[e] += 1, lastUsed list, and update "effects seen" for the Surprise badges
```
- **First launch ever:** play a fixed, signature set for the first three transitions (`tr-iris`, `tr-blade-swing`, `tr-wipe`) and the first save effect (`dl-ring-pop`) so the brand lands. Random from then on.
- **Intensity setting**: `Full` (all effects), `Calm` (only effects with `minQuality 0`, shorter, fewer particles), `Off` (cross-fade and a simple check mark).
- **Auto quality tier**: measure frame times during the first 10 effects. If the 95th percentile is above 20 ms, lower the tier (drop `webgl` and `canvas` effects, halve particle counts). Re-measure when the app updates. Let the user force a tier in Settings.
- **Reduce motion** (system setting or in-app): every effect swaps to a 150 ms cross-fade, Pip stops idle actions, confetti and shakes are off, but rewards still show as static cards.
- Never run two big effects at once. Queue them.
- Never delay the user. A transition may not make a screen unusable for more than 250 ms; input is accepted while it plays after that.

### 11.6 Test the effects
- A hidden **Effects Lab** screen (Settings, About, tap the version 7 times) lists every effect, action, reaction and sound with a Play button, a scrub slider, theme switch and a slow-motion switch. This is for the owner and QA.
- **Freeze-frame tests**: for every effect render frames at `p = 0, 0.25, 0.5, 0.75, 1` in both themes and compare with stored images (small tolerance). A frame must never be blank or clipped.
- A unit test confirms every catalogue id has an implementation (or a documented fallback) and a sound file.

## 12. Sound system (`packages/sound`)

**Every effect, action and reaction has its own sound. Every sound can be switched off.** The 262 placeholder sounds in `assets/sounds` follow the catalogue ids exactly (`tr-iris.ogg`, `ac-cmp-press.ogg` and so on), with `sounds.json` describing them. They are **synthesised placeholders with no licence risk**. Replace them later with final audio under the same file names; no code changes are needed.

### 12.1 Engine
- Web Audio API. One `AudioContext`, created and resumed on the first user gesture. A master gain, then one gain per category (sections below), then per-sound gain from `sounds.json`.
- Load `sounds.json`. **Preload** the small critical set at start (`ui-*`, `vx-hello`, `gm-xp-tick`). Decode other sounds **on demand** and keep them in an LRU cache (about 6 MB of decoded audio). On Android the files are bundled in the app; on the web they are fetched with long cache headers.
- Playback rules: the same sound id may not retrigger within 80 ms; at most 6 voices at once; priorities (fanfares and voice reactions above ambience; ducking UI sounds by 6 dB while a fanfare plays); loops (the `bar-*` tick sounds and `vx-carpet-fly`) stop on route change, on app background, and when the effect ends.
- Do **not** take audio focus; mix politely with the user's music at low default volume. Do not play when the device is in silent or vibrate mode if the OS tells you (add a small native plugin call `AudioManager.getRingerMode()` on Android; on the web respect the page's muted state). Pause everything when the app goes to the background.
- Sound is never the only carrier of information. Every important cue also has a visual.

### 12.2 Sound categories and per-sound switches
Settings, Sound, shows:
1. **Master switch** and **master volume** slider.
2. **Category switches** (below).
3. **Pip's voice style**: Full, Soft (quieter, fewer words and giggles), Off.
4. **Haptics** switch (separate from sound).
5. **"Sound details"**: a searchable list of **every sound** (name, category, a play button, and an on/off switch for that one sound). Group by category. A "Reset sounds" button restores defaults.

| Category id | Name | Covers |
|---|---|---|
{{SOUNDCATS}}

Storage: `sound.master`, `sound.volume`, `sound.cat.<id>`, `sound.off` (array of disabled sound ids), `sound.voiceStyle`, `haptics.on`. All local. When a sound id is disabled, the matching effect plays silently; nothing else changes.

First launch: Pip asks once, "Want sounds? I have a few." with **Sounds on** and **Keep it quiet**. The choice sets the master switch. It can be changed any time in Settings.

### 12.3 Haptics map (Android)
Light tick on taps and toggles; medium on badge unlock and stamp-like hits; heavy pattern on level-up and the carpet burst; none on long loops. Always respect the haptics switch.

### 12.4 Sound table
Each row is one sound. The id equals the effect, action or reaction id that uses it. "Family" names the synthesis recipe in `tools/make-sounds.py` (useful when you replace a sound with a recorded one: keep the same character, length and loudness).

{{SOUNDTABLE}}

### 12.5 Replacing placeholders
Keep the file names and ids. Target loudness: UI sounds about -22 LUFS, effects about -18 LUFS, fanfares about -14 LUFS. Mono Ogg Vorbis or Opus, 32 to 48 kbps, 24 or 32 kHz. Total sound size under 3.5 MB. Add a script `tools/sound-lint` that checks duration, peak, silence at the start and the licence field in `sounds.json` (only CC0, own work, or a licence that allows commercial use without attribution, or with attribution listed on the Licences page).


# Image Swiss Knife: Android Studio hand-off

Everything the developer (human or AI) needs to start the project.

| Open this | What it is |
|---|---|
| `KICKSTART-PROMPT.md` | The short text you paste as the first message to your AI assistant in Android Studio. |
| `MASTER-PROMPT.md` | The full brief (about 22,000 words). The assistant reads it from the project folder. |
| `assets/` | The mascot Pip Prime (SVG, PNG, layers, source rig), icons, badges, app icon, colours, 262 placeholder sounds, and the approved mock-up. Start with `assets/README.md`. |
| `catalogue/catalogue.json` | Every transition, save effect, progress bar, Pip action, reaction and sound, with ids and sound recipes. |
| `data/gamification.json` | XP rules, levels, ranks, streak rules, quest pool, 45 badges, 12 skins, chest loot, awards, and the "stored only on this device" wording. |
| `reference/report/` | The research: functions, libraries, licences, sizes, presets, Android plugin specs. |
| `reference/mockup/` | Source of the 60-second mock-up (for reference). |
| `PROJECT-LOG.md` | What was asked and decided, round by round. |

## Steps
1. Copy this whole folder into the root of your Android Studio project (or an empty folder you will turn into the repo).
2. Open your AI assistant. Paste `KICKSTART-PROMPT.md`.
3. Read its first answer (questions, repo plan, spike plan, estimates). Answer the questions in section 18 of the master prompt, then say "go".
4. After each milestone check the result on a real phone, then say "go" for the next one.

## Regenerating files
- `node tools/build-prompt.mjs` rebuilds `MASTER-PROMPT.md` from `prompt/part1.md`, `part2.md`, `part3.md` and the catalogue files. Edit the parts or the catalogue, never the generated file.
- `python3 tools/make-sounds.py` rebuilds the placeholder sounds. Needs `numpy` and `ffmpeg`.
- Edit `catalogue/catalogue.mjs` or `catalogue/gamification.mjs`, then run `node tools/export-json.mjs` to refresh the JSON files.

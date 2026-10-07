# Placeholder sounds

This folder holds 262 short sound effects for Image Swiss Knife (Pip and the app UI), one `.ogg` file per
sound id, plus `sounds.json` (the manifest the app reads) and `_report.txt` (a sanity table).

**They are placeholders.** They were made by a script so the app can feel finished while real audio is being
produced. Replace any of them with licensed or hand-made audio by dropping in a file with the **same file name**
(same id, `.ogg`, mono, about -3 dBFS peak, no leading silence). The app does not need any code change.

**Nothing is sampled.** Every sound is synthesised from scratch (oscillators, filtered noise and a small formant
voice for Pip, no words), so there is no licence risk. Licence: CC0 1.0.

**Every sound has an on/off switch in the app.** The manifest sets `defaultOn: true` for each one and the settings
screen must let people turn each sound (or its whole group) off. The sounds marked `loop: true` (progress ticks and the
carpet-flight air) are made to repeat without a click.

## Regenerate

    python3 tools/make-sounds.py            # build everything (needs numpy and ffmpeg)
    python3 tools/make-sounds.py --check    # decode every file, run the checks, write _report.txt

Output is deterministic: running it again gives identical files.

Total size of this folder's audio: 1.70 MB (1739 KB) for 262 files.

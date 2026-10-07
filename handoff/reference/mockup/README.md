# Pip Prime mockup (60 s)

Open `../pip-prime-mockup.html` in a browser. It is one self-contained file.

- **Theme toggle:** dark (Turkish blue Pip) or light (creamy white Pip). Key `T`.
- **Display toggle:** Android app or website. Key `M`. In website mode the address bar and tab title change with each tool, to show the per-tool pages.
- **Timeline:** play, pause, scrub, speed, chapters. **Shuffle bars** picks another set of progress bars.

Rebuild after editing `src/pip-prime.js` or `src/shell.html`:

```bash
node build.mjs                      # writes ../pip-prime-mockup.html
node build.mjs --fragment --out X   # no doctype, for publishing as an artifact
node tools/shoot.mjs --page ../pip-prime-mockup.html --outdir OUT --modes app,web --themes dark,light --times 2,13,44
```

`tint.mjs` re-colours the red Pip Prime rig (`../characters/src/chars/01-pip.js`) for each theme. `src/engine.js` is the style-lab engine stretched to 60 s.

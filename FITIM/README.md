# FITIM

Everything for this project lives inside this folder. Nothing outside `FITIM/` is touched.

Status: brainstorming / prototype. Nothing here is final.

## The idea in one paragraph

An **open, offline-first, server-less form system** built around two file formats:

| Piece | What it is |
| :--- | :--- |
| **FITI** | A form. An HTML page (plus its assets, zipped) that can look and behave any way the creator wants: dials, toggles, color pickers, anything. Its only job is to output a valid FITIM file. |
| **FITIM** | A filled-up form. A ZIP with `data.csv`, `manifest.json`, and `assets/`. The *definition of this format is the core intellectual property.* Any tool, in any language or platform, may produce it. |
| **Viewer** | Reads one or many FITIM files. Group view (like Google Forms responses) or per-file view. Merge many FITIM into one. Category dropdown when a bundle mixes different form types (e.g. Sales vs Pre-sales). |
| **Builder** | Optional plain form builder. Less freedom than hand-written HTML, but outputs a valid FITI. |

Principles: free, unlimited, works with zero internet, no server required. If a server exists, FITIM files can simply be synced to it.

## Folder layout

```
FITIM/
├── README.md                  <- this file
├── REVENUE_STRATEGY.md        <- how to earn without selling software
└── docs/                      <- the three prototype/spec files you supplied
    ├── FITI_FIELD_SPECIFICATIONS_MASTER.md
    ├── FITI_Field_Specifications_Master.xlsx
    └── FORMIRA_PHILOSOPHY_AND_FUNCTIONS.md
```

## Open design questions (to settle before real development)

1. **FITIM must be self-describing.** Your prior spec embeds `form.json` (a declarative schema) in each submission. But with free-form HTML forms there is no declarative layout. So FITIM needs its own small *field schema* (field id, type, label, options, units) so the Viewer can show data without the original HTML. Suggest: FITIM carries `schema.json` (data only, no UI). The FITI HTML can be stored as a reference, but the Viewer never depends on it.
2. **A tiny "FITIM writer" JS library** that any FITI HTML includes (~few KB). It validates and zips the output. Non-HTML tools just follow the spec text. Publish a conformance test file set so third parties can check "is my output valid?".
3. **Merging and categories.** Every FITIM needs a `formId` + `formVersion` in `manifest.json`. The Viewer groups by `formId` → this gives the category dropdown for free, and merge = a ZIP of FITIMs (or one FITIM with many rows, to be decided).
4. **Single-row vs many rows.** Current spec = one row per submission, merged = many files. Decide whether a "merged FITIM" is a new container type (e.g. `.fitimx`) or just a ZIP of `.fitim`.
5. **Spec versioning.** `"formatVersion"` in every manifest from day one; Viewer must read old versions forever.
6. **Time-integrity and signing** are Android-only features today. In the open spec they should be *optional* manifest fields, so a browser-made FITIM is still valid (just marked "unverified").

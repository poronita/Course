# Kickstart prompt (paste this as your first message)

You are a senior engineer. Build **Image Swiss Knife**, a free, ad-supported image toolkit for **Android and the web from one code base** (TypeScript monorepo, Vite, Preact, Capacitor 8, Kotlin native plugins). All image work stays on the device. There are no AI features, no accounts and no servers of our own.

**Read first, in this order:**
1. `handoff/MASTER-PROMPT.md`. It is the full brief: rules, stack, screens, design system, the Pip Prime mascot and everything it does, the 74 effects (32 transitions, 30 save effects, 12 progress bars), the 90 service actions plus celebrations and reactions, the sound system with per-sound switches, rewards, search-engine pages and (i) info bubbles, ads and compliance, tests, and milestones M0 to M12.
2. `handoff/assets/README.md`, then open `handoff/assets/reference/pip-prime-mockup.html` in a browser. It is the approved look and feel.
3. `handoff/reference/report/README.md` and the numbered files for functions, libraries, licences, presets and the Android plugin specs.

**Non-negotiable:** free-for-commercial-use open-source licences only (strict profile first); one full Android download; ads only after a job is done; XP, badges, streaks and settings stay on the device and the Android cloud backup is disabled so they never go online; every sound has an on/off switch; honour reduce-motion; plain, short, active-voice user text.

**Your first reply must contain only:**
1. Anything unclear or contradictory in the brief.
2. The repo structure you will create.
3. The Phase 0 spike plan with success criteria (worker pipeline, Android original-file GPS plugin, WebCodecs on real phones, real bundle sizes, preset UI, and Pip at 60 fps with one transition, one save effect and one sound).
4. Your milestone estimates for M0 to M12.

Then wait for my "go". Work one milestone at a time. After each milestone report what works, what does not, measured numbers, tests, and the licence scan result. Never invent facts about a library; check licences, including what is bundled inside. Ask before you add a dependency with a non-permissive licence, change the application id, or change a decision in section 2 of the brief.

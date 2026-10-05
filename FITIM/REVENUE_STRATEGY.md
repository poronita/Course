# FITIM — Revenue Strategy (free, no selling, no support burden)

## The core truth

**An open, offline, server-less file format and "ads that cannot be blocked" cannot both be true everywhere.**
Once the format is open, anyone can write their own reader/writer and skip your ads. Offline = no ad network. You cannot force ads on a file.

So don't try to *chase* every user. Instead:

> **The format is your free distribution engine. Revenue comes only from the places YOU run.**
> Make those places so convenient that most people choose them, even though they could leave.

Accept leakage. A user on their own server or local machine was never going to pay you anyway. They still help: they make FITIM a standard, which sends more people to your places.

---

## Where you control the screen (ads work here)

| Surface | Ad-blocker risk | Notes |
| :--- | :--- | :--- |
| **Android app** (Viewer + Builder + Collector) | Very low | Best ad surface. In-app ads (AdMob) are almost never blocked. |
| **Hosted web Viewer** (`yourdomain/viewer`) | Medium (~25-40% on desktop) | Free, runs fully in browser, files never uploaded. Ads around it, not inside. |
| **Hosted web Builder** | Medium | Same as above. |
| **Template gallery site** (public forms people can copy) | Medium | Good SEO traffic ("site inspection form template") → ads + affiliate. |

**The Viewer is the strongest point.** Every FITIM file ends up being *looked at* somewhere. Make your Viewer clearly better than DIY (merge, charts, export to Excel/PDF, category filter) and it becomes the default.

---

## Where to place ads (so you don't hurt users)

- **Never inside the form-filling screen.** Field workers in the sun with bad signal will uninstall you.
- Good spots: "Saved ✓" confirmation screen, Viewer file list, Builder dashboard, Export screen.
- **Rewarded ad = optional convenience, not a wall.** Example: "Watch one ad to export a merged report to PDF." Core collect/view stays free and unlimited.
- Ads load only when online. Offline → no ad, no error. Offline users cost you nothing.

---

## Other revenue (still free for users, no customer service)

1. **Default "Made with FITIM" footer in generated FITI forms** (text link, inline in the HTML, so ad blockers can't hide it). Users *can* delete it, but most won't. It earns nothing directly, it sends traffic to your Viewer/gallery → ads. This answers "someone hosts my form on their website": you get a free backlink, not a banner.
2. **Sponsored templates / "Presented by"** in the gallery. A software vendor or inspection company pays to be featured. Done once per sponsor, no support.
3. **Affiliate links** in the gallery and Builder (hardware: rugged tablets, Bluetooth probes, barcode scanners; cloud storage). Matches your field-worker audience.
4. **Donations / sponsorship** (GitHub Sponsors, Open Collective, Ko-fi). Zero support liability. Enterprises that depend on the spec sometimes sponsor open standards.
5. **Later, optional:** a tiny self-serve "sync relay" (upload FITIM, get a link). You said no servers/support now, so postpone. Mention it only as a future option.

**Do NOT do:** sell the app, tiered paid plans, or contracts. That brings the support liability you want to avoid.

---

## Your three specific worries

| Situation | What happens | What to do |
| :--- | :--- | :--- |
| User uses my system in a browser with an ad blocker | They block banners on your site. | Accept it. The footer link + Android app + gallery cover this. |
| Someone hosts a FITI form on their own website | No ad shown. | Default footer backlink. Their respondents may click "open in Viewer". |
| Someone runs it fully local / inside their enterprise system | Zero revenue. | Accept it. They make FITIM a standard. Optional: a "FITIM compatible" listing page and sponsors later. |

---

## A conflict to watch: "zero cloud / zero telemetry" vs ads

Your philosophy says no data leaves the device. Ad SDKs (AdMob etc.) collect device IDs and talk to servers. Both can be true **if you keep ads out of the form screen** and say clearly:

> "Your form data never leaves your device. Only the app shell shows ads."

Keep the ad SDK completely separate from the form WebView, and declare it honestly in the Play Store Data Safety form.

---

## Honest numbers (so there are no surprises)

Ad-only revenue is small at the start. Rough rule: a banner earns about **$0.5-3 per 1,000 views** depending on country, rewarded ads about **$5-20 per 1,000**. A few thousand active users gives roughly **tens to a few hundred dollars per month**. It only gets meaningful with tens of thousands of users. That is fine for a solo, no-marketing project, but the plan should be:

1. Build the best free Viewer + the open spec.
2. Let the format spread (it is free and works offline).
3. Add ads only on your own surfaces, gently.
4. Add gallery + affiliate + sponsors as traffic grows.

## Recommended order

1. Finalize the FITIM spec (see README open questions). This is the real asset.
2. Ship the **Android Viewer** first (strongest ad surface, easiest to measure).
3. Ship the **free web Viewer + Builder** (growth).
4. Launch the **template gallery** (SEO traffic).
5. Add rewarded-ad exports and affiliate links.

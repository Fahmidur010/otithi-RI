# home-about — Home & About

**Generated:** 2026-11-25  
**Status:** in_progress  
**Mode:** classic  
**Id:** home-about  
**Source:** BUILD_PLAN Phase: home-about

---

## Clarify answers

| # | Question | Owner answer / default used |
|---|----------|-----------------------------|
| 1 | Destinations / Festivals CTAs while pages missing? | **Default** — unavailable / “coming next” (match nav); About remains a real link |
| 2 | Experiences + testimonials count/source? | **Default** — 3 experience highlights + 2 testimonials from live/reference copy; vendored photos only; no “See more” into missing packages |
| 3 | Hero image? | **Default** — `home-slider-01.jpg` as composed hero panel; other scenes for experience strips |
| 4 | About length/source? | **Default** — ~3 short sections (name/concept, CBT rationale, impact); no Read More accordion |
| 5 | Floating call/WhatsApp widget? | **Default** — skip this phase; footer R10 contact is enough |
| 6 | EN/BN depth? | **Default** — EN complete for new strings; BN dictionary for new keys where easy; EN fallback OK |

## Plan quality checklist

| Check | Status | Note |
|-------|--------|------|
| Steps Owner-verifiable | pass | Preview + file inspect observables |
| Actors clear | pass | Visitor sees Home/About; stakeholder presentation quality |
| Happy path | pass | Land Home → understand promise → About or wait for Dest/Fest |
| Error / empty / cancel | pass | Unavailable CTAs explicit; no empty sections; no dead “See more” |
| Ambiguous terms | pass | Clarify locked hero asset, counts, CTA policy |
| In/out of scope | pass | Matches BUILD_PLAN + seeds |
| No blocker-decision dependency | pass | D4 still deferred to vercel-ship |

## Prerequisites

- [x] Setup complete
- [x] Prior phase `site-foundation` complete (PROGRESS)
- [x] Clarify defaults accepted (2026-11-25)
- [x] Decision gates for this phase non-blocking

## Scope boundaries

### In scope
- `index.html` — Living host calendar Home (Owner refresh 2026-11-25): multi-image hero slideshow, season/now band, upcoming tour + festival offer cards (seats + presentation price), experience highlights, testimonials; purposeful motion
- `about.html` — concise name/concept, community-based tourism rationale, impact
- Page/layout CSS for Home living calendar + About prose
- Sari-border section titles; duplicated header/footer retained (R8)
- Expand `i18n.js` for new Home/About strings (EN complete; BN scaffold)
- Reuse vendored live-site images only
- Keep `npm run check` / preview green

### Out of scope
- Full destination / festival / gallery / FAQ / policy **pages** (Home offer cards are teasers; unavailable until those phases)
- Live inventory / live booking / payment
- Booking mock flow
- Full literary BN for every paragraph (→ `i18n-responsive`)
- Floating call/WhatsApp widget
- Wallpaper-only hero with no composition; Tailwind / component libraries
- Vercel / D4
- Generated or third-party stock images

## Decision gates

| ID | Question | Status | Notes |
|----|----------|--------|-------|
| D4 | Vercel root vs `public/` | deferred | Not this phase |
| R7 | Live-site imagery only | resolved | Use `assets/images/` |
| R8 | Duplicate header/footer | resolved | Keep identical chrome |
| R10 | Canonical contact | resolved | Footer only this phase (no float widget) |
| R11 | Fonts | resolved | Fraunces / Source Sans 3 / Noto Sans Bengali |
| CTA policy | Dest/Fest while unbuilt | resolved this plan | Unavailable pattern; About real |

## Implementation steps

### Step 1 — Composed Home hero
- **Status:** verified
- **Task:** Replace Home placeholder with a composed hero: hero-level brand presence, one headline (community-based tourism promise), short support line, CTA group (About = real link; Destinations + Book and Festivals = unavailable “coming next”), dominant leading image panel using `assets/images/home-slider-01.jpg`. Add CSS for the composed layout (not full-viewport wallpaper; image leads the section). Keep existing chrome.
- **Files:** `index.html`; `assets/css/pages/home.css`; `assets/css/components.css` (`.btn.is-unavailable`); `assets/js/i18n.js` (hero string keys)
- **Done when:** First viewport reads as one composition (brand, headline, support, CTAs, leading image); image is not 100% viewport wallpaper; Dest/Fest CTAs are non-navigating unavailable controls.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL present Home as a composed hero: hero-level Otithi brand, one promise headline, short support, CTA group, and a leading image panel (`home-slider-01.jpg`) that does not fill the viewport as wallpaper.
      - **Scenario:** Composed hero on Home
        - WHEN Visitor opens Home
        - THEN brand, headline, support, CTAs, and the hero image panel are visible as one composition
        - AND the image is a bordered media panel beside/below copy (not full-bleed viewport wallpaper)
    - The system SHALL offer a working About CTA and unavailable Destinations + Book / Festivals controls until those phases exist.
      - **Scenario:** Hero CTA availability
        - WHEN Visitor uses the hero CTA group
        - THEN About navigates to `about.html`
        - AND Destinations + Book and Festivals are non-navigating unavailable controls
  - **CHANGED:**
    - The system SHALL no longer show the Home placeholder stub as the main content (was: placeholder note only).
      - **Scenario:** Placeholder removed
        - WHEN Visitor views Home main
        - THEN the foundation placeholder note is gone and the composed hero is shown instead
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - Experience/testimonial sections (step 2); About page body (step 3); full i18n polish beyond hero keys (step 4); floating contact widget
  - **Risks / edge cases to watch in verification:**
    - Short desktop viewports: hero `min-height` softens via max-height media query — confirm image still reads as leading panel
    - BN hero strings are scaffold quality until `i18n-responsive`
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Composed hero (brand, copy, image panel) | Composed hero on Home | Open Home | brand + headline + support + CTAs + `home-slider-01` panel; not wallpaper | V1 |
  | 2 | ADDED | About real; Dest/Fest unavailable | Hero CTA availability | Use hero CTAs | About → about.html; Dest/Fest non-navigating | V2 |
  | 3 | CHANGED | Placeholder stub removed | Placeholder removed | View Home main | placeholder gone; composed hero shown | V1 |
- **Step verification** (for `/verify-phase home-about 1`):
  1. **V1:** Open Home in preview → **Expected:** composed hero with brand + headline + support + CTA group + `home-slider-01` panel (not wallpaper); placeholder gone
  2. **V2:** Inspect Destinations/Festivals hero CTAs → **Expected:** unavailable (no navigation); About CTA reaches `about.html`

### Step 2 — Home experiences + testimonials
- **Status:** verified
- **Task:** Add below-hero sections: **3** experience highlights and **2** testimonials adapted from live Otithi / reference pack (no fabricated stock stories). Use vendored photos (`community-scene-*`, `hero-sylhet-banner` as needed). Sari-border section titles. No “See more” into missing package pages; no empty headings.
- **Files:** `index.html`; `assets/css/pages/home.css`; `assets/js/i18n.js` (section keys)
- **Done when:** Both sections visible with real copy/imagery; no empty dead-end CTAs; layout stacks cleanly on narrow viewports.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25); craft polish absorbed 2026-11-25
  - **ADDED:**
    - The system SHALL show three Home experience highlights paired to matching vendored photography (Sundarbans village, Sylhet cultural performance, Madhupur forest welcome) with live-site-adapted copy, meaningful image alts, and without “See more” links to unbuilt packages.
      - **Scenario:** Three experiences on Home
        - WHEN Visitor scrolls below the Home hero
        - THEN three experience items with title, body, and image are visible
        - AND none of those items link to destination/package detail routes
        - AND each image has a meaningful alt describing the scene
    - The system SHALL show two visitor testimonials sourced from live Otithi feedback (named guests + trip context), without empty headings or dead-end CTAs.
      - **Scenario:** Two testimonials on Home
        - WHEN Visitor views the testimonials section
        - THEN two quotes with cite and trip meta are present
        - AND the section has no empty CTA / “See more” into missing pages
  - **CHANGED:**
    - The system SHALL crop experience media so baked-in live-site “Explore…” overlays are not the focal frame (was: full banner including left chrome).
      - **Scenario:** Experience photos without live chrome focus
        - WHEN Visitor views experience images
        - THEN the visible crop emphasizes hosts/place, not “Explore…” / Discover Experiences overlays
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - Composed hero structure (step 1); About page body (step 3); newsletter / floating widgets; linking experiences to bookable trips (later phases); re-downloading clean source images without overlays
  - **Risks / edge cases to watch in verification:**
    - CSS crop may still show a sliver of overlay on extreme aspect ratios — confirm desktop + mobile
    - BN strings for long experience bodies are scaffold quality
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | 3 matched experiences, alts, no package links | Three experiences on Home | Scroll below hero | 3 items (Sundarbans/Sylhet/Madhupur) with title/body/image + meaningful alts; no package links | V1 |
  | 2 | ADDED | 2 live-sourced testimonials | Two testimonials on Home | View testimonials | 2 quotes + cite/meta; no empty CTA / See more | V2 |
  | 3 | CHANGED | Crop away live Explore chrome | Experience photos without live chrome focus | View experience images | crop emphasizes scene, not Explore/Discover overlays | V3 |
- **Step verification** (for `/verify-phase home-about 2`):
  1. **V1:** Scroll Home → **Expected:** 3 experience items (Sundarbans / Sylhet / Madhupur) with title/body/image + meaningful alts; no package detail links
  2. **V2:** Inspect testimonials → **Expected:** 2 quotes with cite/meta; no empty CTA / “See more”
  3. **V3:** Inspect experience photos → **Expected:** crop focuses on hosts/place; baked-in Explore/Discover chrome not the focal content

### Step 3 — About page content
- **Status:** verified
- **Task:** Replace About placeholder with ~3 concise sections: Otithi name/guest meaning, why community-based tourism, impact (livelihoods / local economies). Source from live/reference; trim duplication. No Read More accordion. Keep duplicated chrome.
- **Files:** `about.html`; `assets/css/pages/about.css`; `assets/js/i18n.js` (About keys)
- **Done when:** About explains concept + rationale + impact without empty or duplicated blocks; presentation-length (scannable).
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL present About with three concise sections — name/guest meaning, why community-based tourism, and impact (livelihoods / local economies) — sourced from live Otithi / reference copy.
      - **Scenario:** Three About sections
        - WHEN Visitor opens About
        - THEN sections for name, CBT rationale, and impact are visible with body copy
    - The system SHALL keep About presentation-length without Read More expand/collapse or empty headings.
      - **Scenario:** No Read More / empty blocks
        - WHEN Visitor scans About markup and content
        - THEN there is no Read More control and no empty headings
  - **CHANGED:**
    - The system SHALL no longer show the About placeholder stub as main content (was: placeholder note only).
      - **Scenario:** About placeholder removed
        - WHEN Visitor views About main
        - THEN the foundation placeholder is gone and the three sections are shown
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - Home hero / experiences (steps 1–2); Destinations/Festivals pages; floating contact widget; full literary BN polish (step 4 / i18n-responsive)
  - **Risks / edge cases to watch in verification:**
    - Multiple sari-border section titles — confirm page still feels quiet, not busy
    - BN About strings are scaffold quality
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Name + CBT + impact sections | Three About sections | Open About | three sections with body copy | V1 |
  | 2 | ADDED | No Read More / empty headings | No Read More / empty blocks | Scan About | no Read More; no empty headings | V2 |
  | 3 | CHANGED | Placeholder stub removed | About placeholder removed | View About main | placeholder gone; sections shown | V1 |
- **Step verification** (for `/verify-phase home-about 3`):
  1. **V1:** Open About → **Expected:** three content sections (name, CBT rationale, impact) with body copy; placeholder gone
  2. **V2:** Scan markup/copy → **Expected:** no empty headings; no expand/collapse “Read More”

### Step 4 — i18n for new Home/About strings
- **Status:** verified
- **Task:** Extend `assets/js/i18n.js` with keys for new Home/About copy. EN complete and accurate. BN entries for new keys where straightforward (scaffold quality OK). Remove obsolete placeholder keys. Ensure `data-i18n` hooks cover switchable chrome + page strings intended for this phase.
- **Files:** `assets/js/i18n.js`; `index.html` / `about.html` `data-i18n` attrs; `scripts/i18n-parity-check.js`; `scripts/static-check.js`
- **Done when:** EN↔BN toggles new wired strings; `html[lang]` still updates; missing BN may fall back only if explicitly coded — prefer both dicts filled for wired keys.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL keep EN and BN dictionaries in parity for all Home/About `data-i18n` keys (no empty strings; HTML hooks present in EN dict), enforced by `scripts/i18n-parity-check.js` via `npm run check`.
      - **Scenario:** i18n parity check green
        - WHEN Owner or agent runs `npm run check`
        - THEN output includes `i18n-parity ok` and exit code is 0
    - The system SHALL switch wired Home page strings to Bengali when BN is selected (including experiences), updating `document.documentElement.lang` to `bn`.
      - **Scenario:** Home BN switch
        - WHEN Visitor clicks BN on Home
        - THEN Home wired strings (e.g. experiences title) appear in Bengali and `html[lang]` is `bn`
    - The system SHALL restore wired About page strings to English when EN is selected after BN.
      - **Scenario:** About EN restore
        - WHEN Visitor on About clicks EN after BN
        - THEN About section titles (e.g. “The name”) appear in English and `html[lang]` is `en`
  - **CHANGED:** none
  - **REMOVED:**
    - Obsolete Home/About placeholder dictionary keys (removed in earlier steps; confirmed absent)
  - **UNCHANGED (explicit non-goals for this step):**
    - Literary BN quality for all future pages (`i18n-responsive`); Destinations/Festivals copy; changing language persistence mechanism
  - **Risks / edge cases to watch in verification:**
    - Image `alt` attributes stay EN (not wired to i18n) — intentional this phase
    - localStorage may restore BN on reload — confirm EN button still restores
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | EN/BN parity + HTML coverage | i18n parity check green | `npm run check` | `i18n-parity ok`; exit 0 | V1 |
  | 2 | ADDED | Home BN switch | Home BN switch | Click BN on Home | BN strings + `lang=bn` | V2 |
  | 3 | ADDED | About EN restore | About EN restore | About: BN then EN | EN strings + `lang=en` | V3 |
- **Step verification** (for `/verify-phase home-about 4`):
  1. **V1:** Run `npm run check` → **Expected:** `i18n-parity ok` and `static-check ok`
  2. **V2:** Home → BN → **Expected:** wired Home strings in BN; `html[lang]=bn`
  3. **V3:** About → BN then EN → **Expected:** About strings restore to EN; `html[lang]=en`

### Step 5 — Responsive pass + static-check green
- **Status:** verified
- **Task:** Confirm Home/About layouts at phone / tablet / desktop (no horizontal overflow; CTAs reachable). Run `npm run check`. Fix only issues introduced by this phase.
- **Files:** `assets/css/base.css` (`overflow-x: clip`); `assets/css/pages/home.css` (mobile CTA flex + softer experience crop scale)
- **Done when:** `npm run check` exits 0; Owner/agent can preview Home→About without broken layout at ~390px and desktop width.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL keep Home and About usable at ~390px width without horizontal overflow, with primary CTAs reachable and mobile nav still toggling.
      - **Scenario:** Narrow Home/About usable
        - WHEN Visitor views Home then About at ~390px viewport width
        - THEN neither page scrolls horizontally
        - AND About Otithi / Back to Home CTAs remain usable
        - AND mobile menu opens and closes (Escape)
    - The system SHALL keep `npm run check` green for the completed home-about scaffold (including i18n parity).
      - **Scenario:** Static check green
        - WHEN Owner or agent runs `npm run check`
        - THEN output includes `static-check ok` (and `i18n-parity ok`) with exit code 0
  - **CHANGED:**
    - The system SHALL clip horizontal overflow at the document root and ease mobile hero CTA wrapping / experience crop scale (was: no explicit overflow clip; tighter mobile CTA wrap).
      - **Scenario:** Mobile layout hardening
        - WHEN Visitor uses Home on a phone-sized viewport
        - THEN hero CTAs wrap without forcing overflow and experience media crop stays contained
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - New page content; Destinations/Festivals routes; redesign of desktop composed hero Signature
  - **Risks / edge cases to watch in verification:**
    - Tablet (~768) experience alternating layout — confirm stack/split still readable
    - Sticky header + open mobile nav — confirm no horizontal spill
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Narrow usable, no overflow, nav works | Narrow Home/About usable | Home+About @ ~390px | no overflow; CTAs usable; menu toggles | V1 |
  | 2 | ADDED | check green | Static check green | `npm run check` | static-check ok (+ i18n-parity ok) | V2 |
  | 3 | CHANGED | Mobile layout hardening | Mobile layout hardening | Home @ phone width | CTAs wrap; media crop contained; no overflow | V1 |
- **Step verification** (for `/verify-phase home-about 5`):
  1. **V1:** Preview Home + About at ~390px (and spot-check desktop) → **Expected:** no horizontal overflow; CTAs reachable; mobile nav open/Escape close
  2. **V2:** `npm run check` → **Expected:** `static-check ok` (and `i18n-parity ok`)

## Schema / data / migrations

- N/A (static). Copy lives in HTML + `i18n.js` dictionaries.

## Routes / APIs / entry points

| Entry | Purpose | Guard | Step |
|-------|---------|-------|------|
| `/` (`index.html`) | Home composed page | public | 1–2, 4–5 |
| `/about.html` | About concept/impact | public | 3–5 |
| `npm run preview` | Local review | local | 5 |
| `npm run check` | buildCommand | CI/agent | 5 |

## UI / surfaces

| Surface | Purpose | Step |
|---------|---------|------|
| Composed Home hero | Brand + promise + CTAs + leading image | 1 |
| Experience highlights | Inspiration without dead ends | 2 |
| Testimonials | Trust / social proof (2 quotes) | 2 |
| About sections | Name, CBT rationale, impact | 3 |
| Language switch | EN/BN for new page strings | 4 |

## Seed / test data

- Vendored images: `home-slider-01.jpg`, `community-scene-01.jpg`, `community-scene-02.jpg`, `hero-sylhet-banner.jpg`, logo
- Copy adapted from live Otithi + Redesign Reference Pack (§1, §2.2–2.3) — not stock/generated
- Canonical contact remains footer R10 only

## Build verification

- [ ] `npm run check` passes after steps that change site files
- [ ] Preview Home → About; BN/EN; mobile nav still works after content grows

## Step progress tracker

| Step | Title | Built | Owner verified |
|------|-------|-------|----------------|
| 1 | Composed Home hero | yes | yes |
| 2 | Home experiences + testimonials | yes | yes |
| 3 | About page content | yes | yes |
| 4 | i18n for new Home/About strings | yes | yes |
| 5 | Responsive pass + static-check green | yes | yes |

## Verification rollup (optional)

- Smoke: preview Home (hero + sections) → About → BN → mobile nav — after all steps verified

## Audit checkpoints

- Composed hero matches Visual direction Signature (not full-viewport wallpaper)
- No empty Home/About sections; Dest/Fest CTAs unavailable until those phases
- About concise; no duplicated Read More bloat
- Live-site imagery only; brand tokens/fonts unchanged
- EN complete for new strings; BN scaffold present
- `npm run check` green; chrome still duplicated (R8); contact R10 in footer

## Files checklist

| Action | Path | Step |
|--------|------|------|
| update | `index.html` | 1, 2, 4 |
| create | `assets/css/pages/home.css` | 1 |
| update | `assets/css/components.css` (`.btn.is-unavailable`) | 1 |
| update | `assets/js/i18n.js` | 1–4 |
| create | `scripts/i18n-parity-check.js` | 4 |
| update | `scripts/static-check.js` (page CSS + i18n + parity) | 4 |
| update | `about.html` | 3, 4 |
| create | `assets/css/pages/about.css` | 3 |
| update | `assets/css/components.css` and/or home page CSS | 2, 5 |
| update | `scripts/static-check.js` | 5 (only if needed) |

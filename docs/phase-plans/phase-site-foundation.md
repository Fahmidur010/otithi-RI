# site-foundation — Site foundation

**Generated:** 2026-11-25  
**Status:** complete  
**Mode:** classic  
**Id:** site-foundation  
**Source:** BUILD_PLAN Phase: site-foundation

---

## Clarify answers

| # | Question | Owner answer / default used |
|---|----------|-----------------------------|
| 1 | Stub index + about now? | **Default a** — minimal stubs with real header/footer so `npm run check` passes once CSS exists |
| 2 | How many images this phase? | **Default a** — small starter set; Sylhet/Nobanno packs in later phases |
| 3 | Fonts EN + BN? | Owner: pick best **separate** EN and BN fonts (no single bilingual family required). **EN display:** Fraunces · **EN body/UI:** Source Sans 3 · **BN:** Noto Sans Bengali |
| 4 | Language switch depth? | **Default a** — control + dictionary scaffold; swap a few chrome strings |
| 5 | Preview script? | **Default a** — `"preview": "npx --yes serve . -p 4173"` |

## Plan quality checklist

| Check | Status | Note |
|-------|--------|------|
| Steps Owner-verifiable | pass | Done-when is file/preview observable |
| Actors clear | pass | Visitors see chrome; agents run check/preview |
| Happy path | pass | Scaffold → preview → check |
| Error / empty / cancel | pass | N/A for foundation except missing-asset notes; mobile nav close |
| Ambiguous terms | pass | Fonts locked in Clarify |
| In/out of scope | pass | Matches BUILD_PLAN |
| No blocker-decision dependency | pass | D4 deferred to vercel-ship |

## Prerequisites

- [x] Setup complete (product/flow/arch/design/build plan)
- [x] Decision gates for this phase resolved (D4 not blocking)
- [ ] Prior phase(s) — none (first phase)

## Scope boundaries

### In scope
- Folder layout per architecture (repo root static; D4 later)
- `assets/css/tokens.css`, `base.css`, `components.css` (chrome patterns)
- Minimal `index.html` + `about.html` stubs with duplicated header/footer
- Starter live-site images under `assets/images/`
- `assets/js/main.js` — mobile nav shell + language-switch stub + small EN/BN chrome dictionary
- `package.json` `preview` script; `npm run check` still green
- Document preview for agents (README note or package script only — prefer script)

### Out of scope
- Full Home/About content and composed hero polish (→ `home-about`)
- Destinations, festivals, booking, gallery, FAQ, policies pages
- Full EN/BN page copy
- Tailwind / component libraries
- Vercel project / D4
- Generated or third-party stock images

## Decision gates

| ID | Question | Status | Notes |
|----|----------|--------|-------|
| D4 | Vercel root vs `public/` | deferred | Stay at repo root this phase |
| R8 | Duplicate header/footer | resolved | Duplicate on stubs |
| R10 | Canonical contact | resolved | Use locked strings in footer |
| Fonts | EN/BN families | resolved this plan | Fraunces + Source Sans 3 + Noto Sans Bengali |

## Implementation steps

### Step 1 — Folder layout + CSS tokens
- **Status:** verified
- **Task:** Create `assets/css/`, `assets/js/`, `assets/images/` (with sensible subfolders if useful). Write `tokens.css` with brand colors, surfaces, spacing, type tokens pointing at Fraunces / Source Sans 3 / Noto Sans Bengali (Google Fonts or equivalent free CDN/`@import` acceptable for presentation).
- **Files:** `assets/css/tokens.css`; `assets/images/.gitkeep`; `assets/js/.gitkeep`; `scripts/static-check.js` (scaffold gate = `index.html` only)
- **Done when:** Tokens file exists; `--color-primary` / `--color-accent` match `#8C1733` / `#ECAA1D`; font CSS variables named and loadable.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL expose locked brand color tokens `--color-primary: #8C1733` and `--color-accent: #ECAA1D` in `assets/css/tokens.css`.
      - **Scenario:** Brand tokens present
        - WHEN an agent or Owner opens `assets/css/tokens.css`
        - THEN both primary and accent custom properties equal the locked hex values
    - The system SHALL declare loadable type tokens for Fraunces (display), Source Sans 3 (EN body), and Noto Sans Bengali (BN), including a Google Fonts `@import`.
      - **Scenario:** Font tokens present
        - WHEN `tokens.css` is inspected
        - THEN `--font-display`, `--font-body`, and `--font-bn` name those families and an `@import` for them is present
    - The system SHALL provide `assets/css/`, `assets/js/`, and `assets/images/` directories for the static site layout.
      - **Scenario:** Asset folders exist
        - WHEN the repo `assets/` tree is listed
        - THEN `css`, `js`, and `images` directories exist
  - **CHANGED:**
    - The system SHALL treat full static scaffold checks as starting when `index.html` exists (was: also when `tokens.css` alone existed).
      - **Scenario:** Check allows CSS-first steps
        - WHEN `npm run check` runs with tokens present but no `index.html`
        - THEN the check passes without requiring `about.html` / `base.css` / `main.js` yet
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - No `base.css` / `components.css` / HTML pages / images downloaded / i18n JS yet
  - **Risks / edge cases to watch in verification:**
    - Google Fonts CDN requires network when pages later load; offline preview may fall back to system fonts
    - Hex casing in file is lowercase (`#8c1733`) — same color as locked `#8C1733`
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Brand primary/accent tokens | Brand tokens present | Open tokens.css | `--color-primary`/`--color-accent` = locked brand hexes | V1 |
  | 2 | ADDED | Font family tokens + import | Font tokens present | Inspect tokens.css | Fraunces, Source Sans 3, Noto Sans Bengali vars + `@import` | V2 |
  | 3 | ADDED | Asset dirs css/js/images | Asset folders exist | List assets/ | css, js, images present | V3 |
  | 4 | CHANGED | Scaffold check gated on index.html | Check allows CSS-first | `npm run check` without index.html | static-check ok | V4 |
- **Step verification** (for `/verify-phase site-foundation 1`):
  1. **V1:** Open `assets/css/tokens.css` → **Expected:** `--color-primary`/`--color-accent` = locked brand hexes
  2. **V2:** Inspect `tokens.css` → **Expected:** Fraunces, Source Sans 3, Noto Sans Bengali vars + `@import`
  3. **V3:** List `assets/` → **Expected:** `css`, `js`, `images` present
  4. **V4:** Run `npm run check` → **Expected:** `static-check ok`

### Step 2 — Base + chrome component CSS
- **Status:** verified
- **Task:** Add `base.css` (reset, typography using tokens, layout primitives) and `components.css` for header, footer, sari-border section title rule, buttons, mobile nav panel — owner-custom, not Tailwind-looking.
- **Files:** `assets/css/base.css`, `assets/css/components.css`
- **Done when:** Stylesheets exist and define header/footer/nav/button primitives without a component library.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL provide `assets/css/base.css` with reset, token-based typography, focus-visible styles, and layout primitives (`.page`, `.container`, `.brand-mark`).
      - **Scenario:** Base stylesheet present
        - WHEN Owner opens `assets/css/base.css`
        - THEN body uses token fonts/colors and `.page` / `.container` / `:focus-visible` rules exist
    - The system SHALL provide `assets/css/components.css` defining chrome primitives: `.site-header`, `.site-footer`, `.site-nav`, `.btn` (primary/secondary), `.section-title` with sari-border rule, and mobile `.nav-toggle` / open-nav pattern — without Tailwind or a component library.
      - **Scenario:** Chrome component rules present
        - WHEN Owner inspects `components.css`
        - THEN header, footer, nav, button, and section-title rules exist and no `@tailwind` / Tailwind framework directives appear
  - **CHANGED:** none
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - No HTML pages yet; no downloaded images; no `main.js` / i18n wiring; no booking styles
  - **Risks / edge cases to watch in verification:**
    - Classes are ready for step 4 HTML; visual polish of chrome waits until stubs exist
    - Mobile nav open state expects `.site-header.is-nav-open` (JS in step 5)
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | base.css reset/type/layout | Base stylesheet present | Open base.css | token type/colors + `.page`/`.container`/focus-visible | V1 |
  | 2 | ADDED | chrome components CSS, no Tailwind | Chrome component rules present | Inspect components.css | header/footer/nav/btn/section-title; no Tailwind | V2 |
- **Step verification** (for `/verify-phase site-foundation 2`):
  1. **V1:** Open `assets/css/base.css` → **Expected:** token type/colors + `.page` / `.container` / `:focus-visible`
  2. **V2:** Inspect `assets/css/components.css` → **Expected:** `.site-header`, `.site-footer`, `.site-nav`, `.btn`, `.section-title`; no Tailwind

### Step 3 — Starter live-site images
- **Status:** verified
- **Task:** Download a small starter set from https://otithi.brac.net/ into `assets/images/` (e.g. homepage/community hero candidates usable later). Record source URLs in a short `assets/images/SOURCES.md`. No generated/stock images.
- **Files:** `assets/images/otithi-logo.png`, `hero-sylhet-banner.jpg`, `community-scene-01.jpg`, `community-scene-02.jpg`, `home-slider-01.jpg`, `assets/images/SOURCES.md`
- **Done when:** ≥2 real Otithi images vendored locally; sources documented; no third-party stock.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL vendor at least two real images from otithi.brac.net under `assets/images/` for the presentation build.
      - **Scenario:** Starter images on disk
        - WHEN Owner lists `assets/images/`
        - THEN ≥2 image files exist locally (logo + photography)
    - The system SHALL document each vendored image’s live-site source URL in `assets/images/SOURCES.md`.
      - **Scenario:** Provenance documented
        - WHEN Owner opens `SOURCES.md`
        - THEN each local filename maps to an `otithi.brac.net` URL
        - AND no generated/third-party stock sources are listed
  - **CHANGED:** none
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - No HTML pages, no `main.js`, no Sylhet/Nobanno full asset packs yet
  - **Risks / edge cases to watch in verification:**
    - Live URLs may change later; local copies are the source of truth for the build
    - Homepage slider filename had encoded spaces in the remote path
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | ≥2 live-site images vendored | Starter images on disk | List assets/images/ | ≥2 image files present | V1 |
  | 2 | ADDED | SOURCES.md maps to otithi.brac.net | Provenance documented | Open SOURCES.md | each file → otithi.brac.net URL; no stock | V2 |
- **Step verification** (for `/verify-phase site-foundation 3`):
  1. **V1:** List `assets/images/` → **Expected:** ≥2 image files present
  2. **V2:** Open `SOURCES.md` → **Expected:** each file → `otithi.brac.net` URL; no stock/generated sources

### Step 4 — HTML stubs with duplicated chrome
- **Status:** verified
- **Task:** Create minimal `index.html` and `about.html` with identical header/footer (R8), nav labels (Home, About, Destinations + Book, Festivals, Gallery, FAQ), EN/BN control, canonical contact (R10), linked CSS/JS. Body: placeholder note that full content comes in `home-about`. Do **not** ship full composed hero yet.
- **Files:** `index.html`, `about.html`, `assets/js/main.js` (empty shell so check + script tag succeed; behavior in step 5)
- **Done when:** Both pages open locally with matching chrome; nav links exist (may 404 for unbuilt routes — OK this phase). Prefer real paths for future pages; 404 until those phases is acceptable.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL provide Home and About HTML stubs that share identical header/footer chrome (R8), including Otithi brand, primary nav (Home, About, Destinations + Book, Festivals, Gallery, FAQ), EN/BN controls, and locked canonical contact (R10).
      - **Scenario:** Matching chrome on both stubs
        - WHEN Owner opens `index.html` and `about.html`
        - THEN both show the same header/footer structure, brand, nav labels, language controls, and contact strings
    - The system SHALL use placeholder body copy only (no full composed hero), noting full content comes in home-about; unbuilt routes may 404.
      - **Scenario:** Placeholder bodies only
        - WHEN Owner views main content on Home or About
        - THEN a placeholder note is visible and no full composed hero section is present
  - **CHANGED:** none
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - Mobile nav / i18n not functional yet (empty `main.js` shell); no destinations/festivals/gallery/faq pages; no booking
  - **Risks / edge cases to watch in verification:**
    - Destinations/Festivals/Gallery/FAQ/policy links 404 until later phases (expected)
    - Language and menu buttons present but inactive until step 5
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Identical chrome + R10 contact | Matching chrome on both stubs | Open index + about | same header/footer/nav/lang/contact | V1 |
  | 2 | ADDED | Placeholder body, no full hero | Placeholder bodies only | View main on Home/About | placeholder note; no composed hero | V2 |
- **Step verification** (for `/verify-phase site-foundation 4`):
  1. **V1:** Open `index.html` and `about.html` → **Expected:** same header/footer/nav/lang; contact = locked R10 set
  2. **V2:** View main content → **Expected:** placeholder only; no full composed hero

### Step 5 — main.js: mobile nav + i18n scaffold
- **Status:** verified
- **Task:** Implement `assets/js/main.js`: mobile nav open/close; language toggle that swaps a small set of chrome strings via a JS dictionary (`assets/js/i18n.js` or inline). Update `lang` on `<html>`. Honor `prefers-reduced-motion` if any transition used.
- **Files:** `assets/js/main.js`, `assets/js/i18n.js`; script tags on `index.html` / `about.html`
- **Done when:** On a narrow viewport, menu toggles; EN↔BN changes at least nav/footer chrome strings; `document.documentElement.lang` updates.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL toggle the mobile navigation open/closed via the header menu control (`.is-nav-open`), including Escape and link-click to close.
      - **Scenario:** Mobile nav toggles
        - WHEN Owner narrows the viewport and activates the menu button
        - THEN the primary nav panel opens and closes again on second press / Escape / nav link
    - The system SHALL switch chrome stub strings between English and Bengali via EN/BN controls, update `<html lang>`, and persist the choice in `localStorage`.
      - **Scenario:** Language switch updates chrome
        - WHEN Owner clicks BN (then EN)
        - THEN nav/footer/`data-i18n` chrome strings swap, `document.documentElement.lang` becomes `bn` (then `en`), and the pressed language button reflects the active language
  - **CHANGED:** none
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - Full dual page copy for all future pages; preview script (step 6); composed hero content
  - **Risks / edge cases to watch in verification:**
    - Desktop wide view hides the toggle (CSS); use ≤860px width to test nav
    - BN strings are presentation-quality scaffold, not final literary translation
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | Mobile nav open/close | Mobile nav toggles | Narrow + menu button | nav opens/closes | V1 |
  | 2 | ADDED | EN/BN chrome + lang attr | Language switch updates chrome | Click BN then EN | strings + `lang` update; aria-pressed matches | V2 |
- **Step verification** (for `/verify-phase site-foundation 5`):
  1. **V1:** Narrow viewport → menu button → **Expected:** nav opens/closes (Escape works)
  2. **V2:** Click BN then EN → **Expected:** chrome strings + `html[lang]` update; active lang button pressed

### Step 6 — Preview script + static-check green
- **Status:** verified
- **Task:** Add `npm run preview` (`npx --yes serve . -p 4173`). Confirm `npm run check` passes with scaffold. Optionally one-line note in package.json description or existing docs is enough — no new markdown doc required unless helpful.
- **Files:** `package.json`
- **Done when:** `npm run check` exits 0; `npm run preview` serves the site on port 4173.
- **Behavior delta:**
  - **Intent status:** accepted (2026-11-25)
  - **ADDED:**
    - The system SHALL expose `npm run preview` that serves the static site on port 4173 for local review.
      - **Scenario:** Preview serves Home stub
        - WHEN Owner runs `npm run preview` and opens `http://localhost:4173/`
        - THEN the Home stub loads successfully (Otithi chrome visible)
    - The system SHALL keep `npm run check` passing for the completed site-foundation scaffold.
      - **Scenario:** Static check green
        - WHEN Owner or agent runs `npm run check`
        - THEN output includes `static-check ok` and exit code is 0
  - **CHANGED:** none
  - **REMOVED:** none
  - **UNCHANGED (explicit non-goals for this step):**
    - No Vercel deploy (later phase); no full Home/About content; no new pages
  - **Risks / edge cases to watch in verification:**
    - First `npm run preview` may download `serve` via npx (needs network)
    - Port 4173 must be free
- **Trace:**
  | # | Kind | SHALL (short) | Scenario | WHEN (short) | THEN (Expected) | Verify # |
  |---|------|---------------|----------|--------------|-----------------|----------|
  | 1 | ADDED | npm run check passes | Static check green | Run `npm run check` | static-check ok | V1 |
  | 2 | ADDED | preview on :4173 | Preview serves Home stub | `npm run preview` + open localhost:4173 | Home stub loads | V2 |
- **Step verification** (for `/verify-phase site-foundation 6`):
  1. **V1:** Run `npm run check` → **Expected:** `static-check ok`
  2. **V2:** Run `npm run preview` → open http://localhost:4173 → **Expected:** Home stub loads

## Schema / data / migrations

- N/A (static). i18n dictionary object in JS only.

## Routes / APIs / entry points

| Entry | Purpose | Guard | Step |
|-------|---------|-------|------|
| `/` (`index.html`) | Home stub | public | 4 |
| `/about.html` | About stub | public | 4 |
| `npm run preview` | Local static server | local | 6 |
| `npm run check` | buildCommand | CI/agent | 6 |

## UI / surfaces

| Surface | Purpose | Step |
|---------|---------|------|
| Site header / footer | Shared chrome template to duplicate later | 2, 4 |
| Mobile nav | Collapse navigation | 5 |
| Language control | EN/BN stub | 5 |
| CSS tokens / base | Visual system foundation | 1–2 |

## Seed / test data

- Live-site images (step 3)
- Chrome i18n strings EN + BN (step 5)
- Canonical contact constants in HTML footer

## Build verification

- [ ] `npm run check` passes after each step that adds site files (especially after step 4+)
- [ ] Preview works after step 6

## Step progress tracker

| Step | Title | Built | Owner verified |
|------|-------|-------|----------------|
| 1 | Folder layout + CSS tokens | yes | yes |
| 2 | Base + chrome component CSS | yes | yes |
| 3 | Starter live-site images | yes | yes |
| 4 | HTML stubs with duplicated chrome | yes | yes |
| 5 | main.js: mobile nav + i18n scaffold | yes | yes |
| 6 | Preview script + static-check green | yes | yes |

## Verification rollup (optional)

- Smoke: preview Home → About → toggle BN → mobile nav — after all steps verified

## Audit checkpoints

- Tokens match brand; no Tailwind kit
- Header/footer duplicated identically on both stubs
- Contact matches R10
- Images have live-site provenance only
- Fonts: Fraunces + Source Sans 3 + Noto Sans Bengali loaded
- `npm run check` and preview documented via package scripts

## Files checklist

| Action | Path | Step |
|--------|------|------|
| create | `assets/css/tokens.css` | 1 |
| create | `assets/css/base.css` | 2 |
| create | `assets/css/components.css` | 2 |
| create | `assets/images/*` + `SOURCES.md` | 3 |
| create | `index.html` | 4 |
| create | `about.html` | 4 |
| create | `assets/js/main.js` (shell in 4; behavior in 5) | 4–5 |
| update | `package.json` (`preview`) | 6 |

## Phase remainder — site-foundation — Site foundation

| Kind | Item | Notes |
|------|------|-------|
| Still open | none | |
| Deferred | D4 — Vercel root vs `public/` | Decide in `vercel-ship` |
| Out of scope | Full Home/About content; destinations/festivals/booking/gallery/FAQ; full EN/BN copy; Tailwind; Vercel | Per BUILD_PLAN / phase plan |
| Carry into next | Composed Home hero + promise; About concept/impact; reuse vendored images + chrome | Seeds for `home-about` |
| Lessons encoded | none | |

**Next-phase seeds (`home-about`):**
- Composed Home hero (image leads section, not full-viewport wallpaper) using vendored photography
- One-line promise + clear paths to Destinations + Book and Festivals
- About: concise Otithi concept / community impact (no empty sections)
- Keep duplicated header/footer + sari-border section titles; expand i18n only for page strings as needed (full BN later)

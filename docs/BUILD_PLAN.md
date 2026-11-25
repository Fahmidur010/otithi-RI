# Build plan

Ordered phases for this product. Drafted in `/setup` Stage 8 from product, user flow, architecture, decisions, and design system (if any). Each phase is later planned with `/plan-phase <slug>` into `docs/phase-plans/phase-<slug>.md`.

**Status:** accepted  
**Last updated:** 2026-11-25

## Phase ids

- Each phase has a **slug** (filesystem-safe kebab-case) and a **title** (human name).
- Invokes use the slug: `/plan-phase site-foundation`, `/build-phase booking-demo 3`. **Steps stay numeric.**

## Open decision constraints

| ID | Status | Blocker? | How this plan treats it |
|----|--------|----------|-------------------------|
| D4 | deferred | no | Decide repo root vs `public/` at first Vercel deploy (`vercel-ship` phase). Do not block earlier phases. |

## Phase order

1. `site-foundation` — Site foundation
2. `home-about` — Home & About
3. `destinations-book` — Destinations + Book & Sylhet
4. `festivals` — Festivals & Nobanno Utshob
5. `booking-demo` — Booking mock
6. `gallery-trust` — Gallery, FAQ & policies
7. `i18n-responsive` — Full EN/BN & responsive pass
8. `vercel-ship` — Vercel live presentation

---

## Phase: site-foundation — Site foundation

### In scope
- Folder layout per architecture (`assets/css`, `assets/js`, `assets/images`, page paths)
- CSS tokens (brand colors, surfaces, type stubs), `base.css`, shared chrome patterns (header/footer markup to duplicate)
- Pull/vendor needed live-site images for upcoming pages (canonical contact already locked)
- Light `main.js` hooks: mobile nav shell, language-switch stub
- Local static preview script (e.g. `npx serve`) documented for agents

### Out of scope
- Full page content for all routes
- Booking mock
- Vercel production project settings (except noting D4)
- Tailwind / component libraries

### Risks / dependencies
- Image rights/path stability from live site URLs — prefer downloaded assets under `assets/images/`

---

## Phase: home-about — Home & About

### In scope
- `index.html` — composed hero (image leads section, not full-viewport photo); promise; paths to Destinations + Festivals; experience/testimonial sections without empty dead ends
- `about.html` — concise concept / impact
- Duplicate header/footer; sari-border section titles; Visual direction A chrome habits

### Out of scope
- Destination/festival detail
- Booking
- Full BN copy (scaffold ok; complete in `i18n-responsive`)

### Risks / dependencies
- Needs foundation tokens + at least hero/about imagery

---

## Phase: destinations-book — Destinations + Book & Sylhet

### In scope
- `destinations.html` — combined Destinations + Book list; place cards; **non-Sylhet cards display-only**
- `destinations/sylhet.html` — real live-site content/images; overview, itinerary summary, inclusions/exclusions, pricing by travel type, deposit/cancel summary near price; primary CTA ready for booking phase; optional enquiry local success
- Asymmetric detail layout (Visual direction C)

### Out of scope
- Live booking backend
- Linking non-sample cards to Sylhet
- Festival pages

### Risks / dependencies
- Sylhet package content accuracy from live site

---

## Phase: festivals — Festivals & Nobanno Utshob

### In scope
- `festivals.html` — event list (not place index); **non-Nobanno cards display-only**
- `festivals/nobanno-utshob.html` — event-first detail; host place secondary; path to booking demo CTA; live imagery/content when available
- Visually distinct from destination templates

### Out of scope
- Treating festivals as destination clones
- Real availability calendar

### Risks / dependencies
- Nobanno content depth on live site may be thinner than Sylhet — use what’s available honestly

---

## Phase: booking-demo — Booking mock

### In scope
- Multi-step mock: date range → traveler count + name/email → review → confirmation
- Back / cancel → return to originating package (Sylhet or Nobanno)
- Inline validation; no payment/login
- Wire primary CTAs from both detail pages
- Secondary consultation/enquiry local success if not already done

### Out of scope
- Real payments, deposits, accounts, wallet, live inventory

### Risks / dependencies
- Must work responsive; keep presentation-honest (mock confirmation, not fake bank UI)

---

## Phase: gallery-trust — Gallery, FAQ & policies

### In scope
- `gallery.html` — redesigned live-site imagery showcase
- `faq.html` — adapted FAQ groups for presentation
- Short policy stubs (Terms, Privacy, EMI) + footer links
- Canonical contact everywhere

### Out of scope
- Blog, newsletter, dream-destination modal
- Full legal parity with live policy length

### Risks / dependencies
- FAQ translation volume deferred to `i18n-responsive`

---

## Phase: i18n-responsive — Full EN/BN & responsive pass

### In scope
- Complete English + Bengali for all core pages (JS dictionaries per architecture R3)
- Language switch on all pages; `lang` updates
- Responsive audit: phone / tablet / desktop; booking steps; composed hero; detail split stacking
- Motion defaults only as needed (nav/validation); honor reduced-motion
- Playwright CLI smoke against local server for key flows (Home → Sylhet → booking confirm; Festivals → Nobanno; language switch)

### Out of scope
- Mirrored `/en` `/bn` routes
- Perfect literary translation polish beyond presentation quality (Owner may refine copy later)

### Risks / dependencies
- BN font stack must render; content effort is the main cost

---

## Phase: vercel-ship — Vercel live presentation

### In scope
- Resolve D4 (root vs `public/`)
- Configure static deploy; Owner shares live URL
- Final pass: no broken links among in-scope pages; sample CTAs work; display-only cards stay non-navigating

### Out of scope
- Production analytics productization
- CI complexity beyond what Vercel needs

### Risks / dependencies
- D4 deferred until this phase; Owner Vercel account/access

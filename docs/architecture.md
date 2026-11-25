# Architecture & conventions

How this codebase is structured. Agents must follow these rules when implementing Phasestep steps.

## Stack

| Choice | Decision |
|--------|----------|
| Runtime | **Static site** — no SSR framework |
| Markup | HTML pages |
| Style | **Custom CSS** (brand tokens via CSS variables). Avoid generic utility-first “Tailwind look.” Tailwind only if Owner later approves for responsive scaffolding without owning visuals. |
| Behavior | Light **vanilla JS** for language switch, booking mock steps, enquiry success, mobile nav |
| Deploy | **Vercel** static (root or `public/` — pick one layout and stick to it) |
| Verify | **Playwright CLI** (`@playwright/cli`) for `/verify-phase` / UI audit evidence |

**Brand tokens (locked):** `--color-primary: #8C1733`; `--color-accent: #ECAA1D`. Imagery from live Otithi assets only (vendored under `assets/` / `images/` — never generate stock).

## Layers / folders

Proposed greenfield layout (adjust only with Owner note):

```text
/
  index.html                 # Home
  about.html
  destinations.html          # Destinations + Book (combined)
  destinations/sylhet.html   # Sample destination detail
  festivals.html
  festivals/nobanno-utshob.html
  gallery.html
  faq.html
  policies/                  # Short stubs: terms, privacy, emi
  assets/
    images/                  # Copied/referenced from live site
    css/
      tokens.css             # Brand + spacing/type variables
      base.css               # Reset, typography, layout primitives
      components.css         # Header, footer, cards, booking steps (project-owned)
      pages/                 # Optional page-specific sheets
    js/
      main.js                # Nav, language switch hook
      booking-mock.js        # Multi-step mock (dates → travelers → review → confirm)
  docs/                      # Phasestep (already present)
  package.json               # Tooling only (Playwright); not an app framework
```

**IA conventions**
- One nav concept for **Destinations + Book**; separate **Festivals** (event-first).
- Sample deep pages: **Sylhet**, **Nobanno Utshob** only. Other destination/festival cards are **display-only** (no click-through to the samples — Owner R9).
- **Canonical contact (R10):** `otithi.support@brac.net` · `+8809610800700` · `+8801332550542` · BRAC Tower 65, Bir Uttam A.K. Khandakar Road, Mohakhali, Dhaka 1212.
- Shared header/footer: **duplicate HTML** on each page (Owner R8). Keep markup identical by hand; no include/partial system. Do not introduce a framework for shared chrome.

**i18n**
- Full EN + BN for core pages (product). **Accepted:** one page set + JS language dictionaries (single URL). Mirrored `en/` + `bn/` routes only if Owner reopens in decisions.

**Booking mock**
- Client-only state (no API). Steps and validation in `booking-mock.js`. Cancel returns to the originating package page.

## Forbidden patterns

- Astro / Next / React / Vue / etc. for this presentation build
- Utility-first Tailwind as the visual system (unless Owner explicitly re-opens)
- Second component library / design kit driving markup
- Real payment, auth, wallet, or live availability backends
- Generated or third-party stock images
- Treating festival pages as destination catalog clones
- Inventing Playwright or skill rule bodies — use installed CLI + skills only

## Build & quality

- **buildCommand (confirmed):** `npm run check` — `scripts/static-check.js` (docs always; core site paths once scaffold exists; progressive page pairs)
- Local preview: static file server (e.g. `npx serve .` or Vercel CLI)
- Responsive: mobile / tablet / desktop; no horizontal overflow; reachable primary CTAs
- Verify evidence: Playwright CLI against local or Vercel URL for accepted Behavior deltas

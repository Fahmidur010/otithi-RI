# Design system

UI rules for this project. Used by `/design-direction`, `/detect-ui`, `/critique-ui`, `/polish-ui`, `/motion-ui`, `/audit-ds`, `/audit-campaign-ds`, and UI build steps.

Filled during `/setup` Stage 7 (design wing): **Visual direction** + product + user flow + architecture + **one** chosen component library (or Owner custom) + optional guidelines.

**Status:** accepted  
**Chosen library:** owner-custom (none from catalog)  
**Guidelines cited:** none  
**Accepted:** 2026-11-25

---

## Visual direction

**Status:** accepted  
**Page mode:** persuade (booking mock = light operate)  
**Accepted:** 2026-11-25 — Hybrid A+C with Home composed-hero constraint

- **Product:** Stakeholder-ready Otithi presentation that welcomes like a Bengali guest (A) and sells place/event packages with editorial clarity (C)
- **Character:** Warm host energy on Home/chrome; on detail pages, celebratory but respectful seasonal/editorial tone
- **World:** Maroon `#8C1733` and mustard `#ECAA1D` as cloth and harvest light; live-site photography as the material of the UI; chrome stays quiet furniture
- **Moments:** Home composed hero (see Signature); Sylhet/Nobanno asymmetric photo+story with price/CTA near the decision; festival pages event-first
- **Signature:**
  - **Home:** Image **leads the hero section** — it does **not** fill the entire first viewport as a full-screen photo. First screen is one composition: brand (hero-level), one headline, short support, CTA group, and a dominant hero image block that leads (not owns 100% of the viewport)
  - **Global chrome:** Large Otithi wordmark presence; maroon→gold rule under section titles (sari-border habit from A)
  - **Detail (Sylhet / Nobanno):** Asymmetric split — photo owns one side, story + itinerary + sticky-feeling price/CTA the other (from C)
- **Bans:** Full-viewport-only hero image on Home; generic SaaS card stacks; purple gradients; floating badges on hero media; utility-Tailwind chrome look; rounded-full pill forests; glow CTAs; festival pages that look like destination cards; empty dead-end CTAs

---

## Principles

1. **Brand before chrome** — Otithi wordmark and photography carry the first impression; UI chrome stays quiet.
2. **Two lines, one family** — Destinations are place-led; Festivals are event-led. Visual templates must not collapse them into the same card language.
3. **Decision near price** — On package detail, price, deposit/cancel summary, and primary CTA sit together early enough to decide.
4. **Real photos only** — Live Otithi imagery; no generated or stock substitutes.
5. **Presentation honesty** — Booking steps may be mocked; never look like a fake live payment system.

## Chosen system

- **Library / source:** **Owner custom** — HTML + project CSS (`assets/css/tokens.css`, `base.css`, `components.css`). No catalog component library.
- **Why this choice:** Static stack; Owner rejected generic kit look; Visual direction needs bespoke layout (composed Home hero + asymmetric detail).
- **Forbidden:** MUI, shadcn, HeroUI, daisyUI, Carbon, Atlaskit, Astryx, or any second kit. Do not introduce Tailwind as the visual system (optional later only for scaffolding, Owner-gated, without owning look).

## Tokens

### Color

| Token | Value | Use |
|-------|-------|-----|
| `--color-primary` | `#8C1733` | Brand, primary CTA, key headlines, active nav |
| `--color-accent` | `#ECAA1D` | Rules, secondary CTA outline/fill sparingly, festival season markers |
| `--color-ink` | near-black warm (e.g. `#1A1214`) | Body text |
| `--color-muted` | warm gray | Secondary text |
| `--color-surface` | warm off-white / cream paper | Page background (not cold gray SaaS white) |
| `--color-surface-elevated` | slightly deeper warm surface | Booking step panel, sticky price band |

Do not introduce purple, neon, or cool gray corporate palettes.

### Typography

- **Display / brand:** Expressive serif or high-character display for Otithi wordmark and page titles (not Inter/Roboto/Arial/system-only).
- **Body / UI:** Readable humanist or transitional sans for nav, forms, FAQ.
- Load via licensed/free fonts suitable for EN + Bengali (or system Bengali stack with a chosen Latin display pair). Exact font files chosen at build; must support BN where content appears.
- Section titles may sit on the maroon→gold sari-border rule.

### Spacing & layout

- Comfortable section rhythm; avoid dense dashboard packing.
- Home hero: composed block with margins — image is a **leading media panel**, not viewport wallpaper.
- Detail: asymmetric split at desktop; stack photo then story on small screens; price/CTA band remains reachable.
- Breakpoints: phone / tablet / desktop; no horizontal overflow; primary CTAs thumb-reachable on mobile.

### Radius & elevation

- Modest radius on buttons/inputs (not pill-everything).
- Prefer borders and tonal surfaces over multi-layer shadows.
- No glow.

## Component usage

Project-owned patterns only (implement in CSS, not a kit):

| Pattern | When |
|---------|------|
| Site header / footer | Duplicated HTML each page; large wordmark; EN/BN control; canonical contact in footer |
| Composed hero | Home first viewport only |
| Destination / festival list tiles | Imagery + title; **non-sample tiles display-only**; samples link to Sylhet / Nobanno |
| Package detail split | Sylhet + Nobanno |
| Sticky-feeling price band | Detail pages — presentation, not app chrome chrome overload |
| Booking mock steps | Progress-ish steps; back/cancel; inline validation |
| FAQ accordion or stacked Q&A | Keep scannable |
| Policy stub pages | Short text; same chrome |

Interaction cards are allowed only where the user acts (booking steps, language switch, mobile nav). Decorative card grids for marketing blocks: avoid unless needed for scannability — prefer editorial sections.

## Motion

**Status:** drafting (defaults)

- **Default:** none — earn every animation
- **Allowed purposes:** feedback (form validation), state (booking step change), spatial (mobile nav open/close)
- **Tool preference:** CSS transitions only for now
- **Feel:** &lt;300ms; no ease-in on enter; honor `prefers-reduced-motion`
- **Never:** decorative loops; autoplay carousels as the Home hero solution; motion that obscures brand
- Refine later with `/motion-ui` if needed

## Accessibility

- Semantic HTML landmarks; visible focus styles using primary/accent (not outline:none without replacement)
- Contrast: maroon/gold on cream checked for text and UI chrome; large display type on photos needs overlay/scrim if text sits on imagery (prefer text **beside** photo on Home composed hero)
- Language switch announced; `lang` attribute updates with EN/BN
- Booking mock: associate labels with inputs; errors in text, not color alone
- Touch targets adequate on mobile; skip-to-content optional but welcome

## Do / don’t

**Do**
- Lead with Otithi brand and real community photography
- Keep Destinations and Festivals visually distinct
- Put price + deposit summary + primary CTA together on detail
- Duplicate header/footer carefully so every page matches
- Design EN and BN with equal care

**Don’t**
- Full-screen image as the entire Home first viewport
- Install a component library mid-build
- Fake live payments or login gates
- Link non-sample cards to Sylhet/Nobanno
- Use purple SaaS gradients, glow buttons, or pill forests
- Generate images or pull third-party stock

## Provenance

| Lane | Id / label | URL or path | Installed? |
|------|------------|-------------|------------|
| owner | Visual direction hybrid A+C | docs/DESIGN_SYSTEM.md | accepted |
| owner | Brand colors + live imagery rule | docs/product.md | accepted |
| owner | Mood comps (reference only) | Cursor assets `otithi-direction-*.jpg`, `otithi-home-composed-hero.jpg` | reference — not production assets |
| library | none | — | skipped |
| guideline | none | — | skipped |

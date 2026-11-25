# Product source of truth

Describe what the product is, who uses it, and how it should behave.

Phasestep Agents treat this file as authoritative over assumptions and legacy code.

Prefer `/setup` to draft this with Owner gates. The interaction map in `docs/USER_FLOW.md` is the overview surface; refinements there must stay in sync with this file.

## Overview

**Otithi Redesign Presentation** is a stakeholder-facing rebuild of [Otithi](https://otithi.brac.net/) (BRAC’s community-based tourism initiative in Bangladesh). The product SHALL present a redesigned information architecture and visual system for the **core public pages**, so Owner can present the redesign for approval — including via a **public Vercel URL**.

**Priority:** visual redesign and rebuilt page experience over full production functionality. Interactive flows MAY be mocked for demo fidelity; they SHALL NOT depend on real payments, accounts, live availability backends, or a CMS admin.

**Delivery shape (preferred):** a **static site** — **HTML + custom CSS** first (CSS variables for brand, flex/grid + media queries for responsive), light client JS for mocks/language. **Avoid a generic “Tailwind-made” look.** Tailwind MAY be added later only if it clearly helps responsive scaffolding without dictating visual style. Chosen over Astro for this presentation build; **Vercel static deploy**. Stack identity is confirmed in setup Stage 4.

**Responsive:** every page and the booking mock SHALL be usable on phone, tablet, and desktop viewports (layout, nav, and CTAs must not break or rely on desktop-only patterns).

**Brand (locked for this build):**
- Primary: `#8C1733`
- Accent: `#ECAA1D`
- Imagery SHALL reuse assets from the live Otithi site only (no generated or third-party stock imagery).

**Two product lines (IA rule):**
1. **Destinations + Book a tour** — one combined area. Visitors browse **places**, open a destination package, and book a tour from that same path. Not separate “Destinations” vs “Book a Tour” concepts.
2. **Festivals** — a **different** line. Focused on the **event** (e.g. Nobanno Utshob, Pohela Boishakh), not on a destination catalog. Festivals run at particular times of year; Otithi organizes the guest experience around that event at a host location. Festival pages SHALL lead with the event (what/when/why), and MAY name the host place as context — they SHALL NOT be structured as generic destination pages.

**Core promise to convey:** authentic cultural immersion, responsible travel that benefits host communities, and guided logistics — consistent with the live site and the redesign reference pack.

## Actors / users

| Actor | Role |
|-------|------|
| **Stakeholder** (primary presentation audience) | BRAC / Otithi decision-makers reviewing the redesign for approval (often via the Vercel link). |
| **Prospective traveler** (implied end user of the UX) | Dhaka-based, diaspora, or international guest exploring destinations/festivals and considering a booking path. Journey design SHALL optimize for this actor even though the deliverable is a presentation build. |
| **Visitor (guest)** | Anyone browsing without an account. Accounts are out of scope; all flows are guest. |

## Core flows

### F1 — Discover Otithi (Home)

1. Visitor lands on Home.
2. Visitor SHALL see a clear one-line offer / promise (community-based tourism) and distinct paths into **Destinations + Book** and **Festivals**.
3. Home MAY include experience highlights, testimonials, and primary CTAs — presentation-quality, not empty/placeholder sections.
4. Persistent contact affordances (call / WhatsApp style) MAY appear as UI chrome using the **canonical demo contact** set (see F7).

### F2 — Understand the initiative (About)

1. Visitor opens About.
2. Page SHALL explain the Otithi name/concept, community-based tourism rationale, and impact framing (livelihoods / local economies).
3. Copy SHALL be concise enough for a presentation build (avoid duplicated / empty sections called out in the reference pack).

### F3 — Destinations + Book a tour (place-based)

1. Visitor opens the combined **Destinations / Book a tour** area (single nav item / IA concept).
2. Visitor browses destination cards and can proceed to book from that same area (look → choose place → book).
3. Visitor opens **one sample destination detail** populated with **real live-site content and images**. **Sample: Sylhet.** Other destination cards on the list SHALL be **display-only** (not links to Sylhet).
4. Detail page SHALL surface early: overview/highlights, itinerary summary, inclusions/exclusions summary, pricing by travel type, and a short deposit/cancellation summary near price.
5. Visitor starts the **booking demo path** (F5) for that destination package.

### F4 — Festivals (event-based)

1. Visitor opens Festivals list (seasonal / dated events, not a place index).
2. Visitor opens **one sample festival detail** with **real live-site content and images** when available. **Sample: Nobanno Utshob.** Other festival cards SHALL be **display-only** (not links to Nobanno).
3. Festival detail SHALL lead with the **event** (meaning, season/timing, what guests take part in). Host place MAY appear as where Otithi runs the experience for guests — secondary to the event.
4. Visitor MAY start the booking demo (F5) when the festival package is bookable in the presentation.

### F5 — Booking demo (mock multi-step → confirmation)

1. From destination or festival detail, visitor chooses a travel type / primary CTA.
2. Mock steps SHALL be: **date range → traveler count + name/email → review → confirmation**.
3. Visitor SHALL be able to go **back** a step or **cancel** to the package detail without a stuck state.
4. Flow SHALL end on a confirmation screen. No real payment, booking record, or login.
5. Secondary **consultation / enquiry** CTA MAY show a local success state only. Empty/invalid mock fields MAY show simple inline validation before advancing.

### F6 — Gallery

1. Visitor opens Gallery.
2. Gallery SHALL showcase live-site imagery in a redesigned layout suitable for stakeholder review.

### F7 — FAQ and static policies

1. Visitor opens FAQ (adapted from live site / reference inventory as needed).
2. Footer MAY link **short summarized stubs** for Terms, Privacy, and EMI Policy (presentational, not full legal engines).
3. Footer and utilities SHALL use the locked canonical set: email `otithi.support@brac.net`; phones `+8809610800700` and `+8801332550542`; address BRAC Tower 65, Bir Uttam A.K. Khandakar Road, Mohakhali, Dhaka 1212.

### F8 — Language

1. Presentation build SHALL support **English and Bengali** on **all core pages** in the agreed page set (full dual content for the presentation).
2. Visitor SHALL be able to switch language (mechanism TBD in architecture — toggle vs mirrored pages).

### F9 — Present on any device / share live

1. Stakeholders and visitors SHALL use the site on common phone, tablet, and desktop widths without horizontal overflow or unreachable primary CTAs.
2. Owner SHALL be able to deploy the static build to **Vercel** and share a live URL for review.

## Out of scope

- Real payments (bKash / card / bank), deposit collection, or EMI checkout
- Accounts, login/register, booking history, Otithi Wallet
- Live date availability / inventory backend
- Blog, newsletter signup, “dream destination” modal
- Admin / CMS for content authors
- Production analytics instrumentation as a deliverable
- Generating or sourcing images outside the live Otithi site
- Fully functional parity with every live-site feature beyond the agreed page set
- Astro (or other SSR framework) as a requirement for this presentation build
- Treating festivals as destination catalog pages (or splitting Destinations from Book a tour)

## Open questions

None for this setup pass.

*(Resolved: samples **Sylhet** + **Nobanno Utshob**; full EN+BN; contact from live-site consistency; simple booking fields; policy stubs.)*

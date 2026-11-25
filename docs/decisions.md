# Open decisions

Track unresolved product/tech choices. Mark **blockers** clearly — Agents must stop and ask the Owner instead of inventing defaults.

During `/setup`, collect questions from product, user flow, stack enrichment, and architecture. **Resolved** decisions must sync back into the affected docs the same turn. Unconfirmed items stay **Open** with `Status: tbd` (or `deferred`) — never invent answers into product/flow/architecture.

## Open

| ID | Question | Blocker? | Status | Notes |
|----|----------|----------|--------|-------|
| D4 | Vercel project root: serve repo root vs `public/` folder? | no | deferred | Decide at first deploy |

**Status:** `tbd` = actively undecided · `deferred` = won’t decide this phase (call out in build plan scope)

## Resolved

| ID | Decision | Date | Synced into | Notes |
|----|----------|------|-------------|-------|
| R1 | Stack = static HTML + custom CSS; Tailwind only if later needed for responsive scaffolding without owning visuals | 2026-11-25 | product, architecture, PROGRESS | Owner corrected away from Astro/Tailwind-default |
| R2 | Verification = Playwright CLI (not MCP); community skills skipped | 2026-11-25 | PROGRESS enrichment log, architecture | Installed `@playwright/cli` + skills |
| R3 | i18n = one HTML set + JS language dictionaries (single URL), not mirrored `/en` `/bn` trees | 2026-11-25 | architecture (accepted with arch) | Full EN+BN content still required |
| R4 | Samples = Sylhet (destination) + Nobanno Utshob (festival) | 2026-11-25 | product, USER_FLOW | |
| R5 | Booking mock fields = date range → traveler count + name/email → review → confirm | 2026-11-25 | product, USER_FLOW | |
| R6 | Policy pages = short summarized stubs | 2026-11-25 | product, USER_FLOW | |
| R7 | Brand colors `#8C1733` / `#ECAA1D`; images from live site only | 2026-11-25 | product, architecture | |
| R8 (D1) | Header/footer = **duplicate HTML** across pages (no include system) | 2026-11-25 | architecture | Maintain consistently by hand |
| R9 (D2) | Non-sample destination/festival cards = **display-only** (no link to Sylhet/Nobanno samples) | 2026-11-25 | product, USER_FLOW, architecture | Only Sylhet + Nobanno open detail |
| R10 (D3) | Canonical demo contact locked from live homepage | 2026-11-25 | product, architecture | Email `otithi.support@brac.net`; phones `+8809610800700`, `+8801332550542`; address BRAC Tower 65, Bir Uttam A.K. Khandakar Road, Mohakhali, Dhaka 1212 |

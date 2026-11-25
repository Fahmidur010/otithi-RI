# Verification map

**How to prove product behavior** — durable prove-paths for agents and Owners. **Context only:** never overrides Behavior delta, Trace, Owner verify gates, or accepted product/flow.

Filled lightly at `/setup` (seed) and grown when `/verify-phase` or `/audit-phase` establishes a new prove path. Prefer updating this map over rediscovering how to prove the same surface every step.

**Status:** current  
**Last updated:** 2026-11-25  

## How to use

| Column | Meaning |
|--------|---------|
| **Feature / surface** | Named capability or UI/API area (e.g. auth login, checkout API) |
| **Prove how** | Concrete Owner path and/or agent command (matching surface) |
| **Command / tool** | e.g. `buildCommand`, Playwright CLI, `flutter analyze`, curl smoke |
| **Source** | `setup` \| `verify` \| `audit` — who last wrote the row |
| **Notes** | Environment, accounts, caveats |

## Prove paths

| Feature / surface | Prove how | Command / tool | Source | Notes |
|-------------------|-----------|----------------|--------|-------|
| Build / quality check | Run after implement / refine | `npm run check` | setup | `scripts/static-check.js`; progressive required paths |
| Web UI flows | Browser evidence for accepted Behavior deltas | Playwright CLI (`npx playwright-cli` / project skills) | setup | Accepted Stage 4 verification; prefer CLI over MCP |
| Design tokens file | Open `assets/css/tokens.css`; confirm brand + font vars | manual file inspect + `npm run check` | verify | site-foundation step 1 (V1–V4) |
| Chrome CSS primitives | Inspect `base.css` + `components.css` for header/footer/nav/btn; no Tailwind | manual file inspect | verify | site-foundation step 2 (V1–V2) |
| Live-site image vendoring | List `assets/images/` + `SOURCES.md` provenance | manual file inspect | verify | site-foundation step 3 (V1–V2) |
| Chrome HTML stubs | Open index.html + about.html; match chrome + R10 contact + placeholder body | Owner browser UAT | verify | site-foundation step 4 (V1–V2) |
| Mobile nav + EN/BN chrome | Narrow viewport menu toggle; BN/EN language switch | Owner browser UAT | verify | site-foundation step 5 (V1–V2) |
| Local preview server | `npm run preview` → http://localhost:4173 | buildCommand + Owner browser | verify | site-foundation step 6 (V1–V2) |
| Site-foundation chrome smoke | Preview Home→About; BN/EN; mobile nav open + Escape | Playwright CLI against :4173 | audit | After `npm run preview`; favicon 404 is unrelated noise |

## Rules

1. Matching **surface** only (web → browser evidence; Flutter/RN → native; API/CLI → backend tools) — same as `/verify-phase` Evidence bar.
2. Rows are **hints**, not a test factory. Owner UAT remains the gate.
3. **Append** when a new durable prove path appears; do not delete Owner-edited rows without asking.
4. If this map conflicts with the current step’s Behavior delta / Trace → **delta + Owner win**.
5. Keep rows short; one prove path per feature/surface when possible.

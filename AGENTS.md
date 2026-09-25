# AGENTS

This file documents conventions for working in this repository — useful both for humans hacking on it and for AI agents.

## Directory structure

The repo has four layers:

**Identity** (root) — the philosophical core of the dao: `culture.md`, `views.md`, `principles.md`, `practices.md`, `narrative.md`, `scqh.md`.

**Handbook** (`handbook/`) — day-to-day operational how-to docs: onboarding, ops, comms, getting-stuff-done, working-with-us, inbox, start-project, etc.

**Portfolio and operations** — structured data and records:
- `plans/` — weekly operational plans. Use `week-YYYY-MM-DD.md` filenames.
- `meetings/` — meeting notes. Use `YYYY-MM-DD-topic.md` filenames.
- `people/` — the 10 team profiles here were migrated to [life-itself/planning](https://github.com/life-itself/planning)'s `people/` directory on 2026-09-25 and removed from this repo; only `README.md` (shared inboxes) remains.
- `portfolio/` — interactive D3 visualizations of the portfolio plus the local `index.js` data snapshot. Open any HTML file directly in a browser. See `portfolio/README.md` for details.
- `portfolio/scripts/` — build tooling and helpers for the portfolio visualisations.

**Strategy** (`strategy/`) — thinking and analysis layer:
- `strategy/docs/` — planning docs and strategic analysis
- `strategy/plans/` — annual plans, named by year (e.g. `2023.md`)
- `strategy/archive/` — historical strategy materials (hidden from sidebar)
- `strategy/log/` — raw outflow notes (hidden from sidebar)

**Planning docs for the dao itself** (`docs/plans/`) — improvement plans and UX work for this site.

## Data model

The current portfolio and its schema are maintained in [life-itself/planning](https://github.com/life-itself/planning). Local portfolio data and old initiative/project pages are historical references, not a competing editable source of truth.

## Conventions

- Keep culture, principles and general handbook guidance in Tao. Link to the [canonical planning workflow](https://github.com/life-itself/planning/blob/main/docs/workflow.md) for initiative maintenance, project creation and tracker routing; do not duplicate those rules here.
- Maintain initiatives in planning. Projects can use a planning-repository record or an A10 / similar Google Doc. No Tao issue is required to start a project.
- Do not update the deprecated portfolio snapshot as if it were current. Preserve historical material and source links; task cleanup belongs to the separately tracked audit, not automatic bulk deletion.

## Site publishing

This repo is published as a website via [Flowershow](https://flowershow.app) at https://tao.lifeitself.org. Markdown files render as pages; HTML and Tailwind classes in markdown work natively — no build step needed for styling.

## Building the data index

No current portfolio index is maintained here. See `portfolio/README.md` for the historical snapshot and current destination.

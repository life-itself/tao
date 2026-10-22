# AGENTS

This file documents conventions for working in this repository — useful both for humans hacking on it and for AI agents.

## Directory structure

The repo has four layers:

**Identity** (root) — the philosophical core of the dao: `culture.md`, `views.md`, `principles.md`, `practices.md`, `narrative.md`, `scqh.md`.

**Handbook** (`handbook/`) — day-to-day operational how-to docs: onboarding, ops, comms, getting-stuff-done, working-with-us, inbox, start-project, etc.

**Operations** — records:
- `plans/` — weekly operational plans. Use `week-YYYY-MM-DD.md` filenames.
- `meetings/` — meeting notes. Use `YYYY-MM-DD-topic.md` filenames.

**Strategy** (`strategy/`) — thinking and analysis layer:
- `strategy/docs/` — planning docs and strategic analysis
- `strategy/plans/` — annual plans, named by year (e.g. `2023.md`)
- `strategy/archive/` — historical strategy materials (hidden from sidebar)
- `strategy/log/` — raw outflow notes (hidden from sidebar)

**Planning docs for the dao itself** (`docs/plans/`) — improvement plans and UX work for this site.

## Data model

The current portfolio and its schema are maintained in [life-itself/planning](https://github.com/life-itself/planning). Portfolio, initiatives and people profiles live there; they have been removed from Tao (see git history for old copies).

## Conventions

- Keep culture, principles and general handbook guidance in Tao. Link to the planning guide [How we plan and track work](https://planning.lifeitself.org/guides/how-we-plan) for initiative maintenance, project creation and tracker routing; do not duplicate those rules here.
- Maintain initiatives in planning. A project has one record: by default a Markdown file in the `projects/` folder of the repository where its work lives, made with the portfolio skill; an A10 / similar Google Doc is still allowed but not the default. No Tao issue is required to start a project.

## Site publishing

This repo is published as a website via [Flowershow](https://flowershow.app) at https://tao.lifeitself.org. Markdown files render as pages; HTML and Tailwind classes in markdown work natively — no build step needed for styling.

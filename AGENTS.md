# AGENTS

This file documents conventions for working in this repository — useful both for humans hacking on it and for AI agents.

## Directory structure

- `initiatives/` — one file per initiative. An initiative is an enduring effort that can contain projects. Use stable semantic slugs as filenames (e.g. `second-renaissance.md`).
- `projects/` — one file per project. A project is a bounded effort nested under an initiative. Use `YYYY-` prefixed filenames (e.g. `2024-presenting-our-strategy-v3.md`).
- `plans/` — weekly operational plans. Use `week-YYYY-MM-DD.md` filenames.
- `meetings/` — meeting notes. Use `YYYY-MM-DD-topic.md` filenames.
- `people/` — team profiles. One file per person using their slug (e.g. `rufus-pollock.md`).
- `portfolio/` — interactive D3 visualizations of the portfolio. Open any HTML file directly in a browser. See `portfolio/README.md` for build instructions.
- `portfolio/scripts/` — build tooling. `build-index.js` generates `portfolio/index.js` from markdown frontmatter.
- `strategy/` — thinking and analysis layer: planning docs (`strategy/docs/`), historical archive (`strategy/archive/`), raw log (`strategy/log/`).

## Data model

The hierarchy is `initiative → project`. Parent relationships are expressed in frontmatter using wiki-link slugs.

### Frontmatter schema

- Required: `title`, `description`, `created`, `status`
- Optional: `parent`, `tags`, `url`, `github`, `tracker`, `category`

`status` values:
- `active` — being actively worked on (whether live or not)
- `maintenance` — live and running but no active development work
- `paused` — temporarily stopped with intention to return
- `idea` — being considered, not yet started
- `archived` — retired or deprecated, no longer pursued

Do not use `complete`, `proposed`, or `deprecated`.

`category` values (optional):
- `grouping` — organisational container; not real work in itself (e.g. Comms, Community, Life Itself Courses). Rendered as hollow circles in visualizations, excluded from status counts.

`parent` uses wiki-link style: `parent: [[life-itself]]`

Example:

```yaml
---
title: Second Renaissance
description: Cultural-civilisational renewal project including narrative, events, and movement-building.
created: 2026-01-28
status: active
parent: [[life-itself]]
tags:
  - lifeitself
  - second-renaissance
---
```

### Cross-cutting categorization

Themes and organizational groupings (media, spaces, courses) are metadata, not hierarchy. Use `tags` rather than creating grouping initiatives. This keeps the initiative list as a list of things actually being pursued, not filing cabinet labels.

## Conventions

- Use stable semantic slugs for initiative filenames. Use `YYYY-` prefixes for project filenames.
- Express parent relationships in frontmatter as wiki-link slugs: `parent: [[life-itself]]`.
- Use `tags` for cross-cutting themes rather than creating grouping initiatives that aren't real initiatives.
- For initiatives that exist purely as organisational containers, add `category: grouping` to their frontmatter.

## Site publishing

This repo is published as a website via [Flowershow](https://flowershow.app) at https://tao.lifeitself.org. Markdown files render as pages; HTML and Tailwind classes in markdown work natively — no build step needed for styling.

## Building the data index

See `portfolio/README.md` for build instructions.

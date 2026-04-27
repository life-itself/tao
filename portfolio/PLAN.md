# Portfolio Map — Plan of Work

Build and maintain interactive visualizations of Life Itself's portfolio of initiatives and projects. The data lives in markdown files (`initiatives/`, `projects/`) with frontmatter; a build script generates a JS data file; HTML visualizations render it using D3.

The name "portfolio map" is preferred over "initiatives map" since the scope includes initiatives, projects, and ideas.

## Background

### Situation

- Life Itself does not currently have a clear, current map of its initiatives and projects.
- Existing overviews are incomplete or out of date, including material that could be shared externally.
- We need a practical overview of current and potential work as input to 2026 strategy conversations.

### Complication

- Without a current portfolio map, strategic planning is harder to do systematically: it is difficult to assess what to continue, pause, merge, prioritize, or resource.
- Newer team members and collaborators lack an easy way to understand what Life Itself is doing now.
- Any shareable external view is harder to maintain because the underlying portfolio picture is fragmented and stale.

### Question

- How do we create a simple, current, and maintainable portfolio map quickly, in a form that supports 2026 strategic decision-making, helps orient team members, and can also be adapted for external sharing?

### Hypothesis

- A markdown-based portfolio database, with initiatives and projects modeled separately, will give us a lightweight source of truth that is easy to update.
- From that source, we can generate simple visualizations and add fields over time, such as owners, status, or resource needs, without rebuilding the system from scratch.

## Jobs to Be Done

**Current focus (April 2026):** Jobs 3 and 4 (strategic planning + ideas pipeline) are the priority. The immediate driver is a team collective strategy process in the next 2–3 weeks — we need a clear enough picture of our full landscape to make decisions together about what to continue, start, or stop. Jobs 1 (external narrative) and 2 (operational tracking) are deferred until after that.

**The two key questions this needs to answer:**
1. Is anyone working on this right now?
2. Is this thing live and running, or still an idea / under construction?

**What we have that answers these:**

| Question / Job | What answers it |
|---|---|
| Is anyone working on this? | Filter to `active` in either visualization |
| Is it live or an idea? | Color + opacity — grey=idea, faded=paused/maintenance |
| Job 3 — full strategic landscape | Both visualizations with status toggles |
| Job 4 — ideas pipeline | Filter to `idea` + `paused` in either view |

**Still missing for the team session:** `owner` field on active initiatives — you can see *what* is active but not *who* is carrying it.

### 1. External narrative and orientation

> When presenting Life Itself to outsiders, I want a clear view of what areas we work in and what we're doing in each, so I can quickly orient them to our work and mission.

- **Audience:** Funders, collaborators, website visitors, the public
- **Question answered:** What is Life Itself working on, and why?
- **Needs:** 3–5 thematic top-level areas, clean hierarchy, public-facing language, stable enough to not change constantly

#### 1a. Onboarding / orientation

> When a new team member joins, I want to show how everything connects — from mission down to active projects — so they can understand where their work fits in the bigger picture.

- **Audience:** New team members and collaborators
- **Question answered:** How does this specific project or initiative relate to the overall mission?
- **Needs:** Full hierarchy from mission to project level; links between initiatives and their rationale

---

### 2. Operational view

> When running the team week to week, I want to see what is live, who owns it, and what the status is, so I can keep work moving and spot blockages.

- **Audience:** Core team, day-to-day
- **Question answered:** What are we actually working on right now?
- **Needs:** Active projects and their parent initiatives, filtered to status=active; owner and status fields

---

### 3. Strategic planning

> When doing strategic planning, I want to see our full landscape — active, paused, and ideation — so I can decide where to focus and resource next.

- **Audience:** Leadership, planning conversations
- **Question answered:** Across everything we could be doing, where should we invest?
- **Needs:** Full picture including paused and ideation items; resource or effort signals; ability to compare across themes

---

### 4. Ideas pipeline

> When looking for new work to activate, I want to see all ideas and paused initiatives in one view, so I can identify what's ready to start and what's worth revisiting.

- **Audience:** Internal, strategic moments
- **Question answered:** What's waiting to become active work?
- **Needs:** Everything at ideation or pause status, grouped by theme; enough description to evaluate readiness

---

## Tasks

### v0.1 — Strategic landscape (Jobs 3 & 4)

- [x] Complete the initiatives list — all known initiatives added as markdown files
- [x] Ensure every initiative has: `status` and a meaningful `description`
- [x] Build visualizations with status-based encoding (colour by type, opacity by vitality, grouping nodes hollow)
- [ ] Add `owner` field to all active initiatives
- [ ] Add support for initiative/project start and end dates in the portfolio data model and visualizations
  - [ ] When dates are supported, record a start date for Sensemaking Studio (`2024-01-01`) and leave end date empty while it remains paused rather than finished

---

## Visualization improvements

### Quick wins

- [ ] **Indented tree: collapse-all / expand-all buttons** — two buttons above the tree to collapse or expand every node at once. Useful when the tree is long and you want to see the top level only, or open everything for a full scan.
- [ ] **Force-directed: persist positions to `localStorage`** — save each node's `x/y` on drag-end; restore on load. Eliminates the random-reset problem. Layout still settable by dragging; falls back to simulation on first load or if data changes.

### Medium effort

- [ ] **Tidy tree view** (`d3.tree()`) — a stable, deterministic left-to-right hierarchy layout as an alternative to the force-directed graph. Pannable and zoomable. Same data, same colour/opacity encoding. Trades the "organic cluster" feel for clean readability and no resets.
- [ ] **`owner` display** — show owner on hover tooltip and as a small label on the indented view's active rows (once owner field is populated on active initiatives).

### Longer-term / to explore

- [ ] **Circle packing view** (`d3.pack()`) — initiatives as large labelled circles, projects nested inside. Stable layout, good at-a-glance sense of scope, status encoded by opacity. Potentially the best "what are we working on" view for external audiences (Job 1).
- [ ] **Operational table view** — filterable/sortable table showing active items only: title, type, owner, status, link. Best layout for Job 2 (ops/weekly scanning). No D3 needed, plain HTML table.
- [ ] **Tag-based domain grouping** — once tags like `domain: media` / `domain: spaces` are added to frontmatter, add a view that groups by domain rather than parent hierarchy. Supports multiple classifications that a single tree can't express.

### Open questions (deferred)

**Hierarchy: parent vs. tag?**
Tension: some "initiatives" (Comms, Life Itself Courses) are domains/filing labels, not things anyone is actively pursuing. Should they be parents in the tree, or just tags?

Rule of thumb: if someone is accountable for it as a whole, it's an initiative with a parent. If it's just a grouping label, use a tag. But this only matters for the tree/onboarding view (Job 1) — the strategic landscape view (Job 3) groups by status, so the hierarchy is irrelevant. **Defer until after the strategy session.**

## Armelle's portfolio-map.html

A separate visualization (`portfolio-map.html` at repo root) was built as "Armelle's View". It introduces several additions worth evaluating.

### New entries (no backing markdown file)

| Slug | Title | Purpose |
|------|-------|---------|
| `spaces-and-community` | Spaces & Community | Umbrella grouping |
| `bergerac-hub` | Bergerac Hub | New initiative |
| `media` | Media & Communications | Umbrella grouping |
| `podcasts` | Podcasts | Sub-grouping under media |
| `second-renaissance-magazine` | Second Renaissance Magazine | New initiative |
| `projects-hub` | Projects | Virtual grouping for a "projects flower" view |

It also duplicates every project as `proj-*` entries re-parented under `projects-hub` to create a second visual cluster.

### New data attributes

| Attribute | Purpose |
|-----------|---------|
| `category` | Distinguishes "maintenance" (ongoing, no deliverable) from "initiative" |
| `umbrella` | Color-coded cluster grouping (pink, purple, teal, coral) |
| `owners` | Reference person / responsible party |
| `people` | Other people involved (currently empty) |
| `fillColor` | Visual color tied to umbrella membership |
| `secondary_parents` | Additional parent links for multi-parent items |
| `deadline` | Project deadline (currently empty) |
| `cadence` | Meeting/check-in cadence (currently empty) |

### Changed parent links vs our markdown

- `life-itself-hubs` → `spaces-and-community` (was `life-itself`)
- `life-itself-podcast`, `microcasts`, `over-the-mountains` → `podcasts` (were `life-itself`)
- `2026-intro-to-life-itself-videos`, `life-itself-websites-2025` → `media` (were `life-itself` / `life-itself-management`)
- `life-itself-practicum` → `life-itself-courses` (was `life-itself`)
- `teal-estate` → `spaces-and-community` (was `developmental-spaces-dds`)

## Design question: initiatives as groupings?

The Armelle view creates umbrella "initiatives" (Spaces & Community, Media & Communications, etc.) that aren't really initiatives — they're domains of activity used to organize the tree. This is convenient but problematic.

### Pros

- Simple: one mechanism (parent links) handles everything, no new concepts
- Visualizations just work without changes
- Pragmatic; uses existing infrastructure

### Cons

- **Semantic confusion**: some "initiatives" are things you're actively doing (Praxis Ecology, 2RCon) while others are just filing cabinets. Harder to answer "what are we actually working on?"
- **Forces a single taxonomy**: Over the Mountains is both media and second-renaissance. The `secondary_parents` field is already patching around trees not being expressive enough.
- **Inflates initiative count**: undermines using that count as a signal of scope/load.

### Recommended approach: use tags for cross-cutting categorization

Keep initiatives as real initiatives with goals and outcomes. Use **tags** in frontmatter for cross-cutting categories like `domain: media`, `domain: spaces`. The visualizations can group by tag when that view is wanted, while the parent tree stays a clean hierarchy of actual work.

This is more honest to the data and supports multiple classifications without forcing a single tree. The `umbrella` and `category` fields in the Armelle view are essentially reinventing tags — a sign the single-tree model was already straining.

### What to integrate

Worth adding to our markdown files:

- `category`: distinguishing maintenance from initiative is genuinely useful
- `owners`: valuable for accountability
- `bergerac-hub` and `second-renaissance-magazine`: real initiatives that should have markdown files
- `life-itself-practicum` reparenting to `life-itself-courses`: this correction makes sense

Not worth adding:

- Umbrella grouping initiatives (spaces-and-community, media, podcasts, projects-hub): use tags instead
- `fillColor` / `umbrella`: purely visual, let the visualization derive these from tags
- `proj-*` duplicates: a visualization concern, not a data concern

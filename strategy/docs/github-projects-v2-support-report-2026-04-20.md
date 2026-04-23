# GitHub Projects v2 Support Report: Empty Project Items

**Short version:** 

GitHub Projects v2 is inconsistent for the `life-itself` org. Issues can be added to projects and then show `projectItems` on the issue side, but the corresponding project still reports `items.totalCount = 0`, `gh project item-list` returns `[]`, and the board UI remains empty. This reproduces on both existing project `#34` and a fresh test project `#35`, so it appears to be a GitHub-side Projects bug rather than a problem with one issue or one project.

---

## Full report

### Subject

GitHub Projects v2 inconsistency: issue `projectItems` exists, but project `items` stays empty

### Body

Hello GitHub Support,

We're seeing a reproducible inconsistency in GitHub Projects v2 for the `life-itself` organization.

### Summary

Issues can be added to an organization project successfully, and the issue then shows a `projectItems` entry for that project. However, the project itself still reports zero items and the board remains empty.

This reproduces on both:

- an existing org project: `life-itself` project `#34` (`Life Itself Team`)
- a brand-new org project created for testing: `life-itself` project `#35` (`Life Itself Team Recreated 2026-04-20`)

### Affected resources

- Org project 34: `https://github.com/orgs/life-itself/projects/34`
- Org project 35: `https://github.com/orgs/life-itself/projects/35`
- Example issue: `https://github.com/life-itself/strategy/issues/24`

### Expected behavior

When an issue is added to a Project v2:

- the issue should show the project under `projectItems`
- the project should include the item in `items`
- `items.totalCount` should increment
- the board/table UI should show the issue

### Actual behavior

After adding the issue to the project:

- the issue shows the project under `projectItems`
- GraphQL returns a real `ProjectV2Item` node attached to the issue
- but the project still reports `items.totalCount = 0`
- `gh project item-list` returns an empty list
- the board UI shows no issues

### Reproduction

1. Add an issue to an org project.
   Example:
   - issue: `life-itself/strategy#24`
   - project: org project `#35`

2. Query the issue side:

```graphql
query {
  repository(owner: "life-itself", name: "strategy") {
    issue(number: 24) {
      projectItems(first: 20) {
        nodes {
          id
          isArchived
          project {
            number
            title
          }
        }
      }
    }
  }
}
```

Result:

- returns a `ProjectV2Item` for project `35`

3. Query the project side:

```graphql
query {
  organization(login: "life-itself") {
    projectV2(number: 35) {
      id
      title
      items(first: 20) {
        totalCount
        nodes {
          id
          isArchived
          type
          content {
            __typename
            ... on Issue {
              number
              title
              repository {
                nameWithOwner
              }
            }
          }
        }
      }
    }
  }
}
```

Result:

- `items.totalCount` is `0`
- `nodes` is `[]`

4. CLI also confirms empty project:

```bash
gh project item-list 35 --owner life-itself --format json
```

Result:

- `{"items":[],"totalCount":0}`

### Additional findings

- Removing and re-adding `life-itself/strategy#24` to project `34` did not resolve the problem.
- Creating a fresh test issue and adding it to project `34` reproduced the same behavior.
- Creating a brand-new project `#35` and adding `#24` also reproduced the same behavior.
- This suggests the issue is not specific to one item and not limited to one existing project.

### Why we believe this is a GitHub-side Projects bug

The GraphQL docs indicate:

- `ProjectV2.items` is the list of items in a project
- `Issue.projectItems` is the issue-side project linkage

In our case those two sources of truth disagree for the same item.

### Relevant references

- GraphQL object docs:
  - https://docs.github.com/en/graphql/reference/objects
  - https://docs.github.com/en/enterprise-cloud@latest/graphql/reference/objects?apiVersion=2022-11-28
- REST project items docs:
  - https://docs.github.com/en/rest/projects/items
- Prior GitHub Projects incident / precedent:
  - Community discussion: https://github.com/orgs/community/discussions/67636
  - GitHub availability report (September 19, 2023 Projects incident): https://github.blog/2023-10-11-github-availability-report-september-2023/

### Request

Can you investigate the backing data/index state for org `life-itself` Projects v2, specifically projects `34` and `35`, where issue-side project item links exist but project-side item listings remain empty?

If useful, I can also provide:

- exact GraphQL raw responses
- exact `gh` command outputs
- timestamps of the add/remove operations
- item ids returned on the issue side

Thanks.

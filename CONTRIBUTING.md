# Contributing

## Local Git Hook

This repo uses a pre-commit hook to keep `portfolio/index.js` in sync with the markdown frontmatter in `initiatives/` and `projects/`.

After cloning a fresh checkout, point Git at the versioned hook directory and make the hook executable:

```sh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

If you are migrating this setup to a new repo, copy `.githooks/pre-commit` across and adjust the `node .../build-index.js` path if the portfolio scripts live somewhere else.

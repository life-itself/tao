import test from "node:test";
import assert from "node:assert/strict";

import { toSitePath } from "./site-path.js";

test("converts initiative markdown paths to site paths", () => {
  assert.equal(toSitePath("initiatives/second-renaissance.md"), "/initiatives/second-renaissance");
});

test("converts project markdown paths to site paths", () => {
  assert.equal(toSitePath("projects/2026-presenting-our-strategy-v3.md"), "/projects/2026-presenting-our-strategy-v3");
});

test("returns null for empty file paths", () => {
  assert.equal(toSitePath(null), null);
});

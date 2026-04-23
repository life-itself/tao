export function toSitePath(filePath) {
  if (!filePath) return null;
  return `/${String(filePath).replace(/\.md$/, "")}`;
}

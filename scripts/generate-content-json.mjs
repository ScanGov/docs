#!/usr/bin/env node
// Generates _data/contentexport.json — a structured export of every
// content/* page tagged with a `category`, for cross-repo consumption
// (e.g. my.scangov.com's /docs section). Run this after editing content,
// then commit the result. See docs/plans/docs-json-content-pipeline.md in
// my.scangov.com for the full design.
//
// _data/ is committed source in Eleventy's convention (unlike _site/, the
// gitignored build output), which is what makes this fetchable by other
// repos over a raw GitHub URL the same way data/standards/audits.json is.
//
// Named "contentexport", not "content": any _data/*.json file's filename
// becomes a global Eleventy data variable of that name, and `content` is
// one of Eleventy's own reserved per-page property names (the rendered
// page body available in every template) — naming this file _data/
// content.json crashes the whole build with "Cannot override reserved
// Eleventy properties: content". The `content` field *inside* each
// exported entry below is unaffected either way — that's just a normal
// nested property, not a top-level global data name.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';

const contentDir = path.join(process.cwd(), 'content');
const outputPath = path.join(process.cwd(), '_data', 'contentexport.json');
const md = new MarkdownIt({ html: true });

function readFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: raw };
  return { frontmatter: match[1], body: match[2] };
}

function extractField(frontmatter, field) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  if (!match) return null;
  return match[1].trim().replace(/^["']|["']$/g, '');
}

// videos: is a nested list (id/title pairs), not a flat scalar, so it needs
// its own small parser rather than extractField()'s single-line regex.
function extractVideos(frontmatter) {
  const blockMatch = frontmatter.match(/^videos:\s*\n((?:[ \t]+-.*(?:\n|$)(?:[ \t]+[a-zA-Z].*(?:\n|$))*)+)/m);
  if (!blockMatch) return [];
  const items = blockMatch[1].split(/\n(?=[ \t]*-\s)/).map((s) => s.trim()).filter(Boolean);
  return items
    .map((item) => {
      const idMatch = item.match(/id:\s*(.+)/);
      const titleMatch = item.match(/title:\s*(.+)/);
      return {
        id: idMatch ? idMatch[1].trim().replace(/^["']|["']$/g, '') : null,
        title: titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : null,
      };
    })
    .filter((v) => v.id);
}

// Pages that intentionally don't carry title/description/icon — redirect
// stubs, build config (robots/sitemap/security), or structurally special
// pages (search UI, site index, homepage). Everything else in content/ is
// expected to have all three; a missing field here is almost always an
// oversight on a new page, not a deliberate choice.
const frontmatterExempt = new Set([
  '404.md', 'people.md', 'primer.md', 'search.md', 'site-index.md',
  'index.njk', 'redirects.njk', 'robots.njk', 'security-root.njk',
  'security.njk', 'sitemap.njk',
]);

function checkFrontmatter(file, frontmatter) {
  if (frontmatterExempt.has(file)) return [];
  const missing = ['title', 'description', 'icon'].filter((field) => !extractField(frontmatter, field));
  return missing;
}

const files = readdirSync(contentDir).filter((f) => /\.(md|njk)$/.test(f));
const entries = [];
const frontmatterIssues = [];

for (const file of files) {
  const raw = readFileSync(path.join(contentDir, file), 'utf8');
  const { frontmatter, body } = readFrontmatter(raw);

  const missing = checkFrontmatter(file, frontmatter);
  if (missing.length > 0) frontmatterIssues.push({ file, missing });

  const category = extractField(frontmatter, 'category');
  if (!category) continue; // not tagged for export — skip silently

  const title = extractField(frontmatter, 'title');
  const description = extractField(frontmatter, 'description');
  const icon = extractField(frontmatter, 'icon');
  const modified = extractField(frontmatter, 'modified');
  const date = extractField(frontmatter, 'date');
  const videos = extractVideos(frontmatter);
  const key = path.basename(file, path.extname(file));
  const url = `/${key}/`;

  let content;
  if (file.endsWith('.md')) {
    content = md.render(body.trim());
  } else {
    // .njk files (e.g. guidance.njk) aren't rendered here — they use loops
    // over other synced data that this script doesn't have access to.
    // Fall back to the description as a minimal content value.
    content = description ? `<p>${description}</p>` : '';
  }

  entries.push({
    key,
    title,
    description,
    icon,
    category,
    url,
    content,
    videos,
    updated: (modified && modified.length > 0) ? modified : date,
  });
}

entries.sort((a, b) => a.key.localeCompare(b.key));

writeFileSync(outputPath, JSON.stringify(entries, null, 2) + '\n');
console.log(`generate-content-json: wrote ${entries.length} entries to ${outputPath}`);

if (frontmatterIssues.length > 0) {
  console.warn(`\ngenerate-content-json: ${frontmatterIssues.length} file(s) missing required frontmatter:`);
  for (const { file, missing } of frontmatterIssues) {
    console.warn(`  ${file}: missing ${missing.join(', ')}`);
  }
  process.exit(1);
}

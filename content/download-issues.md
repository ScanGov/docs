---
title: "Download issues"
date: 2026-07-20
description: "Export ScanGov issues as CSV, JSON, or Markdown for spreadsheets, project boards, or AI coding agents."
icon: "fa-solid fa-download"
category: "product"
topics:
  - ScanGov
---

## About

Download issues exports your site's audit findings as a file, instead of a read-only list on the
[tasklist](/tasklist). It's available for a whole site or for a single page, in three formats:

- CSV — one row per issue per page, with a ready-to-use task title, the standard, the affected
  page, and a description — built for pasting into a spreadsheet or importing into a project board
  like Asana or Trello.
- JSON — the same per-page rows as CSV, structured for scripting your own import into another
  tool.
- Markdown — issues grouped by topic as a checklist, with the pages each one affects listed
  underneath. Written to be handed directly to an AI coding agent to locate and fix.

Every row/entry includes the standard that's failing, why it matters, a description, the affected
page (or "Sitewide" for domain-level checks like a missing `security.txt`), and a link to the
[standard](/standards) for more detail. Where available, it also includes a user story describing
who's affected and why.

## Why it matters

Audit findings only get fixed when they turn into tracked work. Download issues turns a list of
failing standards into work items your team can actually assign, track, and close out — without
retyping anything from the dashboard.

## Getting a download

Use the Download button next to Rescan and Share, on either the sitewide tasklist or an individual
page's audit view. Pick a scope (the whole site, or just that page) and a format, and the file
downloads immediately — no export job to wait on.

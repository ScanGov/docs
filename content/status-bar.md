---
title: "Status bar"
date: 2026-07-21
description: "How the pages-with-issues status bar works on the dashboard and indicator pages."
icon: "fa-solid fa-bars-progress"
category: "product"
topics:
  - ScanGov
---

## About

The status bar shows how many pages still have at least one issue, out of the total pages
scanned. It appears above the grade cards on the [dashboard](/tasklist), and above the Tasks,
Grade, and Score cards on each [indicator](/indicators) page, scoped to that indicator only.

Issues tied to the whole site rather than any single page, like a missing security.txt file,
aren't counted toward this number. The bar only reflects issues that vary page to page.

## Why it matters

A grade or score shows how well a site is doing, but not how much work is left. The status bar
answers that directly: how many pages, out of how many, still need attention.

## Examples

```json
{ "remaining": 12, "total": 50 }
```

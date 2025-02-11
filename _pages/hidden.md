---
title: "Hidden elements"
date: 2025-02-11
description: ""
icon: "fa-solid fa-universal-access"
services: true
lowercase: true
keywords: accessibility
topics:
  - Accessibility
---



## Contains

### All heading elements contain content.

A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.10/empty-heading).

### Identical links have the same purpose.

Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose).

### Document has a main landmark.

One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main).

### Elements with visible text labels have matching accessible names.

Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch).

### Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.

Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption).

### `<td>` elements in a large `<table>` have one or more table headers.

Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/td-has-header).


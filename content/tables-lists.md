---
title: "Tables and lists"
date: 2025-02-11
description: "Ensure tables and lists are accessible."
icon: "fa-solid fa-universal-access"
standards: true
topics:
  - Accessibility
---

Follow these recommendations to improve the accessibility of tabular and list data:

1. `<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, <template> or `<div>` elements: When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output.

1. Definition list items are wrapped in `<dl>` elements: Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them.

1. Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`): Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output.

1. List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements: Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly.

1. Tables have different content in the summary attribute and `<caption>`: The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers.

1. Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table: Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users.

1. `<th>` elements and elements with `[role="columnheader"/"rowheader"]` have data cells they describe: Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users.

## Links
- [How to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/definition-list)
- [How to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/dlitem)
- [About proper list structure](https://dequeuniversity.com/rules/axe/4.10/list)
- [About proper list structure](https://dequeuniversity.com/rules/axe/4.10/listitem)
- [About summary and caption](https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name)
- [About the `headers` attribute](https://dequeuniversity.com/rules/axe/4.10/td-headers-attr)
- [About table headers](https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells)
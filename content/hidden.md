---
title: "Hidden elements"
date: 2025-02-11
description: "Ensure hidden elements are accessible."
standards: true
topics:
  - Accessibility
---

## About

Hidden elements are parts of a webpage that are not visible to users but still present in the code. They might be used for functions like pop-up menus or content that shows only when needed. However, hidden elements can be problematic for accessibility if not properly managed. Screen readers and other assistive tools may still detect them. Use proper techniques, such as `aria-hidden="true"` or hiding content visually while maintaining accessibility.

Follow these recommendations to avoid hiding content from visitors using assistive technology:

1. All heading elements contain content: A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure.

1. Identical links have the same purpose: Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it.

1. Document has a main landmark: One main landmark helps screen reader users navigate a web page.

1. Elements with visible text labels have matching accessible names: Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users.

1. Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption: Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users.

1. `<td>` elements in a large `<table>` have one or more table headers: Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users.

## Links

- [About headings](https://dequeuniversity.com/rules/axe/4.10/empty-heading)
- [About identical links](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose)
- [About landmarks](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main)
- [About accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch)
- [About captions](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption)
- [About table headers](https://dequeuniversity.com/rules/axe/4.10/td-has-header)
---
title: "Navigation"
date: 2025-02-11
description: "Keyboard navigation."
standards: true
topics:
  - Accessibility
---

Improve accessibility by following these recommendations:

1. `[accesskey]` values are unique: Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique.

1. The page contains a heading, skip link, or landmark region: Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently.

1. Heading elements appear in a sequentially-descending order: Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies.

1. No element has a `[tabindex]` value greater than 0: A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies.

## Links

- [About access keys](https://dequeuniversity.com/rules/axe/4.10/accesskeys)
- [About bypass blocks](https://dequeuniversity.com/rules/axe/4.10/bypass)
- [About heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order)
- [About the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.10/tabindex)
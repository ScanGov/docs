---
title: "Accessibility best practices"
date: 2025-02-11
description: "Common accessibility best practices."
standards: true
topics:
  - Accessibility
---

Accessibilty can be improved by passing these tests:

1. The document does not use `<meta http-equiv="refresh">`: Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. 

1. `[user-scalable="no"]` is not used in the `<meta name="viewport">` element and the `[maximum-scale]` attribute is not less than 5: Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page.

1. Touch targets do not have sufficient size or spacing: Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. 

## Links

- [Refresh meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-refresh)
- [Viewport meta tag](https://docs.scangov.org/viewport-meta-tag)
- [Touch targets](https://dequeuniversity.com/rules/axe/4.10/target-size)

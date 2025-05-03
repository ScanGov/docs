---
title: "Custom control roles"
date: 2025-02-11
description: "Use ARIA roles for custom controls."
standards: true
topics:
  - Accessibility
---

## About

Custom controls on websites should have proper ARIA roles to help assistive technologies understand their function and state. For example, a custom checkbox should include `role="checkbox"` and `aria-checked="true"` or `aria-checked="false"` to convey its state. It's best to use standard HTML elements like `<button>` for buttons. If using a `<div>`, add `role="button"` and `aria-pressed="false"` to ensure accessibility.

## Links

- [How to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/)
---
title: "Best practices"
date: 2025-02-11
description: "These items highlight common accessibility best practices."
icon: "fa-solid fa-universal-access"
services: true
lowercase: true
keywords: accessibility
topics:
  - Accessibility
---

Accessibilty can be improved by passing the following tests:

## The document does not use <meta http-equiv="refresh">

Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-refresh).

## [user-scalable="no"] is not used in the <meta name="viewport"> element and the [maximum-scale] attribute is not less than 5.

Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-viewport).

## Touch targets do not have sufficient size or spacing.

Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.10/target-size).


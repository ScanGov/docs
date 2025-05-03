---
title: "ARIA attributes"
date: 2025-02-11
description: "Accessibility properties for screen readers."
standards: true
topics:
  - Accessibility
---

These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.

You don't always need `aria-` attributes in your application for it to be accessible. When you do use `aria-` attributes follow these recommendations to make sure they are helpful.

Contains:

1. `[aria-*]` attributes match their roles: Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes.

1. Uses ARIA roles only on compatible elements: Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page.

1. `button`, `link`, and `menuitem` elements have accessible names: When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. ARIA attributes are used as specified for the element's role: Some ARIA attributes are only allowed on an element under certain conditions.

1. Deprecated ARIA roles were not used: Deprecated ARIA roles may not be processed correctly by assistive technology.

1. Elements with `role="dialog"` or `role="alertdialog"` have accessible names: ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements.

1. `[aria-hidden="true"]` is not present on the document `<body>`: Assistive technologies, like screen readers, work inconsistently when `aria-hidden="true"` is set on the document `<body>`.

1. `[aria-hidden="true"]` elements do not contain focusable descendents: Focusable descendents within an `[aria-hidden="true"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers.

1. ARIA input fields have accessible names: When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. ARIA meter elements have accessible names: When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. ARIA progressbar elements have accessible names: When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. Elements use only permitted ARIA attributes: Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies.

1. [role]s have all required [aria-*] attributes: Some ARIA roles have required attributes that describe the state of the element to screen readers.

1. Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children: Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions.

1. [role]s are contained by their required parent element: Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions.

1. [role] values are valid: ARIA roles must have valid values in order to perform their intended accessibility functions.

1. Elements with the role=text attribute do not have focusable descendents: Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced.

1. ARIA toggle fields have accessible names: When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. ARIA tooltip elements have accessible names: When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. ARIA treeitem elements have accessible names: When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers.

1. `[aria-*]` attributes have valid values: Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values.

1. `[aria-*]` attributes are valid and not misspelled: Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names.

1. ARIA IDs are unique: The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. 

## Links

- [How to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr)
- [About ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role)
- [How to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-command-name)
- [About conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr)
- [About deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role)
- [How to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name)
- [How `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body)
- [How `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus)
- [About input field labels](https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name)
- [How to name `meter` elements](https://dequeuniversity.com/rules/axe/4.10/aria-meter-name)
- [How to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name)
-  [About prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr)
- [About roles and required attributes](https://dequeuniversity.com/rules/axe/4.10/aria-required-attr)
- [About roles and required children elements](https://dequeuniversity.com/rules/axe/4.10/aria-required-children)
- [About ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.10/aria-required-parent)
- [About valid ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-roles)
- [About the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.10/aria-text)
- [About toggle fields](https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name)
- [How to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name)
- [About labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name)
- [About valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value)
- [About valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr)
- [How to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria)
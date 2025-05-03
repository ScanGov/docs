---
title: "Names and labels"
date: 2025-02-11
description: "Descriptive identifiers for elements."
standards: true
topics:
  - Accessibility
---

Enhance your application's usability for visitors using screen readers by following these recommendations:

1. Buttons have an accessible name: When a button doesn't have an accessible name, screen readers announce it as "button", making it unusable for users who rely on screen readers.

1. Document has a `<title>` element: The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search.

1. No form fields have multiple labels: Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels.

1. `<frame>` or `<iframe>` elements have a title: Screen reader users rely on frame titles to describe the contents of frames.

1. Image elements have `[alt]` attributes: Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute.

1. Image elements do not have `[alt]` attributes that are redundant text: Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice.

1. Input buttons have discernible text: Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button.

1. `<input type="image">` elements have `[alt]` text: When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button.

1. Form elements have associated labels: Labels ensure that form controls are announced properly by assistive technologies, like screen readers.

1. Links have a discernible name: Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users.

1. `<object>` elements have alternate text: Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users.

1. Select elements have associated label elements: Form elements without effective labels can create frustrating experiences for screen reader users.

1. Skip links are focusable: Including a skip link can help users skip to the main content to save time.

## Links

- [About skip links](https://dequeuniversity.com/rules/axe/4.10/skip-link)
- [About the `select` element](https://dequeuniversity.com/rules/axe/4.10/select-name)
- [About alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.10/object-alt)
- [How to make links accessible](https://dequeuniversity.com/rules/axe/4.10/link-name)
- [About form element labels](https://dequeuniversity.com/rules/axe/4.10/label)
 [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.10/input-image-alt)
- [About input buttons](https://dequeuniversity.com/rules/axe/4.10/input-button-name)
- [About the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt)
- [How to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name)
- [About document titles](https://dequeuniversity.com/rules/axe/4.10/document-title)
- [How to use form labels](https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels)
- [About frame titles](https://dequeuniversity.com/rules/axe/4.10/frame-title)
- [About the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-alt)
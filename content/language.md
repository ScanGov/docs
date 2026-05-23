---
title: "Language"
date: 2025-02-11
description: "Language attributes for accessibility."
standards: true
topics:
  - Accessibility
---

Follow these recommendations to improve the experience for visitors who may take advantage of translations.

1. `<html>` element has a `[lang]` attribute: If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly.

1. `<html>` element has a valid value for its `[lang]` attribute: Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly.

1. `<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute: If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly.

1. `[lang]` attributes have a valid value: Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader.

## Links

- [How to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/valid-lang)
 [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch)
- [How to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-lang-valid)
 [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang)
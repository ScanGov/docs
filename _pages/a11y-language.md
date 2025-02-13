---
title: "Internationalization and localization"
date: 2025-02-11
description: "These are opportunities to improve the interpretation of your content by users in different locales."
icon: "fa-solid fa-universal-access"
services: true
lowercase: true
keywords: accessibility
topics:
  - Accessibility
---

Follow these recommendations to improve the experience for visitors who may take advantage of translations.

## <html> element has a [lang] attribute

If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang).

## <html> element has a valid value for its [lang] attribute

Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-lang-valid).

## <html> element has an [xml:lang] attribute with the same base language as the [lang] attribute.

If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch).

## [lang] attributes have a valid value

Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/valid-lang).


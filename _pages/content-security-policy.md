---
title: "Content security policy"
date: 2024-09-24
description: "Defines a website's safe content."
icon: "fa-solid fa-shield"
keywords: grades, scores
---

## About

Content Security Policy (CSP) is a security feature that:

- Protects websites from attacks like XSS and clickjacking.
- Defines rules for safe content (e.g., JavaScript, CSS, images).

Key point:

It's an extra layer of protection, not the primary defense.

## Guidance

[Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/news-events/news/website-security#:~:text=Implement%20a%20Content%20Security%20Policy):

**Implement a Content Security Policy (CSP).** Website owners should also consider implementing a CSP. Implementing a CSP lessens the chances of an attacker successfully loading and running malicious JavaScript on the end user machine.

## Code

Example header:

```yaml
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://example.gov;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://example.gov;
  font-src 'self' https://example.gov;
  object-src 'none';
  frame-ancestors 'none';
  upgrade-insecure-requests;
```

Example HTML code:

```html
<!-- Content Security Policy example using meta tag -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' https://example.gov;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://example.gov;
  font-src 'self' https://example.gov;
  object-src 'none';
  frame-ancestors 'none';
  upgrade-insecure-requests;
">
```

## Links

* [Content Security Policy](https://guides.18f.gov/engineering/security/content-security-policy/) (18F)
* [Reining in the Web with Content Security](https://research.sidstamm.com/papers/csp-www2010.pdf) Policy (Mozilla)
* [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (Mozilla)
* [Content Security Policy Level 3](https://www.w3.org/TR/CSP3/) (W3C)
* [Content Security Policy](https://en.wikipedia.org/wiki/Content_Security_Policy) (Wikipedia)
* [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) (OWASP)
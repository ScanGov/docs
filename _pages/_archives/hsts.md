---
title: "HTTP Strict Transport Security (HSTS)"
date: 2024-03-10
modified: 2025-02-02
description: "Privacy and integrity protection."
icon: "fa-solid fa-lock"
standards: true
topics:
  - SEO
  - Security
---
 
## Guidance

All government websites must have HSTS.

[M-15-13](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2015/m-15-13.pdf):

> Strict Transport Security: Websites and services available over HTTPS must enable HTTP Strict Transport Security (HSTS)12 to instruct compliant browsers to assume HTTPS going forward. This reduces the number of insecure redirects, and protects users against attacks that attempt to downgrade connections to plain HTTP. Once HSTS is in place, domains can be submitted to a "preload list"13 used by all major browsers to ensure the HSTS policy is in effect at all times.

[CIO.gov](https://https.cio.gov/hsts/):

> The policy should be deployed at https://domain.gov, not https://www.domain.gov.

## About

HTTP Strict Transport Security is a security feature that:

- Forces web browsers to use HTTPS instead of HTTP.
- Protects against downgrade attacks and cookie hijacking.
- Specifies a period during which the browser should enforce HTTPS for the site.

Key points:

- Activated by the server through a response header (`Strict-Transport-Security`).
- Helps improve website security by ensuring encrypted connections.

## Code

Example header:

`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

## Links

* [HTTP Strict Transport Security](https://https.cio.gov/hsts/) (CIO.gov)
* [HTTP Strict Transport Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/) (Mozilla)
* [Security-related HTTP headers](https://cloud.gov/docs/management/headers/) (Cloud.gov)
* [HTTP Strict Transport Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) (OWASP)
* [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) (Wikipedia)
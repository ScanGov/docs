---
title: "X-Content-Type-Options"
date: 2024-10-05
description: "Ensures content renders as declared."
icon: "fa-solid fa-file-code"
keywords: grades, scores
---

## About

`X-Content-Type-Options` is a security header that:

- Prevents browsers from MIME-sniffing.
- Ensures content is rendered as declared (e.g., no misinterpretation of file types).
- Stops browsers from guessing content types, enhancing security.

## Guidance

All government websites must have `X-Content-Type-Options` designated.

## Code

Example header:

```yaml
X-Content-Type-Options: nosniff
```

Example HTML code:

```html
<!-- Example of setting X-Content-Type-Options in a meta tag -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

## Links

* [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) (Mozilla)
* [Security-related HTTP headers](https://cloud.gov/docs/management/headers/) (Cloud.gov)

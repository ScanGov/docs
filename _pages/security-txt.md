---
title: "security.txt"
date: 2024-10-12
description: "File with website security contact info."
icon: "fa-solid fa-file-shield"
audio: security-txt.mp3
services: true
lowercase: true
keywords: 
topics:
  - Security
  - Standards
---

## Guidance

All government websites must have a security.txt file.

The Cybersecurity and Infrastructure Security Agency recommends this practice in its [Cross-Sector Cybersecurity Performance Goals](https://www.cisa.gov/cross-sector-cybersecurity-performance-goals):

> "All public-facing web domains have a security.txt file that conforms to the
recommendations in RFC 9116."

[CISA](https://www.cisa.gov/news-events/news/securitytxt-simple-file-big-value):

> “In an effort to accelerate the delivery of *all* notifications, CISA supports using the ‘security.txt’ standard to streamline notifications and reduce the risk of compromise. It not only helps our work but also supports other partners that try to warn organizations of internet-accessible vulnerabilities susceptible to cyber threat actors – this is most important for organizations aligned to our most valuable critical infrastructure sectors.”

## About

security.txt is a text file located on the site root-level or `/.well-known/` directory that helps improve vulnerability disclosure by giving security researchers clear contact and reporting information.

security.txt is an accepted standard ([RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)) by the[ Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force).

## Examples

* [CISA](https://www.cisa.gov/sites/default/files/security.txt)

## Code

Example code:

```yaml
Contact: mailto:IRT@mail.cisa.dhs.gov
Contact: mailto:TOC@mail.CISA.dhs.gov
Encryption: https://www.cisa.gov/contact-us
Hiring: https://www.cisa.gov/careers
CSAF: https://www.cisa.gov/sites/default/files/csaf/provider-metadata.json
Expires: 2025-10-01T00:00:00.000Z
```

## Links

* [securitytxt.org](https://securitytxt.org/)
* [security.txt - Wikipedia](https://en.wikipedia.org/w/index.php?title=Security.txt&oldid=1229043494)
* [security.txt: A Simple File with Big Value](https://www.cisa.gov/news-events/news/securitytxt-simple-file-big-value)
* [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)

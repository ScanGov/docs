---
title: "Interaction to next paint"
date: 2025-02-08
description: ""
icon: "fa-solid fa-gauge"
services: true
lowercase: true
keywords: 
topics:
  - Performance
  - Standards
---

## Guidance

Core Web Vitals assessment grades a successful interaction to next paint as less than or equal to 0.2 seconds.

Interaction to next paint (INP) is one of the performance <a href="https://developers.google.com/search/docs/appearance/core-web-vitals">Core Web Vitals</a> metrics that help ensure passable user experience for visitors on all devices and affect a site's search engine ranking.

## About

Interaction to next paint measures page interaction latency. It can be confusing and frustrating for visitors when clicking on elements in your web application does not produce an immediate response.

More information on Interaction to next paint (INP) <a href="https://web.dev/articles/inp">on web.dev</a>

The data ScanGov uses to evaluate sites is provided by the <a href="https://developer.chrome.com/docs/crux">Chrome user experience report</a>. This dataset is compiled from real visitor data each domain. Sites with low traffic will not have any data available in the Chrome user experience report. In that case we run our own lighthouse audit.
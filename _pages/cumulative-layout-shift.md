---
title: "Cumulative layout shift"
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

Core Web Vitals assessment grades cumulative layout shift as "good" when the page is making less than or equal to 0.1 seconds of unexpected shifts.

Cumulative layout shift (CLS) is one of the performance <a href="https://developers.google.com/search/docs/appearance/core-web-vitals">Core Web Vitals</a> metrics that help ensure passable user experience for visitors on all devices and affect a site's search engine ranking.

## About

Cumulative layout shift measures how much a page unexpectedly moves things around once they are displayed.

Regular interactions that change content like clicking a button are expected shifts and are not counted in the layout shift.

More information on the <a href="https://web.dev/articles/cls">cumulative layout shift metric from web.dev</a>

The data ScanGov uses to evaluate sites is provided by the <a href="https://developer.chrome.com/docs/crux">Chrome user experience report</a>. This dataset is compiled from real visitor data each domain. Sites with low traffic will not have any data available in the Chrome user experience report. In that case we run our own lighthouse audit.
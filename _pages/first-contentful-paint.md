---
title: "First contentful paint"
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

Core Web Vitals assessment grades first contentful paint as "good" when it happens in less than or equal to 1.8 seconds.

First contentful paint (FCP) is one of the performance <a href="https://developers.google.com/search/docs/appearance/core-web-vitals">Core Web Vitals</a> metrics that help ensure passable user experience for visitors on all devices and affect a site's search engine ranking.

## About

First contentful paint measures how quickly the page begins to become visible.

Any section of the page counts for this measurement so if the header is displayed while the rest of the page is still blank this is considered complete.

More information on the <a href="https://web.dev/articles/fcp">first contentful paint metric from web.dev</a>

The data ScanGov uses to evaluate sites is provided by the <a href="https://developer.chrome.com/docs/crux">Chrome user experience report</a>. This dataset is compiled from real visitor data each domain. Sites with low traffic will not have any data available in the Chrome user experience report. In that case we run our own lighthouse audit.
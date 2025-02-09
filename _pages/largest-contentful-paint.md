---
title: "Largest contentful paint"
date: 2025-02-08
description: "How fast the majority of a page is rendered"
icon: "fa-solid fa-gauge"
services: true
lowercase: true
keywords: 
topics:
  - Performance
---

## Guidance

Core Web Vitals assessment grades largest contentful paint as "good" when it happens in less than or equal to 2.5 seconds.

Largest contentful paint (LCP) is one of the performance <a href="https://developers.google.com/search/docs/appearance/core-web-vitals">Core Web Vitals</a> metrics that help ensure passable user experience for visitors on all devices and affect a site's search engine ranking.

## About

Largest contentful paint measures how quickly largest content block takes to become visible.

More information on the <a href="https://web.dev/articles/lcp">largest contentful paint metric from web.dev</a>

The data ScanGov uses to evaluate sites is provided by the <a href="https://developer.chrome.com/docs/crux">Chrome user experience report</a>. This dataset is compiled from real visitor data each domain. Sites with low traffic will not have any data available in the Chrome user experience report. In that case we run our own lighthouse audit.
---
title: "Time to first byte"
date: 2025-02-08
description: ""
icon: "fa-solid fa-gauge"
services: true
lowercase: true
keywords: 
topics:
  - Performance
---

## Guidance

Core Web Vitals assessment grades a successful time to first byte response as less than or equal to 0.8 seconds.

## About

Time to first byte measures how fast your server is responds.

This is the first step in the performance pipeline. If this is not fast it is difficult to pass other metrics that depend on it.

More information on the <a href="https://web.dev/articles/ttfb">time to first byte metric from web.dev</a>

The data ScanGov uses to evaluate sites is provided by the Chrome user experience report. This dataset is compiled from real visitor data each domain. Sites with low traffic will not have any data available in the Chrome user experience report. In that case we run our own lighthouse audit.

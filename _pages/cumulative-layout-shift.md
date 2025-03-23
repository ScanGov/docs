---
title: "Cumulative Layout Shift (CLS)"
date: 2025-03-22
modified: 
author: ScanGov
description: "Measures unexpected webpage content shifts."
icon: "fa-solid fa-certificate"
website: https://web.dev/articles/cls
#audio: .mp3
#guidance: true
standards: true
topics:
  - Accessibility
  - Content
  - Performance
  - SEO
---

## About

​Cumulative Layout Shift (CLS) measures how much a webpage's content unexpectedly moves during loading, affecting user experience. A good CLS score is 0.1 or less. Common causes include images or ads without specified dimensions, dynamically added content, and late-loading fonts. To improve CLS, always set size attributes for media, reserve space for ads, and ensure fonts load properly. ​
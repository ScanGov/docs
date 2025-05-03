---
title: "Open Graph"
date: 2025-02-03
modified: 
author: ScanGov
description: "Improves how social media content shows."
icon: "fa-solid fa-sitemap"
website: https://ogp.me/
audio: open-graph.mp3
guidance: true
topics:
  - Content
  - SEO
  - Social media
---

## About

Open Graph is a protocol that helps websites control how their content look when shared on social media. It decides the title, image, and description that appear in previews. This makes shared links more attractive and informative. Platforms like Facebook and X use Open Graph to display content properly. Website owners add special tags to their pages to customize previews, helping posts stand out and get more clicks.

## Examples


```html
<meta property="og:title" content="Your Open Graph Title">
<!-- Open Graph meta tag for setting the title of the content when shared on social media -->

<meta property="og:description" content="Your Open Graph Description">
<!-- Open Graph meta tag for providing a brief description of the content when shared on social media -->

<meta property="og:image" content="URL to your image">
<!-- Open Graph meta tag for specifying the image associated with the content when shared on social media -->

<meta property="og:image:alt" content="A description of the image">
<!-- Open Graph meta tag for providing an alternative text description of the image, improving accessibility and context when the image cannot be displayed -->
 
<meta property="og:url" content="URL to your page">
<!-- Open Graph meta tag for defining the URL of the content when shared on social media -->

<meta property="og:type" content="website">
<!-- Open Graph meta tag for specifying the type of content (e.g., website, article) -->

<meta property="og:locale" content="en_US">
<!-- Open Graph meta tag for setting the locale (language and country) of the content -->

<meta property="article:published_time" content="YYYY-MM-DDTHH:mm:ssZ" />
<!-- Open Graph meta tag for indicating the publish time of an article -->

<meta property="article:modified_time" content="YYYY-MM-DDTHH:mm:ssZ" />
<!-- Open Graph meta tag for indicating the last modification time of an article -->

```
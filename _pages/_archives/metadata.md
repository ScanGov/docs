---
title: "Metadata"
date: 2024-02-17
modified: 2025-03-26
description: "Data describing website content."
standards: true
topics:
  - Content
  - SEO
  - Social media
---

## Guidance

All government websites must have basic metadata.

## About

Website metadata is the information embedded in a web page's HTML code that provides additional details about the webpage. This metadata is not visible on the webpage itself but is used by browsers, search engines, and other web services to understand and categorize the content. (<a href="https://developer.mozilla.org">Mozilla Developer Network</a>)

## Standards

* [General](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

## Code

Complete list of metadata tags and descriptions for each:

```html
<meta charset="UTF-8">
<!-- Set character encoding to UTF-8 in HTML. -->

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Define viewport settings for responsive web design. -->

<meta name="keywords" content="your, keywords, here">
<!-- Meta tag for defining keywords relevant to the webpage content -->

<meta name="description" content="Your website description">
<!-- Meta tag for providing a brief description of the webpage content -->

<title>Your Website Title</title>
<!-- Title tag for setting the title of the webpage -->

<link rel="stylesheet" href="styles.css">
<!-- Link tag to include an external stylesheet for styling the webpage -->

<link rel="icon" href="favicon.ico" type="image/x-icon">
<!-- Link tag to specify the favicon for the webpage -->

<script src="script.js" defer></script>
<!-- Script tag to include an external JavaScript file with deferred execution -->

<!-- Open Graph meta tags -->
<meta property="og:title" content="Your Open Graph Title">
<!-- Open Graph meta tag for setting the title of the content when shared on social media -->

<meta property="og:description" content="Your Open Graph Description">
<!-- Open Graph meta tag for providing a brief description of the content when shared on social media -->

<meta property="og:image" content="URL to your image">
<!-- Open Graph meta tag for specifying the image associated with the content when shared on social media -->

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

<!-- Twitter meta tags -->
<meta name="twitter:card" content="summary_large_image">
<!-- Twitter meta tag for specifying the type of Twitter card to use when sharing the content -->

<meta name="twitter:title" content="Your Twitter Title">
<!-- Twitter meta tag for setting the title of the content when shared on Twitter -->

<meta name="twitter:description" content="Your Twitter Description">
<!-- Twitter meta tag for providing a brief description of the content when shared on Twitter -->

<meta name="twitter:image" content="URL to your image">
<!-- Twitter meta tag for specifying the image associated with the content when shared on Twitter -->

<meta name="twitter:url" content="URL to your page">
<!-- Twitter meta tag for defining the URL of the content when shared on Twitter -->

<!-- Content Security Policy (CSP) -->
<meta http-equiv="Content-Security-Policy" content="your-csp-directives-here">
<!-- Meta tag for specifying the Content Security Policy directives -->

<!-- Robots meta tag -->
<meta name="robots" content="index, follow">
<!-- Meta tag for instructing search engine robots to index and follow links on the webpage -->

<!-- Googlebot meta tag -->
<meta name="googlebot" content="index, follow">
<!-- Meta tag for instructing Googlebot to index and follow links on the webpage -->

<!-- Locale meta tag -->
<meta name="locale" content="en_US">
<!-- Meta tag for defining the locale (language and country) of the webpage content -->

<!-- Canonical URL -->
<link rel="canonical" href="URL to your canonical page">
<!-- Link tag for specifying the canonical URL of the webpage -->

<!-- Dublin Core meta tags -->
<meta name="DC.title" content="Your Dublin Core Title">
<!-- Dublin Core meta tag for setting the title of the webpage -->

<meta name="DC.creator" content="Your Dublin Core Creator">
<!-- Dublin Core meta tag for specifying the creator or author of the content -->

<meta name="DC.subject" content="Your Dublin Core Subject">
<!-- Dublin Core meta tag for defining the subject or topic of the content -->

<meta name="DC.description" content="Your Dublin Core Description">
<!-- Dublin Core meta tag for providing a brief description of the content -->

<meta name="DC.publisher" content="Your Dublin Core Publisher">
<!-- Dublin Core meta tag for indicating the publisher of the content -->

<meta name="DC.date" content="2024-01-11T12:34:56Z">
<!-- Dublin Core meta tag for specifying the date of creation or publication of the content -->

<meta name="DC.language" content="en_US">
<!-- Dublin Core meta tag for setting the language of the content -->

<!-- gmpg metadata -->
<link rel="gmpg" href="http://gmpg.org/xfn/11">
<!-- Link tag for including Global Multimedia Protocols Group (gmpg) metadata -->
```
## Links

* [Metadata, Open Graph and government websites](https://govfresh.com/thoughts/metadata-open-graph-government-websites) (GovFresh)
* [Analyzing U.S. federal and state government website metadata
](https://govfresh.com/thoughts/analyzing-government-website-metadata) (GovFresh)
* [Metadata and tags you should include in your website](https://search.gov/indexing/metadata.html) (searchgov)

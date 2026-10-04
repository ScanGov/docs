---
title: "Video accessibility"
date: 2026-10-04
description: "How ScanGov checks videos on your site for captions and descriptive titles."
icon: "fa-solid fa-video"
category: "product"
topics:
  - ScanGov
---

ScanGov checks the video on every page it scans and flags the issues that keep people who are deaf, hard of hearing, or using a screen reader from getting the same information as everyone else. Failing pages add tasks to your [tasklist](/tasklist/).

## What ScanGov checks

* [Captions on video](https://standards.scangov.org/video-caption) — each `<video>` element has a `<track>` element with `kind="captions"`.
* [Titles on frames](https://standards.scangov.org/frame-title) — each `<iframe>`, including embedded video players, has a title that describes it.

These checks are part of the [Accessibility indicator](/indicators).

## Limits

* ScanGov checks the page's own markup. It cannot see inside an embedded player, so it does not verify that a YouTube or Vimeo video has captions turned on.
* ScanGov does not check the quality of captions, or whether you offer a transcript or audio description.

## How to fix

* Add a captions track to every self-hosted video.
* Give every embedded video player a short title that says what the video is about.
* For embedded videos, confirm the video has captions in your video host.

## Examples

Video without captions (fails):

```html
<video src="presentation.mp4" controls></video>
```

Video with a captions track (passes):

```html
<video controls>
  <source src="presentation.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English" default>
</video>
```

Embedded player without a title (fails):

```html
<iframe src="https://example.gov/map"></iframe>
```

Embedded player with a title (passes):

```html
<iframe src="https://example.gov/map" title="Office locations map"></iframe>
```

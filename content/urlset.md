---
title: "URLs"
date: 2026-10-16
description: "How to control which pages ScanGov scans on your site."
icon: "fa-solid fa-link"
category: "product"
topics:
  - ScanGov
---

Each site has a URLs page (in the site sidebar) for controlling exactly which pages get scanned. It has four tabs: Active, Add URLs, Redirects, and Retired.

## Active

The pages currently being scanned. Search the list, then select URLs and click Remove to stop scanning them. Select all and Deselect all help with bulk changes. Removing saves right away, and removed pages move to Retired with the reason "Removed by user". Retired pages are excluded from your site's score.

Reset from sitemap re-syncs your page list against your site's current sitemap, then shows a summary of what changed:

* New sitemap pages are added
* Pages back in the sitemap are reactivated
* Pages no longer in the sitemap are retired
* Pages with a missing status are fixed

If nothing needs to change, it says so.

## Add URLs

Enter pages one per line, or upload a `.txt` file to fill in the list, then click Add URLs. Added pages save right away.

Only URLs on the site's own domain are accepted. URLs that are invalid, on another domain, or already in the Active list are flagged and not added.

## Redirects

Pages that redirect elsewhere. Each page shows the URL it redirects to. These are tracked separately and excluded from your site's score.

## Retired

Pages that are no longer available (removed manually, or dropped from the sitemap). Each page shows the reason it was retired. Also excluded from your site's score.

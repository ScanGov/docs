---
title: "Status"
date: 2024-02-17
description: "Status types and descriptions."
icon: "fa-solid fa-check-circle"
keywords: metadata, url, sitemap
topics:
  - ScanGov
---

## Status types

* Active: Source was found.
* Missing: Source was not found.
* Redirect: URL redirects to another domain.
* Inaccessible: Site is inaccessible (status 400/401/403/404/408/410/429/500/502/503/999). The domain manager has blocked bots in the metadata or server side, or the domain doesn't exist. These domains don't have scores/grades and aren't factored into the averages.

## Status Codes

<h3 id="200">200 OK</h3>

The request succeeded and the page loaded normally.

<h3 id="301">301 Moved Permanently</h3>

The URL has permanently moved to a new address.

<h3 id="302">302 Found</h3>

The URL has temporarily moved to a new address.

<h3 id="400">400 Bad Request</h3>

The server could not understand the request due to invalid syntax or formatting.

<h3 id="401">401 Unauthorized</h3>

The requested resource requires authentication. The client must log in to access it.

<h3 id="403">403 Forbidden</h3>

The server understood the request but refused to fulfill it. The client does not have permission to access this resource.

<h3 id="404">404 Not Found</h3>

The server could not find the requested page or resource.

<h3 id="408">408 Request Timeout</h3>

The server closed the connection because the request took too long to complete.

<h3 id="410">410 Gone</h3>

The requested resource has been permanently removed and will not be available again.

<h3 id="429">429 Too Many Requests</h3>

The client sent too many requests in a short period and the server is rate-limiting access.

<h3 id="500">500 Internal Server Error</h3>

The server encountered an unexpected error and could not complete the request.

<h3 id="502">502 Bad Gateway</h3>

The server received an invalid response from another server while processing the request.

<h3 id="503">503 Service Unavailable</h3>

The server is temporarily unable to handle the request, often due to maintenance or overload.

<h3 id="999">999 Request Denied</h3>

A non-standard code used by some sites to actively block automated or bot traffic.

## Links

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) (MDN)

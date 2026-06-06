---
title: "Single sign-on"
date: 2026-04-24
modified: 
author: ScanGov
description: "Log into ScanGov with one shared account."
icon: "fa-solid fa-arrow-right-to-bracket"
topics:
  - ScanGov
---

## About

Single sign-on (SSO) lets you log in once and access multiple apps without entering your password again. Instead of remembering different usernames and passwords for every website, you use one account. It saves time, reduces password mistakes, and makes managing accounts easier. Organizations use it so employees can access work tools with just one login.

## ScanGov SSO

ScanGov supports SSO via [Okta](https://www.okta.com) using the [OpenID Connect](https://openid.net/connect/) (OIDC) protocol. Team members can log in to ScanGov with their existing Okta credentials. Any member of your organization with a paid plan can set up SSO.

## Before you start

- A ScanGov organization account with a paid enterprise plan
- An Okta administrator account with permission to create applications

## Step 1: Create an OIDC application in Okta

1. Log in to your Okta Admin Console.
2. Go to **Applications** > **Applications** > **Create App Integration**.
3. Select **OIDC - OpenID Connect** as the sign-in method.
4. Select **Web Application** as the application type.
5. Click **Next**.

Configure the application with these settings:

| Setting | Value |
|---|---|
| App integration name | ScanGov |
| Grant type | Authorization Code |
| Sign-in redirect URI | `https://my.scangov.com/auth/callback` |
| Sign-out redirect URI | Leave blank |
| Controlled access | Assign to the groups or people who should have access |

6. Click **Save**.

Okta will display your **Client ID** and **Client Secret**. Copy both — you'll need them in the next step. Also copy your **Okta domain** (e.g., `https://your-org.okta.com`), shown in the top-right corner of the Okta Admin Console.

## Step 2: Configure SSO in ScanGov

1. Log in at [my.scangov.com](https://my.scangov.com).
2. Go to your organization settings and click **SSO** in the sidebar.
3. Enter the following:
   - **Email domain** — Your team's email domain (e.g., `acme.gov`). Users with this domain will be routed to Okta to log in.
   - **Okta domain** — Your Okta org URL (e.g., `https://your-org.okta.com`)
   - **Client ID** — From your Okta application
   - **Client secret** — From your Okta application. If you ever regenerate this in Okta, update it here to match.
4. Click **Save**.

## Step 3: Log in with SSO

1. Go to [my.scangov.com](https://my.scangov.com) and click **Sign in with SSO**.
2. Enter your email address and click **Continue**.
3. Log in on your organization's Okta page.
4. You'll be redirected back to ScanGov.

Team members who were invited directly and set up a password can still log in that way. SSO is an additional option, not a replacement.

## Support

Having trouble? [Contact us](/contact).
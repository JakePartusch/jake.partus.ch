---
type: blog
slug: introducing-lumberjack
title: Introducing Lumberjack - an automated accessibility scanner
publishDate: 2020-02-11
reactions: 36
---

https://github.com/JakePartusch/lumberjack

Accessibility testing is hard. And for the most part, accessibility testing is also _manual_. Testers interact with their websites with not only their keyboards, but also with multiple screen readers and browsers. Luckily, with static html analysis and pin-pointed JavaScript execution, we can detect a subset of accessibility issues with automated tools 🎉.

We can automatically find issues like:

- Poor color contrast
- Heading levels out of order
- Buttons and links without accessible text
- Inputs without labels

Using automation, we can quickly find accessibility issues and prevent future regressions. can help to quickly find accessibility issues and prevent future regressions!

## Axe

[Axe](https://github.com/dequelabs/axe-core) is an accessibility tool that has gained a lot of traction over the past few years. And it even has a [Chrome extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)!

Axe is great, but can only be run on a single page at a time. So, let's extend the power of axe to up our accessibility game!

## Lumberjack

Lumberjack uses the power and rulesets of axe, but orchestrates the scanning of many pages simultaneously.

Lumberjack can scan 100 individual pages in under two minutes!

Here is how Lumberjack works:

- You give lumberjack a url (eg. https://google.com)
- Lumberjack reads your website's sitemap
- It spawns multiple browser instances and starts scanning with axe
- It aggregates results and reports back

![Screenshot of lumberjack in action. Print the individual accessibility issues found in an example](https://dev-to-uploads.s3.amazonaws.com/i/4ktrbctg49ccw4hoc3df.png)

Even better, this can all be triggered with a single command

```
npx @jakepartusch/lumberjack --url https://google.com
```

## Lumberjack CI

Finally, we can integrate Lumberjack into our continuous integration pipeline to ensure that we aren't introducing any new accessibility issues into our websites.

An Example with GitHub Actions (eg. ".github/workflows/accessibility.yml")

```
name: Accessibility Audits

on: [push]

jobs:
  build:
    runs-on: ubuntu-18.04

    steps:
      - uses: actions/checkout@v1
      - name: Install required Linux packages
        run: |
          sudo apt-get update
          sudo apt-get install libgbm-dev
          sudo apt-get install xvfb
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: Install npm packages
        run: |
          npm ci
      - name: Build
        run: |
          npm run build
      - name: Accessibility Audits
        run: |
          npm install -g @jakepartusch/lumberjack
          xvfb-run --auto-servernum lumberjack --url https://google.com
```

As a community let's build accessibility tooling as often and with as much fervor as we build IDE themes :). Together, we can make the web a better place ♥️.

For more info, and documentation, visit https://github.com/JakePartusch/lumberjack

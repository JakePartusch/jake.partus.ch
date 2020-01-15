---
type: blog
slug: the-best-way-to-automate-performance-checks-in-github-584e
title: The Best Way to Automate Performance Checks in GitHub
publishDate: 2020-01-15
reactions: 33
---
We all want to build fast websites. But we don't want to manually run performance checks on every build. Right? Moving performance checks into a continuous integration process removes this manual audit and alerts us when the web performance of our application may be degrading. In this article, we'll discuss a great way to automate performance checks in GitHub projects with Lighthouse, Page Speed Insights and GitHub Actions.

# Lighthouse

Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse) is an open-source, automated tool for improving the quality of web pages. Lighthouse can be run locally with developer tools, or remotely via [web.dev](https://web.dev) and provides users with 5 distinct scoring categories.
<br/><br/>
- Performance
- Accessibility
- Best Practices
- SEO
- Progressive Web App
<br/><br/>

<p>An overall score is given for each category along with issues and recommendations to improve the scores.</p>

![A screenshot of the Lighthouse scores](https://thepracticaldev.s3.amazonaws.com/i/z1szvs5bt04lwel9pozv.png)

Running Lighthouse in Chrome Dev Tools or on [web.dev](https://web.dev) is great, but in order to automate this process, we'll need a command line interface (CLI).

## Lighthouse CLI

Google also provides a [CLI](https://github.com/GoogleChrome/lighthouse-ci) for running Lighthouse on a local machine or a build server. The great thing about the CLI is that it can be run against a live site, or local build directory.

### Running Lighthouse CLI on a live website

After globally installing (`npm install -g @lhci/cli`) the npm package, we can use the `lhci` script to trigger Lighthouse audits. By using `--upload.target` and `--collect.url`, we can run the audit against a URL and have the HTML result uploaded to a temporary web page.

```bash
$ lhci autorun --upload.target=temporary-public-storage --collect.url=https://jake.partus.ch
✅  .lighthouseci/ directory writable
⚠️   Configuration file not found
✅  Chrome installation found
Healthcheck passed!

Running Lighthouse 3 time(s) on https://jake.partus.ch
Run #1...done.
Run #2...done.
Run #3...done.
Done running Lighthouse!

Uploading median LHR of https://jake.partus.ch/...success!
Open the report at https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1578972923376-47459.report.html
No GitHub token set, skipping.

Done running autorun.
```

### Running Lighthouse CLI on a local directory

If a URL is not specified, the CLI will attempt to find the static build directory and host the application on a local web server. In the following example, it was able to determine that the build directory was named `public`, host the website on port 52259, and then run the audits against the local build.

```bash
$ lhci autorun --upload.target=temporary-public-storage
✅  .lighthouseci/ directory writable
⚠️   Configuration file not found
✅  Chrome installation found
Healthcheck passed!

Automatically determined ./public as `staticDistDir`.
Set it explicitly in lighthouserc.json if incorrect.

Started a web server on port 52259...
Running Lighthouse 3 time(s) on http://localhost:52259/404.html
Run #1...done.
Run #2...done.
Run #3...done.
Running Lighthouse 3 time(s) on http://localhost:52259/index.html
Run #1...done.
Run #2...done.
Run #3...done.
Done running Lighthouse!

Uploading median LHR of http://localhost:52259/404.html...success!
Open the report at https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1578972840850-69068.report.html
Uploading median LHR of http://localhost:52259/index.html...success!
Open the report at https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1578972841932-44445.report.html
No GitHub token set, skipping.

Done running autorun.
```

# Page Speed Insights

[Page Speed Insights](https://developers.google.com/speed/docs/insights/v5/about#lab) is another tool created by Google which combines Lighthouse performance scores with real-world performance data. 
<br/><br/>
For more in-depth information on the benefits and APIs available via Page Speed Insights, read this: [https://dev.to/addyosmani/monitoring-performance-with-the-pagespeed-insights-api-33k7](https://dev.to/addyosmani/monitoring-performance-with-the-pagespeed-insights-api-33k7)
<br/><br/>
Page Speed Insights focuses solely on the performance aspects of a webpage. While this is useful, we should try to utilize _both_ Lighthouse and Page Speed Insights to get a complete picture on the performance and other characteristics of our website.


# GitHub Actions

_GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub._
<br/><br/>
[GitHub Actions](https://github.com/features/actions) is a new product from GitHub which allows the configuration of a custom CI/CD pipeline for your project. GitHub Actions can be run for individual pull requests, whenever code is pushed, or a whole host of other [events](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows).

# Running Lighthouse with a GitHub Action

Here is an example of GitHub Action script to run an audit on every pull request. To get started, put the following yaml config in a file in your project at `.github/workflows/audit.yml`. The checkout, install, and build scripts may need to be tweaked depending on the specifics of your application.

```yaml
name: Performance Audit

on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: Install
        run: |
          npm ci
      - name: Build
        run: |
          npm run build
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.3.x
          lhci autorun --upload.target=temporary-public-storage
```

## Configuring a GitHub App for integrated status checks (Optional)

In order to get integrated GitHub status checks, the Lighthouse CI GitHub app must be [installed and configured](https://github.com/apps/lighthouse-ci).

Then, the token must be added to the projects "Secrets".
![Screenshot of the Secrets Tab in the GitHub settings](https://thepracticaldev.s3.amazonaws.com/i/6bz4ffx5pouax88f442s.png)

Finally, the build script can be tweaked to reference the secret.
```yaml
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.3.x
          lhci autorun --upload.target=temporary-public-storage"
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

After all of this is configured, the status checks should now be created by the Lighthouse CI GitHub App.

![A screenshot of the GitHub status check in a pull request](https://thepracticaldev.s3.amazonaws.com/i/leu77kyk9hv3ctq21wvj.png)


# Adding PSI to the GitHub Action Script

To help to quickly and easily run PSI checks, I created a [GitHub Action](https://github.com/marketplace/actions/page-speed-insights) 🎉. In the following example, we'll add the PSI check to the end of our performance audit script.

```yaml
name: Performance Audit

on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: Install
        run: |
          npm ci
      - name: Build
        run: |
          npm run build
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.3.x
          lhci autorun --upload.target=temporary-public-storage
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
      - name: Running Page Speed Insights
        uses: jakepartusch/psi-action@v1
        with:
          url: https://jake.partus.ch
```

While this is definitely useful, we might want to run our performance checks against a deploy preview of our application, so we can insure that we catch the performance regressions _before_ we merge the PR.

# Integrating with PR Previews

For this example we'll utilize Netlify for [Pull Request Deploy Previews](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys). After configuring deploy previews, Netlify will build and deploy the site when a PR is opened. The site will exist at the URL (deploy-preview-42--yoursitename.netlify.com). Since the deploy preview takes some time to process, I wrote another [GitHub Action](https://github.com/marketplace/actions/wait-for-netlify) 🎉 to wait until the preview URL is available. Here is a complete example of a deploy preview performance audit with GitHub Actions.

```yaml
  
name: Performance Audit

on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: Install
        run: |
          npm ci
      - name: Build
        run: |
          npm run build
      - name: Waiting for 200 from the Netlify Preview
        uses: jakepartusch/wait-for-netlify-action@v1
        id: waitFor200
        with:
          site_name: "yoursitename"
      - name: Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.3.x
          lhci autorun --upload.target=temporary-public-storage --collect.url=${{ steps.waitFor200.outputs.url }}
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
      - name: Running Page Speed Insights
        uses: jakepartusch/psi-action@v1
        with:
          url: ${{ steps.waitFor200.outputs.url }}
```

# Conclusion

Now we have a complete suit of performance audits that run with each Pull Request in GitHub 💯. To see all of this in practice, feel free to visit my [personal website repo](https://github.com/JakePartusch/website).

## Reference Links
[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)<br/>
[Lighthouse CI GitHub status checks](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md#github-status-checks)<br/>
[Page Speed Insights (library)](https://github.com/GoogleChromeLabs/psi)<br/>
[Page Speed Insights GitHub Action (shameless plug)](https://github.com/JakePartusch/psi-action)<br/>
[Wait for Netlify GitHub Action (shameless plug)](https://github.com/JakePartusch/wait-for-netlify-action)<br/>
# ICGC DCC - Docs

Documentation for ICGC DCC using [mkdocs](https://www.mkdocs.org/) and GitHub Pages hosted at [https://icgc-dcc.github.io/dcc-docs](https://icgc-dcc.github.io/dcc-docs)

## Domain

A custom domain is setup on the `gh-pages` branch in the `CNAME` file:

[https://docs.icgc.org](https://docs.icgc.org)

## Setup
This project requires `mkdocs` version 0.15.3 or higher.

To install on Mac:

```bash
brew install mkdocs
```

Node is also required. Download the latest version from [nodejs.org](https://nodejs.org/en/download/).  

After installing node, `cd` into the directory containing the project and run
```
npm install
```

## Content

The content of the docs are Markdown documents that may be found at [docs/](docs/)

:warning: Note that you must commit your changes to GitHub in order for them not to be clobbered by another user in a future deployment.

## Configure

Edit `mkdocs.yml`

## Develop

```shell
npm start
```

## Build

```shell
npm run build
```

## Deploy

Changes are published through Netlify. 

You can either run the build step and copy over the `site` directory to netlify, or have netlify watch the master branch and
build and deploy it on changes. 

### NPM Notes

If errors are encountered when running npm run build|publish, try re-running 
```shell
npm install
```
to update missing packages used by the doc deployment process.


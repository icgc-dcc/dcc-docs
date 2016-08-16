# ICGC DCC - Docs

Documentation for ICGC DCC using [mkdocs](http://www.mkdocs.org/) and GitHub Pages hosted at [http://icgc-dcc.github.io/dcc-docs](http://icgc-dcc.github.io/dcc-docs)

## Domain

A custom domain is setup on the `gh-pages` branch in the `CNAME` file:

[http://docs.icgc.org](http://docs.icgc.org)

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

To publish changes, run

```shell
npm run publish
```

It is unnecessary to run the build task before publishing

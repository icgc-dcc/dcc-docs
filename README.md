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

Node and NPM are required as well.
For developers, [nvm](https://github.com/creationix/nvm) is recommended.
Otherwise, downloading the latest from [nodejs.org](https://nodejs.org/en/download/) will work.

After installing node, go into the directory containing the project and run
```
npm install
```

## Content

The content of the docs are Markdown documents that may be found at [docs/](docs/)

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

To publish to GitHub (performs build as above)

```shell
npm run publish
```

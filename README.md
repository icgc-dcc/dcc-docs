# ICGC DCC - Docs

Documentation for ICGC DCC using [mkdocs](http://www.mkdocs.org/) and GitHub Pages hosted at [http://icgc-dcc.github.io/dcc-docs](http://icgc-dcc.github.io/dcc-docs)

## Domain

A custom domain is setup on the `gh-pages` branch in the `CNAME` file:

[http://docs.icgc.org](http://docs.icgc.org)

## Setup

We are using an unreleased version of mkdocs in order to get [unlimited nav nesting](https://github.com/mkdocs/mkdocs/issues/6#issuecomment-163625780) support.

To install:

```bash
pip install https://github.com/mkdocs/mkdocs/archive/master.zip
```

Node and NPM are required as well.
For developers, [nvm](https://github.com/creationix/nvm) is recommended.
Otherwise, downloading the latest from [nodejs.org](https://nodejs.org/en/download/) will work.

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

```shell
npm run publish
```

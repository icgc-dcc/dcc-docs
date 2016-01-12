# ICCC DCC - Docs

Documentation for ICGC DCC using [mkdocs](http://www.mkdocs.org/) and GitHub Pages hosted at [http://icgc-dcc.github.io/dcc-docs](http://icgc-dcc.github.io/dcc-docs).

## Setup

We are using an unreleased version of mkdocs in order to get [unlimited nav nesting](https://github.com/mkdocs/mkdocs/issues/6#issuecomment-163625780) support.

To install:

```bash
pip install https://github.com/mkdocs/mkdocs/archive/master.zip
```

## Content

The content of the docs are Markdown documents that may be found at [docs/](docs/)

## Configure

Edit `mkdocs.yml`

## Develop

```shell
mkdocs serve
```

## Deploy

```shell
mkdocs gh-deploy --clean
```

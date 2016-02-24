# Source Code

## Overview

All source code may be found on the [ICGC DCC GitHub repository](https://github.com/icgc-dcc).

## Projects

### Common Libraries (`dcc-common`)
[Common Libraries GitHub repository](https://github.com/icgc-dcc/dcc-common)

Reusable software modules used throughout the ICGC DCC projects described here.

### Installation System (`dcc-cm`)
[Configuration Management GitHub repository](https://github.com/icgc-dcc/dcc-cm)

Installation automation and [configuration management](https://www.wikiwand.com/en/Configuration_management) (CM) system for DCC operational environments.

This project includes [Ansible](https://www.ansible.com/) playbooks for provisioning ETL, Portal, Downloader and Submission systems as well
as docker containers for provisioning software on docker hosts.

### Submission System (`dcc-submission`)
[Submission System GitHub repository](https://github.com/icgc-dcc/dcc-submission)

Software for accepting and validating ICGC clinical and experimental data files. This system powers [https://submissions.dcc.icgc.org/](https://submissions.dcc.icgc.org/) and provides the main input to the ETL system.

### Data Downloader (`dcc-downloader`)
[Data Downloader GitHub repository](https://github.com/icgc-dcc/dcc-downloader)

Software component for Archiving and Downloading data used by the Data Portal. Contains the client code as well the oozie
workflows for execution on Hadoop.

### Data Portal (`dcc-portal`)
[Portal GitHub repository](https://github.com/icgc-dcc/dcc-portal)

Project powering the ICGC Data Portal used for exploring, visualizing, and downloading ICGC data.

The repository contains the source code which powers the Data Portal's API, UI, as well as the underlying query infrastructure.

### Docs (`dcc-docs`)
[Docs GitHub repository](https://github.com/icgc-dcc/dcc-docs)

Source code for this site. Powered by mkdocs and GitHub Pages.

### ETL (`dcc-etl`)
[ETL GitHub repository](https://github.com/icgc-dcc/dcc-etl)

Parent project for all the modules that make up the ETL pipeline for transforming project submissions into Data Portal products.

### ID (`dcc-id`)
[ID GitHub repository](https://github.com/icgc-dcc/dcc-id)

The ID project is used by DCC ETL project to obfuscate sensitive clinical data. It generates surrogate IDs for submitted clinical
data which are then used in the Data Portal.

### Import (`dcc-import`)
[Import GitHub repository](https://github.com/icgc-dcc/dcc-import)

Project which contains all the import modules used for importing reference data for use by the ETL pipeline. Imported data
is staged in MongoDB.

### Repository (`dcc-repository`)
[Repository GitHub repository](https://github.com/icgc-dcc/dcc-repository)

Importer for the ICGC "Data Repository" feature which imports file metadata from various external data repositories.

### iobio (`dcc-iobio`)
[iobio GitHub repository](https://github.com/icgc-dcc/dcc-iobio)

The ICGC customized iobio containers for accessing ICGC cloud based files. Currently contains the
ICGC customized bam.iobio container.

Major changes over the base iobio container are related to security improvements and integration of
the ICGC Storage Client.

### Parent (`dcc-parent`)
[Parent POM GitHub repository](https://github.com/icgc-dcc/dcc-parent)

This project provides shared configuration for Maven builds for use in ICGC DCC projects.

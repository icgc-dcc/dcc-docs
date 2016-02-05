# Source Code

## Overview

All source code may be found on the [ICGC DCC GitHub repository](https://github.com/icgc-dcc).

<div class="alert alert-info" role="alert">Note that the DCC is in the process of open-sourcing its repository. This will include inline documentation and configuration management of the operating environment</div>

## Projects

### Common Modules (dcc-common)
[Common Modules GitHub repository](https://github.com/icgc-dcc/dcc-common)

Modules in this project contain common classes used by the ICGC DCC projects. 

#### Modules
- [Cascading Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-cascading/README.md)
- [Portal Client Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-client/README.md)
- [Portal Core Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-core/README.md)
- [Hadoop Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-hadoop/README.md)
- [Metadata Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-meta/README.md)
- [Testing Libraries](https://github.com/icgc-dcc/dcc-common/blob/develop/dcc-common-test/README.md)

### Configuration Management (dcc-cm)
[Configuration Management GitHub repository](https://github.com/icgc-dcc/dcc-cm)

Automation and configuration management for DCC operational environments. 

This project includes ansible playbooks for provisioning ETL, Portal, Downloader and Submission systems as well
as docker containers for provisioning software on docker hosts. 

### Data Downloader (dcc-downloader)
[Data Downloader GitHub repository](https://github.com/icgc-dcc/dcc-downloader)

Software component for Archiving and Downloading data used by the Data Portal. Contains the client code as well the oozie
workflows for execution on Hadoop. 

### Data Portal (dcc-portal)
[Portal GitHub repository](https://github.com/icgc-dcc/dcc-portal)

Project powering the ICGC Data Portal used for exploring, visualizing, and downloading ICGC data. 

The repository contains the source code which powers the Data Portal's API, UI, as well as the underlying query infrastructure. 

### Docs (dcc-docs)
[Docs GitHub repository](https://github.com/icgc-dcc/dcc-docs)

Source code for this site. Powered by mkdocs and GitHub Pages. 

### ETL (dcc-etl)
[ETL GitHub repository](https://github.com/icgc-dcc/dcc-etl)

Parent project for all the modules that make up the ETL pipeline for transforming project submissions into Data Portal products. 

#### Modules
- [Client](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-client/README.md)
- [Core](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-core/README.md)
- [Annotator](https://github.com/icgc-dcc/dcc-etl/blob/develop/cc-etl-annotator/README.md)
- [Loader](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-loader/README.md)
- [Exporter](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-exporter/README.md)
- [Importer](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-importer/README.md)
- [Summarizer](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-summarizer/README.md)
- [Indexer](https://github.com/icgc-dcc/dcc-etl/blob/develop/dcc-etl-indexer/README.md)

### ID (dcc-id)
[ID GitHub repository](https://github.com/icgc-dcc/dcc-id)

The ID project is used by DCC ETL project to obfuscate sensitive clinical data. It generates surrogate IDs for submitted clinical
data which are then used in the Data Portal. 

### Import (dcc-import)
[Import GitHub repository](https://github.com/icgc-dcc/dcc-import)

Project which contains all the import modules used for importing reference data for use by the ETL pipeline. Imported data
is staged in MongoDB.

#### Modules
- [Client](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-client/README.md)
- [Core](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-core/README.md)
- [Diagram](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-diagram/README.md)
- [Drug](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-drug/README.md)
- [CGC](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-cgc/README.md)
- [Gene Set](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-geneset/README.md)
- [Gene](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-gene/README.md)
- [GO](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-go/README.md)
- [Pathway](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-pathway/README.md)
- [Project](https://github.com/icgc-dcc/dcc-import/blob/develop/dcc-import-project/README.md)

### iobio (dcc-iobio)
[iobio GitHub repository](https://github.com/icgc-dcc/dcc-iobio)

The ICGC customized iobio containers for accessing ICGC cloud based files. Currently contains the
ICGC customized bam.iobio container. 

Major changes over the base iobio container are related to security improvements and integration of 
the ICGC Storage Client. 

### Parent (dcc-parent)
[Parent POM GitHub repository](https://github.com/icgc-dcc/dcc-parent)

This project provides a default configuration for Maven builds for use in ICGC DCC projects. 
# Repositories

A _Data Repository_ is a system that stores and publishes _Data Files_ for download. Such repositories have their own architecture, governing bodies, data access controls, data portals and download clients. Generally speaking, there are two types of repositories:

1.  **Cloud** - offers facilities for compute and storage
2.  **Non-Cloud** - provides storage functionality only

On this page you can find an overview of all of these repositories, their purpose and function, as well as providing links to each repositories' important pages and resources.

All of the ICGC data be searched for using the [ICGC Data Portal](https://dcc.icgc.org/repositories), and downloaded using the [icgc-get](/download/icgc-get) tool. Generally the data is divided into projects.

Every repository has a repository code / id that is used to identify it in the [ICGC API](/portal/api-endpoints/#!/repositories/get) and `icgc-get`.


## [ICGC Clouds](https://dcc.icgc.org/icgc-in-the-cloud)

### [Collaboratory](https://dcc.icgc.org/icgc-in-the-cloud/collaboratory)

Academic research cloud built to house ICGC data.

| Property         | Value                                                                                                                                            |
| :--------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name             | Cancer Genome Collaboratory                                                                                                                      |
| Contact          | <mailto:dcc-support@icgc.org>                                                                                                      |
| ICGC Portal Page | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22Collaboratory%20-%20Toronto%22%5D%7D%7D%7D) |
| Download Client  | [Tarball](/software/download/#score-client), [Docker](https://hub.docker.com/r/overture/score/) |
| Repo Code        | `collaboratory`                                                                                                                                  |

#### Obtaining Data Access
Follow the proceedure outlined at the [DACO page](https://icgc.org/daco).

### [AWS](https://dcc.icgc.org/icgc-in-the-cloud/aws)

Amazon cloud service containing ICGC data.

| Property         | Value                                                                                                                                   |
| :--------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Name             | ICGC Storage Server (hosted at AWS)                                                                                                                 |
| Contact          | <mailto:dcc-support@icgc.org>                                                                                                      |
| ICGC Portal Page | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22AWS%20-%20Virginia%22%5D%7D%7D%7D) |
| Download Client  | [Tarball](/software/download/#score-client), [Docker](https://hub.docker.com/r/overture/score/) |
| Repo Code        | `aws-virginia`                                                                                                                          |

#### Obtaining Data Access
Follow the proceedure outlined at the [DACO page](https://icgc.org/daco).


## [EGA](https://ega-archive.org/)

The European Genome-Phenome Archive ([EGA](https://ega-archive.org/)) is co-managed by [EBI](https://www.ebi.ac.uk/) and [CRG](http://www.crg.eu/). Data can only be downloaded through their EGA download client, but metadata may be viewed on their website. Files are grouped into datasets based on the study they were collected in, and access is granted on a dataset by dataset basis. This repository carries both ICGC and non-ICGC data.

| Property         | Value                                                                                                                                  |
| :--------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Name             | European Genome Archive                                                                                                                |
| Governing Body   | European Bioinformatics Institute (EBI) and Centre for Genomic Regulation (CRG)                                                        |
| Contact          | <mailto:helpdesk@ega-archive.org>                                                                                                      |
| Offical Website  | <https://ega-archive.org>                                                                                                              |
| ICGC Portal Page | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22EGA%20-%20Hinxton%22%5D%7D%7D%7D) |
| Download Client  | [Zipfile](https://ega-archive.org/download/using-ega-download-client#DownloadClient)                                                   |
| Repo Code        | `ega`                                                                                                                                  |

#### Obtaining Data Access
Follow the proceedure outlined at the [DACO page](https://icgc.org/daco). Once approved by ICGC DACO, you will need to contact EGA to have your EGA account set up.


#### Download Client Operation

To operate the EGA download client, follow the instructions [here](https://ega-archive.org/download/using-ega-download-client#DownloadClient).

## [GDC](https://gdc.cancer.gov/)

The Genomic Data Commons is a US government ([NIH](https://www.nih.gov/) / [NCI](https://www.cancer.gov/)) run data repository for cancer genomic information. Notably, the it carries data from The Cancer Genome Atlas (TCGA) and the Therapeutically Applicable Research to Generate Effective Treatments (TARGET). Currently the GDC is the largest single repository of ICGC data. It focuses on studies in the United States.

| Property             | Value                                                                                                                                  |
| :------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Name                 | Genomic Data Commons                                                                                                                   |
| Governing Body       | National Cancer Institute                                                                                                              |
| Contact              | <mailto:support@nci-gdc.datacommons.io>                                                                                                |
| Official Data Portal | <https://portal.gdc.cancer.gov/>                                                                                                      |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22GDC%20-%20Chicago%22%5D%7D%7D%7D) |
| Download Client      | Download the client [here](https://gdc.cancer.gov/access-data/gdc-data-transfer-tool)                                                                 |
| Repo Code            | `gdc`                                                                                                                                  |

#### Obtaining Data Access

To obtain access you must have an eRA commons account, and you must have dbGap access to the data on the GDC you are interested in. Talk to your team leader if you do not have this access. Once this account is set up, you can log in to the GDC **using the your dbGaP credentials**.

<https://gdc.cancer.gov/access-data/obtaining-access-controlled-data>

#### Download Client Operation

Once you or your project leader have attained access to the reseach project,you will need to download access tokens from the gdc data portal. A comprehensive guide on how to use the GDC client is available [here.](https://gdc.cancer.gov/access-data/gdc-data-transfer-tool)

## PDC

The Bionimbus Protected Data Cloud (PDC) is a secure biomedical cloud operated at FISMA moderate as IaaS with an NIH Trusted Partner status for analyzing and sharing protected datasets. The Bionimbus PDC is a collaboration between the University of Chicago Center for Data Intensive Science (CDIS) and the Open Commons Consortium (OCC). The Bionimbus PDC allows users authorized by NIH to compute over human genomic data in a secure compliant fashion.

It is a secure data cloud that stores US [PCAWG](https://dcc.icgc.org/pcawg) data.

| Property             | Value                                                                                                                                   |
| :------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Name                 | Bionimbus Protected Data Cloud                                                                                                          |
| Governing Body       | University of Chicago/Open Commons Consortium                                                                                           |
| Contact              | <mailto:support@opensciencedatacloud.org>                                                                                               |
| Official Website     | <https://bionimbus-pdc.opensciencedatacloud.org>                                                                                        |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories/?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PDC%20-%20Chicago%22%5D%7D%7D%7D) |
| Download Client      | [Amazon Web Services Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)                           |
| Client Documentation | [AWS Guide](http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html)                                                     |
| Repo Code            | `pdc`                                                                                                                                   |

#### Obtaining Data Access

Same as obtaining Data Access to [GDC](#obtaining-data-access_3)

#### Download Client Operation

The data in the PDC can be accessed using the AWS CLI. You will first need to enter your key and secret key with `aws configure` and follow the prompts. This key can be download from the projects tab of the [official PDC website.](https://bionimbus-pdc.opensciencedatacloud.org) Once your credentials have been entered the general structure for download commands is:

```
aws s3 --endpoint-url=https://bionimbus-objstore-cs.opensciencedatacloud.org/ cp $DATA_PATH $OUTPUT_DIR
```

Where the data path can be retrieved from the ICGC data portal by selecting the download manifest action on the pdc file copy, and the output directory is where you want to save the file on your local computer.


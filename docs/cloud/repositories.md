# Repositories

The data for the ICGC resides in many data repositories around the world. These repositories have their own architecture, governing bodies, data access controls, data portals and download clients. On this page you can find an overview of all of these repositories, their purpose and function, as well as providing links to each repositories important pages and resources. 

All of the ICGC data be searched for using the ICGC data portal, and downloaded using the icgc-get tool. Generally the data is divided into projects.

Every repository has a repository code that is used to identify it in the ICGC api and icgc-get.

## Common data access control bodies
 
ICGC projects have two separate access control bodies. US based projects are controlled by the eRA Commons and dbGap, while non-US projects are authorized by the ICGC Data Access Compliance Office (DACO) 

### ICGC DACO
Follow the proceedure outlined at [the DACO page.](https:/icgc.org/daco)

Once your DACO access application is completed and approved, your email will become associated with an OpenID, and you will be granted access to the ICGC controlled access datasets available through the EBI’s EGA repository and ICGC Data Portal 

### eRA Commons
Many of the repositories that participate in the ICGC program require an account with the [electronic Research Administration](https://public.era.nih.gov/commons/commonsInit.do) as a fist step in access authentication process. If your organization has not used the eRA commons before you will need to [register your organization.](https://era.nih.gov/commons/faq_commons.cfm#II1) This process will need your organization's signing offcial to participate.

Support for the eRA may be reached at <http://grants.nih.gov/support>.  

### dbGaP
One of the widely used access control system is [database of Genotypes and Phenotypes Authorized Access program](https://dbgap.ncbi.nlm.nih.gov/aa/wga.cgi?page=login). dbGaP requires an eRA account to log in and register. If you need to register your organization you will need your organization's signing offical to participate in the registration process.

If you encounter difficulties, [the dbGaP help desk](https://dbgap.ncbi.nlm.nih.gov/aa/wga.cgi?page=email&filter=from&from=login) is available.

## Architecture types used by multiple repositories

### GNOS

GNOS is a commonly used commercially available genomic data database. The Pancancer Analysis of Whole Genomes study is an international research project which uses the GNOS software to host there data.  Data from this project is stored on multiple smaller repositories around the world. Each of these repositories uses the same architecture and download client, but have their own data access controller and are not synchronized. 

GNOS is currently being phased out by the ICGC in favour of newer systems.

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes |
| Contact              | <help@annaisystems.com> |
| Official Website      | <https://pancancer-token.annailabs.com/>|
| Download Client      | [GeneTorrent](https://annaisystems.zendesk.com/hc/en-us/articles/205449647-GeneTorrent-Downloads)|
| Client Documentation | [Manual](https://annai.egnyte.com/dl/H87r6b0MCS)|

#### Obtaining Data Access

Provided you have the proper permissions from DACO, you can download access keys for GNOS repositories from [the Annai Systems site](https://pancancer-token.annailabs.com/) using the "Sign in with Google" or "Sign in with OpenID" options depending on what email address is associate with your DACO account.  If you have forgotten which email the account is tied to, contact the help desk at <help@annaisystems.com>.

#### Download Client Operation

The manual for the operation of the Genetorrent client can be found at <https://annai.egnyte.com/dl/H87r6b0MCS>.  Remember to prepend all download requests with the client specific data path provided in the table above.  

### ICGC Storage Repositories

| | Properties|
|:---------------------| ----------------
| Name                 | ICGC Storage Repostories  |
| Governing Body       | International Cancer Genome Consortium |                                                             
| Contact              | <dcc-support@icgc.org> |
| Official Website      | <https://dcc.icgc.org> |
| Download Client    | [Tarball](/software/binaries/#storage-client) [Docker](https://hub.docker.com/r/icgc/icgc-storage-client/)|

#### Obtaining Data Access
A login to the ICGC data portal will be provided upon the completion of a DACO application.  

#### Download Client Operation
The ICGC download clients need access tokens to authenticate your download permissions. These tokens can be obtained from the token manager tab of the ICGC data portal once you have logged into the portal. Keep in mind that you must define the scope of your token based on which datasets you need access for.

For general operation of the client, follow the [instructions](/cloud/guide/)

### [Collaboratory](https://dcc.icgc.org/icgc-in-the-cloud/collaboratory)

Academic research cloud built to house ICGC data.  Currently in Beta test and only houses non-US data, but the goal for this repository is to host all of the ICGC data and gathering all newly submitted ICGC data.

| | Properties|
|:---------------------| ----------------
| Name                 | Cancer Genome Collaboratory |
| Type                 | [ICGC Storage](#icgc-storage-repositories) |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22Collaboratory%20-%20Toronto%22%5D%7D%7D%7D)|
|Repo Code           | `collaboratory`

### [AWS](https://dcc.icgc.org/icgc-in-the-cloud/aws)

Amazon cloud service containing ICGC data.

| | Properties|
|:---------------------| ----------------
| Name                 | ICGC Storage Server |
| Type                 | [ICGC Storage](#icgc-storage-repositories) |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22AWS%20-%20Virginia%22%5D%7D%7D%7D)|
|Repo Code           | `aws-virginia` |

### [EGA](https://www.ebi.ac.uk/ega/about)

The EBI's European Genome-Phenome Archive.  Data can only be downloaded through their EGA download client, but metadata may be viewed on their website. Files are grouped into datasets based on the study they were collected in, and access is granted on a dataset by dataset basis. This repository carries both ICGC and non-ICGC data. 

| | Properties |
|:-------------------- | ----------------
| Name                 | European Genome Archive |
| Governing Body       | European Bioinformatics Institute |                                                                                                           
| Contact              | <ega-helpdesk@ebi.ac.uk> |
| Offical Website      | <https://www.ebi.ac.uk/ega/home> |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22EGA%20-%20Hinxton%22%5D%7D%7D%7D) |
| Download Client        | [Zipfile](https://www.ebi.ac.uk/ega/about/your_EGA_account/download_streaming_client#download) |
| Repo Code | `ega`


#### Obtaining Data Access
To access controlled-access data at the EGA you need to be granted access after completing a DACO application. Once approval is obtained from DACO, your user account will be activated and you will have access to controlled access datasets in the ICGC Data Portal and EBI’S EGA repository.  Your account will use the same credentials as your OpenID account.

#### Download Client Operation
To operate the EGA download client, follow the instructions here:
<https://www.ebi.ac.uk/ega/about/your_EGA_account/download_streaming_client>.

### [GDC](https://gdc.nci.nih.gov)

The Genomic Data Commons is a US government run data repository for cancer genomic information. It carries data from The Cancer Genome Atlas(TCGA) and the Therapeutically Applicable Research to Generate Effective Treatments(TARGET).  Currently the largest repository of ICGC data. Focused on studies in the United States.

| | Properties|
|:---------------------| ----------------
| Name                 | Genomic Data Commons|
| Governing Body       | National Cancer Institute |
| Contact              | <support@nci-gdc.datacommons.io>|
| Official Data Portal  | <https://gdc-portal.nci.nih.gov/>|
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22GDC%20-%20Chicago%22%5D%7D%7D%7D) |
| Download Client       | [Binaries](https://gdc.nci.nih.gov/access-data/gdc-data-transfer-tool) |
| Repo Code | `gdc` |

#### Obtaining Data Access
To obtain access you must have an eRA commons account, and you must have dbGap access to the data on the GDC you are interested in.  Talk to your team leader if you do not have this access.  Once this account is set up, you can log in to the GDC using the your dbGaP credentials.

<https://gdc.nci.nih.gov/access-data/obtaining-access-controlled-data>

#### Download Client Operation
Once you or your project leader have attained access to the reseach project,you will need to download access tokens from the gdc data portal. A comprehensive guide on how to use the GDC client is available [here.]
(https://gdc-docs.nci.nih.gov/Data_Transfer_Tool/Users_Guide/Preparing_for_Data_Download_and_Upload/)

### PCAWG Barcelona 

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Barcelona |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-barcelona` 
| ICGC Data Portal | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Barcelona%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-bsc.annailabs.com/cghub/data/analysis/download/


### PCAWG Chicago (ICGC)

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Chicago<sup>[\*](#chicago_note)</sup> |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-chicago-icgc` 
| ICGC Portal Page | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Chicago%20(ICGC)%22%5D%7D%7D%7D)
| Data Path | https://gtrepo-osdc-icgc.annailabs.com/cghub/data/analysis/download/

### PCAWG Chicago (TCGA)
 
| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Chicago<sup>[\*](#chicago_note)</sup> |
| Type                 | [GNOS](#gnos) |
| Repo Code            | `pcawg-chicago-tcga` |
| ICGC Portal Page| [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Chicago%20(TCGA)%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-osdc-tcga.annailabs.com/cghub/data/analysis/download/

### PCAWG Heidelberg  

| | Properties
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Heidelberg |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-heidelberg` 
| ICGC Portal Page |[Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Heidelberg%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-dkfz.annailabs.com/cghub/data/analysis/download/

### PCAWG London 

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes London |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-london`
| ICGC Data Portal | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20London%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-ebi.annailabs.com/cghub/data/analysis/download/

### PCAWG Tokyo 

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Tokyo |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-tokyo` 
| ICGC Data Portal | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Tokyo%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-riken.annailabs.com/cghub/data/analysis/download/

### PCAWG Seoul 

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Seoul |
| Type                 | [GNOS](#gnos) |
| Repo Code | `pcawg-seoul` 
| ICGC Data Portal| [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Seoul%22%5D%7D%7D%7D) 
| Data Path | https://gtrepo-etri.annailabs.com/cghub/data/analysis/download/

### PCAWG Santa-Cruz

| | Properties|
|:---------------------| ----------------
| Name                 | Pancancer Analysis of Whole Genomes Santa-Cruz |
| Type                 | [GNOS](#gnos) |
|Repo Code | `pcawg-cghub`
| ICGC Data Portal | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Santa%20Cruz%22%5D%7D%7D%7D)
| Data Path | https://cghub.ucsc.edu/cghub/data/analysis/download/

<a id=chicago_note></a>\* Two separate PCAWG repositories are hosted in Chicago, each for a different research project.

### PDC
Secure data cloud that stores US PCAWG data.  

| | Properties|
|:---------------------| ----------------
| Name                 | Bionimbus Protected Data Cloud |
| Governing Body       | University of Chicago/Open Commons Consortium|
| Contact              | <support@opensciencedatacloud.org>|
| Official Website      | <https://bionimbus-pdc.opensciencedatacloud.org>|
| ICGC Portal Page     | Not yet available |
| Download Client      | [Amazon Web Services Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)|
| Client Documentation | [AWS Guide](http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html) |
| Repo Code | `pdc`|

#### Obtaining Data Access
You can apply for access to the PDC by following [this link.](https://bionimbus-pdc.opensciencedatacloud.org/pre_apply/?next=/apply/) You will need both an eRA Commons account and dbGAP access to the ICGC PCAWG. Once your application is submitted, you will be contacted by a representative of the PDC who will provide you with legal documents and required training courses.
  
#### Download Client Operation

The data in the PDC can be accessed using the AWS CLI. You will first need to enter your key and secret key with `aws configure` and follow the prompts.  This key can be download from the projects tab of the [official PDC website.](https://bionimbus-pdc.opensciencedatacloud.org)  Once your credentials have been entered the general structure for download commands is 
```
aws s3 --endpoint-url=https://bionimbus-objstore-cs.opensciencedatacloud.org/ cp $DATA_PATH $OUTPUT_DIR
```

Where the data path can be retrieved from the ICGC data portal by selecting the download manifest action on the pdc file copy, and the output directory is where you want to save the file on your local computer.
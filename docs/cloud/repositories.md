##Overview

The data for the ICGC resides in many data repositories around the world.  These repositories have their own architcture, governing bodies, access controls, data portals and download clients.  On this page you can find an overview of all of these repositories, their purpose and function, as well as providing links to each repositories important pages and resources.

## Common access control institutions
### DACO
Follow the proceedure outlined at the DACO page <https://icgc.org/daco>.

Once your DACO access application is completed, your email will become associated with an OpenID, and you will be given a username and password for the EGA and ICGC.

### eRA Commons
Many of the repositories that participate in the ICGC program require an account with the [electronic Resarch Adminstration](https://public.era.nih.gov/commons/commonsInit.do) as a fist step in access authentication process. If your organization has not used the eRA commons befor you will need to [register your organization.](https://era.nih.gov/commons/faq_commons.cfm#II1) This process will need your organzations signing offical to participate.

Support for the eRA may be reached at <http://grants.nih.gov/support>.  

### dbGaP
One of the widely used access control system is [databse of genotypes and phenotypes Authorized Access program](https://dbgap.ncbi.nlm.nih.gov/aa/wga.cgi?page=login). dbGaP requires an eRA account to log in and register. If you need to register your organization you will need your organzation's signing offical to participate in the registration process.

If you encounter difficulties, [the dbGaP help desk](https://dbgap.ncbi.nlm.nih.gov/aa/wga.cgi?page=email&filter=from&from=login) is available.

## ICGC Storage

| Name                 | Cancer Genome Collaboratory |
|:---------------------| ----------------
| Governing Body       | International Cancer Genome Consortium |                                                             
| Contact              | <dcc-support@icgc.org> |
| Offical Website      | <https://dcc.icgc.org> |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22Collaboratory%20-%20Toronto%22%5D%7D%7D%7D)|
| Download Client    | [Tarball](https://dcc.icgc.org/software) [Docker](https://hub.docker.com/r/icgc/icgc-storage-client/)|

### List of Repositories
#### [Collaboratory](https://dcc.icgc.org/icgc-in-the-cloud/collaboratory)

Academic research cloud built to house ICGC data.  Currently in Beta test.

#### [AWS](https://dcc.icgc.org/icgc-in-the-cloud/aws)

Amazon cloud service containing ICGC data.

### Obtaining Data Access
To obtain access to these repositories follow the proceedure outlined at the DACO page
<https://icgc.org/daco>.

### Download Client Operation
The ICGC download clients need access tokens to authenticate your download permissions.  These tokens can be obtained from the token manager tab of the icgc data portal once you have logged into the portal.  Keep in mind that you must define the scope of your token based on which datasets you need access for.

For general operation of the client, follow the instructions here:
<http://docs.icgc.org/cloud/guide/>

## [EGA](https://www.ebi.ac.uk/ega/about)

The European Genome Association.  Data can only be downloaded through their EGA download client, but metatdata may be viewed on their website. Files are grouped into datasets based on the study they were collected in, and access is granted on a dataset by dataset basis. This repository carries both ICGC and non-ICGC data. 

| Name                 | European Genome Archive |
|:---------------------| ----------------
| Governing Body       | European Bioinformatics Institute |                                                                                                           
| Contact              | <ega-helpdesk@ebi.ac.uk> |
| Offical Website      | <https://ega-archive.org/> |
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22EGA%20-%20Hinxton%22%5D%7D%7D%7D) |
| Download Client        | [Zipfile](https://www.ebi.ac.uk/ega/about/your_EGA_account/download_streaming_client#download) |


### Obtaining Data Access
To access the EGA data you need to complete a DACO application. Login using the username and password provided by your DACO application, which will automatically have access permissions to all ICGC data you have access to. 

### Download Client Operation
To operate the EGA downlod client, follow the instructions here:
<https://www.ebi.ac.uk/ega/about/your_EGA_account/download_streaming_client>.

## [GDC](https://gdc.nci.nih.gov)

US government run data repository for cancer genomic information.  Carries data from The Cancer Genome Atlas and the Therapeutically Applicable Resarch to Generate Effective Treatments.  Currently the largest dataset of ICGC data.  Focused on studies in the United States.

| Name                 | Genomic Data Commons|
|:---------------------| ----------------
| Governing Body       | National Cancer Institute |
| Contact              | <support@nci-gdc.datacommons.io>|
| Offical Data Portal  | <https://gdc.nci.nih.gov>|
| ICGC Portal Page     | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22GDC%20-%20Chicago%22%5D%7D%7D%7D) |
| Download Client       | [Binaries](https://gdc.nci.nih.gov/access-data/gdc-data-transfer-tool) |

### Obtaining Data Access
To obtain access you must have an eRA commons account, and you must have dbGap access to the data on the GDC you are interested in.  Talk to your team leader if you do not have this access.  Once this account is set up, you can log in to the GDC using the your dbGaP credentials.

<https://gdc.nci.nih.gov/access-data/obtaining-access-controlled-data>

### Download Client Operation
Once you or your project leader have attained access to the reseach project,you will need to download access tokens from the gdc data portal. A comprehensive guide on how to use the GDC client is available here:
<https://gdc-docs.nci.nih.gov/Data_Transfer_Tool/Users_Guide/Preparing_for_Data_Download_and_Upload/>.

## GNOS

GNOS is a commonly used proprietory genomic data database. The Pancancer Anayisis of Whole Genomes study is an international resarch project which uses the GNOS software to host there data.  Data from this project is stored on multiple smaller repositories around the world. Each of these respositories uses the same architecture and download client, but have their own data access controller and are not synchronized. 

General Information

| Name                 | Pancancer Analysis of Whole Genomes |
|:---------------------| ----------------
| Contact              | <help@annaisystems.com> |
| Offical Website      | <https://pancancer-token.annailabs.com/>|
| Download Client      | [GeneTorrent](https://annaisystems.zendesk.com/hc/en-us/articles/205449647-GeneTorrent-Downloads)|
| Client Documentation | [Manual](https://annai.egnyte.com/dl/H87r6b0MCS)|

### List of Repositories
Below is the list of supported GNOS repositories.  Use the code value when searching for a repository using icgc-get.

| Location  | Code  |  ICGC Portal Page |  Path |
| ----------| ------| -----------------|------- 
| Chicago (ICGC)<sup>\*</sup>| pcawg-chicago-icgc | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Chicago%20(ICGC)%22%5D%7D%7D%7D) | https://gtrepo-osdc-icgc.annailabs.com/cghub/data/analysis/download/
 Chicago (TCGA)<sup>\*</sup> | pcawg-chicago-tcga | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Chicago%20(TCGA)%22%5D%7D%7D%7D) | https://gtrepo-osdc-tcga.annailabs.com/cghub/data/analysis/download/
 Heidelberg  | pcawg-heidelberg |[Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Heidelberg%22%5D%7D%7D%7D) | https://gtrepo-dkfz.annailabs.com/cghub/data/analysis/download/
 London      | pcawg-london | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20London%22%5D%7D%7D%7D) | https://gtrepo-ebi.annailabs.com/cghub/data/analysis/download/
 Tokyo       | pcawg-tokyo | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Tokyo%22%5D%7D%7D%7D) | https://gtrepo-riken.annailabs.com/cghub/data/analysis/download/
 Seoul  | pcawg-seoul | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Seoul%22%5D%7D%7D%7D) | https://gtrepo-etri.annailabs.com/cghub/data/analysis/download/
 Barcelona | pcawg-barcelona | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Barcelona%22%5D%7D%7D%7D) | https://gtrepo-bsc.annailabs.com/cghub/data/analysis/download/
 Santa-Cruz| pcawg-cghub | [Portal](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22PCAWG%20-%20Santa%20Cruz%22%5D%7D%7D%7D)| https://cghub.ucsc.edu/cghub/data/analysis/download/

\* Two seperate repoisitories are hosted in Chicago, each for a different research project.

### Obtaining Data Access

Provided you have the proper permissions from DACO, you can download access keys for GNOS repositories from 
<https://pancancer-token.annailabs.com/> using the "Sign in with Google" or "Sign in with OpenID" options depending on what email address is associate with your DACO account.  If you have forgotten which email the account is tied to, contact the help desk at <help@annaisystems.com>.

### Download Client Operation

The manual for the operation of the Genetorrent client can be found at <https://annai.egnyte.com/dl/H87r6b0MCS>.  Remember to prepend all download requests with the client specific data path provided in the table above.  

## PDC
Secure data cloud that stores PCAWG data.  

| Name                 | Bionimbus Protected Data Cloud |
|:---------------------| ----------------
| Governing Body       | University of Chicago/Open Commons Consortium|
| Access Control       | [eRA](https://bionimbus-pdc.opensciencedatacloud.org/pre_apply/?next=/apply/)|
| Contact              | <support@opensciencedatacloud.org>|
| Offical Website      | <https://bionimbus-pdc.opensciencedatacloud.org>|
| ICGC Portal Page     | Not yet available |
| Download Client      | [Amazon Web Services Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)|
| Client Documentation | [AWS Guide](http://docs.aws.amazon.com/cli/latest/userguide/using-s3-commands.html) |

### Obtaining Data Access
You can apply for access to the PDC by following the link below.  You will need both an eRA Commons account, and either dbGAP access or a contract.   Once this is done, you will be contacted by a representitive of the PDC who will provide you with legal documents and required training courses.
  
<https://bionimbus-pdc.opensciencedatacloud.org/pre_apply/?next=/apply/>

### Download Client Operation

The data in the PDC can be accessed using the AWS CLI. You will first need to enter your key and secret key with `aws configure` and follow the prompts.  This key can be download from the projects tab of the [offical PDC website.](https://bionimbus-pdc.opensciencedatacloud.org)  Once your credentials have been entered the general structure for download commands is 
```
aws s3 --endpoint-url=https://bionimbus-objstore.opensciencedatacloud.org/ cp $DATA_PATH $OUTPUT_DIR
```

Where the data path can be retrieved from the ICGC data portal by selecting the download manifest action on the pdc file copy, and the output directory is where you want to save the file on your local computer.
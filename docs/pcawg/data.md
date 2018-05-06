# PCAWG Data Download

### Data Repositories

Data produced by the PCAWG study has been deposited in multiple long-term storage
systems. This table gives you an overview where data for different types can be downloaded.

| Repository | Storage type | Data types | Projects |
| --- | --- | --- | --- |
| Cancer Genome Collaboratory (<a href="https://cancercollaboratory.org"><i class="fa-no-icon"></i>Collab</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls | All Non-US projects |
| European Genome-phenome Archive (<a href="https://ega-archive.org"><i class="fa-no-icon"></i>EGA</a>) | Data Archive | Aligned WGS, RNA-Seq | All Non-US projects |
| Amazon Web Service (<a href="https://aws.amazon.com"><i class="fa-no-icon"></i>AWS</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls | Subset of Non-US projects |
| ICGC Data Portal (<a href="https://dcc.icgc.org"><i class="fa-no-icon"></i>Portal</a>) | HTTP Accessible File | Downstream analysis results, cell line benchmarking, QC, reference genome etc | All Non-US projects |
| Protected Data Cloud (<a href="https://bionimbus-pdc.opensciencedatacloud.org"><i class="fa-no-icon"></i>PDC</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls, downstream analysis results | All US projects (TCGA projects) |

*Note:* Subset of Non-US projects with policy permits data to be hosted at AWS can be downloaded
from <a href="aws_projects.txt"><i class="fa-no-icon"></i>here</a>.


### Apply for Data Access

Most of the PCAWG data are controlled access that are subjected to data usage agreement. Please follow instructions at [_ICGC DACO_](https://icgc.org/daco) to apply for access to controlled data of all non-US projects. For US TCGA portion of the PCAWG data, apply for access through [_dbGaP_](https://dbgap.ncbi.nlm.nih.gov).


### Browse / Search for PCAWG Data

Although PCAWG results are physically stored in multiple repositories, the ICGC Data Portal
provides a one-stop-shop entry point to browse / search for all PCAWG data.


#### Browse PCAWG Data

In the portal's Data Release section, there is a dedicated [_PCAWG_](https://dcc.icgc.org/releases/PCAWG)
directory where you can browse study-wide datasets (such as cell line benchmarking,
QC, reference sequences) and downstream analysis results (usually associated with
PCAWG publications).

The data portal presents a simple interface allowing users to navigate through the
entire [_PCAWG_](https://dcc.icgc.org/releases/PCAWG) data directory. Most of the data
directories contain a README file that
gives a summary of data content, and provides additional information about how to
access related data in external systems. For example, the README in
[germline_variations](https://dcc.icgc.org/releases/PCAWG/germline_variations) describes
how the germline callset was generated, and where ICGC portion and TCGA portion
of the results can be downloaded.

#### Search for PCAWG data

A faceted search interface at the ICGC portal offers an easy way to interactively search
for PCAWG data of your interest.

This particular [query](https://icgc.org/ZEA) set a filter on *Study = 'PCAWG'*, it returns
all PCAWG data objects. Results are listed in a table with File ID, Donor ID, Repository etc
important information. You can add more filters as needed, for examples, adding *RNA-Seq* in
*Experimental Strategy*, will further narrow down the resulting data objects to *PCAWG RNA-Seq*.
[Here](https://icgc.org/ZEd) is the new query likes like. If you prefer to download data from
certain repositories, you can select the desired repositories as needed.

Once satisfied with resulting objects you'd like to download, click on the *Download Files* button
which will bring up a dialog window displaying summary of file counts and total size broken
down by repository. As many files are distributed in multiple locations, you may want to prioritize
on certain repositories. You may enable *Remove duplicate files* as well, it will remove files in a
repository that already presented in a previous one. Finally, you can click on *Download Manifest*
which will download a tarball with manifest files each for a chosen repository. Manifest file format
differs from one repository to the other. Manifest file can be used with corresponding client tool
to actually download the data.

![](images/manifest-download.png)

The following section will cover how to perform actual data download in different repositories
using the downloaded manifest files.


### Download Data

#### Download from ICGC Data Portal
As mentioned earlier, data files hosted in ICGC Data Portal can be browsed in a web browser,
downloading specific file of interest is a matter of a mouse click.

Open access data hosted under the _PCAWG_ directory and its subdirectories can be downloaded
without logging in. However, you must login to the Data Portal before you are able to download or
even see the controlled access data files. Click on the _Login_ button on the top right corner,
and follow steps. Once successfully logged in, you should be able to see two green icons
(beside your account name) like shown below on the top row of the portal (assuming you have
already been approved by ICGC DACO for accessing controlled data).

![](images/daco-cloud-access.png)

Once logged in, you will be able to browse the [_PCAWG_](https://dcc.icgc.org/releases/PCAWG)
directory as usual with controlled access data files visible and downloadable.

You may also use the _Token Manager_ (as shown below) to create access token used to download
data from Collaboratory and AWS (see more details on how in the next section). Tokens expire
in a year, you can delete a token before expiry at anytime.

![](images/data-download-token.png)


#### Download from EGA
After getting your ICGC DACO approval, you will need to get in touch with [_EGA_](mailto:ega-helpdesk@ebi.ac.uk) to have your EGA account set up. You will then be
able to download any EGA Datasets that are under ICGC DACO.

For EGA download, the manifest file you download from ICGC Data Portal is actually a shell
script with a few variables need to be
replaced by actual values, such as, username, password, output_dir etc. The script utilizes
EGA Java download client which is documented with more details
[here](https://ega-archive.org/download/using-ega-download-client). You may modify the script
to suit your own need. For example, if download involves too many files it could be inefficient
to request all of them at once. You may change the script so that it requests one file at a time,
finish downloading and decrypting one file, then move on to the next file.


#### Download from Collaboratory or AWS
Download from Collaboratory or AWS uses the same manifest file, it is a TSV file with one
row per file. The manifest file is used by ICGC Storage Client (should this be SCORE now?)
to perform the actual download. More details about how to use ICGC Storage Client
can be found here.

Important note about downloading PCAWG data from Collaboratory and AWS: the download
client must be run in the same environment as the object storage system. That means to
download from Collaboratory, the ICGC Storage Client **must** be run on a virtual
machine (VM) that you launched within the Collaboratory cloud platform; to download from
AWS (N. Virginia), the ICGC Storage Client **must** be run on a AWS VM in the N. Virginia
availability zone.


#### Download from PDC
PDC stores PCAWG TCGA data in OpenStack Ceph object store, direct download access to Ceph
buckets is provided to authorized users.

OpenStack Ceph is compatible with AWS S3, you can use *awscli* client to download Ceph objects.
To install *awscli*, please follow instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/installing.html).

Next, you will need to get credentials from PDC. Follow the _Login from NIH_ button on this page: [https://bionimbus-pdc.opensciencedatacloud.org/datasets](https://bionimbus-pdc.opensciencedatacloud.org/datasets) you will be directed to login via NIH iTrust. Upon success login at NIH, you will be redirected
back to PDC where you can now create access key.

When you click on *Create access key* button, a popup will show the new access key id and
secret key, please copy them and add them to the *awscli* credentials file, usual at here:
`~/.aws/credentials` depending on your system. The file may look like below:

```
[pdc]
aws_access_key_id = your_pdc_access_key_id
aws_secret_access_key = your_pdc_secret_access_key
```
Please edit it to include your own key ID and secret key.

Manifest file for PDC is actually a shell script containing *aws* cli commands, one line per file.
One line may look like this:
`aws --profile pdc --endpoint-url https://bionimbus-objstore-cs.opensciencedatacloud.org s3 cp s3://pcawg-tcga-brca-us/f99f7e36-8b6f-5cf0-854f-4b832d5962a4 .`

You may execute the above line directly on the command line to download the object to local.

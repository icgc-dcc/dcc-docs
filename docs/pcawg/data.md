# PCAWG Data Download

### Data Repositories

Data produced by the PCAWG study has been deposited into multiple long-term storage
systems. This table gives you an overview where data for different types can be downloaded.

| Repository | Storage type | Data types | Projects |
| --- | --- | --- | --- |
| ICGC Data Portal (<a href="https://dcc.icgc.org"><i class="fa-no-icon"></i>Portal</a>) | Web Accessible File | Downstream analysis results, cell line benchmarking, QC, reference genome etc | All Non-US projects |
| Cancer Genome Collaboratory (<a href="https://cancercollaboratory.org"><i class="fa-no-icon"></i>Collab</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls | All Non-US projects |
| Amazon Web Service (<a href="https://aws.amazon.com"><i class="fa-no-icon"></i>AWS</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls | Subset of Non-US projects |
| European Genome-phenome Archive (<a href="https://ega-archive.org"><i class="fa-no-icon"></i>EGA</a>) | Data Archive | Aligned WGS, RNA-Seq | All Non-US projects |
| Protected Data Cloud (<a href="https://bionimbus-pdc.opensciencedatacloud.org"><i class="fa-no-icon"></i>PDC</a>) | Data Object | Aligned WGS, RNA-Seq, variant calls, downstream analysis results | All US projects (TCGA projects) |

*NOTE:* Subset of Non-US projects with policy permits data to be hosted at AWS can be found
from <a href="aws_projects.txt"><i class="fa-no-icon"></i>here</a>.


### Apply for Data Access

Most of the PCAWG data is controlled access that is subject to data usage agreement. Please follow instructions at [_ICGC DACO_](https://icgc.org/daco) to apply for access to controlled data of all non-US projects. For US TCGA portion of the PCAWG data, apply for access through [_dbGaP_](https://dbgap.ncbi.nlm.nih.gov).


### Browse / Search for PCAWG Data

Although PCAWG results are physically stored in multiple repositories, the ICGC Data Portal
provides a one-stop-shop entry point to browse / search for all PCAWG data.


#### Browse PCAWG Data

In the portal's Data Release section, there is a dedicated [_PCAWG_](https://dcc.icgc.org/releases/PCAWG)
directory where you can browse study-wide datasets (such as cell line benchmarking,
QC, reference sequences) and downstream analysis results (usually associated with
PCAWG publications).

The data portal presents a simple interface allowing users to navigate through the
entire [_PCAWG_](https://dcc.icgc.org/releases/PCAWG) data directory. Besides the data files,
most of the sub-directories contain a README file that
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
[Here](https://icgc.org/ZEd) is the new, resulting query. If you prefer to download data from
certain repositories, you can select the desired repositories as needed.

After identifying files of interest, click on the *Download Files* button
which will bring up a dialog window displaying a summary of file counts and total size broken
down by repository. As many files are distributed in multiple locations, you may want to prioritize
on certain repositories. You may enable *Remove duplicate files* as well, it will remove files that exist in a
repository that was already presented. Finally, you can click on *Download Manifest*
which will download a tarball of manifest files, one for each chosen repository.

![](images/manifest-download.png)

Manifest file format differs from one repository to the other, and thus each manifest
must be used with the corresponding client tool to actually download the data.
The following section will cover how to perform data download from different
repositories using manifest files.


### Download Data

#### Download from ICGC Data Portal
As mentioned earlier, data files hosted in ICGC Data Portal can be browsed in a web browser,
downloading specific file of interest is a matter of a mouse click.

Open access data hosted under the _PCAWG_ directory and its subdirectories can be downloaded
without logging in. However, you must login to the Data Portal before you are able to download or
even see the controlled access data files. Click on the _Login_ button on the top right corner,
and follow steps. Once successfully logged in, you should be able to see two green icons
(beside your account name) like shown below on the top row of the portal. This assumes that you have
already been approved by ICGC DACO for accessing controlled data.

![](images/daco-cloud-access.png)

Once logged in, you will be able to browse the [_PCAWG_](https://dcc.icgc.org/releases/PCAWG)
directory as usual with controlled access data files visible and downloadable.

#### Retrieve Access Tokens from ICGC Data Portal

When logged in you should be able to use the _Token Manager_ (as shown above) to create
**access token** for yourself to be used to download
data from *Collaboratory* and *AWS* (see more details on how in the next section). Tokens expire
in a year, you can delete a token before expiry at anytime.

![](images/data-download-token.png)


#### Download from Collaboratory or AWS
ICGC Storage Client is used to download from *Collaboratory* or *AWS*
with a TSV manifest file containing necessary information about data objects to be downloaded.

The latest version of ICGC Storage Client can be downloaded from [here](https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/1.0.23). If you are on a Linux
system and already have Java 8 installed, you can have ICGC Storage Client ready to use with the following commands:
```
wget -O icgc-storage-client-1.0.23.tar.gz https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/1.0.23

tar xvzf icgc-storage-client-1.0.23.tar.gz

echo export PATH=$(pwd)/icgc-storage-client-1.0.23/bin:$PATH >> ~/.bashrc

source ~/.bashrc

# you will then be able to use it by running the following command anywhere is the system
icgc-storage-client
```

Before you can actually download controlled access data, you will need to add the
ICGC access token in the following file:
`icgc-storage-client-1.0.23/conf/application.properties`. In the file, you should see a line like shown below. Uncomment it, add your access token, and save the file.
```
# accessToken=your_collab_access_token
```
Assuming that you downloaded a manifest file (`manifest.collaboratory.1525977569066.tsv`)
from ICGC data portal in the previous step, the manifest will contain files from Collaboratory.
The following command will download these files to the current directory:
```
icgc-storage-client --profile collab download --manifest manifest.collaboratory.1525977569066.tsv --output-dir .
```

**NOTE:** when downloading PCAWG data from Collaboratory or AWS, the download
client must run in the same environment as the object storage system. That means to
download from Collaboratory, the ICGC Storage Client **must** run on a virtual
machine (VM) that you launched within the Collaboratory cloud platform; to download from
AWS (N. Virginia), the ICGC Storage Client **must** run on an AWS VM in the *N. Virginia*
availability zone.


#### Download from EGA
After getting your ICGC DACO approval, you will need to get in touch with [_EGA_](mailto:ega-helpdesk@ebi.ac.uk) to have your EGA account set up. You will then be
able to download any EGA Datasets that are under the control of the ICGC DACO.

For EGA data download, the manifest file you download from ICGC Data Portal is actually a shell
script with a few variables need to be
replaced by actual values, such as, username, password, output_dir etc. The script utilizes
EGA Java download client which is documented with more details
[here](https://ega-archive.org/download/using-ega-download-client). You may modify the manifest script
to suit your own need. For example, if download involves too many files it could be inefficient
to request all of them at once. You may change the script so that it requests one file at a time,
finish downloading and decrypting one file, then move on to the next file.


#### Download from PDC
PDC stores PCAWG TCGA data in Cleversafe object store, direct download access to Cleversafe
buckets is provided to authorized users.

Cleversafe is compatible with AWS S3, you can use *awscli* client to download objects.
To install *awscli*, please follow instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/installing.html).

Next, you will need to get credentials from PDC. Follow the _Login from NIH_ button on this page: [https://bionimbus-pdc.opensciencedatacloud.org/datasets](https://bionimbus-pdc.opensciencedatacloud.org/datasets) you will be directed to login via NIH iTrust. Upon successful login at NIH, you will be redirected back to PDC where you can now create access key. If you see `TCGA-PCAWG` is in the project list and you have `download` right, you can proceed with generating access key.

When you click on *Create access key* button, a popup will show the new access key id and
secret key. Copy the keys and add them to the *awscli* credentials file, which, depending on your system, is usually at here: `~/.aws/credentials`. The file may look like below:

```
[pdc]
aws_access_key_id = your_pdc_access_key_id
aws_secret_access_key = your_pdc_secret_access_key
```

Please edit it to include your own key ID and secret key.

The manifest file that you downloaded from ICGC Data Portal for PDC is actually a shell script containing
*aws* cli commands, one line per file. One line may look like this:
`aws --profile pdc --endpoint-url https://bionimbus-objstore-cs.opensciencedatacloud.org s3 cp s3://pcawg-tcga-brca-us/f99f7e36-8b6f-5cf0-854f-4b832d5962a4 .`

You may execute the above line directly on the command line to download the object to local.
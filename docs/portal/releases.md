# Data Releases

## Overview

A DCC data release is a curated data set produced from clinical and experimental data submitted through the ICGC Data Submission site. Such data releases happen on average three times a year and are cumulative in nature. Each release is denoted by a number, such as _ICGC 20_ or _Release 20_.

[![DCC Data Releases](images/dcc-data-releases.png)](images/dcc-data-releases.png "Click on the image to see it in full.")

The *DCC Data Releases* page is where you can browse and download archive data files for every DCC data release in the past. It can be located by clicking/tapping the blue disk icon on the top of the Data Portal site.

## Organization

Past data releases are listed in table form, from *Release 14* to the most current release.

Clicking a directory link navigates to the directory containing the release data content. The breadcrumb on the top of the table provides a context of where you are currently within directory hierarchy, and a way to quickly jump back to a particular level in the directory path.

[![DCC Data Releases](images/data-release-16.png)](images/data-release-16.png "Click on the image to see it in full.")

### Release Directories

Each directory has a README.txt file, whose content is displayed below the table for your viewing convenience. Starting from *Release 16*, summary information is included in each release archive. For example, the *Release 16* directory shows two sub-directories, *Summary* and *Projects*. Under the *Summary* directory, summary files are available for download; large data files are located in the *Projects* directory. Releases prior to *Release 16* only provide large data files.

[![DCC Data Releases](images/legacy-data-releases.png)](images/legacy-data-releases.png "Click on the image to see it in full.")

#### Legacy Directories

Releases prior to *Release 14* can be located at [https://dcc.icgc.org/releases/legacy_data_releases](https://dcc.icgc.org/releases/legacy_data_releases).

## Downloads

Clicking a file link initiates a download - most Web browsers prompt the user for where to save the file. Note that tools such as `wget` can also be used. Our API also supports the `-c` option to continue interrupted downloads.

### Having trouble downloading a file from DCC Repository?
**Wget: Resume Broken Download**  
The GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.  
Use the -c or --continue option to continue getting a partially downloaded file. This is useful when you want to finish a download started by a previous instance of wget, or by another program.

The syntax is:  
wget -c url  
wget --continue url  
wget --continue [options] url

Example:  
Download a file using Wget utility  
$ wget [https://dcc.icgc.org/api/v1/download?fn=/current/Summary/simple_somatic_...](https://dcc.icgc.org/api/v1/download?fn=/current/Summary/simple_somatic_mutation.aggregated.vcf.gz)

Resume partially downloaded file:  
$ wget -c [https://dcc.icgc.org/api/v1/download?fn=/current/Summary/simple_somatic_...](https://dcc.icgc.org/api/v1/download?fn=/current/Summary/simple_somatic_mutation.aggregated.vcf.gz)

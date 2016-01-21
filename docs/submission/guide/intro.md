# Submission Guide

## Overview

There are five major steps in the data submission process:

1. Obtain login/password account from EGA's [EBI repository][1]
2. [Submit raw sequence data to the European Genome-phenome Archive][2]
3. [Prepare the ICGC submission files according to DCC data format specifications][3]
4. [Submit files to the DCC Secure SFTP server][4]
5. [Validate submission files using web-based submission system][5]

**Note:** Since Release 15, all submitted data must be based on **Human reference genome assembly** **_GRCh37_** and **Ensembl gene set** **_version 69_**. This will be so until the end of the ICGC data submission process.

When submitting experimental data to the ICGC DCC, please make sure you've already deposited your raw data to the appropriate public data repositories (eg: sequencing reads to EBI EGA). You will need to populate the data elements _raw_data_repository_ and _raw_data_accession_ with the correct repository and accession number respectively.

### Timeline
The DCC publishes submissions to the community in curated batches called _Releases_. The general frequency of releases is 3 per year. Once a release is completed, a new one is created, and so on. Many releases exist at the same time, but only one of them is being prepared. The following diagram tries to demonstrate that releases happen sequentially and only one is ever being prepared:

![](/submission/images/submissions-timeline.png)


The process goes like this:

1.  A Release is created and is immediately set in the `OPENED` state. When the `Release`is in this state:
    * the data dictionary can be amended according to some constraints (see the DD spec)
    * changing the dictionary requires that already validated submissions be re-validated (probably done manually)
    * members can upload files for their (SFTP) projects and obtain validation reports.
    * `VALID` submissions can be "signed off". At which point the submission directory becomes read-only.
2.  After a period of time, the release is moved to the `COMPLETED`state. At which point:
    * this release is frozen, everything about it can be read back, but nothing can be modified
    * a new release is created and the process starts again.

We propose that the whole process be relatively short, maybe 1 or 2 months. Thus, if a project misses a release, they can simply submit for the next which will be just a few weeks later.

### Flowchart

![](/submission/images/data-submission-bpmn.png)

## Support

Please contact the DCC ([dcc-support@icgc.org][6]) if you have any questions or comments about the data submission process.

[1]: https://www.ebi.ac.uk/ega/
[2]: overview/submitting-raw-data-ega.md
[3]: overview/submission-file-format.md
[4]: overview/file-submission
[5]: overview/submission-validation
[6]: mailto:dcc-support@icgc.org

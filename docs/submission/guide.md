# Guide

## Overview

There are five major steps in the data submission process:

1. Obtain login/password account from EGA's [EBI repository][1]
2. [Submit raw sequence data to the European Genome-phenome Archive][2]
3. [Prepare the ICGC submission files according to DCC data format specifications][3]
4. [Submit files to the DCC Secure FTP server][4]
5. [Validate submission files using web-based submission system][5]

For Release 15, all submitted data must be based on **Human reference genome assembly** **_GRCh37_** and **Ensembl gene set** **_version 69_**.

When submitting experimental data to the ICGC DCC, please make sure you've already deposited your raw data to the appropriate public data repositories (eg: sequencing reads to EBI EGA). You will need to populate the data elements _raw_data_repository_ and _raw_data_accession_ with the correct repository and accession number respectively.

_Please contact the DCC ([_dcc-support@icgc.org][6]_) if you have any questions or comments about the data submission process._

[1]: https://www.ebi.ac.uk/ega/
[2]: guide/overview/submitting-raw-data-ega.md
[3]: guide/overview//submission-file-format.md
[4]: guide/overview//file-submission
[5]: guide/overview//submission-validation
[6]: mailto:dcc-support@icgc.org

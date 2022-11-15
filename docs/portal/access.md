# Access Controlled Data

#### **ICGC controlled-access data**

Two major types of ICGC data are protected: raw sequencing reads and analyzed germline data. Application for access to these data can be submitted to [ICGC's Data Access and Compliance Office (DACO)][1].

#### **Raw sequencing and other primary data**

ICGC member projects are required by ICGC policies to submit their raw sequencing reads and other primary data, to controlled access public repositories. The official ICGC DCC-supported repository for [ICGC sequencing reads][2] is the European Bioinformatics Institute's (EBI) [European Genome-phenome Archive (EGA)][3]. For the ICGC member projects which are part of the U.S. [TCGA][4] project, raw data is hosted at NCI's [Genomic Data Commons (GDC)](https://gdc.cancer.gov/).

#### **Analyzed germline data**

Analyzed germline data are hosted at the ICGC DCC and accessible through the [ICGC Data Portal][7]. Analyzed germline data include variants in cancer donors' normal genomes, such as simple germline variations (SGV), and a very small portion of the simple somatic mutations (SSM) that could leak germline information, ie, alleles that are not in concordance with human reference genome. These SSMs are censored through the [germline data masking][8] process. Censored SSMs will then be made publicly accessible while original unmasked SSMs are only accessible to DACO approved users.

#### **PCAWG Data (Pan-Cancer Analysis of Whole Genome) **

The PCAWG data set consists of uniformly aligned (by BWA-MEM) sample-level BAM files, plus sets of germline variant and somatic mutation data (in VCF format) produced by PCAWG core pipelines. Some uniformly aligned RNA-Seq data for matched genomic data are also available.

PCAWG data are stored in individual GNOS repositories hosted at different academic centres globally. To improve accessibility some data entries have been synchronized among GNOS repositories.

* You can browse and search for PCAWG data files on ICGC Data Portal - Repository Browser [https://dcc.icgc.org/repositories](https://dcc.icgc.org/repositories).
* For actual data download, you will need to apply for data access via [ICGC DACO][1] for non-TCGA portion of the ICGC data, and via [dbGAP][10] for the TCGA portion.

More details on how to download PCAWG data can be found [here](/pcawg/data/).

[1]: https://daco.icgc-argo.org/
[2]: https://ega-archive.org/dacs/EGAC00001000010
[3]: https://ega-archive.org/
[4]: https://cancergenome.nih.gov/
[5]: https://tcga-data.nci.nih.gov/
[6]: https://cghub.ucsc.edu/
[7]: https://dcc.icgc.org
[8]: methods#germline-data-masking
[9]: https://pancancer.info/
[10]: https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000178.v5.p5
[11]: https://tcga-data.nci.nih.gov/docs/publications/tcga/

# Access Controlled Data

#### **ICGC controlled-access data**

Two major types of ICGC data are protected: raw sequencing reads and analyzed germline data. Application for access to these data can be submitted to [ICGC's Data Access and Compliance Office (DACO)][1].

#### **Raw sequencing and other primary data**

ICGC member projects are required by ICGC policies to submit their raw sequencing reads and other primary data, to controlled access public repositories. The official ICGC DCC-supported repository for [ICGC sequencing reads][2] is the European Bioinformatics Institute's (EBI) [European Genome-phenome Archive (EGA)][3]. For the ICGC member projects which are part of the U.S. [TCGA][4] project, raw data will be hosted either at the [TCGA DCC][5] or the [Cancer Genomics Hub (CGHub)][6].

#### **Analyzed germline data**

Analyzed germline data are hosted at the ICGC DCC and accessible through the [ICGC Data Portal][7]. Analyzed germline data include variants in cancer donors' normal genomes, such as simple germline variations (SGV), and a very small portion of the simple somatic mutations (SSM) that could leak germline information, ie, alleles that are not in concordance with human reference genome. These SSMs are censored through the [germline data masking][8] process. Censored SSMs will then be made publicly accessible while original unmasked SSMs are only accessible to DACO approved users.

#### **PCAWG Data (Pan-Cancer Analysis of Whole Genome) **

The PCAWG data set consists of uniformly aligned (by BWA-MEM) sample-level BAM files, plus sets of germline variant and somatic mutation data (in VCF format) produced by PCAWG core pipelines. Some uniformly aligned RNA-Seq data for matched genomic data are also available.

PCAWG data are stored in individual GNOS repositories hosted at different academic centres globally. To improve accessibility some data entries have been synchronized among GNOS repositories.

* You can browse and search for PCAWG data files on ICGC Data Portal - Repository Browser [https://dcc.icgc.org/repositories](https://dcc.icgc.org/repositories).
* For actual data download, you will need to apply for data access via ICGC DACO for non-TCGA portion of the ICGC data, and via [dbGAP][10] for the [TCGA portion][11].

For more information on ICGC/TCGA PCAWG Status, please go to [http://pancancer.info/][9].  
Please note: PCAWG data set is currently restricted to the researchers who are part of the PCAWG study and will be open to the broader community at the end of the study.

[1]: https://icgc.org/daco
[2]: http://www.ebi.ac.uk/ega/dacs/EGAC00001000010
[3]: http://www.ebi.ac.uk/ega
[4]: http://cancergenome.nih.gov/
[5]: http://tcga-data.nci.nih.gov/
[6]: https://cghub.ucsc.edu/
[7]: http://dcc.icgc.org
[8]: methods#germline-data-masking
[9]: http://pancancer.info/
[10]: http://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000178.v5.p5
[11]: https://tcga-data.nci.nih.gov/docs/publications/tcga/

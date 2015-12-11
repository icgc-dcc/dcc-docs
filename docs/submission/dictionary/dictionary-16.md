# Dictionary v0.8d (Mar., 2014. Release 16)

NEW: Our new Dictionary Comparison Tool highlights differences between different dictionary versions. Please try it out [here][15]

March 31th 2014:  
**Change between 0.8c and 0.8d:** 

* Modified MVEL script restriction for "mutated_to_allele" in SSM Primary data file specification to handle homozygous -> heterozygous mutations. 

March 19th 2014:  
**Change between 0.8b and 0.8c:** 

* Changed "total_read_count" in [exp_seq_m](http://docs.icgc.org/sequencing-based-gene-expression-expseq-analysis-metadata-file-m) and [mirna_seq_m](http://docs.icgc.org/sequencing-based-mirna-expression-mirnaseq-analysis-metadata-file-m) to accept N/A reserve codes. Also added a link to WHO International Histological Classification of Tumours for the "tumour_histological_type" field in [specimen data specification](http://docs.icgc.org/specimen-data-file-specimen) 

March 11th 2014:  
**Change between 0.8a and 0.8b:** 

* Added a MVEL script restriction for "mutated_to_allele" field in Simple Somatic Mutations Primary File (ssm_p). See example [here](http://docs.icgc.org/mvel-script-restriction-examples) 

##### Changes to Specifications Since Version 0.7e (Jan., 2014)

_Improvements:_

* Incremental submission is now supported, please see [here][1] for more information
* Selective validation is now supported, please see [here][2] for more information
* Array-based submission formats have been heavily revised to improve compactness and reduce file sizes. These include:
    * Sequencing-based DNA Methylation ([meth_seq_m][3] and [ meth_seq_p ][4])
    * Array-based DNA Methylation ([meth_array_m][5] and [ meth_array_p ][6])
    * Sequencing-based Gene Expression ([exp_seq_m][7] and [ exp_seq_p ][8])
    * Array-based Gene Expression ([exp_array_m][9] and [ exp_array_p ][10])
    * Sequencing-based miRNA Expression ([mirna_seq_m][11] and [ mirna_seq_p ][12])

**NOTE:** For Array-based methylation data, probe IDs will be cross-referenced against array manifest files. Please click [ here ][13] for additional details. If your array manifest file is not included in the list, please contact DCC.

* Please see our dictionary diff tool [here][14] for more information

_Revisions to Data Elements: Additions_

**Analyzed Sample Data File (sample) **

| Data Element ID |  Comment |
| ----- | ---- |
| study |<ul><li>new</li><li>allows submitter to indicate if sample is part of study (ie. PanCancer)</li></ul> |

 

_Revisions to Data Elements: Changes_

**Copy Number Somatic Mutations (cnsm) - Primary Analysis File (p):**

| Data Element ID |  Comment |
| ----- | ---- |
| biological_validation_status | changed to accept N/A reserve code -888 |

 

**Simple Somatic Mutations (ssm) - Primary Analysis File (p):**

| Data Element ID |  Comment |
| ----- | ---- |
| biological_validation_status | changed to accept N/A reserve code -888 |

 

[1]: https://docs.icgc.org/incremental-submission-feature
[2]: https://docs.icgc.org/selective-validation-feature
[3]: http://docs.icgc.org/sequencing-based-dna-methylation-methseq-analysis-metadata-file-m
[4]: http://docs.icgc.org/sequencing-based-dna-methylation-methseq-primary-file-p
[5]: http://docs.icgc.org/array-based-dna-methylation-metharray-analysis-metadata-file-m
[6]: http://docs.icgc.org/array-based-dna-methylation-metharray-primary-file-p
[7]: http://docs.icgc.org/sequencing-based-gene-expression-expseq-analysis-metadata-file-m
[8]: http://docs.icgc.org/sequencing-based-gene-expression-expseq-primary-file-p
[9]: http://docs.icgc.org/array-based-gene-expression-exparray-analysis-metadata-file-m
[10]: http://docs.icgc.org/array-based-gene-expression-exparray-primary-file-p
[11]: http://docs.icgc.org/sequencing-based-mirna-expression-mirnaseq-analysis-metadata-file-m
[12]: http://docs.icgc.org/sequencing-based-mirna-expression-mirnaseq-primary-file-p
[13]: http://docs.icgc.org/methylation-array-manifests
[14]: http://submissions.dcc.icgc.org/dictionary.html
[15]: https://submissions.dcc.icgc.org/dictionary.html
# Dictionary v0.8d

### Mar., 2014. Release 16

NEW: Our new Dictionary Comparison Tool highlights differences between different dictionary versions. Please try it out [here][14]

#### **March 31th 2014**
**Change between 0.8c and 0.8d:**

* Modified MVEL script restriction for "mutated_to_allele" in SSM Primary data file specification to handle homozygous -> heterozygous mutations.

#### **March 19th 2014**
**Change between 0.8b and 0.8c:**

* Changed "total_read_count" in [exp_seq_m](/dictionary/viewer/#?vFrom=0.8b&vTo=0.8c&viewMode=details&dataType=exp_seq_m) and [mirna_seq_m](/dictionary/viewer/#?vFrom=0.8b&vTo=0.8c&viewMode=details&dataType=mirna_seq_m) to accept N/A reserve codes. Also added a link to WHO International Histological Classification of Tumours for the "tumour_histological_type" field in [specimen data specification](/dictionary/viewer/#?vFrom=0.8b&vTo=0.8c&viewMode=details&dataType=specimen)

#### **March 11th 2014**
**Change between 0.8a and 0.8b:**

* Added a MVEL script restriction for "mutated_to_allele" field in Simple Somatic Mutations Primary File (ssm_p). See example [here](/dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=ssm_p)

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



[1]: /submission/guide/incremental-submission-feature/
[2]: /submission/guide/selective-validation-feature/
[3]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=meth_seq_m
[4]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=meth_seq_p
[5]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=meth_array_m
[6]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=meth_array_p
[7]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=exp_seq_m
[8]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=exp_seq_p
[9]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=exp_array_m
[10]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=exp_array_p
[11]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=mirna_seq_m
[12]: /dictionary/viewer/#?vFrom=0.8a&vTo=0.8b&viewMode=details&dataType=mirna_seq_p
[13]: http://docs.icgc.org/methylation-array-manifests
[14]: /dictionary/viewer/

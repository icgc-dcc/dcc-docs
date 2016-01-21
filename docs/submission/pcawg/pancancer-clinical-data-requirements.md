# PCAWG Clinical Data Requirements

### Overview:

The Pan-Cancer Analysis of Whole Genomes (PCAWG) is an international ICGC initiative to analyze approximately 2500 whole tumor/normal pairs of genome with their clinical outcome. The Data Coordinating Centre has always requested that PCAWG projects provide clinical data for all of their PCAWG submissions. However, a review of ICGC Release 20 has shown that clinical data is still missing from many projects, with some projects systematically missing certain essential fields. This incompleteness of clinical data is making it difficult to make any meaningful clinical correlations when carrying out PCAWG data analysis. In an effort to ensure clinical data completeness, DCC has been contacting PCAWG projects with regards to missing or incorrect clinical data. All clinical discrepancies and/or missing PCAWG data in DCC should expected to be fixed by Feburary 5th 2016. This date was set by the PCAWG Steering Committee (Stein, Campbell, Getz & Korbel) to ensure working groups are able to access the necessary information in a timely manner, to allow all other dependent workflows.

The DCC Submission system will report the following issues with PCAWG data during validation:

* Missing PCAWG donors and/or samples in DCC 
* Mislabeled PCAWG samples in DCC


### Interpreting Error Messages related to PCAWG Data
The following section explains error messages relating to submission problems with PCAWG data, and how to resolve the issue:

```
"The following samples have data submitted to PCAWG, but have not been included in this DCC submission."
```

* Submission system reports a list of offending samples that are found in PCAWG but have not been included in the DCC submission.
> Solution:
  * Add missing samples to DCC submission and ensure the study field is correctly completed for each PCAWG sample

```
"Sample is marked as in PCAWG study in this submission, however it does not actually exist in PCAWG."
```
* The "study" field in the DCC sample submission file is marked as being in PCAWG. However the sample does not actually exist in PCAWG
> Solutions:
  * The "study" field in the sample.txt file incorrectly indicates sample is in PCAWG. If a sample is not in PCAWG, use "-888" (means "Not applicable") for this field
  * Sample ID format is inconsistent between DCC and PCAWG. Make sure you are using the same sample ID name you submitted in PCAWG.

# PCAWG Clinical Data Requirements

### Overview:

The Pan-Cancer Analysis of Whole Genomes (PCAWG) is an international ICGC initiative to analyze approximately 2800 whole tumour/normal pairs of genome with their clinical outcome.  The Data Coordinating Centre has been responsible for collecting required clinical data for all PCAWG projects in order to facilitate working groups with access to necessary clinical data for PCAWG analysis. The DCC also ensures that clinical data is accurate and consistent, which is critical in order to make meaningful clinical correlations when carrying out PCAWG analysis. To do this, the DCC submission system employs several validation checks to ensure clinical information for PCAWG data is consistent between PCAWG and DCC. The following documentation details how to interpret error messages related to PCAWG data and solutions to fix data discrepancies.

### Interpreting Error Messages related to PCAWG Data

The DCC Submission system will report the following issues with PCAWG data during validation:

* Missing PCAWG donor_ids in DCC
* Missing PCAWG specimen_id in DCC
* Inconsistent specimen_type value with respect to PCAWG
* Missing PCAWG sample_ids in DCC
* Missing or invalid PCAWG sample "study" field


The following section explains error messages relating to submission problems with PCAWG data, and how to resolve the issue:

```
"The following donors have data submitted to PCAWG, but have not been included in this DCC submission."
```

* The PCAWG donor_id(s) is missing from the DCC submission. As a result, there is no DCC entry or clinical data for the missing PCAWG donor_id(s)
> Solution:
  * Add the missing PCAWG donor_id and the required clinical to your DCC submission.

````
"The following specimen have data submitted to PCAWG, but have not been included in this DCC submission."
```
* The PCAWG specimen_id is either missing in your DCC submission, or it does not match the specimen_id in PCAWG.
> Solution:
  * Ensure the DCC-submitted specimen_id matches the PCAWG-submitted specimen_id
  * If it is missing, please add the PCAWG specimen_id and all required clinical data to your DCC submission

```
"Specimen type has an inconsistent value with respect to PCAWG."
```
* The DCC-submitted specimen_type is inconsistent with the PCAWG-submitted specimen_type
> Solution:
  * Ensure the specimen_type information you submit to DCC for a given PCAWG specimen_id is consistent with the PCAWG-submitted specimen_type information

```
"The following samples have data submitted to PCAWG, but have not been included in this DCC submission."
```
* The DCC Submission system reports a list of offending samples that are found in PCAWG but have not been included in the DCC submission.
> Solution:
  * Add missing sample(s) to DCC submission and ensure the "study" field in the DCC [sample][1] submission file is correctly completed for each PCAWG sample

```
"Sample data submitted to PCAWG, however it is not marked as in PCAWG study in this DCC submission."
```
* The "study" field is missing for a given PCAWG sample_id in your DCC submission
> Solution:
  * Update the "study" field to "1" to indicate the sample_id is in PCAWG

```
"Sample is marked as in PCAWG study in this submission, however it does not actually exist in PCAWG."
```
* The "study" field in the DCC [sample][1] submission file is marked as being in PCAWG. However the sample does not actually exist in PCAWG
> Solutions:
  * The "study" field in the DCC [sample][1] file incorrectly indicates sample is in PCAWG. If a sample is not in PCAWG, use "-888" (means "Not applicable") for this field
  * Sample ID format is inconsistent between DCC and PCAWG. Make sure you are using the __same sample ID__ name you submitted in PCAWG.

[1]: /dictionary/viewer/#?viewMode=table&dataType=sample

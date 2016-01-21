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



### Frequently Asked Questions regarding PCAWG Clinical Data Submission

#### 1. Is NED (No Evidence of Disease) the same as complete_remission?

No. Please use "no evidence of disease" in the disease_status_last_followup field.



#### 2. What if response is unknown or there is some response but not sure about the classification according to RECIST?

If you are unable to classify the response, then please enter unknown. Please note that you may be contacted by PCAWG staff at a later date to clarify why this entry is unknown.



#### 3. What are the missing/unknown DCC reserve codes?

| Code | Meaning |
| ---- | ---- |
| **-888** | "not applicable" |
| **-777** | "data verified to be unknown" |

* **'N/A Valid'** indicates the field accepts -777 or -888 reserve codes
* **'N/A Invalid'** indicates the field does not accept -777 or -888 reserve codes. A valid value must be provided

Please see [here][1] for more details.



#### 4. What should I enter if the answer to the question about relationship_age in the Donor Family table is unknown?

The dictionary allows “relationship_age” to be specified as “N/A Valid”. Therefore, you can submit one of the Missing/Unknown DCC Reserve Codes if the relationship_age is unknown.



#### 5. Can you please clarify what ‘diagnosis’ refers to in the Donor table? We have been using age at surgery to avoid (survival) biases when analyzing the data; however, if we use age at surgery then donor_age_at_diagnosis equals donor_age_at_enrollment. In addition, donor_tumour_stage_at_diagnosis would then be equal to tumour_stage.

Diagnosis refers to the point of clinical diagnosis by the primary physician of the patient, (although diagnosis may not be official until surgery or biopsy is undertaken so this can be a little vague). In this context, age at diagnosis refers to the age at which the primary diagnosis was made and so age at enrolment would then equal age at surgery.



#### 6. Does the field “tumour_confirmed” in the Specimen table refer to a pathological confirmation of the presence of tumour?

This refers to the fact that a tumour has been confirmed as malignant by clinical means – usually this would be by histopathological review of the sample.



#### 7. For the smoking and alcohol variables requested in the Donor Exposure tables, some of this data may predate diagnosis and therefore a current smoker then may not be a current smoker at diagnosis. Are these variables supposed to reflect the status at the time of diagnosis, surgery? If so, then we may not have this for everyone (can be obtained via EPR online records but the data is not always so accurate in chart notes so we always use our questionnaire data if available).

The fields regarding exposure should reflect exposures prior to diagnosis. Please enter any available information and PCAWG staff will follow up with you following submission if anything is unclear.  


#### What should I enter if the there are multiple answers to the first_therapy_type in the Donor table? For example, if the patient undertook pre-surgery Chemo to reduce Tumor-size, prior to surgery, this is a combination 2+7; simply typing 8/other in such cases would be a loss-of-information).

The fields in the therapy.txt file are aimed at collecting post resection therapies and outcomes specifically. Pre-surgery information should be submitted in the “specimen_donor_treatment_type” field in the specimen.txt file. Using this example, if the patient had chemotherapy to reduce the tumour, and then had surgery to remove it, and this was the source of the specimen sequenced, you can submit chemotherapy in the “specimen_donor_treatment_type” field, and surgery should be recorded in the “specimen_donor_treatment_type_other” field (this field is free-text).

If the patient went on to have for example radiotherapy afterwards, this would be entered in the post resection therapy table under “first_therapy_type”. Similarly, information about a second post resection therapy can be entered in the “second_therapy_type” field, and any additional post resection therapies in the “other_therapy” and “other_therapy_response” fields, which are both free text.

If you are not sure if therapy took place before or after the specimen was resected for analyses, please enter the information in the “specimen_donor_treatment_type_other” as this is free text and you may add a notification that the timing of therapy it is not clear.

[1]: guide/dcc-data-element-specifications.md#missing-or-unknown-values


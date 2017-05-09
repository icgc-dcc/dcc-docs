# Dictionary v0.11c

### April., 2015, Release 19

#### **May 15, 2015**

* Added new term to donor.0.disease_status_last_followup.v1: "no evidence of disease".

#### **April 20 2015**
Change between 0.11b and 0.11c:

* Changed cancer_history_first_degree_relative to "N/A Valid" (for DCC-only data).

#### **April 10 2015**
Change between 0.11a and 0.11b:

* Added new term "Unknown" to family.0.relationship_sex.v1 CV list.
* relationship_disease_icd10: Removed script restriction to allow 'N/A'
* Updated therapy.0.therapy_type.v1 CV list (used by first_therapy_type and second_therapy_type tables) to include three additional therapies.

Changes to Specifications Since Version 0.10a (October., 2014)
Revisions to Data Elements: Changes
All Files


| Data Element ID | Comment |
| ---- | ---- |
| donor_id, specimen_id, analyzed_sample_id | Added an MVEL script restriction to prevent ICGC-reserved prefixes from being used in identifier fields. |

**Donor Clinical File**

| Data Element ID | Comment |
| ---- | ---- |
| prior_malignancy | New clinical field for PCAWG data |
| cancer_type_prior_malignancy | New clinical field for PCAWG data |
| donor_age_at_diagnosis, donor_age_at_enrollment, donor_age_at_last_followup | Updated MVEL script to prevent donor age from being expressed in days |
| cancer_history_first_degree_relative | Updated MVEL script to prevent donor age from being expressed in days |

**Specimen Clinical File**

| Data Element ID | Comment |
| ---- | ---- |
| specimen_type_other | MVEL script added to check for a required value if 'specimen_type' is indicated 'Normal - other', 'Primary tumour - other' or 'Recurrent tumour - other' |
| specimen_donor_treatment_type_other | MVEL script added to check for required value if 'specimen_donor_treatment_type' is indicated 'other thearpy' |

**Donor Family Clinical File**

| Data Element ID | Comment |
| ---- | ---- |
| donor_has_relative_with_cancer_history | New clinical field for PCAWG data |
| relationship_type | MVEL script added to check for a required value if 'cancer_history_first_degree_relative' is indicated as 'Yes' |
| relationship_type_other | MVEL script added to check for a required value if 'relationship_type' is indicated as 'other' |
| relationship_sex | MVEL script added to check for a required value if 'relationship_type' is specified |
| relationship_disease_icd10 | MVEL script added to check for a required value if 'relationship_type' is specified |
| relationship_disease | MVEL script added to check for a required value if 'relationship_type' is specified |

**Donor Exposure Clinical File**

| Data Element ID | Comment |
| ---- | ---- |
| tobacco_smoking_history_indicator | New clinical field for PCAWG data |
| tobacco_smoking_history_intensity | New clinical field for PCAWG data |
| alcohol_history | New clinical field for PCAWG data |
| alcohol_history_intensity | New clinical field for PCAWG data |

**Donor Postresection Therapy Clinical File**

| Data Element ID | Comment |
| ---- | ---- |
| first_therapy_start_interval | New clinical field for PCAWG data |
| first_therapy_duration | New clinical field for PCAWG data |
| first_therapy_type | New clinical field for PCAWG data |
| first_therapy_response | New clinical field for PCAWG data |
| first_therapy_therapeutic_intent | New clinical field for PCAWG data |
| second_therapy_start_interval | New clinical field for PCAWG data |
| second_therapy_duration | New clinical field for PCAWG data |
| second_therapy_type | New clinical field for PCAWG data |
| second_therapy_response | New clinical field for PCAWG data |
| second_therapy_therapeutic_intent | New clinical field for PCAWG data |
| other_therapy | New clinical field for PCAWG data |
| other_therapy_response | New clinical field for PCAWG data |

Dictionary viewer Tool highlights differences between different dictionary versions. Please try it out [here](/dictionary/viewer/)

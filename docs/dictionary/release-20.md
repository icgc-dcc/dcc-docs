# Dictionary v0.12e (August 2015, Current for Release 20)

#### **September 25, 2015**
Updated to dictionary version 0.12e. Change between 0.12d and 0.12e:

* Removed validation check requiring "donor_age_at_last_followup" to be less than or equal to 90.

#### **September 22, 2015**
Updated to dictionary version 0.12d. Change between 0.12c and 0.12d:

* Removed validation check requiring "donor_interval_of_last_followup" to be greater than or equal to "donor_survival_time" when donor is deceased. 

Reasoning: In some cases, information on a donor's vital status after they died was obtained via phone calls from/to families or from obituaries rather than a full clinical followup. A full followup was done prior while the donor was alive, and this followup interval is more informative rather than the followup phone call done after the donor died. The removal of this validation check will allow "donor_interval_of_last_followup" to be less than "donor_survival_time" if the donor is deceased.

#### **September 18, 2015**

* Added new term to stsm_p.0.evidence.v1 controlled vocabulary: "Partner breakpoint found, and paired sequence either side of breakpoint".

#### **September 9, 2015**
Updated to dictionary version 0.12c. Change between 0.12b and 0.12c:

* Updated regex for "raw_data_accession" to accept EGA Experiment (EGAX*) and EGA Run (EGAR*) IDs

#### **September 8, 2015**

* Added new term to GLOBAL.0.platform.v1: "Illumina HiSeq X Ten".

#### **September 2, 2015**

* Added new term to GLOBAL.0.platform.v1: "Ion Torrent Proton".

#### **August 12, 2015**
Change between 0.12a and 0.12b

* Added cross-field validation check for "donor_primary_treatment_interval"

**Changes to Specifications Since Version 0.11c (April, 2015)**

Revisions to Data Elements: Changes

**Donor Clinical File**

| Data Element ID | Comment |
| ----            | ----    |
| donor_primary_treatment_interval | New clinical field |
| donor_survival_time | New cross-field validation check requiring value if donor is deceased |
| donor_age_at_diagnosis, donor_age_at_enrollment, donor_age_at_last_followup | Updated validation script to use default age of 90 if donor is 90 years or older |
| donor_relapse_interval | New cross-field validation check requiring value if disease_status_at_last_followup is progression or relapse |
| donor_interval_of_last_followup | New cross-field validation check requiring value if disease_status_at_last_followup is progression or relapse |
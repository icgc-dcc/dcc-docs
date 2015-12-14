# Dictionary v0.9a (June., 2014. Release 17)

#### MIGRATING VALIDATED RELEASE 16 DATA TO RELEASE 17

Since changes to dictionary are minimal in this Release, DCC has made available migration scripts to help you convert your validated Release 16 submission files to Release 17. The scripts will perform the folllowing:

* Removes columns no longer required
* Performs the specimen_type mapping between old specimen_type terms and the new specimen_type terms. (Note: Perl script added for Perl users)

Download the script package from here or at GitHub . For more details, please review the README file in the package before executing.

#### Changes to Specifications Since Version 0.8d (March., 2014)

_Revisions to Data Elements: Changes_

**Specimen Data File (specimen) **

| Data Element ID |  Comment |
| ---- | ---- |
| specimen_type | <ul><li>Mandatory. No longer accepts -777/-888</li><li>New specimen_type codelist</li><li>Please see the [ specimen mapping ][1] table describing how to map the [old][2] specimen_type terms to the [new][3] specimen_type terms. For TCGA projects, this table also provides mapping between TCGA specimen types and the new specimen_type terms. </li></ul>|
| specimen_type_other | New MVEL script restriction. If specimen_type is either "Normal - other", "Primary tumour - other" or "Recurrent tumour - other", then specimen_type_other field must be filled in |

 

**Analyzed Sample Data File (sample) **

| Data Element ID |  Comment |
| ----- | ---- |
| analyzed_sample_type | Removed |
| analyzed_sample_type_other | Removed |

 

**All Data Type Files**

| Data Element ID |  Comment |
| ----- | ---- |
| note | Removed |
| raw_data_accession | <ul><li>The regular expression has been modified to allow submitters to submit:<ul><li>Both EGA Study and Dataset IDs, delimited by a colon. Example: EGAS00001000354:EGAD00001000983</li></li><li>submit EGA Sample ID, provided the EGA Study and Dataset accession IDs are submitted as well (delimited by a colon). Example: EGAS00001000354:EGAD00001000983:EGAN00001142752</li></ul><li>Submitting just the EGA Study/Dataset accession IDs for raw_data_accession (as in previous Releases) is still valid.</li> |

 

**Copy Number - Metadata file (cnsm_m)**

| Data Element ID |  Comment |
| ----- | ---- |
| sequencing_strategy | <ul><li>Mandatory. No longer accepts -777/-888</li></ul> |

 

_Revisions to CV Tables:_

[**specimen.0.specimen_type.v3][4]**

* New more comprehensive specimen types.
* In line with PanCancer tumour/normal designations

[1]: https://docs.icgc.org/specimen-type-mapping
[2]: http://docs.icgc.org/controlled-vocabulary/#specimen.0.specimen_type.v1
[3]: https://docs.icgc.org/controlled-vocabulary-09a#specimen.0.specimen_type.v3
[4]: https://docs.icgc.org/controlled-vocabulary#specimen.0.specimen_type.v3
#EGA Raw File Validation

## Summary

ICGC member projects are required by [ICGC policy][1], to submit their raw sequencing data and other primary data to a controlled access public repository. The official ICGC DCC-supported repository for ICGC sequencing reads is the European Bioinformatics Institute's (EBI), European Genome-phenome Archive (EGA). When projects submit their raw sequencing data to EBI's EGA repository, EGA will supply accession identifiers where the data has been archived. Projects are required to populate the 'raw_data_accession' field found in the experimental metadata files with these EGA accession identifiers. This enables data users to retrieve the corresponding raw data for a given DCC-submitted sample_id. 


### EGA File Accession Validation Check

As of Release 23, a new validation rule will take effect requiring all new data submissions to submit an EGA File accession in the 'raw_data_accession' field when the 'raw_data_repository' is 'EGA'. This new validation check will validate the existence of the raw file at EGA, meaning all submissions with **unpublished** files at EGA will be **invalid**. 

| Field Name | Note |
| --- | --- |
| raw_data_repository | code '1' for EGA |
| raw_data_accession | Currently accepts: EGA Study (EGAS), Dataset (EGAD), Experiment (EGAX), Sample (EGAN), Run (EGAR), and File (EGAF) accessions. 

### Examples of valid 'raw_data_accession' when 'raw_data_repository' is 'EGA':

| Description | raw_data_accession |
| --- | --- |
| EGA File accession |	EGAF00000892107 |
| Multiple EGA File accessions | EGAF00000892107:EGAF00000892115 |
| EGA Study, EGA Dataset, EGA File accession | EGAS00001000262:EGAD00001001116:EGAF00000892115 |
| EGA Dataset, EGA File Accession | EGAD00001001116:EGAF00000892115 |
| EGA Dataset, multiple EGA File accessions | EGAD00001001116:EGAF00000892115:EGAF00000892107 |
| EGA Dataset, Sample and multiple EGA File accessions | EGAS00001000262:EGAD00001001116:EGAN00001250305:EGAF00000892107:EGAF00000892115 | 
| EGA Study, EGA Dataset, EGA Sample, multiple EGA Experiment, multiple EGA Run, multiple EGA File accessions | EGAS00001000395:EGAD00001001956:EGAN00001223451:EGAX00001216629:EGAX00001213322:EGAX00001216631:EGAX00001216630:EGAX00001216695:EGAR00001229605:EGAR00001232235:EGAR00001229594:EGAR00001229593:EGAR00001229596:EGAF00000892107:EGAF00000892115 |



### Interpreting Error Message related to Missing EGA File accessions:

The DCC Submission system will report the following error message if an EGA File Accession is not submitted for a given sample_id:
```
'At least one file accession is required for analysis_id: "some_analysis_id_1"'
```

Solution:
* An EGA File accession (EGAF*) is required in the "raw_data_accession" field for samples with analysis_id "some_analysis_id_1".

[1]: https://icgc.org/icgc/goals-structure-policies-guidelines/e2-data-release-policies

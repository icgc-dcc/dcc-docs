#EGA Raw File Validation

## Summary

ICGC member projects are required by [ICGC policy][1], to submit their raw sequencing data and other primary data to a controlled access public repository. The official ICGC DCC-supported repository for non-US ICGC projects' sequencing reads is the European Bioinformatics Institute's (EBI), [European Genome-phenome Archive (EGA)][3]. When projects submit their raw sequencing data to EBI's EGA repository, EGA will supply file accession identifiers (of the format EGAFXXXXXXXXXXX) for each raw data file archived. Projects are required to populate the DCC 'raw_data_accession' field found in the [experimental metadata files][4] with these EGA File accession identifiers, and ensure the DCC-submitted sample ID ('analyzed_sample_id' and 'matched_sample_id' DCC fields) matches the EGA-submitted sample ID ('sample_alias' field in EGA). The sample ID and EGA file accession identifiers enable data users to retrieve the corresponding raw data for a given DCC-submitted sample_id. 



## EGA File Accession Validation Check

All new data submissions are required to:

1. Submit EGA File accessions for the 'analyzed_sample_id' and 'matched_sample_id' in the 'raw_data_accession' field when the 'raw_data_repository' is 'EGA'. 
2. Ensure the DCC-submitted sample ID and EGA-submitted sample ID match 

This validation check will validate the existence of the raw file at EGA, meaning all submissions with **unpublished** files at EGA will be **invalid**. 

| Field Name | Note |
| --- | --- |
| analyzed_sample_id | Must match EGA's 'sample_alias' field in EGA Sample metadata XML* | 
| matched_sample_id | Must match EGA's 'sample_alias' field in EGA Sample metadata XML* | 
| raw_data_repository | code '1' for EGA |
| raw_data_accession | Currently accepts: EGA Study (EGAS), Dataset (EGAD), Experiment (EGAX), Sample (EGAN), Run (EGAR), and File (EGAF) accessions. 

**If you are unable to edit/update EGA's 'sample_alias' field, please include the sample attribute 'submitter_sample_id' in the EGA Sample metadata XML file and set the value equal to the DCC-submitted sample ID (see [here][6] for example EGA Sample XML file stucture)**


## Where to get the EGA File Accession

[EGA][3] provides a **Sample_File.map** mapping file which includes mapping information between a sample identifier and the EGA File Accession ID. For released EGA datasets, this mapping file can be found in the EGA dataset metadata tarball downloadable from the EGA website. For example for a given EGA dataset: 

* Ensure you are logged into EGA
* Go to the EGA Dataset page: https://ega-archive.org/datasets/[EGA Dataset Accession ID]
* Click on "Download Metadata". This will download a file [EGA Dataset Accession ID].tar.gz. 
* Once decompressed, the mapping file can be found at [EGA Dataset Accession ID]/delimited_maps/Sample_File.map. 
* Please submit the EGA File accession ID(s) for each sample ID in your DCC submission.

If the metadata for a given EGA Dataset has not been released and is not available via the website (and therefore cannot be downloaded as a tarball file), please contact EGA HelpDesk at [ega-helpdesk@ebi.ac.uk][2] who will provide data submitters with the Sample ID to EGA File Accession ID mapping information. 

*We strongly encourage ICGC member projects to start this process early as it may take time to gather and validate your data submission.*



## Requirements

The EGA Raw File Validation check will be valid if the following conditions are met:

1. Each submitted EGA File ID must map to either analyzed_sample_id or matched_sample_id
2. One or more EGA File ID(s) should map to analyzed_sample_id
3. If "matched_sample_id" field exists in metadata file, one or more EGA File ID(s) should map to matched_sample_id



<span style="color:red">***NOTE: Please ensure the sample ID you submit to EGA ("sample_alias" EGA field) matches the sample ID you submit to DCC ("analyzed_sample_id" and "matched_sample_id" DCC field)***</span>



### Examples of valid 'raw_data_accession' when 'raw_data_repository' is 'EGA':

| Description | raw_data_accession |
| --- | --- |
| Multiple EGA File accessions (one for 'analyzed_sample_id', one for 'matched_sample_id') | EGAF00000892107:EGAF00000892115 |
| EGA File accession if 'matched_sample_id' field does not exist in metadata file |EGAF00000892107<br/>EGAD00001001116:EGAF00000892115 |
| EGA Study, EGA Dataset, mutliple EGA File accessions | EGAS00001000262:EGAD00001001116:EGAF00000892115 |
| EGA Dataset, multiple EGA File accessions | EGAD00001001116:EGAF00000892115:EGAF00000892107 |
| EGA Dataset, Sample and multiple EGA File accessions | EGAS00001000262:EGAD00001001116:EGAN00001250305:EGAF00000892107:EGAF00000892115 | 
| EGA Study, EGA Dataset, EGA Sample, multiple EGA Experiment, multiple EGA Run, multiple EGA File accessions | EGAS00001000395:EGAD00001001956:EGAN00001223451:EGAX00001216629:EGAX00001213322:EGAX00001216631:EGAX00001216630:EGAX00001216695:EGAR00001229605:EGAR00001232235:EGAR00001229594:EGAR00001229593:EGAR00001229596:EGAF00000892107:EGAF00000892115 |



## Interpreting Error Message related to Missing EGA File accessions:


####Error Message #1:####
```
'At least one file accession is required for analysis_id: "some_analysis_id_1"'
```

** Interpretation: **
An EGA File Accession ID is not submitted for sample IDs with analysis_id "some_analysis_id_1"

**Solution**:
* An EGA File accession (EGAF*) is required in the "raw_data_accession" field for samples with analysis_id "some_analysis_id_1".


####Error Message #2:####
```
Could not match file to sample in: [{"submitterSampleId":"BCC001T","fileId":"EGAF00001673032"}]
```

**Interpretation:**
The sample ID submitted to DCC does not match the sample submitted to EGA ("BCC001T") for the submitted EGA File ID accession EGAF00001673032.

**Solution:**
Ensure the EGA-submitted sample ID ("sample_alias" field in EGA Sample XML file) matches the DCC-submitted sample ID for the given EGA File ID. If you are not able to edit/update the "sample_alias" field in EGA, please include the sample_attribute "submitter_sample_id" and set the value to match the DCC-submitted sample ID. This will ensure we are able to map the sample ID in EGA. For more information on EGA metadata requirements, please refer to the [EGA Raw Data submission guide][5].


####Error Message #3:####
```
No files found with id EGAF00001563762
```

**Interpretation:**
The submitted EGA File ID does not exist in the EGA repository
This error message can appear for the following reasons:
- The submitted EGA File ID is incorrect
- The EGA dataset to which this EGA File ID belongs to has not been released at EGA.
- The EGA dataset associated with this EGA File ID does not belong to ICGC DAC.

**Solution:**
Ensure the EGA dataset has been released and is under ICGC DAC at EGA, and the submitted EGA File ID is correctly formatted.


[1]: https://icgc.org/icgc/goals-structure-policies-guidelines/e2-data-release-policies
[2]: mailto:ega-helpdesk@ebi.ac.uk
[3]: https://ega-archive.org
[4]: http://docs.icgc.org/dictionary/viewer/#?q=raw_data_accession&viewMode=graph
[5]: http://docs.icgc.org/submission/guide/overview/submitting-raw-data-ega/
[6]: http://docs.icgc.org/submission/guide/overview/submitting-raw-data-ega/#sample-xml-file

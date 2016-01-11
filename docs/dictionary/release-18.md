# Dictionary v0.10a (October., 2014, Release 18)

##### Changes to Specifications Since Version 0.9a (June., 2014)

_Revisions to Data Elements: Changes_

**Simple Somatics Mutation - metadata (ssm_m), Copy Number Somatic Mutations - metadata (cnsm_m) and Structural Somatic Mutations (stsm_m) Files **

| Data Element ID |  Comment |
| ---- | ---- |
| matched_sample_id | Added an MVEL script restriction to prevent identical sample identifiers in both the matched_sample_id field and analyzed_sample_id fields. |

 

**All Metadata Files**

| Data Element ID |  Comment |
| ----- | ---- |
| raw_data_accession | Updated MVEL script to check format of accession ID when raw_data_repository is TARGET |

 

_Revisions to CV Tables:_

**[GLOBAL.0.raw_data_repository.v2][1]**

* New raw data repository TARGET added to codelist.

Dictionary viewer Tool highlights differences between different dictionary versions. Please try it out [here](https://submissions.dcc.icgc.org/dictionary.html)

[1]: https://docs.icgc.org/controlled-vocabulary#GLOBAL.0.raw_data_repository.v2
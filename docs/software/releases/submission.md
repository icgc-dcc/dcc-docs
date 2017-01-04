# Submission System Release Notes

#### 3.6.1.1 - October 10, 2014
* Added "header-only file validation" to inform the user of an unintended empty submission file
* Added "sample type validation" to verify that samples referenced in meta file `analyzed_sample_id`, `matched_sample_id` and `reference_sample_type` fields are consistent with the `specimen_type` field found in the associated specimen files.

#### 2.6 - March 17, 2014
* Incremental data submission. Users can now manage their data submission directory and upload only new data. Please see [here][1] for more information
* Support multiple files. Data can be split in multiple files per data type
* Selective data validation. Users can now validate data by data type and not anymore the whole submission each time.
* New user interface
* Faster validation engine
* Many bug fixes

For more information, please see the Submission System Guide available [ here ][2]. Please don't hesitate to contact us at [dcc-support@icgc.org][3] if you have any questions or to report any bugs.

Sincerely,
The DCC team.

[1]: /submission/guide/incremental-submission-feature.md
[2]: /submission/about.md
[3]: mailto:dcc-support@icgc.org

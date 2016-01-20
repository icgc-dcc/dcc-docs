# Incremental Submission Feature

### Overview

_Incremental Submission_ adds the ability to only upload new data for the current release. All data from previous releases will be maintained by the system and automatically copied to the current release. Additionally, submitters are now able to download their submitted data. This provides a model where submitters are in full control of their effective data set and can use the submission system as a canonical data store.

### File Naming

To aid submitters in managing their data as they see best, the dictionary now allows a looser naming convention for files. As a consequence, multiple files per file schema may be submitted. For example, the donor schema now allows submitters to name their files using a custom segment conforming to the following regex:  

```text
"^donor(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$"
```

Thus one may choose to adopt a naming scheme such as: 

```text
donor.01.txt, donor.02.txt, donor.03.txt
```

Alternatively one could embed a date:
```text
donor.20130101.txt, donor.20130201.txt, donor.20130301.txt`
```

With this scheme in place, a submitter can upload `donor.20130101.txt` in Release 1, `donor.20130201.txt` in Release 2 and `donor.20130301.txt` in Release 3. The effective submission will be the combined set of files.  

### Data Management

It is the responsibility of the submitter to ensure data remains consistent from release to release. In the case of deleted records, one must remove the records and their dependent records from all files and resubmit. The appropriate file split strategies should chosen by submitters to simplify operations between releases and interoperate with existing pipelines.

### Notes

In the current implementation each time a validation is performed it will validate the entire data set. However, in combination with [_Selective Validation][1]_ the total validation time should be greatly reduced.

[1]: selective-validation-feature.md

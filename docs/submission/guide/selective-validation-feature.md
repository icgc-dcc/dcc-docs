# Selective Validation Feature

### Overview

New in Release 15 submission system is the _Selective Validation_ feature. The purpose of _Selective Validation_ is to allow a project submitter to validate a subset of their submitted _Data Types_ in batches. This should produce considerable time savings since once a _Data Type_ is successfully validated, it does not need to be validated again for the current release (some exceptions apply, please see below). 

### Details

The following describes how this feature operates:

* From the release submission page, a project submitter may select a subset of _Data Types_ to validate
* At least one _Data Type_ must be selected to validate
* _Clinical Data_ will always need to be revalidated with any selected _Data Types_
* If the _Dictionary_ changes after validating a _Data Type_, all available _Data Types_ will be "reset" to "NOT VALIDATED"
* A submitter may only validate one batch at a time, per project
* Files may not be modified while validation is in progress
* Uploading, removing or renaming a file via SFTP will reset the _Data Type_ that is associated with said file
* If a _Clinical Data_ file is modified, it will reset all _Data Types_
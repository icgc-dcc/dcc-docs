# [Legacy] Storage Client Release Notes

\* indicates this release contains breaking changes and older versions will no longer work

#### 1.0.20\* - Sept 22, 2016

- sync with Metadata service data changes.

#### 1.0.19\* - Jul 15, 2016

- Stability improvements: validate pre-signed url's, verify repository connection permissions, check for concurrent uploads

#### 1.0.18 - Jun 13, 2016

- Internal, housekeeping updates

#### 1.0.17\* - Jun 10, 2016

- Change Upload process to prevent duplicate uploads from being initiated

#### 1.0.16\* - May 30, 2016

- Perform additional MD5 checking to ensure validity of download

#### 1.0.15 - May 19, 2016

- Accept multiple object id's with --object-id parameter

#### 1.0.14 - May 2, 2016

- Batch/Manifest Slicing. Validate java version, validate repository code in download manifest files against client profile

#### 1.0.13 - Mar 22, 2016

- Fixed infinite loop in download when part size mismatches stream length

#### 1.0.12 - Mar 19, 2016

- Fixed application of HTTP timeouts for uploads / downloads

#### 1.0.10 - Feb 19, 2016

- Additional user informational message improvements

#### 1.0.9 - Feb 17, 2016

- Perform check for adequate disk space before beginning downloads

#### 1.0.8 - Feb 11, 2016

- Improved informational and error messages to user

#### 1.0.5 - Dec 5, 2015

- GA Client release - cleaned up command line arguments;
- Removed obsolete, unused options

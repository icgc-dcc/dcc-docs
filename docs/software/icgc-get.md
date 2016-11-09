# icgc-get Release Notes

#### 0.5.7 - Nov 9, 2016
* Improved messages to user when files have already been downloaded. 
* Fixed bug that prevented changing the number of threads the icgc-storage client would use. 

#### 0.5.6 - Nov 3, 2016
* Fixed access checking for GDC repository. 
* Misc bug fixes related to exception handling. 

#### 0.5.5 - Nov 2, 2016
* Fixes issue with PDC downloads not working
* Fixes OSX binary from returning `Failed to execute` on successful operations. 
* Removed debug logging on awscli when downloading from PDC. 

#### 0.5.3 - Oct 19, 2016
* Fixes issue where downloading by manifest could cause a bad request in obtaining file metadata.

#### 0.5.1 - Sept 22, 2016
* Improvements in configuration prompts, especially in handling incorrect inputs. 
* When specifying an output directory, icgc-get will attempt to create the directory if possible. 

#### 0.5.0 - Sept 20, 2016
* Generated `config.yaml` documents unset configuration should users like to be able to modify their configuration by hand.
* Better error handling for unrecoverable and corrupted configuration. 

#### 0.4.4 - Sept 13, 2016
* Added headers to output indicating which File Ids are being downloaded and from which repository. 

#### 0.4.1 - Aug 15, 2016
* Initial release.

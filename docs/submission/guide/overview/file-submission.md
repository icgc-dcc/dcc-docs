# File Submission

### Important Notes

Incremental Submission is a new feature offered by the submission system that allows you to upload just new data files for the current release (instead of resubmitting files containing all of your previous data along with your new data). All your data from previous releases will be maintained in the system and get automatically copied into the current release. Additionally, submitters are now also able to download their actual submitted data from the submission system. This means that data submitters are in full control of their effective data set and can use the submission system as a canonical data store.

To aid submitters in managing their data as they see best, the dictionary now allows a looser naming convention for files. As a consequence, multiple files per file schema may be submitted. For example, the donor schema now allows submitters to name their files using a custom segment conforming to the following regular expression pattern:

```text
"^donor(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$"
```

For example, one could choose to adopt a donor.txt file naming system such as:

```text
donor.01.txt, donor.02.txt, donor.03.txt, etc.
```

Alternatively one could embed the date that the file was created into the file's name:

```text
donor.20130101.txt, donor.20130201.txt, donor.20130301.txt, etc.
```

With this scheme in place, a submitter can upload donor.20130101.txt in Release 1, donor.20130201.txt in Release 2 and donor.20130301.txt in Release 3. The effective submission for the current release will be the combined set of files. Note that in this current implementation each time a validation is performed it will validate the entire data set. However, in combination with Selective Validation the total validation time should be greatly reduced.

* Currently downloading files from the SFTP server is disabled; the directory files are write-only. Files can be renamed using the SFTP "rename" command.
* Project submission directories are created by the DCC for all ICGC member projects recognized by the ICGC Secretariat office. If you experience an issue with accessing your project's directory please contact the DCC helpdesk at [dcc-support@icgc.org][1]

The following steps are involved in submitting your project's data files to the DCC:

1\. Prepare submission files on your local machine. Optionally, you can put them within one folder to make it easier to upload them all at once.

* Files can be compressed using bzip2 or gzip.
* Do not compress multiple files into a single archive; each file must be individually compressed.
* The correct extension for bzip2-compressed files is .bz2, and for gzip is .gz. Please do not upload files that are bzip2 or gzipped-formated but not named with the correct extension.

2\. Log in to the SFTP server at submissions.dcc.icgc.org (port 22, the default) using an SFTP client. For example, from a Unix command line you can use:

```text
> sftp USERNAME@submissions.dcc.icgc.org
```

where USERNAME is replaced with your ICGC data submission username. Enter your ICGC data submission password when prompted.

Once logged in you should be able to see the project directories you have access to by issuing the "ls" command:

3\. Upload files to your project folder using your SFTP client. The command if you are using the command-line SFTP client is:

```text
sftp> mput PATH_TO_LOCAL_FOLDER/* PROJECT_FOLDER
```

where PATH_TO_LOCAL_FOLDER is the folder containing your submission files and PROJECT_FOLDER is the name of your project on the SFTP server.

4\. Validate your submission by going to the ICGC data submission web interface at [https://submissions.dcc.icgc.org][2]. Log in using your ICGC submission system username and password.

[1]: mailto:dcc-support@icgc.org
[2]: https://submissions.dcc.icgc.org

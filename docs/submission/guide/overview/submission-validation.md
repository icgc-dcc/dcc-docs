# Submission Validation

ICGC DCC provides an online submission/validation system that allows submitter to upload their data (via SFTP), validate the submission, and receive a detailed report back indicating any errors with your submission files. For first time submitters, we recommend you upload a subset of your data so the validation, correction, and re-validation process can be as streamlined as possible. You can upload and re-validate your data as many times as you like during a particular submission period. Once completed and validated you can then "sign off" on your submission which will then be included in the next DCC release. Any submitted files not yet validated or signed off by the DCC release will automatically be moved to the next release.

### Steps

1. Once you have successfully uploaded your submission files via SFTP, you can validate your submission by going to the ICGC data submission web interface at . Log in using your ICGC submission system username and password.

![][1]

2. To see the details of a release click on its name in the release list. This will load a detailed Release Summary view which will give a summary of the release as well as a list of all of your submissions for that release. A submission will have one of the following states:
* NOT VALIDATED - the initial state upon uploading. Submissions will also revert to this state if there are any changes made after validation, such as uploading or removing a file, or a dictionary change by the administrator
* QUEUED - the submission is queued and awaiting validation. During this state the submission can not be modified via SFTP.
* VALID - the submission has passed validation successfully, and is ready to be signed off on by the submitter to be included in the next release
* INVALID - the submission did not pass validation, and changes must be made to the data, as explained in the reports. When the changes are made and reuploaded the state will change back to NOT VALIDATED automatically.
* SIGNED OFF - the submissions has been approved by the submitter and is locked for further modification. It will be included in the next release.
* ERROR - a server-side error occurred during validation. The DCC team has been notified and will investigate.

![][2]

* To view details of a submission click on its name in the submission table. This will load the Submission Summary where you will see all the files in the current submission, their sizes, last-modifies dates, their status, and their validation reports (if available).

![][3]

* To validate a submission you can either click on the **Validate** button located in the "Actions" column of the submission table on the _Release Summary_ page or the **Launch Validation** button at the top of the _Submission Summary_ page. You will be prompted to enter an email address in order to notify you when validation is complete.

![][4]

The submission will be queued for validation.

NEW: Submitters can now cancel their validation by clicking on the "Cancel Validation" button.

![][5]

* Once validation is finished, you will receive an email showing you the validation results and a link to the validation report.

![][6]

* To view reports click on the "view" button next to a project name in the Report column or on the Project Key; then, on the Submission Summary page, click on "view" in the Report column the view a report for that file.

![][7]

* Once your submission validates as VALID and you are satisfied that it is complete, you can sign off of the project using the SIGN OFF button .

![][8]


Only projects that have been signed off will be included in releases.

![][9]

[1]: /submission/images/login-0.png
[2]: /submission/images/submission-table_0.png
[3]: /submission/images/pre-validation.png
[4]: /submission/images/validation-popup-_0.png
[5]: /submission/images/validating-_0.png
[6]: /submission/images/valid-submission.png
[7]: /submission/images/view-ssm_p-report.png
[8]: /submission/images/sign-off-submission.png
[9]: /submission/images/signed-off-table.png

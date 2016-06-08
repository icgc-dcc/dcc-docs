# Donor Clinical Data Guidelines

### Changes to Data Dictionary for Release 20 include:

* Implementation of new rules requiring values for certain donor clinical fields
* Validation checks to ensure that the clinical data provided is correct

### Why?

* We have received many requests from users of the DCC Data Portal about the lack of clinical data for some ICGC projects, making it difficult to carry out a complete analysis of different cancer types (i.e., survival analysis). A review of Release 19 data also found discrepancies in the clinical data for some projects. In an effort to correct this, we implemented validation rules to identify and flag these discrepancies and any empty required data fields.

The validation rules concern mainly the disease status at last followup (in particular, if the patient progressed or relapsed), and the patient's vital status. With the exception of "donor_primary_treatment_interval", there have been no new fields added to the Data Dictionary since Release 19.

| Field |  Definition |  Terms |
| --- | --- | --- |
| donor_vital_status |  Donor's last known vital status. | <ol><li>alive</li><li>deceased</li></ol> |
| disease_status_last_followup |  Donor's last known disease status. | <ol><li>complete remission</li><li>partial remission</li><li>progression</li><li>relapse</li><li>stable</li><li>no evidence of disease |
| donor_relapse_interval |  If the donor was clinically disease free following primary treatment, and then relapse or progression (for liquid tumours) occurred afterwards, then "donor_relapse_interval" is the length of the disease free interval (in days). |   |
| donor_survival_time |  How long has the donor survived since primary diagnosis, in days. If source data was collected in months, use a multiplier value of '30.44' to convert values to days when preparing your submission. |   |
| donor_interval_of_last_followup |  Interval from the primary diagnosis date to the last followup date. ICGC requests that patients be followed up every 6 months while alive. |   |
| **donor_primary_treatment_interval ** (New Field) |  Interval between primary diagnosis and primary treatment, in days. |   |

### Summary of Donor Clinical Field requirements:

This table summarizes the required fields (for data completeness), and describes the rules which ensure the clinical data is correct

<table class="confluenceTable">
<tbody>
<tr>
<td colspan="2" rowspan="2" class="confluenceTd">
</td>
<td class="highlight-grey confluenceTd" colspan="2" data-highlight-colour="grey" style="text-align: center;">
<p><strong><br></strong></p>
<p><strong>disease_status_last_followup</strong></p>
</td>
</tr>
<tr>
<td colspan="1" style="text-align: center;" class="confluenceTd">
<p><strong>complete remission</strong></p>
<p><strong>partial remission</strong></p>
<p><strong>stable</strong></p>
<p><strong>NED (no evidence of disease)</strong></p>
</td>
<td style="text-align: center;" class="confluenceTd">
<p><strong>progression</strong></p>
<p><strong>relapse</strong></p>
</td>
</tr>
<tr>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey" rowspan="2">
<p><strong><br></strong></p>
<p><strong><br></strong></p>
<p><strong>donor_vital_status</strong></p>
</td>
<td colspan="1" class="confluenceTd"><strong>alive</strong></td>
<td colspan="1" class="confluenceTd">
<p>donor_relapse_interval = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>
<p>donor_survival_time = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>
<p>donor_interval_of_last_followup = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>

<p><strong>Checks:</strong></p>
<p>If data provided for "donor_survival_time" and "donor_interval_of_last_followup":</p>
<li>
<ul>donor_survival_time == donor_interval_of_last_followup</ul></li>

</td>
<td class="confluenceTd">
<p>donor_relapse_interval = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>
<p>donor_survival_time = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>
<p>donor_interval_of_last_followup = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>

<p><strong>Checks:</strong></p>
<li>
<ul>donor_relapse_interval &lt;= donor_interval_of_last_followup</ul></li>

<p>If data provided for "donor_survival_time":</p>
<li>
<ul>donor_survival_time == donor_interval_of_last_followup</ul>
</li>
</td>
</tr>
<tr>
<td colspan="1" class="confluenceTd"><strong>deceased</strong></td>
<td colspan="1" class="confluenceTd">
<p>donor_relapse_interval = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>
<p>donor_survival_time = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>
<p>donor_interval_of_last_followup = <span class="status-macro aui-lozenge aui-lozenge-current"><img src="/submission/images/na-placeholder-0.png"></span></p>

</td>
<td class="confluenceTd">
<p>donor_relapse_interval = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>
<p>donor_survival_time = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>
<p>donor_interval_of_last_followup = <span class="status-macro aui-lozenge aui-lozenge-error"><img src="/submission/images/required-placeholder.png"></span></p>

<p><strong>Checks:</strong></p>
<li>
<ul>donor_relapse_interval &lt;= donor_survival_time</ul></li>

<li style="list-style-type: none;background-image: none;"></li></td>
</tr>
</tbody>
</table>

### Clinical Data Events and Time Relationship:

This diagram summarizes how the different donor clinical events relate to time.

If the patient is alive, the "donor_survival_time" should be equal to the "donor_interval_of_last_followup" (124 days)

However, if the the patient is deceased, the "donor_survival_time" (163 days) should be less than (or equal) to the "donor_interval_of_last_followup" (175 days)

![][3]

### Description of Script Restrictions added to Donor File for Release 20:

Five script restrictions have been added:

**1\. **

_Field:_** "donor_interval_of_last_followup"**

_Description:_

If the disease status at last followup was progression or relapse:

*     * "donor_interval_of_last_followup" field is required

![][4]

**2.**

_Field:_** "donor_survival_time"**

_Description:_

When donor is deceased:

* The field "donor_survival_time" is required.

When donor is alive:

* If "donor_survival_time" and "donor_interval_of_last_followup" have values, "donor_survival_time" must equal "donor_interval_of_last_followup"

![][5]

**3.**

_Field:_ **"donor_relapse_interval"**

_Description:_

If the donor's disease status at last followup was progression or relapse:

* The field "donor_relapse_interval" is required.
* If the donor is alive:
    * "donor_relapse_interval" should be less than or equal to "donor_interval_of_last_followup"
* If donor is deceased:
    * "donor_relapse_interval" should be less then or equal to "donor_survival_time".

![][6]

**4.**

_Field:_ **"donor_primary_treatment_interval"**

_Description:_

The donor_primary_treatment_interval should be less than or equal to donor_survival_time

If the patient's disease status at last followup was progression or relapse:

If the patient is alive:

* The combination of the donor_primary_treatment_interval and donor_relapse_interval should be less than or equal to the donor's interval of last followup.

If the patient is deceased:

* The combination of the donor_primary_treatment_interval and donor_relapse_interval should be less than or equal to the donor's survival time

![][7]

**5\. **

_Field:_ **"donor_age_at_diagnosis"**

_Description:_

* If the donor is older than 90 years, default value of 90 should be used.
* The donor's age at diagnosis should be less than or equal to the donor's age at enrolment

![][8]

**6\. **

_Field:_ **"donor_age_at_enrollment"**

_Description:_

* If the donor is older than 90 years, default value of 90 should be used.
* The donor's age at enrolment should be less than or equal to the donor's age at last_followup  
  

![][9]

[3]: /submission/images/clinical-event-times.png
[4]: /submission/images/donor-interval-of-last-followup-script-0.png
[5]: /submission/images/donor-survival-time-script.png
[6]: /submission/images/donor-relapse-interval-script.png
[7]: /submission/images/donor-primary-treatment-interval-script-0.png
[8]: /submission/images/donor-age-at-diagnosis-script.png
[9]: /submission/images/donor-age-at-enrollment-script.png

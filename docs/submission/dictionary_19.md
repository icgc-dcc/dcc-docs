# Dictionary v0.11c (April., 2015, Release 19)

```markdown
May 15, 2015:
- Added new term to donor.0.disease_status_last_followup.v1: "no evidence of disease".
```

```markdown
April 20 2015:
Change between 0.11b and 0.11c:
- Changed cancer_history_first_degree_relative to "N/A Valid" (for DCC-only data).
```

```markdown
April 10 2015:
Change between 0.11a and 0.11b:
- Added new term "Unknown" to family.0.relationship_sex.v1 CV list.
- relationship_disease_icd10: Removed script restriction to allow 'N/A'
- Updated therapy.0.therapy_type.v1 CV list (used by first_therapy_type and second_therapy_type tables) to include three additional therapies.
```

<pre style="color:#333">
<div>
<b>Changes to Specifications Since Version 0.10a (October., 2014)</b>
<u>Revisions to Data Elements: Changes</u>
<b>All Files</b>
<div>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>donor_id, specimen_id, analyzed_sample_id</span></td>
<td>
<li>Added an MVEL script restriction to prevent ICGC-reserved prefixes from being used in identifier fields.</li>
</td>
</tr>
</tbody>
</table>
</div>
**Donor Clinical File**
<div>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>prior_malignancy</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>cancer_type_prior_malignancy</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>donor_age_at_diagnosis, donor_age_at_enrollment, donor_age_at_last_followup</span></td>
<td>
<li>Updated MVEL script to prevent donor age from being expressed in days</li>
</td>
</tr>
<tr>
<td><span>cancer_history_first_degree_relative</span></td>
<td>
<li>Updated MVEL script to prevent donor age from being expressed in days</li>
</td>
</tr>
</tbody>
</table>
</div>
**Specimen Clinical File**
<div>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>specimen_type_other</span></td>
<td>
<li>MVEL script added to check for a required value if 'specimen_type' is indicated 'Normal - other', 'Primary tumour - other' or 'Recurrent tumour - other'</li>
</td>
</tr>
<tr>
<td><span>specimen_donor_treatment_type_other</span></td>
<td>
<li>MVEL script added to check for required value if 'specimen_donor_treatment_type' is indicated 'other thearpy'</li>
</td>
</tr>
</tbody>
</table>
</div>
<div>
**Donor Family Clinical File**
<table></table>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>donor_has_relative_with_cancer_history</span></td>
<td>
<li>New clinical field for PCAWG data</li></li>
</td>
</tr>
<tr>
<td><span>relationship_type</span></td>
<td>
<li>MVEL script added to check for a required value if 'cancer_history_first_degree_relative' is indicated as 'Yes'</li>
</td>
</tr>
<tr>
<td><span>relationship_type_other</span></td>
<td>
<li>MVEL script added to check for a required value if 'relationship_type' is indicated as 'other'</li>
</td>
</tr>
<tr>
<td><span>relationship_sex</span></td>
<td>
<li>MVEL script added to check for a required value if 'relationship_type' is specified</li>
</td>
</tr>
<tr>
<td><span>relationship_disease_icd10</span></td>
<td>
<li>MVEL script added to check for a required value if 'relationship_type' is specified</li>
</td>
</tr>
<tr>
<td><span>relationship_disease</span></td>
<td>
<li>MVEL script added to check for a required value if 'relationship_type' is specified</li>
</td>
</tr>
</tbody>
</table>
</div>
<div>
**Donor Exposure Clinical File**
<table></table>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>tobacco_smoking_history_indicator</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>tobacco_smoking_history_intensity</span></td>
<td>
<li>New clinical field for PCAWG data</li></li>
</td>
</tr>
<tr>
<td><span>alcohol_history</span></td>
<td>
<li>New clinical field for PCAWG data</li></li>
</td>
</tr>
<tr>
<td><span>alcohol_history_intensity</span></td>
<td>
<li>New clinical field for PCAWG data</li></li>
</td>
</tr>
</tbody>
</table>
</div>
<div>
**Donor Postresection Therapy Clinical File**
<table></table>
<table>
<tbody>
<tr>
<th>Data Element ID</th>
<th>Comment</th>
</tr>
<tr>
<td><span>first_therapy_start_interval</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>first_therapy_duration</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>first_therapy_type</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>first_therapy_response</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>first_therapy_therapeutic_intent</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>second_therapy_start_interval</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>second_therapy_duration</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>second_therapy_type</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>second_therapy_response</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>second_therapy_therapeutic_intent</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>other_therapy</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
<tr>
<td><span>other_therapy_response</span></td>
<td>
<li>New clinical field for PCAWG data</li>
</td>
</tr>
</tbody>
</table>
</div>
</div>
Dictionary viewer Tool highlights differences between different dictionary versions. Please try it out <a href="https://submissions.dcc.icgc.org/dictionary.html">here</a>
</div>
</pre>
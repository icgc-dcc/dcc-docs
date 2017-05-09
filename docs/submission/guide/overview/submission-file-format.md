# Submission File Format

### File Structure

* The submission data must be in tab-delimited format.
* Each column corresponds to a data element defined in [DCC Data Element specification][1].
* Column order and case must match the data elements in DCC Element specification
* Extra columns are not allowed
* Required values cannot have null values
* Each mutation/variant is represented as a row (one mutation per row)

An example file is shown below (note that parts of the lines are omitted for readability):

| analysis_id | analyzed_sample_id | mutation_type | chromosome | chromosome_start | chromosome_end | reference_genome_allele | control_genotype | mutated_from_allele | mutated_to_allele | tumour_genotype
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| m124  |  ssm_3396649   |  3 | 20 | 49510011    |    49510012 | GA     |   GA/GA  |   GA | - | GA/-
| m124  |  ssm_61023021  |  2 | X | 115303927    |   115303927 | -     |    -/-   |    - | T | -/T
| m124  |  ssm_175270973 |  4 | 15 | 39884779    |    39884787 | ACTCAGACC | ACTCAGACC/ACTCAGACC | ACTCAGACC | TTGT | ACTCAGACC/TTGT
| m124  |  ssm_175270973 |  1 | 15 | 39884792    |   39884792 | C | C/C |    C | T | C/T
| m124  |  ssm_4545634   |  3 | 12 | 23454340    |    23454341 | GA    |    GA/GA  |   GA | - | GA/-

### ICGC DCC Data File Specification

ICGC DCC provides a data file specification for each data type which details the required format to construct a valid submission file. You can view the current ICGC DCC Data Specification [here ][1].

| Column |  Description |
| ---- | ---- |
| Data Element ID |  Name of the column that must be included in the submission file |
| Name |  The descriptive name of the Data Element ID |
| Description |  Definition of the Data Element ID |
| Data Type |  The required type required for the given Data Element ID (ie. Integer, text,controlled vocabulary) |
| CV Codes |  Controlled vocabulary (if applicable to the Data Element ID) |
| Required? |  Indicates whether the Data Element ID requires a value |
| N/A Code Valid |  Indicates whether the Data Element ID accepts the reserve codes -777 or -888 |
| Controlled Access |  Indicates whether Data Element ID is open or controlled access |
| Regexp |  A Java regular expression indicating required format |
| Examples |  Examples of valid values |
| Notes |  Additional notes describing requirements/restrictions and cross-field validation checks |

### Current Dictionary and Codelists

To view current dictionary, please go to [Dictionary Viewer][2]. Green-highlighted rows, such as "donor_id" are considered identifier data fields (foreign keys) and must be unique for each row.

Alternatively, you can also access the JSON format of the DCC Data Specification via REST webservice. Please see [Submission API][3] for details


### File Naming Conventions

#### Clinical/Experimental Files

<table class="confluenceTable">
<tbody>
<tr>
<th colspan="1" class="confluenceTh">Category</th>
<th colspan="1" class="confluenceTh">Data type</th>
<th colspan="1" class="confluenceTh">File type</th>
<th colspan="1" class="confluenceTh">File name</th>
<th colspan="1" class="confluenceTh">
<p><strong>Description</strong></p>
</th>
</tr>
<tr>
<td rowspan="3" class="confluenceTd">
<p style="text-align: center;"></p>
<p style="text-align: center;">Core Clinical Files</p>
</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">donor</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"> </td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">donor.txt[.gz|.bz2]</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">Donor information</td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">specimen</td>
<td colspan="1" class="confluenceTd"> </td>
<td colspan="1" class="confluenceTd">specimen.txt[.gz|.bz2]</td>
<td colspan="1" class="confluenceTd">Specimen information</td>
</tr>
<tr>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">sample</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"> </td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">sample.txt[.gz|.bz2]</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">Analyzed sample information</td>
</tr>
<tr>
<td rowspan="5" class="confluenceTd">
<p style="text-align: center;">Optional Clinical Files</p>
</td>
<td colspan="1" class="confluenceTd"><em>surgery</em></td>
<td colspan="1" class="confluenceTd"> </td>
<td colspan="1" class="confluenceTd">surgery[.gz|.bz2]</td>
<td colspan="1" class="confluenceTd"><em>Donor surgery information</em></td>
</tr>
<tr>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"><em>exposure</em></td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"> </td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">exposure[.gz|.bz2]</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"><em>Donor environmental exposure</em></td>
</tr>
<tr>
<td colspan="1" class="confluenceTd"><em>family</em></td>
<td colspan="1" class="confluenceTd"> </td>
<td colspan="1" class="confluenceTd">family.txt[.gz|.bz2]</td>
<td colspan="1" class="confluenceTd"><em>Donor family history</em></td>
</tr>
<tr>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"><em>biomarker</em></td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"> </td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">biomarker.txt[.gz|.bz2]</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"><em>Donor biomarkers</em></td>
</tr>
<tr>
<td colspan="1" class="confluenceTd"><em>therapy</em></td>
<td colspan="1" class="confluenceTd"> </td>
<td colspan="1" class="confluenceTd">therapy.txt[.gz|.bz2]</td>
<td colspan="1" class="confluenceTd"><em>Donor therapy</em></td>
</tr>
<tr>
<td rowspan="20" class="confluenceTd">
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;"></p>
<p style="text-align: center;">Experimental</p>
<p style="text-align: center;">Files</p>
<p></p>
</td>
<td class="highlight-blue confluenceTd" data-highlight-colour="blue" rowspan="2">ssm</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">metadata</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">ssm_m.txt[.gz|.bz2]</td>
<td class="highlight-blue confluenceTd" data-highlight-colour="blue" rowspan="2">Simple somatic mutations including single base substitutions and indels of ≤200 bp</td>
</tr>
<tr>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue">primary</td>
<td class="highlight-blue confluenceTd" colspan="1" data-highlight-colour="blue"><span>ssm_p.txt[.gz|.bz2]</span></td>
</tr>
<tr>
<td rowspan="2" class="confluenceTd">sgv</td>
<td colspan="1" class="confluenceTd"><span>metadata</span></td>
<td colspan="1" class="confluenceTd">sgv_m.txt[.gz|.bz2]</td>
<td rowspan="2" class="confluenceTd">Simple germline variations including single base substitutions and indels of ≤200 bp</td>
</tr>
<tr>
<td colspan="1" class="confluenceTd"><span>primary</span></td>
<td colspan="1" class="confluenceTd"><span>sgv_p.txt[.gz|.bz2]</span></td>
</tr>
<tr>
<td class="highlight-blue confluenceTd" data-highlight-colour="blue" rowspan="3">cnsm</td>
<td>metadata</td>
<td>cnsm_m.txt[.gz|.bz2]</td>
<td>Copy number somatic mutations</td>
</tr>
<tr>
<td>primary</td>
<td>cnsm_p.txt[.gz|.bz2]</td>
</tr>
<tr>
<td>secondary</td>
<td>cnsm_s.txt[.gz|.bz2]</td>
</tr>
<tr>
<td rowspan="3">stsm</td>
<td>metadata</td>
<td>stsm_m.txt[.gz|.bz2]</td>
<td>Structural somatic mutations</td>
</tr>
<tr>
<td>primary</td>
<td>stsm_p.txt[.gz|.bz2]</td>
</tr>
<tr>
<td>secondary</td>
<td>stsm_s.txt[.gz|.bz2]</td>
</tr>
<tr>
<td rowspan="2">exp</td>
<td>metadata</td>
<td>exp_m.txt[.gz|.bz2]</td>
<td>Gene expression</td>
</tr>
<tr>
<td>gene expression</td>
<td>exp_g.txt[.gz|.bz2]</td>
</tr>
<tr></tr>
<td rowspan="3">mirna</td>
<td>metadata</td>
<td>mirna_m.txt[.gz|.bz2]</td>
<td>miRNA expression</td>
</tr>
<tr>
<td>primary</td>
<td>mirna_p.txt[.gz|.bz2]</td>
</tr>
<tr>
<td>secondary</td>
<td>mirna_s.txt[.gz|.bz2]</td>
</tr>
<tr>
<td rowspan="2">jcn</td>
<td>metadata</td>
<td>jcn_m.txt[.gz|.bz2]</td>
<td>Exon junction</td>
</tr>
<tr>
<td>primary</td>
<td>jcn_p.txt[.gz|.bz2]</td>
</tr>
<tr>
<td rowspan="2">pexp</td>
<td>metadata</td>
<td>pexp_m.txt[.gz|.bz2]</td>
<td>Protein expression</td>
</tr>
<tr>
<td>primary</td>
<td>pexp_p.txt[.gz|.bz2]</td>
</tr>
</tbody></table>

[1]: /dictionary/release-17/
[2]: /dictionary/viewer/
[3]: /submission/api/

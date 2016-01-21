# Sample Type Specification

## Summary

This specification details what the expected specimen_type/reference_sample_type should be for the sample ID fields analyzed_sample_id and matched_sample_id in each of the metadata files.

## Specimen Type Categories

We can categorize the terms in the [specimen_type][1] codelist into two categories - Normal or Non-Normal. The Non-Normal category encompasses all types of Primary tumour, Recurrent tumour, Metastatic tumour, Xenograft and Cell line tumours.

| Normal |  Non-Normal |
| ----- | ---- |
| Normal - solid tissue |  Primary tumour - solid tissue |
| Normal - blood derived |  Primary tumour - blood derived (peripheral blood) |
| Normal - bone marrow |  Primary tumour - blood derived (bone marrow) |
| Normal - tissue adjacent to primary |  Primary tumour - additional new primary |
| Normal - other |  Primary tumour - other |
| Normal - lymph node |  Primary tumour - lymph node |
| Normal - EBV immortalized |  Recurrent tumour - solid tissue |
| Normal - buccal cell |  Recurrent tumour - blood derived (peripheral blood) |
|   |  Recurrent tumour - blood derived (bone marrow) |
|   |  Recurrent tumour - other |
|   |  Metastatic tumour - NOS |
|   |  Metastatic tumour - lymph node |
|   |  Metastatic tumour - metastasis local to lymph node |
|   |  Metastatic tumour - metastasis to distant location |
|   |  Metastatic tumour - additional metastatic |
|   |  Xenograft - derived from primary tumour |
|   |  Xenograft - derived from tumour cell line |
|   |  Cell line - derived from tumour |
|   |  Primary tumour - lymph node |
|   |  Metastatic tumour - other |
|   |  Cell line - derived from xenograft tumour |

## Expected Sample Types

In order to denote a mutation for simple somatic, copy number and structural somatic mutations, a non-normal analyzed sample must be compared against a normal sample. For simple germline variation, the analyzed sample must always be normal.

<table>
<tbody>
<tr>
<th>Data Type</th>
<th>File-specific Sample Field</th>
<th>Expected specimen_type</th>
<th>Expected reference_sample_type</th>
</tr>
<tr>
<td rowspan="2" class="confluenceTd">ssm_m</td>
<td class="confluenceTd">
<p>analyzed_sample_id</p>
</td>
<td class="confluenceTd">Non-normal</td>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td class="confluenceTd">matched_sample_id</td>
<td class="confluenceTd">Normal</td>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td rowspan="2" class="confluenceTd">cnsm_m</td>
<td class="confluenceTd">analyzed_sample_id</td>
<td class="confluenceTd">Non-normal</td>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td class="confluenceTd">matched_sample_id</td>
<td class="confluenceTd">Normal</td>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td rowspan="2" class="confluenceTd">stsm_m</td>
<td class="confluenceTd">analyzed_sample_id</td>
<td class="confluenceTd">Non-normal</td>
<td class="highlight-grey confluenceTd" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">matched_sample_id</td>
<td colspan="1" class="confluenceTd">Normal</td>
<td class="highlight-grey confluenceTd" colspan="1" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">sgv_m</td>
<td colspan="1" class="confluenceTd">analyzed_sample_id</td>
<td colspan="1" class="confluenceTd">Normal</td>
<td class="highlight-grey confluenceTd" colspan="1" data-highlight-colour="grey"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">jcn_m</td>
<td colspan="1" class="confluenceTd"><span>analyzed_sample_id</span></td>
<td colspan="1" class="confluenceTd">Any</td>
<td colspan="1" class="confluenceTd"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">pexp_m</td>
<td colspan="1" class="confluenceTd"><span>analyzed_sample_id</span></td>
<td colspan="1" class="confluenceTd">Any</td>
<td colspan="1" class="confluenceTd"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">meth_array_m</td>
<td colspan="1" class="confluenceTd"><span>analyzed_sample_id</span></td>
<td colspan="1" class="confluenceTd"><span>Any</span></td>
<td colspan="1" class="confluenceTd"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">meth_seq_m</td>
<td colspan="1" class="confluenceTd"><span>analyzed_sample_id</span></td>
<td colspan="1" class="confluenceTd"><span>Any</span></td>
<td colspan="1" class="confluenceTd"> </td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">exp_array_m</td>
<td colspan="1" class="confluenceTd">analyzed_sample_id</td>
<td colspan="1" class="confluenceTd">Any</td>
<td rowspan="3" class="confluenceTd">

<li>If specimen_type for analyzed_sample_id is Normal:<br>
<ul><a href="http://docs.icgc.org/dictionary/viewer/#?viewMode=codelist">reference_sample_type</a> cannot be "matched_normal"</ul>
</li>
<p>
</p><li>If the specimen_type for analyzed_sample_id is Non-normal:<br>
<ul><a href="http://docs.icgc.org/dictionary/viewer/#?viewMode=codelist">reference_sample_type</a> can be any reference_sample_type</ul>
</li>
<p></p>

</td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">exp_seq_m</td>
<td colspan="1" class="confluenceTd">analyzed_sample_id</td>
<td colspan="1" class="confluenceTd"><span>Any</span></td>
</tr>
<tr>
<td colspan="1" class="confluenceTd">mirna_seq_m</td>
<td colspan="1" class="confluenceTd">analyzed_sample_id</td>
<td colspan="1" class="confluenceTd"><span>Any</span></td>
</tr>
</tbody>
</table>
 

[1]: /dictionary/viewer/#?viewMode=table&dataType=specimen

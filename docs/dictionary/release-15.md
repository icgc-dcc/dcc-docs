# Dictionary v0.7e (Jan., 2014. Release 15)

#### January 10th 2014
**Change between 0.7d and 0.7e:** 

* Removed MVEL script restriction for expressed_allele in Simple Somatic Mutations Primary (ssm_p) data file specification  

#### January 6th 2014
**Change between 0.7c and 0.7d:** 

* MVEL script restriction changed in Simple Somatic Mutations (ssm_p) and Simple Germline Variation (sgv_p) Primary data file specification so mutant_allele_read_count and variant_allele_read_count can also be equal to total_read_count  

#### December 12th 2013
**Change between 0.7b and 0.7c:** 

* Allows submission of RNAseq data. **Please note, we are not accepting array-based data though for this Release**  

#### December 11th 2013
**Change between 0.7a and 0.7b:** 

* A check was added to ensure the chromosome start position is less than or equal to the chromosome end position. This check was implemented in the MVEL script restriction for the "chromosome_start" and "chromosome_end" data elements.


##### Changes to Specifications Since Version 0.6e (Sept 2013)

_Improvements:_

* Improved Simple Somatic Mutation (SSM) submission file specification, added detailed explanation and examples.
* Simplified regular expressions in DCC Data Element specification
* Examples now provided for certain data elements to show valid values
* Cross-field validation checks using MVEL scripts
* Additional notes explaining validation criteria.
* Improved error reporting in submission system

_Other Changes:_

* Column order and case must match data file specification order/case
* Extra columns no longer allowed
* Simple Somatic Mutations restricted to forward strand
* Standardized file naming convention enforced
* Only assembly version GRCh37 used

_Revisions to Data Elements:_

**Simple Somatic Mutations - Primary File (ssm_p):**

Changes made to Simple Somatic Mutations (SSM) primary file to handle open/controlled access germline data:

| Data Element ID |  Comment |
| ----- | ---- |
| chromosome_strand | restricted to forward strand (1) (required) |
| refsnp_allele | Removed |
| refsnp_strand | Removed |
| control_genotype | changed to controlled-access (required) |
| mutated_from_allele | <ul><li>new field, controlled-access (required)</li><li>defined as the allele that is believed to be the original allele in the ancestral cell that was mutated in the tumour cell.</li></ul> |
| mutated_to_allele | <ul><li>new field, open access (required)</li><li>defined as the new allele identified in the tumour sample that is believed to be the resulting allele of a somatic mutation event during tumourgenesis.</li></ul> |
| tumour_genotype | changed to controlled-access (required) |
| mutation_id | Removed |
| expressed_allele | changed to controlled-access (N/A valid) |
| total_read_count | renamed from "read_count" (required) |
| is_annotated | Removed |
| mutant_allele_read_count | <ul><li>new field (required)</li><li>defined as the total number of raw reads containing the mutant allele</li></ul> |
| xref_ensembl_id | Removed |
| biological_validation_status | <ul><li>new field (required)</li><li>defined as whether the mutation/variation has been observed in a larger cohort/sample size, and is not an artifact or consequence of sample selection for sequencing</li></ul>|
| biological_validation_platform | <ul><li>new field (N/A valid)</li><li>defined as the identifier of assay platform or technology used to validate the mutation/variation</li></ul> |
| uri | Removed |
| db_xref | Removed |

**Simple Somatic Mutations - Secondary File (ssm_s)**

* Removed

**Simple Germline Variation - Primary File (sgv_p)**

* Removed

| Data Element ID |  Comment |
| ---- | ---- |
| variant_id |  Removed |
| chromosome_strand | restricted to forward strand (1) (required) |
| refsnp_allele | Removed |
| refsnp_strand | Removed |
| genotype | renamed from "control_genotype" (required) |
| variant_allele | <ul><li>new field (required)</li><li>defined as the allele in the genotype that is different from the reference genome allele</li></ul> |
| tumour_genotype | Removed |
| expessed_allele | Removed |
| total_read_count | renamed from "read_count" (required) |
| variant_allele_read_count | <ul><li>new field (required)</li><li>defined as number of raw reads containing variant allele</li></ul>|
| is_annotated | Removed |
| xref_ensembl_id | Removed |
| uri | Removed |
| db_xref | Removed |
| note | Removed |


**Simple Germline Variation - Metadata File (sgv_m):**

| Data Element ID |  Comment |
| ----- | ---- |
| matched_sample_id | Removed |
| uri | Removed |
| db_xref | Removed |

**Specimen and Sample Files:**

| Data Element ID |  Comment |
| ---- | ---- |
| percentage_cellularity | Removed |
| level_of_cellularity | Removed |

**For all other Data types (Copy Number Somatic Mutations (cnsm), Gene Expression (gene), miRNA Expression (mirna), Structural Somatic Mutations (stsm) and Splice Variation (jcn)) including Primary, Secondary and Metadata files:**

* removed "**uri**" and "**db_xref**" from all submission files
* added **"biological_validation_status**" and "**biological_validation_platform**" to all primary files

 

_Revisions to CV Tables:_

**GLOBAL.0.chromosome**

* changed Term IDs to actual chromosome values, ie X, Y, MT instead of 23, 24, 25
* removed all other contigs in GRCh37

**GLOBAL.0.assembly**:

* Changed to accept only GRCh37

**GLOBAL.0.sequencing_strategy**:

* Added new term: "Non-NGS"

**GLOBAL.0.verification_status**:

* Made descriptions under "Term" more specific

**specimen.0.cellularity.v1**:

* new table for "level_of_cellularity" data element in Specimen data file

**GLOBAL.0.biological_validation_status.v1**:

* new table for "biological_validation_status" data element in primary files  
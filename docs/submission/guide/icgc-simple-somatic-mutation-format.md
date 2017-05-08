# ICGC Simple Somatic Mutation Format

### Important Notes

#### chromosome coordinates

* The first base of a chromosome starts at 1 and counts onward along the forward strand until the end.
* The value of chromosome_start must be less than or equal to chromosome_end
* The size of a feature is calculated as: chromosome_end - chromosome_start + 1
* For mutations that are single-base substitutions, deletions or multiple-base substitutions, use the start and end coordinates of the corresponding chromosome interval on the reference genome where the mutation occurs.
* For mutations that are insertions, use the coordinates of the position on the chromosome that is immediately after the insertion point.

#### chromosome_strand

* 'chromosome_strand' is used to record the reference genome strand on which the genotype alleles are located
* In ICGC simple somatic mutation format, we require the forward strand sequence is always used for genotypes
* 'chromosome_strand' does not have anything to do with the strandness of the gene that contains the simple mutation

#### control_genotype, tumour_genotype

* Genotype is presented as nucleotide sequence of all allele(s). For example, in a diploid genome on chromosome 1 at position 12345, if one allele on the forward strand is A and the other is G, then the genotype is presented as A/G and 'chromosome_strand' being '1' (i.e. forward strand)
* In the case that the genotype is hemizygous (e.g. G allele is missing), it can be presented as A/-.
* 'control_genotype' and 'tumour_genotype' are used to record genotype for the matched control sample and the primary tumour sample, respectively. Both genotypes must be presented using the same strand of the reference genome.

#### reference_genome_allele

* 'reference_genome_allele' is the forward strand nucleotide(s) at the corresponding location on the reference genome where the somatic mutation is detected in the tumour sample.

### How do I represent an insertion?

* Use the position of the nucleotide on the chromosome that is immediately **after** the insertion point. The rationale is that the inserted base starts at the specified chromosome start position.
* Example: an insertion of a single base "T" after "A" at position 56. Use position 56 to represent the insertion chromosome start position.

| Position |  55 |  56 |  57 |  58 |
| ---- | ---- | ---- | ---- | ---- |
| Reference Genome |  A |  G |  C |  A |
| Tumour Genome |  A |  **T** |  G |  C |

| mutation type |  chromosome start |  chromosome end |  reference genome allele |  control genotype |  tumour genotype |  mutated from allele | mutated to allele |
| ---- |  ---- |  ---- |  ---- |  ---- |  ---- |  ---- | ---- |
| insertion |  56 |  56 |  - |  \- / - |  - /T |  - |  T |

### How do I represent a deletion?

* Use the start position and end position of the deleted mutated fragment to represent the deletion.
* Example: A deletion of "TCTT" at chromosome start position 124.

| Position |  123 |  124 |  125 |  126 |  127 |
| ---- |  ---- |  ---- |  ---- |  ---- | ---- |
| Reference Genome |  C |  T |  C |  T |  T |
| Tumour Genome |  C |  **T** |  **C** |  **T**  |  **T** |

| mutation type |  chromosome start |  chromosome end |  reference genome allele |  control genotype |  tumour genotype |  mutated from allele | mutated to allele |
| ---- |  ---- |  ---- |  ---- |  ---- |  ---- |  ---- | ---- |
| deletion |  124 |  127 |  TCTTT |  TCTT/TCTT |  TCTT/- |  TCTT |  - |

### How do I represent a single-base substitution?

* Use the corresponding chromosome interval on the reference genome where the single-base mutation is located.
* Example: A mutation occurs at position 51 where G is substituted with C. The chromosome start position will be 51.

| Position |  50 |  51 |  52 |  53 |
| ---- |  ---- |  ---- |  ---- |  ---- |
| Reference Genome |  T |  G |  T |  A |
| Tumour Genome |  T |  **C** |  T |  A |

| mutation type |  chromosome start |  chromosome end |  reference genome allele |  control genotype |  tumour genotype |  mutated from allele | mutated to allele |
| ---- |  ---- |  ---- |  ---- |  ---- |  ---- |  ---- | ---- |
| single-base substitution |  51 |  51 |  G |  G/G |  G/C |  G |  C |

### How do I represent a multiple-base substitution?

* Use the start and end coordinates of the mutated fragment.
* Example: The sequence "ACTCAGACC" starting from position 50 to 58 is substituted with the sequence "TTGT".

| Position |  50 |  51 |  52 |  53 |  54 |  55 |  56 |  57 |  58 |
| ---- |  ---- |  ---- |  ---- |  ---- | ---- | ---- | ---- | ---- | ---- |
| Reference Genome |  A |  C |  T |  C |  A |  G |  A |  C |  C |
| Tumour Genome |  **T** |  **T** |  **G** |  **T** |    |    |    |    |    |  

| mutation type |  chromosome start |  chromosome end |  reference genome allele |  control genotype |  tumour genotype |  mutated from allele | mutated to allele |
| ---- |  ---- |  ---- |  ---- |  ---- |  ---- |  ---- | ---- |
| multiple-base substitution |  50 |  58 |  ACTCAGACC |  ACTCAGACC/ACTCAGACC |  ACTCAGACC/TTGT |  ACTCAGACC |  TTGT |

 

### **VCF-like vs. ICGC-like Mutation Format:**

The table below highlights the differences between VCF-like mutation format and the mutation format used by ICGC.

| Format |  mutation type |  chromosome start |  chromosome end |  reference genome allele |  control genotype |  tumour genotype | mutated from allele (new field) | mutated to allele (new field) |
| ---- |  ---- |  ---- |  ---- |  ---- | ---- | ---- | ---- | ---- |
| VCF-like |  deletion |  49510010 |  49510012 |  TGA |  TGA/TGA |  TGA/T |    |    |
| ICGC Format |  deletion |  49510011 |  49510012 |  GA |  GA/GA |  GA/- |  GA |  - |
| VCF-like |  insertion |  115303927 |  115303927 |  A |  A/A |  A/AT |    |    |
| ICGC Format |  insertion |  115303928 |  115303928 |  - |  -/- |  -/T |  - |  T |
| VCF-like |  multiple-base substitution |  39884779 |  39884787 |  ACTCAGACC |  ACTCAGACC/ACTCAGACC |  ACTCAGACC/TTGT |    |    |
| ICGC-like |  multiple-base substitution |  39884779 |  39884787 |  ACTCAGACC |  ACTCAGACC/ACTCAGACC |  ACTCAGACC/TTGT |  ACTCAGACC |  TTGT |  

### Germline Data Masking

As of Release 15, ICGC DCC will be censoring the patient's germline genotype in Simple Somatic Mutation data in the case where genotype consists of allele(s) that does not match the reference genome allele. Detailed explanation is [here](/portal/methods/#germline-data-masking).

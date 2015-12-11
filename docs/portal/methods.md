# Methods 

The ICGC Data Portal uses gene models produced by Ensembl [http://www.ensembl.org](http://www.ensembl.org).

The canonical gene data (release 75) is available from Ensembl FTP site at [ ftp://ftp.ensembl.org/pub/release-75/mysql/homo_sapiens_core_75_37][1]. We downloaded files with gene, transcript, translation, exon, xref, and domain etc data, built a document-oriented data store with essential gene information. We then further integrated gene summary information downloaded from NCBI Entrez Gene. This gene document is then integrated with somatic mutation datasets based on mutation consequence annotation (described in the next section) results.

As part of the effort to enable cross cancer projects functional analysis, we perform standardized gene consequences annotation, using Sequence Ontology's controlled vocabulary regarding mutation-induced changes ([www.sequenceontology.org][2]). This type of annotation provides a list of predicted gene effects, such as a non-conservative amino acid substitution, but does not attempt to prioritize the changes by their functional impact. Simple somatic mutation data submitted by member projects are annotated using the variant annotation tool SnpEff (v3.3c, ) recommended by the ICGC Mutation Consequences and Pathways (MUCOPA) Working Subgroup (Nature Methods, 2013, PMID:[23900255][3]).

In order to assess functional impact of non-synonymous (SO term: [_missense_variant_][4]) somatic mutations on protein coding genes, we used well-known prediction tools (currently [FatHMM][5], with more to be added such as [Mutation Assessor][6] and [SIFT][7]) to compute functional impact scores and assign impact categories. ICGC DCC defines the following four categories: _High_, _Medium_, _Low_ and _Unknown_.

We first compute original impact prediction with these different tools for all simple somatic mutations (_SSM_) that cause _missense_ consequence, each mutation is expressed at amino acid level, e.g., _ENSP00000358548 Q61R_ to feed into individual functional impact prediction tools. When a mutation affects multiple splice forms of the same gene, prediction will be performed on all of them whenever possible. For a particular mutation, using a simple rule-based approach, predictions for each transcript isoform reported by different tools will then be summarized to a single impact category. The rule is straightforward: the highest impact category will be picked up from results of all tools. When no prediction is reported, _Unknown_ is assigned.

For all other SSMs that cause consequence other than _missense_, impact category will be assigned based on consequence type a mutation causes. _High_ impact will be assigned for _frameshift_variant, non_conservative_missense_variant, initiator_codon_variant, stop_gained_ and _stop_lost_, _Unknown_ will be assigned for all other mutations.

In order to assess how often a particular simple somatic mutation (SSM) occurs in cancer patients, we establishes specific criteria to determine whether SSMs reported from different donors are considered to be the same. When all of these fields from two reported SSMs: chromosome, chromosome start, chromosome end, mutation type, DNA change, genome assembly version are identical, they are merged into one mutation entity. With this, we build a non-redundant collection of all simple somatic mutations. Each mutation entry in the collection is assigned a stable identifier for persisted referencing portal wide and across releases. Information for linking these non-redundant SSMs to the reported ones is also kept, enabling mutation counts across donors.

When a somatic mutation falls on the same position as a germline SNP, there is potential to leak a small amount of germline data. To prevent this, as of Release 15, ICGC DCC will be censoring the patient's germline genotype in the case where it does not match the reference genome allele:

* the mutated allele from control genotype will be replaced with the reference gernome allele when we publish to the open-access tier.
* the germline genotype that was censored will be flagged internally and the patient's true genotype will only be available to researchers' with access to controlled tier.

Upon a valid submission, a report will be generated indicating the total number of submitted simple somatic mutation observations, and the total number of controlled access simple somatic mutation observations:

1. Total number of the submitted SSM observations
2. Number of SSMs marked as controlled (containing germline data)
3. Percentage of observations marked as controlled

**Example of open access simple somatic mutation:**

* The alleles in the control_genotype match the reference_genome_allele. This mutation will be accessible for both open-access and controlled-access tiers.


| reference_genome_allele |  control_genotype |  tumour_genotype |  mutated_from_allele |  mutated_to_allele |  masked_flag |
| ---- | ---- | ---- | ---- | ---- | ---- |
| A |  A/A |  A/G |  A |  G |  Open |

**Example of controlled access simple somatic mutation:**

* The control_genotype contains an allele (T) which is different from the reference_genome_allele (G).
* This mutation will only be accessible at the controlled-access tier

| reference_genome_allele |  control_genotype |  tumour_genotype |  mutated_from_allele |  mutated_to_allele |  masked_flag |
| ---- | ---- | ---- | ---- | ---- | ---- |
| G |  G/T |  G/C |  T |  C |  Controlled |

* How this mutation will be censored in _open-access tier_:
    * The mutated_from_allele (T) will be masked using the reference_genome_allele (G) so the true germline allele (T) will not be leaked. This masked mutation will be accessible in open-access tier.
    * Please be advised that the open-access tier contains a small fraction of mutations that are masked (ie. they are different from the original true mutations). To access the original true mutations, one must apply for access to controlled-access to [DACO][8] (Data Access Compliance Office) 

| reference_genome_allele |  control_genotype |  tumour_genotype |  mutated_from_allele |  mutated_to_allele |  masked_flag |
| ---- | ---- | ---- | ---- | ---- | ---- |
| G |    |    |  G |  C |  Masked |

### Gene sets source ###

**Reactome Pathways**

* Pathway entries: [http://www.reactome.org/ReactomeRESTfulAPI/RESTfulWS/pathwayHierarchy/ho...](http://www.reactome.org/ReactomeRESTfulAPI/RESTfulWS/pathwayHierarchy/homo+sapiens "http://www.reactome.org/ReactomeRESTfulAPI/RESTfulWS/pathwayHierarchy/homo+sapiens")
* Pathway to gene mapping file: [http://www.reactome.org/download/current/UniProt2Reactome.txt](http://www.reactome.org/download/current/UniProt2Reactome.txt "http://www.reactome.org/download/current/UniProt2Reactome.txt")
* Pathway summation file: [http://www.reactome.org/download/current/pathway2summation.txt](http://www.reactome.org/download/current/pathway2summation.txt "http://www.reactome.org/download/current/pathway2summation.txt")

**Gene Ontology**

Note that ICGC does not display complete list of GO terms available on GO website (exclusion of obsolete GO and GO that are not annotated to human genes).

* Inferred Trees: [http://geneontology.org/ontology/go.owl](http://geneontology.org/ontology/go.owl "http://geneontology.org/ontology/go.owl")
* GO Terms: [http://purl.obolibrary.org/obo/go.obo](http://purl.obolibrary.org/obo/go.obo "http://purl.obolibrary.org/obo/go.obo")
* GO Associations: [http://geneontology.org/gene-associations/gene_association.goa_human.gz](http://geneontology.org/gene-associations/gene_association.goa_human.gz "http://geneontology.org/gene-associations/gene_association.goa_human.gz")

**Curated Gene Sets**

* Cancer Gene Census: [http://cancer.sanger.ac.uk/cancergenome/projects/census/](http://cancer.sanger.ac.uk/cancergenome/projects/census/)

### Gene Set Enrichment Analysis ###

Gene Set Enrichment Analysis is a method to identify statistically significantly over-represented groups of gene sets (eg, pathways or GO terms) when comparing user input genes and genes from a chosen background (such as all genes annotated with GO biological process terms). You can launch Enrichment Analysis from the Gene tab in Advanced Search or from Set Analysis.

Statistical methods used in Gene Set Enrichment Analysis:

* Hypergeometric test to calculate significance of over-representation.
* Benjamini-Hochberg procedure is used for multiple test correction by controlling user selected FDR threshold.

[1]: ftp://ftp.ensembl.org/pub/release-75/mysql/homo_sapiens_core_75_37/
[2]: www.sequenceontology.org
[3]: http://www.ncbi.nlm.nih.gov/pubmed/?term=23900255
[4]: http://www.sequenceontology.org/miso/current_release/term/SO:0001583
[5]: http://www.ncbi.nlm.nih.gov/pubmed/23033316
[6]: http://mutationassessor.org/
[7]: http://sift.jcvi.org/
[8]: http://icgc.org/daco
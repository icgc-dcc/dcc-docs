# Data Analysis

### Objective

Data analysis is a virtual environment that allows Data Portal users to create and save donor, gene and mutation sets of their interest, and then launch various analyses using selected set(s) as input.  
The ICGC Data Portal will provide analysis tools such as Enrichment Analysis, Set Operation or Phenotype Comparison.

### How to use Data Analysis feature

1. Go to Advanced Search, execute your query (e.g. upload gene set and add consequence type criteria) then save the resulting donors, genes or mutations set, which will be saved in Data Analysis. You can execute other queries and save corresponding sets.
2. Go to Data Analysis > Saved Sets tab: this page displays your saved sets. You can delete them or view content in Advanced Search.
3. Go to Data Analysis > Launch Analysis tab. Select the analysis you want to launch, for example Set Operation. Then select the input saved sets you want to use and click on Run button.
4. Data Analysis > Result tab: Analysis result is then displayed in this tab, for example a venn diagram. You can perform Set Operation and save result as a new set or view set in Advanced Search.

### List of actual analyses on data portal

* Enrichment Analysis:

    * Select a gene set with a maximum of 10,000 genes to launch Enrichment Analysis.
    * See calculation methodology on this link: [Gene Set Enrichment Analysis](/portal/methods/#gene-set-enrichment-analysis).
  
* Set Operation:

    * Select 2 to 3 saved sets of the same type (donor, gene or mutation) to run Set Operation.
    * Find out intersection, union, not included etc from selected input sets, for e.g. common genes between 2 or 3 gene sets, mutations in set A that are not in set B.

* Phenotype Comparison:

    * Select 2 or 3 donor sets from your saved sets.
    * Compare characteristics between your donor sets, currently: gender, vital status and age at diagnosis (but other phenotypes to come).
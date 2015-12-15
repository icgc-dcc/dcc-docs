# MVEL Script Restriction: Example Cases | International Cancer Genome Consortium

What does this script restriction for the "mutated_to_allele" field in the Simple Somatic Mutations Primary (ssm_p) file mean?

```javascript
var allele = null;
if (ctrlAlleles contains mutated_to_allele) {
    for (allele:tumourAlleles) {
        if (mutated_to_allele != allele) {
            return false
        }
    }
} else {
    if (!(tumourAlleles contains mutated_to_allele)) {
        return false
    }
}
```

This MVEL script restriction checks to make sure "mutated_to_allele" is one of the mutated alleles in tumour_genotype. The following example mutation is not valid:

**Invalid Mutation:**

reference_genome_allele: G  
control_genotype: G/G  
tumour_genotype: G/T  
mutated_from_allele: G  
**mutated_to_allele: G**

One of the alleles in tumour_genotype is actually mutated (G/T). Therefore, mutated_to_allele should be "T" instead of "G".

**Valid mutation:**

reference_genome_allele: G  
control_genotype: G/G  
tumour_genotype: G/T  
mutated_from_allele: G  
mutated_to_allele: T  
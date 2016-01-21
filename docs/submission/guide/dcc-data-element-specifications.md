# DCC Data Element Specifications

## General Notes on Data Elements

### Column Order and Case

**Column order and case must match the data file specification order/case.**

### Data Elements Containing Identifiers

Certain data elements described in the submission manual are regarded as "identifiers". Examples include:

* Donor: "donor_id"
* Specimen: "specimen_id"
* Sample: "sample_id"
* Primary analysis files: "analysis_id"'

In general, the following rules apply to identifiers:

* these identifiers should be values that **uniquely identify the entity they refer to** (eg: a donor, a SSM, an analysis run)
* the identifier's value should be globally unique within a centre's data submissions. 
* identifiers referring to the same entities should be consistent across prepared submission files. For example, the same analyzed sample should not be assigned different identifiers across multiple analysis types, or in subsequent data submissions.
* Columns considered to be identifier data elements are highlighted in green in the data file specification.
* Identifiers cannot begin with DO*, SA* or SP*. These prefixes are reserved for ICGC IDs.


**The same identifier value should not be re-used to refer to two different entities, but can occur more than once within submission files when used to refer to the same entity.**

### Missing or Unknown Values

When preparing submission files, providing a **_null_** value (or empty string) for any of the required data elements **is not valid**.

For any of the data elements described (excluding those containing identifiers) where a value _cannot be provided_, the following reserve codes should be used in place of a _null_ value:

| Code | Meaning |
| ---- | ---- |
| **-888** | "not applicable" |
| **-777** | "data verified to be unknown" |

* **'N/A Valid'** indicates the field accepts -777 or -888 reserve codes
* **'N/A Invalid'** indicates the field does not accept -777 or -888 reserve codes. A valid value must be provided

 

Examples:

* The verification_status data element is submitted as "tested and not valid". The appropriate value to enter in the "validation_platform" is -888 since platform information is not applicable in this case.
* A variation algorithm was not used, so the "variation_algorithm" data element can be submitted as -888 (not applicable)
* The stable gene ID for a given mutation/variant is unknown. The data element "gene_stable_id" can be submitted as -777 (data verified to be unknown) 

### Cross-field validation and regular expression restrictions:

Regular expressions (in Java format) specifying the exact format required, as well as examples for certain data elements are provided to help the submitter conform their data to the DCC Data Element specifications. In addition, as of Release 15, DCC has implemented "script restrictions" using [MVEL][1], to ensure cross-field validation checks. For the advanced user, you will be able to see the actual cross-field validation scripts in the JSON format of the DCC Data Element specification. There is also text in the HTML data file specification tables explaining the different types of restrictions put into place to help the submitter ensure their data is valid. 

 

[1]: https://en.wikisource.org/wiki/MVEL_Language_Guide

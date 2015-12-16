# Clinical Data Submission File Specifications | International Cancer Genome Consortium

### Overview

There are three **required** clinical and tissue annotation submission files, and five **optional** template files:

![][1]

**_All data submissions to the DCC must include the three core clinical data files._**

#### Core Clinical Data Files

1. _Donor Data File (donor)_  
**Mandatory** information about the donor's age, gender and vital status.
2. _Specimen Data File (specimen)_  
**Mandatory** information about a specimen that was obtained from a donor. There may be several specimens per donor that were obtained concurrently or at different times.
3. _Analyzed Sample Data File (sample)_  
**Mandatory** information about an analyzed sample that was subjected to molecular analysis. There may be several analyzed samples per specimen, for example, when a tumour is used to derive xenografts and cell lines.

**_A project may choose not to use one or more of the five template tables. **The five templates can be extended by each project to describe disease-specific clinical and specimen attributes for the cancer in question.**  
_**

#### Optional Template Files

1. _Donor Surgical Procedures (surgery)_  
**Template** details about surgical procedures undergone by donor; allows for mapping a surgical procedure to a specimen.
2. _Donor Environmental Exposure (exposure)_  
**Template** details about donor's antecedent environmental exposures, such as smoking history.
3. _Donor Family History (family)_  
**Template** details about family history of the donor.
4. _Donor Biomarkers (biomarker)_  
**Template** details about biomarkers present in donor's tumour.
5. _Donor Therapy (therapy)_  
**Template** details about the type and duration of therapy the donor received.

### Clinical Data Encoding Notes

#### Coding of donor IDs

The three mandatory data files contain donor, specimen and analyzed sample IDs respectively. These IDs are to be coded specifically for ICGC purposes and must follow the following rules:

* Only the submitting group will keep the key that will permit to link back the data to the individual donors.
* The key must not be communicated to the data users.
* It should not be derived from other IDs such as biobank or hospital identifiers. _These IDs are to be coded in such a way that they cannot be tracked back to the individual donors, except by the submitting group._
* IDs are assigned by each submitting group, and must be unique within all the data submitted by that group (i.e. **no duplicate IDs allowed**).

Coded donor IDs referring to the same donor should remain consistent across different submissions from the same submitting group.

#### Time intervals

To prevent potential identification of donors, the timing of all significant events in the patient history are given in terms of _days_ counted from the date of primary diagnosis. The date of primary diagnosis is the date on which a **definitive** diagnostic procedure was performed, whether it be a fine needle aspiration, biopsy, or an unequivocal imaging procedure.

[1]: /submission/images/clinical-file-relationship.png
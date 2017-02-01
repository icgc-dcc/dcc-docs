# Submitting Raw Data to EGA

As part of the EGA submission process, EGA requires metadata in order to associate samples with the raw files you uploaded. This metadata is crucial for users to map your DCC-submitted samples to raw data files at EGA. The following instructions are meant to provide ICGC members with guidance on submitting metadata to the European Genome-Phenome Archive (EGA). ICGC members are encouraged to consult the [EGA submission guidelines][7] prior to data submission. 


## Overview of the EGA metadata XML files

![](/submission/images/sequencing-based_ega_metadata_model.png)
![](/submission/images/array-based_ega_metadata_model.png)

Below are example template files for POLICY, STUDY, DATASET, SAMPLE, EXPERIMENT, and RUN metadata.

```text
Submissions from ICGC members do not need to include a dac.xml, as the ICGC DAC (Data Access Committee) already exists in the EGA system. The submitters only need to refer to the ICGC DAC in the policy.xml, as shown in the following policy.xml example.
```

### POLICY XML file

```xml
<?xml version = '1.0' encoding = 'UTF-8'?>
<POLICY_SET>
    <POLICY alias="ICGC Data Access Agreements" center_name="YOUR_CENTER_NAME_HERE. See http://docs.icgc.org/submission/institutions/ (eg. OICR)" broker_name="EGA">
        <TITLE>ICGC Data Access</TITLE>
        <DAC_REF refname="ICGC Cancer Genome Projects" refcenter="ICGC"/>
        <DAC_REF accession="EGAC00001000010"/>
        <POLICY_TEXT>Please use the ICGC website for applying access to the data</POLICY_TEXT>
        <POLICY_LINKS>
            <POLICY_LINK>
                <URL_LINK>
                    <LABEL>ICGC Data Access Agreements</LABEL>
                    <URL>http://www.icgc.org</URL>
                </URL_LINK>
            </POLICY_LINK>
        </POLICY_LINKS>
    </POLICY>
</POLICY_SET>
```

* Please note in the above example that submitting centers must populate their own center name in the center_name attribute of the POLICY element. Please use your center name as specified in List of Institutions at <http://docs.icgc.org/submission/institutions/>. If your center’s name is incorrect or missing from here, please contact the DCC at <dcc-support@icgc.org> to have your center’s record added or revised.
* The value of center_name should reflect the submitter’s affiliation and should remain consistent in the metadata XML for all subsequent submissions to EGA.

## DATASET and STUDY XML files

The following examples of DATASET and STUDY xml files are written as per EGA's specifications with key items required for all ICGC submissions populated with examples.

### DATASET XML file

```xml
<?xml version = '1.0' encoding = 'UTF-8'?>
<DATASETS>
    <DATASET alias="DS20110311" center_name="OICR" broker_name="">
        <TITLE>Pancreatic Cancer Genome Sequencing</TITLE>
        <RUN_REF refname="SC_RUN_4050_1"/>
        <RUN_REF refname="SC_RUN_4000_2"/>
        <POLICY_REF refname="ICGC Data Access Agreements" refcenter="ICGC"/>
        <DATASET_LINKS>
            <DATASET_LINK>
                <URL_LINK>
                    <LABEL>ICGC Data Portal</LABEL>
                    <URL>http://dcc.icgc.org</URL>
                </URL_LINK>
            </DATASET_LINK>
        </DATASET_LINKS>
    </DATASET>
</DATASETS>
```

### STUDY XML file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<STUDY_SET>
    <STUDY alias="TODO: UNIQUE NAME FOR SUBMISSION (eg. Pancreatic Cancer Genome Sequencing)" center_name="TODO: center name/abbreviation found at http://docs.icgc.org/submission/institutions/ (eg. OICR)">
        <DESCRIPTOR>
            <STUDY_TITLE>TODO: Title of publication</STUDY_TITLE>
            <STUDY_TYPE existing_study_type="Whole Genome Sequencing"/>
            <STUDY_ABSTRACT>
                TODO: STUDY ABSTRACT AS IT COULD APPEAR IN A PUBLICATION
            </STUDY_ABSTRACT>
            <CENTER_PROJECT_NAME>TODO: Project Name (eg. Pancreatic Cancer Sequencing Initiative)</CENTER_PROJECT_NAME>
        </DESCRIPTOR>
        <STUDY_ATTRIBUTES>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium</TAG>
                <VALUE>International Cancer Genome Consortium</VALUE>
            </STUDY_ATTRIBUTE>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium Project Name</TAG>
                <VALUE>TODO: TAG VALUE MUST CORRESPOND TO Project Name listed in http://docs.icgc.org/submission/projects/</VALUE>
            </STUDY_ATTRIBUTE>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium Project Code</TAG>
                <VALUE>TODO: TAG VALUE MUST CORRESPOND TO ICGC PROJECT CODE (eg. PACA-CA). DCC Project codes can be found at http://docs.icgc.org/submission/projects/</VALUE>
            </STUDY_ATTRIBUTE>
        </STUDY_ATTRIBUTES>
    </STUDY>
</STUDY_SET>
```

## SAMPLE, EXPERIMENT and RUN XML files
For SAMPLE, EXPERIMENT and RUN metadata, only fragments of the XML files are provided to illustrate how certain IDs are referenced across files.

### SAMPLE XML file

NOTE: The sample ID specified in the SAMPLE alias field MUST match the DCC-submitted analyzed_sample_id

| Name | VALUE |
| ---- | ---- |
| SAMPLE alias | DCC submitted [analyzed_sample_id][4]
| icgc_project_code | ICGC Project code [http://docs.icgc.org/submission/projects/][6] 
| submitter_donor_id |  DCC submitted [donor_id][1] 
| submitter_specimen_id | DCC submitted [specimen_id][2] 
| specimen_type | DCC submitted [specimen_type][3] 
| submitter_sample_id | DCC submitted [analyzed_sample_id][4]
| gender | DCC submitted [donor_sex][5]


### Fragment of the SAMPLE XML file
```xml
<SAMPLE_SET xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="ftp://ftp.sra.ebi.ac.uk/meta/xsd/sra_1_5/SRA.sample.xsd">
   <SAMPLE alias="MUST MATCH DCC-submitted analyzed_sample_id" center_name="TODO: Enter centre name/abbreviation as specified at http://docs.icgc.org/submission/institutions/">
      <TITLE>
         TODO: A SHORT INFORMATIVE DESCRIPTION OF THE SAMPLE
      </TITLE>
      <SAMPLE_NAME>
          <TAXON_ID>
             TODO: PROVIDE NCBI TAXID FOR ORGANISM (e.g. 9606 for human)
          </TAXON_ID>
          <SCIENTIFIC_NAME>
             TODO: SCIENTIFIC NAME AS APPEARS IN NCBI TAXONOMY FOR THE TAXON_ID (e.g. homo sapiens)
         </SCIENTIFIC_NAME>
         <COMMON_NAME>
            TODO: OPTIONAL COMMON NAME AS APPEARS IN NCBI TAXONOMY FOR THE TAXON_ID (e.g. human)
         </COMMON_NAME>
      </SAMPLE_NAME>
      <DESCRIPTION>
         TODO: A LONGER DESCRIPTION OF SAMPLE AND HOW IT DIFFERS FROM OTHER SAMPLES
      </DESCRIPTION>
      <SAMPLE_ATTRIBUTES>
         <!--
            EGA requires Sample attributes Donor ID, Gender and phenotype for each sample
         -->
         <SAMPLE_ATTRIBUTE>
            <TAG>subject_id</TAG>
            <VALUE>project or DCC specific donor_id</VALUE>
         </SAMPLE_ATTRIBUTE>
         <SAMPLE_ATTRIBUTE>
             <TAG>gender</TAG>
             <VALUE>DCC-SUBMITTED donor_sex</VALUE>
         </SAMPLE_ATTRIBUTE>
         <SAMPLE_ATTRIBUTE>
             <TAG>phenotype</TAG>
             <VALUE>TODO: TAG VALUE, Experimental Ontology Factor (EFO) accession term recommended</VALUE>
             <!--  http://www.ebi.ac.uk/efo/ . -->
         </SAMPLE_ATTRIBUTE>
         <!--
          The following sample attributes must have values that are consistent with DCC:
             1. icgc_project_code
             2. submitter_donor_id
             3. submitter_specimen_id
             4. specimen_type
             5. submitter_sample_id
          -->
         <SAMPLE_ATTRIBUTE>
             <TAG>icgc_project_code</TAG>
             <VALUE>TODO: TAG VALUE MUST CORRESPOND TO ICGC PROJECT CODE (eg. PACA-CA). DCC Project codes can be found at http://docs.icgc.org/submission/projects/<VALUES>
         </SAMPLE_ATTRIBUTE>
         <SAMPLE_ATTRIBUTE>
            <TAG>submitter_donor_id</TAG>
            <VALUE>DCC-submitted donor_id</VALUE>
         </SAMPLE_ATTRIBUTE>
                 <SAMPLE_ATTRIBUTE>
            <TAG>submitter_specimen_id</TAG>
            <VALUE>DCC-submitted specimen_id</VALUE>
         </SAMPLE_ATTRIBUTE>
         <SAMPLE_ATTRIBUTE>
            <TAG>specimen_type</TAG>
            <VALUE>DCC-submitted specimen_type (eg. Primary tumour - solid tissue)</VALUE>
         </SAMPLE_ATTRIBUTE>
         <SAMPLE_ATTRIBUTE>
            <TAG>submitter_sample_id</TAG>
            <VALUE>DCC-submitted analyzed_sample_id</VALUE>
         </SAMPLE_ATTRIBUTE>
      </SAMPLE_ATTRIBUTES>
   </SAMPLE>
</SAMPLE_SET>
```

### Fragment of the EXPERIMENT XML file

```xml
<EXPERIMENT_SET>
    <EXPERIMENT alias="EXP12345" … >
        <STUDY_REF refname="Pancreatic Cancer Genome Sequencing" />
        .......
        <DESIGN>
            <SAMPLE_DESCRIPTOR refname="TODO: SHOULD MATCH DCC-SUBMITTED analyzed_sample_id" />
        .......
        <LIBRARY_DESCRIPTOR>
           <LIBRARY_STRATEGY>
              TODO: MUST MATCH DCC-SUBMITTED sequencing_strategy field
           </LIBRARY_STRATEGY>


```

### Fragment of the RUN XML file

```xml
<RUN alias="SC_RUN_4000_2"/>
    <EXPERIMENT_REF refname="EXP12345"/>
    <DATA_BLOCK>
        <FILES>
            <FILE filename="CLLS0001.bam" filetype="bam" />
        </FILES>
    </DATA_BLOCK>
```

## Helpful Links at EGA:
* [Quick Guide to submitting data to EGA][7]
* [Preparing EGA XMLs][8]
* [Submitting Metadata for Sequencing-based raw data][9]
* [Submitting Metadata for Array-based raw data][10]

[1]: http://docs.icgc.org/dictionary/viewer/#?q=donor_id&viewMode=details&dataType=donor
[2]: http://docs.icgc.org/dictionary/viewer/#?q=specimen_id&viewMode=details&dataType=specimen
[3]: http://docs.icgc.org/dictionary/viewer/#?q=specimen_type&viewMode=codelist&dataType=specimen
[4]: http://docs.icgc.org/dictionary/viewer/#?q=analyzed_sample_id&viewMode=details&dataType=sample
[5]: http://docs.icgc.org/dictionary/viewer/#?q=donor_sex&viewMode=codelist&dataType=donor
[6]: http://docs.icgc.org/submission/projects/
[7]: https://ega-archive.org/quickguide 
[8]: https://ega-archive.org/submission/sequence/programmatic_submissions/prepare_xml
[9]: https://ega-archive.org/submission/sequence/metadata
[10]: https://ega-archive.org/submission/array_based/metadata

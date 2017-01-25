# Submitting Raw Data to EGA

The following instructions are meant to provide ICGC members with guidance on submitting raw sequence data to the European Genome-Phenome Archive (EGA). ICGC members are encouraged to consult the EGA guidelines prior to data submission. Detailed instructions on data submission are available EGA website at  and an FAQ is provided at .


#### Overview of the EGA metadata xml files

![](/submission/images/ega-meta.png)

Below are example template files for POLICY, STUDY, DATASET, SAMPLE, EXPERIMENT, and RUN metadata.

```text
Submissions from ICGC members do not need to include a dac.xml, as the ICGC DAC (Data Access Committee) already exists in the EGA system. The submitters only need to refer to the ICGC DAC in the policy.xml, as shown in the following policy.xml example.
```

#### POLICY XML file

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

* Please note in the above example that submitting centers must populate their own center name in the center_name attribute of the POLICY element. Please use your center name as specified in List of Institutions at http://docs.icgc.org/submission/institutions/. If your center’s name is incorrect or missing from here, please contact the DCC at dcc-support@icgc.org to have your center’s record added or revised.
* The value of center_name should reflect the submitter’s affiliation and should remain consistent in the metadata XML for all subsequent submissions to EGA.

#### DATASET and STUDY XML files

The following examples of DATASET and STUDY xml files are written as per EGA's specifications with key items required for all ICGC submissions populated.

##### DATASET XML file

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

##### STUDY XML file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<STUDY_SET>
    <STUDY alias="TODO: UNIQUE NAME FOR SUBMISSION (eg. Pancreatic Cancer Genome Sequencing)" center_name="TODO: centre name/abbreviation found at http://docs.icgc.org/submission/institutions/ (eg. OICR)">
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

#### SAMPLE, EXPERIMENT and RUN XML files

For SAMPLE, EXPERIMENT and RUN metadata, only fragments of the XML files are provided to illustrate how certain IDs are referenced across files.

##### Fragment of the SAMPLE XML file
NOTE: The sample ID specified in the SAMPLE alias field MUST match the DCC-submitted analyzed_sample_id
![][1]


##### Fragment of the EXPERIMENT XML file

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

##### Fragment of the RUN XML file

```xml
<RUN alias="SC_RUN_4000_2"/>
    <EXPERIMENT_REF refname="EXP12345"/>
    <DATA_BLOCK>
        <FILES>
            <FILE filename="CLLS0001.bam" filetype="bam" />
        </FILES>
    </DATA_BLOCK>
```
[1]: /submission/images/EGA_Sample_Metadata_XML.png

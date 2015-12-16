# Submitting Raw Data to EGA

The following instructions are meant to provide ICGC members with guidance on submitting raw sequence data to the European Genome-Phenome Archive (EGA). ICGC members are encouraged to consult the EGA guidelines prior to data submission. Detailed instructions on data submission are available EGA website at  and an FAQ is provided at .


#### Overview of the EGA metadata xml files

![](/submission/images/EGAmeta.png)

Below are example template files for POLICY, STUDY, DATASET, SAMPLE, EXPERIMENT, and RUN metadata.

```text
Submissions from ICGC members do not need to include a dac.xml, as the ICGC DAC (Data Access Committee) already exists in the EGA system. The submitters only need to refer to the ICGC DAC in the policy.xml, as shown in the following policy.xml example.
```

#### POLICY XML file

```xml
<?xml version = '1.0' encoding = 'UTF-8'?>
<POLICY_SET>
    <POLICY alias="ICGC Data Access Agreements" center_name="YOUR_CENTER_NAME_HERE" broker_name="EGA">
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

* Please note in the above example that submitting centers must populate their own center name in the center_name attribute of the POLICY element. Please use your center name as specified in List of Institutions of this manual.
* If your center’s name is incorrect or missing from here, please contact the DCC to have your center’s record added or revised.
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
    <STUDY alias="Pancreatic Cancer Genome Sequencing" center_name="OICR">
        <DESCRIPTOR>
            <STUDY_TITLE>Title of publication</STUDY_TITLE>
            <STUDY_TYPE existing_study_type="Whole Genome Sequencing"/>
            <STUDY_ABSTRACT>
                STUDY ABSTRACT AS IT COULD APPEAR IN A PUBLICATION
            </STUDY_ABSTRACT>
            <CENTER_PROJECT_NAME>Pancreatic Cancer Sequencing Initiative</CENTER_PROJECT_NAME>
        </DESCRIPTOR>
        <STUDY_ATTRIBUTES>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium</TAG>
                <VALUE>International Cancer Genome Consortium</VALUE>
            </STUDY_ATTRIBUTE>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium Project Name</TAG>
                <VALUE>Pancreatic Cancer - CA</VALUE>
            </STUDY_ATTRIBUTE>
            <STUDY_ATTRIBUTE>
                <TAG>Consortium Project Code</TAG>
                <VALUE>PACA-CA</VALUE>
            </STUDY_ATTRIBUTE>
        </STUDY_ATTRIBUTES>
    </STUDY>
</STUDY_SET>
```

#### SAMPLE, EXPERIMENT and RUN XML files

For SAMPLE, EXPERIMENT and RUN metadata, only fragments of the XML files are provided to illustrate how certain IDs are referenced across files.

##### Fragment of the SAMPLE XML file

```xml
<SAMPLE alias="CLLS0123" ….>
    <SAMPLE_ATTRIBUTES>
        <SAMPLE_ATTRIBUTE>
            <TAG>Sample ID</TAG>
            <VALUE>CLLS0123</VALUE>
        </SAMPLE_ATTRIBUTE>
        <SAMPLE_ATTRIBUTE>
            <TAG>Donor ID</TAG>
            <VALUE>CLLD0015</VALUE>
        </SAMPLE_ATTRIBUTE>
    <SAMPLE_ATTRIBUTES>
</SAMPLE>
```

##### Fragment of the EXPERIMENT XML file

```xml
<EXPERIMENT_SET>
    <EXPERIMENT alias="EXP12345" … >
        <STUDY_REF refname="Pancreatic Cancer Genome Sequencing" />
        .......
        <DESIGN>
            <SAMPLE_DESCRIPTOR refname="CLLS0123" />
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
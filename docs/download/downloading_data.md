# Downloading Data

## Downloading data from Collaboratory repository

Prerequisites:

1. Apply for DACO access
2. Download and install score-client software and/or icgc-get (include link to software)

Download Data Instructions:

1. Once your DACO application has been approved, use your OpenID (ie. the Gmail email address you specified in your DACO application) to log into https://dcc.icgc.org/:

![Portal-Login](images/Portal_login.png)

2. After successful authentication, you will know that you have Cloud Access to the controlled tier if the “login” link is replaced with a green cloud icon:

![DACO-Cloud-Access](images/daco-cloud-access.png)

3. Click on Token Manager
![Token-Manager-Link](images/token-manager-link.png)

4. Select "collab.download" and click "Generate" button to create an access token for downloading data from Collaboratory

![Token-Manager](images/token-manager-collab.png)


5. Copy and paste this token into your config file for score-client

    * The configuration of the Score Client is stored in the conf/application.properties file of the distribution
    * Edit application.properties and add the generated accesss token to the line:

```
accessToken=ALPHANUMERICTOKEN-01234567890+AlPhAnUmErIcToKeN=0123456789-ALPHANUMERICTOKEN-01234567890+AlPhAnUmErIcToKeN=0123456789-ALPHANUMERICTOKEN-01234567890+AlPhAnUmErIcToKeN=0123456789-
```

6. Find your data of interest at https://dcc.icgc.org/repositories in the Collaboratory repository. Click on "Download Files" and download the manifest file

![Download-Manifest](images/download-collab-manifest.png)

7. Decompress file. Run score-client with  manifest file to download data

```
tar xvzf manifest.1554492262428.tar.gz
./bin/score-client --profile collab download --manifest manifest.collaboratory.1554492262428.tsv --output-dir score-client_downloads
```

## Downloading data from GDC repository

Prerequisites:

1. Obtain dbGaP access and an NIH eRA Commons account (https://gdc.cancer.gov/access-data/obtaining-access-controlled-data)
2. Download GDC Data Transfer Tool from https://gdc.cancer.gov/access-data/gdc-data-transfer-tool

Download Data Instructions:

1. Once you have obtained controlled data access from dbGaP, you will need to download your access authentication token from the GDC Data Portal. Refer to (https://docs.gdc.cancer.gov/Data_Transfer_Tool/Users_Guide/Preparing_for_Data_Download_and_Upload/#obtaining-an-authentication-token-for-data-downloads) for instructions. 

2. Save the GDC authentication token in a text file

3. Find your data of interest at https://dcc.icgc.org/repositories (click on 'GDC'  repository). Click on "Download Files" and download the manifest file

![Download-Manifest](images/download-gdc-manifest.png)

4. Run the GDC Client tool to download data

```
./gdc-client download -m test/manifest.gdc.1554495935637.tsv -t gdc-user-token.txt -d gdc_downloads
```

## Downloading data from EGA repository


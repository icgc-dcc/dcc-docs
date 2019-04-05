# Downloading Data

## Downloading data from Collaboratory

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

6. Find your data of interest at https://dcc.icgc.org/repositories in the Collaboratory repository, and then download the manifest file


7. Run score-client and downloaded manifest file to download data




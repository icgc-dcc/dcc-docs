# Portal API

The ICGC Portal API can be accessed from the command line using [cURL][1] but we suggest using [httpie][2], a cURL replacement that is particularly well-suited to JSON-based REST APIs. The following examples will contain instuctions for using both cURL and httpie.

ICGC API is a set of RESTful endpoints -- programmable interfaces over the Web -- that allows third-party developers to build automation scripts and apps.

Please see the [API Endpoint Documentation](/portal/api-endpoints/) for detailed information on the API endpoints, representations and how the API responds to different requests.

The following examples are known to work with [curl](https://curl.haxx.se/) v7.43.0 and [httpie](https://github.com/jkbrzt/httpie#http-method) v0.9.3.

## Controlled Access

### Logging in from the Command Line

Logging in to the **ICGC Portal API** from the command line requires an ICGC.org account.

**Request**
```
$ curl -XPOST -i -H 'Content-Type: application/json' 'https://dcc.icgc.org/api/v1/auth/login' -d '{"username":"...","password":"..."}'

$ http 'https://dcc.icgc.org/api/v1/auth/login' username='...' password='...'
```
**Response**

```
{token: YOUR_DCC_PORTAL_TOKEN_HERE}
```

## Downloading Static Files

**Request**
```
$ curl -o simple_somatic_mutation.open.COAD-US.tsv.gz https://dcc.icgc.org/api/v1/download?fn=/release_16/Projects/COAD-US/simple_somatic_mutation.open.COAD-US.tsv.gz

$ http -o simple_somatic_mutation.open.COAD-US.tsv.gz https://dcc.icgc.org/api/v1/download?fn=/release_16/Projects/COAD-US/simple_somatic_mutation.open.COAD-US.tsv.gz
```
**Response**
```
% Total    % Received % Xferd  Average Speed   Time    Time     Time     Current
                               Dload  Upload   Total   Spent    Left     Speed
100 21.8M  100 21.8M    0     0  27.6M      0 --:--:-- --:--:-- --:--:-- 27.5M
```

### Controlled Access

**Request**
```
$ curl -o simple_somatic_mutation.controlled.COAD-US.tsv.gz 'https://dcc.icgc.org/api/v1/download?fn=/release_16/Projects/COAD-US/simple_somatic_mutation.controlled.COAD-US.tsv.gz' --cookie 'dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'

$ http -o simple_somatic_mutation.controlled.COAD-US.tsv.gz 'https://dcc.icgc.org/api/v1/download?fn=/release_16/Projects/COAD-US/simple_somatic_mutation.controlled.COAD-US.tsv.gz' 'Cookie:dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'
```
**Response**
```
% Total    % Received % Xferd  Average Speed   Time    Time     Time     Current
                               Dload  Upload   Total   Spent    Left     Speed
100 21.8M  100 21.8M    0     0  27.6M      0 --:--:-- --:--:-- --:--:-- 27.5M
```

## Dynamic Filtered Download

### Start a job

**Request**

```
$ url -g 'https://dcc.icgc.org/api/v1/download/submit?filters={"donor":{"primarySite":{"is":["Brain"]}}}&info=[{"key":"ssm","value":"TSV"}]&email=YOUR@EMAIL.COM'

$ http 'https://dcc.icgc.org/api/v1/download/submit' 'filters=={"donor":{"primarySite":{"is":["Brain"]}}}' 'info==[{"key":"ssm","value":"TSV"}]' 'email==YOUR@EMAIL.COM'
```

**Response**

```
{"downloadId":"YOUR_DOWNLOAD_ID"}
```

**Optional**

You can include your email address in the request to recieve email updates on the status of your download but it is not required. You can also view the status of your download by going to `https://dcc.icgc.orb/downloads/YOUR_DOWNLOAD_ID`

### View status

**Request**

```
$ curl 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID/status'

$ http 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID/status'
```

**Response**

```
[{
    "downloadId": "YOUR_DOWNLOAD_ID",
    "progress": [
        {
            "completed": "true",
            "dataType": "ssm",
            "denominator": "328238",
            "numerator": "629347",
            "percentage": "0.5"
        }
    ],
    "status": "RUNNING"
}]
```

### Downloading

When you see `"status": "SUCCEEDED"` you can download the file.

**Request**

```
$ curl 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID' -o my_dl.tar

$ http 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID' -o my_dl.tar
```

**Response**
```
% Total    % Received % Xferd  Average Speed   Time    Time     Time     Current
                               Dload  Upload   Total   Spent    Left     Speed
100 12.3M    0 12.3M    0     0   471k      0 --:--:--  0:00:26 --:--:-- 3411k
```

### Controlled Access

If the Dynamic Download Job contains controlled access data you must include your `dcc_portal_token` with every request.

**Request**

```
$ curl -g 'https://dcc.icgc.org/api/v1/download/submit?filters={"donor":{"primarySite":{"is":["Brain"]}}}&info=[{"key":"sgv","value":"TSV"}]&email=YOUR@EMAIL.COM' --cookie 'dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'

$ http 'https://dcc.icgc.org/api/v1/download/submit' 'filters=={"donor":{"primarySite":{"is":["Brain"]}}}' 'info==[{"key":"sgv","value":"TSV"}]' 'email==YOUR@EMAIL.COM' 'Cookie:dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'
```

**Request**

```
$ curl 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID/status' --cookie 'dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'

$ http 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID/status' 'Cookie:dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE'
```

**Request**

```
$ curl 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID' --cookie 'dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE' -o my_dl.tar

$ http 'https://dcc.icgc.org/api/v1/download/YOUR_DOWNLOAD_ID' 'Cookie:dcc_portal_token=YOUR_DCC_PORTAL_TOKEN_HERE' -o my_dl.tar
```

## Common Errors

### File downloaded successfully but only 133B

Look into the file, you should see a message along the lines of:

```
Error(code=404, message=Download with id '/release_16/Projects/COAD-US/simple_somatic_mutation.controlled.COAD-US.tsv.gz' not found.)
```

**Solution**

Make sure the path to the file is correct and if you are trying to download a controlled access file make sure your `dcc_access_token` is valid.

[1]: http://curl.haxx.se/docs/manpage.html
[2]: https://github.com/jakubroztocil/httpie

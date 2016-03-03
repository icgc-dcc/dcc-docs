# Submission API

This is the public API documentation for the Submission System.

## Release and Dictionary States

A dictionary can be either OPENED or CLOSED. A release can also be OPENED or COMPLETED, yet the two have slightly different meaning so this may be confusing. To summarize:

* COMPLETED release: frozen past releases
* OPENED release: the "next" release - only ever one at a time
* CLOSED dictionary: frozen dictionary that was used by a past release
* OPENED dictionary: updatable dictionary that **is not** used by a past release 


## Code Lists

### Get Code List by Name
The following will get a single codelist in JSON format, where 'myCodeListName' is the name of the codelist you want to retrieve
```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/codeLists/myCodeListName -H "Accept: application/json"
```

### Get All Code Lists
The following will return a JSON document that includes an array of all the code lists on the server.
```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/codeLists -H "Accept: application/json"
```

## Dictionaries

### Get Current Dictionary

This will return the current dictionary in JSON format.

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/nextRelease/dictionary -H "Accept: application/json"
```

 Note:

* This uses a different end-point, the `NextRelease` end-point

### Get All Dictionaries

This will give you all the dictionaries, including past CLOSED dictionaries, as an array.

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries -H "Accept: application/json"
```

### Get Dictionary by Version

The following allows you to retrieve a particular version of the dictionary, where 'versionNum' is the dictionary version number you want to retrieve.

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries/versionNum -H "Accept: application/json"
```

### Get All Dictionary Versions

The following allows you to retrieve all available dictionary versions. Each version will also have a list of releases that it is associated with. 

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries/versions -H "Accept: application/json"
```

### Get Current Dictionary

The following allows you to retrieve the current dictionary. 

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries/current -H "Accept: application/json"
```

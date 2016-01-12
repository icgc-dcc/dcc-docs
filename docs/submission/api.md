# Submission API

This is the public API documentation for the Submission System.

## Release and Dictionary States

A dictionary can be either OPENED or CLOSED. A release can also be OPENED or COMPLETED, yet the two have slightly different meaning so this may be confusing. To summarize:

* COMPLETED release: frozen past releases
* OPENED release: the "next" release - only ever one at a time
* CLOSED dictionary: frozen dictionary that **is** used by a past release (an OPENED release could use a CLOSED or OPENED dictionary)
* OPENED dictionary: updatable dictionary that **is not** used by a past release 

    * there could be no OPENED dictionary at a given time
    * there could also be more than one OPENED dictionary (think "unused" dictionary - maybe WIP ones for instance)
    * typical case is a bunch of CLOSED dictionary used by past COMPLETED releases, one OPENED dictionary that is used by the OPENED release, and potentially some more OPENED dictionary not in use yet.  Alternatively there could be a bunch of CLOSED dictionaries used by past COMPLETED releases, the OPENED release could also point to a CLOSED dictionary, and potentially some more OPENED dictionaries not yet in use.
* When you COMPLETED a release the OPENED dictionary is automatically CLOSED.

So basically, COMPLETing a release CLOSes the dictionary it uses, **if** that dictionary was still OPENED (**else** leaves it CLOSED)

## Code Lists

### Get Code List by Name
This is open-access (since 13/07/22 - 1.10 re-deployment)
This gets a single codelist, keep in mind the "Add Codelist" below consumes an array of code lists so you will _most likely want to use the "Get Codelist" request below!_
```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/codeLists/myCodeListName -H "Accept: application/json"
```

### Get All Code Lists
This is open-access (since 13/03/19 - 1.3 re-deployment)

The following will return a JSON document that includes an array of all the code lists on the server.
curl -v -XGET https://submissions.dcc.icgc.org/ws/codeLists -H "Accept: application/json"

## Dictionaries

Please be careful adding dictionaries. The code list fields are not validated currently (but they will be in a future release, see DCC-898). This means you need to be extremely careful when uploading/updating a dictionary since you can refer to code lists that don't exist. Please double-check your code list references before uploading dictionaries.

### Get Current Dictionary


This is open-access (since 13/03/19 - 1.3 re-deployment)

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/nextRelease/dictionary -H "Accept: application/json"
```

 Note:

* This uses a different end-point, the `NextRelease` end-point

### Get All Dictionaries

This is open-access (since 13/07/22 - 1.10 re-deployment)

This will give you all the dictionaries as an array:

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries -H "Accept: application/json"
```

### Get Dictionary by Version

This is open-access (since 13/07/22 - 1.10 re-deployment)

```shell
curl -v -XGET https://submissions.dcc.icgc.org/ws/dictionaries/0.10a -H "Accept: application/json"
```

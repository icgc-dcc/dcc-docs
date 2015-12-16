# API

### Code lists

##### Get codelist by name
This is open-access (since 13/07/22 - 1.10 re-deployment)
This gets a single codelist, keep in mind the "Add Codelist" below consumes an array of code lists so you will _most likely want to use the "Get Codelist" request below!_
```shell
curl -v -XGET http://hwww{1,2}-dcc:5380/ws/codeLists/myCodeListName -H "Accept: application/json"
```

##### Get codelists
This is open-access (since 13/03/19 - 1.3 re-deployment)  

The following will return a JSON document that includes an array of all the code lists on the server.
curl -v -XGET http://hwww{1,2}-dcc:5380/ws/codeLists -H "Accept: application/json"

##### Add codelists
This will not reset the states of submissions. This POST assumes you are submitting a JSON document with an array of code lists.  You could, in theory, get the current code lists via the GET above, modify the code lists you care about (ensure you give it a unique "name"), and then post the updated code list document below.  This will create a new code lists with a new name that you can later reference in an updated dictionary. Note, you should remove "created", "id", and "lastUpdate" fields if you're modifying the codeLists that you retrieved from the server.

```shell
cat /path/to/codeListArray.json
[
  {
    "label": "some label",
    "name": "myCodeListName",
    "terms": [
      {
        "code": "1",
        "uri": "[http://..."](http://...),
        "value": "male"
      },
      {
        "code": "2",
        "uri": "[http://..."](http://...),
        "value": "female"
      }
    ]
  },
  { ...
]

curl -v -H "Accept: application/json" -XPOST http://hwww{1,2}-dcc:5380/ws/codeLists -H "Authorization: X-DCC-Auth $(echo -n icgcdcc:${ADMIN_PASSWD?} | base64)" -H "Content-Type: application/json" --data @/path/to/codeListArray.json
```

Notes:

* The file must contain an **array** of `CodeList` documents (possibly only one)
* The _name_ property is the one that may be referred to from a dictionary (see section below), this must be unique (check the old code lists first)
* More than one _Field_ may refer to a _CodeList_ (in the dictionary)
* The POST will return 201 if the code lists are created properly, you can check the codelist using the GET above

##### Add terms (codelist elements)
This **WILL** reset the states of **INVALID** submissions **IF** the current dictionary (see [Getcurrentdictionary](#AdminSOP-Getcurrentdictionary)) makes use of the target codelist  

```shell
cat /path/to/termArray.json
[
  {
    "code": "12",
    "uri": null,
    "value": "value for 12"
  },
  {
    "code": "11",
    "uri": null,
    "value": "value for 13"
  }
]

curl -v -XPOST http://hwww{1,2}-dcc:5380/ws/codeLists/${CODELIST_NAME?}/terms -H "Authorization: X-DCC-Auth $(echo -n icgcdcc:${ADMIN_PASSWD?} | base64)" -H "Content-Type: application/json" --data @/path/to/termArray.json -H "Accept: application/json"
```
Notes:

* The file must contain an **array** of `Term` documents (possibly only one)
* The `CodeList` referred to in the URL must already exist

##### Updating a codelist label  

This will not reset the states of submissions. This just updates the label on the code list, not very functional. In the future we'll probably allow the ability to change dbxref and other fields on the code list object using this resource.

```shell
curl -v -H "Authorization: X-DCC-Auth $(echo -n icgcdcc:${ADMIN_PASSWD?} | base64)" -XPUT http://hwww{1,2}-dcc:5380/ws/codeLists/${CODELIST_NAME?} -H "Content-Type: application/json" --data '{"name":"dr__donor_sex", "label": "some new label"}' -H "Accept: application/json"
```

Notes:
*   The `CodeList` referred to in the URL must already exist
*   In the future we may support updating more than just the _label_

### Release and dictionary states clarification

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

### Dictionary

Please be careful adding dictionaries. The code list fields are not validated currently (but they will be in a future release, see DCC-898). This means you need to be extremely careful when uploading/updating a dictionary since you can refer to code lists that don't exist. Please double-check your code list references before uploading dictionaries.


##### Get current dictionary  


This is open-access (since 13/03/19 - 1.3 re-deployment)

```shell
curl -v -XGET http://hwww{1,2}-dcc:5380/ws/nextRelease/dictionary -H "Accept: application/json"
```

 Note:  

* This uses a different end-point, the `NextRelease` end-point

##### Get Array of Dictionaries

This is open-access (since 13/07/22 - 1.10 re-deployment)

This will give you all the dictionaries as an array:

```shell
curl -v -XGET http://hwww{1,2}-dcc:5380/ws/dictionaries -H "Accept: application/json"
```

##### Get dictionary by version

This is open-access (since 13/07/22 - 1.10 re-deployment)

```shell
curl -v -XGET http://hwww{1,2}-dcc:5380/ws/dictionaries/myVersion -H "Accept: application/json"
```

##### Add dictionary

This will **not** reset the states of submissions (not until you associate with an OPEN release).

```shell
cat /path/to/dictionary.json
{
  "version": "myVersion"
  "state": "OPENED",
  "files": [
    {
      "fields": [
        {
          "name": "donor_id",
          "restrictions": [
          ...
}

curl -v -H "Authorization: X-DCC-Auth $(echo -n icgcdcc:${ADMIN_PASSWD?} | base64)" -XPOST http://hwww{1,2}-dcc:5380/ws/dictionaries -H "Content-Type: application/json" --data @/path/to/dictionary.json -H "Accept: application/json"
```

Notes:

*   Please refer to the [Dictionary Curator SOP](/display/DCCSOFT/Dictionary+Curator+SOP) for help with the `Dictionary`
*   Please respect the following constraints: [Dictionaryconstraints](#AdminSOP-Dictionaryconstraints) (for now)
*   The _version_ property is the one that may be referred to from a release (see section below)
*   Any _codelist_ referred to must already exists
*   More than one _Release_ may refer to a _Dictionary_
*   If you are editing a sample dictionary you downloaded make sure you change the state to "OPENED" and not "CLOSED" otherwise the add dictionary action will fail

##### Update dictionary

This **WILL** reset the states of submissions for the given release **IF** the OPENED release points to it (updating any other OPENED dictionary will not since no release uses them yet)  

```shell
curl -v -H "Authorization: X-DCC-Auth $(echo -n icgcdcc:${ADMIN_PASSWD?} | base64)" -XPUT http://hwww{1,2}-dcc:5380/ws/dictionaries/myVersion -H "Content-Type: application/json" --data @/path/to/updated/dictionary.json -H "Accept: application/json"
```

Notes:

* The dictionary must be **OPENED** (ie. not used by a past release)
* The _version_ in the _json_ file **must** match that of the URL
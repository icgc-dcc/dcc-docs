# Binaries

All binaries are hosted on [OICR's Artifactory repository](https://artifacts.oicr.on.ca/artifactory). You can find them in the [`dcc-release` repository](https://artifacts.oicr.on.ca/artifactory/simple/dcc-release/org/icgc/dcc/).


This is the official DCC software page which publishes various tools for working with ICGC data. Software is provided in both tarball and Docker image format.


## Storage Client 

To interact with cloud repositories such as [AWS](/icgc-in-the-cloud/aws/) and [Collaboratory]("/icgc-in-the-cloud/collaboratory/"), you will require the Storage Client software. For system requirements and usage information, please see the [User Guide](href="http://docs.icgc.org/cloud/guide/)

### Latest Release Tarball

Users are encouraged to use the latest version of our software to keep current with bug fixes, enhancements and new features. Click on the following to download the latest client package:

[Download](https://dcc.icgc.org/api/v1/ui/software/icgc-storage-client/latest)

### Previous Release Tarballs

It is strongly recommended to use the latest release to take advantage of newest features and bug fixes.
However, if you wish to use an old version you may choose from the following:

<!-- <storage-versions></storage-versions> -->
<versions-table client-type="0"></versions-table>

### Docker images 

For Docker images, please visit our [Docker Hub repository](https://hub.docker.com/r/icgc/icgc-storage-client/).

## icgc-get

To interact with all ICGC data repositories, you can use the icgc-get software. For system requirements and usage information, please see the [User Guide](http://docs.icgc.org/cloud/icgc-get/)

### Latest Release Zipfile
Users are encouraged to use the latest version of our software to keep current with bug fixes, enhancements and new features. Click on the following to download the latest client version:

[Download for Mac](https://dcc.icgc.org/api/v1/ui/software/icgc-get/osx/latest) [Download for Linux](https://dcc.icgc.org/api/v1/ui/software/icgc-get/linux/latest)

### Previous Release Zipfile

It is strongly recommended to use the latest release to take advantage of newest features and bug fixes.  However, if you wish to use an old version you may choose from the following:

<!-- <icgc-get-versions></icgc-get-versions> -->

<versions-table client-type="1"></versions-table>

### Docker Images

For Docker images, please visit our [Docker Hub repository.](https://hub.docker.com/r/icgc/icgc-get/)  This provides the necessary operating environment for ICGC get, and will be automatically downloaded by the tool if the docker daemon is running on your computer.

## Verifying Downloads

In order to ensure safe downloads and binary integrity, all software releases are signed using GPG. The following sections detail how to verify our published software.

### Public Key

To verify the signatures you will need our public key used for software releases:

[Public Key](https://dcc.icgc.org/api/v1/ui/software/key)

### GPG Verification

To verify the signed software you will need to ensure you have downloaded our public key and imported it:

From a key server: 

```
$ gpg --keyserver pgp.mit.edu --recv-key 0xAFE5D0B6
```
From a file:

```
$ gpg --import icgc-software.pub
```
Once the public key has been imported you can verify the signature:

```
$ gpg icgc-storage-client-0.0.27-dist.tar.gz.asc
```
If successful, the output should contain the following:
            
```
gpg: assuming signed data in 'icgc-storage-client-0.0.27-dist.tar.gz'
gpg: Signature made Mon  5 Oct 12:38:09 2015 EDT using RSA key ID AFE5D0B6
gpg: Good signature from "ICGC DCC (Sign public software releases) <dcc-support@icgc.org>"
```
            

# Setup

## Homebrew

Mac developers are using Homebrew (`brew`) which can be installed from:

[http://brew.sh/](http://brew.sh/)

### Cask

It is recommended to install all applications with Cask to promote automation. Hopefully one day this page can be scripted.

[https://caskroom.github.io/](https://caskroom.github.io/)

## Slack

We use Slack almost entirely for internal communication, so install this ASAP.

```shell
brew cask install slack
```

## XCode and Command Line Tools

See http://railsapps.github.io/xcode-command-line-tools.html

## Java

```shell
brew cask install java
```

Ensure this reports java 8:

```shell
java -version   
                                                                                                                                         
java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)
```

## iTerm2

Very powerful terminal emulator for Mac:

[http://www.iterm2.com/](http://www.iterm2.com/)

```shell
brew cask install iterm2 
```

## Elasticsearch

```shell
brew install elasticsearch14
brew switch elasticsearch14 1.4.4
```

### Head Plugin

```shell
/usr/local/Cellar/elasticsearch/1.4.4/libexec/bin/plugin --install mobz/elasticsearch-head
```

## MongoDB

```shell
brew install mongo
brew switch mongo 2.4.4-x86_64
```

## Git

Download _dmg _from [http://git-scm.com/download/mac](http://git-scm.com/download/mac)

## HubFlow

```shell
brew install hubflow
```

See [https://github.com/icgc-dcc/dcc-portal/blob/develop/CONTRIBUTING.md](https://github.com/icgc-dcc/dcc-portal/blob/develop/CONTRIBUTING.md) for details on how we use this.

## GitHub

### Setup

1.  Clone a project from GitHub:  
    ```shell
    git clone git@github.com:icgc-dcc/<project>.git
    ```
2.  Init Git-flow (default settings):  
    ```shell
    git hf init
    ```

## Maven

### Installation 

Install Maven 3.2.1 or what is specified in [https://github.com/icgc-dcc/dcc-parent/blob/develop/pom.xml](https://github.com/icgc-dcc/dcc-parent/blob/develop/pom.xml) `maven-enforcer-plugin`

To check your installation, run:

```shell
mvn -v

Apache Maven 3.2.1 (ea8b2b07643dbb1b84b6d16e1f08391b666bc1e9; 2014-02-14T12:37:52-05:00)
Maven home: /usr/local/Cellar/maven/3.2.1/libexec
Java version: 1.8.0_31, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_31.jdk/Contents/Home/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.11.6", arch: "x86_64", family: "mac"

```

### Shade Plug-in

This helps with dependency conflicts (especially Hadoop's): [http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html](http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html)

Currently use naming convention for the shaded artifact: `org.icgc.dcc.shaded.${name}` (e.g. `org.icgc.dcc.shaded.jackson`, `org.icgc.dcc.shaded.sshd`, ...)

## Eclipse

### Installation

Download and install Eclipse 4.6.x or latest for Java EE developers:

[http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/)

### Settings

Install m2e and add the builderhelper plugin:

[http://stackoverflow.com/questions/12685683/m2e-connector-buildhelper-not-compatible-with-eclipse-juno-sr1-m2e-1-2](http://stackoverflow.com/questions/12685683/m2e-connector-buildhelper-not-compatible-with-eclipse-juno-sr1-m2e-1-2)

### Lombok Support

A number of the dcc projects are using Lombok to reduce boilerplate code (e.g., getters, setters, `toString()`, `hashCode()`, `equals()`, `static Logger log`, etc.). This is seemless to `javac` via `mvn`, but the Java 6 [transformations](http://notatube.blogspot.ca/2010/12/project-lombok-creating-custom.html) will not be reflected in Eclipse which will in turn cause compilation errors in your editor. To fix this, execute `java -jar [lombok.jar](http://projectlombok.googlecode.com/files/lombok.jar)` and point it to your Eclipse installation. See [http://projectlombok.org/features/index.html](http://projectlombok.org/features/index.html) for details. 

As of 13/09/19 at least, do **not** use a builder method (defined with `@Builder`) in a statically imported manner. Eclipse is fine but upon compilation with maven, one gets:

```
  error: cannot find symbol, [ERROR] symbol:   static builder, [ERROR] location: class
```

As of 14/07/07, do **not** use constructs like:

```java
val myVar = new MyAnonymousClass() { ... }
```

(see [https://code.google.com/p/projectlombok/issues/detail?id=694&sort=-id&colspec=ID%20Type%20Status%20Priority%20Target%20Component%20Owner%20Summary](https://code.google.com/p/projectlombok/issues/detail?id=694&sort=-id&colspec=ID%20Type%20Status%20Priority%20Target%20Component%20Owner%20Summary))

Activate source downloading in the maven plugin, tick the **Preferences > Maven > Maven Download Artifact Sources** box.

## Add Static Import Favorites

Add some classes to your favorite static imports via **Preferences > Java > Editor > Content Assist > Favorites**:

*   Guava's `Preconditions`
*   PowerMock's `PowerMockito`
*   Mockito's `Mockito`
*   AssertJ's `org.assertj.core.api.Assertions.*`

### Plugins

#### MoreUnit Plugin

Useful JUnit Eclipse integration extensions can be installed by following the instructions here:

[http://moreunit.sourceforge.net/](http://moreunit.sourceforge.net/)

#### Grep Console

Plugin for colorizing and filtering the Eclipse console. Follow the instructions here:

[http://marian.schedenig.name/projects/grep-console/](http://marian.schedenig.name/projects/grep-console/)

#### YEdit Plugin

Useful for editing YAML files in Eclipse, with syntax highlighting and formatting. Follow the instructions here:

[https://code.google.com/p/yedit/](https://code.google.com/p/yedit/)

#### ShellEd Plugin

The ShellEd plugin provides basic syntax highlighting and outlining for shell script editing.  Follow the instructions here:

 [http://sourceforge.net/apps/trac/shelled/wiki/Documentation/InstallGuide](http://sourceforge.net/apps/trac/shelled/wiki/Documentation/InstallGuide)

## Node.js

```shell
brew install nvm
```

Then read [https://davidwalsh.name/nvm](https://davidwalsh.name/nvm) for usage information.

Then follow instructions in each GitHub's repo for the required node / npm versions (e.g. [https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui](https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui)).

## Setting up DCC Projects

### Setting up DCC-Portal 

_Assumes everything above has been installed correctly._

Clone the repository from git to your workspace and follow the instructions in the [setup of the DCC-Portal-UI](https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui).

After that, in the terminal:

```shell
cd <workspace>/dcc-portal
mvn
```

Once the build completes, you will be able to import the projects in ecplise:

**File > Import > Maven > Existing Maven Projects**

browse and import your dcc-portal projects. You can ignore any plugin execution errors that might occur in pom.xml.

### Setting up DCC-ETL

You will need to download the DCC reference genome from: 

[https://seqwaremaven.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/dcc-reference-genome-GRCh37.75.v1.tar.gz](https://seqwaremaven.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/dcc-reference-genome-GRCh37.75.v1.tar.gz)

and extract it to **/tmp**. Ensure that the contents of the file are not in a nested folder and are in the tmp folder. Once extracted, symlink GRCh37.fasta to GRC37.75.fasta and GRCh37.fasta.fai to GRCh37.75.fasta.fai by executing the following:

```shell
ln -s GRC37.75.fasta GRC37.fasta
ln -s GRC37.75.fasta.fai GRC37.fasta.fai
```

Clone the dcc-etl project to your workspace using git. In one terminal, start mongo:

```shell
mongod
```

Test with: `mongo`

and in another terminal, start elasticsearch:

```shell
elasticsearch -f
```

Test with: `curl localhost:9200` 

<u>Note</u>: Make sure that the elasticsearch version is exactly 0.90.1 and that the _cluster.name_ is **elasticsearch** in elasticsearch.yml file.

and finally in yet another terminal, go to your dcc-etl project and from the terminal execute:

```shell
mvn
```
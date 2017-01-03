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

Follow the instructions below:

[http://railsapps.github.io/xcode-command-line-tools.html]()

## Java

Install Java 8:

```shell
brew cask install java
```

Add the following to `~/.bash_profile`:

```shell
export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
```

Source `~/.bash_profile` or open a new terminal and ensure this reports Java 8:

```shell
java -version   
                                                                                                                                         
java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)
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

Download _dmg_ from [http://git-scm.com/download/mac](http://git-scm.com/download/mac)

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

Install Maven 3.2.1 or what is specified in [icgc-dcc/dcc-parent/pom.xml](https://github.com/icgc-dcc/dcc-parent/blob/develop/pom.xml#L1340) `maven-enforcer-plugin.requireMavenVersion`

```shell
brew install maven
brew switch maven 3.2.1
```

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

Install and configure IDE settings:

[https://github.com/icgc-dcc/dcc-cm/tree/develop/ide](https://github.com/icgc-dcc/dcc-cm/tree/develop/ide)

### Lombok Support

A number of the dcc projects are using Lombok to reduce boilerplate code (e.g., getters, setters, `toString()`, `hashCode()`, `equals()`, `static Logger log`, etc.). This is seemless to `javac` via `mvn`, but the Java 6 [transformations](http://notatube.blogspot.ca/2010/12/project-lombok-creating-custom.html) will not be reflected in Eclipse which will in turn cause compilation errors in your editor. To fix this, execute 

```shell
wget http://projectlombok.googlecode.com/files/lombok.jar
java -jar lombok.jar
```

And point it to your Eclipse installation. See [http://projectlombok.org/features/index.html](http://projectlombok.org/features/index.html) for details. 

Activate source downloading in the maven plugin, tick the **Preferences > Maven > Maven Download Artifact Sources** box.

### Add Static Import Favorites

Add some classes to your favorite static imports via **Preferences > Java > Editor > Content Assist > Favorites**:

*   Guava's `Preconditions`
*   PowerMock's `PowerMockito`
*   Mockito's `Mockito`
*   AssertJ's `org.assertj.core.api.Assertions.*`

### Plugins

#### MoreUnit Plugin

Useful JUnit Eclipse integration extensions can be installed by following the instructions here:

[http://moreunit.sourceforge.net/](http://moreunit.sourceforge.net/)

#### FindBugs

Locally run FindBugs within your IDE:

[http://findbugs.sourceforge.net/manual/eclipse.html](http://findbugs.sourceforge.net/manual/eclipse.html)

#### Grep Console

Plugin for colorizing and filtering the Eclipse console. Follow the instructions here:

[http://marian.schedenig.name/projects/grep-console/](http://marian.schedenig.name/projects/grep-console/)

Configuration is available in the Eclipse section.


## NodeJS

This is only required for projects that use a UI built by `npm` (e.g. `dcc-docs`, `dcc-portal`, `dcc-submission`, `dcc-dev`, etc.)

```shell
brew install nvm
```

Then read [https://davidwalsh.name/nvm](https://davidwalsh.name/nvm) for usage information.

Then follow instructions in each GitHub's repo for the required node / npm versions (e.g. [https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui](https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui)).

## Projects

After installing the above, navigate to the project(s) that you will be working on in [GitHub](https://github.com/icgc-dcc) and follow the top-level `README.md`s and linked sub-module `README.md`s.

### Eclipse Projects

To import an Eclipse based project, click on the following in the file menu:

**File > Import > Maven > Materialize Maven Projects from SCM**

Then enter the git URL of the project from [icgc-dcc](https://github.com/icgc-dcc). You can ignore any plugin execution errors that might occur in pom.xml.

## Reference Data

You will need to download the DCC reference genome from: 

[https://artifacts.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/](https://artifacts.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/)

and extract it to `/tmp`. Ensure that the contents of the file are not in a nested folder and are in the tmp folder. Once extracted, symlink `GRCh37.fasta` to `GRC37.75.fasta` and `GRCh37.fasta.fai` to `GRCh37.75.fasta.fai` by executing the following:

```shell
ln -s GRC37.75.fasta GRC37.fasta
ln -s GRC37.75.fasta.fai GRC37.fasta.fai
```

## Utilities

Consider all of these utilities optional, but highly recommended.

### Trailer.app

Track pull requests and issues across repositories, directly in your Notification Center or on any device.

[https://ptsochantaris.github.io/trailer/](https://ptsochantaris.github.io/trailer/)

```shell
brew cask install trailer
```

### Docker

Docker for Mac:

[https://docs.docker.com/engine/installation/mac/](https://docs.docker.com/engine/installation/mac/)

### MacDown

MacDown is an open source Markdown editor for OS X, released under the MIT License. It is heavily influenced by Chen Luo’s Mou.

[http://macdown.uranusjr.com/](http://macdown.uranusjr.com/)

```shell
brew cask install macdown
```

### iTerm2

Very powerful terminal emulator for Mac:

[http://www.iterm2.com/](http://www.iterm2.com/)

```shell
brew cask install iterm2 
```

### ZSH

Great shell alternative that is mostly compatible with Bash:

```shell
brew install zsh
```

### Oh-My-Zsh

Plugin system for `zsh`

[https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

### HTTP

Modern alternative to `curl`:

[https://github.com/jkbrzt/httpie](https://github.com/jkbrzt/httpie)

```shell
brew install httpie
```

### jq

`jq` is a lightweight and flexible command-line JSON processor:

[https://stedolan.github.io/jq/](https://stedolan.github.io/jq/)

```shell
brew install jq
```

### Other

Useful other things:

[https://danielmiessler.com/blog/first-10-things-new-mac](https://danielmiessler.com/blog/first-10-things-new-mac)

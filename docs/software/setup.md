# Setup

## Homebrew

Mac developers are using Homebrew (`brew`) which can be installed from:

[http://brew.sh/](http://brew.sh/)

### <span>Cask</span>

It is recommended to install all applications with Cask to promote automation. Hopefully one day this page can be scripted.

[https://caskroom.github.io/](https://caskroom.github.io/)

## Slack

We use Slack almost entirely for internal communication, so install this ASAP.

`brew cask install slack`

## XCode

OS X no longer ships with developer command line tools, which will cause installing certain projects to fail. To install the tools yourself, go to the App Store and install Xcode (free, but requires an Apple ID). Then run XCode, select "Preferences..." from the "Xcode" menu (or press Command-,). Click the "Downloads" button in the upper right of the preferences window, and then click the arrow next to "Command Line Tools" in the "Components" section.

## iTerm2

Very powerful terminal emulator for Mac:

[http://www.iterm2.com/](http://www.iterm2.com/)

## Elasticsearch

`brew install elasticsearch14`

`brew switch elasticsearch14 1.4.4`

### <span class="pln" style="color: rgb(0,0,0);">Head Plugin</span>

<pre>/usr/local/Cellar/elasticsearch/1.4.4/libexec/bin/plugin --install mobz/elasticsearch-head</pre>

## MongoDB

`brew install mongo`

`brew switch mongo 2.4.4-x86_64`

## Git

Download _dmg _from [http://git-scm.com/download/mac](http://git-scm.com/download/mac)

## HubFlow

`brew install hubflow`

See [https://github.com/icgc-dcc/dcc-portal/blob/develop/CONTRIBUTING.md](https://github.com/icgc-dcc/dcc-portal/blob/develop/CONTRIBUTING.md) for details on how we use this.

## GitHub

### Setup

<ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="2d40b185-9fa4-4536-aa6b-0a049e8f7356"><ac:plain-text-body></ac:plain-text-body></ac:structured-macro>

1.  Clone a project from GitHub:  
    `git clone git@github.com:icgc-dcc/<project>.git`
2.  Init Git-flow (default settings):  
    `git hf init`

### Workflow

[http://datasift.github.com/gitflow/GitFlowForGitHub.html](http://datasift.github.com/gitflow/GitFlowForGitHub.html)

1.  Create a new branch for your work  
    Use the ticket number and a brief description of the ticket:  
    _ie._ DCC-103-Git-SOP  
    **git hf feature start BRANCH_NAME**  
    or checkout an existing branch  
    **git hf feature checkout BRANCH_NAME**  

2.  Make your changes (commit often) and push your branch  
    **git add foo.java bar.java**  
    **git commit -m '[TICKET] - Nice commit message'**  
    ****git add bar.java**  
    **git commit -m '[TICKET] - Nice commit message'****  

3.  Push to GitHub to keep the public branch up-to-date**git hf feature push  
    **
4.  _Optional - _If you have been working for a while, you can merge **develop **back into your **branch** if you think they are getting too out of sync   
    **git hf update**** && ****git** **merge develop**  
    _deal with merge conflicts_
5.  When you are finished, open a pull request on GitHub  
    Use the Pull Request button at the top of the Repo  
    Select **develop** as the **base** and **BRANCH_NAME** as the **head**  
    **GitHub will let you know if the merge will be successful**  
    <span style="color: rgb(102,102,153);">**<at some point in the future>Jenkins will merge the pull request into develop and report the results as a comment on the pull request**</span>  
    _<span style="color: rgb(0,0,0);">until Jenkins is setup, another team member can checkout the branch and make sure all tests pass/do code review/whatever</span>_  
    <span style="color: rgb(0,0,0);">**git checkout feature/BRANCH_NAME**</span>  
    <span>_running tests:_ cd server && mvn tests or </span><span style="color: rgb(0,0,0);">cd client && cakes tests</span>  
    _<span style="color: rgb(0,0,0);">  
    </span>_
6.  Merging the pull request  
    <span style="color: rgb(0,0,0);">**If at least one other person has approved, and there are no other comments, the branch can be merged using GitHub **  
    </span>**If the branch cannot be auto-merged into develop, develop must first be merged back into the branch and all conflicts resolved (see step 4) **
7.  After the pull request has been accepted and merged on GitHub, the branch can be deleted  
    **git hf update && ****git hf feature finish BRANCH_NAME**

## Maven

### Installation 

Install Maven 3.2.1 or what is specified in [https://github.com/icgc-dcc/dcc-parent/blob/develop/pom.xml](https://github.com/icgc-dcc/dcc-parent/blob/develop/pom.xml) `<span>maven-enforcer-plugin</span>`

### <span style="color: rgb(0,0,0);">Shade plug-in</span>

This helps with dependency conflicts (especially hadoop's): [http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html](http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html)

Currently use naming convention for the shaded artifact: org.icgc.dcc.shaded.${name} (like "org.icgc.dcc.shaded.jackson", "org.icgc.dcc.shaded.sshd", ...)

## Eclipse

### Installation

Download and install Eclipse 4.6.x or latest for Java EE developers:

[http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/)

### Settings

Install m2e and add the builderhelper plugin:

[http://stackoverflow.com/questions/12685683/m2e-connector-buildhelper-not-compatible-with-eclipse-juno-sr1-m2e-1-2](http://stackoverflow.com/questions/12685683/m2e-connector-buildhelper-not-compatible-with-eclipse-juno-sr1-m2e-1-2)

### Lombok Support

A number of the dcc projects are using Lombok to reduce boilerplate code (e.g., getters, setters, `toString()`, `hashCode()`, `equals()`, `static Logger log`, etc.). This is seemless to `javac` via `mvn`, but the Java 6 [transformations](http://notatube.blogspot.ca/2010/12/project-lombok-creating-custom.html) will not be reflected in Eclipse which will in turn cause compilation errors in your editor. To fix this, execute `java -jar [lombok.jar](http://projectlombok.googlecode.com/files/lombok.jar)` and point it to your Eclipse installation. See [http://projectlombok.org/features/index.html](http://projectlombok.org/features/index.html) for details. 

<ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="73f509de-3dfa-41ea-a901-aff94979e1fe"><ac:rich-text-body>

As of 13/09/19 at least, do **not** use a builder method (defined with `@Builder`) in a statically imported manner. Eclipse is fine but upon compilation with maven, one gets:

  error: cannot find symbol, [ERROR] symbol:   static builder, [ERROR] location: class

</ac:rich-text-body></ac:structured-macro><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="a31bd6c2-3c84-4fd0-b6c3-a916dd491c8f"><ac:rich-text-body>

As of 14/07/07, do **not** use constructs like:

val myVar = new MyAnonymousClass() { ... }

(see [https://code.google.com/p/projectlombok/issues/detail?id=694&sort=-id&colspec=ID%20Type%20Status%20Priority%20Target%20Component%20Owner%20Summary](https://code.google.com/p/projectlombok/issues/detail?id=694&sort=-id&colspec=ID%20Type%20Status%20Priority%20Target%20Component%20Owner%20Summary))

</ac:rich-text-body></ac:structured-macro>

Activate source downloading in the maven plugin, t<span style="line-height: 1.4285715;">ick the</span> **Preferences > Maven > Maven Download Artifact Sources** <span style="line-height: 1.4285715;">box</span>

## Add Static Import Favorites

Add some classes to your favorite static imports via **Preferences > Java > Editor > Content Assist > Favorites**:

*   Guava's `Preconditions`
*   PowerMock's `<span>PowerMockito</span>`
*   Mockito's `Mockito`
*   <span>AsserJ's `<span>org.assertj.core.api.Assertions.*</span>`</span>

### Plugins

#### MoreUnit Plugin

Useful JUnit Eclipse integration extensions can be installed by following the instructions here:

[http://moreunit.sourceforge.net/](http://moreunit.sourceforge.net/)

#### Grep Console

Plugin for colorizing and filtering the Eclipse console. Follow the instructions here:

[http://marian.schedenig.name/projects/grep-console/](http://marian.schedenig.name/projects/grep-console/)

#### JSONEdit Plugin

Useful for editing JSON files in Eclipse, with syntax highlighting and formatting. Follow the instructions here:

[http://eclipsejsonedit.sourceforge.net/](http://eclipsejsonedit.sourceforge.net/)

#### YEdit Plugin

Useful for editing YAML files in Eclipse, with syntax highlighting and formatting. Follow the instructions here:

[https://code.google.com/p/yedit/](https://code.google.com/p/yedit/)

#### ShellEd Plugin

The ShellEd plugin provides basic syntax highlighting and outlining for shell script editing.  Follow the instructions here:

 [http://sourceforge.net/apps/trac/shelled/wiki/Documentation/InstallGuide](http://sourceforge.net/apps/trac/shelled/wiki/Documentation/InstallGuide)

## Node.js

<pre>brew install nvm</pre>

Then read [https://davidwalsh.name/nvm](https://davidwalsh.name/nvm) for usage information.

Then follow instructions in each GitHub's repo for the required node / npm versions (e.g. [https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui](https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui)).

## Setting up DCC Projects

### Setting up DCC-Portal 

_Assumes everything above has been installed correctly._

Clone the repository from git to your workspace and follow the instructions in the [setup of the DCC-Portal-UI](https://github.com/icgc-dcc/dcc-portal/tree/develop/dcc-portal-ui).

After that, in the terminal:

<pre>cd your_workspace/dcc-portal</pre>

<pre>mvn</pre>

Once the build completes, you will be able to import the projects in ecplise:

<pre>File > Import > Maven > Existing Maven Projects</pre>

browse and import your dcc-portal projects. You can ignore any plugin execution errors that might occur in pom.xml.

### Setting up DCC-ETL

You will need to download the DCC reference genome from: 

[https://seqwaremaven.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/dcc-reference-genome-GRCh37.75.v1.tar.gz](https://seqwaremaven.oicr.on.ca/artifactory/dcc-dependencies/org/icgc/dcc/dcc-reference-genome/GRCh37.75.v1/dcc-reference-genome-GRCh37.75.v1.tar.gz)

and extract it to **/tmp**. Ensure that the contents of the file are not in a nested folder and are in the tmp folder. Once extracted, symlink GRCh37.fasta to GRC37.75.fasta and GRCh37.fasta.fai to GRCh37.75.fasta.fai by executing the following:

<pre class="p1">> ln -s GRC37.75.fasta GRC37.fasta</pre>

<pre class="p1">> ln -s GRC37.75.fasta.fai GRC37.fasta.fai</pre>

Clone the dcc-etl project to your workspace using git. In one terminal, start mongo:

<pre class="p1">> mongod       </pre>

Test with: `mongo`

and in another terminal, start elasticsearch:

<pre class="p1">> elasticsearch -f</pre>

Test with: `curl localhost:9200` 

<u>Note</u>: Make sure that the elasticsearch version is exactly 0.90.1 and that the _cluster.name_ is **elasticsearch**in elasticsearch.yml file.

and finally in yet another terminal, go to your dcc-etl project and from the terminal execute:

<pre class="p1">> mvn</pre>
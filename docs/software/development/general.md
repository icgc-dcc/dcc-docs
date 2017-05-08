# General

This section outlines the general conventions used while developing. If you have not first followed the [setup](/software/development/setup/) instructions, please do so first.

## Common

### Warnings

Source code in develop or a pending pull-request **should have no warnings.** Efforts should be made to ensure all warnings are addressed by committing code. `@SuppressWarnings` should be used only as a last resort.

### Other

For good or bad, we typically checkin all formatters to each projects' `.settings` folder for convenience. The code conventions should be enforced automatically by the Eclipse formatter whenever you save a file. The convention used is based on Sun Java Code Convention with the following modifications:

- indentation is 2 spaces
- lines can have a length of up to 120 characters
- hard wrapping is maintained for developer control


What is not covered by the Eclipse formatter is ordering within a class file. Here are the conventions we should enforce:

1. package declaration
1. imports
1. class declaration
1. static members (logger, etc.) 5. members
1. constructors
1. methods
1. inner classes

Ordering also depends on accessibility (members, methods and inner classes):

1. public
1. protected
1. package private (default visibility)
2. private

```java
package org.icgc.dcc;
import java.util.List;

public class TheClass {
  private static final Logger log = LoggerFactory.getLogger(TheClass.class);
  private static final String SOME_CONSTANT = "Some Constant Value";

  protected String someString;

  private final Dependency dependency;

  public TheClass(Dependency dependency) {
    this.dependency = dependency;
  }

  public void useDependency() {
    dependency.useIt();
  }

  protected void doSomething() {
  }

  void packageCallable() {
  }

  private void myMethod() {
  }

  public class AnotherClass {
    // ...
  }

  private class YetAnotherClass {
    // ...
  }
}
```

### Comments

####  General

- Capitalize the first letter in every comment. E.g. `// This is a comment`
- Add a single space after the comment character(s). E.g. `// This is a comment`

#### Anti Patterns

**Do not commit commented code.** The only exception to this rule is for code that **will** eventually be uncommented. For example, if something is implemented correctly, but depends on something not yet implemented, you could commit this code commented. Otherwise, always remove commented code from the source. Source control is used to keep track of old code.

```java
public void myMethod() {
  // TODO: uncomment when TheOtherClass is implemented correctly
  // theOtherClassInstance.callMe();
  // Do nothing for now.
}
```

Comments inline in the code should be kept to a **minimal**. Normally, code is self-explanatory, if it is not, it's probably to complex and should be rewritten.

Acceptable comments are:

- for referring to JIRA issues: `// Added clause to fix DCC-467`
- for explaining a complex if/else if clause (when not possible to rewrite)
- for providing examples (this is usually for configuration files): `# http.port=4567`
- for specifying that code is incomplete: `// TODO: complete this switch case`
- for specifying a side-effect that is not apparent in the code itself: `// By setting this to null, we allow the GC to collect this earlier`

They should **not** be used:

- to comment unexplained behaviour (code should be fixed, not commented): `// Don't know what this is doing`
- to capture personal thoughts or things you've learned: `// Framework X allows this`

**Do not commit auto-generated comments.** Eclipse has a nasty habit of generating comments, delete them before commiting:

```java
  /*
   * (non-Javadoc)
   *
   * @see org.apache.sshd.server.PasswordAuthenticator#authenticate(java.lang.String,
   * java.lang.String, org.apache.sshd.server.session.ServerSession)
   */
  @Override
  public boolean authenticate(String username, String password, ServerSession session) {
    return authenticate(username, password,
      session.getIoSession().getRemoteAddress().toString());
  }
```

**Do not comment getters and setters.** If Eclipse generated them **delete** them.

```java
/**
 * @return name
 */
public String getName() {
  return name;
}

/**
 * @param name
 */
public void setName(String name) {
  this.name = name;
}
```

### Annotations

#### Order

Put more important annotations close to the method/class signature. Good rule of thumb is the logging annotation should be farthest away.

Good Order:

```java
@Slf4j
@Lazy
@Configuration
public class SomeClass {
```

Bad Order:

```java
@Lazy
@Configuration
@Slf4j
public class SomeClass {
```

##  Bash

###  Style Guide

The convensions should follow the ones described in [this article](http://robertmuth.blogspot.ca/2012/08/better-bash-scripting-in-15-minutes.html).

####  File Names

An example of a **good** file name:

```shell
perform-release.sh
```

An example of a **bad** file name:

```shell
perform_release.sh
perform_release
performRelease.sh
performRelease
```

#### Header

Each script should begin with header such as the following:

```shell
#!/bin/bash
#
# Copyright (c) 2016 The Ontario Institute for Cancer Research. All rights reserved.
#
# This program and the accompanying materials are made available under the terms of the GNU Public License v3.0.
# You should have received a copy of the GNU General Public License along with
# this program. If not, see <http://www.gnu.org/licenses/>.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
# OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
# SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
# INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
# TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
# OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
# IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
# ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#
# Description:
#   Runs the annotator
#
# Usage:
#   ./annotator.sh <--working-dir /path/to/the/dir> [--project-names A,B] [--file-types ssm|sgv|ssm,sgv]
#
# Example:
#   ./annotator.sh --working-dir /tmp/ICGC20 --project-names ALL_US --file-types ssm,sgv
```

##  Java

###  Lombok

Things to avoid to prevent `javac` [issues](https://github.com/rzwitserloot/lombok/issues):

- Don't use `val` inside a lambda
- Don't use `val` on the lefthand side of an array assignment
- Don't use `val` on the lefthand side of a lambda assignment
- Don't `@UlitityClass`
- Don't use a builder method (defined with `@Builder`) in a `static`ally imported manner (see [here](https://code.google.com/p/projectlombok/issues/detail?id=694&sort=-id&colspec=ID%20Type%20Status%20Priority%20Target%20Component%20Owner%20Summary))

###  Utility Classes

Utility classes should be cohesive and focused, and not a dumping grounds for a bunch of unrelated methods.

In terms of naming and structure, don't do:

```java
public class DonorUtils {
  // ...
}
```

Instead do:

```java
@NoArgsConstructor(access = PRIVATE)
public final class Donors {
  // ...
}
```

This style is adopted from Guava and tends to promote cohesion because it relates more to the domain.

Ideally Lombok's `@UtilityClass` would be used here, but currently this can lead to issues with `javac` and Eclipse. Please do not use.

###  Enums

Use all capital letters for naming enum constants, unless there is some kind of compatibility concern with another system. Use == to compare enum constants, not equals:

```java
// Like this
if(myValue == MyEnum.CONSTANT) {
  // do something
}

// Not like this
if(MyEnum.CONSTANT.equals(myValue)) {
  // do something
}
```

###  Comments

#### Prefer `//` to `/* */`

There is no particular rationale for this style other than it is common in our codebase.

```java
￼￼￼// good
```

```java
￼￼￼￼/* bad */
```

#### Field Comments

In general, if there are no specific comments that you have time to place atop class fields, it would be nice for the causal reader to add a comment that at least specifies their role. These should be specified as below, in the same general order, omitting empty sections:

```java
/**
 * Constants.
 */

/**
 * Dependencies.
 */

/**
 * Configuration.
 */

/**
 * Metadata.
 */

/**
 * State.
 */
```

These are the most common roles in practice which helps to mentally parse, navigate and index into the code.

| Role          | Constants |
|---------------|-----------|
| Constants     | `public` or `private` `static` `final` object references / primitive values. |
| Dependencies  | Collaborators required for delegation and interaction. When using Spring, these will typically be `@Autowired` |
| Configuration | Behavioural configuration parameters that have been externalized to alter runtime functionality depending on context. Examples could be a database name, index name, number of threads, etc. |
| Metadata      | Similar to configuration, but with the purpose to describe other data. Examples include a data model, schema, field name |
| State         | Mutable state that changes over the objects lifetime. Examples include a stack, list, buffer, etc. |

### If Blocks

Always surround your if blocks with curly brackets:

```java
// like this:
if(someCondition) {
  doSomething();
}

// not like this:
if(someCondition) doSomething();
```

### Ternary operator

Ternary operator is acceptable when returning or assigning:

```java
public Result someMethod() {
  return valid ? doIt() : dontDoIt();
}

public void someOtherMethod() {
  int length = string != null ? string.length() : 0;
}
```

### Avoid the ! operator

Inverting a condition using the ! operator is ok, but it often leads to mis-reading the code, for two reasons:

1. it is small
2. it is inserted at the begining of the clause (yet, we read from left to right, so we have to remember that the condition was inverted)

Since there is no benefit in terms of performance, it is recommended to avoid using it and replace it with a comparision with false:

```java
// Like so:
// This reads as "If myCondition is false"
if(myCondition == false) {
  doSomething();
}

// Not like so:
// This reads as "If not myCondition is true"
if(!myCondition) {
  doSomething()
}
```

### Functional Programming

Get familiar with Guava's Functional Idioms. And use them when it helps (read the Caveats on their Wiki). They allow transforming collections from one type to another without writing a for loop. They allow finding or filtering collections without any branching (if statement). Some examples:

```java
public Iterable<WantedType> getListOfWanted() {
  // say we have this list and we want to transform that into a sequence of WantedType instead (which is a member of Unwanted)
  List<Unwanted> theListToTransform = getUnwanted();

  return Iterables.transform(theListToTransform, new Function<Unwanted, WantedType>() {

    public WantedType apply(Unwanted object) {
       return object.getWanted();
    }

  });
}
```

The example above demonstrates the `transform` method of the `Iterables` class. It is an extremely useful method which simply calls
your apply method for each element in an `Iterable` (any collection). The result is a new `Iterable` that is actually a view of the first. What is very nice about this is that it's a zero-copy operation. The instance returned is not a new collection, it is a view of the original that will transform the elements one-by-one as one iterates on the sequence. To make a List out of an `Iterable`, call `ImmutableList.copyOf`

Furthermore, you can compose `Function` instances, see the `Functions` class.

Similar to `Functions` are `Predicates`: instead of returning another type, they return a `boolean`. These are used to filter and find elements in a collection.

```java
￼￼￼￼public AnInstance getByName(final String name) {
  List<AnInstance> instances = getInstances();

    return Iterables.find(instances, new Predicate<AnInstance>() {

      public boolean apply(AnInstance object) {
        return object.getName().equals(name);
      }

    });
}
```

Again, this is using the `Iterables` class, but this time for finding a single element in an `Iterable`. The benefit of this is that a `Predicate` can actually be written once and reused in multiple places. Think of a `Predicate` as a reusable condition within the brakets of an `if()` statement.

As [Guava's Wiki](https://code.google.com/p/guava-libraries/wiki/GuavaExplained) mentions, don't be function simply to be functional. Do it when there's a net saving (improved readability or efficiency).

## Maven

### Shade Plug-in

This helps with dependency conflicts (especially Hadoop's): [http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html](http://maven.apache.org/plugins/maven-shade-plugin/examples/class-relocation.html)

Currently use naming convention for the shaded artifact: `org.icgc.dcc.shaded.${name}` (e.g. `org.icgc.dcc.shaded.jackson`, `org.icgc.dcc.shaded.sshd`, ...)

## Best Practices

### Tests

Use long method names that convey the purpose of a test. Method names should have the following naming convention: `test_methodBeingEx ercised_purposeOfTheTest`.

For example:

```java
￼￼￼￼class ClassUnderTest {
  public void doSomething(String param) {
     // Something
  }
}

class ClassUnderTestTest {
  @Test
  public void test_doSomething_doesSomethingWithString() {
    new ClassUnderTest().doSomething("do it!")
  }

  @Test
  public void test_doSomething_throwsWhenArgumentIsNull() {
    new ClassUnderTest().doSomething(null)
  }

  @Test
  public void test_doSomething_throwsWhenArgumentIsInvalid() {
    new ClassUnderTest().doSomething("invalid string")
  }
}
```

### Injection

1. Use constructor injection and reduce visibility of injected class as much as possible.
2. Use Guava's Preconditions (`checkArgument`, `checkState`, etc.) When checking arguments for not-nullness, use checkArgument ins
tead of `checkNull`. The later throws an `NullPointerException` which is a bit confusing.

```java
￼￼￼class TheClass {

  private final Dependency dependency;

  @Inject
  public TheClass(Dependency dependency) {
    checkArgument(dependency != null);
    this.dependency = dependency;
  }
}
```

### Using `null`

Avoid returning `null` in a method. Methods should be written in a way that they either succeed (return an actual value) or fail (throw an exception). Returning null creates a third execution path that is prone to causing problems.

To avoid returning `null`, you have a few options:

1. create 2 methods, one for testing, one for executing
2. use `Optional`

### Using 2 methods

The first case is ok when the test is fast. For example:

```java
class MyClass {

  private String mayBeNullForSomeReason;

  public boolean hasString() {
    return mayBeNullForSomeReason != null;
  }

  public String getString() {
    checkState(hasString());
    return mayBeNullForSomeReason;
  }
}
```

The example is not very convincing, but the idea is that a method exists for testing the expectation before actually invoking the actual method of interest. Why is this better? A few reasons:

1. It conveys the intention clearly: it is clear that getString() will never return null and that if you don't want to handle the exception, call hasString first.
2. There's no chance of getting an `NPE` in a very far-away piece of code. Imagine that the calling code is calling `getString()` but not using it until something else happens. The `NPE` will be thrown when that something else happens instead of when `getString()` was called (possibly at the wrong time).

### Using `Optional`

The second method is to use the `Optional` class in Guava. This allows a method a value that may or may not be null. So the method itself always returns a value, but it is this value that may be absent. Reusing the same example as above:

```java
class MyClass {

  private String mayBeNullForSomeReason;

  public Optional<String> getString() {
    return new Optional(mayBeNullForSomeReason);
  }
}
```

Again, the benefits are similar as above. The main difference is that this creates an additional instance (`Optional`) which may not be possible when dealing with large amount of data (creating a million `Optional` instances is not a good idea). This strategy is good for implementing find operations: ones that iterate over collections or make similar expensive processes that may result in nothing. So instead of returning null in those cases, return an `Optional`.

So both solutions are better than returning `null`, but are not necessarily applicable in the same situations.


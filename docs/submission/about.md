# About

### ICGC DCC Event Calendar

<iframe src="https://www.google.com/calendar/embed?src=icgcportal%40gmail.com&ctz=America/Toronto&mode=agenda&dates=20150801/20151030" style="border: 0" width="500" height="375" frameborder="0" scrolling="no"></iframe>

Use the calendar to keep track of when the next data submission and data release is.

### Timeline
DCC will be making multiple releases. Once a release is completed, a new one is created, and so on. Many releases exist at the same time, but only one of them is being prepared. The following diagram tries to demonstrate that releases happen sequentially and only one is ever being prepared:

![](/submission/images/submissions-timeline.png)


The process goes like this:

1.  A Release is created and is immediately set in the `OPENED` state. When the `Release`is in this state:
    * the data dictionary can be amended according to some constraints (see the DD spec)
    * changing the dictionary requires that already validated submissions be re-validated (probably done manually)
    * members can upload files for their (SFTP) projects and obtain validation reports.
    * `VALID` submissions can be "signed off". At which point the submission directory becomes read-only.
2.  After a period of time, the release is moved to the `COMPLETED`state. At which point:
    * this release is frozen, everything about it can be read back, but nothing can be modified
    * a new release is created and the process starts again.

We propose that the whole process be relatively short, maybe 1 or 2 months. Thus, if a project misses a release, they can simply submit for the next which will be just a few weeks later.

### Flowchart

![](/submission/images/data-submission-bpmn.png)
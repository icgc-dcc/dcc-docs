# Software

## Overview

This is the Software documentation page

## Release Notes

#### Changes in Data Portal Software Release 3.8.20 - Nov 27, 2015
* Added Drug/Compound entity page which correlates targeted genes and provides context into clinical trials, e.g. Go to Sprycel Compound page ()
* Added Drug/Compound section in Gene Entity Page, e.g. Go to Compound section in EGFR Gene page ()
* Added Quick Search support for Drug/Compound, e.g. Type Leukeran in the Quick Search
* Iobio integration added to aligned BAM files stored in AWS/Collaboratory, e.g. Go to BAM Stats section in
* Added highlight of genes overlapping with Enrichement Analysis input genes in Pathway Viewer, e.g. Look for R-HSA-5654716 Pathway Viewer in

#### Changes in Data Portal Software Release 3.8.18.3 - Nov 18, 2015
* Released ICGC in the Cloud (), see Amazon post:
* Displayed User Guide to explore and analyze ICGC data stored in Amazon AWS and Collaboratory ()
* Separated DCC data releases () from Data Repositories ()
* Re-organized filters and added Analysis Software filter on Data Repositories browser
* Improved performance of the Advanced Search page
* Various Bug fixes

#### Changes in Data Portal Software Release 3.8.16.1 - Oct 28, 2015
* Displayed Pathway Viewer from Reactome Pathway Entity Page, (e.g. , click on "Pathway Viewer" section in the navigation bar: mutated genes are highlighted and mutation count is displayed at the top-right corner of the entity. User should click on entity to view details about genes and mutation count)
* Displayed Pathway Viewer from an Enrichment Analysis for all the enriched gene sets (e.g. , click on "Open in Pathway Viewer" and navigate through the reactome pathways to view pathway diagrams)
* Enhanced data repositories, e.g. assigned a File ID FI99999, added Specimen Type facet (link: )
* Updated File Entity Page layout (e.g. )
* When navigating from Donor Entity page to Genome Viewer, the mutation sorting and filter is now carried over
* Significantly reduced the load time of stacked bar chart in Project Summary page ()
* Refactored Browser API to fix various problems that could result in error 500s being returned
* Bug fixes for Project Sample Sheet, Pie Chart colouring

#### Changes in Data Portal Software Release 3.8.14.4 - Sept 22, 2015
* Added functionality to view files in external repositories based on filters from advanced search (Go to , select your filters then in Donor tab click on "View in External Repositories" ). Documentation is available here:
* Added functionality to download donor data and view donor sets in external repositories browser from Data Analysis (icons are available for saved donor sets here: )
* Added functionality to upload a donor set in Donor facet in Advanced Search () and External Repositories browser ()
* Added full screen support for Genome Viewer
* Added Tumor Types facet in Projects page ()
* Bug fixes for gene query in the case of no donor analysis and for Pathway Viewer

#### Changes in Data Portal Software Release 3.8.9.3 - July 3, 2015
* Added PCAWG section to home page and footer
* Added PCAWG page -
* Minor bug fixes

#### Changes in Data Portal Software Release 3.8.8.0 - June 16, 2015
* Added DCC - [External Repository feature][19]. User can search for ICGC-Donor files stored in external repository and create a manifest to download them. Documentation is available here:
* Added Study facet to filter PCAWG (Pan-Cancer Analysis of Whole Genome) Donors in Advanced Search - Donor tab, e.g. [ PCAWG Donors in Advanced Search ][20]
* Added support for clinical supplementary files (family, exposure, therapy). Displayed in Donor Entity Page and exported in Donors files
* Added support for pending donors and projects. Documentation is available here:
* Added preliminary UI / API support for "donor states". API documentation available here:
* Reduced project colour space to primary sites
* Bug fixes and core javascript libraries upgrades

#### Changes in Data Portal Software Release 3.8.2.3 - April 7, 2015
* Redesigned Data Analysis feature to improve user experience (). Documentation available here:
* Added demo analyses: User can launch them from
* Added Phenotype Comparison analysis to Data Analysis feature ()
* Added functionality to upload a custom gene set and save it in Data Analysis (). User can then perform analysis on saved gene set
* Added version control and version deprecation for data analyses: User will get a warning message on his analyses if ICGC data has been updated
* Bug fixes and libraries upgrade

#### Changes in Data Portal Software Release 3.8.2.2 - March 16, 2015
* Added new visualization to show "Donor Count History" ()
* Bug fixes

#### Changes in Data Portal Software Release 3.7.6.6 - February 11, 2015
* Added "GA4GH Beacon" feature ()
* Added "Saved Sets" feature ()
* Added "Set Analysis" feature ()
* Added "Enrichment Analysis" feature ()
* Projects page layout update and optimization ()
* Various bug fixes

#### Changes in Data Portal Software Release 3.7.6.2 - January 21, 2015
* "Gene Ontology" quick search ()
* "Gene Ontology" advanced search ([https://dcc.icgc.org/search/g?filters=%7B%22gene%22%3A%7B%22goTermId%22%...][21])
* "Gene Ontology" entity pages (see )
* Updated "Reactome Pathway" data (see )
* Update "Cancer Gene Census" data (see )
* Generalized "Pathway", "Cancer Gene Census" and "Gene Ontology" into unified "Gene Set" integration
* Various small fixes

#### Changes in Data Portal Software Release 3.7.4.1 - December 3, 2014
* Added new visualization showing "Number of Somatic Mutations in Donor's Exomes Across Cancer Projects" (see )
* Users can now upload their own custom gene list in Advanced Search (see )
* Added Markdown support for data repository for inline viewing of README files (see )
* Improved general client-side page responsiveness of chart rendering
* Minor bug fixes

#### Changes in Data Portal Software Release 3.5.12 - September 29, 2014
* Fixed bug wherein a DACO authorization was being denied to ICGC.org (non-OpenID) users with granted access
* Improved general client-side page responsiveness

#### Changes in Data Portal Software Release 3.5 - September 12, 2014
* Upgraded to Genome Maps 1.1.7
* Improved site performance through better caching
* Added "Multiple Observations per Donor Mutation Occurrence" feature
* Added "Short URL" feature
* Added "Repository URL Right-click to Copy" feature

#### Changes in Data Portal Software Release 3.2 - May 15, 2014
* Added "Aggregated SSM VCF" feature
* Added "Pathway Entity Page" feature
* Added "Pathway Search" feature
* Added "Gene Sets" feature
* Added "Functional Impact" feature
* Added "Project Search" feature
* Added "Authentication and Authorization" feature
* Added "Controlled Access Download" feature
* Added "Asynchronous Download" feature
* Added "Public RESTful API" feature

[‹ ICGC Publication Guidelines][22] [up][23] [Methods ›][24]

* [International Cancer Genome Consortium (ICGC)][25]
    * [Cancer Genome Projects][26]
    * [Committees and Working Groups][27]
    * [Policies and Guidelines][28]
    * [Media][29]
* [ICGC Data Portal (DCC)][2]
    *
    * [DCC Cancer Projects][30]
    * [DCC Advanced Search][31]
    * [DCC Data Repository][32]
    * [**DCC Documentation**][33]
* [Data Access Compliance Office (DACO)][3]
    * [Access Forms][34]
    * [Research Practices][35]
    * [International Data Access Committee][36]
    * [DACO Approved Projects][37]
* [Contact Us][4]
    * [info@icgc.org][4]
    * [Terms & Conditions][38] | [Privacy Policy][39]
    * © 2012 [International Cancer Genome Consortium][25]. All rights reserved.
* For ICGC Data Portal (DCC) submission support, please contact:  [dcc-support@icgc.org][40]
* ![Connected with the Central User Directory][41] This site is connected with the [Central User Directory][42].

[1]: http://icgc.org
[2]: http://dcc.icgc.org/
[3]: http://icgc.org/daco
[4]: http://icgc.org/icgc/contacts
[5]: /user/login
[6]: https://docs.icgc.org/files/logo_dcc.jpg
[7]: /
[8]: /home ""
[9]: /data-portal "Data Portal"
[10]: /data-submission "Data Submission"
[11]: /contact-us "Contact Us"
[12]: /data-portal
[13]: /access-controlled-data
[14]: /icgc-publication-guidelines
[15]: /portal-software-release-notes
[16]: /methods
[17]: /data-portal-usage
[18]: /data-portal-api
[19]: https://dcc.icgc.org/repository/external
[20]: https://dcc.icgc.org/search?filters=%7B%22donor%22:%7B%22studies%22:%7B%22is%22:%5B%22PCAWG%22%5D%7D%7D%7D
[21]: https://dcc.icgc.org/search/g?filters=%7B%22gene%22%3A%7B%22goTermId%22%3A%7B%22is%22%3A%5B%22GO%3A1901662%22%5D%7D%7D%7D "https://dcc.icgc.org/search/g?filters=%7B%22gene%22%3A%7B%22goTermId%22%3A%7B%22is%22%3A%5B%22GO%3A1901662%22%5D%7D%7D%7D"
[22]: /icgc-publication-guidelines "Go to previous page"
[23]: /data-portal "Go to parent page"
[24]: /methods "Go to next page"
[25]: http://icgc.org/
[26]: http://icgc.org/icgc/cgp
[27]: http://icgc.org/icgc/committees-and-working-groups
[28]: http://icgc.org/icgc/goals-structure-policies-guidelines
[29]: http://icgc.org/icgc/media
[30]: http://dcc.icgc.org/projects
[31]: http://dcc.icgc.org/search
[32]: http://dcc.icgc.org/repository
[33]: http://docs.icgc.org
[34]: http://icgc.org/daco/access-forms
[35]: http://icgc.org/daco/research-practices
[36]: http://icgc.org/daco/idac
[37]: http://icgc.org/daco/approved-projects
[38]: http://icgc.org/terms-and-conditions
[39]: http://icgc.org/privacy-policy
[40]: mailto:dcc-support@icgc.org
[41]: https://docs.icgc.org/sites/all/modules/ud/images/white-cud-badge.png "Connected with the Central User Directory"
[42]: http://cud.oicr.on.ca/node/7656 "More about the Central User Directory"

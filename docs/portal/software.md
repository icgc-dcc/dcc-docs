# Portal Software Release Notes

Note that code level release notes may found on [GitHub](https://github.com/icgc-dcc/dcc-portal/blob/develop/CHANGES.md). The following details user facing features / changes covered in each release.

#### Changes in Data Portal Software Release 4.2.3 - June 23rd, 2016
* Added support for "Not filtering" in [Advanced Search](https://icgc.org/ZNu)
* Added facet charts in the [Repository Browser](https://dcc.icgc.org/repositories)
* Removed TCGA repository in the Repository Browser as this is replaced with GDC
* Added [GDC clinical and biospecimen](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22GDC%20-%20Chicago%22%5D%7D,%22dataType%22:%7B%22is%22:%5B%22Clinical%20Data%22,%22Biospecimen%20Data%22%5D%7D%7D%7D) files in the Repository Browser
* Unified behaviours for "copy to clipboard" widgets
* Charting library upgrades
* Various bug fixes

#### Changes in Data Portal Software Release 4.2.2 - June 15th, 2016
* GDC files published in the [Repository Browser](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22GDC%20-%20Chicago%22%5D%7D%7D%7D).
* Support for saving, sharing and searching by File Sets in [Repository Browser](https://dcc.icgc.org/repositories)
* Added support for searching by Manifest ID in the [Repository Browser](https://dcc.icgc.org/repositories)
* Added support for searching by Submitter Bundle ID in the [Repository Browser](https://dcc.icgc.org/repositories)
* Changed software hosting to https://artifacts.oicr.on.ca
* Improved loading icon placement
* Various bug fixes

#### Changes in Data Portal Software Release 4.0.25 - June 8th, 2016
* Initial set of projects for PCAWG EGA files published in the [Repository Browser](https://dcc.icgc.org/repositories?filters=%7B%22file%22:%7B%22repoName%22:%7B%22is%22:%5B%22EGA%20-%20Hinxton%22%5D%7D%7D%7D).

#### Changes in Data Portal Software Release 4.0.24 - June 7th, 2016
* Can search for files based on Bundle ID, and the Bundle ID will be shown for file results in keyword search.
* The Gene entity page will now show all available drugs instead of limiting to a list of 10 results.
* Clicking on clinical trials from the gene page will now scroll to the trials section of compound page.
* Various bug fixes

#### Changes in Data Portal Software Release 4.0.14 - May 4th, 2016
* Iobio integration added to VCF files stored in AWS/Collaboratory.  e.g. Go to VCF Stats section in [https://dcc.icgc.org/repositories/files/FI378419](https://dcc.icgc.org/repositories/files/FI378419)
* Fixed truncated or failing downloads that were occuring for some users.
* Various minor bug fixes.

#### Changes in Data Portal Software Release 3.8.20 - Nov 27, 2015
* Added Drug/Compound entity page which correlates targeted genes and provides context into clinical trials, e.g. Go to Sprycel Compound page ([https://dcc.icgc.org/compound/ZINC000003986735](https://dcc.icgc.org/compound/ZINC000003986735))
* Added Drug/Compound section in Gene Entity Page, e.g. Go to Compound section in EGFR Gene page ([https://dcc.icgc.org/genes/ENSG00000146648](https://dcc.icgc.org/genes/ENSG00000146648))
* Added Quick Search support for Drug/Compound, e.g. Type Leukeran in the Quick Search
* Iobio integration added to aligned BAM files stored in AWS/Collaboratory, e.g. Go to BAM Stats section in [https://dcc.icgc.org/repositories/files/FI9974](https://dcc.icgc.org/repositories/files/FI9974)
* Added highlight of genes overlapping with Enrichement Analysis input genes in Pathway Viewer, e.g. Look for R-HSA-5654716 Pathway Viewer in [https://dcc.icgc.org/pathways/ea41722b-5f8f-4735-8830-4c2fb52b2ff3](https://dcc.icgc.org/pathways/ea41722b-5f8f-4735-8830-4c2fb52b2ff3)

#### Changes in Data Portal Software Release 3.8.18.3 - Nov 18, 2015
* Released ICGC in the Cloud ([https://dcc.icgc.org/icgc-in-the-cloud](https://dcc.icgc.org/icgc-in-the-cloud)), see Amazon post: [https://aws.amazon.com/blogs/aws/](https://aws.amazon.com/blogs/aws/)<span class="ext"></span>
* Displayed User Guide to explore and analyze ICGC data stored in Amazon AWS and Collaboratory ([https://dcc.icgc.org/icgc-in-the-cloud/guide](https://dcc.icgc.org/icgc-in-the-cloud/guide))
* Separated DCC data releases ([https://dcc.icgc.org/releases](https://dcc.icgc.org/releases)) from Data Repositories ([https://dcc.icgc.org/repositories][1])
* Re-organized filters and added Analysis Software filter on Data Repositories browser
* Improved performance of the Advanced Search page
* Various Bug fixes

#### Changes in Data Portal Software Release 3.8.16.1 - Oct 28, 2015
* Displayed Pathway Viewer from Reactome Pathway Entity Page, (e.g. [https://dcc.icgc.org/genesets/R-HSA-392154](https://dcc.icgc.org/genesets/R-HSA-392154), click on "Pathway Viewer" section in the navigation bar: mutated genes are highlighted and mutation count is displayed at the top-right corner of the entity. User should click on entity to view details about genes and mutation count)
* Displayed Pathway Viewer from an Enrichment Analysis for all the enriched gene sets (e.g. [https://icgc.org/Zir](https://icgc.org/Zir), click on "Open in Pathway Viewer" and navigate through the reactome pathways to view pathway diagrams)
* Enhanced data repositories, e.g. assigned a File ID FI99999, added Specimen Type facet (link: [https://dcc.icgc.org/repositories][1]
* Updated File Entity Page layout (e.g. [https://dcc.icgc.org/repositories/files/FI9995](https://dcc.icgc.org/repositories/files/FI9995))
* When navigating from Donor Entity page to Genome Viewer, the mutation sorting and filter is now carried over
* Significantly reduced the load time of stacked bar chart in Project Summary page ([https://dcc.icgc.org/projects][4]
* Refactored Browser API to fix various problems that could result in error 500s being returned
* Bug fixes for Project Sample Sheet, Pie Chart colouring

#### Changes in Data Portal Software Release 3.8.14.4 - Sept 22, 2015
* Added functionality to view files in external repositories based on filters from advanced search (Go to [https://dcc.icgc.org/search][6], select your filters then in Donor tab click on "View in External Repositories" ). Documentation is available [here](repositories.md)
* Added functionality to download donor data and view donor sets in external repositories browser from Data Analysis (icons are available for saved donor sets here: [https://dcc.icgc.org/analysis/sets][7])
* Added functionality to upload a donor set in Donor facet in Advanced Search ([https://dcc.icgc.org/search][6] and External Repositories browser ([https://dcc.icgc.org/repositories][1])
* Added full screen support for Genome Viewer
* Added Tumor Types facet in Projects page ([https://dcc.icgc.org/projects][4])
* Bug fixes for gene query in the case of no donor analysis and for Pathway Viewer

#### Changes in Data Portal Software Release 3.8.9.3 - July 3, 2015
* Added PCAWG section to home page and footer
* Added PCAWG page - [https://pcawg.icgc.org](https://pcawg.icgc.org)
* Minor bug fixes

#### Changes in Data Portal Software Release 3.8.8.0 - June 16, 2015
* Added DCC - [External Repository feature][1]. User can search for ICGC-Donor files stored in external repository and create a manifest to download them. Documentation is available here: [https://docs.icgc.org/data-portal-usage#externalrep](https://docs.icgc.org/data-portal-usage#externalrep)
* Added Study facet to filter PCAWG (Pan-Cancer Analysis of Whole Genome) Donors in Advanced Search - Donor tab, e.g. [ PCAWG Donors in Advanced Search ][2]
* Added support for clinical supplementary files (family, exposure, therapy). Displayed in Donor Entity Page and exported in Donors files
* Added support for pending donors and projects. Documentation is available here: [https://docs.icgc.org/data-portal-usage#pendingdonors](https://docs.icgc.org/data-portal-usage#pendingdonors)
* Added preliminary UI / API support for "donor states". API documentation available here: [https://dcc.icgc.org/docs/](https://dcc.icgc.org/docs/)
* Reduced project colour space to primary sites
* Bug fixes and core javascript libraries upgrades

#### Changes in Data Portal Software Release 3.8.2.3 - April 7, 2015
* Redesigned Data Analysis feature to improve user experience ([https://dcc.icgc.org/analysis/sets][7]). Documentation available [here](methods.md)
* Added demo analyses: User can launch them from [https://dcc.icgc.org/analysis][5]
* Added Phenotype Comparison analysis to Data Analysis feature ([https://dcc.icgc.org/analysis][5])
* Added functionality to upload a custom gene set and save it in Data Analysis ([https://dcc.icgc.org/analysis/sets][7]). User can then perform analysis on saved gene set
* Added version control and version deprecation for data analyses: User will get a warning message on his analyses if ICGC data has been updated
* Bug fixes and libraries upgrade

#### Changes in Data Portal Software Release 3.8.2.2 - March 16, 2015
* Added new visualization to show "Donor Count History" ([https://dcc.icgc.org/projects/history](https://dcc.icgc.org/projects/history))
* Bug fixes

#### Changes in Data Portal Software Release 3.7.6.6 - February 11, 2015
* Added "GA4GH Beacon" feature ([https://dcc.icgc.org/ga4gh/beacon](https://dcc.icgc.org/ga4gh/beacon))
* Added "Saved Sets" feature ([https://dcc.icgc.org/analysis][5])
* Added "Set Analysis" feature ([https://dcc.icgc.org/analysis][5])
* Added "Enrichment Analysis" feature ([https://dcc.icgc.org/analysis][5])
* Projects page layout update and optimization ([https://dcc.icgc.org/projects][4])
* Various bug fixes

#### Changes in Data Portal Software Release 3.7.6.2 - January 21, 2015
* "Gene Ontology" quick search ([https://dcc.icgc.org/q?q=GO:1901662](https://dcc.icgc.org/q?q=GO:1901662))
* "Gene Ontology" advanced search ([https://dcc.icgc.org/search/g?filters=%7B%22gene%22%3A%7B%22goTermId%22%...][3])
* "Gene Ontology" entity pages (see [https://dcc.icgc.org/genesets/GO:0008195](https://dcc.icgc.org/genesets/GO:0008195))
* Updated "Reactome Pathway" data (see [https://dcc.icgc.org/genesets/REACT_13797](https://dcc.icgc.org/genesets/REACT_13797))
* Update "Cancer Gene Census" data (see [https://dcc.icgc.org/genesets/GS1](https://dcc.icgc.org/genesets/GS1))
* Generalized "Pathway", "Cancer Gene Census" and "Gene Ontology" into unified "Gene Set" integration
* Various small fixes

#### Changes in Data Portal Software Release 3.7.4.1 - December 3, 2014
* Added new visualization showing "Number of Somatic Mutations in Donor's Exomes Across Cancer Projects" (see [https://dcc.icgc.org/projects][4])
* Users can now upload their own custom gene list in Advanced Search (see [https://dcc.icgc.org/search/g](https://dcc.icgc.org/search/g))
* Added Markdown support for data repository for inline viewing of README files (see [https://dcc.icgc.org/repositories][1])
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

[1]: https://dcc.icgc.org/repositories
[2]: https://dcc.icgc.org/search?filters=%7B%22donor%22:%7B%22studies%22:%7B%22is%22:%5B%22PCAWG%22%5D%7D%7D%7D
[3]: https://dcc.icgc.org/search/g?filters=%7B%22gene%22%3A%7B%22goTermId%22%3A%7B%22is%22%3A%5B%22GO%3A1901662%22%5D%7D%7D%7D
[4]: https://dcc.icgc.org/projects
[5]: https://dcc.icgc.org/analysis
[6]: https://dcc.icgc.org/search
[7]: https://dcc.icgc.org/analysis/sets

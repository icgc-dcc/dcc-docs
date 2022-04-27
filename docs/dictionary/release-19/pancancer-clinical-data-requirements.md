<h1 class="title">
 PanCancer Clinical Data Requirements
</h1>
<div id="content-group" class="content-group row nested " style="width:100%">
 <div id="content-group-inner" class="content-group-inner inner">
  <div id="content-region" class="content-region row nested">
   <div id="content-region-inner" class="content-region-inner inner">
    <a name="main-content-area" id="main-content-area">
    </a>
    <div id="content-inner" class="content-inner block">
     <div id="content-inner-inner" class="content-inner-inner inner">
      <div id="content-content" class="content-content">
       <div id="node-6767" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <p>
           <br>
          </p>
          <p>
          </p>
          <div id="page">
           <div id="main" class="aui-page-panel">
            <div id="content" class="view">
             <div id="main-content" class="wiki-content group">
              <h3 id="PCAWGClinicalDataDocumentation-1">
               <style type="text/css">
                /*&lt;![CDATA[*/
div.rbtoc1428517785668 {padding: 0px;}
div.rbtoc1428517785668 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1428517785668 li {margin-left: 0px;padding-left: 0px;}

/*]]&gt;*/&lt;/![cdata[*/&gt;
               </style>
               <div class="toc-macro rbtoc1428517785668">
                <ul class="toc-indentation">
                 <li>
                  <a href="#PCAWGClinicalDataDocumentation-Overview">
                   Overview
                  </a>
                 </li>
                 <li>
                  <a href="#PCAWGClinicalDataDocumentation-ErrorMessages">
                   Error Messages
                  </a>
                 </li>
                 <li>
                  <a href="#PCAWGClinicalDataDocumentation-SummaryofPCAWG-specificRequirements">
                   Summary of PCAWG-specific Requirements
                  </a>
                 </li>
                 <li>
                  <a href="#PCAWGClinicalDataDocumentation-Questions">
                   Questions
                  </a>
                 </li>
                </ul>
               </div>
              </h3>
              <h1 id="PCAWGClinicalDataDocumentation-Overview">
               Overview
              </h1>
              <p class="p1">
               <span class="s1">
                Clinical data completeness is very low in DCC data submissions, making it difficult to associate clinical information to experimental data. In an effort to collect comprehensive clinical information for PCAWG data, we have summarized a list of clinical terms - 36 from the existing DCC dictionary and 20 new clinical terms - which will be collected for all samples/specimens/donors in the PCAWG study.
               </span>
              </p>
              <p class="p1">
               <span class="s1">
                PCAWG-specific rules will apply to the following clinical files:
               </span>
              </p>
              <ul style="list-style-type: square;">
               <li class="p1">
                <span class="s1">
                 Donor
                </span>
               </li>
               <li class="p1">
                Specimen
               </li>
               <li class="p1">
                Sample
               </li>
               <li class="p1">
                Donor Family
               </li>
               <li class="p1">
                Donor Exposure
               </li>
               <li class="p1">
                Donor Postresection Therapy
               </li>
              </ul>
              <p class="p1">
               <span class="s1">
               </span>
              </p>
              <p class="p1">
               <strong>
                What are PCAWG-specific rules?
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                PCAWG-specific rules applies to donors/specimens/samples that are part of the PCAWG study
               </li>
               <li>
                <em>
                 <strong>
                  These rules over-ride the DCC specification rules
                 </strong>
                </em>
               </li>
               <li>
                Different requirements for
                <em>
                 donor
                </em>
                and
                <em>
                 specimen
                </em>
                related clinical fields apply depending on whether a project is a TCGA project or non-TCGA project. The requirements for the other clinical files are the same as the DCC requirements. Please use the following PCAWG specifications:
               </li>
              </ul>
              <p style="text-align: center;">
              </p>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   PCAWG Requirements for:
                  </th>
                 </tr>
                 <tr>
                  <th colspan="1" class="confluenceTh">
                   non-TCGA Projects
                  </th>
                  <th colspan="1" class="confluenceTh">
                   TCGA Projects
                  </th>
                 </tr>
                 <tr>
                  <td style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/donor-data-file-donor-pcawg-non-tcga-projects" class="external-link" rel="nofollow">
                    non-TCGA PCAWG Donor
                   </a>
                  </td>
                  <td style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/donor-data-file-donor-pcawg-tcga-projects" class="external-link" rel="nofollow">
                    TCGA PCAWG Donor
                   </a>
                  </td>
                 </tr>
                 <tr>
                  <td style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/specimen-data-file-specimen-pcawg-non-tcga-requirements#node-6851" class="external-link" rel="nofollow">
                    non-TCGA PCAWG Specimen
                   </a>
                  </td>
                  <td style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/specimen-data-file-specimen-pcawg-tcga-requirements" class="external-link" rel="nofollow">
                    TCGA PCAWG Specimen
                   </a>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="2" style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/analyzed-sample-data-file-sample" class="external-link" rel="nofollow">
                    Analyzed Sample
                   </a>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="2" style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/donor-family" class="external-link" rel="nofollow">
                    Donor Family
                   </a>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="2" style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/donor-exposure" class="external-link" rel="nofollow">
                    Donor Exposure
                   </a>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="2" style="text-align: center;" class="confluenceTd">
                   <a href="https://docs.icgc.org/donor-postresection-therapy" class="external-link" rel="nofollow">
                    Donor Postresection Therapy
                   </a>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <div class="aui-message warning shadowed information-macro">
               <span class="aui-icon icon-warning">
                Icon
               </span>
               <div class="message-content">
                <p style="text-align: left;">
                 The
                 <a href="https://docs.icgc.org/donor-family" style="text-align: center;" class="external-link" rel="nofollow">
                  Donor Family
                 </a>
                 ,
                 <a href="https://docs.icgc.org/donor-exposure" style="text-align: center;" class="external-link" rel="nofollow">
                  Donor Exposure
                 </a>
                 and
                 <a href="https://docs.icgc.org/donor-postresection-therapy" style="text-align: center;" class="external-link" rel="nofollow">
                  Donor Postresection Therapy
                 </a>
                 files are
                 <em>
                  <strong>
                   mandatory
                  </strong>
                 </em>
                 for donors with sequencing data submitted to PCAWG study.
                </p>
               </div>
              </div>
              <p style="text-align: left;">
               <strong style="line-height: 1.5;">
                <br>
               </strong>
              </p>
              <p style="text-align: left;">
               <strong style="line-height: 1.5;">
                How do I know when PCAWG-specific rules apply?
               </strong>
              </p>
              <div class="aui-message warning shadowed information-macro">
               <span class="aui-icon icon-warning">
                Icon
               </span>
               <div class="message-content">
                Please use &#34;study&#34; field in
                <a href="https://docs.icgc.org/analyzed-sample-data-file-sample" class="external-link" rel="nofollow">
                 sample file
                </a>
                to indicate whether a sample is in PCAWG study.
               </div>
              </div>
              <p>
               <span style="line-height: 1.4285715;">
                PCAWG-specific rules apply to:
               </span>
              </p>
              <ol>
               <li>
                All samples that exist in the PCAWG study
               </li>
               <li>
                A specimen that has 1 or more samples in the PCAWG study
               </li>
               <li>
                A donor that has 1 or more samples in the PCAWG study
               </li>
              </ol>
              <p>
               <map id="gliffy-map-62915654-101" name="gliffy-map-62915654-101">
               </map>
              </p>
              <table width="100%" class="gliffy-macro-table">
               <tbody>
                <tr>
                 <td>
                  <table class="gliffy-macro-inner-table">
                   <caption align="bottom">
                   </caption>
                   <tbody>
                    <tr>
                     <td>
                      <img style="border: none; width: 1044px;" usemap="#gliffy-map-62915654-101" src="https://docs.icgc.org/files/public/PCAWG_requirements.png" alt="" class="gliffy-macro-image">
                     </td>
                    </tr>
                   </tbody>
                  </table>
                 </td>
                </tr>
               </tbody>
              </table>
              <p>
               <strong>
                Example:
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                Sample IDs &#34;sample3&#34; and &#34;sample4&#34; are PCAWG samples. As a result, the PCAWG specifications will apply to sample IDs &#34;Sample3&#34;, &#34;Sample4&#34; and specimen ID &#34;Specimen2&#34; and donor ID &#34;Donor_A&#34;.
               </li>
               <li>
                Sample IDs &#34;sample1&#34; and &#34;sample2&#34; are not in the PCAWG project and will only be submitted to DCC. DCC requirements apply to sample IDs &#34;Sample1&#34;, &#34;Sample2&#34;, and specimen ID &#34;Specimen1&#34;. PCAWG rules apply to &#34;Donor_A&#34; because it has one or more samples in the PCAWG study.
               </li>
              </ul>
              <p>
               <map id="gliffy-map-62915606-9894" name="gliffy-map-62915606-9894">
               </map>
              </p>
              <table width="100%" class="gliffy-macro-table">
               <tbody>
                <tr>
                 <td>
                  <table class="gliffy-macro-inner-table">
                   <caption align="bottom">
                   </caption>
                   <tbody>
                    <tr>
                     <td>
                      <img style="border: thin solid blue; width: 506px;" usemap="#gliffy-map-62915606-9894" src="https://docs.icgc.org/files/public/PCAWG%20Example.png" alt="" class="gliffy-macro-image">
                     </td>
                    </tr>
                   </tbody>
                  </table>
                 </td>
                </tr>
               </tbody>
              </table>
              <p>
               <strong>
                <br>
               </strong>
              </p>
              <p>
               <strong>
                What if the clinical field in question does not apply to our data? For example, the patient did not have a prior malignancy (&#34;cancer_type_prior_malignancy&#34;).
               </strong>
              </p>
              <p>
               Providing a
               <span>
                <em>
                 null
                </em>
               </span>
               value (or empty string) for any of the required data elements
               <span>
                is not valid
               </span>
               . If a clinical field is marked &#34;N/A valid&#34;, and a value cannot be provided, the following DCC reserve codes should be used in place of a
               <em style="line-height: 1.4285715;">
                null
               </em>
               value:
              </p>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th class="confluenceTh">
                   Reserve Code
                  </th>
                  <th class="confluenceTh">
                   Meaning
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   -888
                  </td>
                  <td class="confluenceTd">
                   &#34;not applicable&#34;
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   -777
                  </td>
                  <td class="confluenceTd">
                   <span>
                    &#34;data verified to be unknown&#34;
                   </span>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <p>
               Please see documentation on
               <a href="https://docs.icgc.org/dcc-data-element-specifications#missing_unknown" class="external-link" rel="nofollow">
                Missing/Unknown Values
               </a>
               for more information.
              </p>
              <hr>
              <h1 id="PCAWGClinicalDataDocumentation-ErrorMessages">
               Error Messages
              </h1>
              <p>
               Below you will find error messages relating to submission problems with PCAWG data, what they mean and how to fix the issue.
              </p>
              <p class="p1">
               <strong>
                <span class="s1">
                 Sample data submitted to PCAWG, however it is not marked as
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                 PCAWG study
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                </span>
                <span class="s2">
                 this
                </span>
                <span class="s1">
                 DCC submission.
                </span>
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li class="p1">
                Data is submitted to PCAWG, but the &#34;study&#34; field in the DCC sample submission file does not indicate it is in PCAWG
               </li>
              </ul>
              <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
               <li style="background-image: none;">
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="3">
                  Check to see if the &#34;study&#34; field is incorrectly populated with &#34;-888&#34; (N/A) or left blank.
                  <p>
                  </p>
                 </li>
                </ul>
               </li>
              </ul>
              <p class="p1">
               <strong>
                <span class="s1">
                 Sample is marked as
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                 PCAWG study
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                </span>
                <span class="s2">
                 this
                </span>
                <span class="s1">
                 submission, however it does not actually exist
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                 PCAWG.
                </span>
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                The &#34;study&#34; field in the DCC sample submission file is marked as being in PCAWG. However the sample does not actually exist in PCAWG
               </li>
              </ul>
              <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
               <li style="background-image: none;">
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="4">
                  &#34;study&#34; field incorrectly indicates sample is in PCAWG. If a sample is not in PCAWG, use &#34;-888&#34; (means &#34;Not applicable&#34;) for this field
                 </li>
                 <li data-inline-task-id="5">
                  Sample ID format is inconsistent between DCC and PCAWG. Make sure you are using the same sample ID name you submitted in PCAWG.
                 </li>
                </ul>
               </li>
              </ul>
              <p class="p1">
               <strong>
                <span class="s1">
                 The following samples have data submitted to PCAWG, but have not been included
                </span>
                <span class="s2">
                 in
                </span>
                <span class="s1">
                </span>
                <span class="s2">
                 this
                </span>
                <span class="s1">
                 DCC submission.
                </span>
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li class="p1">
                <span class="s1">
                 Submission system reports a list of offending samples that are found in PCAWG but have not been included in the DCC submission.
                </span>
                <br>
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="6">
                  <span class="s1">
                   Add missing samples to DCC submission
                  </span>
                  <br>
                  <span class="s1">
                   <br>
                  </span>
                 </li>
                </ul>
               </li>
              </ul>
              <p class="p1">
               <strong>
                <span class="s1">
                 Clinical field is required
                </span>
                <span class="s2">
                 for
                </span>
                <span class="s1">
                 PanCancer.
                </span>
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                Error report will generate a list of clinical fields that are not completed for PCAWG data
               </li>
              </ul>
              <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
               <li style="background-image: none;">
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="7">
                  Complete all required clinical fields for all PCAWG data
                 </li>
                </ul>
               </li>
              </ul>
              <p class="p1">
               <strong>
                <span class="s1">
                 PanCancer clinical row required
                </span>
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                An entire clinical row is missing for a PCAWG-submitted donor/specimen/sample ID
                <br>
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="8">
                  Include clinical row for missing PCAWG data
                 </li>
                </ul>
               </li>
              </ul>
              <p>
               <strong>
                Data row failed script-row validation check
               </strong>
              </p>
              <ul style="list-style-type: square;">
               <li>
                The script-validation check implements cross-field validation checks to determine correct values. The submission failed because it does not satisfy one of the checks.
                <br>
                <ul class="inline-task-list" data-inline-tasks-content-id="62689731">
                 <li data-inline-task-id="9">
                  Ensure the incorrect value satisfies the conditions in the script
                 </li>
                </ul>
               </li>
              </ul>
              <hr>
              <h1 id="PCAWGClinicalDataDocumentation-SummaryofPCAWG-specificRequirements">
               Summary of PCAWG-specific Requirements
              </h1>
              <ul style="list-style-type: square;">
               <li>
                A different set of requirements is applied to donor and specimen-specific clinical fields depending on whether a project is non-TCGA or TCGA. These requirements are summarized below.
               </li>
              </ul>
              <h2 id="PCAWGClinicalDataDocumentation-Definitions">
               Definitions
              </h2>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th colspan="1" class="confluenceTh">
                   <span>
                    Format
                   </span>
                  </th>
                  <th colspan="1" class="confluenceTh">
                   <span>
                    Description
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    Bold Fields
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   In addition to the other DCC clinical fields, please try to submit as much clinical information for these fields in particular for donors/specimens/samples in PCAWG
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     New Clinical
                    </span>
                    <span style="color: rgb(255,0,0);">
                     Field
                    </span>
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <p>
                    <span style="color: rgb(0,0,0);">
                     New clinical field added to DCC dictionary, but these fields will not be mandatory for DCC-only samples and will allow
                     <a href="PCAWG-Clinical-Data-Documentation_62689731.html">
                      Missing/Unknown Reserve codes
                     </a>
                     (-888/-777)
                    </span>
                   </p>
                   <p>
                    <span style="color: rgb(0,0,0);">
                     However, PCAWG samples will need to follow PCAWG rules for these new clinical fields.
                    </span>
                   </p>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th class="confluenceTh">
                   Format
                  </th>
                  <th class="confluenceTh">
                   Description
                  </th>
                  <th colspan="1" class="confluenceTh">
                   Missing/Unknown Reserve Codes
                  </th>
                 </tr>
                 <tr>
                  <td class="highlight-red confluenceTd" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <ul style="list-style-type: square;">
                    <li>
                     Mandatory clinical fields.
                     <span>
                      Data submitter must submit a value for this field, otherwise submission is invalid
                     </span>
                    </li>
                    <li>
                     Will not allow blank spaces
                    </li>
                    <li>
                     Will not allow
                     <a href="PCAWG-Clinical-Data-Documentation_62689731.html">
                      Missing/Unknown Reserve codes
                     </a>
                     (-888/-777).
                    </li>
                   </ul>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <img class="emoticon emoticon-cross" src="https://docs.icgc.org/files/error.png?1428357370" data-emoticon-name="cross" alt="(error)">
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   &#34;N/A Valid&#34;
                  </td>
                  <td class="confluenceTd">
                   <ul style="list-style-type: square;">
                    <li>
                     Will allow
                     <a href="PCAWG-Clinical-Data-Documentation_62689731.html">
                      Missing/Unknown Reserve codes
                     </a>
                     <span>
                      (-888/-777)
                     </span>
                    </li>
                    <li>
                     <span>
                      Disallows empty strings or blank spaces.
                     </span>
                    </li>
                   </ul>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <img class="emoticon emoticon-tick" src="https://docs.icgc.org/files/check.png?1428357446" data-emoticon-name="tick" alt="(tick)">
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   &#34;Optional&#34;
                  </td>
                  <td class="confluenceTd">
                   <ul style="list-style-type: square;">
                    <li>
                     Allows data submitter to submit empty string or blank spaces.
                    </li>
                   </ul>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <img class="emoticon emoticon-tick" src="https://docs.icgc.org/files/check.png?1428357446" data-emoticon-name="tick" alt="(tick)">
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <h2 id="PCAWGClinicalDataDocumentation-FileTypes:">
               File Types:
              </h2>
              <p>
               Please review tables below which highlight differences in requirements between DCC and PCAWG data:
              </p>
              <p>
               <style type="text/css">
                /*&lt;![CDATA[*/
div.rbtoc1428521653453 {padding: 0px;}
div.rbtoc1428521653453 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1428521653453 li {margin-left: 0px;padding-left: 0px;}

/*]]&gt;*/&lt;/![cdata[*/&gt;
               </style>
              </p>
              <div class="toc-macro rbtoc1428521653453">
               <ul class="toc-indentation">
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-Donor">
                  Donor
                 </a>
                </li>
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-Specimen">
                  Specimen
                 </a>
                </li>
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-Sample">
                  Sample
                 </a>
                </li>
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-DonorFamily">
                  Donor Family
                 </a>
                </li>
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-DonorExposure">
                  Donor Exposure
                 </a>
                </li>
                <li>
                 <a href="#PCAWGClinicalDataDocumentation-DonorTherapy">
                  Donor Postresection Therapy
                 </a>
                </li>
               </ul>
              </div>
              <p>
              </p>
              <h3 id="PCAWGClinicalDataDocumentation-Donor">
               <u>
                <span style="color: rgb(0,51,102);">
                 Donor
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" style="text-align: center;" class="confluenceTh">
                   Data Element
                  </th>
                  <th rowspan="2" style="text-align: center;" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    PCAWG Requirements for
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <th colspan="1" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th colspan="1" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_sex
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="2" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_region_of_residence
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="2" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_vital_status
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="2" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   disease_status_last_followup
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   donor_relapse_type
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <p>
                    <strong>
                     donor_age_at_diagnosis
                    </strong>
                   </p>
                  </td>
                  <td class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    donor_age_at_enrollment
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   donor_age_at_last_followup
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   donor_relapse_interval
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    donor_diagnosis_icd10
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="2" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    donor_tumour_staging_system_at_diagnosis
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    donor_tumour_stage_at_diagnosis
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    donor_tumour_stage_at_diagnosis_supplemental
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   donor_survival_time
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   donor_interval_at_last_followup
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   donor_notes
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   Optional
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     prior_malignancy
                    </strong>
                   </span>
                  </td>
                  <td class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" data-highlight-colour="red">
                   <strong>
                    <strong>
                     Mandatory (N
                    </strong>
                    /A Invalid)
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     cancer_type_prior_malignancy
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     cancer_history_first_degree_relative
                    </strong>
                   </span>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="2" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <h3 id="PCAWGClinicalDataDocumentation-Specimen">
               <u>
                <span style="color: rgb(0,51,102);">
                 Specimen
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" class="confluenceTh">
                   <strong>
                    Data Element
                   </strong>
                  </th>
                  <th rowspan="2" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    PCAWG Requirements for
                   </span>
                   <span style="color: rgb(255,0,0);">
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <th style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_type
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_type_other
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     <strong>
                      N/A Valid
                     </strong>
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_interval
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                  <td class="highlight-red confluenceTd" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <p>
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_donor_treatment_type
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                  <td class="highlight-red confluenceTd" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <p>
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_donor_treatment_type_other
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     <strong>
                      N/A Valid
                     </strong>
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   specimen_processing
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   specimen_processing_other
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   specimen_storage
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   specimen_storage_other
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    tumour_confirmed
                   </strong>
                  </td>
                  <td class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                  <td class="highlight-red confluenceTd" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td class="confluenceTd">
                   <p>
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   specimen_biobank
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <p>
                    specimen_biobank_id
                   </p>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   specimen_available
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A Valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_histological_type
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <p>
                    <strong>
                     tumour_grading_system
                    </strong>
                   </p>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_grade
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_grade_supplemental
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_stage_system
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_stage
                   </strong>
                  </td>
                  <td colspan="1" class="confluenceTd">
                   N/A Valid
                  </td>
                  <td class="highlight-red confluenceTd" colspan="1" data-highlight-colour="red">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <br>
                   N/A Valid only for Normal specimens
                  </td>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    tumour_stage_supplemental
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   digital_image_of_stained_section
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   percentage_cellularity
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    level_of_cellularity
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   specimen_notes
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   Optional
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <h3 id="PCAWGClinicalDataDocumentation-Sample">
               <u>
                <span style="color: rgb(0,51,102);">
                 Sample
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" class="confluenceTh">
                   Data Element
                  </th>
                  <th rowspan="2" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    PCAWG Requirements for
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    analyzed_sample_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    specimen_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   analyzed_sample_interval
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   Optional
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   percentage_cellularity
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    level_of_cellularity
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   analyzed_sample_notes
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   Optional
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <p>
               <span style="color: rgb(0,0,0);">
                <br>
               </span>
              </p>
              <p>
               <span style="color: rgb(0,0,0);">
               </span>
              </p>
              <div class="aui-message warning shadowed information-macro">
               <span class="aui-icon icon-warning">
                Icon
               </span>
               <div class="message-content">
                <p>
                 <span style="color: rgb(0,0,0);">
                  The following files are required for PCAWG data
                 </span>
                </p>
               </div>
              </div>
              <h3 id="PCAWGClinicalDataDocumentation-DonorFamily">
               <u>
                <span style="color: rgb(0,51,102);">
                 Donor Family
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" class="confluenceTh">
                   Data Element
                  </th>
                  <th rowspan="2" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    PCAWG Requirements for
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     donor_has_relative_with_cancer_history
                    </span>
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong style="text-align: center;">
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    relationship_type
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong style="line-height: 1.4285715;">
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   relationship_type_other
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   relationship_sex
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   relationship_age
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <p>
                    N/A valid
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    relationship_disease_icd10
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    relationship_disease
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <h3 id="PCAWGClinicalDataDocumentation-DonorExposure">
               <u>
                <span style="color: rgb(0,51,102);">
                 <strong>
                  Donor Exposure
                 </strong>
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" class="confluenceTh">
                   Data Element
                  </th>
                  <th rowspan="2" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     PCAWG Requirements for
                    </span>
                   </strong>
                  </th>
                 </tr>
                 <tr>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory
                   </strong>
                   <strong>
                    (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   exposure_type
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   exposure_intensity
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   exposure_notes
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   N/A Valid
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     tobacco_smoking_history_indicator
                    </strong>
                   </span>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     tobacco_smoking_intensity
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     alcohol_history
                    </strong>
                   </span>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     alcohol_history_intensity
                    </strong>
                   </span>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                   <strong>
                    <br>
                   </strong>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <h3 id="PCAWGClinicalDataDocumentation-DonorTherapy">
               <u>
                <span style="color: rgb(0,51,102);">
                 <strong>
                  Donor Postresection Therapy
                 </strong>
                </span>
               </u>
              </h3>
              <div class="table-wrap">
               <table class="confluenceTable">
                <tbody>
                 <tr>
                  <th rowspan="2" class="confluenceTh">
                   Data Element
                  </th>
                  <th rowspan="2" class="confluenceTh">
                   DCC Requirements
                  </th>
                  <th colspan="2" style="text-align: center;" class="confluenceTh">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     PCAWG Requirements for
                    </span>
                   </strong>
                  </th>
                 </tr>
                 <tr>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    non-TCGA Projects
                   </span>
                  </th>
                  <th class="confluenceTh">
                   <span style="color: rgb(255,0,0);">
                    TCGA Projects
                   </span>
                  </th>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    donor_id
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     first_therapy_type
                    </span>
                   </strong>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     first_therapy_therapeutic_intent
                    </strong>
                   </span>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     first_therapy_start_interval
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     first_therapy_duration
                    </span>
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     first_therapy_response
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <p>
                    <span style="color: rgb(255,0,0);">
                     <strong>
                      second_therapy_type
                     </strong>
                    </span>
                   </p>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     second_therapy_therapeutic_intent
                    </strong>
                   </span>
                  </td>
                  <td class="highlight-red confluenceTd" colspan="3" data-highlight-colour="red" style="text-align: center;">
                   <strong>
                    Mandatory (N/A Invalid)
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     second_therapy_start_interval
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    <span style="color: rgb(255,0,0);">
                     second_therapy_duration
                    </span>
                   </strong>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     second_therapy_response
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" class="confluenceTd">
                   <p style="text-align: center;">
                    <strong>
                     N/A Valid
                    </strong>
                   </p>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     other_therapy
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <span style="color: rgb(255,0,0);">
                    <strong>
                     other_therapy_response
                    </strong>
                   </span>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                 <tr>
                  <td colspan="1" class="confluenceTd">
                   <strong>
                    therapy_notes
                   </strong>
                  </td>
                  <td colspan="3" style="text-align: center;" class="confluenceTd">
                   <strong>
                    N/A Valid
                   </strong>
                  </td>
                 </tr>
                </tbody>
               </table>
              </div>
              <hr>
              <h1 id="PCAWGClinicalDataDocumentation-Questions">
               Questions
              </h1>
              <ul style="list-style-type: square;">
               <li>
                For questions or concerns regarding PCAWG Clinical data, please contact 
                <a href="https://platform.icgc-argo.org/contact">
                 DCC.
                </a>
               </li>
              </ul>
             </div>
            </div>
           </div>
          </div>
          <p>
           <br>
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <ul class="menu">
            <li class="leaf first">
             <a href="/pcawg-dcc-clinical-data-submission-frequently-asked-questions">
              PCAWG DCC Clinical Data Submission - Frequently Asked Questions
             </a>
            </li>
            <li class="leaf">
             <a href="/donor-data-file-donor-pcawg-non-tcga-projects">
              Donor Data File (donor) - PCAWG non-TCGA projects
             </a>
            </li>
            <li class="leaf">
             <a href="/donor-data-file-donor-pcawg-tcga-projects">
              Donor Data File (donor) - PCAWG TCGA projects
             </a>
            </li>
            <li class="leaf">
             <a href="/specimen-data-file-specimen-pcawg-tcga-requirements">
              Specimen Data File (specimen) - PCAWG TCGA requirements
             </a>
            </li>
            <li class="leaf last">
             <a href="/specimen-data-file-specimen-pcawg-non-tcga-requirements">
              Specimen Data File (specimen) - PCAWG non-TCGA requirements
             </a>
            </li>
           </ul>
           <div class="page-links clear-block">
            <a href="/dictionary-v11c-april-2015" class="page-previous" title="Go to previous page">
             ‹ Dictionary v0.11c (April., 2015, Release 19)
            </a>
            <a href="/dictionary-v11c-april-2015" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/pcawg-dcc-clinical-data-submission-frequently-asked-questions" class="page-next" title="Go to next page">
             PCAWG DCC Clinical Data Submission - Frequently Asked Questions ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6767 -->
      </div>
      <!-- /content-content -->
     </div>
     <!-- /content-inner-inner -->
    </div>
    <!-- /content-inner -->
   </div>
   <!-- /content-region-inner -->
  </div>
  <!-- /content-region -->
 </div>
 <!-- /content-group-inner -->
</div>

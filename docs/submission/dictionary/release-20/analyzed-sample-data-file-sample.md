<h1 class="title">
 Analyzed Sample Data File (sample)
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
       <div id="node-6975" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file">
           <div class="file-spec">
            <h2>
             File Type: &#39;Analyzed Sample Data File (sample)&#39;
            </h2>
            <h3>
             File Key: &#39;sample&#39;
            </h3>
            <h3>
             File Name
             <a target="_blank" href="http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum">
              Pattern
             </a>
             : &#39;^sample(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$&#39;
            </h3>
            <div class="preamble">
            </div>
            <table class="table table-condensed table-hover sortable">
             <thead>
              <tr>
               <th>
                Data Element ID
               </th>
               <th>
                Name
               </th>
               <th>
                Description
               </th>
               <th>
                Data Type
               </th>
               <th>
                CV Codes
               </th>
               <th>
                Required?
               </th>
               <th>
                N/A Code Valid?
               </th>
               <th>
                Controlled Access?
               </th>
               <th>
                Regexp
               </th>
               <th>
                Example
               </th>
               <th>
                Additional Notes
               </th>
              </tr>
             </thead>
             <tbody>
              <tr class="identifier-element success pbi-avoid">
               <td class="element-name">
                analyzed_sample_id
               </td>
               <td class="element-display-name">
                Analyzed Sample ID
               </td>
               <td class="element-description">
                <small>
                 A unique identifier representing the particular sample that was analyzed; analyzed sample identifiers must be used consistently to relate those described in the sample file and in the related analysis files
                </small>
               </td>
               <td class="datatype text">
                TEXT
               </td>
               <td class="codes na">
                N/A
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="Data element requires a value">
                 Required
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-important" title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)">
                 N/A Invalid
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                 ^[\w+\-\_]+$
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                  <li>
                   hnc_12
                  </li>
                  <li>
                   CCG_34_94583
                  </li>
                  <li>
                   BRCA47832-3239
                  </li>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="identifier-element success pbi-avoid">
               <td class="element-name">
                specimen_id
               </td>
               <td class="element-display-name">
                Specimen ID
               </td>
               <td class="element-description">
                <small>
                 Unique identifier for a collected specimen assigned by data provider.
                </small>
               </td>
               <td class="datatype text">
                TEXT
               </td>
               <td class="codes na">
                N/A
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="Data element requires a value">
                 Required
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-important" title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)">
                 N/A Invalid
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                 ^([\w+\-\_]+)$
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                  <li>
                   LAML_PO_00445
                  </li>
                  <li>
                   THY_099-tumour
                  </li>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="optional-element pbi-avoid">
               <td class="element-name">
                analyzed_sample_interval
               </td>
               <td class="element-display-name">
                Analyzed Sample Interval
               </td>
               <td class="element-description">
                <small>
                 Interval from specimen acquisition to sample use in an analytic procedure (e.g. DNA extraction), in days
                </small>
               </td>
               <td class="datatype integer">
                INTEGER
               </td>
               <td class="codes na">
                N/A
               </td>
               <td class="bool isfalse">
                <span class="label" title="Value optional, VALID if value is set to NULL code -999">
                 Optional
                </span>
               </td>
               <td class="bool isna">
                <span class="label">
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                percentage_cellularity
               </td>
               <td class="element-display-name">
                Percentage Cellularity
               </td>
               <td class="element-description">
                <small>
                 The cellularity (ratio of tumour nuclei to total number of nuclei in a given sample) of the analyzed sample assessed by methods other than the pathologist&#39;s report (ie. cellularity derived from sequencing data). Can populate information in either this field or level_of_cellularity
                </small>
               </td>
               <td class="datatype integer">
                INTEGER
               </td>
               <td class="codes na">
                N/A
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="Data element requires a value">
                 Required
                </span>
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="VALID if value set to codes -888 (N/A) or -777 (Verified Unknown)">
                 N/A Valid
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                level_of_cellularity
               </td>
               <td class="element-display-name">
                Level of Cellularity
               </td>
               <td class="element-description">
                <small>
                 The cellularity (proportion of tumour nuclei to total number of nuclei in a given sample) of the analyzed sample assessed by methods other than the pathologist&#39;s report (ie. cellularity derived from sequencing data). If exact percentage cellularity cannot be determined, submitter has option to use this field to specify a level that defines a range of percentages
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#specimen.0.cellularity.v2">
                   specimen.0.cellularity.v2
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="specimen.0.cellularity.v2" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    1-20%
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    21-40%
                   </small>
                  </dd>
                  <dt>
                   <small>
                    3
                   </small>
                  </dt>
                  <dd>
                   <small>
                    41-60%
                   </small>
                  </dd>
                  <dt>
                   <small>
                    4
                   </small>
                  </dt>
                  <dd>
                   <small>
                    61-80%
                   </small>
                  </dd>
                  <dt>
                   <small>
                    5
                   </small>
                  </dt>
                  <dd>
                   <small>
                    &gt;81%
                   </small>
                  </dd>
                 </dl>
                </div>
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="Data element requires a value">
                 Required
                </span>
               </td>
               <td class="bool istrue">
                <span class="label label-success" title="VALID if value set to codes -888 (N/A) or -777 (Verified Unknown)">
                 N/A Valid
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="deprecated-element warning pbi-avoid">
               <td class="element-name">
                analyzed_sample_notes
               </td>
               <td class="element-display-name">
                Analyzed Sample Notes
               </td>
               <td class="element-description">
                <small>
                 Freetext notes about sample allowed
                </small>
               </td>
               <td class="datatype text">
                TEXT
               </td>
               <td class="codes na">
                N/A
               </td>
               <td class="bool isfalse">
                <span class="label" title="Value optional, VALID if value is set to NULL code -999">
                 Optional
                </span>
               </td>
               <td class="bool isna">
                <span class="label">
                </span>
               </td>
               <td class="bool istrue">
                <span class="label label-important" title="Controlled access data element">
                 Controlled
                </span>
               </td>
               <td class="element-regexp">
                <small>
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="optional-element pbi-avoid">
               <td class="element-name">
                study
               </td>
               <td class="element-display-name">
                Study
               </td>
               <td class="element-description">
                <small>
                 Indicate if sample is part of a study
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#sample.0.study.v3">
                   sample.0.study.v3
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="sample.0.study.v3" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    PCAWG
                   </small>
                  </dd>
                 </dl>
                </div>
               </td>
               <td class="bool isfalse">
                <span class="label" title="Value optional">
                 Optional
                </span>
               </td>
               <td class="bool isna">
                <span class="label">
                </span>
               </td>
               <td class="bool isfalse">
                <span class="label label-success" title="Open access data element">
                 Open Access
                </span>
               </td>
               <td class="element-regexp">
                <small>
                </small>
               </td>
               <td class="element-example">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
               <td class="element-description">
                <small>
                 <ul>
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
             </tbody>
            </table>
            <div class="postamble">
            </div>
            <hr>
           </div>
          </div>
          <div class="cv">
          </div>
          <p>
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/specimen-data-file-specimen" class="page-previous" title="Go to previous page">
             ‹ Specimen Data File (specimen)
            </a>
            <a href="/dictionary" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/simple-somatic-mutations-ssm-analysis-metadata-file-m" class="page-next" title="Go to next page">
             Simple Somatic Mutations (ssm) - Analysis Metadata File (m) ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6975 -->
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

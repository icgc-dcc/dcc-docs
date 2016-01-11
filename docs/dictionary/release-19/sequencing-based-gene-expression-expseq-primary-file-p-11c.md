<h1 class="title">
 Sequencing-based Gene Expression (exp_seq) - Primary File (p) -v0.11c
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
       <div id="node-6817" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file-spec">
           <h2>
            File Type: &#39;Sequencing-based Gene Expression (exp_seq) - Primary File (p)&#39;
           </h2>
           <h3>
            File Key: &#39;exp_seq_p&#39;
           </h3>
           <h3>
            File Name
            <a target="_blank" href="http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum">
             Pattern
            </a>
            : &#39;^exp_seq_p(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$&#39;
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
               analysis_id
              </td>
              <td class="element-display-name">
               Analysis ID
              </td>
              <td class="element-description">
               <small>
                Unique identifier assigned to a computational analysis run that was performed on a single analyzed sample and any associated matched samples using a particular set of methods, tools, etc.; analysis IDs must be unique and must not be reused by a project across subsequent analysis runs. Cannot contain whitespace, semi-colons or special characters. Can contain alphanumeric characters, dashes or underscores.
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
               analyzed_sample_id
              </td>
              <td class="element-display-name">
               Analyzed Sample ID
              </td>
              <td class="element-description">
               <small>
                A unique identifier representing the particular sample that was analyzed; analyzed sample identifiers must be used consistently to relate those described in the sample file and in the related analysis files. Cannot contain whitespace, semi-colons or special characters. Can contain alphanumeric characters, dashes or underscores.
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
                  ov-45
                 </li>
                 <li>
                  90343a
                 </li>
                 <li>
                  BRCAZ-TG
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
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               gene_model
              </td>
              <td class="element-display-name">
               Gene Model
              </td>
              <td class="element-description">
               <small>
                Gene model used
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.gene_db.v1">
                  GLOBAL.0.gene_db.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.gene_db.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Ensembl
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   GAF
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   RefSeq
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
               gene_id
              </td>
              <td class="element-display-name">
               Gene ID
              </td>
              <td class="element-description">
               <small>
                Gene ID provided in the chosen gene model, eg, ENSG00000157764
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
               normalized_read_count
              </td>
              <td class="element-display-name">
               Normalized Read Count
              </td>
              <td class="element-description">
               <small>
                Normalized read count for the current gene
               </small>
              </td>
              <td class="datatype decimal">
               DECIMAL
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
               raw_read_count
              </td>
              <td class="element-display-name">
               Raw Read Count
              </td>
              <td class="element-description">
               <small>
                Raw read count for the current gene
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
               fold_change
              </td>
              <td class="element-display-name">
               Fold Change
              </td>
              <td class="element-description">
               <small>
                Gene expression fold change
               </small>
              </td>
              <td class="datatype decimal">
               DECIMAL
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
            </tbody>
           </table>
           <div class="postamble">
           </div>
           <hr>
          </div>
          <div class="cv">
          </div>
          <p>
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/splice-variation-jcn-primary-analysis-file-p-11c" class="page-previous" title="Go to previous page">
             ‹ Splice Variation (jcn) - Primary Analysis File (p) -v0.11c
            </a>
            <a href="/dictionary-v11c-april-2015" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/protein-expression-pexp-analysis-metadata-file-m-11c" class="page-next" title="Go to next page">
             Protein Expression (pexp) - Analysis Metadata File (m) -v0.11c ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6817 -->
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

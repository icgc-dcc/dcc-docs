<h1 class="title">
 Gene Expression (gene) - Primary Analysis File (g)
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
       <div id="node-6404" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file-spec">
           <h3>
            File Key: &#39;exp_g&#39;
           </h3>
           <h3>
            File Name
            <a target="_blank" href="https://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum">
             Pattern
            </a>
            : &#39;^exp_g\.txt(?:\.gz|\.bz2)?$&#39;
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
               gene_stable_id
              </td>
              <td class="element-display-name">
               Gene Stable ID
              </td>
              <td class="element-description">
               <small>
                For providing Ensembl gene or transcript annotation use the DB Xref syntax: &#39;Ensembl:ENSGxxx&#39;. For multiple IDs, please split into one ID per row, repeating the same information for all other columns.
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
               gene_chromosome
              </td>
              <td class="element-display-name">
               Gene Chromosome
              </td>
              <td class="element-description">
               <small>
                Name of the chromosome containing the above gene.
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes appendix">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.chromosome.v3">
                  GLOBAL.0.chromosome.v3
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.chromosome.v3" class="codes-list">
                 <dt>
                  <small>
                   Y
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Y
                  </small>
                 </dd>
                 <dt>
                  <small>
                   X
                  </small>
                 </dt>
                 <dd>
                  <small>
                   X
                  </small>
                 </dd>
                 <dt>
                  <small>
                   MT
                  </small>
                 </dt>
                 <dd>
                  <small>
                   MT
                  </small>
                 </dd>
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   1
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   2
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   3
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   4
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   5
                  </small>
                 </dd>
                 <dt>
                  <small>
                   6
                  </small>
                 </dt>
                 <dd>
                  <small>
                   6
                  </small>
                 </dd>
                 <dt>
                  <small>
                   7
                  </small>
                 </dt>
                 <dd>
                  <small>
                   7
                  </small>
                 </dd>
                 <dt>
                  <small>
                   8
                  </small>
                 </dt>
                 <dd>
                  <small>
                   8
                  </small>
                 </dd>
                 <dt>
                  <small>
                   9
                  </small>
                 </dt>
                 <dd>
                  <small>
                   9
                  </small>
                 </dd>
                 <dt>
                  <small>
                   10
                  </small>
                 </dt>
                 <dd>
                  <small>
                   10
                  </small>
                 </dd>
                 <dt>
                  <small>
                   11
                  </small>
                 </dt>
                 <dd>
                  <small>
                   11
                  </small>
                 </dd>
                 <dt>
                  <small>
                   12
                  </small>
                 </dt>
                 <dd>
                  <small>
                   12
                  </small>
                 </dd>
                 <dt>
                  <small>
                   13
                  </small>
                 </dt>
                 <dd>
                  <small>
                   13
                  </small>
                 </dd>
                 <dt>
                  <small>
                   14
                  </small>
                 </dt>
                 <dd>
                  <small>
                   14
                  </small>
                 </dd>
                 <dt>
                  <small>
                   15
                  </small>
                 </dt>
                 <dd>
                  <small>
                   15
                  </small>
                 </dd>
                 <dt>
                  <small>
                   16
                  </small>
                 </dt>
                 <dd>
                  <small>
                   16
                  </small>
                 </dd>
                 <dt>
                  <small>
                   17
                  </small>
                 </dt>
                 <dd>
                  <small>
                   17
                  </small>
                 </dd>
                 <dt>
                  <small>
                   18
                  </small>
                 </dt>
                 <dd>
                  <small>
                   18
                  </small>
                 </dd>
                 <dt>
                  <small>
                   19
                  </small>
                 </dt>
                 <dd>
                  <small>
                   19
                  </small>
                 </dd>
                 <dt>
                  <small>
                   20
                  </small>
                 </dt>
                 <dd>
                  <small>
                   20
                  </small>
                 </dd>
                 <dt>
                  <small>
                   21
                  </small>
                 </dt>
                 <dd>
                  <small>
                   21
                  </small>
                 </dd>
                 <dt>
                  <small>
                   22
                  </small>
                 </dt>
                 <dd>
                  <small>
                   22
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
               gene_strand
              </td>
              <td class="element-display-name">
               Gene Strand
              </td>
              <td class="element-description">
               <small>
                Strand of the chromosome
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.strand.v1">
                  GLOBAL.0.strand.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.strand.v1" class="codes-list">
                 <dt>
                  <small>
                   -1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   -1
                  </small>
                 </dd>
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   1
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
               gene_start
              </td>
              <td class="element-display-name">
               Gene Start
              </td>
              <td class="element-description">
               <small>
                Start position of the entire gene on the chromosome as annotated in Ensembl
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
                ^\d+$
               </small>
              </td>
              <td class="element-example">
               <small>
                <ul>
                 <li>
                  405343492
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
              <td class="element-description">
               <small>
                <ul>
                 <li style="font-size:10px">
                  Chromosome start position must be equal or greater than 1
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               gene_end
              </td>
              <td class="element-display-name">
               Gene End
              </td>
              <td class="element-description">
               <small>
                End position of the entire gene on the chromosome as annotated in Ensembl
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
                ^\d+$
               </small>
              </td>
              <td class="element-example">
               <small>
                <ul>
                 <li>
                  405343499
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
              <td class="element-description">
               <small>
                <ul>
                 <li style="font-size:10px">
                  Chromosome end position must be less than or equal to the length of the chromosome
                 </li>
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
                Normalized count of sequencing reads if analyzed by sequencing platforms
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
               raw_read_count
              </td>
              <td class="element-display-name">
               Raw Read Count
              </td>
              <td class="element-description">
               <small>
                Raw count of sequencing reads if analyzed by sequencing platforms
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
               normalized_expression_level
              </td>
              <td class="element-display-name">
               Normalized Expression Level
              </td>
              <td class="element-description">
               <small>
                Normalized expression level
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
             <tr class="optional-element pbi-avoid">
              <td class="element-name">
               fold_change
              </td>
              <td class="element-display-name">
               Fold Change
              </td>
              <td class="element-description">
               <small>
                Expressed fold change if differential expression is measured
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
             <tr class="optional-element pbi-avoid">
              <td class="element-name">
               reference_sample_id
              </td>
              <td class="element-display-name">
               Reference Sample ID
              </td>
              <td class="element-description">
               <small>
                ID of the reference sample if differential expression is measured
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
               quality_score
              </td>
              <td class="element-display-name">
               Quality Score
              </td>
              <td class="element-description">
               <small>
                Quality score of the observation
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
             <tr class="optional-element pbi-avoid">
              <td class="element-name">
               probability
              </td>
              <td class="element-display-name">
               Probability
              </td>
              <td class="element-description">
               <small>
                Probability of the observation
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
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               is_annotated
              </td>
              <td class="element-display-name">
               Is Annotated
              </td>
              <td class="element-description">
               <small>
                Indicate if the mutation/variation is annotated in dbSNP
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.is_annotated.v1">
                  GLOBAL.0.is_annotated.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.is_annotated.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   annotated
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   not annotated
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
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               verification_status
              </td>
              <td class="element-display-name">
               Verification Status
              </td>
              <td class="element-description">
               <small>
                Indicate if the mutation/variation has been verified using an independent orthogonal genotype platform/technology
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.verification_status.v2">
                  GLOBAL.0.verification_status.v2
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.verification_status.v2" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and verified
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   not tested
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and verified to be false
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and inconclusive
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
               verification_platform
              </td>
              <td class="element-display-name">
               Verification Platform
              </td>
              <td class="element-description">
               <small>
                Identifier of orthogonal platform or technology used to confirm that the mutation/variant is true; identifier should be taken from controlled vocabulary list of platforms recognized by the DCC and should directly correspond to the particular technology (including version) used. If no appropriate term exists for a given platform, please contact the DCC to request an addition to the CV terms.
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes appendix">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.platform.v1">
                  GLOBAL.0.platform.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.platform.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PCR
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   qPCR
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   capillary sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   SOLiD sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina GA sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   6
                  </small>
                 </dt>
                 <dd>
                  <small>
                   454 sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   7
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Helicos sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   8
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Genome-Wide Human SNP Array 6.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   9
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Genome-Wide Human SNP Array 5.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   10
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 100K Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   11
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 500K Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   12
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 10K 2.0 Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   13
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix EMET Plus Premier Pack
                  </small>
                 </dd>
                 <dt>
                  <small>
                   14
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Whole Human Genome Oligo Microarray Kit
                  </small>
                 </dd>
                 <dt>
                  <small>
                   15
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 244A
                  </small>
                 </dd>
                 <dt>
                  <small>
                   16
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 105A
                  </small>
                 </dd>
                 <dt>
                  <small>
                   17
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CNV Association 2x105K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   18
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 44K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   19
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 1x1M
                  </small>
                 </dd>
                 <dt>
                  <small>
                   20
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 2x400K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   21
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 4x180K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   22
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 8x60K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   23
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CNV 2x400K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   24
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human miRNA Microarray Kit (v2)
                  </small>
                 </dd>
                 <dt>
                  <small>
                   25
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CpG Island Microarray Kit
                  </small>
                 </dd>
                 <dt>
                  <small>
                   26
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Promoter ChIP-on-chip Microarray Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   27
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human SpliceArray
                  </small>
                 </dd>
                 <dt>
                  <small>
                   28
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human1m-duo
                  </small>
                 </dd>
                 <dt>
                  <small>
                   29
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human660w-quad
                  </small>
                 </dd>
                 <dt>
                  <small>
                   30
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humancytosnp-12
                  </small>
                 </dd>
                 <dt>
                  <small>
                   31
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human510s-duo
                  </small>
                 </dd>
                 <dt>
                  <small>
                   32
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanmethylation27
                  </small>
                 </dd>
                 <dt>
                  <small>
                   33
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina goldengate methylation
                  </small>
                 </dd>
                 <dt>
                  <small>
                   34
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanHT-12 v4.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   35
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanWG-6 v3.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   36
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanRef-8 v3.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   37
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina microRNA Expression Profiling Panel
                  </small>
                 </dd>
                 <dt>
                  <small>
                   38
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanht-16
                  </small>
                 </dd>
                 <dt>
                  <small>
                   39
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanht-17
                  </small>
                 </dd>
                 <dt>
                  <small>
                   40
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human CGH 3x720 Whole-Genome v3.0 Array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   41
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human CGH 2.1M Whole-Genome v2.0D Array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   42
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 385K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   43
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 4x72K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   44
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 12x135K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   45
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human Methylation 2.1M Whole-Genome sets
                  </small>
                 </dd>
                 <dt>
                  <small>
                   46
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human Methylation 385K Whole-Genome sets
                  </small>
                 </dd>
                 <dt>
                  <small>
                   47
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen CGS
                  </small>
                 </dd>
                 <dt>
                  <small>
                   48
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Human1M OmniQuad chip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   49
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PCR and capillary sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   50
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Custom-designed gene expression array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   51
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix HT Human Genome U133A Array Plate Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   52
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-1
                  </small>
                 </dd>
                 <dt>
                  <small>
                   53
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-2
                  </small>
                 </dd>
                 <dt>
                  <small>
                   54
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-3
                  </small>
                 </dd>
                 <dt>
                  <small>
                   55
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome CGH Custom Microaary 2x415K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   56
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human U133 Plus PM
                  </small>
                 </dd>
                 <dt>
                  <small>
                   57
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human U133 Plus 2.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   58
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Exon 1.0 ST
                  </small>
                 </dd>
                 <dt>
                  <small>
                   59
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Almac Human CRC
                  </small>
                 </dd>
                 <dt>
                  <small>
                   60
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HiSeq
                  </small>
                 </dd>
                 <dt>
                  <small>
                   61
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human MIP 330K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   62
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Gene 1.0 ST
                  </small>
                 </dd>
                 <dt>
                  <small>
                   63
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Human Omni1-Quad beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   64
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Sequenom MassARRAY
                  </small>
                 </dd>
                 <dt>
                  <small>
                   65
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Custom-designed cDNA array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   66
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanHap550
                  </small>
                 </dd>
                 <dt>
                  <small>
                   67
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Ion Torrent PGM
                  </small>
                 </dd>
                 <dt>
                  <small>
                   68
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina GoldenGate Methylation Cancer Panel I
                  </small>
                 </dd>
                 <dt>
                  <small>
                   69
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Infinium HumanMethylation450
                  </small>
                 </dd>
                 <dt>
                  <small>
                   70
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 8 x 15K Human miRNA-specific microarray
                  </small>
                 </dd>
                 <dt>
                  <small>
                   71
                  </small>
                 </dt>
                 <dd>
                  <small>
                   M.D. Anderson Reverse Phase Protein Array Core
                  </small>
                 </dd>
                 <dt>
                  <small>
                   72
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Microsatellite Instability Analysis
                  </small>
                 </dd>
                 <dt>
                  <small>
                   73
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07
                  </small>
                 </dd>
                 <dt>
                  <small>
                   74
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanCNV370-Duo v1.0 BeadChip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   75
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanOmniExpress BeadChip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   76
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PacBio RS sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   77
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix OncoScan FFPE Express 2.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   78
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina MiSeq Personal Sequencer
                  </small>
                 </dd>
                 <dt>
                  <small>
                   79
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Genome U219 Array Plate
                  </small>
                 </dd>
                 <dt>
                  <small>
                   80
                  </small>
                 </dt>
                 <dd>
                  <small>
                   HumanOmni2.5-8 BeadChip Kit
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
                 <li style="font-size:10px">
                  If mutation is verified, the verification platform must be specified
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="pbi-avoid">
              <td class="element-name">
               probeset_id
              </td>
              <td class="element-display-name">
               Probeset ID
              </td>
              <td class="element-description">
               <small>
                ID of the probeset used in microarray
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
               biological_validation_status
              </td>
              <td class="element-display-name">
               Biological Validation Status
              </td>
              <td class="element-description">
               <small>
                Indicate if the mutation/variation has been observed in a larger cohort/sample size, and is not an artifact or consequence of sample selection for sequencing
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.biological_validation_status.v3">
                  GLOBAL.0.biological_validation_status.v3
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.biological_validation_status.v3" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and valid
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   not tested
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and not valid
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   tested and inconclusive
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
               biological_validation_platform
              </td>
              <td class="element-display-name">
               Biological Validation Platform
              </td>
              <td class="element-description">
               <small>
                Identifier of assay platform or technology used to validate the mutation/variant
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes appendix">
               <div class="link">
                <small>
                 [
                 <a href="#GLOBAL.0.platform.v1">
                  GLOBAL.0.platform.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="GLOBAL.0.platform.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PCR
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   qPCR
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   capillary sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   SOLiD sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina GA sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   6
                  </small>
                 </dt>
                 <dd>
                  <small>
                   454 sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   7
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Helicos sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   8
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Genome-Wide Human SNP Array 6.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   9
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Genome-Wide Human SNP Array 5.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   10
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 100K Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   11
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 500K Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   12
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Mapping 10K 2.0 Array Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   13
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix EMET Plus Premier Pack
                  </small>
                 </dd>
                 <dt>
                  <small>
                   14
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Whole Human Genome Oligo Microarray Kit
                  </small>
                 </dd>
                 <dt>
                  <small>
                   15
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 244A
                  </small>
                 </dd>
                 <dt>
                  <small>
                   16
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 105A
                  </small>
                 </dd>
                 <dt>
                  <small>
                   17
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CNV Association 2x105K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   18
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome 44K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   19
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 1x1M
                  </small>
                 </dd>
                 <dt>
                  <small>
                   20
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 2x400K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   21
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 4x180K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   22/small&gt;
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CGH 8x60K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   23
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CNV 2x400K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   24
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human miRNA Microarray Kit (v2)
                  </small>
                 </dd>
                 <dt>
                  <small>
                   25
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human CpG Island Microarray Kit
                  </small>
                 </dd>
                 <dt>
                  <small>
                   26
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Promoter ChIP-on-chip Microarray Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   27
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human SpliceArray
                  </small>
                 </dd>
                 <dt>
                  <small>
                   28
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human1m-duo
                  </small>
                 </dd>
                 <dt>
                  <small>
                   29
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human660w-quad
                  </small>
                 </dd>
                 <dt>
                  <small>
                   30
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humancytosnp-12
                  </small>
                 </dd>
                 <dt>
                  <small>
                   31
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina human510s-duo
                  </small>
                 </dd>
                 <dt>
                  <small>
                   32
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanmethylation27
                  </small>
                 </dd>
                 <dt>
                  <small>
                   33
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina goldengate methylation
                  </small>
                 </dd>
                 <dt>
                  <small>
                   34
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanHT-12 v4.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   35
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanWG-6 v3.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   36
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanRef-8 v3.0 beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   37
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina microRNA Expression Profiling Panel
                  </small>
                 </dd>
                 <dt>
                  <small>
                   38
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanht-16
                  </small>
                 </dd>
                 <dt>
                  <small>
                   39
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina humanht-17
                  </small>
                 </dd>
                 <dt>
                  <small>
                   40
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human CGH 3x720 Whole-Genome v3.0 Array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   41
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human CGH 2.1M Whole-Genome v2.0D Array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   42
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 385K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   43
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 4x72K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   44
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Gene Expression 12x135K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   45
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human Methylation 2.1M Whole-Genome sets
                  </small>
                 </dd>
                 <dt>
                  <small>
                   46
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen Human Methylation 385K Whole-Genome sets
                  </small>
                 </dd>
                 <dt>
                  <small>
                   47
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Nimblegen CGS
                  </small>
                 </dd>
                 <dt>
                  <small>
                   48
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Human1M OmniQuad chip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   49
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PCR and capillary sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   50
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Custom-designed gene expression array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   51
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix HT Human Genome U133A Array Plate Set
                  </small>
                 </dd>
                 <dt>
                  <small>
                   52
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-1
                  </small>
                 </dd>
                 <dt>
                  <small>
                   53
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-2
                  </small>
                 </dd>
                 <dt>
                  <small>
                   54
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07-3
                  </small>
                 </dd>
                 <dt>
                  <small>
                   55
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent Human Genome CGH Custom Microaary 2x415K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   56
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human U133 Plus PM
                  </small>
                 </dd>
                 <dt>
                  <small>
                   57
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human U133 Plus 2.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   58
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Exon 1.0 ST
                  </small>
                 </dd>
                 <dt>
                  <small>
                   59
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Almac Human CRC
                  </small>
                 </dd>
                 <dt>
                  <small>
                   60
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HiSeq
                  </small>
                 </dd>
                 <dt>
                  <small>
                   61
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human MIP 330K
                  </small>
                 </dd>
                 <dt>
                  <small>
                   62
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Gene 1.0 ST
                  </small>
                 </dd>
                 <dt>
                  <small>
                   63
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Human Omni1-Quad beadchip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   64
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Sequenom MassARRAY
                  </small>
                 </dd>
                 <dt>
                  <small>
                   65
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Custom-designed cDNA array
                  </small>
                 </dd>
                 <dt>
                  <small>
                   66
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanHap550
                  </small>
                 </dd>
                 <dt>
                  <small>
                   67
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Ion Torrent PGM
                  </small>
                 </dd>
                 <dt>
                  <small>
                   68
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina GoldenGate Methylation Cancer Panel I
                  </small>
                 </dd>
                 <dt>
                  <small>
                   69
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina Infinium HumanMethylation450
                  </small>
                 </dd>
                 <dt>
                  <small>
                   70
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 8 x 15K Human miRNA-specific microarray
                  </small>
                 </dd>
                 <dt>
                  <small>
                   71
                  </small>
                 </dt>
                 <dd>
                  <small>
                   M.D. Anderson Reverse Phase Protein Array Core
                  </small>
                 </dd>
                 <dt>
                  <small>
                   72
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Microsatellite Instability Analysis
                  </small>
                 </dd>
                 <dt>
                  <small>
                   73
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Agilent 244K Custom Gene Expression G4502A-07
                  </small>
                 </dd>
                 <dt>
                  <small>
                   74
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanCNV370-Duo v1.0 BeadChip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   75
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina HumanOmniExpress BeadChip
                  </small>
                 </dd>
                 <dt>
                  <small>
                   76
                  </small>
                 </dt>
                 <dd>
                  <small>
                   PacBio RS sequencing
                  </small>
                 </dd>
                 <dt>
                  <small>
                   77
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix OncoScan FFPE Express 2.0
                  </small>
                 </dd>
                 <dt>
                  <small>
                   78
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Illumina MiSeq Personal Sequencer
                  </small>
                 </dd>
                 <dt>
                  <small>
                   79
                  </small>
                 </dt>
                 <dd>
                  <small>
                   Affymetrix Human Genome U219 Array Plate
                  </small>
                 </dd>
                 <dt>
                  <small>
                   80
                  </small>
                 </dt>
                 <dd>
                  <small>
                   HumanOmni2.5-8 BeadChip Kit
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
                 <li style="font-size:10px">
                  If mutation is biologically validated, the biological validation platform must be specified
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="pbi-avoid">
              <td class="element-name">
               note
              </td>
              <td class="element-display-name">
               Note
              </td>
              <td class="element-description">
               <small>
                Optional field to leave notes
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
            </tbody>
           </table>
           <div class="postamble">
           </div>
           <hr>
          </div>
          <div class="cv">
          </div>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/gene-expression-gene-analysis-metadata-file-m-v0.7e" class="page-previous" title="Go to previous page">
             ‹ Gene Expression (gene) - Analysis Metadata File (m)
            </a>
            <a href="/dictionary-v07e-jan-2014-release-15" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/protein-expression-pexp-analysis-metadata-file-m-v0.7e" class="page-next" title="Go to next page">
             Protein Expression (pexp) - Analysis Metadata File (m) ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6404 -->
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

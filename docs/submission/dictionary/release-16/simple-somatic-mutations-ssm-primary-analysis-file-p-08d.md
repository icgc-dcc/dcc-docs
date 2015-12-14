<h1 class="title">
 Simple Somatic Mutations (ssm) - Primary Analysis File (p)
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
       <div id="node-6286" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file-spec">
           <h2>
            <a name="Simple Somatic Mutations ssm - Primary Analysis File p">
            </a>
            File Type: &#39;Simple Somatic Mutations (ssm) - Primary Analysis File (p)&#39;
           </h2>
           <h3>
            File Key: &#39;ssm_p&#39;
           </h3>
           <h3>
            File Name
            <a href="http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum" target="_blank">
             Pattern
            </a>
            : &#39;^ssm_p\.txt(?:\.gz|\.bz2)?$&#39;
           </h3>
           <div class="preamble">
           </div>
           <table class="table table-condensed table-hover sortable">
            <thead>
             <tr>
              <th sortkey="0" value="Data Element ID">
               Data Element ID
              </th>
              <th sortkey="1" value="Name">
               Name
              </th>
              <th sortkey="2" value="Description">
               Description
              </th>
              <th sortkey="3" value="Data Type">
               Data Type
              </th>
              <th sortkey="4" value="CV Codes">
               CV Codes
              </th>
              <th sortkey="5" value="Required?">
               Required?
              </th>
              <th sortkey="6" value="N/A Code Valid?">
               N/A Code Valid?
              </th>
              <th sortkey="7" value="Controlled Access?">
               Controlled Access?
              </th>
              <th sortkey="8" value="Regexp">
               Regexp
              </th>
              <th sortkey="9" value="Example">
               Example
              </th>
             </tr>
            </thead>
            <tbody>
             <tr class="identifier-element success pbi-avoid">
              <td class="element-name" value="analysis_id">
               <a href="#ssm_p">
                analysis_id
               </a>
              </td>
              <td class="element-display-name" value="Analysis ID&lt;/p&gt;
&lt;p&gt;">
               Analysis ID
               <p>
               </p>
              </td>
              <td class="element-description" value="Unique identifier assigned to a computational analysis run that was performed on a single analyzed sample and any associated matched samples using a particular set of methods, tools, etc.; analysis IDs must be unique and must not be reused by a project across subsequent analysis runs. Cannot contain whitespace, semi-colons or special characters. Can contain alphanumeric characters, dashes or underscores.">
               <small>
                Unique identifier assigned to a computational analysis run that was performed on a single analyzed sample and any associated matched samples using a particular set of methods, tools, etc.; analysis IDs must be unique and must not be reused by a project across subsequent analysis runs. Cannot contain whitespace, semi-colons or special characters. Can contain alphanumeric characters, dashes or underscores.
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="^([\w+\-\_]+)$">
               <small>
                ^([\w+\-\_]+)$
               </small>
              </td>
              <td class="element-example" value="hnc_12 CCG_34_94583 BRCA47832-3239">
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
             </tr>
             <tr class="identifier-element success pbi-avoid">
              <td class="element-name" value="analyzed_sample_id">
               <a href="#sample">
                analyzed_sample_id
               </a>
              </td>
              <td class="element-display-name" value="Analyzed Sample ID&lt;/p&gt;
&lt;p&gt;">
               Analyzed Sample ID
               <p>
               </p>
              </td>
              <td class="element-description" value="A unique identifier representing the particular sample that was analyzed; analyzed sample identifiers must be used consistently to relate those described in the sample file and in the related analysis files. Cannot contain whitespace, semi-colons or special characterse. Can contain alphanumeric characters, dashes or underscores.">
               <small>
                A unique identifier representing the particular sample that was analyzed; analyzed sample identifiers must be used consistently to relate those described in the sample file and in the related analysis files. Cannot contain whitespace, semi-colons or special characterse. Can contain alphanumeric characters, dashes or underscores.
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="^([\w+\-\_]+)$">
               <small>
                ^([\w+\-\_]+)$
               </small>
              </td>
              <td class="element-example" value="hnc_12 CCG_34_94583 BRCA47832-3239">
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
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="mutation_type">
               mutation_type
              </td>
              <td class="element-display-name" value="Mutation Type&lt;/p&gt;
&lt;p&gt;">
               Mutation Type
               <p>
               </p>
              </td>
              <td class="element-description" value="Type of mutation">
               <small>
                Type of mutation
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes inplace" value="[ssm_p.0.mutation_type.v1]1single base substitution2insertion of &lt;=200bp3deletion of &lt;=200bp4multiple base substitution (&gt;=2bp and &lt;=200bp)">
               <div class="link">
                <small>
                 [
                 <a href="#ssm_p.0.mutation_type.v1">
                  ssm_p.0.mutation_type.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl class="codes-list" title="ssm_p.0.mutation_type.v1">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   single base substitution
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   insertion of &lt;=200bp
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   deletion of &lt;=200bp
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   multiple base substitution (&gt;=2bp and &lt;=200bp)
                  </small>
                 </dd>
                </dl>
               </div>
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="chromosome">
               chromosome
              </td>
              <td class="element-display-name" value="Chromosome&lt;/p&gt;
&lt;p&gt;">
               Chromosome
               <p>
               </p>
              </td>
              <td class="element-description" value="Name of the chromosome containing the mutation/variation without the chr prefix">
               <small>
                Name of the chromosome containing the mutation/variation without the chr prefix
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes appendix" value="[GLOBAL.0.chromosome.v3]YYXXMTMT1122334455667788991010111112121313141415151616171718181919202021212222">
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
                <dl class="codes-list" title="GLOBAL.0.chromosome.v3">
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
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="chromosome_start">
               chromosome_start
              </td>
              <td class="element-display-name" value="Chromosome Start&lt;/p&gt;
&lt;p&gt;">
               Chromosome Start
               <p>
               </p>
              </td>
              <td class="element-description" value="Chromosome start position of the feature being described">
               <small>
                Chromosome start position of the feature being described
               </small>
              </td>
              <td class="datatype integer" value="INTEGER">
               INTEGER
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="^(\d+)$">
               <small>
                ^(\d+)$
               </small>
              </td>
              <td class="element-example" value="405343492">
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
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="chromosome_end">
               chromosome_end
              </td>
              <td class="element-display-name" value="Chromosome End&lt;/p&gt;
&lt;p&gt;">
               Chromosome End
               <p>
               </p>
              </td>
              <td class="element-description" value="Chromosome end position of the feature being described">
               <small>
                Chromosome end position of the feature being described
               </small>
              </td>
              <td class="datatype integer" value="INTEGER">
               INTEGER
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="^(\d+)$">
               <small>
                ^(\d+)$
               </small>
              </td>
              <td class="element-example" value="405343499">
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
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="chromosome_strand">
               chromosome_strand
              </td>
              <td class="element-display-name" value="Chromosome Strand&lt;/p&gt;
&lt;p&gt;">
               Chromosome Strand
               <p>
               </p>
              </td>
              <td class="element-description" value="Chromosome strand of mutation. Must always use forward strand (1)">
               <small>
                Chromosome strand of mutation. Must always use forward strand (1)
               </small>
              </td>
              <td class="datatype integer" value="INTEGER">
               INTEGER
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="^(1)$">
               <small>
                ^(1)$
               </small>
              </td>
              <td class="element-example" value="1">
               <small>
                <ul>
                 <li>
                  1
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="reference_genome_allele">
               reference_genome_allele
              </td>
              <td class="element-display-name" value="Reference Genome Allele&lt;/p&gt;
&lt;p&gt;">
               Reference Genome Allele
               <p>
               </p>
              </td>
              <td class="element-description" value="Allele in the reference genome. For insertions, use a dash sign (-). For all other types of mutations, use forward strand DNA sequence at the reference genome position as specified in chromosome, chromosome_start and chromosome_end">
               <small>
                Allele in the reference genome. For insertions, use a dash sign (-). For all other types of mutations, use forward strand DNA sequence at the reference genome position as specified in chromosome, chromosome_start and chromosome_end
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+$){1,200}">
               <small>
                (?iu)^([ATGC\-]+$){1,200}
               </small>
              </td>
              <td class="element-example" value="GA - TCTT">
               <small>
                <ul>
                 <li>
                  GA
                 </li>
                 <li>
                  -
                 </li>
                 <li>
                  TCTT
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="control_genotype">
               control_genotype
              </td>
              <td class="element-display-name" value="Control Genotype&lt;/p&gt;
&lt;p&gt;">
               Control Genotype
               <p>
               </p>
              </td>
              <td class="element-description" value="Genotype of the control sample (use a dash for a missing allele)">
               <small>
                Genotype of the control sample (use a dash for a missing allele)
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool istrue" value="Controlled">
               <span title="Controlled access data element" class="label label-important">
                Controlled
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+/[ATGC\-]+)$">
               <small>
                (?iu)^([ATGC\-]+/[ATGC\-]+)$
               </small>
              </td>
              <td class="element-example" value="GA/GA -/- TCTT/TCTT">
               <small>
                <ul>
                 <li>
                  GA/GA
                 </li>
                 <li>
                  -/-
                 </li>
                 <li>
                  TCTT/TCTT
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="mutated_from_allele">
               mutated_from_allele
              </td>
              <td class="element-display-name" value="Mutated from Allele&lt;/p&gt;
&lt;p&gt;">
               Mutated from Allele
               <p>
               </p>
              </td>
              <td class="element-description" value="Allele that is believed to be the original allele in the ancestral cell that was mutated in the tumour cell. Use dash for insertions. Mutated allele must be one of the two alleles in the control_genotype">
               <small>
                Allele that is believed to be the original allele in the ancestral cell that was mutated in the tumour cell. Use dash for insertions. Mutated allele must be one of the two alleles in the control_genotype
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool istrue" value="Controlled">
               <span title="Controlled access data element" class="label label-important">
                Controlled
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+$){1,200}">
               <small>
                (?iu)^([ATGC\-]+$){1,200}
               </small>
              </td>
              <td class="element-example" value="GA - TCTT">
               <small>
                <ul>
                 <li>
                  GA
                 </li>
                 <li>
                  -
                 </li>
                 <li>
                  TCTT
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="mutated_to_allele">
               mutated_to_allele
              </td>
              <td class="element-display-name" value="Mutated to Allele&lt;/p&gt;
&lt;p&gt;">
               Mutated to Allele
               <p>
               </p>
              </td>
              <td class="element-description" value="The new allele identified in the tumour sample that is believed to be the resulting allele of a somatic mutation event during tumourgenesis. Use dash for deletions. Mutant allele must be one allele and must be one of the alleles defined in tumour_genotype">
               <small>
                The new allele identified in the tumour sample that is believed to be the resulting allele of a somatic mutation event during tumourgenesis. Use dash for deletions. Mutant allele must be one allele and must be one of the alleles defined in tumour_genotype
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+$){1,200}">
               <small>
                (?iu)^([ATGC\-]+$){1,200}
               </small>
              </td>
              <td class="element-example" value="- T">
               <small>
                <ul>
                 <li>
                  -
                 </li>
                 <li>
                  T
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="tumour_genotype">
               tumour_genotype
              </td>
              <td class="element-display-name" value="Tumour Genotype&lt;/p&gt;
&lt;p&gt;">
               Tumour Genotype
               <p>
               </p>
              </td>
              <td class="element-description" value="Genotype of the tumour sample (use a dash for each missing base)">
               <small>
                Genotype of the tumour sample (use a dash for each missing base)
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool istrue" value="Controlled">
               <span title="Controlled access data element" class="label label-important">
                Controlled
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+/[ATGC\-]+(([/{1}][ATGC\-]+){0,2})?+)$">
               <small>
                (?iu)^([ATGC\-]+/[ATGC\-]+(([/{1}][ATGC\-]+){0,2})?+)$
               </small>
              </td>
              <td class="element-example" value="GA/- -/T TCTT/-">
               <small>
                <ul>
                 <li>
                  GA/-
                 </li>
                 <li>
                  -/T
                 </li>
                 <li>
                  TCTT/-
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="expressed_allele">
               expressed_allele
              </td>
              <td class="element-display-name" value="Expressed Allele&lt;/p&gt;
&lt;p&gt;">
               Expressed Allele
               <p>
               </p>
              </td>
              <td class="element-description" value="For heterozygous SNPs, the dominant allele as revealed by RNA-seq in the tumour sample. When multiple alleles are identified, include all of them separated by commas">
               <small>
                For heterozygous SNPs, the dominant allele as revealed by RNA-seq in the tumour sample. When multiple alleles are identified, include all of them separated by commas
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool istrue" value="N/A Valid">
               <span title="VALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-success">
                N/A Valid
               </span>
              </td>
              <td class="bool istrue" value="Controlled">
               <span title="Controlled access data element" class="label label-important">
                Controlled
               </span>
              </td>
              <td class="element-regexp" value="(?iu)^([ATGC\-]+(([,{1}][ATGC\-]+){1,3})?+)$">
               <small>
                (?iu)^([ATGC\-]+(([,{1}][ATGC\-]+){1,3})?+)$
               </small>
              </td>
              <td class="element-example" value="ACGT">
               <small>
                <ul>
                 <li>
                  AC
                 </li>
                 <li>
                  GT
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="optional-element pbi-avoid">
              <td class="element-name" value="quality_score">
               quality_score
              </td>
              <td class="element-display-name" value="Quality Score&lt;/p&gt;
&lt;p&gt;">
               Quality Score
               <p>
               </p>
              </td>
              <td class="element-description" value="Quality score of the mutation call">
               <small>
                Quality score of the mutation call
               </small>
              </td>
              <td class="datatype decimal" value="DECIMAL">
               DECIMAL
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool isfalse" value="Optional">
               <span title="Value optional, VALID if value is set to NULL code -999" class="label">
                Optional
               </span>
              </td>
              <td class="bool isna" value="">
               <span class="label">
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="optional-element pbi-avoid">
              <td class="element-name" value="probability">
               probability
              </td>
              <td class="element-display-name" value="Probability&lt;/p&gt;
&lt;p&gt;">
               Probability
               <p>
               </p>
              </td>
              <td class="element-description" value="Probability of the mutation call">
               <small>
                Probability of the mutation call
               </small>
              </td>
              <td class="datatype decimal" value="DECIMAL">
               DECIMAL
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool isfalse" value="Optional">
               <span title="Value optional, VALID if value is set to NULL code -999" class="label">
                Optional
               </span>
              </td>
              <td class="bool isna" value="">
               <span class="label">
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="total_read_count">
               total_read_count
              </td>
              <td class="element-display-name" value="Total Read Count&lt;/p&gt;
&lt;p&gt;">
               Total Read Count
               <p>
               </p>
              </td>
              <td class="element-description" value="Total number of raw reads that cover the called mutation">
               <small>
                Total number of raw reads that cover the called mutation
               </small>
              </td>
              <td class="datatype integer" value="INTEGER">
               INTEGER
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="mutant_allele_read_count">
               mutant_allele_read_count
              </td>
              <td class="element-display-name" value="Mutant Allele Read Count&lt;/p&gt;
&lt;p&gt;">
               Mutant Allele Read Count
               <p>
               </p>
              </td>
              <td class="element-description" value="Total number of raw reads that contain the mutant allele">
               <small>
                Total number of raw reads that contain the mutant allele
               </small>
              </td>
              <td class="datatype integer" value="INTEGER">
               INTEGER
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="verification_status">
               verification_status
              </td>
              <td class="element-display-name" value="Verification Status&lt;/p&gt;
&lt;p&gt;">
               Verification Status
               <p>
               </p>
              </td>
              <td class="element-description" value="Indicate if the mutation/variation has been verified using an independent orthogonal genotype platform/technology">
               <small>
                Indicate if the mutation/variation has been verified using an independent orthogonal genotype platform/technology
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes inplace" value="[GLOBAL.0.verification_status.v2]1tested and verified2not tested3tested and verified to be false4tested and inconclusive">
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
                <dl class="codes-list" title="GLOBAL.0.verification_status.v2">
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
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="verification_platform">
               verification_platform
              </td>
              <td class="element-display-name" value="Verification Platform&lt;/p&gt;
&lt;p&gt;">
               Verification Platform
               <p>
               </p>
              </td>
              <td class="element-description" value="Identifier of orthogonal platform or technology used to confirm that the mutation/variant is true; identifier should be taken from controlled vocabulary list of platforms recognized by the DCC and should directly correspond to the particular technology (including version) used. If no appropriate term exists for a given platform, please contact the DCC to request an addition to the CV terms.">
               <small>
                Identifier of orthogonal platform or technology used to confirm that the mutation/variant is true; identifier should be taken from controlled vocabulary list of platforms recognized by the DCC and should directly correspond to the particular technology (including version) used. If no appropriate term exists for a given platform, please contact the DCC to request an addition to the CV terms.
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes appendix" value="[GLOBAL.0.platform.v1]1PCR2qPCR3capillary sequencing4SOLiD sequencing5Illumina GA sequencing6454 sequencing7Helicos sequencing8Affymetrix Genome-Wide Human SNP Array 6.09Affymetrix Genome-Wide Human SNP Array 5.010Affymetrix Mapping 100K Array Set11Affymetrix Mapping 500K Array Set12Affymetrix Mapping 10K 2.0 Array Set13Affymetrix EMET Plus Premier Pack14Agilent Whole Human Genome Oligo Microarray Kit15Agilent Human Genome 244A16Agilent Human Genome 105A17Agilent Human CNV Association 2x105K18Agilent Human Genome 44K19Agilent Human CGH 1x1M20Agilent Human CGH 2x400K21Agilent Human CGH 4x180K22Agilent Human CGH 8x60K23Agilent Human CNV 2x400K24Agilent Human miRNA Microarray Kit (v2)25Agilent Human CpG Island Microarray Kit26Agilent Human Promoter ChIP-on-chip Microarray Set27Agilent Human SpliceArray28Illumina human1m-duo29Illumina human660w-quad30Illumina humancytosnp-1231Illumina human510s-duo32Illumina humanmethylation2733Illumina goldengate methylation34Illumina HumanHT-12 v4.0 beadchip35Illumina HumanWG-6 v3.0 beadchip36Illumina HumanRef-8 v3.0 beadchip37Illumina microRNA Expression Profiling Panel38Illumina humanht-1639Illumina humanht-1740Nimblegen Human CGH 3x720 Whole-Genome v3.0 Array41Nimblegen Human CGH 2.1M Whole-Genome v2.0D Array42Nimblegen Gene Expression 385K43Nimblegen Gene Expression 4x72K44Nimblegen Gene Expression 12x135K45Nimblegen Human Methylation 2.1M Whole-Genome sets46Nimblegen Human Methylation 385K Whole-Genome sets47Nimblegen CGS48Illumina Human1M OmniQuad chip49PCR and capillary sequencing50Custom-designed gene expression array51Affymetrix HT Human Genome U133A Array Plate Set52Agilent 244K Custom Gene Expression G4502A-07-153Agilent 244K Custom Gene Expression G4502A-07-254Agilent 244K Custom Gene Expression G4502A-07-355Agilent Human Genome CGH Custom Microaary 2x415K56Affymetrix Human U133 Plus PM57Affymetrix Human U133 Plus 2.058Affymetrix Human Exon 1.0 ST59Almac Human CRC60Illumina HiSeq61Affymetrix Human MIP 330K62Affymetrix Human Gene 1.0 ST63Illumina Human Omni1-Quad beadchip64Sequenom MassARRAY65Custom-designed cDNA array66Illumina HumanHap55067Ion Torrent PGM68Illumina GoldenGate Methylation Cancer Panel I69Illumina Infinium HumanMethylation45070Agilent 8 x 15K Human miRNA-specific microarray71M.D. Anderson Reverse Phase Protein Array Core72Microsatellite Instability Analysis73Agilent 244K Custom Gene Expression G4502A-0774Illumina HumanCNV370-Duo v1.0 BeadChip75Illumina HumanOmniExpress BeadChip76PacBio RS sequencing77Affymetrix OncoScan FFPE Express 2.078Illumina MiSeq Personal Sequencer79Affymetrix Human Genome U219 Array Plate80HumanOmni2.5-8 BeadChip Kit">
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
                <dl class="codes-list" title="GLOBAL.0.platform.v1">
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
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool istrue" value="N/A Valid">
               <span title="VALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-success">
                N/A Valid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="biological_validation_status">
               biological_validation_status
              </td>
              <td class="element-display-name" value="Biological Validation Status&lt;/p&gt;
&lt;p&gt;">
               Biological Validation Status
               <p>
               </p>
              </td>
              <td class="element-description" value="Indicate if the mutation/variation has been observed in a larger cohort/sample size, and is not an artifact or consequence of sample selection for sequencing">
               <small>
                Indicate if the mutation/variation has been observed in a larger cohort/sample size, and is not an artifact or consequence of sample selection for sequencing
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes inplace" value="[GLOBAL.0.biological_validation_status.v3]1tested and valid2not tested3tested and not valid4tested and inconclusive">
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
                <dl class="codes-list" title="GLOBAL.0.biological_validation_status.v3">
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
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool isfalse" value="N/A Invalid">
               <span title="INVALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-important">
                N/A Invalid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name" value="biological_validation_platform">
               biological_validation_platform
              </td>
              <td class="element-display-name" value="Biological Validation Platform&lt;/p&gt;
&lt;p&gt;">
               Biological Validation Platform
               <p>
               </p>
              </td>
              <td class="element-description" value="Identifier of assay platform or technology used to validate the mutation/variant">
               <small>
                Identifier of assay platform or technology used to validate the mutation/variant
               </small>
              </td>
              <td class="datatype cv" value="CV">
               CV
              </td>
              <td class="codes appendix" value="[GLOBAL.0.platform.v1]1PCR2qPCR3capillary sequencing4SOLiD sequencing5Illumina GA sequencing6454 sequencing7Helicos sequencing8Affymetrix Genome-Wide Human SNP Array 6.09Affymetrix Genome-Wide Human SNP Array 5.010Affymetrix Mapping 100K Array Set11Affymetrix Mapping 500K Array Set12Affymetrix Mapping 10K 2.0 Array Set13Affymetrix EMET Plus Premier Pack14Agilent Whole Human Genome Oligo Microarray Kit15Agilent Human Genome 244A16Agilent Human Genome 105A17Agilent Human CNV Association 2x105K18Agilent Human Genome 44K19Agilent Human CGH 1x1M20Agilent Human CGH 2x400K21Agilent Human CGH 4x180K22Agilent Human CGH 8x60K23Agilent Human CNV 2x400K24Agilent Human miRNA Microarray Kit (v2)25Agilent Human CpG Island Microarray Kit26Agilent Human Promoter ChIP-on-chip Microarray Set27Agilent Human SpliceArray28Illumina human1m-duo29Illumina human660w-quad30Illumina humancytosnp-1231Illumina human510s-duo32Illumina humanmethylation2733Illumina goldengate methylation34Illumina HumanHT-12 v4.0 beadchip35Illumina HumanWG-6 v3.0 beadchip36Illumina HumanRef-8 v3.0 beadchip37Illumina microRNA Expression Profiling Panel38Illumina humanht-1639Illumina humanht-1740Nimblegen Human CGH 3x720 Whole-Genome v3.0 Array41Nimblegen Human CGH 2.1M Whole-Genome v2.0D Array42Nimblegen Gene Expression 385K43Nimblegen Gene Expression 4x72K44Nimblegen Gene Expression 12x135K45Nimblegen Human Methylation 2.1M Whole-Genome sets46Nimblegen Human Methylation 385K Whole-Genome sets47Nimblegen CGS48Illumina Human1M OmniQuad chip49PCR and capillary sequencing50Custom-designed gene expression array51Affymetrix HT Human Genome U133A Array Plate Set52Agilent 244K Custom Gene Expression G4502A-07-153Agilent 244K Custom Gene Expression G4502A-07-254Agilent 244K Custom Gene Expression G4502A-07-355Agilent Human Genome CGH Custom Microaary 2x415K56Affymetrix Human U133 Plus PM57Affymetrix Human U133 Plus 2.058Affymetrix Human Exon 1.0 ST59Almac Human CRC60Illumina HiSeq61Affymetrix Human MIP 330K62Affymetrix Human Gene 1.0 ST63Illumina Human Omni1-Quad beadchip64Sequenom MassARRAY65Custom-designed cDNA array66Illumina HumanHap55067Ion Torrent PGM68Illumina GoldenGate Methylation Cancer Panel I69Illumina Infinium HumanMethylation45070Agilent 8 x 15K Human miRNA-specific microarray71M.D. Anderson Reverse Phase Protein Array Core72Microsatellite Instability Analysis73Agilent 244K Custom Gene Expression G4502A-0774Illumina HumanCNV370-Duo v1.0 BeadChip75Illumina HumanOmniExpress BeadChip76PacBio RS sequencing77Affymetrix OncoScan FFPE Express 2.078Illumina MiSeq Personal Sequencer79Affymetrix Human Genome U219 Array Plate80HumanOmni2.5-8 BeadChip Kit">
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
                <dl class="codes-list" title="GLOBAL.0.platform.v1">
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
              <td class="bool istrue" value="Required">
               <span title="Data element requires a value" class="label label-success">
                Required
               </span>
              </td>
              <td class="bool istrue" value="N/A Valid">
               <span title="VALID if value set to codes -888 (N/A) or -777 (Verified Unknown)" class="label label-success">
                N/A Valid
               </span>
              </td>
              <td class="bool isfalse" value="Open Access">
               <span title="Open access data element" class="label label-success">
                Open Access
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
               <small>
                <ul>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="deprecated-element warning pbi-avoid">
              <td class="element-name" value="note">
               note
              </td>
              <td class="element-display-name" value="Note&lt;/p&gt;
&lt;p&gt;">
               Note
               <p>
               </p>
              </td>
              <td class="element-description" value="Optional field to leave notes">
               <small>
                Optional field to leave notes
               </small>
              </td>
              <td class="datatype text" value="TEXT">
               TEXT
              </td>
              <td class="codes na" value="N/A">
               N/A
              </td>
              <td class="bool isfalse" value="Optional">
               <span title="Value optional, VALID if value is set to NULL code -999" class="label">
                Optional
               </span>
              </td>
              <td class="bool isna" value="">
               <span class="label">
               </span>
              </td>
              <td class="bool istrue" value="Controlled">
               <span title="Controlled access data element" class="label label-important">
                Controlled
               </span>
              </td>
              <td class="element-regexp" value="">
               <small>
               </small>
              </td>
              <td class="element-example" value="">
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
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/simple-somatic-mutations-ssm-analysis-metadata-file-m-08d" class="page-previous" title="Go to previous page">
             ‹ Simple Somatic Mutations (ssm) - Analysis Metadata File (m)
            </a>
            <a href="/dictionary-v08d-mar-2014-release-16" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/icgc-simple-somatic-mutation-format-08d" class="page-next" title="Go to next page">
             ICGC Simple Somatic Mutation Format ›
            </a>
           </div>
          </div>
         </div>
         <div class="links">
          <ul class="links inline">
           <li class="comment_forbidden first last">
            <span>
             <a href="/user/login?destination=comment%2Freply%2F6286%23comment-form">
              Login
             </a>
             to post comments
            </span>
           </li>
          </ul>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6286 -->
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

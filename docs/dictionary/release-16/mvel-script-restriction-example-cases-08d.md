<h1 class="title">
 MVEL Script Restriction: Example Cases
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
       <div id="node-6518" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <p>
          </p>
          <div id="page">
           <div id="main" class="aui-page-panel">
            <div id="content" class="view">
             <div id="main-content" class="wiki-content group">
              <p>
               What does this script restriction for the &#34;mutated_to_allele&#34; field in the Simple Somatic Mutations Primary (ssm_p) file mean?
              </p>
              <div class="code panel pdl" style="border-width: 1px;">
               <div class="codeContent panelContent pdl">
                <pre class="theme: Confluence; brush: js; gutter: false" style="font-size:12px;">
                 var allele = null; 
if (ctrlAlleles contains mutated_to_allele) { 
    for (allele:tumourAlleles) { 
        if (mutated_to_allele != allele) { 
            return false 
        } 
    } 
} else { 
    if (!(tumourAlleles contains mutated_to_allele)) { 
        return false 
    } 
}
                </pre>
               </div>
              </div>
              <p>
               This MVEL script restriction checks to make sure &#34;mutated_to_allele&#34; is one of the mutated alleles in tumour_genotype. The following example mutation is not valid:
              </p>
              <p>
               <strong>
                Invalid Mutation:
               </strong>
              </p>
              <p>
               reference_genome_allele: G
               <br>
               control_genotype: G/G
               <br>
               tumour_genotype: G/T
               <br>
               mutated_from_allele: G
               <br>
               <strong>
                mutated_to_allele: G
               </strong>
              </p>
              <div class="aui-message problem shadowed information-macro">
               <span class="aui-icon icon-problem">
                Icon
               </span>
               <div class="message-content">
                <p>
                 One of the alleles in tumour_genotype is actually mutated (G/
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                 ). Therefore, mutated_to_allele should be &#34;
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                 &#34; instead of &#34;G&#34;.
                </p>
               </div>
              </div>
              <p>
               <strong>
                Valid mutation:
               </strong>
              </p>
              <p>
               reference_genome_allele: G
               <br>
               control_genotype: G/G
               <br>
               tumour_genotype: G/T
               <br>
               mutated_from_allele: G
               <br>
               mutated_to_allele:
               <span style="color: rgb(255,0,0);">
                T
               </span>
              </p>
             </div>
            </div>
           </div>
          </div>
          <p>
           <br>
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/list-institutions-08d" class="page-previous" title="Go to previous page">
             ‹ List of Institutions
            </a>
            <a href="/dictionary-v08d-mar-2014-release-16" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/methylation-array-manifests-08d" class="page-next" title="Go to next page">
             Methylation Array Manifests ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6518 -->
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

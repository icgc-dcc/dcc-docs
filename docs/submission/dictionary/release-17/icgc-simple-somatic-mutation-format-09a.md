<h1 class="title">
 ICGC Simple Somatic Mutation Format - 0.9a
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
       <div id="node-6554" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="view" id="content">
           <div class="wiki-content group" id="main-content">
            <div>
             <h3 id="important_notes">
              Important Notes
             </h3>
             <h4 id="ICGCSimpleSomaticMutationFormat-chromosomecoordinates">
              chromosome coordinates
             </h4>
             <ul>
              <li>
               The first base of a chromosome starts at 1 and counts onward along the forward strand until the end.
              </li>
              <li>
               The value of chromosome_start must be less than or equal to chromosome_end
              </li>
              <li>
               The size of a feature is calculated as: chromosome_end - chromosome_start + 1
              </li>
              <li>
               For mutations that are single-base substitutions, deletions or multiple-base substitutions, use the start and end coordinates of the corresponding chromosome interval on the reference genome where the mutation occurs.
              </li>
              <li>
               For mutations that are insertions, use the coordinates of the position on the chromosome that is immediately after the insertion point.
              </li>
             </ul>
             <h4 id="ICGCSimpleSomaticMutationFormat-chromosome_strand">
              chromosome_strand
             </h4>
             <ul>
              <li>
               &#39;chromosome_strand&#39; is used to record the reference genome strand on which the genotype alleles are located
              </li>
              <li>
               In ICGC simple somatic mutation format, we require the forward strand sequence is always used for genotypes
              </li>
              <li>
               &#39;chromosome_strand&#39; does not have anything to do with the strandness of the gene that contains the simple mutation
              </li>
             </ul>
             <h4 id="ICGCSimpleSomaticMutationFormat-control_genotype,tumour_genotype" style="list-style-type: none;background-image: none;">
              control_genotype, tumour_genotype
             </h4>
             <ul>
              <li>
               Genotype is presented as nucleotide sequence of all allele(s). For example, in a diploid genome on chromosome 1 at position 12345, if one allele on the forward strand is A and the other is G, then the genotype is presented as A/G and &#39;chromosome_strand&#39; being &#39;1&#39; (i.e. forward strand)
              </li>
              <li>
               In the case that the genotype is hemizygous (e.g. G allele is missing), it can be presented as A/-.
              </li>
              <li>
               &#39;control_genotype&#39; and &#39;tumour_genotype&#39; are used to record genotype for the matched control sample and the primary tumour sample, respectively. Both genotypes must be presented using the same strand of the reference genome.
              </li>
             </ul>
             <h4 id="ICGCSimpleSomaticMutationFormat-reference_genome_allele">
              reference_genome_allele
             </h4>
             <ul>
              <li>
               &#39;reference_genome_allele&#39; is the forward strand nucleotide(s) at the corresponding location on the reference genome where the somatic mutation is detected in the tumour sample.
              </li>
             </ul>
             <h3 id="examples">
              Examples of different types of simple somatic mutations
             </h3>
             <ul>
              <li>
               <a href="#how1">
                How do I represent an insertion?
               </a>
              </li>
              <li>
               <a href="#how2">
                How do I represent a deletion?
               </a>
              </li>
              <li>
               <a href="#how3">
                How do I represent a single-base substitution/mismatch?
               </a>
              </li>
              <li>
               <a href="#how4">
                How do I represent a multiple-base substitution?
               </a>
               <br>
               <br>
               <br>
              </li>
             </ul>
             <h3 id="how1">
              How do I represent an insertion?
             </h3>
             <p>
              <a href="#examples">
               back to top
              </a>
             </p>
             <p>
             </p>
            </div>
            <ul>
             <li>
              Use the position of the nucleotide on the chromosome that is immediately
              <strong>
               after
              </strong>
              the insertion point. The rationale is that the inserted base starts at the specified chromosome start position.
             </li>
             <li>
              Example: an insertion of a single base &#34;
              <span style="color: rgb(255,0,0);">
               T
              </span>
              &#34; after &#34;
              <span style="color: rgb(0,0,255);">
               A
              </span>
              &#34; at position 56. Use position 56 to represent the insertion chromosome start position.
             </li>
            </ul>
            <p>
            </p>
            <div>
             <table class="confluenceTable">
              <tbody style="margin-left: 30.0px;">
               <tr style="margin-left: 30.0px;">
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 Position
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 55
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 56
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 57
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 58
                </th>
               </tr>
               <tr style="margin-left: 30.0px;">
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 Reference Genome
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  A
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  G
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  A
                 </span>
                </td>
               </tr>
               <tr style="margin-left: 30.0px;">
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 Tumour Genome
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  A
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  G
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 <span style="color: rgb(0,0,255);">
                  C
                 </span>
                </td>
               </tr>
              </tbody>
             </table>
             <p>
              <br>
             </p>
            </div>
            <div>
             <table class="confluenceTable">
              <tbody style="margin-left: 30.0px;">
               <tr style="margin-left: 30.0px;">
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 mutation type
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 chromosome start
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 chromosome end
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 reference genome allele
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 control genotype
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 tumour genotype
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 mutated from allele
                </th>
                <th class="confluenceTh" style="margin-left: 30.0px;">
                 <p>
                  mutated to allele
                 </p>
                </th>
               </tr>
               <tr style="margin-left: 30.0px;">
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 insertion
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 56
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 56
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 -
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 - / -
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 - /T
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 -
                </td>
                <td class="confluenceTd" style="margin-left: 30.0px;">
                 T
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <h3 id="how2">
             How do I represent a deletion?
            </h3>
            <p>
             <a href="#examples">
              back to top
             </a>
            </p>
            <p>
            </p>
            <ul>
             <li style="list-style-type: none;background-image: none;">
              <ul>
               <li>
                Use the start position and end position of the deleted mutated fragment to represent the deletion.
               </li>
               <li>
                Example: A deletion of &#34;TCTT&#34; at chromosome start position 124.
               </li>
              </ul>
             </li>
            </ul>
            <p style="margin-left: 30.0px;">
            </p>
            <div>
             <table class="confluenceTable">
              <tbody style="margin-left: 60.0px;">
               <tr style="margin-left: 60.0px;">
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 Position
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 123
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 124
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 125
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 126
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                 127
                </th>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 Reference Genome
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 Tumour Genome
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(255,0,0);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                 <span style="color: rgb(255,0,0);">
                  T
                 </span>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <div>
             <br>
             <table class="confluenceTable">
              <tbody style="margin-left: 60.0px;">
               <tr style="margin-left: 60.0px;">
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 mutation type
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 chromosome start
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 chromosome end
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 reference genome allele
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 control genotype
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 tumour genotype
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 mutated from allele
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 <p style="text-align: left;">
                  mutated to allele
                 </p>
                </th>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  deletion
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  124
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  127
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  TCTT
                 </span>
                 <span>
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  TCTT/TCTT
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  TCTT/-
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span>
                  TCTT
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 -
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <p>
             <br>
             <br>
            </p>
            <h3 id="how3">
             How do I represent a single-base substitution?
            </h3>
            <p>
             <a href="#examples">
              back to top
             </a>
            </p>
            <p>
            </p>
            <ul>
             <li style="list-style-type: none;background-image: none;">
              <ul>
               <li>
                Use the corresponding chromosome interval on the reference genome where the single-base mutation is located.
               </li>
               <li>
                Example: A mutation occurs at position 51 where
                <span style="color: rgb(0,0,255);">
                 G
                </span>
                is substituted with
                <span style="color: rgb(255,0,0);">
                 C
                 <span style="color: rgb(0,0,0);">
                  . The chromosome start position will be 51.
                 </span>
                </span>
               </li>
              </ul>
             </li>
            </ul>
            <p>
            </p>
            <div>
             <table class="confluenceTable">
              <tbody style="margin-left: 60.0px;">
               <tr style="margin-left: 60.0px;">
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 Position
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 50
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 51
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 52
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 53
                </th>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 Reference Genome
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  G
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  A
                 </span>
                </td>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 Tumour Genome
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(255,0,0);">
                  C
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  T
                 </span>
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 <span style="color: rgb(0,0,255);">
                  A
                 </span>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <div>
             <table class="confluenceTable">
              <tbody style="margin-left: 60.0px;">
               <tr style="margin-left: 60.0px;">
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 mutation type
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 chromosome start
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 chromosome end
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 reference genome allele
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 control genotype
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 tumour genotype
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 mutated from allele
                </th>
                <th class="confluenceTh" style="margin-left: 60.0px;">
                 <p>
                  mutated to allele
                 </p>
                </th>
               </tr>
               <tr style="margin-left: 60.0px;">
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 single-base substitution
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 51
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 51
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 G
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 G/G
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 G/C
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 G
                </td>
                <td class="confluenceTd" style="margin-left: 60.0px;">
                 C
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <h3 id="how4">
             How do I represent a multiple-base substitution?
            </h3>
            <p>
             <a href="#examples">
              back to top
             </a>
            </p>
            <div>
             <p>
             </p>
             <ul>
              <li style="list-style-type: none;background-image: none;">
               <ul>
                <li>
                 Use the start and end coordinates of the mutated fragment.
                </li>
                <li>
                 Example: The sequence &#34;ACTCAGACC&#34; starting from position 50 to 58 is substituted with the sequence &#34;TTGT&#34;.
                </li>
               </ul>
              </li>
             </ul>
             <p>
             </p>
             <p>
             </p>
             <div>
              <table class="confluenceTable">
               <tbody style="margin-left: 60.0px;">
                <tr style="margin-left: 60.0px;">
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  Position
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  50
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  51
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  52
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  53
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                  54
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                  55
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                  56
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                  57
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;" colspan="1">
                  58
                 </th>
                </tr>
                <tr style="margin-left: 60.0px;">
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  Reference Genome
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(0,0,255);">
                   A
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(0,0,255);">
                   C
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(0,0,255);">
                   T
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(0,0,255);">
                   C
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                  <span style="color: rgb(0,0,255);">
                   A
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                  <span style="color: rgb(0,0,255);">
                   G
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                  <span style="color: rgb(0,0,255);">
                   A
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                  <span style="color: rgb(0,0,255);">
                   C
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;" colspan="1">
                  <span style="color: rgb(0,0,255);">
                   C
                  </span>
                 </td>
                </tr>
                <tr style="margin-left: 60.0px;">
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  Tumour Genome
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(255,0,0);">
                   T
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(255,0,0);">
                   T
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(255,0,0);">
                   G
                  </span>
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  <span style="color: rgb(255,0,0);">
                   T
                  </span>
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                </tr>
               </tbody>
              </table>
             </div>
             <div>
              <br>
              <table class="confluenceTable">
               <tbody style="margin-left: 60.0px;">
                <tr style="margin-left: 60.0px;">
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  mutation type
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  chromosome start
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  chromosome end
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  reference genome allele
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  control genotype
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  tumour genotype
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  mutated from allele
                 </th>
                 <th class="confluenceTh" style="margin-left: 60.0px;">
                  <p>
                   mutated to allele
                  </p>
                 </th>
                </tr>
                <tr style="margin-left: 60.0px;">
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  multiple-base substitution
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  50
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  58
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  ACTCAGACC
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  ACTCAGACC/ACTCAGACC
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  ACTCAGACC/TTGT
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  ACTCAGACC
                 </td>
                 <td class="confluenceTd" style="margin-left: 60.0px;">
                  TTGT
                 </td>
                </tr>
               </tbody>
              </table>
             </div>
             <p>
             </p>
             <h3 id="ICGCSimpleSomaticMutationFormat-VCF-likevs.ICGC-likeMutationFormat:">
              <strong>
               VCF-like vs. ICGC-like Mutation Format:
              </strong>
             </h3>
             <p>
              The table below highlights the differences between VCF-like mutation format and the mutation format used by ICGC.
             </p>
             <p>
              <strong>
               <br>
              </strong>
             </p>
             <div>
              <table class="confluenceTable">
               <tbody>
                <tr>
                 <th class="confluenceTh">
                  Format
                 </th>
                 <th class="confluenceTh">
                  mutation type
                 </th>
                 <th class="confluenceTh">
                  chromosome start
                 </th>
                 <th class="confluenceTh">
                  chromosome end
                 </th>
                 <th class="confluenceTh">
                  reference genome allele
                 </th>
                 <th class="confluenceTh">
                  control genotype
                 </th>
                 <th class="confluenceTh">
                  tumour genotype
                 </th>
                 <th class="confluenceTh">
                  <p>
                   <span style="color: rgb(0,0,255);">
                    mutated from allele
                   </span>
                  </p>
                  <p>
                   <span style="color: rgb(0,0,255);">
                    (new field)
                   </span>
                  </p>
                 </th>
                 <th class="confluenceTh">
                  <p>
                   <span style="color: rgb(0,0,255);">
                    mutated to allele
                   </span>
                  </p>
                  <p>
                   <span style="color: rgb(0,0,255);">
                    (new field)
                   </span>
                  </p>
                 </th>
                </tr>
                <tr>
                 <td class="confluenceTd">
                  VCF-like
                 </td>
                 <td class="confluenceTd">
                  deletion
                 </td>
                 <td class="confluenceTd">
                  49510010
                 </td>
                 <td class="confluenceTd">
                  49510012
                 </td>
                 <td class="confluenceTd">
                  TGA
                 </td>
                 <td class="confluenceTd">
                  TGA/TGA
                 </td>
                 <td class="confluenceTd">
                  TGA/T
                 </td>
                 <td class="confluenceTd">
                 </td>
                 <td class="confluenceTd">
                 </td>
                </tr>
                <tr>
                 <td class="confluenceTd">
                  ICGC Format
                 </td>
                 <td class="confluenceTd">
                  deletion
                 </td>
                 <td class="confluenceTd">
                  49510011
                 </td>
                 <td class="confluenceTd">
                  49510012
                 </td>
                 <td class="confluenceTd">
                  GA
                 </td>
                 <td class="confluenceTd">
                  GA/GA
                 </td>
                 <td class="confluenceTd">
                  GA/-
                 </td>
                 <td class="confluenceTd">
                  GA
                 </td>
                 <td class="confluenceTd">
                  -
                 </td>
                </tr>
                <tr>
                 <td class="confluenceTd">
                  VCF-like
                 </td>
                 <td class="confluenceTd">
                  insertion
                 </td>
                 <td class="confluenceTd">
                  115303927
                 </td>
                 <td class="confluenceTd">
                  115303927
                 </td>
                 <td class="confluenceTd">
                  A
                 </td>
                 <td class="confluenceTd">
                  A/A
                 </td>
                 <td class="confluenceTd">
                  A/AT
                 </td>
                 <td class="confluenceTd">
                 </td>
                 <td class="confluenceTd">
                 </td>
                </tr>
                <tr>
                 <td class="confluenceTd">
                  <p>
                   ICGC Format
                  </p>
                 </td>
                 <td class="confluenceTd">
                  insertion
                 </td>
                 <td class="confluenceTd">
                  115303927
                 </td>
                 <td class="confluenceTd">
                  115303927
                 </td>
                 <td class="confluenceTd">
                  -
                 </td>
                 <td class="confluenceTd">
                  -/-
                 </td>
                 <td class="confluenceTd">
                  -/T
                 </td>
                 <td class="confluenceTd">
                  -
                 </td>
                 <td class="confluenceTd">
                  T
                 </td>
                </tr>
                <tr>
                 <td class="confluenceTd" colspan="1">
                  VCF-like
                 </td>
                 <td class="confluenceTd" colspan="1">
                  multiple-base substitution
                 </td>
                 <td class="confluenceTd" colspan="1">
                  39884779
                 </td>
                 <td class="confluenceTd" colspan="1">
                  39884787
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC/ACTCAGACC
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC/TTGT
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                 <td class="confluenceTd" colspan="1">
                 </td>
                </tr>
                <tr>
                 <td class="confluenceTd" colspan="1">
                  ICGC-like
                 </td>
                 <td class="confluenceTd" colspan="1">
                  multiple-base substitution
                 </td>
                 <td class="confluenceTd" colspan="1">
                  39884779
                 </td>
                 <td class="confluenceTd" colspan="1">
                  39884787
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC/ACTCAGACC
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC/TTGT
                 </td>
                 <td class="confluenceTd" colspan="1">
                  ACTCAGACC
                 </td>
                 <td class="confluenceTd" colspan="1">
                  TTGT
                 </td>
                </tr>
               </tbody>
              </table>
             </div>
            </div>
           </div>
          </div>
          <h3>
           <a name="masking" style="text-decoration: none; color: rgb(0,0,0);">
            Germline Data Masking
           </a>
          </h3>
          <p>
           As of Release 15, ICGC DCC will be censoring the patient&#39;s germline genotype in Simple Somatic Mutation data in the case where genotype consists of allele(s) that does not match the reference genome allele. Detailed explanation is
           <a href="/methods#masking">
            here
           </a>
           .
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/simple-somatic-mutations-ssm-primary-analysis-file-p-09a" class="page-previous" title="Go to previous page">
             ‹ Simple Somatic Mutations (ssm) - Primary Analysis File (p) - 0.9a
            </a>
            <a href="/dictionary-v09a-june-2014-release-17" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/simple-germline-variation-sgv-analysis-metadata-file-m-09a" class="page-next" title="Go to next page">
             Simple Germline Variation (sgv) - Analysis Metadata File (m) - 0.9a ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6554 -->
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

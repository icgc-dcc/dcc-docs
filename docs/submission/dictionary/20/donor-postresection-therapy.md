<h1 class="title">
 Donor Postresection Therapy (therapy)
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
       <div id="node-7015" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file-spec">
           <h2>
            File Type: &#39;Donor Postresection Therapy (therapy)&#39;
           </h2>
           <h3>
            File Key: &#39;therapy&#39;
           </h3>
           <h3>
            File Name
            <a target="_blank" href="http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum">
             Pattern
            </a>
            : &#39;^therapy(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$&#39;
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
               donor_id
              </td>
              <td class="element-display-name">
               Donor ID
              </td>
              <td class="element-description">
               <small>
                Unique identifier for the donor; assigned by data provider. It must be coded, and correspond to a donor ID listed in the donor data file.
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
                  90234
                 </li>
                 <li>
                  BLD_donor_89
                 </li>
                 <li>
                  AML-90
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
                  donor_id cannot begin with &#39;DO*&#39;
                  <br>
                 </li>
                 <li style="font-size:10px">
                  This prefix is reserved for ICGC IDs
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               first_therapy_start_interval
              </td>
              <td class="element-display-name">
               First Therapy Start Interval
              </td>
              <td class="element-description">
               <small>
                Interval between primary diagnosis and initiation of the first postresection therapy, in days
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
               first_therapy_duration
              </td>
              <td class="element-display-name">
               First Therapy Duration
              </td>
              <td class="element-description">
               <small>
                Duration of first postresection therapy, in days
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
               first_therapy_type
              </td>
              <td class="element-display-name">
               First Therapy Type
              </td>
              <td class="element-description">
               <small>
                Type of first postresection therapy
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#specimen.0.specimen_donor_treatment_type.v1">
                  specimen.0.specimen_donor_treatment_type.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl class="codes-list" title="specimen.0.specimen_donor_treatment_type.v1">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   no treatment
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   chemotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   radiation therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   combined chemo+radiation therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   immunotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   6
                  </small>
                 </dt>
                 <dd>
                  <small>
                   combined chemo+immunotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   7
                  </small>
                 </dt>
                 <dd>
                  <small>
                   surgery
                  </small>
                 </dd>
                 <dt>
                  <small>
                   8
                  </small>
                 </dt>
                 <dd>
                  <small>
                   other therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   9
                  </small>
                 </dt>
                 <dd>
                  <small>
                   bone marrow transplant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   10
                  </small>
                 </dt>
                 <dd>
                  <small>
                   stem cell transplant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   11
                  </small>
                 </dt>
                 <dd>
                  <small>
                   monoclonal antibodies (for liquid tumours)
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
               first_therapy_response
              </td>
              <td class="element-display-name">
               First Therapy Response
              </td>
              <td class="element-description">
               <small>
                What was the clinical effect of the first postresection therapy?
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#therapy.0.therapy_response.v1">
                  therapy.0.therapy_response.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="therapy.0.therapy_response.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   complete response
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   partial response
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   disease progression
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   stable disease
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   unknown
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
                  Use this field to describe the clinical effect of the type of therapy described in &#39;first_therapy_type&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               first_therapy_therapeutic_intent
              </td>
              <td class="element-display-name">
               First Therapy Therapeutic Intent
              </td>
              <td class="element-description">
               <small>
                The therapeutic intent of the first post resection therapy
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#therapy.0.therapeutic_intent.v1">
                  therapy.0.therapeutic_intent.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="therapy.0.therapeutic_intent.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   not applicable
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   adjuvant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   curative
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   palliative
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
                 <li style="font-size:10px">
                  Use this field to describe the therapeutic intent of the type of therapy described in &#39;first_therapy_type&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               second_therapy_start_interval
              </td>
              <td class="element-display-name">
               Second Therapy Start Interval
              </td>
              <td class="element-description">
               <small>
                Interval between primary diagnosis and initiation of the second postresection therapy, in days
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
               second_therapy_duration
              </td>
              <td class="element-display-name">
               Second Therapy Duration
              </td>
              <td class="element-description">
               <small>
                Duration of second postresection therapy, in days
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
               second_therapy_type
              </td>
              <td class="element-display-name">
               Second Therapy Type
              </td>
              <td class="element-description">
               <small>
                Type of second postresection therapy
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#specimen.0.specimen_donor_treatment_type.v1">
                  specimen.0.specimen_donor_treatment_type.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl class="codes-list" title="specimen.0.specimen_donor_treatment_type.v1">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   no treatment
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   chemotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   radiation therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   combined chemo+radiation therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   immunotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   6
                  </small>
                 </dt>
                 <dd>
                  <small>
                   combined chemo+immunotherapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   7
                  </small>
                 </dt>
                 <dd>
                  <small>
                   surgery
                  </small>
                 </dd>
                 <dt>
                  <small>
                   8
                  </small>
                 </dt>
                 <dd>
                  <small>
                   other therapy
                  </small>
                 </dd>
                 <dt>
                  <small>
                   9
                  </small>
                 </dt>
                 <dd>
                  <small>
                   bone marrow transplant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   10
                  </small>
                 </dt>
                 <dd>
                  <small>
                   stem cell transplant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   11
                  </small>
                 </dt>
                 <dd>
                  <small>
                   monoclonal antibodies (for liquid tumours)
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
               second_therapy_response
              </td>
              <td class="element-display-name">
               Second Therapy Response
              </td>
              <td class="element-description">
               <small>
                What was the clinical effect of the second postresection therapy?
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#therapy.0.therapy_response.v1">
                  therapy.0.therapy_response.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="therapy.0.therapy_response.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   complete response
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   partial response
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   disease progression
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   stable disease
                  </small>
                 </dd>
                 <dt>
                  <small>
                   5
                  </small>
                 </dt>
                 <dd>
                  <small>
                   unknown
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
                  Use this field to describe the clinical effect of the type of therapy described in &#39;second_therapy_type&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               second_therapy_therapeutic_intent
              </td>
              <td class="element-display-name">
               Second Therapy Therapeutic Intent
              </td>
              <td class="element-description">
               <small>
                The therapeutic intent of the second postresection therapy
               </small>
              </td>
              <td class="datatype cv">
               CV
              </td>
              <td class="codes inplace">
               <div class="link">
                <small>
                 [
                 <a href="#therapy.0.therapeutic_intent.v1">
                  therapy.0.therapeutic_intent.v1
                 </a>
                 ]
                </small>
               </div>
               <div class="list">
                <dl title="therapy.0.therapeutic_intent.v1" class="codes-list">
                 <dt>
                  <small>
                   1
                  </small>
                 </dt>
                 <dd>
                  <small>
                   not applicable
                  </small>
                 </dd>
                 <dt>
                  <small>
                   2
                  </small>
                 </dt>
                 <dd>
                  <small>
                   adjuvant
                  </small>
                 </dd>
                 <dt>
                  <small>
                   3
                  </small>
                 </dt>
                 <dd>
                  <small>
                   curative
                  </small>
                 </dd>
                 <dt>
                  <small>
                   4
                  </small>
                 </dt>
                 <dd>
                  <small>
                   palliative
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
                 <li style="font-size:10px">
                  Use this field to describe the therapeutic intent of the type of therapy described in &#39;second_therapy_type&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               other_therapy
              </td>
              <td class="element-display-name">
               Other Therapy
              </td>
              <td class="element-description">
               <small>
                Other postresection therapy
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
                 <li style="font-size:10px">
                  Use this field to describe other therapies if either &#39;first_therapy_type&#39; or &#39;second_therapy_type&#39; are specified as &#39;other therapy&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               other_therapy_response
              </td>
              <td class="element-display-name">
               Other Therapy Response
              </td>
              <td class="element-description">
               <small>
                What is the clinical effect of the postresection therapy
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
                 <li style="font-size:10px">
                  Use this field to describe the response to the other therapy described in &#39;other_therapy&#39;
                 </li>
                </ul>
                <p>
                </p>
               </small>
              </td>
             </tr>
             <tr class="required-element info pbi-avoid">
              <td class="element-name">
               therapy_notes
              </td>
              <td class="element-display-name">
               Therapy Notes
              </td>
              <td class="element-description">
               <small>
                Further description of therapy, such as dosing schedule.
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
          <p>
          </p>
          <div id="book-navigation-6310" class="book-navigation">
           <div class="page-links clear-block">
            <a href="/donor-family" class="page-previous" title="Go to previous page">
             ‹ Donor Family (family)
            </a>
            <a href="/dictionary" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/donor-surgery" class="page-next" title="Go to next page">
             Donor Surgery (surgery) ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-7015 -->
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

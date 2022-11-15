<h1 class="title">
 Donor Data File (donor) -v0.11c
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
       <div id="node-6837" class="node odd full-node node-type-book">
        <div class="inner">
         <div class="content clearfix">
          <div class="file">
           <div class="file-spec">
            <h2>
             File Type: &#39;Donor Data File (donor)&#39;
            </h2>
            <h3>
             File Key: &#39;donor&#39;
            </h3>
            <h3>
             File Name
             <a target="_blank" href="https://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#sum">
              Pattern
             </a>
             : &#39;^donor(\.[a-zA-Z0-9]+)?\.txt(?:\.gz|\.bz2)?$&#39;
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
                <br>
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
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                donor_sex
               </td>
               <td class="element-display-name">
                Donor Sex
               </td>
               <td class="element-description">
                <small>
                 Donor biological sex. &#39;Other&#39; has been removed from the controlled vocabulary due to identifiability concerns.
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#donor.0.donor_sex.v1">
                   donor.0.donor_sex.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="donor.0.donor_sex.v1" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    male
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    female
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
                donor_region_of_residence
               </td>
               <td class="element-display-name">
                Donor Region of Residence
               </td>
               <td class="element-description">
                <small>
                 Country, and optionally state or province code, but not city.
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
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                donor_vital_status
               </td>
               <td class="element-display-name">
                Donor Vital Status
               </td>
               <td class="element-description">
                <small>
                 Donor&#39;s last known vital status
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#donor.0.donor_vital_status.v1">
                   donor.0.donor_vital_status.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="donor.0.donor_vital_status.v1" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    alive
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    deceased
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
                disease_status_last_followup
               </td>
               <td class="element-display-name">
                Disease Status Last Followup
               </td>
               <td class="element-description">
                <small>
                 Donor&#39;s last known disease status.
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#donor.0.disease_status_last_followup.v1">
                   donor.0.disease_status_last_followup.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="donor.0.disease_status_last_followup.v1" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    complete remission
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    partial remission
                   </small>
                  </dd>
                  <dt>
                   <small>
                    3
                   </small>
                  </dt>
                  <dd>
                   <small>
                    progression
                   </small>
                  </dd>
                  <dt>
                   <small>
                    4
                   </small>
                  </dt>
                  <dd>
                   <small>
                    relapse
                   </small>
                  </dd>
                  <dt>
                   <small>
                    5
                   </small>
                  </dt>
                  <dd>
                   <small>
                    stable
                   </small>
                  </dd>
                  <dt>
                   <small>
                    6
                   </small>
                  </dt>
                  <dd>
                   <small>
                    no evidence of disease
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
                donor_relapse_type
               </td>
               <td class="element-display-name">
                Donor Relapse Type
               </td>
               <td class="element-description">
                <small>
                 Type of relapse or progression (for liquid tumours), if applicable
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#donor.0.donor_relapse_type.v1">
                   donor.0.donor_relapse_type.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="donor.0.donor_relapse_type.v1" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    local recurrence
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    distant recurrence/metastasis
                   </small>
                  </dd>
                  <dt>
                   <small>
                    3
                   </small>
                  </dt>
                  <dd>
                   <small>
                    progression (liquid tumours)
                   </small>
                  </dd>
                  <dt>
                   <small>
                    4
                   </small>
                  </dt>
                  <dd>
                   <small>
                    local recurrence and distant metastasis
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
                donor_age_at_diagnosis
               </td>
               <td class="element-display-name">
                Donor Age at Diagnosis
               </td>
               <td class="element-description">
                <small>
                 Age at primary diagnosis.
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
                donor_age_at_enrollment
               </td>
               <td class="element-display-name">
                Donor Age at Enrollment
               </td>
               <td class="element-description">
                <small>
                 Age at which first specimen was collected.
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
                donor_age_at_last_followup
               </td>
               <td class="element-display-name">
                Donor Age at Last Followup
               </td>
               <td class="element-description">
                <small>
                 Age at last followup
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
                donor_relapse_interval
               </td>
               <td class="element-display-name">
                Donor Relapse Interval
               </td>
               <td class="element-description">
                <small>
                 If donor was clinically disease free following primary therapy and relapse or progression (for liquid tumours) occurred, length of disease free interval, in days.
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
                donor_diagnosis_icd10
               </td>
               <td class="element-display-name">
                Donor Diagnosis ICD-10
               </td>
               <td class="element-description">
                <small>
                 ICD-10 diagnostic code
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
                donor_tumour_staging_system_at_diagnosis
               </td>
               <td class="element-display-name">
                Donor Tumour Staging System at Diagnosis
               </td>
               <td class="element-description">
                <small>
                 Clinical staging system used at time of diagnosis, if determined. Note that this is supplementary to specimen&#39;s pathological staging.
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
                donor_tumour_stage_at_diagnosis
               </td>
               <td class="element-display-name">
                Donor Tumour Stage at Diagnosis
               </td>
               <td class="element-description">
                <small>
                 Stage at diagnosis using indicated staging system. Note that this is supplementary to specimen&#39;s pathological staging.
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
                donor_tumour_stage_at_diagnosis_supplemental
               </td>
               <td class="element-display-name">
                Donor Tumour Stage at Diagnosis Supplemental
               </td>
               <td class="element-description">
                <small>
                 Optional additional staging provided as a comma-delimited list of &#39;staging system:stage&#39;
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
                donor_survival_time
               </td>
               <td class="element-display-name">
                Donor Survival Time
               </td>
               <td class="element-description">
                <small>
                 How long has donor survived since primary diagnosis, in days. If source data was collected in months, use a multiplier value of &#39;30.44&#39; to convert value to days when preparing submission.
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
                donor_interval_of_last_followup
               </td>
               <td class="element-display-name">
                Donor Interval of Last Followup
               </td>
               <td class="element-description">
                <small>
                 Interval from primary diagnosis to last followup date. ICGC requests that patients be followed up every 6 months while alive.
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
              <tr class="deprecated-element warning pbi-avoid">
               <td class="element-name">
                donor_notes
               </td>
               <td class="element-display-name">
                Donor Notes
               </td>
               <td class="element-description">
                <small>
                 Free text notes concerning donor
                </small>
               </td>
               <td class="datatype text">
                TEXT
               </td>
               <td class="codes na">
                N/A
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
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                prior_malignancy
               </td>
               <td class="element-display-name">
                Prior Malignancy
               </td>
               <td class="element-description">
                <small>
                 Prior malignancy affecting patient.
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#donor.0.prior_malignancy.v1">
                   donor.0.prior_malignancy.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl class="codes-list" title="donor.0.prior_malignancy.v1">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    yes
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    no
                   </small>
                  </dd>
                  <dt>
                   <small>
                    3
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
                 </ul>
                 <p>
                 </p>
                </small>
               </td>
              </tr>
              <tr class="required-element info pbi-avoid">
               <td class="element-name">
                cancer_type_prior_malignancy
               </td>
               <td class="element-display-name">
                Cancer Type Prior Malignancy
               </td>
               <td class="element-description">
                <small>
                 ICD-10 diagnostic code for type of cancer in a prior malignancy.
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
                cancer_history_first_degree_relative
               </td>
               <td class="element-display-name">
                Cancer History First Degree Relative
               </td>
               <td class="element-description">
                <small>
                 Does patient have a first degree relative that has a history of cancer? If yes, please provide clincial information about relative&#39;s cancer history in Donor Family file
                </small>
               </td>
               <td class="datatype cv">
                CV
               </td>
               <td class="codes inplace">
                <div class="link">
                 <small>
                  [
                  <a href="#family.0.cancer_history_first_degree_relative.v1">
                   family.0.cancer_history_first_degree_relative.v1
                  </a>
                  ]
                 </small>
                </div>
                <div class="list">
                 <dl title="family.0.cancer_history_first_degree_relative.v1" class="codes-list">
                  <dt>
                   <small>
                    1
                   </small>
                  </dt>
                  <dd>
                   <small>
                    yes
                   </small>
                  </dd>
                  <dt>
                   <small>
                    2
                   </small>
                  </dt>
                  <dd>
                   <small>
                    no
                   </small>
                  </dd>
                  <dt>
                   <small>
                    3
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
            <a href="/specimen-data-file-specimen-pcawg-non-tcga-requirements" class="page-previous" title="Go to previous page">
             ‹ Specimen Data File (specimen) - PCAWG non-TCGA requirements
            </a>
            <a href="/dictionary-v11c-april-2015" class="page-up" title="Go to parent page">
             up
            </a>
            <a href="/specimen-data-file-specimen-11c" class="page-next" title="Go to next page">
             Specimen Data File (specimen) - v0.11c ›
            </a>
           </div>
          </div>
         </div>
        </div>
        <!-- /inner -->
        <!-- regular node view template HTML here -->
       </div>
       <!-- /node-6837 -->
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

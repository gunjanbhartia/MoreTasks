// import React from "react";
// import '../contactus.css';
// import ConsultationSection from '../ConsultationSection';

// const ContactUs = () => {
//     // return (
//     //     <main style={{ position: "relative", marginTop: "80px" }}>
//     //         <div className="form-container">
//     //             <div className="form-block w-form">
//     //                 <form
//     //                     id="email-form"
//     //                     name="email-form"
//     //                     data-name="Email Form"
//     //                     method="get"
//     //                     data-wf-page-id="64b260ed14f23de460866813"
//     //                     data-wf-element-id="91bf0cf6-1c92-ff26-344c-d9728586c857"
//     //                     aria-label="Email Form"
//     //                 >
//     //                     <div className="text-block-24">
//     //                         Join our email list for<br/> future updates.
//     //                     </div>
//     //                     <div className="flex-container">
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-2" className="field-label field-label-size">
//     //                                 First Name*<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-2" className="field-label-2 field-label-size">
//     //                                 Last Name*<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                     </div>
//     //                     <div className="flex-container">
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-3" className="field-label-3 field-label-size">
//     //                                 Email Address*<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-2" className="field-label-4 field-label-size">
//     //                                 Phone Number*<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                     </div>
//     //                     <div className="flex-container">
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-4" className="field-label-5 field-label-size">
//     //                                 Company<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                         <div className="form-input">
//     //                             <label htmlFor="field-2" className="field-label-6 field-label-size">
//     //                                 Country<br/>
//     //                             </label>
//     //                             <input
//     //                                 type="text"
//     //                                 className="text-field-2 w-input"
//     //                                 maxLength="256"
//     //                                 name="field-2"
//     //                                 data-name="Field 2"
//     //                                 required
//     //                             />
//     //                         </div>
//     //                     </div>
//     //                     <div style={{marginLeft: "30px"}}>
//     //                         <label htmlFor="field-3" className="field-label-7 field-label-size">
//     //                             Comment<br/>
//     //                             <textarea
//     //                                 maxLength="5000"
//     //                                 id="field-3"
//     //                                 name="field-3"
//     //                                 data-name="Field 3"
//     //                                 className="textarea w-input"
//     //                             ></textarea>
//     //                         </label>
//     //                     </div>
//     //                     <div className="div-block-50" style={{marginLeft: "30px"}}>
//     //                         <label className="w-checkbox checkbox-field">
//     //                             <input
//     //                                 type="checkbox"
//     //                                 id="Checkbox"
//     //                                 name="Checkbox"
//     //                                 data-name="Checkbox"
//     //                                 style={{ display: 'inline' }}
//     //                             />
//     //                             <span className="checkbox-label w-form-label" htmlFor="Checkbox">
//     //                                 By clicking, you agree to all the terms and conditions*<br/>
//     //                             </span>
//     //                         </label>
//     //                     </div>
//     //                     <input
//     //                         type="submit"
//     //                         value="Submit"
//     //                         data-wait="Please wait..."
//     //                         className="submit-button w-button"
//     //                     />
//     //                 </form>
//     //             </div>
//     //         </div>
//     //         <ConsultationSection />
//     //     </main>
//     // )
// }

// export default ContactUs





import React from "react";
// import '../contactus.css';

const ContactUs = () => {
  return (
    <div>
      {/* Embed the Mailchimp form HTML here */}
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css"></link>

        <div id="mc_embed_signup" style={{ background: '#fff', clear: 'left', font: '14px Helvetica, Arial, sans-serif', width: '800px', margin: '0px auto' }}>
          {/* Your Mailchimp form */}
          <form action="https://gmail.us10.list-manage.com/subscribe/post?u=3876bd6f5b77dba339d4ae0e2&id=a8c96cfd5d&v_id=5441&f_id=0016c7e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
              <h2 style={{marginTop: '106px'}}>Join our email list for future updates.</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                <input
                                    type="text"
                                    className="text-field-2 w-input"
                                    maxLength="256"
                                    name="field-2"
                                    data-name="Field 2"
                                    required
                                />
                {/* <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" /> */}
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label> <input
                                    type="text"
                                    className="required text"
                                    maxLength="256"
                                    name="FNAME"
                                    data-name="Field 2"
                                    required
                                />
                {/* <input type="text" name="FNAME" className="required text" id="mce-FNAME" required="" value="" /> */}
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label>
                <input
                                    type="text"
                                    className="required text"
                                    maxLength="256"
                                    name="LNAME"
                                    data-name="Field 2"
                                    required
                                />

                {/* <input type="text" name="LNAME" className="required text" id="mce-LNAME" required="" value="" /> */}
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-PHONE">Phone Number <span className="asterisk">*</span></label>
                <input
                                    type="text"
                                    className="REQ_CSS"
                                    maxLength="256"
                                    name="PHONE"
                                    data-name="Field 2"
                                    required
                                />
                {/* <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" value="" /> */}
              </div>
              <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                <div className="content__gdpr">
                  <label>Marketing Permissions</label>
                  <p>Please select all the ways you would like to hear from More Tasks:</p>
                  <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                    <label className="checkbox subfield" htmlFor="gdpr61385">
                      <input type="checkbox" id="gdpr_61385" name="gdpr[61385]" className="gdpr" value="Y" style={{display: 'inline', width:'auto'}}/>
                      <span>Email</span>
                    </label>
                  </fieldset>
                  <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                </div>
                <div className="content__gdprLegal">
                  <p>By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms">Learn more</a></p>
                </div>
              </div>
              <div hidden=""><input type="hidden" name="tags" value="14158293" /></div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_3876bd6f5b77dba339d4ae0e2_a8c96cfd5d" tabIndex="-1" value="" />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                  {/* <p style={{ margin: '0px auto' }}><a href="http://eepurl.com/iCRvXc" title="Mailchimp - email marketing made easy and fun"><span style={{ display: 'inline-block', background: 'transparent', borderRadius: '4px' }}></span></a></p> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

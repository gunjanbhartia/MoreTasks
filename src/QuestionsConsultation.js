// import React from 'react';
// import './ConsultationSection.css';

// function QuestionsConsultation() {
//   return (
//     <div className="qution-sec-container">
//       <div className="div-block-51 qution_sec">
//         <div className="div-block-52 div-block-54 div-block-55">
//           <div className="text-block-25" style={{fontSize:32}}>
//           Questions? Book a 30 minutes free consultation with us.
//           </div>
//           <a
//             href="https://calendly.com/moretasks-biz-sol"
//             className="button-3 w-button"
//           >
//             Get Started
//           </a>
//         </div>
//         <div className="div-block-53 w-clearfix" style={{backgroundSize: 'contain'}}>
//           <img
//             src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b43ace492cef83cce3902b_Rectangle%201824.png"
//             loading="lazy"
//             alt=""
//             className="image-15"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuestionsConsultation;








import React from 'react';
import './ConsultationSection.css';

function QuestionsConsultation() {
  return (
    <div className="qution-sec-container">
      <div className="div-block-51 qution_sec">
        <div className="div-block-52 div-block-54 div-block-55">
          <div className="text-block-25" style={{ fontSize: 32 }}>
            Questions? Book a 30 minutes free consultation with us.
          </div>
          <div className="input-button-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <a
              href="https://calendly.com/moretasks-biz-sol"
              className="button-3 w-button"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="div-block-53 w-clearfix image-container" style={{marginRight:'30px'}}>
          <img
            src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b43ace492cef83cce3902b_Rectangle%201824.png"
            loading="lazy"
            alt=""
            className="image-15-2"
          />
        </div>
      </div>
    </div>
  );
}

export default QuestionsConsultation;

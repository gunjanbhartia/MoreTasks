import React from 'react';
import './ConsultationSection.css';

function ConsultationSection() {
  return (
    <div className="qution-sec-container">
      <div className="div-block-51 qution_sec">
        <div className="div-block-52 div-block-54 div-block-55">
          <div className="text-block-25">
            Questions? Book a 30 minutes free consultation with us.
          </div>
          <a
            href="https://calendly.com/moretasks-biz-sol"
            className="button-3 w-button"
          >
            Schedule
          </a>
        </div>
        <div className="div-block-53 w-clearfix">
          <img
            src="https://moretasks.com/images/image-5.png"
            loading="lazy"
            alt=""
            className="image-15"
          />
        </div>
      </div>
    </div>
  );
}

export default ConsultationSection;

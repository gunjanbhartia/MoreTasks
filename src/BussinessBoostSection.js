import React from 'react';
import './bussinessboost.css';

function BussinessBoostSection() {
  return (
    <section className="bussiness_boost_section wf-section" id="bussiness_section">
      <div className="w-layout-blockcontainer container-10 w-container">
        <div className="w-layout-layout quick-stack-169 wf-layout-layout">
          <div className="w-layout-cell">
            <h2 class="headdding" style={{marginTop: '25px', marginBottom:'25px', marginRight:'30px'}}>Boost Your Business with <br/>MoreTasks’</h2>
            <div className="w-layout-layout quick-stack wf-layout-layout border-b">
              <div className="w-layout-cell">
                <h3 className="heading-2">Expertise and Experience</h3>
              </div>
            </div>
            <div className="w-layout-layout quick-stack wf-layout-layout border-b">
              <div className="w-layout-cell cell-10">
                <h3 className="heading-2">Customized Solutions</h3>
              </div>
            </div>
            <div className="w-layout-layout quick-stack wf-layout-layout border-b">
              <div className="w-layout-cell">
                <h3 className="heading-2">Commitment to Excellence</h3>
              </div>
            </div>
          </div>
          <div className="w-layout-cell">
            <img
              src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39da975703fdd98498ebf_Rectangle%201769.png"
              loading="lazy"
              sizes="(max-width: 571px) 100vw, 571px"
              srcSet="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39da975703fdd98498ebf_Rectangle%201769-p-500.png 500w, https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39da975703fdd98498ebf_Rectangle%201769.png 571w"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BussinessBoostSection;




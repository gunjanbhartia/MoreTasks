import React from 'react';
import './Person1.css'; 

function Person1() {
  return (
    <section className="section-3 wf-section person1">
      <div className="w-layout-blockcontainer-2 container-2 w-container person-div">
        <div className="div-block-33">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64afd7cdbdbaa98c24a06fdd/64b2e0bf0ad51dbf01d20029_sumit.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 168px, 28vw"
              srcSet="https://uploads-ssl.webflow.com/64afd7cdbdbaa98c24a06fdd/64b2e0bf0ad51dbf01d20029_sumit-p-500.jpg 500w, https://uploads-ssl.webflow.com/64afd7cdbdbaa98c24a06fdd/64b2e0bf0ad51dbf01d20029_sumit.jpg 512w"
              alt=""
              className="image-10-2"
            />
          </div>
          {/* <div className="div-block-35 mobi">
            <div className="text-block-15">Sumit Agarwal</div>
            <div className="text-block-16">Director &amp; Co-founder, Moretasks</div>
          </div> */}
        </div>
        <div className="div-block-34">
          <div className="div-block-35 desi">
            <div className="text-block-15">Sumit Agarwal</div>
            <div className="text-block-16">Director &amp; Co-founder, Moretasks</div>
          </div>
          <div className="div-block-36">
            <div className="text-block-17 person-detail">As the Director and Co-founder of Moretasks, he focuses on
              empowering employees to drive organizational success. Committed to cultivating a diverse and inclusive
              workforce, he champions equality and creates an environment where every employee feels valued and supported.
              By promoting professional growth and providing mentorship opportunities, he nurtures talent and cultivates
              future leaders within the organization.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Person1;

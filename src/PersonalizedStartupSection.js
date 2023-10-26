
import React from 'react';
import './personalizedsection.css';

function PersonalizedStartupSection() {
  return (
    <div className="personalized-startup-section">
    <section className="personalized-startup-card">
      <div className="w-layout-blockcontainer container-9 w-container">
        <div className="w-layout-layout quick-stack-158 wf-layout-layout">
          <div className="w-layout-cell cell-9">
            <img
              src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39d91917f2bbe27f7ee7c_Rectangle%206.png"
              loading="lazy"
              sizes="(max-width: 610px) 100vw, 610px"
              srcSet="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39d91917f2bbe27f7ee7c_Rectangle%206-p-500.png 500w, https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b39d91917f2bbe27f7ee7c_Rectangle%206.png 610w"
              alt=""
              className="startup-card-image"
            />
          </div>
          <div className="w-layout-cell cell-15">
            <div className="startup-card-content">
              <h2 className="heading-18">Unique solutions for your business</h2>
              <div className="w-layout-layout quick-stack-2 wf-layout-layout unik_box">
                <div className="w-layout-cell cell-2 media-w-10">
                  <img
                    src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b417009102618ca52a9e8a_Group%2056.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="w-layout-cell media-w-90">
                  <h4 className="heading-3 fs-21 mb-0 f-roboto">Result-Oriented Strategies</h4>
                  <div className="fs-18 f-roboto">
                    Our team develops data-driven strategies focused on achieving business goals.
                  </div>
                </div>
              </div>
              <div className="w-layout-layout quick-stack-2 wf-layout-layout mb-0 unik_box">
                <div className="w-layout-cell cell-2 media-w-10">
                  <img
                    src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b1879828e70462de3d418a_quality_checks.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="w-layout-cell media-w-90">
                  <h4 className="heading-3 fs-21 mb-0 f-roboto">Quality Checks</h4>
                  <div className="fs-18 f-roboto">We believe in delivering services that achieve tangible high-quality outcome.</div>
                </div>
              </div>
              <div className="w-layout-layout quick-stack-2 wf-layout-layout mb-0 unik_box">
                <div className="w-layout-cell cell-2 media-w-10">
                  <img
                    src="https://uploads-ssl.webflow.com/64b0dfc0bfa43fcb05d90402/64b187a7c5e00c957ce64b44_flexibility_and_scalability.svg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="w-layout-cell media-w-90">
                  <h4 className="heading-3 fs-21 mb-0 f-roboto">Flexibility and Scalability</h4>
                  <div className="fs-18 f-roboto">
                    Flexibility and Scalability allows organizations to stay agile and resilient in dynamic environments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default PersonalizedStartupSection;
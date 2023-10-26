import React from 'react';
import './Person1.css'; 

function Person3() {
  return (
    <section className="section-3 wf-section person1">
      <div className="w-layout-blockcontainer-2 container-2 w-container person-div">
        <div className="div-block-33">
          <div>
            <img
              src="https://uploads-ssl.webflow.com/64afd7cdbdbaa98c24a06fdd/64b2e0bfe025c96ef1c41832_jamshed.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 28vw, (max-width: 991px) 168px, 28vw"
              srcSet="https://uploads-ssl.webflow.com/64afd7cdbdbaa98c24a06fdd/64b2e0bfe025c96ef1c41832_jamshed.jpg 512w"
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
            <div className="text-block-15">Jamshed V Rajan</div>
            <div className="text-block-16">Content Director</div>
          </div>
          <div className="div-block-36">
            <div className="text-block-17 person-detail">With a razor-sharp wit and an innate understanding of the pulse of the market, our Content Director brings a fresh perspective to our brand's narrative. His ability to adapt to rapidly changing trends and effectively communicate with diverse audiences allows him to create captivating and share-worthy content.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Person3;

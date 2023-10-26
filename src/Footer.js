import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="div-block-6">
        <div className="w-layout-blockcontainer container-4 w-container">
          <div className="div-block-9 div-block-22 div-block-23 div-block-24">
            <div>
              <img src="https://moretasks.com/images/moretask-logo.webp" loading="lazy" width="263" alt="" className="image" />
            </div>
            <div>
              <div className="text-block-11">Accelerating your vision<br /> Driving your progress</div>
              <div className="text-block-12 uk-address">
                <strong>UK- </strong>International House, 24 Holborn Viaduct,<br />London, United Kingdom, EC1A 2BN
              </div>
              <div className="text-block-12">
                <strong>IN- </strong>Centrum Plaza, 409, 4th Floor, Golf Course Rd,<br />Sector 53, Gurugram, Haryana 122002
              </div>
              <div className="text-block-12">Moretasks, 2023.</div>
              <div className="div-block-30">
                <a href="https://www.youtube.com/@moretasksstory5915">
                  <img src="https://moretasks.com/images/Youtube.svg" loading="lazy" alt="" className="social-media youtube-icon" />
                </a>
                <a href="https://www.instagram.com/moretasksofficial">
                  <img src="https://moretasks.com/images/Instagram.svg" loading="lazy" alt="" className="social-media" />
                </a>
                <a href="https://www.facebook.com/moretasks">
                  <img src="https://moretasks.com/images/Facebook-circular-logo.svg" loading="lazy" alt="" className="social-media" />
                </a>
                {/* <a href=""><img src="images/Twitter.svg" loading="lazy" alt="" className="social-media" /></a> */}
              </div>
            </div>
          </div>
          <div className="div-block-8">
            <div className="pillarpagesdiv">
              <div className="upper-pillar-heading">Plans & Pricing</div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/product.html">Product</a></div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/contact.html">Contact</a></div>
            </div>
            <div className="pillarpagesdiv">
              <div className="upper-pillar-heading">Services</div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#business-operations">Business Operations</a></div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#e-commerce-services">E commerce Services</a></div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#data-operations">Data Operations</a></div>
            </div>
            <div className="pillarpagesdiv">
              <div className="upper-pillar-heading">Services</div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#customer-services">Customer Services</a></div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#digital-management">Digital Management</a></div>
              <div className="upper-pillar-content"><a href="https://moretasks.com/services.html#web-and-app-development">Web and App development</a></div>
            </div>
          </div>
        </div>
      </div>
<div className="div-block-7">
        <div className="w-layout-blockcontainer container-3 w-container">
          <div className="left">
            <div className="text-block-10">@ Moretasks Inc. All rights reserved.</div>
          </div>
          <div className="left right">
            <div className="text-block-10 right-pillar">
              <span className="footer-link"><a href="https://moretasks.com/terms-of-services.html">Terms of services</a></span>
              <span className="footer-link"><a href="https://moretasks.com/privacy-policy.html">Privacy Policy</a></span>
              <span className="footer-link"><a href="https://moretasks.com/cookies.html">Cookies</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
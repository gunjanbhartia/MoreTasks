// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import React from 'react';
// // import './WhoAreWe.css';

// // function WhoAreWe() {
// //   return (
// //     <div className="container">
// //       <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
// //         <div className="col-12 col-md-6 p-4 d-flex flex-column position-static">
// //           <h3 className="mb-0">Who are we?</h3>
// //           <p className="card-text mb-auto">We are your strategic catalyst, unlocking business potential through our specialized know-how and an unwavering commitment to surpass expectations.</p>

// //           <ul className="custom-list">
// //             <li className="list-item">Global Market Expert in Outsourcing and Offshoring</li>
// //             <li className="list-item">Drivers of Growth and Efficiency with Extensive Solutions</li>
// //             <li className="list-item">Trusted Partners for Sustainable Success</li>
// //           </ul>
// //         </div>
        
// //         <div className="col-12 col-md-6 d-none d-lg-block">
// //           <svg className="bd-placeholder-img" width="600" height="650" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
// //             <title>Placeholder</title>
// //             <rect width="100%" height="100%" fill="#55595c"></rect>
// //             <image href="https://moretasks.com/images/ldki.png" width="575"  />
// //           </svg>
// //         </div>
        
// //       </div>
      
// //     </div>
// //   );
// // }

// // export default WhoAreWe;












// // import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import './WhoAreWe.css';

// function WhoAreWe() {
//   return (
//     <div className="increased-height">
//     <div className="container" style={{ height: '80vh' }}>
//       <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{ height: '100%' }}>
//         <div className="col-12 col-md-6 p-4 d-flex flex-column position-static" style={{ height: '100%' }}>
//           <h3 className="mb-0">Who are we?</h3>
//           <p className="card-text mb-auto">We are your strategic catalyst, unlocking business potential through our specialized know-how and an unwavering commitment to surpass expectations.</p>
//           <ul className="custom-list">
//             <li className="list-item">Global Market Expert in Outsourcing and Offshoring</li>
//             <li className="list-item">Drivers of Growth and Efficiency with Extensive Solutions</li>
//             <li className="list-item">Trusted Partners for Sustainable Success</li>
//           </ul>
//           <div style={{ padding: '10px 20px' }}>
//             <a href="https://moretasks.com/about-us.html" className="button-primary-5 w-button f-roboto">Learn More</a>
//           </div>
//         </div>
//         <div className="col-12 col-md-6 d-none d-lg-block">
//            <svg className="bd-placeholder-img" width="600" height="650" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
//              <title>Placeholder</title>
//              <rect width="100%" height="100%" fill="#55595c"></rect>
//              <image href="https://moretasks.com/images/ldki.png" width="575"  />
//            </svg>
//          </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default WhoAreWe;









import React from 'react';
import './WhoAreWe.css';

function WhoAreWe() {
    return (
        <div className="hero-wrapper-3" style={{ marginTop: '-100px' }}>
        <div className="hero-card">
          <div className="hero-text" style={{marginRight: '0px'}}>
            <h2>Who are we?</h2>
            <p className="margin-bottom-24px-3">
            We are your strategic catalyst, unlocking business potential through our specialized know-how and an unwavering commitment to surpass expectations.
            </p>
            <ul className="custom-list list-inline">
             <li className="list-item">Global Market Expert in Outsourcing and Offshoring</li>
             <li className="list-item">Drivers of Growth and Efficiency with Extensive Solutions</li>
             <li className="list-item">Trusted Partners for Sustainable Success</li>
           </ul>
            <a href="https://moretasks.com/product.html" className="button-primary-5 w-button">
              Learn More
            </a>
             
          </div>
          <div className="hero-image">
            <img
              src="https://moretasks.com/images/ldki.png"
              loading="lazy"
              alt=""
              className="shadow-two-3"
            />
          </div>
        </div>
      </div>
    );
  }
  export default WhoAreWe;
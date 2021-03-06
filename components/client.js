import React from 'react';

import img1 from '../images/clients/1.png';
import img2 from '../images/clients/2.png';
import img3 from '../images/clients/3.png';
import img4 from '../images/clients/4.png';

function Client() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="client-images">
                <img
                  src={img1}
                  alt="logo-img"
                  className="mx-auto img-fluid d-block"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="client-images">
                <img
                  src={img2}
                  alt="logo-img"
                  className="mx-auto img-fluid d-block"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="client-images">
                <img
                  src={img3}
                  alt="logo-img"
                  className="mx-auto img-fluid d-block"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="client-images">
                <img
                  src={img4}
                  alt="logo-img"
                  className="mx-auto img-fluid d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;

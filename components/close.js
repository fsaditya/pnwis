import React from 'react';

function HomeIndex() {
  return (
    <section
      className="bg-home-agency"
      style={{
        background: 'url(' + `${require('../images/bg-home-agency.png')}` + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
        position: 'relative',
      }}
      id="home"
    >
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="agency-home-title text-center text-white mx-auto">
                  <p className="text-light f-18">REKRUTMEN TERBUKA</p>
                  <h1 className="display-4 mb-4">
                    PANITIA WISUDA AKBAR PKN STAN 2021
                  </h1>
                  <p className="text-light f-18">TELAH DITUTUP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIndex;

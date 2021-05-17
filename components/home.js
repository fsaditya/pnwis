import React from 'react';
import Modal from './modal';

function HomeIndex() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
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
    
      <Modal handleClose={handleClose} open={open} />
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
                  {/* <div className="container-button mt-5">
                    <span
                      role="button"
                      onClick={handleOpen}
                      className="pulse-button"
                    >
                      PENGUMUMAN
                    </span>
                  </div> */}
                  <br></br>
                  <br></br>
                  <div className="container-button mt-5 mx-auto" >
                  <div className="col-sm-6 mx-auto">
                  <a href="#departemen-panitia">
                    <span
                      role="button"
                      className="pulse-button"
                    >
                      DAFTAR
                    </span>
                    </a></div> 
                  </div>

                  <div className="watch-video mt-5" />
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

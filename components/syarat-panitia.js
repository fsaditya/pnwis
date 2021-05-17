import React from 'react';

function TugasPanita() {
  return (
    <>
      <section className="section" id="syarat-panitia">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  SYARAT
                </p>
                <h3>SYARAT PANITIA WISUDA</h3>
                {/* <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p> */}
              </div>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-lg-9">
              <div>
                <div className="pt-3">
                  <p className="text-muted">
                    <i className="mdi mdi-checkbox-marked-circle-outline mr-2 text-custom" />
                    Sehat secara jasmani maupun rohani.
                  </p>
                  <p className="text-muted">
                    <i className="mdi mdi-checkbox-marked-circle-outline mr-2 text-custom" />
                    Merupakan mahasiswa aktif PKN STAN Diploma III Reguler dan bukan merupakan mahasiswa tingkat akhir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TugasPanita;

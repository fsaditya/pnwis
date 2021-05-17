import React from 'react';

import iphone from '../images/iphone.png';

function Features() {
  return (
    <>
      <section className="section bg-light" id="fitur-siwi">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  FITUR
                </p>
                <h3>FITUR UTAMA SIWI 4.0</h3>
                <p className="text-muted mt-3">
                  Dantes remained confused and silent by this explanation of the
                  thoughts which had unconsciously been working in his mind, or
                  rather soul.
                </p>
              </div>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-lg-4">
              <div className="app-features-box app-border-right p-4 bg-white text-right">
                <div className="arrow-right" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-photo h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">PENDAFTARAN WISUDAWAN</h5>
                  <p className="text-muted mb-0">
                    Pendaftaran Wisudawan merupakan langkah awal calon wisudawan
                    untuk mendaftarkan diri dengan melakukan input sejumlah data
                    melalui SIWI.
                  </p>
                </div>
              </div>

              <div className="app-features-box app-border-right p-4 bg-white text-right mt-5">
                <div className="arrow-right" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-film h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">PEMBAYARAN PELUNASAN WISUDA</h5>
                  <p className="text-muted mb-0">
                    Tahap selanjutnya dalam Pembayaran Wisuda adalah Pelunasan
                    Pembayaran yang dilakukan melalui SIWI.{' '}
                  </p>
                </div>
              </div>

              <div className="app-features-box app-border-right p-4 bg-white text-right mt-5">
                <div className="arrow-right" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-film h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">PENGAJUAN KERINGANAN</h5>
                  <p className="text-muted mb-0">
                    Diprioritaskan bagi wisudawan yang kurang mampu untuk
                    mengajukan keringanan Pembayaran Wisuda dengan syarat-syarat
                    yang berlaku.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src={iphone}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="app-features-box app-border-left p-4 bg-white">
                <div className="arrow-left" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-monitor h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">PEMBAYARAN DP WISUDA</h5>
                  <p className="text-muted mb-0">
                    Tahap pertama dalam melakukan Pembayaran Wisuda adalah
                    Pembayaran DP (Down Payment) yang dilakukan melalui SIWI.
                  </p>
                </div>
              </div>
              <div className="app-features-box app-border-left p-4 bg-white mt-5">
                <div className="arrow-left" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-notebook h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">INFORMASI WISUDAWAN</h5>
                  <p className="text-muted mb-0">
                    Berbagai macam informasi terkait Wisuda dapat diakses
                    melalui SIWI.{' '}
                  </p>
                </div>
              </div>

              <div className="app-features-box app-border-left p-4 bg-white mt-5">
                <div className="arrow-left" />
                <div className="app-features-icon mb-3">
                  <i className="pe-7s-notebook h1 text-custom" />
                </div>
                <div className="app-features-content">
                  <h5 className="f-18">PEMBELIAN EXTRA SEAT</h5>
                  <p className="text-muted mb-0">
                    Extra Seat merupakan kuota kursi tambahan yang ditujukan
                    bagi calon wisudawan yang menginginkan penambahan kuota
                    kursi normal yaitu 2 (dua) kursi dengan membeli kursi
                    tambahan.
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

export default Features;

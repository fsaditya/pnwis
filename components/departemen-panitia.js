import React, { useState } from 'react';

import acara from '../images/Acara.jpg';
import dkv from '../images/DKV.jpg';
import regis from '../images/Registrasi.jpg';
import gizi from '../images/Gizi.jpg';
import sekre from '../images/Sekretariat.jpg';
import keuangan from '../images/Keuangan.jpg';
import logistik from '../images/Logistik.jpg';
import mc from '../images/MC.jpg';
import padus from '../images/Padus.jpg';
import propang from '../images/Propang.jpg';


import data from '../data/deskripsi.json';

import Modal from './modal';

function DepartemenPanitia() {
  const [open, setOpen] = useState(false);
  const [bidang, setBidang] = useState({
    url: '',
    name: '',
    desc: '',
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = departemen => {
    setOpen(true);
    setBidang(data[departemen]);
  };

  return (
    <>
      <Modal handleClose={handleClose} data={bidang} open={open} />
      <section className="section" id="departemen-panitia">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  BIDANG
                </p>
                <h3>BIDANG PANITIA WISUDA </h3>
              </div>
            </div>
          </div>
          <div className="agency-about-big-frame">
          <div className="row vertical-content mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('keuangan')}
                  >
                    <img
                      src={keuangan}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Keuangan</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('sekre')}
                  >
                    <img
                      src={sekre}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Sekretariat</h5>
                      <p> </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('acara')}
                  >
                    <img
                      src={acara}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Acara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row vertical-content mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('dkv')}
                  >
                    <img
                      src={dkv}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>DKV</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('logistik')}
                  >
                    <img
                      src={logistik}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Logistik</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('gizi')}
                  >
                    <img
                      src={gizi}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Gizi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row vertical-content mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('registrasi')}
                  >
                    <img
                      src={regis}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Registrasi</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('propang')}
                  >
                    <img
                      src={propang}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Subbidang</h5>
                      <p>Protokoler dan Panggung</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('mc')}
                  >
                    <img
                      src={mc}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Subbidang</h5>
                      <p>Master of Ceremony</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row vertical-content mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('padus')}
                  >
                    <img
                      src={padus}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Subbidang</h5>
                      <p>Paduan Suara (Instrumentalis)</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4">
                  <div
                    className="agency-about-img mt-4"
                    onClick={() => handleOpen('pbj')}
                  >
                    <img
                      src={pbj}
                      alt=""
                      className="img-fluid mx-auto d-block"
                      loading="lazy"
                    />
                    <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Pengadaan Barang dan Jasa</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DepartemenPanitia;

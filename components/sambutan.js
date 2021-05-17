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

function Sambutan() {


  return (
    <>
      <section className="section bg-light" id="sambutan">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  SAMBUTAN
                </p>
                <h3>SAMBUTAN KORORDINATOR DAN WAKIL KOORDINATOR PELAKSANA WISUDA AKBAR PKN STAN 2021 </h3>
              </div>
            </div>
          </div>
          <div className="row vertical-content mt-4">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div
                    className="agency-about-frame"
                  >
                    <iframe className="col-lg-12" height="300"
                    src="https://www.youtube.com/embed/EHfmaVLcD_g" 
                    title="Sambutan Koordinator dan Wakil Koordinator Pelaksana Wisuda Akbar PKN STAN 2021" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    {/* <div className="agency-about-img-desc text-center copyright">
                      <h5 className="mt-3 f-17">Bidang</h5>
                      <p>Keuangan</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sambutan;

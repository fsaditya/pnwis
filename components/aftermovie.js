import React from 'react';
import Slider from 'react-slick';

import swipe1 from '../images/swipe-1.JPG';
import swipe3 from '../images/swipe-3.JPG';
import swipe4 from '../images/swipe-4.JPG';
import swipe6 from '../images/swipe-6.JPG';
import swipe7 from '../images/swipe-7.JPG';


// Modal Video

function AfterMovie() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 7000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section bg-light" id="dokumentasi">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  DOKUMENTASI
                </p>
                <h3>DOKUMENTASI WISUDA AKBAR</h3>
                <p className="text-muted mt-3">
                  Dokumentasi Wisuda Akbar Politeknik Keuangan Negara STAN
                  menampilkan prosesi-prosesi nan khidmat.
                </p>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            <div>
              <div className="startup-about-img">
                <img
                  src={swipe1}
                  alt=""
                  className="img-fluid img-thumbnail mx-auto d-block"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="startup-about-img">
                <img
                  src={swipe3}
                  alt=""
                  className="img-fluid img-thumbnail mx-auto d-block"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="startup-about-img">
                <img
                  src={swipe4}
                  alt=""
                  className="img-fluid img-thumbnail mx-auto d-block"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="startup-about-img">
                <img
                  src={swipe6}
                  alt=""
                  className="img-fluid img-thumbnail mx-auto d-block"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="startup-about-img">
                <img
                  src={swipe7}
                  alt=""
                  className="img-fluid img-thumbnail mx-auto d-block"
                  loading="lazy"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default AfterMovie;

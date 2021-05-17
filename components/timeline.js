import React from 'react';

function Timeline() {
  return (
    <>
      <section className="section bg-light" id="dokumentasi">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="title text-center mb-5">
                <p className="text-uppercase text-muted mb-2 f-13 subtitle">
                  JADWAL
                </p>
                <h3>JADWAL SELEKSI</h3>
                <p className="text-muted mt-3">
                  Jadwal Seleksi Panitia Wisuda Akbar Politeknik Keuangan Negara
                  STAN.
                </p>
              </div>
            </div>
          </div>
          <div className="row vertical-content">
            <div className="col-lg-9">
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>17 Mei 2021 10:00 WIB</span>
                  </div>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">Pembukaan Pendaftaran</h3>
                    <p>
                      Portal Pendaftaran Rekrutmen Terbuka Panitia Wisuda Akbar
                      Politeknik Keuangan Negara STAN 2021 telah resmi dibuka,
                      peserta dipersilakan untuk mengisi form yang telah
                      disediakan.
                    </p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>17 Mei - 29 Mei 2021 21:00 WIB</span>
                  </div>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">Periode Pendaftaran</h3>
                    <p>
                      Peserta diperkenankan mengisi form yang telah tersedia
                      dalam jangka waktu 17 - 29 Mei 2021 sampai dengan pukul
                      21:00 WIB
                    </p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>29 Mei 2021 21:00 WIB</span>
                  </div>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">Penutupan Pendaftaran</h3>
                    <p>
                      Portal Pendaftaran Rekrutmen Terbuka Panitia Wisuda Akbar
                      Politeknik Keuangan Negara STAN 2021 telah ditutup.
                      Peserta tidak diperkenankan untuk mendaftar.
                    </p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>14 Juni 2021 - 20 Juni 2021</span>
                  </div>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">Seleksi dan Wawancara</h3>
                    <p>
                    Peserta dapat memilih 1 (satu) diantara 7 hari Seleksi dan Wawancara dengan hadir pada waktu yang akan diinformasikan lebih lanjut melalui akun media sosial resmi Wisuda Akbar Politeknik Keuangan Negara STAN 2021.
                    </p>
                  </div>
                </li>
                <li className="timeline-item">
                  <div className="timeline-info">
                    <span>26 Juni 2021</span>
                  </div>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h3 className="timeline-title">Pengumuman Hasil Seleksi</h3>
                    <p>
                      Pengumuman Hasil Seleksi dapat dilihat melalui Situs Web
                      Resmi Wisuda Politeknik Keuangan Negara STAN 2021.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;

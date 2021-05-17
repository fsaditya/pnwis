import React, { useEffect } from 'react';
import Head from 'next/head';

// Layouts
import Header from '../Layouts/HeaderApp';
import Footer from '../Layouts/footer';

// Shared
import DepartemenPanitia from '../components/departemen-panitia';
import HomeIndex from '../components/home';
import Aftermovie from '../components/aftermovie';

// App
import AboutPanitia from '../components/about-siwi';
import Sambutan from '../components/sambutan';
import TugasPanitia from '../components/tugas-panitia';
import SyaratPanitia from '../components/syarat-panitia';
import Timeline from '../components/timeline';

function Home() {
  useEffect(() => {
    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Situs Web Resmi Wisuda PKN STAN" />
        <meta
          name="keywords"
          content="wisudapknstan.id, biaya wisuda pkn stan, instagram wisuda pkn stan, live wisuda pkn stan, wisuda pkn stan oktober 2018, panitia wisuda pkn stan, wisuda pkn stan siwi, siwi.wisuda pkn stan, biaya wisuda stan, wisuda pkn stan 2019, live streaming wisuda pkn stan, wisuda pkn stan 18 oktober 2018, siwi.wisuda pkn stan.id wisuda pkn stan, siwi wisuda pkn stan, wisuda stan, berapa biaya wisuda, jadwal wisuda pkn stan 2019, wisuda akbar pkn stan 2019, wisuda pkn stan 2018, wisuda akbar pkn stan 2018, wisuda akbar pkn stan, jadwal wisuda pkn stan 2018, video wisuda pkn stan 2018, wisuda stan 2021, wisuda stanford university, wisuda stan 2019, wisuda stan 2018, wisuda stan 18 oktober 2018, wisuda stan oktober 2018, wisuda stan 2016, wisuda stan bea cukai, wisuda akbar stan 2019, wisuda akbar stan 2018, baju wisuda stan, wisuda d1 stan, wisuda d1 stan 2018, gedung wisuda stan, jadwal wisuda stan 2019, jadwal wisuda stan 2018, wisuda stan september 2019, siwi wisuda stan, setelah wisuda stan, wisudawan terbaik stan 2017, wisudawan terbaik stan 2018, tempat wisuda stan 2019, tempat wisuda stan 2018, berapa biaya wisuda di ut, berapa biaya untuk wisuda, berapa rata rata biaya wisuda, biaya wisuda biasanya berapa, berapa harga foto wisuda, biaya wisuda ui, biaya wisuda ui 2019, berapa harga kalung wisuda, berapa biaya wisuda s1, berapa harga toga wisuda, wisudawan terbaik pkn stan 2018"
        />
        <title>
          REKRUTMEN TERBUKA PANITIA WISUDA AKBAR PKN STAN 2021 | Situs Web Resmi
          Wisuda PKN STAN
        </title>

        {/* ANDROID */}
        <meta name="theme-color" content="white" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* IOS */}
        <meta name="apple-mobile-web-app-title" content="WISUDA AKBAR 2021" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Pinned Sites */}
        <meta name="application-name" content="Application Name" />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />
        {/* Tap highlighting */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* UC Mobile Browser */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* Disable night mode for this page */}
        <meta name="nightmode" content="enable/disable" />

        {/* Layout mode */}
        <meta name="layoutmode" content="fitscreen/standard" />

        {/* imagemode - show image even in text only mode */}
        <meta name="imagemode" content="force" />

        {/* Orientation */}
        <meta name="screen-orientation" content="portrait" />

        {/* Main Link Tags */}
        <link href="favicon-16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="favicon-32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="favicon-96.png" rel="icon" type="image/png" sizes="96X96" />

        {/* iOS */}
        <link href="apple-icon" rel="apple-touch-icon" />
        <link
          href="apple-icon-76x76.png"
          rel="apple-touch-icon"
          sizes="76x76"
        />
        <link
          href="apple-icon-120x120.png"
          rel="apple-touch-icon"
          sizes="120x120"
        />
        <link
          href="apple-icon-152x152.png"
          rel="apple-touch-icon"
          sizes="152x152"
        />

        {/* Android */}
        <link href="android-icon-192x192.png" rel="icon" sizes="192x192" />
        <link href="android-icon-144x144.png" rel="icon" sizes="144x144" />

        {/* Manifest.json */}
        <link href="manifest.json" rel="manifest" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      {/*  Header */}
      <Header />

      {/* Home Section */}
      <HomeIndex />

      {/* About Panwis */}
      <AboutPanitia />

      {/* Sambutan Kor Wakor*/}
      <Sambutan />
      
      {/* Tugas Panitia */}
      <TugasPanitia />

      {/* Syarat Pendaftaran */}
      <SyaratPanitia />

      {/* After Movie dan Dokumentasi */}
      <Aftermovie />

      {/* Timeline */}
      <Timeline />

      {/* Departemen Panitia */}
      <DepartemenPanitia />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;

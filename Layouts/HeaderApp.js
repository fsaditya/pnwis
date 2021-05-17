import React, { useState, useEffect } from 'react';
import ScrollspyNav from './Scrollspy';

import logoLight from '../images/logo-light.png';
import logoDark from '../images/logo-gold.png';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleHeader = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('nav-bar').classList.add('nav-sticky');
    } else {
      document.getElementById('nav-bar').classList.remove('nav-sticky');
    }
  };

  useEffect(() => {
    document.body.classList = '';
    window.addEventListener('scroll', scrollNavigation, true);
    return () => {
      window.removeEventListener('scroll', scrollNavigation, true);
    };
  }, []);

  return (
    <>
      <div id="is-sticky">
        <nav
          id="nav-bar"
          className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
        >
          <div className="container">
            <a href="/" className="logo text-uppercase">
              <>
                <img
                  src={logoLight}
                  alt=""
                  className="logo-light"
                  height="60"
                />
                <img src={logoDark} alt="" className="logo-dark" height="60" />
              </>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleHeader}
            >
              <i className="mdi mdi-menu" />
            </button>
            <div
              className={
                isOpenMenu
                  ? 'collapse navbar-collapse show'
                  : 'collapse navbar-collapse'
              }
              id="navbarCollapse"
            >
              <ScrollspyNav
                scrollTargetIds={[
                  'home',
                  'about-siwi',
                  'dokumentasi',
                  'departemen-panitia',
                ]}
                activeNavClass="active"
                scrollDuration="800"
                headerBackground="true"
                className={
                  isOpenMenu
                    ? 'navbar-nav ml-0 float-left'
                    : 'navbar-nav   ml-auto navbar-center'
                }
              >
                <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                  <li className="nav-item active">
                    <a href="#home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#sambutan" className="nav-link">
                      Sambutan
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about-siwi" className="nav-link">
                      Tentang Wisuda
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#dokumentasi" className="nav-link">
                      Dokumentasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#departemen-panitia" className="nav-link">
                      Bidang Panitia
                    </a>
                  </li>
                </ul>
              </ScrollspyNav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import Link from 'next/link';
import ScrollUpButton from 'react-scroll-up-button';

// import '../../css/pe-icon-7.css';

function Footer() {
  return (
    <>
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <h3 className="mb-4 footer-list-title f-17">
                  © DKV WISUDA AKBAR PKN STAN 2021
                </h3>
                <ul className="footer-icons list-inline mb-4">
                  <li className="list-inline-item">
                    <a
                      href="https://www.twitter.com/wisudapknstan"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="mdi mdi-twitter copyright" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/wisudapknstan"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="mdi mdi-instagram copyright" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://line.me/R/ti/p/%40wisudapknstan"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="mdi mdi-forum copyright" />
                    </a>
                  </li>
                </ul>
                {/* <p className="copyright mt-3">
                  {new Date().getFullYear()} © DKV WISUDA AKBAR PKN STAN 2021
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollUpButton
        style={{
          width: '30px',
          height: '30px',
          position: 'fixed',
          bottom: '10px',
          right: '20px',
          padding: '5px',
          textAlign: 'center',
          zIndex: '10000',
          borderRadius: '10px',
          backgroundColor: '#a77b4d',
        }}
      />
    </>
  );
}

export default Footer;

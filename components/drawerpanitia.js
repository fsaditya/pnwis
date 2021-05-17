import React from 'react';
import { Drawer, Typography, Button, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#611E2F'),
    backgroundColor: '#a77b4d',
    padding: '10px 40px',
    margin: '0 auto',
    '&:hover': {
      backgroundColor: '#a77b4d',
    },
  },
}))(Button);

const CustomDrawer = withStyles(theme => ({
  paperAnchorBottom: {
    borderRadius: '50px 50px 0 0',
  },
}))(Drawer);

function DrawerKadep({ open, onClose }) {
  const { pathname } = useRouter();

  return (
    <CustomDrawer
      anchor="bottom"
      open={open}
      style={{ borderRadius: '30px 30px 0px 0px' }}
    >
      <Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <Typography variant="body1">Ketentuan Pendaftaran Panitia:</Typography>
        <ol type="1">
          <li>
            <Typography variant="subtitle2">
              Mengunduh formulir CV yang terdapat di laman{' '}
              <a
                href="https://cv.wisudapknstan.id"
                rel="noreferrer noopener"
                target="_blank"
              >
                cv.wisudapknstan.id
              </a>
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle2">
              Mengisi dan melengkapi formulir pada situs web sesuai dengan
              bidang yang akan dipilih
              {/* {pathname === '/subbidang/propang' ? (
                <>
                  {' '}
                  dan Mengunggah video sesuai dengan ketentuan yang dapat
                  diakses{' '}
                  <a
                    href="https://drive.google.com/drive/u/4/folders/1--e-l9QVeT6-FG_A24tCbFWXi7eX4Nnu"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    disini
                  </a>
                </>
              ) : (
                ' '
              )} */}
            </Typography>
          </li>
          {pathname === '/subbidang/propang' ? (
            <li>
              <Typography variant="subtitle2">
                  Meyertakan tautan (link) video penugasan yang telah anda buat pada formuilir. 
                  Ketentuan video penugasan bisa dilihat pada laman
                  {' '}
                  <a
                    href="https://cv.wisudapknstan.id"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    videopenugasan.wisudapknstan.id
                  </a>
              </Typography>
            </li>
          ) : (
            ''
          )}
          <li>
            <Typography variant="subtitle2">
              Mengunggah formulir CV yang telah dilengkapi
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle2">
              Mengikuti wawancara sesuai dengan tanggal dan waktu yang akan
              ditentukan panitia
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle2">
              Wawancara akan dilakukan secara daring (<i>online</i>) melalui
              panggilan video (<i>video call</i>) dan pesan instan (
              <i>instant messaging</i>)
            </Typography>
          </li>
          {pathname === '/subbidang/paduansuara' ? (
            <li>
              <Typography variant="subtitle2">
                <b>
                  Subbidang Paduan Suara hanya membuka
                  pendaftaran khusus pemain instrumentalis
                </b>
              </Typography>
            </li>
          ) : (
            ''
          )}
        </ol>

        <Typography variant="body1"><b>
          Form hanya dapat diisi sekali dan tidak dapat dilakukan perubahan.
          Harap berhati-hati dalam melakukan pengisian. Klik tombol 'SETUJU' di
          bawah ini untuk menunjukkan bahwa Anda telah membaca dan memahami
          ketentuan di atas.</b>
        </Typography>
        <div style={{ textAlign: 'center', padding: '30px 0px 0px' }}>
          <ColorButton variant="outlined" onClick={() => onClose()}>
            SETUJU
          </ColorButton>
        </div>
      </Container>
    </CustomDrawer>
  );
}

export default DrawerKadep;

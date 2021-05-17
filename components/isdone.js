import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import successImg from '../images/undraw_sync_files_xb3r.png';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#fedfa2'),
    backgroundColor: '#a77b4d',
    padding: '10px 40px',
    margin: '0 auto',
    '&:hover': {
      backgroundColor: '#a77b4d',
    },
  },
}))(Button);

function isdone() {
  return (
    <>
      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <img alt="Sukses" src={successImg} style={{ maxWidth: '50%' }} />
      </div>
      <Typography align="center" variant="h5">
      <b>Tanggapan Anda telah direkam.</b> <br></br>Terima kasih telah mengikuti Rekrutmen Terbuka Panitia Wisuda Akbar Politeknik Keuangan Negara STAN. Tetap terhubung dengan kami untuk mengetahui informasi selanjutnya.
      </Typography>
      <div style={{ textAlign: 'center', padding: '20px 0px', color:'#f3f3f3' }}>
        <ColorButton onClick={() => Router.reload()}>Kembali</ColorButton>
      </div>
      <div style={{ paddingBottom: '130px' }} />
    </>
  );
}

export default isdone;

import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#a77b4d !important',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#a77b4d !important',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#a77b4d !important',
      },
      '&:hover fieldset': {
        borderColor: '#a77b4d !important',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a77b4d !important',
      },
    },
  },
})(TextField);

function Datadiri({ handleInput, data }) {
  const { motivasi, pengalaman, pengetahuan, swot, platform } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa motivasi anda untuk mendaftarkan diri menjadi Panitia Wisuda Akbar Politeknik Keuangan Negara STAN 2021 dan mengapa memilih Bidang Pengadaan Barang dan Jasa?"
            name="motivasi"
            defaultValue={motivasi}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            required
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Sebutkan pengalaman organisasi maupun kepanitiaan apa saja yang pernah anda ikuti? Apakah ada yang pernah berhubungan dengan Bidang Pengadaan Barang dan Jasa?"
            name="pengalaman"
            defaultValue={pengalaman}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa yang anda ketahui tentang pengadaan barang dan jasa?"
            name="pengetahuan"
            defaultValue={pengetahuan}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Jelaskan analisis SWOT dalam diri anda!"
            name="swot"
            defaultValue={swot}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Seberapa jauh komitmen anda dalam kepanitiaan mengingat ketidakpastian akibat adanya pandemik Covid-19? Sebutkan platform yang anda sarankan dalam melaksanakan koordinasi kepanitiaan!"
            name="platform"
            defaultValue={platform}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
            rows="3"
            multiline
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

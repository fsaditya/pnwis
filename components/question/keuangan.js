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
  const {
    ketahui,
    alasan,
    pengalaman,
    tugasfungsi,
    inovasi,
    kelayakan,
  } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa yang Anda ketahui mengenai acara Wisuda Akbar?"
            name="ketahui"
            defaultValue={ketahui}
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
            placeholder="Alasan mendaftar Panitia Wisuda Akbar Politeknik Keuangan Negara STAN 2021"
            name="alasan"
            defaultValue={alasan}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apakah Anda pernah menjadi seorang bendahara? Jika iya, ceritakan pengalaman Anda menjadi seorang Bendahara!"
            name="pengalaman"
            defaultValue={pengalaman}
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
            placeholder="Menurut pendapat Anda, bagaimana alur kerja terbaik bagi seorang Bendahara?"
            name="tugasfungsi"
            defaultValue={tugasfungsi}     
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
            placeholder="Inovasi apa yang akan Anda berikan untuk Bidang Keuangan?"
            name="inovasi"
            defaultValue={inovasi}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Berikan alasan mengapa Anda layak untuk dipilih sebagai Bendahara Wisuda Akbar PKN STAN 2021!"
            name="kelayakan"
            defaultValue={kelayakan}
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

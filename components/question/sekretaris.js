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
  const { alasan, ketahui, menarik, pengalaman, opini, mengapa } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa alasan Anda mendaftar Bidang Sekretariat Panitia Wisuda Akbar PKN STAN 2021?"
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
            placeholder="Apa yang Anda ketahui tentang sekretariat dalam kepanitiaan Wisuda Akbar PKN STAN?"
            name="ketahui"
            defaultValue={ketahui}
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
            placeholder="Menurut Anda hal menarik apa yang ada dalam bidang ini?"
            name="menarik"
            defaultValue={menarik}
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
            placeholder="Apakah Anda pernah menjadi seorang Sekretaris? Jika iya, ceritakan pengalaman Anda menjadi seorang Sekretaris!"
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
            placeholder="Jelaskan opinimu mengenai: a) Sekretaris yang ideal b) Team yang ideal!"
            name="opini"
            defaultValue={opini}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Berikan alasan mengapa Anda layak untuk dipilih sebagai Sekretaris Wisuda Akbar PKN STAN 2021!"
            name="mengapa"
            defaultValue={mengapa}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

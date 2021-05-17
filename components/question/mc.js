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
  const { alasan, pengalaman, caraMenghadapi, inovasi, mengapa } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa alasan Anda memilih subbidang Master of Ceremony?"
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
            placeholder="Sebutkan pengalaman Anda menjadi MC!"
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
            placeholder="Bagaimana cara Anda menghadapi perubahaan yang mendadak?"
            name="caraMenghadapi"
            defaultValue={caraMenghadapi}
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
            placeholder="Apa inovasi yang Anda miliki untuk subbidang Master of Ceremony tahun ini?"
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
            placeholder="Jelaskan tentang diri Anda secara singkat dan alasan mengapa Anda layak menjadi bagian dari Master of Ceremony Wisuda Akbar PKN STAN 2021!"
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

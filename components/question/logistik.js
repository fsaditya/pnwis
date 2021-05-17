import React from 'react';
import { Grid, TextField, FormControl, MenuItem } from '@material-ui/core';
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
    penawaran,
    kuisAtauVendor,
    rekan,
    nike,
    subbidang
  } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa yang kamu ketahui tentang Bidang Logistik di Wisuda Akbar PKN STAN 2021?"
            name="ketahui"
            defaultValue={ketahui}
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
            placeholder="Apa yang bisa kamu tawarkan untuk Bidang Logistik dan apa yang ingin kamu dapatkan dari menjadi panitia wisuda Bidang Logistik? "
            name="penawaran"
            defaultValue={penawaran}
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
            placeholder="Jika kamu harus bertemu dengan vendor malam ini, tetapi temannu baru saja menginfokan bahwa besok pagi kamu ada kuis bagaimana cara kamu mengatasinya? "
            name="kuisAtauVendor"
            defaultValue={kuisAtauVendor}
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
            placeholder="Misalnya kamu punya rekan yang kurang cekatan padahal yang pekerjaan yang diurusnya itu penting dan berhubungan dengan pekerjaanmu, apa yang akan kamu lakukan?"
            name="rekan"
            defaultValue={rekan}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Nike/adidas? pilih salah satu dan jelasin ya!"
            name="nike"
            defaultValue={nike}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Subbidang apa yang akan anda pilih? "
              defaultValue={subbidang}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'subbidang',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="event">Subbidang Event</MenuItem>
              <MenuItem value="pbj">Subbidang Pengadaan Barang dan Jasa</MenuItem>
              <MenuItem value="akomodasi">Subbidang Akomodasi dan Transportasi</MenuItem>
              <MenuItem value="keamanan">Subbdang Keamanan Ketertiban Kebersihan</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

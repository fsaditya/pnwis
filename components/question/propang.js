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
    alasan,
    ketahui,
    mengapa,
    bagian,
    tugas,
    tersenyum,
    melatih,
    polaHidup,
    linkYoutube,
    subbidang
  } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Alasan mendaftar Panitia Wisuda Akbar PKN STAN 2021 ?"
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
            placeholder="Apa yang kamu ketahui tentang Subbidang Protokoler dan Panggung?"
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
            placeholder="Mengapa kamu ingin menjadi bagian dari Subbidang Protokoler dan Panggung?"
            name="mengapa"
            defaultValue={mengapa}
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
            placeholder="Apa saja divisi dan masing-masing tugas dalam Subbidang Protokoler dan Panggung yang kamu ketahui?"
            name="tugas"
            defaultValue={tugas}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa bentuk komitmenmu dalam menjadi bagian dari Panitia Wisuda Akbar 2021 terutama Subbidang Protokoler dan Panggung?"
            name="bagian"
            defaultValue={bagian}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Dalam berapa jamkah kamu sanggup tersenyum?"
            name="tersenyum"
            defaultValue={tersenyum}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Bagaimana cara unik kamu untuk melatih senyummu agar tahan berjam-jam?"
            name="melatih"
            defaultValue={melatih}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Bagaimana pola hidup kamu saat ini ? (Aktivitas, Belajar, Makan)"
            name="polaHidup"
            defaultValue={polaHidup}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Divisi apa yang akan anda pilih? "
              defaultValue={subbidang}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'subbidang',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="panggung">Divisi Panggung</MenuItem>
              {/* <MenuItem value="protokolerwisudawan">Divisi Protokoler Wisudawan</MenuItem> */}
              <MenuItem value="protokolervip">Divisi Protokoler VVIP/VIP</MenuItem>
              <MenuItem value="protokolertamu">Divisi Tamu Undangan</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Sertakan tautan (link) video penugasan yang telah anda buat di sini. Ketentuan penugasan bisa dilihat pada laman videopenugasan.wisudapknstan.id (Pastikan Link yang disertakan dapat diakses panitia / terbuka)"
            name="linkYoutube"
            defaultValue={linkYoutube}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="5"
            multiline
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

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
  const { alasan, intensitas, respon, jobdesk, subbidang, software, tidur, karya, linkPortofolio } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Alasan Mendaftar Panitia Wisuda Akbar Politeknik Keuangan Negara STAN 2021"
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
            placeholder="Seberapa sering intensitas anda memegang media sosial (WhatsApp, line, Instagram dll)?"
            name="intensitas"
            defaultValue={intensitas}
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
            placeholder="Seberapa cepat respon anda dalam menanggapi job desk yang diberikan?"
            name="respon"
            defaultValue={respon}
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
            placeholder="Terkait waktu, kebiasan seperti apa dalam pengerjaan jobdesk terkait bidang yang anda pilih?"
            name="jobdesk"
            defaultValue={jobdesk}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Kebiasaan tidur jam berapa?"
            name="tidur"
            defaultValue={tidur}
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
            placeholder="Karya/kemampuan apa yang pernah anda lakukan terkait DKV? (Boleh menyertakan link maupun penjelasan)"
            name="karya"
            defaultValue={karya}
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
              label="Divisi apa yang akan anda pilih? "
              defaultValue={subbidang}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'subbidang',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="foto">Foto</MenuItem>
              <MenuItem value="video">Video</MenuItem>
              <MenuItem value="desain">Desain</MenuItem>
              <MenuItem value="animasi">Animasi</MenuItem>
              <MenuItem value="web">Web dan Sistem</MenuItem>
              <MenuItem value="kli">Komunikasi dan Layanan Informasi</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Software Apa yang Anda Kuasai? "
              defaultValue={software}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'software',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="Adobe Photoshop">Adobe Photoshop</MenuItem>
              <MenuItem value="Adobe Illustrator">Adobe Illustrator</MenuItem>
              <MenuItem value="Adobe Lightroom">Adobe Lightroom</MenuItem>
              <MenuItem value="Corel Draw">Corel Draw</MenuItem>
              <MenuItem value="Adobe After Effect">Adobe After Effect</MenuItem>
              <MenuItem value="Adobe Premier">Adobe Premier</MenuItem>
              <MenuItem value="Android Studio">Android Studio</MenuItem>
              <MenuItem value="Visual Studio Code">Visual Studio Code</MenuItem>
              <MenuItem value="Lainnya">Lainnya</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Sertakan tautan (link) portofolio Anda (Pastikan link yang disertakan dapat diakses panitia / terbuka)"
            name="linkPortofolio"
            defaultValue={linkPortofolio}
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

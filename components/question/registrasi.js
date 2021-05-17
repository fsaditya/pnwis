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
  const { motivasi, excel, kemampuan, inovasi, pengalaman, subbidang } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa motivasi Anda mendaftar Panitia Wisuda dan kenapa memilih Bidang Registrasi?"
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
            placeholder="Apakah Anda dapat mengoperasikan dan menguasai Microsoft Excel dan rumus-rumusnya? (Jika Iya, formula Microsoft Excel apa saja yang telah Anda kuasai?)"
            name="excel"
            defaultValue={excel}
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
            placeholder="Menurut Anda, kemampuan apa yang penting dan dibutuhkan untuk menjadi bagian dari Bidang Registrasi Wisuda Akbar Politeknik Keuangan Negara STAN 2021? Dan jelaskan mengapa kemampuan tersebut penting!"
            name="kemampuan"
            defaultValue={kemampuan}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa saja inovasi yang akan Anda berikan untuk Bidang Registrasi?"
            name="inovasi"
            defaultValue={inovasi}
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
            placeholder="Apa Anda punya pengalaman di bidang Liaison Officer (LO) atau sejenisnya? Jika pernah, apa dan bagaimana tugas LO yang kamu jalankan?"
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
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Subbidang apa yang akan Anda pilih? "
              defaultValue={subbidang}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'subbidang',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="komunikasi-publikasi">
                Subbidang Komunikasi dan Publikasi Informasi Wisuda
              </MenuItem>
              <MenuItem value="pendataan-updating">
                Subbidang Pendataan dan Updating
              </MenuItem>
              <MenuItem value="distribusi-atribut">
                Subbidang Pendistribusian Atribut Wisuda
              </MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

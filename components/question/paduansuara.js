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
  const { alatMusik, kelebihan, berapaLama, kesalahan, kesulitan } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Alat musik apa saja yang bisa Anda kuasai? Dan sudah berapa lama Anda mahir bermain alat musik tersebut?"
            name="alatMusik"
            defaultValue={alatMusik}
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
            placeholder="Apa kelebihan yang Anda punya saat bermain alat musik atau saat bermusik? "
            name="kelebihan"
            defaultValue={kelebihan}
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
            placeholder="Berapa lama waktu yang Anda butuhkan untuk mempelajari lagu baru? Apakah Anda harus memerlukan partitur atau bisa langsung mengikuti tanpa partitur?"
            name="berapaLama"
            defaultValue={berapaLama}
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
            placeholder="Menurut Anda apa jenis kesalahan yang paling sering dialami oleh pemain musik?"
            name="kesalahan"
            defaultValue={kesalahan}
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
            placeholder="Apa kesulitan dalam membuat aransemen lagu? Berapa waktu yang biasa Anda butuhkan untuk membuat aransemen lagu? (aransemen sederhana)"
            name="kesulitan"
            defaultValue={kesulitan}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
            rows="3"
            multiline
          />
        </Grid>
        {/* <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Sertakan tautan (link) video penugasan yang telah Anda buat di sini. Ketentuan penugasan bisa dilihat pada laman videopenugasan.wisudapknstan.id (Pastikan Link yang disertakan dapat diakses panitia / terbuka)"
            name="linkYoutube"
            defaultValue={linkYoutube}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid> */}
      </Grid>
    </>
  );
}

export default Datadiri;

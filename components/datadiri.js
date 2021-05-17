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
  const { nama, npm, kelas, prodi, idLine, noWhatsapp, email } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="Nama"
            name="nama"
            defaultValue={nama}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="NPM"
            name="npm"
            defaultValue={npm}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              label="Program Studi"
              defaultValue={prodi}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'prodi',
                id: 'age-native-simple',
                style: { textAlign: 'left !important' },
              }}
            >
              {/* <MenuItem value="D4AKUNAP">D IV AKUNTANSI ALIH PROGRAM</MenuItem>
              <MenuItem value="D4AKUNREG">D IV AKUNTANSI REGULER</MenuItem> */}
              <MenuItem value="D3AKUNREG">D III AKUNTANSI REGULER</MenuItem>
              {/* <MenuItem value="D3AKUNAP">D III AKUNTANSI ALIH PROGRAM</MenuItem> */}
              <MenuItem value="D3PAJAKREG">D III PAJAK REGULER</MenuItem>
              {/* <MenuItem value="D3PBBAP">
                D III PBB / PENILAI ALIH PROGRAM
              </MenuItem> */}
              <MenuItem value="D3PBBREG">D III PBB / PENILAI REGULER</MenuItem>
              {/* <MenuItem value="D3PAJAKAP">D III PAJAK ALIH PROGRAM</MenuItem> */}
              {/* <MenuItem value="D3BCAP">
                D III KEPABEANAN DAN CUKAI ALIH PROGRAM
              </MenuItem> */}
              <MenuItem value="D3BC">D III KEPABEANAN DAN CUKAI REGULER</MenuItem>
              <MenuItem value="D3KBN">D III KEBENDAHARAAN NEGARA REGULER</MenuItem>
              <MenuItem value="D3MANSET">D III MANAJEMEN ASET REGULER</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="Kelas"
            name="kelas"
            defaultValue={kelas}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="ID Line"
            name="idLine"
            defaultValue={idLine}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="Nomor Whatsapp"
            name="noWhatsapp"
            defaultValue={noWhatsapp}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            label="Email"
            name="email"
            defaultValue={email}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            required
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Datadiri;

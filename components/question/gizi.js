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
    motivasi,
    tugasfungsi,
    jenisNasiBox,
    jenisSnackBox,
    hargaNasiBox,
    hargaLayak,
    vendorNasiBox,
    pengadaan,
    pembagian,
    inovasi,
  } = data;
  return (
    <>
      <Grid container spacing={1} noValidate>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Apa yang menjadi dasar motivasi Anda untuk mendaftarkan diri sebagai panitia Wisuda Akbar Politeknik Keuangan Negara STAN dan mengapa Anda memilih bidang Gizi?"
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
            placeholder="Apa yang Anda ketahui tentang tugas dan fungsi bidang Gizi?"
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
            placeholder="Menurut Anda kriteria makanan seperti apa yang cocok untuk jenis nasi kotak?"
            name="jenisNasiBox"
            defaultValue={jenisNasiBox}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Menurut Anda kriteria makanan seperti apa yang cocok untuk jenis snack box?"
            name="jenisSnackBox"
            defaultValue={jenisSnackBox}
            onChange={e => handleInput(e.target.name, e.target.value)}
            margin="normal"
            rows="3"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <CssTextField
            fullWidth
            placeholder="Menurut Anda berapakah rentang harga yang sesuai untuk pengadaan nasi kotak dan snack box?"
            name="hargaNasiBox"
            defaultValue={hargaNasiBox}
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
            placeholder="Sebutkan rentang harga makanan dan minuman yang layak untuk diadakan dalam rangkaian acara Wisuda Akbar Politeknik Keuangan Negara STAN 2021 di sekitar kampus!"
            name="hargaLayak"
            defaultValue={hargaLayak}
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
            placeholder="Sebutkan vendor nasi kotak dan snack box yang ideal di sekitar kampus!"
            name="vendorNasiBox"
            defaultValue={vendorNasiBox}
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
            placeholder="Pilih salah satu yang paling efisien, efektif, dan ideal di antara pengadaan konsumsi dari vendor atau dari restoran bermerek pada saat hari H! Sebutkan alasannya!"
            name="pengadaan"
            defaultValue={pengadaan}
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
            placeholder="Menurut Anda bagaimanakah pembagian konsumsi yang layak untuk tiap golongan yang hadir?"
            name="pembagian"
            defaultValue={pembagian}
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
            placeholder="Inovasi apa saja yang akan anda lakukan jika nantinya diterima di Bidang Gizi?"
            name="inovasi"
            defaultValue={inovasi}
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

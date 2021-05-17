import React, { useCallback } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

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

function CV({ handleFile, handleInput, data }) {
  const { komitmen, bidangAlternatif, npm } = data;

  const [fileUpload, setfileUpload] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);

  const handleAcceptFile = useCallback(acceptedFiles => {
    const renamedAcceptedFiles = acceptedFiles.map(
      file =>
        new File([file], `${npm}_${file.name}`, {
          type: file.type,
        })
    );

    setisLoading(true);

    handleFile(renamedAcceptedFiles);

    setisLoading(false);
    setfileUpload(true);
  }, []);

  const handleRejectFile = useCallback(rejectedFiles => {
    return toast.error('Ukuran file terlalu besar', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#a77b4d',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#000000',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };

  const activeStyle = {
    borderColor: '#2196f3',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: 'application/pdf',
    maxSize: 4194304,
    onDropAccepted: handleAcceptFile,
    onDropRejected: handleRejectFile,
  });

  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  return (
    <>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Seberapa Besar Komitmen Anda? "
              defaultValue={komitmen}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'komitmen',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="50%">50%</MenuItem>
              <MenuItem value="60%">60%</MenuItem>
              <MenuItem value="70%">70%</MenuItem>
              <MenuItem value="80%">80%</MenuItem>
              <MenuItem value="90%">90%</MenuItem>
              <MenuItem value="100%">100%</MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl style={{ width: '100%' }}>
            <CssTextField
              select
              fullWidth
              label="Pilihan Bidang Kedua: "
              defaultValue={bidangAlternatif}
              onChange={e => handleInput(e.target.name, e.target.value)}
              inputProps={{
                name: 'bidangAlternatif',
                id: 'age-native-simple',
              }}
            >
              <MenuItem value="sekretariat">Sekretariat</MenuItem>
              <MenuItem value="keuangan">Bidang Keuangan</MenuItem>
              <MenuItem value="acara">Bidang Acara</MenuItem>
              <MenuItem value="registrasi">Bidang Registrasi</MenuItem>
              <MenuItem value="logistik">Bidang Logistik</MenuItem>
              {/* <MenuItem value="pbj">Bidang Pengadaan Barang dan Jasa</MenuItem> */}
              <MenuItem value="gizi">Bidang Gizi</MenuItem>
              <MenuItem value="propang">
                Subbidang Protokoler & Panggung
              </MenuItem>
              <MenuItem value="mc">Subbidang Master of Ceremony</MenuItem>
              <MenuItem value="paduansuara">
                Subbidang Paduan Suara (Instrumentalis)
              </MenuItem>
            </CssTextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography>Upload CV (maksimal 2MB dan format file .pdf)</Typography>
          <div
            className="container text-center mt-5"
            style={{ marginBottom: '300px' }}
          >
            {fileUpload ? (
              <Typography align="center">File Berhasil Disimpan</Typography>
            ) : (
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                {!isDragActive && 'Klik atau Drop disini untuk mengupload file'}
                {isDragActive && !isDragReject && 'Drop disini'}
                {isLoading && <CircularProgress />}
                {isDragReject && 'Format file yang diperbolehkan adalah .pdf'}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default CV;

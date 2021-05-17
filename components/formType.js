import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer } from 'react-toastify';
import DrawerPanitia from './drawerpanitia';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function SimpleContainer({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DrawerPanitia open={open} onClose={onClose} />
      <ToastContainer />
      <div
        style={{
          background:
            'url(' + `${require('../images/bg-home-agency.png')}` + ')',
          // backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: '100%',
          marginTop:'-50px',
          position: 'absolute',
        }}
      >
      </div>
    </>
  );
}

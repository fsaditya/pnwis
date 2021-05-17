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
      <div className="section bg-texture" 
        style={{
          background:'url(' + `${require('../images/texture-fix.png')}` + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: '100%',
          position: 'relative',
        }}
      >
      {/* <div
              style={{
                position:'absolute',
                top:'150px'
              }}
            > */}
        
        <Container
          component="main"
          maxWidth="sm"
          style={{ background: '#ffffff', padding: '30px', minHeight: '80vh',
                  borderRadius:'20px',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
        >
          <CssBaseline />
          <div className={classes.paper}>{children}</div>
        </Container>
        
      {/* </div> */}
      </div>
    </>
  );
}

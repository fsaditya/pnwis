import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          X
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({ handleClose, open, data }) {
  const Router = useRouter();
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {data?.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '56.25%',
              }}
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  border: '0',
                }}
                allowFullScreen="allowFullScreen"
                src={data?.url}
                allowtransparency="true"
                frameBorder="0"
                title="Pengumuman Panitia Wisuda Akbar PKN STAN 2021"
              />
            </div>
          </Typography>
            {data?.desc}
          <Typography align="justify" gutterBottom>
            
          </Typography>
        </DialogContent>
        <MuiDialogActions>
          <div className="btn-custom">
          <Button
            autoFocus
            onClick={() => Router.push(data?.webUrl)}
            color="#ffffff"
            variant="outlined"
          >
            DAFTAR
          </Button>
          </div>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}

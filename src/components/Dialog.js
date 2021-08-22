import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FolderList from './List'

export default function AlertDialog() {
  const skilss = ['Numeracy' ,'Digital engagement' ,'Teamwork' ,'Writing','Reading' ,'Learning'
    ,'Problem solving',
    'Oral communication',
    'Planning and organising',
    'Initiative and innovation']
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleShowJobs = () => {
    window.open("seek.com", "_blank")
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Evaluate Skills
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Skils Required"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <FolderList />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
          <Button onClick={handleShowJobs} color="primary" autoFocus>
            Show Jobs
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

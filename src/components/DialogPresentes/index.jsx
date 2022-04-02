import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import CheckTable from '../CheckTable';
import './styles.css';

const styles = (theme) => ({
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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function DialogPresentes({ setOpen, open }) {

  const handleClose = () => setOpen(false);

  return (
    <Dialog 
      onClose={handleClose}
      fullWidth={true} 
      maxWidth='md'
      open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Lista de Presentes
      </DialogTitle>

      <DialogContent>
        <p>
          <strong>Nosso endereço: </strong>
          Rua Tharsis e Paula, Nº 901, Casa 2. 
          Fazenda Caxias, Seropédica-RJ, 23895-175.
        </p>
        <CheckTable />
      </DialogContent>      
    </Dialog>
  );
}
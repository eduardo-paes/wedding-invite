import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './styles.css';

export default function DialogPix({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog 
      onClose={handleClose}
      fullWidth={true} 
      maxWidth='sm'
      open={open}>
      <DialogTitle>
        PIX
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Selecione abaixo o número de pessoas que virão com você para o evento. 
          Observe que cada convidado possui um número máximo de convites por família, portanto, confirme apenas a quantidade que irá precisar.
        </DialogContentText>

      </DialogContent>      
    </Dialog>
  );
}
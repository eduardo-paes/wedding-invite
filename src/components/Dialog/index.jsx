import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';

const SelectBox = () => {
  const [value, setValue] = React.useState('');
  const array = [1, 2, 3, 4, 5];

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  return (
    <FormControl fullWidth variant="filled">
        <InputLabel id="select-label">Nº de Convites</InputLabel>
        <Select
          labelId="select-label"
          fullWidth
          value={value}
          onChange={handleChange}
        >
          {
            array.map((row, index) => {
              return <MenuItem key={index} value={row}>{row}</MenuItem>
            })
          }
        </Select>
      </FormControl>
  )
}

const ConfirmButton = withStyles((theme) => ({
  root: {
    color: "#2A3554",
    backgroundColor: "#fff",
    // fontFamily: "EB Garamond, serif",
    fontWeight: 500,
    '&:hover': {
      backgroundColor: "#2A3554",
      color: "#fff",
    },
  },
}))(Button);

const CancelButton = withStyles((theme) => ({
  root: {
    color: "#c62a2a",
    backgroundColor: "#fff",
    // fontFamily: "EB Garamond, serif",
    fontWeight: 500,
    '&:hover': {
      backgroundColor: "#c62a2a",
      color: "#fff",
    },
  },
}))(Button);

export default function GeneralDialog({setOpen, open}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog 
      onClose={() => setOpen(false)} // noClose: caso não queira encerrar o diálogo ao clicar fora do mesmo
      fullWidth={true} 
      maxWidth='sm'
      open={open}>
      <DialogTitle styles="dialog_title">Confirmar Presença</DialogTitle>

        <DialogContent>
          <DialogContentText styles="dialog_text">
            Selecione abaixo o número de pessoas que virão com você para o evento. 
            Observe que cada convidado possui um número máximo de convites por família, portanto, confirme apenas a quantidade que irá precisar.
          </DialogContentText>
          <div>
            <SelectBox/>
          </div>
        </DialogContent>

        <DialogActions>
          <CancelButton styles="dialog_button" onClick={handleClose} color="secondary">
            Cancelar
          </CancelButton>
          <ConfirmButton styles="dialog_button" onClick={handleClose} color="primary">
            Confirmar
          </ConfirmButton>
        </DialogActions>
    </Dialog>
  );
}
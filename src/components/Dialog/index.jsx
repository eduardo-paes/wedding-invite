import React, { useState, useEffect } from 'react';
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
import api from '../../api'
import './styles.css';
import DenseTable from '../DenseTable';

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

export default function GeneralDialog({setOpen, open, convidado, setConvidado}) {
  const [array, setArray] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    convidado.confirmado = true;
    async function confirmarPresenca()
    {
      await api
        .AtualizarConvidado(convidado._id, convidado)
        .then(res => {
          console.log(res.data.message);
          setOpen(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
    confirmarPresenca();
  }

  const handleChange = (ev) => {
    setConvidado(prev => ({
      ...prev,
      quantidade: ev.target.value,
    }));
  };

  useEffect(() => {
    if (convidado !== undefined && array.length === 0) 
    {
      let newArray = [];
      for (let i = 1; i <= Number(convidado.quantidade); i++) {
        newArray.push(i);
      }
      setArray(newArray);
    }
    return () => {}
  }, [array.length, convidado])

  return (
    <Dialog 
      onClose={handleClose}
      fullWidth={true} 
      maxWidth='sm'
      open={open}>
      <DialogTitle>
        Confirmar Presença {convidado !== undefined ? "- " + convidado.nome : ""}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          Selecione abaixo o número de pessoas que virão com você para o evento. 
          Observe que cada convidado possui um número máximo de convites por família, portanto, confirme apenas a quantidade que irá precisar.
        </DialogContentText>

        <FormControl fullWidth variant="filled">
          <InputLabel id="select-label">Nº de Convites</InputLabel>
          <Select
            variant='filled'
            fullWidth
            labelId="select-label"
            value={convidado.quantidade}
            onChange={handleChange}
          >
            {
              array.map((row, index) => {
                return <MenuItem key={index} value={row}>{row}</MenuItem>
              })
            }
          </Select>
        </FormControl>

        <DialogContentText style={{ margin: "1rem 0 -0.3rem 0" }}>
          A fim de evitar aglomerações preferimos optar por deixar abaixo as opções de molho que acompanharão o almoço a ser servido: o prato principal será massa. 
          Ajude-nos indicando o molho de sua preferência e dos demais convidados confirmados.
        </DialogContentText>
        <DenseTable 
          convidado={convidado} 
          setConvidado={setConvidado} />
      </DialogContent>

      <DialogActions>
        <CancelButton onClick={handleClose} color="secondary">
          Cancelar
        </CancelButton>
        <ConfirmButton onClick={handleConfirm} color="primary">
          Confirmar
        </ConfirmButton>
      </DialogActions>
      
    </Dialog>
  );
}
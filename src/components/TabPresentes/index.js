import React, { useEffect, useState } from 'react'
import apis from '../../api';
import Table from 'react-bootstrap/Table'
import { sortTable } from '../../utils/sortTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormPresentes from '../FormPresentes';
import FormDialog from '../FormDialog';
import { Button, Grid } from '@mui/material';

export default function TabPresentes() {
  const [presentes, setPresentes] = useState([]);
  const [presente, setPresente] = useState({
    nome: "",
    url: "",
    adquirido: false
  });
  const [open, setOpen] = useState(false);
  const [dados, setDados] = useState({
    total: 0,
    adquiridos: 0
  });
  const heads = [ "Nome", "Adquirido?", "URL", "Ações"];

  async function getPresentes() {
    await apis.ListarPresentes()
      .then(res => {
        setPresentes(res.data.data);
        var data = {
          total: 0,
          adquiridos: 0
        };
        res.data.data.forEach(element => {
          if (!element.adquirido) element.adquirido = false;
          data.adquiridos += element.adquirido ? 1 : 0;
          data.total++;
        });
        setDados(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getPresentes();
  }, []);

  const handleClickOpen = (value) => {
    setOpen(true);
    setPresente(value);
  };

  const handleNewPresente = () => {
    setOpen(true);
    setPresente({
      nome: "",
      url: "",
      adquirido: false
    });
  }

  const handleSave = () => {
    async function savePresente () {
      if (presente._id !== undefined) {
        await apis
        .AtualizarPresente(presente._id, presente)
        .then(res => {
          alert(res.data.message);
          getPresentes();
        })
        .catch(err => {
          console.log(err);
        });
      }
      else {
        await apis
          .InserirPresente(presente)
          .then(res => {
            alert(res.data.message);
            getPresentes();
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    savePresente();
    setOpen(false);
  }

  const handleRemove = () => {
    async function removePresente () {
      await apis
      .RemovePresente(presente._id)
      .then(res => {
        alert(res.data.message);
        getPresentes();
      })
      .catch(err => {
        console.log(err);
      });
    }
    removePresente();
  }
  
  return (
    <div className="tab-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <p>Total: {dados.total}</p>
          <p>Adquiridos: {dados.adquiridos}</p>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="right">
          <Button aria-label="add" variant="contained" color="primary" onClick={handleNewPresente}>
            Adicionar Presente
          </Button>
        </Grid>
      </Grid>
      <Table id="presentes-table" responsive>
        <thead>
          <tr>
            <th title="Click para ordenar" onClick={() => sortTable(0, "presentes-table")}>#</th>
            {heads.map((value, index) => (
              <th title="Click para ordenar" onClick={() => sortTable(index+1, "presentes-table")} key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {presentes.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.nome}</td>
              <td>{value.adquirido ? "Sim" : "Não"}</td>
              <td><a href={value.url} target="blank">Link {index+1}</a></td>
              <td>
                <Button aria-label="edit" color="primary" onClick={() => handleClickOpen(value)}>
                  <EditIcon />
                </Button>
                <Button aria-label="delete" color="secondary" onClick={handleRemove}>
                  <DeleteIcon />
                </Button>
              </td>
            </tr>
          ))}       
        </tbody>
        <FormDialog 
          open={open} 
          setOpen={setOpen} 
          handleSave={handleSave}
          children={<FormPresentes presente={presente} setPresente={setPresente}/>} />
      </Table>
    </div>
  )
}
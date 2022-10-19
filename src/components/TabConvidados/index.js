import React, { useEffect, useState } from 'react'
import apis from '../../api';
import Table from 'react-bootstrap/Table'
import { sortTable } from '../../utils/sortTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { env } from '../../environment';

export default function TabConvidados() {
  const [convidados, setConvidados] = useState([]);
  const [dados, setDados] = useState([]);
  const heads = [ "Nome", "Observação", "Convites", "Confirmado?", "Ações"];

  useEffect(() => {
    async function getConvidados() {
      await apis.ListaConvidados()
        .then(res => {
          setConvidados(res.data.data); 
          var data = {
            numConvidados: 0,
            numConfirmados: 0,
          };
          res.data.data.forEach(element => {
            data.numConvidados += element.quantidade;
            data.numConfirmados += element.confirmado ? element.quantidade : 0;
          });
          setDados(data);
        })
        .catch(err => console.log(err));
    }
    getConvidados();
  }, [])

  const getUrl = (id) => {
    navigator.clipboard.writeText(env.urlSite + id).then(function() {
      console.log('Convite copiado!');
    }, function(err) {
      console.error('Não foi possível copiar o texto: ', err);
    });
  }

  return (
    <div className="tab-container">
      <p>Nº de Convidados: {dados.numConvidados}</p>
      <p>Nº de Confirmados: {dados.numConfirmados}</p>
      <Table id="convidados-table" responsive>
        <thead>
          <tr>
            <th title="Click para ordenar" onClick={() => sortTable(0, "convidados-table")}>#</th>
            {heads.map((value, index) => (
              <th title="Click para ordenar" onClick={() => sortTable(index+1, "convidados-table")} key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {convidados.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <IconButton onClick={() => getUrl(value._id)} title="Copiar convite" color="primary">
                  <ContentCopyIcon />
                </IconButton>
                {value.nome}
              </td>
              <td>{value.observacao}</td>
              <td>{value.quantidade}</td>
              <td>{value.confirmado ? "Sim" : "Não"}</td>
              <td>
                <IconButton aria-label="edit" disabled color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="secondary">
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}       
        </tbody>
      </Table>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import apis from '../../api';
import Table from 'react-bootstrap/Table'
import { sortTable } from '../../utils/sortTable';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function TabConvidados() {
  const [convidados, setConvidados] = useState([]);
  const [dados, setDados] = useState([]);
  const heads = [ "Nome", "Observação", "Convites", "Confirmado?", "Bechamel", "Bolonhesa", "Ações"];

  useEffect(() => {
    async function getConvidados() {
      await apis.ListaConvidados()
        .then(res => {
          setConvidados(res.data.data); 
          var data = {
            numConvidados: 0,
            numConfirmados: 0,
            numBechamel: 0,
            numBolonhesa: 0,
          };
          res.data.data.forEach(element => {
            data.numConvidados += element.quantidade;
            data.numConfirmados += element.confirmado ? element.quantidade : 0;
            if (!element.quantidadeBechamel) element.quantidadeBechamel = 0;
            if (!element.quantidadeBolonhesa) element.quantidadeBolonhesa = 0;
            data.numBechamel += element.quantidadeBechamel;
            data.numBolonhesa += element.quantidadeBolonhesa;
          });
          setDados(data);
        })
        .catch(err => console.log(err));
    }
    getConvidados();
  }, [])

  const getUrl = (id) => {
    navigator.clipboard.writeText("https://eduardo-giovana.site/" + id).then(function() {
      console.log('Convite copiado!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  return (
    <div className="tab-container">
      <p>Nº de Convidados: {dados.numConvidados}</p>
      <p>Nº de Confirmados: {dados.numConfirmados}</p>
      <p>Qtde. Bechamel: {dados.numBechamel}</p>
      <p>Qtde. Bolonhesa: {dados.numBolonhesa}</p>
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
              <td>{value.quantidadeBechamel}</td>
              <td>{value.quantidadeBolonhesa}</td>
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
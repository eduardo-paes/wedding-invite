import React, { useState, useEffect } from 'react';
import { 
  Select, Table, TableRow, TableHead, TableContainer,
  MenuItem, TableBody, TableCell, Paper
} from '@material-ui/core';

export default function DenseTable({convidado, setConvidado}) {
  const rows = [ 'Bechamel', 'Bolonhesa' ];
  const [array, setArray] = useState([]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i <= Number(convidado.quantidade); i++) 
      newArray.push(i);
    setArray(newArray);

    if (convidado.confirmado === true) {
      setConvidado(prev => ({
        ...prev,
        quantidadeBechamel: convidado.quantidadeBechamel,
        quantidadeBolonhesa: convidado.quantidadeBolonhesa,
      }));
    }
    else {
      setConvidado(prev => ({
        ...prev,
        quantidadeBechamel: convidado.quantidade,
        quantidadeBolonhesa: 0,
      }));
    }

    return () => {}
    // eslint-disable-next-line
  }, [convidado.quantidade])

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    if (name === "Bechamel")
    {
      setConvidado(prev => ({
        ...prev,
        quantidadeBechamel: value,
      }));

      if (value === 0) {
        setConvidado(prev => ({
          ...prev,
          quantidadeBolonhesa: Number(convidado.quantidade),
        }));
      }
      else {
        setConvidado(prev => ({
          ...prev,
          quantidadeBolonhesa: Number(convidado.quantidade) - Number(value),
        }));
      }
    }
    else {
      setConvidado(prev => ({
        ...prev,
        quantidadeBolonhesa: value,
      }));

      if (value === 0) {
        setConvidado(prev => ({
          ...prev,
          quantidadeBechamel: Number(convidado.quantidade),
        }));
      }
      else
      {
        setConvidado(prev => ({
          ...prev,
          quantidadeBechamel: Number(convidado.quantidade) - Number(value),
        }));
      }
    }
  };
  
  return (
    <TableContainer style={{margin: "1rem 0"}} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Molho</TableCell>
            <TableCell>Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
              <TableRow key={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell align="right">
                  <Select
                    labelId="select-label"
                    variant='filled'
                    fullWidth
                    name={row}
                    onChange={handleChange}
                    value={
                      row === "Bechamel" 
                        ? convidado?.quantidadeBechamel === undefined ? 0 : convidado.quantidadeBechamel
                        : convidado?.quantidadeBolonhesa === undefined ? 0 : convidado.quantidadeBolonhesa
                    }
                  >
                    {
                      array.map((item, index) => {
                        return <MenuItem key={index} value={item}>{item}</MenuItem>
                      })
                    }
                  </Select>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
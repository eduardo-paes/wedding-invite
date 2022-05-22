import * as React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';

export default function FormPresentes({ presente, setPresente }) {
  const handleChange = (ev) => {
    let { name, value } = ev.target;
    if (value === 'false') value = false;
    else if (value === 'true') value = true;
    setPresente(prev => ({
      ...prev,
      [name]: value
    }));
  }
  return (
    <Grid container spacing={2} padding={'1rem 0'}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          onChange={handleChange}
          name="nome"
          label="Nome"
          placeholder="Nome do produto"
          value={presente.nome}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          onChange={handleChange}
          name="url"
          label="URL"
          placeholder="Link da loja"
          value={presente.url}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel>Adquirido?</FormLabel>
            <RadioGroup
              defaultValue={false}
              onChange={handleChange}
              name="adquirido"
              value={presente.adquirido}
            >
              <FormControlLabel name="adquirido" value={true} control={<Radio />} label="Sim" />
              <FormControlLabel name="adquirido" value={false} control={<Radio />} label="Não" />
            </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

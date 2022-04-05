import React, { useState } from 'react';
import DialogPresentes from '../DialogPresentes';
import './styles.css';

export default function Footer() {
  const [open, setOpen] = useState(false);
  const onClickPix = () => window.open("https://nubank.com.br/pagar/xo385/2DPydkAAcr", "_blank")
  const onClickPresentes = () => setOpen(true);
  return (
    <div className='footer-container'>
        <p className='footer-question'>
          Gostaria de nos presentear? <br />
          É só acessar a Lista de Presentes! <br />
          Sinta-se à vontade para nos enviar pelo site ou em forma de Pix.
        </p>

        <div>
          <button className="btn_footer" onClick={onClickPresentes}>LISTA</button>
          <button className="btn_footer" onClick={onClickPix}>PIX</button>

          <DialogPresentes 
            open={open} 
            setOpen={setOpen}
          />
        </div>

        <p className='footer-thanks'>
          Muito obrigado por fazer parte da nossa história!
        </p>
    </div>
  );
}

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
        Gostaria de nos presentear?
      </p>

      <p className='footer-text'>
        É só acessar a lista de presentes abaixo ou deixar a sua 
        contribuição através do botão de PIX.
      </p>

      <div>
        <button className="btn_footer" onClick={onClickPresentes}>PRESENTES</button>
        <button className="btn_footer" onClick={onClickPix}>PIX</button>

        <DialogPresentes 
          open={open} 
          setOpen={setOpen}
        />
      </div>

      <p className='footer-thanks'>
        Desde já o nosso muito obrigado por fazer parte de 
        algum modo da nossa história!
      </p>
    </div>
  );
}

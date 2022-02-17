import React from 'react';
import './styles.css';

const LinkButton = ({text, link}) => {
  const onClick = () => window.open(link, "_blank");
  return <button className="btn_footer" onClick={onClick}>{text}</button>
}

export default function Footer() {
  return (
    <div className='footer-container'>
      <p className='footer-question'>
        Gostaria de nos presentear?
      </p>
      <p className='footer-text'>
        É só acessar a lista de presentes abaixo ou deixar a sua 
        <br />contribuição através do botão de PIX.
      </p>
      <div className='input-areas'>
        <LinkButton text="PRESENTES" link="https://1drv.ms/x/s!ArFZQQ-pHyEdrDgST6ZPD4oDrA0x?e=msOGrb"/>
        <LinkButton text="PIX" link="https://nubank.com.br/pagar/xo385/2DPydkAAcr"/>
      </div>
      <p className='footer-text'>
        Desde já o nosso muito obrigado por fazer parte de 
        <br />algum modo da nossa história!
      </p>
    </div>
  );
}

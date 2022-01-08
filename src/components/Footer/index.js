import React from 'react';
import './styles.css';

const LinkButton = ({text, link}) => {
  const onClick = () => {
    window.open(link, "_blank");
  }
  return <button className="btn_footer" onClick={onClick}> {text} </button>
}

function Footer() {
  return (
    <div className='footer-container'>
      <p className='footer-question'>
        Gostaria de nos presentear?
      </p>
      <p className='footer-text'>
        É só acessar alguma das listas de presente abaixo e deixar a sua contribuição.
      </p>
      <div className='input-areas'>
        <LinkButton text="Lista 1" link="https://www.google.com.br/"/>
        <LinkButton text="Lista 2" link="https://www.google.com.br/"/>
        <LinkButton text="Lista 3" link="https://www.google.com.br/"/>
      </div>
      <p className='footer-text'>
        Deus lhe pague!
      </p>
    </div>
  );
}

export default Footer;

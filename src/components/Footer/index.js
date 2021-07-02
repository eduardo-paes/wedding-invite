import React from 'react';
import './styles.css';
import { Button } from '../Button';

const LinkButton = ({text, link}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
      <Button buttonStyle='btn--outline'>{text}</Button>
    </a>
  )
}

function Footer() {
  return (
    <div className='footer-container'>
      <p className='footer-subscription-heading'>
        Gostaria de nos presentear?
      </p>
      <p className='footer-subscription-text'>
        É só acessar alguma das listas de presente abaixo e deixar a sua contribuição.
      </p>
      <div className='input-areas'>
        <LinkButton text="Lista 1" link="https://www.google.com.br/"/>
        <LinkButton text="Lista 2" link="https://www.google.com.br/"/>
        <LinkButton text="Lista 3" link="https://www.google.com.br/"/>
      </div>
      <p className='footer-subscription-text'>
        Deus lhe pague!
      </p>
    </div>
  );
}

export default Footer;

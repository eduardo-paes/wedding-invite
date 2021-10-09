import React, { useState, useEffect } from 'react';
import './styles.css';
import CardItem from '../CardItem';

function Invitation() {
  const { width } = useWindowDimensions();
  return (
    <div className='invitation__container'>
      <h1 className='invitation__header'>Convidam para a cerimônia do seu casamento</h1>
      {
        width > 1024 
          ?
            <h2 className='invitation__body'>
              A realizar-se às 10h00 do dia 16 de julho de 2022 no <br/> Seminário Diocesano Nossa Senhora do Amor Divino. 
              <br/><br/>
              Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, <br/> Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
            </h2>
          :
            <h2 className='invitation__body'>
              A realizar-se às 10h00 do dia 16 de julho de 2022 no Seminário Diocesano Nossa Senhora do Amor Divino - Corrêas, Petrópolis - RJ. 
              <br/><br/>
              Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
            </h2>
      }
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sao-jose.jpg'
              text='Tomei então por meu advogado e patrono o glorioso São José e a ele me confiei com fervor.'
              author="Autor"
              label='Santa Teresa'
            />
            <CardItem
              src='images/matrimonio.jpg'
              text='O casamento é o sacramento em que o homem e a mulher, chamados a se tornar ‘uma só carne’, participam do amor criador de Deus mesmo.'
              author="S. João Paulo II"
              label='Matrimônio'
            />
            <CardItem
              src='images/virgem-maria.jpg'
              text='Na prova ou na dificuldade, recorro à Mãe Maria, cujo olhar por si só é suficiente para dissipar todos os medos.'
              author="Santa Teresinha"
              label='Virgem Santíssima'
            />
          </ul>
        </div>
      </div>
    
    </div>
  );
}

//#region Pega dimensões da tela
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
//#endregion

export default Invitation;

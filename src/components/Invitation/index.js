import React, { useState, useEffect } from 'react';
import './styles.css';
import CardItem from '../CardItem';
import GeneralDialog from '../Dialog';
import api from '../../api'

//Cards contendo imagens ornamentais do convite
// eslint-disable-next-line no-unused-vars
const Cards = () => {
  return (
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
  );
}

function Invitation() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [convidado, setConvidado] = useState();
  const onClick = () => setOpen(true);

  useEffect(() => {
    async function fetchConvidadoAPI() {
      let url = window.location.href.split('/');
      let id = url[3]; // 615b9f82b638a5406b2a1f64

      await api.EncConvidadoPorId(id)
      .then(res => {
        setConvidado(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
    fetchConvidadoAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='invitation_container'>
      {
        convidado === undefined
          ? 
            <h1 className='invitation_header'>Convite indisponível</h1>
          : 
            <>
              <h1 className='invitation_header'>Convidam para a cerimônia do seu casamento</h1>
              {
              width > 1024 
                ?
                  <h2 className='invitation_body'>
                    A realizar-se às 10h00 do dia 16 de julho de 2022 no <br/> Seminário Diocesano Nossa Senhora do Amor Divino. 
                    <br/><br/>
                    Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, <br/> Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
                  </h2>
                :
                  <h2 className='invitation_body'>
                    A realizar-se às 10h00 do dia 16 de julho de 2022 no Seminário Diocesano Nossa Senhora do Amor Divino - Corrêas, Petrópolis - RJ. 
                    <br/><br/>
                    Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
                  </h2>
              }

              <div className='invitation_button'>
                <button
                  className="btn_outline"
                  onClick={onClick}
                  disabled={convidado?.confirmado === true}
                >
                  {convidado?.confirmado === true ? "Presença Confirmada" : "Confirmar Presença"}
                </button>
              </div>

              <GeneralDialog 
              open={open} 
              setOpen={setOpen}
              convidado={convidado}
              setConvidado={setConvidado}
              />
            </>
      }

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

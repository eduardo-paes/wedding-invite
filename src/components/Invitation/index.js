import React, { useState, useEffect } from 'react';
import './styles.css';
import GeneralDialog from '../Dialog';
import api from '../../api'
import PhotosCarousel from '../Carousel';

const foraData = () => { return (new Date() >= new Date('2022', '05', '16', '00', '00', '01')); }

function Invitation() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [convidado, setConvidado] = useState();
  const onClick = () => setOpen(true);

  useEffect(() => {
    async function fetchConvidadoAPI() {
      await api.EncConvidadoPorId(window.location.href.split('/')[3])
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
    <>
      <div className='invitation_container'>
        {
          convidado === undefined
            ? 
              <h1 className='invitation_header reveal'>Carregando convite...</h1>
            : 
              <>
                <h1 className='invitation_header reveal'>Convidam para a cerimônia do seu casamento</h1>
                {
                width > 1024 
                  ?
                    <h2 className='invitation_body reveal'>
                      A realizar-se às 9h30 do dia 16 de julho de 2022 no <br/> Seminário Diocesano Nossa Senhora do Amor Divino. 
                      <br/><br/>
                      Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, <br/> Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
                    </h2>
                  :
                    <h2 className='invitation_body reveal'>
                      A realizar-se às 9h30 do dia 16 de julho de 2022 no Seminário Diocesano Nossa Senhora do Amor Divino - Corrêas, Petrópolis - RJ. 
                      <br/><br/>
                      Após a cerimônia os noivos recepcionarão os convidados na mesma localidade, Estrada União e Indústria, 3441 - Corrêas, Petrópolis - RJ.
                    </h2>
                }

                <div className='invitation_button reveal'>
                  <button
                    className={foraData() ? "btn_outline_clicked" : "btn_outline"}
                    onClick={onClick}
                    disabled={foraData()}
                  >
                    {convidado?.confirmado === true ? "Presença Confirmada" : "Confirmar Presença"}
                  </button>
                  <GeneralDialog 
                    open={open} 
                    setOpen={setOpen}
                    convidado={convidado}
                    setConvidado={setConvidado}
                  />
                </div>   

                <p className='invitation_limit reveal' style={{visibility: foraData() ? 'collapse' : 'visible'}}>
                  Não deixe de confirmar sua presença até o dia 16 de Junho.
                </p>           
              </>
        }
      </div>
      <div className="carousel">
        { convidado !== undefined ? <PhotosCarousel withIndicators={width > 1024} /> : null}
      </div>
    </>
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

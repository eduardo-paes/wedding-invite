import React, { useState } from "react";
import Footer from "../../components/Footer";
import Flor1 from "../../assets/images/flor1.png";
import Flor3 from "../../assets/images/flor3.svg";
import "./styles.css";
import { useEffect } from "react";
import apis from "../../api";

export default function Convite() {
  const [convidado, setConvidado] = useState();
  const [foraData, setForaData] = useState(true);
  
  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      if (reveals[i].getBoundingClientRect().top < windowHeight - 50) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });

  useEffect(() => {
    const isForaData =
      new Date() >= new Date("2023", "05", "15", "00", "00", "01");
    async function fetchConvidadoAPI() {
      await apis
        .EncConvidadoPorId(window.location.href.split("/")[3])
        .then((res) => {
          const { data } = res.data;
          if (!Array.isArray(data)) {
            setConvidado(data);
            if (isForaData && data.confirmado) {
              setForaData(true);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchConvidadoAPI();
    // eslint-disable-next-line
  }, []);

  const handleConfirm = () => {
    convidado.confirmado = true;
    async function confirmarPresenca() {
      await apis
        .AtualizarConvidado(convidado._id, convidado)
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    confirmarPresenca();
  };

  return (
    <>
      <div className="conv-container m-2 m-sm-4 p-2 p-sm-4">
        {/* BLOCKQUOTE */}
        <section className="conv-frase row mb-1 reveal">
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <img className="conv-flor1" src={Flor1} alt="flor-1" />
          </div>
          <div className="col-md-6 col-12 mt-4 mt-md-0 d-flex flex-column justify-content-center">
            <h3 className="text-center">
              A felicidade íntima da família é a beleza que nos traz para mais
              perto de Deus.
            </h3>
            <p className="text-center">- São Luís Martin</p>
          </div>
        </section>

        {/* NOMES NOIVOS */}
        <section className="conv-noivos row my-3 reveal">
          <h1 className="col-12 d-flex justify-content-center">
            Luiz Otávio Borges
          </h1>
          <h2 className="col-12 d-flex justify-content-center">&</h2>
          <h1 className="col-12 d-flex justify-content-center">
            Tatianne Vasconcelos
          </h1>
        </section>

        {/* CONVITE PAIS */}
        <section className="conv-pais row my-3 reveal">
          <div className="conv-pais-msg col-12 mb-2">
            <h3 className="d-flex justify-content-center">
              Com a benção de seus pais:
            </h3>
          </div>
          <div className="col-12 col-sm-6 p-1">
            <h4 className="text-center">Jorge Luis M. de Vasconcelos</h4>
            <h4 className="text-center">Viviane Souza de Vasconcelos</h4>
          </div>
          <div className="conv-nomes-pais col-12 col-sm-6 p-1">
            <h4 className="text-center">
              Luiz Otávio de O. Borges{" "}
              <span className="conv-memoria">(Em memória)</span>
            </h4>
            <h4 className="text-center">Verônica Santos da Luz</h4>
          </div>
        </section>

        {/* MSG PAIS */}
        <section className="conv-mensagem row my-1 reveal">
          <div className="col-12 mt-2">
            <h3 className="text-center">
              Convidam com grande alegria e gratidão para a celebração religiosa
              do seu casamento.
            </h3>
          </div>
        </section>

        {/* FLOR SEPARACAO */}
        <section className="row my-3 reveal">
          <div className="col-12 d-flex flex-row justify-content-center">
            <img className="flor-separator" src={Flor3} alt="flor3" />
          </div>
        </section>

        {/* ENDERECO - DATA */}
        <section className="conv-endereco-data row my-3 reveal">
          <div className="d-flex justify-content-center align-items-center col-md-6 col-sm-12">
            <h3 className="conv-data">15 de julho de 2023 às 10h</h3>
          </div>
          <div className="conv-endereco col-md-6 col-sm-12">
            <h3>Igreja do Sagrado Coração de Jesus.</h3>
            <h3>Rua Montecaseros, 95 - Centro. Petrópolis - RJ</h3>
          </div>
        </section>

        {/* CONFIRMA PRESENCA */}
        <section className="conv-confirmar-presenca row my-3 reveal">
          <div className="d-flex justify-content-center align-items-center">
            <button
              className={foraData ? "cta-button-clicked" : "cta-button"}
              onClick={handleConfirm}
              disabled={foraData}
            >
              {convidado?.confirmado === true
                ? "Presença Confirmada"
                : "Confirmar Presença"}
            </button>
          </div>
        </section>
      </div>

      <section className="conv-lista-presentes reveal">
        <Footer />
      </section>
    </>
  );
}

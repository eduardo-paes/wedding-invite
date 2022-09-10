import React from "react";
import Footer from "../../components/Footer";
import Flor1 from "../../assets/images/flor1.png";
import Flor3 from "../../assets/images/flor3.svg";
import "./styles.css";

export default function Convite() {
  return (
    <>
      <div className="conv-container m-2 m-sm-4 p-2 p-sm-4">
        {/* BLOCKQUOTE */}
        <section className="conv-frase row mb-1">
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
        <section className="conv-noivos row my-3">
          <h1 className="col-12 d-flex justify-content-center">
            Luiz Otávio Borges
          </h1>
          <h2 className="col-12 d-flex justify-content-center">&</h2>
          <h1 className="col-12 d-flex justify-content-center">
            Tatianne Vasconcelos
          </h1>
        </section>

        {/* CONVITE PAIS */}
        <section className="conv-pais row my-1">
          <div className="conv-pais-msg col-12 mb-2">
            <h3 className="d-flex justify-content-center">
              Com a benção de seus pais:
            </h3>
          </div>
          <div className="col-12 col-sm-6 p-1">
            <h4 className="text-center">
              Jorge Luis M. de Vasconcelos
            </h4>
            <h4 className="text-center">
              Viviane Souza de Vasconcelos
            </h4>
          </div>
          <div className="conv-nomes-pais col-12 col-sm-6 p-1">
            <h4 className="text-center">
              Luiz Otávio de O. Borges <span className="conv-memoria">(Em memória)</span>
            </h4>
            <h4 className="text-center">
              Verônica Santos da Luz
            </h4>
          </div>
        </section>

        {/* MSG PAIS */}
        <section className="conv-mensagem row my-1">
          <div className="col-12 d-flex flex-row justify-content-center">
            <img src={Flor3} alt="flor3" width="12%" />
          </div>
          <div className="col-12 mt-2">
            <h3 className="text-center">
              Convidam com grande alegria e gratidão para a celebração religiosa
              do seu casamento.
            </h3>
          </div>
        </section>

        <section className="conv-endereco row mt-3 mb-1">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <h3 className="conv-data">15 de julho de 2023 às 10h</h3>
          </div>
          <div className="col-6">
            <h3>Local: Igreja do Sagrado Coração de Jesus.</h3>
            <h3>Endereço: Rua Montecaseros, 95 - Centro. Petrópolis - RJ</h3>
          </div>
        </section>

        <section className="conv-confirmar-presenca row mt-1">
          <div className="d-flex justify-content-center align-items-center">
            <button>Confirmar Presença</button>
          </div>
        </section>
      </div>

      <section className="conv-lista-presentes">
        <Footer />
      </section>
    </>
  );
}

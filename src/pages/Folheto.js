import React from 'react'

function Rito ({text}) {
  return <h2 className="fol-rito">{text}</h2>
}

function Todos ({text}) {
  return(
    <strong>
      <strong className='fol-init'>T.: </strong>{text}
    </strong>
  )
}

function Sacerdote ({text}) {
  return (
    <p>
      <strong className='fol-init'>S.:</strong> {text}
    </p>
  )
}

function Canto ({text}) {
  return <p className="fol-canto">{text}</p>
}

function Subtitulo({text}){
  return <h2 className="fol-subtitle">{text}</h2>
}

function Comum({text}){
  return <p className="fol-comum">{text}</p>
}

function Leitura({title, content, antifon, begin, end}) {
  return (
    <>
      <Subtitulo text={title}/>
      <Canto text={antifon}/>
      <Canto text={begin}/>
      <Comum text={content}/>
      <Canto text={end}/>
    </>
  )
}

export default function Folheto(props) {
  return (
    <div className="main-container folheto">
      <section className="fol-header">
        <h1 className="fol-title">
          Ritual da Missa de Casamento de Eduardo e Giovana
        </h1>
        <h2 className="fol-subtitle">
          Festa de Nossa Senhora do Carmo<br/>
          16/07/2022
        </h2>
        <h2 className="fol-cite">
          “O amor não cansa e nem se cansa”<br/>- São João da Cruz
        </h2>
      </section>

      <section id="ritos-iniciais" className="fol-body">
        <Rito text="Ritos Iniciais" />
        <Sacerdote text="Em nome do Pai, e do Filho e do Espírito Santo."/>
        <Todos text="Amém."/>        
        <Sacerdote text="A graça de Nosso Senhor Jesus Cristo, o amor do Pai e a comunhão do Espírito Santo estejam convosco!"/>
        <Todos text="Bendito seja Deus que nos reuniu no amor de Cristo."/>
        <Sacerdote text="Para a celebração deste casamento, meus irmãos e irmãs, felizes, aqui nos reunimos na casa do Senhor, no dia em que estes nossos amigos Giovana e Eduardo resolveram estabelecer o seu novo lar. Para eles este momento é de suma importância! Por isso, vamos acompanhá-los com a nossa amizade e nossa oração fraterna. Unidos a eles, ouviremos atentamente a Palavra que hoje Deus nos dirige. E depois, juntamente com a Santa Igreja, por meio de Jesus Cristo, nosso Senhor, vamos pedir a Deus Pai que acolha, abençoe e mantenha sempre unidos estes noivos, seus servos e nossos irmãos. "/>

        <Subtitulo text="Ato Penitencial"/>
        <Canto text="Missa iste confessor, Palestrina"/>
        <Subtitulo text="Oração do Dia"/>
        <Sacerdote text="Oremos. Ó Deus, que desde o princípio santificastes misteriosamente a união conjugal, para prefigurar no casamento o mistério do Cristo e da Igreja, daí a Giovana e Eduardo realizar em sua vida este grande sacramento. Por nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. "/>
      </section>

      <section id="liturgia-palavra" className="fol-body">
        <Rito text="Liturgia da Palavra" />
        <Leitura
          title={"Primeira Leitura - Tb 8, 4b-8"}
          antifon={"Que cheguemos, juntos, a uma idade avançada."}
          begin={"Leitura do Livro de Tobias"}
          content={"Na noite de núpcias, disse Tobias a Sara: “Levanta-te, irmã! Oremos e imploremos a nosso Senhor que nos conceda misericórdia e salvação”. Ele levantou-se, e ambos se puseram a orar e a suplicar que lhes fosse concedida a salvação. Ele começou dizendo: “Tu és bendito, ó Deus de nossos pais, e bendito é o teu nome, por todos os séculos e gerações! Que os céus e todas as tuas criaturas te bendigam por todos os séculos! Foste tu quem criou Adão, e para ele criaste Eva, sua mulher, para que lhe servisse de ajuda e apoio. De ambos teve início a geração dos homens. Tu mesmo disseste: “Não é bom que o homem esteja só. Vamos fazer-lhe uma auxiliar semelhante a ele”. Agora, Senhor, não é por desejo impuro que eu recebo, como esposa, esta minha irmã, mas faço-o de coração sincero. Se misericordioso comigo e com ela e concede-nos que cheguemos, juntos, a uma idade avançada”. Disseram, depois, a uma só voz: “Amém! Amém!”"}
          end={"Palavra do Senhor."}
        />
        <Leitura
          title={"Salmo Responsorial - Salmo 127 (128)"}
          begin={"Refrão: O amor do Senhor Deus por quem o teme é de sempre e perdura para sempre."}
          content={
            <>
            Bendize, ó minha alma, ao Senhor,<br/>
            e todo o meu ser, seu santo nome! <br/>
            Bendize, ó minha alma ao Senhor, <br/>
            não te esqueças de nenhum de seus favores!<br/>
            <br/>
            O Senhor é indulgente, é favorável, <br/>
            é paciente, é bondoso e compassivo. <br/>
            - Como um pai se compadece de seus filhos,<br/>
            o Senhor tem compaixão dos que o temem.<br/>
            <br/>
            O amor do Senhor Deus por quem o teme<br/>
            é de sempre e perdura para sempre; <br/>
            e também sua justiça se estende <br/>
            por gerações até os filhos de seus filhos, <br/>
            aos que guardam fielmente sua Aliança.<br/>
            </>}
        />
        <Leitura
          title={"Segunda Leitura - Cl 3, 12-17"}
          antifon={"Sobretudo, amai-vos uns aos outros, pois o amor é o vínculo da perfeição."}
          begin={"Leitura da Carta de São Paulo aos Colossenses"}
          content={"Irmãos: Vós sois amados por Deus, sois os seus santos eleitos. Por isso, revesti-vos de sincera misericórdia, bondade, humildade, mansidão e paciência, suportando-vos uns aos outros e perdoando-vos mutuamente, se um tiver queixa contra o outro. Como o Senhor vos perdoou, assim perdoai-vos também. Mas, sobretudo, amai-vos uns aos outros, pois o amor é o vínculo da perfeição. Que a paz de Cristo reine em vossos corações, à qual fostes chamados como membros de um só corpo. E sede agradecidos. Que a palavra de Cristo, com toda a sua riqueza, habite em vós. Ensinai e admoestai-vos uns aos outros com toda a sabedoria. Do fundo dos vossos corações, cantai a Deus salmos, hinos e cânticos espirituais, em ação de graças. Tudo o que fizerdes, em palavras ou obras, seja feito em nome do senhor Jesus Cristo. Por meio dele dai graças a Deus, o Pai."}
          end={"Palavra do Senhor."}
        />
        <Subtitulo text={"Aclamação ao Evangelho"}/>
        <Canto text={"Aleluia, a Minh'alma Abrirei."}/>
        <Leitura
          title={"Evangelho - Jo 2, 1-11 "}
          antifon={"Este foi o início dos sinais de Jesus. Ele o realizou em Cana da Galileia."}
          begin={"+ Proclamação do Evangelho de Jesus Cristo, escrito por João."}
          content={"Naquele tempo, houve um casamento em Cana da Galileia. A mãe de Jesus estava presente. Também Jesus e seus discípulos tinham sido convidados para o casamento. Como o vinho veio a faltar, a mãe de Jesus lhe disse: “Eles não têm mais vinho”. Jesus respondeu-lhe: “Mulher, por que dizes isso a mim? Minha hora ainda não chegou”. Sua Mãe disse aos que estavam servindo: “Fazei o que ele vos disser”. Estavam seis talhas de pedra colocadas aí para a purificação que os judeus costumam fazer. Em cada uma delas cabiam mais ou menos cem litros. Jesus disse aos que estavam servindo: “Enchei as talhas de água”. Encheram-nas até a boca.Jesus disse: “Agora tirai e levai ao mestre-sala”. E eles levaram. O mestre-sala experimentou a água, que se tinha transformado em vinho. Ele não sabia de onde vinha, mas os que estavam servindo sabiam, pois eram eles que tinham tirado a água. O mestre-sala chamou então o noivo e lhe disse: “Todo o mundo serve primeiro o vinho melhor e, quando os convidados já estão embriagados, serve o vinho menos bom. Mas tu guardaste o vinho melhor até agora!” Este foi o início dos sinais de Jesus. Ele o realizou em Cana da Galileia e manifestou a sua glória, e seus discípulos creram nele. "}
          end={"Palavra da salvação."}
        />
        <Subtitulo text={"Homilia"}/>
      </section>

      <section id="ritos-matrimoniais" className="fol-body">
        <Rito text="Rito Sacramental do Matrimônio" />
        <Sacerdote text="Caros noivos, N. e N. viestes a esta Igreja, para que, na presença do sacerdote e da comunidade cristã de contrair matrimônio seja marcada por Cristo com um sinal sagrado. Cristo abençoa com generosidade o vosso amor conjugal. Já vos tendo consagrado pelo batismo, vai enriquecer e fortalecer-vos agora com o sacramento do Matrimônio, para que sejais fiéis um ao outro por toda a vida e possais assumir todos os deveres do Matrimônio."/>
        
        <Subtitulo text="Diálogo antes do consentimento"/>
        <Sacerdote text="N. e N. viestes aqui para unir-vos em Matrimônio. Por isso, eu vos pergunto perante a Igreja: É de livre e espontânea vontade que o fazeis? "/>
        <Sacerdote text="Sim!"/>
        <Sacerdote text="Abraçando o Matrimônio, ides prometer amor e fidelidade um ao outro. É por toda vida que prometeis? "/>
        <Sacerdote text="Sim!"/>
        <Sacerdote text="Estais dispostos a receber com amor os filhos que Deus vos confiar, educando-os na lei de Cristo e da Igreja? "/>
        <Sacerdote text="Sim!"/>

        <Subtitulo text="Consentimento"/>
        <Sacerdote text="Para manifestar o vosso consentimento em selar a sagrada aliança do Matrimônio, diante de Deus e da Igreja aqui reunida, daí um ao outro a mão direita. "/>
        <Sacerdote text="Eu, N. te recebo, N., por minha esposa e te prometo ser fiel amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias da nossa vida."/>
        <Sacerdote text="Eu, N. te recebo, N., por meu esposo e te prometo ser fiel, amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias na nossa vida."/>

        <Subtitulo text="Aceitação do consentimento"/>
        <Sacerdote text="O Deus de Abraão, o Deus de Isaac, o Deus de Jacó, o Deus que abençoou os nossos primeiros pais no paraíso confirme e abençoe em Cristo este compromisso que manifestastes perante a Igreja. Ninguém, separe o que Deus uniu. Bendigamos ao Senhor!"/>
        <Todos text="Graças a Deus."/>

        <Subtitulo text="Benção e Entrega das alianças"/>
        <Sacerdote text="Ó Deus, que fizestes aliança conosco, abençoai + as alianças de Giovana e Eduardo, para que estes vossos filhos permaneçam fiéis um ao outro e amem-se mutuamente em vossa paz. Por Cristo, nosso Senhor."/>
        <Todos text="Amém."/>

        <Sacerdote text="N., recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."/>
        <Sacerdote text="N., recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."/>

      </section>
    </div>
  )
}

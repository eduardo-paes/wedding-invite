//#region Comps
import React from 'react'

const chart = [
  [ 'M', 1000],
  ['CM',  900],
  [ 'D',  500],
  ['CD',  400],
  [ 'C',  100],
  ['XC',   90],
  [ 'L',   50],
  ['XL',   40],
  [ 'X',   10],
  ['IX',    9],
  [ 'V',    5],
  ['IV',    4],
  [ 'I',    1]
];
var countSubtitulo = 1;
var countRito = 1;

const toRoman = (decimal) =>
  chart.reduce((acc, numeral) => {
    const [roman, remainder] = acc;
    const [letter, value] = numeral;
    return [roman + letter.repeat(remainder / value),
            remainder % value];
  }, ['', decimal])[0];

function Rito ({text}) {
  return <h2 className="fol-rito">{toRoman(countRito++)} - {text}</h2>
}

function Todos ({text}) {
  return(
    <p>
      <strong>
        <strong className='fol-init'>T.: </strong>{text}
      </strong>
    </p>
  )
}

function Canto ({text}) {
  return <p className="fol-canto">{text}</p>
}

function Subtitulo({text}){
  return <h2 className="fol-subtitle">{countSubtitulo++}. {text}</h2>
}

function Comum({text}){
  return <p>{text}</p>
}

function Especifico ({text, ini = 'S.:', italic = false}) {
  return (
    <p className={italic && 'fol-canto'}>
      <strong className='fol-init'>{ini}</strong> {text}
    </p>
  )
}

function Leitura({title, content, antifon, begin, end, resp}) {
  return (
    <>
      <Subtitulo text={title}/>
      <Canto text={antifon}/>
      {resp && <Especifico italic={true} ini='Refrão: ' text={resp}/>}
      <Canto text={begin}/>
      <Comum text={content}/>
      <Canto text={end}/>
    </>
  )
}
//#endregion

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
        "A felicidade íntima da família é a beleza que nos traz para mais perto de Deus."
        <br/>São Luis Martin
        </h2>
      </section>

      <section id="ritos-iniciais" className="fol-body">
        <Rito text="Ritos Iniciais" />
        <Especifico text="Em nome do Pai, e do Filho e do Espírito Santo."/>
        <Todos text="Amém."/>        
        <Especifico text="A graça de Nosso Senhor Jesus Cristo, o amor do Pai e a comunhão do Espírito Santo estejam convosco!"/>
        <Todos text="Bendito seja Deus que nos reuniu no amor de Cristo."/>
        <Especifico text="Para a celebração deste casamento, meus irmãos e irmãs, felizes, aqui nos reunimos na casa do Senhor, no dia em que estes nossos amigos Eduardo e Giovana resolveram estabelecer o seu novo lar. Para eles este momento é de suma importância! Por isso, vamos acompanhá-los com a nossa amizade e nossa oração fraterna. Unidos a eles, ouviremos atentamente a Palavra que hoje Deus nos dirige. E depois, juntamente com a Santa Igreja, por meio de Jesus Cristo, nosso Senhor, vamos pedir a Deus Pai que acolha, abençoe e mantenha sempre unidos estes noivos, seus servos e nossos irmãos."/>

        <Subtitulo text="Ato Penitencial"/>
        <Canto text="Canto: Missa iste confessor, Palestrina"/>
        <Subtitulo text="Oração do Dia"/>
        <Especifico text="Oremos. Ó Deus, que desde o princípio santificastes misteriosamente a união conjugal, para prefigurar no casamento o mistério do Cristo e da Igreja, dai a Eduardo e Giovana realizar em sua vida este grande sacramento. Por nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo."/>
      </section>

      <section id="liturgia-palavra" className="fol-body">
        <Rito text="Liturgia da Palavra" />
        <Leitura
          title={"Primeira Leitura - Tb 8, 4b-8"}
          antifon={"Que cheguemos, juntos, a uma idade avançada."}
          begin={"Leitura do Livro de Tobias"}
          content={"Na noite de núpcias, disse Tobias a Sara: “Levanta-te, irmã! Oremos e imploremos a nosso Senhor que nos conceda misericórdia e salvação”. Ele levantou-se, e ambos se puseram a orar e a suplicar que lhes fosse concedida a salvação. Ele começou dizendo: “Tu és bendito, ó Deus de nossos pais, e bendito é o teu nome, por todos os séculos e gerações! Que os céus e todas as tuas criaturas te bendigam por todos os séculos! Foste tu quem criou Adão, e para ele criaste Eva, sua mulher, para que lhe servisse de ajuda e apoio. De ambos teve início a geração dos homens. Tu mesmo disseste: “Não é bom que o homem esteja só. Vamos fazer-lhe uma auxiliar semelhante a ele”. Agora, Senhor, não é por desejo impuro que eu recebo, como esposa, esta minha irmã, mas faço-o de coração sincero. Sê misericordioso comigo e com ela e concede-nos que cheguemos, juntos, a uma idade avançada”. Disseram, depois, a uma só voz: “Amém! Amém!”"}
          end={"Palavra do Senhor."}
        />
        <Todos text="Graças a Deus."/>
        <Leitura
          title={"Salmo Responsorial - Salmo 127 (128)"}
          resp={"O amor do Senhor Deus por quem o teme é de sempre e perdura para sempre."}
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
        <Todos text="Graças a Deus."/>
        <Subtitulo text={"Aclamação ao Evangelho"}/>
        <Canto text="Canto: Aleluia, a Minh'alma Abrirei."/>
        <Leitura
          title={"Evangelho - Jo 2, 1-11 "}
          antifon={"Este foi o início dos sinais de Jesus. Ele o realizou em Caná da Galileia."}
          begin={"+ Proclamação do Evangelho de Jesus Cristo, escrito por João."}
          content={"Naquele tempo, houve um casamento em Cana da Galileia. A mãe de Jesus estava presente. Também Jesus e seus discípulos tinham sido convidados para o casamento. Como o vinho veio a faltar, a mãe de Jesus lhe disse: “Eles não têm mais vinho”. Jesus respondeu-lhe: “Mulher, por que dizes isso a mim? Minha hora ainda não chegou”. Sua Mãe disse aos que estavam servindo: “Fazei o que ele vos disser”. Estavam seis talhas de pedra colocadas aí para a purificação que os judeus costumam fazer. Em cada uma delas cabiam mais ou menos cem litros. Jesus disse aos que estavam servindo: “Enchei as talhas de água”. Encheram-nas até a boca.Jesus disse: “Agora tirai e levai ao mestre-sala”. E eles levaram. O mestre-sala experimentou a água, que se tinha transformado em vinho. Ele não sabia de onde vinha, mas os que estavam servindo sabiam, pois eram eles que tinham tirado a água. O mestre-sala chamou então o noivo e lhe disse: “Todo o mundo serve primeiro o vinho melhor e, quando os convidados já estão embriagados, serve o vinho menos bom. Mas tu guardaste o vinho melhor até agora!” Este foi o início dos sinais de Jesus. Ele o realizou em Cana da Galileia e manifestou a sua glória, e seus discípulos creram nele. "}
          end={"Palavra da salvação."}
        />
        <Todos text="Glória a Vós, Senhor."/>
        <Subtitulo text={"Homilia"}/>
      </section>

      <section id="ritos-matrimoniais" className="fol-body">
        <Rito text="Rito Sacramental do Matrimônio" />
        <Especifico text="Caros noivos, Eduardo e Giovana, 
        viestes a esta Igreja, 
        para que, na presença do sacerdote e da comunidade cristã, 
        a vossa decisão de contrair Matrimônio 
        seja marcada por Cristo com um sinal sagrado.
        Cristo abençoa com generosidade o vosso amor conjugal. 
        Já vos tendo consagrado pelo batismo, 
        vai enriquecer e fortalecer-vos agora 
        com o sacramento do Matrimônio, 
        para que sejais fiéis um ao outro por toda a vida 
        e possais assumir todos os deveres do Matrimônio."/>
        
        <Subtitulo text="Diálogo antes do consentimento"/>
        <Especifico text="Eduardo e Giovana viestes aqui para unir-vos em Matrimônio. Por isso, eu vos pergunto perante a Igreja: É de livre e espontânea vontade que o fazeis? "/>
        <Especifico text="Sim!" ini="Noivos: "/>
        <Especifico text="Abraçando o Matrimônio, ides prometer amor e fidelidade um ao outro. É por toda vida que prometeis? "/>
        <Especifico text="Sim!" ini="Noivos: "/>
        <Especifico text="Estais dispostos a receber com amor os filhos que Deus vos confiar, educando-os na lei de Cristo e da Igreja? "/>
        <Especifico text="Sim!" ini="Noivos: "/>

        <Subtitulo text="Consentimento"/>
        <Especifico text="Para manifestar o vosso consentimento em selar a sagrada aliança do Matrimônio, diante de Deus e da Igreja aqui reunida, dai um ao outro a mão direita. "/>
        <Especifico ini="Noivo: " text="Eu, Eduardo te recebo, Giovana, por minha esposa e te prometo ser fiel amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias da nossa vida."/>
        <Especifico ini="Noiva: " text="Eu, Giovana te recebo, Eduardo, por meu esposo e te prometo ser fiel, amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias na nossa vida."/>

        <Subtitulo text="Aceitação do consentimento"/>
        <Especifico text="O Deus de Abraão, o Deus de Isaac, o Deus de Jacó, o Deus que abençoou os nossos primeiros pais no paraíso confirme e abençoe em Cristo este compromisso que manifestastes perante a Igreja. Ninguém, separe o que Deus uniu. Bendigamos ao Senhor!"/>
        <Todos text="Graças a Deus."/>

        <Subtitulo text="Benção e Entrega das alianças"/>
        <Especifico text="Ó Deus, que fizestes aliança conosco, abençoai + as alianças de Eduardo e Giovana, para que estes vossos filhos permaneçam fiéis um ao outro e amem-se mutuamente em vossa paz. Por Cristo, nosso Senhor."/>
        <Todos text="Amém."/>

        <Especifico ini="Esposo: " text="Giovana, recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."/>
        <Especifico ini="Esposa: " text="Eduardo, recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."/>
        
        <Subtitulo text="Oração dos Fiéis"/>
        <Especifico text="Irmãos e irmãs em Cristo, lembrando a graça especial com que Deus quis abençoar e consagrar o amor destes nossos irmãos Eduardo e Giovana, vamos confiá-los ao Senhor."/>

        <Especifico ini="1. " text="Para que estes nossos irmãos Eduardo e Giovana agora santamente unidos em matrimônio, possam gozar de saúde e paz, rezemos ao Senhor."/>
        <Todos text="Senhor, escutai a nossa prece!"/>
        <Especifico ini="2." text="Para que abençoe a sua união como abençoou as bodas de Caná, rezemos ao Senhor. "/>
        <Especifico ini="3." text="Para que Deus lhes dê o amor e a paz e assim testemunhem o nome de cristãos, rezemos ao Senhor. "/>
        <Especifico ini="4." text="Por todo o povo cristão para que cresça sempre mais na santidade de vida, e por todos os que passam dificuldade, para que alcancem o auxílio da divina graça, rezemos ao Senhor. "/>
        <Especifico ini="5." text="Por todos os casais aqui presentes para que o Espírito Santo renove neles a graça deste sacramento, rezemos ao Senhor. "/>

        <Especifico text="Infundi, Senhor, nos corações destes esposos o espírito do vosso amor, para que sejam um só coração e uma só alma, e nada possa separar os que unistes, nem afligir os que abençoastes. Por Cristo, nosso Senhor."/>
      </section>

      <section id="liturgia-eucaristica" className="fol-body">
        <Rito text="Liturgia Eucarística" />
        <Subtitulo text="Ofertório"/>
        <Canto text="Canto: Laudate Dominum, Mozart" />
        <Especifico text="Orai irmãos e irmãs para que o nosso sacrifício seja aceito por Deus Pai, todo-poderoso."/>
        <Todos text="Receba o Senhor por tuas mãos este sacrifício para a glória do teu nome para o nosso bem e de toda a santa Igreja."/>  

        <Subtitulo text="Sobre as oferendas" />
        <Especifico text="Recebei, ó Deus esta oferenda, pela sagrada instituição do casamento e protegei neste casal a união que estabelecestes. Por Cristo Nosso Senhor." />

        <Subtitulo text="Oração Eucarística I - (Prefácio: A dignidade do matrimônio)"/>
        <Especifico text="O Senhor esteja convosco." />
        <Todos text="Ele está no meio de nós." />
        <Especifico text="Corações ao Alto." />
        <Todos text="O nosso coração está em Deus." />
        <Especifico text="Demos graças ao Senhor nosso Deus." />
        <Todos text="É nosso dever e nossa salvação." />

        <Especifico text="Na verdade, é justo e necessário é nosso dever e salvação dar-vos graças sempre e em todo lugar, Senhor Pai-Santo, Deus eterno e todo-poderoso, por Cristo, Senhor nosso. Nas núpcias, firmastes um suave jugo de amor e uma aliança indissolúvel de paz. Abençoais a fecundidade da família para que os filhos e as filhas nela nascidos aumentem o número dos vossos filhos e filhas de adoção. Os que nascem para a alegria de todos, renascem pelo batismo, para a comunidade Cristã. Por essa razão, bendizemos vossa providência, e com os anjos e com todos os santos proclamamos jubilosos, vossa vontade, cantando a uma só voz:" />
        <Todos text="Santo, Santo, Santo, Senhor Deus do universo! O céu e a terra proclamam a vossa glória. Hosana nas alturas! Bendito o que vem em nome do Senhor! Hosana nas alturas!" />

        <Especifico text="Pai de misericórdia, a quem sobem nossos louvores, nós vos pedimos por Jesus Cristo, vosso Filho e Senhor nosso, que abençoeis estas oferendas apresentadas ao vosso altar." />
        <Todos text="Abençoai nossa oferenda, ó Senhor!" />

        <Especifico text="Nós as oferecemos pela vossa Igreja santa e católica: concedei-lhe paz e proteção, unindo-a num só corpo e governando-a por toda a terra. Nós as oferecemos também pelo vosso servo o Papa Francisco, por nosso Bispo Gregório, e por todos os que guardam a fé que receberam dos apóstolos." />
        <Todos text="Conservai a vossa Igreja sempre unida." />

        <Especifico text="Lembrai-vos, ó Pai, dos vossos filhos e filhas e de todos os que circundam este altar, dos quais conheceis a fidelidade e a dedicação em vos servir. Eles vos oferecem conosco este sacrifício de louvor por si e por todos os seus, e elevam a vós as suas preces para alcançar o perdão de suas faltas, a segurança em suas vidas e a salvação que esperam." />
        <Todos text="Lembrai-vos, ó Pai, de vossos filhos!" />

        <Especifico text="Em comunhão com toda a Igreja, veneramos a sempre Virgem Maria, Mãe de nosso Deus e Senhor Jesus Cristo; e também São José, esposo de Maria, os santos Apóstolos e Mártires: Pedro e Paulo, André (Tiago e João, Tomé, Tiago e Filipe, Bartolomeu e Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Sisto, Cornélio e Cipriano, Lourenço e Crisógono, João e Paulo, Cosme e Damião) e todos os vossos Santos. Por seus méritos e preces concedei-nos sem cessar a vossa proteção. Por Cristo, Senhor nosso. Amém." />
        <Todos text="Em comunhão com toda Igreja aqui estamos!" />

        <Especifico text="Recebei, ó Pai, com bondade, a oferenda dos vossos servos e de toda a vossa família; dai-nos sempre a vossa paz, livrai-nos da condenação e acolhei-nos entre os vossos eleitos. Por Cristo, Senhor nosso. Amém." />
        <Especifico text="Dignai-vos, ó Pai, aceitar e santificar estas oferendas, a fim de que se tornem para nós o Corpo e o Sangue de Jesus Cristo, vosso Filho e Senhor nosso." />
        <Todos text="Santificai nossa oferenda, ó Senhor!" />

        <Comum text="Na noite em que ia ser entregue, ele tomou o pão em suas mãos, elevou os olhos a vós, ó Pai, deu graças e o partiu e deu a seus discípulos, dizendo:"/>
        <Comum text="TOMAI, TODOS E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS."/>
        <Comum text="Do mesmo modo, ao fim da ceia, ele tomou o cálice em suas mãos, deu graças novamente e o deu a seus discípulos, dizendo:"/>
        <Comum text="TOMAI, TODOS E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM."/>
        <Comum text="Eis o mistério da fé!"/>
        <Todos text="Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição."/>

        <Especifico text="Celebrando, pois, a memória da paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício perfeito e santo, o pão da vida eterna e cálice da salvação." />
        <Todos text="Recebei, ó Senhor, a nossa oferta!"/>

        <Especifico text="Recebei, ó Pai, esta oferenda, como recebestes a oferta de Abel, o sacrifício de Abraão e os dons de Melquisedeque. Nós vos suplicamos que ela seja levada à vossa presença, para que, ao participarmos deste altar, recebendo o Corpo e o Sangue de vosso Filho, sejamos repletos de todas as graças e bênçãos do céu." />
        <Todos text="Recebei, ó Senhor, a nossa oferta!"/>

        <Especifico text="Lembrai-vos, ó Pai, dos vossos filhos e filhas que partiram desta vida, marcados com o sinal da fé. A eles, e a todos os que adormeceram no Cristo, concedei a felicidade, a luz e a paz." />
        <Todos text="Lembrai-vos, ó Pai, dos vossos filhos!"/>

        <Especifico text="E a todos nós pecadores, que confiamos na vossa imensa misericórdia, concedei, não por nossos méritos, mas por vossa bondade, o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé (Inácio, Alexandre, Marcelino e Pedro; Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia) e todos os vossos santos. Por Cristo, Senhor nosso." />
        <Todos text="Concedei-nos o convívio dos eleitos!"/>

        <Comum text="Por ele não cessais de criar e santificar estes bens e distribuí-los entre nós."/>
        <Especifico text="Por Cristo, com Cristo, em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória, agora e para sempre." />
        <Todos text="Amém."/>

        <Subtitulo text="Rito da Comunhão"/>
        <Especifico text="Obedientes a palavra do Salvador e formados por seu divino ensinamento ousamos dizer:"/>
        <Todos text="Pai nosso..."/>

        <Especifico text="Caros fiéis, roguemos a Deus que derrame suas bênçãos sobre Eduardo e Giovana que se uniram em Cristo pela aliança sagrada do Matrimônio, para que se tornem um só coração pela caridade e pelo sacramento do Corpo e do Sangue de Cristo. "/>
        <Comum text="Ó Deus, santificastes misteriosamente a união conjugal, desde o princípio a fim de prefigurar no vínculo nupcial o mistério de Cristo e da Igreja."/>
        <Comum text="Considerai agora esta vossa filha Giovana, que, unida pelo matrimônio ao seu marido, súplica a vossa benção."/>
        <Comum text="O amor e a paz permaneçam em seu coração e busque sempre na Sagrada Escritura o exemplo das santas mulheres. Nela confie o seu marido e saiba honrá-la com a devida estima, reconhecendo-a companheira e co-herdeira da vida divina, amando-a com aquele amor com que o Cristo amou a sua Igreja."/>
        <Comum text="Nós vos pedimos, ó Pai, que estes vossos filhos permaneçam firmes na fé e amem os vossos mandamentos; que se conservem fiéis um ao outro e sejam para todos, um exemplo."/>
        <Comum text="Animados pela força do Evangelho sejam entre todos verdadeiras testemunhas de Cristo. Sejam fecundos em filhos, pais de comprovada virtude, e possam ver os filhos de seus filhos."/>
        <Comum text="Enfim após uma vida longa feliz, alcancem o reino do céu e o convívio dos santos. Por Cristo, nosso Senhor."/>
        <Todos text="Amém."/>
        <Especifico text="A paz do Senhor esteja sempre convosco!"/>
        <Todos text="O amor de Cristo nos uniu."/>

        <Canto text="Canto: Cordeiro de Deus"/>
        
        <Especifico text="Feliz os convidados para o banquete nupcial do Cordeiro."/>
        <Comum text="Eis o Cordeiro de Deus que tira o pecado do mundo."/>
        <Todos text="Senhor, eu não sou digno que entreis em minha morada, mas dizei uma só palavra e sei salvo."/>

        <Subtitulo text="Antífona da comunhão"/>
        <Comum text="Cristo amou a Igreja e se entregou por ela, a fim de preparar para si uma esposa santa e imaculada."/>
         
        <Canto text="Canto de Comunhão: Ave verum, Mozart"/>
        <Canto text="Canto de Pós-Comunhão: Anima Christi, Marco Frisina"/>

        <Subtitulo text="Depois da comunhão"/>
        <Especifico text="Oremos. Fortificai, ó Deus, por este sacrifício, a união conjugal que instituístes na vossa providência, para que se tornem um só coração e uma só alma os que unistes em matrimônio e alimentastes com o mesmo pão e o mesmo cálice. Por Cristo, nosso Senhor."/>
        <Todos text="Amém."/>
      </section>

      <section id="ritos-iniciais" className="fol-body">
        <Rito text="Ritos Finais" />
        <Subtitulo text="Assinatura dos Papéis"/>
        <Canto text="Canto: Gabriel's Oboe, Ennio Morricone"/>

        <Subtitulo text="Oferecimento do buquê"/>
        <Canto text="Canto: Salve Regina"/>

        <Subtitulo text="Benção final"/>
        <Especifico text="Que Deus, vosso Pai, vos conserve no vosso amor, para que a paz de Cristo habite em vós e permaneça sempre na vossa casa."/>
        <Todos text="Amém."/>
        <Especifico text="Que Deus vos dê a benção dos filhos, o apoio dos amigos, e a paz com todos."/>
        <Todos text="Amém."/>
        <Especifico text="Sede no mundo um sinal do amor de Deus, abri vossa porta aos pobres e infelizes, que um dia vos receberão agradecidos na casa do Pai."/>
        <Todos text="Amém."/>
        <Especifico text="E a todos vós aqui reunidos, abençoe-vos o Deus todo-poderoso, Pai e Filho e + Espírito Santo."/>
        <Todos text="Amém."/>

        <Subtitulo text="Canto Final"/>
        <Canto text="Canto: Tema da 9ª sinfonia, Beethoven"/>
      </section>
    </div>
  )
}

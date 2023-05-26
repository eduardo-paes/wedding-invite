import toRoman from "./utils/toRomain";

//#region Comps
function Rito(props: any) {
  return (
    <h2 className="fol-rito">
      {toRoman(props.num)} - {props.text}
    </h2>
  );
}

function Todos(props: any) {
  return (
    <p>
      <strong>
        <strong className="fol-init">T.: </strong>
        {props.text}
      </strong>
    </p>
  );
}

function Italico(props: any) {
  return <p className="fol-canto">{props.text}</p>;
}

function Subtitulo(props: any) {
  return (
    <h2 className="fol-subtitle">
      {props.num}. {props.text}
    </h2>
  );
}

function Comum(props: any) {
  return <p>{props.text}</p>;
}

function Especifico(props: any) {
  const italic =
    props.italic === undefined || props.italic === false ? "none" : "fol-canto";
  const caption = props.ini === undefined ? "S.:" : props.ini;

  return (
    <p className={italic}>
      <strong className="fol-init">{caption}</strong> {props.text}
    </p>
  );
}

function Leitura(props: any) {
  return (
    <>
      <Subtitulo num={props.num} text={props.title} />
      <Italico text={props.antifon} />
      {props.resp && (
        <Especifico italic={true} ini="Refrão: " text={props.resp} />
      )}
      <Italico text={props.begin} />
      <Comum text={props.content} />
      <Italico text={props.end} />
    </>
  );
}
//#endregion

function App() {
  let countSubtitulo = 1;
  let countRito = 1;
  return (
    <div className="main-container folheto">
      <section className="fol-header">
        <h1 className="fol-title">
          Ritual da Missa de Casamento de Luiz Otávio e Tatianne
        </h1>
        <h2 className="fol-subtitle">
          {/* Festa de Nossa Senhora do Carmo
          <br /> */}
          15/07/2023
        </h2>
        <h2 className="fol-cite">
          "A felicidade íntima da família é a beleza que nos traz para mais
          perto de Deus."
          <br />
          São Luís Martin
        </h2>
      </section>

      <section id="ritos-iniciais" className="fol-body">
        <Rito num={countRito++} text="Ritos Iniciais" />
        <Especifico text="Em nome do Pai, e do Filho e do Espírito Santo." />
        <Todos text="Amém." />
        <Especifico text="A graça de Nosso Senhor Jesus Cristo, o amor do Pai e a comunhão do Espírito Santo estejam convosco!" />
        <Todos text="Bendito seja Deus que nos reuniu no amor de Cristo." />
        <Especifico text="Para a celebração deste casamento, meus irmãos e irmãs, felizes, aqui nos reunimos na casa do Senhor, no dia em que estes nossos amigos Luiz Otávio e Tatianne resolveram estabelecer o seu novo lar. Para eles este momento é de suma importância! Por isso, vamos acompanhá-los com a nossa amizade e nossa oração fraterna. Unidos a eles, ouviremos atentamente a Palavra que hoje Deus nos dirige. E depois, juntamente com a Santa Igreja, por meio de Jesus Cristo, nosso Senhor, vamos pedir a Deus Pai que acolha, abençoe e mantenha sempre unidos estes noivos, seus servos e nossos irmãos." />

        <Subtitulo num={countSubtitulo++} text="Ato Penitencial" />
        {/* <Canto text="Canto: Missa iste confessor, Palestrina"/> */}
        <Subtitulo num={countSubtitulo++} text="Oração do Dia" />
        <Especifico text="Oremos. Ó Deus, que desde o princípio santificastes misteriosamente a união conjugal, para prefigurar no casamento o mistério do Cristo e da Igreja, dai a Luiz Otávio e Tatianne realizar em sua vida este grande sacramento. Por nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo." />
      </section>

      <section id="liturgia-palavra" className="fol-body">
        <Rito num={countRito++} text="Liturgia da Palavra" />
        <Leitura
          num={countSubtitulo++}
          title={"Primeira Leitura - I Cor 12,31-13,8a"}
          antifon={"Se eu não tiver caridade, não sou nada."}
          begin={"Leitura da Primeira Carta de São Paulo aos Coríntios"}
          content={
            "Irmãos: Aspirai aos dons mais elevados.  Eu vou ainda mostrar-vos um caminho incomparavelmente superior. Se eu falasse todas as línguas, as dos homens e as dos anjos, mas não tivesse caridade, eu seria como um bronze que soa ou um címbalo que retine. Se eu tivesse o dom da profecia, se conhecesse todos os mistérios e toda a ciência, se tivesse toda a fé, a ponto de transformar montanhas, mas se não tivesse caridade. eu não seria nada. Se eu gastasse todos os meus bens para sustento dos pobres, se entregasse o meu corpo às chamas, mas não tivesse caridade, isso de nada me serviria. A caridade é paciente, é benigna; não é invejosa, não é vaidosa, não se ensoberbece; não faz nada de inconveniente, não é interesseira, não se encoleriza, não guarda rancor; não se alegra com a iniquidade, mas se regozija com a verdade. Suporta tudo, crê tudo, espera tudo, desculpa tudo. A caridade não acabará nunca."
          }
          end={"Palavra do Senhor."}
        />
        <Todos text="Graças a Deus." />

        <Leitura
          num={countSubtitulo++}
          title={"Salmo Responsorial - Sl 111(112), 1-2.3-4.5-7a.7bc-8.9"}
          resp={"Feliz de quem anda na lei do Senhor."}
          content={
            <>
              Feliz o homem que respeita o Senhor
              <br />
              e que ama com carinho a sua lei!
              <br />
              Sua descendência será forte sobre a terra,
              <br />
              abençoada a geração dos homens retos!
              <br />
              <br />
              Haverá glória e riqueza em sua casa,
              <br />
              e permanece para sempre o bem que fez.
              <br />
              Ele é correto, generoso e compassivo,
              <br />
              como luz brilha nas trevas para os justos.
              <br />
              <br />
              Feliz o homem caridoso e prestativo,
              <br />
              que resolve seus negócios com justiça.
              <br />
              Porque jamais vacilará o homem reto,
              <br />
              sua lembrança permanece eternamente!
              <br />
              <br />
              Ele não teme receber notícias más:
              <br />
              confiando em Deus, seu coração está seguro.
              <br />
              Seu coração está tranqüilo e nada teme,
              <br />
              e confusos há de ver seus inimigos.
              <br />
              <br />
              Ele reparte com os pobres os seus bens,
              <br />
              permanece para sempre o bem que fez.
              <br />e crescerão a sua glória e seu poder.
            </>
          }
        />

        <Leitura
          num={countSubtitulo++}
          title={"Segunda Leitura - Ef 5, 2a. 21-33 (mais longa)"}
          antifon={
            "Este mistério grande, e eu o interpreto em relação a Cristo e à Igreja."
          }
          begin={"Leitura da Carta de São Paulo aos Efésios"}
          content={
            "Irmãos: Vivei no amor, como Cristo nos amou e se entregou a si mesmo a Deus por nós. Vós que temeis a Cristo, sede solícitos uns para com os outros. As mulheres sejam submissas aos seus maridos como ao Senhor. Pois o marido é a cabeça da mulher, do mesmo modo que Cristo é a cabeça da Igreja, ele, o Salvador do Corpo. E como a Igreja é solícita por Cristo, sejam as mulheres solícitas em tudo pelos seus maridos. Maridos, amai as vossas mulheres, como Cristo amou a Igreja e se entregou por ela. Ele quis assim torná-la santa, purificando-a com o banho da água unida à Palavra. Ele quis apresentá-la a si mesmo esplêndida, sem mancha nem ruga, nem defeito algum, mas santa e irrepreensível. Assim é que o marido deve amar a sua mulher, como ao seu próprio corpo. Aquele que ama a sua mulher ama-se a si mesmo. Ninguém jamais odiou a sua própria carne. Ao contrário, alimenta-a e cerca-a de cuidados, como o Cristo faz com a sua Igreja; e nós somos membros do seu corpo! Por isso, o homem deixará seu pai e sua mãe e se unirá à sua mulher, e os dois serão uma só carne. Este mistério é grande, e eu o interpreto em relação a Cristo a à Igreja. Em todo o caso, cada um, no que lhe toca, deve amar a sua mulher como a si mesmo; e a mulher respeitar o seu marido."
          }
          end={"Palavra do Senhor."}
        />
        <Todos text="Graças a Deus." />

        <Subtitulo num={countSubtitulo++} text={"Aclamação ao Evangelho"} />
        {/* <Canto text="Canto: Aleluia, a Minh'alma Abrirei."/> */}
        <Leitura
          num={countSubtitulo++}
          title={"Evangelho - Jo 15, 12-16 "}
          antifon={"Este é o meu mandamento: Amai-vos uns aos outros."}
          begin={
            "+ Proclamação do Evangelho de Jesus Cristo, escrito por João."
          }
          content={
            " Naquele tempo, disse Jesus a seus discípulos: Este é o meu mandamento: amai-vos uns aos outros, assim como eu vos amei. Ninguém tem amor maior do que aquele que dá sua vida pelos amigos. Vós sois meus amigos, se fizerdes o que eu vos mando. Já não vos chamo servos, pois o servo não sabe o que faz o seu senhor. Eu vos chamo amigos, porque vos deis a conhecer tudo o que ouvi de meu Pai. Não fostes vós que me escolhestes, mas fui eu que vos escolhi e vos designei para irdes, e para que produzais fruto, e o vosso fruto permaneça. O que então pedirdes ao Pai em meu nome ele vo-lo concederá."
          }
          end={"Palavra da salvação."}
        />
        <Todos text="Glória a Vós, Senhor." />
        <Subtitulo num={countSubtitulo++} text={"Homilia"} />
      </section>

      <section id="ritos-matrimoniais" className="fol-body">
        <Rito num={countRito++} text="Rito Sacramental do Matrimônio" />
        <Especifico
          text="Caros noivos, Luiz Otávio e Tatianne, 
        viestes a esta Igreja, 
        para que, na presença do sacerdote e da comunidade cristã, 
        a vossa decisão de contrair Matrimônio 
        seja marcada por Cristo com um sinal sagrado.
        Cristo abençoa com generosidade o vosso amor conjugal. 
        Já vos tendo consagrado pelo batismo, 
        vai enriquecer e fortalecer-vos agora 
        com o sacramento do Matrimônio, 
        para que sejais fiéis um ao outro por toda a vida 
        e possais assumir todos os deveres do Matrimônio."
        />

        <Subtitulo
          num={countSubtitulo++}
          text="Diálogo antes do consentimento"
        />
        <Especifico text="Luiz Otávio e Tatianne viestes aqui para unir-vos em Matrimônio. Por isso, eu vos pergunto perante a Igreja: É de livre e espontânea vontade que o fazeis? " />
        <Especifico text="Sim!" ini="Noivos: " />
        <Especifico text="Abraçando o Matrimônio, ides prometer amor e fidelidade um ao outro. É por toda vida que prometeis? " />
        <Especifico text="Sim!" ini="Noivos: " />
        <Especifico text="Estais dispostos a receber com amor os filhos que Deus vos confiar, educando-os na lei de Cristo e da Igreja? " />
        <Especifico text="Sim!" ini="Noivos: " />

        <Subtitulo num={countSubtitulo++} text="Consentimento" />
        <Especifico text="Para manifestar o vosso consentimento em selar a sagrada aliança do Matrimônio, diante de Deus e da Igreja aqui reunida, dai um ao outro a mão direita. " />
        <Especifico
          ini="Noivo: "
          text="Eu, Luiz Otávio te recebo, Tatianne, por minha esposa e te prometo ser fiel amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias da nossa vida."
        />
        <Especifico
          ini="Noiva: "
          text="Eu, Tatianne te recebo, Luiz Otávio, por meu esposo e te prometo ser fiel, amar-te e respeitar-te na alegria e na tristeza, na saúde e na doença, todos os dias na nossa vida."
        />

        <Subtitulo num={countSubtitulo++} text="Aceitação do consentimento" />
        <Especifico text="O Deus de Abraão, o Deus de Isaac, o Deus de Jacó, o Deus que abençoou os nossos primeiros pais no paraíso confirme e abençoe em Cristo este compromisso que manifestastes perante a Igreja. Ninguém, separe o que Deus uniu. Bendigamos ao Senhor!" />
        <Todos text="Graças a Deus." />

        <Subtitulo
          num={countSubtitulo++}
          text="Benção e Entrega das alianças"
        />
        <Especifico text="Ó Deus, que fizestes aliança conosco, abençoai + as alianças de Luiz Otávio e Tatianne, para que estes vossos filhos permaneçam fiéis um ao outro e amem-se mutuamente em vossa paz. Por Cristo, nosso Senhor." />
        <Todos text="Amém." />

        <Especifico
          ini="Esposo: "
          text="Tatianne, recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."
        />
        <Especifico
          ini="Esposa: "
          text="Luiz Otávio, recebe esta aliança em sinal do meu amor e da minha fidelidade. Em nome do Pai, e do Filho e do Espírito Santo."
        />

        <Subtitulo num={countSubtitulo++} text="Oração dos Fiéis" />
        <Especifico text="Irmãos e irmãs em Cristo, lembrando a graça especial com que Deus quis abençoar e consagrar o amor destes nossos irmãos Luiz Otávio e Tatianne, vamos confiá-los ao Senhor." />

        <Especifico
          ini="1. "
          text="Para que estes nossos irmãos Luiz Otávio e Tatianne agora santamente unidos em matrimônio, possam gozar de saúde e paz, rezemos ao Senhor."
        />
        <Todos text="Senhor, escutai a nossa prece!" />
        <Especifico
          ini="2."
          text="Para que abençoe a sua união como abençoou as bodas de Caná, rezemos ao Senhor. "
        />
        <Especifico
          ini="3."
          text="Para que Deus lhes dê o amor e a paz e assim testemunhem o nome de cristãos, rezemos ao Senhor. "
        />
        <Especifico
          ini="4."
          text="Por todo o povo cristão para que cresça sempre mais na santidade de vida, e por todos os que passam dificuldade, para que alcancem o auxílio da divina graça, rezemos ao Senhor. "
        />
        <Especifico
          ini="5."
          text="Por todos os casais aqui presentes para que o Espírito Santo renove neles a graça deste sacramento, rezemos ao Senhor. "
        />

        <Especifico text="Infundi, Senhor, nos corações destes esposos o espírito do vosso amor, para que sejam um só coração e uma só alma, e nada possa separar os que unistes, nem afligir os que abençoastes. Por Cristo, nosso Senhor." />
      </section>

      <section id="liturgia-eucaristica" className="fol-body">
        <Rito num={countRito++} text="Liturgia Eucarística" />
        <Subtitulo num={countSubtitulo++} text="Ofertório" />
        {/* <Canto text="Canto: Laudate Dominum, Mozart" /> */}
        <Especifico text="Orai irmãos e irmãs para que o nosso sacrifício seja aceito por Deus Pai, todo-poderoso." />
        <Todos text="Receba o Senhor por tuas mãos este sacrifício para a glória do teu nome para o nosso bem e de toda a santa Igreja." />

        <Subtitulo num={countSubtitulo++} text="Sobre as oferendas" />
        <Especifico text="Recebei, ó Deus esta oferenda, pela sagrada instituição do casamento e protegei neste casal a união que estabelecestes. Por Cristo Nosso Senhor." />

        <Subtitulo
          num={countSubtitulo++}
          text="Oração Eucarística I - (Prefácio: A dignidade do matrimônio)"
        />
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

        <Comum text="Na noite em que ia ser entregue, ele tomou o pão em suas mãos, elevou os olhos a vós, ó Pai, deu graças e o partiu e deu a seus discípulos, dizendo:" />
        <Comum text="TOMAI, TODOS E COMEI: ISTO É O MEU CORPO, QUE SERÁ ENTREGUE POR VÓS." />
        <Comum text="Do mesmo modo, ao fim da ceia, ele tomou o cálice em suas mãos, deu graças novamente e o deu a seus discípulos, dizendo:" />
        <Comum text="TOMAI, TODOS E BEBEI: ESTE É O CÁLICE DO MEU SANGUE, O SANGUE DA NOVA E ETERNA ALIANÇA, QUE SERÁ DERRAMADO POR VÓS E POR TODOS PARA REMISSÃO DOS PECADOS. FAZEI ISTO EM MEMÓRIA DE MIM." />
        <Comum text="Eis o mistério da fé!" />
        <Todos text="Salvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição." />

        <Especifico text="Celebrando, pois, a memória da paixão do vosso Filho, da sua ressurreição dentre os mortos e gloriosa ascensão aos céus, nós, vossos servos, e também vosso povo santo, vos oferecemos, ó Pai, dentre os bens que nos destes, o sacrifício perfeito e santo, o pão da vida eterna e cálice da salvação." />
        <Todos text="Recebei, ó Senhor, a nossa oferta!" />

        <Especifico text="Recebei, ó Pai, esta oferenda, como recebestes a oferta de Abel, o sacrifício de Abraão e os dons de Melquisedeque. Nós vos suplicamos que ela seja levada à vossa presença, para que, ao participarmos deste altar, recebendo o Corpo e o Sangue de vosso Filho, sejamos repletos de todas as graças e bênçãos do céu." />
        <Todos text="Recebei, ó Senhor, a nossa oferta!" />

        <Especifico text="Lembrai-vos, ó Pai, dos vossos filhos e filhas que partiram desta vida, marcados com o sinal da fé. A eles, e a todos os que adormeceram no Cristo, concedei a felicidade, a luz e a paz." />
        <Todos text="Lembrai-vos, ó Pai, dos vossos filhos!" />

        <Especifico text="E a todos nós pecadores, que confiamos na vossa imensa misericórdia, concedei, não por nossos méritos, mas por vossa bondade, o convívio dos Apóstolos e Mártires: João Batista e Estêvão, Matias e Barnabé (Inácio, Alexandre, Marcelino e Pedro; Felicidade e Perpétua, Águeda e Luzia, Inês, Cecília, Anastácia) e todos os vossos santos. Por Cristo, Senhor nosso." />
        <Todos text="Concedei-nos o convívio dos eleitos!" />

        <Comum text="Por ele não cessais de criar e santificar estes bens e distribuí-los entre nós." />
        <Especifico text="Por Cristo, com Cristo, em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória, agora e para sempre." />
        <Todos text="Amém." />

        <Subtitulo num={countSubtitulo++} text="Rito da Comunhão" />
        <Especifico text="Obedientes a palavra do Salvador e formados por seu divino ensinamento ousamos dizer:" />
        <Todos text="Pai nosso..." />

        <Especifico text="Caros fiéis, roguemos a Deus que derrame suas bênçãos sobre Luiz Otávio e Tatianne que se uniram em Cristo pela aliança sagrada do Matrimônio, para que se tornem um só coração pela caridade e pelo sacramento do Corpo e do Sangue de Cristo. " />
        <Comum text="Ó Deus, santificastes misteriosamente a união conjugal, desde o princípio a fim de prefigurar no vínculo nupcial o mistério de Cristo e da Igreja." />
        <Comum text="Considerai agora esta vossa filha Tatianne, que, unida pelo matrimônio ao seu marido, súplica a vossa benção." />
        <Comum text="O amor e a paz permaneçam em seu coração e busque sempre na Sagrada Escritura o exemplo das santas mulheres. Nela confie o seu marido e saiba honrá-la com a devida estima, reconhecendo-a companheira e co-herdeira da vida divina, amando-a com aquele amor com que o Cristo amou a sua Igreja." />
        <Comum text="Nós vos pedimos, ó Pai, que estes vossos filhos permaneçam firmes na fé e amem os vossos mandamentos; que se conservem fiéis um ao outro e sejam para todos, um exemplo." />
        <Comum text="Animados pela força do Evangelho sejam entre todos verdadeiras testemunhas de Cristo. Sejam fecundos em filhos, pais de comprovada virtude, e possam ver os filhos de seus filhos." />
        <Comum text="Enfim após uma vida longa feliz, alcancem o reino do céu e o convívio dos santos. Por Cristo, nosso Senhor." />
        <Todos text="Amém." />
        <Especifico text="A paz do Senhor esteja sempre convosco!" />
        <Todos text="O amor de Cristo nos uniu." />

        {/* <Canto text="Canto: Cordeiro de Deus"/> */}

        <Especifico text="Feliz os convidados para o banquete nupcial do Cordeiro." />
        <Comum text="Eis o Cordeiro de Deus que tira o pecado do mundo." />
        <Todos text="Senhor, eu não sou digno que entreis em minha morada, mas dizei uma só palavra e sei salvo." />

        <Subtitulo num={countSubtitulo++} text="Antífona da comunhão" />
        <Comum text="Cristo amou a Igreja e se entregou por ela, a fim de preparar para si uma esposa santa e imaculada." />

        {/* <Canto text="Canto de Comunhão: Ave verum, Mozart"/> */}
        {/* <Canto text="Canto de Pós-Comunhão: Anima Christi, Marco Frisina"/> */}

        <Subtitulo num={countSubtitulo++} text="Depois da comunhão" />
        <Especifico text="Oremos. Fortificai, ó Deus, por este sacrifício, a união conjugal que instituístes na vossa providência, para que se tornem um só coração e uma só alma os que unistes em matrimônio e alimentastes com o mesmo pão e o mesmo cálice. Por Cristo, nosso Senhor." />
        <Todos text="Amém." />
      </section>

      <section id="ritos-iniciais" className="fol-body">
        <Rito num={countRito++} text="Ritos Finais" />
        <Subtitulo num={countSubtitulo++} text="Assinatura dos Papéis" />
        {/* <Canto text="Canto: Gabriel's Oboe, Ennio Morricone"/> */}

        {/* <Subtitulo num={countSubtitulo++} text="Oferecimento do buquê" /> */}
        {/* <Canto text="Canto: Salve Regina"/> */}

        <Subtitulo num={countSubtitulo++} text="Benção final" />
        <Especifico text="Que Deus, vosso Pai, vos conserve no vosso amor, para que a paz de Cristo habite em vós e permaneça sempre na vossa casa." />
        <Todos text="Amém." />
        <Especifico text="Que Deus vos dê a benção dos filhos, o apoio dos amigos, e a paz com todos." />
        <Todos text="Amém." />
        <Especifico text="Sede no mundo um sinal do amor de Deus, abri vossa porta aos pobres e infelizes, que um dia vos receberão agradecidos na casa do Pai." />
        <Todos text="Amém." />
        <Especifico text="E a todos vós aqui reunidos, abençoe-vos o Deus todo-poderoso, Pai e Filho e + Espírito Santo." />
        <Todos text="Amém." />

        <Subtitulo num={countSubtitulo++} text="Canto Final" />
        {/* <Canto text="Canto: Tema da 9ª sinfonia, Beethoven"/> */}
      </section>
    </div>
  );
}

export default App;

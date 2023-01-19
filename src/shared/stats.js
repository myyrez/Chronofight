export const playerStats = {
    vidaTotal: 50,
    spriteHeight: '310px',
    spriteWidth: '230px',
    src: require("../assets/image/char3.png"),
    alive: true,
}

export const enemyStats = {
    vidaTotal: 550,
    spriteHeight: '300px',
    spriteWidth: '350px',
    alive: true,
}

export const enemyStats2 = {
    vidaTotal: 500,
    spriteHeight: '230px',
    spriteWidth: '230px',
    alive: true
}

export const enemyStats3 = {
    vidaTotal: 700,
    spriteHeight: '300px',
    spriteWidth: '350px',
    alive: true
}

export const chronosStats = {
    areiaNome: 'Laços Temporais',
    areiaDano: 20,
    areiaChronosInicial: 3,
    areiaChronosTotal: 4,
    areiaDescricao: "Ataque com a forma física do Tempo. Finos feixes de areia que parecem vivos envolvem o alvo.",
    areiaEfeito: "O inimigo começa a definhar. Quando o turno dele finalizar, irá receber dano por 3 rodadas.",

    marcaNome: 'Olhar da Passagem',
    marcaChronosInicial: 2,
    marcaChronosTotal: 4,
    marcaDescricao: "Vislumbre a vida do oponente no Fluxo Temporal e entenda suas fraquezas por uma fração de segundo.",
    marcaEfeito: "Pode apenas ser usado enquanto prepara um ataque. Se acertar, o golpe será crítico.",

    escudoNome: 'Vazio Infinito',
    escudoChronosInicial: 5,
    escudoChronosTotal: 3,
    escudoDescricao: "Uma barreira de infinitude surge ao seu redor para desacelerar quaisquer ataques e perigos. Se desfaz ao tomar um golpe.",
    escudoEfeito: "Recebe 1/4 de dano do ataque seguinte. O inimigo recebe 3/4 do dano que causou. Você não morre com a habilidade ativa.",
}

export const transitionText = {
    t11: "Você acaba com a criatura, mas se sente atraído pelo caminho a frente. Chronos deve estar em ameaça.",
    t12: "Seguindo a estrada no pé da montanha, há uma caverna. Uma construção se revela lá dentro, parecendo uma base desgastada.",
    t13: "O lugar é escuro e tem um silêncio terrível, entrecortado pelo chiar de ratos. O único caminho é um corredor que parece não ter fim.",
    t14: "Finalmente, uma porta pode ser avistada no fim do caminho. Mas uma figura encapuzada lentamente surge das sombras e bloqueia seu caminho.",

    t21: "Os restos da entidade começam a se desmanchar em areia. Os grãos espalhados pelo corredor parecem ser atraídos para a porta no fim do caminho.",
    t22: "Você entra e vê uma sala de laboratório apenas com uma complexa máquina. Essa engenhosidade está projetando um portal instável.",
    t23: ["Do outro lado do portal, você vê", <p style={{color: 'rgb(247, 0, 91)', margin: 0, marginLeft: '10px'}}> estrelas e galáxias</p>, "."],
    t24: "Através do portal está o último defensor de Chronos.",

    t31: "Você conseguiu.",
    t32: "Chronos não é mais alguém, e sim este lugar infinito. O lugar que se tornou o próprio Tempo devido às engenharias dos mortais.",
    t33: "Ele está em suas mãos agora. Seus poderes reunidos podem criar e destruir tudo. Assim se inicia...",
    t34: ["O novo mundo de", <p style={{color: 'rgb(0, 254, 207)', margin: 0, marginLeft: '10px'}}>Chronos</p>, "."]
}

export const tutorialText = {
    p1: [
        "Bem-vindo ao Chronofight!",
        <br/>, <br/>,
        "Atravesse áreas, encare ameaças e use poderes para derrotá-las enquanto busca por deus Chronos."
    ],

    p2: [
        "Opções de Combate",
        <br/>, <br/>,
        "Chronofight é um jogo de turnos. Quando seu turno começa, é possível preparar um ataque, se curar de ferimentos ou usar Chronos, poderes do deus do Tempo. Estes precisam de energia para serem usados.",
        <br/>, <br/>,
        "Também é possível jogar no teclado.",
        <br/>, <br/>,
        "'T': abre e fecha a janela de tutorial",
        <br/>,
        "'A': ativa o botão 'Preparar'",
        <br/>,
        "'C': ativa o botão 'Curar'",
        <br/>,
        "'Shift': ativa o botão 'Chronos'",
    ],

    p3: [
        "Preparando um Ataque",
        <br/>, <br/>,
        "A caixa branca se abrirá relevando uma conta matemática com sinal de soma, subtração ou multiplicação. Para o causar dano ao inimigo, escreva o resultado correto e ataque.",
        <br/>, <br/>,
        "A barra branca ao lado representa quanto tempo resta para responder. Não atacar a tempo resulta em um contra-ataque do inimigo.",
        <br/>, <br/>,
        "'0, 9, -': aplica número ou sinal na resposta",
        <br/>,
        "'Enter': ativa o botão 'Atacar'",
        <br/>,
        "'Backspace': deleta a resposta",
    ],

    p4: [
        "Turno do Inimigo",
        <br/>, <br/>,
        "Sempre que terminar seu ataque, o inimigo começa o ataque dele. Desvie quando o indicador estiver na área vermelha.",
        <br/>, <br/>,
        "'Espaço': desvia de um ataque",
    ],

    p5: [
        "Escolhendo Chronos",
        <br/>, <br/>,
        "No inventário, você pode escolher Chronos que serão liberados ao progredir.",
        <br/>, <br/>,
        "O primeiro Chronos a ser usado na batalha carrega mais rápido ou devagar, dependendo do poder.",
        <br/>, <br/>,
        "Para ver essa aba, clique na ampulheta acima das opções de combate.",
        <br/>, <br/>,
        "'I': abrir inventário"
    ],

    p6: [
        "Verificando o Mapa",
        <br/>, <br/>,
        "Você pode checar em qual área está aqui. Com isso, você já sabe de tudo para aproveitar o jogo!",
        <br/>, <br/>,
        "Para ver essa aba, clique no mapa acima das opções de combate.",
        <br/>, <br/>,
        "'M': abrir mapa"
    ]
}
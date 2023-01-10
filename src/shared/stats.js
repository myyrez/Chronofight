export const playerStats = {
    vidaTotal: 50,
    spriteHeight: '280px',
    spriteWidth: '280px',
    src: require("../assets/image/char3.png"),
    alive: true,
}

export const enemyStats = {
    vidaTotal: 300,
    spriteHeight: '230px',
    spriteWidth: '230px',
    alive: true,
}

export const enemyStats2 = {
    vidaTotal: 350,
    spriteHeight: '230px',
    spriteWidth: '230px',
    alive: true
}

export const enemyStats3 = {
    vidaTotal: 500,
    spriteHeight: '230px',
    spriteWidth: '230px',
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
    marcaChronosTotal: 3,
    marcaDescricao: "Vislumbre a vida do oponente no Fluxo Temporal e entenda suas fraquezas por uma fração de segundo.",
    marcaEfeito: "Pode apenas ser usado enquanto prepara um ataque. Se acertar, o golpe será crítico.",

    escudoNome: 'Vazio Infinito',
    escudoChronosInicial: 4,
    escudoChronosTotal: 4,
    escudoDescricao: "Uma barreira de infinitude surge ao seu redor para desacelerar quaisquer ataques e perigos. Se desfaz ao tomar um golpe.",
    escudoEfeito: "Recebe metade de dano do ataque seguinte. O inimigo recebe metade do dano que causou. Você não morre com a habilidade ativa.",
}

export const tutorialText = {
    p1: [
        "Bem-vindo ao Chronofight!",
        <br/>, <br/>,
        "Atravesse áreas, defenda o Espaço-Tempo e use poderes para derrotar seres que querem o destruir."
    ],

    p2: [
        "Opções de Combate",
        <br/>, <br/>,
        "Chronofight é um jogo de turnos. Quando seu turno começa, é possível preparar um ataque, se curar de ferimentos ou usar Chronos, poderosos fragmentos do Espaço-Tempo que precisam de energia para serem usados.",
        <br/>, <br/>,
        "Também é possível jogar no teclado.",
        <br/>, <br/>,
        "'T': abre a janela de tutorial",
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
        "No inventário, você pode escolher Chronos que serão liberados ao progredir. Enquanto sua energia estiver zerada e efeitos não estiverem ativos em você, é possível trocá-los no meio do combate.",
        <br/>, <br/>,
        "Geralmente, o primeiro chronos a ser usado na batalha carrega mais rápido. Tente identificar quais e monte uma sequência para derrotar seus oponentes com mais eficácia.",
        <br/>, <br/>,
        "Para ver essa aba, clique na ampulheta acima das opções de combate.",
        <br/>, <br/>,
        "'I': abrir inventário"
    ]
}
const caixaPrincipal    = document.querySelector(".caixa-principal");
const caixaPerguntas    = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado    = document.querySelector(".caixa-resultado");
const textoResultado    = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em sua cidade ocorrem assédios e desrespeitos às mulheres e aos assentos prioritários?",
        alternativas: [
            "Sim, acontece com frequência. Estabelecer assentos  e portas de entrada e saída prioritários para gestantes, idosos, crianças e deficientes.",
            "Não ou raramente."
        ]
    },
    {
        enunciado: "O desmatamento no Brasil atingiu índices alarmantes., tornando-se praticamente cultural. Os efeitos estão sendo sentidos no dia-a-dia da população. É possível minimizar o desmatamento no país?",
        alternativas: [
            "Sim, por intermédio de políticas de fiscalização e controle ambiental rigoroso",
            "Não, porque as leis não são cumpridas"
        ]
    },
    {
        enunciado: "Qual as consequências do uso de agrotóxico na agricultura?",
        alternativas: [
            "Há um impacto muito grande no meio ambiente, causando prejuízos ao solo, água e atmosfera.",
            "A produção das espécies  é maior, reduz o controle de pragas, aumenta a distribuição da produção."
        ]
    }
]

let atual = 0
let perguntaAtual ;

function mostraPergunta (){
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent = perguntAtual.enunciado ;
    mostraAlternativas() ;
};

mostraPergunta() ;

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa  ;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


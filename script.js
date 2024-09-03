const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado:
        "No Brasil, em 2022, a média nacional apontou que 31,2% dos adolescentes estavam com excesso de peso. Qual o primeiro pensamento?",
      alternativas: [
        {
          texto: "Isso é preocupante!",
          afirmacao: "Ficou com receio de estar passando por essa situação.",
        },
        {
          texto: "Isso é bom!",
          afirmacao: "Pensou que pelo  menos agora os adolescentes não tem mais problemas para se alimentar.",
        },
      ],
    },
    {
      enunciado:
        "As estratégias de gamificação podem ser implementadas para conscientizar adolescentes sobre a adoção de práticas sustentáveis, como o uso de energia renovável, enquanto também incentivam hábitos saudáveis para combater a obesidade na adolescência?Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
        {
          texto:
            "É  importante a utilização de estratégias de gamificação, tais como: plataformas no ambiente escolar.",
          afirmacao: "É um processo mais atraente  e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias.",
        },
        {
          texto:
            "A utilização de estratégias de gamificação não seriam eficazes para conscientizar os alunos.",
          afirmacao: "Preocupado com que a abordagem possa simplificar questões complexas, reduzindo  a reflexão crítica dos alunos, devido a tendência pela educação tradicional.",
        },
      ],
    },
    
    {
      enunciado:
        "Qual a importância das energias renováveis para o mundo?",
      alternativas: [
        {
          texto:
            "É muito importante para o mundo atual.",
          afirmacao: "São opções inesgotáveis e sustentáveis sem gerar resíduos",
        },
        {
          texto:
            "Não tem tanta importância assim.",
          afirmacao: "Falta conhecimento para as questões ambientais atuais",
        },
      ],
    },
  ];
  
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    MostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  textoResultado.textContent = "";
  mostraAlternativas();
}



function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
 mostraPergunta();
}

function MostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligência Artificial?",
        alternativas:[{
            texto:"sim",
            afirmacao:"afirmacao da alternativa1"
    },
    {
        enunciado:"Pergunta 2",
        alternativas:[}
        texto:"Quem sabe...",
        afirmação:"Afirmação da alternativa 1"
    },
    {
        texto:"talvez",
        afirmação:"Afirmação da alternativa 2"
    }
    ] 
},
{
    
    
        enunciado:"Pergunta 3",
        alternativas:["Alternativa 1","Alternativa 2"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();

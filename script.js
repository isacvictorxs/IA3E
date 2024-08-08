const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const pergunta = [//abre a lista de objetos (itens)
    {//abre o iten
        enunciado: "pergunta 1",
        alternativa: ["alternativa 1", "alternativa 2" ]
    },
    {
        enunciado: "pergunta 2",
        alternativa: ["alternativa 1", "alternativa 2" ]
    },
    {
        enunciado: "pergunta 3",
        alternativa: ["alternativa 1", "alternativa 2" ]
    }

]
let posicao = 0;
let perguntaAtual;

function mostrapergunta (){
    
}
//Criando a funcao de flecha com frases aleatorias
const falar = () =>{
    const frases = [
        "Hoje está um dia bonito!",
        "Falta muito pra sexta-feira?",
        "Qual o cardápio de hoje no almoço?",
        "Vish, tem prova de matemática!!!",
    ];

//Criando uma variavel para armazenar a DIV com id "tagarela"
let tagarela = document.getElementById("tagarela");

//Criando variavel de controle para a frase exibida
let indice = 0

//Criando variavel para numero randola entre 0 e 1 (lembrando que o 1 nao entra na conta)
let numero = Math.random();

//Configurando o numero para a frase selecionada
if(numero> 0.75)
    indice = 3;
else if(numero>0.5) 
    indice= 2;
else if(numero>0.25)
    indice=1;

//Escrevendo a frase para o usuario
tagarela.innerHTML = frases[indice];
};

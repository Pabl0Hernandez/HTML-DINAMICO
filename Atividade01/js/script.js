const trocarImagem = () => {
  let imagem = document.getElementById("imagem");

  //Criando o vetor de imagens
  const trocarImagens = [
    "img/Pablo01.jpg",
    "img/Pablo02.jpeg",
    "img/Pablo03.jpg",
    "img/Pablo04.jpg",
  ];

  //Criando variável de controle para a frase exibida
  let indice = 0;

  //Criando variável para número aleatório entre 0 e 1 (lemnrando que o 1 não entra na conta)
  let numero = Math.random();

  //Configurando o número para a frase selecionada
  if (numero > 0.75) indice = 3;
  else if (numero > 0.5) indice = 2;
  else if (numero > 0.25) indice = 1;

  imagem.src = trocarImagens[indice];
};

const somar = () => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
  let resultado = parseFloat(valor1) + parseFloat(valor2);

  frmCalculadora.inResultado.value = resultado;
};

const subtrair = () => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
  let resultado = parseFloat(valor1) - parseFloat(valor2);

  frmCalculadora.inResultado.value = resultado;
};

const multiplicar = () => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
  let resultado = parseFloat(valor1) * parseFloat(valor2);

  frmCalculadora.inResultado.value = resultado;
};

const dividir = () => {
  let valor1 = frmCalculadora.inValor1.value;
  let valor2 = frmCalculadora.inValor2.value;
  let resultado = parseFloat(valor1) / parseFloat(valor2);

  frmCalculadora.inResultado.value = resultado;
};


//O jeito que o professor passou:

// switch (operador) {
//   case "+":
//     resultado = valor1 + valor2;
//     break;


//   case "-":
//     resultado = valor1 - valor2;
//     break;


//   case "*":
//     resultado = valor1 * valor2;
//     break;


//   case "/":
//     resultado = valor1 / valor2;
//     break;
// }
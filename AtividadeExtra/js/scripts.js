//----------------------------------- ATIVIDADE 01 -----------------------------------

const ligar = () => {
  let lampada = document.getElementById("lampada");

  //   lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

//----------------------------------- ATIVIDADE 02 -----------------------------------

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  if (qtdImagem <= 0)
    alert("O campo quantidade não pode estar vazio ou negativo!");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
    }
  }
};

//----------------------------------- ATIVIDADE 03 -----------------------------------

const validaForm = () => {
  let formulario = document.getElementById("frmRegistro");
  let divMensagem = document.getElementById("mensagem-erro");
  let mensagem = "";
  let erro = false;

  let nome = formulario.inCli.value;
  if (nome.length < 5) {
    mensagem += "O Campo nome deve conter pelo menos, 5 Caracteres!\n";
    erro = true;
  }

  let data = formulario.inData.value;
  if (data == "") {
    mensagem += "O Campo data não pode tar vazio!\n";
    erro = true;
  }

  let telefone = formulario.inFone.value;
  if (telefone == "") {
    mensagem += "O Campo telefone não pode tar vazio!\n";
    erro = true;
  }

  let email = formulario.inMail.value;
  if (email == "") {
    mensagem += "O Campo email não pode tar vazio!\n";
    erro = true;
  }

  let nomeproduto = formulario.inProd.value;
  if (nomeproduto == "") {
    mensagem += "O Campo nome do Produto não pode tar vazio!\n";
    erro = true;
  }

  let quantidade = formulario.inQtd.value;
  if (quantidade == "") {
    mensagem += "O Campo quantidade não pode tar vazio!\n";
    erro = true;
  }

  let valor = formulario.inVal.value;
  if (valor == "") {
    mensagem += "O Campo valor não pode tar vazio!\n";
    erro = true;
  }

  if (erro == true) {
    divMensagem.style.display = "block";
    divMensagem.innerText = mensagem;
  }
};

// O do professor fico assim:
// const validaForm = () => {
//   let erro = document.getElementById("mensagem-erro");
//   erro.innerHTML = "";

//   let nome = inCli;
//   let data = inData;
//   let fone = inFone;
//   let mail = inMail;
//   let prod = inProd;
//   let qtd = inQtd;
//   let val = inVal;

//   switch (true) {
//     case nome.value.trim() == "" ||
//       data.value == "" ||
//       fone.value == "" ||
//       mail.value == "" ||
//       prod.value == "" ||
//       qtd.value == "" ||
//       val.value == "":
//       erro.style.display = "block";
//       erro.innerHTML = "Erro: O campo não pode estar vazio!";
//       break;

//     case val.value < 0 || qtd.value < 0:
//       erro.style.display = "block";
//       erro.innerHTML = "Erro: Este campo não pode ser negativo!";

//       break;

//     case nome.value.trim().length < 5 || prod.value.trim().length < 5:
//       erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
//       erro.style.display = "block";
//       break;

//     default:
//       break;
//   }
// };

//----------------------------------- ATIVIDADE 04 -----------------------------------
const calcular = () => {
  // Pegando os valores dos inputs
  let valPedido = parseFloat(document.getElementById('inValorPedido').value);
  let perDesconto = 0; 
  let valDesconto = 0;  
  let valFinalPedido = 0; 


  if (valPedido >= 2000) {
    perDesconto = 1.5;  // Desconto de 1.5%
  } else if (valPedido >= 1500) {
    perDesconto = 1.0;  // Desconto de 1.0%
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;  // Desconto de 0.8%
  } else if (valPedido >= 500) {
    perDesconto = 0.5;  // Desconto de 0.5%
  }

  valDesconto = (valPedido * perDesconto) / 100;
  
  valFinalPedido = valPedido - valDesconto;

  document.getElementById('inPercDesc').value = perDesconto;  // Percentual de desconto
  document.getElementById('inValDesc').value = valDesconto.toFixed(2);  // Valor do desconto
  document.getElementById('inValFinal').value = valFinalPedido.toFixed(2);  // Valor final do pedido
};

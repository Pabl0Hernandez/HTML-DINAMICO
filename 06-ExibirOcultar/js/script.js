const exibir = () => {
    let preguica = document.getElementById("preguica");
    let botao = document.getElementById("btnChave");


    if(botao.textContent == "Exibir"){
        // preguica.style.display = "block"
        preguica.style.ocapacity = 1;
        botao.textContent = "Ocultar";
    }else{
        preguica.style.ocapacity = 0;
        botao.textContent = "Exibir";
    }
}

let prato = null;

function selecionarPrato(classePrato, nomePrato) {
    prato = nomePrato;
    const selecionado = document.querySelector(".lista-pratos .selecionado");        
    
    if(selecionado !== null) {
        selecionado.classList.remove('selecionado'); 
        const icone = selecionado.querySelector("ion-icon");
        icone.classList.add('escondido'); 
    }
    
    const seletor = "." + classePrato;    
    const pratoSelecionado = document.querySelector(seletor);
    pratoSelecionado.classList.add('selecionado');  
    const icone = pratoSelecionado.querySelector("ion-icon");
    icone.classList.remove("escondido");   
    
    confirmarPedido ()
}    

let bebida = null;

function selecionarBebida(classeBebida, nomeBebida) {
    bebida = nomeBebida;
    const selecionado = document.querySelector(".lista-bebidas .selecionado");        
    
    if(selecionado !== null) {
        selecionado.classList.remove('selecionado'); 
        const icone = selecionado.querySelector("ion-icon");
        icone.classList.add('escondido'); 
    }
    
    const seletor = "." + classeBebida;    
    const bebidaSelecionada = document.querySelector(seletor);
    bebidaSelecionada.classList.add('selecionado');  
    const icone = bebidaSelecionada.querySelector("ion-icon");
    icone.classList.remove("escondido");   

    confirmarPedido ()
}   

let sobremesa = null;

function selecionarSobremesa(classeSobremesa, nomeSobremesa) {
    sobremesa = nomeSobremesa;
    const selecionado = document.querySelector(".lista-sobremesas .selecionado");        
    
    if(selecionado !== null) {
        selecionado.classList.remove('selecionado'); 
        const icone = selecionado.querySelector("ion-icon");
        icone.classList.add('escondido'); 
    }
    
    const seletor = "." + classeSobremesa;    
    const sobremesaSelecionada = document.querySelector(seletor);
    sobremesaSelecionada.classList.add('selecionado');  
    const icone = sobremesaSelecionada.querySelector("ion-icon");
    icone.classList.remove("escondido");   

    confirmarPedido ()
}   

function confirmarPedido () {
    const selecionado = document.querySelector(".botao1");

    if (prato !== null && bebida !== null && sobremesa !== null) {
        selecionado.innerHTML="Fechar pedido"; 
        selecionado.disabled = false;     
    }
}

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorTotal = 0;

function fecharPedido () {
    const selecionado = document.querySelector(".fundo");
    selecionado.classList.remove('escondido')
    
    const pratoSelecionado = document.querySelector(".itens-pedido .prato-escolhido");
    pratoSelecionado.innerHTML=prato;
    pratoSelecionado.classList.add('estilo');

    const bebidaSelecionada = document.querySelector(".itens-pedido .bebida-escolhida");
    bebidaSelecionada.innerHTML=bebida;
    bebidaSelecionada.classList.add('estilo');

    const sobremesaSelecionada = document.querySelector(".itens-pedido .sobremesa-escolhida");
    sobremesaSelecionada.innerHTML=sobremesa;
    sobremesaSelecionada.classList.add('estilo');

    const precoPrato = document.querySelector(".valores .preco-prato");
    
    if (prato =='Strogonoff de frango') {
        valorPrato = "15.90";
    } else if (prato=='Frango Yin Yang') {
        valorPrato = "14.90";
    } else if (prato== 'Lasanha à bolonhesa') {
        valorPrato = "19.90";
    }

    precoPrato.innerHTML=valorPrato;    

    const precoBebida = document.querySelector(".valores .preco-bebida");

    if (bebida=='Pouquíssima coca') {
        valorBebida = "4.90";
    } else if (bebida=='Pouca coca') {
        valorBebida = "8.90";
    } else if (bebida=='Coca suficiente') {
        valorBebida = "11.90";
    }

    precoBebida.innerHTML=valorBebida;    

    const precoSobremesa = document.querySelector(".valores .preco-sobremesa");

    if (sobremesa=='Pudim') {
        valorSobremesa = "7.90";
    } else if (sobremesa=='Torta de limão') {
        valorSobremesa = "4.90";
    } else if (sobremesa='Bolo de laranja') {
        valorSobremesa = "10.90";
    }    

    precoSobremesa.innerHTML=valorSobremesa;
    
    valorTotal = parseFloat(valorPrato) + parseFloat(valorBebida) + parseFloat(valorSobremesa);
    
    const precoFinal = document.querySelector(".valores .total");
    valorTotalDecimal = valorTotal.toFixed(2);
    precoFinal.innerHTML= valorTotalDecimal;    
}

function cancelarPedido () {
    const cancelar = document.querySelector(".fundo");
    cancelar.classList.add('escondido');
}

function confirmarPedidoFinal () {
    const nome = prompt ("Qual é o seu nome?");
    const endereco = prompt ("Qual é o seu endereço?");

    let frase = "Olá, gostaria de fazer o pedido: \n - Prato: " + prato + "\n - Bebida: " + bebida + "\n - Sobremesa: " + sobremesa + "\n Total: R$" + valorTotalDecimal + "\n Nome: " + nome + "\n Endereço: " + endereco
    
    window.location.href="https://wa.me/?text=" + encodeURIComponent(frase);
               
}




   


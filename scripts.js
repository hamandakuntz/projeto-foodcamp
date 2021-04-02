
let prato;

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
}    

let bebida;

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
}   

let sobremesa;

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
}      



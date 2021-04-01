function selecionarPrato1 () {
    const pratoSelecionado1 = document.querySelector(".pratos");            
    pratoSelecionado1.classList.add("selecionado"); 
               
    const iconSelecionado1 = document.querySelector("ion-icon");            
    iconSelecionado1.classList.remove("escondido");
}    

    
function selecionarPrato2 () {
    const pratoSelecionado2 = document.querySelector(".pratos:nth-child(2)");            
    pratoSelecionado2.classList.add("selecionado"); 
            
    const iconSelecionado2 = document.querySelector(".pratos:nth-child(2) ion-icon");            
    iconSelecionado2.classList.remove("escondido"); 
}
    


function selecionarPrato3 () {
    const pratoSelecionado3 = document.querySelector(".pratos:nth-child(3)");            
    pratoSelecionado3.classList.add("selecionado"); 
                   
    const iconSelecionado3 = document.querySelector(".pratos:nth-child(3) ion-icon");            
    iconSelecionado3.classList.remove("escondido");
}
         
          
   
       



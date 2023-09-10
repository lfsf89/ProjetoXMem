var perssonagens = document.querySelectorAll(".perssonagem");

perssonagens.forEach((perssonagem) => {
    
    //console.log(perssonagem);
    let antes="ciclope";
    
    perssonagem.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450)
        {
           window.scrollTo({top:0, behavior:"smooth"});
        }
               
        const perssonagemselecionado=document.querySelector('.selecionado');

        perssonagemselecionado.classList.remove('selecionado');
        perssonagem.classList.add('selecionado');


        const imagemPersonagemGrande=document.querySelector(".perssonagem-grande");
        const idpersonagem=perssonagem.attributes.id.value;
        imagemPersonagemGrande.src=`./imagens/card-${idpersonagem}.png`;


        const nomePerssonagem = document.querySelector(".nome-perssonagem");
        
        nomePerssonagem.innerText=perssonagem.attributes.id.value;
        console.log(nomePerssonagem);

        const descricaoPersonagem = document.querySelector(".descricao-perssonagem");

        descricaoPersonagem.innerHTML=perssonagem.getAttribute("data-description")
        


        
            

      
            
        
        
        
    })
    
});


// for(i=0; i<perssonagens.length;i++)
// {
//     let cont=i;
//    perssonagens[i].addEventListener('click', (e)=>{
//     console.log(perssonagens[i]);
// });
// }

const mensagem = document.getElementById ('mensagem'); /*guarda a variavel mensageme pode ir alterando ela (input)*/

const botao = document.getElementById ('meuBotao'); 

const evento = document.getElementById ('eventoInvadir');

botao.addEventListener('click', 
    imprimir
); /*aguardando este evento ser operado pelo usúario (metodo)*/ 

botao.addEventListener('mouseover', 
    function(){
        mensagem.textContent = "Voce passou em mim.";
    }
);

botao.addEventListener('mouseout',
    function(){
        mensagem.textContent = ("Não volte aqui.")
    }
);

botao.addEventListener('mouseover', 
    function(){
        mensagem.innerHTML = alert ("Primata!")
    }
);

botao.addEventListener('mouseout', 
    function(){
        mensagem.innerHTML = alert ("excluindo system.32...")
    }
);






function imprimir(){
    mensagem.textContent = "Voce clicou em mim.";

}



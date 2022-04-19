let tela = document.querySelector('canvas');
let caneta = tela.getContext('2d');
caneta.fillStyle = 'gray';
caneta.fillRect(0,0,600,400);

function desenhaBolinha(x,y,raio){

    caneta.fillStyle = 'black';
    caneta.beginPath();
    caneta.arc(x,y,raio,0,2*Math.PI);
    caneta.fill();
}

function limpaTela(){
    caneta.clearRect(0,0,600,400);
}

let x = 30;
function atualizaTela(){
    limpaTela();
    desenhaBolinha(x,50,30);
    x++;
}

setInterval(atualizaTela, 20);
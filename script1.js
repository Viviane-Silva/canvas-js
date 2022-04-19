let tela = document.querySelector('canvas');
let caneta = tela.getContext('2d');

caneta.fillStyle = 'black';
caneta.fillRect(0,0,600,400);

function exibeBolinha( evento){
    
    let x = evento.pageX - tela.offsetLeft;
    let y = evento.pageY - tela.offsetTop;

    caneta.fillStyle = 'red';
    caneta.beginPath();
    caneta.arc(x,y,10,0,2*3.14);
    caneta.fill();
    console.log(x + ',' + y);
}

tela.onclick = exibeBolinha;
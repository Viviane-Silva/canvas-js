function desenhaQuadrado(x,y,color){
    let tela = document.querySelector('canvas');
    let pincel = tela.getContext('2d');

    pincel.fillStyle = color;
    pincel.fillStroke = 'black';
    pincel.fillRect (x,y,50,50);
    pincel.strokeRect (x,y,50,50);

    
}
// usando laço while
// let x =0;
// while(x < 600){
//     desenhaQuadrado(x,0,'yellow');
//     x = x + 50;
// }

// usando laço for
for (let x=0; x<600; x=x + 50){
    desenhaQuadrado(x,0,'blue')
}

desenhaQuadrado(0,0 , 'red');
// desenhaQuadrado(50,0 , 'blue');
// desenhaQuadrado(0,50 , 'green');
// desenhaQuadrado(0,100);
// desenhaQuadrado(50,100, 'yellow');
//4.24 Pac-Man 5//
/*
A partir del código que has dibujado en actividades anteriores, haz que Pac-Man coma las bolitas.

Pasos
1. Dibuja 3 bolitas blancas

2. Mueve a Pac-Man y haz que "coma" las bolitas
Mueve a Pac-Man horizontalmente y tapa las bolitas cuando pase por encima de ellas

3. Haz que la animación sea un bucle
Cuando Pac-Man salga por la parte derecha del canvas, haz que vuelva a aparecer por la izquierda y vuelve a mostrar también las bolitas

4. Anima el Pac-Man
Haz que Pac-Man abra y cierre la boca constantemente
*/

var pacScale = 50;
var pacHeight = 50;
var xpac =0;
var ypac = pacHeight* 10.24;
let bocaPacman = true;


var xUno= 50*11.6;
var xDos= 50*14.2;
var xTres= 50*16.8;
var arcStop= 330/360*2*3.14;
var arcStart=30/360*2*3.14;
  

//escalas bolitas
var bolitaScaleUno = pacScale; 
var bolitaScaleDos = pacScale; 
var bolitaScaleTres = pacScale; 

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(0);
  fill(255);
  ellipseMode(CENTER);
  ellipse(xUno, pacHeight* 10.24, bolitaScaleUno); // Primera bolita
  ellipse(xDos, pacHeight* 10.24, bolitaScaleDos); // Segunda bolita
  ellipse(xTres, pacHeight* 10.24, bolitaScaleTres); // Tercera bolita
  
  fill(255, 255, 0);
  
  if(frameCount%10 === 0){
    if (bocaPacman === false){
      bocaPacman = true;
      arcStart = 0;
      arcStop = TWO_PI;
  } else{
      bocaPacman = false;
      arcStop = 330/360*2*PI;
      arcStart = 30/360*2*PI;
  }
  }
  
  arc(xpac,ypac, pacScale*7,pacScale*7, arcStart, arcStop); // PAC - MAN
  xpac+=5; //se mueve el pacman

  
  
  if(xpac >= xUno - pacScale*7/2){
    bolitaScaleUno =0; //La bolita desaparece
  }
  
  if(xpac >= xDos - pacScale*7/2){
     bolitaScaleDos =0;//La bolita desaparece
  }
  
  if(xpac >= xTres - pacScale*7/2){
     bolitaScaleTres =0;//La bolita desaparece
  }
  
  if (xpac >= width){
    xpac = 0;
    bolitaScaleUno = pacScale;
    bolitaScaleDos = pacScale;
    bolitaScaleTres = pacScale;
  }
}
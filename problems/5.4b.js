//5.4b Pac-Man 6//
/*
Estructura en funciones el código elaborado en las PECs anteriores.

Pasos
1. Crea una función que se llame dibujarPacMan()
Crea una función que se llame dibujarPacMan() y copia dentro el código que dibuja a tu Pac-Man. Las variables decláralas globales (fuera de la función, para que no se inicialicen cada vez que llames a la función)

2. Crea una función que se llame dibujarFantasma()
Crea otra función que se llame dibujarFantasma() y introduce el código de tu fantasma

3. Anima la boca del Pac-Man para que se abra y se cierre
Dentro de la función dibujarPacMan() y ayudándote con condicionales, anima la boca del Pac-man para que se abra y se cierre. Al llamar a esta función desde draw(), tendrías que ver este movimiento en forma de loop

4. Modifica la función dibujarFantasma() para que reciba parámetros
Modifica la función dibujarFantasma() para que reciba los parámetros: _r, _g, _b y llámala en draw() 1 vez
*/

var canvasW = 1024;
var canvasH = 768;

//Var globales pacman
var pacScale = 70;
var pacHeight = 50;
var xpac =0;
var ypac = pacHeight* 10.24;
let bocaPacman = true;
var xUno= 50*11.6;
var xDos= 50*14.2;
var xTres= 50*16.8;
var arcStop= 330/360*2*3.14;
var arcStart=30/360*2*3.14;
  
//Var globales fantasma
 var desplazamiento = 400;
 var x0 = 980 -  desplazamiento;
 var y0 = 510 + 100

function setup() {
  createCanvas(canvasW, canvasH);
}

function draw() {
  background("black");
  dibujarFantasma(40, 30, 120);
  dibujarPacMan();
}


function dibujarPacMan() {
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
function dibujarFantasma(_r, _g, _b){
  beginShape(); 
  strokeCap(ROUND); 
  strokeJoin(ROUND); 
  fill(_r, _g, _b);
  vertex(x0, y0); // Vértice de inicio
  bezierVertex(x0, y0, x0, y0+100, x0+100, y0);           //Primer vertice
  bezierVertex(x0+100, y0, x0+150, y0+100, x0+200, y0);   //Segundo vertice
  bezierVertex(x0+200, y0, x0+300, y0+100, x0+300, y0);   //Tercer vertice
  bezierVertex(x0+300, y0, x0+300, y0+100, x0+300, y0-100);   //Quarto vertice
  bezierVertex(x0+300, y0-100, x0+250, y0-300, x0+150, y0-300);   //Quinto vertice
  bezierVertex(x0+150, y0-300, x0+50, y0-300, x0, y0-100);   //Quinto vertice
  bezierVertex(x0, y0-100, x0, y0-100, x0, y0);       //Sexto vertice
  endShape(); 
  
  //OJOS
  fill(255);
  noStroke; 
  ellipse(x0+200, y0-200, x0-930+desplazamiento, x0-920+desplazamiento); //Ojo derecho
  ellipse(x0+100, y0-200, x0-930+desplazamiento, x0-920+desplazamiento);  // Ojo izquierdo
  fill(0);
  ellipse(x0+105, y0-195, x0-955+desplazamiento, x0-955+desplazamiento);// Pupila izquierda
  ellipse(x0+205, y0-195, x0-955+desplazamiento, x0-955+desplazamiento); // Pupila derecha
}
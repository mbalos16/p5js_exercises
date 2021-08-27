//4.20 Rebote III//

/*
A partir del ejercicio 4.18, crea una segunda bola y haz que reboten entre ellas.

Pasos
1. Duplica la bola presente en el código del ejercicio 4.18
Duplica la bola para que hayan dos de diferentes colores con variables y controles de posición X independientes

2. Cambia la dirección de movimiento de la segunda bola
Haz que la segunda bola empiece a moverse desde el margen derecho del canvas, de modo que las dos bolas vayan convergiendo hacia el centro del lienzo

3. Haz que las bolas reboten al chocar entre sí
Modifica los controles para que las bolas reboten al chocar entre sí. Ojo, cada una de las bolas tiene que seguir rebotando también en el borde respectivo del canvas
*/

// Variables globales
var canvasWH = 500;
let posXUno = 0;
let posYUno= canvasWH/2;
let velX = 5;
let ellipseSize = 50;
let posXDos = canvasWH;
let posYDos = canvasWH/2;

function setup() {
  createCanvas(canvasWH, canvasWH);
}


function draw() {
  background('#858585');
  
  fill("red");
  noStroke();
  ellipse(posXUno, posYUno, ellipseSize);
  
  fill("yellow");
  ellipse(posXDos, posYDos, ellipseSize);

  // CÓDIGO QUE SE TIENE QUE ACTIVAR EN EL PASO 4
  
  posXUno = posXUno - velX;
  posXDos = posXDos + velX;

  
//____________________________posXUno
  if (posXUno < width/2 + ellipseSize/2) {  // Si la coordenada x de la elipse es menor a 0
    posXUno = width/2 + ellipseSize/2; // Ponemos la elipse en posición 0
  }
  

  if (posXUno > width - ellipseSize/2) { // Si la coordenada x de la elipse es mayor al ancho de pantalla
    posXUno = width - ellipseSize/2; // Ponemos la elipse en posición ancho de pantalla
  }
  
  
  
//____________________________PosXDos
  if (posXDos < 0 + ellipseSize/2) {  // Si la coordenada x de la elipse es menor a 0
    posXDos = ellipseSize/2; // Ponemos la elipse en posición 0
    velX = -velX; // Cambiamos el sentido la velocidad
  }

  if (posXDos > width/2 - ellipseSize/2) { // Si la coordenada x de la elipse es mayor al ancho de pantalla
    posXDos = width/2 - ellipseSize/2; // Ponemos la elipse en posición ancho de pantalla
    velX = -velX; // Cambiamos el sentido de la velocidad
  }
}
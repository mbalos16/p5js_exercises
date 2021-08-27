//4.19 Rebote II//
/*
A partir del ejercicio 4.18, modifica el código para que el movimiento y los rebotes se produzcan en vertical.

Pasos
1. Modifíca el movimiento para que sea vertical

2. Haz que los rebotes se produzcan en los bordes superior e inferior del canvas
Modifica los condicionales que controlan la posición de la bola, para que los rebotes se produzcan en los bordes de arriba y abajo del canvas

3. A cada rebote, modifica el color de la elipse y del background()
Cambia el color de la elipse y del background() cada vez que rebote la elipse. Usa variables para cambiar el color y así no tendrás que llamar a la funciones fill() y background() más de una vez
*/

// Variables globales
var canvasWH = 500;
let posX = canvasWH/2 ;
let posY = canvasWH/2;
let velX = 5;
let ellipseSize = 50;
let colorRelleno = "Black";
let colorFondo ="White";

function setup() {
  createCanvas(canvasWH, canvasWH);
}

function draw() {
  background(colorFondo);
  fill(colorRelleno);
  ellipse(posX, posY, ellipseSize);

  posY = posY + velX;

  if (posY < 0 + ellipseSize/2) {  // Si la coordenada y de la elipse es menor a 0
    posY = ellipseSize/2; // Ponemos la elipse en posición de la mitad de la elipse
    velX = -velX; // Cambiamos el sentido la velocidad
    
    colorFondo = "White";
    colorRelleno="Black";
  }

  if (posY > width - ellipseSize/2) { // Si la coordenada y de la elipse es mayor al ancho de pantalla
    posY = width - ellipseSize/2; // Ponemos la elipse en posición ancho de pantalla menos la mitad del tamaño de la ellipse
    velX = -velX; // Cambiamos el sentido de la velocidad
    
    colorFondo = "Black";
    colorRelleno="White";
  }
}
//4.14 Hello Animation//
/*
Vamos a hacer una animación moviendo la elipse.

Pasos
1. Haz que la elipse se mueva hacia la derecha
Modifica el valor de la variable circleX en la función draw() (colócala entre el background y el noStroke). Súmale 1 de la siguiente forma: circleX = circleX + 1; // Es equivalente a escribir circleX++;

2. Ahora haz la animación hacia arriba
Comenta la línea que has colocado en el paso anterior y modifica la variable circleY para que la elipse vaya hacia arriba

3. Y ahora haz la animación en diagonal
Combina movimiento horizontal y vertical para que la elipse se mueva en diagonal
*/

// Variables globales
var canvasWH = 500;
var circleX = canvasWH / 2;
var circleY = canvasWH / 2;
var circleDiameter = 100;
var circleFill = 255;
var backgroundColor = "#B3A47D";

function setup() {
  createCanvas(canvasWH, canvasWH);
}

function draw() {
  background(backgroundColor);
  circle(circleX, circleY, circleDiameter);
  //circleX++; //paso 1, ellipse derecha
  //circleY--;  //paso 2, ellipse arriba
  //paso 3, ellipse diagonal
  circleX++;
  circleY--;
  noStroke();
  fill(circleFill);

}
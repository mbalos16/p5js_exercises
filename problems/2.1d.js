//2.1d Variables 4//

/*
Corrige el siguiente código.

Pasos
1. Corrige los errores
Corrige el código para evitar los errores que aparecerán en la consola al ejecutar el programa.

2. Buenas prácticas de nomenclatura de las variables
Haz que el nombre de las variables siga las "buenas prácticas de nomenclatura" explicadas en teoría
*/

var canvasW = 300;
var canvasH = 300;
var squareX = canvasW/2;
var squareY = canvasH/2;
var squareSide = 100;
var squareColor = ("blue");
var backgroundColor = "#89D2DC";

function setup() {
  createCanvas(canvasW, canvasH);
}

function draw() {
  background(backgroundColor);
  rectMode(CENTER);
  
  noStroke();
  fill(squareColor);
  square(squareX,squareY,squareSide);
  
  noFill();
  stroke(squareColor);
  strokeJoin(ROUND);
  strokeWeight(2);
  square(squareX,squareY,squareSide*1.5);
  square(squareX,squareY,squareSide*2);
}
//2.6 Generar números aIeatorios - random()//

/*
Completa el siguiente código para que el círculo cambie de posición, el cuadrado cambie de tamaño y el triángulo cambie de opacidad cada vez que se ejecute el sketch. 

Pasos
1. Valores aleatorios
Primero deberás asignar valores aleatorios a las variables pertinentes


2. Completa el código
Completa las funciones que dibujan o colorean las formas.
*/

/*ORIGINAL
var circleX = 0;
var circleY = 0;
var circleSize = 200;
var squareX = 150;
var squareY = 150;
var squareSize = 0;
var triangleX = 150;
var triangleY = 300;
var triangleSize = 300;
var triangleOpacity = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  noStroke();
  
  // Asignamos los valores random
  circleX = // Valor random //;
  circleY = // Valor random //;
  squareSize = // Valor random //; 
  triangleOpacity = // Valor random //;
    
  fill(0,0,255);
  circle(// //); // Completa
  
  fill('red');
  rectMode(CENTER);
  square(// //); // Completa
  
  fill(// //); // Completa
  triangle(triangleX-triangleSize/3,triangleY, triangleX+triangleSize/3,triangleY,   triangleX,triangleY-triangleSize/2 );
}
*/

//SOLUCIÓN//
var circleX = 0;
var circleY = 0;
var circleSize = 200;
var squareX = 150;
var squareY = 150;
var squareSize = 0;
var triangleX = 150;
var triangleY = 300;
var triangleSize = 300;
var triangleOpacity = 0;

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  noStroke();
  
  // Asignamos los valores random
  circleX = random(0, width);
  circleY = random(0, height);
  squareSize = random(150, 300); 
  triangleOpacity = random(0, 255);
    
  fill(0,0,255);
  circle(circleX, circleY,circleSize);
  
  fill('red');
  rectMode(CENTER);
  square(squareX, squareY, squareSize);
  
  fill(255,255,0, triangleOpacity);
  triangle(triangleX-triangleSize/3,triangleY, triangleX+triangleSize/3,triangleY,   triangleX,triangleY-triangleSize/2 );
}

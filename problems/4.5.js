//4.5 Text Animation//

/*
A partir de las coordenadas verticales del mouse, modifica el tamaño del texto con tu nombre del ejercicio anterior.

Pasos
1. Asocia el tamaño del texto a una variable
Asocia el tamaño del texto a una variable para que te sea más fácil modificarlo de manera dinámica.

Completado
2. Modifica el tamaño del texto a partir de las coordenadas del ratón
Mediante la función map(), modifica el valor de la variable que acabas de crear asociándolo a la posición vertical del ratón.
*/

// Variables globales
var canvasWH = 500;
let desplazamiento = 3;
let tamanoTexto= 200;
let x = canvasWH/2;
let y = canvasWH/2;

function setup() {
  createCanvas(canvasWH, canvasWH);
  
}

function draw() {
  background(80);
  textSize(tamanoTexto);
  fill("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2, y);
  
  textSize(tamanoTexto);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", x +desplazamiento, y);
  
  textSize(tamanoTexto);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", x +desplazamiento*2, y);
  
  textSize(tamanoTexto);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", x +desplazamiento*3, y);
  
  textSize(tamanoTexto);
  noFill();
  stroke("WHITE");
  strokeWeight(0.4);
  textAlign(CENTER, CENTER);
  text("María", x +desplazamiento*4, y);
  
  tamanoTexto = map(mouseY, 0, canvasWH, 50, 200, true);
}


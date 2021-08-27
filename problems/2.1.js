//2.1 Variables 1//

/*
Corrige el código para evitar los errores que aparecerán en la consola al ejecutar el programa y modifica los nombres de las variables para que sigan las "buenas prácticas de nomenclatura" explicadas en la teoría.

Pasos
1. Corrige los errores
Corrige el código para evitar los errores que aparecerán en la consola al ejecutar el programa.

2. Buenas prácticas de nomenclatura de las variables
Haz que el nombre de las variables siga las "buenas prácticas de nomenclatura" explicadas en la teoría.
*/

// Variables globales 
var canvasW = 1024;
var canvasH = 768;
var circleX = canvasW/2;
var circleY = canvasH/2;
var circleW = 500;
var circleH = 500;
var circleFill = 255;
var backgroundColor = ('#B3A47D');

function setup() {
	createCanvas(canvasW, canvasH);
}
function draw() {
	background(backgroundColor);
	noStroke();
	fill(circleFill);
	ellipse(circleX,circleY,circleW,circleH);
}

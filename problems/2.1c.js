//2.1c Variables 3//

/*
Corrige el siguiente código.

Pasos
1. Corrige los errores
Corrige el código para evitar los errores que aparecerán en la consola al ejecutar el programa.

Completado
2. Buenas prácticas de nomenclatura de las variables
Haz que el nombre de las variables siga las "buenas prácticas de nomenclatura" explicadas en teoría
*/

var canvasW = 1024;
var canvasH = 768;
var circleX = canvasW/2;
var circleY = canvasH/2;
var circleW = 500;
var circleH = 500;
var circleFill = 255;
backgroundColor = ("#B3A47D");

function setup() {
	createCanvas(canvasW, canvasH);
	background(backgroundColor);
	stroke(circleFill);
	strokeWeight(2);
	line(0,canvasH/2,canvasW,canvasH/2)
} 

function draw() {
	noStroke;
	fill(circleFill);
	ellipse(circleX,circleY,circleW,circleH);
}
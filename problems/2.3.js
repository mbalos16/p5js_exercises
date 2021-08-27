//2.3 Variables Reservadas//
/*
Realiza los cambios indicados en los pasos del ejercicio y observa qué ocurre al ejecutar el código.

Pasos
1. Modifica la línea
Modifica la línea para que empiece en el punto 0,0 y acabe en el punto width, height (variables reservadas de p5.js, que representan los valores de ancho y alto del canvas. Las variables reservadas no hace falta declararlas)

2. Declara esta variable
---> var inicio = false; Dentro de la función draw cámbiala a true y a continuación escribe: ---> console.log(inicio); ¿Qué se imprime en la consola de p5.js?
*/

// Variables globales

var backgroundColor = "#3B5762";
var strokeFill = "#E96763";
var inicio = false;

function setup() {
	createCanvas(1024, 768);
}

function draw() {
	background(backgroundColor);
	stroke(strokeFill);
	strokeWeight(20);
	line(0, 0, width, height);
  console.log(inicio); //La consola imprime false con cada ejecución.
}


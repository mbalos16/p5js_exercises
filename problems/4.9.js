//4.9 Strings I – length//

/*
En este ejercicio empezaremos a familiarizarnos con las variables de tipo String y sus funciones. En concreto, utilizaremos la función length que nos devuelve la longitud del String.

Pasos
1. Añade un console.log()

Utiliza la función length para imprimir, mediante un console.log(), la cantidad de letras que tiene el párrafo
*/

var parrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background("white");
  fill(200);
  textSize(12);
  textLeading(15);
  text(parrafo, width / 2, 20, 100, 460); // text(texto, x, y, ancho, altura)
	console.log(parrafo.length);
}
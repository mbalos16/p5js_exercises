//4.6 Párrafos//

/*
Modifica el siguiente párrafo para que tenga un ancho de 200px y aumenta su interlineado. 

Pasos
1. Modifica el ancho del párrafo
Modifica el ancho del párrafo para que mida 200 px

2. Aumenta el interlineado del párrafo
*/
// Esta variable contiene un "String"
// String = Cadena de caracteres
var parrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");

  fill(200);
  textSize(12);
  textLeading(14);
  text(parrafo, width / 2, 100, 200, 300); // text(texto, x, y, ancho, altura)
}


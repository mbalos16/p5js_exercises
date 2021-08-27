//4.13 Strings III – keyTyped()//

/*
Completa el siguiente código para poder añadir texto al párrafo con el teclado (en tiempo de ejecución).

Pasos
1. Modifica la función keyTyped()
Modifica la función keyTyped() para ir añadiendo texto a la variable parrafo con el teclado (en tiempo de ejecución)
*/

var parrafo = "Escribe...";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");
  fill(50);
  textSize(24);
  textLeading(30);
  text(parrafo, width / 2, 100, 100, 300); // text(texto, x, y, ancho, altura)
}

function keyTyped() {
  parrafo = parrafo + key;
}
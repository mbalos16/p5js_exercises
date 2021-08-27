//4.10 Strings II – substring()//
/*
Completa el siguiente código para visualizar letra por letra tu nombre.

Pasos
1. Completa el código para mostrar tu nombre letra por letra
Entiende el funcionamiento del código y complétalo para que visualice tu nombre letra por letra

2. Aplica a tu nombre una fuente del sistema
Aplica la fuente a tu texto
*/

var nombre = "MARÍA"; // Completa...
var posicion = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(8); // Velocidad de frames por segundo
}

function draw() {
  background(40);
  fill("white");

  textSize(400);
  textAlign(CENTER, CENTER);
  text(nombre.substring(posicion, posicion + 1), width / 2, height / 2);
  // Seleccionamos una parte del String de esta forma:
  // nombre.substring(posición empezar selección, posición acabar selección)

  posicion = posicion+1; //o posicion++

  if ( posicion > nombre.length) {
    posicion = 0;
  }
}
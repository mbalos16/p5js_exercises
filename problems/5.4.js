//5.4 Space Invaders 7//

/*
Estructura en funciones el código que te proporcionamos a continuación.

Pasos
1. Crea la función dibujarAlien()
Crea la función dibujarAlien() y copia dentro el código que dibuja al Alien. No te olvides de llamar a la función para dibujar el Alien

2. Crea la función movimientoAlien()
Crea la función movimientoAlien() y copia dentro el código que mueve al Alien. No te olvides de llamar a la función
*/

var escala = 9;
var pos = 100;
var velX = 0;
var velY = 0;
var contX = 0;
var contY = 0;

function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(0);
  contX++;
  contY++;
  movimientoAlien()  
  dibujarAlien()
}

function dibujarAlien(){
 

  for (var i = 0; i < 5; i++) { // columnas
    for (var j = 0; j < 3; j++) { // filas

      if (j == 0) {
        translate(velX, velY);
        translate(50 + i * 150, 10 + j * 150);
        // cuerpo alien
        noStroke();
        fill(255);
        rect(pos - escala, pos - escala * 4, escala * 2, escala);
        rect(pos - escala * 2, pos - escala * 3, escala * 4, escala);
        rect(pos - escala * 3, pos - escala * 2, escala * 6, escala);
        rect(pos - escala * 4, pos - escala, escala * 8, escala * 2);
        rect(pos - escala * 2, pos + escala, escala, escala);
        rect(pos + escala, pos + escala, escala, escala);
        rect(pos - escala * 3, pos + escala * 2, escala, escala);
        rect(pos - escala, pos + escala * 2, escala * 2, escala);
        rect(pos + escala * 2, pos + escala * 2, escala, escala);
        rect(pos - escala * 4, pos + escala * 3, escala, escala);
        rect(pos - escala * 2, pos + escala * 3, escala, escala);
        rect(pos + escala, pos + escala * 3, escala, escala);
        rect(pos + escala * 3, pos + escala * 3, escala, escala);

        // ojos alien
        fill(0);
        rect(pos - escala * 2, pos - escala, escala, escala);
        rect(pos + escala, pos - escala, escala, escala);
        resetMatrix();
      }
      if (j == 1) {
        translate(-velX, velY);
        translate(50 + i * 150, 10 + j * 150);
        // cuerpo alien
        noStroke();
        fill(255);
        rect(pos - escala, pos - escala * 4, escala * 2, escala);
        rect(pos - escala * 2, pos - escala * 3, escala * 4, escala);
        rect(pos - escala * 3, pos - escala * 2, escala * 6, escala);
        rect(pos - escala * 4, pos - escala, escala * 8, escala * 2);
        rect(pos - escala * 2, pos + escala, escala, escala);
        rect(pos + escala, pos + escala, escala, escala);
        rect(pos - escala * 3, pos + escala * 2, escala, escala);
        rect(pos - escala, pos + escala * 2, escala * 2, escala);
        rect(pos + escala * 2, pos + escala * 2, escala, escala);
        rect(pos - escala * 4, pos + escala * 3, escala, escala);
        rect(pos - escala * 2, pos + escala * 3, escala, escala);
        rect(pos + escala, pos + escala * 3, escala, escala);
        rect(pos + escala * 3, pos + escala * 3, escala, escala);

        // ojos alien
        fill(0);
        rect(pos - escala * 2, pos - escala, escala, escala);
        rect(pos + escala, pos - escala, escala, escala);
        resetMatrix();
      }
      
      if (j == 2) {
        translate(velX, velY);
        translate(50 + i * 150, 10 + j * 150);
        // cuerpo alien
        noStroke();
        fill(255);
        rect(pos - escala, pos - escala * 4, escala * 2, escala);
        rect(pos - escala * 2, pos - escala * 3, escala * 4, escala);
        rect(pos - escala * 3, pos - escala * 2, escala * 6, escala);
        rect(pos - escala * 4, pos - escala, escala * 8, escala * 2);
        rect(pos - escala * 2, pos + escala, escala, escala);
        rect(pos + escala, pos + escala, escala, escala);
        rect(pos - escala * 3, pos + escala * 2, escala, escala);
        rect(pos - escala, pos + escala * 2, escala * 2, escala);
        rect(pos + escala * 2, pos + escala * 2, escala, escala);
        rect(pos - escala * 4, pos + escala * 3, escala, escala);
        rect(pos - escala * 2, pos + escala * 3, escala, escala);
        rect(pos + escala, pos + escala * 3, escala, escala);
        rect(pos + escala * 3, pos + escala * 3, escala, escala);

        // ojos alien
        fill(0);
        rect(pos - escala * 2, pos - escala, escala, escala);
        rect(pos + escala, pos - escala, escala, escala);
        resetMatrix();
      }
    }
  }
}
function movimientoAlien(){
  if (contX < 40) {
    velX++;
  }


  if (contX > 40) {
    velX--;
  }

  if (contX == 81) {
    contX = 0;
  }

  if (contY > 100 && contY < 150) {
    velY++;
  }

  if (contY > 150) {
    contY = 0;
  }
}
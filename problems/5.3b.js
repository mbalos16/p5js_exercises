//5.3b Función con parámetros y return II//

/*
Completa el siguiente código, para devolver una velocidad u otra dependiendo del caso.

1. Modifica los returns de la función setVel()
Modifica los returns de la función setVel() para que devuelva una velocidad u otra dependiendo del parámetro que reciba
*/

var canvasW = 600;
var canvasH = 500;
var x = 0;


function setup() {
  createCanvas(canvasW, canvasH);
}

function draw() {
  background("black");
  if (x < width) {
    x += setVel('lento');
  } else {
    x = 0;
  }
  stroke("white");
  strokeWeight(1);
  line(x, 0, x, height);
}

// Esta función devuelve el valor de la velocidad enviada por parámetro.
function setVel(_tipo_vel) {
  if (_tipo_vel == 'rapido') {
    return 100;
  }

  if (_tipo_vel == 'lento') {
    return 5;
  }

  if (_tipo_vel == 'parar') {
    return x=canvasW/2;
  }
}
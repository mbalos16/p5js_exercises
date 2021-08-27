//5.6 Arrays I//

/*
Completa el siguiente código para que el tamaño de la primera elipse sea 100, el de la segunda 200 y la tercera 300.

Pasos
1. Completa el código con los datos contenidos en el array
Utiliza los datos contenidos en el array para determinar el tamaño de cada una de las elipses
*/

var medidas = [100, 200, 300];

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(50);

  noFill();
  stroke("black");
  ellipse(200, height / 2, medidas[0] , medidas[0]);
  noStroke();
  fill("#90edb9");
  ellipse(450, height / 2, medidas[1] , medidas[1]);
  fill(240);
  ellipse(800, height / 2, medidas[2] , medidas[2]);
}
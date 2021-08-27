//5.2 Función con parámetros//
/*
En este ejercicio modificaremos la función dibujarElipse() para que reciba parámetros.

Pasos
1. Modifica la función dibujarElipse()
Modifica la función dibujarElipse(), para que su color, posición y diámetro le vengan dados por parámetros

2. Dibuja 5 elipses con posiciones y colores random()
*/

function setup() {
    createCanvas(1024, 768);
    noLoop();
  }
  
  function draw() {
  dibujarElipse(colorEllipse=[random(0,255), random(0,255), random(0, 255)], positionEllipse=[random(0,1024), random(0,768)], diameterEllipse=500 );
  dibujarElipse(colorEllipse=[random(0,255), random(0,255), random(0, 255)], positionEllipse=[random(0,1024), random(0,768)], diameterEllipse=500 );
  dibujarElipse(colorEllipse=[random(0,255), random(0,255), random(0, 255)], positionEllipse=[random(0,1024), random(0,768)], diameterEllipse=500 );
  dibujarElipse(colorEllipse=[random(0,255), random(0,255), random(0, 255)], positionEllipse=[random(0,1024), random(0,768)], diameterEllipse=500 );
  dibujarElipse(colorEllipse=[random(0,255), random(0,255), random(0, 255)], positionEllipse=[random(0,1024), random(0,768)], diameterEllipse=500 );
  }
  
  function dibujarElipse(colorEllipse, positionEllipse, diameterEllipse) {
    strokeWeight(2);
    stroke(colorEllipse[0], colorEllipse[1], colorEllipse[2]);
    noFill();
    ellipse(positionEllipse[0], positionEllipse[1], diameterEllipse);
  }
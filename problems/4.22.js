//4.22 Movimientos curvos II//
/*
En este ejercicio seguiremos experimentando con las funciones sin() y cos().

Pasos
1. Modifica los ángulos que generan recorridos curvos
Modifica los valores iniciales del anguloSen y anguloCos para cambiar los recorridos curvos

2. Modifica el tamaño de la elipse
Cuando dibujas la elipse, cambia el valor de elipseWH que define su ancho y alto, por la variable y
*/

var r = 200; // Radio de la curva
var anguloSen = 0;
var anguloCos = 0;
var elipseWH = 30;
var x = 0;
var y = 0;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  // Añadimos alpha al color de fondo así podemos ver las posiciones anteriores
  background(255, 255, 255, 15);

  // Incrementamos el ángulo para mover la ellipse
  anguloCos += 0.01;
  anguloSen += 0.01;

  x = r * cos(anguloCos);
  y = r * sin(anguloSen);

  noStroke();
  fill(0);
   ellipse(x + width / 2, y + height / 2, y, y);
}
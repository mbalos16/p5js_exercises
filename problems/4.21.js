//4.21 Movimientos curvos I//

/*
Completa el valor de la variable y, para que la ellipse realice los 3 recorridos de arriba.

Pasos
1. Realiza el movimiento curvo de la función sin()
Realiza el movimiento curvo de la función sin() y déjalo comentado una vez lo tengas

2. Realiza el movimiento curvo de la función cos()
Realiza el movimiento curvo de la función cos() y déjalo comentado una vez lo tengas

3. Realiza el movimiento curvo de la función tan()
*/

var amplitud = 100; // Radio de la curva
var angulo = 75;
var elipseWH = 30;
var x = 0;
var y = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Añadimos alpha al color de fondo así podemos ver las posiciones anteriores 	
  background(255,255,255,15); 

  // Incrementamos el ángulo para mover la ellipse
  angulo += 0.01;

  //y += sin(angulo);
  //y += cos(angulo);
  //y+= tan(angulo);
  x += 0.5;

  noStroke();
  fill(0);
  ellipse(x, y + height / 2, elipseWH, elipseWH);
}
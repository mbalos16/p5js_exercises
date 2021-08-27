//4.18 Rebote I//

/*
En este ejercicio vamos a hacer una elipse que "rebote" en el límite del canvas.

Pasos
1. Dibuja una elipse
Dibuja una elipse de radio 50 dentro de la función draw()

2. Crea variables de posición
Crea las variables posX y posY e inicializalas a 50. Utilízalas como coordenadas x e y de tu elipse

3. Crea la variable de velocidad
Crea la variable velX e inicializala a 5

4. Activa el código comentado
En el draw(), activa el código comentado con la indicación: // CÓDIGO QUE SE TIENE QUE ACTIVAR EN EL PASO 4

5. Ajusta los rebotes
Si te fijas bien, el rebote ahora no se produce en el borde del canvas, si no que el círculo va un poco más allá del borde. Modifica el código para que el "rebote" se efectúe en justo el borde del canvas
*/

// Variables globales
var canvasWH = 500;
let posX = 0;
let posY = canvasWH/2;
let velX = 5;
let ellipseSize = 50;

function setup() {
  createCanvas(canvasWH, canvasWH);
}


function draw() {
  background('#858585');
  ellipse(posX, posY, ellipseSize);

  // CÓDIGO QUE SE TIENE QUE ACTIVAR EN EL PASO 4
  posX = posX + velX;

  if (posX < 0+ ellipseSize/2) {  // Si la coordenada x de la elipse es menor a 0
    posX = ellipseSize/2; // Ponemos la elipse en posición 0
    velX = -velX; // Cambiamos el sentido la velocidad
  }

  if (posX > width - ellipseSize/2) { // Si la coordenada x de la elipse es mayor al ancho de pantalla
    posX = width - ellipseSize/2; // Ponemos la elipse en posición ancho de pantalla
    velX = -velX; // Cambiamos el sentido de la velocidad
  }

}
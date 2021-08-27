//2.4 Pac-Man 3//
/*
Copia el código del comecocos que has realizado en el reto anterior (ejercicio 1.12) y organiza los valores en variables.

Pasos
1. Copia el código de la PEC anterior

2. Declara las variables
Declara las variables que crees que te pueden hacer falta al inicio del código.

3. Aplica las variables
Aplica las variables declaradas en las partes del código donde puedas reutilizar sus valores.
*/

var pacScale = 50;
var pacHeight = 50;
    
function setup() {
  createCanvas(1024, 768);
  background(0);
}

function draw() {
  fill(255, 255, 0);
  arc(pacScale*6, pacHeight* 10.24, pacScale*7, pacScale*7, 30/360*2*PI, 330/360*2*PI); // PAC - MAN
	fill(255);
  ellipseMode(CENTER);
  ellipse(pacScale*11.6, pacHeight* 10.24, pacScale); // Primera bolita
  ellipse(pacScale*14.2, pacHeight* 10.24, pacScale); // Segunda bolita
  ellipse(pacScale*16.8, pacHeight* 10.24, pacScale); // Tercera bolita
}
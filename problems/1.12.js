//1.12 Pac-Man 1 - Dibujo//

/*
Dibuja un comecocos (Pac-Man) persiguiendo tres bolitas.

Pasos
1. Dibuja el Pac-Man
Dibuja el Pac-Man utilizando la función arc()

2. Dibuja las tres bolitas
Dibuja las tres bolitas utilizando las funciones ellipse(). Experimenta si quieres con distintos modos de dibujar las bolitas con ellipseMode(CORNER) o ellipseMode(CORNERS)

3. Define los colores de las piezas
Define los colores de relleno de las piezas
*/

function setup() {
    createCanvas(1024, 768);
    background(0);
  }
  
  function draw() {
    fill(255, 255, 0);
    arc(300, 512, 350, 350, 30/360*2*PI, 330/360*2*PI); // PAC - MAN
      fill(255);
    ellipseMode(CENTER);
    ellipse(580, 512, 50); // Primera bolita
    ellipse(710, 512, 50); // Segunda bolita
    ellipse(840, 512, 50); // Tercera bolita
  }
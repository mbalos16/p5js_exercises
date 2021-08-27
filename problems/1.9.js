//1.9 Formas Básicas 2//

/*
Dibuja las formas primitivas que se describen en el paso 1 de manera que queden repartidas por el canvas.  Cambia los colores de relleno y el grosor del stroke de cada figura, tal y como se indica en los pasos 2 y 3.

Pasos:
1. Dibuja las siguientes formas primitivas
arc(), ellipse(), line(), point() quad(), rect(), triangle()

Completado
2. Cambia los colores

Completado
3. Cambia el grosor del trazo
*/

function setup() {
    createCanvas(200, 100);
  }
  
  function draw() {
    background(255, 0, 200);
    noStroke()
    fill("red");
    
    noStroke()
    arc(20, 25, 30, 30, PI, HALF_PI );
    
    noStroke()
    fill('magenta');
    ellipse(60, 25, 30, 30);
    
    strokeWeight(8)
    stroke(255,0,4);
    line(87, 12.5, 87, 40);
    
    strokeWeight(3)
    stroke(0);
    point(20, 50); 
    
    strokeWeight(2)
    stroke(255);
    fill('yellow');
    quad(140, 10, 110, 20, 140, 60, 180, 40);
    
    strokeWeight(2)
    stroke("#aa0543");
    fill('green');
    rect(10, 60, 40, 20);
    
    noStroke()
    fill('blue');
    triangle(80, 60, 95, 90, 150, 95);
  }
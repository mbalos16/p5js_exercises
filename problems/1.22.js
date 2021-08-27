//1.22 Pac-Man 2 - Dibujo//

/*
Copia tu código de la actividad 1.12 y añade el dibujo de un fantasma.

Pasos
1. Copia el código del Pac-Man
Copia tu código del Pac-Man del ejercicio 1.12

2. Dibuja el cuerpo del fantasma
Usa las funciones beginShape(), endShape(), vertex() y bezierVertex() para definir el cuerpo del fantasma

3. Dibuja los ojos del fantasma
Dibuja los ojos del fantasma, teniendo cuidado con la orden de dibujo y diferenciando el color de relleno de las dos partes que los componen
*/

function setup() {
    createCanvas(1500, 768);
    background(0);
  }
  
  function draw() {    
  //PACMAN
    fill(255, 255, 0);
    arc(300, 512, 350, 350, 30/360*2*PI, 330/360*2*PI); // PAC - MAN
    
    //BOLITAS
    fill(255);
    ellipseMode(CENTER);
    ellipse(580, 512, 50); // Primera bolita
    ellipse(710, 512, 50); // Segunda bolita
    ellipse(840, 512, 50); // Tercera bolita
    
    //FANTASMA
    
      
    beginShape(); 
    x0 = 980
    y0 = 510
    strokeCap(ROUND); 
    strokeJoin(ROUND); 
    fill(255,192,203);
    vertex(x0, y0); // Vértice de inicio
    bezierVertex(x0, y0, x0, y0+100, x0+100, y0);           //Primer vertice
    bezierVertex(x0+100, y0, x0+150, y0+100, x0+200, y0);   //Segundo vertice
    bezierVertex(x0+200, y0, x0+300, y0+100, x0+300, y0);   //Tercer vertice
    bezierVertex(x0+300, y0, x0+300, y0+100, x0+300, y0-100);   //Quarto vertice
    bezierVertex(x0+300, y0-100, x0+250, y0-300, x0+150, y0-300);   //Quinto vertice
    bezierVertex(x0+150, y0-300, x0+50, y0-300, x0, y0-100);   //Quinto vertice
    bezierVertex(x0, y0-100, x0, y0-100, x0, y0);       //Sexto vertice
    endShape(); 
    
    //OJOS
    fill(255);
    noStroke; 
    ellipse(x0+200,y0-200,x0-930, x0-920); //Ojo derecho
    ellipse(x0+100,y0-200,x0-930, x0-920);  // Ojo izquierdo
    fill(0);
    ellipse(x0+105,y0-195,x0-955, x0-955);  // Pupila izquierda
    ellipse(x0+205,y0-195,x0-955, x0-955);   // Pupila derecha
  }
  
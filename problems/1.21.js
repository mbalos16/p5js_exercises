//1.21 Formas personalizadas 2//
/*
Continúa la siguiente curva hasta el final del canvas.

Pasos
1. Entiende el código preexistente
Entiende la relación que hay entre las coordenadas de los vértices ya presentes en el código. Si es necesario, dibuja las coordenadas actuales (con todos sus valores) en un papel cuadriculado y ve marcando la continuación

2. Añade nuevos vértices
Añade nuevos vértices a la curva hasta llegar al final del canvas
*/

function setup() {
    createCanvas(1024, 768);
  }
  
  function draw() {
    background(255);
  
    noFill();
    stroke(40);
    strokeCap(ROUND); 
    strokeJoin(ROUND); 
    strokeWeight(15);
        
    beginShape(); 
    vertex(10, 400); // Vértice de inicio
    bezierVertex(10,400,60,330,110,400); // bezierVertex(v-inicio x, v-inicio y, v-curva x, v-curva y, v-final x, v-final y)
    bezierVertex(110,400,160,470,210,400);
    
    // Código alumno
    bezierVertex(210,400,260,330,310,400);
    bezierVertex(310,400,360,470,410,400);
    bezierVertex(410,400,460,330,510,400);
    bezierVertex(510,400,560,470,610,400);
    bezierVertex(610,400,660,330,710,400);
    bezierVertex(710,400,760,470,810,400);
    bezierVertex(810,400,860,330,910,400);
    bezierVertex(910,400,960,470,1010,400);
    
    endShape(); 
  }
  
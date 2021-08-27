//1.20 Formas personalizadas 1//

/*
Modifica la siguiente estrella para que tenga cinco puntas.

Pasos
1. Haz un esbozo sobre papel cuadriculado de la estrella
Dibuja las coordenadas actuales (con todos sus valores) en un papel cuadriculado y con otro color sobrepónle la estrella de 5 puntas

2. Mueve las coordenadas de los vértices ya existentes
Mueve las coordenadas de los vértices ya existentes para que se ajusten a la nueva colocación

3. Añade nuevos vértices
Añade dos vértices (una punta y un hueco) para completar la estrella
*/

function setup() {
    createCanvas(1024, 768);
  }
  
  function draw() {
    background(255);
    noFill();
    stroke(40);
    strokeCap(ROUND); //Redondea el final de un vértice
    strokeJoin(ROUND); //Redondea la unión de 2 vértices
    strokeWeight(30);
    beginShape(); //Empezamos a dibujar uniéndo puntos (vértices)
      vertex(500, 30);       // V1 - arriba
    vertex(600, 200);
    vertex(800, 230);
    vertex(600, 330);      // V2 - derecha
    vertex(700, 530);
    vertex(500, 430);      // V3 - abajo
    vertex(300, 530);
    vertex(400, 330);      // V4 - izquerda
    vertex(200, 230);
    vertex(400, 200);
    endShape(CLOSE); 
    /* Terminamos de dibujar y indicamos CLOSE 
       para que el 1er vértice y el último queden unidos
    */
  }
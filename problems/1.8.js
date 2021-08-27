//1.8 Formas Básicas 1//

/*
Modifica el código siguiente para que la cara esté sonriendo.

Pasos
1. Identifica la instrucción encargada del dibujo de la boca
Identifica la instrucción encargada del dibujo de la boca y búscala en la referencia de p5.js (https://p5js.org/es/reference/) para entender los parámetros que se usan


Completado
2. Modifica la instrucción encargada del dibujo de la boca
Modifica los parámetros de la función de dibujo de la boca para obtener una forma parecida a la de la imagen de referencia
*/

function setup() {
    createCanvas(500, 500)
  }
  
  function draw() {
    background("#EE5B5B");
    // Cara
    strokeWeight(8);
    stroke("#57C4B9");
    fill(255);
    ellipse(250,250,250,250);
    // Ojos
    fill("#57C4B9");
    ellipse(200,220,20,20);
    ellipse(295,220,20,20);
    // Boca triste
    noFill();
    strokeWeight(8);
    stroke("#57C4B9");
    arc(250, 280, 100, 80, TWO_PI, PI );
  }
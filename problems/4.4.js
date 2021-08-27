//4.4 Hello Text//

/*
Escribe tu nombre multiplices veces con la función text().

Pasos
1. Escribe tu nombre mediante la función text()
Escribe tu nombre en el centro de la pantalla (utiliza la función textAlign()), con un tamaño de 200px y el color de relleno que prefieras .

2. Duplica tu nombre varias veces
Duplica tu nombre varias veces (3px a la derecha cada vez), esta vez sin relleno, solo con stroke().
*/

// Variables globales
var canvasWH = 500;
let desplazamiento = 3;

function setup() {
  createCanvas(canvasWH, canvasWH);
  background(80);
}

function draw() {
  textSize(200);
  fill("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2,canvasWH/2);
  
  textSize(200);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2+desplazamiento,canvasWH/2);
  
  textSize(200);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2+desplazamiento*2,canvasWH/2);
  
  textSize(200);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2+desplazamiento*3,canvasWH/2);
  
  textSize(200);
  noFill();
  stroke("WHITE");
  textAlign(CENTER, CENTER);
  text("María", canvasWH/2+desplazamiento*4,canvasWH/2);
}


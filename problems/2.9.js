//2.9 Repetición FOR Anidados 1//

/*Añade un bucle for anidado en el ya existente que agregue dos filas más de cuadros.*/

/*Original:
var x = 0;
var y = 0;
var wh = 100;

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    noFill();
    stroke(0);
    strokeWeight(1);

    for(var i = 1; i < 5; i++){ // Columnas
        rect(x + 120 * i, y + 120, wh, wh);
    }
}
*/

//SOLUCIÓN://
var x = 0;
var y = 0;
var wh = 100;

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    noFill();
    stroke(0);
    strokeWeight(1);

    for(let j=1; j<4; j++){        //Filas dentro de un bucle que se repite 3 veces
      for(var i = 1; i < 5; i++){ // Columnas
        rect(x + 120 * i, y + 120*j, wh, wh);
    }
  }
}

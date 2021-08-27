//2.12 Condicional if 2//
/*
Utilizando bucles for anidados y condicionales dibuja los cuadrados como en la imagen.

1. Dibuja los cuadrados con el fill blanco
Primero dibuja los 15 cuadrados con el mismo relleno, con un for anidado

2. Cambia el fill de la tercera columna a negro
Utiliza un if dentro del bucle for para cambiar el color de los elementos de la tercera columna
*/

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
      for(var i = 1; i < 6; i++){ // Columnas
        rect(x + 120 * i, y + 120*j, wh, wh);
      if(i==2 || i==7 ||i==12){
        fill(0);
      }else{
        noFill();
      }
    }
  }
}
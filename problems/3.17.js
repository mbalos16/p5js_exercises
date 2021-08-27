//3.17 DRAG & DROP//

/*
En esta actividad vamos a aprender a hacer "drag and drop". El objetivo es ser capaces de “agarrar” un rectángulo y “soltarlo” en otra parte del canvas.

Pasos
1. Para ello, utiliza la función mousePressed()
Para realizar el drag (al hacer click encima del rectángulo, este tendrá que tener las mismas coordenadas del ratón)

2. Utiliza la función mouseReleased()
Para realizar el drop (detecta cuando dejamos de clicar el ratón y el rectángulo ya no tendrá que seguir el ratón).
*/

var x = 500; // Posición inicial x rectángulo
var y = 300; // Posición inicial y rectángulo
var w = 100;
var h = 80;


/*Declaramos una variable que cambia el valor 
de las funciones entre true y false */
let booleanValor = false;

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  background(255); 
  fill(100);
  noStroke();
  rect(x, y, w, h);
  
  /* ponemos una condición que se tiene que cumplir
  para reasignar el valor de la x y la y del cuadrado */
  if(booleanValor === true){
    
    //la x e y toman el valor del ratón menos anchura y algura
      x = (mouseX - w/2);
      y = (mouseY - h/2); 
  }
  
}

//Detectamos clic en el rectángulo
function mousePressed(){

  //detectamos que el ratón esta dentro del rectangulo cuando se cumpla esta condición
  if((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)) {
  
  //si se cumple la condición anterior, el valor de la variable es true
  booleanValor = true;
  }
}


//Detectamos fin del clic en el rectángulo
function mouseReleased() {

    booleanValor = false;
}

//3.13 Presionar una tecla 1//

/*
Cambia el color de la elipse a rojo apretando la tecla "r", a verde con la tecla "g", y a azul con la tecla "b". 
Importante: Cuando no se apriete ninguna tecla la elipse será negra. 
*/

var d = 300; 
var c = "black";
var x = 0;
var y = 0;

//Colores:
var r = "red";
var g = "green";
var b = "blue";

function setup() {
	createCanvas(1024, 768);
    
}

function draw() {
	background("white");

	x = width/2;
       y = height/2;
	noStroke();
	ellipse(x,y,d);
    
  if (keyIsPressed === false) {
  fill(c)
  }
}


function keyTyped() {
  if (key === 'r') {
    fill(r);
  } else if (key === 'g') {
    fill(g);
  } else if (key === 'b') {
    fill (b);
  }
}

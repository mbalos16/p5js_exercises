//3.14 Presionar una tecla 2//
/*Modifica la actividad 3.13 para que el color seleccionado permanezca en la elipse (que no vuelva al color negro).*/

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
  fill(c);
    
}

function draw() {
	background("white");

	x = width/2;
       y = height/2;
	noStroke();
	ellipse(x,y,d);
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

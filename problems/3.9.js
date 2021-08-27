//3.9 Click & ROLLOVER 1//
/*
1. Cambia el color de la elipse cuando hagas click con el ratón, pero solamente cuando hagas click dentro de la elipse.

2. Cuando el ratón esté dentro de la elipse utiliza la función cursor() para cambiar su flecha por una mano.
*/

var d = 300; 
var c = "black";
var x = 0;
var y = 0;
var e = "red";

function setup() {
    createCanvas(1024, 768);
}

function draw() {
    background("white");
    noStroke();
    x = width/2;
       y = height/2;
    
    fill(c);
  
  if(mouseIsPressed){
    if(dist(mouseX, mouseY, x, y )< d/2){
      fill(e);
      cursor(HAND, [d/2], [d/2]);
    }else{
      cursor(ARROW, [d/2], [d/2]);
    }
  }
  ellipse(x,y,d);
}
//3.10 Click & ROLLOVER 2//
/*
Modifica la actividad 3.9 para cambiar la elipse por un cuadrado cuando hagas click (al soltar el click, haz que vuelva a ser una elipse).
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
      
      rectMode(RADIUS);
      rect(x,y,d/2,d/2);
    }else{
      cursor(ARROW, [d/2], [d/2]);
    }
  }
  
  ellipse(x,y,d);
}
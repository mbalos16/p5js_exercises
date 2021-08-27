//4.17 Velocidad y aceleración//
/*
Haz que la bola vaya desacelerando y cuando su velocidad haya llegado a 0, haz que se pare.

Pasos
1. Modifica la variable velocidadX 
Modifica la variable velocidadX para aumentar la velocidad de la bola


2. Modifica la variable aceleracionX 
Modifica la variable aceleracionX para desacelerar la bola


3. Detén la bola
Mediante un condicional, para la bola cuando su velocidad llegue a 0
*/

// Variables globales
var canvasWH = 500;
var backgroundColor = "#B3A47D";

var circleX = canvasWH / 2;
var circleY = canvasWH / 2;
var circleWH = 50;
var circleFill = 255;
var velocitatX = 5;
var acceleracioX = -0.1;

function setup() {
  createCanvas(canvasWH, canvasWH);
}


function draw() {
  background(backgroundColor);
  //Incrementamos la velocidad X de la elipse
  velocitatX = velocitatX + acceleracioX;

  //Incrementamos la posición X de la elipse
  circleX = circleX + velocitatX;
  noStroke();
  fill(circleFill);
  ellipse(circleX, circleY, circleWH, circleWH);
  if(velocitatX<=0.0000000001){
    acceleracioX = 0;
  }
}
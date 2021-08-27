//2.13 While//
/*
Utilizando el condicional while haz lo siguiente:

Incrementa la variable posY 10px mientras sea menor al valor height/2.
Dibuja una línea horizontal en la posición posY cada vez.
*/

var posY = 0;

function setup() {
	createCanvas(600, 400);

	background(255);

	strokeWeight(0.5);
	stroke(0);

    while(posY <= height/2){
      posY += 10;
      line(0,posY,width, posY);
     }
}

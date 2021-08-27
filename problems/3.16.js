//3.16 PAC-MAN 4//
/*Copia el dibujo de tu Pac-man. Muévelo hacia la derecha o izquierda con flecha derecha e izquierda. (Si tu teclado no tiene flechas, selecciona otras 2 teclas).*/

var pacScale = 50;
var pacHeight = 50;
    x= 50;
function setup() {
  createCanvas(1024, 768);
 
}

function draw() {
  background(0);
  
  if (key === 'd'){
  x++;
    
  } else if (key === "a"){
  x--;
  }
  
  fill(255, 255, 0);
  arc(x*6, pacHeight* 10.24, pacScale*7,pacScale*7, 30/360*2*PI, 330/360*2*PI); // PAC - MAN
    
  fill(255);
  ellipseMode(CENTER);
  ellipse(x*11.6, pacHeight* 10.24, pacScale); // Primera bolita
  ellipse(x*14.2, pacHeight* 10.24, pacScale); // Segunda bolita
  ellipse(x*16.8, pacHeight* 10.24, pacScale); // Tercera bolita
}
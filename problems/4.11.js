//4.11 Strings II – substring()//

//Elige una palabra y haz que aparezca letra por letra.//

var canvasWH = 400;
var palabra = "¡Aloja!"; // Texto a deletrear 
var pos = 0; // Contador de posiciones para animar el texto 
let paso = 25;
let x = 0 - paso*3;

function setup() {
  createCanvas(canvasWH, canvasWH);
  frameRate(10); // Bajamos el frame rate para que se aprecie la animación
  background(140);
}

function draw() {  
  // Definimos la tipo y sus características
  textFont("Maison Mono");// Definimos la tipo y sus características
  textSize(40);
  textAlign(CENTER, CENTER);

  // Dibujamos un carácter desfasando su posición X respecto a la del anterior 
  text(palabra.substring(pos, pos + 1), x, canvasWH/2, canvasWH, 100);
  x+=paso;

  // Hacemos que la animación pase al siguiente carácter
  pos = pos+1;

  // Comprobamos si ha llegado a final de palabra para resetear la animación
  if (pos > palabra.length) {
    background(140);
    pos=0;
    x = 0-paso*3;
  }
}

//2.2b Variables 2//

/*
Optimiza el siguiente código, para  para guardar los valores del árbol central en variables.

Pasos
1. Declara las variables
Declara las variables que creas que te pueden hacer falta, al inicio del código

2. Aplica las variables
Una vez creada las variables del árbol central, dibuja un árbol a su izquierda y otro a su derecha (un poco más pequeños que el central). Los valores de sus formas tendrán que depender de las variables del árbol central.

3. Modifica las variables
Cuando tengas todos los valores en variables, prueba a cambiar el valor de la variable canvasH. ¿Qué pasa con las variables que dependen de ella?
*/

/*ORIGINAL:
// DECLARACIÓN VARIABLES GLOBALES 
// Pidemos usarlas en cualquier siti
var canvasW = 800; // En las variables podemos guardar 
// un número
var canvasH = 600;
var colorBackground = 255;

var sueloY = canvasH - 20; // Las variables pueden 
// depender de otra variable
var sueloX = 50;
var colorSuelo = "#eabf59"; Las variables también pueden ser texto, en ese caso se ponen entre "" 


function setup() {
  createCanvas(canvasW, canvasH);
}

function draw() {
  background(colorBackground);

  // Suelo
  fill(colorSuelo);
  noStroke();
  rect(0, sueloY, canvasW, canvasH);



  // Árbol tronco CENTRO
  fill("#c69c6b");
  rect(360, 380, 20, 200);
  fill("#736356");
  rect(380, 380, 20, 200);

  // Árbol copa CENTRO
  fill("#4dc6ac");
  // triangle(xDerecha, yDerecha, xArribaCentro, yArribaCentro, xIzq, yIzq)
  triangle(480, 380, 378, 20, 286, 380);
  fill("#1ea284");
  triangle(380, 380, 378, 20, 286, 380);



  // Árbol tronco IZQ
  fill("#c69c6b");
  rect(  );
  fill("#736356");
  rect(  );

  // arbol copa IZQ
  fill("#4dc6ac");
  triangle( );
  fill("#1ea284");
  triangle();



  // Árbol tronco DERECHA
  fill("#c69c6b");
  rect(  );
  fill("#736356");
  rect( );

  // Árbol copa DERECHA
  fill("#4dc6ac");
  triangle( );
  fill("#1ea284");
  triangle(  );
}
*/// DECLARACIÓN VARIABLES GLOBALES 
// Pidemos usarlas en cualquier siti
var canvasW = 800; // En las variables podemos guardar 
// un número
var canvasH = 600;
var colorBackground = 255;

var sueloY = canvasH - 20; // Las variables pueden 
// depender de otra variable
var sueloX = 50;
var colorSuelo = "#eabf59"; /* Las variables también pueden ser texto, en ese caso se ponen entre "" */
//…

//arbol tronco CENTRO://
var troncoXY = 360;
var troncoHW = 20;


var copaX = 200;
var copaY = 20;

function setup() {
  createCanvas(canvasW, canvasH);
}

function draw() {
  background(colorBackground);

  // Suelo
  fill(colorSuelo);
  noStroke();
  rect(0, sueloY, canvasW, canvasH);

  /***************************/

  // Árbol tronco CENTRO
  fill("#c69c6b");
  rect(troncoXY, troncoXY+20, troncoHW, troncoHW*100);
  fill("#736356");
  rect(troncoXY+20, troncoXY+20, troncoHW, troncoHW*100);

  // Árbol copa CENTRO
  fill("#4dc6ac");
  // triangle(xDerecha, yDerecha, xArribaCentro, yArribaCentro, xIzq, yIzq)
  triangle(copaX*2+80, copaY*19, copaX+ 178, copaY, copaX + 86, copaY*19);
  fill("#1ea284");
  triangle(copaX+180, copaY*19, copaX+178, copaY, copaX+186, copaY*19);

  /***************************/

  // Árbol tronco IZQ
  fill("#c69c6b");
  rect(troncoXY-100, troncoXY+20+100, troncoHW-10, troncoHW*100-10);
  fill("#736356");
  rect(troncoXY+10-100, troncoXY+20+100, troncoHW-10, troncoHW*100-10);

  // arbol copa IZQ
  fill("#4dc6ac");
  triangle(copaX*2+80-100-10, copaY*19+100, copaX+ 178-100-10, copaY+100, copaX + 86-100-10, copaY*19+100);
  fill("#1ea284");
  triangle(copaX+180-100-10, copaY*19+100, copaX+178-100-10, copaY+100, copaX+186-100-10, copaY*19+100);

  /***************************/

  // Árbol tronco DERECHA
  fill("#c69c6b");
  rect(troncoXY+100+troncoHW*2, troncoXY+20+100, troncoHW-10, troncoHW*100-10);
  fill("#736356");
  rect(troncoXY+10+100+troncoHW*2, troncoXY+20+100, troncoHW-10, troncoHW*100-10);

  // Árbol copa DERECHA
  fill("#4dc6ac");
  triangle(copaX*2+80+100+40-20, copaY*19+100, copaX+ 178+100+40-20, copaY+100, copaX + 86+100+40-20, copaY*19+100)
  fill("#1ea284");
  triangle(copaX+180+100+40-20, copaY*19+100, copaX+178+100+40-20, copaY+100, copaX+186+100+40-20, copaY*19+100);
}
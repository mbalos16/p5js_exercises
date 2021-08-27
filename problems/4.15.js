//4.15 Velocidad I//
/*
En este ejercicio animaremos la posición de una línea y el relleno de una elipse (en escala de grises).

Pasos
1. Dibuja una línea y anima su posición vertical
Dibuja una línea horizontal y haz que se mueva desde arriba del todo del canvas hasta abajo

2. Dibuja una elipse y anima su relleno
Dibuja una elipse detrás de la línea y asocia el fill() de la elipse al valor de la altura de la línea. Utiliza la función map() para ajustar el valor de la posición al baremo de la escala de grises (de 0 a 255)

3. Haz que la animación sea un bucle
Cuando la línea llegue abajo, haz que vuelva a empezar otra vez su movimiento desde arriba
*/

// Variables globales
var canvasWH = 500;
let ellipseSize = canvasWH/2;
let transparenciaEllipse = 0;

//Variables linea
let yLine = 0;


function setup() {
  createCanvas(canvasWH, canvasWH);
  background(0);
}

function draw() {
  background(0);
  
  //Caracteristicas ellipse
  noStroke();
  fill(255,transparenciaEllipse);
  
  //ellipse
  ellipse(canvasWH/2, canvasWH/2, ellipseSize);
  transparenciaEllipse = map(yLine,0,canvasWH,0,255)
  
  //Caracteristicas linea
  stroke("White");
  strokeWeight(1);
  
  //linea
  line(0, yLine,canvasWH, yLine);
  //animación linea
  yLine++;
  
  if(yLine === canvasWH){
    yLine = 0;
  }
}
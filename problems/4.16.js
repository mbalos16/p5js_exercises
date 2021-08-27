//4.16 Velocidad II//

/*
En este ejercicio animaremos la velocidad de la elipse según su posición.

Pasos
1. Dibuja una elipse y anima su posición en horizontal

Dibuja una elipse y aplícale una variable de velocidad a su posición horizontal, de forma tal que se vaya moviendo

2. Añade condicionales 
Según la posición de la elipse, determina los valores de la variable velocidad. La elipse tendrá que moverse lentamente en el primer cuarto del canvas, más rápidamente en el segundo cuarto y detenerse al llegar a la mitad del canvas

3. Añade transparencia
Experimenta con la transparencia para que la elipse deje un rastro parecido al de la imagen de referencia
*/

// Variables globales
var canvasWH = 500;
let x = 0;
let y = canvasWH/2;
let ellipseSize = 140;
let ellipseFrameRate = 60;


function setup() {
  createCanvas(canvasWH, canvasWH);
  background(0);
}

function draw() {
  
  frameRate(ellipseFrameRate);
  fill(255,20);
  noStroke();
  
  ellipse(x,y,ellipseSize);
  x=x+15;
  
  if (x <= canvasWH/4){
    ellipseFrameRate = 10;
    
  } else if (x > canvasWH/4 && x <= canvasWH*2/4){
    ellipseFrameRate = 25;
    
  }else if (x = canvasWH/2){
    x=canvasWH/2; 
  }
}
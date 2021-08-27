//3.12c TETRIS 4//

/*
Coge una de las piezas que tienes dibujadas de las PEC anteriores y haz que siga la posición del ratón, sólo horizontalmente.
Pasos
1. Coge el código de una de las piezas que ya tienes dibujada.

2. Dibújale un rectángulo transparente detrás, puesto que te servirá para simplificar la interacción.

3. Haz que la pieza del tetris y el rectángulo transparente sigan la posición X del ratón, pero vigila...
Solo cuando hagas rollover encima del rectángulo (sin rollover no tendrán que seguir el cursor). La posición Y del rectángulo y de la pieza siempre tendrá que ser fija.

4. Limita el movimiento horizontal de la pieza y del rectángulo, añadiendo un margen a la izquierda y derecha.
*/


s = 3;// Sangrado entre cuadrados;  


//Tamaños://
var squareSize = 50-2*s;
var squarePosition = 50;

let insertionPointX = 400;
let x = insertionPointX+s;
let y = squarePosition+s;
let w = squareSize*2+s*4;
let h = squareSize*3+s*6;
let m = 30;


//Color//
alphaTransparencia = 90; // Transparencia del color

function setup() {
createCanvas(800, 300);
strokeWeight(3);
}


function draw() {
background(0);
stroke(255, 255, 0);
fill(255, 255, 0, alphaTransparencia);

//Arays con las coordenadas://
var coordX = [insertionPointX+s, insertionPointX+s,squarePosition+insertionPointX+s, squarePosition+insertionPointX+s]
var coordY = [squarePosition+s, squarePosition*2+s, squarePosition*2+s, squarePosition*3+s]

//Bucle for://
  for(let i =0; i<= coordX.length-1; i++){
    
    square(coordX[i], coordY[i], squareSize);
    if  (i===12-1){                  //fig4
      stroke(0, 255, 0);
      fill(0, 255, 0, alphaTransparencia); 
   }
}

noStroke();
fill(255,0);
if ((mouseX > x) && (mouseX < x+w) && (mouseY > y) && (mouseY < y+h)){
  //fill("red");
  
  x = mouseX-w/2;
  
  if(mouseX < m+w/2){
    x = m;
  };
  
  if(mouseX > width-m-w/2){
    x= width - m-w;
  }
  
  insertionPointX = x;
}
rect(x-s,y-s,w,h);
}
//3.16b TETRIS 5//
/*Copia tu ejercicio del Tetris 4. En vez de mover la nave con el ratón, muévela hacia la derecha o izquierda con la flecha derecha e izquierda de tu teclado. (Si tu teclado no tiene flechas, selecciona otras 2 teclas).*/

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
if (key === 'd'){
  x++;
  
}else if(key ==='a'){
    x--;
  
}else{
  stop;
}
  insertionPointX = x;
rect(x-s,y-s,w,h);
}
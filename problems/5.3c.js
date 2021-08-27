//5.3c Función con parámetros y return III//

/*
Coge el código del ejercicio 4.16 y modifícalo para que la velocidad de la bola esté determinada por una función que recibe un parámetro string (“rapido”, ”lento”, ”parar”) y devuelve un parámetro numérico. 

Pasos
1. Coge el código del ejercicio 4.16

2. Crea la función setVel()
La función tendrá que recibir un parámetro de tipo string(“rapido”, ”lento”, ”parar”) y devolver uno numérico

3. Modifica el movimiento de la bola
Utiliza la función setVel() para modificar la velocidad de la bola según su posición
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
    setVel("lento");
    
  } else if (x > canvasWH/4 && x <= canvasWH*2/4){
     setVel("rapido");
    
  }else if (x = canvasWH/2){
     setVel("parar");
  }
}

function setVel(modoVelocidad){
  if(modoVelocidad == "rapido"){
      ellipseFrameRate = 25;
  } else if (modoVelocidad == "lento"){
      ellipseFrameRate = 10;
  } else if (modoVelocidad == "parar"){
      x=canvasWH/2; 
  }
}
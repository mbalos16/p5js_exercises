//4.25 Space Invaders 6//

/*
A partir del código que te proporcionamos a continuación, haz que cada fila de aliens se mueva de izquierda a derecha y de derecha a izquierda en forma de loop, y que cada 3 segundos aprox. desciendan 50 píxeles aprox. todos los aliens.
Vídeo demostrativo: http://multimedia.uoc.edu/~pda/videos/PAC4/4_25.mp4 
(El vídeo de referencia sirve para tener más claro el movimiento, no hace falta que lo reproduzcas igual al 100%).

Pasos
1. Añade variables de velocidad
Añade al código variables que sirven para guardar la velocidad horizontal y vertical que se imprimirá a los aliens

2. Añade variables que te sirvan de contador
Añade al código dos variables contador: una te servirá para ir revirtiendo el movimiento horizontal de las filas y otra para que los aliens vayan bajando en bloque cada 3 segundos

3. Aplica movimiento a los aliens
Añade un nuevo translate() donde usarás las variables que has creado anteriormente
*/

var escala = 9;
var pos = 100;
var translacionXPar = 0;
var translacionXImpar = 0;
var translacionY = 0;
var translacionX;
var velocidadX = 0.8;
var velocidadY = 6;
var derecha = true;
var contadorCambio = 40;
var contadorBajada = 180;


function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(0);
  
  if(frameCount% contadorCambio === 0){
    if(derecha===true){
      derecha = false;
    }else{
      derecha = true;
    }
  }
  
  if(frameCount% contadorBajada === 0){
    translacionY += velocidadY;
  }
  
  
  if(derecha === true){                      //derecha
    translacionXPar += velocidadX;
    translacionXImpar -= velocidadX;
  }else{                                  //izquierda
    translacionXPar -= velocidadX;
    translacionXImpar += velocidadX;
  }
  
  
  
  for (var i = 0; i < 5; i++) { // columnas
    for (var j = 0; j < 3; j++) {  // filas
      
      
      if (j%2===0){     //filla impar, 1 y 3
        translacionX = translacionXImpar;
      }else{
        translacionX = translacionXPar;
      }
        translate(50 + i * 150, 10 + j * 150);
        translate(translacionX,translacionY);
      
        // dibujo cuerpo alien
        noStroke();
        fill(255);
        rect(pos - escala, pos - escala * 4, escala * 2, escala);
        rect(pos - escala * 2, pos - escala * 3, escala * 4, escala);
        rect(pos - escala * 3, pos - escala * 2, escala * 6, escala);
        rect(pos - escala * 4, pos - escala, escala * 8, escala * 2);
        rect(pos - escala * 2, pos + escala, escala, escala);
        rect(pos + escala, pos + escala, escala, escala);
        rect(pos - escala * 3, pos + escala * 2, escala, escala);
        rect(pos - escala, pos + escala * 2, escala * 2, escala);
        rect(pos + escala * 2, pos + escala * 2, escala, escala);
        rect(pos - escala * 4, pos + escala * 3, escala, escala);
        rect(pos - escala * 2, pos + escala * 3, escala, escala);
        rect(pos + escala, pos + escala * 3, escala, escala);
        rect(pos + escala * 3, pos + escala * 3, escala, escala);

        // dibujo ojos alien
        fill(0);
        rect(pos - escala * 2, pos - escala, escala, escala);
        rect(pos + escala, pos - escala, escala, escala);
        resetMatrix();
    }
  }
}

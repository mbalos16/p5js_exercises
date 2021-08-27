//3.2 CANVAS FULLSIZE//

/*
El canvas es el área de trabajo que utilizamos en p5.js para dibujar. 

Pasos
1. Cambia los valores de tamaño de la función createCanvas() por las variables reservadas:
---> windowWidth, windowHeight ¿Qué ha cambiado?

2. Añade esta función después de cerrar la función draw():
---> function windowResized() { resizeCanvas(windowWidth, windowHeight); } ¿Qué ha cambiado?
*/

function setup() {
    //createCanvas(windowWidth, windowHeight);
      /*Al cambiar el tamaño del camvas lo que sucede
      es que el canvas ocupa todo el espacio disponible para 
      canvas que mostramos en pantalla en ese momento*/
    }
    
    
    function draw() {
          background(200);
    }
    
    function windowResized() { resizeCanvas(windowWidth, windowHeight); }
    //En este caso, el canvas toma unas medidas preestablecidas de cuadrado
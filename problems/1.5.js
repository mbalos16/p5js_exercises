//1.5 Hello Ellipse//

/*
En este ejercicio empezaremos a dibujar creando dos elipses como las de la imagen.

1. Dibuja el primer círculo
Crea un círculo escribiendo esta línea de código en la función draw(): ellipse(100, 200, 50, 50); // ellipse(x, y, width, height)


2. Dibuja el segundo círculo
Haz otro círculo, la mitad de grande que el primero, y colócalo 100px más a la derecha
*/

function setup() {
    createCanvas(500, 500);
    background(200);
  }
  
  function draw() {
    ellipse(100, 200, 50, 50);
    ellipse(200, 200, 25, 25);
  }
  
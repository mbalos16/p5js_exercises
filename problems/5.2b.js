//5.2b Función con parámetros II//

/*
En este ejercicio modificaremos la función dibujarForma() para que reciba parámetros.

Pasos
1. Modifica la función dibujarForma()
Modifica la función dibujarForma(), para que el color de relleno, la transparencia, el tamaño, la posición y la rotación del cuadrado vengan dados por parámetros

2. Dibuja 4 formas con parámetros aleatorios
Dibuja 4 formas con posiciones, tamaños, rotaciones y con colores y transparencias random()
*/

function setup() {
    createCanvas(1000, 1000);
    rectMode(CENTER); // Queremos que los cuadrados se dibujen desde el centro
    angleMode(DEGREES); // Queremos que la rotación se efectúe en grados
    noLoop(); // Queremos que las formas solo se dibujen una vez 
  }
  
  function draw() {
    background('white');
    translate(300, 300); // Translada la posición central de rotación
    
    for (i=0; i<=3; i++){
      dibujarForma(fillColor=[random(0,255),random(0,255),random(0,255)], 
                 opacity=floor(random(20,80)), 
                 size=random(80,120), 
                 position=[random(0,30),random(0,30)], 
                 rotation=random(0, 360));
    } 
  }
  
  function dibujarForma(fillColor, opacity, size, position, rotation) {
    noStroke();
    blendMode(MULTIPLY); // Aquí podemos experimentar con el modo de fusión 
    fill(fillColor[0],fillColor[1],fillColor[2], opacity); //Relleno de color
    rotate(rotation);// Rota en función de un angulo aleatorio
    square(position[0], position[1], size);// Cuadrado
  }
  
  
  
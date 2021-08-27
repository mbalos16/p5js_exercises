//1.7 fill() & stroke()//

/*
Modifica el siguiente código, para que las elipses no tengan relleno, sólo stroke().

Pasos
1. Sustituye las instrucciones encargadas del relleno por instrucciones de contorno
Sustituye las instrucciones encargadas del relleno de los círculos por instrucciones de contorno. Puedes decidir no mantener los colores de partida, pero sí que tiene que haber dos diferentes


2. Añade una instrucción que elimine todos los rellenos de las formas
Añade una instrucción que elimine todos los rellenos de las formas. Nota como, aunque quitemos los rellenos relacionados con el ratón, p5.js pone un relleno blanco por defecto a las formas que tendremos que quitar antes de empezar a dibujar
*/

function setup() {
    createCanvas(800, 800);
  	background(200);
}

function draw() {
    if (mouseIsPressed) {  // Si apretamos el botón izquierdo
      noFill();  
      strokeWeight(8); // Contorno cuando se clica de 8px.
      stroke(255);// Color del contorno cuando se clica (blanco).
    } else { // Si no apretamos 
      	noFill();	
      	strokeWeight(1); // Contorno cuando no se clica de 1px.
      	stroke(255,0,0);// Color del contorno cuando no se clica (Rojo).
    }
    ellipse(mouseX, mouseY, 80, 80);
}


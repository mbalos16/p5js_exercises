//2.3b Variables, contador y condicional//

/*
Realiza los cambios indicados en los pasos del ejercicio y observa qué ocurre en cada paso al ejecutar el código.

Pasos
1. Modifica la línea
Modifica la línea para que empiece en el punto 0,0 y acabe en el punto width, height (variables reservadas de p5.js, que representan los valores de ancho y alto del canvas. Las variables reservadas no hace falta declararlas).

2. Declara estas variables
---> var inicio = false; var contador = 0; Dentro de la función draw escribe ---> console.log(inicio); ¿Qué se imprime en la consola de p5.js?

3. Súmale 1 a la variable contador
Súmale 1 a la variable contador de la siguiente forma en la función draw(): - - - > contador ++; // Es equivalente a poner contador = contador + 1;

4. Con un condicional if detecta cuando el contador llega a 10
Con un condicional if detecta cuando el contador llega a 10 y cambia la variable inicio a true y cambia el color de la línea a verde. ¿Qué se imprime en la consola de p5.js?
*/

/*ENUNCIADO ORIGINAL:

// Variables globales

var backgroundColor = "#3B5762";
var strokeFill = "#E96763";

function setup() {
	createCanvas(1024, 768);
}

function draw() {
	background(backgroundColor);
	stroke(strokeFill);
	strokeWeight(20);
	line(20,20,500,500);
}

/*SOLUCIÓN:*/
// Variables globales

var backgroundColor = "#3B5762";
var strokeFill = "#E96763";
var inicio = false; 
var contador = 0;

function setup() {
	createCanvas(1024, 768);
}

function draw() {
	background(backgroundColor);
	stroke(strokeFill);
	strokeWeight(20);
  
  /*Se han cambiado los valores de la linea para que 
  empiece en 0,0 y termine en el mismo punto que el canvas:*/
	line(0,0,width, height); 
  
  /*La consola imprime "false" junto al numero de veces que
  se ha ejecutado el codigo*/
  console.log(inicio); 
  
  /*Suma 1 al contador*/
  contador++;

  /*La condición if, se aplica tras imprimirse 10 veces 
  en la consola "false", momento en el que se comienza a 
  ejecutar las instrucciones que hacen que se cumpla la
  condición if. if condition:*/
  if (contador >= 10) {
    inicio = true;
    strokeFill = "#008f39";
  }
}


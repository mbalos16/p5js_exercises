//5.9 ARRAYS IV//
/*
Muestra todas las palabras del String "parrafo" por pantalla en posiciones random y cambia el color de las palabras "love" a otro color.

Pasos
1. Convierte la variable párrafo en un array que contenga sus palabras en cada posición del array.

2. Recorre el array "palabras" y si la palabra es "love" cambia su color.
*/

var parrafo = "There's nothing you can do that can't be done, Nothing you can sing that can't be sung, Nothing you can say, but you can learn how to play the game, It's easy, Nothing you can make that can't be made, No one you can save that can't be saved, Nothing you can do, but you can learn how to be you in time, It's easy. All you need is love, all you need is love, All you need is love love love is all you need...";
var parrafo_array; 
var textoDiferente = "love";


function setup() {
  	createCanvas(1024, 768);
  	background(50); 		
}

function draw(){
  parrafo_array = parrafo.split(' ');
  for (i=0; i<= parrafo_array.length; i++){
    if ( parrafo_array[i] === "love"){
      fill ("red");
    } else {
      fill ("white");
    }
  textSize(20);
  textLeading(25);
  text(parrafo_array[i], random(width), random(height));
  }
  noLoop();
}


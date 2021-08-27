//5.10 ARRAYS Y TEXTO//
/*
Modifica el tamaño de las palabras de este párrafo, para que "big" tenga un tamaño de 160px, "small" de 10px y las demás de 40px.  

Pasos
1. Para ello tendrás que escribir palabra a palabra (utiliza un array para guardar las palabras)

2. calcula la posición que tendrá que ocupar cada palabra con la función textWidth(palabra), que nos devuelve al ancho en píxeles de una palabra. 
*/

var parrafo = "This is big and this small";
var parrafo_array;
let xTexto = 300;
let espacio = 5;


function setup() {
	createCanvas(1024, 768);
	background("white");	
	parrafo_array = parrafo.split(' ');
    noLoop();
}

function draw(){
  	fill(0);
    textFont("Helvetica");
    for (i=0; i<parrafo_array.length; i++){
      
        if (parrafo_array[i] === "big"){
          textSize(160); //Big

        } else if (parrafo_array[i] === "small"){
          textSize(10); //Small

        } else {
          textSize(40);//Normal
        }
      
        text(parrafo_array[i], xTexto, height/2);
        xTexto += textWidth(parrafo_array[i])+espacio; 
      }
}


//5.8 ARRAYS III//

/*
Dibuja 100 elipses con posición random y guarda cada una de sus coordenadas x,y en dos arrays.

Para añadir los valores en el array utiliza este código --->  tuArray.push(valor);

Imprime los valores del array por consola.
*/

let xArray = [];
let yArray = [];


function setup() {
  createCanvas(400, 400); // Creamos el canvas
  noLoop();
}

function draw() {
  background('#1eaeeb'); 
  for (i=0; i<100; i++){
    let xEllipse = random(0,400);
    let yEllipse = random(0,400);
    fill("black");
    noStroke();
    ellipse(xEllipse, yEllipse, 10);
    xArray.push(xEllipse);
    yArray.push(yEllipse);
  } 
  console.log(xArray,yArray);
}
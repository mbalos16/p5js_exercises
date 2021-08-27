//3.8 Click con el ratón y map()//
/*
1. Cambia el color de la elipse cada vez que hagas click en cualquier parte del canvas (mientras el botón del ratón esté pulsado) y vuelve al color original cuando dejes de hacer click.

2. Haz que la elipse siga la posición del ratón.

3. Haz que el diámetro de la elipse tenga el valor mouseX.

4. Utiliza la función map() con mouseX para que el valor del diámetro de la elipse esté entre 10 y 50.
*/

var d = 300; 
var c = "black";
let e = "red"; //definimos el color rojo como variable e

function setup() {
    createCanvas(1024, 768);
    background("white");
}

function draw() {
    
    noStroke();
  	let anchura = (dist(mouseX, mouseY, pmouseX, pmouseY));

    if (mouseIsPressed == true){
      fill(e);
    } else {
      fill(c);
    }
   let anchuraMapeada = map(anchura, 0, 300, 10, 50);
    ellipse(mouseX, mouseY, anchuraMapeada);
}
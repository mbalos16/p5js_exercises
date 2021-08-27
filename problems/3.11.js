//3.11 Click & ROLLOVER 3//

/*
Dibuja 3 ellipses pequeñas en diferentes posiciones del canvas.
Cuando hagas rollover sobre una de ellas deberá cambiar su tamaño (las otras 2 deberán seguir iguales).
Si haces click en alguna de ellas deberás cambiar el color del background() del canvas.
*/

let radius = [30, 30, 30]; 
let x = [200, 400, 600];
let y = [200, 200, 200];
let radiusBig = 60;

function setup() {
    createCanvas(800,400);
    background("pink");
    stroke(160);
}

function draw() {
    for(let i=0; i<radius.length; i++){
      
      let d = dist( x[i], y[i], mouseX, mouseY);

      if(d < radius[i]){
        radius[i] = radiusBig;

        if(mouseIsPressed){
          background("yellow");
        }
      }
      ellipse(x[i],y[i],radius[i]*2);
    }   
}
//3.7 Función map()//
/*Cambia los valores de la función map, para que la elipse solo se mueva dentro del rectángulo.*/
var d = 50;
var xMap = 0;
var yMap = 0;
let limiteRect = 50 + d/2; // Se ha declarado la variable limiteRect, que determina el limite en el cual se puede mover la elipse.
    
function setup() {
    createCanvas(500, 500);
}


function draw() {
    background("grey");

    noFill();
    stroke(0);
    rect(50,50,400,400);

    xMap = map(mouseX,0 ,width,limiteRect,width-limiteRect,true); 
    //map(valor a mapear, min rango original, max rango original, min rango deseado, max rango deseado).
    yMap = map(mouseY,0 ,height,limiteRect,height-limiteRect,true);

    noStroke();
    fill("black");
    ellipse(xMap,yMap,d);
}

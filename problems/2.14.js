//2.14 Random() y Contador//
/*Modifica el siguiente código para que el color del background cambie más lentamente.*/

//ORIGINAL://
var r = 255;
var g = 255;
var b = 255;
var cont = 0;

function setup() {
    createCanvas(600, 400);
    r = random(255);
    g = random(255);
    b = random(255);
}


function draw() {
    background(r,g,b);
    
    cont ++;
    if (cont > 100){  
        r = random(255);
        g = random(255);
        b = random(255);
        cont = 0;
    }    
}

//SOLUCIÓN://
var r = 255;
var g = 255;
var b = 255;
var cont = 0;

function setup() {
    createCanvas(600, 400);
    r = random(255);
    g = random(255);
    b = random(255);
}


function draw() {
    background(r,g,b);
    
    cont ++;
    if (cont > 100){  
        r = random(255);
        g = random(255);
        b = random(255);
      	cont = (r,g,b,80);
        cont = (r,g,b,50);
      	cont = (r,g,b,20);
        cont = 0;
    }    
}
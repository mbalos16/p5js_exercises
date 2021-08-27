//1.17 Transparencia//

/*
Modifica tu ejercicio 1.16 para que todas las elipses tengan el mismo color de relleno y su transparencia sea menor si la elipse está arriba (elipse pequeña) y más transparencia si la elipse está abajo (elipse grande)

Pasos
1. Establece el grado de transparencia de cada forma
Considerando que hay un total de 7 formas, divide el baremo de opacidad del relleno para establecer qué valor de transparencia corresponde a cada una

2. Modifica el color de relleno de cada forma
Modifica el color de relleno de cada forma para que el color sea el mismo para todas y cada una tenga un valor de opacidad correspondiente
*/

function setup() {
    createCanvas(1024, 768);
 }
 
 function draw() {
    background("#231A33");
 
    noStroke(); // Lo ponemos sólo 1 vez, porque afectará 
                // a todas las capas que haya debajo 
                // mientras no haya otra función stroke()
     
    ellipseMode(CENTER);

    fill(198, 132, 109,100/7);
    ellipse(1024/2, 768/2, 500, 500);//1  
    fill(198, 132, 109,100/7*2);
    ellipse(1024/2, 768/2,500-70, 500-70); //2
    fill(198, 132, 109,100/7*3);
    ellipse(1024/2, 768/2, 500-70*2, 500-70*2); //3
    fill(198, 132, 109,100/7*4);
    ellipse(1024/2, 768/2, 500-70*3, 500-70*3); //4
    fill(198, 132, 109,100/7*5);
    ellipse(1024/2, 768/2, 500-70*4, 500-70*4); //5
    fill(198, 132, 109,100/7*6);
    ellipse(1024/2, 768/2, 500-70*5, 500-70*5); //6
    fill(198, 132, 109,100/7*7);
    ellipse(1024/2, 768/2, 500-70*6, 500-70*6); //7
 }
 
//1.16 Orden de dibujo//
/*
Dibuja las siguientes elipses para que se dibujen de más pequeña (arriba - 1a capa) a más grande (abajo - última capa). 

Nota: no hace falta que utilices los mismos colores que en la foto.

Pasos
1. Establece una gama cromática
Establece una gama de 7 colores diferentes, uno para cada una de las elipses, puesto que, porque se note la superposición, es fundamental que cada una tenga un relleno diferente

2. Dibuja las 7 elipses
Define el relleno y dibuja cada elipse, porque se vayan superponiendo de más grande (abajo) a más pequeña (arriba), fijándote bien en el orden de las capas
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
 
    fill("#103F40");
    ellipse(1024/2, 768/2, 500, 500);//1
   
    fill(198, 132, 109);
    ellipse(1024/2, 768/2,500-70, 500-70); //2. naranja
   
    fill(174, 198, 108);
    ellipse(1024/2, 768/2, 500-70*2, 500-70*2); //3. verde
   
    fill(108, 129, 198);
    ellipse(1024/2, 768/2, 500-70*3, 500-70*3); //4. azul-morrado
 
    fill(198, 177, 108);
    ellipse(1024/2, 768/2, 500-70*4, 500-70*4); //5. mostaza
   
    fill(230, 130, 160);
    ellipse(1024/2, 768/2, 500-70*5, 500-70*5); //6. fucsia
   
    fill(132, 108, 198);
    ellipse(1024/2, 768/2, 500-70*6, 500-70*6); //7. centro.morrado
 }
 
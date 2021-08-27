//1.18 Orden de dibujo y transparencia//

/*Recrea esta serigrafía de Josef Albers haciendo que los tres cuadrados tengan el mismo color de relleno y su transparencia sea menor si el cuadrado está arriba (cuadrado pequeño) y más grande el cuadrado está abajo (cuadrado grande).

Pasos
1. Establece el grado de transparencia de cada forma
Considerando que hay un total de 3 formas, divide el baremo de opacidad del relleno para establecer qué valor de transparencia corresponde en cada una

Completado
2. Dibuja los tres cuadrados
Define el relleno (con transparencia) y dibuja cada cuadrado, para que se vayan superponiendo de más grande (abajo) a más pequeño (arriba), recordando que el orden de las capas en p5.js es inverso al de las capas de Adobe Photoshop*/

function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("#d69a03");
    noStroke(); // Lo ponemos sólo 1 vez, porque afectará a todas 
                // las formas que haya debajo  
                // mientras no haya otra función stroke()
   
    a = 30  //Ajuste de la altura de la Y.
    
    /*
    OPACIDAD:
    Teniendo en cuenta que el porcentaje de 100% de 
    transparencia es 0 y el 0% transparencia (totalmente 
    opaco) es 255, para determinar el valor de cada uno 
    de los rectangulos de ha acudido a la regla de 3:
    Si 255 es 100%, 85 es X%. Siendo 85 es el resultado 
    de la division de 255/3.
    */
    
    rectMode(CENTER);
    
    /*Relleno de rojo al 33% de opacidad*/
    fill(255, 0, 0, 33.3);
    /*Primera figura, la más grande*/
    rect(600/2,600/2+a, 600-100, 600-100);
    
    
    /*Relleno de rojo al 66 de opacidad*/
    fill(255, 0, 0, 33.3*2);
    /*Segunda figura, la mediana*/
    rect(600/2,600/2+a*2, 600-200, 600-200);
    
    
    /*Relleno de rojo al 99.9% de opacidad*/
    fill(255, 0, 0, 33.3*3);
    /*Tercera figura, la más pequeña*/
    rect(600/2,600/2+a*3, 600-300, 600-300);
  }
  
  
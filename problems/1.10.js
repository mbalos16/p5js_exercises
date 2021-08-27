//1.10 Formas Básicas 3//

/*
A partir del código proporcionado sigue los pasos para reproducir la composición de la imagen.

Pasos
1. Desplaza las formas a su posición final
Modifica las coordenadas de las funciones de dibujo para desplazar las figuras al otro lado del canvas. Consulta la referencia de cada una para ver cuáles parámetros se utilizan

2. Modifica el arco y el triángulo para que se volteen
Modifica los parámetros que conforman la porción de arco dibujada y la punta superior del triángulo

3. Cambia la apariencia del círculo
Haz que el círculo no tenga relleno sino que solo contorno (con el mismo grosor de la línea)

4. Añade una línea
Transforma el signo menos en un más, añadiéndole una línea perpendicular en el medio


5. Cambia el grosor de los trazos
Cambia el grosor de todas las figuras que tengan contorno

*/


//EJERCICIO:
/*
MODIFICAR EL ARCO Y EL TRIÁNGULO: Triángulo. Solo necesitamos modificar el punto de ancla de la X de la posición superior. Se ha deducido cogiendo la x del primer punto de ancla del mismo triángulo.
Arco. Se ha cambiado el punto de anclaje teniendo en cuenta la X del cuadrado rojo más su anchura. Se ha volteado cambiando el punto de inicio y fin.
*/

function setup() {
    createCanvas(650, 650);
    strokeWeight(25);
    
    /*Se ha añadido para dejar el signo más parecido al
    de la imágen de muestra.*/
    strokeCap(SQUARE);
    
  }
  
  function draw() {
    background('#FFF2D1');
  
    noStroke(); // Desactivamos el contorno
  
   // Círculo amarillo
   // Se ha modificado únicamente la posición de la X. Su posición se ha sacado teniendo en cuenta la posición del cuadrado rojo de la siguiente forma: 350(posición de anclaje del cuadrado rojo + tamaño del cuadrado dividido entre 2:  350 + (250/2) = 475.//
    //fill('#FFCC66');
    noFill() 
    stroke('#FFCC66');
    circle(475, 175, 220);
    noStroke() 
  
    // Triángulo azul
    //En el caso del triángulo azul se han calculado sus puntos de ancla en relación al punto de ancla del triángulo y su diámetro (longitud).//
    fill('#92DCE5');
    triangle(350, 600, 600, 600, 350, 350);
  
    // Cuadrado rojo
    //únicamente se ha tenido que modificar la posición Y. Para ello se ha utilizado el mismo recurso que en el caso del arco rosa, el primer punto del triángulo azul.//
    fill('#FF6F5C');
    square(50, 350, 250);
  
    // Arco rosa
    //En este caso se ha modificado únicamente la posición Y. Y se ha sacado utilizando el primer punto que el del triángulo azul.//
    fill('#FFBEB3');
    arc(300, 300, 500, 500, PI, PI + HALF_PI);
  
    // Línea negra
    // Se ha calculado en relación a los puntos de ancla finales del triángulo.//
    stroke('#2B303A'); // A la línea solo le afecta el contorno
    line(500, 400, 600, 400);
    line(550, 350, 550, 450);//Linea perpendicular
  }
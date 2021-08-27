//3.6 Dibujando con el ratón//
/*
Utilizando las variables reservadas de p5.js mouseX, mouseY (nos devuelve el valor de las coordenadas actuales del ratón) y pmouseX, pmouseY (coordenadas anteriores de la actual que tiene el ratón).

Pasos
1. Dibuja una línea con estas coordenadas cada vez que se ejecute la función draw(): line(mouseX,mouseY,pmouseX,pmouseY)

2. ¿Qué diferencia hay entre poner el background() en la función setup() o draw()? ¿Y si modificas la transparencia del background()? Coméntalo en el código.

3. Modifica el grosor de la línea según la velocidad del ratón.
*/

/*La direfencia entre la función draw y la funccion 
setup es que la setup se ejecuta una sola vez, al inicio
del prorama, cuando la funccion draw se dibuja infinidad
de veces, a no ser que le digamos que pare.*/

function setup() {
    createCanvas(windowWidth, windowHeight);
      stroke(20);
}
    
function draw() {
      /*parece que la linea se desvanece*/
      //background(100, 60);
      
      /*Ajustamos la anchura del ratón teniendo en cuenta la
      distancia entre la  ejecución actual y la anterior*/
      let anchura = (dist(mouseX, mouseY, pmouseX, pmouseY));
      strokeWeight(anchura);
      line(mouseX,mouseY,pmouseX,pmouseY);
}
    
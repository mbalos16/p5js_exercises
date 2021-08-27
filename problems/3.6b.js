//3.6.b Dibujando con el ratón 2//

/*
Haz primero el ejercicio 3.6 y modifica el código, de forma que cuando el ratón esté en la parte superior del canvas (mitad del canvas hacia arriba) cambie el color de la pincelada a amarillo y cuando esté el ratón en la parte inferior del canvas (mitad del canvas hacia bajo), el color sea negro.
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
      stroke(40);
    }
    
    function draw() {
      /*Ajustamos la anchura del ratón teniendo en cuenta la
      distancia entre la  ejecución actual y la anterior*/
      let anchura = (dist(mouseX, mouseY, pmouseX, pmouseY));
      strokeWeight(anchura);
      
      if(mouseY >= windowHeight/2){
        stroke("red");
      }else{
        stroke("yellow");
      }
      
      line(mouseX,mouseY,pmouseX,pmouseY);
      
    }
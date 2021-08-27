//1.15 Modifica el Robot//

/*
Modifica las formas y color del robot para convertirlo en otro objeto, animal, persona, etc.

Pasos
1. Haz un esbozo para visualizar el resultado final
Colocando sobre papel los diferentes elementos gráficos te será más fácil visualizar como modificar el código de dibujo

2. Copia el código desde el libro de la asignatura
Coge el código del robot desde el libro de la asignatura “Make: Getting Started with p5.js” (páginas 38 y 39)

3. Modifica las funciones de dibujo de los elementos gràficos
Modifica las funciones de dibujo de los diferentes elementos gráficos para colocarlos y dimensionarlos y así convertir el robot en el resultado final deseado

4. Modifica el color de relleno y de contorno de cada pieza
Ajusta los colores de relleno y de contorno donde sea necesario
*/

/*ORIGINAL PROJECT:
function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  background(204);
  
  //Neck
  stroke(102);              //Set stroke to gray
  line(266,257,266,162);    //Left
  line(276,257,276,162);    //Middle
  line(286,257,286,162);    //Right
  
  //Antennae
  line(276,155,246,112);    //Small
  line(276,155,306,56);     //Tall
  line(276,155,342,170);    //Medium
  
  //Body
  noStroke();                // Disable stroke
  fill(102);                 //Set fill to gray
  ellipse(264, 377, 33, 33); //Antigravity orb.
  fill(0);                   //Set fill to black
  rect(219,257,90,120);      // Main body
  fill(102);                 // Set fill to gray
  rect(219, 274,90,6);       // Gray stripe
  
  
  //Head
  fill(0);                    //Set fill to black
  ellipse(276, 155, 45, 45);  //Head
  fill(255);                  //Set fill to white
  ellipse(288, 150, 14, 14);  //Large eye
  fill(0);                    //Set fill to black
  ellipse(288, 150, 3, 3);    //Pupil
  fill(253);                  //Set fill to light gray
  ellipse(263, 148, 5, 5);    //Small eye 1
  ellipse(296, 130, 4, 4);    //Small eye 2
  ellipse(305, 162, 3, 3);    //Small eye 3  
}*/


//	MODIFICADO A COCHECITO CON COLA:

function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
  }
  
  function draw() {
    background(204);
    
    //Antennae
    stroke(253, 249, 99);
    strokeWeight(4);
    line(326,260,296,215);    //Small
    line(326,260,356,161);    //Tall
    line(326,260,392,275);    //Medium
    strokeWeight(1);
    
    //Body
    noStroke();                // Disable stroke
    fill(102);                 //Set fill to gray
    ellipse(320, 360, 33, 33); //Antigravity orb.
    fill(253, 132, 99);        //Set fill to black
    rect(219,257,120, 90);     // Main body
    fill(102);                 // Set fill to gray
    rect(219, 274,90,6);       // Gray stripe
    
    //Head
    fill(0);                    //Set fill to black
    ellipse(250, 350, 45, 45);  //Head
    fill(255);                  //Set fill to white
    ellipse(188, 250, 14, 14);  //Large eye
    fill(0, 0, 255);            //Set fill to black
    ellipse(188, 250, 3, 3);    //Pupil
    fill(198, 132, 109);        //Set fill to light gray
    ellipse(163, 248, 5, 5);    //Small eye 1
    ellipse(196, 230, 4, 4);    //Small eye 2
    ellipse(205, 262, 3, 3);    //Small eye 3
    
   //Neck
    stroke(102);              //Set stroke to gray
    line(316,357,316,262);    //Left
    line(326,357,326,262);    //Middle
    line(336,357,336,262);    //Right
  }
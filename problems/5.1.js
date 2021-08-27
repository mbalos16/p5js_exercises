//5.1 Función básica//

/*
Realiza el ejercicio y contesta a la pregunta. ¿Has utilizado alguna variable global?

Pasos
1. Crea una elipse
Crea una elipse llamando a la función dibujarElipse() UNA VEZ

2. Añade una elipse más
Añade una elipse más llamando a la función dibujarElipse() (NO poniendo otra linea con ellipse(x, y, wh, wh);)

3. Utiliza un for para dibujar 5 elipses en el canvas
*/

function setup() {
    createCanvas(1024, 768);
    background("#184158");
    noLoop();
  }
  
  function draw() {
   for(i=0; i<5;i++){
     dibujarElipse();
   }
  }
  
  function dibujarElipse() {
    // Estas variables, al estar declaradas dentro de la función, sólo estarán disponibles aquí.
    var x = random(0, width); // Genera un número entre 0 y width
    var y = random(0, height); // Genera un número entre 0 y width
    var wh = 100;
    noStroke();
    fill(225, 103, 110);
    ellipse(x, y, wh, wh);
  }
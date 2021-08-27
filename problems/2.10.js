//2.10 Repetición FOR Anidados 2//

/*
Vamos a crear una retícula. 

Utiliza 2 bucles for (anidados) y dibuja una retícula utilizando líneas (la cantidad de líneas y distancias son a tu elección, no hace falta que sea igual que en la imagen).
*/

function setup() {
    createCanvas(1400, 1400);
    background(220);
    stroke(0);  
  }
  
  function draw() {
    var tramo = (height)/80;
    var tramoVertical = (width)/6;
    
    for(let i=1; i<=80; i++){
      stroke(0);
      line(0, tramo*i,width,tramo*i);
      for(let i=1; i<=6; i++){
      stroke(255);
      line(tramoVertical*i, 0, tramoVertical*i, height);
    }
    }
  }
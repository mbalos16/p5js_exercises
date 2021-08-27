//2.7 Repeticiones//

//Dibuja 5 líneas en diferentes posiciones "y" del canvas.//

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    stroke(0);
    var tramo = height/6;
    
    
    line(0, tramo, width, tramo);
    line(0, tramo*2, width, tramo*2);
    line(0, tramo*3, width, tramo*3);
    line(0, tramo*4, width, tramo*4);
    line(0, tramo*5, width, tramo*5);
  }
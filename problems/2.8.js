//2.8 Repetición FOR//

/*
Dibujas 200 líneas horizontales con 2 for seguidos (sin anidar)

Pasos
1. Dibuja 100 líneas
Dibuja 100 líneas en un bucle for modificando su posición en la coordenada y, hasta que llenen la mitad del canvas.

2. Añade otro bucle for
Añade otro bucle for que dibuje 100 líneas más a continuación de las primeras 100 hasta que llenen la parte restante del canvas.
*/

function setup() {
    createCanvas(1400, 1400);
    background(220);
    stroke(0);  
  }
  
  function draw() {
    var tramo = (height/2)/100;
    
    for(let i=1; i<=100; i++){
      stroke(0);
      line(0, tramo*i,width,tramo*i);
    }
    
      for(let i=1; i<=100; i++){
      stroke(0);
      line(0, (height/2)+tramo*i, width, (height/2)+tramo*i);
    }
  }
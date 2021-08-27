//2.15 Translate, ResetMatrix y Random//
/*
Vamos a realizar una composición que cambia aleatoriamente cada vez que ejecutamos el sketch.  


A partir del código que te proporcionamos, acaba de dibujar los demás triángulos, aplicando de igual forma el translate(), resetMatrix(), y random(), pero en el caso del random tendrás que variar sus valores, para que se transladen a otra posición diferentes a los que ya están.
*/

function setup() {
    createCanvas(1024, 768);
  
    background(245);
  
    // Triángulo mediano gris y rosa //DADO
    translate(random(width - 500), random(height - 500));
    noStroke();
    fill("#DCC5C1");
    triangle(0, 175, 80, 20, 160, 175);
    resetMatrix();
  
    translate(random(width - 500), random(height - 500));
    noStroke();
    fill('rgba(0,0,0, 0.3)');
    triangle(0, 175, 80, 20, 160, 175);
    resetMatrix();
  
    // Triángulos pequeños negros //A
    var t=4;
    translate(random(width - 300), random(height +100));
    noStroke();
    fill(0);
    rotate(PI);
    triangle(0, 175/t, 80/t, 20/t, 160/t, 175/t);
    resetMatrix();
  
    translate(random(width +100), random(height - 600));
    noStroke();
    fill(0);
    rotate(PI);
    triangle(0, 175/t, 80/t, 20/t, 160/t, 175/t);
    resetMatrix();
    
    translate(random(width - 400), random(height +100));
    noStroke();
    fill(0);
    rotate(PI);
    triangle(0, 175/t, 80/t, 20/t, 160/t, 175/t);
    resetMatrix();
    
    // Triángulos grandes rosas
    translate(random(width +200), random(height +200));
    noStroke();
    fill("#DCC5C1");
    rotate(PI);
    triangle(0*t/2, 175*t/2, 80*t/2, 20*t/2, 160*t/2, 175*t/2);
    resetMatrix();
  
    translate(random(width +600), random(height +300));
    noStroke();
    fill("#DCC5C1");
    triangle(0*t/2, 175*t/2, 80*t/2, 20*t/2, 160*t/2, 175*t/2);
    resetMatrix();
    
    
    // Triángulo mediano linea rosa
    translate(random(width - 500), random(height - 500));
    stroke("#DCC5C1");
    noFill();
    triangle(0, 175, 80, 20, 160, 175);
    resetMatrix();
  
    // Triángulo grande linea rosa
    translate(random(width - 500), random(height - 500));
    stroke("#DCC5C1");
    noFill();
    triangle(0*t/2, 175*t/2, 80*t/2, 20*t/2, 160*t/2, 175*t/2);
    resetMatrix();
  }
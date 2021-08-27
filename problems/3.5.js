//3.5 Seguir al ratón//

/* Dibuja una elipse que siga la posición del ratón.
*/

function setup() {
    createCanvas(windowWidth, windowHeight);
    }
    
    
    function draw() {
      background(200);
      noStroke();
      ellipse(mouseX, mouseY, 20,20);
    }
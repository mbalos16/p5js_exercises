//2.4d Tetris 2 - Variables//
/*
Copia tu código del ejercicio 1.11 o el que os daremos en la solución de la PEC 1 Tetris I y realiza los siguientes pasos:

Pasos
1. Crea variables
Modifica el código para que los valores que sea posible, los guardes en variables. (posiciones, tamaños, colores…)

2. Bucles y condicionales I
Utiliza bucles for para repetir los cuadrados y así dibujar cada forma. Por ejemplo, para dibujar la pieza en forma de L harás un for para repetir 4 veces la forma del cuadrado.

3. Bucles y condicionales II
También tendrás que utilizar un condicional if para detectar cuando dibujes el 4°cuadrado, y así cambiar su posición de forma diferente que los 3 anteriores.
*/


/*
function setup() {
  createCanvas(800, 300);
  strokeWeight(3);
}

function draw() {
  background(0);
  s = 3;// Sangrado entre cuadrados;
  
  //Tamaños://
  var squareSize = 50-2*s;
  var squarePosition = 50;
  
  //Color//
  alphaTransparencia = 90; // Transparencia del color
  var colorUno = (255, 255, 0, alphaTransparencia);
  var colorDos = (0, 0, 255, alphaTransparencia);
  var colorTres = (255, 0, 0, alphaTransparencia);
  var colorCuatro = (0, 255, 0, alphaTransparencia);
  var colorCinco = (255, 0, 255, alphaTransparencia);
  
  
  //Figura 1//
  stroke(255, 255, 0);
  fill(colorUno);//Relleno de color amarillo en RGB(A)
  square(squarePosition+s, squarePosition+s, squareSize);// Arriba izquierda
  square(squarePosition*2+s, squarePosition+s, squareSize);// Arriba derecha
  square(squarePosition+s, squarePosition*2+s, squareSize);// Abajo izquierda
  square( squarePosition*2+s,  squarePosition*2+s, squareSize);// Abajo derecha
 
  
  //Figura 2//
  stroke(0, 0, 255);
  fill(colorDos); // Relleno de color azul en RGB(A)
  square(squarePosition*4+s, squarePosition+s, squareSize); // Primero arriba
  square(squarePosition*4+s, squarePosition*2+s, squareSize); // Segundo cuadrado
  square(squarePosition*4+s, squarePosition*3+s, squareSize); // Tercer cuadrado
  square(squarePosition*5+s, squarePosition*3+s, squareSize); // Cuadrado cuadrado lateral
  
  
  //Figura 3//
  stroke(255, 0, 0);
  fill(colorTres); // Relleno de color rojo en RGB(A)
  square(squarePosition*7+s, squarePosition+s, squareSize); // Primero
  square(squarePosition*7+s, squarePosition*2+s, squareSize); // Segundo
  square(squarePosition*7+s, squarePosition*3+s, squareSize); // Tercero
  square(squarePosition*7+s, squarePosition*4+s, squareSize); // Cuarto
  
  //Figura 4//
  stroke(0, 255, 0);
  fill(colorCuatro); // Relleno de color verde en RGB(A)
  square(squarePosition*9+s, squarePosition+s, squareSize); //Primero arriba
  square(squarePosition*9+s, squarePosition*2+s, squareSize); // Segundo izquierda
  square(squarePosition*10+s, squarePosition*2+s, squareSize); // Primero derecha
  square(squarePosition*10+s, squarePosition*3+s, squareSize); // Segundo derecha
  
  //Figura 5//
  stroke(255, 0, 255);
  fill(colorCinco); // Relleno de color verde en RGB(A)
  square(squarePosition*13+s, squarePosition+s, squareSize); // Medio arriba
  square(squarePosition*12+s, squarePosition*2+s, squareSize); // Lateral izquierda
  square(squarePosition*13+s, squarePosition*2+s, squareSize); // Medio abajo
  square(squarePosition*14+s, squarePosition*2+s, squareSize); // Lateral derecha
}
*/

//Solución 2 y 3:
s = 3;// Sangrado entre cuadrados;  
  
//Tamaños://
var squareSize = 50-2*s;
var squarePosition = 50;

//Color//
alphaTransparencia = 90; // Transparencia del color

function setup() {
createCanvas(800, 300);
strokeWeight(3);
}

function draw() {
background(0);
stroke(255, 255, 0);
fill(255, 255, 0, alphaTransparencia);
//Arays con las coordenadas://
var coordX = [
  squarePosition+s, squarePosition*2+s, squarePosition+s, squarePosition*2+s,
  squarePosition*4+s, squarePosition*4+s, squarePosition*4+s, squarePosition*5+s,
  squarePosition*7+s, squarePosition*7+s, squarePosition*7+s, squarePosition*7+s,
  squarePosition*9+s, squarePosition*9+s,squarePosition*10+s, squarePosition*10+s,             squarePosition*13+s, squarePosition*12+s, squarePosition*13+s,squarePosition*14+s, 
  ]

var coordY = [
  squarePosition+s,  squarePosition+s, squarePosition*2+s,  squarePosition*2+s,
  squarePosition+s, squarePosition*2+s, squarePosition*3+s, squarePosition*3+s, 
  squarePosition+s, squarePosition*2+s,  squarePosition*3+s, squarePosition*4+s,
  squarePosition+s, squarePosition*2+s, squarePosition*2+s, squarePosition*3+s, 
  squarePosition+s, squarePosition*2+s, squarePosition*2+s, squarePosition*2+s,
    ]

//Bucle for://
  for(let i =0; i<= coordX.length-1; i++){
    
    square(coordX[i], coordY[i], squareSize);
    
    if (i===4-1){                          //fig2
      stroke(0, 0, 255);
      fill(0, 0, 255, alphaTransparencia);     
      
    } else if (i===8-1){                   //fig3
      stroke(255, 0, 0);
      fill(255, 0, 0, alphaTransparencia); 
      
    } else if (i===12-1){                  //fig4
      stroke(0, 255, 0);
      fill(0, 255, 0, alphaTransparencia); 
      
    } else if (i===16-1){                  //fig5
      stroke(255, 0, 255);
      fill(255, 0, 255, alphaTransparencia); 
  }  
}
}
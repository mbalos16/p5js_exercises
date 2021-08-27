//2.4b Space Invaders 2//

/*
Copia el codigo de tu alien del Ejercicio 1.13 del Reto 1 y organiza sus valores en variables.

Pasos
1. Copia el código de la PEC anterior

2. Declara las variables
Declara las variables que crees que te pueden hacer falta al inicio del código.

3. Aplica las variables
Aplica las variables declaradas en las partes del código donde puedas reutilizar sus valores.
*/

function setup() {
    createCanvas(1024, 768);
    background(0);
  }
  
  function draw() {
    t=20; // Tamaño del cuadrado;
    
    /*Figura 1*/
    square(t*9,t*5,t); // L1
    square(t*10,t*5,t);
    square(t*8,t*6,t); // L2
    square(t*9,t*6,t);
    square(t*10,t*6,t);
    square(t*11,t*6,t);
    square(t*7,t*7,t); // L3
    square(t*8,t*7,t);
    square(t*9,t*7,t);
    square(t*10,t*7,t);
    square(t*11,t*7,t);
    square(t*12,t*7,t);
    square(t*6,t*8,t);// L8
    square(t*7,t*8,t);
    square(t*9,t*8,t);
    square(t*10,t*8,t);
    square(t*12,t*8,t);
    square(t*13,t*8,t);
    square(t*6,t*9,t);// L9
    square(t*7,t*9,t);
    square(t*8,t*9,t);
    square(t*9,t*9,t);
    square(t*10,t*9,t);
    square(t*11,t*9,t);
    square(t*12,t*9,t);
    square(t*13,t*9,t);
    square(t*8,t*10,t); // L10
    square(t*11,t*10,t);
    square(t*7,t*11,t); // L11
    square(t*9,t*11,t);
    square(t*10,t*11,t);
    square(t*12,t*11,t);
    square(t*6,t*12,t); // L12
    square(t*8,t*12,t);
    square(t*11,t*12,t);
    square(t*13,t*12,t);
    
    /*FIGURA 2*/
    square(t*21,t*5,t); //L1
    square(t*27,t*5,t);
    square(t*22,t*6,t); //L2
    square(t*26,t*6,t);
    square(t*21,t*7,t); // L3
    square(t*22,t*7,t);
    square(t*23,t*7,t);
    square(t*24,t*7,t);
    square(t*25,t*7,t);
    square(t*26,t*7,t);
    square(t*27,t*7,t);
    square(t*20,t*8,t); // L4
    square(t*21,t*8,t);
    square(t*23,t*8,t);
    square(t*24,t*8,t);
    square(t*25,t*8,t);
    square(t*27,t*8,t);
    square(t*28,t*8,t);
    square(t*19,t*9,t); // L5
    square(t*20,t*9,t);
    square(t*21,t*9,t);
    square(t*22,t*9,t);
    square(t*23,t*9,t);
    square(t*24,t*9,t);
    square(t*25,t*9,t);
    square(t*26,t*9,t);
    square(t*27,t*9,t);
    square(t*28,t*9,t);
    square(t*29,t*9,t);
    square(t*19,t*10,t); // L6
    square(t*21,t*10,t);
    square(t*22,t*10,t);
    square(t*23,t*10,t);
    square(t*24,t*10,t);
    square(t*25,t*10,t);
    square(t*26,t*10,t);
    square(t*27,t*10,t);
    square(t*29,t*10,t);
    square(t*19,t*11,t); // L7
    square(t*21,t*11,t);
    square(t*27,t*11,t);
    square(t*29,t*11,t);
    square(t*22,t*12,t); // L8
    square(t*23,t*12,t);
    square(t*25,t*12,t);
    square(t*26,t*12,t);
  
  /*FIGURA 3*/
    square(t*39,t*5,t); //L1
    square(t*40,t*5,t);
    square(t*41,t*5,t); 
    square(t*36,t*6,t);//L2
    square(t*37,t*6,t); 
    square(t*38,t*6,t);
    square(t*39,t*6,t);
    square(t*40,t*6,t);
    square(t*41,t*6,t);
    square(t*42,t*6,t);
    square(t*43,t*6,t);
    square(t*44,t*6,t); 
    square(t*35,t*7,t); //L3
    square(t*36,t*7,t);
    square(t*37,t*7,t);
    square(t*38,t*7,t);
    square(t*39,t*7,t);
    square(t*40,t*7,t);
    square(t*41,t*7,t); 
    square(t*42,t*7,t);
    square(t*43,t*7,t);
    square(t*44,t*7,t);
    square(t*45,t*7,t);
    square(t*35,t*8,t); // L4
    square(t*36,t*8,t);
    square(t*37,t*8,t);
    square(t*40,t*8,t);
    square(t*43,t*8,t);
    square(t*44,t*8,t);
    square(t*45,t*8,t); 
    square(t*35,t*9,t); //L5
    square(t*36,t*9,t);
    square(t*37,t*9,t);
    square(t*38,t*9,t);
    square(t*39,t*9,t);
    square(t*40,t*9,t);
    square(t*41,t*9,t);
    square(t*42,t*9,t);
    square(t*43,t*9,t); 
    square(t*44,t*9,t);
    square(t*45,t*9,t);
    square(t*38,t*10,t);//L6
    square(t*39,t*10,t);
    square(t*41,t*10,t); 
    square(t*42,t*10,t);
    square(t*37,t*11,t); //L7
    square(t*38,t*11,t);
    square(t*40,t*11,t);
    square(t*42,t*11,t);
    square(t*43,t*11,t);
    square(t*35,t*12,t); //L8
    square(t*36,t*12,t);
    square(t*44,t*12,t);
    square(t*45,t*12,t);
  }
  
  
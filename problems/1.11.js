//1.11 Tetris 1 - Dibujo//

/*
Dibuja 5 piezas del juego Tetris. Solo necesitarás usar cuadrados.

Pasos
1. Haz un esbozo sobre papel cuadriculado de las piezas
Establece la medida de los rectángulos y las coordenadas x y y de cada uno de ellos

2. Dibuja las piezas en p5.js
Dibuja las piezas en p5.js usando la función rect() o, si lo prefieres, la función square()

3. Define color de relleno y de contorno de cada pieza
Define los colores cada pieza, usando transparencia para el relleno
*/

//Para solucionar este ejercicio he definido dos variable, una de ellas para definir el sangradode cada cuadrado y la otra para determinar y cambiar la transparencia del color. Asimismo, he decidido cambiar el tamaño del canvas para facilitar los cálculos y asegurarme de que todo dispone de el mismo espacio.//

function setup() {
    createCanvas(800, 300);
    strokeWeight(3);
  }
  
  function draw() {
    background(0);
    s = 3;// Sangrado entre cuadrados;
    alphaTransparencia = 90; // Transparencia del color
    
    /*Figura 1*/
    stroke(255, 255, 0);
    fill(255, 255, 0, alphaTransparencia);//Relleno de color amarillo en RGB(A)
    square(50+s, 50+s, 50-2*s);// Arriba izquierda
    square(100+s, 50+s, 50-2*s);// Arriba derecha
    square(50+s, 100+s, 50-2*s);// Abajo izquierda
    square(100+s, 100+s, 50-2*s);// Abajo derecha
   
    
    /* Figura 2*/
    stroke(0, 0, 255);
    fill(0, 0, 255, alphaTransparencia); // Relleno de color azul en RGB(A)
    square(200+s, 50+s, 50-2*s); // Primero arriba
    square(200+s, 100+s, 50-2*s); // Segundo cuadrado
    square(200+s, 150+s, 50-2*s); // Tercer cuadrado
    square(250+s, 150+s, 50-2*s); // Cuadrado cuadrado lateral
    
    
    /*Figura 3*/
    stroke(255, 0, 0);
    fill(255, 0, 0, alphaTransparencia); // Relleno de color rojo en RGB(A)
    square(350+s, 50+s, 50-2*s); // Primero
    square(350+s, 100+s, 50-2*s); // Segundo
    square(350+s, 150+s, 50-2*s); // Tercero
    square(350+s, 200+s, 50-2*s); // Cuarto
    
    /*Figura 4*/
    stroke(0, 255, 0);
    fill(0, 255, 0, alphaTransparencia); // Relleno de color verde en RGB(A)
    square(450+s, 50+s, 50-2*s); //Primero arriba
    square(450+s, 100+s, 50-2*s); // Segundo izquierda
    square(500+s, 100+s, 50-2*s); // Primero derecha
    square(500+s, 150+s, 50-2*s); // Segundo derecha
    
    /*Figura 5*/
    stroke(255, 0, 255);
    fill(255, 0, 255, alphaTransparencia); // Relleno de color verde en RGB(A)
    square(650+s, 50+s, 50-2*s); // Medio arriba
    square(600+s, 100+s, 50-2*s); // Lateral izquierda
    square(650+s, 100+s, 50-2*s); // Medio abajo
    square(700+s, 100+s, 50-2*s); // Lateral derecha
  }
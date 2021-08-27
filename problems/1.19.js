//1.19 Coordenadas 2//

/*
Dibuja el logotipo diseñado por Oskar Schlemmer en 1922 para la Bauhaus.

Pasos
1. Haz un esbozo sobre papel cuadriculado del logotipo
Analiza las piezas componen el logotipo, su medida y las coordenadas x y y de cada una de ellas

2. Dibuja las piezas en p5.js
Dibuja cada pieza utilizando solo las formas ellipse(), rect() y line()

3. Ajusta la forma de los vértices
Redondea los vértices
*/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);                           //Color de fondo negro
    t=20                                     //Variable para modificar el tamaño;
    
    
    //CIRCULO:
    noFill();                                //No relleno
    stroke("white");                         //Color contorno blanco
    strokeWeight(1.5);                       //Tamaño contorno 2px
    ellipse(t*9,t*10,t*15,t*15)            //Elipse 
    
    //OJO:  
    line(t*6, t*6, t*7, t*6);                //Linea de la izquierda del ojo
    line(t*9, t*8, t*9, t*9);                //Linea de bajo del ojo
    
    fill("white");                           //Relleno blanco para el ojo
    square(t*7, t*6, t*2);                   //Cuadrado del ojo
    
    //NARIZ:
    strokeCap(SQUARE); 
    strokeWeight(4);                          //Contorno 4px
    line(t*11, t*2.75, t*11, t*12);            //Linea vertical nariz
    strokeWeight(1.5);                        //Contorno 1.5px
    line(t*9.5, t*12, t*11.1 ,t*12);          //Linea horizontal nariz
    
    //BOCA:
    strokeWeight(8);                          //Contorno de 8px
    line(t*10.5, t*12, t*10.5, t*15);         //Linea vertical boca
    strokeWeight(1.5);                        //Contorno 1.5px
    line(t*9.5, t*13.5, t*10.5, t*13.5);      //Linea vertical boca
    
    //BARBILLA:
    strokeWeight(8);  
    line(t*10.5, t*12, t*10.5, t*15);         //Linea vertical boca
    square(t*8.1, t*15.2, t*2);               //Cuadrado de la barbilla
    ellipse(t*9.1,t*16.4,t*2);
    strokeWeight(1.5);                        // Contorno 1.5px
    line(t*7, t*15.05, t*8.1, t*15.05);       //Linea vertical boca
    
  }
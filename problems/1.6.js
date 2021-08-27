//1.6 Hello Color//
/*
En este ejercicio reproduciremos la imagen de referencia y trabajaremos con el contorno y el relleno de las formas. Sigue los pasos que encontrarás en la parte superior de la ventana.

1. Dibuja do círculos parecidos a los de la imagen
En el draw(), dibuja dos círculos parecidos a los de la imagen. Aplica el color de relleno por separado, justo antes de dibujar cada uno

2. Modifica el fill() del primer círculo y elimina el contorno de los dos círculos
Utiliza estas dos líneas de código para modificar el relleno del primer círculo y eliminar el contorno ambos ---> fill('#4357AD'); ---> noStroke();

3. Añade estas dos líneas para cambiar el contorno del segundo círculo
Añade estas dos líneas antes del fill() del segundo círculo para que cambie su contorno ---> strokeWeight(25); // Grosor de la línea ---> stroke('#FFCA60'); // Color de la línea


4. Modifica el segundo círculo para que no tenga relleno
Añade una instrucción que quite el relleno del segundo círculo
*/

function setup() {
    createCanvas(400, 250);
    noStroke(); 
    //Esta funcción elimina el contorno de las elipses.//
  }
  
  function draw() {
    background('#f5ead7');
    
    //fill(238, 93, 83); //Primer fill.//
    /*Para poder encontrar el color exacto al del ejemplo,
    se ha descargado la imagen y con la ayuda del programa
    GIMP se ha cogido una muestra de color y se ha aplicado 
    posteriormente aqui.*/
    
    fill('#4357AD'); /*Segundo fill, que reasigna el color
    unicamente a la primera elipse.*/
    
    ellipse(0, 0, 400, 400);
    /*Se ha creado una elipse que tiene su centro en las
    coordenadas x=0,y=0. Al ser de un diametro de 400px de 
    alchura y altura, se extiende en el exterioe del canvas.*/
    
    strokeWeight(25);//Grosor de la linea de 25px.
    stroke('#FFCA60');//Color de la linea amarillo/anaranjado.
    
    noFill(); 
    /*Esta funcción hace que el circulo siguiente no tenga
    relleno en absoluto.*/
    
    //fill(93, 109, 112);
    /*Se puede observar que a diferencia de la primera muesta
     de color, en este caso el rojo es mucho menos elevado,
       predominando el color azul, seguido del verde. Los 
     numeros, al ser bajos y muy cercano, no se aprecia 
     demasiado la predominancia del color azul.*/
    
    ellipse(399, 249, 300, 300);
    /*En este caso, se ha situado el centro de la elipse en
    el extremo inferior derecho del canvas. Teniendo en 
    cuenta que en p5.js se cuenta a partir del numero "0", 
    el punto exacto donde termina el canvas es la anchura 
    del canvas -1 y la altura del canvas -1. Por lo tanto, el
    centro de la elipse está situado en x=399, y=245.*/
  }
  
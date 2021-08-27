//Hello World – setup() vs. draw() – Dibujo//

/*
En este ejercicio experimentaremos con la transparencia y observaremos la diferencia que hay entre las funciones setup() y draw().
Sigue los pasos y añade como comentarios al código, las respuestas a las preguntas planteadas por el enunciado.
Nota: Mira cómo aplicar la transparencia en la referencia de la web p5.js: https://p5js.org/es/reference/#/p5/fill

Pasos
1. Añade transparencia al fondo
Modifica el color de background() para que incluya transparencia (aproximadamente un 10% del total - poco opaco) y observa qué pasa al ejecutar el código

2. Mueve la instrucción background() en el draw()
Mueve la función background(), previamente modificada, en el draw() y observa qué pasa al ejecutar el código. ¿Cuántas veces crees que se dibuja? ¿Por qué?

3. Mueve las instrucciones de dibujo del triángulo en el draw()
Mueve las instrucciones de dibujo del triángulo y ejecuta nuevamente el código. ¿Qué crees que pasa? ¿Por qué?
*/



//EJERCICIO://
function setup() {
    createCanvas(400, 350); // Creamos el canvas
    //background(50, 25.5); // Escala de grises
    
    /*NOTA:Se ha dividido la opacidad total (255) entre el 
    10% para disponer de la transparencia necesaria y 
    requerida en el enunciado: 255/10 =25.5. Se observa 
    como el color del fondo se vuelve mucho más claro 
    llegando a un gris casi "light" (204).También se ha 
    comentado la función background para copiarla en la
    función draw y observar su comportamiento*/
  
    /* Manipulamos la velocidad de lectura del programa 
       para que la función draw() se repita más lentamente 
    */
    frameRate(2);
    
    noStroke(); // Eliminamos el contorno de defecto
    
    fill('white'); // Algunos colores tienen nombres registrados
    //triangle(200, 50, 350, 300, 50, 300); // Dibujamos el triángulo
      /*Se ha comentado la linea del triangulo para poder
      llevarla en la funcción draw()*/
  }
  
  function draw() {
    background(50, 25.5); 
    
    /*Al copiar la función background() en la función draw()
    se observa como el codigo se ejecuta infinidad de veces.
    Esto puede suceder debido a que la función setup()
    se ejecuta una única vez al ejecutar el codigo, 
    es la que inicia el programa. Esto no parece suceder 
    con la función draw(), en este caso se dibuja el codigo
    infinidad de veces.
    
    Si lo pensamos bien, la función setup() tiene su sentido, 
    solo necesitamos dibujar una vez el canvas. Si sabemos
    que contorno (stroke()) que queremos para todas nuestras 
    figuras geometricas, solo lo pondremos una vez y lo 
    haremos aquí, si estuviesemos más comodos en trabajar 
    con los grados (en el caso de la funcción arc())
    también lo definiremos aquí (angleMode(DEGREES)).*/
    
    triangle(200, 50, 350, 300, 50, 300);
    /*En el momento en el que hemos pasado la función triangle()
    dentro de la función draw(), y despues del background,
    lo que ha sucedido es que el triangulo también se ejecuta 
    despues de cada ejecución el background(). Esto hace que el
    background no superponga nunca el triangulo y se note la 
    modificación de la transparencia únicamente en el fundo. 
    
    Si por lo contrario pusiesemos el triangulo primero y el
    backround después, pese a tener definido el fill("white"),
    nunca tendriamos el tiangulo con un blanco puro ya que
    el color de 10% del background se dibujaría por encima.
    
    Orden de los elementos background y triangulo con blanco
    no puro:
    triangle(200, 50, 350, 300, 50, 300);
    background(50, 25.5);*/ 
  }
  
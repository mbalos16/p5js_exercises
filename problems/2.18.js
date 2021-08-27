//2.18 Patrón Geométrico//

/*
«La geometría es la ciencia de lo que siempre es.»
Platón (La República)

Con patrón geométrico nos referimos a la repetición de uno o varios motivos geométricos por todo el canvas, explorando y buscando una textura final que sea de nuestro gusto y provecho.

Partiendo de esta idea, lo que pedimos en este ejercicio es crear un modelo libre de patrón, basado en formas geométricas y que, utilizando la técnica de bucles for anidados, rellene todo el canvas.

Este patrón lo utilizarás para crear un diseño sencillo de tu elección (portada de libro, cartel de película, carátula de un disco), que integre el patrón como su elemento principal. Es muy recomendable, aunque no obligatorio, que el patrón guarde algún tipo de relación con el posterior diseño en el que se integre (¿un patrón de naipes para un libro de Alicia en el País de las Maravillas?).

Para la creación del diseño, una vez hayas generado el patrón debes guardarlo como una imagen (utilizando el método save()) y utilizarla en el software que escojas (Photoshop, Illustrator...). Puedes integrar tipografía u otros elementos de diseño que consideres oportunos. También puedes utilizar un mockup en el que integrar el diseño. Mantén tu diseño sencillo, prioriza la creación del patrón en P5 por encima de su posterior aplicación.


Para realizarlo deberéis cumplir los siguientes criterios:

Debes incluir al principio del código comentarios describiendo tu ejercicio y cómo piensas llevarlo a cabo en el código (p.ej. “Voy a realizar un patrón de círculos usando ellipse() y random() para determinar sus tamaños y colores simulado agujeros negros para ilustrar la portada de Cosmos de Carl Sagan”).
Usa una paleta de máximo 3 colores. Se pueden usar variaciones de la paleta de colores sin problema (mismo color pero distinta saturación, etc.).
Podéis utilizar todas las formas geométricas ya practicadas y vistas.
Utiliza al menos cuatro variables para definir distintos parámetros de dibujo del patrón.
Usa alguna estructura condicional y la función random() para aportar cierta aleatoriedad a tu diseño. (p.ej. Que cada elemento del patrón tenga un color o una orientación distinta o que el elemento a repetir en cada iteración sea escogido aleatoriamente).
El tamaño del canvas será de un mínimo de 512x512 px y un máximo de 1024x1024 px. Dentro de estos valores puedes elegir la relación de aspecto que consideres oportuna para tu diseño (p.ej. 1024x512 px para un póster, 512x512 px para la portada de un disco).
Utiliza la función noLoop() o randomSeed() para evitar que el código modifique los resultados visuales constantemente.


Revisa con detenimiento el enunciado publicado en el aula donde encontrarás las condiciones de entrega e imágenes de referencia.
*/




// Variables globals
var canvasWH = 512;
var scalePattern = 1/35;


function setup() {
  createCanvas(canvasWH, canvasWH);
  noLoop();
}


function draw() {
  //Aray con colores
  const colors = ["#643A71","#A588B7", "#B964A4", "#D39CC5", "#6C4D80","#AA78BA","#DDC9E3"];
  
  /*Declaramos la variable "l" como la longitud de un cuadrado.
  Le asignamos a "l" el valor redondeado de canvas - 1 
  multiplicado por la escala más 1.*/
  noStroke();
  
  //lado maximo de los cuadrados que se va a dibujar
  const l = round((canvasWH - 1) * scalePattern + 1);

  /*Calculamos el numero de filas y columnas que se van 
  a dibujar dentro del patron dividiendo el tamaño del 
  canvas entre el lado del cuadrado. Redondeamos a la alta 
  para asegurar que se rellena todo el canvas.*/
  var nFilas = ceil(canvasWH / l);
  var nColumnas = ceil(canvasWH / l);

  /*Definimos las coordenadas del cuadrado inicial*/
  var x = 0
  var y = 0
  
  //Elegimos el valor mininmo de la s
  const s_inicial = 0.1
  
  /*Definimos s1 como la reducción que se actualiza
  en la iteración de cada fila*/
  var s1 = s_inicial
      
  //Variación del incremento / decremento
  const escalon = (1 - s_inicial) / ceil(nFilas / 2);

  
  
  //Bucle de filas
  for (let i = 0; i < nFilas; i++) {

        
    // Reducción filas: incrementa hasta mitad y luego decrementa
    if (i < nFilas / 2) {                               // Si primera mitad
      
        //s1 crece hasta la mitad del canvas
        s1 += escalon;   
      
      } else {                                          // Si segunda mitad
        
        //s1 decrece desde la mitad del canvas
        s1 -= escalon;
      }
      var s2 = s_inicial
      
  
      // Reducción columnas: incrementa hasta mitad y luego decrementa
      for (let j = 0; j < nColumnas; j++) {

        if (j < nColumnas / 2) {                       // Si primera mitad

          s2 += escalon;

        } else {                                       // Si segunda mitad

          s2 -= escalon;
        }

        //Contracción del tamaño del cuadrado
        var tamano = l * s1*s2; 

        /*Centramos los cuadrados a la mitad del cuadrado
        completo menos la mitad del cuadrado contraido*/
        var ajusteCentro = l / 2 - tamano / 2;
        
        colorFinal = colors[round(random(colors.length-1))];
        fill(colorFinal);
        
        // Dibujamos el cuadrado
        square(x + ajusteCentro, y + ajusteCentro, tamano);

        // Pasamos a la siguiente columna
        x = x + l;
      }
    
    // Volvemos a la primera columna
    x = 0;
    
    // Pasamos a la siguiente fila
    y = y + l;
  }
}

function mousePressed() {
  save("myCanvas.png");
}
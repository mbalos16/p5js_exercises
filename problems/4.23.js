//4.23 sin() y cos() aplicados a color//

/*
La periodicidad de las funciones sin() y cos() hace que estas sean ampliamente utilizadas en programación, tanto creativa como no, para realizar multiplices objetivos. En este ejercicio seguiremos experimentando con estas funciones aplicándolas al mundo del color. 

Pasos
1. Observa la periodicidad de las dos funciones
Ejecuta el código y nota como las funciones devuelven los mismos valores pero con una periodicidad distinta

2. Experimenta con tono, saturación y luminosidad
A partir del código proporcionado, experimenta con tono, saturación y luminosidad de las dos columnas (deja comentado el código de cada experimentación)
*/


//var tono = 15; // Valor para el tono -> Amarillo
var tono = 5; // Valor para el tono -> Amarillo
var sat; // Variable para variar la saturación de los colores
//var lum = 100; // Valor para la luminosidad -> Máxima
var lum = 70; // Valor para la luminosidad -> Máxima
function setup() {
  createCanvas(500, 240);
  background(25);  
}

function draw() {
  
  // Definimos las propiedades de las líneas
  strokeCap(SQUARE);
  strokeWeight(3);
  
  /* 
     Usamos el método HSB 
     H -> tono 
     S -> saturación 
     B -> luminosidad
     Los tres parámetros tienen rangos de 0 a 100
  */ 
  colorMode(HSB, 100); 
  
  /* 
     Bucle para llenar el canvas de líneas: 
     utilizaremos i como coordenada vertical de las líneas
     y también como ángulo a partir del cual calcular 
     el valor de las funciones sin() y cos()
  */
  for (i = 20; i < height; i = i+20) {
    
    ////// Parte izquierda del canvas - Exploramos la función sin() 
    
    /* 
      Mapeamos los valores de sin(i) para adaptarlos al rango de la saturación
      Recuerda que la función sin() devuelve valores de -1 a 1
    */
    sat = map(sin(i),-1,1,0,100); 
    stroke(tono, sat, lum); // Usamos la saturación obtenida del mapeado de sin(i)
    line(0, i, width/2-3, i); // Dibujamos la línea
    
    ////// Parte derecha del canvas - Exploramos la función cos() 

    /* 
      Mapeamos los valores de cos(i) para adaptarlos al rango de la saturación
      Recuerda que la función cos() también devuelve valores de -1 a 1, 
      aunque tiene una periodicidad distinta con respeto a sin():
      lo puedes comprobar mirando el canvas
    */
    sat = map(cos(i),-1,1,0,100); 
    stroke(tono, sat, lum); // Usamos la saturación obtenida del mapeado de cos(i)
    line(width/2+3, i, width, i); // Dibujamos la línea
  }
}
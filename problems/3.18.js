//3.18 Arte interactivo//

/*
Para realizar este ejercicio puedes partir de la obra que versionaste en la PEC 1 o crear una nueva (en este caso no vamos a entrar a hacer una valoración estética de este).
La idea será que aprendamos a incorporar elementos interactivos dentro de nuestro dibujo. Estas interacciones podrán ser cualquier tipo (ya sea a través del teclado, del ratón, flechas o elementos que estén dentro del canvas).
De lo que se trata es de que a través de estas acciones podamos modificar el contenido/apariencia/forma de la obra. También podemos incorporar a la obra elementos que no aparezcan en el original.

Para realizarlo deberá cumplir los siguientes criterios:
Incluir comentarios al inicio del código explicando el ejercicio y cómo funcionan las interacciones («El color de fondo cambia al mover el ratón, si pulsas la barra espaciadora aparece un nuevo elemento...»)
Poder modificar dos o más elementos en consonancia con la obra versionada. P. ej. cambiar La noche estrellada por un paisaje diurno o poder cambiar de posición los personajes de Las meninas.
Crear al menos una modificación binaria utilizando el teclado. P.ej. activar y desactivar un «modo noche» al presionar la tecla «n».
Crear al menos una modificación que tenga en cuenta la posición del ratón. P.ej. Que un elemento se modifique al hacer click sobre él o que un elemento se modifique según la posición del ratón (ver el apartado 3.4 del material docente de la asignatura).
En caso de reutilizar el ejercicio de la PEC 1, introducir algún elemento nuevo que esté relacionado con la composición y que se vea afectado por alguna de las interacciones. P.ej. un nuevo personaje en Las meninas que aparece cuando el ratón pasa por encima del espejo.
Si quieres profundizar un poco más y hacer tu código más sofisticado puedes integrar las siguientes recomendaciones:

Repartir en una o varias funciones* tu código para disfrutar de un código un poco más ordenado.
Usa la función de distancia* con al menos un elemento del canvas para interactuar con el este teniendo en cuenta la distancia del elemento con el ratón (ver apartado de contenidos y recursos adicionales: dist() y map())
*/



/*
Interacción: 
- Pupilas ojos siguen ratón cuando el ratón está en el medio de los ojos,
- Pecas persiguen ratón al pasar sobre ellas;
- Color labios cambia al presionar y, g, b;
- Al clickar con el ratón en cualquier sitio del canvas baja el pelo con translate.
- Color de fondo  y botones animado con sin();
*/

let colorLabios = "red";                                //Color labios
let colorFondo1 = [135,193,212];                        //Primer color de fondo
let colorFondo2 = [135,212,193];                        //Segundo color de fondo
let ciclosPorSegundo = 0.25;                            //Repeticiones por segundo
let frecuenciaFrame = (2 * 3.14) / (60/ciclosPorSegundo); // Frecuencia de repeticiones de la animacion
let colorInterpoladoFondo = [null,null,null];            //Definición de array fondo por rellenar


// Color Botones//
let colorBotones1 = [252, 243, 0];                    //Primer color botones
let colorBotones2 = [237, 37, 78];                      //Segundo color botones
let colorInterpoladoBotones = [null,null,null];          //Definición de array botones por rellenar


function setup() {
  createCanvas(500, 800);                                // Canvas de 500px X 800px
  noStroke();                                            //No contorno
}


function draw() {
  //------------------------------color fondo----------------------------
  // Variable que cambia entre 0 y 1 con sin() para la frecuencia specificada
  let cicloColor = (sin(frameCount * frecuenciaFrame) + 1) / 2; 
  
  //interpolaciones de color en funcion del ciclo color
  colorInterpoladoFondo[0] = colorFondo1[0] * (1-cicloColor) + colorFondo2[0] * cicloColor;
  colorInterpoladoFondo[1] = colorFondo1[1] * (1-cicloColor) + colorFondo2[1] * cicloColor;
  colorInterpoladoFondo[2] = colorFondo1[2] * (1-cicloColor) + colorFondo2[2] * cicloColor;
  background(colorInterpoladoFondo);                                                //Fondo
  
  //------------------------------PELO DETRAS----------------------------
  stroke(227, 215, 163);
  fill(227, 215, 163);
  rect(100, 300, 270, 200);                        
  noStroke();
  
  
  
  //------------------------------CUELLO------------------------------
  fill(252, 237, 230);                                  //Color un tono más claro que el del rostro
  rect(200, 430, 100, 60);                              //Cuerpo del cuello

  
  
  //------------------------------CUERPO----------------------------
  fill(252, 237, 230);                                 //Color
  rect(25,430+60, 450, 360,60);                        //Cuerpo
  
  
  
  //------------------------------ROPA------------------------------
  fill(255, 0 , 0, 80);                                //Color rojo con 80% de transparencia
  rect(25,430+60, 450, 360,60);                        //Blusa
  
  fill(252, 237, 230);                                 //Color
  triangle(250, 630, 300, 490, 200, 490);              //Escote
  
  
  fill(colorInterpoladoBotones);                       //Color
  //interpolaciones de color en funcion del ciclo color
  colorInterpoladoBotones[0] = colorBotones1[0] * (1-cicloColor) + colorBotones2[0] * cicloColor;
  colorInterpoladoBotones[1] = colorBotones1[1] * (1-cicloColor) + colorBotones2[1] * cicloColor;
  colorInterpoladoBotones[2] = colorBotones1[2] * (1-cicloColor) + colorBotones2[2] * cicloColor;
  
  ellipse(250, 630+20, 5);                             //Primer boton
  ellipse(250, 630+60, 5);                             //Segundo boton
  ellipse(250, 630+100, 5);                            //Tercer boton
  
  fill(0,20);                                          //Sombra dobladillo
  triangle(250, 630, 300-110-20, 490+50-10, 200, 490); 
  triangle(250, 630, 300, 490, 200+110+20, 490+50-10);
  
  fill(255)                                            //Color
  triangle(250, 630, 300-110, 490+50, 200, 490);       //Dobladillo camisa cuello izquierda
  triangle(250, 630, 300, 490, 200+110, 490+50);       //Dobladillo camisa cuello derecha
    
  
  //------------------------------MANGAS------------------------------
  fill(colorInterpoladoFondo);                          //Relleno del mismo tono que el fondo
  rect(25+75,430+60+160, 5, 360, 30);                   //Simulación manga izquierda :)
  rect(475-75,430+60+160, 5, 360, 30);                  //Simulación manga derecha :)
  
  
  
  //-----------------------------CABEZA------------------------------
  ellipseMode(RADIUS);                                 //Centrar la elipse
  fill(252, 229, 217);                                 //Color rosita claro cara
  ellipse(250, 250, 150, 200);                         //Elipse cabeza

  

  //-----------------------------PESTAÑAS----------------------------
  /*Calculo de la posición de las pestañas: Se ha cogido la x del ojo restandole 
  la mitad y para la "y" se ha cogido el punto de ancla de los ojos y se ha restado
  la mitad del radio del ojo.*/
  strokeWeight(2);                                     //Tamaño del contorno
  stroke(99, 99, 91);                                  //Color de pestañas
  strokeCap(ROUND);                                    //Redondea el final de las lineas
  //----------------------PESTAÑAS OJO IZQUIERDO----------------------------
  line(250 - 70 + 15, 210 - 15, 250 - 70, 180);        //Primera pestaña ojo izquierdo 
  line(250 - 70 + 15+10, 210 - 15, 250 - 50, 180-10);  //Segunda pestaña ojo izquierdo 
  line(250 - 70 + 15+20, 210, 250 - 30, 180);          //Tercera pestaña ojo izquierdo
  //----------------------PESTAÑAS OJO DERECHO----------------------------
  line(250 + 70 - 15, 210, 250 + 30, 180);             //Primera pestaña ojo derecho
  line(250 + 70 - 15-10, 210-15, 250 + 50, 180-10);    //Segunda pestaña ojo derecho
  line(250 + 70 - 15-20, 210+15, 250 + 70, 180);       //Tercera pestaña ojo derecho
  noStroke();                            

  
  
  //------------------------------OJOS-------------------------------
  fill(247, 247, 247); //Color gris muy claro ojos

  /*Calculo de la posición del ojo: Se ha cogido el punto de ancla 
  de la cabeza más/menos la mitad de la anchura de la cabeza más/menos 30px*/
  ellipse(250 - 75 + 30, 210, 25, 30);                //Ojo izquierdo
  ellipse(250 + 75 - 30, 210, 25, 30);                //Ojo derecho



  //-----------------------------PUPILAS-----------------------------
  strokeWeight(3);                                       //Tamaño px contorno pupilas
  stroke(176, 176, 143);                                 //Color contorno pupilas
  fill(215, 219, 96);                                    //Mi color de ojos es muy raro :D
  
  fill(215, 219, 96);                                    //Mi color de ojos es muy raro :D
  xPupila = 250-8+10;                                         //Posición coordenada x pupila
  yPupila = 210-4;                                         //Posición coordenada y pupila
  
  /*Calucula la distancia entre las coordenadas de la pupila y el ratón, cuando esta 
  distancia es menor a 20, las x e y de la pupila toman las coordenadas del ratón.*/
  if (dist(xPupila, yPupila, mouseX, mouseY) < 20){        
    xPupila = mouseX;
    yPupila = mouseY;
  }
  ellipse(xPupila - 45, yPupila, 10, 10);               //Ojo izquierdo
  ellipse(xPupila + 45, yPupila, 10, 10);               //Ojo derecho
  noStroke();                                           //Cancelar contorno

  //------------------------------CEJAS------------------------------
  strokeWeight(7);                                    //Tamaño px
  stroke(99, 99, 91);                                 //Color Cejas
  line(250-75, 210-50, 250-75+40, 210-60);            //Ceja izquierda
  line(250+75-50, 210-50, 250+75+40 -50, 210-60);     //Ceja derecha
  noStroke();
  
  
  
  //------------------------------LABIOS-----------------------------
  /*Si nunguna tecla está presionada, el color de los labios es rojo*/
  if (keyIsPressed === false) {
     fill("red");
  } else{
     fill(colorLabios);
  }
  arc(250, 330, 80, 25, 0.00, PI);                   //Parte inferior labio
  arc(250-30, 340, 40, 20, PI, TWO_PI);              //Parte siperior izquierda
  arc(250+30, 340, 40, 20, PI, TWO_PI);              //Parte superior derecha
  
  

  //------------------------------PECAS------------------------------
  fill(207, 160, 114);                               //Collor pecas
  
  
  //----------------------PECAS LADO IZQUIERDO-------------------------
  
  let xPecasIz = 255-80;                               //Coordenada x lado iz
  let yPecasIz = 210+40;                               //Coordenada y lado iz
  
  /*Calucula la distancia entre las coordenadas de las pecas y el ratón, cuando esta 
  distancia es menor a 20, las x e y de laspecas toman las coordenadas del ratón.*/
  if (dist (xPecasIz, yPecasIz, mouseX, mouseY) < 20){
     xPecasIz = mouseX-10;
     yPecasIz = mouseY-10;
  }
  ellipse(xPecasIz, yPecasIz, 3, 2);
  ellipse(xPecasIz, yPecasIz+20, 3, 2);
  ellipse(xPecasIz+10, yPecasIz+20, 2, 2); 
  ellipse(xPecasIz+10, yPecasIz+10, 2, 3); 
  ellipse(xPecasIz+20, yPecasIz+20, 1, 3); 
  
  
  //----------------------PECAS LADO DERECHO----------------------------
  let xPecasDr = 255+30;                              //Coordenada x lado dr
  let yPecasDr = 210+40;                                 //Coordenada x lado dr
  /*Calcula la distancia entre las coordenadas de las pecas y el ratón, cuando esta 
  distancia es menor a 20, las x e y de laspecas toman las coordenadas del ratón.*/
  if (dist(xPecasDr, yPecasDr, mouseX, mouseY) < 20){
      xPecasDr = mouseX - 10;
      yPecasDr = mouseY - 10;
  }
  ellipse(xPecasDr+40, yPecasDr+10,3, 2);
  ellipse(xPecasDr+5, yPecasDr+20, 1, 2);
  ellipse(xPecasDr+10+5, yPecasDr+20, 2, 2); 
  ellipse(xPecasDr+20, yPecasDr+10, 2, 3); 
  ellipse(xPecasDr+20+5, yPecasDr+20, 1, 3); 
  
  
  
  //------------------------------NARIZ------------------------------
  strokeWeight(3);                                   //Tamaño px
  stroke(212, 185, 171);                             //Color nariz
  noFill();                                          //No relleno
  a=30;                                              //Altura Y nariz
  strokeJoin(ROUND);                                 //Redondear vertices 
  beginShape();                                      //Comienzo dibujo
  vertex(230, 250+a);                                //Vértice de inicio
  bezierVertex(230, 250+a, 240, 270+a, 250, 250+a);  //Primer vertice
  bezierVertex(250, 250+a, 260, 270+a, 270, 250+a);  //Segundo vertice
  bezierVertex(270, 250+a, 265, 250+a, 255, 230+a);  //Tercer vertice
  bezierVertex(255, 230+a, 255, 230+a, 250, 200+a);  //Cuarto vertice
  endShape();                                        //Final dibujo
  
  
  
  //------------------------------PELO------------------------------
  stroke(227, 215, 163);
  fill(227, 215, 163);
  
  /*cuando es presionado el ratón sín importar su posición en el canvas, 
  el pelo baja y al soltarlo vuelve a su posición*/
  if(mouseIsPressed){                        
    translate(0,20);
  }
  translate (0,-20);
  
  
  //----------------------PELO LADO IZQUIERDO-------------------------
  beginShape();                                                      //Comienzo dibujo
  vertex(250, 100);                                                  //Vértice de inicio
  bezierVertex(250, 100, 80, 240, 160, 600);                        //Primer vertice
  bezierVertex(160, 600, 160-20, 600-40, 160-40, 600);               //Segundo vertice
  bezierVertex(160-40, 600, 160-20-40, 600-40, 160-80, 600);         //Tercer vertice
  bezierVertex(160-80, 600, 160-20-40-40, 600-40, 160-80-40, 600);   //Quarto vertice
  bezierVertex(160-80-40, 600, 40, 40, 250, 45);                     //Quinto vertice
  endShape(CLOSE);                                                   //Final dibujo
  
  //----------------------PELO LADO DERECHO-------------------------
  /* Para poder reflejar el pelo de forma correcta, solo es necesario cambiar la 
  coordenada X de todos los vertices y curvas. Para ello, se ha utilizado la formula: 
  X derecha = (250 - X izquierda) * 2 + X izquierda
  250 es el punto de referencia para el reflejo */
  
  beginShape();                                                      //Comienzo dibujo
  vertex(250, 100);                                                  //Vértice de inicio
  bezierVertex(250, 100, 
               (250-80)*2 + 80, 240, 
               (250-160)*2 + 160, 600);                              //Primer vertice
  
  bezierVertex((250-(160))*2 +160, 600, 
               (250-(160-20))*2 +160-20, 600-40, 
               (250-(160-40))*2 +160-40, 600);                       //Segundo vertice
  
  bezierVertex((250-(160-40))*2 +160-40, 600,
               (250-(160-20-40))*2 +160-20-40, 600-40, 
               (250-(160-80))*2 +160-80, 600);                       //Tercer vertice
  bezierVertex((250-(160-80))*2 +160-80, 600,
               (250-(160-20-40-40))*2 +160-20-40-40, 600-40, 
               (250-(160-80-40))*2 +160-80-40, 600);                 //Quarto vertice
  bezierVertex((250-(160-80-40))*2 +160-80-40, 600,
               (250-40)*2 +40, 40,
               250, 45);                                             //Quinto vertice
  endShape(CLOSE);                                                   //Final dibujo
  noStroke();                                                        //No contorno
    
}

function keyTyped() {
  if (key === 'y') {
    colorLabios = "yellow";             //tecla y - cambia el color a amarillo 
  } else if (key === 'g') {
    colorLabios = "green";              //tecla g - cambia el color a verde
  } else if (key === 'b') {
    colorLabios = "blue";              //tecla b - cambia el color a azul
  }else{                               //Cualquier otra tecla no hagas nada
    colorLabios ="red";
  }
} 
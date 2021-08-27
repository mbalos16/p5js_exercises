//1.24 Arte versionado//

/*
El ejercicio consiste en reinterpretar una obra de arte existente utilizando las funciones de dibujo que habéis aprendido.

Puede ser una versión de una pintura, escultura, obra arquitectónica emblemática o cualquier otro tipo de manifestación artística, en su totalidad o un fragmento de ella (p.ej. Una de las meninas de Velázquez).

Podéis utilizar el estilo de dibujo que más os guste (¿una menina cubista?).


Para realizarlo deberéis cumplir los siguientes criterios:

Utilizar una paleta de al menos 4 colores diferentes.
Se pueden utilizar todas las formas geométricas ya practicadas y vistas, pero como mínimo deberíais haber utilizado las siguientes: arc() y vertex().
Debéis incluir al principio del código comentarios describiendo vuestro ejercicio (p.ej. “He dibujado la Ópera de Sidney de Jørn Utzon al estilo Bauhaus”).
El tamaño del canvas será como máximo de 800x800 px.

Os aconsejamos que adaptéis el ejercicio a vuestro nivel de confianza con lo aprendido durante este reto. Empezad con un planteamiento sencillo e id añadiendo complejidad (más elementos o figuras, formas más complejas...) según os vayáis viendo con soltura.

Nota: Revisad el enunciado completo de la PEC para obtener todos los detalles.
*/

function setup() {
    createCanvas(500, 800);                                // Canvas de 500px X 800px
    background(135, 193, 212);                             //Fondo
    noStroke();                                            //No contorno
  }
  
  
  
  function draw() {
    
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
    fill(255, 0 , 0, 80);                                // Color rojo con 80% de transparencia
    rect(25,430+60, 450, 360,60);                        //Blusa
    
    fill(252, 237, 230);                                 //Color
    triangle(250, 630, 300, 490, 200, 490);              //Escote
    
    fill(255);                                           //Color
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
    fill(135, 193, 212);                                 //Relleno del mismo tono que el fondo
    rect(25+75,430+60+160, 5, 360, 30);                  //Simulación manga izquierda :)
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
    strokeWeight(3);                                   //Tamaño px contorno pupilas
    stroke(176, 176, 143);                             //Color contorno pupilas
    fill(215, 219, 96);                                //Mi color de ojos es muy raro :D
  
    /*Calculo de la posición de la pupila: Se ha cogido el punto de ancla 
    de la cabeza más/menos la mitad de la anchura de la cabeza, 
    más/menos 40px/20px*/
    ellipse(250 - 75 + 40, 210, 10, 10);               //Ojo izquierdo
    ellipse(250 + 75 - 20, 210, 10, 10);               //Ojo derecho
    noStroke();                                        //Cancelar contorno
  
  
  
    //------------------------------CEJAS------------------------------
    strokeWeight(7);                                    //Tamaño px
    stroke(99, 99, 91);                                 //Color Cejas
    line(250-75, 210-50, 250-75+40, 210-60);            //Ceja izquierda
    line(250+75-50, 210-50, 250+75+40 -50, 210-60);     //Ceja derecha
    noStroke();
    
    
    
    //------------------------------LABIOS-----------------------------
    fill(255,0,0);
    arc(250, 330, 80, 25, 0.00, PI);                   //Parte inferior labio
    arc(250-30, 340, 40, 20, PI, TWO_PI);              //Parte siperior izquierda
    arc(250+30, 340, 40, 20, PI, TWO_PI);              //Parte superior derecha
    
    
  
    //------------------------------PECAS------------------------------
    fill(207, 160, 114);                               //Collor pecas
    //----------------------PECAS LADO IZQUIERDO-------------------------
    ellipse(190, 250, 3, 2);
    ellipse(190, 270, 3, 2);
    ellipse(200, 270, 2, 2); 
    ellipse(210, 260, 2, 3); 
    ellipse(220, 270, 1, 3); 
    //----------------------PECAS LADO DERECHO----------------------------
    ellipse(190+110, 260,3, 2);
    ellipse(190+75, 270, 1, 2);
    ellipse(200+75, 270, 2, 2); 
    ellipse(210+70, 260, 2, 3); 
    ellipse(220+75, 270, 1, 3); 
    
    
    
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
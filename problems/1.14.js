//1.14 Space Ships 1 - Dibujo//

/*
Dibuja una nave del juego de arcade Galaga a tu elección. Sólo necesitarás usar rectángulos.

Pasos:
1. Haz un esbozo sobre papel cuadriculado
Haz un esbozo sobre papel cuadriculado y establece la medida de los rectángulos y las coordenadas x y y de cada uno de ellos

2. Crea las funciones setup() y draw()
*/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
    t=10;    //Tamaño del cuadrado;
    a=2.5-t    //Anchura del triangulo;
    
    rect(17*t,10*t, a, t);  //L1
    rect(17*t,11*t, a, t);  //L2
    rect(17*t,12*t, a, t);  //L3
    rect(16*t,13*t, a, t);  //L4
    rect(17*t,13*t, a, t);
    rect(18*t,13*t, a, t);
    rect(16*t,14*t, a, t);  //L5
    rect(17*t,14*t, a, t);
    rect(18*t,14*t, a, t);
    rect(13*t,15*t, a, t);  //L6
    rect(16*t,15*t, a, t);
    rect(17*t,15*t, a, t);
    rect(18*t,15*t, a, t);
    rect(21*t,15*t, a, t);
    rect(13*t,16*t, a, t);  //L7
    rect(16*t,16*t, a, t);
    rect(17*t,16*t, a, t);
    rect(18*t,16*t, a, t);
    rect(21*t,16*t, a, t);
    rect(13*t,17*t, a, t);  //L8
    rect(15*t,17*t, a, t);
    rect(16*t,17*t, a, t);
    rect(17*t,17*t, a, t);
    rect(18*t,17*t, a, t);
    rect(19*t,17*t, a, t);
    rect(21*t,17*t, a, t);
    rect(13*t,18*t, a, t);  //L9
    rect(14*t,18*t, a, t);
    rect(15*t,18*t, a, t);
    rect(16*t,18*t, a, t);
    rect(18*t,18*t, a, t);
    rect(19*t,18*t, a, t);
    rect(20*t,18*t, a, t);
    rect(21*t,18*t, a, t);
    rect(10*t,19*t, a, t); //L10
    rect(13*t,19*t, a, t);  
    rect(14*t,19*t, a, t);
    rect(15*t,19*t, a, t);
    rect(19*t,19*t, a, t);
    rect(20*t,19*t, a, t);
    rect(21*t,19*t, a, t);
    rect(24*t,19*t, a, t);
    rect(10*t,20*t, a, t); //L11
    rect(13*t,20*t, a, t);  
    rect(14*t,20*t, a, t);
    rect(15*t,20*t, a, t);
    rect(17*t,20*t, a, t);
    rect(19*t,20*t, a, t);
    rect(20*t,20*t, a, t);
    rect(21*t,20*t, a, t);
    rect(24*t,20*t, a, t);
    rect(10*t,21*t, a, t); //L12
    rect(12*t,21*t, a, t);
    rect(13*t,21*t, a, t);  
    rect(14*t,21*t, a, t);
    rect(15*t,21*t, a, t);
    rect(16*t,21*t, a, t);
    rect(17*t,21*t, a, t);
    rect(18*t,21*t, a, t);
    rect(19*t,21*t, a, t);
    rect(20*t,21*t, a, t);
    rect(21*t,21*t, a, t);
    rect(22*t,21*t, a, t);
    rect(24*t,21*t, a, t);
    rect(10*t,22*t, a, t); //L13
    rect(11*t,22*t, a, t);
    rect(12*t,22*t, a, t);
    rect(13*t,22*t, a, t);  
    rect(14*t,22*t, a, t);
    rect(15*t,22*t, a, t);
    rect(16*t,22*t, a, t);
    rect(17*t,22*t, a, t);
    rect(18*t,22*t, a, t);
    rect(19*t,22*t, a, t);
    rect(20*t,22*t, a, t);
    rect(21*t,22*t, a, t);
    rect(22*t,22*t, a, t);
    rect(23*t,22*t, a, t);
    rect(24*t,22*t, a, t);
    rect(10*t,23*t, a, t); //L14
    rect(11*t,23*t, a, t);
    rect(12*t,23*t, a, t);  
    rect(14*t,23*t, a, t);
    rect(15*t,23*t, a, t);
    rect(16*t,23*t, a, t);
    rect(17*t,23*t, a, t);
    rect(18*t,23*t, a, t);
    rect(19*t,23*t, a, t);
    rect(20*t,23*t, a, t);
    rect(22*t,23*t, a, t);
    rect(23*t,23*t, a, t);
    rect(24*t,23*t, a, t);
    rect(10*t,24*t, a, t); //L15
    rect(11*t,24*t, a, t);  
    rect(14*t,24*t, a, t);
    rect(15*t,24*t, a, t);
    rect(17*t,24*t, a, t);
    rect(19*t,24*t, a, t);
    rect(20*t,24*t, a, t);
    rect(23*t,24*t, a, t);
    rect(24*t,24*t, a, t);
    rect(10*t,25*t, a, t); //L16
    rect(17*t,25*t, a, t);
    rect(24*t,25*t, a, t); 
  }
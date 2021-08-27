//4.28 Póster animado//

/*
Ejercicio largo: Caracteres animados
Anima y crea interacciones con el siguiente acrónimo: "UOC". Para crearlo, sigue las siguientes instrucciones:

Dibuja / escribe los caracteres por separado. Los trabajaremos de manera individual con la tipografía que elijas (ten en cuenta que deberás tenerla instalada en tu PC, ver función textFont ()). No debes importarla en el sketch. Recuerda que poner al principio del sketch con un comentario la tipografía de Google Fonts utilizada, si has usado una que no está en el sistema.
Haz una animación de 5 segundos en cada uno de ellos pero todos a la vez: Movimientos curvos y/o lineales (desplazamiento, rebote, otros). Ten en cuenta que:
cada cierto tiempo vuelvan a la posición inicial para leer la palabra UOC tal como se visualiza al inicio.
además, haz que cuando pulsamos la tecla "R" vuelvan al punto inicial de la animación / interacción, sea cual sea el momento en la que la presionemos.
Crea dos eventos (como mínimo), uno d teclado y uno de ratón, para poder interaccionar, configurar o modificar los caracteres. Por ejemplo:
Con las flechas aumentar o reducir el tamaño de los caracteres
Con la posición del ratón modificar el tamaño de la curva
Con el clic, modificar los colores de los caracteres
Con drag del mouse influir sobre el tiempo de animación actual
Carga en el sketch una imagen (utilizando la carga de medias) que repitiendo por todo el canvas (fors anidado) haga de fondo de pantalla. Esta imagen deberá ser original y tener un tamaño aproximado de 50x50px.
*/

//___________________Variables globales___________________
let canvasWH = 600;                   //Tamaño del canvas
let tTexto = 100;                     //Tamaño del texto

//________________Coordenadas X Y iniciales _________________
let posXU = canvasWH/2-tTexto*2;       // coordenada X de la U
let posYU = canvasWH/2;                // coordenada Y de la U

let posXO = canvasWH/2;                // coordenada X de la O
let posYO = canvasWH/2;                // coordenada Y de la O

let posXC = canvasWH/2+tTexto*2;       // coordenada X de la C
let posYC = canvasWH/2;                // coordenada Y de la C

//_____________Efecto 3D______________
let desplazamientoX = 7;
let desplazamientoY = 2;

//________Coordenada inicial imagen_____________
  xImagen = 0;
  yImagen = 0;
  let imgWidth = 50;

//_________Color____________________
let colorRelleno = "Black";
let colorContorno = "White";
let coloresLetras = ["#A7067D","#F613BA","#FCB0E8","#620449","#B00783","#FA89DC"];


//____________Animación__________
let segundosAnimacion = 5;
let frameRateAnimacion = 60;
let numeroAnimacion = frameRateAnimacion * segundosAnimacion;

//___________Reseteo animación_________
let resetAnimacion = 0;   
let XSin = null;  

function preload(){
  imgBoke=loadImage("img/navidad.jpg");
}

function setup() {
  createCanvas(canvasWH, canvasWH);
  frameRate(frameRateAnimacion);
}


function draw() {
  background("white");
  //____________________Animación_______________
  // Limitamos la animación a 300 en 5 seg a través del modulo.
  let moduloAnimacion = frameCount % numeroAnimacion ; 
  
  //Limitamos la animación con la ayuda del modulo, de 0 a 2PI en 5 segundos.
  XSin = (TWO_PI* moduloAnimacion)/numeroAnimacion;
  let deltaY = sin(XSin-resetAnimacion)*canvasWH/4 ;
  
  
  //________________Imagen________________________
  /*Genera la imagen y al estar dentro del draw 
    se escribe infinidad de veces*/
  for(i=0; i<=(canvasWH/imgWidth); i++){         //x
    for(j=0; j<=(canvasWH/imgWidth); j++){         //y
      xImagen = i*imgWidth;
      yImagen = j*imgWidth;
      image(imgBoke, xImagen, yImagen, 50, 50);
    }
  }
  
  //_______________Tipografía________________________  
  textFont ("Futura");                 //Futura
  textSize(tTexto);
  textAlign(CENTER, CENTER);
  
  
  //_________________Figuras__________________________
  //Efecto 3D con contorno y opacidad
  noFill();
  strokeWeight(3);
  stroke(colorContorno);
  text("U", posXU+desplazamientoX, posYU - deltaY -desplazamientoY); //U
  text("O", posXO+desplazamientoX, posYO + deltaY -desplazamientoY); //O
  text("C", posXC+desplazamientoX, posYC - deltaY -desplazamientoY); //C
  
  //Figura principal
  noStroke();
  fill(colorRelleno);
  
  text("U", posXU, posYU + deltaY);             //U
  text("O", posXO, posYO - deltaY);             //O
  text("C", posXC, posYC + deltaY);             //C
}
 
function keyTyped() {
  if (key === "B"|| key === "b") {              //El tamaño de las letras aumenta
    tTexto +=10;
    
  } else if (key === "S" || key === "s") {      //El tamaño de las letras disminuye.
    tTexto -=10;
    
  } else if(key === "R" || key === "r"){         //resetea la animación al principio
    resetAnimacion = XSin;
  }
}

function mouseClicked() {
  colorContorno = random(coloresLetras);
  colorRelleno = random(coloresLetras);
}
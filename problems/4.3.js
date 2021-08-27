//4.3 Image – get()//

/*
En este ejercicio importaremos una imagen en nuestro sketch y extraeremos sus colores al pasarle por encima el ratón.


Pasos
1. Carga la imagen
Escribe un programa que cargue una imagen que tengas en la mediateca. Esta imagen deberá pesar menos de 500kb y tener un tamaño máximo de 1024 x 768

2. Visualiza la imagen
Haz que la imagen se visualice en la esquina superior del canvas y adapta el tamaño del canvas a las dimensiones de la imagen

3. Utiliza la función get()
Utiliza la función get() para obtener el valor del color del píxel de la foto donde está posicionado el cursor

4. Dibuja un círculo del mismo color del pixel de la foto
Utiliza el valor obtenido como relleno de un círculo que dibujaras en la misma posición del ratón
*/

// Variables globales
var canvasWH = 500;
let imgCafe;
let imgResize = 100;
let imgWidth = 1024;
let imgHeight = 768;
let x = 0;
let y = 0;
let colorPixel;


function preload(){
  imgCafe = loadImage("https://codelab.uoc.edu/filemanager/source_repo/mbalos/cafe.jpg");
}


function setup() {
  createCanvas(canvasWH, canvasWH);
  resizeCanvas(imgCafe.width, imgCafe.height);
  /*En este caso, la imagen se dibuja solo una vez por lo que la elipse se dibuba en el mismo sitio que el ratón */
  image(imgCafe, x, y, imgWidth , imgHeight);
  
}

function draw() {
  /*En este caso, la imagen se dibuja cada vez que draw se ejecuta          (infinito) por lo que la elipse tan solo se dibuja donde está el ratón */
  image(imgCafe, x, y, imgWidth , imgHeight); 
  
  if(mouseX>=0 ||  mouseY >=0){
    colorPixel = imgCafe.get(mouseX, mouseY);
  }
 noStroke();
    fill(colorPixel);
    ellipse(mouseX,mouseY,20);
}




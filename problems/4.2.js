//4.2 Image – filter()//
/*
Carga una imagen y aplícale alternativamente todos los filtros que aparecen en la referencia de p5.js (https://p5js.org/es/reference/#/p5/filter) al apretar las teclas que van del 1 al 8. 

Nota: En este ejercicio para hacer cargar la imagen hay que usar el botón de añadir imagen y copiar su URL.

Pasos
1. Carga la imagen
Escribe un programa que cargue una imagen que tengas en la carpeta assets. Esta imagen deberá pesar menos de 500kb y tener un tamaño máximo de 1024 x 768

2. Visualiza la imagen
Haz que la imagen se visualice en la esquina superior del canvas y adapta el tamaño del canvas a las dimensiones de la imagen

3. Aplica los filtros
Programa la detección de interacción con el teclado y asocia a las teclas de 1 a 8 un filtro diferente de los que aparecen en la referencia de p5.js
*/

// Variables globales
var canvasWH = 500;
let imgCafe;
let imgResize = 100;
let imgWidth = 1024;
let imgHeight = 768;
let x = 0;
let y = 0;
let seleccionDeFiltro = null;
let parametroFiltro = null;


function preload(){
  imgCafe = loadImage("https://codelab.uoc.edu/filemanager/source_repo/mbalos/cafe.jpg");
}

function setup() {
  createCanvas(canvasWH, canvasWH);
  resizeCanvas(imgCafe.width, imgCafe.height);
  background(70);
}

function draw() {
  image(imgCafe, x, y, imgWidth , imgHeight);
    if (seleccionDeFiltro != null){ 
      filter(seleccionDeFiltro, parametroFiltro);
    };
}


function keyTyped() {
  if (key === "1") {
    seleccionDeFiltro = THRESHOLD;
    parametroFiltro = 0.6;

  }else if (key === '2') {
    seleccionDeFiltro = GRAY;
    parametroFiltro =  0;
    
  }else if (key === '3') {
    seleccionDeFiltro = OPAQUE;
    parametroFiltro =  0;
    
  }else if (key === '4') {
    seleccionDeFiltro = INVERT;
    parametroFiltro =  0.5;
    
  }else if (key === '5') {
    seleccionDeFiltro = POSTERIZE;
    parametroFiltro =  10;
    
  }else if (key === '6') {
     seleccionDeFiltro = DILATE;
     parametroFiltro = 4;
    
  }else if (key === '7') {
     seleccionDeFiltro = BLUR;
     parametroFiltro =  2;
    
  }else if (key === '8') {
     seleccionDeFiltro = ERODE;
     parametroFiltro =  3;
    
  }else{
    seleccionDeFiltro = null;
  }
}

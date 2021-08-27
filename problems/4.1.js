//4.1 Image – loadImage()//

/*
En este ejercicio importaremos una imagen en nuestro sketch y la dibujaremos múltiples veces en el canvas en posiciones aleatorias.

Pasos
1. Carga la imagen
Escribe un programa que cargue una imagen que hayas subido a CodeLab con el botón de «Añadir archivos». Esta imagen deberá pesar menos de 500kb y tener un tamaño máximo de 1024 x 768px. Para obtener su URL, haz click en «Añadir archivos», selecciona «Mediateca» y una vez ahí haz click en la imagen cuya URL quieras obtener.

2. Visualiza la imagen
Haz que la imagen se visualice de manera continuada y que cada vez aparezca tenga una posición aleatoria y un tamaño de un cuarto respeto a sus dimensiones originales
*/


// Variables globales
var canvasWH = 500;
let imgCafe;
let imgResize = 100;
let imgWidth = 1024/4;
let imgHeight = 768/4;
let x = 0;
let y = 0;

//Identifica y carga la imagen
function preload(){
  imgCafe = loadImage("https://codelab.uoc.edu/filemanager/source_repo/mbalos/cafe.jpg");
}

function setup() {
  createCanvas(canvasWH, canvasWH);
  background(70);
}

function draw() {
	/*Genera la imagen y al estar dentro del draw 
    se escribe infinidad de veces*/
  image(imgCafe, x, y, imgWidth , imgHeight);
  
  /*Se genera un x e y random despues de cada ejecución
  teniendo en cuenta el tamaño de la imagen*/
  x=random(0,canvasWH+imgWidth);
  y=random(0, canvasWH+imgHeight);
}

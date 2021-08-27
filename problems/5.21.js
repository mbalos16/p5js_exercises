//5.21 Noticias creativas//

/*  ENUNCIADO:
Una vez que tengas el JSON con los titulares disponibles, lo trabajaréis creativamente en CodeLab con p5.js cumpliendo los siguientes requisitos:

Tamaño del canvas: 600 x 800 pixels.
Tipografía: igual que en la PAC anterior podéis elegir cualquier tipografía del sistema. En caso de querer utilizar alguna tipografía de Google Fonts, escribe un comentario al inicio del código indicando el nombre de la fuente.
Segmentar el titular en palabras con la ayuda de la función "split()" para que puedas controlar cada palabra del titular por separado.
Imágenes: Utiliza al menos una imagen para que interactúe gráficamente con el/los titulares.
Funciones: Organiza el código en funciones. Debes usar al menos 4 funciones con parámetros de entrada.
Elementos interactivos:Añade al menos una interactividad de ratón que permita interactuar y explorar o potenciar el resultado de tu código creativo.
Añade interacción con el teclado que te permita ir pasando entre los titulares disponibles.
Una vez segmentado el titular (dentro de un Array), juega con las palabras tanto como desees creando un nuevo mensaje fruto de la mezcla de la palabra clave utilizada en la búsqueda para filtrar las noticias, de las palabras del propio contenido de la noticia y formas e imágenes que crees o cargues en el sketch. Puedes aplicar todos tus conocimientos actuales para crear patrones, animaciones, interacciones, o explorar otras nuevas posibilidades.
Crea comentarios al principio del código. Brevemente expliqua:Idea: Cómo resolveréis de manera general genérica de la práctica. A nivel conceptual y no de código.
Código: Cómo plantearéis, resumidamente, el código para resolver la práctica.
Interacción: Los eventos de teclado y ratón disponibles para explorar el resultado.
Imagen: ¿Qué imagen es?
Por ejemplo:Idea: El resultado es un loop o animación de las palabras. Filtro noticias con la palabra "elections" y hago que las palabras aparezcan continuamente, y se difuminen con el tiempo. Hay tantas palabras que no se reconoce lo que se decía antes.
Código: Cada cierto tiempo se llamo "getPalabras (x)" que me da x palabras del titular, entonces las pinto e incremento el tamaño indefinidamente ...
Interacción: Con el ratón modifico el color y la rotación de las palabras y así puedo identificarlo mejor.
Imagen: Una imagen de fondo, de un suelo limpio.
*/

//Solution//


/*IDEA: Este codigo es un prototipo de noticiero que muestra los 
ultimos titulares de las noticias para una palabra clave preconfigurada
(puede ser cambiada) y las cabeceras de estos articulos en forma de nube.


CODIGO: Se añade la imagen ajustándola proporcionalmente al canvas
y se calcula la relacion de aspecto para que se visualice de forma 
corecta tanto si la imagen está en formato vertical o apaisado. Además 
de esto, se ha centrado en el canvas, teniendo en cuenta su anchura 
con respecto a este.

En cuanto al titular, se ha calculado la altura de la imagen, al 
igual que la del texto de los titulares y se han ajustado estos ultimos
de tal forma que, si son más largos que el ancho del canvas vuelva a 
empezar desde el principio haciendo un retorno de carro. El titular
ocupará tantas líneas como necesite.

La cabecera, el texto que resume el articulo, se visualiza como una nube
de palabra. Se ha usado un algoritmo llamado TF.IDF para pesar los términos
por su importancia relativa. Este algoritmo simplemente considera importantes
aquellos términos con mayor "term frequency" (frecuencia dentro del documento)
y menor "document frequency" (proporción de documentos en los que aparece).
En otras palabras, un término será más importante/específico cuantas más veces
aparezca en un documento, y menos aparezca en los demás documentos.
Ref. https://es.wikipedia.org/wiki/Tf-idf
Estos pesos se han aplicado en la nube de palabras de forma que términos con
mayor peso aparezcan con una fuente de mayor tamaño que los términos con menor
peso. Se ha procesado el texto para filtrarlo principalmmente con la ayuda de la 
libreria RITA (ref. https://unpkg.com/rita@2.0.14/dist/rita-web.js).
Hemos usado RiTa concretamente para separar el texto en palabras (tokenize),
eliminar stopwords (the, of, etc), eliminar puntuación (,.- etc) y calcular
la frecuencia de aparición de cada término (concordance).

Digo al principio que es un prototipo ya que la idea era hacer una nube 
de palabras con la importancia real de cada palabra, para esto mi idea
era calcular los pesos de la nube de palabra teniendo en cuenta todos
los documentos arrojados por la API (a los que se puede acceder de 10
en 10 con el parámetro page), pero la API está limitada a 10 llamadas
por minuto. Además, no he conseguido acceder a los cuerpos de los
artículos, y considero que así las nubes de palabras saldrían más
realistas. Asi que he utilizado simplemente las cabeceras de las 10 
primeras noticias.


INTERACCIÓN: Por un lado la interacción con el codigo se hace a través 
del teclado, flecha derecha o flecha izquierda para cambiar entre los 
diferentes articulos. Por otro lado, al hacer click con el raton se cambian 
los colores, y la posición de las palabras de la nube de palabras.


IMAGEN: Se proyecta en pantalla la imagen principal de cada uno de los articulos.


*/


//Variables globales
let articles;
let newsIndex = 0;
let frecDoc;
let imagenes=[];
let alternativeColorHeadline = ["#0D6B96", "#1EAAEB", "#8ED5F5", 
                                "#0B5D83", "#297373", "#2F7FDA", 
                                "#335C81", "#466995"];
let alternativeColorCabecera = ["#966B0D", "#EBAA1E", "#F5D58E", 
                                "#835D0B", "#737329", "#DA7F2F", 
                                "#815C33", "#956946"];
let headlineOne;
let cabecera; //Texto

function preload(){
  let apiKey = "NiZy5oAWGw1g0Fd0Nc1ANbcMGk8UGd7k"; // Contraseña para acceder a la api
  let apiSearch = "study"; //Palabra clave para los articulos
  let apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" 
                + apiSearch + "&api-key=" + apiKey;   //Ruta para el JSON
  articles = loadJSON(apiUrl);    //Accedemos al JSON
}

function setup() {
  createCanvas(600, 800);
  frameRate(10);
  frecDoc = calculaDF();
  // Precargamos todas las imagenes para que luego no tarde a cargar
  for (let i=0; i<articles.response.docs.length; i++){
    imagenes.push(cargaImagen(articles.response.docs[i]));
  }
}

function draw() {
  background(255);
  headlineOne = articles.response.docs[newsIndex].headline.main;
  headlineOne = headlineOne.toUpperCase();
  let headlineOne_array = headlineOne.split(' ');
  cabecera = articles.response.docs[newsIndex].lead_paragraph;

  //Dividimos el titulo con split()
  let cabecera_array = cabecera.split(" ");       

  //Declaramos un maximo de altura para cada imagen
  let maxAlturaImagen = height / 2;      
  
  // llamamos la funcion insertaImagen() con su parametro de maximoAltura;
  insertaImagen(maximoAltura = maxAlturaImagen);
  
  /* Devolvemos la y de la ultima linea del titulo a través de la funcion
  escribeTitulo, para poder utilizar este valor posteriormente al escribir
  las palabras de la cabecera */
  yUltimaLineaTitulo = escribeTitulo(titulo = headlineOne_array,
                                      tipografia = "Montserrat",
                                      tamanoTexto = 20,
                                      estilo = BOLD,
                                      colorCabecera = alternativeColorHeadline,
                                      yTitulo = maxAlturaImagen);

  /* Llamamos la funcion escribeCabecera con sus parametros de entrada. */
  escribeCabecera(texto = cabecera_array,
                  tipografia = "Times",
                  tamanoTexto = 12,
                  leading = 14,
                  estilo = ITALIC,
                  colorCabecera = alternativeColorCabecera);
  noLoop();
}

function insertaImagen(maximoAltura) {
  let img = imagenes[newsIndex];
  article = articles.response.docs[newsIndex];
  imgWidth = article.multimedia[0].width;
  imgHeight = article.multimedia[0].height;
  relacionAspecto = imgHeight / imgWidth; //Cuantas veces de alta la imagen es que de ancha
  // Ajustamos ancho maximo
  imgFinalWidth = width;
  imgFinalHeight = relacionAspecto * imgFinalWidth;
  // Si se pasa de alto, ajustamos por altura maxima
  if (imgFinalHeight > maximoAltura) {
    imgFinalHeight = maximoAltura;
    imgFinalWidth = maximoAltura / relacionAspecto;
  }
  xImg = width / 2 - imgFinalWidth / 2;
  image(img, xImg, 0, imgFinalWidth, imgFinalHeight);
}

/* Esta funcion devuelve la imagen. */
function cargaImagen(article){
  url = article.multimedia[0].url;

  imgURL = "https://nytimes.com/" + url;
  imgAlt = "Imagen principal de noticia";

  img = createImg(imgURL, imgAlt);
  img.hide(); // Evita que se añada la imagen abajo del canvas
  return img;
}

/* Esta funcion tiene unos parametros de entrada que se le pasan
 para que se ejecute el titulo. Además devuelve la y del titulo más 
 la altura de este */
function escribeTitulo(titulo, tipografia, tamanoTexto, estilo, colorTitulo, yTitulo) {
  stroke(255, 255, 255, 80);
  textFont(tipografia);
  textSize(tamanoTexto);
  textStyle(estilo);
  let anchoPalabra;
  let alturaTexto = textAscent();
  let margenTexto = 10;
  let xTitulo = margenTexto;

  //Escribe las palagras una a una//
  for (i = 0; i < titulo.length; i++) {
    anchoPalabra = textWidth(titulo[i]);
    //Retorno de carro
    if (anchoPalabra > (width - xTitulo - margenTexto)) {
      xTitulo = margenTexto;
      alturaTexto += textAscent();
    }
    fill(random(colorTitulo));
    text(titulo[i], xTitulo, yTitulo + alturaTexto);
    xTitulo += anchoPalabra + 10;
  }
  return yTitulo + alturaTexto;
}

function escribeCabecera(texto, tipografia, tamanoTexto, leading, estilo, colorCabecera) {
  textLeading(leading);
  textFont(tipografia);
  textSize(tamanoTexto);
  textStyle(estilo);
  let cabeceraTokens = processText(cabecera);
  let concordancia = RiTa.concordance(cabeceraTokens.join(" "));
  let max_tamano = -1;
  for (let palabra in concordancia){
    if ((palabra in concordancia) && (palabra in frecDoc)){
      let peso = concordancia[palabra] / Math.log(1 + frecDoc[palabra]);
      max_tamano = max(max_tamano, peso);
    }
  }
  let margen=20
  for (let palabra in concordancia){
    noStroke();
    fill(random(colorCabecera));
    let peso = concordancia[palabra] / Math.log(1 + frecDoc[palabra]);
    textSize(40 * peso / max_tamano);
    let xCabecera = random(width - textWidth(palabra));
    let yCabecera = yUltimaLineaTitulo + random(height-yUltimaLineaTitulo-margen*2);
    text(palabra, xCabecera, yCabecera+margen);
  }
}

/* En esta funcion se filtra el texto de los signos de puntuación, 
además de pasarse todas las palabras a minuscula. */
function processText(texto) {
  palabrasArray = RiTa.tokenize(texto);
  let palabra;
  let palabrasFinales = [];
  for (i = 0; i < palabrasArray.length; i++) {
    palabra = palabrasArray[i];
    palabra = palabra.toLowerCase();
    if ((!RiTa.isStopWord(palabra)) && (!RiTa.isPunctuation(palabra)) && (palabra.length > 1)) {
      palabrasFinales.push(palabra);
    }
  }
  return palabrasFinales;
}


/*Quita las palabras duplicadas de todos los textos:
https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
*/

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function calculaDF() {
  terminosDocArray = [];
  for (i = 0; i < articles.response.docs.length; i++) {
    texto = articles.response.docs[i].lead_paragraph;
    palabrasArray = RiTa.tokenize(texto);
    palabrasUnicas = palabrasArray.filter(onlyUnique);
    terminosDocArray = terminosDocArray.concat(palabrasUnicas);
  }
  terminosDoc = terminosDocArray.join(" ");
  terminosDoc = processText(terminosDoc);
  frecuenciaDoc = RiTa.concordance(terminosDoc);
  return frecuenciaDoc;
}

//Si el mouse se presiona ejecuta drive
function mousePressed() {
  draw();
}

/*Si el la flecha derecha o izquierda del teclado esta presionada 
se pasa de forma creciente o decreciente de articulo.*/
function keyPressed(key){
  if(keyCode === LEFT_ARROW ){
      newsIndex -= 1;
      if (newsIndex < 0){
        newsIndex=0;
      }else{
      draw();
        }
  }else if (keyCode === RIGHT_ARROW) {
      newsIndex+=1;
      if (newsIndex > 9){
          newsIndex = 9;
        }else{
      draw();
          }
    }
}

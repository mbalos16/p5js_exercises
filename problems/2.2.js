//2.2 Variables 1//

/*
Modifica el siguiente código para que todos los valores estén guardados en variables.
Cuando tengas todos los valores en variables, prueba de cambiar el valor de la variable canvasH.
¿Qué pasa con las variables que dependen de ella? Coméntalo en el código.

Pasos
1. Crea una variable de valor 30
Crea una nueva variable y asígnale el valor 30. Cambia todos los 30 del código por la nueva variable.

2. Crea una variable de valor 20
Crea una nueva variable y asígnale el valor 20. Cambia todos los 20 del código por la nueva variable.

3. Crea una variable de valor 10
Crea una nueva variable y asígnale el valor 10. Cambia todos los 10 del código por la nueva variable.

4. Crea una variable de valor 40
Crea una nueva variable y asígnale el valor 40. Cambia todos los 40 del código por la nueva variable.

5. Aplica las variables
Aplica las variables declaradas en las partes del código donde puedas reutilizar sus valores.

6. Modifica las variables
Cuando tengas todos los valores en variables prueba a cambiar el valor de la variable canvasH. ¿Qué pasa con las variables que dependen de ella? Y si cambias el valor de sueloX, ¿qué pasa? Coméntalo en el código.
*/

/*ORIGINAL:
// DECLARACIÓN VARIABLES GLOBALES 
// Podemos usarlas en cualquier función

// En las variables podemos guardar un número 
var canvasW = 800; // Ancho del canvas -> width
var canvasH = 600; // Alto del canvas -> height
var colorBackground = 255;

var sueloY = canvasH - 20; // Las variables pueden 
                           // depender del valor de otra
var sueloX = 50;
var colorSuelo = "#eabf59"; // En las variables podemos 
                            // guardar un texto
//…

function setup() {
    createCanvas(canvasW, canvasH);
}

function draw() {
    background(colorBackground);

    // Suelo
    fill(colorSuelo);
    noStroke();
    // PI no hace falta declararlo como variable 
    // porque es una constante de defecto de JavaScript 
    arc(sueloX, sueloY, 30, 30, PI, 0); 
    arc(sueloX + 40, sueloY, 40, 40, PI, 0);
    arc(sueloX + 80, sueloY, 20, 20, PI, 0);
    arc(sueloX + 150, sueloY, 30, 30, PI, 0);
    arc(sueloX + 190, sueloY, 40, 40, PI, 0);
    arc(sueloX + 230, sueloY, 20, 20, PI, 0);
    arc(sueloX + 270, sueloY, 10, 10, PI, 0);
    arc(sueloX + 390, sueloY, 20, 20, PI, 0);
    arc(sueloX + 430, sueloY, 40, 40, PI, 0);

    arc(sueloX + 470, sueloY, 10, 10, PI, 0);
    arc(sueloX + 490, sueloY, 20, 20, PI, 0);
    arc(sueloX + 560, sueloY, 40, 40, PI, 0);
    arc(sueloX + 590, sueloY, 10, 10, PI, 0);
    arc(sueloX + 650, sueloY, 20, 20, PI, 0);

    // Árbol tronco
    fill("#c69c6b");
    rect(360,380,20,200);
    fill("#736356");
    rect(380,380,20,200);

    // Árbol copa
    fill("#4dc6ac");
    ellipseMode(CENTER);
    ellipse(380,350,300,300);
    fill("#1ea284");
    ellipse(380,350,200,200);
    fill("#1c9076");
    ellipse(380,350,100,100);
}
*/

/*SOLUCIÓN:*/
// DECLARACIÓN VARIABLES GLOBALES 
// Podemos usarlas en cualquier función

// En las variables podemos guardar un número 

/*Al cambiar el valor del canvasH y canvasW se cambian
también las dimensiones del arbol a lo largo y a lo 
ancho del canvas.*/

var canvasW = 800; // Ancho del canvas -> width
var canvasH = 600; // Alto del canvas -> height
var colorBackground = 255;

var sueloY = canvasH - 20; // Las variables pueden 
                           // depender del valor de otra
var sueloX = 50;
var colorSuelo = "#eabf59"; // En las variables podemos 
                            // guardar un texto

/*Se ha designado la variable CambiaNumeroTreinta
y se le ha asignado el valor 30. */
var CambiaNumeroTreinta = 30; 

/*Se ha designado la variable CambiaNumeroVente
y se le ha asignado el valor 20. */
var CambiaNumeroVente = 20;


/*Se ha designado la variable CambiaNumeroDiez
y se le ha asignado el valor 10. */
var CambiaNumeroDiez = 10;


/*Se ha designado la variable CambiaNumeroCuarenta
y se le ha asignado el valor 40. */
var CambiaNumeroCuarenta =40;

function setup() {
    createCanvas(canvasW, canvasH);
}

function draw() {
    background(colorBackground);

    // Suelo
    fill(colorSuelo);
    noStroke();
    // PI no hace falta declararlo como variable 
    // porque es una constante de defecto de JavaScript 
    arc(sueloX, sueloY, CambiaNumeroTreinta, CambiaNumeroTreinta, PI, 0); 
    arc(sueloX + CambiaNumeroCuarenta, sueloY, CambiaNumeroCuarenta, CambiaNumeroCuarenta, PI, 0);
    arc(sueloX + 80, sueloY, CambiaNumeroVente, CambiaNumeroVente, PI, 0);
    arc(sueloX + 150, sueloY, CambiaNumeroTreinta, CambiaNumeroTreinta, PI, 0);
    arc(sueloX + 190, sueloY, CambiaNumeroCuarenta, CambiaNumeroCuarenta, PI, 0);
    arc(sueloX + 230, sueloY, CambiaNumeroVente, CambiaNumeroVente, PI, 0);
    arc(sueloX + 270, sueloY, CambiaNumeroDiez, CambiaNumeroDiez, PI, 0);
    arc(sueloX + 390, sueloY, CambiaNumeroVente, CambiaNumeroVente, PI, 0);
    arc(sueloX + 430, sueloY, CambiaNumeroCuarenta, CambiaNumeroCuarenta, PI, 0);

    arc(sueloX + 470, sueloY, CambiaNumeroDiez, CambiaNumeroDiez, PI, 0);
    arc(sueloX + 490, sueloY, CambiaNumeroVente, CambiaNumeroVente, PI, 0);
    arc(sueloX + 560, sueloY, CambiaNumeroCuarenta, CambiaNumeroCuarenta, PI, 0);
    arc(sueloX + 590, sueloY, CambiaNumeroDiez, CambiaNumeroDiez, PI, 0);
    arc(sueloX + 650, sueloY, CambiaNumeroVente, CambiaNumeroVente, PI, 0);

    // Árbol tronco
    fill("#c69c6b");
    rect(360,380,CambiaNumeroVente,CambiaNumeroVente*100);
    fill("#736356");
    rect(380,380,CambiaNumeroVente,CambiaNumeroVente*100);

    // Árbol copa
    fill("#4dc6ac");
    ellipseMode(CENTER);
    ellipse(380,350,300,300);
    fill("#1ea284");
    ellipse(380,350,200,200);
    fill("#1c9076");
    ellipse(380,350,100,100);
}

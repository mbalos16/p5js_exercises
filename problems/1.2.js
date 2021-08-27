//1.2 HELLO WORLD - SETUP() VS DRAW() - CONSOLA//

/*
Vamos a escribir en la consola del editor (es la pestaña que hay justo por debajo de donde escribes el código que se llama “Console”) la frase "Hello world"  para observar qué diferencia hay si lo hacemos desde el setup() o desde el draw().
¿Qué diferencia hay si escribes la línea de código dentro de la función draw() o setup()? ¿Por qué?

Pasos
1. Imprime la frase en consola desde el setup()
Usa la función console.log() en el setup() y ejecuta el código. Observa cuántas veces se imprime la frase

2. Desactiva la función console.log() que has añadido al setup()
Comenta la función consuelo.log() que has insertado al setup() poniéndole dos barras delante como estas //

3. Imprime la frase en consola desde el draw()

Añade el console.log() en el draw() y ejecuta el código. Observa cuántas veces se imprime la frase
*/

function setup() {
    createCanvas(100, 100);
    //en el caso de setup, parece que unicamente ejecute el codigo al inicio. Probablemente es porque no solemos necesitar más de un canvas.
    //console.log("Hello world"); 
  }
  
  function draw() {
    background(255, 0, 200);
    //en el caso de draw se trata de una funcción que parece repetirse infinidad de veces.
    //console.log("Hello world");
  }
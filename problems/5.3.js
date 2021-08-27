//5.3 Función con parámetros y return//

/*
Completa el siguiente código para que la función suma() devuelva la suma de los parámetros que reciba.

Nota: No es obligatorio pero se considerará experimentación ser creativos a la hora de presentar el resultado de la suma.

Pasos
1. Completa la función suma() para que reciba dos parámetros

2. Completa el return de la función suma()
Completa el return de la función suma() para que devuelva la suma de los dos parámetros que reciba

3. Utiliza la función suma para sumar dos valores aleatorios
Pasa a la función suma() dos parámetros aleatorios y visualiza el resultado que devuelva utilizando la función text() (la función text() se tiene que quedar en el draw())
*/

let colorTextoFondo = ["#acc0d7","#1eaeeb", "#c6eafa", ];

function setup() {
  createCanvas(400, 400); // Creamos el canvas
  noLoop(); // Evitamos que el draw() se repita
}

function draw() {
  background('#396cc6'); 

  // Generamos dos valores aleatorios a sumar
  var val1 = 90;
  var val2 = 10;
  //((console.log('Los valores a sumar son:' + val1 + ' y ' + val2);

  
  // Imprimimos el resultado de la suma
    let scala = (0, 400);
  
    for (i=0; i<600; i++){
    	fill(random(colorTextoFondo));
    	textFont("Futura");
    	textStyle(NORMAL);
    	textSize(random(4,8));
    	text(suma(val1,val2), random(scala), random(scala));
}
  
  // Customizamos la apariencia del texto
  fill(255);
  textAlign(CENTER);
  textFont("Jura");
  textStyle(BOLD);
  textSize(100);
  text(suma(val1,val2), 400/2, 400/2);
}

// Esta función nos devuelve la suma de dos valores
function suma(primerNumero, segundoNumero) {
  return primerNumero+segundoNumero;
}
//5.7 Arrays II//

/*
Haz las modificaciones requeridas por los pasos, dejando la solución de cada apartado comentada en tu código.

Pasos
1. Escribe sólo la primera posición del array

2. Escribe la octava palabra del párrafo

3. Escribe la última posición del array

4. Escribe la cantidad de veces que aparece la palabra Imagine
*/

var parrafo = "Imagine there's no heaven | It's easy if you try | No hell below us | Above us only sky | Imagine all the people | Living for today | Imagine there's no countries | It isn't hard to do | Nothing to kill or die for | And no religion too | Imagine all the people | Living life in peace";
var parrafo_array;

function setup() {
  createCanvas(1024, 768);

  background("white");

  fill(50);
  textSize(20);
  textLeading(25);

  text(parrafo, width / 2, 100, 300, 500); // Escribimos todo el párrafo
  parrafo_array = parrafo.split(' '); // Dividimos el párrafo partiéndolo donde hay espacios – cada palabra del párrafo se guardará en una posición distinta del array 

  // a) Escribimos la primera posición del array
    console.log(parrafo_array[0]);

  // b) Escribimos la octava palabra
  	console.log(parrafo_array[7]);
  
  // c) Escribimos la última posición del array
  	//console.log(parrafo_array.length-1);
    console.log(parrafo_array[61])

  // d) Escribimos las veces que aparece la palabra "Imagine"
 	console.log(contarSubstrings(parrafo_array, "Imagine")); 
}
  
  function contarSubstrings(textoPrincipal, textoABuscar){
    resultados = 0;   
    let indicePalabra = 0
    indicePalabra = textoPrincipal.indexOf(textoABuscar, indicePalabra);
    while (indicePalabra != -1){
      resultados += 1
      indicePalabra = textoPrincipal.indexOf(textoABuscar, indicePalabra+1);
    }
    return resultados;
  }
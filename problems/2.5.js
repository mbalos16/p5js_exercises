//2.5. Operaciones Matemáticas I//

/*
Escribe en comentarios después de cada operación el valor que crees que tendrá x o y (piensa que se irá acumulando el valor de la x, con la operación anterior. Y lo mismo pasará con la y).
Después comprueba si has acertado, imprimiendo en consola con console.log(x); o console.log(y); después de cada operación y en el caso del for, dentro del bucle.
*/


/*ENUNCIADO ORIGINAL:
// Variables globales
var x = 0;
var y = 2;

// Recuerda: La función setup sólo se ejecuta 1 vez
function setup() {

    x = x + 1;
    // x = …

    x = 3;
    // x = …

    x++;
    // x = …
    
    y = 2 + 3 * 2;
    // y = …

    y = 0;
    // y = …

    y = (2 + 3) * 2;
    // y = …

    x = 0;
    x = 10/4;
    // x = …

    x = 3;
    x += 2;
    // x = …


    for ( x = 0; x < 5; x++){
       // 1a ejecución x = …
       // 2a ejecución x = …
       // 3a ejecución x = …
       // 4a ejecución x = …
       // 5a ejecución x = …
    }

    for (x = 10; x > 0; x--){
       // Escribe aquí todas los valores que crees 
       // que tendrá x en cada ejecución
    }

    for (x = 1; x < 1; x++){
       // Escribe aquí todas los valores que crees 
       // que tendrá x en cada ejecución
    }
}*/

/*SOLUCIÓN:*/

// Variables globales
var x = 0;
var y = 2;

// Recuerda: La función setup sólo se ejecuta 1 vez
function setup() {

    x = x + 1;
    // x = … 1

    x = 3;
    // x = … 3

    x++;
    // x = … 4
    
    y = 2 + 3 * 2;
    // y = … 8

    y = 0;
    // y = … 0

    y = (2 + 3) * 2;
    // y = … 10

    x = 0;
    x = 10/4;
    // x = … 2.5

    x = 3;
    x += 2;
    // x = … 5


    for ( x = 0; x < 5; x++){
       // 1a ejecución x = … 0
       // 2a ejecución x = … 1
       // 3a ejecución x = … 2
       // 4a ejecución x = … 3
       // 5a ejecución x = … 4
    }

    for (x = 10; x > 0; x--){
       // X tomará los siguientes valores:
      // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    }

    for (x = 1; x < 1; x++){
       // En este caso x no tomará ningun valor ya que 1 no es menor que 1.
    }
}
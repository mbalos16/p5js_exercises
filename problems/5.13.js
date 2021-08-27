//5.13 Clases y Objetos I//

/*
Crea una clase PortadaLibro que reciba por parámetros su color de fondo, id, título, autor y editorial.

En su constructor guarda en variables los parámetros recibidos.
*/
function setup() {
    createCanvas(100, 100);
    noLoop();
  }
  
  function draw() {
    background(255, 0, 200);
    let myBook = new portadaLibro(colorDeFondo = "Black", id = "30432",titulo = "Los hombres que no amaban a las mujeres", autor = "Stieg Larsson", editorial = "Audible");
    console.log(myBook.titulo);
  }
  
  class portadaLibro {
    constructor(colorDeFondo, id, titulo, autor, editorial){
      this.colorDeFondo = colorDeFondo;
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.editorial = editorial;
  }
  }
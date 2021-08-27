//5.14 Clases y Objetos II//

/*
A partir de la clase PortadaLibro de la actividad anterior, añade los parámetros necesarios para modificar la posición del título, autor y editorial.
En el mismo constructor crea cada uno de los elementos de la portada e instancia la clase en el setup();
*/

function setup() {
    createCanvas(400, 600);
    noLoop();
    
    let myBook = new portadaLibro(colorDeFondo = "Black", id = "30432",titulo = "Los hombres que no amaban a las mujeres", autor = "Stieg Larsson", editorial = "Audible");
    
    background(myBook.colorDeFondo);
  
    fill("white");
    textFont("Helvetica");
    textStyle(BOLD);
    textSize(17.5);
    text(myBook.titulo, 20, 600/6);
    
    textStyle(NORMAL);
    textSize(15);
    text(myBook.autor, 20, 600/5);
    
    textAlign(CENTER);
    textSize(10)
    text(myBook.editorial, 600/2+textWidth(myBook.editorial), 600-40);
    
    textSize(10);
    text(myBook.id, 600/2+textWidth(myBook.id)+5, 600-30);
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
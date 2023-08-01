// 1) Debemos crear una clase listaDeLibro
// Esta clase debe tener las siguientes propiedades
// Número de libros ya leidos
// Libros que continuan sin leer
// Siguiente libro 
// Libro actual
// Ultimo libro
// Array con todos los libros
// 2) Crear una clase Libsto que debe tener las siguientes propiedades
// Titulo, Genero, Autor, Boleano si ya esta leido
// 2) Crear un metodo para añadir libros a la Lista de Libros
// 3) Colocar un libro 

// 1) Respetamos que venimos defininiendo los objetos como clases
class ListaDeLibros {
    // Se distingue como objetos porque definimos el constructor.
    // Para identificar las lista necesitamos conocer el Dueño 
    constructor(duenio){
        this.duenio = duenio;
        this.libros = []; // puede ser una lista vacia
        this.libroYaLeidos  = []; // cuando leemos un libro lo pasamos a este array
        this.libroNoLeidos = []; 
        this.libroActual =  null; //aqui solo tenemos siempre un libro
        this.ultimoLibro = null; //aqui solo tenemos siempre un libro
        this.siguienteLibro = null; //aqui solo tenemos siempre un libro
    }
    // Empiedo la creación de metodos
    // Agregar un libro
    agregarLibro(libro){
        // Hago un push al array de libro
        this.libros.push(libro); //paso un libro por parametro busco la funcionalidad
        if (libro.leido == true){ // en caso que ese libro ya este leido agredo al arreglo de libroYaleidos
            this.libroYaLeidos.push(libro); 
        }else {
            this.libroNoLeidos.push(libro);
        }
    }
    // Metodo de empezarLibro
    empezarLibro(libro){
        this.libroActual = libro; 
    }
    //finalizar libro
    finalizarLibro(libro){
        this.ultimoLibro = this.libroActual;
        this.libroYaLeidos.push(libro);
        //libro no leido - utilizamos un filtro 
        this.libroNoLeidos = this.libroNoLeidos.filter(librito => librito.titulo != this.libroActual.titulo);
        this.libroActual=null;
    }
}

// Definimos la clase libro
class Libro{
    //constructor con las propiedades del libro
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
    
}

//Probamos instanciando
const libroLautaro = new ListaDeLibros ('Lautaro');
const principito = new Libro ('el principito','fantasia','exupery',true);

//siguiente libro ver bien este ejercicio
// function siguienteLibro(Libro){
//     if (this.libros.length - this.libroYaLeidos.length == 0)
//     {
//         console.log ('no hay siguiente libro o todos fueron leidos');
//     }
//     else {
//         this.siguienteLibro= this.libro[this.libroActual.length+1];  
//     }
// }

// i) FORMA DE CREAR OBJETOS CON NOTACIÓN LITERAL
// DESCRIBIMOS A UNA PERSONA implementando objeto
let person = {
  name: "matias",
  age: 30,
  location: "San Miguel de Tucumán",
  hobbies: ["andar en bici", "programar"],
  pet: [
    {
      name: "firulais",
      type: "dog",
    },
    {
      name: "blaco",
      type: "cat",
    },
  ],
  children : 'no',
  saludar : function (){
            console.log('Hola Gente');
            }
}

//CREAMOS UN OBJETO PERSONA 02
let persona2 = {
  name: "messi",
  age: 36,
  dni: 32365441,
  children : [{
        name : 'tiago',
        age : 10
        },
        {
          name : 'mateo',
          age : 7 
        },
        {
          name : 'ciro',
          age : 4,
          pet : ['toto','coco']
        }
      ],
  saludar : function (){
            console.log('Hola Gente soy el Messias');
            }
}
// Para ver la mascota 2 del 3er hijo de Messi
// persona2.children[2].pet[1]
// Queda pendiente el metodo listar

// 2Da parte *--------------------------------------------------------------------
// ii) FORMA TODO: CREANDO OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS
function Team(name, colors, people){
  this.name = name;
  this.colors = colors;
  this.people = people;  
}
 //Ahora instanciamos/creamos cada equipo, es decir el objeto.
 let sanMartin = new Team('San Martin de Tucuman',['rojo','blanco'],7000);
 let atletico = new Team ('Atletico de Tucuman', ['celeste','blanco'],80000);
//Forma de llamar a los objetos definidos, es decir mostramos los resultados
 console.log(atletico);

 // iii) FORMA TODO: CREANDO OBJETOS A PARTIR DE CLASES
 class Country {
 //el constructor es el albañil que me construir las propiedades
  constructor(name,people){
    this.name = name;
    this.people = people;
  }
 }
//Instanciamos los objetos
const argentina = new Country ('Argentina', 40000000);
const brasil = new Country ('Brasil', 60000000); 
// Mostramos los objetos instaciados 
console.log(argentina);
// por algun motivo eligió declararla constante ? ---------------------------------------

// Manejamos ob
let products =[
  {id : 1, name : 'fideo' , descripcion : 'fideo tirabuzon rivoli', precio : 200, categoria : ['familiar','alimentos']},
  {id : 2, name : 'arroz' , descripcion : 'arroz largo 53', precio : 200, categoria : ['familiar','comestibles'] }
  ]
console.log(products);
console.log(products[0].name);

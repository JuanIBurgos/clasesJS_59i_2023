// Funciones CALLBACK es una función que se pasa a otra función
// como un argunmento que luego se invoca dentro de la 

// Arrows function
// LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

const hi = nombre => alert ('Hola ' + nombre);
const bye = nombre => alert ('Chau ' + nombre);

function userRegister (saludo){
    const name=prompt ('Como es tu nombre?');
    saludo (name)
}
//Probamos lo realizado anteriormente
//userRegister (hi);
//userRegister (bye);

// DRY DONT REPEAT Y no repetir codigo es la idea del porque utilizamos funciones.
//Para que usamos las funciones CALLBACK?
// Observemos la implementaciones con los metodos filter y find junto a map y foreach
const ageDataBase = [23,30,45,37,25,18,16];
function mayoresDe25 (edad){
    if (edad>=25){
        return edad;
        // console.log(edad);
    }
}
// 36' todo: CREAMOS UN ARRAY COPN TODOS LOS ELEMENTOS QUE CUMPLEN CON LA CONDICIÓN DADA
// utilizo el filter es decir una arrow function
const respuestaMayores = ageDataBase.filter(edad => edad>=25); // FORMA 01
console.log(respuestaMayores);
//Uso el filter pero en el cual defino una función previamente con la condición que busco
const respuestaMayores2 = ageDataBase.filter(mayoresDe25);  // FORMA 02
console.log(respuestaMayores2);

//40' Aplicamos la busqueda pero con find. 
// FIND: Solo devuelve el valor del primer elemento que cumple con la condición 
// todo: DEVUELVE EL PRIMER ELEMENTO 

//43' todo MAP EJECUTA UNA ACCIÓN SOBRE CADA UNO DE LOS ELEMENTOS LOS MODIFICA Y LOS GUARDA DE NUEVO.

//todo FOREACH NO DEVUELVE NADA, TAMPOCO MODIFICA EL ARRAY ORIGINAL, PIDE PRESTADO HACE ALGO 
// Y LO VUELVE AGUARDAR
//En al misma linea ponemos el console.log junto a esto 
const en20anioss = ageDataBase.forEach(age => console.log(age+20));
//51' explicación de una tarea tipo carrito y empieza el juego con el frontEnd. Esto hecho la clase anterior



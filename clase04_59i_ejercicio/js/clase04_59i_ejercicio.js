//21' Comenzamos la clase repasando el objeto Math
// Por que era una propiedad el .lenth y no un metodo?
// Porque no lleva parentesis
// Un método para que pueda ser ejecutado debe llevar los ()

let nombre = 'nicole';
console.log(nombre.length);
console.log(nombre);
console.log(nombre.toUpperCase()); // Paso a mayusculas
// clg es un atajo para el console.log...
// Los metodos son una función

//metodo include
console.log(nombre.includes('nico'));

// Prentación de JS PARTE 02 - 32'50'' Condicionales 
// Declaraciones condicionales nos ayudan cuando deseamos ejecutar diferentes accionas basadas en condiciones
// 1) IF - Condicional Simple
let number = 10;
if (number<10){
    console.log('El número es menor a 10');
}

// 2) IF ELSE - Condicionales Doble 
if (number<10){
    console.log(`El número ${number} es menor a 10`);
}else{
    console.log(`El número ${number} es mayor a 10`);
}

// 3) Condicionales multiples Anidados - if dentro de otro if
if (number<10){
    console.log(`El número ${number} es menor a 10`);
    }else if(number<10){
        console.log(`El número ${number} es mayor a 10`);
        }else{
            console.log(`El número ${number} es igual a 10`);
        }

// Ejercicio 45'50''
// I) Comparar dos numeros ingresados por el usuario
let numberUser01 = parseInt(prompt('Ingrese el primer numero: '));
let numberUser02 = parseInt(prompt('Ingrese el segundo numero: '));

if (numberUser01 > numberUser02){
    console.log(`El ${numberUser01} es mayor a ${numberUser02}.`);
}else if(numberUser01 < numberUser02){
    console.log(`El ${numberUser01} es menor a ${numberUser02}.`);
    }else{
        console.log(`El ${numberUser01} es igual a ${numberUser02}.`);
        }

// 2da Parte despues del break 
// II) Pedir un numero al usuario y verificar si es un numero Par o impar
let numberUser03 = parseInt(prompt('Ingrese un número a evaluar(par o impar): '));

if (numberUser03%2 == 0){
    console.log(`El numero ${numberUser03} es par.`);
}else{
    console.log(`El numero ${numberUser03} es impar.`);

}

// III) Musica por edad
// De acuerdo a la edad del usuario le muestro una alert de acuerdo a la edad que corresponda
let edad = parseInt(prompt('Ingrese su edad: ')); //no hay necesidad de parsearlo ya q requiero evaluar

if (edad >= 18 && edad <= 30 ){
    console.log('El tema para tu edad Ojos Bonitos de Bad Bunny');
    }else if (edad>30 && edad <=60){
        console.log('Tu artista es Ricardo Arjona.');
        }else if (60>edad && edad>=98){
            console.log('Tu artista es Sandro');
            }else{
                console.log('No hay artísta asignado para tu edad.');
            }
// 22' Subimos al github y enseñamos a clonar
// 26' 20' Link JS-3 de diegogabrielfernandes
// Estructuras de control, rompe que la ejecución sea realizada linea a linea,
// ya que si ocurre algo salta a otro lado

//IV) Patovica Preguntar si es mayor a una edad y si es menor puedo debe ingresar con un tutor. 
// Challenge ya realizado
// Trabajo en grupo 31'20'' - SUBIDO EN LA CARD DE TRELLO DE CHALLENGE EL LINK DE GITHUB
let edad01 = parseInt(prompt('Ingrese su edad: '));
if (edad01>=18){
    alert('Que comience la fiesta! 😎');
}else {
    let tutor = prompt('Tiene tutor').toLocaleLowerCase();
    // otra forma es 
    //if (tutor.includes('si')){
    if (tutor==='si'){
        alert('Bienvenido a la fiesta! 😁');
    }else{
        alert('Lo sentimos le pedimos que vuelva con un tutor. 😪');
    }
}


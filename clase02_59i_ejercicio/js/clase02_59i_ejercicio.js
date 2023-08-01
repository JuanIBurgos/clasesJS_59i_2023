//probamos que linkeamos bien el .js
//alert('Funciona'); 

//TODO: Que es una variable? Son cajas donde podemos almacenar datos temporalmente.
let nombre = 'nicole'; 
// En la linea anterior nombre de la variable es nombre, la misma debe ser descriptiva de lo que guarda la variable.
// Si coloco dos o tres iguales (== o ===) realizo una comparación. Un solo igual (=) equivale al operador de asignación

let edad = 28;

//Quiero ver por consola 28'
console.log('Holas');
console.log(nombre);
console.log(edad);
// Si quiero colocar esto console.log antes de definir la variable nos brinda un error, ya que las variables no fueron inicializadas
// 31'25'' Tenemmos 3 variables var, const y let
// var: es la forma tradicional por la cual se venia declarando variables y su alcance es global (se puede leer en todo el código)
// La variable var se considera mala práctica, es decir no se la debe utilizar.
// let: es una nueva forma de declarar variables en un bloque de ambito, inicianizandola opcionalmente por valor.
// let; es la forma mas utilizada y son variables a las cuales se las puede cambiar a lo largo del tiempo. 
// let tiene un alcance local 
edad=28;
// const: declara una constante de solo lectura en un ambito. 
// const Son variables constantes a las que no se les puede modificar su valor 28'40''
// termino deprecado que es?

// 40' Tipo de datos string, cadena de datos STRING
let texto ='Hola comisión';
let texto02 = 'Hola comisión dos';
//muestro los string para escribir un console log clg en el teclado te lo completa
console.log(texto);
console.log(texto02); 
console.log(texto,texto02);

// Tipos de operadores 43'35''
// Simbolos especiales que sirven para ejecutar determinada operación.

//  OPERADOR DE ASIGNACIÓN: permite asignar un valor a un variable o una constante. 
// sintaxis tipoDeVariable nombreDeVariable = valor
const comision ='59i'; //asignación

// OPERADOR ARITMETICO: permiten realizar operaciones matemáticas (suma +, resta -,multiplicación *, división / y resto de divisón entera %)
console.log(12+3);
console.log(12-2);
console.log(12*3);
console.log(12/3);
console.log(12%3);

// 2do Video
//OPERADORES UNITARIOS
// ++ (incremento)
let numero=20;
console.log(numero);
numero++;
console.log(numero);

// -- (decremento)
let numero02=10
console.log(numero02);
numero02--;
console.log(numero02);

// ! (negación )
let femenino = true;
console.log(femenino);
femenino = !femenino;
console.log(femenino);

// OPERADORES RELACIONALES sirven para realizar coparaciones de igualdad, desigualdad y relacion de mayor y menor 7'
// Los operaciones devuelven varlore boleanos.

// OPERADOR == estoy intentando comparar el valor
// numero01 == numero02 si es verdadero entonces devuelve true sino false 

//OPERADOR DIFERENTE != 
// 30 != 15 true

// OPERADOR === Esto compara estrictamente los datos es decir compara el valor y el tipo de datos. 
// 30 === 30 devuelve true
// 30 === '30' devuelve false

// OPERADOR MAYOR >
// number01 > number02 devuelve true si number01 es mayor que number02

// OPERADOR MENOR <

// OPERADOR MAYOR IGUAL >=

// OPERADOR MENOR IGUAL <= 

//OPERADORES LÓGICOS 20'10''
// AND 30<10 && 30<15, ambos factores deben ser verdadero para que el resultado que nos brinde nos devuelva TRUE
// OR 30<10 ||  30<15, alguna de las dos debe ser verdadera para que sea TRUE la evaluacion del OR. 





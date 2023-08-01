// 1) Recibir el apellido del usuario y mostrar por consola la última letra
let lastName = prompt('Ingrese su apellido').toLowerCase();

//FORMA 01
console.log (lastName.charAt(lastName.length-1));
//FORMA 02
console.log (lastName.substring(lastName.length-1));


// 2) Recibir el nombre del usuario, y mostrar por consola el nombre con la primera letra mayúscula
const name=prompt('Ingrese su nombre: ').toLowerCase();
//obtengo la primera letra
//console.log(name.charAt(0));
// Obtengo y cambio a mayusculas la primera letra
const resultado = name.charAt(0).toUpperCase();
//console.log(resultado);
//Obtengo el resto de la cadena 
const resultado02 = name.substring(1);
//Presento los resultado con el formato deseado
console.log(resultado+resultado02);


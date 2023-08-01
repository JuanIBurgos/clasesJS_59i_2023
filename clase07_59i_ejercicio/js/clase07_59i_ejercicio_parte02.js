// Parte 02 de la clase 07
// Array = arreglos (ver definición) 
// Lista ordenadas de elementos que pueden ir desde datos como: number, booleanos, string y/o arreglos.

// Creo un array
let arreglo = ['nicole',true,'matias',28,['desarrollador','plomero']];
//para verlo realizamos
console.log(arreglo);
//para que me devuelva la contidad de elementos
console.log(arreglo.length);
//para ver un elemento , tengo en cuenta que el indice de posición arranca desde 0 
console.log(arreglo[2]); // resultado sera matias
//Para acceder a otro arreglo dentro del arreglo
console.log(arreglo[4]);

//Planteo otro ejercicio 15'
let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
console.log(dias.length);
//Para un día en específico (no olvidar que el indice inicia en 0)
console.log(dias.length[5]);

//Para agregar un nuevo elemento al arreglo
dias.push('feriado01');
console.log(dias);

//Para eliminar el elemento del final del array 
dias.pop();
console.log(dias);

// 17' Dejamos guardado en una variable el eliminado
dias.push('feriado01');
let diaEliminado = dias.pop();
console.log(diaEliminado);
console.log(dias)

// 19'45'' Agrego un elmento X al inicio del arreglo
dias.unshift('domingo01');
console.log(dias);

// 21'30'' Eliminio un elemento al inicio del arreglo
dias.shift();
console.log(dias);

//23'26'' Me devuelve el indice/posición del elemento que le indico por parametro
console.log(dias.indexOf('martes'));

//24' Revierte el orden del arraglo
console.log(dias.reverse());

//26'22'' Concatena 2 arreglos, devolviendo el resultado en otro arreglo
let dias02 = ['feriado02','domingo02'];
let dias03 = dias.concat(dias02);
console.log(dias03);

//30' devuelve true si contienen el elemento enviado en el arreglo
// en el arreglo dias encontramos el elemento martes
console.log(dias.includes('martes'))

//32'20'' Devuelve todos los elementos con el separador especificado por parametro
console.log(dias.join('\n -'));

//33'40'' Ordena al arreglo alfabeticamente 
console.log(dias.sort());

//35'30'' splice (desde donde,cuantos elementos quiero cortar, que deseo reemplazar)
console.log(dias.splice(1,2,'feriadol')); //muestra el resultado de sacar dos elementos y reemplazarlo por otro
//muestro como queda el arreglo 
console.log(dias);

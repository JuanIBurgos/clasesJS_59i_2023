//40' Empezamos a repasar el switch visto en la clase anterior

//todo: PROVINCIAS COPADAS!!!
// let provincias = prompt('De que provincias sos?').toLowerCase()

// switch (provincias) {
//      case 'tucuman': //true o false
//          alert('altas empanadas!!!!')
//         break;
//      case 'santiago' :
//      console.log('alta siesta primoo!!!!')
//      break
//      case 'jujuy' :
//          console.log('soltame carnaval')
//         break;
//     default:
//          console.log('PROVINCIA IRRELEVANTE')
//          break;
// }

//49'30'' Ejercicio promedio
// Ingreso 3 notas y debemos calcular el promedio e informar si esta aprobado o desaprobado
//Ingreso los datos
// const nota01 = Number(prompt('Ingrese la primera nota: '));
// const nota02 = Number(prompt('Ingrese la segunda nota: '));
// const nota03 = Number(prompt('Ingrese la tercera nota: '));
// //Calculo el promedio
// const promedio = (nota01+nota02+nota03)/3;
// //puedo aplicar un mathrown
// console.log(promedio);
// // determinamos si esta aprobado o no
// if (promedio >=6){
//     alert('Estas aprobado! 👍');
// }else{
//     alert('Vuelva la proxima. 😢');
// }

//1º02'30'' Refinamos el metodo para que ingresemos si o si numeros
const nota01 = Number(prompt("Ingrese la primera nota: "));
const nota02 = Number(prompt("Ingrese la segunda nota: "));
const nota03 = Number(prompt("Ingrese la tercera nota: "));
if (isNaN(nota01) || isNaN(nota02) || isNaN(nota03)) {
  alert("Solo se admiten numeros.");
}
if (
  nota01 < 1 ||
  nota01 > 10 ||
  nota02 < 1 ||
  nota02 > 10 ||
  nota03 < 1 ||
  nota03 > 10
) {
  alert("Solo se admiten numeros entre 1 y 10.");
} else {
  //Calculo el promedio
  const promedio = (nota01 + nota02 + nota03) / 3;
  //puedo aplicar un mathrown
  console.log(promedio);
  // determinamos si esta aprobado o no
  if (promedio >= 6) {
    alert("Estas aprobado! 👍");
  } else {
    alert("Vuelva la proxima. 😢");
  }
}

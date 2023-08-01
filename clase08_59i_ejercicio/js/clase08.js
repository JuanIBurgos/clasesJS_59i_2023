// Tema Nuevo Funciones
// Las funciones son para las partes de código que se repite reiteradamente en nuestro código
// Las funciones pueden tener datos de entrada, a la cuales llamamos argumento. 
// La funciones pueden devolver datos de salida
// Tenemos 3 tipos de funciones: declarativa, anoniumas y arrow functions
// 19'
// 1era Declarativa 
function hello(){
    console.log('Hola Mundo desde la funcion declarativa');
  
}


// 2da Anonimas - variable primero y luego la palabra function
const hello02 = function (){
    console.log('Hola Mundo desde la funcion anonima!');
  
}

//3ro Arrow  function
const hello03 = () => {
    console.log('Hola Mundo desde la funcion Arrow/flecha!');
}

// Llamo a las funciones PARA PROBAR LAS FUNCIONES ANTERIORES
//hello();
//La declarativa puedo llamarla arriba al llamado del mismo
//hello02();
//hello03();

//No son lo mismo las 3 funciones
// Solo las funciones declarativas pueden llamarse desde antes de sus inicializacion,
// es decir la llamo antes de ser declaradas
// Esto tiene que ver con el hoisting, es como el hizamiento me lleva arriba. Me sube la funcion en tiempo de compilación
// La funcion mas usada es la Arrow porque se usa en react.

// 29' Ejercicios
// todo: BASE DE DATOS PARA ELIMINAR USUARIOS
let dataBase = ['matias', 'celeste', 'agustina', 'mario', 'joaquin', 'lucas','ivan'];
// paraeliminar los usuarios implementamos una funcion Arrow function. Siempre uso el const porque la funcion no va a cambiar
const deleteUser = () => {
    // Consigo el nombre del usuario que debo eliminar. Uso el metodo para pasar a minusculas todos.
    let nameUser = prompt('Ingrese el usuario que desea eliminar: ').toLocaleLowerCase();
    //busco algún metodo para ver si se encuentra el usuario. En el arreglo dataBase busca la posición de nameUser
    let position = dataBase.indexOf(nameUser);
    //Vamos a sacarlo, evaluamos si se encuentra o no en el array
    if (dataBase.includes(nameUser)){
        //Si lo encontramos lo borramos enviamos desde que posicion, cuantos elemento quiero sacar
        dataBase.splice(position,1);
        //Aviso que el usuario fue eliminado
        alert('El usuario fue eliminado correctamente');
    }else{
        alert('No existe el elemento que usted quiere reemplazar.');
    }
}
// pruebo la función
//deleteUser();
//55'30'' consulta de compañero
//Ejercicio realzado en clases 2parte
//Implemento la funcion editar/actualizar

const updateUser = () => {
    // que necesito para actualizar? Tenemos el array dataBase
    // que usuario quiero editar
    let nameUser = prompt('Ingrese el usuario que desea modificar: ').toLocaleLowerCase();
    let update = prompt('Agregue la modificación: ').toLocaleLowerCase();
    // Encuento la posición de donde esta en el array
    let position = dataBase.indexOf(nameUser);
    if(dataBase.includes(nameUser)){
        dataBase.splice(position,1,update);
        alert ('Usuario editado correctamente');
    }else{
        alert('usuario no encontrado');
    }
}
//Todo lo que estoy usando dentro de la funcion es propio de la funcion, si lo llamo afuera no tiene scope

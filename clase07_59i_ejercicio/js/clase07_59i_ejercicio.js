// 21' Comenzamos con un repaso
// LET, VAR, CONST
// tipo de datos: string, numbers, booleans, arrays, object and undefine
// Chanllenge
// Creamos una aplicación que tiene denso prompt que solo la puede sacar
// alguien que sea rey y se llama arturo

// Que necesitariamos consultar primero
//let nameUser;
//let isKing = false;
// while es el mas denso 
// while(nameUser !== 'arturo' || isKing !==true){
//     nameUser = prompt('Ingrese su nombre').toLocaleLowerCase();
//     if (nameUser == 'arturo'){
//         isKing = confirm('Sos rey?');
//         if (isKing == false){
//             alert('No sos rey y no espada');
//         }
//     }
// }

// Cuando sale y avisa que es rey.
//De esta forma lo hacemos denso. Es decir siempre mostrara el ciclo solo sale si tienen las condiciones correctas
// console.log('Sos Rey Copado');

//44' Ciclo for -----------------------------------------------------------------------
//inicialización de la variable, condición, la incrementación
// for(let i=0;i<=20;i++){
//     console.log(`Soy la vuelta numero ${i} del index`);
// }

// 48'50'' Ejercicio de las tablas de multiplicar -------------------------------------
// todo: EL USUARIO INGRESA EL NUMERO DE LA TABLA QUE DESEA OBTENER. LE DEVOLVEMOS LA TABLA QUE SOLICITO.
let numeroTabla = prompt ('Ingrese el numero de tabla ') 

for (let i=0;i<=10;i++){
    console.log(`${numeroTabla} X ${i} = ` +(numeroTabla*i))
    //console.log(`${numeroTabla} X ${i} = ${numeroTabla*i}`)
}
// Entre las vartics `` si quiero aplicar JS solamente colo ${ } dentro de las llaves escribo lo JS. 
//fin el 57'



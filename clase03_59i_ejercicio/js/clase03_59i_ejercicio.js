//Retomamos con un respaso
console.log("El dijo: \"Hola mundo\""); //para imprimir las comillas dobles " sumo el \ antes.

//Para concatenar string 
//El + nos concatena pero debo especificar el espacio sin no me lo imprime asi
console.log("Hola "+"mundo. ");

// Otra forma es usar las vartics ` `
// entre las vartics es escribo lo que quiero que salga en html, el ${ } es para convertir la variable en html
let nombreUsuario = "Nicole";
let edad=28;
console.log("Hola tu nombre es "+nombreUsuario+" y tu edad es: "+edad);
console.log(`Hola tu nombre es ${nombreUsuario} y tu edad es ${edad}`);
// Explicacion del uso de las vartics en los formulario 30'15''

//Metodos para string 34' 10''
// creo una variable donde voy a guardar un mensaje 
let dato = 'Pablito clavo un clavito';
// Propiedad .length nos permite saber la cantidad de caracteres que tiene (Cuenta los espacios también)
console.log(dato.length);

// Metodo  toUpperCarse (debo poner parentesis) pasa toda la cadena a mayuscula 
console.log(dato.toUpperCase());

// Metodo toLowerCase() pasa todo a minisculas. Recordar que necesita los parentesis es un metodo.
console.log(dato.toLowerCase());

// Metodo charAt nos brinda un caracter según su posición
// Recordar que el primer elemento se encuentra en la posición 0.
console.log(dato.charAt(2));

//Metodo para obtener una parte de la cadena, espera dos parametro (desde, hasta)
//console.log(dato.substring(1,7));
// Si le paso uno solo me devuelve DESDE ese hasta el final
console.log(dato.substring(7));
// Recordar que una cadena de texto es un string.

// Metodo para eliminar los espacios en blancos
let contrasena ='             12345 '
console.log(contrasena.trim());

// Metodo para ver si incluye una parte de texto
// Verifico si el texto que buscamos coincide o se encuentra lo que buscamos. 
// Devuelve un booleano
console.log(dato.includes('ito'));

// 2da PARTE DE LA CLASE MINUTO 25
// TRABAJAMOS CON NUMEROS EN JS

let number = 37.65;
//quiero que me haga un redondeo pasando la variabla a la que quiero que me la redondee
console.log(Math.round(number));

//Truncamiento
console.log(Math.floor(number));

//Para mostrar el maximo valor de un conjunto de numeros
let max=Math.max(1,14,15,16);
console.log(`El numero mayor es: ${max}`);

// Para encontrar el numero menor uso 
let min=Math.min(1,14,15,16);
console.log(`El numero menor es: ${min}`);

//Para potencia y raices
console.log(Math.pow(3,2)); // el cuadrado de 3
console.log(Math.pow(3,3)); // el cubo de 3
console.log(Math.sqrt(9)); // el raiz cuadrada de 9
console.log(Math.cbrt(27)); // el raiz cubica de 27

// Numeros aleatorios
// Necesito llamar tambien al objeto Math.random como nos da una numero largo, debo acortarlos va entre 0 y 1
let aleatorio =Math.round(Math.random()*10);
// si quiero del 1 al 100 lo multiplico por 100
console.log(aleatorio);

// Ejemplo para pasear cadena, es decir transformar la cadena en numero
let number02 = "12.05ada"
console.log(number02)

console.log(parseInt(number02)); //me devuelve el string en numero entero
console.log(Number(number02)); // solo me devuelve si es solo numero la cadena, sino NaN 
console.log(parseFloat(number02)); // convierte el string a numero y reconoce decimales 

// Para limitar la cantidad de decimales uso .tofixed(cantidad)
let number03=12.6588454;
console.log(number03.toFixed(2));
//51'30 empezamos el Kahoot
// Cuantas formas hay para ejecutar JS? opcion 1, 2 y 3. Respuesta 3.
// desde html, desde el ejecutador de evento de un boton o desde un script
// En lo que va cursado vimos 3 lenguajes de programacion? Verdadero o Falso.
// Falso, solo vimos JS como lenguaje de programación
// 4) Verdadero
// 5) Para hacer paginas web interactivas y dinamicas
// 6) Palabras reservadas. Palabras que tiene un significado y una funcion.
// 7) Las variables son cajas donde podemos guardar datos temporalmente? Verdadero.
// 07)  todas
// 08) var no es buena practica por eso es falso
// 09) let verdadero

// Ver challenges hay varios.  


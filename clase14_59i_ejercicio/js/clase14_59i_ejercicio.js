// Hasta aqui nos olvidemos de html y css
// Lo combinamos con JS
//DOM Document Object Model
// A través del DOM puedo acceder al html o a todo lo visual de nuestro proyecto 

// 19'
// BOM Browser Object Model
// A través del BOM puedo acceder a toda la información de por ejemplo la barra de navegación
// Nosotros lo probamos por consola a algunos métodos del BOM.

// Funcion del SetInterval y Función TimeOut, tenerla encuenta para algún challenge de empresa (Clase anterior)

// EMPIEZO A REPASAR EL DOM Y EL BOM 21'40'' -grabación completa-
// La idea de hoy es que a traves del JS modifiquemos el html. 

// Windows es un objeto gigante que nos presenta distinto metodos y propiedades/elementos, o tambien podemos decirlo
// A través del objeto window podemos acceder a todas las herramientas del navegador.

// windows.location esto nos presenta de un objeto gigante los elementos de la barra de navegación
// JS TRATA COMO OBJETO A LA BARRA DE NAVEGACIÓN!!!
// Un ejemplo es que el href es un conjunto del protocolo, origin y pathname.

// Colocando en la consola el objeto windows, se me desplaza un monton de propiedades.
// Si colocamos window.navigator se abren muchas propiedades mas.
// 26'50'' -grabación completa-

// En la consola empezamos a desarrollar 30'
// window.propiedad 
// Accedemos a la propiedad navigator quien me presenta varias propiedades mas. Entre esta propiedades puede acceder a la geolocalización del usuario
// window.navigator.mediaDevices.getUserMedia({video:true}) //Para preguntar si me deja acceder a la camara

//36'30''-grabacion completa
// Con el BOM accedemos a los datos de navegación, mientras con el DOM podemos realizar cambios visuales en el html.
// En otras palabras puedo manipular el HTML desde el DOM

// Ahora nos empezamos a adentrar con el la propiedad history
// window.history.forward('nombre de la page'); // para redireccionar a la page (ojo con los permisos)
// window.history.back() // esto es para volver a la página anterior
// window.history.forward() // vuelve a la page anterior

// 44'30'' - grabacion completa -
// Ver el ejercicio del contador de la clase anterior. 
// Clear interval corta el intervalo de tiempo de la funcion contador de tiempo.

// Vamos al html 46'- grabación completa - 
// VOLVEMOS del html 48'- grabación completa - 
// document.tittle = "DOM Y BOM CLASE 14";

//51' aprenderaprogramar.com
//Empiezo a conocer los elementos del DOM (Busco los eventos en la diapo)
function cambiarTexto(){
// Vamos a empezar a conocer los elementos del DOM 
// El escuchador de eventos chismoso en este caso es el onclick ver en el link lista de eventos www.aprenderaprogramar.com

// Ahora si empezamos a conocer los elementos del DOM 55'
// Un elemento que trabajamos mucho es getElmentById ('nombreDelId') Trae el elemento por su ID
// getElementByClassName('nombreDeClase') Trae los elementos que tenga esa clase.
// getElementByQuerySelector (.nombreDeClase o #nombreDeId) Trae los elementos que coincida a través del selector . para CLASE # para ID

//59' - grabacion completa- Empezamos a capturar para empezar a realizar los cambios en el HTML.
// para acceder al html voy al elemento document
// Capturo la propiedad del elemento según el ID
const h2Cambio = document.getElementById('h2-cambiar'); // Esta escuchando, accediendo al elemento del html con id='h2-cambiar' y guardando en la constante

// Cmabio el texto 1º 02'50''- grabacion completa- innerText es propiedad del DOM
h2Cambio.innerText = 'El texto ha sido modificado'; // innerText para cambiar

//.style accedo a las propiedades del css y puedo acceder a las propiedades del css 
h2Cambio.style.backgroundColor='red';
h2Cambio.style.color='white';
}

// parte 02
// 1º 07' 40''- grabacion completa- 

// TODO: CAMBIAR EL TEMA DE FONDO (color de fondo)
function cambiarTema(){
    const elementoCambiado = document.getElementById('probandoTema');
    //El id anterior debe ser el del elemento del HTML;
    // .classList accedo a la clase
    // .contains accedo al contenido de la clase
    // 'claseDelCss' esta clase contiene las propiedades definidas en el css
    if (elementoCambiado.classList.contains('ligth')){
        elementoCambiado.classList.add('dark');     // agrego la clase nueva
        elementoCambiado.classList.remove('ligth'); // remuevo la clase vieja sino se pisan
    }else{
        elementoCambiado.classList.add('ligth');
        elementoCambiado.classList.remove('dark');
    }
}
// 1º 20' 00'' resumen de todo lo usamos hasta aqui
// PARA TRAER ELEMENTOS POR ID document.getElemet 1º23' ver y copiar

// Si quiero trael todos los elmentos que tengan una clase 
// querySelectorAll('nombreDeClase')

// 17' 45''
// 1º 25' 20'' - grabación completa - En el HTML: 2da parte AGREGO UN NUEVO ELEMENTO 
// Para agregar un elemento cada vez que realizo un click, su contenedor es el div que esta en HTML con clase 'nuevo-elemento'
function agregarElementos(){
//Creo un elemento en el index.html pero el elemento esta por aqui
const newElement = document.createElement ('div'); // creo un div
newElement.classList.add('cuadrado'); // le ponemos información al elemento, ejemplo la clase que le agrego en esta linea
newElement.innerText = 'Soy un cuadrado!'; // Ademas le agrego un texto al nuevo elemento
// Tengo que ver a donde lo voy a ubicar en el HTML al nuevo elemento entonces veo quien sera su padre/contenedor
//ubico en donde agrega el elemento para ello creo una const para ver el elmento padre
const padreElement = document.querySelector('.nuevo-elemento'); // buscamos al padre para ubicarlo en el html
padreElement.appendChild(newElement); // el elemento padre adopta al nuevo elemento, es decir a su hijo.
}
// 1º 37' 00'' finalizamos el ejemplo, vamos al challenge de la clase anterior ver la lista de eventos en la tarjeta de trello





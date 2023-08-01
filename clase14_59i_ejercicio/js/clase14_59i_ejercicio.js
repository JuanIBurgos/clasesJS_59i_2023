// Hasta aqui nos olvidemos de html y css
// Lo combinamos con JS
//DOM Document Object Model
// A través del DOM puedo acceder al html o a todo lo visual de nuestro proyecto 

// 19'
// BOM Browser Object Model
// A través del BOM puedo acceder a toda la información de la barra de navegación


//windows.location esto nos presenta un objeto gigante, JS TRATA COMO OBJETO A LA BARRA DE NAVEGACIÓN.
// href es un conjunto del protocolo, origin y pathname.

//Colocando en la consola el objeto windows, se me desplaza un monton de propiedades
//Si colocamos window.navigator se abren muchas propiedades mas

// window.navigator.mediaDevices.getUserMedia({video:true}) //Para preguntar si me deja acceder a la camara
// window.history.forward('nombre de la page'); // para redireccionar a la page (ojo con los permisos)
// window.history.back() // esto es para volver a la página anterior

// Ver el ejercicio del contador 
// Clear interval

//51' aprenderaprogramar.com
//Empiezo a conocer los elementos del DOM (Busco los eventos en la diapo)
function cambiarTexto(){
// Un elemento que trabajamos mucho es getElmentById ('nombreDelId') Trae el elemento por su ID
// getElementByClassName('nombreDeClase') Trae los elementos que tenga esa clase
// getElementByQuerySelector (.nombreDeClase o #nombreDeId) Trae los elementos que coincida a través del selector . para CLASE # para ID

// para acceder al html voy al elemento document
// Capturo la propiedad del elemento según el ID
const h2Cambio = document.getElementById('h2-cambiar'); // Esta escuchando, accediendo al elemento
h2Cambio.innerText = 'El texto ha sido modificado'; // innerText para cambiar

//.style accedo al css y puedo acceder a las propiedades del css
h2Cambio.style.backgroundColor='red';
// h2Cambio.style.textEmphasisColor='white';
}
// parte 02

// todo: cambiar el tema (color de fondo)

function cambiarTema(){
    const elementoCambiado = document.getElementById('probandoTema');

    if (elementoCambiado.classList.contains('ligth')){
        elementoCambiado.classList.add('dark');
        elementoCambiado.classList.remove('ligth');
    }else{
        elementoCambiado.classList.add('ligth');
        elementoCambiado.classList.remove('dark');
    }
}

// Ver en el repo
// por nokmbre de etiqueta document.getElementByTagName('tag')

// 17' 45''
// Para agregar un elemento
function agregarElementos(){
//Creo un elemento en el index.html pero el elemento esta por aqui
const newElement = document.createElement ('div'); // creo un div
newElement.classList.add('cuadrado'); // le ponemos información al elemento, ejemplo la clase
newElement.innerText = 'Soy un cuadrado!'; // Le agrego un texto (información)
//ubico en donde agrega el elemento para ello creo una const para ver el elmento padre
const padreElement = document.querySelector('.nuevo-elemento'); // buscamos al padre para ubicarlo en el html
padreElement.appendChild(newElement); // el elemento padre adopta al nuevo elemento 
}






// Parte 02 de la clase 9 
// Armado del carrito - Agregar, mostrar, buscar, filtrar y eliminar producto del carrito
// carrito.js es el archivo de Nicole

//le pongo let y no const porque puede ir variando dice que va agregando
let products = ['gaseosa','cerveza','vino','fernet','gin','vodka'];
// el carrito se va cargando a medida que el cliente vaya comprando
let carrito = [];

// CREO LA PRIMERA FUNCIÓN AGREGAR PRODUCTO
const agregarProducto= () => {
    const productoAgregado = prompt ('Que producto desea llevar? ').toLocaleLowerCase();
    //coloco todo a minisculas para independizarme de ese tipo de letra
    //Ahora me fijo si existe el producto
    if (products.includes(productoAgregado)){
        //Agrego el producto al carrito
        carrito.push(productoAgregado);
        alert('Producto agregardo');
    }else{
        alert ('No vendemos ese producto, volve la proxima!');
    }
}
// Metodo par mostrar los proctos del carrito verProductos
const verProducto = () =>{
    alert('Tus productos son: ' + carrito.join('\n'))
}

//20'30''
const buscarUnProducto = () => {
    const productoABuscar = prompt('Ingrese el producto a buscar: ').toLocaleLowerCase();
    const productoEncontrado = carrito.find(producto => producto == productoABuscar);
    //Puedo mejorar poniendo en un if o si encontro un producto
    alert(productoEncontrado);
}

//29'57''
// Buscar coincidencia 
const buscarCoincidencias = () => {
    const buscar = prompt ('Buscar coincidencias: ').toLocaleLowerCase();
    const resultado = products.filter(producto => producto.includes(buscar));
    alert(resultado);
}

// 37' Realizar eliminar un producto
const eliminarProducto = () => {
    const productoAEliminar = prompt('Ingrese el producto a eliminar: ');
    const productoSeleccionado = carrito.indexOf(productoAEliminar);
    if (carrito.includes(productoAEliminar)){
        carrito.splice(productoSeleccionado,1);
        alert('Producto Eliminado correctamete');
    }
    else{
        alert('El producto no fue encontrado en su carrito.');
    }
}
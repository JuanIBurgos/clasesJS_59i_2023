// Escribo el evento del boton 
function publlicar(){
    // paro el elevento por defecto del formulario
    event.preventDefault();
    //prueba si es que funciona
    //console.log('probando');
    
    // voy a creo el elemento que lo llamo por la id tweet
   const tweet = document.getElementById('tweet');
   // voy a obtener el valor de que voy escribiendo dentro del recuadro, es decir captura los valores.
   const tweetText = tweet.value;
   //veo que este bien que capture
   //console.log(tweetText);

   //VOY A CREAR UN NUEVO ELEMENTO Y AL CUAL LO QUIERO DIFERENCIA POR LO QUE CADA TWEET TIENE SU ID 
   const newTweet = document.createElement('div'); // elemento div de html todavia no lo tenemos en el html ahora 
   //sino que lo ahora lo vamos a crear
   //Genero y conecto el nuevo elemento con el id
   const id= new Date().getTime(); //genero
   newTweet.id = id; //asigno
   // agrego el contenido al div el texto y el boton que diga eliminar
   newTweet.innerHTML = `
   <p>${tweetText}</p> 
   <button class="btn btn-danger d-block ms-auto" onclick="eliminarTweet(${id})">Eliminar</button>
   `;
   // Aqui me falta buscar al padre y que adopte al hijo (mayusculas)
   newTweet.classList.add('text-ligth','bg-dark','p-5','my-2');// doy clases de bootstrap al elemento newTweet en este caso div
        // como es clase uso queryselector y declaro el padre
   const tweetContainer = document.querySelector('.contenedor-tweet');
   // adopta el padre al hijo
   tweetContainer.appendChild(newTweet);

    //23'40'' Limpiamos el formulario ante cada envio
    document.querySelector('form').reset();
}
// para que el boton eliminar pueda funcionar debemos tener en cuenta el id del comentario
function eliminarTweet(id){
    // OJO DEBE RECIBIR EL id CORRESPONDIENTE
    const tweetDelete = document.getElementById(id);
    tweetDelete.remove();
}
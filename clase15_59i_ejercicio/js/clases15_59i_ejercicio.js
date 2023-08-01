// Escribo el evento del boton 
function publlicar(){
    // Para para el evento por defecto del formulario (el del reset cada vez que aprieto enviar)
    event.preventDefault();
    //prueba si es que funciona
    //console.log('probando');
    
    // voy a crear el elemento que lo llamo por la id tweet (este id pertenece al elmento textarea del formularrio de html)
   const tweet = document.getElementById('tweet');
   // voy a obtener el valor de que voy escribiendo dentro del recuadro, es decir captura los valores.
   const tweetText = tweet.value;
   //veo que este bien que capture
   //console.log(tweetText);

   //VOY A CREAR UN NUEVO ELEMENTO Y AL CUAL LO QUIERO DIFERENCIAR! POR ESTA RAZON CADA TWEET TIENE SU ID 
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
    // AQUÍ FALTA BUSCAR AL PADRE Y QUE EL ADOPTE AL HIJO
   newTweet.classList.add('text-light','bg-dark','p-5','my-2');// doy clases de bootstrap al elemento newTweet en este caso div
    // como es clase uso queryselector y declaro el padre
   const tweetContainer = document.querySelector('.contenedor-tweet');
    // adopta el padre al hijo
   tweetContainer.appendChild(newTweet);

    //23'40'' LIMPIAMOS EL FORMULARIO ANTE CADA ENNVIO
    document.querySelector('form').reset();
}

// PARA QUE EL BOTON ELIMINAR PUEDA FUNCIONAR DEBEMOS TENER EN CUENTA EL ID DEL COMENTARIO
function eliminarTweet(id){
    // OJO debo recibir el id correspondiente
    const tweetDelete = document.getElementById(id);
    tweetDelete.remove();
}
/*
Crear un arreglo de objetos que contengan datos de películas como:
    + Titulo
    + Genero 
    + Año
    + Sinopsis
Crear una función que permita mostrar en unalista cada película con sus datos.
*/

let peliculas = [
    {titulo : 'BatMan', genero : 'super heroes', anio : 2022, sinopsis : 'Millonario que se entrena para ser un superheroe nocturno'},
    {titulo : 'Sonrie', genero : 'terror', anio : 2022, sinopsis : 'Tras presencia el dramático incidente sufrido por un paciente, la Dra. Cotter empieza a experimentar hechos aterradores sin explicación aparente. A medida que el horror se adueña de su vida, comprende que la respuesta está en su propio pasado.'},
    {titulo : 'Los Simpson', genero : 'comedia animada', anio : 2007, sinopsis : 'La combinación de Homero, su nuevo puerco mascota, y un silo lleno de excremento podrían provocar un desastre que amenace no solo a Springfield, sino al mundo entero. Una muchedumbre enojada llega a la casa de los Simpson y divide a la familia. Con el destino de la Tierra en juego, Homero se prepara para intentar redimirse con la intención de salvar al mundo y ganarse el perdón de Marge.'},
]

console.log(peliculas);
console.log(peliculas[0]);
console.log(peliculas[0].titulo);
console.log(peliculas[0].genero);
console.log(peliculas[0].anio);
console.log(peliculas[0].sinopsis);


// Repasamos el challenge usando clases
const series = [
  {
    nombre: "friend",
    temporadas: 10,
    description: "un grupo de amigo que se divierte",
    mostrarDesc: function () {
      console.log(`La serie se llama ${this.nombre}, tiene ${this.temporadas} temporada/s, un resumen breve: ${this.description}`);
    },
  },
  {
    nombre: "the crown",
    temporadas: 5,
    description: "las verdades de la Reina Isabel",
    mostrarDesc: function () {
      console.log(`La serie se llama ${this.nombre}, tiene ${this.temporadas} temporada/s, un resumen breve: ${this.description}`);
    },
  },
];

// ForEach
series.forEach((serie) => serie.mostrarDesc());

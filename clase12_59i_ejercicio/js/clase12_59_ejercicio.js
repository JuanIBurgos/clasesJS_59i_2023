//43' HERENCIA 
class Person{
    //Creo el constructo
    constructor(name,age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    //Coloca las funciones (no es necesario la palabra function)
    saludar(){
        console.log('Hola soy '+ this.name);
    }
}

//Creo otra clase Student que tiene como padre a la clase Person
class Student extends Person{
    //constructor de la clase student
    constructor(name,age,comision){
        super(name,age);
        this.comision = comision;
    }
}

//todo: instancio un objeto 
let ivan = new Student ('ivan',23,'59i');

//En la consola puedo probar
//ivan 
//ivan.name
//ivan.saludar()

class Superheroe extends Person{
    constructor(name,age,power,city){
        super(name,age,city);
        this.power = power;
    }
}
//Como la clase padre tiene el atributo extra de city puedo colocarlo o no, ese es el 4to parametro
let superman = new Superheroe ('Superman',40,'volar','Salta');
let ironman = new Superheroe ('IronMan',45,'millonario');

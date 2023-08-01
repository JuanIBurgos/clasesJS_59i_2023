// Parte 02
//todo: Escribe un programa que cree un objeto CUENTA con las siguiente propiedades:
//Una propiedad titular (datos del títular)
//Una propieda saldo, teniendo como valor incial 0
//Un metodo ingresar() que permita ingresar dinero a la cuenta, pasandolo como cantidad.
//Un metodo extraer() que me permita retirar dinero, la cantidad pasada como parametro.
//Un metodo informar() que retorne la información.

class Cuenta{
    // En este caso el constructor solo necesita pedir el titular el resto se encarga el de asignar valor
    constructor(titular){
        this.id = parseInt(Math.random()*10000);
        //Math.floor trunca
        this.titular = titular;
        this.saldo = 0;   
    }
    // Declaro metodos/function 
    ingresar (monto){
        if (monto>0){
            this.saldo=this.saldo+monto;
            console.log(`Tu saldo actual es: ${this.saldo}`);
        }
        else if (isNaN(monto)){
            console.log('Solo se admiten numeros');
        }else{
            console.log('Ingrese un monto mayo a 0');
            }
    }
    // Extraer()
    extraer(monto){
        if (monto<= this.saldo && monto>0){
            this.saldo = this.saldo - monto;
            console.log(`Tu saldo es ${this.saldo}`);
        }else if (isNaN(monto)){
            console.log('Solo se admiten numeros');
        }else{
            console.log('saldo insuficiente o monto invalido');
        }
    }
    informe(){
        console.log (`La cuenta ${this.id} a nombre de ${this.titular} tiene un saldo de ${this.saldo}`);
    }
}
//Instanciamos la cuenta
const cuentaLautaro = new Cuenta ('Lautaro');
const cuentaAgustina = new Cuenta ('Agustina');



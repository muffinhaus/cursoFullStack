//Funciones: codigo reutilizable para que hagamos codigo limpio

//simple
function myFunc() {
    console.log("hola funcion")
}

myFunc();

//parametros
function myFunctParam (name){
    console.log(`hola ${name}`);
}

myFunctParam("javi");

//funciones anonimas: se almacenan en un variable o constante

const myFunc2 = function(nombre){
    console.log(`hola ${nombre}`);
}

myFunc2("Javierito");

//funciones flecha: forma concisa de escribir funciones (siempre hay que atribuir a una variable)

const funcionFlecha = (name) => { console.log(`hola ${name}`)};
const funcionFlecha2 = (name) => console.log("no hace falta el curl");

funcionFlecha("Javier javzempic");


//Parametros: funcion procedimiento
function suma(a,b){
    console.log(a + b);
}

function sumaSinError (a=0, b=0){
    console.log(a+b);
}

suma(2,3);
sumaSinError(6);

//Retorno de valores
function multi(a,b){
    return a * b;
}
//devuelve el valor pero no se muestra por pantalla

console.log(multi(4,3));


//funcion anidadada: cuidado con el Scope o RANGO de actuacion--> interna solo
//se veria dentro de extern, no se puede invocar fuera

function externa ()
{
    console.log("funcion externa");
    function interna(){
        console.log("funcion interna");

    }
}

//FUNCIOENS DE ORDEN SUPERIOR
function applyFuncion(func, param){
    func(param)
};
applyFuncion(myFunc2,"funcion de orden superior");


//foreach: es una funcion para iterar 

myArray = [1,2,3,4];

myArray.forEach(element => {
    console.log(element);
});




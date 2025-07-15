// CLASES
    // En JavaScript, las clases son una forma de definir objetos reutilizables 
    // mediante una sintaxis más clara y orientada a objetos (similar a otros lenguajes
    //  como Java o C++). Introducidas en ES6 (ECMAScript 2015), las clases en JavaScript 
    // son una mejora sintáctica sobre la herencia basada en prototipos que ya existía en 
    // el lenguaje.

//      Características principales
        // 1. Constructor

        //     Se ejecuta al crear una nueva instancia con new.

        //     Inicializa las propiedades del objeto.

        // 2. Métodos

        //     Funciones definidas dentro de la clase.

        //     Pueden acceder a las propiedades con this.

        // 3. Herencia (extends)

        //     Permite extender otra clase.
                class Estudiante extends Persona {
                constructor(nombre, edad, curso) {
                    super(nombre, edad); // Llama al constructor de Persona
                    this.curso = curso;
                }

                estudiar() {
                    console.log(`${this.nombre} está estudiando ${this.curso}.`);
                }
                }

                const estudiante1 = new Estudiante("Carlos", 20, "JavaScript");
                estudiante1.saludar(); // Método heredado
                estudiante1.estudiar(); // Nuevo método

        // javascript



// 📌 Sintaxis básica de una clase
            class NombreClase {
        constructor(parametros) {
            // Inicializar propiedades
            this.propiedad = valor;
        }

        metodo1() { /* ... */ }
        metodo2() { /* ... */ }
        }


// EJEMPLO

    class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
    }

// Crear una instancia
const persona1 = new Persona("Ana", 25);
persona1.saludar(); // "Hola, soy Ana y tengo 25 años."

// Valores por defecto

class DefaultPerson {
    constructor(name ="nombre por defecto", age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("la persona camina");
    }
}

let persona3 = new DefaultPerson();
console.log(persona3);

//Acceso a propiedades

console.log(persona3.name);

persona3.alias = "zempic";
persona3.age = 35;

console.log(persona3);

persona3.walk();

//Propiedades privadas

class PrivatePerson {
    //propiedad privada
    #bank

    constructor(name,age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
}


// no podemos acceder a esa propiedad de ninguna manera
 
//GETTER Y SETTER

class GetPerson {
    //propiedad privada
    #name
    #age
    #alias
    

    constructor(name,age,alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
        
        
    }

    get name(){
        return this.#name;
    }
}

let person6 = new GetPerson("pepito",32,"superpepo","IBAN321234540691919191919");
console.log(person6);

class GetSetPerson {
    //propiedad privada
    #name
    #age
    #alias
    #bank

    constructor(name,age,alias,bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
        
    }

    get name(){
        return this.#name;
    }

    set bank(newBank){
        this.#bank = newBank; 
    }
}


let person7 = new GetSetPerson("juanito",32,"jaimito","IBAN2292929292929");
console.log(person7)

person7.bank = "IBANy Vienen";
console.log(person7)


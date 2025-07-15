// ACCESO a las propiedades
//notacion por punto
console.log(person.alias);
//mediante corchetes
console.log(person["name"]);

//MODIFICACION de objetos
person.alias = "javzempic2025";
delete person.edad;

person.email = "javier@gmail.com";
person.age = 49;
console.log(person);

//METODOS de los objetos
let personita = {
    name:"",
    edad:5,
    walk: function(){
        console.log("la persona camina");
    }
}

personita.walk();

//ANIDACION de objetos
let persona3 = {
    nombre:"javiercillo",
    edad:5,
    walk: function() {
        console.log(`la persona con nombre ${this.nombre} camina`);
    },
    job: {
        name:"programador",
        tiempo: 15,
        work: function() {
            
        
            console.log (`la persona con nombre ${this.tiempo} trabaja`);
        }
    }
}

console.log(persona3.job.work());

let personaje = {
    name:"cayetano",
    edad:67,
    email:"cayetano@gmail.com",
    trabajo:{
    tareas: function() {
            console.log("estas son mis tareas");
        }

    }
}

console.log(personaje.trabajo)

//OBJETOS COMO FUNCIONES: crea objetos de forma generica para rellenar luego
// no es una buena practica, esto deberia ser una CLASE-----

function Personas(name,age){
    this.name = name,
    this.age = age
}

let identidad1 = new Personas("juan",3);
console.log(identidad1);
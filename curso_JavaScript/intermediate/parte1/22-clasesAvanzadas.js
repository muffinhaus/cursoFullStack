// Clases avanzadas

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`hola ${this.name}`)
    }
}

const persona = new Person ("Brais",32)
persona.greet()

//Anyadir una funcion a una instacia de una clase

persona.sayAge = function(){
    console.log(`Hola chaval de ${this.age}`)
}

persona.sayAge()



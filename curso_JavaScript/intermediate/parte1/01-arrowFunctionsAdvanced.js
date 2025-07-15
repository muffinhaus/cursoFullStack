//Advanced Arrow Functions 

// 1. Retorno implicito

const multiply = (a,b) => a * b; 
console.log(multiply(2,3));

// - this lexico
    //no crean su propio contexto lo heredan de un nivel superior

const handler = {
    name: "Brais",
    greeting: function (){
        console.log(`hola ${this.name}`)
    },
                    //arrow crea su propio contexto de this por lo que
                    //aqui no lo pilla y dice unefined
    arrowGreeting: () => {
        console.log(`hola ${this.name}`)
    }
}
handler.greeting()
        //no esta en el scope del this
handler.arrowGreeting()

// IIFE (se ejecutan en el momento que se definan)
(function(){
    console.log("hola");
})()
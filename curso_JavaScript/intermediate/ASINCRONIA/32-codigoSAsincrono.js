// Event Loop
    //es un bucle infinito


// Call stack ([pila de ejecucion])
// Web Apis (apis del navegador) o node.js
// Task queue (cola de tareas)  o microtaskqueue

// Flujo del Event Loop

//  1. Ejecuta el call stack
//  2. operaciones asincronas -> web APIS o node.js
//  3. Operacion termina --> task queue
//  4. Si call stack vacio --> mueve tareas del task queue o MTq
//  5. El proceso repite

//METODOS: CALLBACKS

console.log("inicio")
setTimeout(() => {
   console.log("esto se ejecuta despues de dos segundoss") 
}, 2000);

console.log("fin")

// --problem: callback Hell

function step1(callback){
    setTimeout(() => {
    console.log("paso uno completado")
    callback()    
    }, 1000);
    
}

function step2(callback){
    setTimeout(() => {
    console.log("paso uno completado")
    callback()    
    }, 1000);
    
}

function step3(callback){
    setTimeout(() => {
    console.log("paso uno completado")
    callback()    
    }, 1000);
    
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("todos lso pasos completados")
        })
    })
})


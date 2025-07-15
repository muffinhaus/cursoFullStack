// Una funcion que puede recibir una funcion

//Callbacks

function sum(...numbers){
    let result = 0
    for (let numero of numbers){
        result += numero;
    }
    return result;

}


function processData (data,callback){
    //primero llama a la funcion sum
    const result = sum(...data)
    
    callback(result) //Aqu;i llamariamos a la funcion que pasemos luego como argumento
}

function processResult(result){
    console.log(result)
}

//por ejemplo podemos poner otra callback
function processResult2(result){
    console.log(`El resultado es: ${result}`)
}
processData([1,2,3],processResult)
processData([4,5,6],processResult2)

processData([7,8,9], (result) => {console.log(`mi resultado es: ${result}`)})

// esto se utiliza para situaciones ASINCRONAS
// llamamos a un servidor y mientras seguimos trabajando



//pasando parametros

function calcular (num1,num2,operacion){
    return operacion(num1,num2)
}

function sumar (a,b){
    console.log(`Vamos a sumar los numeros ${a} y ${b}`)
    return a + b
}

function restar (a,b){
    console.log(`Vamos a restar los numeros ${a} y ${b}`)
    return a - b
}

console.log(calcular (2,2,sumar))
console.log(calcular (3,2,restar))

//callback asincrono
function hacerTarea (tarea, callback){
    console.log(`Empezando la tarea: ${tarea}`)

    setTimeout(() => {
        console.log(`La tarea ${tarea} esta completada`);
        callback();
    }, 2000);
}

function avisar (){
    console.log("!Enhorabuena, la tarea termino!")
}

hacerTarea("limpiar casa",avisar)

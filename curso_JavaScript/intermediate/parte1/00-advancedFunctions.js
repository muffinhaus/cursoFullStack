//Funciones avanzadas

//Ciudadanos de primera clase
// Almacenarse en una variable, constante, objeto
//actuar como valor como parametro de una funcion
//acutar como valor como parametro de una funcion

function greet (name){
    console.log(`Hola, ${name}`)
}

// 1. Guardar en variable

const saludo = function(name){
    console.log(`Hola ${name}`)
}

greet("saludo")
saludo("javi")

// 2. Pasar como parametro (usamos la funcion saludo existente)

function ProcessGreeting (saludo,name){
    saludo(name)
}

ProcessGreeting(saludo, "Moredev")

// 3. Retorno de otra funcion
// esto me da error hay que revisaro
function returnGreeting(){
    return saludo()
}

const saludo2 = returnGreeting()

saludo2("Brais Moredev")
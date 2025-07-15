// Una funcion que se llama a a si mimsma



//Calculemos el factorial de un numero : numero * numero - 1

function factorial(n){
    if (n == 1) {return 1}
    return n * factorial(n -1 )
}

console.log(factorial(5))
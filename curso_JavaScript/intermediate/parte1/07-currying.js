//Transformar una funcion que recibe varios argumentos en un  funcion que recibe
//una solo parametro

function currySum(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}
const sumaAB = currySum(1)(2)

console.log(sumaAB(3))

//va guardando el estado de la suma en cada uno de los momentos en cada una de las
//ejecuciones

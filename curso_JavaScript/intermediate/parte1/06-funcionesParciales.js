// Funciones que reciben parametros de otras funciones 

function sum(...numbers){
    let result = 0
    for (let numero of numbers){
        result += numero;
    }
    return result;

}

function partialSum(a){
    return function(b,c){
        return sum([a,b,c])
    }
}

const sumWitdh = partialSum(4)

console.log(sumWitdh(2,3))
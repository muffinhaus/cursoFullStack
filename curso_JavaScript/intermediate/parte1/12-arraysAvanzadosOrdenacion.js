// Arrays de orenacion

//1. Sort
//  El método sort() ordena los elementos de un array in place (modifica el 
//  array original) y devuelve el array ordenado. 

const frutas = ['banana', 'manzana', 'pera', 'uva'];
frutas.sort();
// ['banana', 'manzana', 'pera', 'uva'] (orden alfabético)

    //con numeros
    const numeros = [10, 2, 100, 5];
    numeros.sort((a, b) => a - b);
    // [2, 5, 10, 100] (orden ascendente)

    numeros.sort((a, b) => b - a);
    // [100, 10, 5, 2] (orden descendente)

//tambien se puede usar sort.reverse

//2. Included
console.log(numeros.includes(4));

//3. findIndex

let firstEvenNumber = numeros.findIndex(Element => Element % 2 === 0)

console.log(firstEvenNumber)

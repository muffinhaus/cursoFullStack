// un SET es una coleccion de valores unicos
//  Sirven para eliminar repetidos

//      Un Set es una estructura de datos introducida en ES6 que almacena
//      valores únicos de cualquier tipo, ya sean valores primitivos o referencias
//      a objetos.

//     CARACTERISTICAS:
//          Almacena valores únicos (no duplicados)

 //         Los elementos se iteran en orden de inserción
//
 //         ás eficiente que arrays para comprobar existencia de elementos

 //         No tiene índices ni claves


const miSet = new Set();

// Añadir valores
miSet.add(1);
miSet.add(5);
miSet.add('texto');
miSet.add({nombre: 'Juan'});

console.log(miSet.size); // 4

// Los valores son únicos
miSet.add(5); // No se añade de nuevo
console.log(miSet.size); // Sigue siendo 4

//por ejemplo si tenemos este array
let myArray = [1,1,1,1,1,3,4,]
let mySet = new Set (myArray)
console.log(mySet)

//operaciones con CONJUNTOS
//union
const setA = new Set ([1,2,3])
const setB = new Set ([2,3,4])

const union = new Set ([...setA, ...setB])
console.log(union)

//Interseccion: elementos comunes con los dos sets

const Interseccion = new Set([...setA].filter(Element => setB.has(Element)))
console.log(Interseccion)

const interseccion = new Set(
  [...setA].filter(x => setB.has(x))
);
// Set(1) {3}

// Diferencia:

const difference = new Set([...setA].filter(Element => !setB.has(Element)))
console.log(difference)



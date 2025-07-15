//ESTRUCTURAS AVANZADAS

//Arrays avanzados

// --Metodos funcionales

//  1. foreach
//     Ejecuta una función para cada elemento del array (similar a un bucle for).

let numbers = [1,2,3,4,5,6,7,8,9]
let frutas = ["javier","alvarez"]
let sumaArray = [5,5]

numbers.forEach(Element => console.log(Element))
frutas.forEach(Element => console.log(Element))

// 2. Map
//    Crea un nuevo array aplicando una función a cada elemento del array original.

let doubled = numbers.map(Element => Element* 2 )
      // retorna un nuevo array

      console.log(doubled)

// 3. filter
//     Crea un nuevo array con los elementos que pasan una condición (test).

let pares = numbers.filter(Element => Element % 2 === 0)
    console.log(pares)

// 4. reduce
//    Reduce el array a un único valor aplicando una función acumuladora.

let sum = numbers.reduce((previous,current) => previous + current,0)
    console.log(sum)
let suma = sumaArray.reduce((a,b) => a + b,0)
    console.log(suma)

// 6. some() y every()

//   some(): Verifica si al menos un elemento cumple la condición.

//    every(): Verifica si todos los elementos cumplen la condición.

const numeros = [1, 2, 3, 4];

const algunMayorQue3 = numeros.some(n => n > 3); // true
const todosMayorQue3 = numeros.every(n => n > 3); // false

// 5. find() y findIndex()

//   find(): Devuelve el primer elemento que cumple la condición.

//    findIndex(): Devuelve el índice del primer elemento que cumple la condición

const usuarios = [
  {id: 1, nombre: 'Juan'},
  {id: 2, nombre: 'María'}
];

const usuario = usuarios.find(u => u.id === 2);
// usuario: {id: 2, nombre: 'María'}

const indice = usuarios.findIndex(u => u.nombre === 'Juan');
// indice: 0

// Encadenamiento de Métodos

//Una de las ventajas de estos métodos es que se pueden encadenar:

const productos = [
  {id: 1, nombre: 'Laptop', precio: 1000, stock: 5},
  {id: 2, nombre: 'Mouse', precio: 25, stock: 10},
  {id: 3, nombre: 'Teclado', precio: 50, stock: 0}
];

const resultado = productos
  .filter(p => p.stock > 0) // Filtra productos con stock
  .map(p => ({ // Crea nuevos objetos con precio con IVA
    ...p,
    precioConIVA: p.precio * 1.21
  }))
  .reduce((total, p) => total + p.precioConIVA, 0); // Suma total


  //Convertir un mapa a aRRay

  const arrayFomMap = Array.from(myMap)
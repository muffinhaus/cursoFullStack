// operador spread (...)
// expande los elementos de un array

const numbers = [1,2,3]
function sumSpread (a,b,c){
    return a + b + c
}

console.log(sumSpread(1,2,3))

console.log(sumSpread(numbers)) //no lo desempaqueta

console.log(sumSpread(...numbers)) //aqui si lo desempaqueta

// y si tiene mas de 3 valores: no pasa nada lo va actualizando siempre
//y cuando no haya menos valores

//1. coon Arrays
const array1 = [1,2,3]
const array2 = [...array1] //copiasr un array
const arrayCombined = [...array1, array2] //concatenar un array
const arrayAnadir = [0, ...array1,4] //añadir elementos
console.log(array2)
console.log(`array combinado: ${arrayCombined}`)
console.log(`aniadimos el 0 y el 4 ---> ${arrayAnadir}`)

//2. con OBjetos

//copiar objetos
const obj1 = {a:1,b:2}
const obj3 = {c:3,d:4}
const obj2 = {...obj1} //copiar el objeto
const objConcat = {...obj1, ...obj3} //concatenar objeto
const objAnyadir = {...obj1,e:5} //anyadir propiedades
console.log(obj2) 
console.log(objConcat) 
console.log(objAnyadir)

// 3. con Funciones

function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(sumar(...numeros)); // 6
// Equivale a sumar(1, 2, 3)

// 4. con strings
const str = "Hola";
const chars = [...str];
console.log(chars); // ["H", "o", "l", "a"]
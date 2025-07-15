// Parametros rest ...
//mientras spread expande res condensa

function sum(...numbers){
    let result = 0
    for (let numero of numbers){
        result += numero;
    }
    return result;

}

console.log(sum([1,2.3]))

//concepto basico

function miFuncion(a, b, ...restoArgs) {
  console.log(a);       // Primer argumento
  console.log(b);       // Segundo argumento
  console.log(restoArgs); // Array con el resto de argumentos
}

miFuncion(1, 2, 3, 4, 5);
// Salida:
// 1
// 2
// [3, 4, 5]

// SIEMPRE VA AL FINAL
// Correcto
function f(a, b, ...resto) {}

// Incorrecto (error de sintaxis)
// function f(...resto, a, b) {}

//1. MANEJAR ARGUMENTOS VARIABLES
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 3, 4, 5)); // 15

//2. CAPTURAR ARGUMENTOS ADICIONALES

function mostrarInfo(nombre, edad, ...otros) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  console.log('Información adicional:', otros);
}

mostrarInfo('Ana', 25, 'Programadora', 'Soltera');

//3. DESESTRUCTURACION CON REST
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5]

const {a, b, ...otros} = {a: 1, b: 2, c: 3, d: 4};
console.log(a);     // 1
console.log(b);     // 2
console.log(otros); // {c: 3, d: 4}
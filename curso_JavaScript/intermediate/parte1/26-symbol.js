// Symbol en JavaScript

// Los Symbols son un tipo de dato primitivo introducido en ECMAScript 2015 
// (ES6) que representan identificadores únicos e inmutables. Son útiles para
//  crear propiedades de objetos que no colisionen con otras propiedades.
// Características principales de los Symbols

//     Únicos: Cada Symbol es distinto, incluso si tienen la misma descripción

//     Inmutables: No pueden ser modificados una vez creados

//     No son instanciables: No se usa new para crearlos

//     Pueden ser usados como propiedades de objetos

// CREACION DE SYMBOLS

// Symbol básico
const symbol1 = Symbol();
const symbol2 = Symbol('descripción'); // Descripción opcional

console.log(symbol1); // Symbol()
console.log(symbol2); // Symbol(descripción)

// Uso como propiedades de objetos
// javascript

const ID = Symbol('id');
const persona = {
  nombre: 'Juan',
  [ID]: '12345' // Notación de corchetes para usar Symbol como key
};

console.log(persona[ID]); // '12345'
console.log(Object.keys(persona)); // ['nombre'] (los Symbols no aparecen)

// Symbol vs string como propiedad
// javascript

const obj = {};
const stringKey = 'id';
const symbolKey = Symbol('id');

obj[stringKey] = 'valor string';
obj[symbolKey] = 'valor symbol';

console.log(obj[stringKey]); // 'valor string'
console.log(obj[symbolKey]); // 'valor symbol'

// Symbols conocidos (Well-known Symbols)

// JavaScript tiene Symbols incorporados para acceder a comportamientos internos:
// javascript

// Ejemplo con Symbol.iterator
const numeros = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const num of numeros) {
  console.log(num); // 1, 2, 3
}

// Métodos útiles
// javascript

const sym = Symbol('foo');

// Obtener descripción
console.log(sym.description); // 'foo'

// Buscar Symbols en un objeto
const obj = {};
const sym2 = Symbol('bar');
obj[sym2] = 'baz';

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(bar)]

// Casos de uso comunes

//     Propiedades "privadas" en objetos (aunque no son realmente privadas)

//     Evitar colisiones de nombres en librerías

//     Personalizar comportamientos mediante well-known symbols

//     Metaprogramación (modificar comportamiento del lenguaje)

// Ejemplo práctico
// javascript

// Creando propiedades "pseudo-privadas"
const NOMBRE = Symbol('nombre');
const EDAD = Symbol('edad');

class Persona {
  constructor(nombre, edad) {
    this[NOMBRE] = nombre;
    this[EDAD] = edad;
  }
  
  get nombre() {
    return this[NOMBRE];
  }
  
  get edad() {
    return this[EDAD];
  }
}

const juan = new Persona('Juan', 30);
console.log(juan.nombre); // 'Juan'
console.log(juan[Symbol('nombre')]); // undefined (no se puede acceder sin la referencia exacta)

// Los Symbols son una característica poderosa de JavaScript para crear identificadores únicos y para metaprogramación avanzada, aunque su uso en aplicaciones cotidianas es menos común que otros tipos de datos.
// New chat
// AI-generated, for reference on
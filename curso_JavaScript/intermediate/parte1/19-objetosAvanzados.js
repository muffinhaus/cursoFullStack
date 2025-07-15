// Características Avanzadas

// 1. Prototipos y Herencia
    //   cualquier objeto que creamos en js tiene un protoptipo asociaso

function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

function Perro(nombre) {
  Animal.call(this, nombre);
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.ladrar = function() {
  console.log('Guau!');
};

const miPerro = new Perro('Rex');
miPerro.saludar(); // 'Hola, soy Rex'
miPerro.ladrar(); // 'Guau!'


// 2. Propiedades Computadas (ES6+)

const prefijo = 'user_';
const objet = {
  [prefijo + 'name']: 'Carlos',
  [prefijo + 'age']: 28
};

console.log(objeto.user_name); // 'Carlos'

// 3. Métodos Concisos (ES6+)
const objeto = {
  metodoAntiguo: function() { /* ... */ },
  metodoNuevo() { /* ... */ } // Forma concisa
};

// 4. Desestructuración

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Buenas Prácticas

    // Usar const para declarar objetos: Aunque el objeto sea mutable
    // javascript

const obj = {}; // Bien
obj.prop = 'valor'; // Permitido

// Preferir notación literal: Es más legible y rápida
// javascript

// Bien
const obj = { prop: 'valor' };

// Menos óptimo
const obj = new Object();
obj.prop = 'valor';

// Validar propiedades: Antes de acceder
// javascript

if ('prop' in objeto) { /* ... */ }
// o
if (objeto.hasOwnProperty('prop')) { /* ... */ }

// Usar Object.freeze(): Para objetos que no deben cambiar
// javascript

    const config = Object.freeze({
      API_URL: 'https://api.example.com',
      TIMEOUT: 5000
    });

// Los objetos son el corazón de JavaScript y entender su funcionamiento es esencial para dominar el lenguaje. Su flexibilidad permite implementar múltiples patrones de diseño y estructuras de datos complejas.
// New chat

// Almacenar metadatos

const metadatos = new WeakMap();

function MiClase() {
  metadatos.set(this, {
    creadoEn: new Date(),
    ultimoAcceso: new Date()
  });
}

MiClase.prototype.registrarAcceso = function() {
  const datos = metadatos.get(this);
  datos.ultimoAcceso = new Date();
};

//Implementar cache

const cache = new Map();

function calcularFactorial(n) {
  if (cache.has(n)) {
    return cache.get(n);
  }
  
  const resultado = n === 0 ? 1 : n * calcularFactorial(n - 1);
  cache.set(n, resultado);
  return resultado;
}

//Sustituir objetos como diccionarios

// Problema con objetos:
const traducciones = {};
traducciones['toString'] = 'Traducción especial'; // Conflictos con propiedades heredadas

// Solución con Map:
const traduccionesMap = new Map();
traduccionesMap.set('toString', 'Traducción especial'); // Sin conflictos

//Conversion a y desde objetos

// Map a Objeto
const myMap = new Map([['a', 1], ['b', 2]]);
const objeto = Object.fromEntries(myMap.entries());

// Objeto a Map
const obj = { a: 1, b: 2 };
const nuevoMapa = new Map(Object.entries(obj));

//Implementacion de estructuras complejas

// Map de Maps (estructura tipo tabla)
const tabla = new Map();

tabla.set('fila1', new Map([['col1', 'A1'], ['col2', 'A2']]));
tabla.set('fila2', new Map([['col1', 'B1'], ['col2', 'B2']]));

console.log(tabla.get('fila1').get('col2')); // 'A2'
//maps: es una estructura para almacenar datos
// es un diccionario de elementos es unico 
//formado por un par (key) y valor(value)

//VALE para relacionar dos tipos de datos: clave --> valor



// 1. OPERACIONES BASICAS
const map = new Map();

// Añadir valores
mapa.set('clave', 'valor');

// Obtener valores
console.log(mapa.get('clave')); // 'valor'

// Comprobar existencia
console.log(mapa.has('clave')); // true

// Eliminar elemento
mapa.delete('clave');

// Vaciar el Map
mapa.clear();

// Tamaño del Map
console.log(mapa.size);


// 2. INICIALIZACION CON VALORES
const mapaInicializado = new Map([
  ['clave1', 'valor1'],
  ['clave2', 'valor2'],
  [1, 'número uno']
]);

// 3. ITERACION AVANZADA

const mapa = new Map([
  ['nombre', 'Ana'],
  ['edad', 25],
  ['profesion', 'ingeniera']
]);

// Iterar con for...of
for (const [clave, valor] of mapa) {
  console.log(`${clave}: ${valor}`);
}

// Métodos de iteración
mapa.forEach((valor, clave) => {
  console.log(clave, valor);
});

// Obtener iteradores
const claves = mapa.keys();
const valores = mapa.values();
const entradas = mapa.entries();












// Declarar
let myMap = new Map();
// Inicializar
myMap = new Map ([
    ["name","Javier"],
    ["email","javier@gmail.com"],
    ["edad",32]
])

console.log(myMap);

//metodos y propiedades
//set: a;adir valores

myMap.set("alias","javzempic");

//modificar un valor: no puede haber repetidos
myMap.set("name","Javi");
console.log(myMap);

//get: recuperar el valor
console.log(myMap.get("name"));

//comprobar si existe una clave o no

console.log(myMap.has("name"));

//delete:
myMap.delete("alias");
console.log(myMap);

//clear: myMap.clear();

//PROPIEDADES
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());

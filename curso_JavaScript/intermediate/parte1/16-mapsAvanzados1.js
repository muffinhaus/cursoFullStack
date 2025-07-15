// MAPS

// Un Map es una colección de pares clave-valor introducida en ES6, 
// similar a los objetos pero con algunas diferencias importantes.

const mapas = new Map();

// Añadir elementos
mapa.set('nombre', 'Juan');
mapa.set('edad', 30);
mapa.set(1, 'Número uno');
mapa.set({}, 'Objeto como clave');

console.log(mapa.size); // 4

// Diferencias Clave entre Map y Objetos
/*Característica	   Map	                          Objeto
    Claves	         Cualquier tipo	                Solo strings o symbols
     Orden	         Mantiene orden inserción	      No garantizado
     Tamaño	         Propiedad .size	              Hay que calcularlo
     Rendimiento	   Optimizado para mutaciones	    Mejor para casos estáticos
     Iteración	     Iterable directamente	        Requiere Object.keys()
*/

//1. operaciones basicas

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



//2. Inicializacion con valores

const mapaInicializado = new Map([
  ['clave1', 'valor1'],
  ['clave2', 'valor2'],
  [1, 'número uno']
]);


//3. Iteracion avanzada

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
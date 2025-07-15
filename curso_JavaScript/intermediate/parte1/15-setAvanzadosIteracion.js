// metodos avanzados de iteraconi


const miSet = new Set(['a', 'b', 'c']);

// Usando forEach
miSet.forEach(valor => {
  console.log(valor);
});

// Usando iteradores
const iterador = miSet.values();
console.log(iterador.next().value); // 'a'

// Usando for...of
for (const valor of miSet) {
  console.log(valor);
}

// Eliminación masiva

const setNumeros = new Set([1, 2, 3, 4, 5]);

// Eliminar múltiples valores
[2, 4].forEach(x => setNumeros.delete(x));
// Set(3) {1, 3, 5}

//Filtrado avanzado
const setOriginal = new Set([1, 2, 3, 4, 5]);

// Crear nuevo Set con condición
const setFiltrado = new Set(
  [...setOriginal].filter(x => x % 2 === 0)
);
// Set(2) {2, 4}

// 8. Casos de Uso Avanzados
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];
// [1, 2, 3, 4, 5]

// Almacenar elementos únicos complejos

const objetosUnicos = new Set();

const obj1 = {id: 1};
const obj2 = {id: 2};
const obj3 = {id: 1}; // Objeto diferente con mismo contenido

objetosUnicos.add(obj1);
objetosUnicos.add(obj2);
objetosUnicos.add(obj3);
objetosUnicos.add(obj1); // No se añade de nuevo

console.log(objetosUnicos.size); // 3 (obj1, obj2 y obj3 son diferentes)

// implementar operacione matematicas de conjutnos

// Comprobar si un set es subconjunto de otro
function esSubconjunto(subconjunto, superconjunto) {
  return [...subconjunto].every(x => superconjunto.has(x));
}

const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2]);

console.log(esSubconjunto(set2, set1)); // true
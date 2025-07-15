//7. flat() y flatMap()

//   flat(): Aplana arrays anidados.

//    flatMap(): Combina map() seguido de flat(1).

const anidado = [1, [2, 3], [4, [5]]];
const plano = anidado.flat(); // [1, 2, 3, 4, [5]]
const planoProfundo = anidado.flat(2); // [1, 2, 3, 4, 5]
                                   //nivel de profunidad que queremos eliminar

const frases = ['Hola mundo', 'JavaScript es genial'];
const palabras = frases.flatMap(frase => frase.split(' '));
// ['Hola', 'mundo', 'JavaScript', 'es', 'genial']
    console.log(palabras)

// primero aplana y luego aplica un criterio
const masPalabras = frases.flatMap(frase2 => frase2.toUpperCase())
    console.log(masPalabras)



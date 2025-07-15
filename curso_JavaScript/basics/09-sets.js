//set: aunque son listados no llevan un indice como los arrays

//declaracion

let mySet = new Set();

//inicializacion

mySet = new Set (["javier",2,"madrid"]);

console.log(mySet);

//metodos comunes
//add: añade metodos al final

mySet.add("verano loco");
console.log(mySet);

//delete: hay que indicarle el dato, no vale con el indice
mySet.delete("madrid");
console.log(mySet);

//has: podemos comprobar si existe un elemento

console.log(mySet.has("verano loco"));

//size: comprobaar la longitud
console.log(mySet.size);

//convertir set a array
let arraySet = Array.from(mySet);
console.log(arraySet);

//convertir array a set
let mySet2 = new Set(arraySet);
console.log(mySet2);

// ~cual es la principal diferencias???
// no PERMITE duplicados en el set, si metemos otro dato igual
// no duplicara ese valor si es exactamente igual (caseSensitive)



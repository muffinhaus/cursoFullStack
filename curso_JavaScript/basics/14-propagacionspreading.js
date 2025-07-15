// Desestructuracion: es una sintaxis que permite extraer valores y asignar 
// valores a variables

myArray = [1,2,3,4];

let Desestructuracion = myArray[1];
console.log(Desestructuracion);

//sintaxis de arrays
let [value0,value1,value2,value3] = myArray;

console.log(value0);
console.log(value1);
console.log(value2);
console.log(value3);

let [value4,,,value7] = myArray;

//desesctructurar obetos se hacen con llaves
let objeto = {
    name:"jacinto",
    edad:43,
    email:"jacinto@gmail.com"
}

let {name,edad,email} = objeto;
//podemos cambiar el nombre original a otro nombre de variable
let {name:nombre} = objeto;
console.log(name);
console.log(nombre);

//PROPAGACION: tenemos un operador que sirve para propagar

let otroArray = [...myArray, 5,6]; //copia y añade

console.log(otroArray);

let otroArray2 = [...myArray, ...otroArray, 10,11,12];
console.log(otroArray2);

//no es un dato primitivo, es una estructura de dato

// 1. Array

//Declarar un array e inicializar
let myArray = ["Javier",49,"Madrid","desempleado"];
let myArray2 = new Array();
let myArray3 = [];

console.log(myArray);
console.log(myArray2);

//introducir dato en un array
myArray3 = ["Pedro"];
myArray3[1] = "Animal";
myArray3[2] = 234;
console.log(myArray3);

//METODOS COMUNES
/*introduce un elemento al final */ myArray3.push("ultimo");
console.log(myArray3);
/*borra un elemento al final y lo devuelve si quieres*/ myArray3.pop();
console.log(myArray3);

/*introduce un elemento al principio */ myArray3.unshift("primero");
console.log(myArray3);
/*borra un elemento al principio y lo devuelve si quieres */ myArray3.shift();
console.log(myArray3);

//length
console.log(`la longitude al array es: ${myArray3.length}`);
//clear: myarray=[];

//slice
myArray.push(37);
let myNewArray = myArray.slice(1,3);
console.log(`empieza desde el 1 y va hasta el 2: ${myNewArray}`);


//splice: eliminia los exteriores y se queda con el centro
let myNewArray2 = myArray.splice(1,2,"nuevo elemento");
console.log(myNewArray2);
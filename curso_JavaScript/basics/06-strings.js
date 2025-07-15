let myName = "Javier";
let greeting = "Hola " + myName;
console.log(greeting);
console.log(typeof greeting);
console.log(greeting.length);
console.log(greeting[0]);

//metodos comunes

console.log(greeting.toLocaleUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.indexOf("brais")); //si da menos -1 es que no ha encontrado
console.log(greeting.includes("hola"));
console.log(greeting.slice(2,10)); //filetea en dos partes
console.log(greeting.replace("Hola", "ey"));

//template literals

let message = `Hola, este es mi 
curso de JavaScript`;

//interpolacion

console.log(`${myName} eres un crack`);







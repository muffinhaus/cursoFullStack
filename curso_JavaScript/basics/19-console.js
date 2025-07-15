//console METHODS

console.log ("hola");

console.error("este es un mensaje de error");

console.error("error al conectarse a la base de datos",new Error("conexion fallida"));

console.warn("ESTO ES UNA ADVERTENCIA")

console.info("ESTO ES UNA ADEVERTENCIA");

let data = [
    ["nombre",37]
    ["sara",34]
]

let data2 = [
    {name:"nombre",edad:37},
    {name:"sara",edad:34}
]

console.table(data)
console.table(data2)

console.group("usuarios");
    console.log("primer nombre del grupo usuarios");
    console.log("segundo nombre del grupo usuarios");
console.groupEnd();

console.time("tiempo de eejecucion")

console.log("hola que tal");

console.timeEnd("tiempo de eejecucion")


// Loops o Bucles: repetimos varias veces un secuencia

// 1. Bucle FOR


let array = [];
for (let i = 0; i < 10; i++){
    array.push(i);
}

console.log(array);

let numbers = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 2. WHILE
let u = 4; 
while(u < 8){
    console.log(u);

    u++;

 }

 //do wile

 //for of: valores qeu sean iterables

 let objeto = ["javier","alvarez",49];



 for (const element of objeto) {
    console.log(element);
 } 

 let mySet = new Set(["lizzette","torres",31]);

  for (const element of mySet) {
    console.log(element);
 } 

 let myMap = new Map ([
    ["nombre","javi"],
    ["apellido","alvarez"],
    ["edad",49]
 ])

 for (const elemento of myMap){
    console.log(elemento);
 }

 //podemos imprimir letra a letra un string
 let nombre = "javier alvarez";
 for (letra of nombre ){
    console.log(letra);
 }

 //break y continue: BUENAS PRACTICAS

 for (i=0; i < 10; i++)
    {
    if (i == 5){
        
        continue;
        }
    

    else if (i == 7){
        break;
        
    }
        console.log(i)

    }



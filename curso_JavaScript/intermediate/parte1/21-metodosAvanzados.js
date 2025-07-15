//Assign

let persona = {nomre:"javier"}
let personaDetail = {age:32, email:"javi@gmail.com"}
let fullDetail = Object.assign(persona,personaDetail)
console.log(fullDetail)

//keys, values y entries
console.log(Object.keys(fullDetail))
console.log(Object.values(fullDetail))

console.log(Object.entries(fullDetail))


// Consumir un API

//JASON --> son objetos que tienen una clave y valor
//https://jsonplaceholder.typicode.com/

//feth actua como una promesa

// app.js
// 38-GET.js

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.json())) //transforma la respuesta a JSON
  .then(data => console.log(data)) //procesa los datos
  .catch(error => console.log("Error,error")) //captura errores


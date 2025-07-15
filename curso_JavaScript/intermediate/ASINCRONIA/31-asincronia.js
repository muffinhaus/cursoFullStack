// Asincronía en JavaScript

//  La asincronía en JavaScript es un modelo de programación que permite ejecutar
//  operaciones sin bloquear el hilo principal de ejecución, lo que es esencial para
//  manejar tareas que pueden tomar tiempo como peticiones a servidores, lectura de 
//  archivos, o temporizadores.


// Conceptos Clave de Asincronía

//     Modelo de Eventos (Event Loop): JavaScript usa un bucle de eventos para manejar
//     operaciones asíncronas

//     Callbacks: Funciones que se pasan como argumentos y se ejecutan después de 
//     completar una operación

//     Promesas (Promises): Objetos que representan el eventual resultado (éxito o
//     fracaso) de una operación asíncrona

//     Async/Await: Sintaxis más limpia para trabajar con código asíncrono

// Mecanismos de Asincronía en JavaScript
// 1. Callbacks (el enfoque más antiguo)
// javascript

function fetchData(callback) {
  setTimeout(() => {
    callback('Datos recibidos');
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Datos recibidos" después de 1 segundo
});

// 2. Promesas (ES6)
// javascript

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Datos recibidos');
      // o reject(new Error('Error al obtener datos'));
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 3. Async/Await (ES2017)
// javascript

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

// Event Loop: Cómo funciona la asincronía

// JavaScript es monohilo pero maneja la asincronía a través del event loop:

//     Las operaciones síncronas van a la call stack

//     Las operaciones asíncronas son delegadas a las APIs del navegador (o de Node.js)

//     Cuando completan, sus callbacks van a la callback queue

//     El event loop mueve los callbacks al call stack cuando éste está vacío

// Ejemplo práctico completo
// javascript

// Simulación de múltiples operaciones asíncronas
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: `Usuario ${id}` }), 500);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(['Post 1', 'Post 2']), 500);
  });
}

// Usando Promesas
getUser(1)
  .then(user => {
    console.log('Usuario:', user);
    return getPosts(user.id);
  })
  .then(posts => console.log('Posts:', posts))
  .catch(error => console.error(error));

// Usando Async/Await
async function loadData() {
  try {
    const user = await getUser(1);
    console.log('Usuario:', user);
    const posts = await getPosts(user.id);
    console.log('Posts:', posts);
  } catch (error) {
    console.error(error);
  }
}

loadData();

// // APIs Asíncronas del Navegador/Node.js

//     setTimeout/setInterval: Temporizadores

//     fetch: Peticiones HTTP

//     File API: Lectura de archivos en el navegador

//     fs.readFile: Lectura de archivos en Node.js

//     Event listeners: click, scroll, etc.

// Patrones Avanzados
// 1. Múltiples promesas simultáneas
// javascript

Promise.all([getUser(1), getUser(2)])
  .then(users => console.log('Todos los usuarios:', users))
  .catch(error => console.error(error));

//  Race (primera promesa que resuelve)
// javascript2.

Promise.race([getUser(1), getUser(2)])
  .then(firstUser => console.log('Primer usuario:', firstUser));

// 3. Async generators (ES2018)
// javascript

async function* asyncGenerator() {
  yield await getUser(1);
  yield await getUser(2);
}

(async () => {
  for await (const user of asyncGenerator()) {
    console.log(user);
  }
})();

// Buenas Prácticas

//     Evitar el "callback hell": Usar promesas o async/await

//     Siempre manejar errores: Usar .catch() o try/catch

//     No bloquear el event loop: Dividir tareas largas

//     Usar Promise.all para operaciones paralelas

// La asincronía es fundamental en JavaScript moderno, especialmente para aplicaciones web que interactúan con servidores, bases de datos, o realizan operaciones I/O.
// New chat
// AI-generated, for reference only
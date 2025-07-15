// 1. Crea  una funcion que retorne a otra funcion


// 2. Implementa una funcion currificada que multiplique 3 numeros
// 3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente
// 4. Crea una funcion createCounter() que reciba un valor inicial y retoner un objeto con metodos para increment(), decrement(), y getValue(), utiliznado un closure para mantener el estado
// 5. Crea una funcion sumManyTimes (multiplier, ...numbers) que primero sume todos los parametros Rest y luego multiplique el resultado multiplicar 
// 6. Crea un CallBack que se invoque con el resultado de la suma de todos los numeros que se le pasan a una funcion
// 7. Desarrolla un funcion parcial
// 8. Implementa un ejemplo que haga uso de Spread
// 9. Implementa un retorno implicito
// 10. Haz uso del this lexico 



//1. Crea una funcion que retorne a otra funcion
function createFunction() {
   return function(){
       console.log("Esta funcion retorna a otra funcion")}
}




// 2. Implementa una funcion currificada que multiplica dos numeros:
   // Una función currying es una función de multiples argumentos que se transforma en una secuencia de
   // funciones de un solo argumento
       //Caracteristicas:
           // 1. Descomposcion: cada argumentos se pasa en una llamada separada
           // 2. Flexibilidad: permite crear funciones parciales
           // 3. ¿por que usarlo?: reutilizar codigo con funciones especificas a partir de generales,
           // facilita combinar funciones (pipe o compose) y POSPONER la ejecucion hasta tener todos los argumetos
           
const multiplica = (a,b,c) => a * b * c /* funcion normal no currificada*/


const currying = (x) => (y) => (z) => x * y * z


console.log(currying(2)(3)(4))


//3. Desarrollar una funcion recursiva que calcule la potencia de un numero elevado a su exponente
   // Una funcion RECURSIVA es ua funcion que se llama a si misma ya sea directamente o indirectamente, para resolver un
   //problema dividiendo en subproblemas mas pequeños del mismo tipo
       //Caracteristicas:
           //1. Caso base o condicion que detiene la recursion para evitar un bucle infinito
           //2. Caso recursivo: parte donde la funcion se llama a sí misma
           //3. ¿por qué?: codigo mas claro y conciso para problemas de corte recursivo, divide y venceras


function potencia (base,exponente) {
  
   if (exponente == 0) {return 1}
   else if (exponente == 1) {return base}
  
   //base ^ exponente = base * base ^ (exponente-1)
   else{ return base * potencia (base, exponente -1 )}   
   }
  


console.log(potencia(2,4))


//   4. Crea un funcion createCounter() que reciba un valor inicial y retorne un objeto con metodos increment(), decrement() y getValue()
//      utilizando un closure para mantener el estado


//      Una función CLOSURE o clausura es una función que recuerda y accede a variables de su ambito lexico (scope) incluso despues de que se
//      ambito haya terminado de ejecutarse. Esto permite crear funciones con estado PRIVADO y es fundamental para tecnicas de
//      ENCAPSULAMIENTO y la creacion de funciones factory
//         
//          Caracteristicas:
//          A. Accede a variables externas de otras funciones
//          B. Mantiene el estado de las variables
//          C. Privacidad, permite emular variables privadas como en POO




function createCount() {
   let count = 0; //variable inicial privada dentro de closure que ira cambiando a cada llamada
   //la funcion interna puede acceder a variables externas el count
   return function () {
       count++;
       return count;
      
    }
  
}


function createCounter(initialValue = 0)
{
   let count = initialValue; //estado privado en


   return {
      
       increment: function () {
           count++;
           return count;
          
          
       },
       decrement: function () {
           count--;
           return count;
          
       },
       obtenValue: function () {
           return count;
          
       }
   }


  
}


const contador = createCounter(0)
console.log(contador.increment())
console.log(contador.increment())
console.log(contador.increment())
console.log(contador.decrement())
console.log(contador.obtenValue())


// 5. Crea una funcion sumManyTimes (multiplier, ...number) que primero sume todos los numeros (usando parametros Rest)
//    y luego multiplique el resultado por multiplier
//    
//    Un parametro REST (...) permite representar un numero indefinido de argumentos com un array dentro de un funcion. Es util
//    cuando queremos trabajar con multiples argumentos sin tener que definirlos uno por uno


//      Se usa cuando no sabemos CUANTOS parametros van a ir en una funcion


function sumManyTimes (...numbers){
           let result = 0
           for (let numeros of numbers){
               result += numeros
           }
           return result
              
          
   }


console.log(sumManyTimes(1,2,3,4))


// 6. Crea una funcion CALLBACK que se invoque con el resultado de la suma de todos los numeros que se le pasan a una funcion


//    Una funcion CALLABACK o la llamada de vuelta es una funcion que se pasa como argumento a otr funcion y que se ejecuta
//    despues de que se complete una operacion, generalmente asincrona (como una peticion HTTP, lectura de archivos,temporizadores, etc)
//    Los callbacks son fundamentales en JavaScript debido a su naturaleza asíncrona y no bloqueante


//      Caracteristicas:
//          A. Se pasan como argumentos a otras funciones
//          B. Se ejecutan despues de un evento o proceso (ej: una espera, una respuesta de servidor

function sumas(...numbers){
    let resultado = 0;
    for (let numeros of numbers){
        resultado += numeros;
    }
    return resultado;
}




function colbak (data,callback){
    const resul = sumas(...data) //primero hago esto y cuando ha terminado lo siguiente
    callback(resul) // Aqui una vez que tengo los datos los muestro
}

function displayResult (resultado){
    console.log(`El resultado es: ${resultado}`)
}

colbak([1,2,3],displayResult)


// 7. Desarrolla una funcion parcial

//    En JavaScript, una función parcial es una función que se crea al "pre-llenar" 
//    algunos de los argumentos de una función existente, dejando otros argumentos para
//    ser proporcionados más tarde. Esto es una forma de aplicación parcial de funciones.

//    La aplicación parcial significa fijar algunos parámetros de una función y producir
//    otra función que acepte los parámetros restantes.

function suma(a,b,c,){
    return a + b + c
}

function sumaParcial(a){
    return function(b,c){
        return suma(a,b,c) //aqui llamamos a otra funcion que resuelva
    }
}

const sumaTres = sumaParcial(5); 
console.log(sumaTres(3,2));

function sumaParcial2(a){
    return function(b,c){
        return a + b + c //aqui resolvemos directamente
    }
}

const sumaCuatro = sumaParcial(4)
console.log(sumaCuatro(3,2))

// 8. Implementa un ejemplo que haga uso de Spread

//    El operador spread (representado por tres puntos ...) es una característica 
//    introducida en ES6 (ES2015) que permite expandir elementos iterables como arrays,
//    objetos o cadenas en lugares donde se esperan múltiples elementos o propiedades.

const nombre = ["Javier"]
const apellidos = ["Apellidos"]
const nombreCompleto = [...nombre, ...apellidos]
const edad = [...nombre, "49"]
console.log(nombreCompleto)
console.log(edad)

const objeto = {nombre:'javier'}
const objetoA = {...objeto,apellidos:"alvarez"}
console.log(objetoA)

// 9. Implementa un retorno implicito
//    El retorno implícito es una característica de JavaScript que permite omitir 
//    la palabra clave return en ciertas situaciones, especialmente cuando se usan 
//    funciones flecha (arrow functions) con cuerpos concisos.

//           1. En Arrow Functions (Funciones Flecha)
//              Cuando una arrow function tiene un cuerpo de una sola expresión, 
//              el valor de esa expresión se devuelve automáticamente sin necesidad 
//              de usar return:

const sumas43 = (a,b) => {return a + b}
const sumass = (a,b) => a + b

// 10. Haz uso del this lexico 

//      el this lexico se refiere al comportamiento del valor de this en funciones flecha
//      a diferencia de las funciones tradicionales. las arrows functions no tienen su
//      propio this, sino que heredan el valor de this del contexto lexico (el ambito
//      donde fueron definidas)


//funcion normal
const objetillo = {
    nombre:"objetillo",
    metodo: function(){
        console.log(this.nombre); //this es el objeto que llama al metodo
    }
}

objetillo.metodo();


const objetos = {
    nombre:"objeto",
    metodo: function(){
        const funcionInterna = () => {
            console.log(this.nombre); //this se hereda el ambito padre
        };
        funcionInterna(); //hayq ue llamar a la funcion para que se ejecute el this
    }
};

objetos.metodo()


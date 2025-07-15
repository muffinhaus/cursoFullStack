// Proxy en JavaScript

// Un Proxy en JavaScript es un objeto especial que permite crear un "intermediario" o
//  "envoltorio" para otro objeto, permitiendo interceptar y redefinir operaciones 
// fundamentales para ese objeto (como lectura de propiedades, asignación,
//  invocación de funciones, etc.).

// Características principales de los Proxies

//     Metaprogramación: Permite modificar el comportamiento fundamental de objetos

//     Interceptores (traps): Puede capturar diversas operaciones

//     Transparente: Desde el exterior, el Proxy se comporta como el objeto original

//     Reversible: Puedes acceder al objeto original cuando lo necesites

// Sintaxis básica
// javascript

const proxy = new Proxy(target, handler);

    // target: Objeto original que queremos envolver

    // handler: Objeto que define los "traps" (interceptores) para las operaciones

// Ejemplo básico
// javascript

const objetoOriginal = { nombre: "Juan" };

const handler = {
  get(target, propiedad) {
    console.log(`Accediendo a la propiedad: ${propiedad}`);
    return target[propiedad];
  }
};

const prx = new Proxy(objetoOriginal, handler);

console.log(proxy.nombre); 
// Muestra: "Accediendo a la propiedad: nombre"
// Devuelve: "Juan"

// Traps comunes (interceptores)
// Trap	Descripción	Ejemplo de uso
// get	Intercepta lectura de propiedades	Validación de acceso
// set	Intercepta asignación de propiedades	Validación de datos
// has	Intercepta el operador in	Ocultar propiedades
// deleteProperty	Intercepta delete	Prevenir eliminación
// apply	Intercepta llamadas a funciones	Decoración de funciones
// construct	Intercepta new	Validación de instancias
// Ejemplo avanzado: Validación con Proxy
// javascript

const validador = {
  set(target, propiedad, valor) {
    if (propiedad === 'edad') {
      if (typeof valor !== 'number') {
        throw new TypeError('La edad debe ser un número');
      }
      if (valor < 0 || valor > 120) {
        throw new RangeError('Edad no válida');
      }
    }
    target[propiedad] = valor;
    return true; // Indica éxito
  }
};

const persona = new Proxy({}, validador);

persona.nombre = "Ana"; // Funciona
persona.edad = 30;      // Funciona
// persona.edad = "treinta"; // TypeError
// persona.edad = 150;      // RangeError

// Casos de uso comunes

//     Validación de datos: Controlar qué valores se asignan a propiedades

//     Observación de cambios: Implementar reactividad (como en Vue 3)

//     API virtual: Crear propiedades que no existen físicamente

//     Control de acceso: Implementar permisos y restricciones

//     Memoización: Cachear resultados de funciones

//     Depuración: Registrar accesos a propiedades

// Ejemplo: API virtual con Proxy
// javascript

const apiVirtual = {
  get(target, propiedad) {
    if (!(propiedad in target)) {
      // Simula una propiedad virtual basada en un patrón
      if (/^saludo[A-Z]/.test(propiedad)) {
        const idioma = propiedad.replace('saludo', '').toLowerCase();
        return () => `Hola en ${idioma}`;
      }
    }
    return target[propiedad];
  }
};

const prox = new Proxy({}, apiVirtual);

console.log(proxy.saludoES()); // "Hola en es"
console.log(proxy.saludoEN()); // "Hola en en"

// Limitaciones y consideraciones

//     No es transpilable: No puede ser convertido a ES5

//     Rendimiento: Operaciones a través de Proxy son más lentas que accesos directos

//     Compatibilidad: No funciona en navegadores muy antiguos (pero sí en todos los modernos)

//     Transparencia: Algunas operaciones como Object.keys() pueden comportarse diferente

// Ejemplo completo: Sistema de logging
// javascript

const crearLogger = (objeto) => {
  return new Proxy(objeto, {
    get(target, propiedad) {
      console.log(`Leyendo propiedad: ${propiedad}`);
      return Reflect.get(target, propiedad);
    },
    set(target, propiedad, valor) {
      console.log(`Escribiendo ${propiedad}: ${valor}`);
      return Reflect.set(target, propiedad, valor);
    }
  });
};

const usuario = crearLogger({
  nombre: 'Carlos',
  edad: 28
});

usuario.nombre;    // Log: "Leyendo propiedad: nombre"
usuario.edad = 29; // Log: "Escribiendo edad: 29"

// Los Proxies son una herramienta poderosa para metaprogramación en JavaScript, permitiendo crear comportamientos personalizados para objetos de manera elegante y mantenible.
// New chat
// AI-generated, for reference only


// ejemplos mouredev

const pruoxy = {
    get(target,property){
        console.log(`Se esta accediendo a ${property}`)
        return target[property]
    },
    set(target, property,value){
        if (property === "balance" && value < 0){
            throw new Error ("el saldo es negativo")
        }
        target[property] = value
    }

}
class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}



const account = new Proxy(new BankAccount(100),pruoxy)
console.log(account.balance)


account.balance = -10;
console.log(account.balance)

// Singleton en JavaScript

// El Singleton es un patrón de diseño creacional que garantiza que una clase 
// tenga sólo una instancia y proporciona un punto de acceso global a dicha instancia.
// Características principales del Singleton

//     Única instancia: Impide la creación de múltiples instancias de una clase.

//     Acceso global: Proporciona un punto de acceso conocido a la instancia.

//     Inicialización perezosa: La instancia se crea sólo cuando se necesita por primera vez.


class Session{
    constructor(name){
        this.name = name;
    }
}

const sesion1 = new Session("Brais")
console.log(sesion1)

// Implementación moderna con módulos (recomendada)
// singleton.js
class SingletonClass {
  constructor() {
    this.propiedad = "valor";
  }
  
  metodo() {
    console.log("Método del singleton");
  }
}

const instance = new SingletonClass();
Object.freeze(instance); // Evita modificaciones

export default instance;

// app.js
import singleton from './singleton.js';

singleton.metodo();
console.log(singleton.propiedad);

// Ejemplo práctico: Logger Singleton

class Logger {
  constructor() {
    if (!Logger.instance) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }
  
  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }
  
  printLogCount() {
    console.log(`Número de logs: ${this.logs.length}`);
  }
}

// Uso:
const logger1 = new Logger();
logger1.log("Primer mensaje");

const logger2 = new Logger();
logger2.log("Segundo mensaje");

logger1.printLogCount(); // Número de logs: 2
console.log(logger1 === logger2); // true
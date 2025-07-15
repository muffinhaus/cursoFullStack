// Mixins en JavaScript

// Un mixin es un patrón de diseño en JavaScript que permite agregar funcionalidad 
// a clases u objetos sin usar herencia tradicional. Los mixins son una forma de 
// composición de comportamiento que permite compartir funcionalidad entre múltiples
//  clases u objetos de manera flexible.
// Características principales de los mixins

//     No son una jerarquía de herencia: No crean relaciones padre-hijo como la herencia clásica.

//     Son reutilizables: Un mismo mixin puede ser aplicado a múltiples clases.

//     Composición sobre herencia: Favorecen la composición de funcionalidades en lugar de la herencia profunda.

//     Evitan la duplicación de código: Permiten compartir métodos entre clases no relacionadas.

// Implementación de mixins en JavaScript
// Forma clásica (pre-ES6)
// javascript

// Definición del mixin
const loggerMixin = {
  log(message) {
    console.log(`LOG: ${message}`);
  },
  error(message) {
    console.error(`ERROR: ${message}`);
  }
};

// Aplicación a una clase
function applyMixin(targetClass, mixin) {
  Object.assign(targetClass.prototype, mixin);
}

class Usuario {}
applyMixin(Usuario, loggerMixin);

const use = new Usuario();
user.log("Usuario creado"); // LOG: Usuario creado

// Con clases ES6+
// javascript

// Mixin como función que recibe una clase y la extiende
const Auditable = BaseClass => class extends BaseClass {
  constructor(...args) {
    super(...args);
    this.auditLog = [];
  }
  
  auditar(accion) {
    this.auditLog.push({
      accion,
      fecha: new Date()
    });
  }
  
  obtenerHistorial() {
    return this.auditLog;
  }
};

class Producto {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Aplicamos el mixin
class ProductoAuditable extends Auditable(Producto) {}

const producto = new ProductoAuditable("Laptop");
producto.auditar("Producto creado");
console.log(producto.obtenerHistorial());

// Con Object.assign (para objetos)
// javascript

const canSwim = {
  swim() {
    console.log(`${this.name} está nadando`);
  }
};

const canFly = {
  fly() {
    console.log(`${this.name} está volando`);
  }
};

class Duck {
  constructor(name) {
    this.name = name;
  }
}

// Aplicamos los mixins al prototipo
Object.assign(Duck.prototype, canSwim, canFly);

const donald = new Duck("Donald");
donald.swim(); // Donald está nadando
donald.fly();  // Donald está volando

// Casos de uso comunes para mixins

//     Funcionalidad transversal: Logging, auditoría, persistencia

//     Habilidades/comportamientos: Objetos que pueden nadar, volar, etc.

//     Utilidades compartidas: Validación, serialización

//     Extensión de librerías: Añadir funcionalidad a clases de terceros

// Ventajas de los mixins

//     Evitan la herencia múltiple problemática: JavaScript no soporta herencia múltiple, pero los mixins ofrecen una alternativa.

//     Mantenimiento más fácil: Cambios en un mixin afectan a todas las clases que lo usan.

//     Mayor flexibilidad: Puedes combinar múltiples mixins como bloques de construcción.

//     Mejor organización del código: Separa claramente las responsabilidades.

// Ejemplo avanzado con múltiples mixins
// javascript

// Definición de varios mixins
const Identifiable = Base => class extends Base {
  setId(id) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
};

const Timestampable = Base => class extends Base {
  setTimestamps() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  updateTimestamp() {
    this.updatedAt = new Date();
  }
};

// Clase base
class User {
  constructor(name) {
    this.name = name;
  }
}

// Aplicamos los mixins
class EnhancedUser extends Timestampable(Identifiable(User)) {
  constructor(name) {
    super(name);
    this.setTimestamps();
  }
}

const user = new EnhancedUser("Alice");
user.setId(123);
console.log(user.getId()); // 123
console.log(user.createdAt); // Fecha actual

// Los mixins son una poderosa herramienta en JavaScript para compartir comportamiento entre componentes sin crear acoplamientos fuertes o jerarquías de herencia complejas.
// New chat
// AI-generated, for referen
// Métodos de instancia

// Los métodos de instancia son los más comunes y operan sobre una instancia
//  específica de una clase

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método de instancia
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona1 = new Persona('Juan');
persona1.saludar(); // "Hola, soy Juan"

// Métodos estáticos

// Los métodos estáticos pertenecen a la clase misma, no a las instancias:

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método estático
  static crearAnonimo() {
    return new Persona('Anónimo');
  }
}

// Llamada al método estático
const anonimo = Persona.crearAnonimo();
console.log(anonimo.nombre); // "Anónimo"
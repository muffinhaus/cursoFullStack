// Polimorfismo en JavaScript

// El polimorfismo es uno de los cuatro pilares fundamentales de la programación 
// orientada a objetos (junto con encapsulación, herencia y abstracción).
//  En JavaScript, el polimorfismo se refiere a la capacidad de objetos de 
// diferentes tipos de responder al mismo mensaje (llamada a método) de formas 
// distintas.

// Concepto clave

// "Una interfaz, múltiples implementaciones": Diferentes objetos pueden implementar 
// el mismo método o propiedad de maneras diferentes.

// Tipos de polimorfismo en JavaScript
// 1. Polimorfismo por herencia (métodos sobrescritos)
// javascript

class Animal {
  hacerSonido() {
    console.log("Sonido genérico de animal");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("Guau guau!");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("Miau!");
  }
}

const animales = [new Animal(), new Perro(), new Gato()];

animales.forEach(animal => animal.hacerSonido());
/*
Salida:
Sonido genérico de animal
Guau guau!
Miau!
*/

// 2. Polimorfismo por interfaces (en JavaScript se simula con duck typing)

// JavaScript no tiene interfaces nativas, pero el concepto se aplica por la forma dinámica del lenguaje:
// javascript

class Pajaro {
  volar() {
    console.log("Volando alto!");
  }
}

class Avion {
  volar() {
    console.log("Despegando hacia el destino");
  }
}

function hacerVolar(objetoVolador) {
  objetoVolador.volar();
}

hacerVolar(new Pajaro());  // "Volando alto!"
hacerVolar(new Avion());   // "Despegando hacia el destino"

// 3. Polimorfismo paramétrico (usando mismos métodos con diferentes tipos de parámetros)
// javascript

class Calculadora {
  sumar(a, b) {
    return a + b;
  }
}

const calc = new Calculadora();
console.log(calc.sumar(2, 3));       // 5
console.log(calc.sumar("Hola", " mundo")); // "Hola mundo"

// Características del polimorfismo en JavaScript

//     Duck typing: "Si camina como pato y suena como pato, entonces es un pato". JavaScript no verifica tipos estrictamente.

//     Flexibilidad: Los objetos pueden responder a métodos aunque no hereden de una clase común.

//     Sobreescritura de métodos: Las clases hijas pueden redefinir métodos de las clases padre.

// Ejemplo avanzado
// javascript

class Forma {
  calcularArea() {
    throw new Error("Método abstracto: debe ser implementado");
  }
}

class Circulo extends Forma {
  constructor(radio) {
    super();
    this.radio = radio;
  }
  
  calcularArea() {
    return Math.PI * this.radio ** 2;
  }
}

class Cuadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }
  
  calcularArea() {
    return this.lado * this.lado;
  }
}

const formas = [new Circulo(5), new Cuadrado(4)];

formas.forEach(forma => {
  console.log(`Área: ${forma.calcularArea().toFixed(2)}`);
});
/*
Área: 78.54
Área: 16.00
*/

// Beneficios del polimorfismo

//     Código más flexible y extensible: Puedes añadir nuevos tipos sin modificar el código existente.

//     Reducción de condicionales: Evita largas cadenas de if/else o switch.

//     Principio de sustitución de Liskov: Los objetos de una subclase pueden reemplazar a los de la superclase.

//     Código más limpio y mantenible: Las operaciones se definen en términos de interfaces abstractas.

// JavaScript implementa el polimorfismo de manera más flexible que los lenguajes fuertemente tipados, aprovechando su naturaleza dinámica y el duck typing.
// New chat

//OBJETOS
//  Un objeto en JavaScript es una estructura de datos fundamental que permite
//  almacenar colecciones de pares clave-valor (propiedades) y funcionalidades 
//  (métodos). Es la base de la programación orientada a objetos en JS.

// Características Clave

    // Estructura: Colección no ordenada de propiedades

    // Flexibilidad: Puede modificarse dinámicamente

    // Versatilidad: Puede contener datos y funciones (métodos)

    // Prototipado: Hereda características de otros objetos mediante la cadena de prototipos
    // Sintaxis


// Forma literal (recomendada)
const persona = {
  nombre: 'María',
  edad: 30,
  profesion: 'Ingeniera',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

// Acceso a propiedades
console.log(persona.nombre); // 'María'
persona.saludar(); // 'Hola, soy María'

// Otra forma de acceso
console.log(persona['edad']); // 30



// TIPOS DE PROPIEDADES
    // Propiedades de datos: Almacenan valores directamente

    const o = {
    nombre: 'Juan' // Propiedad de dato
    };

    // Propiedades accesorias: Usan getters y setters

        const ob = {
    _nombre: '',
    get nombre() {
        return this._nombre;
    },
    set nombre(valor) {
        this._nombre = valor.toUpperCase();
    }
    };

// Creación de Objetos

    // 1. Forma literal(la más común)

    const coche = {
    marca: 'Toyota',
    modelo: 'Corolla'
    };

    // 2. Constructor Object()

        function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    const juan = new Persona('Juan', 30);

    // 4. Con Object.create()
    const prototipo = {
  saludar() {
    console.log('Hola!');
    }
    };

    const obje = Object.create(prototipo);
    obj.saludar(); // 'Hola!'


// Métodos Importantes de Object

    // 1. Object.keys()
        // Devuelve un array con las claves enumerables del objeto

        const personas  = {nombre: 'Ana', edad: 25};
        console.log(Object.keys(personas)); // ['nombre', 'edad']

    // 2. Object.values()
        // Devuelve un array con los valores del objeto
        console.log(Object.values(persona)); // ['Ana', 25]

    // 4. Object.assign()

        // Copia propiedades de un objeto a otro

        const destino = { a: 1 };
        const origen = { b: 2 };
        Object.assign(destino, origen);
        console.log(destino); // { a: 1, b: 2 }


    // 5. Object.freeze()
        // Hace que un objeto sea inmutable
        const obj = { prop: 42 };
        Object.freeze(obj);
        obj.prop = 33; // Error en modo estricto o no tendrá efecto
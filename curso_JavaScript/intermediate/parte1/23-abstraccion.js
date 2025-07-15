// Abstracción en JavaScript

// La abstracción en JavaScript (y en programación en general) es un concepto 
// fundamental de la programación orientada a objetos que consiste en ocultar 
// los detalles complejos de implementación y mostrar sólo las características
//  esenciales de un objeto o función.

// Características de la abstracción en JavaScript

//     Ocultamiento de complejidad: Mostrar sólo lo necesario al usuario o desarrollador 
//     que usa tu código.

//     Enfoque en la interfaz: Proporcionar una interfaz clara para interactuar con la
//     funcionalidad sin preocuparse por cómo está implementada internamente.

//     Simplificación: Reducir la complejidad al trabajar con componentes más grandes


// Ejemplos de abstracción en JavaScript
//     1. Funciones como abstracción


// Detalles complejos ocultos dentro de la función
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// El usuario sólo necesita saber qué parámetros pasar
let area = calcularAreaRectangulo(5, 10);

// 2. Clases y objetos


class Televisor {
    constructor() {
        this.encendido = false;
        this.volumen = 20;
        this.canal = 1;
    }
    
    encender() {
        this.encendido = true;
        console.log("TV encendida");
    }
    
    cambiarCanal(canal) {
        this.canal = canal;
        console.log(`Cambiado al canal ${canal}`);
    }
    
    // Los detalles internos de cómo funciona el TV están ocultos
}

let miTV = new Televisor();
miTV.encender();
miTV.cambiarCanal(5);

// 3. Módulos (ES6)


// moduloMatematicas.js
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

// app.js
import { sumar } from './moduloMatematicas';
let resultado = sumar(5, 3); // No necesito saber cómo está implementado sumar()

// Beneficios de la abstracción

    // Código más mantenible: Los cambios internos no afectan el uso externo.

    // Reducción de complejidad: Permite pensar en términos de componentes en lugar de detalles.

    // Reutilización de código: Las abstracciones bien diseñadas pueden usarse en múltiples contextos.

    // Mejor organización: Facilita la división del trabajo en equipos de desarrollo.

// La abstracción es uno de los pilares de la programación orientada a objetos junto con encapsulación, herencia y polimorfismo.


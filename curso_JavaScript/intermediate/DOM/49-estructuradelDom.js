// Interfaz de programacion
// de Document Object Model

// Es un arbol de jerarquia com NODOs

//  -- Selecion de elementos

// -- Metodos basicos

    // getElementByID

    // variable nativa (document) para acceder
    const myElment= document.getElementById("id") //asociado a un unico elemento

    const myClassElement = document.getElementsByClassName("class")
 
    const myTagNameElement = document.getElementsByTagName("tag")

// metodos modernos con selector css

document.querySelector(".paragraph")
document.querySelectorAll(".paragraph") //devuelve ua lista de nodos


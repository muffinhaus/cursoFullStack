// Trabajr con clases css

const box = document.querySelector(".box")

    // add otra clase a esa clase
    box.classList.add("selected") 
    box.classList.remove("selected")
    box.classList.toggle("selected") //si NO existe la a;ade -- si EXiste la borra

    const boton = document.querySelector("button")
    boton.style.backgroundColor = "blue" //podemos cambiar el estilo directamente
    
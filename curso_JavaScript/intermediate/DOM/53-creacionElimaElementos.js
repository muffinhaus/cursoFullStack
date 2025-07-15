// Creacion de elementos

const newParapragh = document.createElement("p") //parrafo

newParapragh.textContent = "este es un nuevo parrafo creado desde js"

newParapragh.style.padding = "8px"

container.appendChild(newParapragh) //a;adimos un nuevo hijo a ese contenedor


const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")
newItem.textContent = "nuevo elemento"

// Insertar en un lugar concreto

const secondItem = itemsList.children[1]
secondItem.insertBefore(newItem,secondItem)

// Operaciones mas m
// modernas

itemsList.append(newItem) //final
itemsList.prepend(newItem) //principio
secondItem.before(newItem)
secondItem.after(newItem)

//Eliminar elementos creados

newParapragh.remove()
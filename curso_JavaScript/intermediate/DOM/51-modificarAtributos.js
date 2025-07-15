// -- modificar atributos


const link = document.querySelector("a") //devuelve el primer enlace que encuentra
/
// accedemos al atributo
link.getAttribute("href")

//modificar el atributo

const setatributo = link.setAttribute("href","htpps://www.google.com")

//Comprobar si tiene un atributo

const hasTarget = link.hasAttribute("target")

//eliminar atributo
link.removeAttribute("target")
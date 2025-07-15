// eventos

const sendButton = document.querySelector("#send")

function showMessage() {
    alert("clic")
}


sendButton.addEventListener("clic", showMessage)
sendButton.addEventListener("clic", ()=> {alert("clic por favor")})


//Eventos comunes

// pagina cargada
document.addEventListener("DOMContentLoader", () => {alert("pagina cargada")})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "blue"
})

const form =  document.querySelector("form")

form.addEventListener("submit", (event) => {
    //codigo
})


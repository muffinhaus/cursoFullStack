// encadenamiento de promesas


const promise = new Promise((resolve,reject) => {
    setInterval(() => {
        const ok = false
        if(ok){resolve("operacion exitosa")}
        else{reject("se ha producido un error")}
    }, 4000) })




function step1Promise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("paso 1 promesa completado")
            resolve()
        }, 1000);

    })
}



function step2Promise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("paso 2 promesa completado")
            resolve()
        }, 1000);

    })
}

function step3Promise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("paso 3 promesa completado")
            resolve()
        }, 1000);

    })
}

step1Promise()
.then(step2Promise)
.then(step3Promise)
.then(() => {
    console.log("todos los pasos con promesa completados")
})
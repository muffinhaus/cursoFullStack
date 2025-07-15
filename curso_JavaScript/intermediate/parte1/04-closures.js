// Closures

function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(`contador: ${counter}`)
    }
    
}
const counter = createCounter()
counter()
counter()

//permite encapsular datos llamando varias veces sin que se pierda el contexto 
//y sin contaminar el entorno global


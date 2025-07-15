// --async/await


function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))}

async function process ()
 {
    console.log("inicio del programa")
    await wait(5000)
    console.log("final del programa")
    
}


process()


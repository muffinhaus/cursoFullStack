// uso de async/await

// para que funcion la consola hay que añadir el siguiente codigo jason

/*

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "node",
            "request": "launch",
            "name": "Debug Current File",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "console": "integratedTerminal",
            //codigo a insertar para que funcione
            "runtimeArgs": ["--no-warnings", "--experimental-fetch"], 
            "program": "${file}"
        }
    ]
}
*/

async function getPosts(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)}
    catch (error){console.log("Error",error)}
}

getPosts()
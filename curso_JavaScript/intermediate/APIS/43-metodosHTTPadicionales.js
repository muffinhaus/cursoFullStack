// PATCH: actualizar un recurso
// OPTIONS: que metodos estan disponibles

async function partialPostUpdate(){
    try{

        //creamos un objetos que vamos a subir
        /*const newPost = {
            userId: 1,
            title:"mi primer post",
            body:"este es cuerpo de mi post"
        }
        NO HACER FALTA PORQUE SOLO QUEREMOS ACTUALIZAR
        */
        //cambiariamos el numero de postporque ya noseria el mismo
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/posts10",
            {
            method:"PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            //Transformo el objeto a JSON
            body: JSON.stringify({title:"este seria el nuevo titulo del post"})
        })

        const data = await response.json()
        console.log(data)

    }catch(error){console.log("Error",error)}
}

createPost()
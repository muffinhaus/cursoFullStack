//solicitud post: insertamos un post

async function createPost(){
    try{

        //creamos un objetos que vamos a subir
        const newPost = {
            userId: 1,
            title:"mi primer post",
            body:"este es cuerpo de mi post"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            //Transformo el objeto a JSON
            body: JSON.stringify(newPost)
        })

        const data = await response.json()
        console.log(data)

    }catch(error){console.log("Error",error)}
}

createPost()
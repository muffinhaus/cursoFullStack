fetch("https://jsonplaceholder.typicode.com/javier")
.then(response => {console.log(response.status)})
.catch(error => {console.log("Error",error)})

fetch("https://jsonplaceholder.typicode.com/javier")
    .then(response => {
        if (!response.ok) {
            throw Error (`Status HTTP: ${response.status}`)}
        
        return response.json()
        })

.catch(error => {console.log("Error",error)})
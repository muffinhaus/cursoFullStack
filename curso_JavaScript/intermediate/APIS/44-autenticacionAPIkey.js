// el 99% tenemos algun metodo de autenticacion
// no podemos entrar en cualquier web como antes

//Autenticacion mediante API key

  

 async function gatos() {
 const apiKey = "live_Dpp4B1IK789PoCLAXjmt0cBdqU4WBm1weuynjIRCBRbEcLgQN0bVX8hQbrLBfwgu"
 const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`   
    
 try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
 }catch(error){console.log("error",error)}
 }

 gatos()
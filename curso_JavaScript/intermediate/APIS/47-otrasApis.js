async function getPokemon(pokemon) {
//  const apiKey = "live_Dpp4B1IK789PoCLAXjmt0cBdqU4WBm1weuynjIRCBRbEcLgQN0bVX8hQbrLBfwgu"
 const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`   

 try{
    const response = await fetch(url)
    const data = await response.json()
    console.log(`habilidades de ${data.name}`)
    data.abilities.forEach(ability => {console.log(ability.ability.name)
        
    });
 }catch(error){console.log("error",error)}
 }

 getPokemon("pikachu")
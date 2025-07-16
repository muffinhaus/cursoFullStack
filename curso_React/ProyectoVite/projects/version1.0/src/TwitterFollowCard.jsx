
import { useState } from "react" //utilidades para dotar de muchas funcionalidades


export function TwitterFollowCard ({userName,name}) {

    //nunca jamas se modifica la prop directamente, se crea una variable

    //le pasamos los atributo a la funcion para que cambie el tweet card
    //en funcion del usuario


/*    cont state = useState(false)
//comprobamos el estado
//nos devuelve dos valores
const isFollowing = state[0]
const setIsFollowing = state[1]*/

const [isFollowing,setIsFollowing] = useState(false)
//cuando hagas click cambiamos el valor de isfollowing, esta
//funcion se la pasamos al boton abajo
const handleClick = () => {
    setIsFollowing(!isFollowing)
}



const imageSrc = `https://unavatar.io/${userName}`

const text = isFollowing ? 'Siguiendo' : "Seguir"

const buttonClassName = isFollowing 
? "btn btn-outline-primary"
: "btn-primary"

    return (
        //hay que estilar como si fueran objetos no en linea, pero
        //esta no es la forma correcta, hay que hacerlo a parte como siempre
        //<article style={{display:'flex', alignItems:'center', color:'#fff'}}>

        //vamos a porner clases que en jsx se llaman classNames
         <article className="container mt-3">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-2">
            <img
              src={imageSrc}
              className="img-fluid rounded-start"
              alt={`Avatar de ${userName}`}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text text-muted">@{userName}</p>
            </div>
          </div>
          <div className="col-md-3 text-end pe-3">
            <button className={buttonClassName} onClick={handleClick}>
              <strong>{text}</strong>
            </button>
          </div>
        </div>
      </div>
    </article>
        


            


    )

}

// el concepto de children o envolver comoponentes
// se utiliza children cuando quieres que sea muy extensible
 
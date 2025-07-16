import React, { StrictMode } from 'react'
import './MyApp.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import { useState } from "react" //utilidades para dotar de muchas funcionalidades


//vamos meter componente dentro deotro compoentne

export function MyApp() {



  const user = {
    userName: 'midudev',
    name: 'Javier Alvarez de la Peña',
    
  };

const user2 = {
    userName: 'antonio',
    name: 'Antonio La Piedra Fernandez'
}

  return (
    //envolvemos elementos para que sean reutilizables
    <div className='reel'>
    <TwitterFollowCard {...user} />
    <TwitterFollowCard {...user2} />
    <TwitterFollowCard userName="mdo" name="federico la puerta" isFollowing={true}></TwitterFollowCard>


    </div>
  );
}

//EL COMPONENTE ES LA FACTORIA DE ELEMENTOS
//los elementos son los que qeu renderizan


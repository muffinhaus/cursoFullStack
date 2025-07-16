
import { useState } from "react" //utilidades para dotar de muchas funcionalidades

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import './MyApp.css'
import {MyApp} from '/src/MyApp.jsx'


import { TwitterFollowCard } from '/src/TwitterFollowCard.jsx'
 

const root = createRoot(document.getElementById('root')) //creamos dentro este id


// elcomponente se crea en una app aparte: MyApp
// este componente es reutilizable porque es un componente creado en la
// MyApd.jsx

root.render(
  <React.StrictMode>  
    <MyApp  />
</React.StrictMode>
)


  
import "./App.css";
import FormularioConLista from "./components/FormularioConLista.jsx";
// import React, { useEffect, useState } from 'react';
// import { getInscripciones, addInscripcion } from './api';
//importandolos modulos de firebase
import appFirabase from "./credenciales.js";
import {getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(appFirabase)

//importar nuestros componentes 
import Login from "./components/login.jsx";
import Home from "./components/Home.jsx";
import { useState } from "react";


function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) =>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else
    {
        setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
    
  )




  return (
     <>
       <FormularioConLista />
     </>
  );
}


export default App

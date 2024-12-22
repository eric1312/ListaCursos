import React from "react";
import imagen from "../assets/cerca-de-las-manos-en-portátil.png"
import imagen2 from "../assets/pantalla-de-inicio-de-sesión.png"

const Login = () => {
  return (
    <div className="container">
        <div className="row">
          
          {/* columna mas pequeña del formulario */}
          <div className="col-md-4">

          </div>

          {/* columna mas grande */}
          <div className="col-md-8">
            <img src="{imagen2}" alt="" className="tamaño-imagen" />
          </div>
        </div>
    </div>
  )
}

export default Login

import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import imagen2 from "../assets/pantalla-de-inicio-de-sesión.png";
import appFirebase from "../credenciales.js";

const auth = getAuth(appFirebase);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Usuario autenticado:", user);
      })
      .catch((error) => {
        setError("Error de autenticación: " + error.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <img src={imagen2} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;

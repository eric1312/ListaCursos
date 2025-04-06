import React from "react"; // Importa React
import Login from "./Login"; // Importa el componente Login
import Login from "./components/Login/Login"; // Importa el componente Login

import React from "react";
import Login from "../components/Login"; // Importación limpia gracias al index.js

const LoginPage = () => {
  return (
    <div>
      <h1>Página de Inicio de Sesión</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
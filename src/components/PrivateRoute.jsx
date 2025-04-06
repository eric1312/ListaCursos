import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // Si el usuario no está autenticado, redirigir a la página de login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderizar el componente hijo
  return children;
};

export default PrivateRoute;
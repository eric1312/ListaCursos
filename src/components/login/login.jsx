import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import authService from "../../services/authService";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
  const { login, user } = useContext(AuthContext); // Obtener el estado del usuario
  const navigate = useNavigate();

  // Si el usuario ya está autenticado, redirigir a la página principal
  if (user) {
    navigate("/");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setIsLoading(true); // Activar el estado de carga
    setError(""); // Limpiar errores anteriores

    try {
      const user = await authService.login(email, password);
      login(user); // Guardar el usuario en el contexto
      navigate("/"); // Redirigir a la página principal
    } catch (err) {
      // Manejo de errores específicos
      if (err.response && err.response.status === 401) {
        setError("Credenciales incorrectas. Inténtalo de nuevo.");
      } else if (err.message === "Network Error") {
        setError("Error de conexión. Inténtalo de nuevo más tarde.");
      } else {
        setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Iniciar sesión</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6} // Validación de longitud mínima
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
};

export default Login;
import "./App.css";
import FormularioConLista from "./components/FormularioConLista.jsx";
import appFirabase from "./credenciales.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext.js";
import Login from "./components/login/Login.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./pages/HomePage";
// import { useState, useEffect } from "react";

const auth = getAuth(appFirabase); // Inicializamos Firebase Authentication

const Home = () => <h1 className="text-center mt-10">Bienvenido a la App</h1>; // Componente Home

function App() { // Componente App
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute component={Home} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
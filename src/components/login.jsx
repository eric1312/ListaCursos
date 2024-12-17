// import { useEffect, useState } from "react";
// import Axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button, Form } from "react-bootstrap";

// const Login = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [usuario, setUsuario] = useState("");
//   const [contraseña, setContraseña] = useState("");
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleLoginSubmit = () => {
//     if (usuario.trim() && contraseña.trim()) {
//       // Verificar credenciales
//       if (usuario === "cristian" && contraseña === "1234") {
//         setShowModal(false);
//         navigate("/admin"); // Redirigir al componente Admin
//       } else {
//         alert("Credenciales incorrectas. Inténtalo de nuevo.");
//       }
//     } else {
//       alert("Por favor, ingresa usuario y contraseña.");
//     }
//   };

//   return (
//     <div>
//             <form className="d-flex" role="search">
//               <Button variant="outline-success" onClick={handleLoginClick}>
//                 Login
//               </Button>
//             </form>

//       {/* Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Panel Administrador</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formUsuario">
//               <Form.Label>Usuario</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Ingresa tu usuario"
//                 value={usuario}
//                 onChange={(e) => setUsuario(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formContraseña">
//               <Form.Label>Contraseña</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Ingresa tu contraseña"
//                 value={contraseña}
//                 onChange={(e) => setContraseña(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cerrar
//           </Button>
//           <Button variant="primary" onClick={handleLoginSubmit}>
//             Iniciar Sesión
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Login

import { useState } from 'react'
import './Login.css'

const LoginSingUp = () => {

  const url = "https://gala-backend-nf24.onrender.com";
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login Function Executed", formData)
    let responseData;
    await fetch(url+'/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Sing Up Function Executed", formData)
    let responseData;
    await fetch(url+'/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Adress" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSingUp
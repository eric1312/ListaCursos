// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8OiTSnL1hY8k0_TygQruHsXY5MpX2cKw",
  authDomain: "lista-de-cursos-ba510.firebaseapp.com",
  projectId: "lista-de-cursos-ba510",
  storageBucket: "lista-de-cursos-ba510.firebasestorage.app",
  messagingSenderId: "509245500205",
  appId: "1:509245500205:web:b0d82782eeae9faa32c1a4",
  measurementId: "G-LH7BDFWL30"
};

// Initialize Firebase
const appFirabase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirabase);
export default appFirabase;
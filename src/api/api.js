import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;



const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:3001/api', // URL de tu servidor backend
});


export default api;
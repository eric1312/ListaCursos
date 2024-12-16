import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cursosRoutes from './routes/cursos.routes.js';
import estudiantesRoutes from './routes/estudiantes.routes.js';
import inscripcionesRoutes from './routes/inscripciones.routes.js';

// dotenv
dotenv.config();

// Inicialización de Express
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

// Ruta básica
app.get("/", (req, res) => {
    res.status(200).send('Bienvenidos a la API de gestión de inscripciones!');
});

// Rutas de cursos
app.use('/api/cursos', cursosRoutes);

// Rutas de estudiantes
app.use('/api/estudiantes', estudiantesRoutes);

// Rutas de inscripciones
app.use('/api/inscripciones', inscripcionesRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    });
});

// Puerto del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

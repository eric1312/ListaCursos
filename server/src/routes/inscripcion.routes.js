import { Router } from "express";

import  { estudiante_id, curso_id }  from '../controllers/inscripcion.controller.js';
const router = Router();

router.get('/inscripcion', estudiante_id);

router.get('/inscripcion/:id', curso_id);

router.post('/inscripcion', crearestudiante);

router.patch('/inscripcion/:id', actualizarestudiante);

router.delete('/inscripcion/:id', eliminarestudiante);

export default router;
import { Router } from "express";

import  { Obtenernombre, Obteneremail}  from '../controllers/estudiante.controller.js';
const router = Router();

router.get('/estudiante', Obtenernombre);

router.get('/estudiante/:id', Obteneremail);

router.post('/estudiante', crearestudiante);

router.patch('/estudiante/:id', actualizarestudiante);

router.delete('/estudiante/:id', eliminarestudiante);

export default router;
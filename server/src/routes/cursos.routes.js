import { Router } from "express";

import  {Obtenernombre, Obtenerdescripcion}  from '../controllers/cursos.controller.js';
const router = Router();

router.get('/estudiante', Obtenernombre);

router.get('/estudiante/:id', Obtenerdescripcion);

router.post('/estudiante', crearnombre);

router.patch('/estudiante/:id', actualizarnombre);

router.delete('/estudiante/:id', eliminarnombre);

export default router;
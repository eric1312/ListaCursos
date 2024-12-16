import { pool } from '../config/db.js';
import express from 'express';

const router = express.Router();

// Crear una inscripción
router.post('/inscripciones', async (req, res) => {
    const { estudiante_id, curso_id } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO inscripciones (estudiante_id, curso_id) VALUES (?, ?)', [estudiante_id, curso_id]);
        res.status(201).json({ message: 'Inscripción creada', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Leer todas las inscripciones
router.get('/inscripciones', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM inscripciones');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar una inscripción
router.patch('/inscripciones/:id', async (req, res) => {
    const { id } = req.params;
    const { curso_id } = req.body;
    try {
        const [result] = await pool.query('UPDATE inscripciones SET curso_id = ? WHERE id = ?', [curso_id, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Inscripción no encontrada' });
        }
        res.status(200).json({ message: 'Inscripción actualizada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar una inscripción
router.delete('/inscripciones/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM inscripciones WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Inscripción no encontrada' });
        }
        res.status(200).json({ message: 'Inscripción eliminada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
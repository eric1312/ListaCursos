import { pool } from '../config/db.js';
import express from 'express';

const router = express.Router();

// Crear un estudiante
router.post('/estudiantes', async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO estudiantes (nombre, email) VALUES (?, ?)', [nombre, email]);
        res.status(201).json({ message: 'Estudiante creado', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Leer todos los estudiantes
router.get('/estudiantes', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM estudiantes');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un estudiante
router.patch('/estudiantes/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    try {
        const [result] = await pool.query('UPDATE estudiantes SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar un estudiante
router.delete('/estudiantes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM estudiantes WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.status(200).json({ message: 'Estudiante eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;

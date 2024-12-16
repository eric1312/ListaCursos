import { pool } from '../config/db.js';
import express from 'express';

const router = express.Router();

// Crear un curso
router.post('/cursos', async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion]);
        res.status(201).json({ message: 'Curso creado', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Leer todos los cursos
router.get('/cursos', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM cursos');
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Actualizar un curso
router.patch('/cursos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await pool.query('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        res.status(200).json({ message: 'Curso actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Eliminar un curso
router.delete('/cursos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM cursos WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        res.status(200).json({ message: 'Curso eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;

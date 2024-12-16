import { pool } from '../config/db.js';

// CRUD para "inscripciones"

// Crear una inscripción
function createInscripcion(estudiante_id, curso_id) {
    const query = 'INSERT INTO inscripciones (estudiante_id, curso_id) VALUES (?, ?)';
    connection.execute(query, [estudiante_id, curso_id], (err, results) => {
        if (err) throw err;
        console.log('Inscripción creada:', results);
    });
}

// Leer todas las inscripciones
function getInscripciones() {
    const query = 'SELECT * FROM inscripciones';
    connection.execute(query, (err, results) => {
        if (err) throw err;
        console.log('Inscripciones:', results);
    });
}

// Actualizar una inscripción
function updateInscripcion(id, curso_id) {
    const query = 'UPDATE inscripciones SET curso_id = ? WHERE id = ?';
    connection.execute(query, [curso_id, id], (err, results) => {
        if (err) throw err;
        console.log('Inscripción actualizada:', results);
    });
}

// Eliminar una inscripción
function deleteInscripcion(id) {
    const query = 'DELETE FROM inscripciones WHERE id = ?';
    connection.execute(query, [id], (err, results) => {
        if (err) throw err;
        console.log('Inscripción eliminada:', results);
    });
}
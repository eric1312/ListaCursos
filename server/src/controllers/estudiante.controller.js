import { pool } from '../config/db.js';
// CRUD para "estudiantes"

// Crear un estudiante
function createEstudiante(nombre, email) {
    const query = 'INSERT INTO estudiantes (nombre, email) VALUES (?, ?)';
    connection.execute(query, [nombre, email], (err, results) => {
        if (err) throw err;
        console.log('Estudiante creado:', results);
    });
}

// Leer todos los estudiantes
function getEstudiantes() {
    const query = 'SELECT * FROM estudiantes';
    connection.execute(query, (err, results) => {
        if (err) throw err;
        console.log('Estudiantes:', results);
    });
}

// Actualizar un estudiante
function updateEstudiante(id, nombre, email) {
    const query = 'UPDATE estudiantes SET nombre = ?, email = ? WHERE id = ?';
    connection.execute(query, [nombre, email, id], (err, results) => {
        if (err) throw err;
        console.log('Estudiante actualizado:', results);
    });
}

// Eliminar un estudiante
function deleteEstudiante(id) {
    const query = 'DELETE FROM estudiantes WHERE id = ?';
    connection.execute(query, [id], (err, results) => {
        if (err) throw err;
        console.log('Estudiante eliminado:', results);
    });
}

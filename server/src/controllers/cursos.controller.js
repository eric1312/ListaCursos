import { pool } from '../config/db.js';
// CRUD para "cursos"

// Crear un curso
function createCurso(nombre, descripcion) {
    const query = 'INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)';
    connection.execute(query, [nombre, descripcion], (err, results) => {
        if (err) throw err;
        console.log('Curso creado:', results);
    });
}

// Leer todos los cursos
function getCursos() {
    const query = 'SELECT * FROM cursos';
    connection.execute(query, (err, results) => {
        if (err) throw err;
        console.log('Cursos:', results);
    });
}

// Actualizar un curso
function updateCurso(id, nombre, descripcion) {
    const query = 'UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?';
    connection.execute(query, [nombre, descripcion, id], (err, results) => {
        if (err) throw err;
        console.log('Curso actualizado:', results);
    });
}

// Eliminar un curso
function deleteCurso(id) {
    const query = 'DELETE FROM cursos WHERE id = ?';
    connection.execute(query, [id], (err, results) => {
        if (err) throw err;
        console.log('Curso eliminado:', results);
    });
}
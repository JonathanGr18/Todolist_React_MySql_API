// Importar dependencias
const express = require('express'); //Manejo de rutas y solicitudes HTTP
const db = require('../config/db');  //Configuracion de BD
const router = express.Router(); //Enrutador para las rutas de la API


//=========Rutas de gestion===========
// Obtener todas las tareas.
router.get('/', (req, res) => {
    //Consulta de todas las tareas en BD.
    db.query('SELECT * FROM todos', (err, results) => {
        //Manejo de errores
        if (err) return res.status(500).json({ error: err.message });
        //Enviamos la lsta de tareas como repsuestas.
        res.json(results);
    });
});

// Crear una nueva tarea
router.post('/', (req, res) => {
    //Extraemos el titulo de la tarea del cuerpo de la solicitud
    const { title } = req.body;
    //Validamos que el titulo no este vacio
    if (!title) return res.status(400).json({error:"El titulo es obligatorio"})
    //Insertamos la tarea a BD con estado no completado
    db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, false], (err, result) => {
        //Manejo de errores
        if (err) return res.status(500).json({ error: err.message });
        //Enviamos la respuesta con la tarea creada
        res.json({ id: result.insertId, title, completed: false });
    });
});

// Marcar tarea como completada o incompleta
router.put('/:id', (req, res) => {
    //Extraemos el estado de la tarea desde el cuerpo de la solicitud
    const { completed } = req.body;
    //actualizamos el estado de la tarea en BD
    db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, req.params.id], (err) => {
        //Manejo de errores
        if (err) return res.status(500).json({ error: err.message });
        //Confirmacion de actualizacion
        res.json({ message: 'Tarea actualizada' });
    });
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
    // Eliminamos la tarea correspondiente al ID proporcionado
    db.query('DELETE FROM todos WHERE id = ?', [req.params.id], (err) => {
        //Manejo de errores
        if (err) return res.status(500).json({ error: err.message });
        //Confirmacion de eliminacion
        res.json({ message: 'Tarea eliminada' });
    });
});

module.exports = router;

const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Obtener todas las tareas
router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Crear una nueva tarea
router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({error:"El titulo es obligatorio"})

    db.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, false], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, title, completed: false });
    });
});

// Marcar tarea como completada o incompleta
router.put('/:id', (req, res) => {
    const { completed } = req.body;
    db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tarea actualizada' });
    });
});

// Eliminar una tarea
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM todos WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tarea eliminada' });
    });
});

module.exports = router;

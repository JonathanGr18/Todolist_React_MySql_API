import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    const handleAddTodo = async () => {
        if (newTodo.trim() === '') return;
        await addTodo(newTodo);
        setNewTodo('');
        fetchTodos();
    };

    const handleToggleComplete = async (id, completed) => {
        await updateTodo(id, !completed);
        fetchTodos();
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nueva tarea..."
            />
            <button onClick={handleAddTodo}>Agregar</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
                        <button onClick={() => handleToggleComplete(todo.id, todo.completed)}>
                            {todo.completed ? 'Desmarcar' : 'Completar'}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

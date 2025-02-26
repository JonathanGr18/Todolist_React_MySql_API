// Importamos React y los hooks useEffect y useState para manejar el estado y los efectos secundarios.
import React, { useEffect, useState } from 'react';

// Importamos las funciones del servicio API para interactuar con el backend.
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/api';

const TodoList = () => {
    // Estado para almacenar la lista de tareas.
    const [todos, setTodos] = useState([]);

    // Estado para manejar la entrada de una nueva tarea.
    const [newTodo, setNewTodo] = useState('');

    // useEffect se ejecuta cuando el componente se monta, cargando las tareas iniciales.
    useEffect(() => { fetchTodos(); }, []);

    // Función para obtener las tareas (API) y actualizar el estado.
    const fetchTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    // Función para agregar una nueva tarea.
    const handleAddTodo = async () => {
        if (newTodo.trim() === '') return; // Evitamos agregar tareas vacías.
        await addTodo(newTodo); // Llamamos a la API para agregar la tarea.
        setNewTodo(''); // Limpiamos el campo de entrada.
        fetchTodos(); // Recargamos la lista de tareas.
    };

    // Función para alternar el estado de completado de una tarea.
    const handleToggleComplete = async (id, completed) => {
        await updateTodo(id, !completed); // Enviamos la actualización a la API.
        fetchTodos(); // Recargamos la lista de tareas.
    };

    // Función para eliminar una tarea.
    const handleDeleteTodo = async (id) => {
        await deleteTodo(id); // Enviamos la solicitud de eliminación a la API.
        fetchTodos(); // Recargamos la lista de tareas.
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>

            {/* Input para escribir nuevas tareas */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Nueva tarea..."
            />

            {/* Botón para agregar una nueva tarea */}
            <button onClick={handleAddTodo}>Agregar</button>

            {/* Lista de tareas */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
                        
                        {/* Botón para marcar como completado o desmarcar */}
                        <button onClick={() => handleToggleComplete(todo.id, todo.completed)}>
                            {todo.completed ? 'Desmarcar' : 'Completar'}
                        </button>

                        {/* Botón para eliminar la tarea */}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

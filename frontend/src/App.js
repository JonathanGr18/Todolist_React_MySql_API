// Importamos React para crear componentes
import React from 'react';
//Componente Todolist (Lista de tareas)
import TodoList from './components/Todolist';

function App() { //Componente principal
    return (
        <div className="App">
            {/* Titulo de la aplicacion */}
            <h1>To-Do List</h1>
            {/* Renderizamos el componente Todolist */}
            <TodoList />
        </div>
    );
}

export default App;

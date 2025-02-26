//importamos Axios para manejar las solicitudes HTTP
import axios from 'axios';
//URL de la API para las tareas
const API_URL = 'http://localhost:5000/api/todos';


//=======Interactuar con API=====
// Obtener tasks desde el servidor 
export const getTodos = async () => {
    //Realizar una solicitud GET a la API
    const response = await axios.get(API_URL);
    return response.data; //Retorna datos obtenidos
};

export const addTodo = async (title) => {
    //Realizar una solicitud POST a la API
    const response = await axios.post(API_URL, { title });
    return response.data; //Retorna tarea creada
};

export const updateTodo = async (id, completed) => {
    //Realizar una solicitud PUT a la API
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data; //Retorna tarea actualizada
};

export const deleteTodo = async (id) => {
    //Realizar una solicitud DELETE a la API
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data; //Retorna tarea eliminada
};

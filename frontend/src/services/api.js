import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTodo = async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

export const updateTodo = async (id, completed) => {
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data;
};

export const deleteTodo = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

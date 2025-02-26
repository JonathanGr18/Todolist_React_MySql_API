// Biblioteca principal para construir interfaces de usuario.
import React from 'react';

// Renderizar la aplicación en el DOM.
import ReactDOM from 'react-dom/client';

// Componente principal de la aplicación.
import App from './App';

// Creamos la raíz de la aplicación React y la asociamos con el elemento HTML con id "root" (Div).
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos la aplicación dentro de <React.StrictMode> para activar advertencias y buenas prácticas en desarrollo.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

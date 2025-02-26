// Importamos Express, facilita la creación de servidores web.
const express = require('express');

// Importamos CORS permitir que nuestra API sea accesible desde otros dominios(React)
const cors = require('cors');

// Importamos la configuración de la base de datos desde el archivo db.js.
const db = require('./config/db');

// Instancia de la app Express.
const app = express();

// Habilitamos CORS para permitir peticiones desde el frontend
app.use(cors());

// Habilitamos el middleware para interpretar solicitudes con datos en formato JSON.
app.use(express.json());

// Definimos el puerto del servidor. Si existe una variable de entorno `PORT`, sino en puerto 5000
const PORT = process.env.PORT || 5000;

// Configuramos las rutas de la API. Todas las rutas que comiencen con '/api/todos' serán manejadas por el archivo 'route.js' dentro de la carpeta 'routes'.
app.use('/api/todos', require('./routes/route'));

// Iniciamos el servidor en el puerto y mostramos un mensaje.
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

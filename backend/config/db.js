//Importamos libreria para conectar la BD
const mysql = require('mysql2');
//Dotenv carga las variables de entorno desde un .env
require('dotenv').config();

//COnfiguracion de la conexcion MySQL
//HOST, Usario, Contraseña, Nombre_BD, 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Conexion a la BD
connection.connect((err) => {
    //Manejo de error
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    //Mensaje de exito
    console.log('Conectado a MySQL');
});

module.exports = connection;

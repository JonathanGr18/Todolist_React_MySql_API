const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
// Permite que React acceda a la API
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use('/api/todos', require('./routes/route'));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

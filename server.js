const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dns = require('dns');

// Solución al error querySrv ECONNREFUSED
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Servidor HTTP
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Conexión de la Base de Datos 
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Conexión a MongoDB exitosa"))
  .catch(err => console.error("Error al Conectar a MongoDB: ", err));

// Rutas de la API
// Ruta para autenticación
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Rutas para Pacientes
const pacienteRoutes = require('./routes/paciente');
app.use('/api/pacientes', pacienteRoutes);

// CONFIGURAR EL PUERTO PARA EL BACK
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
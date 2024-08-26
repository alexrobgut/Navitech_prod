
  // server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const registerRoutes = require('./routes/registerRoutes');
const operarioRoutes = require('./routes/operarioRoutes');
const maquinariaRoutes = require('./routes/maquinariaRoutes');
const sequelize = require('./config/db');



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/register', registerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api', operarioRoutes);
app.use('/api', maquinariaRoutes);


// Sincronizar con la base de datos y luego iniciar el servidor
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
}).catch(err => {
  console.error('Error al conectar con la base de datos:', err);
});

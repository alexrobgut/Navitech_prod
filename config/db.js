const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('NaviechProduccionDB', 'sa', 'Tigo2022*', {
  host: 'LAPTOP-8MTJD337/SQLEXPRESS',
  dialect: 'mssql',
  port: 50530,
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

module.exports = sequelize;


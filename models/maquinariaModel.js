// models/maquinariaModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Maquinaria = sequelize.define('Maquinaria', {
  MaquinariaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NombreMaquinaria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Maquinaria',
  timestamps: false
});

module.exports = Maquinaria;

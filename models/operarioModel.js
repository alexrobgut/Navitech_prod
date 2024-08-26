// models/operarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Operario = sequelize.define('Operario', {
    OperarioID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreOperario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ApellidoOperario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    EmpleadoCod: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'Operarios',
    timestamps: false
});

module.exports = Operario;

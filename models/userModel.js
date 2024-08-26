const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Usuarios',
  timestamps: false,
  defaultScope: {
    attributes: { exclude: ['id'] }
  }
});

module.exports = User;

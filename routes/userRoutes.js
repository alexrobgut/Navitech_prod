// routes/userRoutes.js
const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/users', createUser);

// Ruta para obtener todos los usuarios
router.get('/users', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/users/:id', getUserById);

// Ruta para actualizar un usuario por ID
router.put('/users/:id', updateUser);

// Ruta para eliminar un usuario por ID
router.delete('/users/:id', deleteUser);

module.exports = router;

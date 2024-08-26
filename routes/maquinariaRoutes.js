// routes/maquinariaRoutes.js
const express = require('express');
const router = express.Router();
const maquinariaController = require('../controllers/maquinariaController');

// Ruta para crear una nueva máquina
router.post('/maquinaria', maquinariaController.createMaquinaria);

// Ruta para obtener todas las máquinas
router.get('/maquinaria', maquinariaController.getAllMaquinaria);

// Ruta para obtener una máquina por ID
router.get('/maquinaria/:MaquinariaID', maquinariaController.getMaquinariaById);

// Ruta para actualizar una máquina por ID
router.put('/maquinaria/:MaquinariaID', maquinariaController.updateMaquinaria);

// Ruta para eliminar una máquina por ID
router.delete('/maquinaria/:MaquinariaID', maquinariaController.deleteMaquinaria);

module.exports = router;

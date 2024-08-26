// routes/operarioRoutes.js
const express = require('express');
const router = express.Router();
const {
    createOperario,
    getAllOperarios,
    getOperarioById,
    updateOperario,
    deleteOperario
} = require('../controllers/operarioController');

// Ruta para crear un nuevo operario
router.post('/operarios', createOperario);

// Ruta para obtener todos los operarios
router.get('/operarios', getAllOperarios);

// Ruta para obtener un operario por ID
router.get('/operarios/:id', getOperarioById);

// Ruta para actualizar un operario por ID
router.put('/operarios/:id', updateOperario);

// Ruta para eliminar un operario por ID
router.delete('/operarios/:id', deleteOperario);

module.exports = router;

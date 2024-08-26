// routes/registerRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/registerController');

const router = express.Router();

router.post('/', registerUser); // Ruta para registrar un usuario

module.exports = router;

// controllers/operarioController.js
const Operario = require('../models/operarioModel');

// Crear un nuevo operario
const createOperario = async (req, res) => {
    try {
        const { NombreOperario, ApellidoOperario, EmpleadoCod } = req.body;
        const newOperario = await Operario.create({ NombreOperario, ApellidoOperario, EmpleadoCod });
        res.status(201).json({ message: 'Operario creado exitosamente', data: newOperario });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el operario', error: error.message });
    }
};

// Obtener todos los operarios
const getAllOperarios = async (req, res) => {
    try {
        const operarios = await Operario.findAll();
        res.status(200).json(operarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los operarios', error: error.message });
    }
};

// Obtener un operario por ID
const getOperarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const operario = await Operario.findByPk(id);
        if (operario) {
            res.status(200).json(operario);
        } else {
            res.status(404).json({ message: 'Operario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el operario', error: error.message });
    }
};

// Actualizar un operario
const updateOperario = async (req, res) => {
    try {
        const { id } = req.params;
        const { NombreOperario, ApellidoOperario, EmpleadoCod } = req.body;
        const [updated] = await Operario.update({ NombreOperario, ApellidoOperario, EmpleadoCod }, { where: { OperarioID: id } });
        if (updated) {
            const updatedOperario = await Operario.findByPk(id);
            res.status(200).json({ message: 'Operario actualizado exitosamente', data: updatedOperario });
        } else {
            res.status(404).json({ message: 'Operario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el operario', error: error.message });
    }
};

// Eliminar un operario
const deleteOperario = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Operario.destroy({ where: { OperarioID: id } });
        if (deleted) {
            res.status(200).json({ message: 'Operario eliminado exitosamente' });
        } else {
            res.status(404).json({ message: 'Operario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el operario', error: error.message });
    }
};

module.exports = {
    createOperario,
    getAllOperarios,
    getOperarioById,
    updateOperario,
    deleteOperario
};

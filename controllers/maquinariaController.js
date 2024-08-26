// controllers/maquinariaController.js
const Maquinaria = require('../models/maquinariaModel');

// Crear una nueva máquina
const createMaquinaria = async (req, res) => {
  try {
    const { NombreMaquinaria, Descripcion, Estado } = req.body;
    const nuevaMaquinaria = await Maquinaria.create({ NombreMaquinaria, Descripcion, Estado });
    res.status(201).json({ message: 'Máquina creada exitosamente', data: nuevaMaquinaria });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la máquina', error: error.message });
  }
};

// Obtener todas las máquinas
const getAllMaquinaria = async (req, res) => {
  try {
    const maquinas = await Maquinaria.findAll();
    res.status(200).json(maquinas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las máquinas', error: error.message });
  }
};

// Obtener una máquina por ID
const getMaquinariaById = async (req, res) => {
  try {
    const { MaquinariaID } = req.params;
    const maquina = await Maquinaria.findByPk(MaquinariaID);
    if (maquina) {
      res.status(200).json(maquina);
    } else {
      res.status(404).json({ message: 'Máquina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la máquina', error: error.message });
  }
};

// Actualizar una máquina por ID
const updateMaquinaria = async (req, res) => {
  try {
    const { MaquinariaID } = req.params;
    const { NombreMaquinaria, Descripcion, Estado } = req.body;
    const [updated] = await Maquinaria.update({ NombreMaquinaria, Descripcion, Estado }, { where: { MaquinariaID } });
    if (updated) {
      const updatedMaquina = await Maquinaria.findByPk(MaquinariaID);
      res.status(200).json({ message: 'Máquina actualizada exitosamente', data: updatedMaquina });
    } else {
      res.status(404).json({ message: 'Máquina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la máquina', error: error.message });
  }
};

// Eliminar una máquina por ID
const deleteMaquinaria = async (req, res) => {
  try {
    const { MaquinariaID } = req.params;
    const deleted = await Maquinaria.destroy({ where: { MaquinariaID } });
    if (deleted) {
      res.status(200).json({ message: 'Máquina eliminada exitosamente' });
    } else {
      res.status(404).json({ message: 'Máquina no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la máquina', error: error.message });
  }
};

module.exports = {
  createMaquinaria,
  getAllMaquinaria,
  getMaquinariaById,
  updateMaquinaria,
  deleteMaquinaria
};

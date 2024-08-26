// controllers/registerController.js
const User = require('../models/userModel'); // Importa el modelo de usuario

const registerUser = async (req, res) => {
    const { username, password, roleID } = req.body; // Obtén los datos del cuerpo de la solicitud

    try {
        // Crea un nuevo usuario en la base de datos
        const newUser = await User.create({
            username,
            passwordHash: password, // Aquí no aplicamos hash, solo guardamos el password directamente
            roleID
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error al registrar el usuario', error: error.message });
    }
};

module.exports = { registerUser };

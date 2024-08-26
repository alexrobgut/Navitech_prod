const User = require('../models/userModel');
const login = async (req, res) => {
    const { username, password } = req.body;
    console.log('Request body:', req.body);
  
    try {
      const user = await User.findOne({ where: { username } });
      console.log('USUARIO ENCONTRADO:', user);
  
      if (user) {
        console.log('COMPARANDO CONTRASEÑA');
        // Comparar contraseñas en texto claro
        if (password === user.passwordHash) {
          console.log('CONTRASEÑA COINCIDE');
          res.status(200).json({ message: 'Autenticación exitosa', user });
        } else {
          console.log('CONTRASEÑA NO COINCIDE');
          res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      } else {
        console.log('USUARIO NO ENCONTRADO');
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  
  
  module.exports = { login };
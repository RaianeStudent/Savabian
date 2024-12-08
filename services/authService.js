const jwt = require('jsonwebtoken');
const SECRET_KEY = 'chavechave';

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Error('Token inválido ou expirado.');
  }
};
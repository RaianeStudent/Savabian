const userService = require('../services/userService');

exports.install = (req, res) => {
  const admin = userService.installDefaultAdmin();
  if (admin) {
    return res.status(201).json({ message: 'Admin padrão criado com sucesso.', admin });
  }
  res.status(200).json({ message: 'Admin padrão já existe.' });
};
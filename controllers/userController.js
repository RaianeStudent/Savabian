const userService = require('../services/userService');
const authService = require('../services/authService');

exports.getAllUsers = (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 5;
    const page = parseInt(req.query.page, 10) || 1;
    const users = userService.getAllUsers(limit, page);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = (req, res, next) => {
  try {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

exports.createAdmin = (req, res, next) => {
  try {
    const admin = userService.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const userToUpdate = userService.getUserById(id);

    if (!userToUpdate) {
      return next({ status: 404, message: 'Usuário não encontrado.' });
    }

    const updatedUser = userService.updateUser(id, req.body);
    res.status(200).json({ message: 'Dados atualizados com sucesso.', updatedUser });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const userToDelete = userService.getUserById(id);

    if (!userToDelete) {
      return next({ status: 404, message: 'Usuário não encontrado.' });
    }

    if (userToDelete.role === 'admin') {
      return next({ status: 403, message: 'Não é permitido excluir um administrador.' });
    }

    const deletedUser = userService.deleteUser(id);
    res.status(200).json({ message: 'Usuário excluído com sucesso.', deletedUser });
  } catch (error) {
    next(error);
  }
};

exports.login = (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = userService.validateCredentials(username, password);
    if (!user) {
      return next({ status: 401, message: 'Credenciais inválidas.' });
    }
    const token = authService.generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
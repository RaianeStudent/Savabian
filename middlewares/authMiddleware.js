const authService = require('../services/authService');

exports.authorizeAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next({ status: 403, message: 'Token não fornecido.' });

  
  try {
    const decoded = authService.verifyToken(token);
    if (decoded.role !== 'admin') {
      return next({ status: 403, message: 'Acesso negado. Apenas administradores podem realizar esta ação.' });
    }
    next();
  } catch (error) {
    next({ status: 401, message: 'Token inválido ou expirado.' });
  }
};

exports.authorizeUserOrAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return next({ status: 403, message: 'Token não fornecido.' });

  try {
    const decoded = authService.verifyToken(token);
    req.user = decoded; 
    if (decoded.role === 'admin' || decoded.id === parseInt(req.params.id, 10)) {
      return next();
    }
    return next({ status: 403, message: 'Acesso negado.' });
  } catch (error) {
    next({ status: 401, message: 'Token inválido ou expirado.' });
  }
};
const express = require('express');
const userController = require('../controllers/userController');
const { authorizeAdmin, authorizeUserOrAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authorizeAdmin, userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/admin', authorizeAdmin, userController.createAdmin);
router.put('/:id', authorizeUserOrAdmin, userController.updateUser);
router.delete('/:id', authorizeAdmin, userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
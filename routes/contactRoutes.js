const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post('/', contactController.submitContactForm);
router.get('/', contactController.getAllMessages);

module.exports = router;
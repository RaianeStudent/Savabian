const express = require('express');
const supplierController = require('../controllers/supplierController');
const { authorizeAdmin } = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.get('/', supplierController.getAllSuppliers);
router.get('/:id', supplierController.getSupplierById);
router.post('/', supplierController.createSupplier);
router.put('/:id', supplierController.updateSupplier);
router.delete('/:id', supplierController.deleteSupplier);
router.get('/stats', authorizeAdmin, supplierController.getSupplierStats);

module.exports = router;
const supplierService = require('../services/supplierService');

exports.getAllSuppliers = (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 5;
  const page = parseInt(req.query.page, 10) || 1;
  const suppliers = supplierService.getAllSuppliers(limit, page);
  res.status(200).json(suppliers);
};

exports.getSupplierById = (req, res) => {
  const supplier = supplierService.getSupplierById(parseInt(req.params.id, 10));
  if (!supplier) {
    return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  }
  res.status(200).json(supplier);
};

exports.createSupplier = (req, res) => {
  const newSupplier = supplierService.createSupplier(req.body);
  res.status(201).json(newSupplier);
};

exports.updateSupplier = (req, res) => {
  const updatedSupplier = supplierService.updateSupplier(parseInt(req.params.id, 10), req.body);
  if (!updatedSupplier) {
    return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  }
  res.status(200).json(updatedSupplier);
};

exports.deleteSupplier = (req, res) => {
  const deletedSupplier = supplierService.deleteSupplier(parseInt(req.params.id, 10));
  if (!deletedSupplier) {
    return res.status(404).json({ message: 'Fornecedor não encontrado.' });
  }
  res.status(200).json(deletedSupplier);
};

exports.getSupplierStats = async (req, res) => {
  try {
    const stats = await supplierService.getSupplierStats();
    res.status(200).json({ message: 'Estatísticas recuperadas com sucesso.', stats });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao recuperar estatísticas.', error: error.message });
  }
};
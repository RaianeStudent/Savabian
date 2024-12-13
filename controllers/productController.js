const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 5;
  const page = parseInt(req.query.page, 10) || 1;
  const products = productService.getAllProducts(limit, page);
  res.status(200).json(products);
};

exports.getProductById = (req, res) => {
  const product = productService.getProductById(parseInt(req.params.id, 10));
  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }
  res.status(200).json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = productService.createProduct(req.body);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(parseInt(req.params.id, 10), req.body);
  if (!updatedProduct) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }
  res.status(200).json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
  const deletedProduct = productService.deleteProduct(parseInt(req.params.id, 10));
  if (!deletedProduct) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }
  res.status(200).json(deletedProduct);
};
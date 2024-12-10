const cartService = require('../services/cartService');

exports.getCart = (req, res) => {
  const cart = cartService.getCart();
  res.status(200).json(cart);
};

exports.addToCart = (req, res) => {
  const cart = cartService.addToCart(req.body);
  res.status(201).json(cart);
};

exports.removeFromCart = (req, res) => {
  const removedItem = cartService.removeFromCart(parseInt(req.params.id, 10));
  if (!removedItem) {
    return res.status(404).json({ message: 'Item não encontrado no carrinho.' });
  }
  res.status(200).json(removedItem);
};
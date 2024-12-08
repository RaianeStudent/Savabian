const cart = [];

exports.addToCart = (item) => {
  cart.push(item);
  return cart;
};

exports.getCart = () => cart;

exports.removeFromCart = (id) => {
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) return null;
  return cart.splice(index, 1)[0];
};
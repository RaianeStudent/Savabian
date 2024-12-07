const products = [];
let productIdCounter = 1;

exports.getAllProducts = (limit, page) => {
  const start = (page - 1) * limit;
  return products.slice(start, start + limit);
};

exports.getProductById = (id) => products.find(product => product.id === id);

exports.createProduct = (product) => {
  const newProduct = { id: productIdCounter++, ...product };
  products.push(newProduct);
  return newProduct;
};

exports.updateProduct = (id, updatedProduct) => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...updatedProduct };
  return products[index];
};

exports.deleteProduct = (id) => {
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());

// Register routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/cart', cartRoutes);

// Error middleware
app.use(errorMiddleware);


app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
  });
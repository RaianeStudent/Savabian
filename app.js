const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const cartRoutes = require('./routes/cartRoutes');
const contactRoutes = require('./routes/contactRoutes');
const homeRoutes = require('./routes/homeRoutes');
const installRoutes = require('./routes/installRoutes');
const { authorizeAdmin, authorizeUserOrAdmin } = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
app.use('/contact', contactRoutes);
app.use('/', homeRoutes);
app.use('/install', installRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const app = express();
app.use(express.json());


app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/cart', cartRoutes);

app.use(errorMiddleware);


app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
  });
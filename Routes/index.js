const express = require('express');
const router = express.Router();
const productRoutes = require('../Routes/product');

router.use('/product', productRoutes);

module.exports = router;

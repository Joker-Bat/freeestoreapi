// Core modules
const path = require('path');
// 3rd party modules
const express = require('express');
// Our modules
const productRoutes = require('./routes/productRoutes');

// Code
const app = express();

app.use('/api/v1/products', productRoutes);

module.exports = app;

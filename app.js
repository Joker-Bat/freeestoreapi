// Core modules
const path = require('path');
// 3rd party modules
const express = require('express');
// Our modules
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const productRoutes = require('./routes/productRoutes');

// Code
const app = express();
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Product routes
app.use('/api/v1/products', productRoutes);
// For undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Globale Error handler
app.use(globalErrorHandler);

module.exports = app;

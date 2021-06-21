// Core modules
const path = require('path');
// 3rd party modules
const express = require('express');
const nunjucks = require('nunjucks');
const cors = require('cors');
// Our modules
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const productRoutes = require('./routes/productRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Code
const app = express();

// CORT
app.use(cors());

// Template Engine Nunchucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRoutes);
// Product routes
app.use('/api/v1/products', productRoutes);
// For undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Globale Error handler
app.use(globalErrorHandler);

module.exports = app;

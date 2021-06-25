// Core modules
const path = require('path');
// 3rd party modules
const express = require('express');
const nunjucks = require('nunjucks');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
// Our modules
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const productRoutes = require('./routes/productRoutes');
const viewRoutes = require('./routes/viewRoutes');
const productController = require('./controllers/productController');

// Code
const app = express();
// for Heroku
app.enable('trust proxy');

// CORS
app.use(cors());

// Template Engine Nunchucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Limit raquest from Same IP
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, try again in an hour!',
});

//Use limiter only for api related requests
app.use('/api', limiter);

// Compress res data
app.use(compression());

app.use('/', viewRoutes);
// Product routes
app.use('/api/v1/products', productRoutes);
// Fake post request
app.post('/api/v1/fakepost', productController.fakePost);

// For undefined routes
app.all('*', (req, res, next) => {
  res.status(404).render('404');
  // next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Globale Error handler
app.use(globalErrorHandler);

module.exports = app;

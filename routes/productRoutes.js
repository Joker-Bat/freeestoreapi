// 3rd party modules
const express = require('express');
// our modules
const productController = require('../controllers/productController.js');

// Code
const router = express.Router();

// Destructure
const { getAllProducts, getProductBySlug, getRandomProduct } =
  productController;

router.route('/').get(getAllProducts);
router.route('/random').get(getRandomProduct);
router.route('/:slug').get(getProductBySlug);

module.exports = router;

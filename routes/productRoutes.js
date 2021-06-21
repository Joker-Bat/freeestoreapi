// 3rd party modules
const express = require('express');
// our modules
const productController = require('../controllers/productController.js');

// Code
const router = express.Router();

// Destructure
const { getAllProducts, getProductBySlug, getRandomProduct, searchProducts } =
  productController;

router.route('/random').get(getRandomProduct);
router.route('/search/:subString').get(searchProducts);
router.route('/:slug').get(getProductBySlug);
router.route('/').get(getAllProducts);

module.exports = router;

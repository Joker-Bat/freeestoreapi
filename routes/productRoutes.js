// 3rd party modules
const express = require('express');
// our modules
const productController = require('../controllers/productController.js');

// Code
const router = express.Router();

// Destructure
const { getAllProducts, getProductBySlug } = productController;

router.route('/').get(getAllProducts);
router.route('/:slug').get(getProductBySlug);

module.exports = router;

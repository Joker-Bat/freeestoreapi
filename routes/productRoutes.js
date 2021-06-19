// 3rd party modules
const express = require('express');

const router = express.Router();

// our modules
const productController = require('../controllers/productController.js');

// Destructure
const { getAllProducts } = productController;

router.route('/').get(getAllProducts);

module.exports = router;

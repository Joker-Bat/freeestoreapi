// 3rd party modules
const express = require('express');
// Our modules
const viewController = require('../controllers/viewController');

// Destructure
const { homePage } = viewController;

const router = express.Router();

router.get('/', homePage);

module.exports = router;

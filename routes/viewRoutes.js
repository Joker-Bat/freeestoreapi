// 3rd party modules
const express = require('express');
// Our modules
const viewController = require('../controllers/viewController');

// Destructure
const { homePage, docsPage } = viewController;

const router = express.Router();

router.get('/', homePage);
router.get('/docs', docsPage);

module.exports = router;

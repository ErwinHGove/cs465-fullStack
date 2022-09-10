const express = require('express');
const router = express.Router();
const controller = require('../controllers/news');

/**
 * GET news home page
 */
router.get('/', controller.news);

module.exports = router;
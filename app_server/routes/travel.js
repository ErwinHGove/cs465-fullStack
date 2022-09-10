const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');
/**
 * GET travel home page
 */
router.get('/', controller.travel);

module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacts');

/**
 * GET contacts home page
 */
router.get('/', controller.contacts);

module.exports = router;
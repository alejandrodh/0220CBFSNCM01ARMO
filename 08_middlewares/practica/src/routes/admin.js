// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const adminController = require('../controllers/adminController');

/* GET - home page. */
router.get('/', rolesMiddleware, adminController.root);

module.exports = router;

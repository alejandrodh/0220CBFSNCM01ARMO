//Homer routes handler
const express = require('express');
const router = express.Router();

//Controlador home
const homeController = require('../controllers/homeController');


router.get('/', homeController.index);

module.exports = router;


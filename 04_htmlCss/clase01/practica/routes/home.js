//Ruteador de home page
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')



//Apuntar las rutas a un controlador
router.get('/', homeController.index);




module.exports = router;
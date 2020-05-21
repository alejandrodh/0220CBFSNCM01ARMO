// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const userController = require('../controllers/userController');

/*** CREATE ONE PRODUCT ***/ 
router.get('/:id', userController.index); /* GET - creamos la ruta para recibir como parámetro el id del usuario */
router.get('/', userController.logout); 


module.exports = router;

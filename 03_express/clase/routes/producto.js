//Manejador de rutas para producto.
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');

router.get('/', productsController.index);

//Ruta con parámetro obligatorio.
router.get('/:pepe', productsController.show);

module.exports = router;
// ************ Require's ************
const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator'); //destructruing
 
// ************ Controller Require ************
const registerController = require('../controllers/registerController');

/*** CREATE ONE PRODUCT ***/ 
router.get('/', registerController.create); /* GET - Form to create */
/* Documentación de validaciones: https://github.com/validatorjs/validator.js#sanitizers*/
router.post('/', [
    check('name')
        .isLength({ min: 2 })
        .withMessage('El campo nombre no puede estar vacío.'),
    check('email')
        .isEmail()
        .withMessage('Por favor ingrese un email valido.'),
    check('password')
        .isLength({min:4})
        .withMessage('La contraseña debe tener al menos 4 caracteres'),
    
],registerController.store); /* POST - Store in DB */


module.exports = router;

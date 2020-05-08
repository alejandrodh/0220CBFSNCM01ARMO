const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/', usersController.create);
router.post('/', usersController.store);
router.get('/users', usersController.index);

module.exports = router;
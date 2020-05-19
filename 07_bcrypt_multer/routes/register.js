const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')
const multer = require('multer');
const path = require('path');

//Multer https://www.npmjs.com/package/multer
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../public/img/avatar')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

//Rutas
router.get('/', registerController.create);
router.post('/', upload.any(), registerController.store);
router.get('/users', registerController.index);

module.exports = router;
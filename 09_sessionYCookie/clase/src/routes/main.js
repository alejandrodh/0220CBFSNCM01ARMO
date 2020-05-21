// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.root); /* GET - home page */
router.get('/search', mainController.search); /* GET - search results */




// ******************* Pruebas de session y coockies **********************
router.get('/probandosession', function(req, res){
    req.session.email = 'gonza@dh.com';
    req.session.name = 'gonza';
    console.log(req.session);
    res.redirect('/');
});
router.get('/haysession', function(req, res){
    res.send('El email del usuario es: ' + req.session.email);
});
router.get('/reconfirmar', function(req, res){
    res.send('El email del usuario en reconfirmando es: ' + req.session.email);
})

router.get('/probandocookies', function (req, res) {
    res.cookie('email', req.session.email, {maxAge:60000});
    res.cookie('username', req.session.name, { maxAge: 60000 } )
    res.redirect('/');
});

router.get('/logout', function(req, res){
    res.cookie('email', '', { maxAge: 0 });
    req.session.destroy();
    res.redirect('/');
})

// **************** Fin pruebas de session y cookie ***************

module.exports = router;

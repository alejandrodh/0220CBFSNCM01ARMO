const express = require('express');
const app = express();
const productRutes = require('./routes/producto');

app.listen(3000, function(){ console.log('running port: 3000')});

app.use('/producto', productRutes);

//Definamos rutas para nuestro proyecto. Rutas fijas.
app.get('/', function(req, res){
    res.send('Hola estamos en la home del sitio.');
})

app.get('/login', function(req, res){
    res.send('Formulario de login.');
})

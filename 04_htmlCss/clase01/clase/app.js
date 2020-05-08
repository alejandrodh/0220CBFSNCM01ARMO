const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');

app.listen(3000, function(){console.log('running on 3000')});

//Settings para view engine
//app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//Definimos que por el momento vamos a entregar html sin view engine. Directo desde public.
//app.use(express.static(__dirname + '/public'));
//Podemos usar path.join si hay problemas de carga.
app.use(express.static(path.join(__dirname, '/public')));

//Rutas
app.use('/', homeRouter);
app.use('/contact', contactRouter);



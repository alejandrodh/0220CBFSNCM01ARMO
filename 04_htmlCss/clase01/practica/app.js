//Entry point
const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/home');  //ruteador de home page


//Levantar servidor
app.listen(3000, function(){console.log('running on 3000');
})

//Settings para view engine
app.set('views', path.join(__dirname, '/views')); //setea la carpeta en donde estarán los archivo de vistas.
app.set('view engine', 'ejs'); //setea en nombre del motor de vistas que vamos a utilizar.


//Definimos que por el momento vamos a entregar html sin view engine. Vamos a entregar directo desde la carpeta public.
app.use(express.static(__dirname + '/public'));


//Rutas
app.use('/', homeRouter);
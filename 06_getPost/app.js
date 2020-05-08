const express = require('express');
const app = express();
const path = require('path'); //Podemos usarlo en el setting de archivos estáticos.
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

//Setting template engine
app.set('view engine', 'ejs');
//Setear la carpeta public para los archivos estaticos Opción 1
app.use(express.static(__dirname + '/public'));

//Setear la carpeta public para los archivos estaticos Opción 2: usando path.join
//app.use(express.static(path.join(__dirname, '/public')));

//Forms --Permiten capturar los datos en req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(3000, function(){
    console.log('Running on 3000');
});


//Rutas
app.use('/', homeRoutes);
app.use('/registro', userRoutes);
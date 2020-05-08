const express = require('express');
const app = express();

//routes handler.
const homeRutes = require('./routes/home');
const heroesRutes = require('./routes/heroes');
const creditosRoutes = require('./routes/creditos');

//arrancar servidor
app.listen(3000, function(){
    console.log('Running on port: 3000'); 
});

// Con arrow function
// app.listen(3000, () => console.log('Running on port: 3000'));

//La ruta apuntará a un manejador de rutas.
app.use('/', homeRutes);
app.use('/heroes', heroesRutes);
// app.use('/creditos', creditosRoutes);
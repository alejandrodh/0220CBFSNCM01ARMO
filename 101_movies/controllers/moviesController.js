const db = require('../database/models/index.js')
const sequelize = db.sequelize;
const Movie = db.Movie;


const moviesController = {
    // index : function(req, res){
    //     // return res.send('llegamos');
    //     sequelize.query('SELECT * FROM movies')
    //         .then(function(results){ //results tiene un array de 2 posiciones. Necesitamos la posición 0.
    //             let moviesAll = results[0];

    //             // return res.send(moviesAll); //Chequeamos que los datos llegan.
    //             return res.render('movies', { moviesAll });
    //         });
    // },
    index: function (req, res) {
        Movie.findAll({
            
        })
         .then(function(results){ //Acá están los resultados directos. No hay un array
            let moviesAll = results; 
            
            return res.render('movies', { moviesAll });
         });
        
        
    },


}

module.exports = moviesController;
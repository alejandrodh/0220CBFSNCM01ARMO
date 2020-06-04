const db = require('../database/models/index'); //traemos la variable db
const sequelize = db.sequelize; //traemos solo la porpiedad que nos sirve.
const Movies = require('../database/models/Movie');
const Op = db.Sequelize.Op;

const moviesController = {
    //Usando raw queries
    // index: function(req, res){
    //    sequelize.query('SELECT * FROM movies') //Ojo que van comillas dobles;
    //         .then(function(results){
    //             let moviesAll = results[0];

    //             return res.render('movies', { moviesAll });
    //         })
        
    // },
    index : function(req, res){
        // const condiciones = {
        //     order: [
        //         ['title', 'ASC'],
        //     ]
        // }
        db.Movies.findAll()
            .then(function(results){
                const moviesAll = results;
                return res.send(moviesAll);
                // return res.render('movies', { moviesAll });
            });
    },
}

module.exports = moviesController;
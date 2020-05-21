const fs = require('fs');
const path = require('path');

function rolesMiddleware(req, res, next){
    let admins = ['Ada', 'Greta', 'Vim','Tim'];
    admins.forEach(function(admin){
        if( req.query.user !== admin ){
            res.send('Usted no puede ingresar');
        } 
    });
    next();
}

module.exports = rolesMiddleware;
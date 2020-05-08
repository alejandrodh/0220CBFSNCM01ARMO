//Controlador de home
const path = require('path');

const homeController = {
    index : function(req, res){
        //res.send('Estamos en home');
        res.sendFile(path.join(__dirname, '/../controllers/index.html'));
         
    }
}

module.exports = homeController;
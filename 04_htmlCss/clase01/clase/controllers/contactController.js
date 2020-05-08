//Controlador de home
const path = require('path');

const contactController = {
    index : function(req, res){
        //res.send('Estamos en home');
        res.sendFile(path.join(__dirname, '/../public/contact.html'));
         
    }
}

module.exports = contactController;
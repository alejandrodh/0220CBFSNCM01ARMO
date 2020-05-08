// Controlador de home page

const homeController = {
    index : function(req, res){
        //res.send('Estamos en home page'); Esto envia texto.
        res.render('index'); 
    }
}


module.exports = homeController;
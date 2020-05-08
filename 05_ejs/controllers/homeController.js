const homeController = {
    index : function(req, res){
        let vac = {
            title : 'home',
            description : 'Home de mi sitio web',
            saludo : 'Hola Ale.'
        }

        res.render('index', vac);
    }
}

module.exports = homeController;